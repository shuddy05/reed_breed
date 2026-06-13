"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { CreditCard, ShieldCheck, Receipt } from "phosphor-react"

export default function PaymentPage() {
  const { id } = useParams()
  const { user, loading } = useAuth()
  const router = useRouter()
  const [invoice, setInvoice] = React.useState<any>(null)
  const [isProcessing, setIsProcessing] = React.useState(false)

  React.useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=/payment/${id}`)
      return
    }

    const fetchInvoice = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/client/invoice?id=${id}`)
        if (res.ok) {
          const data = await res.json()
          setInvoice(data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    if (user) {
      fetchInvoice()
    }
  }, [id, user, loading, router])

  const handlePay = async () => {
    setIsProcessing(true)
    // Simulate Paystack Inline logic
    // In a real app, you'd load the script and call PaystackPop.setup(...)
    
    // Simulate successful payment callback
    setTimeout(async () => {
      try {
        await fetch("http://localhost:8080/api/webhooks/paystack", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "charge.success",
            data: {
              reference: "T" + Math.random().toString(36).substring(7).toUpperCase(),
              metadata: { invoice_id: id }
            }
          })
        })
        router.push("/dashboard")
      } catch (err) {
        console.error("Fulfillment failed", err)
      } finally {
        setIsProcessing(false)
      }
    }, 2000)
  }

  if (loading || !invoice) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-white animate-pulse">Initializing Secure Checkout...</div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-void flex items-center justify-center px-6">
        <div className="glass-card w-full max-w-xl p-8 lg:p-12 rounded-2xl border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Receipt size={160} weight="duotone" className="text-accent" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <CreditCard weight="duotone" />
              </div>
              <h1 className="text-h3 font-black text-white">Complete Your Subscription</h1>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-end border-b border-white/5 pb-6">
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Selected Plan</p>
                  <p className="text-p-lg font-bold text-white uppercase">{invoice.plan}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Total Due</p>
                  <p className="text-h3 font-black text-accent">₦{(invoice.amount / 100).toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-surface/30 rounded-xl p-6 space-y-4">
                <div className="flex justify-between text-[12px]">
                  <span className="text-text-secondary">Billed to</span>
                  <span className="text-white font-bold">{user?.name}</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-text-secondary">Email</span>
                  <span className="text-white font-bold">{user?.email}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                className="w-full h-16 text-lg gap-3" 
                onClick={handlePay}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>Pay Now with Paystack <CreditCard weight="bold" /></>
                )}
              </Button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-text-muted uppercase font-bold tracking-widest">
                <ShieldCheck className="text-success" /> Secured by Paystack & Reed Breed
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
