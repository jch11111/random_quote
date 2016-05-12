var random = (function() {

    var init = function () {
        $(function() {
            $("#quote").fadeIn("slow");
        })
    };

    return {
        init: init
    };

}());

random.init();
