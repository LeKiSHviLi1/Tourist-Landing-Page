class myHtmlElement {
  title;
  img;
  paragraph;
}

function card() {
  var array = [];
  var el = new myHtmlElement();
  el.title = 'FLIGHT BOOKING';
  el.img = 'images/flight booking.png';
  el.paragraph =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.';
  array[0] = el;
  el = new myHtmlElement();
  el.title = 'HOTEL & RESORT BOOKING';
  el.img = 'images/hotel.png';
  el.paragraph =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.';
  array[1] = el;
  el = new myHtmlElement();
  el.title = 'FAMILY TRIP PLANNER';
  el.img = 'images/family.png';
  el.paragraph =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.';
  array[2] = el;
  el = new myHtmlElement();
  el.title = 'CRUISE TOUR';
  el.img = 'images/cruise.png';
  el.paragraph =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.';
  array[3] = el;
  el = new myHtmlElement();
  el.title = 'FIRE CAMP';
  el.img = 'images/camp.png';
  el.paragraph =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.';
  array[4] = el;
  el = new myHtmlElement();
  el.title = 'CORPORATE HOLIDAYS';
  el.img = 'images/holidays.png';
  el.paragraph =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.';
  array[5] = el;

  for (var i = 0; i < array.length; i++) {
    let serviceContent = document.getElementById('serviceContent');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('h3');
    let paragraph = document.createElement('p');
    div.className = 'service--content--inner';
    img.src = array[i].img;
    title.innerHTML = array[i].title;
    title.className = 'service--content--title';
    paragraph.innerHTML = array[i].paragraph;
    paragraph.className = 'service--content--paragraph';
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(paragraph);
    serviceContent.appendChild(div);
  }
}

card();
