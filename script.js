fetch("https://picsum.photos/v2/list?page=7&limit=25?random=1")
    .then(res => res.json())
    .then(data => display(data))
    .catch(e => console.log(e))

function display(data) {
    info = data
    data.forEach(el => {
        let imag = document.createElement('img')
        imag.src = el.download_url
        div.appendChild(imag)
    });
}

let div = document.getElementById("pag")
let inp = document.getElementById("filter")

inp.addEventListener('input', () => {
    let val = inp.value.toLowerCase()
    div.innerText = ""
    info.forEach(el => {
        if (el.author.toLowerCase().includes(val)) {
            let imag = document.createElement('img')
            imag.src = el.download_url
            div.appendChild(imag)
        }
    });
})