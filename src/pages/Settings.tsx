import { Bell, Shield, HelpCircle, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { cn } from "../lib/utils";

export function Settings() {
    return (
        <div className="max-w-4xl space-y-8 pb-10">
            <header>
                <h1 className="text-3xl font-bold text-white">Ajustes</h1>
                <p className="text-zinc-400">Gerencie sua conta e preferências.</p>
            </header>

            {/* Profile Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-white">Perfil</h2>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                            <span className="text-xl font-bold text-white">IA</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">Isabella Anderson</h3>
                        <p className="text-sm text-zinc-400">Senior Content Creator • PRO Member</p>
                    </div>
                    <button className="ml-auto rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                        Editar
                    </button>
                </div>
            </section>

            {/* Connections Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-white">Conexões</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {[
                        { name: "Instagram", icon: Instagram, status: "Conectado", connected: true },
                        { name: "LinkedIn", icon: Linkedin, status: "Desconectado", connected: false },
                        { name: "X (Twitter)", icon: Twitter, status: "Conectado", connected: true },
                        { name: "Facebook", icon: Facebook, status: "Desconectado", connected: false },
                    ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/30 p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-white/5 p-2 text-zinc-300">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">{item.name}</p>
                                    <p className={cn("text-xs", item.connected ? "text-emerald-400" : "text-zinc-500")}>
                                        {item.status}
                                    </p>
                                </div>
                            </div>
                            <button className={cn(
                                "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
                                item.connected
                                    ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                            )}>
                                {item.connected ? "Gerenciar" : "Conectar"}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* General Settings */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-white">Geral</h2>
                <div className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-zinc-900/50">
                    {[
                        { name: "Notificações", icon: Bell, desc: "Gerenciar alertas e emails" },
                        { name: "Privacidade e Segurança", icon: Shield, desc: "Senha e autenticação" },
                        { name: "Ajuda e Suporte", icon: HelpCircle, desc: "Fale conosco" },
                    ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-4 hover:bg-white/5 cursor-pointer transition-colors first:rounded-t-2xl last:rounded-b-2xl">
                            <div className="flex items-center gap-4">
                                <div className="rounded-full bg-white/5 p-2 text-zinc-400">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">{item.name}</p>
                                    <p className="text-sm text-zinc-500">{item.desc}</p>
                                </div>
                            </div>
                            <div className="text-zinc-600">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

