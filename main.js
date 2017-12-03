var api = "https://dw-quote-api.herokuapp.com/quotes/Rose%20Tyler";
// generate quote on button click
document.getElementById('getQuote').onclick = function(){
    // get quote (ajax request)
    // display quote
    $.getJSON(api, function(data){
        quote = data[0].quote
        document.getElementById('quote').innerHTML = quote;

        // check if tweet button exists
        if(!document.getElementById('tweet')){
            addTweetBtn();
        }  
    });
   
};

// generate tweet button
function addTweetBtn(){
    var img = document.createElement("img");
    img.id = "tweet";
    img.src = "https://png.icons8.com/sonic-screwdriver/office/50/000000"
    document.getElementById('buttons').appendChild(img);
    tweetQuote();
};

// add tweet function
function tweetQuote(){
    document.getElementById('tweet').onclick = function(){
        var quote = document.getElementById('quote').textContent;
        var url = 'https://twitter.com/intent/tweet?text="' + quote + '" - The Doctor';
        window.open(url, "Tweet Quote", "resizable,height=360,width=500");
    };
};


var quote = "<i class='fa fa-angle-double-right' aria-hidden='true'></i></i>";

// tweet encoding
// callback? for delayed tweet button & quote
// companion quotes, too?
// character Name
// include icons
