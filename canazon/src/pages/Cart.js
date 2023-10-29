function Cart() {
    var cartitemstring = sessionStorage.getItem('mycart');
    var cartitems = cartitemstring.split(",");
    return (
        <div id="cartpage">
            <h2>Thank you for shopping with Canazon! here are the items you purchased.</h2>
            {cartitems.map((items) => (
                        <p>{items}</p>
                    ))}
        </div>
    );
}

export default Cart;