import { useState } from "react"

// https://svelte.dev/examples/checkbox-inputs
// bunun react versiyonu

function App() {
    const [yes, setYes] = useState(false)

    return (
        <>
            <label>
                <input type="checkbox" checked={yes} onChange={e => setYes(e.target.checked)} />
                Yes! Send me regular email spam
            </label>

            {yes
                ? <p>Thank you. We will bombard your inbox and sell your personal details.</p>
                : <p>You must opt-in to continue. If you're not paying, you're the product.</p>
            }

            <button disabled={!yes}> Subscribe </button>
        </>
    )
}

export default App

