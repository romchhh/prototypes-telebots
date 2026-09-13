'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './About.module.css'

const VIDEO_ID = 't3e9N7PrZWA'
const PREVIEW = '/images/cartel/about-preview.jpg'

export default function About() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="pro-nas" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>
            Про <em>CARTEL</em>
          </h2>
          <div className={styles.body}>
            <p>
              У 2004 році ми почали реалізовувати перші гастрономічні проєкти у «Буковелі».
              За роки роботи компанія CARTEL відкрила 19 ресторанів — заклади української,
              італійської, азійської та американської кухні, а також мережу швидкого харчування EatʼnʼGo!
            </p>
            <p>
              Сімʼя ресторанів представлена не лише в Буковелі, а й у Яремче та Одесі.
              Усі заклади славляться сервісом, атмосферою та кухнею.
            </p>
            <p>
              Сьогодні CARTEL — холдинг, що обʼєднує готелі в Буковелі, обʼєкти нерухомості,
              SPA-комплекс VODA club, lounge-zone VERANDA, автентичну «Банька на дровах» та інші проєкти.
            </p>
          </div>
          <p className={styles.credo}>
            Наша ідея — дати українцям можливість доступно відпочивати вдома, з якістю послуг європейського рівня.
          </p>
        </div>

        <div className={styles.visual}>
          {playing ? (
            <iframe
              className={styles.video}
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="CARTEL — про компанію"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              type="button"
              className={styles.preview}
              onClick={() => setPlaying(true)}
              aria-label="Дивитися відео про CARTEL"
            >
              <Image
                src={PREVIEW}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.previewImg}
                priority={false}
              />
              <span className={styles.previewShade} aria-hidden="true" />
              <span className={styles.play} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5L8 5.5z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
