import { siteConfig } from '@/config/site';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-12 border-t border-white/10" role="contentinfo">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bebas text-white tracking-widest uppercase mb-2">
                            {siteConfig.name}
                        </h3>
                        <p className="text-white/40 text-sm max-w-xs">
                            Premium custom wheel emblems, domed stickers, and hub cap stickers for automotive enthusiasts. Quality resin emblems for center wheel covers.
                        </p>
                    </div>

                    <nav className="flex gap-8 text-sm text-white/60" aria-label="Footer navigation">
                        <a href="https://hubcapstickers.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Privacy Policy</a>
                        <a href="https://hubcapstickers.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Terms of Use</a>
                        <a href="https://hubcapstickers.com/shipping-and-warranty/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Shipping Info</a>
                        <a href="https://hubcapstickers.com/contact-us/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Contact</a>
                    </nav>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
                    <p>© {currentYear} {siteConfig.name}. Premium wheel emblems, domed stickers, car decals, and hub cap stickers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
