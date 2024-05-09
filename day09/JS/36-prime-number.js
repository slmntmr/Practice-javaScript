
function calculate(){
    
    let num = Number(document.querySelector(".num").value);
    
    let counter = 0;

    if(num > 1 && Number.isInteger(num)){

        for(let i=2; i<num; i++){

            if(num % i == 0){
                counter++;
            }
        }
    
        counter == 0 ? alert(num + " asal sayıdır.") : alert(num + " asal değildir.");
    }
    else {
        alert("Lütfen geçerli bir sayı giriniz.")
    }
    
}


