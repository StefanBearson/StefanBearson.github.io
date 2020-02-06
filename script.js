const printlist = () => {
  data = kurser.concat(kommandekurser);
  let output = document.getElementById("list");
  let yhoutput = document.getElementById("yhlist");
  let html = "";
  let yhhtml = "";
  for (let x = 0; data.length > x; x++) {
    if (data[x].plats == "udemy" || data[x].plats == "Udemy") {
      html += "<a href=" + data[x].länkkurs + ">";
      html +=
        "<div class='course' style='background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " +
        data[x].avklarat +
        "%, rgba(223,198,198,1) " +
        data[x].avklarat +
        "%, rgba(223,198,198,1) " +
        data[x].avklarat +
        "%);'><h5>" +
        data[x].kurs +
        "</h5><p class='time'>" +
        data[x].längd +
        " timmars video</p>" +
        "</div>";

      html += "</a>";
    }
  }

  for (let x = 0; data.length > x; x++) {
    if (data[x].plats == "EC Utbildning AB Helsingborg") {
      yhhtml += "<a href=" + data[x].länkkurs + "><div class='course'>";
      yhhtml +=
        "<h5>" +
        data[x].kurs +
        "</h5><p class='time'> betyg: " +
        data[x].betyg +
        "</p>";
      yhhtml += "</div></a>";
    }
  }
  yhoutput.innerHTML = yhhtml;
  output.innerHTML = html;
};

const printEmplyyment = () => {
  let eOutput = document.getElementById("elist");
  let html;

  for (let x = 0; tidigareJobb.length > x; x++) {
    html += "<div class='course'>";
    html += "<h5>" + tidigareJobb[x].namn + "</h5>";
    html +=
      "<p>Anställd: " +
      tidigareJobb[x].start +
      " till " +
      tidigareJobb[x].slut +
      "</p>";
    html += "<p class='time'>" + tidigareJobb[x].possition + "</p>";
    html += "</div>";
  }

  eOutput.innerHTML = html;
};
printEmplyyment();
printlist();
