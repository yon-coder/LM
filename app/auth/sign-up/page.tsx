'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LayoutDashboard } from 'lucide-react'
import styles from '../auth.module.css'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError('As senhas nao coincidem.')
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
            `${window.location.origin}/dashboard`,
        },
      })
      if (error) throw error
      router.push('/auth/sign-up-success')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Ocorreu um erro ao criar a conta.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <Link href="/" className={styles.authLogo}>
          <LayoutDashboard className={styles.authLogoIcon} />
          LifeManager
        </Link>

        <div className={styles.authCard}>
          <div className={styles.authCardHeader}>
            <h1 className={styles.authTitle}>Cadastrar</h1>
            <p className={styles.authSubtitle}>
              Crie sua conta para comecar a gerenciar sua vida
            </p>
          </div>

          <div className={styles.authCardContent}>
            <form onSubmit={handleSignUp} className={styles.authForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="seu@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  className={styles.formInput}
                  placeholder="Minimo 6 caracteres"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="repeat-password" className={styles.formLabel}>
                  Confirmar Senha
                </label>
                <input
                  id="repeat-password"
                  type="password"
                  className={styles.formInput}
                  placeholder="Repita a senha"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>

              {error && <p className={styles.errorText}>{error}</p>}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Criando conta...' : 'Cadastrar'}
              </button>

              <div className={styles.authFooter}>
                Ja tem uma conta?{' '}
                <Link href="/auth/login">Entrar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
