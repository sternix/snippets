import { useState, useEffect } from 'react';

// https://github.com/ShizukuIchi/react-hooks/blob/master/src/useMediaStyles.js
// test edilmedi
// deprecate olanları güncelledim

const useMediaStyles = queries => {
    const [state, setState] = useState(() => {
        const queryName = Object.keys(queries).find(
            q => window.matchMedia(q).matches,
        );
        return queries[queryName];
    });

    useEffect(
        () => {
            const listeners = Object.keys(queries).map(query => {
                const mq = window.matchMedia(query);
                mq.addEventListener('change', onChange);
                return mq;
            });

            const onChange = (e) => {
                if (e.matches)
                    setState(queries[e.media]);
            }

            return () => {
                listeners.forEach(l => l.removeEvetListener('change', onChange));
            };
        },
        [queries],
    );

    return state;
};

export default useMediaStyles;
