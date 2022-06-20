/*
// Create a function that will take in the cart object as an argument and output an array of strings like the following: 
// ['Large Hand Tossed Pizza (Pepperoni)'', 'Medium Pan Pizza (Onion Spinach)','Parmesan Bread Bites (No Toppings)']
// Note: If there are no toppings the string should say 'No Toppings' in the parenthesis. 
*/

// Create a function that will take in the cart object as an argument and output an array of strings like the following:
// ['Large Hand Tossed Pizza (Pepperoni)'', 'Medium Pan Pizza (Onion Spinach)','Parmesan Bread Bites (No Toppings)']
// Note: If there are no toppings the string should say 'No Toppings' in the parenthesis.

const cart = {
  "14SCREEN": {
    Name: "Large Hand Tossed Pizza",
    Qty: 1,
    Toppings: ["Pepperoni"],
    Price: 10,
  },
  P12IPAZA: {
    Name: "Medium Pan Pizza",
    Qty: 1,
    Toppings: ["Onion", "Spinach"],
    Price: 9,
  },
  B16PBIT: {
    Name: "Parmesan Bread Bites",
    Qty: 1,
    Toppings: [],
    Price: 2.99,
  },
};

const formatCartForDisplay = (cart) => {
  const orders = Object.values(cart);

  const order = orders.map((item) => {
    const name = item.Name;
    let toppings = "No Toppings";

    if (item.Toppings != null && item.Toppings.length > 0) {
      toppings = item.Toppings.join(" ");
    }

    return `${name} (${toppings})`;
  });

  return order;
};

console.log(formatCartForDisplay(cart));
