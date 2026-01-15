'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { WAVE_1, WAVE_2, WAVE_3 } from '@/utils/wavePaths'

gsap.registerPlugin(MorphSVGPlugin)

export function WaveSeparator() {
    const pathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        if (!pathRef.current) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return


        // respect reduced motion
        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return
        }
        gsap.to(pathRef.current, {
            scrollTrigger: {
                trigger: pathRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            morphSVG: WAVE_2,
        })

        gsap.timeline({ repeat: -1, yoyo: true })
            .to(pathRef.current, {
                duration: 10,
                morphSVG: WAVE_2,
                ease: 'sine.inOut',
            })
            .to(pathRef.current, {
                duration: 10,
                morphSVG: WAVE_3,
                ease: 'sine.inOut',
            })
    }, [])

    return (
        <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            className="block w-full h-32 md:h-40 z-50 "
        >
            <path
                ref={pathRef}
                d={WAVE_1}
                fill="var(--color-pink)"
            />
        </svg>
    )
}
