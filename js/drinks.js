// alert("uyghf");
$(document).ready(function(){
  // Initialize Tooltip
  // $('[data-toggle="tooltip"]').();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
$(document).ready(function(){

  $(".success").click(function(){
  alert("this meal is not availble for now");
});
})
var domainroot="InstaFood-App/african.html"

var searchaction=[ //form action for the 3 search engines
"http://www.google.com/search",
"http://search.yahoo.com/search",
"http://search.msn.com/results.aspx"
]

var queryfieldname=["q","p","q"] //name of hidden query form for the 3 search engines

function switchaction(cur, index){
cur.form.action=searchaction[index]
document.getElementById("hiddenquery").name=queryfieldname[index]
}

function jksitesearch(curobj){
for (i=0; i< document.jksearch.se.length; i++){ //loop through radio to see which is checked
if (document.jksearch.se[i].checked==true)
switchaction(document.jksearch.se[i], i)
}
document.getElementById("hiddenquery").value="site:"+domainroot+" "+curobj.qfront.value
}
