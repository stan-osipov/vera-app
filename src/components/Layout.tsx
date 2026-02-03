import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export default function Layout({ children, showBackButton = false }: LayoutProps) {
  return (
    <div className="layout">
      {showBackButton && (
        <nav className="back-nav">
          <div className="cv-container">
            <Link to="/" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              На головну
            </Link>
          </div>
        </nav>
      )}
      {children}
      <footer className="footer">
        <div className="cv-container">
          <p>Віра Філімонова © {new Date().getFullYear()}</p>
          <a href="https://mc.today/uk/author/vera-filimonova-cometspace-net/" target="_blank" rel="noopener noreferrer">
            Читайте мою колонку на MC.Today
          </a>
        </div>
      </footer>
    </div>
  )
}
