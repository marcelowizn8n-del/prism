import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function MainLayout() {
    return (
        <div className="flex h-screen bg-black text-white selection:bg-violet-500/30">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-4 md:p-8">
                <div className="mx-auto max-w-6xl">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
