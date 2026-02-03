"use client"
import { SERVICES } from '@/utils/general'
import { NailsCarousel } from './NailsCarousel'
import { Button } from './Button'

export function PinkSection() {
    return (
        <section className="relative bg-pink md:pt-0 -pt-20 pb-10 overflow-hidden z-30 -mt-[2px]">
            <NailsCarousel />

            <div className="py-10">
                <div className="mx-auto px-16 text-white">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="text-left">
                                <h3 className="mb-4 font-atelia text-3xl">{service.title}</h3>
                                <p className="text-base leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center space-y-10">
                        <p className="text-base text-center font-semibold leading-relaxed">Toutes les créations sont réalisées à la main et personnalisées selon vos envies.</p>
                        <Button bgColor="background"><p className='text-primary' onClick={() => window.open("https://www.instagram.com/chezaimee_/", "_blank")}
                        >POUR ME SUIVRE AU QUOTIDIEN</p></Button>
                    </div>
                </div>
            </div>

        </section >
    )
}
