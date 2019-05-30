$(document).ready(function(){
  		$(".photoSearch").on("keyup", function() {
    		var value = $(this).val().toLowerCase().split(" ");
    		$("[data-caption]").filter(function() {
    			var searchCaption = $(this).attr("data-caption").toLowerCase();
    			var isInSearch = true;
    			value.forEach(function(searchWord) {
    				if (searchCaption.indexOf(searchWord) <= -1)
    					isInSearch = false;
    				});
      			$(this).toggle(isInSearch);
    		});
  		});
	});
