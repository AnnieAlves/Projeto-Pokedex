const toggle = document.getElementById('toggle-theme');
const body = document.querySelector('body');
const imageToggleButton = document.querySelector('.btn-img');

const redButtonVers = document.querySelectorAll('.redVersion');
const blueButtonVers = document.querySelectorAll('.blueVersion');


const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
    body.classList.add(savedTheme);
    imageToggleButton.setAttribute("src", "./src/img/moon.png");
}

toggle.addEventListener('click', () => {
    const darkModeActive = body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode');

    if (darkModeActive) {
        imageToggleButton.setAttribute("src", "./src/img/sun.png")
    } else {
        imageToggleButton.setAttribute("src", "./src/img/moon.png")
    }

    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', currentTheme);
})


redButtonVers.forEach((button) => {
    button.addEventListener('click', () => {
        let card = button.closest('.pokemon-card');

       
        let blueButton = card.querySelector('.blueVersion');
        blueButton.classList.remove('selected');    
       
        let blueDescription = card.querySelector('.description.desc-blue');
        blueDescription.classList.remove('active');    
        
        button.classList.add('selected');    
        
        let redDescription = card.querySelector('.description.desc-red');
        redDescription.classList.add('active');

        redDescription.scrollTop = 0;
    })
})


blueButtonVers.forEach(button => {
    button.addEventListener('click', () =>{
        let card = button.closest('.pokemon-card');

        let redButton = card.querySelector('.redVersion');
        redButton.classList.remove('selected');    
       
        let redDescription = card.querySelector('.description.desc-red');
        redDescription.classList.remove('active');    
        
        button.classList.add('selected');    
        
        let blueDescription = card.querySelector('.description.desc-blue');
        blueDescription.classList.add('active');

        blueDescription.scrollTop = 0;
    })
})

