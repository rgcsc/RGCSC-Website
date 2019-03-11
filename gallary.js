var img = document.getElementById('galleryImg');
var desc = document.getElementById('description');

var picArrSrcs = [
    "Pictures/gallaryImages/Basics.jpg",
    "Pictures/gallaryImages/PSA.jpg",
	"Pictures/gallaryImages/GraphTheory.jpg"
];

var picArrDesc = [
	"Teaching the essentials",
	"Learning Prefix-Sum-Arrays",
	"Introduction to Graph Theory"
];

var scrollPosition = 0;

function Scroll(i){
	if(i > 0){
   		scrollPosition == picArrSrcs.length-1 ? scrollPosition = 0 : scrollPosition++;
	}
	else scrollPosition == 0 ? scrollPosition = picArrSrcs.length-1 : scrollPosition--;
	DisplayImg();
}

function DisplayImg(){
    img.src = picArrSrcs[scrollPosition];
	desc.innerHTML = picArrDesc[scrollPosition];
}