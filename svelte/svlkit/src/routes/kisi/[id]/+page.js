
// To create routes with dynamic parameters, use square brackets around a valid variable name

// klasörün ismi [slug] ise gelen değer params.slug
// [id] ise gelen değer params.id
export function load({ params }) {
    //console.log(cookies);

    // bu sadece xxx.server.js'de çalışıyor
    //cookies.set('visited', 'true', { path: '/' });

    return params;
}