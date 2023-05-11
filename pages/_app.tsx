import React, { useState, useEffect, memo } from 'react'
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import UseErrorBoundary from './../components/UseErrorBoundary';
import CardList from '@/components/CardList';
import Search from '../components/Search';
import Image from 'next/image'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [error, throwError] = UseErrorBoundary();
  const [appState, setAppState] = useState({
    users: [], // mockResults
    searchField: '',
  })

  const router = useRouter();
  const hideFooter = router.pathname === '/bear-pets/[id]';

  const setUsers = (users) => {
    setAppState((prevState) => ({ ...prevState, users: users }));
    // (prevState => ({ ...prevState, users: users })). This ensures that you're always 
    // using the most recent state when setting the new state
  };

  useEffect(() => {
    const fetchUsers = async (signal) => {
      try {
        // The AbortController and its signal offer a way to communicate the abort event to the fetch request
        const response = await fetch('/api/api', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch request was aborted');
        } else {
          throwError(error);
        }
      }
    };

    const abortController = new AbortController();
    fetchUsers(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [throwError]); // if preset, effect will only activate if the values in the list change

  const onSearchChange = (event) => {
    setAppState(prevState => ({ ...prevState, searchField: event.target.value }));
  };

  const filteredUsers = appState.users.filter((user) =>
    user.name.toLowerCase().includes(appState.searchField.toLowerCase())
  );

  console.table('filteredUsers', filteredUsers)
  
  return !appState.users.length ?
      <>
        <h1>Loading... Please, wait.</h1>
      </>
  : (
    <div className={`bg-sky-500/75`}>
      {!hideFooter && (
        <Search onSearchChange={onSearchChange} />
      )}

      <Component {...pageProps} />

      {!hideFooter && (
       <CardList users={filteredUsers} />
      )}

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
  );
}

