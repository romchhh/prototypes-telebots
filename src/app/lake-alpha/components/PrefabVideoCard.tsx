'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BRAND } from '../brand'
import styles from './PrefabVideoCard.module.css'

export default function PrefabVideoCard() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        className={styles.glassCard}
        onClick={() => setOpen(true)}
        aria-label="Відтворити відео про Prefab-технологію"
      >
        <div className={styles.glassThumb}>
          <Image
            src={`https://img.youtube.com/vi/${BRAND.prefabVideoId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="420px"
            className={styles.glassImg}
          />
          <span className={styles.playBtn} aria-hidden="true">
            <svg width="18" height="20" viewBox="0 0 14 16" fill="white">
              <path d="M0 0 L14 8 L0 16 Z"/>
            </svg>
          </span>
        </div>
        <div className={styles.glassText}>
          <span className={styles.glassLabel}>Prefab-технологія</span>
          <p className={styles.glassDesc}>
            Будинок збирається на заводі за 3–6 тижнів.
            Монтаж на ділянці — лише 1–2 дні.
          </p>
        </div>
      </button>

      {open && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label="Відео Prefab-технологія"
          onClick={() => setOpen(false)}
        >
          <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpen(false)}
              aria-label="Закрити відео"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4 L20 20 M20 4 L4 20"/>
              </svg>
            </button>
            <div className={styles.videoWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${BRAND.prefabVideoId}?autoplay=1&rel=0`}
                title="Prefab-технологія HutJet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
