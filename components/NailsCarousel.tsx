"use client"
import Image from "next/image"

const IMAGES = [
    { photo_path: '/photos/nails_1.png', description: 'Semi permanent' },
    { photo_path: '/photos/nails_2.png', description: "Capsule gel X" },
    { photo_path: '/photos/nails_3.png', description: "Capsule gel X" },
    { photo_path: '/photos/nails_4.png', description: "Gainage" },
    { photo_path: '/photos/nails_5.png', description: "Gainage" },
    { photo_path: '/photos/nails_6.png', description: "Gainage" },
    { photo_path: '/photos/nails_7.png', description: "Gainage" },
    { photo_path: '/photos/nails_8.png', description: "Semi permanent" },
    { photo_path: '/photos/nails_9.png', description: "Gel X" },
    { photo_path: '/photos/nails_10.png', description: "Gainage" }
]

const OFFSETS = ['mt-0', 'lg:mt-24 mt-6', 'mt-0', 'lg:mt-24 mt-6']

export function NailsCarousel() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="carousel-track flex">
                {[...IMAGES, ...IMAGES, ...IMAGES].map((item, i) => (
                    <div
                        key={i}
                        className={`relative rounded-full overflow-hidden group bg-blue-200 w-246 h-246 lg:w-[246px] lg:h-[246px] m-4 flex-shrink-0 ${OFFSETS[i % OFFSETS.length]}`}
                    >
                        <Image
                            key={i}
                            src={item.photo_path}
                            width={246}
                            height={246}
                            alt={`Nail design ${i % IMAGES.length + 1}`}
                            className={`lg:h-[246px] lg:w-[246px] w-[130px] h-[130px] rounded-full object-cover`}
                        />

                        <div className=" absolute inset-0 bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-primary font-display text-center text-sm lg:text-lg font-medium px-4">
                                {item.description}
                            </p>
                        </div>
                    </div>

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
        </div >
    )
}
