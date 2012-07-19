$(document).ready(
	function () {
	    app.setDomElements();
	    
	    $('form').validate({
	    	errorLabelContainer: '#error-list',
	    	wrapper: 'li',
	    	messages: {
	    		
	    	}
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


