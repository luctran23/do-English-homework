

var c = [
    {id: '0', phonetic: ["P","R", "O", "C", "E", "D", "U", "R", "E"]},
    {id: '1', phonetic: ["D","E", "D", "I", "C", "A", "T", "E", "D"]},
    {id: '2', phonetic: ["R","E", "S", "O", "L", "U", "T", "I", "O", "N"]},
    {id: '3', phonetic: ["P","R", "O", "F", "E", "S", "S", "I", "O", "N", "A", "L"]},
    {id: '4', phonetic: ["S","A", "T", "I", "S", "F", "A", "C", "T", "I", "O", "N"]},
    {id: '5', phonetic: ["A","U", "T", "H", "E", "N", "T", "I", "C"]},
    {id: '6', phonetic: ["I","N", "F", "R", "A", "S", "T", "R", "U", "C", "T", "U", "R", "E"]},
    {id: '7', phonetic: ["C","O", "M", "P", "L", "E", "X", "I", "T", "Y"]},
    {id: '8', phonetic: ["O","P", "E", "R", "A", "T", "I", "O", "N", "A", "L"]},
    {id: '9', phonetic: ["C", "O", "M", "P", "R", "E", "H", "E", "N", "S", "I", "V", "E"]}
];

    var q  = document.getElementsByClassName('dstore sortable');	
    
    for(var i = 0; i < q.length;  ) {
	    var x = q[i].children;
	    if( x.length == 1 ) {
		     x = q[i++].children;
	   }else {
	      var y = Array.from(x);
       	var x = y.filter( item => item.innerText !='');
       	var a = x.map(function(item, index) {item.children[0].innerText = c[i].phonetic[index];return item;});
	      for(var key of x ) {
              key.children[0].click();
        }
	      break;
	}
      	    
}


	


