'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LayoutDashboard } from 'lucide-react'
import styles from '../auth.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push('/dashboard')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Ocorreu um erro ao fazer login.')
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
            <h1 className={styles.authTitle}>Entrar</h1>
            <p className={styles.authSubtitle}>
              Insira seu e-mail e senha para acessar sua conta
            </p>
          </div>

          <div className={styles.authCardContent}>
            <form onSubmit={handleLogin} className={styles.authForm}>
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
                  placeholder="Sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className={styles.errorText}>{error}</p>}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>

              <div className={styles.authFooter}>
                Nao tem conta?{' '}
                <Link href="/auth/sign-up">Cadastre-se</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
