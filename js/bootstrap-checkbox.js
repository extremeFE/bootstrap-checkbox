/**
 * bootstrap-checkbox.js
 * (c) 2013~ Jiung Kang
 * Licensed under the Apache License, Version 2.0 (the "License");
 */

(function($) {
  "use strict";

  var replaceCheckboxElement = function(element) {
    var value = element.val(),
        checked = !!element[0].checked,
        welNew = $('<div class="bootstrap-checkbox"></div>');

    element.replaceWith(welNew);

    if (checked) {
      welNew.addClass('checked');
    }

    welNew.attr('data-value', value);
    welNew.attr('data-checked', checked);

    return welNew;
  };

  var attachEvent = function(checkbox) {
    var element = checkbox.element;
    element.on('click', function(e) {
      var value = element.attr('data-value');
      var checked = !(element.attr('data-checked') == 'true');

      element.attr('data-checked', checked);
      if (checked) {
        element.addClass('checked');
      } else {
        element.removeClass('checked');
      }

      element.trigger({
        type: 'check',
        value: value,
        checked: checked,
        element: checkbox.element
      });
    });
  };

  var Checkbox = function(element) {
    this.element = replaceCheckboxElement(element);
    attachEvent(this);
  };

  $.fn.extend({
    checkbox : function(options) {
      return $(this.map(function () {
        var $this = $(this),
            data = $this.data('checkbox');

        if (!data) {
          data = new Checkbox($this, options)
          data.element.data('checkbox', data);
        }
//        data.ambiguous = !!(options && options.ambiguous);
        return data.element;
      }));
    }
  });
})(jQuery);