var clock = $('#clock');
function tick() {
    var time = '';
    var date = new Date();
    time += date.getHours().toString().padStart(2, '0') + ':';
    time += date.getMinutes().toString().padStart(2, '0') + ':';
    time += date.getSeconds().toString().padStart(2, '0');
    clock.text(time);
}
setInterval(tick, 1000);
tick();