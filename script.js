var element;

document.getElementById("logo").innerHTML="<a>Ahmad Hassaan</a>";

document.getElementById("logo").removeAttribute("class");

element=document.getElementById("logo").attributes;

console.log(element);