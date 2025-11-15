"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useState,
  useEffect,
  useCallback,
  useTransition,
  Dispatch,
  SetStateAction,
} from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { CusTooltip } from "./tooltip";
import { LayoutDashboard, LogOut } from "lucide-react";
import { useAuthContext, UserType } from "@/context/auth";
import { siteConfig } from "@/config";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Leadership", path: "/leadership" },
  { title: "News", path: "/news" },
  { title: "Locations", path: "/locations" },
  { title: "Benefits", path: "/benefits" },
  { title: "Contact", path: "/contact" },
];

// type AuthType = {
//   id: string;
//   email: string;
//   emailVerified: boolean;
//   name: string;
//   image?: string | null | undefined;
//   role: string;
// };

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const { user, setUser } = useAuthContext();

  // console.log("user", user);

  const handleScrollToTop = useCallback(() => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  }, [setShowArrow]);

  console.log("showArrow", showArrow);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, [handleScrollToTop]);

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

  // useEffect(() => {
  //   (async function session() {
  //     const session = await authClient.getSession();

  //     if (session.data?.user) {
  //       setUser({
  //         ...session.data.user,
  //         role: "user",
  //       });
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    (async function session() {
      const acc = await authClient.listAccounts();

      console.log("accounts", acc);
      

     
    })();
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
                src="/assets/images/logo.png"
                alt="Michael Cross Specialist Hospital Logo"
                width={100}
                height={60}
                className="w-auto h-8 lg:h-10 transition-all duration-300"
                priority
              />
            </Link>
            <h3 className="lg:block hidden text-app-blue font-semibold text-xl">
              {siteConfig.title}
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
          <div className="hidden lg:inline-flex lg:space-x-4 lg:items-center shrink-0 ">
            <Link
              href="/appointment"
              className="bg-app-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-app-blue/90 transition-all duration-200 hover:shadow-lg hidden md:block"
            >
              Book Appointment
            </Link>

            <UserIcon
              className="md:block"
              user={user as UserType}
              setUser={setUser}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <UserIcon
              className="md:hidden"
              user={user as UserType}
              setUser={setUser}
            />

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

function LoggedInUser({
  user,
  setUser,
}: {
  user: string;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <div className="inline-flex items-center space-x-3">
      <div
        onClick={() =>
          startTransition(async () => {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  setUser(null);
                  router.push("/");
                },
              },
            });
          })
        }
        className="flex items-center cursor-pointer"
      >
        <CusTooltip title="Log out" Icon={LogOut} className="size-4">
          <p
            className={cn(
              "text-2xl font-bold border rounded-full flex items-center justify-around size-6",
              isPending && "animate-pulse"
            )}
          >
            {user.charAt(0)}
          </p>
        </CusTooltip>
      </div>
      <Link className=" hover:text-app-blue" href={`/dashboard`}>
        <CusTooltip title="Dashboard" Icon={LayoutDashboard} className="size-4">
          <LayoutDashboard className="size-6" />
        </CusTooltip>
      </Link>
    </div>
  );
}

function UserIcon({
  user,
  className,
  setUser,
}: {
  user: { name: string };
  className: string;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}) {
  return (
    <div className={className}>
      {user ? (
        <LoggedInUser user={user.name} setUser={setUser} />
      ) : (
        <Link
          href="/auth/sign-in"
          className="text-sm cursor-pointer hover:text-app-blue"
        >
          Sign in
        </Link>
      )}
    </div>
  );
}
