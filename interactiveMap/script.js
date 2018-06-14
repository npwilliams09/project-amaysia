function footerAlign() {
    $("footer").css("display", "block");
    $("footer").css("height", "auto");
    var footerHeight = $("footer").outerHeight();
    $("body").css("padding-bottom", footerHeight);
    $("footer").css("height", footerHeight);
 }

$(document).ready(function(){
    footerAlign();   
    
    $('#amap')
        .mapster({
            mapKey: 'data-key'
        })
        .mapster('set',true,'JP');
    
});