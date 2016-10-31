/*
 * -----------------------------------------------------------------------
 * Auteur de ce fichier : Zyrass
 * Auteur Initial des infos trouvé sur le net : Imbert Sébastien 
 * -----------------------------------------------------------------------
 * Formation suivi sur Tuto.com à cette adresse :
 * -----------------------------------------------------------------------
 * http://fr.tuto.com/css/coder-une-navigation-responsive-css,69261.html
 * -----------------------------------------------------------------------
 */

$(document).ready(function(){ // Ouverture du script une fois que le DOM est chargé

    $('#icon-menu').on('click', function(){
        $('nav').toggleClass('open-menu');
        // .toggleClass permet d'ajouter ou d'enlever une Class 
        // Lla class "open-menu" permet dans le css de modifier cette class selon le device
    });


    $('#icon-menu').on('click', function(){
        $('#icon-menu').toggleClass('anim-icon');
    });



}); // Fermeture du script