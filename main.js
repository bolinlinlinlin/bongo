const KeyDatas = {
    'A': ['bongo', 0, 'left', 'bongo0.mp3'],
    'D': ['bongo', 1, 'right', 'bongo1.mp3'],
    '1': ['keyboard', 1, 'left', 'keyboard1.mp3'],
    '2': ['keyboard', 2, 'left', 'keyboard2.mp3'],
    '3': ['keyboard', 3, 'left', 'keyboard3.mp3'],
    '4': ['keyboard', 4, 'left', 'keyboard4.mp3'],
    '5': ['keyboard', 5, 'left', 'keyboard5.mp3'],
    '6': ['keyboard', 6, 'right', 'keyboard6.mp3'],
    '7': ['keyboard', 7, 'right', 'keyboard7.mp3'],
    '8': ['keyboard', 8, 'right', 'keyboard8.mp3'],
    '9': ['keyboard', 9, 'right', 'keyboard9.mp3'],
    '0': ['keyboard', 0, 'right', 'keyboard0.mp3'],
    ' ': ['meow', 0, 'mouth', 'mp3']
}

var bongo0 = "bongo0";
var bongo1 = "bongo1";
var keyboard1 = "keyboard1";
var keyboard2 = "keyboard2";
var keyboard3 = "keyboard3";
var keyboard4 = "keyboard4";
var keyboard5 = "keyboard5";
var keyboard6 = "keyboard6";
var keyboard7 = "keyboard7";
var keyboard8 = "keyboard8";
var keyboard9 = "keyboard9";
var keyboard0 = "keyboard0";
var meow = "meow";
for (const key in KeyDatas) {
    let [instrument, tone, action, music] = KeyDatas[key]
    let mp3 = 'sounds/' + music
    let mp3Id = instrument + tone

}

function loadSound() {
    createjs.Sound.registerSound("sounds/bongo0.mp3", bongo0);
    createjs.Sound.registerSound("sounds/bongo1.mp3", bongo1);
    createjs.Sound.registerSound("sounds/keyboard1.mp3", keyboard1);
    createjs.Sound.registerSound("sounds/keyboard2.mp3", keyboard2);
    createjs.Sound.registerSound("sounds/keyboard3.mp3", keyboard3);
    createjs.Sound.registerSound("sounds/keyboard4.mp3", keyboard4);
    createjs.Sound.registerSound("sounds/keyboard5.mp3", keyboard5);
    createjs.Sound.registerSound("sounds/keyboard6.mp3", keyboard6);
    createjs.Sound.registerSound("sounds/keyboard7.mp3", keyboard7);
    createjs.Sound.registerSound("sounds/keyboard8.mp3", keyboard8);
    createjs.Sound.registerSound("sounds/keyboard9.mp3", keyboard9);
    createjs.Sound.registerSound("sounds/keyboard0.mp3", keyboard0);
    createjs.Sound.registerSound("sounds/meow.mp3", meow);
}
function playSound(id) {
    createjs.Sound.play(id);
}
/*for (const key in KeyDatas) {
    createjs.Sound.registerSound(mp3, mp3Id)
    createjs.Sound.play(instrument + tone)
}*/

let keys = []

document.onkeydown = function (event) {
    event.preventDefault()
    key = event.key.toUpperCase()
    if (KeyDatas[key] != undefined) {
        if (keys.indexOf(key) == -1) {
            keys.push(key)
            console.log(key + ' - keydown')

            let [instrument, tone, action, music] = KeyDatas[key]
            createjs.Sound.play(instrument + tone)
            if (instrument == 'meow') {
                document.getElementById('mouth').className = 'on'
            } else {
                document.getElementById('instrument').className =
                    instrument
                if (action == 'left') {
                    document.getElementById('paw-left').className = 'down'
                } else if (action == 'right') {
                    document.getElementById('paw-right').className = 'down'

                }
            }
        }
    }
}

document.onkeyup = function (event) {
    event.preventDefault()
    key = event.key.toUpperCase()
    if (KeyDatas[key] != undefined) {
        console.log(key + ' - keyup')
        if (keys.indexOf(key) != -1) {
            keys.splice(keys.indexOf(key), 1)
        }
    }

    let [instrument, tone, action, music] = KeyDatas[key]

    if (action == 'mouth') {
        document.getElementById('mouth').className = 'on'
    } else if (action == 'left') {
        document.getElementById('paw-left').className = 'up'
    } else if (action == 'right') {
        document.getElementById('paw-right').className = 'up'

    }

}