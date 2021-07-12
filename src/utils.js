import products from "./products.json";

export function toItemsArray(object) {
  return Object.keys(object).map((key) => ({ id: key, count: object[key] }));
}
export function calculateCartState(cartArray=[]) {
  let no_of_items = 0;
  let total = 0;
  if (cartArray.length !== 0) {
    for (let i = 0; i < cartArray.length; i++) {
      no_of_items += parseInt(cartArray[i].count);
      total += parseInt(
        products.find((obj) => {
          return obj.id === cartArray[i].id;
        }).price * cartArray[i].count
      );
    }
  }
  return { no_of_items, total };
}

export function getProduct(id){
    return products.find(p => p.id === id);
}

export function getIntitalState() {
  let keys = localStorage.getItem("items");
  const cart = {};
  if (!!keys) {
    keys = keys.split(",");
    keys.forEach((key) => {
      const count = localStorage.getItem(key);
      if (!!count) cart[key] = count;
    });
  }
  return cart;
}

export function checkIfAdded(cart, id) {
  const cart_arry = toItemsArray(cart);
  const index = cart_arry.findIndex(elem => elem.id === id);
  if(index === -1) return false;
  return cart_arry[index].count === 0 ? false : true ;
}

export function addCartToLocalStorage(cart) {
  const keys = Object.keys(cart);
  const item_k = keys.filter((key) => cart[key] !== 0);
  keys.forEach((key) => {
    if (cart[key] === 0) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, cart[key]);
  });
  localStorage.setItem("items", item_k.join(","));
}


export const currency_symbols = {
    USD: "$", // US Dollar
    EUR: "€", // Euro
    CRC: "₡", // Costa Rican Colón
    GBP: "£", // British Pound Sterling
    ILS: "₪", // Israeli New Sheqel
    INR: "₹", // Indian Rupee
    JPY: "¥", // Japanese Yen
    KRW: "₩", // South Korean Won
    NGN: "₦", // Nigerian Naira
    PHP: "₱", // Philippine Peso
    PLN: "zł", // Polish Zloty
    PYG: "₲", // Paraguayan Guarani
    THB: "฿", // Thai Baht
    UAH: "₴", // Ukrainian Hryvnia
    VND: "₫", // Vietnamese Dong
  };
  
  export function calculateFilterState(catid,{delivery,inStock,expensive}){
    let filteredProducts = products.filter(prod => prod.categoryId === catid)
    if(delivery === true){
        filteredProducts = filteredProducts.filter(p=>(p.delivery === true))
    }
    if(expensive === true)
    {
        filteredProducts = filteredProducts.filter(p=>(p.price >= 100))

    }
    if(inStock === true)
    {
        filteredProducts = filteredProducts.filter(p=>(p.inStock === true))

    }
    return filteredProducts;
  }