// Script to decode ROT13-encoded string and print it

// The encoded string
const encodedString = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

// Function to decode ROT13
function rot13Decode(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        // Get the character code
        const charCode = char.charCodeAt(0);
        
        // Handle uppercase letters
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        }
        // Handle lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        }
        
        // Return non-alphabetic characters as is
        return char;
    });
}

// Decode and print the string
const decodedString = rot13Decode(encodedString);
console.log(decodedString);