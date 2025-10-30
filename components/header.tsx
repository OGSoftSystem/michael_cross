"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/utils";
// import { ArrowBigUp } from "lucide-react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Leadership", path: "/leadership" },
  { title: "News", path: "/news" },
  { title: "Locations", path: "/locations" },
  { title: "Benefits", path: "/benefits" },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showArrow, setShowArrow] = useState(false);

  // const handleScrollToTop = useCallback(() => {
  //   if (window.scrollY > 100) {
  //     setShowArrow(true);
  //   }
  //   setShowArrow(false);
  // }, [setShowArrow]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollToTop);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollToTop);
  //   };
  // }, [handleScrollToTop]);

  // Close mobile menu when route changes - Fixed useEffect
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    handleRouteChange();
  }, [pathname]);

  // Add scroll effect - Fixed with proper cleanup
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="inline-flex space-x-2 items-center">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="Michael Cross Hospital Logo"
                width={120}
                height={60}
                className="w-auto h-10 lg:h-12 transition-all duration-300"
                priority
              />
            </Link>
            <h3 className="lg:block hidden text-app-blue font-semibold text-lg">
              Michael Cross Specialist Hospital
            </h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(1).map((link) => {
              const isActive =
                pathname === link.path || pathname.startsWith(link.path + "/");

              return (
                <Link
                  key={link.title}
                  href={link.path}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                    "hover:text-app-vio hover:bg-gray-50",
                    isActive
                      ? "text-app-blue bg-blue-50 font-semibold"
                      : "text-gray-700"
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/appointment"
              className="bg-app-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-app-blue/90 transition-all duration-200 hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden absolute left-0 right-0 bg-app-blue/95 backdrop-blur-md border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden",
            isOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!isOpen}
        >
          <nav className="py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.path || pathname.startsWith(link.path + "/");

              return (
                <Link
                  key={link.title}
                  href={link.path}
                  className={cn(
                    "block px-6 py-3 text-base font-medium transition-all duration-200",
                    "hover:text-app-vio hover:bg-gray-50",
                    isActive
                      ? "text-app-vio bg-blue-50 font-semibold border-r-2 border-app-blue"
                      : "text-white"
                  )}
                >
                  {link.title}
                </Link>
              );
            })}

            {/* Mobile CTA Button */}
            <div className="px-6 py-4 border-t border-gray-200">
              <Link
                href="/appointment"
                className="block w-full bg-app-vio text-white text-center py-3 rounded-full font-semibold text-base hover:bg-app-white hover:text-app-blue transition-all duration-200"
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      </MaxWidthWrapper>

      {/* <div
        className="size-10 rounded-full flex items-center justify-center bg-app-blue text-white font-bold absolute bottom-10 right-10"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowBigUp />
      </div> */}
    </header>
  );
};

export default Header;
