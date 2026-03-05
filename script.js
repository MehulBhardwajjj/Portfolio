// Typing Animation

const text = "Cybersecurity Student • Linux Enthusiast • Future Ethical Hacker";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,40);
    }
}

typing();


// Glowing Cursor

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});
