import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MateStore = () => {
    const router = useRouter()
    console.log('router: ', router.query.id)

    return (
        <div>
            <p>Mate store here</p>
            <Link 
                href={'/'}   
                scroll={false}    
                prefetch        
                >Home
            </Link>

            <Link 
                href={'/'}   
                scroll={false}    
                prefetch        
                >Home
            </Link>
                        
        </div>
    );
};

export default MateStore;