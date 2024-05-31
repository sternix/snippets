<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>Kişiler</title>
</svelte:head>

<h1>Kişiler</h1>

<table>
    <tbody>
        <tr>
            <td>Id</td>
            <td>Adı</td>
            <td>Soyadı</td>
        </tr>
        {#each data.kisiler as { id, adi, soyadi }}
            <tr>
                <td>{id}</td>
                <td>{adi}</td>
                <td>{soyadi}</td>
            </tr>
        {/each}
    </tbody>
</table>
