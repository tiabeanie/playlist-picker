Playlist.delete_all
Song.delete_all
User.delete_all

songs =
         [{ title: "Life is a Highway", artist: "Tom Cochrane", genre: "country rock"},
         { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", genre: "classic rock"},
         { title: "Send Me On My Way", artist: "Rusted Root", genre: "folk rock"},
         { title: "American Girl", artist: "Tom Petty", genre: "rock"},
         { title: "Come On Eileen", artist: "Dexys Midnight Runners", genre: "new wave"},
         { title: "Feel It Still", artist: "Portugal. The Man", genre: "alt/indie"},
         { title: "Take A Chance On Me", artist: "ABBA", genre: "pop"},
         { title: "Save Tonight", artist: "Eagle-Eye Cherry", genre: "alt rock"},
         { title: "We've Been Here Our Whole Lives", artist: "Postcard Boy", genre: "alt"},
         { title: "I've Been Waiting", artist: "Uevo", genre: "lofi"},
         { title: "oceans", artist: "SpoonBeats", genre: "lofi"},
         { title: "Benadryl", artist: "Sofi Tukker", genre: "alt"},  
     ]

songs.each do |song|
  Song.create(song)
end