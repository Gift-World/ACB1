import  { useState, useEffect } from 'react';
import { Menu, X, Home, Mic, Info, HelpCircle, MoreHorizontal, Facebook, Instagram, Youtube, Music } from 'lucide-react';

const HeaderAudition = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
        }`}>
            <div className=" mx-auto px-4 pt-10 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                            <Music className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold">
                            <span className="text-white">ACB</span>
                            <span className="text-orange-500 ml-2">AUDITIONS</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {/*<a href="#" className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">*/}
                        {/*    <Home className="w-4 h-4" />*/}
                        {/*    <span>HOME</span>*/}
                        {/*</a>*/}
                        <a href="#" className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">
                            <Mic className="w-4 h-4" />
                            <span>AUDITION NOW</span>
                        </a>
                        <a href="#" className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">
                            <Info className="w-4 h-4" />
                            <span>ABOUT</span>
                        </a>
                        {/*<a href="#" className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">*/}
                        {/*    <HelpCircle className="w-4 h-4" />*/}
                        {/*    <span>FAQ</span>*/}
                        {/*</a>*/}
                        {/*<a href="#" className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">*/}
                        {/*    <MoreHorizontal className="w-4 h-4" />*/}
                        {/*    <span>MORE</span>*/}
                        {/*</a>*/}
                    </nav>

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Facebook className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-white hover:text-pink-400 cursor-pointer transition-colors" />
                        <Youtube className="w-5 h-5 text-white hover:text-red-400 cursor-pointer transition-colors" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800">
                        <nav className="flex flex-col space-y-4 p-4">
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">HOME</a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">AUDITION NOW</a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">ABOUT</a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">FAQ</a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">MORE</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderAudition;