import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12 w-full relative z-10">
      <div className="absolute inset-0 -z-10" />
      <div className="container w-full max-w-7xl mx-auto px-4">
        <div className="items-center mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-2 justify-center items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-bold text-xl">Dr. Marc Lewis</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Leading expert in applied sports science, dedicated to optimizing athletic performance through evidence-based strategies and cutting-edge research.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="text-muted-foreground hover:text-primary transition-colors">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://x.com/marctlewis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/marctlewis/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.researchgate.net/profile/Marc-Lewis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ResearchGate
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sportsmith.co/contributors/marc-lewis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sportsmith
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Marc Lewis. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}