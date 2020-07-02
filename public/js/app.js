
const sideMenu  = document.getElementById('side-menu');
const closeButton = document.getElementById('btn-close');
console.log(closeButton);

closeButton.addEventListener('click', (event) => {
  console.log('Clicking Close Button');
  sideMenu.style.width = '0';
})

function openSlideMenu(){
  console.log("Opening Side Menu");
  // document.getElementById('side-menu').style.width = '250px';
  sideMenu.style.width = '250px';
  // document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(event){
  event.preventDefault();
  console.log(event);
  sideMenu.style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

window.onkeyup = function (event) {
  if (event.keyCode == 27) {
    sideMenu.style.width = '0';
  }
 }

// window.addEventListener('mouseup', function(event){
  
//   if (event.target != sideMenu && event.target.parentNode != sideMenu){
//       sideMenu.style.display = 'none';
//   }
// });