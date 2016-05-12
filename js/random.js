var random = (function() {

    var init = function () {
        $(function() {
            showQuote();
            $("button").click(function() {
                alert('click');
            });
        })
    };

    function showQuote() {
        $("#divQuote").fadeIn("slow");
    }
    return {
        init: init
    };

}());

random.init();
