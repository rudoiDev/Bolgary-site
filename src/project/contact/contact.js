let burgerWrapper = document.querySelector('.burger_wrapper');
let burgerButton = document.querySelector('.burger');
let body = document.querySelector('body');

let liTask = document.querySelector('.nav_items');

burgerWrapper.addEventListener('click', e => {
	liTask.classList.toggle('active');
	burgerButton.classList.toggle('active');
	body.classList.toggle('lock')
})

window.addEventListener('keydown', e => {
	if (e.key == 'Escape') {
		liTask.classList.remove('active');
		burgerButton.classList.remove('active');
		body.classList.remove('lock')
	}
})


const animItems = document.querySelectorAll('h1, h2, p');
elemScroll(animItems, 'animate__fadeInUp'); 

const animItems1 = document.querySelectorAll('.item');
elemScroll([animItems1[0]], 'animate__bounceInRight'); 
elemScroll([animItems1[1]], 'animate__bounceInLeft'); 
elemScroll([animItems1[2]], 'animate__bounceInRight'); 

const animItems2 = document.querySelectorAll('input');
elemScroll([animItems2[0]], 'animate__bounceInRight'); 
elemScroll([animItems2[1]], 'animate__bounceInLeft'); 
elemScroll([animItems2[2]], 'animate__bounceInRight'); 
elemScroll([animItems2[3]], 'animate__bounceInLeft'); 


function elemScroll(item, cls) {
	if (item.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < item.length; index++) {
				const animItem = item[index];
				const animItemHeigth = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;
	
				let animItemPoint = window.innerHeight - animItemHeigth / animStart;
				if (animItemHeigth > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
	
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigth)) {
					animItem.style.visibility = 'visible';
					animItem.classList.add(cls)
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove(cls);
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
