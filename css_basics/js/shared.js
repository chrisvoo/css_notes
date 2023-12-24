let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanButtons = document.querySelectorAll('.plan button')
let toggleBtn = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')

toggleBtn.addEventListener('click', function () {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // style property allow to access inline styles
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open')
    }
    backdrop.classList.remove('open')
}

let closeModalBtn = document.querySelector('.modal__action--negative')
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal)
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    closeModal()
})



