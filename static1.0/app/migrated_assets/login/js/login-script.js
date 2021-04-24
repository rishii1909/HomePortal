//
/**
  * @author ComFreek
  * @license MIT (c) 2013-2015 ComFreek <http://stackoverflow.com/users/603003/comfreek>
  * Please retain this author and license notice!
  */
/*(function (exports) {
    function valOrFunction(val, ctx, args) {
        if (typeof val == "function") {
            return val.apply(ctx, args);
        } else {
            return val;
        }
    }

    function InvalidInputHelper(input, options) {
        input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

        function changeOrInput() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
                input.setCustomValidity("");
            }
        }

        function invalid() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
               input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
            }
        }

        input.addEventListener("change", changeOrInput);
        input.addEventListener("input", changeOrInput);
        input.addEventListener("invalid", invalid);
    }
    exports.InvalidInputHelper = InvalidInputHelper;
})(window);

InvalidInputHelper(document.getElementById("username"), {
    defaultText: "You forgot to enter this field.",
    emptyText: "You forgot to enter this field.",
    invalidText: function (input) {
        	return 'This is not a valid email address.';
    }
});*/

jQuery(document).ready(function(){jQuery("form").validationEngine({autoHidePrompt:true,autoHideDelay: 1200,maxErrorsPerField: 1});});

// custom check box 
$('input[type="checkbox"][checked], input[type="radio"][checked]').each(function() {
	$(this).attr('checked', true).parent('label').addClass('active');
});
$('input[type="checkbox"]:not([checked]), input[type="radio"]:not([checked])').attr('checked', false);
$('table label, .check-a label, .list-layout li label, .table-a label').append('<div class="fit-a"></div>').each(function() {
	$(this).addClass($(this).children('input').attr('type'));
});
$('table input, .check-a input, .list-layout li input, .table-a label input').addClass('hidden').on('click', function() {
	if ($(this).parent().hasClass('radio')) {
		$(this).parents('p,ul').find('label').removeClass('active');
	}
	$(this).parent('label').toggleClass('active');
});
function segmentjs(){
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
  analytics.load("urBggF0FoQAUV4hlX04SfNmIGIZZZZXt");
  analytics.page()
  }}();
}

function Segmentcall(push,SystemAgentid,name,email,user_hash,loginstatus){
    
    if(loginstatus=='error'){
        loginstatus = 'failure';
    }
      
        
    if(push==1){
        console.log('___OK Push');
            segmentjs();
            analytics.identify(SystemAgentid, {
            name: name,
            email: email
          }, {
           Intercom: {
                  user_hash:    user_hash
                },integrations: {
                    'All': true,
                    'Olark': false
                }
            }
          );
          analytics.track("login", {
	  status: loginstatus,
          appversion: "v2"
	});
    }
}

(function($, window, document) {

	var templateLoading = '<span id="movingBallG"><span class="movingBallLineG"></span><span id="movingBallG_1" class="movingBallG"></span></span>';
	var templateAlert = '<div class="alertbox hide useraction"></div>';
	var templateConform = '<div class="conformbox hide useraction"><div class="alertbox"></div><input type="button" class="btn no" value="No"><input type="button" class="btn yes" value="Yes"></div>';
	var closeButton = '<span class="close"></span>';
	var emptytxt = '<span class="emptytxt">X</span>'
	$(function() {

		$(".switch-form").on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.closest('.frmdiv').fadeOut(500, function() {
				$('#login > h1').html('AgentPanel Password Reset');
				$('body').addClass('pwdRest');
				document.title = "Web4Realty | Agent Panel Forgot Password";
				$(this).siblings(".frmdiv").eq(0).fadeIn(500);
				updateURL();
			});
			$('.wextra').show();
			$('.emailSent').hide();
		});
		$(".backLogin").on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.closest('.frmdiv').fadeOut(500, function() {
				$('#login > h1').html('AgentPanel Login');
				$('body').removeClass('pwdRest');
				document.title = "Web4Realty | Agent Panel Login";
				$(this).siblings(".frmdiv").eq(0).fadeIn(500);
				//window.location.href = window.location.href.split('?')[0];
				var uri = window.location.toString();
				if (uri.indexOf("?") > 0) {
					var clean_uri = uri.substring(0, uri.indexOf("?"));
					window.history.replaceState({}, document.title, clean_uri);
				}
			});
		});
		$(".lostpassword").on('click', function(e) {
			e.preventDefault();
			//$("input.txt.lostpassword").trigger('focus');	
		});

		$("#getin").on("click", function(e) {
			//e.preventDefault();
			var $form = $('#loginfrmId');
			
			var valid = jQuery('#loginfrmId').validationEngine('validate');	
			if(valid == true){
				handelSubmit($form)
				post_values = {};
				$('.forms .form:visible select').each(function() {
					post_values[$(this).attr('name')] = $(this).val();
				});
	
				$('.forms .form:visible input').each(function() {
					post_values[$(this).attr('name')] = $(this).val();
				});
	
				$('.forms .form:visible textarea').each(function() {
					post_values[$(this).attr('name')] = $(this).val();
				});
				$.ajax({
					type: 'POST',
					url: $("#ajaxurl").val(),
					data: post_values,
					success: function(data) {
						obj = JSON.parse(data);
                                                console.log(obj);
                                                loginstatus = obj.status;
						if (loginstatus.trim() == 'success') {
                                                   // Segmentcall(obj.push,obj.SystemAgentid,obj.name,obj.email,obj.user_hash,loginstatus);
                                                   if (obj.onboarding_my_info == '1') {
                                                       location.href= 'onboard';
                                                   }else if (obj.onboarding_brokerage_info == '1') {
                                                       location.href= 'onboard'; 
                                                   }else if($('#setRedirectUrl').val()!=''){
                                                        location.href= $('#setRedirectUrl').val();
                                                    } else if (obj.onboarding_status == 'Trial Created') {
                                                       location.href= 'domains'; 
                                                   
                                                    }else{
                                                        location.href= 'dashboard';
                                                    }
						} else {
                                                   // Segmentcall(obj.push,obj.SystemAgentid,obj.name,obj.email,obj.user_hash,loginstatus);
                                                    //  location.href='/code/agentpanel/CRM/';
                                                    //$(".error").show();
                                                    $("#loginfrmId .error").animate({bottom: "0"});
                                                    handelSubmitSuccess($form);
                                                    return false 
							
						}
	
	
					},
					error: function(xhr, ajaxOptions, thrownError) {
	
					}
				});
			
			}else{
				jQuery('#loginfrmId').validationEngine();
			}
			return false;
			
		});
                    
		var gorgotPassButton = $("#forgotfrmId").find('button[type=submit]');
		
		$("#getreset").on("click", function(e) {
			//e.preventDefault();
			var $form = $('#forgotfrmId');
			var valid = jQuery('#forgotfrmId').validationEngine('validate');	
			if(valid == true){
				handelSubmit($form)
				post_values = {};
				$('.forgtfrm:visible input').each(function() {
					post_values[$(this).attr('name')] = $(this).val();
				});
				$.ajax({
				type: 'POST',
				url: $("#fajaxurl").val(),
				data: post_values,
				success: function(data) {	
					console.log(data);
					$(gorgotPassButton).removeClass('loading').find('#movingBallG').remove();
					if(data=='error'){
						$(gorgotPassButton).addClass('doneCheck red').html('<i class="ico-cross2"></i> Invalid Email!');
						$("#forgotfrmId .error").animate({bottom: "0"});
					}else{
						$(gorgotPassButton).addClass('doneCheck').html('<i class="ico-check2"></i> Check your email!');
						$("#forgotfrmId .error").hide();
					}
					//passwordresetrequest();
					//$(gorgotPassButton).removeClass('loading').find('#movingBallG').remove();
					//$(gorgotPassButton).addClass('doneCheck').html('<i class="ico-check2"></i> Check your email!');
					if (data.trim == 'Please check your e-mail for login information.') {
						console.log(data.trim)
					} else if (data.trim == 'Please check your e-mail for login information.') {} 
					else if (data.trim == 'Please check your e-mail for login information.') {}					
					handelSubmitSuccess($form);					
					setTimeout(function(){
						$(gorgotPassButton).removeAttr('disabled').removeClass('doneCheck red').html('Request my Password');
						}, 3000);
						//$('.wextra').hide();
						//$('.emailSent').fadeIn();
					
					
				},
				error: function(xhr, ajaxOptions, thrownError) {

				}
			});
			}else{
				jQuery('#forgotfrmId').validationEngine();
			}
			
			return false;
		});


		$(".alertLink").on('click', function(e) {
			e.preventDefault();
			var alertClass = $(this).hasClass('good') ? "good" : "bad";
			var tempClone = $(templateAlert).clone();
			tempClone.addClass(alertClass).text($(this).data('message')).append($(closeButton).clone());
			//tempClone.appendTo('body').slideDown().delay(3000).slideUp(function(){tempClone.remove();});
		});

		$(".conformLink").on('click', function(e) {
			e.preventDefault();
			var alertClass = $(this).hasClass('good') ? "good" : "bad";
			var tempClone = $(templateConform).clone()
			tempClone.find('.alertbox').addClass(alertClass).text($(this).data('message')).append($(closeButton).clone());
			tempClone.appendTo('body').slideDown();
		});

		$("body").on('click', '.close', function() {
			$(this).closest('.useraction').slideUp();
		});


		$(".txt").on("keypress", function() {
			if ($(this).val() != "") {
				$(this).next('a.clearlink').fadeIn();
			}
		});
		$(".txt").on("focus", function() {
			if ($(this).val() != "") {
				$(this).next('a.clearlink').fadeIn();
			}
		});

		$(".txt").on("blur", function() {
			if ($(this).val() == "")
				$(this).next('a.clearlink').fadeOut();
		});
		$('.txt').clearable();
		
		
		// toggle valid invalid error
		
		$(".toggMe").on('click', function() {
			$(this).parent().slideToggle();
		});

	});


	var handelSubmit = function($form) {
		var $submit = $form.find(':submit');
		$submit.attr('disabled', 'disabled').addClass('loading')
		$submit.append(templateLoading);
	}

	var handelSubmitSuccess = function($form) {
		var $submit = $form.find(':submit');
		$submit.removeAttr('disabled').removeClass('loading').find('#movingBallG').remove();
		$submit.text($submit.data('text'));
	}

}(window.jQuery, window, document));



jQuery.fn.clearable = function() {

	$('.morelink').live('click', function() {
		var $this = $(this);
		if ($this.hasClass('less')) {
			$this.removeClass('less');
			$this.html(config.moreText);
		} else {
			$this.addClass('less');
			$this.html(config.lessText);
		}
		$this.parent().prev().toggle();
		$this.prev().toggle();
		return false;
	});

	return this.each(function() {
		if ($('#username').val() == '' || $('#password').val() == '') {
			$(this).wrap('<div id="sq" class="divclearable"></div>')
				.parent()
				.attr('class', $(this).attr('class') + ' divclearable')
				.append('<a class="clearlink"  href="javascript:void(0)"></a>');
			$('.txt').next('a.clearlink').fadeOut();

		} else {

			$(this).wrap('<div id="sq" class="divclearable"></div>')
				.parent()
				.attr('class', $(this).attr('class') + ' divclearable')
				.append('<a class="clearlink"  href="javascript:void(0)"></a>');
			if ($('#username').val() != '')
				$('.txt').next('a.clearlink').fadeIn();
			if ($('#password').val() != '')
				$('.txt').next('a.clearlink').fadeIn();

		}
		$('.clearlink')
			.attr('title', 'Click to clear this textbox')
			.click(function() {
				$(this).prev().val('').focus();
				if ($('#username').val() == '')
					$('.txt').next('a.clearlink').fadeOut();
				if ($('#password').val() == '')
					$('.txt').next('a.clearlink').fadeOut();

			});
	});
}

var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};



//if (!isMobile.any()) {
//	FreshWidget.init("", {
//		"queryString": "&widgetType=popup&formTitle=Website+Support",
//		"widgetType": "popup",
//		"buttonType": "text",
//		"buttonText": "Need Help?",
//		"buttonColor": "black",
//		"buttonBg": "#459bd4",
//		"alignment": "4",
//		"offset": "235px",
//		"formHeight": "700px",
//		"url": "http://web4realty.freshdesk.com"
//	});
//}





function issignedIn(val) {
	if (val.checked) {
		document.getElementById('remembermechkbox').value = 'yes';
	} else {
		document.getElementById('remembermechkbox').value = 'no';
	}
}

function updateURL() {
  if (history.pushState) {
	  var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?forgot-password';
	  window.history.pushState({path:newurl},'',newurl);
  }
}