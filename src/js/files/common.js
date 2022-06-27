// функции конкретного проекта

import { isMobile } from "./functions.js";

//прокрутка к топ при обновлении страницы
// window.onbeforeunload = function () {
// 	window.scrollTo(0, 0);
// }

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
/*autosize(document.querySelectorAll('textarea'));

if (!isMobile.any()) {
	VanillaTilt.init(document.querySelectorAll(".btn"), {
		max: 15,
		speed: 300,
		glare: true
	});
}*/

// var elem = document.getElementById('elem');

// document.addEventListener('mousemove', function(event) {
// 	console.log( event.clientX + ' : ' + event.clientY);
// });


//---------------btns ripple animation------------------

const buttons = document.querySelectorAll('.btn');

console.log(buttons);

buttons.forEach(button => {
	button.addEventListener('click', function (e) {

		console.log(e.target.offsetLeft);
		console.log(e.target.offsetTop);

		var rect = e.target.getBoundingClientRect(); //Иногда, когда у вас есть вложенные элементы, один из них с прикрепленным к нему событием, может быть запутанным понять, что ваш браузер видит в качестве родителя. Здесь вы можете указать родителя.

		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;

		let ripples = document.createElement('span.ripple');

		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			//ripples.remove()
		}, 500)
	})
})

//---------------video play------------------

const vidItem = document.querySelector('.hero__video video');
const offerTitle = document.querySelector('.offer__title');
const offerSubitle = document.querySelector('.offer__subtitle');
const playBtnPc = document.querySelector('._video-play-pc');
const playBtnMob = document.querySelector('._video-play-mob');
const playIcon = document.querySelector('.controls__play');
const pauseIcon = document.querySelector('.controls__pause');

const play = () => {
	vidItem.play();
	vidItem.style.transition = "filter 1.5s ease"
	vidItem.style.filter = "grayscale(0)  brightness(1)"
	offerTitle.style.opacity = "0"
	offerSubitle.style.opacity = "0"
	playIcon.style.display = "none"
	pauseIcon.style.display = "inline-block"
	playIcon.classList.add('played')
}



const pause = () => {
	vidItem.pause();
	vidItem.style.filter = "grayscale(.7) brightness(.7)"
	offerTitle.style.opacity = "1"
	offerSubitle.style.opacity = "1"
	playIcon.style.display = "inline-block"
	pauseIcon.style.display = "none"
}

if (((window.onload || playBtnPc) && vidItem) && !isMobile.any()) {
	playBtnPc.addEventListener('mouseenter', play);
	playBtnPc.addEventListener('mouseleave', pause);
} else if (((window.onload || playBtnMob) && vidItem) && isMobile.any()) {
	playBtnMob.addEventListener('click', () => {
		if (!playIcon.classList.contains('played')) {
			play();
		} else {
			pause()
			playIcon.classList.remove('played')
		}
	});
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

