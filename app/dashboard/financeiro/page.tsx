import { DollarSign, TrendingUp, TrendingDown, Wallet, Plus, Receipt } from 'lucide-react'
import styles from '../dashboard.module.css'

export default function FinanceiroPage() {
  return (
    <div className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleGroup}>
          <div className={styles.sectionIconBlue}>
            <DollarSign size={22} />
          </div>
          <div>
            <h1 className={styles.sectionTitle}>Financeiro</h1>
            <p className={styles.sectionSubtitle}>
              Gerencie suas receitas e despesas
            </p>
          </div>
        </div>
        <button className={styles.addButton}>
          <Plus size={16} />
          Nova Transacao
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Saldo Atual</span>
          <span className={styles.statValue}>R$ 0,00</span>
          <span className={styles.statHint}>Atualizado agora</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Receitas</span>
          <span className={styles.statValue} style={{ color: 'oklch(0.55 0.14 150)' }}>
            R$ 0,00
          </span>
          <span className={styles.statHint}>Este mes</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Despesas</span>
          <span className={styles.statValue} style={{ color: 'oklch(0.58 0.2 25)' }}>
            R$ 0,00
          </span>
          <span className={styles.statHint}>Este mes</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Economia</span>
          <span className={styles.statValue}>0%</span>
          <span className={styles.statHint}>Taxa de poupanca</span>
        </div>
      </div>

      <div className={styles.contentCard}>
        <div className={styles.contentCardHeader}>
          <span className={styles.contentCardTitle}>Ultimas Transacoes</span>
        </div>
        <div className={styles.contentCardBody}>
          <div className={styles.emptyState}>
            <Receipt size={48} className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>Nenhuma transacao registrada</h3>
            <p className={styles.emptyText}>
              Adicione sua primeira transacao clicando no botao
              &quot;Nova Transacao&quot; acima.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
