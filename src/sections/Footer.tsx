import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/deepesh8216',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/Deep_aish_LIm',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/deepesh1.618/?hl=en',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepesh-kumar-a2447134a/',
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-20">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5 z-20 pointer-events-auto" target="_blank" rel="noopener noreferrer">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};