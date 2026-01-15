import Image from "next/image";
import { Smiley } from "./Smileys";
import { POSITIONS } from "@/utils/general";

export default function HeroSection() {
    return (
        <section className="relative h-[50vh] px-4 pt-16 overflow-hiddenpy-">
            {/* Decorative layer */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
                {POSITIONS.map((_, i) => (
                    <Smiley key={i} index={i} />
                ))}
            </div>
            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <Image
                    src="/small_logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="mx-auto mb-6 w-auto"
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
