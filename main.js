function getData() {
    fetch("http://focus24.esy.es/wp-json/acf/v3/posts/")
    .then(res=>res.json())
    .then(showPosts);
}

function showPosts(data) {
    //console.log(data)
    let list = document.querySelector("#list");
    let template = document.querySelector("#events").content;
    data.forEach(function(theEvent){
    console.log(theEvent)   
    let clone = template.cloneNode(true);
    let title = clone.querySelector("h3");
    let info = clone.querySelector(".eventInfo");
    let price = clone.querySelector("p");
    let genre = clone.querySelector(".genre");
    genre. textContent = theEvent.acf.genre;
    price.textContent = theEvent.acf.price;
    title.textContent = theEvent.acf.title;
    info.textContent = theEvent.acf.content;
    list.appendChild(clone);
    })
}
getData();

let marginY = 0;
let destination = 0;
let speed = 10;
let scroller = null;

function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	
	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);

	marginY = marginY + speed;

	if(marginY >= destination){
		clearTimeout(scroller);
	}	

	window.scroll(0, marginY);

}

window.onscroll = function(){
	marginY = this.pageYOffset;	
};

function toTop(){
	scroller = setTimeout(function(){
		toTop();
	}, 1);

	marginY = marginY - speed;

	if(marginY <= 0){
		clearTimeout(scroller);
	}	

	window.scroll(0, marginY);
}

document.getElementById('revealButton').addEventListener("click", reveal);
function reveal(){
    document.getElementById('eventInfo').className = 'revealeventInfo';
}