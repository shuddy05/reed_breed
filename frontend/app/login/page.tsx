"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function LoginPage() {
  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      await login(data)
    } catch (err) {
      alert("Login failed. Please check your credentials.")
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-void flex items-center justify-center">
        <div className="glass-card w-full max-w-md p-8 rounded-2xl border-white/5">
          <h1 className="text-h3 font-black text-white mb-6">Portal Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase">Email</label>
              <input {...register("email")} className="w-full bg-void border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none" placeholder="admin@reedbreed.com" />
              {errors.email && <p className="text-error text-[10px]">{errors.email.message as string}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase">Password</label>
              <input {...register("password")} type="password" className="w-full bg-void border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none" placeholder="••••••••" />
              {errors.password && <p className="text-error text-[10px]">{errors.password.message as string}</p>}
            </div>
            <Button className="w-full" size="lg" type="submit">Enter Dashboard</Button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
