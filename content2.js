		var x = document.getElementsByTagName('INPUT');
		var inputTags = [];

		for(var key of x) {
			inputTags.push(key);
		}
		var textInputFilter = inputTags.filter(inputTag => inputTag.type == "text");
		if(textInputFilter.length === 0) {
			alert('Cannot do this task');
		}else {
			for(var inputValue of textInputFilter ) {
				inputValue.value = "Hello World";
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
				document.getElementsByClassName('btn btn-danger dnut')[0].click();
				
			}, 30000);
			setTimeout(function(){
				body.removeChild(p);
			}, 31000);
		}	
		