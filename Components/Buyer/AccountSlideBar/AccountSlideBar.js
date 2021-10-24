$(document).ready(function() {
    $("#accountslide_bar").before(`
    <nav id="sidebar">
    <div class="p-5 pt-5">
        <h2 class="account__h2" style="text-transform: uppercase;">Account</h2>
        <ul class="list-unstyled components mb-5">
            <li>
                <a class="account__links" href="#login">Login</a>
            <li>
                <a class="account__links" href="#register">Register</a>
            </li>
            <li>
                <a class="account__links" href="#myaccount">My Account</a>
            </li>
            <li>
                <a class="account__links" href="#wishlist">Wish List</a>
            </li>
            <li>
                <a class="account__links" href="#orderhistory">Order History</a>
            </li>
        </ul>
    </div>
    <div class="p-5" style="margin-top: -100px;">
        <h2 class="account__h2" style="text-transform: uppercase;">Information</h2>
        <ul class="list-unstyled components mb-5">
            <li>
                <a class="account__links" href="#aboutus">About Us</a>
            <li>
                <a class="account__links" href="#privacy">Privacy Policy</a>
            </li>
            <li>
                <a class="account__links" href="#terms">Terms & Conditions</a>
            </li>
            <li>
                <a class="account__links" href="contact">Contact Us</a>
        </ul>
    </div>
</nav>
    `)
})