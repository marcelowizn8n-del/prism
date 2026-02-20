import { ChevronLeft, ChevronRight, Plus, MoreVertical } from "lucide-react";
import { cn } from "../lib/utils";

const DAYS = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

// Mock events corresponding to Image 1
const SCHEDULE = [
    { id: 1, date: 5, type: "Instagram", color: "bg-rose-900/40 text-rose-500 ring-rose-500/50", title: "Instagram" },
    { id: 2, date: 5, type: "X", color: "bg-zinc-800/80 text-zinc-400 ring-zinc-500/50", title: "X (Twitter)" },
    { id: 3, date: 11, span: 4, type: "LinkedIn", color: "bg-blue-900/40 text-blue-400 ring-blue-500/50", title: "LinkedIn" },
    { id: 4, date: 15, type: "Instagram", color: "bg-rose-900/40 text-rose-500 ring-rose-500/50", title: "Instagram" },
    { id: 5, date: 15, type: "LinkedIn", color: "bg-blue-900/40 text-blue-400 ring-blue-500/50", title: "LinkedIn" },
    { id: 6, date: 15, type: "X", color: "bg-emerald-900/40 text-emerald-500 ring-emerald-500/50", title: "X" },
];

const DAILY_AGENDA = [
    {
        id: 101,
        time: "10:00 AM",
        network: "INSTAGRAM",
        networkColor: "bg-rose-950/50 text-rose-500 border-rose-900/50",
        thumb: "bg-[#e1dfdd]",
        desc: "Refração Criativa: Como a IA está transformando o processo de ideação em 2025...",
        status: "SCHEDULED",
        statusColor: "text-emerald-400"
    },
    {
        id: 102,
        time: "02:30 PM",
        network: "LINKEDIN",
        networkColor: "bg-blue-950/50 text-blue-500 border-blue-900/50",
        thumb: "bg-[#a7cba8]",
        desc: "O futuro do trabalho não é sobre ferramentas, mas sobre novos prismas de visão estratégica.",
        status: "SCHEDULED",
        statusColor: "text-emerald-400"
    },
    {
        id: 103,
        time: "08:00 PM",
        network: "X (TWITTER)",
        networkColor: "bg-zinc-900 text-zinc-400 border-zinc-800",
        thumb: "bg-zinc-800",
        desc: "Conteúdo aguardando revisão final da IA...",
        status: "DRAFT",
        statusColor: "text-primary",
        action: "EDITAR"
    }
];

export function Calendar() {
    const currentDay = 15;

    // Generate simple calendar grid (5 weeks)
    const grid = Array.from({ length: 35 }, (_, i) => {
        const date = i - 2; // Offset to start at late Jan
        if (date <= 0) return { date: 31 + date, isPrev: true };
        if (date > 28) return { date: date - 28, isNext: true };
        return { date, isCurrentMonth: true };
    });

    return (
        <div className="flex h-full w-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Main Calendar Area */}
            <div className="flex-1 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center gap-4 py-2">
                    <h1 className="text-xl font-display font-bold tracking-widest text-white uppercase">Agenda de Posts</h1>
                </div>

                {/* Calendar Controls */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-white tracking-wider">Fevereiro 2025</h2>
                        <div className="flex items-center gap-1">
                            <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-white/5 hover:bg-zinc-800 text-zinc-400 transition-colors">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-white/5 hover:bg-zinc-800 text-zinc-400 transition-colors">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center rounded-lg bg-zinc-900/80 border border-white/5 p-1">
                        <button className="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Semana</button>
                        <button className="rounded-md bg-primary px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 uppercase tracking-widest">Mês</button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 rounded-2xl border border-white/5 bg-[#0a0810] overflow-hidden flex flex-col">
                    {/* Days Header */}
                    <div className="grid grid-cols-7 border-b border-white/5 bg-[#0d0b14]">
                        {DAYS.map((day) => (
                            <div key={day} className="py-4 text-center text-[10px] font-bold tracking-widest text-zinc-500">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Grid Cells */}
                    <div className="grid grid-cols-7 grid-rows-5 flex-1 relative">
                        {grid.map((cell, i) => {
                            const isSelected = cell.date === currentDay && !cell.isPrev && !cell.isNext;
                            return (
                                <div
                                    key={i}
                                    className={cn(
                                        "min-h-[100px] border-r border-b border-white/[0.02] p-2 transition-colors",
                                        !cell.isCurrentMonth && "opacity-30",
                                        isSelected ? "bg-primary/5 ring-1 ring-inset ring-primary/20" : "hover:bg-white/[0.02]"
                                    )}
                                >
                                    <div className={cn(
                                        "text-xs font-medium mb-1",
                                        isSelected ? "text-primary" : "text-zinc-600"
                                    )}>
                                        {cell.date.toString().padStart(2, '0')}
                                    </div>

                                    {/* Events matching this cell */}
                                    <div className="flex flex-col gap-1 mt-2">
                                        {SCHEDULE.filter(s => s.date === cell.date).map(event => (
                                            <div
                                                key={event.id}
                                                className={cn(
                                                    "flex items-center gap-1.5 rounded-sm px-2 py-1 text-[9px] font-bold tracking-wider relative",
                                                    event.color,
                                                    event.span ? "z-10 w-[calc(400%+3rem)] ring-1 inset-0" : "ring-1 inset-0"
                                                )}
                                            >
                                                <div className="h-1 w-1 rounded-full bg-current opacity-70"></div>
                                                {event.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Daily Agenda */}
            <div className="w-80 flex-shrink-0 flex flex-col gap-6 border-l border-white/5 pl-6">
                <div>
                    <h3 className="text-[10px] font-display font-bold tracking-[0.2em] text-primary uppercase mb-1">Agenda Diária</h3>
                    <h2 className="text-xl font-bold text-white">Sábado, 15 Fev</h2>
                </div>

                <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
                    {DAILY_AGENDA.map((task) => (
                        <div key={task.id} className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#0d0a14] p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-zinc-500">{task.time}</span>
                                <span className={cn("text-[8px] font-bold tracking-widest px-2 py-1 rounded border", task.networkColor)}>
                                    {task.network}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <div className={cn("h-12 w-12 shrink-0 rounded-lg", task.thumb)}>
                                    {/* Image placeholder */}
                                </div>
                                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                                    {task.desc}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <div className={cn("h-1.5 w-1.5 rounded-full", task.statusColor)}></div>
                                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">{task.status}</span>
                                </div>

                                {task.action ? (
                                    <button className="text-[9px] font-bold tracking-widest text-primary hover:text-white px-3 py-1 bg-primary/10 rounded border border-primary/20 transition-colors uppercase">
                                        {task.action}
                                    </button>
                                ) : (
                                    <button className="text-zinc-600 hover:text-white transition-colors">
                                        <MoreVertical className="h-4 w-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] py-4 text-xs font-display font-bold tracking-widest text-white shadow-[0_0_30px_-5px_theme(colors.cyan.500/0.4)] transition-all hover:brightness-110 mt-auto uppercase">
                    <Plus className="h-4 w-4" />
                    Novo Post
                </button>
            </div>
        </div>
    );
}
