var works=(function(config,functions){
    return {
        remove:function(id){
            functions.showLoading();
            var me = this;
            $.ajax({
                url: config.ajaxUrls.removeWork,
                type: "post",
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        $().toastmessage("showSuccessToast", config.messages.optSuccess);
                        functions.hideLoading();
                    } else {
                        functions.ajaxReturnErrorHandler(response.error_code);
                    }

                },
                error: function () {
                    functions.ajaxErrorHandler();
                }
            });
        }
    }
})(config,functions);

$(document).ready(function(){
    $("#myTable").on("click",".remove",function(){
        works.remove($(this).attr("href"));
        return false;
    })
});