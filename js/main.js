// let photos = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
// // const $ul = $('<ul>', {class: "gallery-container"}).append();

let gallery = {
    name: ["haybale"],
    location:[],
    caption: [],
}

var modal = document.getElementById("modal-box");
var closeModalLeft = document.getElementById("leftarrow");
var closeModalRight = document.getElementById("rightarrow");

$(closeModalLeft).click(function() {
    $(modal).hide();
});

$(closeModalRight).click(function() {
    $(modal).hide();
});


