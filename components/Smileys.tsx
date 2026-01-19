'use client'
import { POSITIONS } from '@/utils/general'
import { useEffect, useState } from 'react'

export function Smiley({ index }: { index: number }) {
  const pos = POSITIONS[index]

  const [offset, setOffset] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  // Viewport detection
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)

    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Parallax speed
  const speedMap: Record<string, number> = {
    small: 0,
    medium: 0.1,
    large: 0.3,
  }
  const speed = speedMap[pos.size ?? 'small']

  useEffect(() => {
    if (speed === 0) return

    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  // ✅ Decide rendering AFTER hooks
  if (pos.responsive === false && !isDesktop) {
    return null
  }

  const widthMap: Record<string, string> = {
    small: 'w-10 xl:w-12',
    medium: 'w-14 xl:w-16',
    large: 'w-10 lg:w-16 xl:w-20',
  }

  return (
    <img
      src="/smiley.png"
      aria-hidden
      className={`absolute opacity-60 lg:opacity-100 pointer-events-none z-0 ${
        widthMap[pos.size ?? 'small']
      }`}
      style={{
        ...pos,
        transform: `translateY(${offset}px)`,
      }}
    />
  )
}
