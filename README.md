# Youtube To Mp3 Downloader by FauzieEste

A Simple Module To Convert Youtube Video to Mp3

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) to install module.

```bash
npm install youtube-to-mp3-poji
```

## Example Usage

```javascript
const poji_ytmp3 = require('youtube-to-mp3-poji');

async function StartYTMP3() {
  try {
    const data = await poji_ytmp3('https://youtu.be/W8DCWI_Gc9c?si=GCkTh2IlLwgeDcFw'); // link youtube
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

StartYTMP3();
```
## Example Output
```javascript
{
  Developer: 'Fauzie Este',
  Tools: 'Youtube to MP3',
  data: {
    link: 'https://mgamma.123tokyo.xyz/get.php/6/43/W8DCWI_Gc9c.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=85djXJtDzISkA00Edspbqg&s=1709716727&n=%E6%98%A5%E6%97%A5%E5%BD%B1%EF%BC%88%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8CBanG%20Dream_%20It%27s%20MyGO_____%E3%80%8D%237%20%E6%8C%BF%E5%85%A5%E6%AD%8C%EF%BC%89',
    title: "春日影（アニメ「BanG Dream! It's MyGO!!!!!」#7 挿入歌）",
    filesize: 4344729,
    progress: 0,
    duration: 259.70938782424,
    status: 'ok',
    msg: 'success'
  }
}
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

Last Update on : 06 March 2024 by FauzieEste.
