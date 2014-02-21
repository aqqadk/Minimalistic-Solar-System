
$(document).ready(function(){
	$("#mercury_info").hide();
	$("#venus_info").hide();
	$("#earth_info").hide();
	$("#mars_info").hide();
	$("#ceres_info").hide(); /*Fix to Hide*/
	$("#jupiter_info").hide();
	$("#saturn_info").hide();
	$("#uranus_info").hide();
	$("#neptune_info").hide();
	
	
	$( ".stop" ).on( "click", function(){
	  $( ".mercury-orbit" ).css( "animation", "none" );
	  $( ".mercury-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".venus-orbit" ).css( "animation", "none" );
	  $( ".venus-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".earth-orbit" ).css( "animation", "none" );
	  $( ".earth-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".mars-orbit" ).css( "animation", "none" );
	  $( ".mars-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".ceres-orbit" ).css( "animation", "none" );
	  $( ".ceres-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".jupiter-orbit" ).css( "animation", "none" );
	  $( ".jupiter-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".saturn-orbit" ).css( "animation", "none" );
	  $( ".saturn-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".uranus-orbit" ).css( "animation", "none" );
	  $( ".uranus-orbit" ).css( "-webkit-animation", "none" );
	  
	  $( ".neptune-orbit" ).css( "animation", "none" );
	  $( ".neptune-orbit" ).css( "-webkit-animation", "none" );
	});
	
	$( ".play" ).on( "click", function(){
	  $( ".mercury-orbit" ).css( "animation", "spin-left 8s linear infinite" );
	  $( ".mercury-orbit" ).css( "-webkit-animation", "spin-left 8s linear infinite" );
	  
	  $( ".venus-orbit" ).css( "animation", "spin-left 9s linear infinite" );
	  $( ".venus-orbit" ).css( "-webkit-animation", "spin-left 9s linear infinite" );
	  
	  $( ".earth-orbit" ).css( "animation", "spin-left 10s linear infinite" );
	  $( ".earth-orbit" ).css( "-webkit-animation", "spin-left 10s linear infinite" );
	  
	  $( ".mars-orbit" ).css( "animation", "spin-left 15s linear infinite" );
	  $( ".mars-orbit" ).css( "-webkit-animation", "spin-left 15s linear infinite" );
	  
	  $( ".ceres-orbit" ).css( "animation", "spin-left 30s linear infinite" );
	  $( ".ceres-orbit" ).css( "-webkit-animation", "spin-left 30s linear infinite" );
	  
	  $( ".jupiter-orbit" ).css( "animation", "spin-left 70s linear infinite" );
	  $( ".jupiter-orbit" ).css( "-webkit-animation", "spin-left 70s linear infinite" );
	  
	  $( ".saturn-orbit" ).css( "animation", "spin-left 85s linear infinite" );
	  $( ".saturn-orbit" ).css( "-webkit-animation", "spin-left 85s linear infinite" );
	  
	  $( ".uranus-orbit" ).css( "animation", "spin-left 90s linear infinite" );
	  $( ".uranus-orbit" ).css( "-webkit-animation", "spin-left 90s linear infinite" );
	  
	  $( ".neptune-orbit" ).css( "animation", "spin-left 95s linear infinite" );
	  $( ".neptune-orbit" ).css( "-webkit-animation", "spin-left 95s linear infinite" );
	});
	
	
	$( ".off" ).on( "click", function(){
	  $( ".mercury-orbit" ).css( "border-radius", "none" );
	  $( ".mercury-orbit" ).css( "border", "none" );
	  
	  $( ".venus-orbit" ).css( "border-radius", "none" );
	  $( ".venus-orbit" ).css( "border", "none" );
	  
	  $( ".earth-orbit" ).css( "border-radius", "none" );
	  $( ".earth-orbit" ).css( "border", "none" );
	  
	  $( ".mars-orbit" ).css( "border-radius", "none" );
	  $( ".mars-orbit" ).css( "border", "none" );
	  
	  $( ".ceres-orbit" ).css( "border-radius", "none" );
	  $( ".ceres-orbit" ).css( "border", "none" );
	  
	  $( ".jupiter-orbit" ).css( "border-radius", "none" );
	  $( ".jupiter-orbit" ).css( "border", "none" );
	  
	  $( ".saturn-orbit" ).css( "border-radius", "none" );
	  $( ".saturn-orbit" ).css( "border", "none" );
	  
	  $( ".uranus-orbit" ).css( "border-radius", "none" );
	  $( ".uranus-orbit" ).css( "border", "none" );
	  
	  $( ".neptune-orbit" ).css( "border-radius", "none" );
	  $( ".neptune-orbit" ).css( "border", "none" );
	});
	
	$( ".on" ).on( "click", function(){
	  $( ".mercury-orbit" ).css( "border-radius", "50%" );
	  $( ".mercury-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".venus-orbit" ).css( "border-radius", "50%" );
	  $( ".venus-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".earth-orbit" ).css( "border-radius", "50%" );
	  $( ".earth-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".mars-orbit" ).css( "border-radius", "50%" );
	  $( ".mars-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".ceres-orbit" ).css( "border-radius", "50%" );
	  $( ".ceres-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".jupiter-orbit" ).css( "border-radius", "50%" );
	  $( ".jupiter-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".saturn-orbit" ).css( "border-radius", "50%" );
	  $( ".saturn-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".uranus-orbit" ).css( "border-radius", "50%" );
	  $( ".uranus-orbit" ).css( "border", "1px dotted gray" );
	  
	  $( ".neptune-orbit" ).css( "border-radius", "50%" );
	  $( ".neptune-orbit" ).css( "border", "1px dotted gray" );
	});
	
$(".close").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});	
	
$("#mercury_link").click(function(){
	$("#mercury_info").fadeIn("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#venus_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeIn("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#earth_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeIn("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#mars_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeIn("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#ceres_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeIn("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});


$("#jupiter_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeIn("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#saturn_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeIn("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#uranus_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeIn("slow");
	$("#neptune_info").fadeOut("slow");
});

$("#neptune_link").click(function(){
	$("#mercury_info").fadeOut("slow");
	$("#venus_info").fadeOut("slow");
	$("#earth_info").fadeOut("slow");
	$("#mars_info").fadeOut("slow");
	$("#ceres_info").fadeOut("slow");
	$("#jupiter_info").fadeOut("slow");
	$("#saturn_info").fadeOut("slow");
	$("#uranus_info").fadeOut("slow");
	$("#neptune_info").fadeIn("slow");
});



});