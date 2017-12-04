var api = "https://dw-quote-api.herokuapp.com/quotes";

// Generate Quote on Button Click
document.getElementById('getQuote').onclick = function(){
    // AJAX Call
    $.getJSON(api, function(data){
        quote = data[0].quote;
        character = data[0].character;
        // Display Quote
        document.getElementById('quote').innerHTML = "<i class='fa fa-angle-double-right' aria-hidden='true'></i>"
                                                        +quote+
                                                     "<i class='fa fa-angle-double-left' aria-hidden='true'></i></br>"
                                                      + character;

        // Check If Tweet Button Exists
        if(!document.getElementById('tweet')){
            addTweetBtn();
        }  
    });
   
};

// Generate Tweet Button
function addTweetBtn(){
    var img = document.createElement("img");
    img.id = "tweet";
    img.src = "https://png.icons8.com/sonic-screwdriver/office/50/000000"
    document.getElementById('buttons').appendChild(img);
    tweetQuote();
};

// Add Tweet Function
function tweetQuote(){
    document.getElementById('tweet').onclick = function(){
        var encodedQuote = encodeURI(quote);
        var encodedCharacter = encodeURI(character);
        var url = 'https://twitter.com/intent/tweet?text="' + encodedQuote + '" - ' + encodedCharacter;
        window.open(url, "Tweet Quote", "resizable, height=360, width=500");
    };
};