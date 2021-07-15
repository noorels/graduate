


(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){
    var name = document.getElementById("#username");
	var email = document.getElementById("#email");
	var password = document.getElementById("#password");
	var sumbit = document.getElementById("#sumbit");
	console.log(sumbit)
	if (sumbit){
 		sumbit.addEventListener('click',
  	function() {
  		var username = name.value;
  		var emailText = email.value;
  	console.log(username)
 	});
 	}
 
  }
 
})(window, document, undefined);