import Link from 'next/link';
import React from 'react';

interface Props {
    copyrightYear: number;
}

const linksData = [
    { label: 'Resep Populer', href: '/' },
    { label: 'Resep Baru', href: '/' },
    { label: 'Resep Nusantara', href: '/' },
    { label: 'Belanja', href: '/' },
];

const sectionsData = [
    { title: 'Resep', links: linksData },
    { title: 'Tentang', links: ['Tentang Kami', 'Kontak', 'Karir'].map(label => ({ label, href: '/' })) },
    { title: 'Media Sosial', links: ['X', 'Facebook', 'Instagram', 'YouTube'].map(label => ({ label, href: '/' })) },
];

const Footer = ({ copyrightYear }: Props) => {
    return (
        <footer className="bg-white px-10 py-8">
            <div className="max-w-screen-xl mx-auto text-gray-500 md:flex md:justify-between">
                <div className="mb-4 md:mb-0">
                    <Link
                        href="/"
                        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                    >
                        Lidah Nusantara
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    {sectionsData.map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                {section.title}
                            </h2>
                            <ul className="text-gray-600">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-4">
                                        <Link href={link.href} className="hover:underline">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
                <p className="text-sm text-gray-500">
                    &copy; {copyrightYear} Lidah Nusantara. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
