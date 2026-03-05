import Link from 'next/link'
import { LayoutDashboard, CheckCircle } from 'lucide-react'
import styles from '../auth.module.css'

export default function SignUpSuccessPage() {
  return (
    <div className={styles.successPage}>
      <div className={styles.successContainer}>
        <Link href="/" className={styles.authLogo}>
          <LayoutDashboard className={styles.authLogoIcon} />
          LifeManager
        </Link>

        <div className={styles.successCard}>
          <div className={styles.successIcon}>
            <CheckCircle size={28} />
          </div>
          <h1 className={styles.successTitle}>Cadastro realizado!</h1>
          <p className={styles.successText}>
            Sua conta foi criada com sucesso. Verifique seu e-mail para confirmar
            a conta antes de fazer login.
          </p>
          <Link href="/auth/login">
            <button className={styles.submitButton} style={{ marginTop: '0.5rem' }}>
              Ir para Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
