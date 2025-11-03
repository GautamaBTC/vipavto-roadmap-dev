import { Moon, Sun, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#advantages" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">V</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">VipАвто</h1>
              <p className="text-xs text-muted-foreground">Автосервис</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden sm:inline-flex"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Переключить тему</span>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => scrollToSection("#contacts")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Связаться
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("#contacts")}
              className="justify-start"
            >
              <Phone className="mr-2 h-4 w-4" />
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
