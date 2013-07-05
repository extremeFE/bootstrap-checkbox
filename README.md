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
<input id="checkvalue3" type="text" /><br/>
<input id="checkbox3-1" class="checkbox3" type="checkbox" value="Apple"> Apple<br/>
<input id="checkbox3-2" class="checkbox3" type="checkbox" value="Orange"> Orange<br/>
<input id="checkbox3-3" class="checkbox3" type="checkbox" value="Google"> Google<br/>
```
```javascript
$('.checkbox3').checkbox().on('check', function(e) {
var value = $('#checkvalue3').val();
if (e.checked) {
  value = $.trim(value + ' ' + e.value);
} else {
  value = $.trim(value.replace(e.value, '').replace('  ', ' '));
}
$('#checkvalue3').val(value);
});
```
***

#### change checkbox value
```html
<input id="checkbox4" type="checkbox" value="bootstrap is" checked/> bootstrap<br/>
before : <span id="checkvalue4-1"></span><br/>
after : <span id="checkvalue4-2"></span><br/>
```
```javascript
var welCheckbox4 = $('#checkbox4').checkbox();
$('#checkvalue4-1').html(welCheckbox4.chbxVal());
welCheckbox4.chbxVal('dependent on jQuery')
$('#checkvalue4-2').html(welCheckbox4.chbxVal());
```
***

#### change checkbox check state
```html
<input id="checkbox5-1" type="checkbox" value="checked"/> : <span id="checkvalue5-1"></span><br/>
<input id="checkbox5-2" type="checkbox" value="unchecked"/> : <span id="checkvalue5-2"></span><br/>
<input id="checkbox5-3" type="checkbox" value="ambiguous"/> : <span id="checkvalue5-3"></span><br/>
```
```javascript
var welCheckbox51 = $('#checkbox5-1').checkbox();
welCheckbox51.chbxChecked(true);
if (welCheckbox51.chbxChecked() === true) {
$('#checkvalue5-1').html(welCheckbox51.chbxVal());
}

var welCheckbox52 = $('#checkbox5-2').checkbox();
welCheckbox52.chbxChecked(false);
if (welCheckbox52.chbxChecked() === false) {
$('#checkvalue5-2').html(welCheckbox52.chbxVal());
}

var welCheckbox53 = $('#checkbox5-3').checkbox();
welCheckbox53.chbxChecked(null);
if (welCheckbox53.chbxChecked() === null) {
$('#checkvalue5-3').html(welCheckbox53.chbxVal());
}
```

