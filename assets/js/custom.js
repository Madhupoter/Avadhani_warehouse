
function changeImage() {
    var image = document.getElementById('myImage');
   
    if (image.src.match("topView_plan.png")) {
        image.src = "images/topView_plan.png"; 
    }
    else {
        image.src = "images/topView_plan.png";
    }
}

function changeImages() {
    var image = document.getElementById('myImage');
    if (image.src.match("THIRDFLOOR.png")) {
        image.src = "images/THIRDFLOOR.png";
    }
    else {
        image.src = "images/THIRDFLOOR.png";
    }
}
