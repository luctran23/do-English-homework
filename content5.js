var  choices = document.getElementsByClassName('iCheck-helper');
var questions = document.getElementsByClassName('text-info');
var choicesInAQuestion = (choices.length - 3)/(questions.length);

for(var i = 0; i < choices.length - 3; i+=choicesInAQuestion ) {
	choices[i].click();
}
document.getElementsByClassName('btn btn-info dnut')[0].click();
var body = document.getElementsByTagName('body')[0];
			var p = document.createElement('p');
			p.id = "countDown";
			p.style.position = "absolute";
			p.style.top = "50px";
			p.style.left = "162px";
			p.style.zIndex = "2";
			p.style.fontSize = "18px";
			p.style.background = "yellow";
			p.style.padding = "10px 20px";
			
			body.insertBefore(p, body.childNodes[0]);
			countDown(30, "countDown");

			
			function countDown(secs, id){
				var elt = document.getElementById(id);
				if(secs == 0 ){
					elt.innerHTML = "Let's do the task";
					return;
				}
				try{
					elt.innerHTML = "Please wait for " + secs + " seconds";
				}catch(err){
					console.log(err.message);
				}
				
				secs--;
				setTimeout('countDown('+secs+', "'+id+'")', 1000);
			}
			setTimeout(function(){
				document.getElementsByClassName('btn dnut btn-danger')[0].click();
				
			}, 30000);
			setTimeout(function(){
				body.removeChild(p);
			}, 31000);

