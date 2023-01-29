// import all mp3 files from the ./mp3 folder

const files = require.context('/mp3', false, /\.mp3$/);

const data = files.keys().map(key => {
  return {
    name: key.replace(`./`, ``),
    path: files(key),
  };
});

export const songs = data.map((song, index) => {
  return {
    ...song,
    id: index,
  };
});
