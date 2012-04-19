$(document).ready(
	function () {
	    app.setDomElements();
	    
	    $('form').validate({
	    	errorLabelContainer: '#error-list',
	    	wrapper: 'li',
	    	messages: {
	    		
	    	}
		});


		//MailCheck - https://github.com/Kicksend/mailcheck

		 var domains = ['hotmail.com', 'gmail.com', 'aol.com'];

	    $('input#email').blur(function(){
	          $('input#email').mailcheck(domains, {
	            suggested: function(element, suggestion) {
					  address: 'test',         // the address; part before the @ sign
					  domain: 'hotmail.com',   // the suggested domain
					  full: 'test@hotmail.com',  // the full suggested email

	              $('#emailSuggestion').html("did you mean <a id='suggestion' >"+suggestion.full+"</a>?");      
	            },
	            empty: function(element) {
	                $('#emailSuggestion').html("please add you email address");
	            }
	          });
	    });

	    //this is click handler if user clicks on the mailcheck suggestion
	    $(document.body).delegate('#suggestion', 'click', function(){
	        $('input#email_address').val(this.innerHTML);
	        $('#emailSuggestion').empty();
	    });

		$('.phoneUS').mask('(999) 999-9999');
		
		$('[placeholder]').setPlaceholderText();
		
	
		switch (app.domElements.body.attr('id')) {
			case 'landing':
				
			break;
			case 'sales':
				
			break;
		}

	}
);


