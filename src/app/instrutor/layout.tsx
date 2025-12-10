import { InstructorSidebar } from "@/components/instrutor/InstructorSidebar";

export default function InstructorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-secondary instructor-theme">
            <InstructorSidebar />
            <div className="lg:pl-64">
                {/* Mobile header spacing */}
                <div className="h-14 lg:h-0" />
                <main className="p-4 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
