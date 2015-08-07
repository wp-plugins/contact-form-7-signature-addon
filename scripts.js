function sigFieldClear(id){

	var canvas = document.getElementById("wpcf7_" + id + "_signature");

	var signaturePad = new SignaturePad(canvas);
	signaturePad.clear();

	document.getElementById("wpcf7_" + id + "_input").value= "";
}

function clearSignatures(){
	
	var elements = document.querySelectorAll("input.wpcf7-signature");
	Array.prototype.forEach.call(elements, function(el, i){
		
		sigFieldClear(el.name);

	});

}
