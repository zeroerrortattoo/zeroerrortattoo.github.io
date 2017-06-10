
$(window).on("scroll",function(){

		if($("#welcome").is(":visible")){
			$("#welcome").addClass("animated bounceInLeft");			
		}
	});
$(window).on("scroll",function(){
		if($("#colmd").is(":visible")){
			$("#colmd").addClass("animated bounceInRight");
		}
	});
$(window).on("scroll",function(){
		var scroll= $(window).scrollTop()
		$("#about").hide();
		if(scroll>=438){
			$("#about").show();
			$("#about").addClass("animated flipInX");
		}
		});
$(window).on("scroll",function(){
		var scroll= $(window).scrollTop()
		$("#bigimage").hide();
		if(scroll>=490){
			$("#bigimage").show();
			$("#bigimage").addClass("animated bounceIn");
		}
		});

$(window).on("scroll",function(){
		var scroll= $(window).scrollTop()

		for(i=1;i<=4;i++){

			$("#"+i).hide();
			if(scroll>=1706){
			$("#"+i).show();
			$("#"+i).addClass("animated rotateInUpRight");
			}
		}		
		for(i=5;i<=8;i++){

			$("#"+i).hide();
			if(scroll>=1856){
			$("#"+i).show();
			$("#"+i).addClass("animated rotateInUpLeft");
			}
		}
		for(i=9;i<=12;i++){

			$("#"+i).hide();
			if(scroll>=2100){
			$("#"+i).show();
			$("#"+i).addClass("animated rotateInUpRight");
			}
		}
				
		});
$(window).on("scroll",function(){
		var scroll= $(window).scrollTop()
		$("#belownav").hide();
		if(scroll>=2396){
			$("#belownav").show();
			$("#belownav").addClass("animated bounceIn");
		}
		});

$(window).on("scroll",function(){
	var scroll= $(window).scrollTop()
	if(scroll<=5000){
		$("i").not($("#add")).addClass("animated infinite swing");
		}
});

