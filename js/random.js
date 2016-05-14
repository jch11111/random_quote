var random = (function() {

    var quotes = [
        "quote a",
        "quote b",
        "quote c",
        "quote d",
        "quote e",
        "quote f",
    ];


    var init = function () {
        $(function() {
            showQuote();
            $("button").click(function() {
                alert('click');
            });
        })
    };

    function showQuote() {
        $("#divQuote").text(getQuote());
        $("#divQuote").fadeIn("slow");
    }

    function getQuote() {
        var numberOfQuotes = quotes.length;
        var randomQuoteIndex = getRandomNumber(0, numberOfQuotes - 1);
        return quotes[randomQuoteIndex];

    }

    function getRandomNumber(minVal, maxVal) {
        var numberOfPossibleValues = (maxVal + 1) - minVal;
        return Math.floor(Math.random() * numberOfPossibleValues) + minVal;
    }


    return {
        init: init
    };

}());

random.init();
