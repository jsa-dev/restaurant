<script>
    // import {onMount, onDestroy} from "svelte";
    import defaultPlates from "../stores/defaultPlates";
    
    // let plates = [];
    // let unsubscribe;
    // onMount(()=>{
    //     unsubscribe = defaultPlates.subscribe(element =>{
    //         plates = element;
    //     })
    // })
    // onDestroy(()=>{
    //     unsubscribe();
    // })
</script>

<section id="menu" class="site-section">
    <div id="menu-inside" class="site-section-inside">
        <div class="section-header">
            <h2>Menu</h2>
        </div>
    <section class="grid">
        {#each $defaultPlates as plate}
        <div class="card" data-name={plate.Name}>
            <div class="card-info">
                <h3 class="plate-day">{plate.Day}</h3>
                <h5 class="plate-type">{plate.Type}</h5>
                <h4 class="plate-name">{plate.Name}</h4>
                <p class="plate-price">Price: {plate.Price}$</p>
            </div>
            <img src={plate.img} alt={plate.Name}>
        </div>
        {/each}
    </section>
    </div>
</section>
<br>