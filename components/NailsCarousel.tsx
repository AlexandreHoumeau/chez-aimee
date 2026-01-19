"use client"
import Image from "next/image"

// components/NailsCarousel.tsx
const IMAGES = [
    '/photos/nails_1.png',
    '/photos/nails_2.png',
    '/photos/nails_3.png',
    '/photos/nails_4.png',
]

const OFFSETS = ['mt-0', 'lg:mt-24 mt-6', 'mt-0', 'lg:mt-24 mt-6']

export function NailsCarousel() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="carousel-track">
                {[...IMAGES, ...IMAGES, ...IMAGES].map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        width={246}
                        height={246}
                        alt={`Nail design ${i % IMAGES.length + 1}`}
                        className={`lg:h-[246px] lg:w-[246px] w-[130px] h-[130px] rounded-full object-cover ${OFFSETS[i % OFFSETS.length]}`}
                    />
                ))}
            </div>
            <style jsx>{`
                .carousel-track {
                    display: flex;
                    gap: 4rem;
                    animation: scroll-left 60s linear infinite;
                    will-change: transform;
                }

                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-1200px);
                    }
                }
            `}</style>
        </div>
    )
}