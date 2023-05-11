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
    <>
      <main className={`inter.className`} >

        <Head>
          <title>The Mate Shop</title>
          <link rel="icon" href="/favicon.ico"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div 
          className={`flex flex-col items-center justify-between`} >
            <Banner buttonText="ClickMe" handleOnClick={handleOnBannerBtnClick} />
        </div>

      </main>
   </>
  )
}

