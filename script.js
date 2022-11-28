var casoo = document.getElementById("scritta");

console.log(casoo);

var oneprint = true;

var prt_txt = ""

var br = document.createElement('br');


var Quotation = [

	"e cosa facevano e non facevano i miei genitori prima che nascessi,",
	"e altre stronzate alla David Copperfield,",
	"ma a me non va di entrare nei dettagli,",
	"se proprio volete la verità.",
	"Primo,",
	"è roba che m'annoia,",
	"e secondo ai miei verrebbero un paio di ictus a testa,",
	"se andassi in giro a raccontare i fatti loro.",
	"Su certe cose sono permalosissimi,",
	"specie mio padre.",
	"Simpatici, per carità,",
	"ma anche parecchio permalosi.",
	"E poi non mi metto certo a farvi la mia stupida autobiografia",
	"o non so cosa.",
	"Vi racconterò giusto la roba da matti",
	"che mi è capitata sotto Natale,",
	"prima di ritrovarmi cosí a pezzi",
	"che poi sono dovuto venire qui a stare un po tranquillo.",
	"Ovvero quel che ho raccontato a D.B.,", 
	"che però è mio fratello,",
	"non so se mi spiego.",
	"Lui sta a Hollywood,",
	"quindi non lontanissimo da questo schifo di posto,",
	"e infatti viene a trovarmi praticamente ogni week-end.",
	"Dice che mi riaccompagna in macchina",
	"quando il mese prossimo torno a casa,",
	"forse.",
	"Si è appena comprato una Jaguar.",
	"Uno di quei gioiellini inglesi che fanno anche i trecento all'ora.",
	"L'ha pagata una sberla",
	"tipo quattromila dollari.",
	"È sfondato di soldi,",
    "adesso.",
    "Prima no.",
    "Prima,",
    "quando stava a casa,",
    "era solo uno scrittore normale.",
    "Ha scritto un libro di racconti pazzesco,",
    "Il pesce rosso segreto,",

	];



function aCaso(){


			var which = Quotation[Math.round(Math.random(0)*39)];
			prt_txt = prt_txt + "<p>" + which + "</p>" ;
			console.log(prt_txt)

			document.getElementById("txt_insc").innerHTML = prt_txt;


}

function scrolling(){


    window.scrollBy(0,55);
    /*scrolldelay = setTimeout(pageScroll,1000);*/

}
window.setInterval("aCaso()",1000);
window.setInterval("scrolling()",1000);





