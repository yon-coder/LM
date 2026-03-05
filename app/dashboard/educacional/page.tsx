import { BookOpen, Plus, GraduationCap, Target, Clock, Library } from 'lucide-react'
import styles from '../dashboard.module.css'

export default function EducacionalPage() {
  return (
    <div className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleGroup}>
          <div className={styles.sectionIconGreen}>
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className={styles.sectionTitle}>Educacional</h1>
            <p className={styles.sectionSubtitle}>
              Organize seus estudos e acompanhe seu progresso
            </p>
          </div>
        </div>
        <button className={styles.addButton}>
          <Plus size={16} />
          Nova Materia
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Materias</span>
          <span className={styles.statValue}>0</span>
          <span className={styles.statHint}>Cadastradas</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Horas de Estudo</span>
          <span className={styles.statValue}>0h</span>
          <span className={styles.statHint}>Esta semana</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Metas</span>
          <span className={styles.statValue}>0</span>
          <span className={styles.statHint}>Definidas</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Progresso</span>
          <span className={styles.statValue}>0%</span>
          <span className={styles.statHint}>Geral</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <div className={styles.contentCard}>
          <div className={styles.contentCardHeader}>
            <span className={styles.contentCardTitle}>Materias em Estudo</span>
          </div>
          <div className={styles.contentCardBody}>
            <div className={styles.emptyState}>
              <Library size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>Nenhuma materia cadastrada</h3>
              <p className={styles.emptyText}>
                Adicione as materias que esta estudando para acompanhar seu progresso.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentCard}>
          <div className={styles.contentCardHeader}>
            <span className={styles.contentCardTitle}>Metas de Estudo</span>
          </div>
          <div className={styles.contentCardBody}>
            <div className={styles.emptyState}>
              <Target size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>Nenhuma meta definida</h3>
              <p className={styles.emptyText}>
                Defina metas de estudo para manter o foco e a disciplina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
