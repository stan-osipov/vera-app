import Layout from '../components/Layout'

export default function Newsfront() {
  return (
    <Layout showBackButton>
      <div className="page-header">
        <div className="cv-container">
          <span className="page-number">#1</span>
          <h1>Newsfront</h1>
          <p className="page-subtitle">PR-агенція • 2020</p>
        </div>
      </div>

      <main className="main-content">
        <div className="cv-container">

          <section className="section">
            <div className="content-block">
              <p className="lead-text">
                У 2020 році я розпочала кар'єру в PR-агенції <strong>Newsfront</strong>, пройшовши стажування та приєднавшись до команди корпоративних і бренд-комунікацій.
              </p>

              <p>
                У межах роботи займалася <strong>пошуком та залученням блогерів</strong> для просування клієнтських проєктів, розробкою <strong>креативних e-mail розсилок і презентацій</strong> для тендерних пропозицій, а також підготовкою <strong>PR-матеріалів</strong> – пресрелізів, анонсів та пострелізів про заходи.
              </p>

              <p>
                Мала досвід співпраці з великими міжнародними брендами, серед яких <strong>Danone</strong> та <strong>Nutricia</strong>.
              </p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Ключовий проєкт: «Бути поруч»</h2>
            <div className="project-feature">
              <p>
                Для Nutricia я створила та координувала соціальний проєкт «Бути поруч», спрямований на підтримку онкохворих, який і сьогодні вважаю одним із найцінніших результатів своєї роботи.
              </p>
              <a href="https://butyporuch.com.ua/ru/" target="_blank" rel="noopener noreferrer" className="project-link-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                butyporuch.com.ua
              </a>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Галерея</h2>
            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild3732-3232-4330-b362-653930623335/d5927810-60a9-4449-a.jpg" alt="Newsfront" />
              <img src="https://static.tildacdn.ink/tild3662-3761-4665-a365-383532646339/73686e34-7e27-4fbc-b.jpg" alt="Newsfront проєкт" />
              <img src="https://static.tildacdn.ink/tild6130-6566-4962-b063-653866353434/fa13f444-b805-4cc0-8.jpg" alt="Newsfront команда" />
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
