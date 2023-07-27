const toggleTheme = document.querySelector('#toggle-theme')

toggleTheme.addEventListener('click', () => {
    const html = document.querySelector('html')

    html.classList.toggle('dark')
    if(html.classList.contains('dark')) {
        toggleTheme.innerHTML = `<img src="./src/assets/sun.svg" alt="Ícone do sol" class="w-[20px]">`
    } else {
        toggleTheme.innerHTML = `<img src="./src/assets/moon.svg" alt="Ícone da lua" class="w-[20px]">`
    }
})
