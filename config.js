import { Roboto,Montserrat } from "next/font/google";

export const roboto = Roboto({
  weight: ['400', '700','100','300','900','500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const mont = Montserrat({
  weight: ['400', '700','100','300','900','600','800','500'],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// export const appcolours = {
//     primaryYellow: '#E7FB33',
//     lightGreen: '#78E266',
//     darkGreen: '#006F82',
//     naturalGreen: '#00BF89',
//     primaryBlack: '#2F4858'
// }