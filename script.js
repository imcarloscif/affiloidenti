var casoo = document.getElementById("scritta");

console.log(casoo);

var oneprint = true;

var prt_txt = ""

var br = document.createElement('br');


var Quotation = [

	"Affilo i denti per sbranare quel cuscino",
	"Affilo i denti per rodere le corde delle reti che mi hanno avvolto",
	"Affilo i denti perch2 accetto anche la cattiveria nel mio cuore stanco",
	"Affilo i denti per staccare blocchi di ghiaccio e costruirmi, con essi, un'armatura gelida",
	"Affilo i denti prima che li affilino gli altri predatori che vogliono la mia testa",
	"Affilo i denti per ingerire braci e divampare",
	"Affilo i denti per permettermi di piangere piangere piangere",
	"Affilo i denti per aiutare i castori a tagliare gli alberi e farcene delle dighe che blocchino questa fottuta acqua che entra da tutte le parti",
	"Affilo i denti con le pietre pi6 dure perch2 diventino resistenti o perch2 si spacchino",
	"Affilo i denti per batterli forte quando fa freddo",
	"Affilo i denti perch2 ho un buco sullo stomaco e pi6 mangio pi6 ho fame",
	"Affilo i denti per provocare dolore ad amici e nemici",
	"Affilo i denti per azzannare i nodi alla gola",
	"Affilo i denti per attaccare i tuoi tendini",
	"Affilo i denti taglienti come vetri",
	"Affilo i denti cos1 forte da coprire l'ululato de lupi che mi circondano",
	"Affilo i denti per non fingermi debole",
	"Affilo i denti per masticare meglio i bocconi amari",
	"Affilo i denti per digrignare così forte da spaccare i timpani. E forse alla fine mi daranno ascolto", 
	"Affilo i denti per sgranocchiare il tuo ego perché il mio l'ho gi4 vomitato",
	"Affilo i denti fino a vederli sanguinare ma almeno cos1 non sentir5 il bisogno di parlare",
	"Affilo i denti perch2, quando cadrai nella tela del ragno, sar5  vorace e famelico",
	"Affilo i denti per guardare sempre in faccia la mia vittima",
	"Affilo i denti per mangiare merda perch2 fa bene anche quella",
	"Affilo i denti per sbranare i cuori di chi ha lacerato il mio",
	"Affilo i denti perch2 dicono che non mastichi abbastanza",
	"Affilo i denti per ingoiare tutte le carte del burraco e non farne mai più castelli",
	"Affilo i denti per rodervi il culo",
	"Affilo i denti perch2 possano attraversarli rabbia e saliva",
	"Affilo i denti alti come picchi rocciosi",
	"Affilo i denti a V freddi come la vendetta ",
	"Affilo i denti come coltelli da carne",

	];



function aCaso(){


			var which = Quotation[Math.round(Math.random(0)*32)];
			prt_txt = prt_txt + "<p>" + which + "</p>" ;
			console.log(prt_txt)

			document.getElementById("txt_insc").innerHTML = prt_txt;


}

function scrolling(){


    window.scrollBy(0,55);
    /*scrolldelay = setTimeout(pageScroll,1000);*/

}
window.setInterval("aCaso()",100);
window.setInterval("scrolling()",100);





