var respostas = {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:""};
var person = "";


function test(pergunta,valor){
	var x = valor;
	var y = pergunta;
	respostas[y]=x;
	console.log(respostas);
}

function respostasToArray(){
	var valores = [];
	for (var key in respostas){
		valores.push(respostas[key]);
	}
	console.log(valores);
	avaliacao(valores);

}

function avaliacao(valores){

	var faustop=["amigos",
				"todos",
				"selena",
				"nenhum",
				"meu",
				"agradecer",
				"pepsi",
				"4"
				];


	var dancarina=["exercicio",
					"danca",
					"bambam",
					"dingdong",
					"errou",
					"autografo",
					"salada",
					"3"
					];


	var carol=["estudar",
				"propaganda",
				"yudi",
				"danca2",
				"fera",
				"textao",
				"sushi",
				"2"
				];


	var rodrigoFaro=["mal",
					"videocassetadas",
					"gugu",
					"arquivo",
					"fogo",
					"magro",
					"margarina",
					"0"
					];


	var gatoDoido=["pet",
					"sevira",
					"andremarques",
					"videocassetadas2",
					"morer",
					"sevira2",
					"sucrilhos",
					"1"
					];

	var pts={"gatodoido":0,"faro":0,"carol":0,"dancarina":0,"faustop":0}

	for (var item in valores){
		console.log(item);
		switch (valores[item]){
			case (valores[item] in faustop):
				pts["faustop"]++;
				break;
			case (valores[item] in dancarina):
				pts["dancarina"]++;
				break;
			case (valores[item] in carol):
				pts["carol"]++;
				break;
			case (valores[item] in rodrigoFaro):
				pts["faro"]++;
				break;
			case (valores[item] in gatoDoido):
				pts["gatodoido"]++;
				break;
		}
	}
	console.log(pts)
}
