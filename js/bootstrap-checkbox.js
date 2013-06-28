/**
 * bootstrap-checkbox.js
 * (c) 2013~ Jiung Kang
 * Licensed under the Apache License, Version 2.0 (the "License");
 */

(function($) {
  "use strict";

  var replaceCheckboxElement = function(element, checkbox) {
    var value = element.val(),
        id = element.attr('id'),
        className = element.attr('class'),
        style = element.attr('style'),
        checked = !!element[0].checked,
        welNew = $('<div></div>');

    element.replaceWith(welNew);

    if (id) { welNew.attr('id', id) }
    if (className) { welNew.attr('class', className) }
    welNew.addClass('bootstrap-checkbox');
    if (style) { welNew.attr('style', style); }
    if (checked) { welNew.addClass('checked'); }

    checkbox.value = value;
    checkbox.checked = checked;
    checkbox.element = welNew;
  };

  var changeCheckView = function(element, checked) {
    element.removeClass('ambiguous');
    element.removeClass('checked');

    if (checked === null) {
      element.addClass('ambiguous');
      element.html('<i class="icon-stop"></i>');
    } else if (checked) {
      element.addClass('checked');
      element.html('<i class="icon-ok"></i>');
    } else {
      element.html('');
    }
  };

  var attachEvent = function(checkbox) {
    var element = checkbox.element;
    element.on('click', function(e) {
      var checked;
      if (checkbox.checked) {
        checked = false;
      } else if (checkbox.checked === false && checkbox.ambiguous === true){
        checked = null;
      } else {
        checked = true;
      }

      checkbox.checked = checked;
      changeCheckView(element, checked);

      element.trigger({
        type: 'change',
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
      var aReplace = $(this.map(function () {
        var $this = $(this),
            data = $this.data('checkbox');

        if (!data) {
          data = new Checkbox($this);
          data.element.data('checkbox', data);
        }

        return data.element[0];
      }));
      aReplace.selector = this.selector;
      return aReplace;
    },

    cbxVal : function(value) {
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

    cbxChecked : function(checked) {
      var $this = $(this[0]);
      var data = $this.data('checkbox');

      if (!data) {
        return;
      }
      if ($.type(checked) === "undefined") {
        return data.checked;
      } else {
        data.ambiguous = checked === null;
        changeCheckView($this, checked);

        data.checked = checked;
        $this.data('checkbox', data);
      }
    }
  });
})(jQuery);