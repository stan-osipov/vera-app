import Layout from '../components/Layout'

export default function Akademiya() {
  return (
    <Layout showBackButton>
      <div className="page-header">
        <div className="cv-container">
          <span className="page-number">#2</span>
          <h1>Академія Ганни Різатдінової</h1>
          <p className="page-subtitle">PR-менеджер проєкту та особистого бренду</p>
        </div>
      </div>

      <main className="main-content">
        <div className="cv-container">

          <section className="section">
            <div className="content-block">
              <p className="lead-text">
                Була PR-менеджером проєкту «Академія Ганни Різатдінової» та PR-менеджером самої Ганни.
              </p>
              <p className="quote-highlight">
                Що входило до моїх обов'язків? <strong>Усе.</strong>
              </p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Обов'язки</h2>
            <div className="content-block">
              <p>
                Я обіймала посаду PR-менеджера проєкту «Академія Ганни Різатдінової», а також працювала з особистим брендом Ганни. У мої обов'язки входила:
              </p>
              <ul className="responsibilities-list">
                <li><strong>Організація та реалізація комплексних PR-кампаній</strong> для Академії</li>
                <li>Розробка та впровадження <strong>комунікаційних стратегій</strong></li>
                <li>Робота з партнерами: <strong>Under Armour, Parimatch, YARO</strong></li>
                <li>Опрацювання запитів на рекламу</li>
                <li>Створення та адаптація <strong>контенту для соціальних мереж</strong></li>
                <li>Організація та проведення <strong>турнірів, заходів і спортивних змагань</strong></li>
                <li>Участь у розробці <strong>мерчу</strong> Академії, координація процесів виробництва</li>
                <li>Ведення <strong>звітності й документації</strong></li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Галерея</h2>
            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild6465-6361-4939-a265-623432366332/8b7e0067-b64f-4536-a.jpg" alt="Академія" />
              <img src="https://static.tildacdn.ink/tild6565-3266-4663-a563-333964656134/IMG_4170.jpg" alt="Академія івент" />
              <img src="https://static.tildacdn.ink/tild3666-3339-4934-b162-343431346634/c88e4d4c-869e-44c8-b.jpg" alt="Академія команда" />
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
