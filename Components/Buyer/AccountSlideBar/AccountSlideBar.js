$(document).ready(function() {
    $("#accountslide_bar").before(`
    <nav id="sidebar">
    <div class="p-5 pt-5">
        <h2 class="account__h2" style="text-transform: uppercase;">Account</h2>
        <ul class="list-unstyled components mb-5">
            <li>
                <a class="account__links" href="../../MyAccount/Login/index.html">Login</a>
            <li>
                <a class="account__links" href="../../MyAccount/Register/index.html">Register</a>
            </li>
            <li>
                <a class="account__links" href="../../MyAccount/Account/index.html">My Account</a>
            </li>
            <li>
                <a class="account__links" href="../../MyAccount/WishList/index.html">Wishlist</a>
            </li>
            <li>
                <a class="account__links" href="../../MyAccount/OrderHistory/index.html">Order History</a>
            </li>
            <li>
                <a class="account__links" href="../../MyAccount/CreateSeller/index.html">Become Our Seller</a>
            </li>
        </ul>
    </div>
    <div class="p-5" style="margin-top: -100px;">
        <h2 class="account__h2" style="text-transform: uppercase;">Information</h2>
        <ul class="list-unstyled components mb-5">
            <li>
                <a class="account__links" href="../../Information/AboutUs/index.html">About Us</a>
            <li>
                <a class="account__links" href="../../Information/PrivacyPolicy/index.html">Privacy Policy</a>
            </li>
            <li>
                <a class="account__links" href="../../Information/TearmAndConditions/index.html">Terms & Conditions</a>
            </li>
            <li>
                <a class="account__links" href="../../Information/ContactUs/index.html">Contact Us</a>
            </li>
        </ul>
    </div>
</nav>
    `)
})