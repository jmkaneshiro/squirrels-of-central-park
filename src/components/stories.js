export function Stories() {

  const fetchRandomStory = (elementId) => (
    fetch('https://data.cityofnewyork.us/resource/gfqj-f768.json')
    .then(response => response.json())
    .then(data => 
      document.getElementById(elementId).innerHTML = data[Math.floor(Math.random() * data.length)].note_squirrel_park_stories
  ));
  fetchRandomStory('story-details-front');

  const card = document.getElementById('card');

  document.getElementById('card-front').addEventListener('click', function () {
    fetchRandomStory('story-details-back');
    card.classList.toggle('flipped');
  }, false);

  document.getElementById('card-back').addEventListener('click', function () {
    fetchRandomStory('story-details-front');
    card.classList.toggle('flipped');
  }, false);
}
