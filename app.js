var titles=document.getElementsByClassName('title');

console.log(Array.isArray(titles));

console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
	console.log(item);
});

//const wrap1= $('#wrapper');
const wrap=document.querySelector('#wrapper');

console.log(wrap);

const lk = document.querySelector('#book-list li:nth-child(2) .name');

console.log(lk);

var arreglo= Array.from(document.querySelectorAll('#book-list li .name'));

console.log(arreglo[1]);