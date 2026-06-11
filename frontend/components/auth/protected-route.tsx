"use client"

import { useAuth } from "@/context/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

export function ProtectedRoute({ 
  children, 
  requiredRole 
}: { 
  children: React.ReactNode
  requiredRole?: string
}) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=${pathname}`)
    }

    if (!loading && user && requiredRole && user.role !== requiredRole) {
      // If user is not admin but trying to access admin, redirect to dashboard
      if (user.role !== 'admin' && pathname.startsWith('/admin')) {
        router.push('/dashboard')
      }
    }
  }, [user, loading, router, pathname, requiredRole])

  if (loading) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    )
  }

  if (!user) return null

  if (requiredRole && user.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
