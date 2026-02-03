import Image from "next/image";
import { Smiley } from "./Smileys";
import { POSITIONS } from "@/utils/general";
import SmallLogo from "@/components/SmallLogo";

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
                <SmallLogo className="mx-auto mb-6 h-24 w-24" />

                <h2 className="mt-2 mb-2 text-2xl md:text-3xl xl:text-5xl font-atelia">
                    Aimée,
                </h2>
                <h1 className="font-atelia text-2xl md:text-3xl xl:text-5xl leading-tight">
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
