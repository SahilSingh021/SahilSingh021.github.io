function greeting() {
    window.alert("Good morning!");
    document.getElementById("greeting").innerHTML = "Oh and incase I don't see ya";
    console.log("Good afternoon, good evening and good night");
}

function changeText() {
    let para = document.getElementById("new-para");
    if (para) {
        para.remove();
    } else {
        para = document.createElement("p");
        para.id = "new-para";
        let textNode = document.createTextNode(actor.getFullName());
        para.appendChild(textNode);
        document.getElementById("title-container").appendChild(para);
    }
}

function changeTextOut() {
    let para = document.getElementById("new-para");
    if (para) {
        para.remove();
    } else {
        para = document.createElement("p");
        para.id = "new-para";
        let textNode = document.createTextNode(actor.getFullName());
        para.appendChild(textNode);
        document.getElementById("title-container").appendChild("");
    }
}

var title = "The Truman Show";
let director = "Peter Weir";
const releaseYear = 1998;

// Arrays and Objects
const characters = [];
characters.push("Pos 1");

const actor = {};
actor.firstName = "Jim";
actor.lastName = "Carrey";
actor.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

const actress = {
    firstName: "Laura",
    lastName: "Linney",
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(actor.getFullName());