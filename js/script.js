var clock = new Vue({
    el: '#clock',
    data: {
        hide: false,
        hours: '00',
        minutes: '00',
        seconds: '00'
    }
});
function tick() {
    var date = new Date();
    clock.data.hours = '0' + date.getHours();
    clock.data.minutes = '0' + date.getMinutes();
    clock.data.seconds = '0' + date.getSeconds();
}
setTimeout(tick, 1000);