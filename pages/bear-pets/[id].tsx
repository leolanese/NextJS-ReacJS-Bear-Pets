import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'

const BearPets = () => {
    const router = useRouter()
    const { id, ...otherParams } = router.query;

    let imageSource = null;
    if (Array.isArray(id)) {
        // Handle the case when id is an array
        imageSource = otherParams.imgUrl?.toString() || null;
    } else {
        // Handle the case when id is a string
        imageSource = otherParams.imgUrl?.toString() || null;
    }

    return (
        <>
            <Head>
                <title>{router.query?.id}</title>
            </Head>

            <div className="flex items-center justify-center min-h-screen bg-red-800 text-white">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="relative">
                    <Image
                        className="relative"
                        src={imageSource}
                        alt="Bear Pets image"
                        width={90}
                        height={18}
                        quality={80}
                        loading='lazy'
                        sizes="(min-width: 60em) 24vw,
                                (min-width: 28em) 45vw,
                                100vw"
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Your Bear Pet: {id}</div>
                        <ul>
                            {Object.keys(router.query).map((param, index) => (
                            <li key={index}>
                                {param}: {router.query[param]}
                            </li>
                            ))}
                        </ul>
                    </div>
                <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link href="/" scroll={false} prefetch passHref>
                        Back Home
                    </Link>
                </button>
                </div>
            </div>
            </div>
                
        </>
    );
};

export default BearPets;