// функции конкретного проекта



import { isMobile } from "./functions.js";

//прокрутка к топ при обновлении страницы

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}


//------------------------------------VanillaTilt----------------------------------------------------

if (!isMobile.any()) {
	VanillaTilt.init(document.querySelectorAll(".btn"), {
		max: 10,
		speed: 200,
		glare: true,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		"max-glare": .6,
	});
}

//---------------btns ripple animation------------------

const buttons = document.querySelectorAll('.btn');

console.log(buttons);

buttons.forEach(button => {
	button.addEventListener('click', function (e) {

		var rect = e.target.getBoundingClientRect(); //Иногда, когда у вас есть вложенные элементы, один из них с прикрепленным к нему событием, может быть запутанным понять, что ваш браузер видит в качестве родителя. Здесь вы можете указать родителя.

		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;

		let ripples = document.createElement('span');

		ripples.className = 'ripple';

		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove()
		}, 500)
	})
})

//---------------video play------------------
const hero = document.querySelector('.hero');
const vidItem = document.querySelector('.hero__video video');
const playBtn = document.querySelector('._video-play-btn');
const playIcon = document.querySelector('.controls__play');
const pauseIcon = document.querySelector('.controls__pause');


// устраняет артефакт видео при загрузке
window.addEventListener('load', () => {
	setTimeout(() => {
		vidItem.hidden = false;
	}, 0)

})


const play = () => {
	hero.classList.add('_video_played');
	setTimeout(function () {
		vidItem.play();
	}, 0);
	playIcon.style.display = "none"
	pauseIcon.style.display = "inline-block"
	playIcon.classList.add('_icon-played')
}

if (vidItem.play()) {
	console.log("123eee");
}

const pause = () => {
	hero.classList.remove('_video_played');
	vidItem.pause();
	playIcon.style.display = "inline-block"
	pauseIcon.style.display = "none"
}

if ((window.onload || playBtn) && vidItem.play()) {
	hero.classList.add('_video_played');
	playBtn.addEventListener('click', () => {
		if (hero.classList.contains('_video_played')) {
			pause();
		} else {
			play()
		}
	})
	playBtn.addEventListener('keydown', (e) => {
		if (e.which == 13  && e.which == 176 && e.code === 'Enter' && hero.classList.contains('_video_played')) {
			pause();
		} else {
			play()
		}
	})
}


// -----------digits counter ----------------
window.addEventListener("load", windowLoad);

function windowLoad() {
	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	// Пуск при завантаженні сторінки
	// digitsCountersInit();


	// Пуск при скроллі (появі блока з лічільниками)
	let options = {
		threshold: 0.3
	}
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const targetElement = entry.target;
				const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
				if (digitsCountersItems.length) {
					digitsCountersInit(digitsCountersItems);
				}
				// Вимкнути відслідковування після спрацювання
				observer.unobserve(targetElement);
			}
		});
	}, options);

	let sections = document.querySelectorAll('.about');
	if (sections.length) {
		sections.forEach(section => {
			observer.observe(section);
		});
	}
}
