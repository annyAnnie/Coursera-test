var names=new Array();
names[0]="Yaakov";
names[1]="Jack";
names[2]="James";
names[3]="annie";
names[4]="karen";
names[5]="veronica";
names[6]="alexandra";
names[7]="quratulain";
names[8]="fatima";
names[9]="israr";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}