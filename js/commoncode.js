/*JQ Param handling*/
function urlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return '';
    }
    else{
       return decodeURIComponent(results[1]) || '';
    }
}

/*check valid json*/
function isValidJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/*Bootstrap alerts*/
function bfpAlert(aTitle,aBody) {
    $("#alertSpace").html('<i class="fa fa-fire-extinguisher"></i> <strong>'+aTitle+':</strong> '+aBody);
    $("#alertmodal").modal("show");
}
