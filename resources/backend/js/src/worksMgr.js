var worksMgr=(function(config,functions){

    return {

    }

})(config,functions);

$(document).ready(function(){

    var dataTable= new ZYTableHandler({
        removeUrl:"#",
        ownTable:function(){
            var ownTable=$("#myTable").dataTable({
                "bServerSide": true,
                "sAjaxSource": config.ajaxUrls.worksGetByPage,
                "bInfo":true,
                "bLengthChange": false,
                "bFilter": false,
                "bProcessing":true,
                "bSort":false,
                "bAutoWidth": false,
                "iDisplayLength":config.perLoadCounts.table,
                "sPaginationType":"full_numbers",
                "oLanguage": {
                    "sUrl":config.dataTable.langUrl
                },
                "aoColumns": [
                    { "mDataProp": "image",
                        "fnRender":function(oObj){
                            return '<img class="thumb" src="'+oObj.aData.image+'">';
                        }
                    },
                    { "mDataProp": "title"},
                    { "mDataProp": "type"},
                    { "mDataProp": "userEmail"},
                    { "mDataProp": "opt",
                        "fnRender":function(oObj){
                            return '<a href="'+oObj.aData.id+'">xxx</a>';
                        }
                    }
                ] ,
                "fnServerParams": function ( aoData ) {
                    aoData.push({
                        name:"email",
                        value:$("#searchContent").val()
                    })
                },
                "fnServerData": function(sSource, aoData, fnCallback) {

                    //回调函数
                    $.ajax({
                        "dataType":'json',
                        "type":"get",
                        "url":sSource,
                        "data":aoData,
                        "success": function (response) {
                            if(response.success===false){
                                functions.ajaxReturnErrorHandler(response.error_code);
                            }else{
                                var json = {
                                    "sEcho" : response.sEcho
                                };

                                for (var i = 0, iLen = response.aaData.length; i < iLen; i++) {
                                    response.aaData[i].opt="opt";
                                }

                                json.aaData=response.aaData;
                                json.iTotalRecords = response.iTotalRecords;
                                json.iTotalDisplayRecords = response.iTotalDisplayRecords;
                                fnCallback(json);
                            }

                        }
                    });
                },
                "fnFormatNumber":function(iIn){
                    return iIn;
                }
            });

            return ownTable;
        }
    })

    $("#searchBtn").click(function(e){
        dataTable.tableRedraw();
    });
});

