/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};
/* Función par */
var par = function par (num) {
	if(num%2==0) 
		return true;
	else 
		return false; 	
};

/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	par
}

