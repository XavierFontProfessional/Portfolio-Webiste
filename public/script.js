window.addEventListener('load', function () {
    const button = document.getElementById('loading-screen').querySelector("button");
    const spinner = document.querySelector(".loading-spinner");

    spinner.style.visibility = "hidden";
    button.style.visibility = "visible";

});

function removeLoadScreen() {
    const loadScreen = document.getElementById('loading-screen');
    loadScreen.style.display = 'none';
}

let absoluteScrollPosition = 0;

function innerNavigateTo(title) {
    switch (title) {
        case "design":
            absoluteScrollPosition = 4;
            moveElements(0);
            break;
        case "software":
            absoluteScrollPosition = 5;
            moveElements(0);
            break;
        case "audiovisual":
            absoluteScrollPosition = 6;
            moveElements(0);
            break;
        case "personal-data":
            absoluteScrollPosition = 7;
            moveElements(0);
            break;
    }

}

function moveElements(n) {

    const scrollAmount = 1;

    if (n <= 0 && absoluteScrollPosition <= 0) return;
    if (n >= 0 && absoluteScrollPosition > 7) return;
    if (n < 0 && absoluteScrollPosition < 5) return;


    // Apply fixed scroll amount
    if (n < 0) {
        absoluteScrollPosition -= scrollAmount;
    } else {
        absoluteScrollPosition += scrollAmount;
    }


    if (absoluteScrollPosition >= 1) {
        document.querySelector("#instructions-screen").style.opacity = "0";
        document.querySelector("#instructions-screen").style.visibility = "hidden";
        document.querySelector("nav").style.top = "0";
        monsterEntrance();
    } else {
        monsterEntranceReverse();
    }

    if (absoluteScrollPosition >= 2) {
        heroAndCliffEntrance();
    } else {
        heroAndCliffEntranceReverse();
    }

    if (absoluteScrollPosition >= 3) {
        specialityEntrance();
    } else {
        specialityEntranceReverse();
    }

    if (absoluteScrollPosition >= 4) {
        birthNameEntrance();
    } else {
        birthNameEntranceReverse();
    }

    if (absoluteScrollPosition >= 5) {
        welcomeExit();
        designEntrance();
    } else {
        welcomeExitReverse();
        designEntranceReverse();
    }

    if (absoluteScrollPosition >= 6) {
        designExit();
        developmentEntrance();
    } else {
        developmentEntranceReverse();
    }

    if (absoluteScrollPosition >= 7) {
        developmentExit();
        filmEntrance();
    } else {
        filmEntranceReverse();
    }

    if (absoluteScrollPosition >= 8) {
        filmExit();
        personalDataEntrance();
    } else {
        personalDataEntranceReverse();
    }
}

let isScrolling = false;

window.addEventListener('wheel', function (e) {
    if (!isScrolling) {
        isScrolling = true;
        moveElements(e.deltaY);
        setTimeout(() => {
            isScrolling = false
        }, 500);
    }
});


function monsterEntrance() {
    let monster = document.querySelector(".nature-view-asset#monster-transparent");
    let bakedInMonster = document.querySelector(".nature-view-asset#island-with-monster");

    monster.style.transition = "top 1.5s ease-out, opacity 1.5s ease-out";
    monster.style.top = "0";
    monster.style.opacity = "1";

    bakedInMonster.style.transition = "opacity 0.5s ease-out 1.5s";
    bakedInMonster.style.opacity = "1";
}

function monsterEntranceReverse() {
    let monster = document.querySelector(".nature-view-asset#monster-transparent");
    let bakedInMonster = document.querySelector(".nature-view-asset#island-with-monster");

    bakedInMonster.style.transition = "opacity 0.5s ease-in 0s";
    bakedInMonster.style.opacity = "0";

    monster.style.transition = "top 1.5s ease-in 0.5s, opacity 1.5s ease-in 0.5s";
    monster.style.top = "-100%";
    monster.style.opacity = "0";
}

function heroAndCliffEntrance() {
    let cliff = document.querySelector(".nature-view-asset#cliff");
    let hero = document.querySelector(".nature-view-asset#hero");
    hero.style.top = "0";
    cliff.style.top = "0";
}

function heroAndCliffEntranceReverse() {
    let cliff = document.querySelector(".nature-view-asset#cliff");
    let hero = document.querySelector(".nature-view-asset#hero");
    hero.style.top = "100%";
    cliff.style.top = "100%";
}

function specialityEntrance() {
    let speciality = document.querySelector("section#welcome h1")
    speciality.style.transition = "transform 2s";
    speciality.style.transform = "translateY(0%)";
}

function specialityEntranceReverse() {
    let speciality = document.querySelector("section#welcome h1")
    speciality.style.transition = "transform 2s";
    speciality.style.transform = "translateY(-200%)";
}

function birthNameEntrance() {
    let birthName = document.querySelector("section#welcome h2")
    birthName.style.transition = "transform 2s";
    birthName.style.transform = "translateY(0%)";
}

function birthNameEntranceReverse() {
    let birthName = document.querySelector("section#welcome h2")
    birthName.style.transition = "transform 2s";
    birthName.style.transform = "translateY(-600%)";
}

function welcomeExit() {
    let welcomeTitle = document.querySelector("section#welcome")
    welcomeTitle.style.transition = "transform 2s";
    welcomeTitle.style.transform = "translateX(-150%)";
}

function welcomeExitReverse() {
    let welcomeTitle = document.querySelector("section#welcome")
    welcomeTitle.style.transition = "transform 2s";
    welcomeTitle.style.transform = "translateX(0%)";
}

function designEntrance() {
    let design = document.querySelector("section#design");
    design.style.visibility = "visible";
    design.style.transition = "transform 2s";
    design.style.transform = "translateX(-100.25%)";
}

function designEntranceReverse() {
    let design = document.querySelector("section#design");
    design.style.transition = "transform 2s, visibility 2s";
    design.style.transform = "translateX(100.25%)";
    design.style.visibility = "hidden";
}

function designExit() {
    let design = document.querySelector("section#design");
    design.style.transition = "transform 2s, visibility 2s";
    design.style.transform = "translateX(-200.25%)";
    design.style.visibility = "hidden";
}

function developmentEntrance() {
    let development = document.querySelector("section#development");
    development.style.visibility = "visible";
    development.style.transition = "transform 2s";
    development.style.transform = "translateX(-200.5%)";
}

function developmentEntranceReverse() {
    let development = document.querySelector("section#development");
    development.style.transition = "transform 2s, visibility 2s";
    development.style.transform = "translateX(200.5%)";
    development.style.visibility = "hidden";
}

function developmentExit() {
    let development = document.querySelector("section#development");
    development.style.transition = "transform 2s, visibility 2s";
    development.style.transform = "translateX(-300.5%)";
    development.style.visibility = "hidden";
}

function filmEntrance() {
    let film = document.querySelector("section#film");
    film.style.visibility = "visible";
    film.style.transition = "transform 2s";
    film.style.transform = "translateX(-300.75%)";
}

function filmEntranceReverse() {
    let film = document.querySelector("section#film");
    film.style.transition = "transform 2s, visibility 2s";
    film.style.transform = "translateX(300.75%)";
    film.style.visibility = "hidden";
}

function filmExit() {
    let film = document.querySelector("section#film");
    film.style.transition = "transform 2s, visibility 2s";
    film.style.transform = "translateX(-400.75%)";
    film.style.visibility = "hidden";
}

function personalDataEntrance() {
    let personalData = document.querySelector("section#personal-data");
    personalData.style.visibility = "visible";

    personalData.style.transition = "transform 2s";
    personalData.style.transform = "translateX(-401%)";
}

function personalDataEntranceReverse() {
    let personalData = document.querySelector("section#personal-data");
    personalData.style.transition = "transform 2s, visibility 2s";
    personalData.style.transform = "translateX(401%)";
    personalData.style.visibility = "hidden";
}

const containers = document.querySelectorAll('.demos-container, .tools-container');
let isDown = false;
let startX;
let scrollLeft;

const dragLogic = (element) => {
    element.addEventListener('mousedown', (e) => {
        isDown = true;
        element.classList.add('active');
        element.childNodes.forEach((child) => {
            if (child.classList && (child.classList.contains('tools-category') || child.classList.contains('demo'))) {
                child.classList.add('active');
            }
        });
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
    });

    element.addEventListener('mouseleave', function () {
        isDown = false;
        element.classList.remove('active');
        element.childNodes.forEach((child) => {
            if (child.classList && (child.classList.contains('tools-category') || child.classList.contains('demo'))) {
                child.classList.remove('active');
            }
        });
    });

    element.addEventListener('mouseup', () => {
        isDown = false;
        element.classList.remove('active');
        element.childNodes.forEach((child) => {
            if (child.classList && (child.classList.contains('tools-category') || child.classList.contains('demo'))) {
                child.classList.remove('active');
            }
        });
    });

    element.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        element.scrollLeft = scrollLeft - walk;
    });
}

containers.forEach(container => {
    dragLogic(container);
});

let toolsContainers = document.querySelectorAll('.tools-container');
let hero = document.querySelector('#hero');
let cliff = document.querySelector('#cliff');
// get the elements
toolsContainers.forEach(function (toolsContainer) {
    // For mouse
    toolsContainer.addEventListener('mouseover', function () {
        hero.style.opacity = "0";
        cliff.style.opacity = "0";
        hero.style.top = "200%";
        cliff.style.top = "200%";
    });

    toolsContainer.addEventListener('mouseout', function () {
        hero.style.opacity = "1";
        cliff.style.opacity = "1";
        hero.style.top = "0";
        cliff.style.top = "0";
    });

    // For touch
    toolsContainer.addEventListener('touchstart', function () {
        hero.style.opacity = "0";
        cliff.style.opacity = "0";
        hero.style.top = "200%";
        cliff.style.top = "200%";
    });

    toolsContainer.addEventListener('touchend', function () {
        hero.style.opacity = "1";
        cliff.style.opacity = "1";
        hero.style.top = "0";
        cliff.style.top = "0";
    });
});

let personalData = document.querySelector("#personal-data").querySelector(".personal-data-container");

personalData.addEventListener("mouseover", function () {
    hero.style.opacity = "0";
    cliff.style.opacity = "0";
    hero.style.top = "200%";
    cliff.style.top = "200%";
})

personalData.addEventListener("mouseout", function () {
    hero.style.opacity = "1";
    cliff.style.opacity = "1";
    hero.style.top = "0";
    cliff.style.top = "0";
})

personalData.addEventListener("touchstart", function () {
    hero.style.opacity = "0";
    cliff.style.opacity = "0";
    hero.style.top = "200%";
    cliff.style.top = "200%";
})

personalData.addEventListener("touchend", function () {
    hero.style.opacity = "1";
    cliff.style.opacity = "1";
    hero.style.top = "0";
    cliff.style.top = "0";
})


let startTouchPositionX = 0;
let startTouchPositionY = 0;
let touchDragDistanceX = 0;
let touchDragDistanceY = 0;

window.addEventListener('touchstart', function (e) {
    startTouchPositionX = e.touches[0].clientX;
    startTouchPositionY = e.touches[0].clientY;
});

window.addEventListener('touchmove', function (e) {
    if (!isScrolling) {
        let endTouchPositionX = e.touches[0].clientX;
        let endTouchPositionY = e.touches[0].clientY;
        touchDragDistanceX = startTouchPositionX - endTouchPositionX;
        touchDragDistanceY = startTouchPositionY - endTouchPositionY;

        // If vertical scroll is greater than horizontal scroll, trigger the moveElements function
        if (Math.abs(touchDragDistanceY) > Math.abs(touchDragDistanceX)) {
            isScrolling = true;
            moveElements(touchDragDistanceY);
            setTimeout(() => {
                isScrolling = false
            }, 500);
        }

        startTouchPositionX = endTouchPositionX;
        startTouchPositionY = endTouchPositionY;
    }
});

/////////

function createCall() {
    const remoteVideo = document.getElementById('remoteVideo');
    const spinner = document.querySelector("#video-call").querySelector(".main-content").querySelector(".loading-spinner");
    const callButton = document.querySelector("#video-call").querySelector(".main-content").querySelector("button");

    callButton.style.display = "none";
    spinner.style.display = "inline";

    let peer = new Peer(); // create a new peer instance
    peer.on('open', function (id) {
        console.log('My peer ID is: ' + id);
        fetch('/making_call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                // Handle the response as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    // Wait for an incoming call
    peer.on('call', function (call) {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then(stream => {
                call.answer(stream); // Answer the call with our stream from getUserMedia
                call.on('stream', function (remoteStream) {
                    // Show stream in some video/canvas element.

                    remoteVideo.srcObject = remoteStream;
                    remoteVideo.onloadedmetadata = function () {
                        remoteVideo.play();
                    };
                });
                spinner.style.display = "none";
                remoteVideo.style.display = "block";
            })
            .catch(error => {
                console.error('Error accessing media devices:', error);
            });
    });

}


// Function to handle the visibility of 'nav ul' based on screen width
function handleNavUlVisibility() {
    if (window.innerWidth > 782) {
        document.querySelector('nav ul').style.display = 'block';
    } else {
        document.querySelector('nav ul').style.display = 'none';
    }
}

// Event listener for the hamburger menu click event
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    let navUlDisplay = document.querySelector('nav ul').style.display;
    document.querySelector('nav ul').style.display =
        navUlDisplay === 'block' ? 'none' : 'block';
});

// Event listener for window resize event
window.addEventListener('resize', handleNavUlVisibility);

// Initial call to handle 'nav ul' visibility
handleNavUlVisibility();


function textToVideoFetch() {
    let ttsDialog = document.querySelector("#text-to-video-dialog");
    let spinner = document.querySelector("#text-to-video").querySelector(".loading-spinner");
    spinner.style.display = "block";
    ttsDialog.querySelectorAll("button")[0].style.display = "inline-block";

    const url = 'https://codemty.net/video_instructions';
    const data = {
        "script": document.querySelector("#script_input").value,
        "renderEngine": "SentenceAO",
        "voice": "en-US-JasonNeural",
        "filter": "BlackAndWhite",
        "subtitlesFont": "Arial",
        "subtitlesColor": "FFFFFF",
        "subtitlesBackground": "000000",
        "subtitlesPosition": "Bottom"
    };

    let ttsProjectDescription = `
            <p>Welcome to the <strong>Text-To-Video</strong> project! This project is a unique
                                innovation in video creation that I developed. This was the first project of its kind to
                                utilize Rust, and to my knowledge, the only one to date. This project utilizes the
                                fastest web server framework (Rust's Actix Web) to convert textual scripts into engaging
                                videos.</p>

                                <br>

                                <p>The process begins when a user inputs a script and video settings:</p>

                                <br>

                                <p>
                                    ${JSON.stringify(data)}
                                </p>

                                <br>

                                <p>Once the server receives the user's input, it springs into action. Utilizing Actix
                                    Web, the fastest HTTP server framework, the server quickly writes instructions in
                                    FFMPEG for the client's browser to render the video. The data sent to the browser
                                    includes visual media, custom audio binaries (converted to base-256 from an MP3
                                    received from Microsoft's AI TTS to avoid data storage and maximize server availability and
                                    cost efficiency), and rendering instructions. This process allows the server to
                                    offload as much work as possible, maximizing efficiency.</p>

                                <br>

                                <p>The client's browser then renders the video. This process has been perfected for iOS
                                    and Android platforms, and I'm currently developing a version of this project
                                    tailored for my portfolio website. The previous version was performance intensive
                                    for the client's browser, so I'm working on improvements. Stay tuned for
                                    updates!</p>
            `;

    fetch(url, {
        method: 'POST', // or 'GET'
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer YOUR_TOKEN' // if needed
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json()) // Parses the response as JSON
        .then(data => {
            // Save the response to a data variable
            ttsDialog.querySelector("div").innerHTML = ttsProjectDescription;
            spinner.style.display = "none";
            ttsDialog.showModal();

            // Add the event listener to the button
            ttsDialog.querySelector("button").addEventListener("click", function () {
                ttsDialog.querySelector("div").innerHTML = JSON.stringify(data);
                ttsDialog.querySelectorAll("button")[0].style.display = "none";
            });
        })
        .catch(error => {
            console.error('So sad... Error:', error)
            ttsDialog.querySelector("div").innerHTML = ttsProjectDescription;
            spinner.style.display = "none";
            ttsDialog.showModal();

            ttsDialog.querySelector("button").addEventListener("click", function () {
                ttsDialog.querySelector("div").innerHTML = "Error 76R8V7T: Connection to the server unsecure, sorry... I owe one."
                ttsDialog.querySelectorAll("button")[0].style.display = "none";
            })
        }); // Handle any errors


}