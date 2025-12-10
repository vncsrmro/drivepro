import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#111827] admin-theme">
            <AdminSidebar />
            <div className="lg:pl-64">
                {/* Mobile header spacing */}
                <div className="h-14 lg:h-0" />
                <main className="p-4 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
