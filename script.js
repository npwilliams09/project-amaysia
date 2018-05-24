var country = function(country, validity, desc, cost){
    this.country = country;
    this.valid = validity;
    this.desc = desc;
    this.cost = cost;
}


$(document).ready(function(){
    var AUVisaArr = [];
    var html = '';
    AUVisaArr.push(new country('Japan', '90 days', 'Obtain on arrival', 'Free'));
    AUVisaArr.push(new country('Vietnam', '30 days', 'Apply online before arrival', 'Free'));
    AUVisaArr.push(new country('Thailand', '30 days', 'Visa exemption (only 15 days validity if arriving via land border)', 'Free'));
    AUVisaArr.push(new country('Indonesia', '30 days', 'Visa exemption', 'Free'));
    AUVisaArr.push(new country('Cambodia', '90 days', 'Apply for e-visa online before arrival or at certain ports obtain on arrival', 'US $30'));
    AUVisaArr.push(new country('Laos', '30 days', 'Obtain on arrival at most ports. You will require 2 recent passport size photos', 'US $30'));

    for (var i = 0; i < AUVisaArr.length; i++){
        var ob = AUVisaArr[i];
        
        if (i%3 == 0){
            html += '<div class="row is-table-row"><div class="col-xs-4"><div class ="cnt-block text-center"><h4 class="text-center">'+ ob.country + '</h4><p>Validity: ' + ob.valid + '<br>Cost: '+ob.cost+'<br>'+ob.desc+'</p></div></div>'
        }else if((i+1)%3 ==0){
            html += '<div class="col-xs-4"><div class ="cnt-block text-center"><h4 class="text-center">'+ ob.country + '</h4><p>Validity: ' + ob.valid + '<br>Cost: '+ob.cost+'<br>'+ob.desc+'</p></div></div></div>'
        }else{
            html += '<div class="col-xs-4"><div class ="cnt-block text-center"><h4 class="text-center">'+ ob.country + '</h4><p>Validity: ' + ob.valid + '<br>Cost: '+ob.cost+'<br>'+ob.desc+'</p></div></div>'
        }
       
    }


    $('#go').click(function(){
        console.log('push');
        if ($('#myList').val() == 'AU'){
            $('#info').html(html);
        }
        
        
    })
    
    
    
});