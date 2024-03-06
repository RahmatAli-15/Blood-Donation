function Send(){
var name = document.getElementById("Name").value;
var email = document.getElementById("Email").value;
var contact = document.getElementById("Contact").value;
var location= document.getElementById("location").value;
var bloodtype = document.getElementById("bloodtype").value;
var dp = document.getElementById("dp").value;
var mess = document.getElementById("message").value;

var body = "Name: " + name + "<br/> Email:" + email + "<br/> Contact Number:" + contact + "<br/> location:" + location +"<br/> bloodtype:" + bloodtype +"<br /> Donor/Patient:" + dp + "<br/> message:" + mess;

  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "projectuse2526@gmail.com",
  Password : "EAD1524BA8191BEE885C6F971F8C6F112FDB",
    To : 'rahmatali2526@gmail.com',
    From : "projectuse2526@gmail.com",
    Subject : "Donar/Patient Information",
    Body :  body,
  }).then(
    message =>{
      if(message=='OK'){

          swal("Successfull", "Your Data Successfull Received", "success");
      }
      else{

          swal("Something Wrong", "Your Data is not Received", "error");
      }
  }
 );
}


const accordians=document.querySelectorAll('.accordian');
 
accordians.forEach(accordian=>{
 const icon=accordian.querySelector('.icon');
 const answer=accordian.querySelector('.answer');

  accordian.addEventListener('click', ()=>{

  if(icon.classList.contains('active')){
    icon.classList.remove('active');
    answer.style.maxHeight=null;
  }else{
    icon.classList.add('active');
    answer.style.maxHeight=answer.scrollHeight+'px';
  }

})


})