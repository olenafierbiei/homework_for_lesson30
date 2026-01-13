var playlist = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { autor: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" }
];

const listElement = document.getElementById('playlist');

playlist.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="author">${item.author}</span> - <span class="song">${item.song}</span>`;
  listElement.appendChild(li);
});