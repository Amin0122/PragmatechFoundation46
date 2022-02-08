gallery = [{
    id: 1,
    img: "images/1.jpg",
    detail: 'Some information about image 01'
},
{
    id: 2,
    img: "images/2.jpg",
    detail: 'Some information about image 02'
},
{
    id: 3,
    img: "images/3.jpg",
    detail: 'Some information about image 03'
},
{
    id: 4,
    img: "images/4.jpg",
    detail: 'Some information about image 04'
},
{
    id: 5,
    img: "images/5.jpg",
    detail: 'Some information about image 05'
},
{
    id: 6,
    img: "images/6.jpg",
    detail: 'Some information about image 06'
},
{
    id: 7,
    img: "images/7.jpg",
    detail: 'Some information about image 07'
},
{
    id: 8,
    img: "images/8.jpg",
    detail: 'Some information about image 08'
},
]

let lightbox = document.querySelector('.lightbox')
let modal = document.querySelector('.modal')
let modalImage = document.querySelector('.modal-inner img');
let detail = document.querySelector('.modal-info span')
for (let item of gallery) {
lightbox.innerHTML += `
    <div class="lightbox-item" onclick='openModal(this)' data="${item.id}">
        <img src="${item.img}" alt="">
    </div>
`
}

function openModal(element) {
modal.style.display = "flex"
id = element.getAttribute('data');
modalImage.setAttribute('src', element.querySelector('img').getAttribute('src'))
modalImage.setAttribute('data', id)
for (let item of gallery) {
    if (item.id == id) {
        detail.innerHTML = item.detail
    }
}
}

function closeModal() {
modal.style.display = "none"
}

function next() {
let selectedId = modalImage.getAttribute('data');
let nextId = selectedId * 1 + 1

for (let item of gallery) {
    if (item.id == nextId) {
        modalImage.setAttribute('src', item.img)
        modalImage.setAttribute('data', nextId)
        detail.innerHTML = item.detail
    }
}

}

function previous() {
let selectedId = modalImage.getAttribute('data');
let nextId = selectedId - 1

for (let item of gallery) {
    if (item.id == nextId) {
        modalImage.setAttribute('src', item.img)
        modalImage.setAttribute('data', nextId)
        detail.innerHTML = item.detail
    }
}

}