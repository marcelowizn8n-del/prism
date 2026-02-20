import { Home, Grid, BarChart2, Calendar, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const navigation = [
    { name: "Início", href: "/", icon: Home },
    { name: "Criar", href: "/ai", icon: Grid },
    { name: "Agenda", href: "/calendar", icon: Calendar },
    { name: "Trends", href: "/refractions", icon: BarChart2 },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <div className="flex h-screen w-20 flex-col items-center justify-between border-r border-white/5 bg-background py-8">
            <div className="flex flex-col items-center gap-12 w-full">
                {/* Logo Area */}
                <div className="flex h-12 w-full items-center justify-center px-4">
                    <img src="/logo.png" alt="Prism Logo" className="w-12 h-auto object-contain" />
                </div>

                {/* Navigation Icons */}
                <nav className="flex w-full flex-col items-center gap-6">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    "group relative flex w-full flex-col items-center justify-center gap-1.5 py-3 transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-white"
                                )}
                                title={item.name}
                            >
                                {/* Active Indicator Bar */}
                                {isActive && (
                                    <div className="absolute left-0 top-0 h-full w-[3px] bg-primary rounded-r-full shadow-[0_0_15px_theme('colors.primary')]" />
                                )}

                                {/* Active Box Outline */}
                                {isActive && (
                                    <div className="absolute inset-x-2 inset-y-0 rounded-lg border border-primary/30 bg-primary/5" />
                                )}

                                <item.icon className={cn(
                                    "h-5 w-5 relative z-10 transition-transform group-hover:scale-110",
                                    isActive ? "filter drop-shadow-[0_0_8px_theme('colors.primary')]" : ""
                                )} />
                                <span className="text-[10px] font-medium tracking-wide uppercase relative z-10">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Actions */}
            <div className="flex w-full flex-col items-center gap-4">
                <button
                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors p-3 w-full"
                    title="Ajustes"
                >
                    <Settings className="h-5 w-5 transition-transform hover:rotate-90" />
                    <span className="text-[10px] font-medium tracking-wide uppercase">
                        Ajustes
                    </span>
                </button>
            </div>
        </div>
    );
}
