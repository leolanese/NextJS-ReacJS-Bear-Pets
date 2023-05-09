import { useState, useCallback } from 'react';

const UseErrorBoundary = () => {
    const [error, setError] = useState(null);

    const throwError = useCallback((error) => {
        setError(error);
    }, []);

    return [error, throwError];
}

export default UseErrorBoundary;
