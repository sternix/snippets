<script>
// güzel bir örnek
    let numbers = $state([1, 2, 3]);
</script>

<button onclick={() => numbers.push(numbers.length + 1)}> push </button>

<button onclick={() => numbers.pop()}> pop </button>

<p>{numbers.join(" + ") || 0} = {numbers.reduce((a, b) => a + b, 0)}</p>

