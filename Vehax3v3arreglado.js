// Script Editado por Ney Denitive. keurygcds#0000, (Este script no fue escrito por mi persona, Solo le hice modificaciones como añadir funciones y Traducir a español gran parte del el script, Creditos del autor original :), wazar94 //
// Script Editado para compartir con los demas jugadores de haxball de futsal //

// Soporte 
// 1- Para obtener rango de dueño de sala se debe de usar el comando !vhl contraseña el comando se puede editar a tu pref
// 2- Este script es para colocar en una headless (La de haxball)

// PASOS //

// 1- Para esto: Entrar a la pagina de haxball headless (Busca en google)
// 2- Dale a impecionar y seleciona consola y dale a top
// 3- Pega el codigo y dale enter en la ultima linea del codigo (Se pone en la ultima linea solo cuando pegas el codigo)
// 4- Una vez que des enter tienes que hacer la verificacion (No soy un robot), Una vez que lo hagas obtendras el link para la sala
// 5- La contraseña del dueño de sala se reinicia cada vez que creas la sala (Random), La contraseña te debe de salir justo abajo de donde esta el codigo pegado en la headless de haxball Dira: Master Pass: (Y la contraseña son de 4 - 5 numeros)
// DONDE MAS ES ENVIADA (La contraseña tambien es enviada a la Webhook de juego osea la (gameWebhook) Junto al link de la sala (Porfavor pon el canal de discord de la (gameWebhook) Privado) *//


// QUE ES UNA WEBHOOK //

// Esta es un bot generado para un servidor de discord que tiene la capacida de enviar mensajes en x canal el uso puede depeder //
// En este caso se utiliza para enviar el link de la sala, Contraseña, Grabaciones de partidos, Chat de la sala, Entradas y salidas
// Recuerdo que hay dos tipos de webhook que esta ambas en la lineas #32 y #34 //

/* VARIABLES */

/* ROOM */

const roomName = 'Vehax 3v3 🟡🔵🔴'; // Coloca un nombre para la sala //
const maxPlayers = 15; // Coloca maximos jugadores por sala //
const roomPublic = true; //True = Sala publica, False = Sala privada, en caso de pornela privado solo se puede entrar por el link
const geo = [{"code": "ve", "lat": 10.5,"lon": -66.9}]; // Aqui se edita la ubicacion de donde aparece la sala en este caso venezuela, Si quieres otra ubicacion puedes preguntale a una ia que te genere una const geo x pais
const token = "thr1.AAAAAGUHZeJY2yBs-7In_Q.WAPeWaPl75w"; // Coloca un token. (Puedes obtener uno buscado haxball token)

var llamaradminWebhook = 'https://discord.com/api/webhooks/1164369940451688569/Fy1p84qtDPRal9cP0vmjnkfhhJ_lt2tYCtJ05hne_9XAsibPLRQZ0BkPUuKQPqhUJLfi'
var roomWebhook = 'https://discord.com/api/webhooks/1137413321994281050/Cn43kCiE-13CMAaSsl8-WKMypgPNG2Ix8H77-1SYuVtmnXhwbXcgU7-9YK3CSVXsIjg8'; // Esta se usara para enviar los mensajes del chat: Entradas, Salidas, Clave del dueño de sala, etc, Por favor pon la webhook en un canal privado
var gameWebhook = 'https://discord.com/api/webhooks/1137762195455885423/Y2WPXbtIVGBzGKhBHLI9iAmgvmjd81L-bIKhFYzkqq32NYrsIg_YQnpq_bflPcK7oNZo'; // Aqui se envia los archivos hbr2 (Archivos de grabacion de haxball), Y tambien las estadisticas de cada partido que se complete
var fetchRecordingVariable = true;
var timeLimit = 3;
var scoreLimit = 3;

var gameConfig = {
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
    geo: geo[0]  
}

if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}

var room = HBInit(gameConfig);

const trainingMap = '{ "name": "Vehax No goles [OFICIAL BY NEY]", "width": 510, "height": 230, "cameraWidth": 0, "cameraHeight": 0, "maxViewWidth": 0, "cameraFollow": "ball", "spawnDistance": 150, "redSpawnPoints": [ [ -150, 0 ], [ -270, 0 ] ], "blueSpawnPoints": [ [ 150, 0 ], [ 270, 0 ] ], "canBeStored": false, "kickOffReset": "full", "bg": { "color": "1D2431", "height": 200, "width": 400 }, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "vertexes": [ { "x": -400, "y": -200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": 401, "y": -200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": -401, "y": 200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": 401, "y": 200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": -400, "y": 70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": -400, "y": 201, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": 400, "y": 70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": 400, "y": 201, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": -400, "y": -200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": -400, "y": -70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": 400, "y": -201, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": 400, "y": -70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": -436, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "E51D44" }, { "x": -400, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "E51D44" }, { "x": -436, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44" }, { "x": -400, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44" }, { "x": -435, "y": -71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44", "curve": -35 }, { "x": -435, "y": 71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44", "curve": -35 }, { "x": 435, "y": -71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5", "curve": 35 }, { "x": 435, "y": 71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5", "curve": 35 }, { "x": 436, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "411DE5" }, { "x": 400, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "411DE5" }, { "x": 436, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5" }, { "x": 400, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5" }, { "x": -400, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ff6666" }, { "x": -400, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ff6666" }, { "x": 400, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "6666ff" }, { "x": 400, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "6666ff" }, { "x": 270, "y": 3.2938322410201697, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff" }, { "x": 270, "y": 0, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff" }, { "x": 0, "y": -230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": true, "color": "ACB9D1" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": true, "color": "ACB9D1" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ACB9D1", "vis": true }, { "x": 0, "y": 230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ACB9D1", "vis": true }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "0A1524" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "0A1524" }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "2E3440" }, { "x": 0, "y": 81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "2E3440" }, { "x": -402, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -402, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -398, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3" }, { "x": -398, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3" }, { "x": 398, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3", "curve": 0 }, { "x": 398, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3", "curve": 0 }, { "x": 402, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 402, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 0, "y": 25.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 25.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 28.799999999999997, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -20.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 28.799999999999997, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -20.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 33, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -16.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 33, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -16.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 36.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -12.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 36.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -12.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 1, "y": 32.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": -1, "y": 32.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": 28, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -26, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": 30, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -26, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "DBF808" }, { "x": 0, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "DBF808" }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ACB9D1" }, { "x": 1, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ACB9D1" }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -180, "color": "ACB9D1" }, { "x": 1, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -180, "color": "ACB9D1" }, { "x": -270, "y": 3.2938322410201697, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff" }, { "x": -270, "y": 0, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff" } ], "segments": [ { "v0": 0, "v1": 1, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "y": -200 }, { "v0": 2, "v1": 3, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "y": 200 }, { "v0": 4, "v1": 5, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "x": -400 }, { "v0": 6, "v1": 7, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "x": 400 }, { "v0": 8, "v1": 9, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 10, "v1": 11, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10 }, { "v0": 12, "v1": 13, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10 }, { "v0": 14, "v1": 15, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "y": 70 }, { "v0": 16, "v1": 17, "curve": -35, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10 }, { "v0": 18, "v1": 19, "curve": 35, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "x": 435 }, { "v0": 20, "v1": 21, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10 }, { "v0": 22, "v1": 23, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "y": 70 }, { "v0": 24, "v1": 25, "color": "ff6666", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -400 }, { "v0": 26, "v1": 27, "color": "6666ff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 400 }, { "v0": 28, "v1": 29, "curve": 0, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 270 }, { "v0": 29, "v1": 28, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 270 }, { "v0": 28, "v1": 29, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 270 }, { "v0": 30, "v1": 31, "vis": true, "color": "ACB9D1", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0 }, { "v0": 32, "v1": 33, "vis": true, "color": "ACB9D1", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0 }, { "v0": 34, "v1": 35, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "x": 0 }, { "v0": 36, "v1": 37, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "x": 0 }, { "v0": 38, "v1": 39, "curve": -180, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 39, "v1": 38, "curve": -180, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 40, "v1": 41, "color": "353C4A", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -402 }, { "v0": 42, "v1": 43, "color": "a3a3a3", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -398 }, { "v0": 44, "v1": 45, "curve": 0, "color": "a3a3a3", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 398 }, { "v0": 46, "v1": 47, "curve": 0, "color": "353C4A", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 402 }, { "v0": 48, "v1": 49, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 50, "v1": 51, "curve": -21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 52, "v1": 53, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 54, "v1": 55, "curve": -21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 56, "v1": 57, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 58, "v1": 59, "curve": -21.6111165552953, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 60, "v1": 61, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 62, "v1": 63, "curve": -21.61111655529531, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 49, "v1": 61, "curve": 20.934242330086946, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 63, "v1": 51, "curve": 20.93424233008692, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 49, "v1": 61, "curve": 38.08709223936826, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 63, "v1": 51, "curve": 38.08709223936821, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 64, "v1": 65, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 66, "v1": 67, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 67, "v1": 66, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 68, "v1": 69, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 69, "v1": 68, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 70, "v1": 71, "curve": 0, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 72, "v1": 73, "curve": 180, "color": "ACB9D1", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": -100 }, { "v0": 74, "v1": 75, "curve": -180, "color": "ACB9D1", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": -100 }, { "v0": 76, "v1": 77, "curve": 0, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -270 }, { "v0": 77, "v1": 76, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -270 }, { "v0": 76, "v1": 77, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -270 } ], "goals": [], "discs": [ { "radius": 5, "invMass": 0, "pos": [ -400, -70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "radius": 5, "invMass": 0, "pos": [ -400, 70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "radius": 5, "invMass": 0, "pos": [ 400, -70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "radius": 5, "invMass": 0, "pos": [ 400, 70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] } ], "planes": [ { "normal": [ 0, 1 ], "dist": -230, "cMask": [ "red", "blue" ] }, { "normal": [ 0, -1 ], "dist": -230, "cMask": [ "red", "blue" ] }, { "normal": [ -1, 0 ], "dist": -510, "cMask": [ "red", "blue" ], "cGroup": [ "wall" ] }, { "normal": [ 1, 0 ], "dist": -510, "cMask": [ "red", "blue" ], "cGroup": [ "wall" ] } ], "joints": [], "playerPhysics": { "radius": 15, "bCoef": 0, "invMass": 0.5, "damping": 0.96, "cGroup": [ "red", "blue" ], "acceleration": 0.11, "gravity": [ 0, 0 ], "kickingAcceleration": 0.083, "kickingDamping": 0.96, "kickStrength": 4.2, "kickback": 0 }, "ballPhysics": { "radius": 5.8, "bCoef": 0.412, "cMask": [ "all" ], "damping": 0.99, "invMass": 1.55, "gravity": [ 0, 0 ], "color": "E8104E", "cGroup": [ "ball" ] } }';
const classicMap = '{ "name": "Vehax x1, x2 [OFICIAL BY NEY]", "width": 510, "height": 230, "cameraWidth": 0, "cameraHeight": 0, "maxViewWidth": 0, "cameraFollow": "ball", "spawnDistance": 150, "redSpawnPoints": [ [ -150, 0 ], [ -270, 0 ] ], "blueSpawnPoints": [ [ 150, 0 ], [ 270, 0 ] ], "canBeStored": false, "kickOffReset": "full", "bg": { "color": "1D2431", "height": 200, "width": 400 }, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "vertexes": [ { "x": -400, "y": -200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true, "_data": { "mirror": {} } }, { "x": 401, "y": -200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true, "_data": { "mirror": {} } }, { "x": -401, "y": 200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": 401, "y": 200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": -400, "y": 70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": -400, "y": 201, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": 400, "y": 70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true, "_data": { "mirror": {} } }, { "x": 400, "y": 201, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true, "_data": { "mirror": {} } }, { "x": -400, "y": -200, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": -400, "y": -70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": 400, "y": -201, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true, "_data": { "mirror": {} } }, { "x": 400, "y": -70, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true, "_data": { "mirror": {} } }, { "x": -436, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "E51D44" }, { "x": -400, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "E51D44" }, { "x": -436, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44" }, { "x": -400, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44" }, { "x": -435, "y": -71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44", "curve": -35, "_data": { "mirror": {} } }, { "x": -435, "y": 71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44", "curve": -35, "_data": { "mirror": {} } }, { "x": 435, "y": -71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5", "curve": 35, "_data": { "mirror": {} } }, { "x": 435, "y": 71, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5", "curve": 35, "_data": { "mirror": {} } }, { "x": 436, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "411DE5" }, { "x": 400, "y": -70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "411DE5" }, { "x": 436, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5" }, { "x": 400, "y": 70, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5" }, { "x": -400, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ff6666" }, { "x": -400, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ff6666" }, { "x": 400, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "6666ff" }, { "x": 400, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "6666ff" }, { "x": 270, "y": 3.2938322410201697, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff", "_data": { "mirror": {} } }, { "x": 270, "y": 0, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff", "_data": { "mirror": {} } }, { "x": 0, "y": -230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": true, "color": "ACB9D1", "_data": { "mirror": {} } }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": true, "color": "ACB9D1", "_data": { "mirror": {} } }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ACB9D1", "vis": true, "_data": { "mirror": {} } }, { "x": 0, "y": 230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ACB9D1", "vis": true, "_data": { "mirror": {} } }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "0A1524" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "0A1524" }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "2E3440" }, { "x": 0, "y": 81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "2E3440" }, { "x": -402, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -402, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -398, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3", "_data": { "mirror": {} } }, { "x": -398, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3", "_data": { "mirror": {} } }, { "x": 398, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3", "curve": 0, "_data": { "mirror": {} } }, { "x": 398, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3", "curve": 0, "_data": { "mirror": {} } }, { "x": 402, "y": -70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 402, "y": 70, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 0, "y": 25.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 25.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 28.799999999999997, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -20.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 28.799999999999997, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -20.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 33, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -16.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 33, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -16.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 36.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -12.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 36.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -12.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 1, "y": 32.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": -1, "y": 32.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": 28, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -26, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": 30, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -26, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "DBF808" }, { "x": 0, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "DBF808" }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ACB9D1", "_data": { "mirror": {} } }, { "x": 1, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ACB9D1", "_data": { "mirror": {} } }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -180, "color": "ACB9D1", "_data": { "mirror": {} } }, { "x": 1, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -180, "color": "ACB9D1", "_data": { "mirror": {} } }, { "x": -270, "y": 3.2938322410201697, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff", "_data": { "mirror": {} } }, { "x": -270, "y": 0, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff", "_data": { "mirror": {} } } ], "segments": [ { "v0": 0, "v1": 1, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "y": -200, "_data": { "mirror": {}, "arc": { "a": [ -400, -200 ], "b": [ 401, -200 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 2, "v1": 3, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "y": 200, "_data": { "mirror": {}, "arc": { "a": [ -401, 200 ], "b": [ 401, 200 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 4, "v1": 5, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "x": -400, "_data": { "mirror": {}, "arc": { "a": [ -400, 70 ], "b": [ -400, 201 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 6, "v1": 7, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "x": 400, "_data": { "mirror": {}, "arc": { "a": [ 400, 70 ], "b": [ 400, 201 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 8, "v1": 9, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "_data": { "mirror": {}, "arc": { "a": [ -400, -200 ], "b": [ -400, -70 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 10, "v1": 11, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "_data": { "mirror": {}, "arc": { "a": [ 400, -201 ], "b": [ 400, -70 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 12, "v1": 13, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10 }, { "v0": 14, "v1": 15, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "y": 70 }, { "v0": 16, "v1": 17, "curve": -35, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "_data": { "mirror": {}, "arc": { "a": [ -435, -71 ], "b": [ -435, 71 ], "curve": -35, "radius": 236.11117616303594, "center": [ -209.81676903221194, 0 ], "from": 2.8361600344907854, "to": -2.8361600344907854 } } }, { "v0": 18, "v1": 19, "curve": 35, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "x": 435, "_data": { "mirror": {}, "arc": { "a": [ 435, -71 ], "b": [ 435, 71 ], "curve": 35, "radius": 236.11117616303594, "center": [ 209.81676903221194, 0 ], "from": -0.3054326190990077, "to": 0.3054326190990077 } } }, { "v0": 20, "v1": 21, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10 }, { "v0": 22, "v1": 23, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "y": 70 }, { "v0": 24, "v1": 25, "color": "ff6666", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -400 }, { "v0": 26, "v1": 27, "color": "6666ff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 400 }, { "v0": 28, "v1": 29, "curve": 0, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 270, "_data": { "mirror": {}, "arc": { "a": [ 270, 3.2938322410201697 ], "b": [ 270, 0 ], "curve": 0 } } }, { "v0": 29, "v1": 28, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 270, "_data": { "mirror": {}, "arc": { "a": [ 270, 0 ], "b": [ 270, 3.2938322410201697 ], "curve": 180, "radius": 1.6469161205100848, "center": [ 270, 1.6469161205100848 ], "from": -1.5707963267948966, "to": 1.5707963267948966 } } }, { "v0": 28, "v1": 29, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 270, "_data": { "mirror": {}, "arc": { "a": [ 270, 3.2938322410201697 ], "b": [ 270, 0 ], "curve": 180, "radius": 1.6469161205100848, "center": [ 270, 1.6469161205100848 ], "from": 1.5707963267948966, "to": -1.5707963267948966 } } }, { "v0": 30, "v1": 31, "vis": true, "color": "ACB9D1", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0, "_data": { "mirror": {}, "arc": { "a": [ 0, -230 ], "b": [ 0, -80 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 32, "v1": 33, "vis": true, "color": "ACB9D1", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0, "_data": { "mirror": {}, "arc": { "a": [ 0, 80 ], "b": [ 0, 230 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 34, "v1": 35, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "x": 0 }, { "v0": 36, "v1": 37, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "x": 0 }, { "v0": 38, "v1": 39, "curve": -180, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 39, "v1": 38, "curve": -180, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 40, "v1": 41, "color": "353C4A", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -402 }, { "v0": 42, "v1": 43, "color": "a3a3a3", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -398, "_data": { "mirror": {}, "arc": { "a": [ -398, -70 ], "b": [ -398, 70 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 44, "v1": 45, "curve": 0, "color": "a3a3a3", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 398, "_data": { "mirror": {}, "arc": { "a": [ 398, -70 ], "b": [ 398, 70 ], "curve": 0 } } }, { "v0": 46, "v1": 47, "curve": 0, "color": "353C4A", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 402 }, { "v0": 48, "v1": 49, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 50, "v1": 51, "curve": -21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 52, "v1": 53, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 54, "v1": 55, "curve": -21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 56, "v1": 57, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 58, "v1": 59, "curve": -21.6111165552953, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 60, "v1": 61, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 62, "v1": 63, "curve": -21.61111655529531, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 49, "v1": 61, "curve": 20.934242330086946, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 63, "v1": 51, "curve": 20.93424233008692, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 49, "v1": 61, "curve": 38.08709223936826, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 63, "v1": 51, "curve": 38.08709223936821, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 64, "v1": 65, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 66, "v1": 67, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 67, "v1": 66, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 68, "v1": 69, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 69, "v1": 68, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 70, "v1": 71, "curve": 0, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 72, "v1": 73, "curve": 180, "color": "ACB9D1", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": -100, "_data": { "mirror": {}, "arc": { "a": [ 0, -81 ], "b": [ 1, 80 ], "curve": 180, "radius": 80.50155278005512, "center": [ 0.5, -0.5 ], "from": -1.577007427047763, "to": 1.5645852265420304 } } }, { "v0": 74, "v1": 75, "curve": -180, "color": "ACB9D1", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": -100, "_data": { "mirror": {}, "arc": { "a": [ 0, -81 ], "b": [ 1, 80 ], "curve": -180, "radius": 80.50155278005512, "center": [ 0.5, -0.5 ], "from": 1.5645852265420304, "to": -1.577007427047763 } } }, { "v0": 76, "v1": 77, "curve": 0, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -270, "_data": { "mirror": {}, "arc": { "a": [ -270, 3.2938322410201697 ], "b": [ -270, 0 ], "curve": 0 } } }, { "v0": 77, "v1": 76, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -270, "_data": { "mirror": {}, "arc": { "a": [ -270, 0 ], "b": [ -270, 3.2938322410201697 ], "curve": 180, "radius": 1.6469161205100848, "center": [ -270, 1.6469161205100848 ], "from": -1.5707963267948966, "to": 1.5707963267948966 } } }, { "v0": 76, "v1": 77, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -270, "_data": { "mirror": {}, "arc": { "a": [ -270, 3.2938322410201697 ], "b": [ -270, 0 ], "curve": 180, "radius": 1.6469161205100848, "center": [ -270, 1.6469161205100848 ], "from": 1.5707963267948966, "to": -1.5707963267948966 } } } ], "goals": [ { "p0": [ -405.8, 70 ], "p1": [ -405.8, -70 ], "team": "red" }, { "p0": [ 405.8, -70 ], "p1": [ 405.8, 70 ], "team": "blue" } ], "discs": [ { "radius": 5, "invMass": 0, "pos": [ -400, -70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ], "_data": { "mirror": {} } }, { "radius": 5, "invMass": 0, "pos": [ -400, 70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "radius": 5, "invMass": 0, "pos": [ 400, -70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "radius": 5, "invMass": 0, "pos": [ 400, 70 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ] } ], "planes": [ { "normal": [ 0, 1 ], "dist": -230, "cMask": [ "red", "blue" ], "_data": { "extremes": { "normal": [ 0, 1 ], "dist": -230, "canvas_rect": [ -1048.148148148148, -411.1111111111111, 1048.148148148148, 411.1111111111111 ], "a": [ -1048.148148148148, -230 ], "b": [ 1048.148148148148, -230 ] }, "mirror": {} } }, { "normal": [ 0, -1 ], "dist": -230, "cMask": [ "red", "blue" ], "_data": { "extremes": { "normal": [ 0, -1 ], "dist": -230, "canvas_rect": [ -1048.148148148148, -411.1111111111111, 1048.148148148148, 411.1111111111111 ], "a": [ -1048.148148148148, 230 ], "b": [ 1048.148148148148, 230 ] } } }, { "cMask": [ "red", "blue" ], "cGroup": [ "wall" ], "dist": -510, "normal": [ -1, 0 ], "_data": { "mirror": {}, "extremes": { "normal": [ -1, 0 ], "dist": -510, "canvas_rect": [ -1048.148148148148, -411.1111111111111, 1048.148148148148, 411.1111111111111 ], "a": [ 510, -411.1111111111111 ], "b": [ 510, 411.1111111111111 ] } } }, { "cMask": [ "red", "blue" ], "cGroup": [ "wall" ], "dist": -510, "normal": [ 1, 0 ], "_data": { "mirror": {}, "extremes": { "normal": [ 1, 0 ], "dist": -510, "canvas_rect": [ -1048.148148148148, -411.1111111111111, 1048.148148148148, 411.1111111111111 ], "a": [ -510, -411.1111111111111 ], "b": [ -510, 411.1111111111111 ] } } } ], "joints": [], "playerPhysics": { "radius": 15, "bCoef": 0, "invMass": 0.5, "damping": 0.96, "cGroup": [ "red", "blue" ], "acceleration": 0.11, "gravity": [ 0, 0 ], "kickingAcceleration": 0.083, "kickingDamping": 0.96, "kickStrength": 4.2, "kickback": 0 }, "ballPhysics": { "radius": 5.8, "bCoef": 0.412, "cMask": [ "all" ], "damping": 0.99, "invMass": 1.55, "gravity": [ 0, 0 ], "color": "E8104E", "cGroup": [ "ball" ] } }';
const bigMap = '{ "name": "Vehax x3 [OFICIAL BY NEY]", "width": 710, "height": 300, "cameraWidth": 0, "cameraHeight": 0, "maxViewWidth": 0, "cameraFollow": "ball", "spawnDistance": 150, "redSpawnPoints": [ [ -150, 0 ], [ -250, 150 ], [ -250, -150 ] ], "blueSpawnPoints": [ [ 150, 0 ], [ 250, 150 ], [ 250, -150 ] ], "canBeStored": false, "kickOffReset": "full", "bg": { "color": "1D2431", "height": 240, "width": 550 }, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "vertexes": [ { "x": -600, "y": -270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": 600, "y": -270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": -600, "y": 270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": 600, "y": 270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": -603, "y": 85, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": -600, "y": 270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true }, { "x": 602, "y": 85, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": 600, "y": 270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": -600, "y": -270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": -603, "y": -85, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": 10, "vis": true, "_data": { "mirror": {} } }, { "x": 600, "y": -270, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": 602, "y": -85, "bCoef": 1, "cMask": [ "ball" ], "color": "6A6F79", "bias": -10, "vis": true }, { "x": -639, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "E51D44" }, { "x": -603, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "E51D44" }, { "x": -639, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44" }, { "x": -603, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44" }, { "x": -638, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44", "curve": -35 }, { "x": -638, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "E51D44", "curve": -35 }, { "x": 637, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5", "curve": 35 }, { "x": 637, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5", "curve": 35 }, { "x": 638, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "411DE5" }, { "x": 602, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "411DE5" }, { "x": 638, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5" }, { "x": 602, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "411DE5" }, { "x": -603, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3" }, { "x": -603, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3" }, { "x": 602, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3" }, { "x": 602, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "a3a3a3" }, { "x": -600, "y": -235, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 80, "color": "ffffff" }, { "x": -450, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 80, "color": "ffffff" }, { "x": -600, "y": 235, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -80, "color": "ffffff" }, { "x": -450, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -80, "color": "ffffff" }, { "x": -335, "y": 1.7649701472035468, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "FFFFFF" }, { "x": -335, "y": -3.235029852796453, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "FFFFFF" }, { "x": 335, "y": 2.5, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "FFFFFF" }, { "x": 335, "y": -2.5, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 180, "color": "FFFFFF" }, { "x": 0, "y": -300, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": true, "color": "ACB9D1" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": true, "color": "ACB9D1" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ACB9D1", "vis": true }, { "x": 0, "y": 300, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ACB9D1", "vis": true }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "0A1524" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "0A1524" }, { "x": 0, "y": -81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "2E3440" }, { "x": 0, "y": 81, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "2E3440" }, { "x": -601, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -601, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -605, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": -605, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A" }, { "x": 600, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 600, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 604, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 604, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "353C4A", "curve": 0 }, { "x": 0, "y": 25.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 25.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 28.799999999999997, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -20.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 28.799999999999997, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -20.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 33, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -16.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 33, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -16.2, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 0, "y": 36.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 20, "y": -12.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808", "curve": 25 }, { "x": 0, "y": 36.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": -20, "y": -12.6, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -25, "color": "DBF808" }, { "x": 1, "y": 32.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": -1, "y": 32.4, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": 28, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -26, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": 30, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DBF808" }, { "x": 0, "y": -26, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "DBF808" }, { "x": 0, "y": -24, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "DBF808" }, { "x": 0.05668039945604164, "y": -80.55367701775279, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ACB9D1", "curve": -180 }, { "x": 0, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ACB9D1", "curve": -180 }, { "x": 0.05668039945604164, "y": -80.55367701775279, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ACB9D1", "curve": 180 }, { "x": 0, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "ACB9D1", "curve": 180 }, { "x": -450, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "ffffff" }, { "x": -450, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "ffffff" }, { "x": 600, "y": 235, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 80, "color": "ffffff" }, { "x": 450, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 80, "color": "ffffff" }, { "x": 450, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 80, "color": "ffffff" }, { "x": 600, "y": -235, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 80, "color": "ffffff" }, { "x": 450, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "ffffff" }, { "x": 450, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 0, "color": "ffffff" } ], "segments": [ { "v0": 0, "v1": 1, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "y": -240 }, { "v0": 2, "v1": 3, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "y": 240 }, { "v0": 4, "v1": 5, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "x": -550 }, { "v0": 6, "v1": 7, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "x": 550 }, { "v0": 8, "v1": 9, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "x": -550, "_data": { "mirror": {}, "arc": { "a": [ -600, -270 ], "b": [ -603, -85 ], "radius": null, "center": [ null, null ], "from": null, "to": null } } }, { "v0": 10, "v1": 11, "vis": true, "color": "6A6F79", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "x": 550 }, { "v0": 12, "v1": 13, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "y": -85 }, { "v0": 14, "v1": 15, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "y": 85 }, { "v0": 16, "v1": 17, "curve": -35, "color": "E51D44", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "x": -585 }, { "v0": 18, "v1": 19, "curve": 35, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "x": 585 }, { "v0": 20, "v1": 21, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "y": -85 }, { "v0": 22, "v1": 23, "color": "411DE5", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "y": 85 }, { "v0": 24, "v1": 25, "color": "a3a3a3", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -550 }, { "v0": 26, "v1": 27, "color": "a3a3a3", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 550 }, { "v0": 28, "v1": 29, "curve": 80, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": -100 }, { "v0": 30, "v1": 31, "curve": -80, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 190 }, { "v0": 32, "v1": 33, "curve": 0, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -335 }, { "v0": 33, "v1": 32, "curve": 180, "color": "FFFFFF", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -335 }, { "v0": 32, "v1": 33, "curve": 180, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -335 }, { "v0": 34, "v1": 35, "curve": 0, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 335 }, { "v0": 35, "v1": 34, "curve": 180, "color": "FFFFFF", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 335 }, { "v0": 34, "v1": 35, "curve": 180, "color": "FFFFFF", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 335 }, { "v0": 36, "v1": 37, "vis": true, "color": "ACB9D1", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0 }, { "v0": 38, "v1": 39, "vis": true, "color": "ACB9D1", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0 }, { "v0": 40, "v1": 41, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "x": 0 }, { "v0": 42, "v1": 43, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "x": 0 }, { "v0": 44, "v1": 45, "curve": -180, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 45, "v1": 44, "curve": -180, "color": "2E3440", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 54, "v1": 55, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 56, "v1": 57, "curve": -21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 58, "v1": 59, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 60, "v1": 61, "curve": -21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 62, "v1": 63, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 64, "v1": 65, "curve": -21.6111165552953, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 66, "v1": 67, "curve": 21.61111655529532, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 68, "v1": 69, "curve": -21.61111655529531, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 55, "v1": 67, "curve": 20.934242330086946, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 69, "v1": 57, "curve": 20.93424233008692, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 55, "v1": 67, "curve": 38.08709223936826, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 69, "v1": 57, "curve": 38.08709223936821, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 70, "v1": 71, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 72, "v1": 73, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 73, "v1": 72, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 74, "v1": 75, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 75, "v1": 74, "curve": 180, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 76, "v1": 77, "curve": 0, "color": "DBF808", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 78, "v1": 79, "curve": -180, "color": "ACB9D1", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -500 }, { "v0": 80, "v1": 81, "curve": 180, "color": "ACB9D1", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -500 }, { "v0": 82, "v1": 83, "curve": 0, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 190 }, { "v0": 84, "v1": 85, "curve": 80, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 190 }, { "v0": 86, "v1": 87, "curve": 80, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 190 }, { "v0": 88, "v1": 89, "curve": 0, "color": "ffffff", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 190, "x": 435 } ], "goals": [ { "p0": [ -608.8, -79 ], "p1": [ -608.8, 81 ], "team": "red" }, { "p0": [ 607.8, -79 ], "p1": [ 607.8, 81 ], "team": "blue" } ], "discs": [ { "radius": 5, "invMass": 0, "pos": [ -603.08, -83.92 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ], "y": -85 }, { "radius": 5, "invMass": 0, "pos": [ -602.1599999999999, 85.92 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ], "y": 85 }, { "radius": 5, "invMass": 0, "pos": [ 602.08, -84 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ], "y": -85 }, { "radius": 5, "invMass": 0, "pos": [ 602, 84.83999999999999 ], "color": "192C3B", "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "all" ], "y": 85 } ], "planes": [ { "normal": [ 0, 1 ], "dist": -297, "cMask": [ "red", "blue" ], "_data": { "extremes": { "normal": [ 0, 1 ], "dist": -297, "canvas_rect": [ -999, -377, 999, 377 ], "a": [ -999, -297 ], "b": [ 999, -297 ] }, "mirror": {} } }, { "normal": [ 0, -1 ], "dist": -296, "cMask": [ "red", "blue" ], "_data": { "extremes": { "normal": [ 0, -1 ], "dist": -296, "canvas_rect": [ -999, -377, 999, 377 ], "a": [ -999, 296 ], "b": [ 999, 296 ] }, "mirror": {} } }, { "normal": [ 1, 0 ], "dist": -710, "cMask": [ "red", "blue" ], "cGroup": [ "wall" ], "_data": { "extremes": { "normal": [ 1, 0 ], "dist": -710, "canvas_rect": [ -999, -377, 999, 377 ], "a": [ -710, -377 ], "b": [ -710, 377 ] }, "mirror": {} } }, { "normal": [ -1, 0 ], "dist": -709, "cMask": [ "red", "blue" ], "cGroup": [ "wall" ], "_data": { "extremes": { "normal": [ -1, 0 ], "dist": -709, "canvas_rect": [ -999, -377, 999, 377 ], "a": [ 709, -377 ], "b": [ 709, 377 ] }, "mirror": {} } } ], "joints": [], "playerPhysics": { "radius": 15, "bCoef": 0, "invMass": 0.5, "damping": 0.96, "cGroup": [ "red", "blue" ], "acceleration": 0.11, "gravity": [ 0, 0 ], "kickingAcceleration": 0.083, "kickingDamping": 0.96, "kickStrength": 4.545, "kickback": 0 }, "ballPhysics": { "radius": 5.8, "bCoef": 0.412, "cMask": [ "all" ], "damping": 0.99, "invMass": 1.5, "gravity": [ 0, 0 ], "color": "E8104E", "cGroup": [ "ball" ] } }';
var currentStadium = 'training';
var bigMapObj = JSON.parse(trainingMap);

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var masterPassword = 10000 + getRandomInt(90000);
var roomPassword = '';

/* OPTIONS */

var drawTimeLimit = Infinity;
var teamSize = 4;
var maxAdmins = 0;
var disableBans = false;
var debugMode = false;
var afkLimit = debugMode ? Infinity : 12;

var defaultSlowMode = 0.5;
var chooseModeSlowMode = 1;
var slowMode = defaultSlowMode;
var SMSet = new Set();

var hideClaimMessage = false;
var mentionPlayersUnpause = true;

/* OBJECTS */

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor() {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class MutePlayer {
    constructor(name, id, auth) {
        this.id = MutePlayer.incrementId();
        this.name = name;
        this.playerId = id;
        this.auth = auth;
        this.unmuteTimeout = null;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    setDuration(minutes) {
        this.unmuteTimeout = setTimeout(() => {
            room.sendAnnouncement(
                `Has sido desmuteado!.`,
                this.playerId,
                announcementColor,
                "bold",
                HaxNotification.CHAT
            );
            this.remove();
        }, minutes * 60 * 1000);
        muteArray.add(this);
    }

    remove() {
        this.unmuteTimeout = null;
        muteArray.removeById(this.id);
    }
}

class MuteList {
    constructor() {
        this.list = [];
    }

    add(mutePlayer) {
        this.list.push(mutePlayer);
        return mutePlayer;
    }

    getById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByPlayerId(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.playerId === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    removeById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    removeByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

class HaxStatistics {
    constructor(playerName = '') {
        this.playerName = playerName;
        this.games = 0;
        this.wins = 0;
        this.winrate = '0.00%';
        this.playtime = 0;
        this.goals = 0;
        this.assists = 0;
        this.CS = 0;
        this.ownGoals = 0;
    }
}

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, ADMIN_TEMP: 1, ADMIN_PERM: 2, MASTER: 3 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };

var gameState = State.STOP;
var playSituation = Situation.STOP;
var goldenGoal = false;

var playersAll = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];

var teamRedStats = [];
var teamBlueStats = [];

var banList = [];

/* STATS */

var possession = [0, 0];
var actionZoneHalf = [0, 0];
var lastWinner = Team.SPECTATORS;
var streak = 0;

/* AUTH */

var authArray = [];
var adminList = [
    // ['INSERT_AUTH_HERE_1', 'NICK_OF_ADMIN_1'],
    // ['INSERT_AUTH_HERE_2', 'NICK_OF_ADMIN_2'],
];
var masterList = [
    // 'PESCF2USf8ikvAevwskvWiTX1jzaIXUO5YvP6D98Llw',
    // 'PESCF2USf8ikvAevwskvWiTX1jzaIXUO5YvP6D98Llw'
];

/* COMMANDS */

var commands = {
    help: {
        aliases: ['commands', 'ayuda', 'comandos' ],
        roles: Role.PLAYER,
        desc: `
	Estos son todos los comandos dispobibles. Recuerda que depede de tu rango para ejecutar alguno
Ejemplo para obtener ayuda sobre un comando: \'!help bb\' mostrará la descripción del \'bb\' .`,
        function: helpCommand,
    },
    claim: {
        aliases: [],
        roles: Role.PLAYER,
        desc: false,
        function: masterCommand,
    },
    afk: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando te hace ir a AFK.
    Tiene restricciones: 1 minuto mínimo de tiempo AFK, 5 minutos como máximo y 10 minutos de reutilización.`,
        function: afkCommand,
    },
    afks: {
        aliases: ['afklist'],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra a todos los jugadores que esta afk.`,
        function: afkListCommand,
    },
    bb: {
        aliases: ['salir', 'adios', 'cya'],
        roles: Role.PLAYER,
        desc: `
	Este comando te hace salir al instante (uso recomendado).`,
        function: leaveCommand,
    },
    me: {
        aliases: ['stat', 'stats'],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra sus estadísticas globales en la sala.`,
        function: globalStatsCommand,
    },
    rename: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando te permite cambiarte el nombre de la tabla de clasificación.`,
        function: renameCommand,
    },
    games: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra a los 5 mejores jugadores con mas partidos de la sala.`,
        function: statsLeaderboardCommand,
    },
    wins: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra a los 5 mejores jugadores con la mayor cantidad de victorias en la sala.`,
        function: statsLeaderboardCommand,
    },
    goals: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra a los 5 mejores jugadores con la mayor cantidad de goles de la sala.`,
        function: statsLeaderboardCommand,
    },
    assists: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra a los 5 mejores jugadores con la mayor cantidad de asistencias en la sala.`,
        function: statsLeaderboardCommand,
    },
    cs: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando muestra a los 5 mejores jugadores con la mayor cantidad de CS de la sala.`,
        function: statsLeaderboardCommand,
    },
    playtime: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `x
        Este comando muestra a los 5 mejores jugadores con la mayor cantidad de tiempo en la sala.`,
        function: statsLeaderboardCommand,
    },    
    discord: {
            aliases: ['chat', 'server', 'dc', 'servidor', 'vehax', 'link'],
            roles: Role.PLAYER,
            desc: `
            Este comando te dara un enlace de invitacion para unirte a nuestro discord oficial.`,
            function: discordCommand,
    },
    llamaradmin: {
        aliases: ['calladmin', 'llamar', 'llamar admin'],
        roles: Role.PLAYER,
        desc: `
        Para llamar un admin.`,
        function: llamarAdmin,
    },
    training: {
        aliases: ['entrenamiento', 'sin goles', 'practica'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the classic training stadium.`,
        function: stadiumCommand,
    },
    classic: {
        aliases: ['futsalx2', 'futsalx1', 'mapa1v1', 'mapa2v2'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the classic stadium.`,
        function: stadiumCommand,
    },
    big: {
        aliases: ['futsalx3', 'futsal', 'mapa3v3',],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the big stadium.`,
        function: stadiumCommand,
    },
    rr: {
        aliases: ['reiniciar'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Con este comando reinicias el partido`,
        function: restartCommand,
    },
    rrs: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    Con este comando reinicias y cambias de lugar los equipos`,
        function: restartSwapCommand,
    },
    swap: {
        aliases: ['cambiar'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Este comando intercambia a los equipos cuando se detiene el juego.`,
        function: swapCommand,
    },
    kickred: {
        aliases: ['kickr'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the red team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    kickblue: {
        aliases: ['kickb'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the blue team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    kickspec: {
        aliases: ['kicks'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the spectators team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    mute: {
        aliases: ['m'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command allows to mute a player. He won't be able to talk for a certain duration, and can be unmuted at any time by admins.
    It takes 2 arguments:
    Argument 1: #<id> where <id> is the id of the player targeted. This won't work if the player is an admin.
    Argument 2 (optional): <duration> where <duration> is the duration of the mute in minutes. If no value is provided, the mute lasts for the default duration, ${muteDuration} minutes.
    Example: !mute #3 20 will mute the player with id 3 for 20 minutes.`,
        function: muteCommand,
    },
    unmute: {
        aliases: ['um'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command allows to unmute someone.
    It takes 1 argument:
    Argument 1: #<id> where <id> is the id of the muted player.
    OR
    Argument 1: <number> where <number> is the number associated with the mute given by the 'muteList' command.
    Example: !unmute #300 will unmute the player with id 300,
             !unmute 8 will unmute the n°8 player according to the 'muteList' command.`,
        function: unmuteCommand,
    },
    mutes: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Este comando muestra la lista de jugadores muteados.`,
        function: muteListCommand,
    },
    clearbans: {
        aliases: [],
        roles: Role.MASTER,
        desc: `
	Este comando no es a todos.También puede desahogar a un jugador en particular, agregando su identificación como argumento.`,
        function: clearbansCommand,
    },
    bans: {
        aliases: ['banlist'],
        roles: Role.MASTER,
        desc: `
    Este comando muestra a todos los jugadores que fueron prohibidos y sus ID.`,
        function: banListCommand,
    },
    admins: {
        aliases: ['adminlist'],
        roles: Role.MASTER,
        desc: `
    Este comando muestra a todos los jugadores que son administradores permanentes.`,
        function: adminListCommand,
    },
    setadmin: {
        aliases: ['admin'],
        roles: Role.MASTER,
        desc: `
    This command allows to set someone as admin. He will be able to connect as admin, and can be removed at any time by masters.
It takes 1 argument:
Argument 1: #<id> where <id> is the id of the player targeted.
Example: !setadmin #3 will give admin to the player with id 3.`,
        function: setAdminCommand,
    },
    removeadmin: {
        aliases: ['unadmin'],
        roles: Role.MASTER,
        desc: `
	This command allows to remove someone as admin.
It takes 1 argument:
Argument 1: #<id> where <id> is the id of the player targeted.
OR
Argument 1: <number> where <number> is the number associated with the admin given by the 'admins' command.
Example: !removeadmin #300 will remove admin to the player with id 300,
         !removeadmin 2 will remove the admin n°2 according to the 'admins' command.`,
        function: removeAdminCommand,
    },
    password: {
        aliases: ['pw'],
        roles: Role.MASTER,
        desc: `
        Este comando permite agregar una contraseña a la habitación.
    Se necesita 1 argumento:
    Argumento 1: <Password> Where <Password> es la contraseña que desea para la habitación.
    
    To remove the room password, simply enter '!password'.`,
        function: passwordCommand,
    },
};

/* GAME */

var lastTouches = Array(2).fill(null);
var lastTeamTouched;

var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */

var welcomeColor = 0xc4ff65;
var announcementColor = 0xffefd6;
var infoColor = 0xE00C56;
var privateMessageColor = 0xffc933;
var redColor = 0xff4c4c;
var blueColor = 0x62cbff;
var warningColor = 0xffa135;
var errorColor = 0xa40000;
var successColor = 0x75ff75;
var moradoColor = 0x6510FA;
var defaultColor = null;

/* AUXILIARY */

var checkTimeVariable = false;
var checkStadiumVariable = true;
var endGameVariable = false;
var cancelGameVariable = false;
var kickFetchVariable = false;

var chooseMode = false;
var timeOutCap;
var capLeft = false;
var redCaptainChoice = '';
var blueCaptainChoice = '';
var chooseTime = 20;

var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 0;
var maxAFKDuration = 30;
var AFKCooldown = 0;

var muteArray = new MuteList();
var muteDuration = 5;

var removingPlayers = false;
var insertingPlayers = false;

var stopTimeout;
var startTimeout;
var unpauseTimeout;
var removingTimeout;
var insertingTimeout;

var emptyPlayer = {
    id: 0,
};
stadiumCommand(emptyPlayer, "!training");

var game = new Game();

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}

function getDate() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* MATH FUNCTIONS */

function getRandomInt(max) {
    // returns a random number between 0 and max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/* TIME FUNCTIONS */

function getHoursStats(time) {
    return Math.floor(time / 3600);
}

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesStats(time) {
    return Math.floor(time / 60) - getHoursStats(time) * 60;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - getMinutesReport(t) * 60);
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getTimeStats(time) {
    if (getHoursStats(time) > 0) {
        return `${getHoursStats(time)}h${getMinutesStats(time)}m`;
    } else {
        return `${getMinutesStats(time)}m`;
    }
}

function getGoalGame() {
    return game.scores.red + game.scores.blue;
}

/* REPORT FUNCTIONS */

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function getRecordingName(game) {
    let d = new Date();
    let redCap = game.playerComp[0][0] != undefined ? game.playerComp[0][0].player.name : 'Red';
    let blueCap = game.playerComp[1][0] != undefined ? game.playerComp[1][0].player.name : 'Blue';
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchRecording(game) {
    if (gameWebhook != "") {
        let form = new FormData();
        form.append(null, new File([game.rec], getRecordingName(game), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

/* FEATURE FUNCTIONS */

function getCommand(commandStr) {
    if (commands.hasOwnProperty(commandStr)) return commandStr;
    for (const [key, value] of Object.entries(commands)) {
        for (let alias of value.aliases) {
            if (alias == commandStr) return key;
        }
    }
    return false;
}

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    var comp = game.playerComp;
    var index = comp[0].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team, includeAFK = true) {
    if (team == Team.RED) return teamRed;
    if (team == Team.BLUE) return teamBlue;
    if (includeAFK) {
      return playersAll.filter((p) => p.team === Team.SPECTATORS);
    }
    return teamSpec;
}

function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

var adminPrefix = "[ADMIN] ";
var messageTarget = null;
var messageColors = {admin: 0x97FFFF, welcome: 0xFFFFFF};
var messageFonts = {normal: "normal", bold: "bold", italic: "italic", small: "small", small_bold: "small-bold", small_italic: "small-italic"};
var messageSounds = {nothing: 0, normal: 1, highlight: 2};

room.onPlayerChat = function(player,message){
    if(Role.ADMIN_TEMP){
	room.sendAnnouncement(`${adminPrefix}${player.name}: ${message}`,messageTarget,messageColors.admin,messageFonts.bold,messageSounds.normal);
	return false;
    }
    else{
	room.sendAnnouncement(`${player.name}: ${message}`,messageTarget,messageColors.player,messageFonts.normal,messageSounds.normal);
	return false;
    }
}

function teamChat(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    var emoji = player.team == Team.RED ? '🔴' : player.team == Team.BLUE ? '🔵' : '⚪';
    var message = `${emoji} [Equipo] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team, true);
    var color = player.team == Team.RED ? redColor : player.team == Team.BLUE ? blueColor : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function playerChat(player, message) {
    var msgArray = message.split(/ +/);
    var playerTargetIndex = playersAll.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Jugador no válido, asegúrese de que el nombre que ingresó sea correcto.`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var playerTarget = playersAll[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `¡No puedes enviarte un PM!`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var messageFrom = `📝 [Privado con ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    var messageTo = `📝 [Privado con ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* PHYSICS FUNCTIONS */

function calculateStadiumVariables() {
    if (checkStadiumVariable && teamRed.length + teamBlue.length > 0) {
        checkStadiumVariable = false;
        setTimeout(() => {
            let ballDisc = room.getDiscProperties(0);
            let playerDisc = room.getPlayerDiscProperties(teamRed.concat(teamBlue)[0].id);
            ballRadius = ballDisc.radius;
            playerRadius = playerDisc.radius;
            triggerDistance = ballRadius + playerRadius + 0.01;
            speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1));
        }, 1);
    }
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        var obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

/* BUTTONS */

function topButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
            room.setPlayerTeam(teamSpec[1].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
        else room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
    }
}

function randomButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            var r = getRandomInt(teamSpec.length);
            room.setPlayerTeam(teamSpec[r].id, Team.RED);
            teamSpec = teamSpec.filter((spec) => spec.id != teamSpec[r].id);
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.RED);
        else
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
    }
}

function blueToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamBlue.length; i++) {
        room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamRed.length; i++) {
        room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let i = 0; i < Math.max(teamRed.length, teamBlue.length); i++) {
        if (Math.max(teamRed.length, teamBlue.length) - teamRed.length - i > 0)
            room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
        else if (Math.max(teamRed.length, teamBlue.length) - teamBlue.length - i > 0)
            room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
        else break;
    }
    for (let i = 0; i < Math.min(teamRed.length, teamBlue.length); i++) {
        room.setPlayerTeam(
            teamBlue[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
        room.setPlayerTeam(
            teamRed[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
    }
}

function swapButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let player of teamBlue) {
        room.setPlayerTeam(player.id, Team.RED);
    }
    for (let player of teamRed) {
        room.setPlayerTeam(player.id, Team.BLUE);
    }
}

/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
    room.kickPlayer(player.id, 'Adios !', false);
}

function helpCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        var commandString = '                                                       🟡𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦🔴\n \n𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑫𝑬 𝑼𝑺𝑼𝑨𝑹𝑰𝑶𝑺:\n';
        for (const [key, value] of Object.entries(commands)) {
            if (value.desc && value.roles == Role.PLAYER) commandString += ` !${key},`;
        }
        commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        if (getRole(player) >= Role.ADMIN_TEMP) {
            commandString += `\n------------------------------------------------\n𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑫𝑬 𝑨𝑫𝑴𝑰𝑵𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑹𝑬𝑺:\n`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.ADMIN_TEMP) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':')
                commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        if (getRole(player) >= Role.MASTER) {
            commandString += `\n-------------------------------------------------\n𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑷𝑨𝑹𝑨 𝑫𝑼𝑬Ñ𝑶 𝑫𝑬 𝑺𝑨𝑳𝑨:\n`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.MASTER) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':') commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        commandString += "\nPara obtener información sobre un comando específico, escriba ''!help <Nombre del comando>'.";
        room.sendAnnouncement(
            commandString,
            player.id,
            infoColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (msgArray.length >= 1) {
        var commandName = getCommand(msgArray[0].toLowerCase());
        if (commandName != false && commands[commandName].desc != false)
            room.sendAnnouncement(
                `\'${commandName}\' comando :\n${commands[commandName].desc}`,
                player.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
        else
            room.sendAnnouncement(
                `El comando en el que intentó obtener información no existe.Para verificar todos los comandos disponibles, escriba \ '! Ayuda \'`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
    }
}

function globalStatsCommand(player, message) {
    var stats = new HaxStatistics(player.name);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    var statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        statsString,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function renameCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (localStorage.getItem(authArray[player.id][0])) {
        var stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
        if (msgArray.length == 0) {
            stats.playerName = player.name;
        } else {
            stats.playerName = msgArray.join(' ');
        }
        localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
        room.sendAnnouncement(
            `Te renombraste con éxito a ti mismo ${stats.playerName} !`,
            player.id,
            successColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        room.sendAnnouncement(
            `Todavía no has jugado un juego en esta sala !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function statsLeaderboardCommand(player, message) {
    var key = message.split(/ +/)[0].substring(1).toLowerCase();
    printRankings(key, player.id);
}

function afkCommand(player, message) {
    if (player.team == Team.SPECTATORS || players.length == 1) {
        if (AFKSet.has(player.id)) {
            if (AFKMinSet.has(player.id)) {
                room.sendAnnouncement(
                    `There is a minimum of ${minAFKDuration} minute of AFK time. Don't abuse the command !`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.delete(player.id);
                room.sendAnnouncement(
                    `🌅 ${player.name} Ya no esta afk !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
                updateTeams();
                handlePlayersJoin();
            }
        } else {
            if (AFKCooldownSet.has(player.id)) {
                room.sendAnnouncement(
                    `You can only go AFK every ${AFKCooldown} minutes. Don't abuse the command !`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.add(player.id);
                if (!player.admin) {
                    AFKMinSet.add(player.id);
                    AFKCooldownSet.add(player.id);
                    setTimeout(
                        (id) => {
                            AFKMinSet.delete(id);
                        },
                        minAFKDuration * 60 * 1000,
                        player.id
                    );
                    setTimeout(
                        (id) => {
                            AFKSet.delete(id);
                        },
                        maxAFKDuration * 60 * 1000,
                        player.id
                    );
                    setTimeout(
                        (id) => {
                            AFKCooldownSet.delete(id);
                        },
                        AFKCooldown * 60 * 1000,
                        player.id
                    );
                }
                room.setPlayerTeam(player.id, Team.SPECTATORS);
                room.sendAnnouncement(
                    `😴 ${player.name} Esta afk ahora !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
                updateTeams();
                handlePlayersLeave();
            }
        }
    } else {
        room.sendAnnouncement(
            `No puedes ir a AFK mientras estás en un equipo!`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function afkListCommand(player, message) {
    if (AFKSet.size == 0) {
        room.sendAnnouncement(
            "😴 No hay nadie en la lista de AFK.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return;
    }
    var cstm = '😴 Lista de afks : ';
    AFKSet.forEach((_, value) => {
        var p = room.getPlayer(value);
        if (p != null) cstm += p.name + `, `;
    });
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(cstm, player.id, announcementColor, 'bold', null);
}

// Define la función discordCommand con sendAnnouncement
function discordCommand(player, message) {
    // Verifica que el jugador que ejecutó el comando sea válido
    if (player) {
        // Define el mensaje con el enlace de Discord
        var message = "¡Únete a nuestro servidor de Discord aquí: [Inserta tu enlace de Discord]!";
        
            room.sendAnnouncement(
                `${player.name}: Este es nuestro Discord: https://discord.gg/hdvdznMZry`,
                player.id,
                blueColor,
                'bold',
                HaxNotification.CHAT
            );
        }
}
  
function masterCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (parseInt(msgArray[0]) == masterPassword) {
        if (!masterList.includes(authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            adminList = adminList.filter((a) => a[0] != authArray[player.id][0]);
            masterList.push(authArray[player.id][0]);
            room.sendAnnouncement(
                `${player.name} Es ahora dueño de la sala !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Ya eres dueño de la sala !`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* ADMIN COMMANDS */

function restartCommand(player, message) {
    instantRestart();
}

function restartSwapCommand(player, message) {
    room.stopGame();
    swapButton();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function swapCommand(player, message) {
    if (playSituation == Situation.STOP) {
        swapButton();
        room.sendAnnouncement(
            '✔️ Equipos cambiados de lugar!',
            null,
            announcementColor,
            'bold',
            null
        );
    } else {
        room.sendAnnouncement(
            `Por favor, detenga el juego antes de intercambiar.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function kickTeamCommand(player, message) {
    var msgArray = message.split(/ +/);
    var reasonString = `Equipo kickeado por ${player.name}`;
    if (msgArray.length > 1) {
        reasonString = msgArray.slice(1).join(' ');
    }
    if (['!kickred', '!kickr'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamRed.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamRed[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickblue', '!kickb'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamBlue.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamBlue[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickspec', '!kicks'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamSpec.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamSpec[0].id, reasonString, false);
            }, i * 20)
        }
    }
}

function stadiumCommand(player, message) {
    var msgArray = message.split(/ +/);
    if (gameState == State.STOP) {
        if (['!classic'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(classicMap).name == 'Classic') {
                room.setDefaultStadium('Classic');
            } else {
                room.setCustomStadium(classicMap);
            }
            currentStadium = 'classic';
        } else if (['!big'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(bigMap).name == 'Big') {
                room.setDefaultStadium('Big');
            } else {
                room.setCustomStadium(bigMap);
            }
            currentStadium = 'big';
        } else if (['!training'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(trainingMap);
            currentStadium = 'training';
        } else {
            room.sendAnnouncement(
                `Stadium not recognized.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Por favor, detenga el juego antes de usar este comando.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerMute = room.getPlayer(parseInt(msgArray[0]));
                var minutesMute = muteDuration;
                if (msgArray.length > 1 && parseInt(msgArray[1]) > 0) {
                    minutesMute = parseInt(msgArray[1]);
                }
                if (!playerMute.admin) {
                    var muteObj = new MutePlayer(playerMute.name, playerMute.id, authArray[playerMute.id][0]);
                    muteObj.setDuration(minutesMute);
                    room.sendAnnouncement(
                        `${playerMute.name} ha sido silenciado por ${minutesMute} minutos.`,
                        null,
                        announcementColor,
                        'bold',
                        null
                    );
                } else {
                    room.sendAnnouncement(
                        `No puedes silenciar a un administrador.`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `No hay jugador con tal identificación en la habitación.Ingrese "!help mute" para obtener más información.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Formato incorrecto para su argumento.Ingrese "!help mute" para obtener más información.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Número incorrecto de argumentos.Ingrese "!help mute" para obtener más información.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function unmuteCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerUnmute = room.getPlayer(parseInt(msgArray[0]));
                if (muteArray.getByPlayerId(playerUnmute.id) != null) {
                    var muteObj = muteArray.getByPlayerId(playerUnmute.id);
                    muteObj.remove()
                    room.sendAnnouncement(
                        `${playerUnmute.name} ha sido desmuteado!`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `Este jugador no está silenciado !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `No hay jugador con tal identificación en la habitación.Ingrese "!help" para obtener más información.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) > 0 && muteArray.getById(parseInt(msgArray[0])) != null) {
            var playerUnmute = muteArray.getById(parseInt(msgArray[0]));
            playerUnmute.remove();
            room.sendAnnouncement(
                `${playerUnmute.name} ha sido desmuteado!`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Formato incorrecto para su argumento.Ingrese "!help umuted" para obtener más información.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Número incorrecto de argumentos.Ingrese "!help" para obtener más información.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteListCommand(player, message) {
    if (muteArray.list.length == 0) {
        room.sendAnnouncement(
            "🔇 No hay nadie en la lista de mudo.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '🔇 Muteados lista:: ';
    for (let mute of muteArray.list) {
        cstm += mute.name + `[${mute.id}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

/* MASTER COMMANDS */

function clearbansCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        room.clearBans();
        room.sendAnnouncement(
            '✔️ Baneos eleminados !',
            null,
            announcementColor,
            'bold',
            null
        );
        banList = [];
    } else if (msgArray.length == 1) {
        if (parseInt(msgArray[0]) > 0) {
            var ID = parseInt(msgArray[0]);
            room.clearBan(ID);
            if (banList.length != banList.filter((p) => p[1] != ID).length) {
                room.sendAnnouncement(
                    `✔️ ${banList.filter((p) => p[1] == ID)[0][0]} ha sido desbaneado de la habitación !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
            } else {
                room.sendAnnouncement(
                    `La identificación que ingresó no tiene una prohibición asociada.Ingrese "!help ClearBans" para obtener más información.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
            banList = banList.filter((p) => p[1] != ID);
        } else {
            room.sendAnnouncement(
                `Invalid ID entered. Enter "!help clearbans" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help clearbans" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function banListCommand(player, message) {
    if (banList.length == 0) {
        room.sendAnnouncement(
            "📢 No hay nadie en la lista de prohibición.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Lista de baneados : ';
    for (let ban of banList) {
        cstm += ban[0] + `[${ban[1]}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function adminListCommand(player, message) {
    if (adminList.length == 0) {
        room.sendAnnouncement(
            "📢 No hay nadie en la lista de administración.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Lista de administradores : ';
    for (let i = 0; i < adminList.length; i++) {
        cstm += adminList[i][1] + `[${i}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function setAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (!adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    if (!masterList.includes(authArray[playerAdmin.id][0])) {
                        room.setPlayerAdmin(playerAdmin.id, true);
                        adminList.push([authArray[playerAdmin.id][0], playerAdmin.name]);
                        room.sendAnnouncement(
                            `${playerAdmin.name} Es ahora adminnistrador !`,
                            null,
                            announcementColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    } else {
                        room.sendAnnouncement(
                            `Este jugador ya es rango dueño !`,
                            player.id,
                            errorColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                } else {
                    room.sendAnnouncement(
                        `Ya este jugador es administrador permanente !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help setadmin" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help setadmin" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help setadmin" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function removeAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    room.setPlayerAdmin(playerAdmin.id, false);
                    adminList = adminList.filter((a) => a[0] != authArray[playerAdmin.id][0]);
                    room.sendAnnouncement(
                        `${playerAdmin.name} Ya no es administrador de sala !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `¡Este jugador no es un administrador permanente! !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help removeadmin" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) < adminList.length) {
            var index = parseInt(msgArray[0]);
            var playerAdmin = adminList[index];
            if (playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]) != -1) {
                // check if there is the removed admin in the room
                var indexRem = playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]);
                room.setPlayerAdmin(playersAll[indexRem].id, false);
            }
            adminList.splice(index);
            room.sendAnnouncement(
                `${playerAdmin[1]} Ya no es administrador de sala !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help removeadmin" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help removeadmin" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function passwordCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray.length == 1 && msgArray[0] == '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `La contraseña ha sido removida.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        roomPassword = msgArray.join(' ');
        room.setPassword(roomPassword);
        room.sendAnnouncement(
            `La contraseña ha sido cambiada a ${roomPassword}`,
            player.id,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        if (roomPassword != '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `La contraseña ha sido removida.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `La sala actualmente no tiene contraseña.Ingrese "!Ayuda contraseña" para obtener más información.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (game != undefined) game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0 && playSituation == Situation.PLAY) {
        if (scores.red != scores.blue) {
            if (!checkTimeVariable) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        if (drawTimeLimit != 0) {
            goldenGoal = true;
            room.sendAnnouncement(
                '⚽ Primer gol gana!',
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60 - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (!checkTimeVariable) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function instantRestart() {
    room.stopGame();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function resumeGame() {
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 1000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 500);
}

function endGame(winner) {
    if (players.length >= 2 * teamSize - 1) activateChooseMode();
    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(
            `✨ El equipo rojo gana ${scores.red} - ${scores.blue} ! Racha actual: ${streak}`,
            null,
            redColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(
            `✨ El equipo azul gana ${scores.blue} - ${scores.red} ! Racha actual: ${streak}`,
            null,
            blueColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        streak = 0;
        room.sendAnnouncement(
            '💤 Límite de dibujo alcanzado !',
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
    let possessionBluePct = 100 - possessionRedPct;
    let possessionString = `🔴 ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% 🔵`;
    let actionRedPct = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    let actionBluePct = 100 - actionRedPct;
    let actionString = `🔴 ${actionRedPct.toFixed(0)}% - ${actionBluePct.toFixed(0)}% 🔵`;
    let CSString = getCSString(scores);
    room.sendAnnouncement(
        `📊 Posesión: 🔴 ${possessionString}\n` +
        `📊 Zona de acción: 🔴 ${actionString}\n` +
        `${CSString}`,
        null,
        announcementColor,
        'bold',
        HaxNotification.NONE
    );
    updateStats();
}

/* CHOOSING FUNCTIONS */

function activateChooseMode() {
    chooseMode = true;
    slowMode = chooseModeSlowMode;
    room.sendAnnouncement(
        `🐢 Modo lento cambiado para elegir la duración del modo de: ${chooseModeSlowMode}s.`,
        null,
        announcementColor,
        'bold',
        HaxNotification.CHAT
    );
}

function deactivateChooseMode() {
    chooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != defaultSlowMode) {
        slowMode = defaultSlowMode;
        room.sendAnnouncement(
            `🐢 Modo lento cambiado para elegir la duración del modo de: ${defaultSlowMode}s.`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    redCaptainChoice = '';
    blueCaptainChoice = '';
}

function getSpecList(player) {
    if (player == null) return null;
    var cstm = 'Players : ';
    for (let i = 0; i < teamSpec.length; i++) {
        cstm += teamSpec[i].name + `[${i + 1}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    let captain;
    if (teamRed.length <= teamBlue.length && teamRed.length != 0) {
        captain = teamRed[0];
    } else if (teamBlue.length < teamRed.length && teamBlue.length != 0) {
        captain = teamBlue[0];
    }
    if (captain != null) {
        room.sendAnnouncement(
            "Para elegir un jugador, ingrese su número en la lista dada o use 'top', 'random' or 'bottom'.",
            captain.id,
            infoColor,
            'bold',
            HaxNotification.MENTION
        );
        timeOutCap = setTimeout(
            (player) => {
                room.sendAnnouncement(
                    `Hurry up ${player.name}, only ${Number.parseInt(String(chooseTime / 2))} seconds left to choose !`,
                    player.id,
                    warningColor,
                    'bold',
                    HaxNotification.MENTION
                );
                timeOutCap = setTimeout(
                    (player) => {
                        room.kickPlayer(
                            player.id,
                            "No elegiste a tiempo !",
                            false
                        );
                    },
                    chooseTime * 500,
                    captain
                );
            },
            chooseTime * 1000,
            captain
        );
    }
    if (teamRed.length != 0 && teamBlue.length != 0) {
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
}

function chooseModeFunction(player, message) {
    var msgArray = message.split(/ +/);
    if (player.id == teamRed[0].id || player.id == teamBlue[0].id) {
        if (teamRed.length <= teamBlue.length && player.id == teamRed[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
                redCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
                redCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} Elija aleatorio !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
                redCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} elegir el fondo !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Tu número no es válido !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.RED
                    );
                    room.sendAnnouncement(
                        `${player.name} Pickeo a ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
        if (teamRed.length > teamBlue.length && player.id == teamBlue[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                blueCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} Elegir la parte superior !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(
                    teamSpec[getRandomInt(teamSpec.length)].id,
                    Team.BLUE
                );
                blueCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} Elija aleatorio !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
                blueCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} elegir el fondo !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Tu número no es válido !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.BLUE
                    );
                    room.sendAnnouncement(
                        `${player.name} Pickeo a ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
    }
}

function checkCaptainLeave(player) {
    if (
        (teamRed.findIndex((red) => red.id == player.id) == 0 && chooseMode && teamRed.length <= teamBlue.length) ||
        (teamBlue.findIndex((blue) => blue.id == player.id) == 0 && chooseMode && teamBlue.length < teamRed.length)
    ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
}

function slowModeFunction(player, message) {
    if (!player.admin) {
        if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(
                (number) => {
                    SMSet.delete(number);
                },
                slowMode * 1000,
                player.id
            );
        } else {
            return true;
        }
    }
    return false;
}

/* PLAYER FUNCTIONS */

function updateTeams() {
    playersAll = room.getPlayerList();
    players = playersAll.filter((p) => !AFKSet.has(p.id));
    teamRed = players.filter((p) => p.team == Team.RED);
    teamBlue = players.filter((p) => p.team == Team.BLUE);
    teamSpec = players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (players.length != 0 && players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    return (
        !!masterList.find((a) => a == authArray[player.id][0]) * 2 +
        !!adminList.find((a) => a[0] == authArray[player.id][0]) * 1 +
        player.admin * 1
    );
}

function ghostKickHandle(oldP, newP) {
    var teamArrayId = getTeamArray(oldP.team, true).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Kickeo fantasma', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && playSituation != Situation.STOP) {
        var discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

/* ACTIVITY FUNCTIONS */

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        if (pComp.inactivityTicks == 110 * ((2 / 3) * afkLimit)) {
            room.sendAnnouncement(
                `⛔ ${player.name}, Si no se mueve o envía un mensaje en el siguiente ${Math.floor(afkLimit / 7)} segundos, serás pateado !`,
                player.id,
                warningColor,
                'bold',
                HaxNotification.MENTION
            );
            return;
        }
        if (pComp.inactivityTicks >= 110 * afkLimit) {
            pComp.inactivityTicks = 0;
            if (game.scores.time <= afkLimit - 0.5) {
                setTimeout(() => {
                    !chooseMode ? instantRestart() : room.stopGame();
                }, 10);
            }
            room.kickPlayer(player.id, 'AFK', false);
        }
    }
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (gameState === State.PLAY && players.length > 1) {
        for (let player of teamRed) {
            handleActivityPlayer(player);
        }
        for (let player of teamBlue) {
            handleActivityPlayer(player);
        }
    }
}

/* LINEUP FUNCTIONS */

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (gameState != State.STOP) {
        var playerLineup;
        if (changedPlayer.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[0][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[1][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

function handleLineupChangeLeave(player) {
    if (playSituation != Situation.STOP) {
        if (player.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (player.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

/* TEAM BALANCE FUNCTIONS */

function balanceTeams() {
    if (!chooseMode) {
        if (players.length == 0) {
            room.stopGame();
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
        } else if (players.length == 1 && teamRed.length == 0) {
            instantRestart();
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!training`);
            }, 5);
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length && teamSpec.length > 0) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!classic`);
                }, 5);
            }
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.BLUE);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.RED);
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) > teamSpec.length) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 1) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!training`);
                }, 5);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (teamSize > 2 && players.length == 5) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!classic`);
                }, 5);
            }
            if (players.length == teamSize * 2 - 1) {
                teamRedStats = [];
                teamBlueStats = [];
            }
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamRed[teamRed.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamBlue[teamBlue.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) < teamSpec.length && teamRed.length != teamBlue.length) {
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamSpec.length >= 2 && teamRed.length == teamBlue.length && teamRed.length < teamSize) {
            if (teamRed.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!big`);
                }, 5);
            }
            topButton();
        }
    }
}

function handlePlayersJoin() {
    if (chooseMode) {
        if (teamSize > 2 && players.length == 6) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!big`);
            }, 5);
        }
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
    balanceTeams();
}

function handlePlayersLeave() {
    if (gameState != State.STOP) {
        var scores = room.getScores();
        if (players.length >= 2 * teamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamRed.length != teamBlue.length) {
            var rageQuitCheck = false;
            if (teamRed.length < teamBlue.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    rageQuitCheck = true;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    rageQuitCheck = true;
                }
            }
            if (rageQuitCheck) {
                room.sendAnnouncement(
                    "Ragequit detectado, el juego terminó.",
                    null,
                    infoColor,
                    'bold',
                    HaxNotification.MENTION
                )
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 100);
                return;
            }
        }
    }
    if (chooseMode) {
        if (teamSize > 2 && players.length == 5) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!classic`);
            }, 5);
        }
        if (teamRed.length == 0 || teamBlue.length == 0) {
            room.setPlayerTeam(teamSpec[0].id, teamRed.length == 0 ? Team.RED : Team.BLUE);
            return;
        }
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        }
        if (streak == 0 && gameState == State.STOP) {
            if (Math.abs(teamRed.length - teamBlue.length) == 2) {
                var teamIn = teamRed.length > teamBlue.length ? teamRed : teamBlue;
                room.setPlayerTeam(teamIn[teamIn.length - 1].id, Team.SPECTATORS)
            }
        }
        if (teamRed.length == teamBlue.length && teamSpec.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }

        if (capLeft) {
            choosePlayer();
        } else {
            getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
        }
    }
    balanceTeams();
}

function handlePlayersTeamChange(byPlayer) {
    if (chooseMode && !removingPlayers && byPlayer == null) {
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        } else if (
            (teamRed.length == teamSize && teamBlue.length == teamSize) ||
            (teamRed.length == teamBlue.length && teamSpec.length < 2)
        ) {
            deactivateChooseMode();
            resumeGame();
        } else if (teamRed.length <= teamBlue.length && redCaptainChoice != '') {
            if (redCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
            } else if (redCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
            }
            return;
        } else if (teamBlue.length < teamRed.length && blueCaptainChoice != '') {
            if (blueCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
            } else if (blueCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.BLUE);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
            }
            return;
        } else {
            choosePlayer();
        }
    }
}

function handlePlayersStop(byPlayer) {
    if (byPlayer == null && endGameVariable) {
        if (chooseMode) {
            if (players.length == 2 * teamSize) {
                chooseMode = false;
                resetButton();
                for (var i = 0; i < teamSize; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        randomButton();
                    }, 200 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200 * teamSize);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 10);
                } else {
                    resetButton();
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 300);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    swapButton();
                }
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 200);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                    }, 500);
                }, 500);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 2000);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200);
                setTimeout(() => {
                    topButton();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 1500);
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                        setTimeout(() => {
                            randomButton();
                        }, 500);
                    }, 500);
                }, 500);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}

/* STATS FUNCTIONS */

/* GK FUNCTIONS */

function handleGKTeam(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? teamRed : teamBlue;
    let playerGK = teamArray.reduce((prev, current) => {
        if (team == Team.RED) {
            return (prev?.position.x < current.position.x) ? prev : current
        } else {
            return (prev?.position.x > current.position.x) ? prev : current
        }
    }, null);
    let playerCompGK = getPlayerComp(playerGK);
    return playerCompGK;
}

function handleGK() {
    let redGK = handleGKTeam(Team.RED);
    if (redGK != null) {
        redGK.GKTicks++;
    }
    let blueGK = handleGKTeam(Team.BLUE);
    if (blueGK != null) {
        blueGK.GKTicks++;
    }
}

function getGK(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? game.playerComp[0] : game.playerComp[1];
    let playerGK = teamArray.reduce((prev, current) => {
        return (prev?.GKTicks > current.GKTicks) ? prev : current
    }, null);
    return playerGK;
}

function getCS(scores) {
    let playersNameCS = [];
    let redGK = getGK(Team.RED);
    let blueGK = getGK(Team.BLUE);
    if (redGK != null && scores.blue == 0) {
        playersNameCS.push(redGK.player.name);
    }
    if (blueGK != null && scores.red == 0) {
        playersNameCS.push(blueGK.player.name);
    }
    return playersNameCS;
}

function getCSString(scores) {
    let playersCS = getCS(scores);
    if (playersCS.length == 0) {
        return "🥅 No CS.\n Recuerda estamos en pruebas \n Discord: https://discord.gg/hdvdznMZry.";
    } else if (playersCS.length == 1) {
        return `🥅 ${playersCS[0]} Obtuvo una CS.\n Recuerda estamos en pruebas \n Discord: https://discord.gg/hdvdznMZry.`;
    } else {
        return `🥅 ${playersCS[0]} and ${playersCS[1]} Obtuvo una cs \n Recuerda estamos en pruebas \n Discord: https://discord.gg/hdvdznMZry.`;
    }
}

/* GLOBAL STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == Team.SPECTATORS) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        game.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getGameStats() {
    if (playSituation == Situation.PLAY && gameState == State.PLAY) {
        lastTeamTouched == Team.RED ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
        handleGK();
    }
}

/* GOAL ATTRIBUTION FUNCTIONS */

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function getGoalString(team) {
    var goalString;
    var scores = game.scores;
    var goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `⚽ ${getTimeGame(scores.time)} Gol por ${goalAttribution[0].name} ! Asistencia por ${goalAttribution[1].name}. Velocidad de entrada : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `⚽ ${getTimeGame(scores.time)} Gol por ${goalAttribution[0].name} ! Velocidad de entrada : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } else {
            goalString = `😂 ${getTimeGame(scores.time)} Gol en propia por el meme de ${goalAttribution[0].name} ! Velocidad de gol : ${ballSpeed.toFixed(2)}km/h.`;
            game.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `⚽ ${getTimeGame(scores.time)} Gol DEL ${team == Team.RED ? 'Rojo' : 'Azul'} Equipo ! Velocidad de gol : ${ballSpeed.toFixed(2)}km/h.`;
        game.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

/* ROOM STATS FUNCTIONS */

function updatePlayerStats(player, teamStats) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    stats.games++;
    if (lastWinner == teamStats) stats.wins++;
    stats.winrate = ((100 * stats.wins) / (stats.games || 1)).toFixed(1) + `%`;
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.CS += getCSPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
}


function updateStats() {
    if (
        players.length >= 2 * teamSize &&
        (
            game.scores.time >= (5 / 6) * game.scores.timeLimit ||
            game.scores.red == game.scores.scoreLimit ||
            game.scores.blue == game.scores.scoreLimit
        ) &&
        teamRedStats.length >= teamSize && teamBlueStats.length >= teamSize
    ) {
        for (let player of teamRedStats) {
            updatePlayerStats(player, Team.RED);
        }
        for (let player of teamBlueStats) {
            updatePlayerStats(player, Team.BLUE);
        }
    }
}

function printRankings(statKey, id = 0) {
    var leaderboard = [];
    statKey = statKey == "cs" ? "CS" : statKey;
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.length == 43)
            leaderboard.push([
                JSON.parse(localStorage.getItem(key)).playerName,
                JSON.parse(localStorage.getItem(key))[statKey],
            ]);
    }
    if (leaderboard.length < 5) {
        if (id != 0) {
            room.sendAnnouncement(
                'Todavía no se juegan suficientes juegos !',
                id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        return;
    }
    leaderboard.sort(function (a, b) { return b[1] - a[1]; });
    var rankingString = `${statKey.charAt(0).toUpperCase() + statKey.slice(1)}> `;
    for (let i = 0; i < 5; i++) {
        let playerName = leaderboard[i][0];
        let playerStat = leaderboard[i][1];
        if (statKey == 'Tiempo jugado') playerStat = getTimeStats(playerStat);
        rankingString += `#${i + 1} ${playerName} : ${playerStat}, `;
    }
    rankingString = rankingString.substring(0, rankingString.length - 2);
    room.sendAnnouncement(
        rankingString,
        id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* GET STATS FUNCTIONS */

function getGamePlayerStats(player) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    stats.CS += getCSPlayer(pComp);
    return stats;
}

function getGametimePlayer(pComp) {
    if (pComp == null) return 0;
    var timePlayer = 0;
    for (let j = 0; j < pComp.timeEntry.length; j++) {
        if (pComp.timeExit.length < j + 1) {
            timePlayer += game.scores.time - pComp.timeEntry[j];
        } else {
            timePlayer += pComp.timeExit[j] - pComp.timeEntry[j];
        }
    }
    return Math.floor(timePlayer);
}

function getGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team === pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getOwnGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team !== pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getAssistsPlayer(pComp) {
    if (pComp == null) return 0;
    var assistPlayer = 0;
    for (let goal of game.goals) {
        if (goal.assist != null) {
            if (authArray[goal.assist.id][0] == pComp.auth) {
                assistPlayer++;
            }
        }
    }
    return assistPlayer;
}

function getGKPlayer(pComp) {
    if (pComp == null) return 0;
    let GKRed = getGK(Team.RED);
    if (pComp.auth == GKRed?.auth) {
        return Team.RED;
    }
    let GKBlue = getGK(Team.BLUE);
    if (pComp.auth == GKBlue?.auth) {
        return Team.BLUE;
    }
    return Team.SPECTATORS;
}

function getCSPlayer(pComp) {
    if (pComp == null || game.scores == null) return 0;
    if (getGKPlayer(pComp) == Team.RED && game.scores.blue == 0) {
        return 1;
    } else if (getGKPlayer(pComp) == Team.BLUE && game.scores.red == 0) {
        return 1;
    }
    return 0;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == Team.RED ? 0 : 1;
    let indexOtherTeam = team == Team.RED ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }
    if (goals[indexOtherTeam].length == 0) {
        let playerCS = getGK(team)?.player;
        if (playerCS != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == playerCS.id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == playerCS.id);
                playerActionSummaryTeam[index][3]++;
            } else {
                playerActionSummaryTeam.push([playerCS, 0, 0, 1]);
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

/* PRINT FUNCTIONS */

function printPlayerStats(stats) {
    let statsString = '';
    for (let [key, value] of Object.entries(stats)) {
        if (key == 'playerName') statsString += `${value}: `;
        else {
            if (key == 'Tiempo jugado') value = getTimeStats(value);
            let reCamelCase = /([A-Z](?=[a-z]+)|[A-Z]+(?![a-z]))/g;
            let statName = key.replaceAll(reCamelCase, ' $1').trim();
            statsString += `${statName.charAt(0).toUpperCase() + statName.slice(1)}: ${value}, `;
        }
    }
    statsString = statsString.substring(0, statsString.length - 2);
    return statsString;
}

/* FETCH FUNCTIONS */

function fetchGametimeReport(game) {
    var fieldGametimeRed = {
        name: '🔴        **Estadísticas del equipo rojo**',
        value: '⌛ __**Tiempo de juego:**__\n\n',
        inline: true,
    };
    var fieldGametimeBlue = {
        name: '🔵       **Estadísticas del equipo azul**',
        value: '⌛ __**Tiempo de juego:**__\n\n',
        inline: true,
    };
    var redTeamTimes = game.playerComp[0].map((p) => [p.player, getGametimePlayer(p)]);
    var blueTeamTimes = game.playerComp[1].map((p) => [p.player, getGametimePlayer(p)]);

    for (let time of redTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeRed.value += `\n${blueTeamTimes.length - redTeamTimes.length > 0 ? '\n'.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeBlue.value += `\n${redTeamTimes.length - blueTeamTimes.length > 0 ? '\n'.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(game) {
    var fieldReportRed = {
        name: '🔴        **Estadísticas del equipo rojo**',
        value: '📊 __**Estadísticas de jugadores:**__\n\n',
        inline: true,
    };
    var fieldReportBlue = {
        name: '🔵       **Estadísticas del equipo azul**',
        value: '📊 __**Estadísticas de jugadores:**__\n\n',
        inline: true,
    };
    var goals = [[], []];
    for (let i = 0; i < game.goals.length; i++) {
        goals[game.goals[i].team - 1].push([game.goals[i].striker, game.goals[i].assist]);
    }
    var redActions = actionReportCountTeam(goals, Team.RED);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != Team.RED ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }
    var blueActions = actionReportCountTeam(goals, Team.BLUE);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != Team.BLUE ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }

    fieldReportRed.value += `\n${blueActions.length - redActions.length > 0 ? '\n'.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `\n${redActions.length - blueActions.length > 0 ? '\n'.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(game) {
    var fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    var logChannel = gameWebhook;
    var fields = [
        {
            name: '🔴        **Estadísticas del equipo rojo**',
            value: '=====================\n\n',
            inline: true,
        },
        {
            name: '🔵       **Estadísticas del equipo azul**',
            value: '=====================\n\n',
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        var fieldsReport = fetchEndgame[i](game);
        fields[0].value += fieldsReport[0].value + '\n\n';
        fields[1].value += fieldsReport[1].value + '\n\n';
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    var possR = possession[0] / (possession[0] + possession[1]);
    var possB = 1 - possR;
    var possRString = (possR * 100).toFixed(0).toString();
    var possBString = (possB * 100).toFixed(0).toString();
    var zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    var zoneB = 1 - zoneR;
    var zoneRString = (zoneR * 100).toFixed(0).toString();
    var zoneBString = (zoneB * 100).toFixed(0).toString();
    var win = (game.scores.red > game.scores.blue) * 1 + (game.scores.blue > game.scores.red) * 2;
    var objectBodyWebhook = {
        embeds: [
            {
                title: `📝 Reporte del partido #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(game.scores.time)}** ` +
                    (win == 1 ? '**Equipo rojo** ' : 'Eequipo rojo ') + game.scores.red +
                    ' - ' +
                    game.scores.blue + (win == 2 ? ' **Equipo azul**' : ' Equipo azul') +
                    '\n```c\nPossession: ' + possRString + '% - ' + possBString + '%' +
                    '\nAction Zone: ' + zoneRString + '% - ' + zoneBString + '%\n```\n\n',
                color: 9567999,
                fields: fields,
                footer: {
                    text: `Grabación: ${getRecordingName(game)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName
    };
    if (logChannel != '') {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn];
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ➡️ Entro (${playersAll.length + 1}/${maxPlayers})\n**` +
                    `${player.name}** [${authArray[player.id][0]}] {${authArray[player.id][1]}}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    room.sendAnnouncement(
        `👋 Bienvenido ${player.name} !\nBienvenido al la Pub Oficial De Vehax, Para hablar con tu equipo usa t antes de un msg !\nDiscord: https://discord.gg/hdvdznMZry.
        ██╗░░░██╗███████╗██╗░░██╗░█████╗░██╗░░██╗
        ██║░░░██║██╔════╝██║░░██║██╔══██╗╚██╗██╔╝
        ╚██╗░██╔╝█████╗░░███████║███████║░╚███╔╝░
        ░╚████╔╝░██╔══╝░░██╔══██║██╔══██║░██╔██╗░
        ░░╚██╔╝░░███████╗██║░░██║██║░░██║██╔╝╚██╗
        ░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝
        Sala hecha por Ney. DS:keurygcds#0000`,
        player.id,
        welcomeColor,
        'bold',
        HaxNotification.CHAT
    );
    updateTeams();
    updateAdmins();
    if (masterList.findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `El dueño de sala${player.name} Acaba de llegar !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    } else if (adminList.map((a) => a[0]).findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `El administrador ${player.name} Acaba de llegar !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    }
    var sameAuthCheck = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
    if (sameAuthCheck.length > 0 && !debugMode) {
        var oldPlayerArray = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
        for (let oldPlayer of oldPlayerArray) {
            ghostKickHandle(oldPlayer, player);
        }
    }
    handlePlayersJoin();
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    if (AFKSet.has(changedPlayer.id) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendAnnouncement(
            `${changedPlayer.name} Esta afk ahora!`,
            null,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }
    updateTeams();
    if (gameState != State.STOP) {
        if (changedPlayer.team != Team.SPECTATORS && game.scores.time <= (3 / 4) * game.scores.timeLimit && Math.abs(game.scores.blue - game.scores.red) < 2) {
            changedPlayer.team == Team.RED ? teamRedStats.push(changedPlayer) : teamBlueStats.push(changedPlayer);
        }
    }
    handleActivityPlayerTeamChange(changedPlayer);
    handlePlayersTeamChange(byPlayer);
};

room.onPlayerLeave = function (player) {
    setTimeout(() => {
        if (!kickFetchVariable) {
            if (roomWebhook != '') {
                var stringContent = `[${getDate()}] ⬅️ Salio (${playersAll.length}/${maxPlayers})\n**${player.name}**` +
                    `[${authArray[player.id][0]}] {${authArray[player.id][1]}}`;
                fetch(roomWebhook, {
                    method: 'POST',
                    body: JSON.stringify({
                        content: stringContent,
                        username: roomName,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res);
            }
        } else kickFetchVariable = false;
    }, 10);
    handleLineupChangeLeave(player);
    checkCaptainLeave(player);
    updateTeams();
    updateAdmins();
    handlePlayersLeave();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchVariable = true;
    if (roomWebhook != '') {
        var stringContent = `[${getDate()}] ⛔ ${ban ? 'BAN' : 'KICK'} (${playersAll.length}/${maxPlayers})\n` +
            `**${kickedPlayer.name}** [${authArray[kickedPlayer.id][0]}] {${authArray[kickedPlayer.id][1]}} was ${ban ? 'banned' : 'kicked'}` +
            `${byPlayer != null ? ' by **' + byPlayer.name + '** [' + authArray[byPlayer.id][0] + '] {' + authArray[byPlayer.id][1] + '}' : ''}`
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.MASTER)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }
    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_PERM) {
        room.sendAnnouncement(
            'No se le permite patear/prohibir a los jugadores !',
            byPlayer.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }
    if (ban) banList.push([kickedPlayer.name, kickedPlayer.id]);
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    if (gameState !== State.STOP && player.team != Team.SPECTATORS) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
    let msgArray = message.split(/ +/);
    if (!hideClaimMessage || msgArray[0] != '!claim') {
        if (roomWebhook != '')
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}] 💬 CHAT\n**${player.name}** : ${message.replace('@', '@ ')}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
    }
    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
        else
            room.sendAnnouncement(
                `El comando que intentó ingresar no existe para usted.Ingrese '! Ayuda' para obtener los comandos disponibles para usted.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }
    if (chooseMode && teamRed.length * teamBlue.length != 0) {
        var choosingMessageCheck = chooseModeFunction(player, message);
        if (choosingMessageCheck) return false;
    }
    if (slowMode > 0) {
        var filter = slowModeFunction(player, message);
        if (filter) return false;
    }
    if (!player.admin && muteArray.getByAuth(authArray[player.id][0]) != null) {
        room.sendAnnouncement(
            `Tu estas callado !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return false;
    }
};

room.onPlayerActivity = function (player) {
    if (gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

room.onPlayerBallKick = function (player) {
    if (playSituation != Situation.GOAL) {
        var ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getGoalGame()
            );
        }
    }
};

/* llamr admin */

// Función para llamar a un administrador
function llamarAdmin(player) {
    // Obtener la URL del webhook de Discord
    var webhookUrl = llamaradminWebhook;
  
    // Crear un objeto de mensaje de Discord
    var message = {
      embeds: [
        {
          title: "¡Se ha llamado a un administrador!",
          description: "El jugador " + player.name + " ha llamado a un administrador\n En la sala  " + roomName,
          color: 0xFF0000,
          fields: [
            {
              name: "Jugador",
              value: player.name,
              inline: true
            }
          ]
        }
      ]
    };
  
    // Enviar el mensaje al webhook de Discord
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
  
    // Enviar un mensaje de anuncio a la sala
  room.sendAnnouncement(
    `${player.name}: Haz llamado un administrador con existo!`,
    player.id,
    warningColor,
    'bold',
    HaxNotification.CHAT
  );
  room.sendAnnouncement(
    `\n En caso de que no venga entra a nuestro discord \n Usa !discord para obtener nuestro discord`,
    player.id,
    moradoColor,
    'bold',
    HaxNotification.CHAT
  );
}

/* Ramgos */

if (localStorage.getItem(getAuth(player))) {
    stats = JSON.parse(localStorage.getItem(getAuth(player)));
    var announcement = "";
    var chatColor = "";
    if (stats[stats.wins] > 500) {
        announcement += "[👑] - [⚽: " + stats[stats.wins] +"]  ·「The Legend of x3」"
        chatColor = "0xf77104"
    } else if (stats[stats.wins] > 200) {
        announcement += "[💎] - [⚽: " + stats[stats.wins] +"]  ·「Diamond IV」"
        chatColor = "0x7cd3fa"
    } else if (stats[stats.wins] > 150) {
        announcement += "[💎] - [⚽: " + stats[stats.wins] +"]  ·「Diamond III」"
        chatColor = "0x7cd3fa"
    } else if (stats[stats.wins] > 120) {
        announcement += "[💎] - [⚽: " + stats[stats.wins] +"]  ·「Diamond II」"
        chatColor = "0x7cd3fa"
    } else if (stats[stats.wins] > 80) {
        announcement += "[💎] - [⚽: " + stats[stats.wins] +"]  ·「Diamond I」"
        chatColor = "0x7cd3fa"
    } else if (stats[stats.wins] > 60) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Platinum III」"
        chatColor = "0x62AEE3"
    } else if (stats[stats.wins] > 55) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Platinum II」"
        chatColor = "0x62AEE3"
    } else if (stats[stats.wins] > 50) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Platinum I」"
        chatColor = "0x62AEE3"
    } else if (stats[stats.wins] > 40) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Gold III」"
        chatColor = "0xEAC274"    
    } else if (stats[stats.wins] > 35) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Gold II」"
        chatColor = "0xEAC274"
    } else if (stats[stats.wins] > 30) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Gold I」"
        chatColor = "0xEAC274"
    } else if (stats[stats.wins] > 20) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Silver III」"
        chatColor = "0xA2A2A2"
    } else if (stats[stats.wins] > 15) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Silver II」"
        chatColor = "0xA2A2A2"
    } else if (stats[stats.wins] > 10) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Silver I」"
        chatColor = "0xA2A2A2"
    } else if (stats[stats.wins] > 8) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Bronze III」"
        chatColor = "0xbc5e00"
    } else if (stats[stats.wins] > 5) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Bronze II」"
        chatColor = "0xbc5e00"
    } else if (stats[stats.wins] > 2) {
        announcement += "[⚽: " + stats[stats.wins] +"]  ·「Bronze I」"
        chatColor = "0xbc5e00"
    } else {
        announcement += "「No rank」"
        chatColor = "0xEBEBEB"
    }
    console.log(announcement);
    console.log(chatColor);
    console.log(originalMessage)
    announcement += player.name + ": " + originalMessage;
    room.sendAnnouncement(announcement, null, chatColor);
}
else {
    room.sendAnnouncement(`❌ ${player.name}: ${originalMessage}`, null, 0xABAEA7);
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    if (byPlayer != null) clearTimeout(stopTimeout);
    game = new Game();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    gameState = State.PLAY;
    endGameVariable = false;
    goldenGoal = false;
    playSituation = Situation.KICKOFF;
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    teamRedStats = [];
    teamBlueStats = [];
    if (teamRed.length == teamSize && teamBlue.length == teamSize) {
        for (var i = 0; i < teamSize; i++) {
            teamRedStats.push(teamRed[i]);
            teamBlueStats.push(teamBlue[i]);
        }
    }
    calculateStadiumVariables();
};

room.onGameStop = function (byPlayer) {
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) clearTimeout(startTimeout);
    game.rec = room.stopRecording();
    if (
        !cancelGameVariable && game.playerComp[0].length + game.playerComp[1].length > 0 &&
        (
            (game.scores.timeLimit != 0 &&
                ((game.scores.time >= 0.5 * game.scores.timeLimit &&
                    game.scores.time < 0.75 * game.scores.timeLimit &&
                    game.scores.red != game.scores.blue) ||
                    game.scores.time >= 0.75 * game.scores.timeLimit)
            ) ||
            endGameVariable
        )
    ) {
        fetchSummaryEmbed(game);
        if (fetchRecordingVariable) {
            setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, game);
        }
    }
    cancelGameVariable = false;
    gameState = State.STOP;
    playSituation = Situation.STOP;
    updateTeams();
    handlePlayersStop(byPlayer);
    handleActivityStop();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Juego pausado por${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Juego pausado !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        gameState = State.PLAY;
    }, 2000);
    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Juego desactivado por ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Juego desactivado!`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    if (
        (teamRed.length == teamSize && teamBlue.length == teamSize && chooseMode) ||
        (teamRed.length == teamBlue.length && teamSpec.length < 2 && chooseMode)
    ) {
        deactivateChooseMode();
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    game.scores = scores;
    playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    for (let player of teamRed) {
        var playerComp = getPlayerComp(player);
        team == Team.RED ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    for (let player of teamBlue) {
        var playerComp = getPlayerComp(player);
        team == Team.BLUE ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? redColor : blueColor,
        null,
        HaxNotification.CHAT
    );
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ${goalString}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || goldenGoal) {
        endGame(team);
        goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
};

room.onPositionsReset = function () {
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    playSituation = Situation.KICKOFF;
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    console.log(`${url}\nClave de dueño : ${masterPassword}`);
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] 🔗 LINK ${url}\nClave de dueño : ${masterPassword}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `It is not allowed to change the kickrate limit. It must stay at "6-0-0".`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (byPlayer !== null) {
        if (getRole(byPlayer) < Role.MASTER && currentStadium != 'other') {
            room.sendAnnouncement(
                `You can't change stadium manually ! Please use the stadium commands.`,
                byPlayer.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
            stadiumCommand(emptyPlayer, `!${currentStadium}`);
        } else {
            room.sendAnnouncement(
                `Map changed. After you're done with this map, please use the stadium commands.`,
                byPlayer.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
            currentStadium = 'other';
        }
    }
    checkStadiumVariable = true;
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getGameStats();
    handleActivity();
};