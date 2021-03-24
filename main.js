
function getPara1(){
    var inputs=[]; 
    for(i=1; i<=6; i++){
        inputs.push(document.getElementById("para1_sen"+i).value);
    }
    console.log(inputs);
    document.getElementById("paragraph_1").innerHTML=inputs.join(". ");

}