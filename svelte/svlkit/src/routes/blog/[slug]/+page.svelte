<script>
    // +page.js'nin load'undan return edilenler
    // buraya data olarak geliyor
    let { data } = $props();
    console.log(data.slug);
    console.log("/blog/[slug]/+page.svelte");
</script>

<h1>Blog Slug Sayfası</h1>

<p>Yollanan değer: {data.slug}</p>

çalışma sırası şu şekilde
<pre>
/blog/[slug]/+layout.js
/blog/[slug]/+page.js
/blog/[slug]/+layout.svelte
/blog/[slug]/+page.svelte
</pre>
