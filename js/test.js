'use strict';

// $('document').ready(function(){


let kolshi = [];
function AnimalLand (name) {
  this.title = name.title;
  this.image_url = name.image_url;
  this.description = name.description;
  this.keyword = name.keyword;
  this.horns = name.horns;
  kolshi.push(this);
  console.log(kolshi);
}

// ----------🍟🍟🍟🍟🍟🍟🍟-------------

AnimalLand.prototype.moayshi = function (){

  let section = $('.photo-template').clone();

  $('main').append(section);
  section.find('h2').text(this.title);
  section.find('img').attr('src',this.image_url);
  section.find('p').text(this.description);
  section.find('span').text(this.keyword);
  section.find('div').text(this.horns);

};

// ---------🥰🥰🥰🥰🥰🥰-----------------

// AnimalLand.readJson = () => {
//   const ajaxSettings = {
//     method: 'get',
//     dataType: 'json'
//   };

//   $.ajax('../data/page-1.json', ajaxSettings).then(data =>{
//     data.forEach(dana => {
//       let buildo = new AnimalLand(dana);
//       buildo.moayshi();

//       console.log(buildo,'koko');
//     });
//   });
// };

// // -------------☎📞☎📞☎📞☎📞---------------

// $(() => AnimalLand.readJson());

// AnimalLand.readJson = () => {
//   const ajaxSettings = {
//     method: 'get',
//     dataType: 'json'
//   };

//   $.ajax('../data/page-1.json', ajaxSettings).then(data =>{

//     data.forEach(dana => {
//       let buildo = new AnimalLand(dana);


//       buildo.moayshi();

//     });
//   });
// };

// $(() => AnimalLand.readJson());
