import React from 'react';
import { useRouter } from 'next/router';

const MateStore = () => {
    const router = useRouter()
    console.log('router: ', router.query.id)

    return (
        <div>
            <p>Mate store here</p>
        </div>
    );
};

export default MateStore;