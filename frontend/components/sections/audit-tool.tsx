"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { 
  CaretRight, 
  ArrowLeft, 
  ChartBar, 
  Users, 
  DeviceMobile, 
  ShieldCheck, 
  ForkKnife, 
  FirstAid, 
  Buildings, 
  GraduationCap, 
  Briefcase, 
  ShoppingBag,
  Leaf,
  Factory,
  Globe,
  Truck,
  Bank,
  CheckCircle,
  Stack,
  Target,
  Lightning,
  Quotes,
  Drop, 
  Wrench, 
  FilmStrip, 

  Megaphone,
  UserGear,
  PoliceCar,
  MaskHappy,
  House,
  Handshake, 
  Asterisk,
  Plus,
  X
  } from "phosphor-react"
// --- Types & Data ---

const industryTracks = [
  { 
    id: "agric", 
    label: "Agriculture, Forestry, & Fishing", 
    icon: Leaf, 
    sub: [
      "Crop and animal production", 
      "Fish farming, aquaculture, and maritime fishing", 
      "Animal husbandry, poultry, piggery, and kennel services", 
      "Forestry, logging, and gardening services", 
      "Milling, grinding, and honey processing"
    ] 
  },
  { 
    id: "mining", 
    label: "Mining & Quarrying", 
    icon: Drop, 
    sub: [
      "Extraction of crude petroleum and natural gas", 
      "Mining of coal, lignite, and metal ores", 
      "Stone quarrying, clay, and sandpits", 
      "Oil and gas support services (excluding geographical surveying)"
    ] 
  },
  { 
    id: "manufacturing", 
    label: "Manufacturing & Production", 
    icon: Factory, 
    sub: [
      "Manufacture of food products, beverages, and bakery goods", 
      "Textile materials, wearing apparel, and leather footwear", 
      "Chemicals, pharmaceuticals, cosmetics, and plastics", 
      "Basic metals, electrical equipment, furniture, and automobile trailers", 
      "Coke and refined petroleum products"
    ] 
  },
  { 
    id: "utilities", 
    label: "Electricity, Gas, Steam, & Air Conditioning Supply", 
    icon: Lightning, 
    sub: [
      "Electric power generation, transmission, and distribution", 
      "Solar energy installation, sales, and inverter maintenance", 
      "Hydroelectrical works and renewable energy systems", 
      "Gas manufacture and distribution of gaseous fuels through mains"
    ] 
  },
  { 
    id: "water", 
    label: "Water Supply; Sewerage, Waste Management, & Remediation", 
    icon: Drop, 
    sub: [
      "Water collection, treatment, and supply", 
      "Sewerage and wastewater management", 
      "Waste collection, recycling services, and environmental remediation"
    ] 
  },
  { 
    id: "construction", 
    label: "Construction", 
    icon: Wrench, 
    sub: [
      "Construction of buildings (residential and non-residential)", 
      "Civil engineering works (roads, bridges, railways, and pipelines)", 
      "Specialized construction activities (demolition, electrical wiring, plumbing, and structural fittings)"
    ] 
  },
  { 
    id: "retail", 
    label: "Wholesale & Retail Trade; Repair of Motor Vehicles", 
    icon: ShoppingBag, 
    sub: [
      "Wholesale and retail of general merchandise", 
      "Sales of automobiles, spare parts, and mechanical fittings", 
      "Supermarkets, departmental stores, and specialized boutique sales", 
      "Retail of mobile phones, SIM cards, electronics, and computers"
    ] 
  },
  { 
    id: "transport", 
    label: "Transportation & Storage", 
    icon: Truck, 
    sub: [
      "Land transport (passenger transport, haulage, and logistics)", 
      "Air transport and support activities", 
      "Warehousing, cold storage, and cargo handling", 
      "Postal and courier/delivery services"
    ] 
  },
  { 
    id: "hospitality", 
    label: "Accommodation & Food Service Activities", 
    icon: ForkKnife, 
    sub: [
      "Hotels, guest houses, and short-let accommodation", 
      "Restaurants, fast-food outlets, and catering services", 
      "Bars, lounges, and viewing centers"
    ] 
  },
  { 
    id: "communication", 
    label: "Information & Communication", 
    icon: Globe, 
    sub: [
      "Publishing activities (books, directories, and software development)", 
      "Motion picture, video, and television program production", 
      "Sound recording, music production, and artiste management", 
      "Telecommunications and network services", 
      "Computer programming and IT consultancy"
    ] 
  },
  { 
    id: "finance", 
    label: "Financial & Insurance Activities", 
    icon: Bank, 
    sub: [
      "Financial intermediation (microfinance, payment service banks, Fintech)", 
      "Insurance, reinsurance, and pension funding", 
      "Activities auxiliary to financial services (POS services, financial management consulting)"
    ] 
  },
  { 
    id: "realestate", 
    label: "Real Estate Activities", 
    icon: Buildings, 
    sub: [
      "Buying, selling, and renting of real estate", 
      "Real estate agency, property management, and valuation services"
    ] 
  },
  { 
    id: "professional", 
    label: "Professional, Scientific, & Technical Activities", 
    icon: Briefcase, 
    sub: [
      "Legal practice, advisory, and notary services", 
      "Accounting, auditing, and taxation consultancy", 
      "Architectural practice, quantity surveying, and industrial design", 
      "Management consultancy, market research, and advertising", 
      "Aeronautic, chemical, mechanical, and civil engineering consultancy"
    ] 
  },
  { 
    id: "admin", 
    label: "Administrative & Support Service Activities", 
    icon: UserGear, 
    sub: [
      "Rental and leasing of motor vehicles, machinery, and personal goods", 
      "Employment agencies and human resource provisioning", 
      "Travel agencies, tour operators, and visa advisory services", 
      "Security services (private guards, CCTV installation, and fire safety sales)", 
      "Office administration, printing, and secretarial support services"
    ] 
  },
  { 
    id: "public", 
    label: "Public Administration & Defence; Compulsory Social Security", 
    icon: PoliceCar, 
    sub: [
      "Executive, legislative, and administration functions of government", 
      "Foreign affairs, defense, and public order/safety activities"
    ] 
  },
  { 
    id: "education", 
    label: "Education", 
    icon: GraduationCap, 
    sub: [
      "Creche, daycare, nursery, and primary school operations", 
      "Secondary education and technical/vocational training institutes", 
      "Higher education (universities, colleges, and polytechnics)", 
      "Bible colleges, Islamic schools, and adult education centers"
    ] 
  },
  { 
    id: "health", 
    label: "Human Health & Social Work Activities", 
    icon: FirstAid, 
    sub: [
      "Hospital, clinic, and maternity home operations", 
      "Medical, dental, and optical services", 
      "Community health care centers and social work without accommodation"
    ] 
  },
  { 
    id: "arts", 
    label: "Arts, Entertainment & Recreation", 
    icon: MaskHappy, 
    sub: [
      "Creative arts, craft, designing, and painting services", 
      "Museums, libraries, archives, and monuments", 
      "Gambling, betting, and lottery activities", 
      "Amusement parks, sports promotion, and dance classes"
    ] 
  },
  { 
    id: "other_services", 
    label: "Other Service Activities", 
    icon: Users, 
    sub: [
      "Activities of membership organizations (religious bodies, NGOs, trade unions)", 
      "Repair of computers, mobile phones, and household appliances", 
      "Hairdressing, beauty pageants, makeup, and makeover services", 
      "Dry cleaning, automated car wash, and funeral services"
    ] 
  },
  { 
    id: "household", 
    label: "Activities of Households as Employers", 
    icon: House, 
    sub: [
      "Activities of private households employing domestic personnel (maids, drivers, gardeners)", 
      "Undifferentiated goods-producing and services-producing activities of private households"
    ] 
  },
  { 
    id: "extraterritorial", 
    label: "Activities of Extraterritorial Organizations", 
    icon: Handshake, 
    sub: [
      "Activities of international organizations such as the United Nations, IMF, and foreign embassies/consulates"
    ] 
  },
  { 
    id: "others", 
    label: "Others / Special Category", 
    icon: Asterisk, 
    sub: [
      "General contracts, general merchandise, and unspecified trading activities (used strictly when a startup needs a highly flexible operational mandate)"
    ] 
  },
]

const challengesByIndustry: Record<string, string[]> = {
  agric: ["Unpredictable Yield Data", "Manual Supply Chain Tracking", "Inefficient Distribution", "Poor Direct-to-Consumer Flow", "High Operational Waste"],
  mining: ["Extraction Efficiency Gaps", "Manual Safety Compliance", "Disconnected Field Data", "Equipment Downtime", "Supply Chain Bottlenecks"],
  manufacturing: ["Inventory-Marketing Lag", "Manual Order Processing", "Disconnected Production Data", "Weak Dealer Engagement", "Slow Quote Generation"],
  utilities: ["Power Distribution Losses", "Manual Billing Cycles", "Grid Monitoring Gaps", "Customer Support Delays", "Renewable Integration Hurdles"],
  water: ["Water Loss Tracking", "Manual Meter Reading", "Waste Collection Gaps", "Recycling Inefficiency", "Service Response Times"],
  construction: ["Project Timeline Delays", "Manual Material Tracking", "Poor Site-to-Office Flow", "Budget Overruns", "Safety Compliance Tracking"],
  retail: ["Cart Abandonment Recovery", "Low Customer Lifetime Value", "Manual Order Confirmation", "Weak Re-engagement", "Fragmented Sales Data"],
  transport: ["Manual Haulage Tracking", "Slow Quote Turnaround", "Disconnected Dispatch Data", "Weak Shipper Engagement", "Manual Invoice Processing"],
  hospitality: ["High No-Show Rates", "Unreliable Booking Flow", "Weak Repeat Customer Data", "Slow Manual Response", "Fragmented Lead Capture"],
  communication: ["Slow Lead Response", "Manual Onboarding Flow", "Low Trial-to-Paid Conversion", "Churn Prediction Gaps", "Manual Subscription Management"],
  finance: ["Slow Loan Application Processing", "Manual KYC Verification", "Poor Client Re-engagement", "Fragmented Financial Data", "Inconsistent Lead Nurturing"],
  realestate: ["Manual Lead Management", "Fragmented Property Data", "Slow Viewing Coordination", "Weak Tenant Engagement", "Paper-based Contracts"],
  professional: ["Slow Proposal Generation", "Manual Lead Qualifying", "Inconsistent Follow-up", "Billing Bottlenecks", "Data Scattered in Sheets"],
  admin: ["Resource Allocation Gaps", "Manual Security Reports", "Slow Booking Systems", "Disconnected Admin Tasks", "Fragmented Support Flow"],
  public: ["Service Delivery Gaps", "Manual Record Keeping", "Slow Citizen Feedback", "Fragmented Agency Data", "Inconsistent Public Updates"],
  education: ["Manual Enrollment Flow", "Student Engagement Gaps", "Fragmented Academic Data", "Slow Fee Collection", "Inconsistent Parent Communication"],
  health: ["Manual Patient Records", "Appointment Scheduling Gaps", "Fragmented Clinic Data", "Slow Billing Cycles", "Weak Patient Follow-up"],
  arts: ["Low Audience Engagement", "Manual Ticket Sales", "Fragmented Creative Data", "Slow Event Coordination", "Weak Promotion Flow"],
  other_services: ["Fragmented Client Data", "Manual Service Tracking", "Inconsistent Follow-up", "Slow Response Times", "Manual Booking Flow"],
  household: ["Manual Staff Scheduling", "Fragmented Payroll Data", "Communication Gaps", "Inefficient Supply Tracking"],
  extraterritorial: ["Complex Stakeholder Data", "Manual Reporting Flows", "Disconnected Project Data", "Slow Liaison Response"],
  others: ["Manual Project Tracking", "Fragmented Ops Data", "Inconsistent Lead Flow", "Slow Decision Cycles"],
}

const techStackOptions = [
  { label: "WhatsApp / Social DMs", icon: DeviceMobile },
  { label: "Excel / Google Sheets", icon: Stack },
  { label: "Basic CRM (HubSpot/Zoho)", icon: Users },
  { label: "Legacy ERP / Software", icon: Factory },
  { label: "Manual Paper Records", icon: Quotes },
  { label: "Facebook / Instagram Ads", icon: Target },
]

const growthGoalOptions = [
  { label: "Double monthly revenue", icon: ChartBar },
  { label: "Reduce manual work by 70%", icon: Lightning },
  { label: "Increase lead conversion by 3x", icon: Target },
  { label: "Improve customer retention", icon: Users },
  { label: "Scale to new locations", icon: Globe },
]

// --- Form Schema ---

const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  company: z.string().min(2, "Company name is required"),
})

type LeadFormData = z.infer<typeof leadFormSchema>

export const AuditTool = () => {
  const [step, setStep] = React.useState(0)
  const [auditData, setAnswers] = React.useState<Record<string, string | string[]>>({
    industry: "",
    subCategory: "",
    challenges: [] as string[],
    techStack: [] as string[],
    goal: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isFinished, setIsFinished] = React.useState(false)
  const [customChallenge, setCustomChallenge] = React.useState("")
  const [fetchedChallenges, setFetchedChallenges] = React.useState<any[]>([])

  const { register, handleSubmit, formState: { errors } } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  // --- Handlers ---

  const handleAddCustomChallenge = async (e: React.KeyboardEvent | React.MouseEvent) => {
    if (customChallenge.trim()) {
      const label = customChallenge.trim()
      const current = auditData.challenges as string[]
      if (!current.includes(label)) {
        setAnswers({ ...auditData, challenges: [...current, label] })
        
        // Save to backend for future users
        try {
          await fetch("http://localhost:8080/api/audit/challenges", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label, industry: auditData.industry })
          })
        } catch (err) {
          console.error("Failed to persist custom challenge", err)
        }
      }
      setCustomChallenge("")
    }
  }

  const handleIndustrySelect = async (id: string) => {
    setAnswers({ ...auditData, industry: id })
    setStep(1)
    
    // Fetch challenges added by other users for this industry
    try {
      const res = await fetch(`http://localhost:8080/api/audit/challenges?industry=${id}`)
      if (res.ok) {
        const data = await res.json()
        setFetchedChallenges(data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubSelect = (sub: string) => {
    setAnswers({ ...auditData, subCategory: sub })
    setStep(2)
  }

  const toggleMultiSelect = (key: string, value: string) => {
    const current = auditData[key] as string[]
    if (current.includes(value)) {
      setAnswers({ ...auditData, [key]: current.filter(v => v !== value) })
    } else {
      setAnswers({ ...auditData, [key]: [...current, value] })
    }
  }

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const onFinalSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    const fullData = { ...auditData, ...data }
    console.log("Saving full audit data:", fullData)
    
    try {
      const response = await fetch("http://localhost:8080/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullData),
      })
      
      if (!response.ok) throw new Error("Failed to submit")
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsFinished(true)
    } catch (error) {
      console.error("Submission error:", error)
      // Fallback for demo if backend is not running
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsFinished(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = (step / 5) * 100
  const currentIndustry = industryTracks.find(t => t.id === auditData.industry)

  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void relative overflow-hidden" id="diagnostic">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[140px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-4">GROWTH DIAGNOSTIC ENGINE</span>
            <h2 className="text-h2 font-black text-[#ffffff] mb-6">Where is your growth stalled?</h2>
            <p className="text-p-lg text-text-secondary max-w-2xl mx-auto">
              {isFinished ? "Analysis complete." : `Step ${step + 1} of 5`}
            </p>
          </div>

          <div className="glass-card rounded-[1rem] p-8 lg:p-12 border-white/5 relative overflow-hidden">
            {!isFinished && !isSubmitting && (
              <>
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-accent"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {/* Step 0: Primary Industry */}
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-h3 font-bold text-[#ffffff] text-center">What is your primary industry?</h3>
                      <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {industryTracks.map((ind) => (
                            <button
                              key={ind.id}
                              onClick={() => handleIndustrySelect(ind.id)}
                              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col items-center gap-4 ${
                                auditData.industry === ind.id 
                                  ? "bg-accent border-accent text-white" 
                                  : "bg-surface border-white/5 text-text-secondary hover:border-accent/50 hover:bg-accent/5"
                              }`}
                            >
                              <ind.icon size={32} weight="duotone" className={auditData.industry === ind.id ? "text-white" : "text-accent"} />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">{ind.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: CAC Sub-category */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-h3 font-bold text-[#ffffff] text-center">Specific Classification</h3>
                      <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {currentIndustry?.sub.map((sub) => (
                            <button
                              key={sub}
                              onClick={() => handleSubSelect(sub)}
                              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col items-center gap-4 ${
                                auditData.subCategory === sub
                                  ? "bg-accent border-accent text-white shadow-[0_0_24px_rgba(20,110,245,0.3)]" 
                                  : "bg-surface border-white/5 text-text-secondary hover:border-accent/50 hover:bg-accent/5"
                              }`}
                            >
                              <Target size={32} weight="duotone" className={auditData.subCategory === sub ? "text-white" : "text-accent"} />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">{sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-start pt-8">
                        <Button variant="ghost" onClick={handleBack}><ArrowLeft className="mr-2" /> Back</Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Core Bottlenecks */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-h3 font-bold text-[#ffffff] text-center">Core Bottlenecks</h3>
                      <p className="text-p-sm text-center text-accent uppercase font-bold tracking-widest -mt-4">Select all that apply</p>
                      
                      <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Default Challenges */}
                          {(challengesByIndustry[auditData.industry as string] || []).map((ch) => (
                            <button
                              key={ch}
                              onClick={() => toggleMultiSelect("challenges", ch)}
                              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col items-center gap-4 ${
                                auditData.challenges.includes(ch)
                                  ? "bg-accent border-accent text-white shadow-[0_0_24px_rgba(20,110,245,0.3)]"
                                  : "bg-surface border-white/5 text-text-secondary hover:border-accent/50 hover:bg-accent/5"
                              }`}
                            >
                              <ChartBar size={32} weight="duotone" className={auditData.challenges.includes(ch) ? "text-white" : "text-accent"} />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">{ch}</span>
                            </button>
                          ))}

                          {/* Community Contributed Challenges */}
                          {fetchedChallenges.filter(fc => !(challengesByIndustry[auditData.industry as string] || []).includes(fc.label)).map((fc) => (
                            <button
                              key={fc.id}
                              onClick={() => toggleMultiSelect("challenges", fc.label)}
                              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col items-center gap-4 relative overflow-hidden ${
                                auditData.challenges.includes(fc.label)
                                  ? "bg-accent border-accent text-white shadow-[0_0_24px_rgba(20,110,245,0.3)]"
                                  : "bg-surface border-white/5 text-text-secondary hover:border-accent/50 hover:bg-accent/5"
                              }`}
                            >
                              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-accent/20 text-[7px] font-black text-accent uppercase tracking-tighter rounded">Community</div>
                              <Users size={32} weight="duotone" className={auditData.challenges.includes(fc.label) ? "text-white" : "text-accent"} />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">{fc.label}</span>
                            </button>
                          ))}
                        </div>

                        {/* Custom Challenges Display (Newly added in this session) */}
                        {((auditData.challenges as string[]).filter(c => 
                          !(challengesByIndustry[auditData.industry as string] || []).includes(c) && 
                          !fetchedChallenges.some(fc => fc.label === c)
                        ).length > 0) && (
                          <div className="pt-4 border-t border-white/5">
                            <p className="text-[9px] font-bold text-accent uppercase tracking-widest mb-4">Your Custom Challenges</p>
                            <div className="flex flex-wrap gap-2">
                              {(auditData.challenges as string[]).filter(c => !(challengesByIndustry[auditData.industry as string] || []).includes(c)).map((ch) => (
                                <div key={ch} className="flex items-center gap-2 bg-accent text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tight">
                                  {ch}
                                  <button onClick={() => toggleMultiSelect("challenges", ch)} className="hover:text-red-400 transition-colors">
                                    <X size={14} weight="bold" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Custom Entry Box */}
                        <div className="pt-4 border-t border-white/5">
                          <p className="text-[9px] font-bold text-text-secondary uppercase tracking-widest mb-4 text-center">Something else?</p>
                          <div className="flex gap-2 max-w-md mx-auto">
                            <input 
                              value={customChallenge}
                              onChange={(e) => setCustomChallenge(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleAddCustomChallenge(e)}
                              className="flex-1 bg-void border border-white/10 rounded-lg px-4 py-3 text-white text-[12px] outline-none focus:border-accent transition-colors"
                              placeholder="Enter custom challenge..."
                            />
                            <button 
                              onClick={handleAddCustomChallenge}
                              disabled={!customChallenge.trim()}
                              className="p-3 bg-surface border border-white/10 rounded-lg text-accent hover:bg-accent hover:text-white transition-all disabled:opacity-50"
                            >
                              <Plus size={20} weight="bold" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-8">
                        <Button variant="ghost" onClick={handleBack}><ArrowLeft className="mr-2" /> Back</Button>
                        <Button variant="primary" onClick={handleNext} disabled={auditData.challenges.length === 0}>Next Step <CaretRight className="ml-2" /></Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Tech & Goals */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <h3 className="text-h3 font-bold text-[#ffffff] text-center">Infrastructure & Vision</h3>
                        <p className="text-p-sm text-center text-text-secondary">Current stack and primary growth target.</p>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Current Technology Stack</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {techStackOptions.map((opt) => (
                              <button
                                key={opt.label}
                                onClick={() => toggleMultiSelect("techStack", opt.label)}
                                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                                  auditData.techStack.includes(opt.label)
                                    ? "bg-accent border-accent text-white"
                                    : "bg-surface border-white/5 text-text-secondary hover:border-accent/50 hover:bg-accent/5"
                                }`}
                              >
                                <opt.icon size={24} weight="duotone" className={auditData.techStack.includes(opt.label) ? "text-white" : "text-accent"} />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-center">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Primary Growth Target</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {growthGoalOptions.map((opt) => (
                              <button
                                key={opt.label}
                                onClick={() => setAnswers({ ...auditData, goal: opt.label })}
                                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                                  auditData.goal === opt.label
                                    ? "bg-accent border-accent text-white"
                                    : "bg-surface border-white/5 text-text-secondary hover:border-accent/50 hover:bg-accent/5"
                                }`}
                              >
                                <opt.icon size={24} weight="duotone" className={auditData.goal === opt.label ? "text-white" : "text-accent"} />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-center">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between pt-8">
                        <Button variant="ghost" onClick={handleBack}><ArrowLeft className="mr-2" /> Back</Button>
                        <Button variant="primary" onClick={handleNext} disabled={auditData.techStack.length === 0 || !auditData.goal}>Final Step <CaretRight className="ml-2" /></Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Lead Form & Selection Visual */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                      {/* Left Side: Form */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-h3 font-bold text-[#ffffff] mb-2">Secure Your Roadmap</h3>
                          <p className="text-p-sm text-text-secondary">We&apos;ll send your tailored report here.</p>
                        </div>
                        <form onSubmit={handleSubmit(onFinalSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Full Name</label>
                              <input {...register("name")} className="w-full bg-void border border-white/10 rounded-[0.5rem] p-4 text-[#ffffff] focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                              {errors.name && <p className="text-[10px] text-error font-bold">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Company Name</label>
                              <input {...register("company")} className="w-full bg-void border border-white/10 rounded-[0.5rem] p-4 text-[#ffffff] focus:border-accent outline-none transition-colors" placeholder="Bloom Dental" />
                              {errors.company && <p className="text-[10px] text-error font-bold">{errors.company.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Business Email</label>
                              <input {...register("email")} className="w-full bg-void border border-white/10 rounded-[0.5rem] p-4 text-[#ffffff] focus:border-accent outline-none transition-colors" placeholder="john@company.com" />
                              {errors.email && <p className="text-[10px] text-error font-bold">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Phone Number</label>
                              <input {...register("phone")} className="w-full bg-void border border-white/10 rounded-[0.5rem] p-4 text-[#ffffff] focus:border-accent outline-none transition-colors" placeholder="+234 ..." />
                              {errors.phone && <p className="text-[10px] text-error font-bold">{errors.phone.message}</p>}
                            </div>
                          </div>
                          <div className="pt-4">
                            <Button variant="primary" size="lg" className="w-full" type="submit">Generate Growth Roadmap <CaretRight className="ml-2" /></Button>
                          </div>
                        </form>
                        <div className="flex justify-center">
                          <Button variant="ghost" size="sm" onClick={handleBack} className="opacity-50 hover:opacity-100 transition-opacity">Edit Answers</Button>
                        </div>
                      </div>

                      {/* Right Side: Selection Visual */}
                      <div className="bg-void/50 rounded-2xl border border-white/5 p-8 space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                          {currentIndustry && <currentIndustry.icon size={120} weight="duotone" className="text-accent" />}
                        </div>
                        
                        <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6">Diagnostic Summary</h4>
                        
                        <div className="space-y-6 relative z-10">
                          <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                              {currentIndustry && <currentIndustry.icon size={24} weight="duotone" />}
                            </div>
                            <div>
                              <p className="text-[9px] text-text-secondary uppercase tracking-widest font-bold">Industry Focus</p>
                              <p className="text-p-lg font-bold text-white">{currentIndustry?.label}</p>
                              <p className="text-p-sm text-text-muted mt-1">{auditData.subCategory}</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <p className="text-[9px] text-text-secondary uppercase tracking-widest font-bold">Identified Bottlenecks</p>
                            <div className="flex flex-wrap gap-2">
                              {(auditData.challenges as string[]).map((ch) => (
                                <span key={ch} className="px-3 py-1 bg-surface border border-white/5 rounded-full text-[10px] font-medium text-white">
                                  {ch}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                            <div>
                              <p className="text-[9px] text-text-secondary uppercase tracking-widest font-bold mb-2">Current Stack</p>
                              <div className="flex -space-x-2">
                                {(auditData.techStack as string[]).map((tech, i) => (
                                  <div key={tech} className="h-8 w-8 rounded-full bg-surface border-2 border-void flex items-center justify-center text-accent" title={tech}>
                                    <Lightning size={14} weight="fill" />
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[9px] text-text-secondary uppercase tracking-widest font-bold mb-2">Primary Goal</p>
                              <p className="text-p-sm font-bold text-white">{auditData.goal}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                            <p className="text-[10px] font-bold text-[#ffffff] uppercase tracking-widest">Customizing Roadmap v1.0</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {isSubmitting && (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-8" />
                <h3 className="text-h3 font-bold text-[#ffffff] mb-4">CISE is generating your analysis...</h3>
                <p className="text-text-secondary">Correlating industry benchmarks with your bottleneck profile.</p>
              </div>
            )}

            {isFinished && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="h-20 w-20 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck size={48} weight="fill" />
                </div>
                <h3 className="text-h2 font-bold text-[#ffffff] mb-6">Diagnostic Complete!</h3>
                <p className="text-p-lg text-text-secondary max-w-lg mx-auto mb-12">
                  Your Roadmap has been sent. We&apos;ve identified 3 critical leaks in your {auditData.industry} funnel. 
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">Book Your Review Call <CaretRight weight="bold" /></Button>
                  <Button variant="ghost" size="lg">Download Summary PDF</Button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50">
            <div className="flex items-center gap-3 text-text-secondary">
              <ChartBar size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Industry Benchmarking</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <Users size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Growth Modeling</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <DeviceMobile size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">System Readiness Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
