$(document).ready(function () {

    var defaultTooltip = ['.default', '.default-2', '.default-3'];

    $.each(defaultTooltip, function(e, el) {
        // this is default setup:

        $(el).quintessentialTooltip();

        // also same effect:

        /*
            $(el).quintessentialTooltip({
                above: true,
                center: true
            });
        */

    });

    var aboveLeftTooltip = ['.above-left', '.above-left-2', '.above-left-3'];

    $.each(aboveLeftTooltip, function (e, el) {
        $(el).quintessentialTooltip({
            above: true,
            left: true,
        });
    });

    var aboveRightTooltip = ['.above-right', '.above-right-2', '.above-right-3'];

    $.each(aboveRightTooltip, function (e, el) {
        $(el).quintessentialTooltip({
            above: true,
            right: true,
        });
    });

    var beyondLeftTooltip = ['.beyond-left', '.beyond-left-2', '.beyond-left-3'];

    $.each(beyondLeftTooltip, function (e, el) {
        $(el).quintessentialTooltip({
            beyond: true,
            left: true,
        });
    });

    var beyondCenterTooltip = ['.beyond-center', '.beyond-center-2', '.beyond-center-3'];

    $.each(beyondCenterTooltip, function (e, el) {
        $(el).quintessentialTooltip({
            beyond: true,
            center: true,
        });
    });

    var beyondRightTooltip = ['.beyond-right', '.beyond-right-2', '.beyond-right-3'];

    $.each(beyondRightTooltip, function (e, el) {
        $(el).quintessentialTooltip({
            beyond: true,
            right: true,
        });
    });
});