import Image from 'next/image'
import { MARATHON_BRAND, MARATHON_LOGO } from '../brand'
import styles from './BrandLogo.module.css'

type Props = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
  className?: string
}

export default function BrandLogo({
  href = '/marathon',
  size = 'md',
  variant = 'light',
  className = '',
}: Props) {
  const content = (
    <>
      <Image
        src={MARATHON_LOGO}
        alt={MARATHON_BRAND}
        width={120}
        height={120}
        className={styles.mark}
        priority={size !== 'lg'}
      />
      <span className={`${styles.text} ${variant === 'dark' ? styles.darkText : ''}`}>
        <span className={styles.line1}>Royal Academy</span>
        <span className={styles.line2}>School</span>
      </span>
    </>
  )

  const classNames = [styles.logo, size === 'lg' ? styles.lg : '', size === 'sm' ? styles.sm : '', className]
    .filter(Boolean)
    .join(' ')

  if (!href) {
    return <div className={classNames}>{content}</div>
  }

  return (
    <a href={href} className={classNames} aria-label={MARATHON_BRAND}>
      {content}
    </a>
  )
}
