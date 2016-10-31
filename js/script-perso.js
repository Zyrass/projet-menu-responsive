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
        // .toggleClass permet d'ajouter ou d'enlever une Class
        $('nav').toggleClass('open-menu');
    });




}); // Fermeture du script