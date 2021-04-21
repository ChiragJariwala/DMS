/*
*** Script List****
1. Back to Top Scroll
2. Overlay Click
3. Menu Click
4. Menu Close 
*** Function ****
B. Equal Height
C. Header Sticky Padding
D. Footer Accordian
E. Footer Sticky Height
F. isNumberKey
G. Middle Content minimum height
H. Custom Scroll
I. Span Select Dropdown 
J. Smooth Scroll
K. Hash Smoth Scroll
R. Outside Click
S. Testimonial Slider
T. Keypress Number Only
U. Patners Slider
V. Service Offer Accordian
W. Service Faq Accordian
X. Find Sub Menu and Sub menu Click
Y. Resize
Z. File Upload
AA. Read More Read Less
AB. Carrer Read More Read Less
AC. Carrer Page Accordian
AD. Client Slider
AE. Counter on scroll
AF. Carrer Slider
AG. Contact US Slider
AH. Video Play Click
*/
/**********************************| Document Ready Start |****************************/
$(document).ready(function () {

check_country();

	setTimeout(function() {
	},350);
	footerAcco();
	cstScroll();
	smothScroll();
	outsideClick();
	testimonialSlider();
	keypressNumberOnly();
	// patnersSilder();
	serviceOfferAcco();
	servieFaqAcco();
	li_has_submenu();
	fileUpload();
	read_more_less();
	carrer_read_more_less();
	uiuxdesigner_knowmore_less();
	carrerAcco();
	ourClientSlider();
	carrerImgSlider();
	contactUsImgMainSider();
	videoPlayClick();
	Countnumber();
	fliterTabDropdown()
	serviceexpertAcco()
	radioclick()
	/*--------| 1. Back to Top Scroll |------------*/
	$('.back-to-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
	/*--------| 2. Overlay Click |------------*/
	$(".overlay").click(function () {		
		$('body').removeClass('fixbody');		
		$('.menuDiv').removeClass('openMenu');
		$('.menuIcon').removeClass('menuCloseActive');
		$('.menuClose').removeClass('menuCloseActive');
	});
	/*--------| 3. Menu Click |------------*/
	$('.menuIcon').click(function() {
		$('.menuDiv').toggleClass('openMenu');
		$('.menuIcon').toggleClass('menuCloseActive');
		$('.menuClose').toggleClass('menuCloseActive');
		$('body').toggleClass('fixbody');
	});
	/*--------| 4. Menu Close |------------*/
	$('.menuClose').click(function() {
		$('body').removeClass('fixbody');
		$('.menuDiv').removeClass('openMenu');
		$('.menuIcon').removeClass('menuCloseActive');
		$('.menuClose').removeClass('menuCloseActive');
	});
});
/**********************************| Document Ready End |****************************/
/**********************************| Window Load Start |****************************/
$(window).on('load',function () {
	equalheight('.eqheight');  		  	
	middleContent();
	hStickyPadd();
	ftStickyHeight();
	hasSmothScroll();
});
/**********************************| Window Load End |****************************/
/**********************************| Window Resize Start |****************************/
$(window).resize(function () {
	equalheight('.eqheight');	
	ftStickyHeight(); 
	setTimeout(function() {
		middleContent();
		hStickyPadd();
		resize();
	},360);	
});
/**********************************| Window Resize End |****************************/
/**********************************| Window Scroll Start |****************************/
$(window).scroll(function(){
	cstScroll();
	setTimeout(function() {
		hStickyPadd();  
	},350);
	counterScroll();
});
/**********************************| Window Scroll End |****************************/
/* ------| B. Equal Height |--------- */
equalheight = function(container){
	var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;
	$(container).each(function() {
		$el = $(this);
		$($el).height('auto');
		topPostion = $el.position().top;
		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
/* ------| C. Header Sticky Padding |--------- */
function hStickyPadd() {    
	var hHeight = $('header.header').outerHeight();
	$('.headerPadd').css("height",hHeight);
}
/* ------| D. Footer Accordian |--------- */
function footerAcco(){ 
	$('.ft_title').click(function() {
		var header_height = $('.header').outerHeight();
		if ($(this).hasClass('footerMinus')) {
			$(this).next().slideUp();
			$(this).removeClass('footerMinus');
		} else {      
			$('.ft_title').removeClass('footerMinus');
			$(this).addClass('footerMinus');
			$('.ft_body').slideUp();
			$(this).next().slideDown();
			/*setTimeout(function() {
				$("html,body").animate({
					scrollTop: $('.footerMinus').offset().top - header_height
				}, "slow");
			}, 1000);*/
		}
	});
}
/* ----------| E. Footer Sticky Height |----------- */
function ftStickyHeight() {
	if ($(window).width() < 768) {
		var marginBottom = $(".footerStiky").outerHeight(); 
		$(".copyRightDiv").css("margin-bottom",marginBottom+"px");
	}
	else{
		$(".copyRightDiv").css("margin-bottom","0px");   
	}
}
/*---------| F. isNumberKey |----------------*/
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if ((charCode < 48 || charCode > 57))
		return false;
	return true;
}
/* ---------| G. Middle Content minimum height |----------- */
function middleContent() {
	var height = $(window).height() - ($(".header").outerHeight() + $(".footer").outerHeight()); 
	$(".contentMainSec").css("min-height",height+"px");  
}
/*-----------| H. Custom Scroll  |-----------*/  
var scroll = $(document).scrollTop();
function cstScroll()
{
	if ($(this).scrollTop() > 40) {
		$('.headerfixed').addClass('header_scroll')
	} else {
		$('.headerfixed').removeClass('header_scroll');
	}
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').addClass('show');
	} else {
		$('.back-to-top').removeClass('show');
	}
	var scrolled = $(document).scrollTop();
	if (scrolled > scroll){
		/*scrolling down*/
		$('.header').removeClass('hFixed');
	} else {
		/*scrolling up*/
		$('.header').addClass('hFixed');
	}          
	if (scrolled == 0){
		$('.header').removeClass('hFixed');
	}     
	scroll = $(document).scrollTop();
}
/* ------| I. Span Select Dropdown |--------- */
function setSpanValue(drp) {
	var str = "";
	var id = drp.attr("id");
	str = $("#" + id + " option:selected").text();
	$("." + id).text(str);
}
/* ---------|  J. Smooth Scroll |---------- */
function smothScroll(){
	$('.smothScroll, a[href^="#"]').click(function(){
		var hedheight = $('header.header').height();
		var targetDiv = $(this).attr('href');
		var pos = $(targetDiv).offset().top;
		$('html, body').animate({
			scrollTop: pos - hedheight
		}, 1000);        
		return false;
    /*if (this.hash !== "") {    
      event.preventDefault();   
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
  }*/
}); 
}
/* ---------|  K. Hash Smoth Scroll |---------- */
function hasSmothScroll(){
	var url = window.location.href;
	url = url.split('#');
	$('#select_position option[value="'+decodeURI(url[1])+'"]').attr('selected','selected');

	if(window.location.hash) {
		var hash = window.location.hash;
		var hedheight1 = $('header.header').height();
		$('html, body').animate({
			scrollTop: $(hash).offset().top - hedheight1
		}, 1500, 'swing');		
	}
}
/* ------| R. Outside Click |--------- */
function outsideClick() {
	var $win = $(window); /* or $box parent container */
	var $box = $(".header");/* unclickebal area */
	$win.on("click.Bst", function(event){    
		if ( 
			$box.has(event.target).length == 0 /* checks if descendants of $box was clicked*/
			&&
			!$box.is(event.target) /* checks if the $box itself was clicked */
			){
			/* click out side */
		$('body').removeClass('fixbody');
		if ($(window).width() <= 767 ) {
			$('body').removeClass('fixbody');
		}
	}  
});  
}
/* ------| S. Testimonial Slider |--------- */
function testimonialSlider(){
	if($('.testimonialSlider').length > 0){
		$('.testimonialSlider').slick({
			dots: false,
			arrows:true,
			appendArrows:'.testi-arrow',
			infinite: true,
			speed: 1000,
			autoplaySpeed: 1000,
			fade: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,			
		});
	}
}
/* ------| T. Keypress Number Only |--------- */
function keypressNumberOnly(){
	$( ".numberOnly" ).keypress(function(evt) {
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 8){
			return false;}
			if (charCode == 46){
				return false;
			}
			return true;
		});
}
/* ------| U. Patners Slider |--------- */
/*function patnersSilder(){
	if($('.patnersSilder').length > 0){
		$('.patnersSilder').slick({
			dots: false,
			arrows:true,
			appendArrows:'.patners-arrow',
			infinite: true,
			speed: 2500,
			autoplaySpeed: 2500,
			slidesToShow: 5,
			slidesToScroll: 5,
			adaptiveHeight: true,
			responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    }
		  ]			
		});
	}
}*/
/* ------| V. Service Offer Accordian |--------- */
function serviceOfferAcco(){ 
	$('.serviceOfferAcco .serviceOfferTitle').click(function() {
		var header_height = $('.header').outerHeight();
		if ($(this).hasClass('accoMinus')) {
			$(this).next().slideUp();
			$(this).removeClass('accoMinus');
		} else {      
			$('.serviceOfferAcco .serviceOfferTitle').removeClass('accoMinus');
			$(this).addClass('accoMinus');
			$('.serviceOfferAcco .serviceOfferUlDesc').slideUp();
			$(this).next().slideDown();
			/*setTimeout(function() {
				$("html,body").animate({
					scrollTop: $('.accoMinus').offset().top - header_height - 10
				}, "slow");
			}, 1000);*/
		}
	});
}

/* ------| W. Service Faq Accordian |--------- */
function servieFaqAcco(){ 
	$('.serviceFAQ:first-child .serviceFAQQues').addClass('accoMinus');
	$('.serviceFAQ:first-child .serviceFAQAns').show();
	$('.servieFaqAcco .serviceFAQQues').click(function() {
		var header_height = $('.header').outerHeight();
		if ($(this).hasClass('accoMinus')) {
			$(this).next().slideUp();
			$(this).removeClass('accoMinus');
		} else {      
			$('.servieFaqAcco .serviceFAQQues').removeClass('accoMinus');
			$(this).addClass('accoMinus');
			$('.serviceFAQAns').slideUp();
			$(this).next().slideDown();
			/*setTimeout(function() {
				$("html,body").animate({
					scrollTop: $('.accoMinus').offset().top - header_height - 10
				}, "slow");
			}, 1000);*/
		}
	});
}

/* ------| X. Find Sub Menu and Sub menu Click |--------- */
function li_has_submenu(){	
	$('ul.topMenu li:has(ul)').addClass('li_has_submenu');
	if($('.topMenu > li').children("ul").length > 0) {
		$(".topMenu > li > ul").parent('li').append("<span class='cstMenuDrpArrow'><i class='fa fa-angle-down' aria-hidden='true'></i></span>");
		if ($(window).width() <= 1119) {
			$(".cstMenuDrpArrow").on('click',function(){
				if($(this).parent().hasClass("openSubmenu")){
					$(this).parent().removeClass("openSubmenu");
					$(this).siblings('.sub-menu').hide();
				}else{
					$(".cstMenuDrpArrow").parent().removeClass("openSubmenu");
					$('.cstMenuDrpArrow').siblings('.sub-menu').hide();
					$(this).parent().addClass("openSubmenu");
					$(this).siblings('.sub-menu').show();
				}
			});
		}
	}
}

/* ------| Y. Resize |--------- */
function resize(){
	$('body').removeClass('fixbody');
	$('.menuDiv').removeClass('openMenu');
	$('.topMenu > li').removeClass('openSubmenu');
	$('.menuIcon').removeClass('menuCloseActive');
	$('.sub-menu').hide();
}

/* --------- | Z. File Upload |------------*/ 
function fileUpload(){
	$('#file').bind('change', function () {
		var filename = $("#file").val();
		if (/^\s*$/.test(filename)) {
			$(".file-upload").removeClass('active');
			$("#noFile").text("Attachment Here"); 
		}
		else {
			$(".file-upload").addClass('active');
			$("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
		}
	});
}

/* --------- | AA. Read More Read Less |------------*/ 
function read_more_less(){
	$('.readMoreClick').click(function() {
		$('.morePeopleDiv').slideToggle();
		if ($('.readMoreClick').text() == "View All") {
			$(this).text("View less");
			$(this).prop('title', 'View Less');
		} else {
			$(this).text("View All")
			$(this).prop('title', 'View All');
		}
	});
}


/* --------- | AB. Carres Read More Read Less |------------*/ 
function carrer_read_more_less(){
/*	var maxL = 200;
	$(".joinUsContent.joinUsReadML").each(function () {
		var text = $(this).html();
		if (text.length > maxL) {
			var begin = text.substr(0, maxL),
			end = text.substr(maxL);

			$(this).html(begin).append($('<span class="hidden" />').html(end));
			$(this).append($('<div class="readMoreWith"><a href="javascript:void(0);" class="readMoreWithArrow readMoreClick" title="Read More">Read More</a><div>'))
		}
	});

	$(document).on("click", ".readMoreClick", function () {
		$(this).parents().prev(".hidden").toggle(function(){
			if ($(this).is(':visible')){
				$(this).css('display','inline');        
			}
		}); 
		if($(this).text() == "Read More"){
			$(this).text("Read Less");    
			$(this).prop("title", "Read Less");    
		} else {
			$(this).text("Read More");    
			$(this).prop("title", "Read More");    
		}
	});*/
	   
    var showChar = 150;  
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";
    

    $('.joinUsContent.joinUsReadML p').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span><div class="readMoreWith"><a href="" class="readMoreWithArrow readMoreClick" title="' + moretext + '">' + moretext + '</a><div></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".readMoreClick").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}


/* --------- | AB. UI/UX Designer More Read Less |------------*/ 
function uiuxdesigner_knowmore_less(){

    var showChar = 108;  
    var ellipsestext = "";
    var moretext = "KNOW MORE";
    var lesstext = "KNOW lESS";
    

    $('.serviceOfferUlDesc.serviceReadML p').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span><div class="readMoreWith"><a href="" class="knowmorelink readMoreClick" title="' + moretext + '">' + moretext + '</a><div></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".readMoreClick").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}

/* ------| AC. Carrer Page Accordian |--------- */
function carrerAcco(){ 
	$('.carrerDeescAccoDiv:first-child .carrerDeescAccoTitle').addClass('accoMinus');
	$('.carrerDeescAccoDiv:first-child .carrerDeescAccoDEsc').show();
	$('.carrerDeescAccoDiv .carrerDeescAccoTitle').click(function() {
		var header_height = $('.header').outerHeight();
		if ($(this).hasClass('accoMinus')) {
			$(this).next().slideUp();
			$(this).removeClass('accoMinus');
		} else {      
			$('.carrerDeescAccoDiv .carrerDeescAccoTitle').removeClass('accoMinus');
			$(this).addClass('accoMinus');
			$('.carrerDeescAccoDiv .carrerDeescAccoDEsc').slideUp();
			$(this).next().slideDown();
			/*setTimeout(function() {
				$("html,body").animate({
					scrollTop: $('.accoMinus').offset().top - header_height - 10
				}, "slow");
			}, 1000);*/
		}
	});
}

/* ------| AD. Client Slider |--------- */
function ourClientSlider(){
	if($('.ourClientSlider').length > 0){
		$('.ourClientSlider').slick({
			dots: true,
			arrows:false,			
			infinite: true,
			speed: 2500,
			autoplaySpeed: 2500,			
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplay:true,
			rows:2,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},			    
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}
			]
		});
	}
}

/*--------| AE. Counter on scroll |------------*/
function counterScroll(){
	if(jQuery('.counterDiv').length > 0){
		var a = 0;

		var oTop = $('.counterDiv').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
            //alert('finished');
        }

    });
			});
			a = 1;
		}
	}
}

/* ------| AF. Carrer Slider |--------- */
function carrerImgSlider(){
	if($('.carrerImgSlider').length > 0){
		$('.carrerImgSlider').slick({
			dots: false,
			arrows:false,			
			infinite: true,
			slidesToShow: 3,			
			speed: 2500,
			//autoplaySpeed: 0,
			autoplaySpeed: 2500,				
			autoplay: true,
			slidesToScroll:1,
			//cssEase: 'linear',
			pauseOnFocus:false,
			pauseOnHover:false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,			        
				}
			},			    
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,			        
				}
			}
			]
		});
	}
}

/* ------| AG. Contact US Slider |--------- */
function contactUsImgMainSider(){
	if($('.contactUsImgMainSider').length > 0){
		$('.contactUsImgMainSider').slick({
			dots: false,
			arrows:false,			
			infinite: true,
			speed: 2500,
			autoplaySpeed: 2500,
			// autoplaySpeed: 0,			
			slidesToShow: 2,			
			slidesToScroll:1,
			autoplay: true,
			//cssEase: 'linear',
			pauseOnFocus:false,
			pauseOnHover:false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,			        
				}
			},			    
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,			        
				}
			}
			]
		});
	}
}

/*--------| AH. Video Play Click |------------*/
function videoPlayClick(){
	$(document).on('click','.js-videoPoster',function(e) {
		e.preventDefault();
		var poster = $(this);
		var wrapper = poster.closest('.js-videoWrapper');
		videoPlay(wrapper);
	});
}

/* ------| K. videoPlay |------*/
function videoPlay(wrapper) {
	var iframe = wrapper.find('.js-videoIframe');
	var src = iframe.data('src');
	wrapper.addClass('videoWrapperActive'); 
	iframe.attr('src',src);
}


function submitHubForm(e,url,formObj,key,divCont){
	e.preventDefault(); 
	if(!divCont || divCont == "undefined")
		divCont = "";
	$(".cstbtn").prop('disabled', true);
	$(".cstbtn").html('Please wait...');

	if ($('#file').length != 0) {
		var file = $('#file').get(0).files[0];
		var formData = new FormData();
		formData.append('file', file);
		formData.append('data', $(formObj).serialize());
		$.ajax({
			url: url + "?formid=" + key,
			type: 'POST',
			data: formData,
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			success: function (data) {
			//alert(data);
			  // console.log(data);
			  data = JSON.parse(data);	
			  if(data.status && data.status == "error"){
			  	for(var i=0;i<data.errors.length;i++){
			  		var arrMsg = data.errors[i].message.split(". ");
			  		var arrId = arrMsg[0].split(".");
			  		var fieldId = arrId[1].replace("'","") + "_error";
			  		
			  		if(divCont == ""){
			  			$("#" + fieldId).html(arrMsg[1]);
			  			$("#" + fieldId).css("display","block");
			  		}else{
			  			$('#'+ divCont).find("#" + fieldId).html(arrMsg[1]);
			  			$('#'+ divCont).find("#" + fieldId).css("display","block");
			  		}
			  	}
			  }
			  else{
			  	formObj.reset();
			  	$('#file').empty();
			  	$(".error").css("display","none");
			   // alert("Your enquiry has been sent");	// Display thank you popup
			   var thankyou_page =  $('#'+ divCont).find("#thankyou_url").attr('value');
			   window.location.replace(thankyou_page);
			   // $("#thank-you").addClass('popVisible');
			   $("#pdf-download").removeClass('popVisible');
			   
			   
			}
			
			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');
			
		},
		error: function (data) {
			alert("Network issue");
			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');
		},
		
	});
	}else{
		var formData = $(formObj).serialize();

		$.ajax({
			url: url + "?formid=" + key,
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
			//alert(data);
			  // console.log(data);
			  data = JSON.parse(data);	
			  if(data.status && data.status == "error"){
			  	for(var i=0;i<data.errors.length;i++){
			  		var arrMsg = data.errors[i].message.split(". ");
			  		var arrId = arrMsg[0].split(".");
			  		var fieldId = arrId[1].replace("'","") + "_error";

			  		if(divCont == ""){
			  			$("#" + fieldId).html(arrMsg[1]);
			  			$("#" + fieldId).css("display","block");
			  		}else{
			  			$('#'+ divCont).find("#" + fieldId).html(arrMsg[1]);
			  			$('#'+ divCont).find("#" + fieldId).css("display","block");
			  		}
			  	}
			  }
			  else{
			  	formObj.reset();
			  	$(".error").css("display","none");
			    //alert("Your enquiry has been sent");	// Display thank you popup
			  // $("#thank-you").addClass('popVisible');
			   // console.log($(this).find('#thankyou_url').val());
			   var thankyou_page =  $('#'+ divCont).find("#thankyou_url").attr('value');
			   window.location.replace(thankyou_page);
			   $("#pdf-download").removeClass('popVisible');

			}

			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');

		},
		error: function (data) {
			alert("Network issue");
			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');
		},

	});
	}

}



function submitHubForm_price(e,url,formObj,key,divCont){
	e.preventDefault(); 
	if(!divCont || divCont == "undefined")
		divCont = "";
	$(".cstbtn").prop('disabled', true);
	$(".cstbtn").html('Please wait...');

	var pdfurl='';
	var did = $("#url").val();
	if(divCont == "")
	{
		var did = $("#url").val();
		var path = $("#path").val();
		var country = $("#country").val();

		var countrytext='au'; 
 		
 		if(country=="au" || country=="aus"){
			countrytext='au';			
		}else {
			countrytext='us';			
		}
		
		
		if(did=="1"){
			pdfurl=path+"/pdf/"+countrytext+"/Pricing PDF_PPC.pdf";
			window.location.replace(path+"/pricing-ppc-thank-you");
		}
		if(did=="2"){
			pdfurl=path+"/pdf/"+countrytext+"/Pricing PDF_Design Services.pdf";
			window.location.replace(path+"/pricing-design-thank-you");
		}
		if(did=="3"){
			pdfurl=path+"/pdf/"+countrytext+"/Pricing PDF_Web Dev Services.pdf";
			window.location.replace(path+"/pricing-web-dev-thank-you");
		}
		if(did=="4"){
			pdfurl=path+"/pdf/"+countrytext+"/Pricing PDF_Remote Services.pdf";
			window.location.replace(path+"/pricing-remote-staff-thank-you");
		}
		if(did=="5"){
			pdfurl=path+"/pdf/"+countrytext+"/Pricing PDF_SEO Services.pdf";
			window.location.replace(path+"/pricing-seo-thank-you");
		}
		if(did=="6"){
			pdfurl=path+"/pdf/"+countrytext+"/Pricing PDF_All Services.pdf";
			window.location.replace(path+"/pricing-allinone-thank-you");
		}
	}


	if ($('#file').length != 0) {
		var file = $('#file').get(0).files[0];
		var formData = new FormData();
		formData.append('file', file);
		formData.append('data', $(formObj).serialize());
		$.ajax({
			url: url + "?formid=" + key,
			type: 'POST',
			data: formData,
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			success: function (data) {
			//alert(data);
			  // console.log(data);
			  data = JSON.parse(data);	
			  if(data.status && data.status == "error"){
			  	for(var i=0;i<data.errors.length;i++){
			  		var arrMsg = data.errors[i].message.split(". ");
			  		var arrId = arrMsg[0].split(".");
			  		var fieldId = arrId[1].replace("'","") + "_error";
			  		
			  		if(divCont == ""){
			  			$("#" + fieldId).html(arrMsg[1]);
			  			$("#" + fieldId).css("display","block");
			  		}else{
			  			$('#'+ divCont).find("#" + fieldId).html(arrMsg[1]);
			  			$('#'+ divCont).find("#" + fieldId).css("display","block");
			  		}
			  	}
			  }
			  else{
			  	formObj.reset();
			  	$('#file').empty();
			  	$(".error").css("display","none");
			   // alert("Your enquiry has been sent");	// Display thank you popup
			   // $("#thank-you").addClass('popVisible');
			   // console.log(did);
			   // price_redirect_thankyou();

			   // var thankyou_page_price =  $('#'+ divCont).find("#thankyou_url").attr('value');
			   // window.location.replace(thankyou_page_price);
			   $("#pdf-download").removeClass('popVisible');
			   if(pdfurl!=""){
			   	window.open(pdfurl, '_blank');	
			   }
			   
			}
			
			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');
			
		},
		error: function (data) {
			alert("Network issue");
			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');
		},
		
	});
	}else{
		var formData = $(formObj).serialize();

		$.ajax({
			url: url + "?formid=" + key,
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
			//alert(data);
			  // console.log(data);
			  data = JSON.parse(data);	
			  if(data.status && data.status == "error"){
			  	for(var i=0;i<data.errors.length;i++){
			  		var arrMsg = data.errors[i].message.split(". ");
			  		var arrId = arrMsg[0].split(".");
			  		var fieldId = arrId[1].replace("'","") + "_error";

			  		if(divCont == ""){
			  			$("#" + fieldId).html(arrMsg[1]);
			  			$("#" + fieldId).css("display","block");
			  		}else{
			  			$('#'+ divCont).find("#" + fieldId).html(arrMsg[1]);
			  			$('#'+ divCont).find("#" + fieldId).css("display","block");
			  		}
			  	}
			  }
			  else{
			  	formObj.reset();
			  	$(".error").css("display","none");
			   // alert("Your enquiry has been sent");	// Display thank you popup
			   // $("#thank-you").addClass('popVisible');
			   // console.log(did);
			   // price_redirect_thankyou();
			   $("#pdf-download").removeClass('popVisible');

			   if(pdfurl!=""){
			   	window.open(pdfurl, '_blank');	
			   }

			}

			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');

		},
		error: function (data) {
			alert("Network issue");
			$(".cstbtn").prop('disabled', false);
			$(".cstbtn").html('submit');
		},

	});
	}

}

function check_country(){


	$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
			
			data = data.split('\n');
			var cnt = data[8].split('=')[1];			 			

			

			if(cnt.toLowerCase() == 'au'){
				//for australia price
				if($(".hireModelPrize").length > 0){
					$("#australia_parttime").show();
					$("#australia_fulltime").show();
				} 
			}else{
				if($(".hireModelPrize").length > 0){
					//for other countries
					$("#other_parttime").show();
					$("#other_fulltime").show();
				} 

			}


			if(cnt.toLowerCase() == 'au'){
				$("#au_phone").show();
				$("#au_phone_inner").show();

			}else if(cnt.toLowerCase() == 'in'){
				$("#in_phone").show();
				$("#in_phone_inner").show();

			}else{				 
				$("#other_phone").show();
				$("#other_phone_inner").show();

			}

		});


}

/* ---------|  L. Plus and minus  |---------- */
function Countnumber(){ 
   $('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}


/* ---------|  AI. fliterTabDropdown start  |---------- */
function fliterTabDropdown() {
	if ($('.tabpahel_nav').length > 0) {    
		$(".tabpahel_nav .estimatiCalFilter").hide();
		$(".tabpahel_nav .selectCate").click(function() {
			$(".tabpahel_nav .estimatiCalFilter").slideToggle();
		});
		$(".tabpahel_nav .estimatiCalFilter li").click(function() {
			var text = $(this).html();

			$(".tabpahel_nav .selectCate span").html(text);
			$(".tabpahel_nav .estimatiCalFilter").hide();
		});    
	}
}
/* ---------|  AI. fliterTabDropdown End  |---------- */


/* ------| AJ. Service Estimation calculator Expert Accordian |--------- */
function serviceexpertAcco(){ 
	$('.expericon').click(function() {		
		if ($(this).hasClass('accoMinus')) {
			$(this).parent().next().slideUp();
			$(this).removeClass('accoMinus');
		} else {      
			$('.expericon').removeClass('accoMinus');
			$(this).addClass('accoMinus');
			$('.hireresour_experdetail').slideUp();
			$(this).parent().next().slideDown();
		}
	}).filter(':first').click();
}


function radioclick() {
	$('.hireresources-review .wdserCol label.labelwdsertext').click(function(){
        $('.hireresources-review .wdserCol label.labelwdsertext').removeClass('active');
        $(this).addClass('active');
    });
}