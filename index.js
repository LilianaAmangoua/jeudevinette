function menu(){
    let menu = document.getElementById('menu');

    if (menu.style.display === 'block'){
        menu.style.display = 'none';
    }

    else {
        menu.style.display = 'block';
    }
}



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
            afficherRésultat.innerHTML = `Bravo, vous avez deviné, c'est ${chiffreChoisi} !!`;
            console.log(`Bravo, vous avez deviné, c'est ${chiffreChoisi} !!`);
            afficherRésultat.classList.remove('animation-réponse');
            let temp = afficherRésultat.offsetWidth;
            afficherRésultat.classList.add('animation-réponse');
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
