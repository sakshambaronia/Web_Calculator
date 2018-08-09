document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
   fnShapeSelector();
});

document.getElementById("cancel").addEventListener("click", function(event){
    location.reload();
});

document.getElementById("calculateResult").addEventListener("click", function(event){
    event.preventDefault();
   fnShapeDimension();
});

function fnShapeSelector(){

	var radios = document.getElementsByName('shape');
	var circleProperty =  document.getElementById("circleProperty");
	var rectangleProperty =  document.getElementById("rectangleProperty");
	var squareProperty =  document.getElementById("squareProperty");
	var eclipseProperty =  document.getElementById("eclipseProperty");
	if (!radios[0].checked&&!radios[1].checked&&!radios[2].checked&&!radios[3].checked) {
		alert("You have not selected any option.\nPlease select one: ");
		document.getElementById('shapeSelection').style.display = 'block';
	}
	else{
    	for(var i = 0; i < radios.length; i++){
        if (radios[i].checked) {
        	var val = radios[i].value;
        	if(val == 'circle'){  
        			circleProperty.style.display = 'block';   // show
        			rectangleProperty.style.display = 'none';// hide
        			squareProperty.style.display = 'none';
         			eclipseProperty.style.display = 'none';
     		}
     		else if(val == 'square'){
         			circleProperty.style.display = 'none';   
        			rectangleProperty.style.display = 'none';
        			squareProperty.style.display = 'block';
         			eclipseProperty.style.display = 'none';
     		} 
     		else if(val == 'rectangle'){
         			circleProperty.style.display = 'none';  
        			rectangleProperty.style.display = 'block';
        			squareProperty.style.display = 'none';
         			eclipseProperty.style.display = 'none';
     		} 
     		else if(val == 'eclipse'){
         			circleProperty.style.display = 'none';   
        			rectangleProperty.style.display = 'none';
        			squareProperty.style.display = 'none';
         			eclipseProperty.style.display = 'block';
     		} 
    	}
    
    	}
    document.getElementById('shapeSelection').style.display = 'none';
	document.getElementById('shapedimensioninput').style.display = 'block';

	}

};

function fnShapeDimension(){
	var radios = document.getElementsByName('shape');
	if (!radios) {
		alert("Please select a value");
	}
	for(var i = 0; i < radios.length; i++){
        if (radios[i].checked) {
				document.getElementById('shapeSelection').style.display = 'none';
				document.getElementById('shapeCalculation').style.display = 'block';
				document.getElementById('shapedimensioninput').style.display = 'none';
				document.getElementById('output').innerHTML = calculateArea();
				
		}

	}
};

function calculateArea() {
	var radios = document.getElementsByName('shape');
	var area=0;
	var pi=3.14;
	var parameters = '';
	for(var i = 0; i < radios.length; i++){
        if (radios[i].checked) {
        	var val = radios[i].value;
        	if(val == 'circle'){  
        		area = pi*document.getElementById("diameter").value*document.getElementById("diameter").value/4;
        		parameters = 'Diameter of '+ document.getElementById("diameter").value;
     		}
     		else if(val == 'square'){
         		area = document.getElementById("side").value*document.getElementById("side").value;
         		parameters = 'side of '+ document.getElementById("side").value;
     		} 
     		else if(val == 'rectangle'){
         		area = document.getElementById("length").value*document.getElementById("width").value;
         		parameters = 'length of '+ document.getElementById("length").value+' and width of '+ document.getElementById("width").value;
     		} 
     		else if(val == 'eclipse'){
         		area = pi*document.getElementById("eclipseHeight").value*document.getElementById("eclipseWidth").value;
         		parameters = 'height of '+ document.getElementById("eclipseHeight").value+' and width of '+ document.getElementById("eclipseWidth").value;
     		} 
    	}
    }
    document.getElementById('shapeObject').innerHTML=val;
    document.getElementById('parameters').innerHTML=parameters;

    return area;
}
