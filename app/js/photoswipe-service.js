showGallery = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

            // build items array
            var items = [
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
                // for example:
                index: 0 // start at first slide
            };

            // Initializes and opens PhotoSwipe
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };