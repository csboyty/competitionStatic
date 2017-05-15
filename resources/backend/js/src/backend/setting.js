$(document).ready(function(){
    var zyFormHandler = new ZYFormHandler({
        submitUrl:"#",
        redirectUrl:null
    });

    $("#myForm").submit(function(){
        zyFormHandler.submitFormWithPS($(this));
        return false;
    });

    functions.createUploader({
        maxSize:config.uploader.sizes.img,
        filter:config.uploader.filters.img,
        uploadBtn:"uploadRuleBtn",
        multiSelection:false,
        multipartParams:null,
        uploadContainer:"uploadRuleContainer",
        filesAddedCb:null,
        progressCb:null,
        uploadedCb:function(info,file,up){
            $("#ruleLink").attr("href",info.url).text(functions.getFileInfo(info.url)["filename"]);
        }
    });
});