// const nightModeElement = document.getElementById('nightMode')
// nightModeElement.addEventListener('click',function(){
//     ducument.documentElement.classList.toggle('dark-mode')
//     })


//task1
function darkModeFunc() {
    var elemant = document.body;
    elemant.classList.toggle('dark-mode');
}





//task2
function My_Validate() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var comment = document.getElementById('comment').value;

  if (!name || !email || !subject || !comment) {
      alert("لطفاً همه فیلدها را پر کنید.");
      return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("لطفاً یک آدرس ایمیل معتبر وارد کنید.");
      return false;
  }
  alert("موفقیت");
  return true;
}





    


//task3
window.onscroll = function() {scrollFunc()};
function scrollFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}