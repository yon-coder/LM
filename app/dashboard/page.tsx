import Link from 'next/link'
import { DollarSign, Heart, BookOpen, ArrowRight } from 'lucide-react'
import styles from './dashboard.module.css'

export default function DashboardPage() {
  return (
    <div className={styles.sectionPage}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Bem-vindo ao LifeManager</h1>
        <p className={styles.welcomeText}>
          Escolha uma area abaixo para comecar a gerenciar sua vida.
        </p>
      </div>

      <div className={styles.dashboardGrid}>
        <Link href="/dashboard/financeiro" className={styles.dashCard}>
          <div className={styles.dashCardHeader}>
            <div className={styles.dashCardIconBlue}>
              <DollarSign size={24} />
            </div>
            <span className={styles.dashCardTitle}>Financeiro</span>
          </div>
          <div className={styles.dashCardBody}>
            <p className={styles.dashCardDescription}>
              Controle suas receitas e despesas, acompanhe seu saldo e mantenha
              suas financas organizadas.
            </p>
            <div className={styles.dashCardArrow}>
              Acessar <ArrowRight size={14} />
            </div>
          </div>
        </Link>

        <Link href="/dashboard/saude" className={styles.dashCard}>
          <div className={styles.dashCardHeader}>
            <div className={styles.dashCardIconRed}>
              <Heart size={24} />
            </div>
            <span className={styles.dashCardTitle}>Saude</span>
          </div>
          <div className={styles.dashCardBody}>
            <p className={styles.dashCardDescription}>
              Registre consultas, medicamentos e habitos saudaveis para manter
              sua saude sempre em dia.
            </p>
            <div className={styles.dashCardArrow}>
              Acessar <ArrowRight size={14} />
            </div>
          </div>
        </Link>

        <Link href="/dashboard/educacional" className={styles.dashCard}>
          <div className={styles.dashCardHeader}>
            <div className={styles.dashCardIconGreen}>
              <BookOpen size={24} />
            </div>
            <span className={styles.dashCardTitle}>Educacional</span>
          </div>
          <div className={styles.dashCardBody}>
            <p className={styles.dashCardDescription}>
              Organize seus estudos, defina metas de aprendizado e registre seu
              progresso diario.
            </p>
            <div className={styles.dashCardArrow}>
              Acessar <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
