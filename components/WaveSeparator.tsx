'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { WAVE_1, WAVE_2, WAVE_3, SMALL_WAVE_1, SMALL_WAVE_2, SMALL_WAVE_3 } from '@/utils/wavePaths'

gsap.registerPlugin(MorphSVGPlugin)

export function WaveSeparator() {
    const pathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        if (!pathRef.current) return

        const mm = gsap.matchMedia()

        mm.add('(max-width: 768px)', () => {
            pathRef.current!.setAttribute('d', SMALL_WAVE_1)

            gsap.timeline({ repeat: -1, yoyo: true })
                .to(pathRef.current, { duration: 10, morphSVG: SMALL_WAVE_2 })
                .to(pathRef.current, { duration: 10, morphSVG: SMALL_WAVE_3 })
        })

        mm.add('(min-width: 769px)', () => {
            pathRef.current!.setAttribute('d', WAVE_1)

            gsap.timeline({ repeat: -1, yoyo: true })
                .to(pathRef.current, { duration: 10, morphSVG: WAVE_2 })
                .to(pathRef.current, { duration: 10, morphSVG: WAVE_3 })
        })

        return () => mm.revert()
    }, [])

    return (
        <div className="relative z-30">
            <svg
                viewBox="0 0 1440 140"
                preserveAspectRatio="none"
                className="block w-full h-20 lg:h-40  "
            >
                <path
                    className='z-50'
                    ref={pathRef}
                    d={WAVE_1}
                    fill="var(--color-pink)"
                />
            </svg>
        </div>
    )
}
