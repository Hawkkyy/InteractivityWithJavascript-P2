function upDate(previewPic){

    console.log("Event started!");
	console.log(previewPic.alt);
	console.log(previewPic.src);

    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
	}

function unDo(){

   document.getElementById("image").style.backgroundImage = "url('')";
   document.getElementById("image").innerHTML = "Hover over an image below to display here.";
		
	}

function onload(){

    console.log("Started onload event!");

	let images = document.getElementsByClassName("preview");

	for(let i = 0; i < images.length; i++){
		images[i].setAttribute("tabindex", "0");
	}

}