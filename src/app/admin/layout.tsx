import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-primary/30">
            <AdminSidebar />
            <div className="lg:pl-72 min-h-screen flex flex-col">
                <AdminHeader />
                <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
