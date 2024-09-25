const bodyTypeBtn = document.querySelector('#bodyTypeBtn')
const brandBtn = document.querySelector('#brandBtn')
const bodyTypeShowBtn = document.querySelector('#bodyTypeShowBtn')
const brandShowBtn = document.querySelector('#brandShowBtn')
const bodyTypeList = document.querySelector('.choose__body')
const brandList = document.querySelector('.choose__make')
const bodyTypeListItems = document.querySelectorAll('.body-type-item')
const brandListItems = document.querySelectorAll('.make-item')

bodyTypeBtn.addEventListener('click', function () {
    bodyTypeBtn.classList.add('choose_btn-item--active')
    brandBtn.classList.remove('choose_btn-item--active')
    bodyTypeList.classList.remove('none')
    brandList.classList.add('none')

    for(let i = 6; i < bodyTypeListItems.length; i++){
        bodyTypeListItems[i].classList.add('none')
    }

    for(let i = 8; i < brandListItems.length; i++){
        brandListItems[i].classList.add('none')
    }

    brandShowBtn.textContent = 'Show all'
})

bodyTypeShowBtn.addEventListener('click', function(){
    for(let i = 6; i < bodyTypeListItems.length; i++){
        bodyTypeListItems[i].classList.toggle('none')
    }
    if (bodyTypeShowBtn.textContent === 'Show all') {
        bodyTypeShowBtn.textContent = 'Hide'
    } else {
        bodyTypeShowBtn.textContent = 'Show all'
    }
})

brandBtn.addEventListener('click', function () {
    brandBtn.classList.add('choose_btn-item--active')
    bodyTypeBtn.classList.remove('choose_btn-item--active')
    brandList.classList.remove('none')
    bodyTypeList.classList.add('none')

    for(let i = 8; i < brandListItems.length; i++){
        brandListItems[i].classList.add('none')
    }

    for(let i = 6; i < bodyTypeListItems.length; i++){
        bodyTypeListItems[i].classList.add('none')
    }

    bodyTypeShowBtn.textContent = 'Show all'
})

brandShowBtn.addEventListener('click', function(){
    for(let i = 8; i < brandListItems.length; i++){
        brandListItems[i].classList.toggle('none')
    }
    if (brandShowBtn.textContent === 'Show all') {
        brandShowBtn.textContent = 'Hide'
    } else {
        brandShowBtn.textContent = 'Show all'
    }
})



