// console.log(localStorage);
// localStorage.setItem("bite", "Bite me!")
// const message = localStorage.getItem("bite")
// console.log(message)

// const formRef = document.querySelector(".js-form");
// const inputRef = document.querySelector(".js-input");
// const commentRef = document.querySelector(".js-comment");

// formRef.addEventListener("submit", onForm)
// commentRef.addEventListener("input", onInput)

// commentRef.value = localStorage.getItem("feedback")

// console.log(commentRef.value)

// function onForm(event) {
//     event.preventDefault()
//     event.currentTarget.reset()
//     localStorage.removeItem("feedback")
// }

// function onInput(event) {
//     const message = event.target.value.trim()
//     localStorage.setItem("feedback", message)
// }

const inputRef = document.querySelector(".bookmarkInput")
const buttonRef = document.querySelector(".addBookmarkBtn")
const listRef = document.querySelector(".bookmarkList")
let books = []
function render(){
    listRef.innerHTML = books.map((item, index) => {
        return `<li>
        <a href="${item}">${item}</a>
        <button type="button" class="edit">Edit</button>
        <button type="button" class="delete">X</button>
    </li>`
    })
}

buttonRef.addEventListener("click", () => {
    const url = inputRef.value.trim()
    if (url) {
        books.push(url)
        inputRef.value = ""
        render()
    }
})

render()