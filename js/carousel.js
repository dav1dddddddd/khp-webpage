const container = document.getElementById('carouselContainer');
const track = document.getElementById('carouselTrack');
const dateItem = document.getElementById('dateItem');

const imageUrls = [
  "https://lh3.googleusercontent.com/pw/AP1GczOiXNEdjmFlWIFh1d_xIBzhITg7nFCpC9SW88GiTFvvxbsk98_XwOyb2-frygnuKxMwTkVYY6lmbuCN6XW7zVErTXKoKvRUepiv49W6MPZpeTqanPY4uJkohsRjpz9H9xOzI4asVN1gLm5qKnP3Wh4P8g=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOmaKqf7-S0QME4bbn6Hn0hNsDUb644_jg3x0-vdd2pLqYpZ0n6uZMNpzBXuwsfYexaM-P72xPHfEDQnWy3RvmFzDFex7vsDd6g0sctOqKCg2r91ayOGnU0GChjIB9gqN_qSaeOSZq5Y5Xi8a_zd1wbnw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOUlmRJlfouzFyXil5xT6HWkrzCn0vaF2mJ4g_45geo_uK6CT_gkufE-vHwhTPDRhRCvG5HUQrrFyHjfBXOlGO5VpzbfY8wAqKTmM2t5QCDClZZMLTL4Fm5zDJ0X3ItYo39S4mnbN_XRnjmD2eeyviZBA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPX6tCk1AzfTcPDLenhtO4IIr1RZqbpOMV61M8vNYJy7-CyqVgPWCe7joTykvb_kZ9I7_gHxCcrh3hvWVHJ4MYLrMZ_enxGrelEJl4ZeBtyFdIEEQjt8_MZ2XZbzajuWUqgX0Zw7agXpAM_MtyynF6REw=w489-h869-s-no-gm?authuser=0"
];

const dates = [
  "DEC 22, 2022",
  "14 Feb 2024",
  "JAN 20, 2023",
  "JAN 23, 2023"
];

let currentIndex = 0;
let scrollLock = false;
let accumulatedDelta = 0;
const scrollThreshold = 50;

const dateParagraph = document.querySelector('.date-item p');

function generateCarouselItems() {
  track.innerHTML = '';
  
  imageUrls.forEach((url, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 1}`;
    
    carouselItem.appendChild(img);
    track.appendChild(carouselItem);
  });
}

generateCarouselItems();

const items = document.querySelectorAll('.carousel-item');

function getItemHeight() {
  return items[0].offsetHeight;
}

function animateDateChange(newDate) {
  dateParagraph.style.transform = 'translateY(-20px)';
  dateParagraph.style.opacity = '0';
  dateParagraph.style.fontFamily = 'HandwritingFont';

  setTimeout(() => {
    dateParagraph.textContent = newDate;
    dateParagraph.style.color = '#fff';
    dateParagraph.style.transition = 'none';
    dateParagraph.style.transform = 'translateY(20px)';
    dateParagraph.style.opacity = '0';

    void dateParagraph.offsetWidth;

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
