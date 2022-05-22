


//dom

function f_meterPersegi(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>panjang (m) :</label>
					<input type="text" class="form-control" name="lebar1" onkeyup="h_meterPersegi(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar (m) :</label>
					<input type="text" class="form-control" name="lebar2" onkeyup="h_meterPersegi(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}


function h_meterPersegi(value){
	let lebar1 = document.formData.lebar1.value;
	let lebar2 = document.formData.lebar2.value;
			
	document.formData.hasil.value = `${luasMeterPersegi(lebar1, lebar2)} meter` ;
}


function f_kubikasi(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>tinggi (m) :</label>
					<input type="text" class="form-control" name="tinggi" onkeyup="h_kubikasi(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>panjang (m) :</label>
					<input type="text" class="form-control" name="panjang" onkeyup="h_kubikasi(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar (cm) :</label>
					<input type="text" class="form-control" name="lebar" onkeyup="h_kubikasi(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_kubikasi(value){
	let tinggi = document.formData.tinggi.value;
	let panjang = document.formData.panjang.value;
	let lebar = document.formData.lebar.value;
			
	document.formData.hasil.value = `${kubikPasir(tinggi, panjang, lebar)} kubik` ;
}

function f_bata(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>tinggi (cm) :</label>
					<input type="text" class="form-control" name="tinggi" onkeyup="h_bata(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>panjang (cm) :</label>
					<input type="text" class="form-control" name="panjang" onkeyup="h_bata(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar (cm) :</label>
					<input type="text" class="form-control" name="lebar" onkeyup="h_bata(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>perekat (cm) :</label>
					<input type="text" class="form-control" name="perekat" onkeyup="h_bata(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>luaspasangan (m) :</label>
					<input type="text" class="form-control" name="luaspasangan" onkeyup="h_bata(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group
					<div class="table-responsive">
						<table class="table" border="1">
							<thead>
								<tr>
									<th></th>
									<th>isi permeter</th>
									<th>isi perkubik</th>
									<th>jumlah meter</th>
									<th>jumlah kubik</th>
									<th>jumlah bata</th>
									<th>sisa bata</th>
									<th>jumlah perekat</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Spesifikasi</td>
									<td>
										<input type="text" class="form-control"  name="isipermeter" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="isiperkubik" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahmeter" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahkubikmaterialbata" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahmaterialbata" value="" readonly>
									</td>
									<td></td>
									<td>
										<input type="text" class="form-control"  name="jumlahperekat" value="" readonly>
									</td>
								</tr>
								<tr>
									<td>Hasil</td>
									<td>
										<input type="text" class="form-control"  name="isipermeter1" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="isiperkubik1" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahmeter1" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahkubikmaterialbata1" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahmaterialbata1" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="sisabata1" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahperekat1" value="" readonly>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
				
	`;

}

function h_bata(value){
	let tinggi = document.formData.tinggi.value;
	let panjang = document.formData.panjang.value;
	let lebar = document.formData.lebar.value;
	let perekat = document.formData.perekat.value;
	let luaspasangan = document.formData.luaspasangan.value;

	// spesifikasi
	document.formData.isipermeter.value = `${isiPerMeter(tinggi, panjang).toFixed([1])} Bata` ;
	document.formData.isiperkubik.value = `${isiPerKubik(tinggi, panjang, lebar).toFixed([1])} Bata` ;
	document.formData.jumlahmeter.value = `${jumlahMeter(tinggi, panjang, lebar).toFixed([1])} meter` ;
	document.formData.jumlahmaterialbata.value = `${jumlahMaterialBata(tinggi, panjang, luaspasangan).toFixed([1])} Bata` ;
	document.formData.jumlahkubikmaterialbata.value = `${jumlahKubikMaterialBata(tinggi, panjang, lebar, luaspasangan).toFixed([1])} kubik` ;
	document.formData.jumlahperekat.value = `${jumlahKubikMaterialBata(tinggi, panjang, lebar, luaspasangan).toFixed([1])} sak` ;

	// hasil
	document.formData.isipermeter1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[3].toFixed([1])} Bata` ;
	document.formData.isiperkubik1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[4].toFixed([1])} Bata` ;
	document.formData.jumlahmeter1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[5].toFixed([1])} meter` ;
	document.formData.jumlahmaterialbata1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[6].toFixed([1])} Bata` ;
	document.formData.jumlahkubikmaterialbata1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[7].toFixed([1])} kubik` ;
	document.formData.sisabata1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[8].toFixed([1])} bata` ;
	document.formData.jumlahperekat1.value = `${bata(tinggi, panjang, lebar, perekat, luaspasangan)[9].toFixed([1])} kubik` ;
	
}

function f_besiLantai(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>panjang (m) :</label>
					<input type="text" class="form-control" name="panjang" onkeyup="h_besiLantai(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar (m) :</label>
					<input type="text" class="form-control" name="lebar" onkeyup="h_besiLantai(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>jarak (cm) :</label>
					<input type="text" class="form-control" name="jarak" onkeyup="h_besiLantai(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_besiLantai(value){
	let panjang = document.formData.panjang.value;
	let lebar = document.formData.lebar.value;
	let jarak = document.formData.jarak.value;
			
	document.formData.hasil.value = `${besiLantai(panjang, lebar, jarak,)} Batang` ;
}


function f_besiKolom(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>panjangkolom (m) :</label>
					<input type="text" class="form-control" name="panjangkolom" onkeyup="h_besiKolom(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>potonganbesi (satuan) :</label>
					<input type="text" class="form-control" name="potonganbesi" onkeyup="h_besiKolom(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_besiKolom(value){
	let panjangkolom = document.formData.panjangkolom.value;
	let potonganbesi = document.formData.potonganbesi.value;
			
	document.formData.hasil.value = `${besiKolom(panjangkolom, potonganbesi)} Batang` ;
}


function f_besiCincin(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>tinggi (cm) :</label>
					<input type="text" class="form-control" name="tinggi" onkeyup="h_besiCincin(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar (cm) :</label>
					<input type="text" class="form-control" name="lebar" onkeyup="h_besiCincin(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>stek (cm) :</label>
					<input type="text" class="form-control" name="stek" onkeyup="h_besiCincin(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>jarak (cm) :</label>
					<input type="text" class="form-control" name="jarak" onkeyup="h_besiCincin(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>panjangkolom (m) :</label>
					<input type="text" class="form-control" name="panjangkolom" onkeyup="h_besiCincin(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group
					<div class="table-responsive">
						<table class="table" border="1">
							<thead>
								<tr>
									<th>panjang cincin</th>
									<th>jumlah cincin</th>
									<th>jumlah besi</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="text" class="form-control"  name="panjangcincin" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahcincin" value="" readonly>
									</td>
									<td>
										<input type="text" class="form-control"  name="jumlahbesi" value="" readonly>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
				
	`;

}

function h_besiCincin(value){
	let tinggi = document.formData.tinggi.value;
	let lebar = document.formData.lebar.value;
	let stek = document.formData.stek.value;
	let jarak = document.formData.jarak.value;
	let panjangkolom = document.formData.panjangkolom.value;

	document.formData.panjangcincin.value = `${panjangCincin(tinggi, lebar, stek)} cm` ;
	document.formData.jumlahcincin.value = `${jumlahCincin(jarak, panjangkolom)} cincin` ;
	document.formData.jumlahbesi.value = `${besiCincin(tinggi, lebar, stek, jarak, panjangkolom)} Batang` ;

	
}

function f_plafon(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>panjang plafon (m) :</label>
					<input type="text" class="form-control" name="panjang" onkeyup="h_plafon(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar plafon (m) :</label>
					<input type="text" class="form-control" name="lebar" onkeyup="h_plafon(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>luaspasangan (m) :</label>
					<input type="text" class="form-control" name="luaspasangan" onkeyup="h_plafon(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_plafon(value){
	let panjang = document.formData.panjang.value;
	let lebar = document.formData.lebar.value;
	let luaspasangan = document.formData.luaspasangan.value;
			
	document.formData.hasil.value = `${plafon(panjang, lebar, luaspasangan)} lembar` ;
}



function f_keramik(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>luaspasangan (m) :</label>
					<input type="text" class="form-control" name="luaspasangan" onkeyup="h_keramik(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_keramik(value){
	let luaspasangan = document.formData.luaspasangan.value;
			
	document.formData.hasil.value = `${keramik(luaspasangan)} Dus` ;
}


function f_anakTangga(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>tinggibadan (m) :</label>
					<input type="text" class="form-control" name="tinggibadan" onkeyup="h_anakTangga(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>tinggianaktangga (cm) :</label>
					<input type="text" class="form-control" name="tinggianaktangga" onkeyup="h_anakTangga(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_anakTangga(value){
	let tinggibadan = document.formData.tinggibadan.value;
	let tinggianaktangga = document.formData.tinggianaktangga.value;
			
	document.formData.hasil.value = `${anakTangga(tinggibadan, tinggianaktangga)} Anak tangga` ;
}


function f_wermes(){
	document.getElementById("formInput").innerHTML =`

			<div class="col-md-6">
				<div class="form-group">
					<label>panjang wermes (m) :</label>
					<input type="text" class="form-control" name="panjang" onkeyup="h_wermes(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>lebar wermes (m) :</label>
					<input type="text" class="form-control" name="lebar" onkeyup="h_wermes(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<label>luaspasangan (m) :</label>
					<input type="text" class="form-control" name="luaspasangan" onkeyup="h_wermes(this.value)" onkeypress="return isNumberKey(event)">
				</div>
				<div class="form-group">
					<button class="btn btn-danger" type="reset">RESET</button>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<label>hasil :</label>
					<input type="text" class="input-lg"  name="hasil" value="" readonly>
				</div>
			</div>
				
	`;

}

function h_wermes(value){
	let panjang = document.formData.panjang.value;
	let lebar = document.formData.lebar.value;
	let luaspasangan = document.formData.luaspasangan.value;
			
	document.formData.hasil.value = `${wermes(panjang, lebar, luaspasangan)} lembar` ;
}
