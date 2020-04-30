export function Stories() {
  const target = document.getElementById('stories-loop');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://data.cityofnewyork.us/resource/gfqj-f768.json');
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    data.forEach((ele, i) => {
      setTimeout(() => {
        target.innerHTML = ele.note_squirrel_park_stories;
      }, i * 10000);
    });
  };
  xhr.send();
}
