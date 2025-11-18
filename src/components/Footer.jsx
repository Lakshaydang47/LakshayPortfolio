import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Send 
} from "lucide-react";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  // Newsletter submit state
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    const response = await fetch("https://formsubmit.co/lakshaydang764@gmail.com", {
      method: "POST",
      body: formData,
    });

    setIsNewsletterSubmitting(false);

    if (response.ok) {
      toast({
        title: "Subscribed!",
        description: "You're now subscribed to our newsletter.",
      });
      e.target.reset();
    } else {
      toast({
        title: "Subscription Failed!",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Testimonials", "Integration"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Blog", "Community"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">Lakshay's Portfolio.co</h2>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Building digital experiences that matter. Innovative solutions for modern problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-foreground mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and tech news.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />

              <button
                type="submit"
                disabled={isNewsletterSubmitting}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {isNewsletterSubmitting ? "Subscribing..." : "Subscribe"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>&copy; {currentYear} Lakshay's Portfolio.co. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>

            <a
              href="#hero"
              className="group p-3 rounded-full bg-secondary hover:bg-primary/10 text-secondary-foreground hover:text-primary transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
