import Link from 'next/link'
import { LayoutDashboard, AlertTriangle } from 'lucide-react'
import styles from '../auth.module.css'

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className={styles.successPage}>
      <div className={styles.successContainer}>
        <Link href="/" className={styles.authLogo}>
          <LayoutDashboard className={styles.authLogoIcon} />
          LifeManager
        </Link>

        <div className={styles.successCard}>
          <div className={styles.successIcon} style={{ backgroundColor: 'oklch(0.94 0.06 25)', color: 'oklch(0.58 0.2 25)' }}>
            <AlertTriangle size={28} />
          </div>
          <h1 className={styles.successTitle}>Algo deu errado</h1>
          <p className={styles.successText}>
            {params?.error
              ? `Erro: ${params.error}`
              : 'Ocorreu um erro inesperado. Tente novamente.'}
          </p>
          <Link href="/auth/login">
            <button className={styles.submitButton} style={{ marginTop: '0.5rem' }}>
              Voltar para Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
