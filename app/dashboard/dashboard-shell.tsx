'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard,
  DollarSign,
  Heart,
  BookOpen,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import styles from './dashboard.module.css'

const navItems = [
  {
    label: 'Painel',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Financeiro',
    href: '/dashboard/financeiro',
    icon: DollarSign,
  },
  {
    label: 'Saude',
    href: '/dashboard/saude',
    icon: Heart,
  },
  {
    label: 'Educacional',
    href: '/dashboard/educacional',
    icon: BookOpen,
  },
]

export default function DashboardShell({
  children,
  userEmail,
}: {
  children: React.ReactNode
  userEmail: string
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  const currentPage = navItems.find((item) => item.href === pathname)

  return (
    <div className={styles.dashboardLayout}>
      {mobileOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={() => setMobileOpen(false)}
          role="button"
          aria-label="Fechar menu"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setMobileOpen(false)}
        />
      )}

      <aside
        className={`${styles.sidebar} ${mobileOpen ? styles.sidebarVisible : ''}`}
      >
        <div className={styles.sidebarHeader}>
          <LayoutDashboard className={styles.sidebarHeaderIcon} />
          LifeManager
        </div>

        <nav className={styles.sidebarNav}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <item.icon className={styles.navIcon} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            <LogOut className={styles.navIcon} />
            Sair
          </button>
        </div>
      </aside>

      <div className={styles.mainArea}>
        <header className={styles.topBar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              className={styles.menuButton}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <span className={styles.topBarTitle}>
              {currentPage?.label || 'Painel'}
            </span>
          </div>
          <span className={styles.userEmail}>{userEmail}</span>
        </header>

        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  )
}
