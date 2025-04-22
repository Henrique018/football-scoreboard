"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/config/constants";
import { cn } from "@/lib/cn";

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex sm:hidden items-center justify-center w-full gap-10 fixed bottom-0 border-t border-white/20 p-4 dark:bg-white/10 bg-black/15  backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-t-xl">
      {Object.entries(routes).map(([path, { icon, label }]) => {
        const Icon = icon;
        return (
          <Link
            key={path}
            href={path}
            className={cn(
              "flex flex-col items-center text-sm text-foreground/70 hover:text-foreground",
              {
                "text-primary": pathname === path,
              }
            )}
          >
            <Icon />
            <span className="mt-1">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
