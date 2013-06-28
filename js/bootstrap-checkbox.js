/**
 * bootstrap-checkbox.js
 * (c) 2013~ Jiung Kang
 * Licensed under the Apache License, Version 2.0 (the "License");
 */

(function($) {
  "use strict";

  var replaceCheckboxElement = function(element, checkbox) {
    var value = element.val(),
        className = element.attr('class'),
        style = element.attr('style'),
        checked = !!element[0].checked,
        welNew = $('<div></div>');

    element.replaceWith(welNew);

    if (className) { welNew.attr('class', className) }
    welNew.addClass('bootstrap-checkbox');
    if (style) { welNew.attr('style', style); }
    if (checked) { welNew.addClass('checked'); }

    checkbox.value = value;
    checkbox.checked = checked;
    checkbox.element = welNew;
  };

  var attachEvent = function(checkbox) {
    var element = checkbox.element;
    element.on('click', function(e) {
      var checked = !checkbox.checked;
      checkbox.checked = checked;

      if (checked) {
        element.addClass('checked');
      } else {
        element.removeClass('checked');
      }

      element.trigger({
        type: 'check',
        value: checkbox.value,
        checked: checked,
        element: element
      });
    });
  };

  var Checkbox = function(element) {
    replaceCheckboxElement(element, this);

    attachEvent(this);
  };

  $.fn.extend({
    checkbox : function(option) {
      var result = $(this.map(function () {
        var $this = $(this),
            data = $this.data('checkbox');

        if (!data) {
          data = new Checkbox($this);
          data.element.data('checkbox', data);
        }
        if (typeof option == 'string') data[option]()
//        data.ambiguous = !!(options && options.ambiguous);
        return data.element[0];
      }));
      result.selector = this.selector;
      return result;
    },

    checkboxVal : function(value) {
      var $this = $(this[0]);
      var data = $this.data('checkbox');

      if (!data) {
        return;
      }
      if ($.type(value) === "undefined") {
        return data.value;
      } else {
        data.value = value;
        $this.data('checkbox', data);
      }
    },

    checked : function(checked) {
      var $this = $(this[0]);
      var data = $this.data('checkbox');
      if (!data) {
        return;
      }
      if ($.type(checked) === "undefined") {
        return data.checked;
      } else {
        if (checked ) {
          $this.addClass('checked');
        } else {
          $this.removeClass('checked');
        }
        data.checked = checked;
        $this.data('checkbox', data);
      }
    }
  });
})(jQuery);