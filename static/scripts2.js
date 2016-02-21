 $('a').click(function(e) {
 e.preventDefault();
 newLocation = this.href;
 $('body').fadeOut('slow', newpage);
 });
 function newpage() {
 window.location = newLocation;
 }
