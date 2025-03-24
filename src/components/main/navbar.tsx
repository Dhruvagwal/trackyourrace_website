/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Events",
    link: "/events-group/marathons",
  },
  {
    name: "Result & Stats",
    link: "/results",
  },
  {
    name: "Coaches",
    link: "/coaches-group/marathons",
  },
  {
    name: "Training & Workout",
    link: "/training-workout",
  },
  {
    name: "Communities",
    link: "/communities",
  },
  // {
  //   name: "About Us",
  //   link: "/about-us",
  // },
];

export default function Component() {
  return (
    <header className="flex z-50 justify-between relative h-24 w-full shrink-0 items-center">
      <Link href="/" className="mr-6 flex items-center" prefetch={false}>
        <Image src="/logo.svg" width={70} height={70} alt="logo" />
        <span className="md:grid hidden text-3xl font-bold">
          Track Your Race
        </span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 p-6">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <nav className="ml-auto hidden lg:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="group inline-flex h-9 w-max items-center justify-center rounded-m px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
        <Link href="/contact-us" prefetch={false}>
          <Button variant="outline">Contact</Button>
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
