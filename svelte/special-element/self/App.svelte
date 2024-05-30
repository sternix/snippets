<script>
    import Folder from "./Folder.svelte";
    import { files } from "./data";
</script>

<Folder name="Home" {files} expanded />
