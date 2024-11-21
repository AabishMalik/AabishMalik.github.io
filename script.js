

async function sendMail(mail, msg){
  msg = msg.replace(/\n/g, "%0D%0A");

  var my_mail = "aabishmalik.dev@proton.me";
  var mailTo = "mailto:" + my_mail + "?subject=Contact%20Form&body=" + msg;

  window.open(mailTo);
  return true;
}



function handleSendMessage(){
  var mailbox = document.getElementById("email-inp");
  var message = document.getElementById('msg-box-inp');
  
  var mail = mailbox.value;
  var msg = message.value;

  if (mail == "" || msg == ""){
    alert("Please fill in all fields");
    return;
  }
  if (mail.indexOf("@") == -1){
    alert("Please enter a valid email address");
    return;
  }



  console.log(mail, msg);

  sendMail(mail, msg).then((res) => {});
}