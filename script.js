// console.log(
//   "%c --::Version: 1.0.003::-- ©2020 Stefan Björnson ",
//   "color: chocolate; font-weight:bolder; background-color: black; font-size:15px"
// );
console.log(
  "%c --::Version: %c1.0.003%c::-- ©2020 Stefan Björnson ",
  "color: chocolate; font-weight:bolder; background-color: black; font-size:15px",
  "color: white; font-weight:bolder; background-color: black; font-size:15px",
  "color: chocolate; font-weight:bolder; background-color: black; font-size:15px"
);

const printEmplymentList = () => {
  let output = document.getElementById("emplymentslist");
  let html = "";

  employment.map(e => {
    html += "<div class='listitem employment'>";
    html += "<h4>" + e.jobtitle + "</h4>";
    html += "<h5>" + e.company + "</h5>";
    html += "<p>Anställd: " + e.start + " till " + e.end + "</p>";
    html += "<p>" + e.description + "</p>";
    html += "</div>";
  });

  output.innerHTML = html;
};

const printYHList = () => {
  let output = document.getElementById("yhlist");
  let html = "";

  courses.map(e => {
    if (e.place == "EC Utbildning AB Helsingborg") {
      html += "<a href=" + e.courseLink + "><div class='listitem'>";
      html +=
        "<h5>" +
        e.course +
        "</h5><p>" +
        e.description +
        "</p><p class='time'> betyg: " +
        e.grade +
        "</p>";
      html += "</div></a>";
    }
  });

  output.innerHTML = html;
};

const printudemyList = () => {
  let output = document.getElementById("udemylist");
  let html = "";

  courses.map(e => {
    if (e.place != "EC Utbildning AB Helsingborg") {
      html += "<a href=" + e.courseLink + ">";
      html +=
        "<div class='listitem' style='background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " +
        e.completion +
        "%, rgba(223,198,198,1) " +
        e.completion +
        "%, rgba(223,198,198,1) " +
        e.completion +
        "%);'><h5>" +
        e.course +
        "</h5>" +
        "<p class='info'>" +
        e.description +
        "</p>" +
        "<p class='time'>" +
        e.length +
        "</p>" +
        "</div>";

      html += "</a>";
    }
  });

  output.innerHTML = html;
};

printEmplymentList();
printudemyList();
printYHList();

const udemyInfo = document.getElementById("udemyinfo");
const udmeyAction = document.getElementById("udemyaction");

udmeyAction.addEventListener("click", function() {
  if (udemyInfo.classList.contains("hidden")) {
    udemyInfo.classList.replace("hidden", "notHidden");
  } else {
    udemyInfo.classList.replace("notHidden", "hidden");
  }
});

const ecInfo = document.getElementById("ecinfo");
const ecAction = document.getElementById("ecaction");

ecAction.addEventListener("click", function() {
  if (ecInfo.classList.contains("hidden")) {
    ecInfo.classList.replace("hidden", "notHidden");
  } else {
    ecInfo.classList.replace("notHidden", "hidden");
  }
});

const eccoursesInfo = document.getElementById("eccoursesinfo");
const eccoursesAction = document.getElementById("eccoursesaction");

eccoursesAction.addEventListener("click", function() {
  if (eccoursesInfo.classList.contains("hidden")) {
    eccoursesInfo.classList.replace("hidden", "notHidden");
  } else {
    eccoursesInfo.classList.replace("notHidden", "hidden");
  }
});

const udemycoursesInfo = document.getElementById("udemycoursesinfo");
const udemycoursesAction = document.getElementById("udemycoursesaction");

udemycoursesAction.addEventListener("click", function() {
  if (udemycoursesInfo.classList.contains("hidden")) {
    udemycoursesInfo.classList.replace("hidden", "notHidden");
  } else {
    udemycoursesInfo.classList.replace("notHidden", "hidden");
  }
});

const aboutmeInfo = document.getElementById("aboutmeinfo");
const aboutmeAction = document.getElementById("aboutmeaction");

aboutmeAction.addEventListener("click", function() {
  if (aboutmeInfo.classList.contains("hidden")) {
    aboutmeInfo.classList.replace("hidden", "notHidden");
  } else {
    aboutmeInfo.classList.replace("notHidden", "hidden");
  }
});

const employmentInfo = document.getElementById("employmentinfo");
const employmentAction = document.getElementById("employmentaction");

employmentAction.addEventListener("click", function() {
  if (employmentInfo.classList.contains("hidden")) {
    employmentInfo.classList.replace("hidden", "notHidden");
  } else {
    employmentInfo.classList.replace("notHidden", "hidden");
  }
});
