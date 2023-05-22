import React, { useState, useEffect, useContext, useReducer } from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import ThemeContextComponent from '../components/ThemeContextProvider';
import '@/styles/globals.css'

const initialState = { theme: 'light' };

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      throw new Error();
  }
}

export default function App({ Component, pageProps }: AppProps) {
  console.log('process.env.LOCAL', process.env.LOCAL);  // http://localhost
  console.log('process.env.PORT', process.env.PORT);   // 3000

  const theme = useContext(ThemeContextComponent)
  const [state, dispatch] = useReducer(reducer, initialState);

  // Determine the background color based on the theme state
  const bgColor = state.theme === 'light' ? 'bg-white' : 'bg-black';

  return (
    <>
      <div className={`bg-sky-500/75 ${bgColor}`}>

      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>

        {/* Component is the actual page that is going to be rendered, based on the route. */}
        <Component {...pageProps} theme={bgColor} />

       
        <footer 
            className={`flex flex justify-between h-full p-2 ${bgColor}`}>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/vercel.svg"
                alt="Vercel Logo"
                width={90}
                height={18}
                quality={80}
                loading='lazy'
                sizes="(min-width: 60em) 24vw,
                      (min-width: 28em) 45vw,
                      100vw"
              />

              <Image
                className="ml-5 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="NextJS Logo"
                width={90}
                height={18}
                priority
              />
        </footer>

      </div>
    </>
  );
}

