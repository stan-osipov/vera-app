import Layout from '../components/Layout'

const franchTvVideos = [
  'https://www.youtube.com/embed/sY_FDYVxabY',
  'https://www.youtube.com/embed/loTbV2ZjSqo',
  'https://www.youtube.com/embed/jSFP_pAq9f0',
  'https://www.youtube.com/embed/eTBMO4XaT60',
  'https://www.youtube.com/embed/Z-YgQVX0oUM',
  'https://www.youtube.com/embed/wKu0aQBhYUk',
  'https://www.youtube.com/embed/FBiqqbwEw3c',
  'https://www.youtube.com/embed/NaBZpaK0EpY',
]

export default function Franch() {
  return (
    <Layout showBackButton>
      <div className="page-header">
        <div className="cv-container">
          <span className="page-number">#3</span>
          <h1>Франч</h1>
          <p className="page-subtitle">Консалтингова компанія • PR Manager</p>
        </div>
      </div>

      <main className="main-content">
        <div className="cv-container">

          <section className="section">
            <div className="content-block">
              <p className="lead-text">
                Далі я вирішила змінити вектор роботи та перешла на посаду PR-manager у консалтингову компанію Франч.
              </p>
              <p>
                Франч <strong>19 років</strong> займається розвитком франшиз в Україні та за його межами. Створили найбільші франшизи в Україні - <strong>Нова Пошта</strong> та <strong>Rozetka</strong>.
              </p>
            </div>

            <div className="social-links-row">
              <a href="https://instagram.com/franchme?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href="https://t.me/franchchannel" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"/>
                </svg>
                Telegram
              </a>
              <a href="https://franch.site/ua" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Сайт
              </a>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">На цій посаді я займалась:</h2>
            <ul className="responsibilities-list large">
              <li>PR у Франч</li>
              <li>PR для клієнтів Франч</li>
              <li>Створенням івенту Бізнес-Колонізація</li>
              <li>Контент та просування YouTube-каналу FranchTV</li>
              <li>Особистий бренд Романа Кириловича</li>
            </ul>
          </section>

          {/* Франч PR */}
          <section className="section">
            <h2 className="section-title">Франч PR</h2>
            <div className="content-block">
              <p>
                Була створена PR-стратегія, яка створила постійне згадування компанії в інформаційному полі та появі нових клієнтів.
              </p>
              <p>
                Був проведен ребрединг сайту та поява каналів комунікації.
              </p>
            </div>
            <div className="feature-image">
              <img src="https://static.tildacdn.ink/tild6330-6338-4766-b635-383264346535/FranchMaster-1920x10.jpg" alt="Франч ребрендинг" />
            </div>
          </section>

          {/* Бізнес-Колонізація */}
          <section className="section">
            <h2 className="section-title">Бізнес-Колонізація</h2>
            <div className="content-block">
              <p className="lead-text">
                Бізнес-Колонізація - це конференція з масштабування бізнесу. Два раза на рік запрошуються власники найбільших франшиз України та власники компаній, які допомагають їм масштабуватися.
              </p>
              <p>
                Я займалась організаційною та контентною стороною івента. Створювала пул спікерів, організовувала зал, кейтеринг тощо. Запрошувала гостей та ЗМІ, працювала з посиленням репутації Франч у бізнес-сегменті.
              </p>
              <p className="highlight-text">
                Загалом, відповідала за найменші дрібнички та найбільші питання.
              </p>
            </div>
            <div className="feature-image">
              <img src="https://static.tildacdn.ink/tild3932-3632-4332-a634-636137663532/photo536396416943664.jpg" alt="Бізнес-Колонізація" />
            </div>
          </section>

          {/* FranchTV */}
          <section className="section">
            <h2 className="section-title">YouTube-канал FranchTV</h2>
            <div className="content-block">
              <p>В мої обов'язки входило:</p>
              <ul className="responsibilities-list">
                <li>Пошук героїв</li>
                <li>Написання сценаріїв</li>
                <li>Просування випусків</li>
              </ul>

              <div className="social-links-row">
                <a href="https://instagram.com/franchtv?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  @franchtv
                </a>
              </div>
            </div>

            <h3 className="subsection-title">Випуски, які спродюсувала я:</h3>
            <div className="video-grid">
              {franchTvVideos.map((url, index) => (
                <div key={index} className="video-wrapper">
                  <iframe
                    src={url}
                    title={`FranchTV випуск ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Роман Кирилович */}
          <section className="section">
            <h2 className="section-title">Особистий бренд – Роман Кирилович</h2>
            <div className="content-block">
              <p className="lead-text">
                Роман - виконуючий директор та обличчя компанії Франч. Ріст його бренда та експертності - нові клієнти у Франч.
              </p>
            </div>

            <div className="achievements-block">
              <h3>За рік було створено:</h3>
              <div className="achievements-grid">
                <div className="achievement">
                  <span className="achievement-number">20+</span>
                  <span className="achievement-label">виступів на бізнес-івентах</span>
                </div>
                <div className="achievement">
                  <span className="achievement-number">5+</span>
                  <span className="achievement-label">інтерв'ю</span>
                </div>
                <div className="achievement">
                  <span className="achievement-icon">📈</span>
                  <span className="achievement-label">збільшення кількості підписників</span>
                </div>
                <div className="achievement">
                  <span className="achievement-icon">📰</span>
                  <span className="achievement-label">публікації у ЗМІ</span>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://t.me/franchupakovka" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"/>
                </svg>
                Telegram канал
              </a>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Галерея</h2>
            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild3133-6364-4437-b939-313435623662/photo536396416943664.jpg" alt="Франч" />
              <img src="https://static.tildacdn.ink/tild3662-3065-4338-b630-613532653734/photo536396416943664.jpg" alt="Франч івент" />
              <img src="https://static.tildacdn.ink/tild6665-3064-4039-a134-313465336536/photo536396416943664.jpg" alt="Франч" />
              <img src="https://static.tildacdn.ink/tild6436-3866-4436-b766-333665393932/photo536396416943664.jpg" alt="Франч" />
              <img src="https://static.tildacdn.ink/tild3131-3037-4666-a232-306565613563/photo536396416943664.jpg" alt="Франч" />
              <img src="https://static.tildacdn.ink/tild3636-3466-4437-a566-313433636134/photo520888507661036.jpg" alt="Франч" />
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
