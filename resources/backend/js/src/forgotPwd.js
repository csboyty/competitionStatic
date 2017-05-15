$(document).ready(function(){
    var zyFormHandler=new ZYFormHandler({
        submitUrl:"#",
        redirectUrl:"#"
    });
    $("#myForm").validate({
        ignore:[],
        rules:{
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            email:{
                required:config.validErrors.required,
                email:config.validErrors.email
            }
        },
        submitHandler:function(form) {
            zyFormHandler.submitFormWithPS(form);
        }
    });
});
