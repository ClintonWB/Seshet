(function(seshet, $, undefined){
    seshet.ButtonBox = function (container){
        this.id = seshet.uuid++;
        this.htmlprototype = `<span id = "seshet-buttons-container-${this.id}" class="seshet-buttons-container">
    <span class="seshet-buttons-control-container">
<button class="seshet-buttons-control seshet-buttons-control-toggle" onclick="return false;">Toggle</button>
<button class="seshet-buttons-control seshet-buttons-control-clear" onclick="seshet.Focus.root.clear(); return false;">Clear</button>
<button class="seshet-buttons-help" onclick="window.open('https://loncapa.purdue.edu/priv/purdue/purdue_math/math15300/Seshet/LonButtonHelp.html') ;return false;" height="40">Help</button>
</span>
    <table id="seshet-buttons-table-${this.id}" class="seshet-buttons-table seshet-buttons-hidden">
  <tr>
    <th><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Fraction); return false; ">½</button></th>
    <th><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Exponent); return false; ">aᵇ</button></th>
    <th><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Subscript); return false; ">bₐ</button></th>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Pi); return false;">&pi;</button></td>
  </tr>
  <tr>
    <th><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Sqrt); return false;">√<span class="seshet-buttons-overline">a</span></button></th>
    <th><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Nthrt); return false;">ᵇ√<span class="seshet-buttons-overline">a</span></button></th>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Abs); return false;">|a|</button></td>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Paren); return false;">(a)</button></td>
  </tr>
  <tr>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Ln); return false;">ln a</button></td>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.Log); return false;">logₐb</button></td>
    <td/>
    <td/>
  </tr>
  <tr>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.LT);  return false;">&lt;</button></td>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.LTE);  return false;">&le;</button></td>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.GT);  return false;">&gt;</button></td>
    <td><button class="seshet-buttons-button" onclick="seshet.insertOperatorAtCursor(seshet.operators.GTE);  return false;">&ge;</button></td>
  </tr>
</table>
</span>`
        this.element = $(this.htmlprototype);
        this.element.find('.seshet-buttons-control-toggle').bind('click',this.toggle.bind(this));
        container.append(this.element);
    }

    seshet.ButtonBox.prototype.toggle = function(){
        $(`#seshet-buttons-table-${this.id}`).toggleClass('seshet-buttons-hidden');
    }
}( window.seshet = window.seshet || {}, jQuery));