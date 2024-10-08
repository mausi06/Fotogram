let myImgs = [
  "./img/IMG_1.JPG",
  "./img/IMG_2.JPG",
  "./img/IMG_3.JPG",
  "./img/IMG_4.JPG",
  "./img/IMG_5.JPG",
  "./img/IMG_6.JPG",
  "./img/IMG_7.JPG",
  "./img/IMG_8.JPG",
  "./img/IMG_9.JPG",
  "./img/IMG_10.JPG"
]

function render(){
  let contentRef = document.getElementById('content');
  for (let i = 0; i < myImgs.length; i++) {
    contentRef.innerHTML += getNotesHtml(i);  
  }
}

function getNotesHtml(i) {
  return `<div>
          <div onclick="overlayOpen(${i})" 
            class="image"><img class="homapage-img"       
            src="${myImgs[i]}">
          </div>
          </div> `
}

function overlayOpen(i){
  let refOverlay = document.getElementById('overlay');
  refOverlay.classList.remove('d_none');
  refOverlay.innerHTML = "";
  refOverlay.innerHTML = singleImage(i);
}

function overlayClose(event){
  var targetID = event.currentTarget.id;
  let refOverlay = document.getElementById('overlay');
  if(targetID == 'close-button' || targetID == 'overlay'){
    event.stopPropagation();
    refOverlay.classList.add('d_none');
  } else{
    event.stopPropagation();
  }
}

function prevImage(i){
  if(i < 1) overlayOpen(myImgs.length - 1);
  else overlayOpen(i-1);
}

function nextImage(i){
  if(i >= myImgs.length - 1)overlayOpen(0);
  else overlayOpen(i+1);
}

function singleImage(i){
  return `<div id="pop-up" onclick="overlayClose(event)">
  <div id="pop-up-header">
  <button onclick="overlayClose(event)" id="close-button">&times;</button>
  </div>
      <div id="current-image-div">
        <img id="current-picture" src="${myImgs[i]}">
      </div>
      <div class="buttons-contener">
        <button onclick="prevImage(${i})">&#8656;</button>
        <p>${i+1}/${myImgs.length}</p>
        <button onclick="nextImage(${i})">&#8658;</button>
      </div>
    </div>`
}
