const container = document.getElementById('carouselContainer');
const track = document.getElementById('carouselTrack');
const dateItem = document.getElementById('dateItem');

const items = document.querySelectorAll('.carousel-item');
const dates = [
  "01 Jan 2024",
  "14 Feb 2024",
  "30 Mar 2024",
  "15 Apr 2024"
];

let currentIndex = 0;
let scrollLock = false;
let accumulatedDelta = 0;
const scrollThreshold = 50;

const dateParagraph = document.querySelector('.date-item p');

function getItemHeight() {
  return items[0].offsetHeight;
}

function animateDateChange(newDate) {
  // Animate up and fade out
  dateParagraph.style.transform = 'translateY(-20px)';
  dateParagraph.style.opacity = '0';
  dateParagraph.style.fontFamily = 'HandwritingFont';

  setTimeout(() => {
    // Change text while hidden and shifted down
    dateParagraph.textContent = newDate;
    dateParagraph.style.color = '#fff'; // Reset color in case browser messes up blend
    dateParagraph.style.transition = 'none';
    dateParagraph.style.transform = 'translateY(20px)';
    dateParagraph.style.opacity = '0';

    // Force reflow
    void dateParagraph.offsetWidth;

    // Animate back to center and fade in
    dateParagraph.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    dateParagraph.style.transform = 'translateY(0)';
    dateParagraph.style.opacity = '1';
  }, 400);
}


function scrollToIndex(index) {
  const offset = getItemHeight() * index;
  track.style.transform = `translateY(-${offset}px)`;

  animateDateChange(dates[index]);

  scrollLock = true;
  setTimeout(() => {
    scrollLock = false;
    accumulatedDelta = 0;
  }, 500);
}


container.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (scrollLock) return;

  accumulatedDelta += e.deltaY;

  if (accumulatedDelta > scrollThreshold && currentIndex < items.length - 1) {
    currentIndex++;
    scrollToIndex(currentIndex);
  } else if (accumulatedDelta < -scrollThreshold && currentIndex > 0) {
    currentIndex--;
    scrollToIndex(currentIndex);
  }
}, { passive: false });

document.getElementById('btnUp').addEventListener('click', () => {
  if (scrollLock || currentIndex === 0) return;
  currentIndex--;
  scrollToIndex(currentIndex);
});

document.getElementById('btnDown').addEventListener('click', () => {
  if (scrollLock || currentIndex === items.length - 1) return;
  currentIndex++;
  scrollToIndex(currentIndex);
});
