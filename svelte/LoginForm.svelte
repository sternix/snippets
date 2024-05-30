<script>
    let username = $state("");
    let password = $state("");

    function printFields() {
        console.log(`Username: ${username} - Password: ${password}`);
    }

    function login(e) {
        e.preventDefault();
        console.log("You pressed Login.");
        printFields();
    }

    function signup(e) {
        e.preventDefault();
        console.log("You pressed Signup.");
        printFields();
    }
</script>

<section>
    <form onsubmit={login}>
        <label>
            Username
            <input required bind:value={username} />
        </label>
        <label>
            Password
            <input type="password" required bind:value={password} />
        </label>
        <div class="buttons">
            <button>Login</button>
            <button type="button" onclick={signup}>Sign Up</button>
        </div>
    </form>
</section>

<style>
    .buttons {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    form {
        display: inline-block;
    }

    input {
        display: block;
        margin-top: 0.3rem;
    }

    label {
        display: block;
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
</style>

