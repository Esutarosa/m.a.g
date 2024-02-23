import { Inter, Lato, Cousine, Noto_Sans_JP } from "next/font/google";

// Main font
export const inter = Inter({ 
  subsets: ['latin'] 
});

// Underlining font
export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

// Text font
export const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 404 and other designer stuff
export const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});