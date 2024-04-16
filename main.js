document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let age = document.getElementById("ageInput").value;
  let gender = document.getElementById("gender").value;

  if (age === '' || gender === '') {
    alert("Please enter all fields.");
    return;
  }

  let discount;
  if(age<=5){
    discount='Free';
  }else if (gender === 'Female' || (age>5 && age<=8)) {
    discount='50% Off on';
  }else if(age>65){
    discount='30% Off on';
  }else{
    discount='0% Off on';
  }
 document.querySelector('#finalResult').innerHTML=`You will get ${discount} your ticket`
  
});
