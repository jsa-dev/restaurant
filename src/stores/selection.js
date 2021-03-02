import {get, writable} from "svelte/store";

const selection = writable(getStorageSelection());

function getStorageSelection(){
    return localStorage.getItem('selection')?
    JSON.parse(localStorage.getItem('selection')):
    [0,0,0,0,0]
}

// local storage
export function setStorageSelection(selected){
    localStorage.setItem('selection', JSON.stringify(selected));
}

export function setSelection(selected){
    selection.set(selected);
}

export default selection;