let colors = ["#4165DA", "#FF38D6", "#ff7d56", "#761DB0", "#00E2BA"];
let rSeed;

function setup() {
	createCanvas(1920, 1080);
	pixelDensity(2);
	rectMode(CENTER);
	rSeed = int(random(777));
	shuffle(colors, true);
}

function draw() {
	randomSeed(rSeed);
	background(7,70,187);



	rect(width / 2, height / 2, width * 0.95, height * 0.95);

	translate(width / 2, height / 2);
	scale(0.8);
	translate(-width / 2, -height / 2);

	let seg = 9;
	let w = width / seg;
	for (let i = 0; i < seg; i++) {
		for (let j = 0; j < seg; j++) {
			let x = i * w + w / 2;
			let y = j * w + w / 2;
			if ((i + j) % 2 == 0) cc(x, y, w);
		}
	}
}

function cc(x, y, w) {
	let off = w * 0.5 * ((sin(frameCount * random(0.2, 1) * 0.05 + random(10)) + 1) * 0.5);
	let cn = int(random(100));
	let col1 = color(colors[(cn) % colors.length]);
	let col2 = color(colors[(cn + 1) % colors.length]);
	let col3 = color(colors[(cn + 2) % colors.length]);
	let col4 = color(colors[(cn + 3) % colors.length]);

	fill(col1);
	circle(x, y + off, w);
	fill(col2);
	circle(x, y - off, w);

	let dx = 0;
	let dy = off * 2;
	let ds = pow(dx, 2) + pow(dy, 2);
	let t = sqrt((sqrt(ds) + (w / 2) + (w / 2)) * (sqrt(ds) + (w / 2) - (w / 2)) * (sqrt(ds) - (w / 2) + (w / 2)) * (-sqrt(ds) + (w / 2) + (w / 2)));
	let px = 0.5 * (dx + (dx * ((w / 2) * (w / 2) - (w / 2) * (w / 2)) + dy * t) / ds);
	let a = acos(off / dist(0, off, px, 0));
	fill(col3);
	stroke(col3);
	arc(x, y + off, w, w, PI + HALF_PI - a, PI + HALF_PI + a, CHORD);
	arc(x, y - off, w, w, HALF_PI - a, HALF_PI + a, CHORD);
}