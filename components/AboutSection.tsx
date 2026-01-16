"use client";

import Image from "next/image";
import { Button } from "./Button";
import { Instagram } from "lucide-react";

// components/AboutSection.tsx
export function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden ">
            {/* Grid Background */}
            <div className="grid-background"></div>

            {/* Content */}
            <div className="z-10 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-background rounded-lg z-10">
                    <Image
                        src="/photos/about.png"
                        alt="About Us"
                        className="rounded-lg"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="p-8 bg-background rounded-lg z-10">
                    <h2 className="text-4xl font-bold mb-6 text-center font-display text-primary">Pour en savoir plus</h2>
                    <p className="text-lg leading-relaxed text-primary mb-4">
                        Je m’appelle Aimée, prothésiste ongulaire diplômée et passionnée par le monde de l’onglerie.
                    </p>
                    <h3 className="font-bold text-lg mt-4">Mon objectif ?</h3>
                    <p className="text-lg leading-relaxed text-primary mb-4">
                        Vous proposer des poses soignées, durables et adaptées à votre style, dans une ambiance conviviale et détendue.
                    </p>
                    <p className="text-lg leading-relaxed text-primary">
                        Des ongles naturels, élégants, colorés ou audacieux… il y en a pour tous les goûts !
                    </p>
                    <p className="text-lg font-bold leading-relaxed text-primary mb-4">
                        Je suis à l’écoute de vos envies, même les plus créatives.
                    </p>
                    <p className="text-lg leading-relaxed text-primary">
                        Je vous accueille dans mon institut fleuri, coloré et chaleureux en plein cœur du quartier des Chartrons à Bordeaux.
                    </p>
                    <p className="text-lg leading-relaxed text-center mt-10 text-primary">
                        Pour prendre rdv , ça se passe ici :
                    </p>
                    <div className="flex justify-center">
                    <Button bgColor="primary" textColor="background" rightIcon={Instagram} className="mt-4 mx-auto block"><p className="text-background">RÉSERVER MON RENDEZ-VOUS</p></Button>

                    </div>
                </div>
            </div>

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
    )
}