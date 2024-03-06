const poji_ytmp3 = require('youtube-to-mp3-poji');

async function StartYTMP3() {
  try {
    const data = await poji_ytmp3('https://youtu.be/W8DCWI_Gc9c?si=GCkTh2IlLwgeDcFw');
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

StartYTMP3();
