// default route
import Image from 'next/image'

// https://fonts.google.com/
import { Inter, Roboto } from 'next/font/google'

import Head from "next/head";
import Banner from "../components/banner";

const inter = Inter({ weight: '500', subsets: ['latin'] })
const roboto = Roboto({ weight: '100', subsets: ['latin'] })

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('handleOnBannerBtnClick: `index.tsx`')
  };

  return (
    <main className={inter.className}>

      <Head>
        <title>The Mate Shop</title>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div 
        className={`flex min-h-screen flex-col items-center justify-between p-24`} >
          <Banner buttonText="ClickMe" handleOnClick={handleOnBannerBtnClick} />
      </div>

      <footer 
        className={`flex flex justify-between h-full p-2`}>

          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/vercel.svg"
            alt="Vercel Logo"
            width={90}
            height={18}
            priority
            loading='lazy'
          />

          <Image
            className="ml-5 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="NextJS Logo"
            width={90}
            height={18}
            priority
            loading='lazy'
          />

      </footer>

   </main>
  )
}
