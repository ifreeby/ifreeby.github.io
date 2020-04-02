/**
* @package   Gridbox
* @author    Balbooa http://www.balbooa.com/
* @copyright Copyright @ Balbooa
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

app.loadAnimations = function(){
    if (app.viewportItems.length > 0) {
        if (!$g('body').hasClass('gridbox')) {
            var file = document.createElement('link');
            file.rel = 'stylesheet';
            file.href = JUri+'components/com_gridbox/libraries/animation/css/animate.css';
            document.getElementsByTagName('head')[0].appendChild(file);
        }
        var file = document.createElement('script');
        file.src = JUri+'components/com_gridbox/libraries/animation/js/viewportchecker.js';
        document.getElementsByTagName('head')[0].appendChild(file);
        file.onload = function(){
            for (var i = 0; i < app.viewportItems.length; i++) {
                app.viewportItems[i].item.viewportChecker({
                    classToAdd: app.viewportItems[i].effect
                });
                app.viewportItems[i].item.checkElements();
            }
        }
    } else if (($g('.ba-item-slideshow').length > 0 || $g('.ba-item-main-menu').length > 0) && !$g('body').hasClass('gridbox')) {
        var file = document.createElement('link');
        file.rel = 'stylesheet';
        file.href = JUri+'components/com_gridbox/libraries/animation/css/animate.css';
        document.getElementsByTagName('head')[0].appendChild(file);
    }
}

app.loadAnimations();