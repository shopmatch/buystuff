$(document).ready(function(){
    console.log("Document Ready!");
	var counter = 0;
    $(".buddy").on("swiperight",function(){
	  counter++;
	  move();
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div class="status like">Like!</div>');      
   
        if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".buddy").on("swipeleft",function(){
	  counter++;
	  move();
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('Na-na!');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
   } 

  });

/*
window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    console.log("function called");
    switch(e.keyCode) {
        case 37:
            // left key pressed
            $('.top').addClass('rotate-right').delay(700).fadeOut(1);
            $('.top').find('.status').remove();
            $('.top').append('<div class="status dislike">Dislike!</div>');
			  counter++;
			  move();
            if ( $('.top').is(':last-child') ) {
             $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
              alert('Na-na!');
             } else {
                $('.top').next().addClass('top').fadeIn(400);
             } 
            break;
        case 39:
            // right key pressed
            $('.top').addClass('rotate-left').delay(700).fadeOut(1);
            $('.top').find('.status').remove();
            $('.top').append('<div class="status like">Like!</div>');
			  counter++;
			  move();
            if ( $('.top').is(':last-child') ) {
             $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
              alert('Na-na!');
             } else {
                $('.top').next().addClass('top').fadeIn(400);
             }
            break;
  }
}
*/
function move() {
    var elem = document.getElementById("myBar");
    var width = counter;
	update_matches();
	elem.style.width = width + '%';
}

function update_matches() {
	var elem = document.getElementById("num-matches");
	elem.innerHTML = counter;
}

});
