let data = kurser.concat(kommandekurser);
let newdata = [];
let id = 0;

const compare = (a, b) => {
  if (a.plats < b.plats) {
    return -1;
  }
  if (a.plats > b.plats) {
    return 1;
  }
  return 0;
};

data.sort(compare);

data.map(x => {
  let obj = {
    id: id,
    place: x.plats,
    course: x.kurs,
    courseLink: x.länkkurs,
    length: x.längd,
    description: x.beskrivning,
    teacher: x.lärare,
    teacherLink: x.länklärare,
    completion: x.avklarat,
    grade: x.betyg || ""
  };
  id++;
  newdata.push(obj);
});

// console.log(newdata);
// console.log(JSON.stringify(newdata));
