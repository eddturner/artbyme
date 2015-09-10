showGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = getPsLargeItems();

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        index: 0,       // start at first slide
        shareEl: false,  // don't want it to be shareable
        shareButtons: [
            //{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
            //{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
            //{id:'pinterest', label:'Pin it',
            // url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
            {id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: true}
        ]
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
