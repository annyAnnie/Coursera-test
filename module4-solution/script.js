var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="James";
names[3]="Jack";
names[4]="quratulain";
names[5]="salwa";
names[6]="fatima";
names[7]="israr";
names[8]="bilal";
names[9]="veronica";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
