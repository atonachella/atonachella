console.log(`Basic Testing Purposes`);

let userSTATE;
    userSTATE = window.prompt("What state are you from?");
    console.log(userSTATE);


const item = document.getElementById("box2");

// Add event listeners for mouseenter (hover in) and mouseleave (hover out)
item.addEventListener("mouseenter", function() {
  // Apply the rotation transform when the mouse enters
  item.style.transform = "rotate(180deg)";
});

item.addEventListener("mouseleave", function() {
  // Revert the transform when the mouse leaves
  item.style.transform = "rotate(0deg)";
});


//  Display your notes here