// Define a function named 'changeColor' that will be called when the input elements change
function changeColor()
{
     // Get the current value of the red, green, and blue range input elements
    let red = document.getElementById("Rrange").value;
    let green = document.getElementById("Grange").value;
    let blue = document.getElementById("Brange").value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';    // Create a string representing the RGB color

    // Change the background color of the body to the newly computed color
    document.body.style.backgroundColor = color;

    // Display the color value as text in an element with the id 'output'
    document.getElementById('output').innerHTML = ' : ' + color; 
}

// Add an event listener to the RGB range input element to call 'changeColor' when it changes
document.getElementById('Rrange').addEventListener('input', changeColor);
document.getElementById('Grange').addEventListener('input', changeColor);
document.getElementById('Brange').addEventListener('input', changeColor);

// Call 'changeColor' initially to set the background color and display the initial color value
changeColor();
