import { useState, useEffect } from 'react';

// https://github.com/ShizukuIchi/react-hooks/blob/master/src/useResettableTimeout.js

const useResettableTimeout = (ms = 0, fn = () => { }, args = []) => {
    const [timeout, setTimeoutVal] = useState();

    const reset = () => {
        clearTimeout(timeout);
        setTimeoutVal(setTimeout(fn.bind(null, args), ms));
    }

    useEffect(() => {
        reset();
        return () => clearTimeout(timeout);
    }, []);
    
    return reset;
};

export default useResettableTimeout;