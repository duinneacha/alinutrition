
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

function showMoreText_nst() {
  
  const nstMoreText  = document.getElementById('nst-more-text');
  // let moreButton = document.getElementById('nst-button')
  // nstMoreText.classList.toggle('hide');

  
  if (nstMoreText.style.display === 'none' || nstMoreText.style.display === '' ) {
    nstMoreText.style.display = 'block'
    document.getElementById('nst-button').innerHTML = 'show less . . .';
  } else {
    nstMoreText.style.display = 'none'
    document.getElementById('nst-button').innerHTML = 'show more . . .';
  }
  
}