const printEmplymentList = () => {
  let output = document.getElementById("emplymentslist");
  let html = "";

  employment.map(e => {
    html += "<div class='listitem'>";
    html += "<p>" + e.jobtitle + "</p>";
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
        "<h5>" + e.course + "</h5><p class='time'> betyg: " + e.grade + "</p>";
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
