import chesterpic from "./images/Chester.png"
import brettpic from "./images/Brett.png"
import gumballpic from "./images/gumball.png"
import onionpic from "./images/onion.png"
import pebblepic from "./images/pebble.png"
import rickpic from "./images/rick.png"
import sludgepic from "./images/sludge.png"
import wintonpic from "./images/winton.png"
function Shop() {
    var shoplist = [];
    shoplist.push(Shopitem(chesterpic, "Chester", "47"))
    shoplist.push(Shopitem(brettpic, "brett", "36"))
    shoplist.push(Shopitem(gumballpic, "gumball", "120"))
    shoplist.push(Shopitem(onionpic, "onion", "79"))
    shoplist.push(Shopitem(pebblepic, "pebble", "49"))
    shoplist.push(Shopitem(rickpic, "rick", "30"))
    shoplist.push(Shopitem(sludgepic, "sludge", "42"))
    shoplist.push(Shopitem(wintonpic, "winton", "29"))
    var mycart = [];
    return (
        <div id="shopgrid">
            <p id ="shopbox">
                    {shoplist.map((shops) => (
                        <div key={shops.title}>
                            <img src={shops.image}></img>
                            <p>{shops.title}</p>
                            <p>${shops.price}</p>
                            <button onClick={addtocart(shops.title, mycart)}>Add to Cart</button>
                        </div>
                    ))}
            </p>
        </div>
    );
}
function addtocart(titleid, mycart)
{
    mycart.push(titleid);
    sessionStorage.setItem('mycart', mycart);
}
function Shopitem(imgid, titleid, costid) {
    return({image: imgid, title: titleid, price: costid});
}
export default Shop;