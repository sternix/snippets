<script>
    let { children } = $props();
</script>

<nav>
    <ul>
        <li><a href="/">Anasayfa</a></li>
        <li><a href="/about">Hakkımızda</a></li>
        <li><a href="/contact">İletişim</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/kisiler">Kişiler</a></li>
    </ul>
</nav>

{@render children() }

<style>
    nav,ul {
        padding: 0;
    }

    li {
        display: inline;
        list-style: none;
        margin-right: 10px;
    }

    :global(a) {
        text-decoration: none;
    }

</style>