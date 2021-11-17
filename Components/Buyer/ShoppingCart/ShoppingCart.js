$(document).ready(function() {
    $("#shopping-cart").before(`
    <table class="table table-bordered">
    <thead class="thead-dark">
        <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Model</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <div class="shopping__cart__image">
                    <img
                        src="https://swagger.com.vn/wp-content/uploads/2020/06/nike-air-force-1-white-1.jpg">
                </div>
            </th>
            <td>
                <div class="shopping__cart__component">
                    <a href="#">Nike Air Force 1</a>
                </div>
            </td>
            <td>
                <div class="shopping__cart__component">
                    <p>Nike</p>
                </div>
            </td>
            <td>
                <div class="shopping__cart__component">
                    <input type="number" value="1">
                    <button class="update__quantity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                            <path
                                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                            <path fill-rule="evenodd"
                                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                        </svg>
                    </button>
                    <button class="delete__product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                    </button>
                </div>
            </td>
            <td>
                <div class="shopping__cart__component">
                    <p>$200.00</p>
                </div>
            </td>
            <td>
                <div class="shopping__cart__component">
                    <p>$200.00</p>
                </div>
            </td>
        </tr>
    </tbody>
</table>
    `)
})