import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const MateStore = () => {
    const router = useRouter()
    console.log('router: ', router.query)

    return (
        <>
            <Head>
                <title>{router.query?.id}</title>
            </Head>

            <div className="min-h-screen">

                <div className="bg-blue-500 w-full h-full flex items-center justify-center">

                    <p>Mate store here</p>

                    <Link 
                        href={'/'}   
                        scroll={false}    
                        prefetch  
                        passHref      
                        >
                    <button className="text-blue-600 hover:text-blue-800 transition duration-200">
                        Back Home
                    </button>
                    </Link>

                </div>

            </div>
          
        </>
    );
};

export default MateStore;