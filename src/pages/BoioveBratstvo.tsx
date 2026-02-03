import Layout from '../components/Layout'

const bbVideos = [
  'https://www.youtube.com/embed/txfENEuk7hk',
  'https://www.youtube.com/embed/628DG7-agaA',
  'https://www.youtube.com/embed/KD__OmDhLMo',
  'https://www.youtube.com/embed/PyQXN384ZRU',
  'https://www.youtube.com/embed/By2NvxeHoiY',
  'https://www.youtube.com/embed/zTKEPNTjXGk',
]

export default function BoioveBratstvo() {
  return (
    <Layout showBackButton>
      <div className="page-header page-header-dark">
        <div className="cv-container">
          <span className="page-number">#5</span>
          <h1>Бойове Братерство України</h1>
          <p className="page-subtitle">Військово-Цивільна Спілка • Комунікаційниця</p>
        </div>
      </div>

      <main className="main-content">
        <div className="cv-container">

          <section className="section">
            <h2 className="section-title">Обов'язки</h2>
            <div className="responsibilities-grid">
              <div className="responsibility-card">
                <h4>Управління комунікаціями в соцмережах</h4>
                <p>Висвітлення поточної діяльності організації у <strong>Facebook, Instagram, Telegram</strong>, розробка контент-стратегії та редакційних планів.</p>
              </div>

              <div className="responsibility-card">
                <h4>Організація івентів</h4>
                <p>Організація та супровід <strong>внутрішніх і зовнішніх конференцій</strong>, публічних заходів та виступів стейкхолдерів.</p>
              </div>

              <div className="responsibility-card">
                <h4>Партнерські комунікації</h4>
                <p>Запуск спільних проєктів із <strong>благодійними фондами та державними установами</strong>.</p>
              </div>

              <div className="responsibility-card">
                <h4>Медіа-зв'язки</h4>
                <p>Координація інформаційного висвітлення діяльності в ЗМІ по всій Україні, співпраця з <strong>телеканалами та регіональними редакціями</strong>.</p>
              </div>

              <div className="responsibility-card">
                <h4>Управління командою</h4>
                <p>Керівництво командою з <strong>3+ осіб</strong>, розподіл задач і контроль ефективності виконання.</p>
              </div>
            </div>
          </section>

          {/* Партнери */}
          <section className="section">
            <h2 className="section-title">Колаборація з партнерами</h2>
            <div className="content-block">
              <h4>Спільні проєкти з благодійними організаціями:</h4>
              <p>"Благодійний Фонд Родини Жебрівських", "Сила – коли ми разом", "Академічний простір", "За сімейні цінності" тощо.</p>

              <h4>Спільні заходи з державними установами:</h4>
              <p>Міноборони, Мінвет та ОДА, ОВА тощо по всій території України.</p>

              <h4>Партнерство:</h4>
              <p>АТ "Фармак" та інші бізнеси.</p>
            </div>
          </section>

          {/* Батьківське серце */}
          <section className="section">
            <h2 className="section-title">Проєкт «Батьківське серце»</h2>
            <div className="content-block highlight-block">
              <p className="lead-text">
                Здебільшого, займалась висвітленням найбільш медійного проєкту ББУ – <strong>«Батьківське серце»</strong>.
              </p>
              <p>
                Проєкт «Батьківське серце» – це вшанування пам'яті загиблих Героїв війни України та вручення їх дітям іменних кулонів з ініціалами загиблого батька чи матері.
              </p>
              <p>
                За час моєї роботи було створено <strong>понад 50 статей</strong> та численні публікації у ЗМІ.
              </p>
            </div>

            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild6231-3161-4236-b439-336439656234/ea4d11a3-c2bd-45a3-8.jpg" alt="Батьківське серце" />
              <img src="https://static.tildacdn.ink/tild3238-3561-4639-a338-353434346535/photo521563348813963.jpg" alt="Батьківське серце" />
              <img src="https://static.tildacdn.ink/tild3361-6361-4063-a637-303731333239/photo521563348813963.jpg" alt="Батьківське серце" />
              <img src="https://static.tildacdn.ink/tild6437-3531-4366-b661-656262366531/photo521563348813963.jpg" alt="Батьківське серце" />
              <img src="https://static.tildacdn.ink/tild6362-3732-4765-b137-383432616633/photo525623233651996.jpg" alt="Батьківське серце" />
              <img src="https://static.tildacdn.ink/tild3165-6461-4235-b561-663537663761/photo536396416943664.jpg" alt="Батьківське серце" />
            </div>
          </section>

          {/* Відео */}
          <section className="section">
            <h2 className="section-title">Відео</h2>
            <div className="video-grid">
              {bbVideos.map((url, index) => (
                <div key={index} className="video-wrapper">
                  <iframe
                    src={url}
                    title={`ББУ відео ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
