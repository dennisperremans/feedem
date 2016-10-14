/*
* jsFeed.js
* author: Dennis Perremans
* version: 0.0.2
*/

var site = {
    settings: {
        debug: false
    },
    init: function(settings){
        $.extend(this.settings, settings);
    },

    getMeRandomElements: function(sourceArray, neededElements) {
        var result = "";
        for (var i = 0; i < neededElements; i++) {

            switch(neededElements) {
                case 1:
                    result = sourceArray[Math.floor(Math.random() * sourceArray.length)];
                    break;
                default:
                    result = result + " " + sourceArray[Math.floor(Math.random() * sourceArray.length)];
            }

        }
        return result;
    },

    highlightElements: function(element) {
        var hlColour = "#eeeeff";
        $(element).css('background-color', hlColour);
    },

    feedEm: function(options) {
        //default options
        var settings = $.extend({
            highlight:          false,
            highlightColour:    '#eeeeff'
        }, options );

        //get all the elements
        var allElements = [].slice.call(document.querySelectorAll('[data-feed]'));

        //define content
        var words       = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'exercitation', 'ullamco'],
            sentences   = ['Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                           'Excepteur sint occaecat cupidatat non proident.',
                           'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
                           'Qui officia deserunt mollit anim id est laborum.',
                           'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                           'Ullamco laboris nisi ut aliquip ex ea commodo onsequat.',
                           'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo onsequat.'], 
            paragraphs  = ['<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum soluta ratione non porro reiciendis repellendus sequi et odit ipsum similique inventore aliquam alias earum, reprehenderit sint a, quasi ex.</p>',
                           '<p>Distinctio veniam possimus facere nobis vel suscipit veritatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe delectus, exercitationem sed accusamus sunt odit temporibus veniam doloribus nisi blanditiis dolore, cupiditate natus dolor fugiat soluta hic! Quasi!</p>',
                           '<p>Ipsa in ratione eum, earum, ea impedit? Vero cum nemo, doloremque ad, quibusdam veniam molestiae maxime repellendus voluptatum quis a, consequatur nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quae animi ea ipsum. Reprehenderit possimus nihil quisquam. Pariatur fuga labore quibusdam nisi? Adipisci, ab placeat eaque dolor voluptatibus pariatur laudantium.</p>',
                           '<p>Officiis cupiditate laboriosam dicta alias. Ipsum vitae, autem iusto excepturi sequi incidunt ducimus similique sit tenetur quia, perspiciatis expedita ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugiat blanditiis fuga repellendus quos aliquam, nisi accusantium laudantium, eaque quis corporis nostrum cumque alias voluptatibus vel dignissimos vero minus. Alias.</p>',
                           '<p>Neque sequi sapiente tempore facilis ducimus ullam debitis corrupti perspiciatis nihil ab architecto odio.</p>'];

        //loop over all the defined elements
        $(allElements).each(function() {
            var $this = $(this),
                $thisData = $this.data('feed'),
                numberOf = "",
                arrayData = $thisData.split('=');

            switch(arrayData[0]) {
                case "w":
                    numberOf = arrayData[1];
                    $this.html(site.getMeRandomElements(words, numberOf));
                break;

                case "s":
                    numberOf = arrayData[1];
                    $this.html(site.getMeRandomElements(sentences, numberOf));
                break;

                case "p":
                    numberOf = arrayData[1];
                    $this.html(site.getMeRandomElements(paragraphs, numberOf));
                break;
            }

            //highlight
            if(settings.highlight)
                $this.css('background-color', settings.highlightColour);
            
        });
    }
};

// LEAVE ALL THE CODE ABOVE -_-

$(function(){
    site.feedEm({
        //highlight: true,
        //highlightColour: '#eeeeff'
    })
});
