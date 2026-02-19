import { Home, BarChart2, Settings, LogOut, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const navigation = [
    { name: "Início", href: "/", icon: Home },
    { name: "Análise", href: "/analytics", icon: BarChart2 },
    { name: "IA", href: "/ai", icon: Sparkles },
    { name: "Ajustes", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <div className="flex h-screen w-20 flex-col items-center justify-between border-r border-white/5 bg-zinc-950/50 py-6 backdrop-blur-xl md:w-64 md:items-stretch md:px-4">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center gap-2 md:justify-start md:px-2">
                    <img src="/logo.png" alt="Prism Logo" className="h-32 w-auto" />
                </div>

                <nav className="flex flex-col gap-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-300 md:px-3 md:py-3",
                                    isActive
                                        ? "bg-white/10 text-white shadow-sm ring-1 ring-white/10"
                                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon className={cn("h-5 w-5", isActive ? "text-violet-400" : "")} />
                                <span className="hidden md:inline-block">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                <button className="flex w-full items-center justify-center gap-3 rounded-xl p-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-red-500/10 hover:text-red-400 md:justify-start">
                    <LogOut className="h-5 w-5" />
                    <span className="hidden md:inline-block">Sair</span>
                </button>
            </div>
        </div>
    );
}
