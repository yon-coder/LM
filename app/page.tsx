import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DollarSign, Heart, BookOpen, LayoutDashboard } from 'lucide-react'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.landing}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <LayoutDashboard className={styles.logoIcon} />
          LifeManager
        </Link>
        <div className={styles.headerButtons}>
          <Button variant="outline" asChild>
            <Link href="/auth/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/sign-up">Cadastrar</Link>
          </Button>
        </div>
      </header>

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Tudo em um so lugar</span>
          <h1 className={styles.heroTitle}>
            Gerencie sua vida com{' '}
            <span className={styles.heroHighlight}>LifeManager</span>
          </h1>
          <p className={styles.heroDescription}>
            Organize suas financas, cuide da sua saude e acompanhe seus estudos.
            Uma plataforma completa para transformar sua rotina.
          </p>
          <div className={styles.heroButtons}>
            <Button size="lg" asChild>
              <Link href="/auth/sign-up">Comecar agora</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/auth/login">Ja tenho conta</Link>
            </Button>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconBlue}>
              <DollarSign size={24} />
            </div>
            <h3 className={styles.featureTitle}>Financeiro</h3>
            <p className={styles.featureDescription}>
              Controle receitas, despesas e acompanhe seu saldo.
              Tenha visao completa das suas financas pessoais.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconRed}>
              <Heart size={24} />
            </div>
            <h3 className={styles.featureTitle}>Saude</h3>
            <p className={styles.featureDescription}>
              Registre consultas, medicamentos e habitos saudaveis.
              Mantenha sua saude sempre em dia.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconGreen}>
              <BookOpen size={24} />
            </div>
            <h3 className={styles.featureTitle}>Educacional</h3>
            <p className={styles.featureDescription}>
              Organize seus estudos, defina metas e registre seu progresso.
              Evolua continuamente.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>LifeManager &mdash; Gerencie sua vida de forma inteligente.</p>
      </footer>
    </div>
  )
}
