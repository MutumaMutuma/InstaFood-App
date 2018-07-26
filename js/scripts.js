function readURL(input) {  if (input.files && input.files[0]) {
    var reader = new FileReader();
      reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);      $('#blah').hide();
      $('#blah').fadeIn(650);    }
       reader.readAsDataURL(input.files[0]);
  }
 }$("#imgInp").change(function() {
  readURL(this);
 });
 function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text(""); if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
    }$("#validate").bind("click", validate);
