
    let BMI , waight , hieght ,select , result  , percentage , extra ,age ,
     per,ext , waighte,hieghte,normalBMI=24.9,rel,BMIk ;
 
//************************************** */
// Change navbar style

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
});

//nav manue
const manue = document.querySelector(".nav_menue");
const men_btn = document.querySelector("#open_btn");
const clos_btn = document.querySelector("#close_btn");

men_btn.addEventListener('click' ,() =>{
    manue.style.display = "flex";
    clos_btn.style.display ="inline-block";
    men_btn.style.display="none";
})


//close manue
const closNav =() =>{
    manue.style.display="none";
    clos_btn.style.display="none";
    men_btn.style.display="inline-block";
    
    
    }
    clos_btn.addEventListener('click',closNav)

    //*********************************************** */
 

    document.querySelector('.add').addEventListener('click',start)
function start(){
    waight = document.querySelector('.waight').value ;
    hieght = document.querySelector('.hieght').value ;

    BMI = waight / (hieght * hieght);
    percentage =BMI-normalBMI;
    extra=(percentage*100/waight);

    if(BMI<=18.5){
        let tar='UNDER-WAIGHT';
        let spane = document.createElement('h5');
        spane.className='tar';
        spane.appendChild(document.createTextNode(tar));
        document.querySelector('.data').appendChild(spane);
        result=`Your BMI is: ${BMI} and you are uderwaight! ` ;
 
    }
   else if(BMI>=18.5 &&  BMI<=24.9){
       let good='NORMAL';
       let spane = document.createElement('h5');
       spane.className='good';
       spane.appendChild(document.createTextNode(good));
       document.querySelector('.data').appendChild(spane);
         result=`Your BMI is: ${BMI} you ARE normal` ;
    }

    else if(BMI>=24.9 && BMI<=30){
        let notGood='OVER-WAIGHT';
        let spane = document.createElement('h5');
        spane.className='notGood';
        spane.appendChild(document.createTextNode(notGood));
        document.querySelector('.data').appendChild(spane);

         result=`Your BMI is: ${BMI} not normal !  your fatness as your BMI is ${percentage}% and you should loss ${extra} kg waight to be healthy` ;

    }

    else{
        let tar='OBACITY';
        let spane = document.createElement('h5');
        spane.className='tar';
        spane.appendChild(document.createTextNode(tar));
        document.querySelector('.data').appendChild(spane);
        result=`Your BMI is: ${BMI} you are completly out of health! your fatness as your BMI is ${percentage}% and you should loss${extra} kg  waight to be healthy` ;
    }
var answer = document.createElement("div");
answer.className='result';
answer.appendChild(document.createTextNode(result));
document.querySelector('.data').appendChild(answer);

}
//*********************************Youngers******************************************************* */
document.querySelector('.kid').addEventListener('click',young)

function young(){
    waighte = document.querySelector('.waighte').value ;
    hieghte = document.querySelector('.hieghte').value ;
    select = document.querySelector('#select').value ;
    age = document.querySelector('.age').value;

    BMIk = waighte / (hieghte * hieghte);
 
   
  

  
   
    if(select == 'female'){
        if(BMIk<13.6 && age<=5){
            rel=`Your BMI is: ${BMIk} and you are uderwaight! ` ;
    
        }
        else if(BMIk>=13.6 && BMIk<=16.7 && age<=5){
     
            rel=`Your BMI is: ${BMIk} and you are normal! ` ;
    
        }
        else if(BMIk>16.7  && age<=5){
            rel=` Overwaight! Your BMI is: ${BMIk} not normal !   ` ;

        }
        else if(BMIk<14 && age>=6 && age<=10){
            rel=`Your BMI is: ${BMIk}  and underwaight ` ;

        }
        else if(BMIk>=14 && BMIk<=19.2 && age>=6 && age<=10){
            rel=`Overwaight! Your BMI is: ${BMIk}  and normal ` ;

        }
        else if(BMIk>19.3 && age>=6 && age<=10){
            rel=` Overwaight! Your BMI is: ${BMIk} not normal !  ` ;

        }
        else if(BMIk<16.3 && age>=6 && age<=15){
            rel=`Your BMI is: ${BMIk}  and underwaight ` ;

        }
        else if(BMIk>=16.3 && BMIk<=23.4 && age>=11 && age<=15){
            rel=`Your BMI is: ${BMIk}  and normal ` ;

        }
        else if(BMIk>23.4 && age>=10 && age<=15){
            rel=`Overwaight! Your BMI is: ${BMIk} not normal !   ` ;

        }
        else{
            rel=`Your BMI is: ${BMIk}   ` ;
    
        }
       
    }
   else if(select=='male'){
    if(BMIk<13 && age<=5){
        rel=`Your BMI is: ${BMIk} and you are uderwaight! ` ;

    }
    else if(BMIk>=13.8 && BMIk<=16.8 && age<=5){
        rel=`Your BMI is: ${BMIk} and you are normal! ` ;

    }
    else if(BMIk>16.8  && age<=5){
        rel=` Overwaight! Your BMI is: ${BMIk} not normal !  ` ;

    }
    else if(BMIk<14.2 && age>=6 && age<=10){
        rel=`Your BMI is: ${BMIk}  and underwaight ` ;

    }
    else if(BMIk>=14.2 && BMIk<=19.4 && age>=6 && age<=10){
        rel=`Your BMI is: ${BMIk}  and normal ` ;

    }
    else if(BMIk>19.5 && age>=6 && age<=10){
        rel=` Overwaight! Your BMI is: ${BMIk} not normal !  ` ;

    }
    else if(BMIk<16.5 && age>=6 && age<=15){
        rel=`Your BMI is: ${BMIk}  and underwaight ` ;

    }
    else if(BMIk>=16.5 && BMIk<=23.6 && age>=11 && age<=15){
        rel=`Your BMI is: ${BMIk}  and normal ` ;

    }
    else if(BMIk>23.6 && age>=10 && age<=15){
        rel=` Overwaight! Your BMI is: ${BMIk} not normal !  ` ;

    }
    else{
        rel=`Your BMI is: ${BMIk}   ` ;

    }

   }
    var kidanswer = document.createElement("div");
    kidanswer.className='rel';
    kidanswer.appendChild(document.createTextNode(rel));
    document.querySelector('.info').appendChild(kidanswer);


}







