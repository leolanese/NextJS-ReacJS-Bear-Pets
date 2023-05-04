// default route
import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Banner from "../components/banner";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('handleOnBannerBtnClick on: `index.tsx`');
  };

  return (
    <>
      <main 
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      
      <Banner buttonText="ClickMe" handleOnClick={handleOnBannerBtnClick} />



    </main>

    <footer 
      className={`flex items-center h-full ${inter.className}`}>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={90}
        height={18}
        priority
      />
      <p className="pl-15 right">- © 2023 Leo Lanese</p>
    </footer>
   </>

  )
}
