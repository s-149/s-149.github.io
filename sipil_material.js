
// anonymous function

// induk


function produksi(){

	const tahap = development;
	return tahap;

}

const cm = function(){
	return 100;
}

// pangkat

// pangkat 1 = meter lari, pangkat 2 = meter persegi, pangkat 3 = kubikasi

let meter = () => cm() * 1;

let persegi = () => meter() * 100;

let kubikasi = () => persegi() * 100;

let luasMeterPersegi = (tinggi, panjang) => tinggi * panjang;




// arrow function

// bata

// luas 


let luasCM = (tinggi, panjang) => { return tinggi * panjang; }

let luasKubik = (tinggi, panjang, lebar) => { return tinggi * panjang * lebar; }

// persegi

let cmPersegi = (tinggi, panjang) => luasCM(tinggi, panjang) / meter();

let mPersegi = (tinggi, panjang) => luasCM(tinggi, panjang) / persegi();


// kubikasi

let volumeKubik = (tinggi, panjang, lebar) => luasKubik(tinggi, panjang, lebar) / kubikasi();

// nilai

let isiPerMeter = (tinggi, panjang) => persegi() / luasCM(tinggi, panjang);

let isiPerKubik = (tinggi, panjang, lebar) => kubikasi() / luasKubik(tinggi, panjang, lebar);

let jumlahMeter = (tinggi, panjang, lebar) => cmPersegi(tinggi, panjang) * (persegi() / volumeKubik(tinggi, panjang, lebar)) / kubikasi();

// bata

let jumlahMaterialBata = (tinggi, panjang, luasPasangan) => isiPerMeter(tinggi, panjang) * luasPasangan;

let jumlahKubikMaterialBata = (tinggi, panjang, lebar, luasPasangan) => jumlahMaterialBata(tinggi, panjang, luasPasangan) / isiPerKubik(tinggi, panjang, lebar);

// index
let bata = function(tinggi, panjang, lebar, perekat, luasPasangan){
	let luas = (parseInt(tinggi) + parseInt(perekat) + parseInt(perekat)) * (parseInt(panjang) + parseInt(perekat));
	let luasBata = luas / persegi();
	let volume = luas * lebar;

	let isiBataPerMeter = persegi() / luas;
	let isiBataPerKubik = kubikasi() / volume;
	let jumlahMeterBata = isiBataPerMeter * luasPasangan;
	let jumlahKubikBata = jumlahMeterBata / isiPerKubik(tinggi, panjang, lebar);
	let jumlahBata = jumlahMeterBata / isiPerMeter(tinggi, panjang);

	let sisaBata = jumlahMaterialBata(tinggi, panjang, luasPasangan) - jumlahMeterBata;

	let jumlahPerekat = jumlahKubikMaterialBata(tinggi, panjang, lebar, luasPasangan) - jumlahKubikBata ;

	let hasil = [luas, luasBata, volume, isiBataPerMeter, isiBataPerKubik, jumlahBata, jumlahMeterBata, jumlahKubikBata, sisaBata, jumlahPerekat];

	console.log('isi bata per meter : ' + isiBataPerMeter.toFixed([1]));
	console.log('isi bata per kubik : ' + isiBataPerKubik.toFixed([1]));
	console.log('jumlah bata : ' + jumlahBata.toFixed([1]));
	console.log('jumlah meter : ' + jumlahMeterBata.toFixed([1]));
	console.log('jumlah kubik bata : ' + jumlahKubikBata.toFixed([1]));

	console.log('sisa bata : ' + sisaBata.toFixed([1]));
	console.log('jumlah perekat : ' + jumlahPerekat.toFixed([1]));
	
	return hasil;
									
}

let Bata = function(tinggi, panjang, lebar, perekat, luasPasangan){
	this.luas = (tinggi + perekat + perekat) * (panjang + perekat);
	this.luasBata = luas / persegi();
	this.volume = luas * lebar;

	this.isiBataPerMeter = persegi() / luas;
	this.jumlahBata = isiBataPerMeter * luasPasangan;
	this.jumlahKubikBata = jumlahBata / isiPerKubik(tinggi, panjang, lebar);
	this.jumlahMeterBata = jumlahBata / isiPerMeter(tinggi, panjang);

	this.sisaBata = jumlahMaterialBata(tinggi, panjang, luasPasangan) - jumlahBata;

	this.jumlahPerekat = jumlahKubikMaterialBata(tinggi, panjang, lebar) - jumlahKubikBata ;

	this.hasil = [luas, luasBata, volume, isiBataPerMeter, jumlahBata, jumlahKubikBata, jumlahMeterBata, sisaBata, jumlahPerekat];
	
	console.log(this);
	
}

// besi

const panjangBesiBatangan = () => 12 * cm();

// besi kolom

let panjangKolom = panjang => panjang * 100;

// index
let besiKolom = (panjang, potonganBesi) => panjangKolom(panjang) * potonganBesi / panjangBesiBatangan();


// besi cincin

let panjangCincin = (tinggi, lebar, stek) => (tinggi *2) + (lebar * 2) + (stek *2);


let jumlahCincin = (jarak, panjang) => panjangKolom(panjang) / jarak;


// index
let besiCincin = (tinggi, lebar, stek, jarak, panjang) => panjangCincin(tinggi, lebar, stek) * jumlahCincin(jarak, panjang) / panjangBesiBatangan();

// besi lantai

let potonganBesiLantai1 = (lebar1, jarak) => lebar1 * cm() / jarak;

let potonganBesiLantai2 = (lebar2, jarak) => lebar2 * cm() / jarak;

let panjangBesiLantai = (lebar1, lebar2, jarak) => (potonganBesiLantai1(lebar1, jarak) * lebar2) + (potonganBesiLantai2(lebar2, jarak) * lebar1);


// index
let besiLantai = (lebar1, lebar2, jarak,) => panjangBesiLantai(lebar1, lebar2, jarak) * cm() / panjangBesiBatangan();

// pasir

let meterPasir = (tinggi, panjang, lebar) => tinggi * panjang * persegi() / (persegi() / tinggi * panjang * persegi() * lebar / kubikasi());

let kubikPasir = (tinggi, panjang, lebar) => tinggi * panjang * persegi() * lebar / kubikasi();

let kubikPasirLuas = (luas, lebar) => luas * persegi() * lebar / kubikasi();

// batu split

let meterBatuSplit = (tinggi, panjang, lebar) => tinggi * panjang * persegi() / (persegi() / tinggi * panjang * persegi() * lebar / kubikasi());

let kubikBatuSplit = (tinggi, panjang, lebar) => tinggi * panjang * persegi() * lebar / kubikasi();

let kubikBatuSplitLuas = (luas, lebar) => luas * persegi() * lebar / kubikasi();

// plafon

let plafon = (panjang, lebar, luasPasangan) => luasPasangan / luasMeterPersegi(panjang, lebar);


// keramik

let keramik = (luasPasangan) => luasPasangan;


// anak tangga

let anakTangga = (ht, tinggi) => ht * meter() / tinggi - 1;

// wermes

let wermes = (panjang, lebar, luasPasangan) => luasPasangan / ( luasMeterPersegi(panjang, lebar) - ( (panjang * 0.20) + (lebar * 0.20) ) ) ;





















































let Saya = function(){
	this.nama = 'Anonymous';
	this.kelas = 1;

	console.log(this);


// set interval
setInterval( () => {
	console.log(`ping : ${this.kelas ++}`);

}, 1000);

}

// let ping = new Saya();

































