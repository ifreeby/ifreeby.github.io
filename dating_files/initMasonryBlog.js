/**
* @package   Gridbox
* @author    Balbooa http://www.balbooa.com/
* @copyright Copyright @ Balbooa
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

function setPostMasonryHeight(key)
{
    var wrapper = $g('#'+key+' .ba-blog-posts-wrapper')[0],
        computed = null,
        reviews = document.getElementById(key).classList.contains('ba-item-recent-reviews'),
        gap = 20,
        height = 0;
    $g('#'+key+' .ba-blog-posts-wrapper:not(.ba-masonry-layout) .ba-blog-post').each(function(ind){
        this.classList.remove('ba-masonry-image-loaded');
        this.style.transitionDelay = '';
        this.style.gridRowEnd = '';
    });
    $g('#'+key+' .ba-masonry-layout .empty-list').each(function(){
        this.closest('.ba-masonry-layout').classList.add('empty-masonry-wrapper');
    })
    $g('#'+key+' .ba-masonry-layout .ba-blog-post').each(function(ind){
        var post = this,
            offsetHeight = post.querySelector('.ba-blog-post-content').offsetHeight,
            $this = this.querySelector('.ba-blog-post-image img'),
            img = document.createElement('img');
        if (!computed) {
            computed = getComputedStyle(this)
        }
        offsetHeight += (computed.paddingBottom.replace(/\D+/, '') * 1)+(computed.paddingTop.replace(/\D+/, '') * 1);
        offsetHeight += (computed.borderBottomWidth.replace(/\D+/, '') * 1)+(computed.borderTopWidth.replace(/\D+/, '') * 1);
        this.style.transitionDelay = (0.15 * ind)+'s';
        if (!$this || reviews) {
            post.style.gridRowEnd = "span "+Math.ceil(((offsetHeight + gap) / (height + gap)) + 0);
            if (!post.classList.contains('ba-masonry-image-loaded')) {
                post.classList.add('ba-masonry-image-loaded');
            }
        } else if (!$this.src) {
            $this.onload = function(){
                offsetHeight += $this.offsetHeight;
                post.style.gridRowEnd = "span "+Math.ceil(((offsetHeight + gap) / (height + gap)) + 0);
                if (!post.classList.contains('ba-masonry-image-loaded')) {
                    post.classList.add('ba-masonry-image-loaded');
                }
            }
        } else {
            img.onload = function(){
                offsetHeight += $this.offsetHeight;
                post.style.gridRowEnd = "span "+Math.ceil(((offsetHeight + gap) / (height + gap)) + 0);
                if (!post.classList.contains('ba-masonry-image-loaded')) {
                    post.classList.add('ba-masonry-image-loaded');
                }
            }
            img.src = $this.src;
        }
        this.closest('.ba-masonry-layout').classList.remove('empty-masonry-wrapper');
    });
}

if ('app' in window && app.modules && app.modules.initMasonryBlog && app.modules.initMasonryBlog.data) {
    app.initMasonryBlog = function(obj, key){
        setPostMasonryHeight(key);
        if (obj.type == 'recent-posts' && themeData.page.view != 'gridbox') {
            $g('#'+key).off('click').on('click', '.ba-blog-posts-pagination a', function(event){
                event.preventDefault();
                if (!this.dataset.clicked) {
                    this.dataset.clicked = true;
                    var category = new Array(),
                        match = this.href.match(/page=\d+/),
                        page = match[0].match(/\d+/),
                        notId = new Array(),
                        notStr = '',
                        cats = '';
                    for (var ind in obj.categories) {
                        category.push(ind);
                    }
                    cats = category.join(',');
                    if (obj.sorting == 'random') {
                        $g('#'+key+' .ba-blog-post').each(function(){
                            notId.push(this.dataset.id);
                        });
                        notStr = notId.join(',');
                    }
                    $g.ajax({
                        type: "POST",
                        dataType: 'text',
                        url: "index.php?option=com_gridbox&task=page.getRecentPosts&tmpl=component",
                        data: {
                            id : obj.app,
                            limit : obj.limit,
                            sorting : obj.sorting,
                            category : cats,
                            maximum : obj.maximum,
                            featured: Number(obj.featured),
                            page: page[0],
                            pagination: obj.layout.pagination,
                            not: notStr
                        },
                        complete: function(msg){
                            let object = JSON.parse(msg.responseText);
                            $g('#'+key+' .ba-blog-posts-pagination').remove();
                            $g('#'+key+' .ba-blog-posts-wrapper').append(object.posts).after(object.pagination);
                            if (obj.tag != 'h3') {
                                $g('#'+key+' h3[class*="-title"]').each(function(){
                                    var h = document.createElement(obj.tag);
                                    h.className = this.className;
                                    h.innerHTML = this.innerHTML;
                                    $g(this).replaceWith(h);
                                });
                            }
                            setPostMasonryHeight(key);
                            $g('#'+key+' .ba-blog-post-button-wrapper a')
                                .text(obj.buttonLabel ? obj.buttonLabel : gridboxLanguage['READ_MORE']);
                            if (obj.layout.pagination == 'load-more-infinity' && page[0] == 2) {
                                $g(document).on('scroll.'+key, function(){
                                    recentPostsInfinityAction(key);
                                });
                            }
                        }
                    });
                }
            });
            if (obj.layout.pagination == 'infinity') {
                $g(document).on('scroll.'+key, function(){
                    recentPostsInfinityAction(key);
                });
                recentPostsInfinityAction(key);
            }
        }
        initItems();
    }
    app.initMasonryBlog(app.modules.initMasonryBlog.data, app.modules.initMasonryBlog.selector);
}

function recentPostsInfinityAction(key)
{
    let scroll = window.pageYOffset + window.innerHeight,
        rect = document.querySelector('#'+key+' .ba-blog-posts-wrapper').getBoundingClientRect(),
        y = rect.bottom + window.pageYOffset,
        btn = document.querySelector('#'+key+' .ba-blog-posts-pagination a');
    if (y < scroll && btn && !btn.dataset.clicked) {
        btn.click();
    } else if (!btn) {
        $g(document).off('scroll.'+key);
    }
}