let pengeluaran = [];
let jumlahPengeluaran = 0;

function addData() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;

    if (!nama || !jumlah) {
        presentAlert();
        return false;
    }

    let pushData = {};
    pushData.nama = nama;
    pushData.jumlah = jumlah;

    pengeluaran.push(pushData);

    let text = "";
    let i;

    for (i = 0; i < pengeluaran.length; i++) {
        text += "<ion-item>" + pengeluaran[i].nama + " : Rp. " + pengeluaran[i].jumlah.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + ".00" + "</ion-item>";
    }

    jumlahPengeluaran += parseInt(pushData.jumlah);
    document.getElementById("listPengeluaran").innerHTML = text;
    document.getElementById("totalPengeluaran").innerHTML = "Total Pengeluaran : Rp. " + jumlahPengeluaran.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + ".00";
    clearData();
}

function clearData() {
    let nama = document.getElementById("nama");
    let jumlah = document.getElementById("jumlah");

    nama.value = "";
    jumlah.value = "";
}

async function presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');

    const alert = await alertController.create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran.',
        buttons: ['Tutup']
    });

    return await alert.present();
}