import { Instagram } from 'lucide-react';
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                    <p className="text-sm text-center md:text-left font-semibold">Chez Aimée – Prothésiste ongulaire à Bordeaux</p>
                </div>

                <div className="text-center">
                    <p className="text-sm">© {currentYear} – Tous droits réservés</p>
                </div>

                <div className="flex items-center justify-center md:justify-end gap-2">
                    <p className="text-sm">Suivez-moi sur instagram</p>
                    <a href="https://www.instagram.com/chezaimee_/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} className="hover:opacity-75 transition-opacity" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
