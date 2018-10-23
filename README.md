# Seshet
A Javascript-based WSYWIG Algebra Input System for LonCapa

<link rel="stylesheet" href="seshet-core.css" />
<link rel="stylesheet" href="seshet-operators.css" />
<link rel="stylesheet" href="seshet-buttons.css" />
<script src="jquery.min.js"></script>
<script src="math.js"></script>
<script type="text/javascript" src="seshet-core.js"></script>
<script type="text/javascript" src="seshet-operators.js"></script>
<script type="text/javascript" src="seshet-buttons.js"></script>
</head>

<script type="text/javascript">
function onLoad(){
    m = new seshet.InputLine($('#seshet-input-container'),$('#seshet-target'));
    m = new seshet.ButtonBox($('#seshet-button-container'),$('#seshet-target'));
}
</script>
<body onload="onLoad()">
<div id="seshet-input-container">
  
</div>
<div>
<input id="seshet-target" type="text" value="a^(b)_(c) ( nthrt(2)(x))/(2)"/>
</div>
<div id="seshet-button-container"></div>