import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    'Privacy Policy', 'Terms of Service', 'Copyright Policy', 'Data Policy', 'Accessibility', 'Help'
  ];

  return (
    <footer className="max-w-screen-xl mx-auto border-t border-zinc-800 mt-12 px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-zinc-400">
          {footerLinks.map(link => (
            <Link key={link} href="#" className="hover:text-white">
              {link}
            </Link>
          ))}
        </div>
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Martin pre Vás, All rights reserved.
        </p>
      </div>
    </footer>
  );
}