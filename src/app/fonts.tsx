import { Silkscreen, Inconsolata } from 'next/font/google';

export const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400'],
});

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
});