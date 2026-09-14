'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { LayerGroup, Map as LeafletMap } from 'leaflet'
import { CLUBS, DISTRICTS, type District } from '../brand'
import styles from './ClubsMap.module.css'
import 'leaflet/dist/leaflet.css'

type Club = (typeof CLUBS)[number]

function MapCanvas({
  clubs,
  activeId,
  onSelect,
}: {
  clubs: readonly Club[]
  activeId?: string
  onSelect: (id: string) => void
}) {
  const elRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const groupRef = useRef<LayerGroup | null>(null)
  const onSelectRef = useRef(onSelect)
  const [ready, setReady] = useState(false)
  onSelectRef.current = onSelect

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    let cancelled = false

    ;(async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !elRef.current) return

      const map = L.map(elRef.current, {
        scrollWheelZoom: true,
        zoomControl: true,
      }).setView([50.4501, 30.5234], 11)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      groupRef.current = L.layerGroup().addTo(map)
      mapRef.current = map
      setReady(true)
      requestAnimationFrame(() => map.invalidateSize())
    })()

    return () => {
      cancelled = true
      setReady(false)
      mapRef.current?.remove()
      mapRef.current = null
      groupRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    const group = groupRef.current
    if (!ready || !map || !group) return
    let disposed = false

    ;(async () => {
      const L = (await import('leaflet')).default
      if (disposed || !groupRef.current) return

      group.clearLayers()

      clubs.forEach((club) => {
        const active = club.id === activeId
        const icon = L.divIcon({
          className: active ? `${styles.marker} ${styles.markerOn}` : styles.marker,
          html: `<span class="${styles.markerDot}"></span>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        })
        L.marker([club.lat, club.lng], { icon, title: club.name })
          .addTo(group)
          .bindTooltip(club.name, { direction: 'top', offset: [0, -12], opacity: 1 })
          .on('click', () => onSelectRef.current(club.id))
      })
    })()

    return () => {
      disposed = true
    }
  }, [ready, clubs, activeId])

  useEffect(() => {
    const map = mapRef.current
    if (!ready || !map) return
    let disposed = false

    ;(async () => {
      const L = (await import('leaflet')).default
      if (disposed || !mapRef.current) return

      if (clubs.length === 1) {
        map.fitBounds(L.latLngBounds([[clubs[0].lat, clubs[0].lng]]), { maxZoom: 14, padding: [48, 48] })
      } else if (clubs.length > 1) {
        const bounds = L.latLngBounds(clubs.map((c) => [c.lat, c.lng] as [number, number]))
        map.fitBounds(bounds, { padding: [48, 48], maxZoom: 13 })
      } else {
        map.setView([50.4501, 30.5234], 10)
      }
      requestAnimationFrame(() => map.invalidateSize())
    })()

    return () => {
      disposed = true
    }
  }, [ready, clubs])

  useEffect(() => {
    const map = mapRef.current
    const club = clubs.find((c) => c.id === activeId)
    if (!ready || !map || !club) return
    map.panTo([club.lat, club.lng], { animate: true, duration: 0.45 })
  }, [ready, activeId, clubs])

  return <div ref={elRef} className={styles.mapCanvas} />
}

export default function ClubsMap() {
  const [district, setDistrict] = useState<District>('Усі')
  const [active, setActive] = useState<string>(CLUBS[0].id)

  const clubs = useMemo(
    () => CLUBS.filter((c) => district === 'Усі' || c.district === district),
    [district],
  )

  const selected = clubs.find((c) => c.id === active) ?? clubs[0]

  return (
    <section id="kluby" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            <span>Карта</span>
            <em>клубів</em>
          </h2>
          <p className={styles.lead}>Фільтр по районах Києва та області. Оберіть пін на карті або картку в списку.</p>
        </div>

        <div className={styles.filters} role="tablist" aria-label="Райони">
          {DISTRICTS.map((d) => (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={district === d}
              className={`${styles.chip} ${district === d ? styles.chipActive : ''}`}
              onClick={() => {
                setDistrict(d)
                const next = CLUBS.find((c) => d === 'Усі' || c.district === d)
                if (next) setActive(next.id)
              }}
            >
              {d}
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          <div className={styles.map} aria-label="Інтерактивна карта клубів Києва">
            <MapCanvas clubs={clubs} activeId={selected?.id} onSelect={setActive} />
          </div>

          <div className={styles.list}>
            {clubs.map((club) => (
              <button
                key={club.id}
                type="button"
                className={`${styles.club} ${selected?.id === club.id ? styles.clubActive : ''}`}
                onClick={() => setActive(club.id)}
              >
                <span className={styles.clubDistrict}>{club.district}</span>
                <strong>{club.name}</strong>
                <span>{club.address}</span>
                <span className={styles.clubHours}>{club.hours}</span>
              </button>
            ))}
            {!clubs.length && <p className={styles.empty}>У цьому районі поки немає клубів.</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
