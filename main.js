// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !
let myDiv = document.querySelector('div')
console.log(myDiv)
myDivTab = Array.from(myDiv.children)

myDivTab.forEach(element => {
    element.addEventListener("click", event =>{
        console.log(event.target)
    })
    // ### 2.  Créer un programme qui au double click d'un élément son texte est en majuscule
    element.addEventListener("dblclick", event =>{
        console.log(event.target.innerText)
        event.target.innerText = event.target.innerText.toUpperCase();
    })
});


// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;


br1 ='border: 1px solid gold;'
br2 ='border: 5px dotted gold;'
bg1 ='background-color: blue;'
bg2 ='background-color: red;'

megaTab = [br1,br2,bg1,bg2]

let body = document.body
body.addEventListener("click", event =>{
    if (event.target.tagName == "INPUT") {
        randomNum = getRandomInt(megaTab.length)
        myDivTab.forEach(e => {
            e.setAttribute("style", megaTab[randomNum])
        });
    }
})


function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
}





