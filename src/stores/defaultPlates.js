import {writable} from "svelte/store";
import plates from "../plates";
const platesStore = writable([...plates]);

//subscribe
//set
//update

export default platesStore;
