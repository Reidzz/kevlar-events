const rosterItems = [
  {
    img: `<img src="images/roster/resident-bryce-methven.jpg" class="artist-image" alt="#">`,
    resident: `<p class="artist-name">Resident: Bryce Methven</p>`,
    bio: `<p>Bryce Methven founded Kevlar Events in May 2020. 
          Bryce's current aim is to establish seasonal events in Fife. 
          Having gained experience playing at various clubs and gigs, paired with hospitality competencies, 
          Bryce is an excellent host and creates a positive vibe at all of the events he is involved with. 
          You can expect lots of bass when Bryce DJs. Bryce likes to mix rap vocals with house and techno music. 
          An entire set includes several genres and styles. 
          This includes but is not limited to house music, 90s R&B, indie rock melodies, minimal techno and club acapellas.<p> `
  },
  {
    img: '<img src="images/roster/resident-ethan-anderson.jpg" class="artist-image" alt="#">',
    resident: '<p class="artist-name">Resident: Ethan Anderson</p>',
    bio: '<p>' +
         'Ethan Anderson is a DJ and producer based in Dunfermline. ' +
         'He is a resident of the Dunfermline club night EQ. ' +
         'They have been responsible for many wild parties, from the Mash House in Edinburgh to their local Coadys Bar. ' +
         'Ethan currently runs the record label and podcast series Idlestates. ' +
         'His label is a mixture of EBM and industrial sounds, which is a label to watch in 2022.' +
         '</p>'
  }
]

const rosterArtist = document.querySelector(".artist")
const rosterBio = document.querySelector(".bio")
const nextSlide = document.querySelector(".next")
const prevSlide = document.querySelector(".previous")

const maxSlides = rosterItems.length
let currentSlide = 0

prevSlide.classList.add("hidden");

function showData() {
  let leftCol = `<div class="slide-container">
                 ${rosterItems[currentSlide].img}
                 ${rosterItems[currentSlide].resident}
                </div>`
  
  let rightCol = rosterItems[currentSlide].bio
  
  rosterArtist.innerHTML = leftCol
  rosterBio.innerHTML = rightCol
  /*rosterArtist.insertAdjacentHTML('afterbegin', `<div class="item"> ${leftCol} </div>`)
  rosterBio.insertAdjacentHTML('afterbegin', `<div class="item> ${rightCol} </div>`)*/
}
  
showData();

function next() {
  if (currentSlide < maxSlides) {
    currentSlide += 1;
    nextSlide.classList.add("hidden")
    prevSlide.classList.remove("hidden")
  }
  /*if (currentSlide === maxSlides - 1) {
    nextSlide.classList.add("hidden")
  } else {
    prevSlide.classList.remove("hidden")
  }*/
  showData();
}

nextSlide.addEventListener('click', next)

function prev() {
  if (currentSlide > 0) {
    currentSlide -= 1;
    nextSlide.classList.remove("hidden")
    prevSlide.classList.add("hidden")
  }
  /*if (currentSlide <= 0) {
    prevSlide.classList.add("hidden")
  } else {
    nextSlide.classList.remove("hidden")
  }*/
  showData();
}

prevSlide.addEventListener('click', prev)