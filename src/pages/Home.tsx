import { useState } from "react";
import {
    Search,
    Plus,
    ArrowRight,
    Activity,
    FileText,
    Sparkles,
    TrendingUp,
    Link2,
    Trash2,
    Upload,
    ExternalLink,
    X,
    Tag,
} from "lucide-react";
import { cn } from "../lib/utils";

type ReferenceLink = {
    id: string;
    url: string;
    title: string;
    category: string;
};

const CATEGORIES = ["Artigo", "Blog Post", "Referência", "Concorrente", "Inspiração"];

export function Home() {
    const [description, setDescription] = useState("");
    const [links, setLinks] = useState<ReferenceLink[]>([]);
    const [newUrl, setNewUrl] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [showLinkInput, setShowLinkInput] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Artigo");
    const [isExpanded, setIsExpanded] = useState(false);

    const addLink = () => {
        if (!newUrl.trim()) return;
        const link: ReferenceLink = {
            id: Date.now().toString(),
            url: newUrl.trim(),
            title: newTitle.trim() || new URL(newUrl.trim()).hostname,
            category: selectedCategory,
        };
        setLinks((prev) => [...prev, link]);
        setNewUrl("");
        setNewTitle("");
        setShowLinkInput(false);
    };

    const removeLink = (id: string) => {
        setLinks((prev) => prev.filter((l) => l.id !== id));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            addLink();
        }
    };

    return (
        <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-4 py-8">
                <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 md:text-5xl">
                    O que estamos <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">refratando hoje?</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    Insira os detalhes do seu produto e adicione materiais de referência para que a IA possa gerar conteúdos poderosos.
                </p>
            </header>

            {/* Main Input Area */}
            <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-30 blur transition duration-500 group-hover:opacity-75"></div>
                <div className="relative flex flex-col gap-4 rounded-2xl bg-zinc-900 border border-white/10 p-6 shadow-2xl">
                    {/* Project Description */}
                    <div className="flex items-start gap-4">
                        <Search className="h-6 w-6 text-zinc-500 mt-1 shrink-0" />
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                if (!isExpanded && e.target.value.length > 0) setIsExpanded(true);
                            }}
                            placeholder="Descreva seu projeto, produto ou marca em detalhes..."
                            rows={isExpanded ? 4 : 2}
                            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-600 resize-none transition-all"
                        />
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/5"></div>

                    {/* Reference Materials Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Link2 className="h-4 w-4" />
                                <span className="text-sm font-medium">Materiais de Referência</span>
                                {links.length > 0 && (
                                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-violet-500/20 text-violet-400 text-xs font-bold">
                                        {links.length}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="flex items-center gap-2 cursor-pointer rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-white/10 hover:bg-white/10 hover:text-white transition-colors">
                                    <Upload className="h-3.5 w-3.5" />
                                    Upload
                                    <input type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" />
                                </label>
                                <button
                                    onClick={() => setShowLinkInput(true)}
                                    className="flex items-center gap-1.5 rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-400 ring-1 ring-inset ring-violet-500/20 hover:bg-violet-500/20 transition-colors"
                                >
                                    <Plus className="h-3.5 w-3.5" />
                                    Adicionar Link
                                </button>
                            </div>
                        </div>

                        {/* Add Link Input */}
                        {showLinkInput && (
                            <div className="animate-in slide-in-from-top-2 space-y-3 rounded-xl bg-white/5 border border-white/10 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-white">Novo Material</span>
                                    <button onClick={() => setShowLinkInput(false)} className="text-zinc-500 hover:text-white transition-colors">
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <input
                                        type="url"
                                        value={newUrl}
                                        onChange={(e) => setNewUrl(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="https://exemplo.com/artigo"
                                        className="flex-1 rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50 transition-colors"
                                        autoFocus
                                    />
                                    <input
                                        type="text"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Título (opcional)"
                                        className="sm:w-48 rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50 transition-colors"
                                    />
                                </div>
                                {/* Category Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={cn(
                                                "flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all",
                                                selectedCategory === cat
                                                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                                                    : "bg-white/5 text-zinc-400 ring-1 ring-inset ring-white/10 hover:bg-white/10 hover:text-white"
                                            )}
                                        >
                                            <Tag className="h-3 w-3" />
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={addLink}
                                    disabled={!newUrl.trim()}
                                    className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-40 disabled:hover:scale-100"
                                >
                                    Adicionar
                                </button>
                            </div>
                        )}

                        {/* Links List */}
                        {links.length > 0 && (
                            <div className="space-y-2">
                                {links.map((link) => (
                                    <div
                                        key={link.id}
                                        className="group/link flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-3 transition-all hover:bg-white/10 hover:border-white/10"
                                    >
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                                            <Link2 className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-white truncate">{link.title}</p>
                                            <p className="text-xs text-zinc-500 truncate">{link.url}</p>
                                        </div>
                                        <span className={cn(
                                            "hidden sm:inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                            link.category === "Artigo" && "bg-blue-500/10 text-blue-400",
                                            link.category === "Blog Post" && "bg-emerald-500/10 text-emerald-400",
                                            link.category === "Referência" && "bg-amber-500/10 text-amber-400",
                                            link.category === "Concorrente" && "bg-red-500/10 text-red-400",
                                            link.category === "Inspiração" && "bg-fuchsia-500/10 text-fuchsia-400",
                                        )}>
                                            {link.category}
                                        </span>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                        <button
                                            onClick={() => removeLink(link.id)}
                                            className="text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover/link:opacity-100"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Empty state */}
                        {links.length === 0 && !showLinkInput && (
                            <div className="flex items-center justify-center py-4 text-center">
                                <p className="text-sm text-zinc-600">
                                    Adicione links de artigos, blogs ou referências para enriquecer a geração de conteúdo.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/5"></div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-zinc-600">
                            {description.length > 0 ? `${description.length} caracteres` : ""}
                            {links.length > 0 ? ` • ${links.length} referência${links.length > 1 ? "s" : ""}` : ""}
                        </p>
                        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
                            <Sparkles className="h-4 w-4" />
                            Refratar
                        </button>
                    </div>
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
                        { title: "Relatório Q3", type: "Docs", icon: FileText, color: "text-amber-400", bg: "bg-amber-400/10" },
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
