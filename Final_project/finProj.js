jQuery(function () { // on DOM load
  $('div#touchgallery1').touchgallery({ // initialize first demo
    width: 1400,
    height: 550,
    threshold: 100,
    navbuttons: ['http://www.dynamicdrive.com/dynamicindex4/left.png', 'http://www.dynamicdrive.com/dynamicindex4/right.png', -20]
  })
})

$.fancybox.defaults$(document).ready(function () {
  $(".various").fancybox({
    width: 800,
    height: 600,
    autoSize: false
  });
});

///for chat.html
function send() {

  var author = document.getElementById('type-username');
  var message = document.getElementById('type-message');
  // var typed = document.getElementById('add-mes');
  var typed2 = document.getElementById('typed-values');

  var block = document.createElement('span');
  var node = document.createTextNode(author.value + " ");
  block.appendChild(node);
  block.style.fontWeight = 'bold';
  var timespan = document.createElement('span');
  var d = new Date();
  var node = document.createTextNode(d.toLocaleString());
  timespan.appendChild(node);
  timespan.style.color = "grey";
  typed2.appendChild(block);
  typed2.appendChild(timespan);

  var typedmes2 = document.createElement('p');
  document.body.appendChild(typedmes2);
  var node = document.createTextNode("");
  typedmes2.appendChild(node);
  typed2.appendChild(typedmes2);

  var typedmes = document.createElement('div');
  document.body.appendChild(typedmes);
  typedmes.id = 'input-mes';
  var text = message.value;
  var node = document.createTextNode(text);
  typedmes.appendChild(node);
  typed2.appendChild(typedmes);

  var typedmes2 = document.createElement('p');
  document.body.appendChild(typedmes2);
  typedmes2.id = 'input-mes2';
  var node = document.createTextNode("");
  typedmes2.appendChild(node);
  typed2.appendChild(typedmes2);



  document.getElementById('type-username').value = "";
  document.getElementById('type-message').value = "";

}






function register() {
  var passw = document.getElementById('typePassword');
  var passw2 = document.getElementById('typePasswordRepeat');

  var text = ["", "", ""] //for alert text to display
  var inputs = [];
  var inputs = document.getElementsByClassName('obligate');
  var country = document.getElementById('countrySel');
  var checked = document.getElementById('box-checked').checked;


  if (passw.value.length < 8) {
    text[0] = "Parolei jabut >= 8 simboliem";

  }
  if (passw.value != passw2.value) {
    text[1] = "Parolem jabut vienadiem";
  }

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "" || country.value == "" || checked == false) {
      text[2] = "Visi lauki jabut aizpilditi.";
    }

  }
  if (text[0] != "" || text[1] != "" || text[2] != "") {
    alert(text[0] + "\n" + text[1] + "\n" + text[2]);
    document.getElementById('typePassword').value = "";
    document.getElementById('typePasswordRepeat').value = "";
  } else{
    alert("Registration is successfull");
    document.getElementById('typePassword').value = "";
    document.getElementById('typePasswordRepeat').value = "";
  }


  // for (i = 0;i<document.querySelectorAll('.obligate').values.length;i++){
  //  if (document.querySelectorAll('.obligate').values[i] == ""){
  //   alert('Aizpildit obligatos laukus');}
  //  }
}



function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.12),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
