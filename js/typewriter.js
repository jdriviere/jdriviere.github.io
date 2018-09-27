// // Constructor
// const TypeWriter = (txtElement, words, wait = 3000) => {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// };

// // Type method
// TypeWriter.prototype.type = () => {
//     // Current index of this.words
//     const current = this.wordIndex % this.words.length;

//     // Get full text of current word
//     const fullTxt = this.words[current];

//     // Check if in deleting state
//     if (this.isDeleting) {
//         // Remove character
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     } // End of IF-ELSE

//     // Insert text into element
//     this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

//     // Set initial type speed
//     let typeSpeed = 300;

//     // Increase delete speed
//     if (this.isDeleting) typeSpeed /= 2;

//     // Checks if text is complete
//     if (!this.isDeleting && this.txt === fullTxt) {
//         // Make pause
//         typeSpeed = this.wait;

//         // Delete is true
//         isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         // Set deleting back to false
//         this.isDeleting = false;

//         // Move to next word
//         this.wordIndex++;

//         // Pause before typing next word
//         typeSpeed = 500;
//     }

//     // Run itself every 1/2 seconds
//     setTimeout(() => {
//         this.type()
//     }, typeSpeed);
// };

// // Init on DOM load
// document.addEventListener('DOMContentLoaded', init);

// // Init app
// function init () {
//     const txtElement = document.querySelector('.text-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words')); // Should be array
//     const wait = txtElement.getAttribute('data-wait');

//     // Init TypeWriter
//     new TypeWriter(txtElement, words, wait);
// };

// =====================================
// If using ES6 classes
// =====================================
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    } // End of Constructor

    type() {
        // Current index of this.words
        const current = this.wordIndex % this.words.length;

        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if in deleting state
        if (this.isDeleting) {
            // Remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        } // End of IF-ELSE

        // Insert text into element
        this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

        // Set initial type speed
        let typeSpeed = 300;

        // Increase delete speed
        if (this.isDeleting) typeSpeed /= 2;

        // Checks if text is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause
            typeSpeed = this.wait;

            // Delete is true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            // Set deleting back to false
            this.isDeleting = false;

            // Move to next word
            this.wordIndex++;

            // Pause before typing next word
            typeSpeed = 500;
        } // End of IF-ELSEIF

        // Run itself every 1/2 seconds
        setTimeout(() => {
            this.type()
        }, typeSpeed);
    } // End of Type
} // End of TypeWriter

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init() {
    const txtElement = document.querySelector('.text-type');
    const words = JSON.parse(txtElement.getAttribute('data-words')); // Should be array
    const wait = txtElement.getAttribute('data-wait');

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
};