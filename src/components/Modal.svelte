<script>
import postSelection from "../strapi/postSelection";
import currentUser from "../stores/userStore";
/////////////////////////////////////////////////////

import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
let email='';
let password='';
let username='default user';

$: isEmpty = !email || !password || !username;
// To change modal link from login to register isMember true
// makes it start with login button at first
let isMember = true;
let modalButton="Login";
let modalLink="Register";

// Toggle isMember and the respective changes of text in the modal
function toggleMember(){
    isMember = !isMember;
    if (isMember==false) {
        username="";
        modalButton="Register";
        modalLink="Login";
    }
    else {
        username="default username";
        modalButton="Login";
        modalLink="Register";
    }
}

// Handles the modal submit button event and directs to appropriate function
async function handleSubmit() {
    let user;
    if (isMember){
        user = await loginUser({email, password});
    } else {
        user = await registerUser({email, password, username});
        // creates initial selected plates in strapi
        let post = await postSelection(0,0,0,0,0, $currentUser.jwt);
        console.log($currentUser.jwt);
        console.log(post);
    }
    document.getElementById('modal1').style.display='none';

    if (user) {
    } else {
        alert("Something went wrong.");
    }
}

</script>

<!-- The Login/Register Modal -->
<div id="modal1" class="modal">
    <!-- Modal Content -->
    <form class="modal-content animate">
        <div class="modal-container">
            <span id="modal-close" class="close" title="Close Modal"
            on:click="{()=>{
                document.getElementById('modal1').style.display='none';
            }}">&times;</span>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter email" id="email" bind:value={email} required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" bind:value={password} required>
            
            {#if !isMember}
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" id="username" bind:value={username}>
            {/if}

        <button id="modal-button" class="form-button" type="submit" 
        disabled={isEmpty} class:disabled={isEmpty} 
        on:click|preventDefault={handleSubmit}>{modalButton}
        </button>
        <span class="register" on:click|preventDefault={toggleMember}>
            <a id="aregister" href="#">{modalLink}</a>
        </span>
        </div>
    </form>
</div>