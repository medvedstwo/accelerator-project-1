const aboutSection = document.querySelector('.about');
const playButton = aboutSection.querySelector('.about__video-button');
const videoPoster = aboutSection.querySelector('.about__poster');
const iframe = aboutSection.querySelector('iframe');

const playVideo = () => {
  videoPoster.style.display = 'none';
  playButton.style.display = 'none';
  iframe.style.display = 'block';
};

const initPlayVideo = () => {
  playButton.addEventListener('click', playVideo);
};

export default initPlayVideo;
