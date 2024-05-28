<script>
// https://svelte-5-preview.vercel.app/docs/old-vs-new
// Autoscroll kısmındaki After örneği
// messages.push işe yaramıyor
// $effect.pre'deki messages; satırının çalışması için
// messages = messages[...messages, text]
// şeklinde tetiklenmesi gerekiyor
// tick then şeklinde kullanılmış
// css'teki örnekler güzel

    import { tick } from "svelte";

    let theme = $state("dark");
    let messages = $state([
        "welcome to runechat!",
        "this is a place to hang out and talk about runes",
    ]);

    let viewport;

    $effect.pre(() => {
        messages;
        const autoscroll =
            viewport &&
            viewport.offsetHeight + viewport.scrollTop >
                viewport.scrollHeight - 50;

        if (autoscroll) {
            tick().then(() => {
                viewport.scrollTo(0, viewport.scrollHeight);
            });
        }
    });

    function handleKeydown(event) {
        if (event.key === "Enter") {
            const text = event.currentTarget.value;
            if (!text) return;

            messages = [...messages, text];
            event.currentTarget.value = "";
        }
    }

    function toggle() {
        theme = theme === "dark" ? "light" : "dark";
    }
</script>

<div class="chat" class:dark={theme === "dark"}>
    <div class="viewport" bind:this={viewport}>
        <h1>runechat</h1>
        {#each messages as message}
            <p>{message}</p>
        {/each}
    </div>

    <input onkeydown={handleKeydown} />

    <button onclick={toggle}> Toggle dark mode </button>
</div>

<style>
    :global(body) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .viewport {
        flex: 1 1 auto;
        margin: 0 0 0.5em 0;
        overflow-y: auto;
    }

    .chat {
        --bg: white;
        --fg: black;
        display: flex;
        flex-direction: column;
        height: 480px;
        width: 320px;
        max-width: 100%;
        gap: 0.5em;
        border: 1px solid black;
        background: var(--bg);
        padding: 1em;
        border-radius: 0.5em;
        box-sizing: border-box;
    }

    .chat.dark {
        --bg: black;
        --fg: white;
    }

    h1 {
        color: var(--fg);
        font-size: 3em;
        padding: 1em 0 1em 0;
        margin: 0;
        border-bottom: 1px solid #999;
    }

    p {
        color: var(--fg);
    }

    button,
    input {
        font-family: inherit;
        font-size: inherit;
        padding: 0.3em;
        border-radius: 4px;
        border: 1px solid #999;
    }
</style>

