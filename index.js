function menu(){
    let menu = document.getElementById('menu');

    if (menu.style.display === 'block'){
        menu.style.display = 'none';
    }

    else {
        menu.style.display = 'block';
    }
}

document.addEventListener ('click', function(event){
    let menu = document.getElementById('menu');
    let menuIcon = document.querySelector('.fa-bars');

    if (menu.style.display === 'block' && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = 'none';
    }
});


//while loop = repeat some code WHILE some condition is true
// do...while = do the code first then check the condition at the end
//switch..case, break, default = anytime you are taking a SPECIFIC variable and comparing with a bunch of different values, the switch statement is perfect
//Ternary operator = shortcut for and if/else statement --> syntax => condition ? ifTRue : ifFalse;


let chiffreUtilisateur = document.getElementById('chiffreUtilisateur');
let afficherRésultat = document.getElementById('afficherRésultat');
let boutonDéviner = document.getElementById('boutonDéviner');
let boutonSuivant = document.getElementById('boutonSuivant');
let chiffreChoisi;

function choisirChiffre(){
    chiffreChoisi = Math.floor(Math.random()*10);
    console.log(chiffreChoisi);
}

document.addEventListener('DOMContentLoaded',choisirChiffre);


function trouverRéponse() {
    let chiffreUtilisateurValue = chiffreUtilisateur.value;
    switch (true){
        case (chiffreUtilisateurValue == chiffreChoisi):  
            afficherRésultat.innerHTML = `Vous avez deviné, c'est ${chiffreChoisi}`;
            console.log(`Vous avez deviné, c'est ${chiffreChoisi}`);
            break;

        case (chiffreUtilisateurValue < chiffreChoisi):
            afficherRésultat.innerHTML = 'Trop bas';
            console.log('Trop bas');
            break;

        case (chiffreUtilisateurValue > chiffreChoisi):
            afficherRésultat.innerHTML = 'Trop haut';
            console.log('Trop haut');
            break;
    }
}



boutonDéviner.addEventListener ('click', function (){
    let chiffreUtilisateurValue = chiffreUtilisateur.value;
    chiffreUtilisateurValue === '' ? alert ('Saissez un chiffre') : trouverRéponse();
});


function devinetteSuivante() {
    chiffreUtilisateur.value = ''; 
    afficherRésultat.innerHTML = ''; 
    choisirChiffre();
}


boutonSuivant.addEventListener ('click', function() {
    devinetteSuivante();
});
