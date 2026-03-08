console.log(`this is basic testing`);
console.log(`further confirmation`);

let username;

username = window.prompt("What neighborhood is your mama from?!?");

console.log(username);


window.addEventListener('scroll', function() {
    const footer = document.getElementById('page-footer');
    // Get the current scroll position from the top of the viewport
    const scrollPosition = window.scrollY; 
    // Define the threshold (e.g., make it fixed after scrolling down 70 pixels)
    const scrollThreshold = 70; 

    if (scrollPosition > scrollThreshold) {
        // Add the fixed-footer class if scrolled past the threshold
        footer.classList.add('fixed-footer');
    } else {
        // Otherwise, ensure the class is removed
        footer.classList.remove('fixed-footer');
    }
});


//  Display your notes here