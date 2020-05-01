export function Stories() {

  const fetchRandomStory = () => (
    fetch('https://data.cityofnewyork.us/resource/gfqj-f768.json')
    .then(response => response.json())
    .then(data => 
      document.getElementById('story-details').innerHTML = data[Math.floor(Math.random() * data.length)].note_squirrel_park_stories
  ));

  const card = document.getElementById('card');

  document.getElementById('card-front').addEventListener('click', function () {
    fetchRandomStory();
    card.classList.toggle('flipped');
  }, false);

  document.getElementById('card-back').addEventListener('click', function () {
    card.classList.toggle('flipped');
  }, false);
}
