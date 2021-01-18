/**
 * Using VS Code plugin: ESLint by Dirk Baeumer
 *
*/



function thrillerSongPicker(num) {
    let thrillerAlbumSongs = ['Human Nature', 'PYT', 'Beat It', 'Billie Jean'];

    console.log('In thriller song picker method');
    return thrillerAlbumSongs[num]
}

const song = thrillerSongPicker(1);
console.log(song)
