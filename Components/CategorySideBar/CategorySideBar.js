$(document).ready(function() {
    $("#slide_bar").before(`
    <nav id="sidebar">
    <div class="p-5 pt-5">
      <h5 style="text-transform: uppercase;">Categories</h5>
      <ul class="list-unstyled components mb-5">
        <li>
          <a href="#mens" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mens Shoes</a>
          <ul class="collapse list-unstyled" id="mens">
            <li><a href="#"></span> Casual</a></li>
            <li><a href="#"></span> Football</a></li>
            <li><a href="#"></span> Jordan</a></li>
            <li><a href="#"></span> Lifestyle</a></li>
            <li><a href="#"></span> Running</a></li>
            <li><a href="#"></span> Soccer</a></li>
            <li><a href="#"></span> Sports</a></li>
          </ul>
        </li>
        <li>
          <a href="#womens" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Womans
            Shoes</a>
          <ul class="collapse list-unstyled" id="womens">
            <li><a href="#"> Casual</a></li>
            <li><a href="#"> Football</a></li>
            <li><a href="#"> Jordan</a></li>
            <li><a href="#"> Lifestyle</a></li>
            <li><a href="#"> Running</a></li>
            <li><a href="#"> Soccer</a></li>
            <li><a href="#"> Sports</a></li>
          </ul>
        </li>
        <li>
          <a href="#accessories" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Accessories</a>
          <ul class="collapse list-unstyled" id="accessories">
            <li><a href="#"> Nicklace</a></li>
            <li><a href="#"> Ring</a></li>
            <li><a href="#"> Bag</a></li>
            <li><a href="#"> Sacks</a></li>
            <li><a href="#"> Lipstick</a></li>
          </ul>
        </li>
        <li>
          <a href="#clothers" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Clothes</a>
          <ul class="collapse list-unstyled" id="clothers">
            <li><a href="#"> Jeans</a></li>
            <li><a href="#"> T-shirt</a></li>
            <li><a href="#"> Jacket</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Sweater</a></li>
          </ul>
        </li>
      </ul>
      <div class="mb-5">
        <h5 style="text-transform: uppercase;">Refine search</h5>
        <ul class="list-unstyled components mb-5">
          <li>
            <a href="#colerRefineSearch" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Color</a>
            <ul class="collapse list-unstyled" id="colerRefineSearch">
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>Black</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>White</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>Yellow</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>Red</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>Mixed</h5>
                    </label>
                  </div>
                </a></li>
            </ul>
          </li>
          <li>
            <a href="#price" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Price</a>
            <ul class="collapse list-unstyled" id="price">
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>50$-200$</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>200$-500$</h5>
                    </label>
                  </div>
                </a></li>
            </ul>
          </li>
          <li>
            <a href="#size" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Size</a>
            <ul class="collapse list-unstyled" id="size">
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>38-40</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>40-42</h5>
                    </label>
                  </div>
                </a></li>
              <li><a href="#"></span>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                    <h5>42-44</h5>
                    </label>
                  </div>
                </a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="mb-5">
        <a href="#" class="refine-search-btn">REFINE SEARCH</a>
      </div>      
  </nav>
    `)
})