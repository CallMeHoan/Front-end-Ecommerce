$(document).ready(function() {
    $("#header").before(`
    <div class='header__container'>
        <div class="header__left">
            <img src="https://opencart.mahardhi.com/MT04/noriva/01/image/catalog/logo.png" alt="Logo">
        </div>
        <div class="header__middle">
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                    <a href="../ProductPage/index.html">Men's shoes</a>
                    <div class="dropdown__items">
                        <ul>
                            <li><a href="#">Casual</a></li>
                            <li><a href="#">Football</a></li>
                            <li><a href="#">Jordan</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Running</a></li>
                            <li><a href="#">Soccer</a></li>
                            <li><a href="#">Sports</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="../ProductPage/index.html">Women's Shoes</a>
                    <div class="dropdown__items">
                        <ul>
                            <li><a href="#">Casual</a></li>
                            <li><a href="#">Football</a></li>
                            <li><a href="#">Jordan</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Running</a></li>
                            <li><a href="#">Soccer</a></li>
                            <li><a href="#">Sports</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="../ProductPage/index.html">Accessories</a>
                    <div class="dropdown__items">
                        <ul>
                            <li><a href="#">Casual</a></li>
                            <li><a href="#">Football</a></li>
                            <li><a href="#">Jordan</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Running</a></li>
                            <li><a href="#">Soccer</a></li>
                            <li><a href="#">Sports</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="../ProductPage/index.html">Clothers</a>
                    <div class="dropdown__items">
                        <ul>
                            <li><a href="#">Casual</a></li>
                            <li><a href="#">Football</a></li>
                            <li><a href="#">Jordan</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Running</a></li>
                            <li><a href="#">Soccer</a></li>
                            <li><a href="#">Sports</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header__right">
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"><i class="fas fa-search"></i></button>

            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Search everythings you need!</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <nav class="navbar navbar-light bg-light">
                        <form class="container-fluid">
                            <div class="input-group">
                                <div class="form__select">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>All Categories</option>
                                        <option value="1">Men's Shoes</option>
                                        <option value="2">Women's Shoes</option>
                                        <option value="3">Accessories</option>
                                        <option value="4">Clothers</option>
                                      </select>
                                </div>
                                <input type="text" class="form-control" placeholder="Type here to search!" aria-label="Type here to search!"
                                    aria-describedby="basic-addon1">
                                <button type="button" class="btn btn-secondary">Search</button>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
            <a href="#"><i class="far fa-user"></i></a>
            <a href="#"><i class="fas fa-shopping-bag"></i></a>
        </div>
    </div>
    <section class="down__section"></section>
    `)
})

