// default route
import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

import Banner from "../components/banner";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('handleOnBannerBtnClick');
  };

  return (
    <>
      <main 
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
      
      <Banner />

      <p>Prowered with</p>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

    </main>

    <footer className="flex items-center h-full">
      <p className="m-auto">© 2023 Leo Lanese</p>
    </footer>
   </>

  )
}
