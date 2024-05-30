<script>
	// sayfa yüklendiğinde otomatik olarak focus oluyor
    let name = "";
    const focus = (element) => element.focus();
</script>

<input type="text" value="Klmn" />

<input bind:value={name} use:focus />
