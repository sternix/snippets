// https://svelte.dev/docs/special-elements#svelte-self 

Counter.svelte
```svelte
<script>
    let { count } = $props();
</script>

{#if count > 0}
    <p>counting down {count}</p>
    <svelte:self count={count - 1} />
{:else}
    <p>Lift off</p>
{/if}
```

App.svelte
```svelte
<script>
    import Counter from "./Counter.svelte";
</script>

<Counter count="5" />
```

Sonuç:

counting down 5

counting down 4

counting down 3

counting down 2

counting down 1

Lift off
