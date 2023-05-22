import React, { useReducer } from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import '@/styles/globals.css'
import { ThemeProvider, useTheme } from './../components/ThemeContext'

const initialState = { theme: 'bg-gray-500' };

export default function App({ Component, pageProps }: AppProps) {
  console.log('process.env.LOCAL', process.env.LOCAL);  // http://localhost
  console.log('process.env.PORT', process.env.PORT);   // 3000
  const { state } = useTheme();

  const WrappedComponent = (props) => {
    const { state, dispatch } = useTheme();
    const handleThemeToggle = () => dispatch({ type: 'TOGGLE_THEME' });

    return (
      <div className={state.theme}>
        <Component {...props} />
      </div>
    )
  }

  return (
    <>
      <div className={` ${state.theme} `}>

      <ThemeProvider>
        <WrappedComponent {...pageProps} />
      </ThemeProvider>

        <footer 
            className={`flex flex justify-between h-full p-2`}>
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

