showGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {src: 'img/dsc_0277_15160311526_o.jpg', w: 4928, h: 3264}
        , {src: 'img/DSC_0633.JPG', w: 4928, h: 3264}
        , {src: 'img/IMG_20150502_113628295.jpg', w: 2592, h: 1456}
        , {src: 'img/IMG_20150502_113712641.jpg', w: 1456, h: 2592}
        , {src: 'img/IMG_20150605_231335239.jpg', w: 1456, h: 2592}
        , {src: 'img/IMG_20150615_185413911.jpg', w: 1456, h: 2592}
        , {src: 'img/IMG_20150615_185430726.jpg', w: 2592, h: 1456}
    ];

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