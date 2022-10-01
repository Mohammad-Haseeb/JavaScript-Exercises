const make_album= (artist_name,album_title,number_of_tracks)=>{
    if(number_of_tracks==undefined){
        return {artist_name,album_title};

    }
   return {artist_name,album_title,number_of_tracks};

}
console.log(make_album("Haseeb","no",0))
console.log(make_album("Haseeb","no"))
console.log(make_album("Haseeb","no"))
