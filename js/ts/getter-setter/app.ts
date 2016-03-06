class GetThings{
	constructor(size){
		this.length = size;
	}
	get mylength(){
		return this.length;
	}
	set mylength(len){
		this.length = len;
		console.log("the value has been set!");
	}
}


var things = new GetThings(9);

document.write(things.mylength);

