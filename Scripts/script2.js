const params = new URLSearchParams(window.location.search);
const id = params.get("id");

function render(){
    let matchingData;
    data.forEach((dataItem) => {
        if(dataItem.id === id) matchingData = dataItem;
    })
    let html = `
        <div class="image" style="background-image: url(../${matchingData.image});"></div>
        <div class="text-content">
            <h1>${matchingData.name}</h1>
            <p>${matchingData.description}</p>
           <a href="./index.html" class="btn">Back</a>
        </div>
    `;
    document.querySelector('.main').innerHTML = html;
}
render();