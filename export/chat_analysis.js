
(() => {

    // STAR SPWNING - New Stars
    // Define the maximum number of stars to create
    const max_stars = 250*10;
    let starCount = 0;
    const stars = [];

    // Function to create and append a star element
    const createStar = () => {

        const star = document.createElement('span');
        star.className = 'star';

        // Generate a random size for the star (between 1 and 4 pixels)
        const size = Math.floor(Math.random() * 4) + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // Generate a random background color for the star with some opacity
        star.style.background = `rgba(255, 255, 177, ${Math.random()})`;

        // Calculate random positions within the entire document
        const pageWidth = window.innerWidth;
        const pageHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        const randomLeft = Math.floor(Math.random() * pageWidth);
        const randomTop = Math.floor(Math.random() * pageHeight);

        star.style.left = randomLeft + 'px';
        star.style.top = randomTop + 'px';

        // make star glow given some probiltility
        if (Math.random() <= 0.6) {
            // Apply a CSS animation called 'glow' to the star
            star.style.animationName = 'glow';

            // Set a random delay for the animation (between 1 and 20 seconds)
            star.style.animationDelay = (Math.floor(Math.random() * 20) + 1) + 's';

            // Set a random duration for the animation (between 1 and 6 seconds)
            star.style.animationDuration = (Math.floor(Math.random() * 6) + 1) + 's';
        }

        // Add the star element to the 'stars' array
        stars.push(star);
        document.body.appendChild(star);
        starCount++;

        // // Remove the star element after a random time between 5 and 20 seconds
        // const randomRemoveTime = Math.random() * 15000 + 5000; // Random time between 5 and 20 seconds
        // setTimeout(() => {
        //     star.remove();
        // }, randomRemoveTime);
    };

    // Function to create stars at random intervals between 0.5 and 5 seconds
    const createStarsContinuously = () => {
        if (starCount < max_stars) {
            //const randomInterval = Math.random() * 500 + 0; // Random interval between 0.5 and 5 seconds
            setTimeout(() => {
                createStar();
                createStarsContinuously(); // Create stars continuously
            }, 0);
        }
    };

    // Call the function to create stars initially
    createStarsContinuously();


    // SHOOTING STAR
    // Get a reference to the shooting star element
    const shootingStar = document.querySelector('.shooting');

    // Function to change the position of the shooting star
    function changeStarPosition() {
        // Calculate new random top and left positions
        const newTop = Math.floor(Math.random() * 100) + '%';
        const newLeft = Math.floor(Math.random() * 100) + '%';

        // Apply the new positions to the shooting star
        shootingStar.style.top = newTop;
        shootingStar.style.left = newLeft;
    }

    // Call the function to change the position initially
    changeStarPosition();

    // Set an interval to change the position periodically (e.g., every 5 seconds)
    setInterval(changeStarPosition, 5000); // Change position every 5 seconds

})();


// OLD CODE
// // STAR SPAWNING - Basic Stars on top
    // // Define the maximum number of stars to create
    // const max_stars = 250;

    // // Create an empty array to store the star elements
    // const stars = [];

    // // Function to calculate random top and left positions within the entire page
    // const getRandomPosition = () => {
    //     const pageWidth = window.innerWidth;
    //     const pageHeight = Math.max(
    //         document.body.scrollHeight,
    //         document.body.offsetHeight,
    //         document.documentElement.clientHeight,
    //         document.documentElement.scrollHeight,
    //         document.documentElement.offsetHeight
    //     );

    //     // console.log('Full page height:', pageHeight, 'pixels');

    //     const randomLeft = Math.floor(Math.random() * pageWidth);
    //     const randomTop = Math.floor(Math.random() * pageHeight);

    //     // console.log('Star spawn: X='+ randomLeft+ ', y='+randomTop);

    //     return { left: randomLeft, top: randomTop };
    // };

    // // Create stars and add them to the webpage
    // for (let i = 0; i < max_stars; i++) {
    //     // Create a new <span> element for a star
    //     const star = document.createElement('span');

    //     // Generate a random size for the star (between 1 and 4 pixels)
    //     const size = (Math.floor(Math.random() * 4) + 1);

    //     // Set the CSS class for the star
    //     star.className = 'star';

    //     // Set the star's width and height
    //     star.style.width = size + 'px';
    //     star.style.height = size + 'px';

    //     // Generate a random background color for the star with some opacity
    //     star.style.background = `rgba(255, 255, 177, ${Math.random()})`;

    //     // old positioning
    //     // // Randomly position the star within the viewport (top and left)
    //     // star.style.top = Math.ceil(Math.random() * 100) + '%';
    //     // star.style.left = Math.ceil(Math.random() * 100) + '%';

    //     // new positioning
    //     // Get random position within the entire page
    //     const { left, top } = getRandomPosition();
    //     star.style.left = left + 'px';
    //     star.style.top = top + 'px';

    //     // Add the star element to the 'stars' array
    //     stars.push(star);

    //     // Append the star element to the HTML body
    //     document.body.appendChild(star);
    // }

  // // STAR GLOWING
    // // Make some of the stars "glow" by applying CSS animations
    // for (let j = 0; j < max_stars * 0.6; j++) {
    //     // Get a reference to a star element from the 'stars' array
    //     const star = stars[j];

    //     // Apply a CSS animation called 'glow' to the star
    //     star.style.animationName = 'glow';

    //     // Set a random delay for the animation (between 1 and 20 seconds)
    //     star.style.animationDelay = (Math.floor(Math.random() * 20) + 1) + 's';

    //     // Set a random duration for the animation (between 1 and 6 seconds)
    //     star.style.animationDuration = (Math.floor(Math.random() * 6) + 1) + 's';
    // }

