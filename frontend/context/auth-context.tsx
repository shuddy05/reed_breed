"use client"

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  role: 'ADMIN' | 'CLIENT'
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (credentials: any) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProviderInternal = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/auth/me')
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        }
      } catch (err) {
        console.error('Auth check failed', err)
      } finally {
        setLoading(false)
      }
    }
    checkUser()
  }, [])

  const login = async (credentials: any) => {
    const res = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    if (res.ok) {
      const meRes = await fetch('http://localhost:8080/api/auth/me')
      if (meRes.ok) {
        const userData = await meRes.json()
        setUser(userData)
        const redirectTo = searchParams.get('redirect') || '/dashboard'
        router.push(redirectTo)
      }
    } else {
      throw new Error('Login failed')
    }
  }

  const logout = async () => {
    await fetch('http://localhost:8080/api/auth/logout', { method: 'POST' })
    setUser(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <AuthProviderInternal>
      {children}
    </AuthProviderInternal>
  </Suspense>
)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
