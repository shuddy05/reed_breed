import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PaginatedWorkGallery } from "@/components/sections/paginated-work-gallery"
import { getWorks } from "@/lib/get-works"
import { WorkContent } from "./work-content"

export default async function WorkPage() {
  const works = await getWorks();

  return (
    <>
      <Navbar />
      <main className="relative bg-void overflow-hidden">
        {/* Fixed Background Elements (Homepage Style) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[60%] h-[60%] bg-accent-dim/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[60%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-repeat" />
        </div>

        <WorkContent />

        <PaginatedWorkGallery works={works} />
      </main>
      <Footer />
    </>
  )
}
