showGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/dsc_0277_15160311526_o.jpg',
            w: 4928,
            h: 3264
        },
        {
            src: 'img/DSC_0633.JPG',
            w: 4928,
            h: 3264
        },
        {
            src: 'http://a1.dspncdn.com/media/692x/9b/1d/44/9b1d44b93d6a3c06b5775044cb1af260.jpg',
            w: 600,
            h: 400
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        index: 0,       // start at first slide
        shareEl: false,  // don't want it to be shareable
        shareButtons: [
            //{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
            //{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
            //{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
            {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
        ]
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};