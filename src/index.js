const quantities = {
    ondeonde: 0,
    risoles: 0,
    getok: 0
};

function changeQuantity(change, item) {
    quantities[item] = Math.max(0, quantities[item] + change); // Agar tidak bisa negatif
    document.getElementById(`${item}-quantity`).value = quantities[item];
    updateTotal();
}

function updateTotal() {
    const total = (quantities.ondeonde * 3000) + (quantities.risoles * 3000) + (quantities.getok * 3000);
    document.getElementById('tot_harga').value = 'Rp. ' + total;
}

function linked() {
    const onde_onde = "Onde-onde: " + document.getElementById(`ondeonde-quantity`).value;
    const risoles = "Risoles: " + document.getElementById(`risoles-quantity`).value;
    const getok = "Getok: " + document.getElementById(`getok-quantity`).value;
    const tot_hargaText = "Total Harga: Rp. " + document.getElementById('tot_harga').value;
    const name = document.getElementById('nameInput').value;
    const address = document.getElementById('addressInput').value;



    const gabung = name + "\n" + address + "\n" + onde_onde + "\n" + risoles + "\n" + getok + "\n" + tot_hargaText;

    // const formattedName = encodeURIComponent(name);
    // const formattedAddress = encodeURIComponent(address);
    const formattedGabung = encodeURIComponent(gabung);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6285850775655&text=${formattedGabung}`;
    window.open(whatsappUrl);
}