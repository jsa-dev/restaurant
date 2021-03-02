<script>
// strapi
import postSelection from "../strapi/postSelection"; 
import getSelection from "../strapi/getSelection";
// components
import SelectOptions from "./SelectOptions.svelte";
// stores
import currentUser from "../stores/userStore";
import selection from "../stores/selection";
import defaultPlates from "../stores/defaultPlates"
import {setSelection, setStorageSelection,} from "../stores/selection";

// calculate meal total cost
function getTotals($selection){
    var total=0;
    for (var i=0; i<$selection.length; i++){
        if ($selection[i]==0)
            total+=0;
        if ($selection[i]==1)
            total+=$defaultPlates[i*2].Price;
        if ($selection[i]==2)
            total+=$defaultPlates[i*2+1].Price;
    }
    return total;
}

async function storePostMeals(){
    // localStorage
    setSelection([
        document.getElementById('monday').value,
        document.getElementById('tuesday').value,
        document.getElementById('wednesday').value,
        document.getElementById('thursday').value,
        document.getElementById('friday').value
    ]);
    setStorageSelection([
        document.getElementById('monday').value,
        document.getElementById('tuesday').value,
        document.getElementById('wednesday').value,
        document.getElementById('thursday').value,
        document.getElementById('friday').value
    ]);
    // strapi
    postSelection(
        document.getElementById('monday').value,
        document.getElementById('tuesday').value,
        document.getElementById('wednesday').value,
        document.getElementById('thursday').value,
        document.getElementById('friday').value,
        $currentUser.jwt
    );
};

// strapi
let recSelection = [];
async function getMeals(){
    // $selection[0]
    let values;
    values = await getSelection($currentUser.username, $currentUser.jwt);
    recSelection = [values.data[0].monday, values.data[0].tuesday, values.data[0].wednesday, values.data[0].thursday, values.data[0].friday];
    recSelection = recSelection.map(String);
    return recSelection;
}

getMeals();
</script>

<!-- Weekly meal select form -->
{#if recSelection.length != 5}
    <p>LOADING MEAL PLAN...</p>
{:else}
<div id="meal-select-container">
    <form class="selected-plates">
        <h3>Weekly meal plan: </h3>
        <span>Monday:</span>
            <SelectOptions day='monday' opSelected="{recSelection[0]}"></SelectOptions>
        <span>Tuesday:</span>
            <SelectOptions day='tuesday' opSelected="{recSelection[1]}"></SelectOptions>
        <span>Wednesday:</span>           
            <SelectOptions day='wednesday' opSelected="{recSelection[2]}"></SelectOptions>
        <span>Thursday:</span>           
            <SelectOptions day='thursday' opSelected="{recSelection[3]}"></SelectOptions>  
        <span>Friday:</span>       
            <SelectOptions day='friday' opSelected="{recSelection[4]}"></SelectOptions>
        <!-- Display total cost -->
        <h5 id="total-price">Weekly meal cost: {getTotals($selection)}$</h5>
        <!-- Form button -->
        <button class="regular-button form-button" type="button"
        on:click={()=>{storePostMeals()}}>Register meal plan</button>

    </form>
</div>
{/if}