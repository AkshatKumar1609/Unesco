function render(){
    let html = ``;
    
    data.forEach((dataItem) => {
        html += `
            <div class="box">
                <a href="/child.html?id=${dataItem.id}">
                    <div class="box-content">
                        <div class="box-image" style="background-image: url('${dataItem.image}');">
                        <h2>${dataItem.name}</h2></div>
                    </div>
                </a>
            </div>
        `
    })

    document.querySelector('.locations').innerHTML = html;
}
render();