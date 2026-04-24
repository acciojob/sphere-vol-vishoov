function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
  const radius = document.getElementById('radius').value;
const radiusValue = parseFloat(radius);
	const output = document.getElementById('volume');

	if(isNaN(radiusValue) || radius<0){
		output.value="NaN"
	}else{
		const volume = (4/3)*Math.PI*Math.pow(radiusValue, 3);
		output.value = volume.toFixed(4);
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
