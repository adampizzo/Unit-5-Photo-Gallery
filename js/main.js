let gallery = {
    id:["haybales", "lake", "canyon", "iceberg", "desert", "fall", "plantation", "dunes", "countrysidelane", "sunset", "cave", "bluebells"],
    caption:["I love hay bales. Took this snap on a drive through the countryside past some straw fields.", "The lake was so calm today. We had a great view of the snow on the mountains from here.", "I hiked to the top of the mountain and got this picture of the canyon and trees below.", "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.", "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.", "Fall is coming, I love when the leaves on the trees start to change color.", "I drove past this plantation yesterday, everything is so green!", "My summer vacation to the Oregon Coast. I love the sandy dunes!", "We enjoyed a quiet stroll down this countryside lane.", "Sunset at the coast! The sky turned a lovely shade of orange.", "I did a tour of a cave today and the view of the landscape below was breathtaking.", "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."  ],
    thumbnailsImgSrc: ["./photos/thumbnails/01.jpg", "./photos/thumbnails/02.jpg", "./photos/thumbnails/03.jpg", "./photos/thumbnails/04.jpg", "./photos/thumbnails/05.jpg", "./photos/thumbnails/06.jpg", "./photos/thumbnails/07.jpg", "./photos/thumbnails/08.jpg", "./photos/thumbnails/09.jpg", "./photos/thumbnails/10.jpg", "./photos/thumbnails/11.jpg", "./photos/thumbnails/12.jpg"],
    modalImgSrc: ["./photos/01.jpg", "./photos/02.jpg", "./photos/03.jpg", "./photos/04.jpg", "./photos/05.jpg", "./photos/06.jpg", "./photos/07.jpg", "./photos/08.jpg", "./photos/09.jpg", "./photos/10.jpg", "./photos/11.jpg", "./photos/12.jpg"],
    imgAlt: ["Hay bales in a summer field", "Lake view with mountains in background", "Green trees and canyon area", "Iceberg and glaciers in the distance", "Desert scrubland and mesas", "A scene of the environment during the fall season", "A lush green plantation area", "Dunes at a beach facing away from the water", "A rural road surrounded by nature", "A view of the coast from on high as the sun sets", "A picture from within a cave overlooking a expanse of lush green area below", "A field of bluebells with mountains in the distance"],    
}

for (let i = 0; i < gallery.id.length; i++){
    // document.getElementById("modal-box").innerHTML += ('<figure id="' + gallery.id[i] + '-pic" class="modal-figure"><img class="modal-img hidden" src="' + gallery.modalImgSrc[i] + '" alt="' + gallery.imgAlt[i] + '"><figcaption class="modal-fig-cap ' + gallery.id[i] + '-fig hidden">' + gallery.caption[i] +'</figcaption></figure>');
    document.getElementById("gallery-container").innerHTML += ('<li id="' + gallery.id[i] +'"class="gallery-container-item ' + gallery.id[i] + '"><img src="' + gallery.thumbnailsImgSrc[i] + '" alt="' + gallery.imgAlt[i] + '"></li>');    
    console.log(i);
}

$("#modal-box").addClass("hidden");

