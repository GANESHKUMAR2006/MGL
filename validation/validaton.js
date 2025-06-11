$(document).ready(function(){
    $('#myform').validate({
        rules: {
            username:{
                required: true,
                minlength: 3
            },
            mobile:{
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            email:{
                required: true,
            }
        }
    });
})