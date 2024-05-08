import { useLayoutEffect } from 'react';

// https://github.com/ShizukuIchi/react-hooks/blob/master/src/useMeta.js

function createMeta(name) {
    const meta = document.createElement('meta');
    document.head.appendChild(meta);
    meta.setAttribute('name', name);
    return meta;
}

function useMeta(name, options) {
    useLayoutEffect(() => {
        const meta =
            document.querySelector(`meta[name="${name}"]`) || createMeta(name);
        const originOptions = {};
        Object.entries(options).forEach(([name, value]) => {
            originOptions[name] = meta.getAttribute(name);
            meta.setAttribute(name, value);
        });

        return () => {
            Object.entries(originOptions).forEach(([name, value]) => {
                if (value) {
                    meta.setAttribute(name, value);
                } else {
                    meta.removeAttribute(name);
                }
            });
        };
    }, []);
};

export default useMeta;
