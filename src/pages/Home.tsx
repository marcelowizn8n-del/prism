import { Search, Plus, ArrowRight, Activity, FileText, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "../lib/utils";

export function Home() {
    return (
        <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-4 py-8">
                <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 md:text-5xl">
                    O que estamos <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">refratando hoje?</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    Insira os detalhes do seu produto para que a IA possa extrair a essência da sua marca e gerar insights poderosos.
                </p>
            </header>

            {/* Main Input Area with Glow Effect */}
            <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-30 blur transition duration-500 group-hover:opacity-75"></div>
                <div className="relative flex items-center gap-4 rounded-2xl bg-zinc-900 border border-white/10 px-6 py-4 shadow-2xl">
                    <Search className="h-6 w-6 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Descreva seu projeto ou cole um link..."
                        className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-600"
                    />
                    <button className="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
                        <Sparkles className="h-4 w-4" />
                        Refratar
                    </button>
                </div>
            </div>

            {/* Quick Actions / Featured */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Featured Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/80">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-all group-hover:bg-violet-500/20"></div>

                    <div className="relative z-10 flex items-start justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">Ativo</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white">Design Thinking Tools</h3>
                            <p className="text-sm text-zinc-400 max-w-[250px]">Plataforma SaaS de inovação. Público mapeado: Designers, PMs e Facilitadores.</p>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 text-violet-400 ring-1 ring-white/10">
                            <Activity className="h-6 w-6" />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-2">
                        {["Designers", "PMs", "Facilitadores"].map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* New Project Card */}
                <button className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/10 bg-white/5 p-8 text-center transition-all hover:border-violet-500/50 hover:bg-violet-500/5">
                    <div className="rounded-full bg-white/5 p-4 text-zinc-400 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                        <Plus className="h-8 w-8" />
                    </div>
                    <p className="text-lg font-medium text-zinc-300 group-hover:text-white">Criar Novo Projeto</p>
                    <p className="text-sm text-zinc-500">Comece uma nova análise do zero</p>
                </button>
            </div>

            {/* Recent Activity */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold tracking-tight text-white">Recentes</h2>
                    <button className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">Ver tudo</button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { title: "Estratégia 2025", type: "Docs", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
                        { title: "Case de Inovação", type: "Análise", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                        { title: "Relatório Q3", type: "Docs", icon: FileText, color: "text-amber-400", bg: "bg-amber-400/10" }
                    ].map((item) => (
                        <div key={item.title} className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-white/5 bg-zinc-900/50 p-5 transition-all hover:border-white/10 hover:bg-zinc-800 hover:-translate-y-1">
                            <div className={cn("w-fit rounded-xl p-3 mb-4", item.bg, item.color)}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-medium text-zinc-200 group-hover:text-white">{item.title}</h3>
                                <p className="text-xs text-zinc-500">Editado há 2 horas</p>
                            </div>
                            <div className="mt-4 flex items-center justify-end text-white/50 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
