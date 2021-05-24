const textContainer = document.querySelector('.text-container');
const button = document.querySelector('.getJokes')

const xhrRequest = new XMLHttpRequest();

xhrRequest.onreadystatechange = () => {
    if(xhrRequest.readyState === XMLHttpRequest.DONE){
        console.log(xhrRequest.responseText)
        const show = document.querySelector('.text-container')
    show.innerHTML = xhrRequest.responseText
    }  
};



xhrRequest.open('GET', 'https://icanhazdadjoke.com/', true);//request
xhrRequest.setRequestHeader('Accept', 'text/plain');
xhrRequest.send(null);


