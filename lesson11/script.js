// Changing the color of the first h1
document.getElementById("heading").style.color = "red";

// creating a new h1
const heading2 = document.createElement("h1");

// Setting the id to heading
heading2.id = "heading2";
// Setting the content to Lorem Ipsum
heading2.innerHTML = "Lorem Ipsum";
// Setting the backgroud-color to slateblue
heading2.style.backgroundColor = "slateblue";

// // Appending the newly created h1 element
document.body.appendChild(heading2);