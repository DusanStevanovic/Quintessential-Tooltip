/**
 * Quintessential Tooltip - basic tooltip
 *
 * @author Dusan Stevanovic
 *
 * Options description:
 * @param {boolean} verticalPositioning - beyond or above
 * @param {boolean} horizontalAlingment - left or right
 */

(function ($) {

    $.fn.quintessentialTooltip = function (options) {
        var target = this.selector;
        var options = options;

        if (typeof options === 'undefined') {
            options = 'defaultValue';
        }

        // check if `options` is object
        if (options !== 'defaultValue' && options.constructor !== Object) {
            console.error('You can pass only object as an argument to simpleTooltip, ' + options.constructor + ' is not allowed')
            return;
        } else {
            // make it happend even if don't have strict `true` value. For Example: `beyond: 1` instead of `beyond: true`
            var optionAbove = Boolean(options.above) || false;
            var optionBeyond = Boolean(options.beyond) || false;
            var optionLeft = Boolean(options.left) || false;
            var optionRight = Boolean(options.right) || false;
            var optionCenter = Boolean(options.center) || false;
            var optionsCheck = [optionAbove, optionBeyond, optionCenter, optionLeft, optionRight].some(function (option) {
                return option;
            });
        }

        $(document).on('mouseover', target, function () {
            var $this = $(this);
            var text = $this.data('title');
            var top;
            var left;

            if (!$('.q-tooltip').length) {
                $('body').append('<span class="tooltip q-tooltip"><p>' + text + '</p></span>');
            }

            if (options !== 'defaultValue') {
                switch (true) {
                    case (optionAbove && optionLeft):

                        $('<span class="arrow-down"></span>').insertAfter($('.q-tooltip p'));

                        var arrowPosition = ($this.outerWidth() / 2) - 1; // half arrow width;

                        $('.q-tooltip .arrow-down').css({
                            'left': arrowPosition,
                            'right': 'auto'
                        });

                        top = $this.offset().top - ($('.q-tooltip').outerHeight() + ($('.q-tooltip').outerHeight() / 2));
                        left = $this.offset().left;

                        break;
                    case (optionAbove && optionRight):

                        $('<span class="arrow-down"></span>').insertAfter($('.q-tooltip p'));

                        var arrowPosition = ($this.outerWidth() / 2) - 3; // half arrow width;

                        $('.q-tooltip .arrow-down').css({
                            'right': arrowPosition,
                            'left': 'auto'
                        });

                        top = $this.offset().top - ($('.q-tooltip').outerHeight() + ($('.q-tooltip').outerHeight() / 2));
                        left = $this.offset().left - ($('.q-tooltip').outerWidth() - $this.outerWidth());

                        break;
                    case (optionAbove && optionCenter):
                        // this is also a default position for tooltip
                        $('<span class="arrow-down"></span>').insertAfter($('.q-tooltip p'));

                        top = $this.offset().top - ($('.q-tooltip').outerHeight() + ($('.q-tooltip').outerHeight() / 2));
                        left = $this.offset().left - (($('.q-tooltip').outerWidth() / 2) - ($this.outerWidth() / 2));

                        break;
                    case (optionBeyond && optionLeft):
                        $('<span class="arrow-up"></span>').insertAfter($('.q-tooltip p'));

                        var arrowPosition = ($this.outerWidth() / 2) - 1; // half arrow width;

                        $('.q-tooltip .arrow-up').css({
                            'left': arrowPosition,
                            'right': 'auto'
                        });

                        top = $this.offset().top + $this.outerHeight() + ($('.q-tooltip').find('.arrow-up').outerHeight() * 2);
                        left = $this.offset().left;

                        break;
                    case (optionBeyond && optionRight):
                        $('<span class="arrow-up"></span>').insertAfter($('.q-tooltip p'));

                        var arrowPosition = ($this.outerWidth() / 2) - 3; // half arrow width;

                        $('.q-tooltip .arrow-up').css({
                            'right': arrowPosition,
                            'left': 'auto'
                        });

                        top = $this.offset().top + $this.outerHeight() + ($('.q-tooltip').find('.arrow-up').outerHeight() * 2);
                        left = $this.offset().left - ($('.q-tooltip').outerWidth() - $this.outerWidth());

                        break;
                    case (optionBeyond && optionCenter):
                        $('<span class="arrow-up"></span>').insertAfter($('.q-tooltip p'));

                        top = $this.offset().top + $this.outerHeight() + ($('.q-tooltip').find('.arrow-up').outerHeight() * 2);
                        left = $this.offset().left - (($('.q-tooltip').outerWidth() / 2) - ($this.outerWidth() / 2));

                        break;
                    default:
                        console.error('simpleTooltip error - invalid combination of options keys');
                        $('.q-tooltip').remove();
                        break;
                }

                if (optionsCheck) {
                    $('.q-tooltip').css({
                        'top': top,
                        'left': left
                    }).show();
                }
            } else {
                // apply default tooltip position
                $('<span class="arrow-down"></span>').insertAfter($('.q-tooltip p'));

                $('.q-tooltip').css({
                    'top': $this.offset().top - ($('.q-tooltip').outerHeight() + ($('.q-tooltip').outerHeight() / 2)),
                    'left': $this.offset().left - (($('.q-tooltip').outerWidth() / 2) - ($this.outerWidth() / 2))
                }).show();
            }
        });

        $(document).on('mouseout', target, function () { $('.q-tooltip').remove() });
    };

}(jQuery));