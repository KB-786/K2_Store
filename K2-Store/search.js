$(document).ready(function(){
$("#search").on("blur",function(){
$("#search_list").hide();
});
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
	if(value!=null)
	    $("#search_list").show();
		if(value==null)
		$("#search_list").hide();
		

	
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
});
