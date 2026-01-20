import Image from "next/image";
import { Smiley } from "./Smileys";
import { POSITIONS } from "@/utils/general";

export default function HeroSection() {
    return (
        <section className="relative md:h-[50vh] h-[70vh] px-4  overflow-hidden-">
            {/* Decorative layer */}
            <div className="pointer-events-none absolute inset-0 z-10">
                {POSITIONS.map((_, i) => (
                    <Smiley key={i} index={i} />
                ))}
            </div>
            {/* Content */}
            <div className="flex justify-center z-20 relative flex-col items-center h-full text-center max-w-3xl mx-auto ">
                <img
                    src="/small_logo.svg"
                    alt="Chez Aimée – Salon de manucure à Bordeaux"
                    width={96}
                    height={96}
                    className="mx-auto mb-6 block will-change-auto"
                />
                <h2 className="mt-2 mb-6 text-2xl md:text-3xl xl:text-5xl font-display">
                    Aimée,
                </h2>
                <h1 className="font-display text-2xl md:text-3xl xl:text-5xl leading-tight">
                    PROTHÉSISTE ONGULAIRE
                </h1>
                <p className="mt-4 text-sm md:text-lg leading-relaxed">
                    Que vous aimiez les ongles naturels, élégants ou
                    complètement créatifs, chaque pose est réalisée
                    avec soin, précision et bonne humeur&nbsp;!
                </p>
            </div>
        </section>
    )
}
