<script>
    import user from "../stores/userStore";
    import {logoutUser} from '../stores/userStore';
</script>

<header>
    <!-- LOGO -->
    <a href="/">
        <h2 id="page-header">
            <img src="/assets/images/restaurant-logo.jpg" alt="logo">
            XYZ Restaurant
        </h2>
    </a>
    <!-- NAVIGATION -->
    <nav id="main-navigation">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#meal-select-container">Meal plan</a></li>
            <em><span id="welcome"></span></em>
            <!-- when logged in displays only logout button -->
            {#if $user.jwt}
                <button id="logout-button" class="myButtonOut" on:click="{()=>{
                    logoutUser();
                }}">Logout</button>
            {:else}
                <button id="login-button" class="myButton" on:click="{()=>{
                    document.getElementById('modal1').style.display='block';
                }}">Login</button>
            {/if}
        </ul>
    </nav>
</header>
