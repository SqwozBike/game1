i = 1
function lette() {
    let div = document.createElement('div');
    div.id = 'one' + i;
    div.innerHTML = "Hello world" + (i * 3);
    document.getElementById('answerfield').appendChild(div);
    i++;
}

function oke() {
    let e = document.getElementById('one3').innerHTML;
    console.log(e);
}
var x = 15;
x = parseInt('16.5');
if (isNaN(x)) x = 15;
console.log(x);
var themes = [
    ['imbissbude','Ein Produkt von "Pyaterochka" mit der höchsten Nachfrage unter Studenten'], //0
    ['fackel','Brennender Gegenstand, der zur Beleuchtung oder Feuerübertragung verwendet wird'], //1
    ['gravitation','Die Kraft, die alle Körper zueinander zieht'], //2
    ['kätzchen','Ein kleines süßes Haustier, das gerne spielt und in Taschen schläft'], //3
    ['farbverlauf','Ein sanfter Übergang von einer Farbe zur anderen'], //4
    ['nirvana','Das Ziel des spirituellen Lebens im Buddhismus, ein Zustand vollkommener Ruhe und Befreiung von Leiden'], //5
    ['kimono','Traditionelle japanische Kleidung bestehend aus einem langen bestickten Gewand und einem Gürtel'], //6
    ['pagode','Ein buddhistischer Turmtempel in asiatischer Architektur'], //7
    ['rubin','Ein Edelstein, einer der vier wertvollsten Steine der Welt'], //8
    ['ghetto','Ein Gebiet in der Stadt, in dem Menschen in sozial-ökonomisch benachteiligter Lage leben. Oft handelt es sich um Orte, an denen nationale Minderheiten, Arme, Arbeitslose und Menschen, die unter sozialer und kultureller Isolation leiden, konzentriert sind. In solchen Gebieten sind hohe Gewalt-, Kriminalitäts- und Arbeitslosigkeitsraten sowie niedrige Bildungs- und Gesundheitsversorgungsniveaus typisch.'], //9
    ['skateboard','Eine Sportart mit Tricks, die keine Lenkung hat'], //10
    ['zubarev','Streamer und TikToker, der Pelmeni sehr liebt und in China lebt'], //11
    ['parkour','Eine Sportart (meist auf der Straße), bei der Teilnehmer Hindernisse mit ihrer körperlichen Geschicklichkeit und Kraft überwinden'], //12
    ['metaphysik','Eine philosophische Lehre über die Grundlagen des Seins und der Erkenntnis'], //13
    ['sophistik','Eine Lehre, die auf Künstlichkeit, Ausgeklügeltheit und formaler Logik basiert, anstatt auf Wissen und Wahrheit'], //14
    ['hedonismus','Eine ethische Theorie, die besagt, dass das höchste Gut für den Menschen darin besteht, Vergnügen zu erreichen'], //15
    ['introspektion','Selbstreflexion, innere Betrachtung, Analyse der eigenen Gedanken, Gefühle und Erfahrungen'], //16
    ['psilocybin','Eine Substanz, die in einigen Pilzen vorkommt und Halluzinationen verursacht'], //17
    ['joystick','Ein Gaming-Controller, der in Beat-em-up-Spielen beliebt ist'], //18
    ['isaak','Der Sohn von Abraham und Sarah, den Gott auf dem Berg Moria opfern wollte, aber durch einen Widder ersetzte'], //19
    ['prokrastination','Aufschieben, das Hinauszögern der Ausführung von Aufgaben, die in der aktuellen Zeit erledigt werden sollten'], //20
    ['multifore','Eine Datei für Dokumente'], //21
['tripsitter','Eine Person, die während psychedelischer Erfahrungen als Betreuer fungiert'], //22
['witchhouse','Ein Musikgenre, das in den frühen 2010er Jahren entstanden ist. Es zeichnet sich durch den Einsatz von langsamen, düsteren und monotonen Klängen, atmosphärischen Melodien, Samples aus Horrorfilmen und anderen Elementen der gotischen und mystischen Kultur aus. Der Name des Genres leitet sich von der häufigen Verwendung von Bildern und Symbolik des Hexenwesens und der Magie ab'], //23
['horrorcore','Ein Musikgenre, das Elemente des Horrors und des Raps kombiniert. Es zeichnet sich in der Regel durch dunkle, düstere Texte aus, die Gewalt, Mord, Tod und andere düstere Themen behandeln'], //24
['boskonovich','Der Nachname eines russischen Wissenschaftlers aus dem Spiel Tekken, der Roboter wie Jack und Alisa erschaffen hat'], //25
['lowrider','Ein Auto mit sehr niedriger Bodenfreiheit und manchmal hydraulischer Federung'], //26
['wingsuit','Ein spezieller Anzug für Gleitflüge, eine Variante des Fallschirmspringens'], //27
['fakie','Ein Fahrradtrick, bei dem rückwärts gefahren wird'], // 28
['barspin','Eine 360-Grad-Drehung des Lenkers während eines Fahrradfluges'], // 29
['support','Eine der Spielrollen in Teamspielen'], // 30
['doomfist','Ein Charakter aus Overwatch, dessen Ideologie besagt, dass die Welt einen Dritten Weltkrieg braucht, um die Menschheit besser zu machen'], //31
['eren','Der Hauptcharakter in einem Anime, der sich in einen Titanen verwandeln kann'], //32
['evelon','Ein Twitch-Streamer, der für 192 Tage gesperrt wurde - genau diese Zahl befindet sich am Ende seines Benutzernamens'], //33
['nascar','Eine in den USA beliebte Sportart, die Autorennen auf sehr schnellen Rundkursen umfasst'], //34
['nephilim','Eine Rasse in Devil May Cry, zu der Dante und Vergil gehören'], //35
['uppercut','Ein Schlag, der im Boxen und anderen Kampfsportarten von unten nach oben ausgeführt wird'], //36
['himmel','Das Schöne bei Sonnenuntergang'] //37
];
const randomNum = Math.floor(Math.random() * themes.length);
console.log(randomNum);
console.log(themes.length);
const str = themes[randomNum][0].split('');
var step = Math.ceil(str.length * 1.2);
console.log(step);
function addDiv(i) {
    let div = document.createElement('div');
    div.id = 'a' + i;
    div.className = 'word';
    document.getElementById('answerfield').appendChild(div);
}

function addText(i) {
    let div = document.getElementById('hint')
    div.textContent += themes[randomNum][1][i]
}

function start() {
    console.log(str);
    for (let i = 0; i < str.length; i++)
    {
        setTimeout(function() {
            addDiv(i);
          }, i * 140);
    }
    console.log(themes[randomNum][1].length);
    for (let i = 0; i < themes[randomNum][1].length; i++)
    {
        setTimeout(function() {addText(i);}, i * 13);
    }
    let stepss = document.getElementById('chngsteps');
    stepss.value = step;
}
function chngtimer(i) {
    let timer = document.getElementById('timer');
    timer.innerHTML = i;
    if (i === 0) {output(true)}
}
j = false;
ans = 0;
var l = false;
var lo = true;
function output(a) {
    if ((ans === str.length || step === 0 || a) && lo) {
        setTimeout(function() {
            lo = false;
            l = true;
            let preans = document.getElementById('answ').value;
            preans = preans.toLowerCase();
            var diatext = '';
            console.log(preans);
            console.log(themes[randomNum][0])
            if (ans === str.length || preans === themes[randomNum][0]) {
                //window.alert('eq');
                diatext = 'du hast gewonnen!';
            } else {
                //window.alert('ne');
                diatext = 'du hast verloren!';
            }
            let div = document.getElementById('outputansw');
            div.innerHTML = themes[randomNum][0];
            const dialog = document.querySelector("dialog")
            dialog.prepend(diatext);
            dialog.showModal() // Opens a modal
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                  const dialog = document.querySelector('dialog');
                  if (dialog && dialog.open) {
                    location.reload();
                  }
                }
              });
          }, 100);
    }
}
function letter(btn) {
    if (!j) {
        j = true;
        let div = document.getElementById('seconds');
        x = parseInt(div.value);
        if (isNaN(x) || x < 1) { x = 15 };
        let chngsteps= document.getElementById('chngsteps');
        y = parseInt(chngsteps.value);
        console.log('y = ', y);
        if (isNaN(y) || y < 1) { y = step};
        let st = document.getElementById('steps');
        st.innerHTML = y;
        step = y;
        chngsteps.style.visibility = 'hidden';
        let timer = document.getElementById('timer');
        let quickansw = document.getElementById('quickansw');
        let time = document.getElementById('time');
        time.style.visibility = 'hidden';
        quickansw.style.visibility = 'visible';
        timer.innerHTML = x;
        timer.style.visibility = 'visible';
        var q = false;
        for (let i = x; i >= 0; i--) {
            (function(j) {
              setTimeout(function() { chngtimer(j); }, (x - j) * 1000);
            })(i);
            if (i === 0) {q = true;};
          }
    }
    console.log(btn.innerHTML);
    var k = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === btn.innerHTML) {
            let div = document.getElementById('a' + i);
            div.innerHTML = btn.innerHTML;
            k = true;
            ans++;
        }
    }
    step--;
    let steps= document.getElementById('steps');
    steps.innerHTML = step;
    console.log(k);
    if (k) {
        btn.classList.add('right');
    } else {
        btn.classList.add('wrong');
    }
    output(false);
    if(l) {return;};
}