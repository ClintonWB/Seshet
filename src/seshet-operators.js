/* seshet-operators.js populates the seshet.operators list/dictionary.

Invoke seshet.operators.registerOperator(name, htmlprototype,strprototype) with:

name is the name of the operator. Subsequently, the operator can be referred to by
seshet.operators["name"] or seshet.operators.name

htmlprototype a string for HTML display with a surrounding tag and innermost 
    <span class=seshet-input-container"></span>
for each input.

strprototype a string for formatted output with
 {0}
 {1}
 ...
for each input.
* Currently, it requires the inputs to be represented once
* in order
* and with no optional arguments.
Those restrictions are likely to be lifted.

Add new operators to the bottom of the list.
Style operators in seshet-operators.css
*/

(function(seshet, $, undefined){
    
    seshet.operators.registerOperator("Paren",
    {'html':'<span class="seshet-paren"><span class="seshet-input-container"></span></span>',
    'str':'{0}'});

    seshet.operators.registerOperator("Fraction",
    {'html':'<table class="seshet-fraction"><tr><td class="seshet-fraction-numerator mathinput-fraction-ator"><span class="seshet-input-container" number="0" required="true"/></td></tr><tr><td class="seshet-fraction-denominator seshet-fraction-ator"><span class="seshet-input-container" number="1" required="true"/></td></tr></table>',
    'str':'{0}/{1}'});

    seshet.operators.registerOperator("Sqrt",
    {'html':'<span class="seshet-sqrt"><span class="seshet-input-container seshet-sqrt-body"></span></span>',
    'str':' sqrt{0}'});
 
    seshet.operators.registerOperator("Nthrt",
    {'html':'<span class="seshet-nthrt"><span class="seshet-nthrt-nblock"><span class="seshet-input-container seshet-nthrt-n"></span><span class="seshet-nthrt-subn"></span></span><span class="seshet-nthrt-inner"><span class="seshet-input-container seshet-sqrt-body"></span></span></span>',
    'str':' nthrt{0}{1}'});

    seshet.operators.registerOperator("Exponent",
    {'html':'<span class="seshet-exponent"><span class="seshet-input-container"></span></span>',
    'str':'^{0}'});


    seshet.operators.registerOperator("Subscript",
    {'html':'<span class="seshet-subscript"><span class="seshet-input-container"></span></span>',
'str':'_{0}'});

    seshet.operators.registerOperator("Abs",
    {'html':'<span class="seshet-abs"><span class="seshet-input-container"></span></span>',
    'str':' abs{0}'});

    seshet.operators.registerOperator("Ln",
    {'html':'<span class="seshet-ln"><span class="seshet-paren"><span class="seshet-input-container"></span></span></span>',
    'str':' ln{0}'});
 
    seshet.operators.registerOperator("Log",
    {'html':'<span class="seshet-log"><span class="seshet-log-base"><span class="seshet-input-container" number="0" required="true"></span></span><span class="seshet-paren"><span class="seshet-input-container" number="1" required="true"></span></span></span>',
    'str':' log_{0}{1}'});

    seshet.operators.registerOperator("Pi",
    {'html':'<span class="seshet-pi">&pi;</span>',
     'str':' pi '});

   seshet.operators.registerOperator("GTE",
    {'html':'<span class="seshet-gte">&ge;</span>',
     'str':' gte '});

   seshet.operators.registerOperator("LTE",
    {'html':'<span class="seshet-lte">&le;</span>',
     'str':' lte '});

   seshet.operators.registerOperator("GT",
    {'html':'<span class="seshet-gt">&gt;</span>',
     'str':' gt '});

   seshet.operators.registerOperator("LT",
    {'html':'<span class="seshet-lt">&lt;</span>',
     'str':' lt '});

    
}( window.seshet = window.seshet || {}, jQuery));
