burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
const myform = document.getElementById("submit")

burger.addEventListener('click',()=>{
	rightNav.classList.toggle('v-class-resp');
	navList.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
});

myform.addEventListener('click',(e)=>{
	e.preventDefault();
	Swal.fire({
  title: '<strong>Submitted</strong>',
  icon: 'success',
  html:
    'How much you like the project, press the thumbs-up',
  // showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i> Excellent!',
  cancelButtonAriaLabel: 'Thumbs down'})
});
