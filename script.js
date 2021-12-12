// let input_var=document.getElementById("cgpa").value;
// console.log(input_var);


// var my_var=document.querySelector('.check').ariaValueMax;
// console.log(my_var)


document.querySelector(".btn").addEventListener("click",function(){
    

    var value_recieved=document.querySelector('.input').value;
        console.log(value_recieved)
        
    
    if(value_recieved<4 || value_recieved>10.0){
        alert("Enter number from 4-10");
    }else{
        console.log(value_recieved);
    }

        calculate_percentage(value_recieved);
        
        
        
    
    // var change=document.querySelector('.h2').innerHTML="Value in percentange is "+value_recieved;
    
    
})


document.querySelector(".input").addEventListener("keyup",function(){
    
    if(event.key=='Enter'){
        var value_recieved=document.querySelector('.input').value;
        console.log(value_recieved)

        if(value_recieved<4 || value_recieved>10.0){
            alert("Enter number from 4-10");
        }else{
            console.log(value_recieved);
        }

    calculate_percentage(value_recieved);}
    
        
        
        
    
    // var change=document.querySelector('.h2').innerHTML="Value in percentange is "+value_recieved;
    
    
})



function calculate_percentage(value_entered){
    if(value_entered>=4 && value_entered<=4.74){
        console.log("Grade D");
        var calculate=(6.6*value_entered+13.6).toFixed(2);
        console.log(calculate);
        document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
        document.querySelector('.grade').textContent="Grade D"
    }
    if(value_entered>=4.75 && value_entered<=5.74){
        console.log("Grade B");
        var calculate=(10*value_entered-2.5).toFixed(2);
        console.log(calculate);
        document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
        document.querySelector('.grade').textContent="Grade B"
    }
    if(value_entered>=5.75 && value_entered<=6.74){
        console.log("Grade B+");
        var calculate=(5*value_entered+26.25).toFixed(2);
        console.log(calculate);
        document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
        document.querySelector('.grade').textContent="Grade B+"
    }
    if(value_entered>=6.75 && value_entered<=8.24){
        console.log("Grade A");
        var calculate=(6.6*value_entered+13.6).toFixed(2);
        console.log(calculate);
        document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
        document.querySelector('.grade').textContent="Grade A"
    }

    if(value_entered>=8.25 && value_entered<=9.49){
        console.log("Grade A+");
        var calculate=(12*value_entered-25).toFixed(2);
        console.log(calculate);
        document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
        document.querySelector('.grade').textContent="Grade A+"
    }


    if(value_entered>=9.50 && value_entered<=10.00){
        console.log("Grade O");
        var calculate=(20*value_entered-100).toFixed(2);
        console.log(calculate);
        document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
        document.querySelector('.grade').textContent="Grade O"
    }
    
    // if(value_entered>=4 && value_entered<=4.74){
    //     console.log("Grade D");
    //     var calculate=6.6*value_entered+13.6;
    //     console.log(calculate);
    //     document.querySelector('.h2').innerHTML="Value in percentage is "+calculate+ " %";
    //     document.querySelector('.grade').textContent="Grade D"
    // }


}


