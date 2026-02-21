import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setInfo(null)
    setLoading(true)

    if (mode === 'login') {
      const { error } = await signIn(email, password)
      if (error) {
        setError(error)
      } else {
        navigate('/')
      }
    } else {
      const { error } = await signUp(email, password)
      if (error) {
        setError(error)
      } else {
        setInfo('Verifique seu e-mail para confirmar a conta antes de entrar.')
      }
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src="/logo.png" alt="PRISM" className="h-16 w-auto" />
        </div>

        {/* Card */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
          <div className="relative bg-[#0d0a14]/90 backdrop-blur-xl rounded-[23px] border border-white/5 p-10">
            <div className="text-center mb-8 space-y-2">
              <div className="text-primary text-xs font-display tracking-widest">
                {mode === 'login' ? '// ACESSO' : '// CADASTRO'}
              </div>
              <h1 className="text-3xl font-display font-black text-white">
                {mode === 'login' ? 'BEM-VINDO' : 'CRIAR CONTA'}
              </h1>
              <p className="text-zinc-400 text-sm">
                {mode === 'login'
                  ? 'Entre para continuar criando conteúdo com IA.'
                  : 'Comece a criar conteúdo com IA agora.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-[#15121c] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Senha
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#15121c] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-600"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              {info && (
                <p className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
                  {info}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl py-4 font-display text-base font-bold tracking-wider text-white transition-all duration-500 bg-gradient-to-r from-primary to-purple-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_theme(colors.primary/0.8)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? 'AGUARDE...' : mode === 'login' ? 'ENTRAR' : 'CRIAR CONTA'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(null); setInfo(null) }}
                className="text-xs text-zinc-500 hover:text-white transition-colors"
              >
                {mode === 'login'
                  ? 'Não tem conta? Cadastre-se'
                  : 'Já tem conta? Entrar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
