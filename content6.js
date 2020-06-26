var correctDivs = document.getElementsByClassName('iradio_square-green checked');

var correctChoicesIds = [];

for(var i = 0; i < correctDivs.length; i++ ) {
   var id = correctDivs[i].innerHTML.substring(11, 47);
   correctChoicesIds.push(id);
}
// click lam lai button
document.getElementsByClassName('btn dnut btn-primary')[0].click();

var labels = document.getElementsByTagName('LABEL');

var toArray  = Array.from(labels);

var valueClicking = toArray.filter(function(item) {
	return correctChoicesIds.includes(item.htmlFor);
});

for(var key of valueClicking ) {
	key.click();
}
document.getElementsByClassName('btn btn-info dnut')[0].click();
