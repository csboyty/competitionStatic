var upload=(function(config,functions){
    return {
        createUploads:function(){
            for(var i= 1;i<=3;i++){

                //使用立即执行，将i作为参数传入，不然受闭包影响，i总是4
                (function(i){
                    functions.createUploader({
                        maxSize:config.uploader.sizes.img,
                        filter:config.uploader.filters.img,
                        uploadBtn:"uploadBtn"+i,
                        multiSelection:false,
                        multipartParams:null,
                        uploadContainer:"uploadContainer",
                        filesAddCb:null,
                        progressCb:null,
                        uploadedCb:function(info,file,up){
                            $("#imageUrl"+i).val(info.url);

                            $("#image"+i).attr("src",info.url);

                            $(".error[for='imageUrl"+i+"']").remove();
                        }
                    });
                })(i);

            }
        }
    }
})(config,functions);

$(document).ready(function(){
    var zyFormHandler = new ZYFormHandler({
        submitUrl:"#",
        redirectUrl:"#"
    });

    upload.createUploads();
});
