

const images = ['../../assets/img (12).jpg', '../../assets/img (13).jpg', '../../assets/img (10).jpg', '../../assets/img (17).jpg', '../../assets/img (8).jpg'];

function changeBackgroundImage() {
    // Get a random index from the images array
    var randomIndex = Math.floor(Math.random() * images.length);

    // Get the random image URL
    var randomImage = images[randomIndex];

    // Set the body background to the random image
    let imgPath = document.querySelector('#background');
   
        imgPath.src =`${randomImage}`;
  


}

setInterval(changeBackgroundImage, 10000);



const quotes = [
    { text: `Believe you can and you're halfway there." - Theodore Roosevelt`, },
    { text: ` "The only way to do great work is to love what you do." - Steve Jobs `, },
    { text: ` "In the midst of winter, I found there was, within me, an invincible summer." - Albert  `, }
  ];

// let currentQuoteIndex = 0;

// function changeQuote() {
//   const quote = quotes[currentQuoteIndex];
//   document.getElementById('quote-card').innerHTML = `
//   <p class="text-sm p-5 text-white ">${quote.text}</p>`

//   currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;


// }


let quoteInterval; // Variable to hold the setInterval reference

function changeQuote() {
    let quoteContainer = document.getElementById('quote-card');
    let currentQuoteIndex = 0;

    function displayQuote() {

      const quote = quotes[currentQuoteIndex];
      quoteContainer.innerHTML = `
      <p class="text-sm p-5 text-white ">${quote.text}</p>`

      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

    }

    displayQuote(); // Display the initial quote

    // Start rotating quotes
    quoteInterval = setInterval(displayQuote, 10000); // Change quote every 5 seconds

    // Pause rotation when hovering over the quote container
    quoteContainer.addEventListener('mouseenter', () => {
        clearInterval(quoteInterval); // Stop the quote rotation
    });

    // Resume rotation when mouse leaves the quote container
    quoteContainer.addEventListener('mouseleave', () => {
        quoteInterval = setInterval(displayQuote, 10000); // Restart the quote rotation
    });
}

// Call changeQuote function to start rotating quotes
changeQuote();



   
