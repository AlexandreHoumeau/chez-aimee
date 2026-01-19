"use client";

import Image from "next/image";
import { Button } from "./Button";
import { Instagram } from "lucide-react";

export function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Grid background */}
            <div className="grid-background" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

                {/* Image card */}
                <div className="p-6 lg:order-1 order-2 sm:p-8 bg-background rounded-lg h-auto lg:h-full">
                    <div className="relative w-full h-[320px] lg:h-full">
                        <div className="relative h-full">
                            <Image
                                src="/photos/about.png"
                                alt="Aimée — Prothésiste ongulaire"
                                fill
                                className="rounded-lg object-cover"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Text card */}
                <div className="p-6 sm:p-8 lg:order-2 order-1 bg-background rounded-lg flex flex-col">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-primary text-center mb-6">
                        Pour en savoir plus
                    </h2>

                    <p className="text-base sm:text-lg text-primary leading-relaxed mb-4">
                        Je m’appelle Aimée, prothésiste ongulaire diplômée et passionnée par le monde de l’onglerie.
                    </p>

                    <h3 className="font-bold text-base sm:text-lg mt-4 mb-2">
                        Mon objectif ?
                    </h3>

                    <p className="text-base sm:text-lg text-primary leading-relaxed mb-4">
                        Vous proposer des poses soignées, durables et adaptées à votre style, dans une ambiance conviviale et détendue.
                    </p>

                    <p className="text-base sm:text-lg text-primary leading-relaxed mb-4">
                        Des ongles naturels, élégants, colorés ou audacieux… il y en a pour tous les goûts !
                    </p>

                    <p className="text-base sm:text-lg font-bold text-primary leading-relaxed mb-4">
                        Je suis à l’écoute de vos envies, même les plus créatives.
                    </p>

                    <p className="text-base sm:text-lg text-primary leading-relaxed">
                        Je vous accueille dans mon institut fleuri, coloré et chaleureux en plein cœur du quartier des Chartrons à Bordeaux.
                    </p>

                    <p className="text-base sm:text-lg text-primary text-center mt-10">
                        Pour prendre rendez-vous, ça se passe ici :
                    </p>

                    <div className="mt-6 flex justify-center">
                        <Button
                            bgColor="primary"
                            textColor="background"
                            rightIcon={Instagram}
                            className="w-full sm:w-auto"
                        >
                            RÉSERVER MON RENDEZ-VOUS
                        </Button>
                    </div>
                </div>
            </div>

            {/* Grid background styles */}
            <style jsx>{`
        .grid-background {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(45deg, #FD9491 25%, transparent 25%),
            linear-gradient(-45deg, #FD9491 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #FD9491 75%),
            linear-gradient(-45deg, transparent 75%, #FD9491 75%);
          background-size: 76px 76px;
          background-position: 0 0, 0 38px, 38px -38px, -38px 0px;
          background-color: #EBB625;
          width: 100%;
          min-height: calc(22 * 38px);
        }
      `}</style>
        </section>
    );
}
