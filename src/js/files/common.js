// функции конкретного проекта

import { isMobile } from "./functions.js";

//прокрутка к топ при обновлении страницы
/*
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
*/
//плавный скролл
// const smoothLinks = document.querySelectorAll('a[href^="#"]:not(._popup-link)');
// const activePopup = document.querySelectorAll('.popup._active');

// if (smoothLinks.length > 0) {
// 	for (let smoothLink of smoothLinks) {
// 		smoothLink.addEventListener('click', function (e) {
// 			e.preventDefault();
// 			const id = smoothLink.getAttribute('href');
// 			document.querySelector(id).scrollIntoView({
// 				behavior: 'smooth',
// 				block: 'start'
// 			});
// 		});
// 	};
// }




//класс ссылке активной страници

// function highlightCurrent() {
// 	const curPage = document.URL;
// 	const links = document.getElementsByTagName('a');
// 	for (let link of links) {
// 		if (link.href == curPage) {
// 			link.classList.add("_activepage");
// 		}
// 	}
// }

// document.onreadystatechange = () => {
// 	if (document.readyState === 'complete') {
// 		highlightCurrent()
// 	}
// };




/*
//preloader
window.onload = function () {
	let body = document.querySelector("body");
	let preloader = document.getElementById('preloader');
	body.classList.add("_preloader")
	//body_lock_add();
	preloader.classList.add('_hide-preloader');
	setInterval(function () {
		preloader.classList.add('_preloader-hidden');
		preloader.classList.remove('_hide-preloader');
		body.classList.remove("_preloader")
		//body_lock_remove();
	}, 1000);
}
*/
//------------------------------------LazyLoad----------------------------------------------------
// var lazyLoadInstance = new LazyLoad({
// 	// Your custom settings go here
// 	use_native: true
// });


//------------------------------------parallax----------------------------------------------------

// var parallaxScene = document.getElementsByClassName("scene")

// if (parallaxScene.length > 0) {
// 	var scene1 = document.getElementById('');
// 	var parallaxInstance1 = new Parallax(scene1);

// 	var scene2 = document.getElementById('');
// 	var parallaxInstance2 = new Parallax(scene2);
// }

//------------------------------------parallax----------------------------------------------------


//------------------------------------subscribe submenu----------------------------------------------------

// const subscribe = document.querySelector(".subscribe");
// const subscribeIcon = document.querySelector(".subscribe__icon");
// const socials = document.querySelector(".subscribe__socials");
// const overlay = document.querySelector("._overlay");

// if (isMobile.any()) {
// 	function socials_close() {
// 		socials.classList.remove("_show");
// 		subscribeIcon.classList.remove("_active");
// 	}

// 	subscribeIcon.addEventListener("click", function (e) {
// 		if (!subscribeIcon.classList.contains("_active")) {
// 			subscribeIcon.classList.add("_active");
// 			setTimeout(function () {
// 				socials.classList.add("_show")
// 			}, 300);
// 		} else {
// 			socials_close()
// 		}
// 	});

//закрытие при нажатии по єкрану
// document.addEventListener("click", function (e) {
// 	if (!e.target.closest(".subscribe__icon")) {
// 		socials_close(e.target.closest('.subscribe'));
// 	}
// });
// 	//закрытие при начале скрола
// 	document.addEventListener("scroll", function () {
// 		if (subscribeIcon.classList.contains("_active")) {
// 			socials_close();
// 		}
// 	});
// }


//------------------------------------textarea autosize----------------------------------------------------
// autosize(document.querySelectorAll('textarea'));

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
	}, 100)
})


const play = () => {
	hero.classList.add('_video_played');
	setTimeout(function () {
		vidItem.play();
	}, 200);
	playIcon.style.display = "none"
	pauseIcon.style.display = "inline-block"
	playIcon.classList.add('_icon-played')
}



const pause = () => {
	hero.classList.remove('_video_played');
	vidItem.pause();
	playIcon.style.display = "inline-block"
	pauseIcon.style.display = "none"
}

if ((window.onload || playBtn) && vidItem) {
	playBtn.addEventListener('click', () => {
		if (hero.classList.contains('_video_played')) {
			pause();
		} else {
			play()
		}
	})
	document.addEventListener('scroll', () => {
		pause()
		playIcon.classList.remove('_video_played')
	});
	playBtn.addEventListener('mouseleave', pause);
}



//---------------algorithm cards animation------------------
/*
const algorithmCards = document.querySelectorAll('.steps__item');
const algorithmCardsBox = document.querySelector('.steps ._watcher-view');

console.log(algorithmCards);


if (algorithmCardsBox) {
	console.log('hello');
	algorithmCards.forEach(card => {

		setTimeout(showCard, 1000)
		function showCard() {
			card.style.opacity = "1";
			card.style.visability = "visible";
		}
	})
}

*/

//------------------smooth marker underline menu__link----------------------
/*
const activLinkMarker = document.querySelector('#marker')
const menuLink = document.querySelectorAll('.menu__link')

if (!isMobile.any()) {
	menuLink.forEach(link => {

		link.addEventListener('mouseenter', (e) => {

			let rect = e.target.getBoundingClientRect();

			activLinkMarker.style.top = rect.top + 'px';
			activLinkMarker.style.width = rect.width + 'px';
			activLinkMarker.style.left = e.target.offsetLeft + 'px';
		})

	})
} else {
	activLinkMarker.style.display = 'none'
}

*/

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
