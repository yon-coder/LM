import { Heart, Plus, Activity, Pill, CalendarCheck, Stethoscope } from 'lucide-react'
import styles from '../dashboard.module.css'

export default function SaudePage() {
  return (
    <div className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleGroup}>
          <div className={styles.sectionIconRed}>
            <Heart size={22} />
          </div>
          <div>
            <h1 className={styles.sectionTitle}>Saude</h1>
            <p className={styles.sectionSubtitle}>
              Acompanhe sua saude e bem-estar
            </p>
          </div>
        </div>
        <button className={styles.addButton}>
          <Plus size={16} />
          Novo Registro
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Consultas</span>
          <span className={styles.statValue}>0</span>
          <span className={styles.statHint}>Agendadas</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Medicamentos</span>
          <span className={styles.statValue}>0</span>
          <span className={styles.statHint}>Em uso</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Habitos</span>
          <span className={styles.statValue}>0</span>
          <span className={styles.statHint}>Ativos</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Bem-estar</span>
          <span className={styles.statValue}>--</span>
          <span className={styles.statHint}>Indice geral</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <div className={styles.contentCard}>
          <div className={styles.contentCardHeader}>
            <span className={styles.contentCardTitle}>Proximas Consultas</span>
          </div>
          <div className={styles.contentCardBody}>
            <div className={styles.emptyState}>
              <Stethoscope size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>Nenhuma consulta agendada</h3>
              <p className={styles.emptyText}>
                Registre suas consultas medicas para acompanhar sua saude.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentCard}>
          <div className={styles.contentCardHeader}>
            <span className={styles.contentCardTitle}>Medicamentos</span>
          </div>
          <div className={styles.contentCardBody}>
            <div className={styles.emptyState}>
              <Pill size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>Nenhum medicamento registrado</h3>
              <p className={styles.emptyText}>
                Adicione seus medicamentos para manter o controle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
