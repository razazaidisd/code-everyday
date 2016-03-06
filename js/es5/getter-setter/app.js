var objLiteral = {
	prop1: "My First Property",
	prop2: "Second Property",
	get getProperties(){
		return this.prop1 + " and " + this.prop2; 
	},
	set setProperties(props){
		var parts = props.toString().split(", ");
		this.prop1 = parts[0] || "No value passed by user";
		this.prop2 = parts[1] || "No value passed by user";
	}
};



objLiteral.setProperties = "Yoyo 1, Yo yo 2nd property!";

document.write("Object Prop 1 is : <b>" + objLiteral.prop1 + "</b> <br/>");
document.write("Object Props are : <b>" + objLiteral.getProperties + "</b>");




objLiteral.prop1 = "test";



document.write(objLiteral.getProperties);