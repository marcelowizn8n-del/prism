import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function MainLayout() {
    return (
        <div className="flex h-screen w-full bg-background text-foreground overflow-hidden font-sans">
            <Sidebar />

            <main className="flex flex-1 flex-col overflow-hidden relative">
                {/* Global Topbar Layout (absolute overlay or flex header - using flex to push content down gracefully) */}
                <header className="flex w-full items-center justify-between px-8 py-6 flex-shrink-0 z-10">
                    {/* Left Header Area (Title injected per page or global) */}
                    <div id="page-header-slot"></div>

                    {/* Right Header Area */}
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase">AI Online</span>
                        </div>

                        {/* User Avatar Placeholder */}
                        <div className="h-10 w-10 rounded-full bg-white/10 ring-2 ring-white/5 overflow-hidden flex items-center justify-center">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Marcelo&backgroundColor=transparent" alt="User Avatar" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto px-8 pb-8">
                    <div className="mx-auto w-full h-full">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
