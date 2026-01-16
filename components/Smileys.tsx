"use client"
import { POSITIONS } from "@/utils/general"
import { useEffect, useState } from "react"


export function Smiley({ index }: { index: number }) {
  const pos = POSITIONS[index]
  const [offset, setOffset] = useState(0)

  // Parallax speed mapping by size
  const speedMap: { [key: string]: number } = {
    small: 0,     // no parallax
    medium: 0.1, // subtle
    large: 0.3,   // stronger
  }
  const speed = speedMap[pos.size || 'small']

  useEffect(() => {
    if (speed === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      setOffset(scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  // Map size to width classes
  const widthMap: { [key: string]: string } = {
    small: 'w-10 xl:w-12',
    medium: 'w-14 xl:w-16',
    large: 'w-10 lg:w-16 xl:w-20',
  }
  const widthClass = widthMap[pos.size || 'small']

  return (
    <img
      src="/smiley.png"
      alt=""
      aria-hidden
      className={`absolute lg:opacity-100 opacity-60 pointer-events-none z-0 ${widthClass}`}
      style={{
        ...pos,
        transform: `translateY(${offset}px)`,
      }}
    />
  )
}
