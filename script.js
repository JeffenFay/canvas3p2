var c = document.getElementById('characterCanvas');
var ctx = c.getContext('2d');

// Tête
// ctx.arc(x, y, rayon, angleInitial, angleFinal, antihoraire);
ctx.beginPath();
ctx.arc(205, 110, 50, 0, 2*Math.PI, true);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.beginPath();
ctx.moveTo(180, 130);
ctx.bezierCurveTo(190, 145, 220, 145, 230, 130); // Bouche bas
ctx.moveTo(180, 130);
ctx.bezierCurveTo(190, 135, 220, 135, 230, 130); // Bouche bas
ctx.strokeStyle = 'red';
ctx.stroke();
//Sourcils
ctx.beginPath();
ctx.moveTo(180, 88);
ctx.bezierCurveTo(180, 80, 200, 80, 200, 88); // Sourcil gauche
ctx.moveTo(210, 88);
ctx.bezierCurveTo(210, 80, 230, 80, 230, 88); // Sourcil gauche
ctx.strokeStyle = 'white';
ctx.stroke();
// Yeux
ctx.beginPath();
ctx.moveTo(65, 65);
ctx.arc(190, 100, 8, 0, Math.PI * 2, true);  // Oeil gauche
ctx.moveTo(95, 65);
ctx.arc(220, 100, 8, 0, Math.PI * 2, true);  // Oeil droite
ctx.fillStyle = 'white';
ctx.fill();
// Corps
// quadraticCurveTo(cp1x, cp1y, x, y)
ctx.beginPath();
ctx.moveTo(60, 150);
ctx.quadraticCurveTo(60, 150, 340, 150);// haut bras droit
ctx.quadraticCurveTo(380, 170, 340, 190);// bas bras droit
ctx.quadraticCurveTo(250, 190, 250, 190);// aisselle droite
ctx.quadraticCurveTo(250, 190, 250, 350);// corps + côté jambe droite
ctx.quadraticCurveTo(230, 380, 210, 350);// côté jambe intérieure droite
ctx.quadraticCurveTo(210, 280, 210, 300);// entrejambe droite
ctx.quadraticCurveTo(205, 280, 200, 300);// entrejambe gauche
ctx.quadraticCurveTo(200, 380, 200, 350);// côté jambe intérieure gauche
ctx.quadraticCurveTo(175, 380, 160, 350);// corps + côté jambe droite
ctx.quadraticCurveTo(160, 190, 160, 190);// aisselle gauche
ctx.quadraticCurveTo(60, 190, 60, 190);// bas bras gauche
ctx.quadraticCurveTo(20, 170, 60, 150);// haut bras gauche
ctx.fillStyle = '#976F0F';
ctx.fill();
// Boutons
ctx.beginPath();
ctx.moveTo(205, 210);
ctx.arc(205, 210, 8, 0, Math.PI * 2, true);  // Bouton du haut
ctx.moveTo(205, 240);
ctx.arc(205, 240, 8, 0, Math.PI * 2, true);  // Bouton du bas
ctx.fillStyle = '#7A2976';
ctx.fill();
// soucoupe
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp=> poignées
//dôme
// ctx.beginPath();
// ctx.moveTo(250, 170);
// ctx.bezierCurveTo(210, 100, 190, 100, 150, 170);
// ctx.fillStyle = 'white';
// ctx.fill();
//
// //corp
// ctx.beginPath();
// ctx.moveTo(70, 200);
// ctx.bezierCurveTo(170, 140, 230, 140, 330, 200);
// ctx.bezierCurveTo(230, 260, 170, 260, 70, 200);
// ctx.fillStyle = '#E0E1F3';
// ctx.fill();
