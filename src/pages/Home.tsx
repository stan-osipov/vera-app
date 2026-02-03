import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const experiences = [
  {
    id: 1,
    path: '/newsfront',
    company: 'Newsfront',
    type: 'PR-агенція',
    role: 'PR-спеціаліст',
    period: '2020',
    image: 'https://static.tildacdn.ink/tild3732-3232-4330-b362-653930623335/d5927810-60a9-4449-a.jpg',
    description: 'Старт кар\'єри у PR, робота з Danone, Nutricia та соціальний проєкт "Бути поруч"'
  },
  {
    id: 2,
    path: '/akademiya',
    company: 'Академія Ганни Різатдінової',
    type: '',
    role: 'PR-менеджер',
    period: '',
    image: 'https://static.tildacdn.ink/tild6565-3266-4663-a563-333964656134/IMG_4170.jpg',
    description: 'PR проєкту та особистого бренду Ганни. Under Armour, Parimatch, YARO'
  },
  {
    id: 3,
    path: '/franch',
    company: 'Франч',
    type: 'Консалтингова компанія',
    role: 'PR Manager',
    period: '',
    image: 'https://static.tildacdn.ink/tild6330-6338-4766-b635-383264346535/FranchMaster-1920x10.jpg',
    description: 'Бізнес-Колонізація, FranchTV, особистий бренд Романа Кириловича'
  },
  {
    id: 4,
    path: '/cheese-expert',
    company: 'Оксана Чернова',
    type: 'Сирна експертка',
    role: 'PR-менеджер',
    period: '',
    image: 'https://static.tildacdn.ink/tild3733-6635-4538-a635-363632636632/DSC03953.jpg',
    description: 'Особистий бренд, 4 соц. мережі, World Cheese Awards у Лондоні'
  },
  {
    id: 5,
    path: '/boiove-bratstvo',
    company: 'Бойове Братерство України',
    type: 'Військово-Цивільна Спілка',
    role: 'Комунікаційниця',
    period: '',
    image: 'https://static.tildacdn.ink/tild6231-3161-4236-b439-336439656234/ea4d11a3-c2bd-45a3-8.jpg',
    description: 'Управління комунікаціями, проєкт "Батьківське серце", робота зі ЗМІ'
  },
  {
    id: 6,
    path: '/poomb-creatures',
    company: 'Poomb Creatures / Comet Space',
    type: 'Геймдев',
    role: 'Head of Communications & Content',
    period: 'Останні 1.5 року',
    image: 'https://static.tildacdn.ink/tild6663-3063-4335-b461-313938663935/DSC04958.jpg',
    description: 'Міжнародна геймдев-компанія, crypto, Web3, Times Square NYC'
  }
]

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <header className="header">
        <div className="cv-container">
          <div className="header-content">
            <div className="profile-image-container">
              <img
                src="https://static.tildacdn.ink/tild6438-3866-4161-a336-366434343435/vera.jpg"
                alt="Віра Філімонова"
                className="profile-image"
              />
            </div>
            <div className="header-text">
              <h1>Віра Філімонова</h1>
              <p className="title">Head of Communication & Content</p>
              <div className="contact-links">
                <a href="https://mc.today/uk/author/vera-filimonova-cometspace-net/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="M2 2l7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                  </svg>
                  Моя колонка на MC.Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="cv-container">

          {/* About Section */}
          <section className="section">
            <h2 className="section-title">Про мене</h2>
            <div className="about-content">
              <p>
                Я комунікаційниця з 5+ роками досвіду у <strong>B2B та B2C сегментах.</strong> Маю експертизу у побудові комплексних стратегій комунікацій, медіавзаємодії, створенні контенту, організації івентів та управлінні брендовими наративами.
              </p>
              <p>
                Останні півтора року обіймала позицію <strong>Head of Communication & Content</strong> у геймдев-напрямку.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-title">Освіта</h2>
            <div className="education-card">
              <div className="education-content">
                <div className="education-info">
                  <h3 className="education-institution">Інститут журналістики імені Тараса Шевченка</h3>
                  <p className="education-degree">Спеціальність: Реклама та зв'язки з громадськістю</p>
                  <p className="education-description">
                    Розвинула компетенції у <strong>стратегічних комунікаціях, PR, digital-маркетингу та проєктному менеджменті</strong>. Досвід роботи з командами, лідерство та організація соціальних і благодійних ініціатив.
                  </p>

                  <div className="education-projects">
                    <h4>Ключові проєкти:</h4>
                    <div className="project-grid">
                      <div className="education-project">
                        <h5>«Миколярмарок»</h5>
                        <p>(благодійний ярмарок) – залучення спонсорів, івент-менеджмент, брендинг і контент-продакшен для соцмереж</p>
                        <a href="https://instagram.com/mykolyarmarok?igshid=1xx2xzoxpbteb" target="_blank" rel="noopener noreferrer" className="project-link">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                          </svg>
                          @mykolyarmarok
                        </a>
                      </div>
                      <div className="education-project">
                        <h5>Studentalk</h5>
                        <p>(соціальний проєкт) – створення з нуля, комунікаційна стратегія, інфлюенс-маркетинг, робота з блогерами, контент та аналітика ефективності</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education-image">
                  <img
                    src="https://static.tildacdn.ink/tild6438-6164-4530-a539-643632366432/photo_2020-06-03_22-.jpg"
                    alt="Освіта"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="section">
            <h2 className="section-title">Досвід роботи</h2>
            <div className="experience-grid">
              {experiences.map((exp) => (
                <Link to={exp.path} key={exp.id} className="experience-card-link">
                  <article className="experience-preview-card">
                    <div className="experience-preview-image">
                      <img src={exp.image} alt={exp.company} />
                      <span className="experience-number">#{exp.id}</span>
                    </div>
                    <div className="experience-preview-content">
                      <h3 className="experience-preview-company">{exp.company}</h3>
                      {exp.type && <span className="experience-preview-type">{exp.type}</span>}
                      <p className="experience-preview-role">{exp.role}</p>
                      {exp.period && <span className="experience-preview-period">{exp.period}</span>}
                      <p className="experience-preview-description">{exp.description}</p>
                      <span className="experience-preview-link">
                        Детальніше
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Strengths Section */}
          <section className="section">
            <h2 className="section-title">Мої сильні сторони</h2>
            <div className="strengths-content">
              <p>У своїх сильних сторонах можу виділити:</p>
              <ul>
                <li>Люблю поїсти. Скоріше всього, на корпоративі заберу останній шматочок папероні 🍕</li>
                <li>Рівень стресостійкості - українка 💪</li>
              </ul>
            </div>
          </section>

          {/* Closing */}
          <section className="section closing-section">
            <div className="closing-content">
              <p className="closing-thanks">Дякую, що прочитали мою історію!</p>
              <p className="closing-slogan">Слава Україні! Слава Нації! І пездець російській федерації! 🇺🇦</p>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
