<script>
    let markup = '<h1 style="color: red">Hello!</h1>';
</script>

<textarea bind:value={markup} rows={5}></textarea>
{@html markup}

<style>
    textarea {
        width: 95vw;
    }
</style>

