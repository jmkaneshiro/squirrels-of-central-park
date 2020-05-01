export function Stories() {
  const storyCard = document.getElementById('stories-loop');

  const fetchRandomStory = () => (
    fetch('https://data.cityofnewyork.us/resource/gfqj-f768.json')
    .then(response => response.json())
    .then(data =>
      document.getElementById('stories-loop').innerHTML = data[Math.floor(Math.random() * data.length)].note_squirrel_park_stories
  ));

  fetchRandomStory();

  document.getElementById("test-button").addEventListener("click", fetchRandomStory);
}
