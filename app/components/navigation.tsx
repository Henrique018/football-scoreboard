'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { routes } from '@/config/constants';
import { cn } from '@/utils/cn';

export default function Navigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <header className="flex items-center justify-between p-4 container mx-auto pt-10 sm:mb-4">
      <Link href="/" className="flex items-center">
        <p className="uppercase font-mono font-bold">⚽ Football Scoreboard</p>
      </Link>

      <nav className="hidden sm:flex gap-6">
        {Object.entries(routes).map(([path, { icon, label }]) => {
          const Icon = icon;
          return (
            <Link
              key={path}
              href={searchParams.size ? `${path}?${searchParams.toString()}` : path}
              className={cn('flex items-center text-foreground/80 hover:text-foreground', {
                'text-primary': pathname === path,
              })}
            >
              <Icon />
              <span className="ml-1 font-semibold">{label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
