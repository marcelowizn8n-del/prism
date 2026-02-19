import { Sparkles, Bot } from "lucide-react";

export function AI() {
    return (
        <div className="flex flex-col gap-6">
            <header>
                <h1 className="text-3xl font-bold text-white">Inteligência Artificial</h1>
                <p className="text-zinc-400">Gere conteúdo e estratégias com a IA do Prism.</p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 hover:border-violet-500/30 transition-colors cursor-pointer group">
                    <div className="mb-4 rounded-xl bg-violet-500/10 w-fit p-3 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Gerar Estratégia</h3>
                    <p className="mt-2 text-sm text-zinc-400">Crie um plano completo de conteúdo baseado na sua marca.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 hover:border-violet-500/30 transition-colors cursor-pointer group">
                    <div className="mb-4 rounded-xl bg-fuchsia-500/10 w-fit p-3 text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors">
                        <Bot className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Chat com Assistente</h3>
                    <p className="mt-2 text-sm text-zinc-400">Converse com sua IA personalizada para tirar dúvidas.</p>
                </div>
            </div>
        </div>
    );
}
