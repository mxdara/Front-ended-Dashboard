import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
    <>    
      <Navbar />
        <div className="flex">
        <SidebarProvider>
          <AppSidebar />
            <SidebarTrigger />
            <main className="px-4 py-8 flex flex-col items-center w-full">
              {children}
              <Toaster />
            </main>
        </SidebarProvider>
        </div>
    </>
    )
  }