'use strict';


//array to hold every this. on the const
let kolshi = [];

//ready function
$('document').ready(function () {


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

  AnimalLand.prototype.picViewer = function () {
    let section = $('.photo-template').clone();
    let Options = $('<option></option>').text(this.keyword);
    $('select').append(Options);
    //--
    $('main').append(section);
    section.find('h2').text(this.title);
    section.find('img').attr('src', this.image_url);
    section.find('p').text(this.description);
    section.find('.p1').text(this.keyword)
    section.find('div').text(`Horns Number: ${this.horns}`);
    section.attr('class', this.keyword);

  };

  // ---------🥰🥰🥰🥰🥰🥰-----------------
  //ajax arrow function

  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };
  //----
  $.ajax('../data/page-1.json', ajaxSettings).then(data => {
    data.forEach(dana => {
      let buildup = new AnimalLand(dana);
      buildup.picViewer();
    });
  });


  // -------------☎📞☎📞☎📞☎📞---------------
  //---
  $('select').on('change', function () {
    let selected = this.value;
    $('section').hide();
    $(`.${selected}`).show();
  });
});
