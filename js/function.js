// For colsub3li
function amn_res() {
	if($(window).width() < 768) {
	document.getElementById("amenityres").style.display = "block";
    document.getElementById("amenityapt").style.display = "none";
    document.getElementById("amenitypriv").style.display = "none";
	document.getElementById("amnres").style.color = "#ffffff";
    document.getElementById("amnapt").style.color = "#cccccc";
    document.getElementById("amnpriv").style.color = "#cccccc";
	}
}
function amn_apt() {
	if($(window).width() < 768) {
	document.getElementById("amenityres").style.display = "none";
    document.getElementById("amenityapt").style.display = "block";
    document.getElementById("amenitypriv").style.display = "none";
	document.getElementById("amnres").style.color = "#cccccc";
    document.getElementById("amnapt").style.color = "#ffffff";
    document.getElementById("amnpriv").style.color = "#cccccc";
	}
}
function amn_priv() {
	if($(window).width() < 768) {
	document.getElementById("amenityres").style.display = "none";
    document.getElementById("amenityapt").style.display = "none";
    document.getElementById("amenitypriv").style.display = "block";
	document.getElementById("amnres").style.color = "#cccccc";
    document.getElementById("amnapt").style.color = "#cccccc";
    document.getElementById("amnpriv").style.color = "#ffffff";
	}
}

// Match Height
(function() {
	/* matchHeight example */
	$(function() {
		var byRow = $('body').hasClass('test-rows');
		// apply matchHeight to each item container's items
		$('.items-container').each(function() {
			$(this).children('.htitem').matchHeight({
				byRow: byRow
			});
		});
		
		
		var byRow = $('body').hasClass('test-rows');
		// apply matchHeight to each item container's items
		$('.items-container2').each(function() {
			$(this).children('.htitem2').matchHeight({
				byRow: byRow
			});
		});
		// test target
		$('.target-items').each(function() {
			$(this).children('.item-1').matchHeight({
				target: $(this).find('.item-0')
			});
		});
	});
})();


// Tabs
function openAmenity(evt, amenityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("amenity");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" colwhite", "");
  }
  document.getElementById(amenityName).style.display = "block";
  evt.currentTarget.className += " colwhite";
  
  $("div#viewsScrollable").smoothDivScroll({
		autoScrollingMode: "onStart",
		autoScrollingPauseOnHover: false,
		autoScrollingDirection: "backAndForth",
		hotSpotScrolling: true,
		hotSpotScrollingStep: 1,
		visibleHotSpotBackgrounds: "always",
		touchScrolling: true,
	});
  
  $("div#viewsScrollable2").smoothDivScroll({
		autoScrollingMode: "onStart",
		autoScrollingPauseOnHover: false,
		autoScrollingDirection: "backAndForth",
		hotSpotScrolling: true,
		hotSpotScrollingStep: 1,
		visibleHotSpotBackgrounds: "always",
		touchScrolling: true,
	});
  
  $("div#viewsScrollable3").smoothDivScroll({
		autoScrollingMode: "onStart",
		autoScrollingPauseOnHover: false,
		autoScrollingDirection: "backAndForth",
		hotSpotScrolling: true,
		hotSpotScrollingStep: 1,
		visibleHotSpotBackgrounds: "always",
		touchScrolling: true,
	});
  
  $("div#viewsScrollable4").smoothDivScroll({
		autoScrollingMode: "onStart",
		autoScrollingPauseOnHover: false,
		autoScrollingDirection: "backAndForth",
		hotSpotScrolling: true,
		hotSpotScrollingStep: 1,
		visibleHotSpotBackgrounds: "always",
		touchScrolling: true,
	});
}


// Floorplans
function openfloorplan() {
  document.getElementsByClassName(flrplanlinks).style.color = "white";
}


// For Slider
$(document).ready(function () {
	// None of the options are set
	$('.show1').click(function(){
		$('#pop1').simplePopup();
	}); 
	$('.show2').click(function(){
		$('#pop2').simplePopup();
	}); 
	

	if($(window).width() < 1024) { 
	   $(".divamntli > li").addClass("height100");
	} 
		
	if($(window).width() < 768) { 
	   $(".mediacontli > li").addClass("height100");
	} 

	
/*	$(window).resize(function() {
        $("#divimagecontainer").height($(window).height() - $("#diviccheader").height() - $("#divamntheading").height() -40);  // 40 subtracted for padding:20px 0; of divamntspan & divinimagecont
        $("#divicccontainer").height($(window).height() - $("#diviccheader").height() - 40); 
    }).resize();*/
	
	
});

/*$(window).on('resize', function () { location.reload(); });  */