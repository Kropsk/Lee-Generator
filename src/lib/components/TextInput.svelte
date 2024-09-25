<script>
    export let text = "I'm ready for my interview";
</script>

<div class="flex justify-center items-center">
    <input 
        class="w-72 p-2 text-xs font-mono rounded-md text-center bg-red-950 text-white" 
        type="text" 
        placeholder="Type anything" 
        bind:value={text}
    />
</div>
