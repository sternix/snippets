import { error } from '@sveltejs/kit';


/*
gelen değerler (params, route and url)
ve
fonksiyonlar (fetch, setHeaders, parent, depends and untrack)
*/

// burada params olarak geliyor
export function load({params}) {
    console.log('/blog/[slug]/+page.js')
    if (params.slug === 'ali')
        return params;

    // bu hata +error.svelte dosyasına yönlendiriyor
	error(404, 'Blog bulunamadı');
}