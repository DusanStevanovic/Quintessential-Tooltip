$(document).ready(function () {

    var defaultTooltip = ['.default', '.default-2', '.default-3'];

    $.each(defaultTooltip, function(e, el) {
        $(el).quintessentialTooltip();
    });
});