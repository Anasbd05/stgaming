import {SidebarInset,SidebarProvider,SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="w-fit flex items-center gap-2 my-4 px-4">
                    <SidebarTrigger className="-ml-1" />
                </div>
                <main className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
