let toggleSearch = document.querySelector("#toggle-search"),
	search = document.querySelector(".search");

console.log(toggleSearch)
console.log(search)

toggleSearch.addEventListener("click", () => {
	if (search.style.top == '-10vh') {
		toggleSearch.innerHTML = `<i class="fa-solid fa-xmark"></i>`

		search.style.top = '0'
	} else {
		toggleSearch.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
		search.style.top = '-10vh'
	}

})