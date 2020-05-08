import { employment, courses } from './data';
import * as toastr from 'toastr';

console.log(
	'%c --::Version:  %c1.2.1 %c ::-- ©2020 Stefan Björnson ',
	'color: chocolate; font-weight:bolder; background-color: black; font-size:15px',
	'color: white; font-weight:bolder; background-color: black; font-size:15px',
	'color: chocolate; font-weight:bolder; background-color: black; font-size:15px'
);

const startUp = () => {
	toastr.info(
		'Är ni intresserade av en hungrig, lättlärd och trevlig junior systemutvecklare, var inte rädd för att kontakta mig!'
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
          <div class='listitem' style='background: linear-gradient(90deg, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,1) ${e.completion}%,
            rgba(223,198,198,1) ${e.completion}%,
            rgba(223,198,198,1) ${e.completion}%)'>
            <h5>${e.course}</h5>
            <p class='info'>${e.description}</p>
            <p class='time'>${e.length}</p>
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

document.getElementById('employmentaction').addEventListener('click', function() {
	document.getElementById('employmentinfo').classList.toggle('toggleView');
});
