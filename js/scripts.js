
//TRAVAILLER AVEC DES FONCTIONS ET UTILISER DES OBJETS

var joueur1 = new Object();
joueur1.name = "ayman";
joueur1.score = 1000;
joueur1.rang = 1;




console.log(joueur1);

var joueur1 = {name:"ayman",score:1000,rang:1};
var joueur2 = {name:"ayoub",score:500,rang:8};

function detailsJoueur(){
	console.log(this.name+" a un score de "+this.score);
}

joueur1.logDetails = detailsJoueur;
joueur2.logDetails = detailsJoueur;


joueur1.logDetails();


//---------------------------------------------//

// TRAVAILLER AVEC LES NOMBRES
// tester si les variables sont des nombres ou non 

var a = 2;
var b = 'sss';

var aNum = Number(a);
var bNum = Number(b);

if(!isNaN(aNum) && !isNaN(bNum)){
	console.log(aNum+bNum);
}else{
	console.log("L'addition est impossible");
}


//---------------------------------------------//

//DECOUVRIR L'OBJET MATH
//math.round (ex: entre 1 et 1.4 ça donne le min et entre 1.5 et 2 ça donne le max)
//math.ceil (ex: entre 1 et 2 ça donne le max)
//math.floor (ex: entre 1 et 2 ça donne le max)
//math.random renvoi un nombre aleatoire entre 0 et on le multiplie par *10 ça renvoi un nombre entre 1 et 10; 


var n1=2.2, n2=7, n3=10;

var numMax = Math.max(n1,n2,n3);
var numMin = Math.min(n1,n2,n3);
var numRound = Math.round(n1);
var numCeil = Math.ceil(n1);
var numFloor = Math.floor(n1);
var numRandom =  Math.ceil(Math.random()*10);
var numPi = Math.PI;


console.log(numMax);
console.log(numMin);
console.log(numRound);
console.log(numCeil);
console.log(numFloor);
console.log(numRandom);
console.log(numPi);


//---------------------------------------------//


//TRAVAILLER AVEC LES DATES 

var date = new Date();
console.log(date);
var autreDate = new Date(2012,03,05,15,30,00);
console.log(autreDate);

//numéro du jour dans le mois
console.log(autreDate.getDate());

//numéro du jour dans la semaine 
console.log(autreDate.getDay());

//numéro du mois dans l'année (on commence par 0)
console.log(autreDate.getMonth());

//l'heure 
console.log(autreDate.getHours());

//les secondes
console.log(autreDate.getMilliseconds());

// l'année 
console.log(autreDate.getFullYear());

//nombre de millisecondes
console.log(autreDate.getTime());

//---------------------------------------------//


var date2 = new Date(2016,12,15);
var date3 = new Date(2016,12,15);


//les fonctions set() "setTime, setMonth, setYear, setMilliseconds, setHours, setDay, setFullYear, setDate"
date3.setMonth(8);
console.log(date3);


if(date2.getTime() == date3.getTime()){
	console.log("Dates egales")
}


//---------------------------------------------//

// travailler avec les tableaux

var couleurs = ["rouge","vert","bleu"];

//inverser l'ordre des couleurs 
console.log(couleurs.reverse());

//ajouter des couleurs au tableau
couleurs.push("Noir")
console.log(couleurs);