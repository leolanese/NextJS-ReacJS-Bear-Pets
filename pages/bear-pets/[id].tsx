import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'

const BearPets = () => {
    const router = useRouter()
    console.log('router: ', router.query)

    return (
        <>
            <Head>
                <title>{router.query?.id}</title>
            </Head>

            <div className="min-h-screen">

                <div className="w-full h-full flex items-center justify-center">

                    <h3>Bear-Pets Located: {router.query?.id}</h3>

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

                    <Link 
                        href={'/'}   
                        scroll={false}    
                        prefetch  
                        passHref      
                        >
                        <button className="bg-blend-lighten hover:bg-blend-darken text-blue-600 hover:text-blue-800 transition duration-200">
                            Back Home
                        </button>
                    </Link>

                </div>

            </div>
          
        </>
    );
};

export default BearPets;