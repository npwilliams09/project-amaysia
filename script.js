var country = function(country, validity, desc, cost){
    this.country = country;
    this.valid = validity;
    this.desc = desc;
    this.cost = cost;
}


$(document).ready(function(){
    var AUVisaArr = [];
    var USVisaArr = [];
    var UKVisaArr = [];
    //AU visa
    AUVisaArr.push(new country('Japan', '90 days', 'Obtain on arrival', 'Free'));
    AUVisaArr.push(new country('Vietnam', '30 days', 'Apply online before arrival', 'Free'));
    AUVisaArr.push(new country('Thailand', '30 days', 'Visa exemption (only 15 days validity if arriving via land border)', 'Free'));
    AUVisaArr.push(new country('Indonesia', '30 days', 'Visa exemption', 'Free'));
    AUVisaArr.push(new country('Cambodia', '30 days', 'Apply for e-visa online before arrival or at certain ports obtain on arrival', 'US $30'));
    AUVisaArr.push(new country('Laos', '30 days', 'Obtain on arrival at most ports. You will require 2 recent passport size photos', 'US $30-$40'));

    //US visa
    USVisaArr.push(new country('Japan', '90 days', 'Obtain on arrival', 'Free'));
    USVisaArr.push(new country('Vietnam', '30 days', 'Apply online before arrival', 'Free'));
    USVisaArr.push(new country('Thailand', '30 days', 'Visa exemption (only 15 days validity if arriving via land border)', 'Free'));
    USVisaArr.push(new country('Indonesia', '30 days', 'Visa exemption', 'Free'));
    USVisaArr.push(new country('Cambodia', '30 days', 'Apply for e-visa online before arrival or at certain ports obtain on arrival', 'US $20'));
    USVisaArr.push(new country('Laos', '30 days', 'Obtain on arrival at most ports. You will require 2 recent passport size photos', 'US $30-$40'));

    //UK visa
    UKVisaArr.push(new country('Japan', '90 days', 'Obtain on arrival', 'Free'));
    UKVisaArr.push(new country('Vietnam', '15 days', 'Visa exemption', 'Free'));
    UKVisaArr.push(new country('Thailand', '30 days', 'Visa exemption (only 15 days validity if arriving via land border)', 'Free'));
    UKVisaArr.push(new country('Indonesia', '30 days', 'Visa exemption', 'Free'));
    UKVisaArr.push(new country('Cambodia', '90 days', 'Apply for e-visa online before arrival or at certain ports obtain on arrival', 'US $20'));
    UKVisaArr.push(new country('Laos', '30 days', 'Obtain on arrival at most ports. You will require 2 recent passport size photos', 'US $30-$40'));

    

    


    $('#go').click(function(){
        console.log('push');
        var ob;
        var code = $('#myList').val();
        var html = '<h2 class = "text-center">'+code+'</h2>';
        //choose country
        switch (code){
            case 'AU':
                ob = AUVisaArr;
                console.log(1);
                break;
            case 'UK':
                ob = UKVisaArr;
                console.log(2);
                break;
            case 'US':
                ob = USVisaArr;
                console.log(3);
                break;
        }
        //set html
        for (let i = 0; i < ob.length; i++){
            if (i%3 == 0){
                html += '<div class="row is-table-row"><div class="col-xs-4"><div class ="cnt-block text-center"><h4 class="text-center">'+ ob[i].country + '</h4><p>Validity: ' + ob[i].valid + '<br>Cost: '+ob[i].cost+'<br>'+ob[i].desc+'</p></div></div>'
            }else if((i+1)%3 ==0){
                html += '<div class="col-xs-4"><div class ="cnt-block text-center"><h4 class="text-center">'+ ob[i].country + '</h4><p>Validity: ' + ob[i].valid + '<br>Cost: '+ob[i].cost+'<br>'+ob[i].desc+'</p></div></div></div>'
            }else{
                html += '<div class="col-xs-4"><div class ="cnt-block text-center"><h4 class="text-center">'+ ob[i].country + '</h4><p>Validity: ' + ob[i].valid + '<br>Cost: '+ob[i].cost+'<br>'+ob[i].desc+'</p></div></div>'
            }
        }

        //apply html
        $('#info').html(html);
        
    })
    
    
    
});