function showDrow() {
    var c = document.getElementById("container__box");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, 100, 200, 100, 200, 0);
    ctx.stroke();

}

