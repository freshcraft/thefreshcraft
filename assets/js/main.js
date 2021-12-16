particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#c1d72e"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 15,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 0.5748589542494394
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});


function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60),
        seconds: Math.floor((time / 1000) % 60),
        total: time
    };
}

function animateClock(span) {
    span.className = "animate__flipOutY";
    setTimeout(function() {
        span.className = "";
    }, 1000);
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function() {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML =
            "<span>" +
            timer.days +
            "</span>"
            // "<span>" +
            // timer.hours +
            // "</span>" +
            // "<span>" +
            // timer.minutes +
            // "</span>" +
            // "<span>" +
            // timer.seconds +
            // "</span>"
        ;

        //animation
        var spans = clock.getElementsByTagName("span");
        animateClock(spans[3]);
        if (timer.seconds == 59) animateClock(spans[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59)
            animateClock(spans[0]);

        //check for end of time

        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML =
                "<span>0</span><span>0</span><span>0</span><span>0</span>";
        }
    }, 1000);
}

window.onload = function() {
    var deadline = new Date("December 21, 2021 12:00:00");
    startTimer("clock", deadline);
};