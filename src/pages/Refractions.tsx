import { useState } from "react";
import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    Copy,
    Wand2,
    Calendar,
    Check,
    Plus
} from "lucide-react";
import { cn } from "../lib/utils";

// Mock data matching Image 2
const POST_DATA = {
    content: "🚀 Leve sua marca para o próximo nível com a potência da IA generativa do PRISM!\n\nDescubra como o marketing sem limites pode transformar seus resultados e automatizar sua presença digital de forma inteligente. ✨\n\n#MarketingSemLimites #Inovação #IA",
    account: "@seunegocio",
    avatar: "bg-[#e2cbb1]", // Peachy color like the screenshot
    imageBg: "bg-[#2c3d32]", // Dark green like the screenshot
    imageText1: "MARKETING",
    imageText2: "SEM LIMITES",
    stats: [
        { label: "ENGAJAMENTO", value: 88, color: "text-primary stroke-primary" },
        { label: "ALCANCE", value: 74, color: "text-emerald-400 stroke-emerald-400" },
        { label: "CLAREZA", value: 92, color: "text-rose-500 stroke-rose-500" },
        { label: "VIRALIDADE", value: 65, color: "text-amber-400 stroke-amber-400" }
    ],
    hashtags: [
        "#MarketingDigital", "#SocialMedia", "#InteligenciaArtificial",
        "#Branding", "#Inovação", "#Design"
    ]
};

export function Refractions() {
    const [activeTab, setActiveTab] = useState("Instagram");
    const [caption, setCaption] = useState(POST_DATA.content);

    // SVG Circular Progress Bar component
    const CircularProgress = ({ value, colorLabel }: { value: number, colorLabel: string }) => {
        const radius = 28;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (value / 100) * circumference;

        // Parse color class to be used directly in SVG if possible, 
        // or just rely on the wrapper's color
        return (
            <div className={`relative flex flex-col items-center justify-center gap-3 ${colorLabel.split(' ')[0]}`}>
                <div className="relative h-16 w-16 flex items-center justify-center">
                    {/* Background circle */}
                    <svg className="absolute inset-0 h-full w-full -rotate-90">
                        <circle
                            className="stroke-white/5"
                            cx="32"
                            cy="32"
                            r={radius}
                            strokeWidth="4"
                            fill="none"
                        />
                        {/* Progress circle */}
                        <circle
                            className={`transition-all duration-1000 ease-out ${colorLabel.split(' ')[1]}`}
                            cx="32"
                            cy="32"
                            r={radius}
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="text-sm font-bold text-white relative z-10">{value}%</span>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] w-full max-w-6xl mx-auto gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-display font-black tracking-widest text-white uppercase flex items-center gap-3">
                    Editor de Conteúdo
                </h1>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Alcance Semanal</span>
                            <span className="text-sm font-bold text-emerald-400">142.8k</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Engajamento</span>
                            <span className="text-sm font-bold text-primary">+12.4%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Platform Tabs */}
            <div className="flex items-center gap-8 border-b border-white/5 pb-0">
                {["Instagram", "LinkedIn", "X", "Facebook"].map((platform) => (
                    <button
                        key={platform}
                        onClick={() => setActiveTab(platform)}
                        className={cn(
                            "pb-4 text-xs font-bold tracking-widest uppercase transition-all relative",
                            activeTab === platform
                                ? "text-white"
                                : "text-zinc-600 hover:text-zinc-400"
                        )}
                    >
                        {platform}
                        {activeTab === platform && (
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_theme(colors.primary/0.8)]" />
                        )}
                    </button>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-6 mt-2 overflow-hidden flex-1">

                {/* Left Panel - Post Preview */}
                <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-4">
                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase px-1">Prévia da Publicação</h3>

                    <div className="flex-1 rounded-2xl border border-white/5 bg-[#0a0810] p-4 flex flex-col items-center">
                        {/* Fake Mobile Screen Shell */}
                        <div className="w-full max-w-[340px] rounded-[24px] border border-white/10 bg-[#000000] p-4 flex flex-col gap-3 shadow-2xl mt-4">

                            {/* Post Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className={cn("h-8 w-8 rounded-full", POST_DATA.avatar)}></div>
                                    <span className="text-sm font-bold text-white tracking-wide">{POST_DATA.account}</span>
                                </div>
                                <MoreVerticalIcon className="h-5 w-5 text-zinc-500" />
                            </div>

                            {/* Post Image Container */}
                            <div className="relative aspect-square w-full rounded-lg overflow-hidden flex flex-col items-center justify-center bg-[#07050a] border border-white/5">
                                {/* Simulated image content */}
                                <div className={cn("h-16 w-16 mb-6", POST_DATA.imageBg)}></div>
                                <h4 className="text-2xl font-display font-black text-white tracking-widest">{POST_DATA.imageText1}</h4>
                                <h4 className="text-3xl font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-fuchsia-400 mt-[-5px]">
                                    {POST_DATA.imageText2}
                                </h4>
                                <div className="w-12 h-1 bg-rose-500 rounded-full mt-6"></div>
                            </div>

                            {/* Post Actions */}
                            <div className="flex items-center justify-between pt-1">
                                <div className="flex items-center gap-4 text-white">
                                    <Heart className="h-6 w-6" />
                                    <MessageCircle className="h-6 w-6" />
                                    <Send className="h-6 w-6 -rotate-45 -mt-1" />
                                </div>
                                <Bookmark className="h-6 w-6 text-white" />
                            </div>

                            {/* Post Caption Preview */}
                            <div className="space-y-1">
                                <p className="text-xs text-white">
                                    <span className="font-bold mr-2">{POST_DATA.account}</span>
                                    <span className="text-white/90 line-clamp-2">{caption}</span>
                                </p>
                                <span className="text-[10px] text-zinc-500 uppercase">Ver mais</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Editor & AI Insights */}
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 pb-8">

                    {/* Caption Editor Box */}
                    <div className="rounded-2xl border border-white/5 bg-[#0a0810] p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Editor de Legenda (AI)</h3>
                            <span className="text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 uppercase">Otimizado</span>
                        </div>

                        <textarea
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            className="w-full bg-[#15121c] border border-white/5 rounded-xl p-4 text-sm text-white/90 focus:outline-none focus:border-primary/50 transition-all resize-none min-h-[160px] leading-relaxed"
                        />

                        <div className="flex items-center gap-3">
                            <button className="flex-1 rounded-xl bg-[#15121c] border border-white/10 hover:border-white/20 py-3 text-xs font-bold tracking-widest text-white transition-colors flex items-center justify-center gap-2 uppercase">
                                <Copy className="h-4 w-4" /> Copiar
                            </button>
                            <button className="flex-1 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 py-3 text-xs font-bold tracking-widest text-primary transition-colors flex items-center justify-center gap-2 uppercase">
                                <Wand2 className="h-4 w-4" /> Melhorar com IA
                            </button>
                        </div>
                    </div>

                    {/* AI Performance Insights */}
                    <div className="rounded-2xl border border-white/5 bg-[#0a0810] p-6">
                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">AI Performance Insights</h3>

                        <div className="flex items-center justify-around">
                            {POST_DATA.stats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <CircularProgress value={stat.value} colorLabel={stat.color} />
                                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase text-center max-w-[80px]">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggested Hashtags */}
                    <div className="rounded-2xl border border-white/5 bg-[#0a0810] p-6">
                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-5">Hashtags Sugeridas</h3>

                        <div className="flex flex-wrap gap-2">
                            {POST_DATA.hashtags.map((tag) => (
                                <span key={tag} className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#15121c] text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                            <button className="px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/10 text-xs font-bold text-primary hover:bg-primary/20 transition-colors cursor-pointer flex items-center gap-1 uppercase tracking-wider">
                                <Plus className="h-3 w-3" /> Sugerir Mais
                            </button>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex items-center gap-4 mt-auto pt-4">
                        <button className="flex-1 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 py-4 text-xs font-bold tracking-widest text-white transition-colors flex items-center justify-center gap-2 uppercase">
                            <Calendar className="h-4 w-4" /> Agendar Postagem
                        </button>
                        <button className="flex-1 rounded-xl bg-primary hover:brightness-110 py-4 text-xs font-bold tracking-widest text-white shadow-[0_0_20px_-5px_theme(colors.primary/0.5)] transition-all flex items-center justify-center gap-2 uppercase">
                            <Check className="h-4 w-4" /> Aprovar Agora
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

function MoreVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
        </svg>
    )
}
