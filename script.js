// Pizza Order By Tito

// Add an Event listener to the button to run the placeholder function
document.getElementById("btn").addEventListener("click", pizzaOrder);

// Store order code in a function
function pizzaOrder() {
    // INPUT
    let size = document.getElementById("size-in").value;
    let topping1 = document.getElementById("topping1-in").value;
    let topping2 = document.getElementById("topping2-in").value;
    let pizzaSauce = document.getElementById("sauce-in").value;

    // PROCESS
    let msg = `Your ${size} pizza with ${topping1} and ${topping2} with ${pizzaSauce} sauce will be ready soon!`;

    // OUTPUT
    document.getElementById("output").innerHTML = msg;
}