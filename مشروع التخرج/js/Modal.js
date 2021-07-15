


// document.getElementById('button').addEventListener("click", function() {
// 	document.querySelector('.bg-modal').style.display = "flex";
// });

// document.querySelector('.close').addEventListener("click", function() {
// 	document.querySelector('.bg-modal').style.display = "none";
// });	


var el = document.getElementById('Quiz');
console.log(el)
if(el){
	el.onclick = function() {
  		
	document.querySelector('.bg-modal').style.display = "flex";
}
  el.addEventListener('click',
  	function() {
 	document.querySelector('.bg-modal').style.display = "flex";
});
}

var e = document.getElementById('close');
if(e){
  e.addEventListener('click',
  	function() {
	document.querySelector('.bg-modal').style.display = "none";
});
}