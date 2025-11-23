import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t bg-muted/30 py-12" >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(500px_250px_at_10%_100%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(400px_200px_at_90%_100%,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
                <span className="font-bold text-xl">Dr. Marc Lewis</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Leading expert in applied sports science, dedicated to optimizing athletic performance
                through evidence-based strategies and cutting-edge research.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/media" className="text-muted-foreground hover:text-primary transition-colors">Media</Link></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">ResearchGate</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Dr. Marc Lewis. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer >
  );
}