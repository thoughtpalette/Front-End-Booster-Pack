$.fn.setPlaceholderText = function (config) {
    if (!Modernizr.input.placeholder) {
        $(this).each(function () {

            var input = jQuery(this);
            var placeholderText = input.attr('placeholder');

            if (input.val().length == 0 || input.val() == placeholderText) {
                setTimeout(function () {
                    input.addClass('placeholder');
                    input.val(placeholderText);
                }, 5);
            }

            input.focus(function () {
                if (input.val() == placeholderText) {
                    input.removeClass('placeholder');
                    input.val('');
                }
            });

            input.blur(function () {
                if (input.attr('type') == 'password' && input.val() == '') {
                    input.hide();
                    input.siblings('.shim').show();
                }
                else if (input.val() == '' || input.val() == '   -   -    ') {
                    setTimeout(function () {
                        input.addClass('placeholder');
                        input.val(placeholderText);
                    }, 5);
                }
            });

            if (input.attr('type') == 'password') {
                var shimInput = $('<input type="text" class="text password placeholder shim" value="' + placeholderText + '" />');
                if (input.hasClass('invalid')) {
                    shimInput.addClass('invalid');
                }

                input.hide();
                input.after(shimInput);

                shimInput.focus(function () {
                    shimInput.hide();
                    input.show().focus();
                });
            }

        });
    }

    return this;
}