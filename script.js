//selectors
//They allow you to access and interact with specific elements on a web page.
var title = document.getElementById("head"),
    items = document.getElementsByClassName("list"),
    content = document.getElementsByTagName("p");


title.style.color = 'black'


//Events
// Events allow you to make your web pages interactive by executing code in response to user actions or other events occurring in the browser.
var btn = document.getElementById('hit'),
    container = document.querySelector("container");

btn.addEventListener("click" , () => 
    console.log("some one clicked me")
);


container.addEventListener("mouseenter", movein);

function movein() {
    console.log("The cursor has entered the container.")};

document.addEventListener('keyup', function(event){
    let keyCode = event.keyCode;

  // Log the key code to the console
  console.log("Key code: " + keyCode);
});
  