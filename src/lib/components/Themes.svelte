<script>
    import { createEventDispatcher } from 'svelte';

    export let themeActive; 
    const themes = [
        {
            name: "October",
            textColor: "#275670",
            bgColor: "#DCDADC",
            justify: false
        },
        {
            name: "Duct tape",
            textColor: "#100E0E",
            bgColor: "#7DA97F",
            justify: false
        },
        {
            name: "Tell Me",
            textColor: "#FFFFF",
            bgColor: "#151515",
            justify: false
        },
        {
            name: "Interview",
            textColor: "#DDC9B0",
            bgColor: "#991B1B",
            justify: true
        }
    ];

    const dispatch = createEventDispatcher();

    function changeTheme(themeName) {
        const theme = themes.find(t => t.name === themeName);
        if (theme) {
            dispatch('themeChange', theme); 
        } 
    }
</script>
<div>
    <div class="flex flex-row justify-center mt-2">
        {#each themes as theme}
            <button 
                on:click={() => changeTheme(theme.name)} 
                class="rounded-full ml-2 w-10 h-10 border-2 shadow-sm border-white font-eraser hover:opacity-85 transition-all" 
                style="background-color: {theme.bgColor};"
            >
            </button>
        {/each}
    </div>
</div>

