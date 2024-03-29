import { employment, courses } from './data';
import * as toastr from 'toastr';
// import '../assets/css/404.css'
// import '../assets/css/prism.css'
// import '../assets/css/style.css'
// import '../assets/css/toastr.css'

console.log(
	'%c --::Version:  %c1.3.3 %c ::-- ©2020 Stefan Björnson ',
	'color: chocolate; font-weight:bolder; background-color: black; font-size:15px',
	'color: white; font-weight:bolder; background-color: black; font-size:15px',
	'color: chocolate; font-weight:bolder; background-color: black; font-size:15px'
);

const startUp = () => {
	toastr.info(
		'Nice to be important, but more important to be nice!'
	);
};

const printEmplymentList = () => {
	let output = document.getElementById('emplymentslist');
	let html = '';

	employment.map((e) => {
		html += `
    <div class='listitem employment'>
      <h4>${e.jobtitle}</h4>
      <h5>${e.company}</h5>
      <p>Anställd:${e.start} till ${e.end}</p>
      <p>${e.description}</p>
    </div>
    `;
	});

	output.innerHTML = html;
};

const printYHList = () => {
	let output = document.getElementById('yhlist');
	let html = '';

	courses.map((e) => {
		if (e.place == 'EC Utbildning AB Helsingborg') {
			html += `
      <a href=${e.courseLink}>
        <div class='listitem'>
          <h5>${e.course}</h5>
          <p>${e.description}</p>
          <p class='time'> betyg:${e.grade}</p>
        </div>
      </a>
      `;
		}
	});

	output.innerHTML = html;
};

const printUdemyList = () => {
	let output = document.getElementById('udemylist');
	let html = '';

	courses.map((e) => {
		if (e.place != 'EC Utbildning AB Helsingborg') {
			html += `
        <a href=${e.courseLink}>
          <div class='listitem'>
            <h5>${e.course}</h5>
          </div>
        </a>
      `;
		}
	});

	output.innerHTML = html;
};

printEmplymentList();
printUdemyList();
printYHList();
startUp();

document.getElementById('udemyaction').addEventListener('click', function() {
	document.getElementById('udemyinfo').classList.toggle('toggleView');
});

document.getElementById('ecaction').addEventListener('click', function() {
	document.getElementById('ecinfo').classList.toggle('toggleView');
});

document.getElementById('eccoursesaction').addEventListener('click', function() {
	document.getElementById('eccoursesinfo').classList.toggle('toggleView');
});

const udemycoursesInfo = document.getElementById('udemycoursesinfo');
const udemycoursesAction = document.getElementById('udemycoursesaction');

udemycoursesAction.addEventListener('click', function() {
	if (udemycoursesInfo.classList.contains('toggleView')) {
		document.getElementById('udemycoursesinfo').classList.remove('toggleView');
	} else {
		document.getElementById('udemycoursesinfo').classList.add('toggleView');
		toastr.info('De röda områdena i vissa kurser visar hur mycket jag har kvar av just den kursen.');
	}
});

document.getElementById('aboutmeaction').addEventListener('click', function() {
	document.getElementById('aboutmeinfo').classList.toggle('toggleView');
});

document.getElementById('competenciesaction').addEventListener('click', function() {
	document.getElementById('competenciesinfo').classList.toggle('toggleView');
});

document.getElementById('employmentaction').addEventListener('click', function() {
	document.getElementById('employmentinfo').classList.toggle('toggleView');
});
