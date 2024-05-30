<script>
    import RedThing from "./RedThing.svelte";
    import GreenThing from "./GreenThing.svelte";
    import BlueThing from "./BlueThing.svelte";

    const options = [
        { color: "red", component: RedThing },
        { color: "green", component: GreenThing },
        { color: "blue", component: BlueThing },
    ];

    // be sadece color'ı tutuyor
    let selectedColor = $state(options[0].color);

    // seçili color'a göre component'i buluyoruz
    let component = $derived(
        options.find((o) => selectedColor === o.color).component,
    );
</script>

<!--
    aşağıdaki gibi olsa bu şekilde oluyor

<option value="[object Object]">red</option>
<option value="[object Object]">green</option>
<option value="[object Object]">blue</option>

<svelte:component this={selected.component} />

 -->

<!--
<select bind:value={selected}>
    {#each options as option (option.color)}
        <option value={option}>{option.color}</option>
    {/each}
</select>
-->

<select bind:value={selectedColor}>
    {#each options as { color } (color)}
        <option value={color}>{color}</option>
    {/each}
</select>

<!--
    select'teki değer değiştiğinde buraya options'taki ilgili component oluşturuluyor
    her değişimde bir önceki destroy edilip, yenisi oluşturuluyor
    eğer this'e atanan değer falsy bir değer ise bir işlem yapılmıyor

    When the property changes, the component is destroyed and recreated.
    If this is falsy, no component is rendered.
-->
<svelte:component this={component} />
