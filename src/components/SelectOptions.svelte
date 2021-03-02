<script>
    export let opSelected;
    export let day;
    let options = ["0","1","2"];
    let text = ["No meal selected", "Fish", "Meat"];
</script>
  

<select id="{day}" bind:value={opSelected}>
    {#each options as option}
        <option value={option}>{text[option]}</option>
    {/each}
</select>
