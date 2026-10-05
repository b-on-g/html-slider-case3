const slides = [
	{
		src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',
		alt: 'Горный пейзаж',
	},
	{
		src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85',
		alt: 'Лесная тропа',
	},
	{
		src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85',
		alt: 'Озеро среди гор',
	},
	{
		src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85',
		alt: 'Горная долина',
	},
	{
		src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85',
		alt: 'Пейзаж на закате',
	},
]

const image = document.querySelector('#sliderImage')
const counter = document.querySelector('#sliderCounter')
const previousButton = document.querySelector('#previousButton')
const nextButton = document.querySelector('#nextButton')

let currentIndex = 0

function renderSlide() {
	const slide = slides[currentIndex]
	image.classList.add('is-changing')
	window.setTimeout(() => {
		image.src = slide.src
		image.alt = slide.alt
		counter.textContent = `Изображение ${currentIndex + 1} из ${slides.length}`
		image.classList.remove('is-changing')
	}, 120)
}

function showNextSlide() {
	currentIndex = (currentIndex + 1) % slides.length
	renderSlide()
}

function showPreviousSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length
	renderSlide()
}

nextButton.addEventListener('click', showNextSlide)
previousButton.addEventListener('click', showPreviousSlide)
