// When the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function(){
    // validate
    $("#contact").validate({
        // Set the validation rules
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
        },
        // Specify the validation error messages
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message",
        },
        // submit handler
        submitHandler: function(form){
            // form.submit();
            $(".message").show();
            $(".message").fadeOut(4500);
        }
    });
});

// Change input and textarea background color when there's no value
$(document).ready(function(){
    $(':input').on('input', function() {
        $(this).toggleClass('empty', this.value.length === 0);
    }).trigger('input');
});
