import { useState, useEffect } from "react";
import {
    Sparkles,
    Target,
    Users,
    AlertCircle,
    Lightbulb,
    ArrowRight,
    CheckCircle2,
    Loader2
} from "lucide-react";

// Mock data for the generated content
export const mockInsights = {
    personas: [
        { name: "Sarah", role: "Product Manager", pain: "Falta de alinhamento entre times e visão fragmentada do produto." },
        { name: "Carlos", role: "UX Designer", pain: "Dificuldade em defender decisões de design com dados de negócio." }
    ],
    opportunities: [
        "Integração nativa com ferramentas de design (Figma, Miro)",
        "Geração automática de documentação a partir de wireframes",
        "Analytics de engajamento preditivo do usuário"
    ],
    positioning: "A plataforma que traduz design abstrato em impacto de negócio tangível."
};

export function Refractions() {
    const [isGenerating, setIsGenerating] = useState(true);
    const [progress, setProgress] = useState(0);

    // Simulate AI generation process
    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                setProgress(prev => Math.min(prev + Math.random() * 15, 100));
            }, 250);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setIsGenerating(false), 600);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    if (isGenerating) {
        return (
            <div className="flex h-[subtitle] min-h-[60vh] flex-col items-center justify-center gap-6">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 mb-4 shadow-[0_0_40px_-5px_theme(colors.violet.500/0.3)]">
                    <div className="absolute inset-0 rounded-3xl animate-ping opacity-20 bg-violet-500"></div>
                    <Loader2 className="h-10 w-10 animate-spin text-violet-400" />
                </div>
                <div className="space-y-3 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Transformando Dados em Insights</h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
                        Analisando links de referência e o contexto do projeto fornecido...
                    </p>
                </div>

                <div className="w-full max-w-sm mt-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                    <div className="flex justify-between text-xs font-semibold text-zinc-400 mb-3 tracking-wide uppercase">
                        <span>Progresso</span>
                        <span className="text-violet-400">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-fuchsia-400 ring-1 ring-white/10 shadow-[0_0_20px_-5px_theme(colors.violet.500/0.3)]">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Refrações do Projeto</h1>
                        <p className="text-zinc-400 mt-1">Insights estratégicos gerados a partir do seu contexto.</p>
                    </div>
                </div>
            </header>

            {/* Positioning Statement */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-violet-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative flex flex-col items-center text-center gap-5 rounded-[22px] bg-zinc-900/80 px-6 py-12 backdrop-blur-sm border border-white/5">
                    <div className="rounded-full bg-white/5 p-3">
                        <Target className="h-6 w-6 text-fuchsia-400" />
                    </div>
                    <h3 className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase">Posicionamento Sugerido</h3>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-100 to-zinc-400 max-w-3xl">
                        "{mockInsights.positioning}"
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-2">
                {/* Personas Card */}
                <div className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-zinc-900/30 p-6 md:p-8 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-colors group-hover:bg-blue-500/10"></div>

                    <div className="relative flex items-center justify-between border-b border-white/5 pb-5">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-blue-500/10 p-2.5">
                                <Users className="h-5 w-5 text-blue-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Personas Mapeadas</h2>
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        {mockInsights.personas.map((persona, i) => (
                            <div key={i} className="flex gap-4 rounded-2xl bg-white/[0.03] p-5 border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300 font-bold text-lg ring-1 ring-white/10 shadow-inner">
                                    {persona.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white">{persona.name} <span className="font-medium text-zinc-500 text-sm ml-2">• {persona.role}</span></h4>
                                    <div className="mt-2 text-sm text-zinc-400 flex items-start gap-2 bg-black/20 rounded-lg p-2.5 border border-white/5">
                                        <AlertCircle className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                                        <span className="leading-relaxed">Dificuldade: <span className="text-zinc-300">{persona.pain}</span></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Opportunities Card */}
                <div className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-zinc-900/30 p-6 md:p-8 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-colors group-hover:bg-emerald-500/10"></div>

                    <div className="relative flex items-center justify-between border-b border-white/5 pb-5">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-emerald-500/10 p-2.5">
                                <Lightbulb className="h-5 w-5 text-emerald-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Oportunidades Iniciais</h2>
                        </div>
                    </div>

                    <div className="relative space-y-3 pt-2">
                        {mockInsights.opportunities.map((opp, i) => (
                            <div key={i} className="group/op flex items-center justify-between gap-4 rounded-2xl p-4 bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 cursor-default">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500/70 group-hover/op:text-emerald-400 transition-colors mt-0.5" />
                                    <span className="text-sm font-medium text-zinc-300 group-hover/op:text-white transition-colors leading-relaxed">{opp}</span>
                                </div>
                                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-500/0 -translate-x-2 group-hover/op:text-emerald-500/50 group-hover/op:translate-x-0 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Next Action */}
            <div className="mt-8 flex justify-end">
                <button className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-100 hover:shadow-[0_0_40px_-10px_theme(colors.white/0.4)] active:scale-95">
                    Exportar Relatório PDF
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
