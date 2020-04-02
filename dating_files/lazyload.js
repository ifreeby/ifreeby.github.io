app.imgLazyLoad = function(item){
    if (item.localName == 'img') {
        item.src = item.dataset.gridboxLazyloadSrc;
        if (item.dataset.gridboxLazyloadSrcset) {
            item.srcset = item.dataset.gridboxLazyloadSrcset;
        }
    }
}
app.lazyLoad = function(){
    var images = $g('.lazy-load-image'),
        style;
    images.each(function(){
        style = this.getBoundingClientRect();
        if (window.innerHeight * 2 >= style.top && (style.width != 0 || style.height != 0)) {
            this.classList.remove('lazy-load-image');
            app.imgLazyLoad(this);
            if (this.classList.contains('slideshow-content')) {
                $g(this).find('.lazy-load-image').removeClass('lazy-load-image').each(function(){
                    app.imgLazyLoad(this);
                });
            }
        }
    });
    if (images.length == 0) {
        $g(window).off('scroll.gridbox-lazyload');
        $g(window).off('resize.gridbox-lazyload');
        $g('.ba-overlay-section-backdrop').off('scroll.gridbox-lazyload');
        $g(document).off('shown.gridbox-lazyload');
        $g('li.megamenu-item').off('mouseenter.gridbox-lazyload');
    }
}

$g(window).on('scroll.gridbox-lazyload', app.lazyLoad);
$g(window).on('resize.gridbox-lazyload', app.lazyLoad);
$g('.ba-overlay-section-backdrop').on('scroll.gridbox-lazyload', app.lazyLoad);
$g(document).on('shown.gridbox-lazyload', app.lazyLoad);
document.addEventListener('DOMContentLoaded', function(){
    app.lazyLoad();
    $g('li.megamenu-item').on('mouseenter.gridbox-lazyload', app.lazyLoad);
});