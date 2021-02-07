let time = new Date();
let targetDate = new Date(2020, 8,12,11);
const days = $(".days");
const hours = $(".hours");
const minutes = $(".minutes");
const seconds = $(".seconds");

function convertMillis(milliseconds, format) {
    let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

    total_seconds = parseInt(Math.floor(milliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));

    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);

    switch (format) {
        case 's':
            return total_seconds;
        case 'm':
            return total_minutes;
        case 'h':
            return total_hours;
        case 'd':
            return days;
        default:
            return {d: days, h: hours, m: minutes, s: seconds};
    }
};

function counterTimer() {
    function getCounterData(obj) {
        let days = parseInt($('.days', obj).text());
        let hours = parseInt($('.hours', obj).text());
        let minutes = parseInt($('.minutes', obj).text());
        let seconds = parseInt($('.seconds', obj).text());
        return seconds + (minutes * 60) + (hours * 3600) + (days * 3600 * 24);
    }

    function setCounterData(s, obj) {
        let days = Math.floor(s / (3600 * 24));
        let hours = Math.floor((s % (60 * 60 * 24)) / (3600));
        let minutes = Math.floor((s % (60 * 60)) / 60);
        let seconds = Math.floor(s % 60);

        $('.days', obj).html(days);
        $('.hours', obj).html(hours);
        $('.minutes', obj).html(minutes);
        $('.seconds', obj).html(seconds);
    }

    let count = getCounterData($(".counter-time"));

    let timer = setInterval(function () {
        count--;
        if (count == 0) {
            clearInterval(timer);
            return;
        }
        setCounterData(count, $(".counter-time"));
    }, 1000);

}
counterTimer();

window.setInterval( function()
{
    time = new Date();
    if (time > targetDate)
    {
        console.log("Expired");
        clearInterval();
    } else
    {
        let millis = targetDate - time;

        let millisObject = convertMillis(millis);
        days.text(millisObject.d);
        hours.text(millisObject.h);
        minutes.text(millisObject.m);
        seconds.text(millisObject.s);
    };
}, 1000);
