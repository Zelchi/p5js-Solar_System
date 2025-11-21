let sol;
let tamanhoSol = 100;
let batata;
let planetas = [
    criaPlaneta("Mercúrio", 10, 0.008, 60, [169, 169, 169]),
    criaPlaneta("Vênus", 15, 0.007, 100, [218, 165, 32]),
    criaPlaneta("Terra", 16, 0.006, 130, [70, 130, 180]),
    criaPlaneta("Marte", 12, 0.005, 160, [188, 39, 50]),
    criaPlaneta("Júpiter", 30, 0.004, 200, [205, 133, 63]),
    criaPlaneta("Saturno", 28, 0.003, 240, [210, 180, 140]),
    criaPlaneta("Urano", 22, 0.002, 300, [175, 238, 238]),
    criaPlaneta("Netuno", 20, 0.001, 400, [72, 61, 139])
];

function criaPlaneta(nome, tamanho, velAngular, raio, color) {
    let anguloBatata = 0;
    let raioDaOrbita = raio + tamanhoSol / 4;

    function moverPlaneta() {
        let x = sol.x + raioDaOrbita * cos(anguloBatata);
        let y = sol.y + raioDaOrbita * sin(anguloBatata);

        noFill();
        stroke(150);
        ellipse(sol.x, sol.y, raioDaOrbita * 2);

        fill(color[0], color[1], color[2]);
        noStroke();
        textSize(20)
        text(nome, x + 10, y - 10)
        ellipse(x, y, tamanho)

        anguloBatata += velAngular
    }

    return moverPlaneta;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(255, 255, 255)
    sol = createVector(width / 2, height / 2);
}

function draw() {
    background(0);
    fill(255)
    textSize(30)
    text("Sol", sol.x - 25, sol.y - 55)
    ellipse(sol.x, sol.y, tamanhoSol)
    planetas.forEach((planeta) => planeta());
}