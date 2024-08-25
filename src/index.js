function increments(id) {
    var quantity = document.getElementById("qty-" + id);
    quantity.value = parseInt(quantity.value) + 1;
}

function decrement(id) {
    var quantity = document.getElementById("qty-" + id);
    if (parseInt(quantity.value) > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}