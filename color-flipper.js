const loadColor = async (Color) => {
    const res = await fetch('https://www.thecolorapi.com/id?hex=24B1E0');
    const data = await res.json();
    displayColor(data);
}

const displayColor = (colors) => {
    console.log(colors);

}