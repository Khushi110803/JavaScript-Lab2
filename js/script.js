function changeColor()
{
    let red = document.getElementById("Rrange").value;
    let green = document.getElementById("Grange").value;
    let blue = document.getElementById("Brange").value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('output').innerHTML = ' : ' + color; 
}

document.getElementById('Rrange').addEventListener('input', changeColor);
document.getElementById('Grange').addEventListener('input', changeColor);
document.getElementById('Brange').addEventListener('input', changeColor);

changeColor();