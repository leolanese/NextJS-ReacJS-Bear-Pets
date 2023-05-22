import Image from 'next/image'
import React, { useState, useEffect, memo } from 'react'

// https://fonts.google.com/
import { Inter, Roboto } from 'next/font/google'

import Search from '../components/Search';
import CardList from '@/components/CardList';
import Head from "next/head";
import Banner from "../components/banner";
import UseErrorBoundary from './../components/UseErrorBoundary';
import { useRouter } from 'next/router';

const inter = Inter({ weight: '500', subsets: ['latin'] })
const roboto = Roboto({ weight: '100', subsets: ['latin'] })

import { pets } from '../assets/resultsMock';

// SSG: function getStaticProps fetches data from the API URL and returns an object
export const getStaticProps = async (context) => {
  console.log('getStaticProps server side log:', getStaticProps)
   return { 
      props:  {
        pets
      }
  };
}

export default function Home(props) {
  
  // Get Static Data as Props into the Component
  console.log('props',  props)

  const router = useRouter();
  const hideFooter = router.pathname === '/bear-pets/[id]';

  const [error, throwError] = UseErrorBoundary();
  const [appState, setAppState] = useState({
    pets: [], // resultsMock
    searchField: '',
  })

  useEffect(() => {
    const fetchPets = async (signal) => {
      try {
        // The AbortController and its signal offer a way to communicate the abort event to the fetch request
        const response = await fetch('/api/api', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pets = await response.json();
        setPets(pets);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch request was aborted');
        } else {
          throwError(error);
        }
      }
    };

    const abortController = new AbortController();
    fetchPets(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [throwError]); // if preset, effect will only activate if the values in the list change


  const setPets = (pets) => {
    setAppState((prevState) => ({ ...prevState, pets: pets }));
  };

  const handleOnBannerBtnClick = () => {
    console.log('handleOnBannerBtnClick: `index.tsx`')
  };

  const onSearchChange = (event) => {
    setAppState(prevState => ({ ...prevState, searchField: event.target.value }));
  };

  const filteredPets = appState.pets.filter((pet) =>
    pet.name.toLowerCase().includes(appState.searchField.toLowerCase())
  );

  return (
    <>
      <main className={` inter.className pt-8`}>

        <Head>
          <title>The Bear Pets</title>
          <link rel="icon" href="/favicon.ico"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {!hideFooter && (
          <Search onSearchChange={onSearchChange} />
        )}

        <div 
          className={`flex flex-col items-center justify-between`} >
            <Banner buttonText="ClickMe" handleOnClick={handleOnBannerBtnClick} />
        </div>

        {/* SSG */}
        {/* <CardList pets={props.pets} /> */}

        <CardList pets={filteredPets} />
     
      </main>
   </>
  )
}

