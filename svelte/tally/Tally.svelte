<script>
    export const taxRate = 0.07;
    let price = $state();
    let prices = $state([]);
    let total = $derived(prices.reduce((acc, n) => acc + n, 0));

    function add() {
        prices.push(price);
        price = "";
    }

    export function getGrandTotal() {
        return total * (1 + taxRate);
    }
</script>

<input type="number" bind:value={price} />
<button onclick={add}>Add</button>
{#each prices as price}
    <div>{price}</div>
{/each}

<div>Total {total}, Tax Rate {(taxRate * 100).toFixed(2)}%</div>
