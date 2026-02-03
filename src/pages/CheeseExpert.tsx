import Layout from '../components/Layout'

const cheeseVideos = [
  'https://www.youtube.com/embed/i3wOa7iHb9c',
  'https://www.youtube.com/embed/1yXQ3qOVqFQ',
  'https://www.youtube.com/embed/2GdfDzsH1zM',
]

export default function CheeseExpert() {
  return (
    <Layout showBackButton>
      <div className="page-header">
        <div className="cv-container">
          <span className="page-number">#4</span>
          <h1>Оксана Чернова</h1>
          <p className="page-subtitle">Робота над особистим брендом сирної експертки</p>
        </div>
      </div>

      <main className="main-content">
        <div className="cv-container">

          <section className="section">
            <h2 className="section-title">У мої обов'язки входило:</h2>
            <ul className="responsibilities-list large">
              <li>Робота над <strong>4 соц. мережами</strong> експерта</li>
              <li>Проведення власних івентів та приймання участі в наявних</li>
              <li>Робота із власними проєктами експертки</li>
            </ul>
          </section>

          {/* Соціальні мережі */}
          <section className="section">
            <h2 className="section-title">Соціальні мережі сирної експертки</h2>
            <div className="content-block">
              <p>
                Я працювала над вже створеними каналами комунікації, як <strong>Instagram</strong> та <strong>Facebook</strong> та ініціювала створення нових - <strong>TikTok</strong> та <strong>Linkedin</strong>.
              </p>
              <p>
                Працювала над: створенням контент плану, написанням постів, проведенням зйомок, монтаж та редагування фото/відео матеріалів, комунікація з підписниками. Координувала роботу з підрядниками по таргету та іншим напрямкам.
              </p>
            </div>

            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild3733-6635-4538-a635-363632636632/DSC03953.jpg" alt="Оксана Чернова" />
              <img src="https://static.tildacdn.ink/tild6535-3661-4163-b538-653638323236/DSC04884.jpg" alt="Сирна експертка" />
              <img src="https://static.tildacdn.ink/tild6663-3063-4335-b461-313938663935/DSC04958.jpg" alt="Сирна експертка" />
            </div>
          </section>

          {/* Івенти */}
          <section className="section">
            <h2 className="section-title">Івенти</h2>
            <div className="content-block">
              <p className="lead-text">
                Велика частина просування особистого бренду полягає у проведенні та прийманні участі в івентах.
              </p>
              <p>
                Саме тому, я організовувала та проводила заходи як в Україні, так і закордоном. У мої обов'язки входило планування щорічних міжнародних заходів, у яких експертка брала участь, бюджетування та переговори з організаторами.
              </p>
              <p>
                При організації івенту у мої обов'язки входила повна підготовка та супроводження.
              </p>
            </div>
          </section>

          {/* World Cheese Awards */}
          <section className="section">
            <h2 className="section-title">World Cheese Awards, Лондон</h2>
            <div className="content-block highlight-block">
              <p className="lead-text">
                З найбільших за останній рік — створення українського корнера на міжнародному сирному конкурсі — <strong>World Cheese Awards</strong>.
              </p>
              <p>
                Івент проходив у Лондоні, через що у мої обов'язки увійшли: перемовини з іноземними підрядниками, логістика та бюджетування.
              </p>
            </div>

            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild3338-3061-4539-b732-656132383366/photo_2024-01-21_21-.jpg" alt="World Cheese Awards" />
              <img src="https://static.tildacdn.ink/tild3361-3763-4162-b032-326637306536/photo_2024-01-21_21-.jpg" alt="World Cheese Awards" />
              <img src="https://static.tildacdn.ink/tild3537-6330-4437-a433-333664393161/photo_2024-01-21_21-.jpg" alt="World Cheese Awards" />
              <img src="https://static.tildacdn.ink/tild3835-3135-4261-b463-633230393365/photo_2024-01-21_21-.jpg" alt="World Cheese Awards" />
              <img src="https://static.tildacdn.ink/tild3862-3533-4530-a461-373433336132/photo_2024-01-21_21-.jpg" alt="World Cheese Awards" />
              <img src="https://static.tildacdn.ink/tild3962-3732-4266-a261-663436326532/photo_2024-01-21_21-.jpg" alt="World Cheese Awards" />
            </div>
          </section>

          {/* Інші заходи */}
          <section className="section">
            <h2 className="section-title">Інші заходи</h2>
            <div className="content-block">
              <p>
                Також, займалась проведенням пресконференції в <strong>УкрІнформ</strong> та заходами для українських сироварів.
              </p>
            </div>

            <div className="gallery-grid">
              <img src="https://static.tildacdn.ink/tild6464-3766-4932-a632-643764633466/photo_2024-01-21_21-.jpg" alt="Пресконференція" />
              <img src="https://static.tildacdn.ink/tild6533-3432-4430-a136-346134346166/photo_2024-01-21_21-.jpg" alt="Захід" />
            </div>
          </section>

          {/* Медіа */}
          <section className="section">
            <h2 className="section-title">Робота зі ЗМІ</h2>
            <div className="content-block">
              <p>
                Щотижневе написання статей в українські та міжнародні ЗМІ, відвідування телеканалів та радіоефірів.
              </p>
            </div>

            <h3 className="subsection-title">Відео:</h3>
            <div className="video-grid">
              {cheeseVideos.map((url, index) => (
                <div key={index} className="video-wrapper">
                  <iframe
                    src={url}
                    title={`Сирна експертка відео ${index + 1}`}
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
