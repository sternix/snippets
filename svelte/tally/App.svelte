<script>
    import Tally from "./Tally.svelte";

    let tally,
        taxRate = 0,
        grandTotal = 0;

    function update() {
        taxRate = tally.taxRate;
        grandTotal = tally.getGrandTotal();
    }
</script>

<Tally bind:this={tally} />

<button onclick={update}>Update</button>
<div>
    Tax Rate = {(taxRate * 100).toFixed(2)}% Grand Total = {grandTotal.toFixed(
        2,
    )}
</div>
