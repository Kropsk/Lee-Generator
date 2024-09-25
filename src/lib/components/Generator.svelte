<script>
    export let textColor;
    export let justify;
    export let text = ""; 
    let input = "I'm ready for my interview";

    $: fontSize = text.length > 15 ? `${Math.max(72 - (text.length - 15), 20)}px` : '72px'; 
</script>

<div class="relative flex flex-col items-center m-2">    
    <div class="font-eraser w-128 h-54 overflow-hidden">
        <span 
            class={`block break-words leading-relaxed ${justify ? 'text-justify' : 'text-center'}`} 
            style="color: {textColor}; font-size: {fontSize}; max-height: 100%; overflow: hidden;"
        >
            {text}
        </span>
    </div>
</div>
