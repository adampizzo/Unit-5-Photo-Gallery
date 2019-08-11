let photos = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
// const $ul = $('<ul>', {class: "gallery-container"}).append();

for(let i=1; i < (photos.length+1); i++) {
    if (i <= 9) {
        $('.gallery-container').append('<li class="gallery-container-item"><img src="./photos/thumbnails/0' + i + '.jpg"></li>');
    }
    else
    {
        $('.gallery-container').append('<li class="gallery-container-item"><img src="./photos/thumbnails/' + i + '.jpg"></li>');
    }
  
    console.log(i);
}

