// script.js
let lastScroll = 0;
const header = document.querySelector('header');
const topics = document.querySelectorAll('.topic');

// Hide/Show Header on Scroll
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  if (currentScroll > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Slide in Topic Divs on Scroll
window.addEventListener('scroll', () => {
  topics.forEach((topic, index) => {
    const topicPosition = topic.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Trigger point

    if (topicPosition < screenPosition) {
      if (index % 2 === 0) {
        topic.classList.add('slide-in-left');
        topic.classList.remove('slide-out-left');
      } else {
        topic.classList.add('slide-in-right');
        topic.classList.remove('slide-out-right');
      }
    } else {
      if (index % 2 === 0) {
        topic.classList.add('slide-out-left');
        topic.classList.remove('slide-in-left');
      } else {
        topic.classList.add('slide-out-right');
        topic.classList.remove('slide-in-right');
      }
    }
  });
});