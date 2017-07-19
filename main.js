/* 1. Grab the input*/
var button = document.querySelector(".js-go");



button.addEventListener("click", function(){
	var input=document.querySelector("input").value;
	
	createInput(input);

	pushToDOM(input);
})

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;
  

  // if the key ENTER is pressed...
  if(e.which === 13) {
    createInput(input);
    pushToDOM(input);
  }

});



/*2. dO THE DATA STUFF WITH THE API*/
function createInput(input){
	var url = "https://api.giphy.com/v1/gifs/search?q=\"" + input + "\"&api_key=dc6zaTOxFJmzC";


// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();


	GiphyAJAXCall.addEventListener('load', function( e ) {
		var data = e.target.response; /* From the load function you want to drill down the contentyou want to grab, in this case the GIFS*/
	
		pushToDOM(data);
		//console.log(data);


})};

/*3. SHOW ME THE GIFS*/
function pushToDOM(input){
	
	var response = JSON.parse(input);
	console.log(response);

	var imageUrls = response.data;
	//console.log(imageUrls);
	var container = document.querySelector(".js-container");
	container.innerHTML = " ";


	imageUrls.forEach(function(image){
		var src =image.images.fixed_height.url;
		//console.log(src);

		container.innerHTML += "<img src = \"" + src + "\"  class = \"container-image \">";
		

	

		

		});

	

	


	


}
