jQuery(document).ready(function( $ ) {

  $(".toggle-mnu1").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu1").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu1").hasClass("on") ){
      $(".toggle-mnu1").removeClass("on");
      $(".top-mnu1").fadeOut();
    }
  });


  $(".toggle-mnu2").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu2").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu2").hasClass("on") ){
      $(".toggle-mnu2").removeClass("on");
      $(".top-mnu2").fadeOut();
    }
  });


  $(".top-mnu, .info-w, .categ-menu-ul").click(function (e) {
    e.stopPropagation();
  });


  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/

let imgWrapper2 = document.querySelector('.img_wrapper_2');  
let fileMulti2 = document.querySelector('#fileMulti-2');


function download2(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    let img = document.createElement('img');
    img.src = reader.result;
    let linkImg = document.createElement('span');
    linkImg.classList.add('add-comp-col-1-l-img-w');
    linkImg.appendChild(img);      
    imgWrapper2.innerHTML = '';
    imgWrapper2.classList.add('zi10');
    imgWrapper2.appendChild(linkImg);
    removeImg();
  }
}





function removeImg() {
  $('.add-comp-col-1-l-img-w').click(function (e) {
    e.stopPropagation();
    this.remove();
    imgWrapper2.classList.remove('zi10');
  });  
}

removeImg();


if($('#fileMulti-2').length) {
  fileMulti2.addEventListener("change", function() {
   download2(this); 
 });
}



$('.w-arev-com-a').click(function (e) {
  e.preventDefault();    
  $('.modal-overlay_1').fadeIn();
  let content = $(this).parent().parent().html();
  $('.modal-overlay_1 .rev-it').html("");
  $('.modal-overlay_1 .rev-it').append(content);
  $('body').addClass('ohi');
});

$('.info-close').click(function () {
  $('.info').slideUp();
});





  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });


  $('.tabs-control .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control .tabs_control_item'),
    contentItem = $('.tabs_content .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });


  if ($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    }); 
  }


}); //ready

