'use strict';
// $('document').ready(function(){


//array to hold every this. on the const
let kolshi = [];

// Constructor Building
function AnimalLand(name) {
  this.title = name.title;
  this.image_url = name.image_url;
  this.description = name.description;
  this.keyword = name.keyword;
  this.horns = name.horns;
  //---
  kolshi.push(this);

}

// ----------🍟🍟🍟🍟🍟🍟🍟-------------
//render function

AnimalLand.prototype.picViewer = function(){
  let section = $('.photo-template').clone();
  let Options = $('<option></option>').text(this.keyword);
  $('select').append(Options);
  //--
  $('main').append(section);
  section.find('h2').text(this.title);
  section.find('img').attr('src', this.image_url);
  section.find('p').text(this.description);
  section.find('span').text(this.keyword);
  section.find('div').text(this.horns);
  section.removeClass('photo-template');
};

// ---------🥰🥰🥰🥰🥰🥰-----------------
//ajax arrow function

AnimalLand.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };
    //----
  $.ajax('../data/page-1.json', ajaxSettings).then(data =>{
    data.forEach(dana => {
      let buildo = new AnimalLand(dana);
      buildo.picViewer();
    });
  });
};

// -------------☎📞☎📞☎📞☎📞---------------
//calling ajax
$(() => AnimalLand.readJson());

//---

$(document).ready(function () {
  $('select').on('change', function() {
    let selected = this.value;
    $(`.${selected}`).show();
  });
});
