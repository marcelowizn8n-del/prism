import { useState } from "react";
import { Search, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

export function Home() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");
    const [siteUrl, setSiteUrl] = useState("");

    // Simulate steps like in the screenshot
    const activeStep = 1;

    const steps = [
        { id: 1, name: "PRODUTO" },
        { id: 2, name: "ESTRATÉGIA" },
        { id: 3, name: "CANAIS" }
    ];

    return (
        <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Top Search Bar (Matches Screenshot) */}
            <div className="w-full relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                    type="text"
                    placeholder="Search projects or trends..."
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-full py-3 pl-12 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
            </div>

            {/* Main Creation Card */}
            <div className="relative w-full rounded-3xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>

                <div className="relative bg-[#0d0a14]/90 backdrop-blur-xl rounded-[23px] border border-white/5 p-10 md:p-16 flex flex-col items-center">
                    {/* Stepper */}
                    <div className="flex items-center gap-4 md:gap-8 mb-16 w-full max-w-2xl justify-center">
                        {steps.map((step, idx) => (
                            <div key={step.id} className="flex items-center gap-4 md:gap-8">
                                <div className={cn(
                                    "flex items-center gap-2 text-xs font-bold tracking-widest",
                                    step.id === activeStep ? "text-white" : "text-zinc-600"
                                )}>
                                    <span className={cn(
                                        "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                                        step.id === activeStep ? "bg-primary text-white" : "bg-zinc-800 text-zinc-500"
                                    )}>
                                        {step.id}
                                    </span>
                                    {step.name}
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="h-[1px] w-12 bg-white/10 hidden md:block"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Header */}
                    <div className="text-center mb-12 space-y-4">
                        <div className="text-primary text-sm font-display tracking-widest">// FASE 01</div>
                        <h1 className="text-4xl md:text-5xl font-display font-black text-white text-glow">CRIAR CONTEÚDO</h1>
                        <p className="text-zinc-400 max-w-lg mx-auto">
                            Insira os detalhes do seu produto para que a IA possa extrair a essência da sua marca.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-full max-w-2xl space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Nome do Produto</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder="Ex: Design Thinking Tools"
                                className="w-full bg-[#15121c] border border-white/5 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-600"
                            />
                        </div>

                        <div className="space-y-2 relative">
                            <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">URL do site (Recomendado)</label>
                            <div className="relative">
                                <input
                                    type="url"
                                    value={siteUrl}
                                    onChange={(e) => setSiteUrl(e.target.value)}
                                    placeholder="https://dttools.app"
                                    className="w-full bg-[#15121c] border border-white/5 rounded-xl pl-4 pr-32 py-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-600"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1a1723] hover:bg-[#221f2e] text-emerald-400 font-medium text-xs px-4 py-2 rounded-lg transition-colors border border-emerald-500/10 hover:border-emerald-500/30">
                                    ANALISAR
                                </button>
                            </div>
                        </div>

                        {/* Next Action Button */}
                        <div className="pt-8">
                            <button
                                onClick={() => navigate('/refractions')}
                                disabled={!productName && !siteUrl}
                                className={cn(
                                    "w-full rounded-2xl py-5 font-display text-lg font-bold tracking-wider text-white transition-all duration-500 shadow-[0_0_40px_-10px_theme(colors.primary/0.5)]",
                                    (productName || siteUrl)
                                        ? "bg-gradient-prism hover:scale-[1.02] hover:shadow-[0_0_60px_-10px_theme(colors.primary/0.8)]"
                                        : "bg-zinc-800 text-zinc-500 opacity-50 cursor-not-allowed shadow-none"
                                )}
                            >
                                PRÓXIMO PASSO
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Area */}
            <div className="space-y-6 mt-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold tracking-widest text-white">RECENTES</h2>
                    <button className="text-xs font-bold tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2 uppercase">
                        Ver todos <ArrowRight className="h-3 w-3" />
                    </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Recent Item 1 */}
                    <div className="group cursor-pointer flex flex-col justify-between h-[180px] rounded-2xl border border-white/5 bg-[#0d0a14]/60 p-6 transition-all hover:bg-[#15121c] hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="space-y-2 relative z-10">
                            <span className="text-[9px] font-bold tracking-widest text-pink-500 uppercase">Reels</span>
                            <h3 className="font-semibold text-lg leading-tight text-white/90 group-hover:text-white">Estratégia de Lançamento 2025</h3>
                        </div>
                        <div className="flex items-center justify-between mt-auto relative z-10">
                            <div className="flex items-center -space-x-2">
                                <div className="h-6 w-6 rounded-full bg-zinc-800 border-2 border-[#15121c]"></div>
                                <div className="h-6 w-6 rounded-full bg-zinc-700 border-2 border-[#15121c]"></div>
                            </div>
                            <span className="text-[10px] text-zinc-600 font-medium">há 2 horas</span>
                        </div>
                    </div>

                    {/* Recent Item 2 */}
                    <div className="group cursor-pointer flex flex-col justify-between h-[180px] rounded-2xl border border-white/5 bg-[#0d0a14]/60 p-6 transition-all hover:bg-[#15121c] hover:border-blue-500/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="space-y-2 relative z-10">
                            <span className="text-[9px] font-bold tracking-widest text-blue-500 uppercase">LinkedIn</span>
                            <h3 className="font-semibold text-lg leading-tight text-white/90 group-hover:text-white">Case de Inovação Aberta</h3>
                        </div>
                        <div className="flex items-center justify-between mt-auto relative z-10">
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-zinc-800 border-2 border-[#15121c]"></div>
                            </div>
                            <span className="text-[10px] text-zinc-600 font-medium">Ontem</span>
                        </div>
                    </div>

                    {/* Empty Slots */}
                    <button className="flex flex-col items-center justify-center gap-3 h-[180px] rounded-2xl border border-dashed border-white/10 bg-transparent transition-all hover:bg-white/5 hover:border-white/20">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-zinc-500">
                            <Plus className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Novo Projeto</span>
                    </button>

                    <div className="h-[180px] rounded-2xl bg-zinc-950/30"></div>
                </div>
            </div>
        </div>
    );
}
