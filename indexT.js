const mers = document.getElementById("mers");
const person = document.getElementById("person");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (person.classList != "jump") {
        person.classList.add("jump")
    }

    setTimeout(function() {
        person.classList.remove("jump")
        
    }, 850)
}

let isAlive = setInterval (function() {
    let personTop = parseInt(window.getComputedStyle(person).getPropertyValue("bottom"));
    let mersLeft = parseInt(window.getComputedStyle(mers).getPropertyValue("left"));

    if (mersLeft < 241 && mersLeft > 20 && personTop <= 50) {
        alert("GAME OVER !")
    }
}, 70)



window.addEventListener("click", () => {
    document.getElementById("song").play()
})

    
