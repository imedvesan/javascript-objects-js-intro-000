var playlist = {artistNames:'songTitle'};
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}
