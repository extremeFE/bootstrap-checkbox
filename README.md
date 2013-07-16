# bootstrap-checkbox
Three state checkbox for Bootstrap

#### [Online Demo](http://extremefe.github.io/bootstrap-checkbox/)
# Requirements

* [Bootstrap](http://twitter.github.com/bootstrap/) 2.3.2+
* [jQuery](http://jquery.com/) 1.8.1+

# Example

#### Basic checkbox
```html
<input id="checkbox1" type="checkbox" value="1">
```
```javascript
$('#checkbox1').checkbox();
```
***

#### Three state checkbox
```html
<input id="checkbox2" type="checkbox" value="1">
```
```javascript
$('#checkbox2').checkbox().chbxChecked(null);
```
***

#### check event
```html
<input id="checkbox-parent" type="checkbox" value="state"> parent<br/>
&nbsp; <input class="checkbox-child" type="checkbox" value="child1"> child1<br/>
&nbsp; <input class="checkbox-child" type="checkbox" value="child2"> child2<br/>
&nbsp; <input class="checkbox-child" type="checkbox" value="child3"> child3
```
```javascript
var welChild = $('.checkbox-child').checkbox();
var welParent = $('#checkbox-parent').checkbox();

// check event on parent checkbox
welParent.on('check', function(e){
// remove ambiguous;
welParent.chbxChecked(e.checked);
welChild.each(function(i, element) {
  $(element).chbxChecked(e.checked);
});
});

// check event on children checkbox
welChild.on('check', function(e) {
var bAnd = true, bOr = false;
welChild.each(function(i, element){
  var bChecked = $(element).chbxChecked();
  bAnd = bAnd && bChecked, bOr = bOr || bChecked;
});

var bChecked = bAnd === true || (bAnd === false && bOr === false ? false : null);
welParent.chbxChecked(bChecked);
});
```
***

#### Label option
```html
<input id="checkbox4" type="checkbox" value="1">&nbsp;<span id="label">label</span>
```
```javascript
$('#checkbox4').checkbox({label:'#label'});
```
***

#### Change value
```html
<input id="checkbox5" type="checkbox" value="1">
value: <span id="value"></span><br/>
<a id="change-value" class="btn btn-mini"><i>Change Value</i></a>
```
```javascript
var welCheckbox5 = $('#checkbox5').checkbox();
$('#value').html(welCheckbox5.chbxVal());

$('#change-value').on('click', function(){
  var value = parseInt(welCheckbox5.chbxVal()) + 1;
  welCheckbox5.chbxVal(value);
  $('#value').html(welCheckbox5.chbxVal());
});
```
***

#### Change check state
```html
<input id="checkbox6" type="checkbox" value="1">
checked: <span id="checked"></span><br/>
<a id="change-checked" class="btn btn-mini"><i>Change Checked</i></a>
```
```javascript
var welCheckbox6 = $('#checkbox6').checkbox();
$('#checked').html(welCheckbox6.chbxChecked()+"");

$('#change-checked').on('click', function(){
  var checked = !welCheckbox6.chbxChecked();
  welCheckbox6.chbxChecked(checked);
  $('#checked').html(welCheckbox6.chbxChecked()+"");
});
```

