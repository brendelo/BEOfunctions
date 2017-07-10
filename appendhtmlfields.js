<script>

$(document).ready(function() {
	
    var max_fields      = 3; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
	var countid = 1;
    $(add_button).click(function(e){ //on add input button click
		
		countid++;
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
//            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>');
//			$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>');
			$(wrapper).append(/*'<div>' +
							 '<input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'*/
							 
							 '<div id="blabla" class="row">' +            //the fields I decided to append starts here
														   '<div class="col-sm-6">' +
																'<div class="form-group">' +
															'<select class="form-control select2-list" id="classofdegree' + countid + '" name="classofdegree' + countid + '" data-placeholder="Select an item" required>'+
													
																'<option value=""><!---- Please Choose One ----></option>'+
																'<option value="First Class">Google Scholar</option>' +
                                                                '<option value="2:1"> Scopus </option>' +
																
                                                                
																
														'</select>' +
                                                        '<label for="publicationtype2" class="control-label">Publications</label>' +
                                                                '</div>' +
															'</div>' +
															
															'<div class="col-sm-5">' +
																'<div class="form-group">' +
															'<input type="text" name="publicationno' + countid + '" id="publicationno' + countid + '" class="form-control" data-rule-minlength="3" required>' +
															'<label for="publicationno22`" class="control-label">Number</label>' +
                                                              '  </div>' +
															'</div>'+
															
															'<div class="col-sm-1">' +
																'<div class="form-group">' +
															'<button href="#" class="remove_field ">Remove</button>' + // a remove button for the appended fields
                                                              '  </div>' +
															'</div>'+
                                                        '</div>'     //the html fields i decided to append ends here
														
							 
							 ); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on the remove button to delete the newly appended fieldson remove text
        e.preventDefault();
		$("#blabla").remove(); 
    });
});

</script>
