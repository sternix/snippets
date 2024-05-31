<script>
    let { data, children } = $props();
    console.log('/blog/[slug]/+layout.svelte')
</script>
<h1>Bu blog/[slug] Layout</h1>

<p>Buda +layout.js'den yollanan data: {data.deger}</p>

{@render children() }