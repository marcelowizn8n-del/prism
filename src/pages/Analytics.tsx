import { BarChart3 } from "lucide-react";

export function Analytics() {
    return (
        <div className="flex flex-col gap-6">
            <header>
                <h1 className="text-3xl font-bold text-white">Análise</h1>
                <p className="text-zinc-400">Dados de performance e insights de marca.</p>
            </header>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 p-16 text-center">
                <div className="rounded-full bg-white/5 p-4 text-zinc-500">
                    <BarChart3 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Nenhum dado disponível</h3>
                <p className="mt-2 text-zinc-500 max-w-sm">Conecte suas redes sociais ou inicie uma nova análise para ver os dados aqui.</p>
            </div>
        </div>
    );
}
