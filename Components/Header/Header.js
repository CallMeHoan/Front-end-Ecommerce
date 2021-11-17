$(document).ready(function() {
    $("#header").before(`
    <div style="background-color: #dadada;" class="sticky-top">
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <a href="../../../../Front-end-Ecommerce/Pages/Homepage/index.html" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src="https://opencart.mahardhi.com/MT04/noriva/01/image/catalog/logo.png" alt="Logo">
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-dark">Home</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#"> Men's Shoes </a>
            <div class="dropdown__items">
              <ul>
                <li><a class="dropdown-item" href="#"> Casual</a></li>
                <li><a class="dropdown-item" href="#"> Football </a></li>
                <li><a class="dropdown-item" href="#"> Jordan </a></li>
                <li><a class="dropdown-item" href="#"> Lifestyle </a></li>
                <li><a class="dropdown-item" href="#"> Running </a></li>
                <li><a class="dropdown-item" href="#"> Soccer </a></li>
                <li><a class="dropdown-item" href="#"> Sport </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#"> Men's Shoes </a>
            <div class="dropdown__items">
              <ul>
                <li><a class="dropdown-item" href="#"> Casual</a></li>
                <li><a class="dropdown-item" href="#"> Football </a></li>
                <li><a class="dropdown-item" href="#"> Jordan </a></li>
                <li><a class="dropdown-item" href="#"> Lifestyle </a></li>
                <li><a class="dropdown-item" href="#"> Running </a></li>
                <li><a class="dropdown-item" href="#"> Soccer </a></li>
                <li><a class="dropdown-item" href="#"> Sport </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#"> Men's Shoes </a>
            <div class="dropdown__items">
              <ul>
                <li><a class="dropdown-item" href="#"> Casual</a></li>
                <li><a class="dropdown-item" href="#"> Football </a></li>
                <li><a class="dropdown-item" href="#"> Jordan </a></li>
                <li><a class="dropdown-item" href="#"> Lifestyle </a></li>
                <li><a class="dropdown-item" href="#"> Running </a></li>
                <li><a class="dropdown-item" href="#"> Soccer </a></li>
                <li><a class="dropdown-item" href="#"> Sport </a></li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="col-md-3 text-end  header__right">
          <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"><i class="fas fa-search"></i>
          </button>

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
                    <input type="text" class="form-control" placeholder="Type here to search!"
                      aria-label="Type here to search!" aria-describedby="basic-addon1">
                    <button type="button" class="btn btn-secondary">Search</button>
                  </div>
                </form>
              </nav>
            </div>
          </div>
          <a href="../../../../Front-end-Ecommerce/Pages/MyAccount/Login/index.html" class="btn"><i class="far fa-user"></i></a>
          <a href="../../../../Front-end-Ecommerce/Pages/ShoppingCart/index.html" class="btn"><i class="fas fa-shopping-bag"></i></a>
        </div>
    </div>
    </header>
    </div>
    <section class="down__section"></section>
    `)
})

