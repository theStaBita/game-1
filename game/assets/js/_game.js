var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'id-game',
  {preload: preload, create: create, update: update, render: render});

var SCALE = 6;
var UP    = Phaser.Keyboard.UP;
var DOWN  = Phaser.Keyboard.DOWN;
var LEFT  = Phaser.Keyboard.LEFT;
var RIGHT = Phaser.Keyboard.RIGHT;
var MSPEED = 200;
var DIALOG = [
  {yell: "WHAT NO! NOT THAT THING! WHY WOUL YOU TOUCH THAT THING!!",
   info: "No no no, the other thing."},
  {yell: "JEsus on a stick, what did I just say?",
   info: "Gosh you are thick headed."},
  {yell: "NO.NO.NO.NO",
   info: "Do you seriously not geet it? Touch the thing!"},
  {yell: "",
   info: ""},
  {yell: "HSDFUISH----ST0000OOOOOOOOOOP.",
   info: "Are you mentally challenged? I need to know for a form."},
  {yell: "You know what, I can't handle you. Just go.",
   info: "Please leave.",
   portal: true},
  {yell: "",
   info: "Go through the portal, you're clearly too dumb for this game."},
  {yell: "",
   info: ""},
  {yell: "",
   info: ""},
  {yell: "THIs is why we can 't have nice things!!.",
   info: "Now seriously fuck off."},
]

var s = {} // state

function preload() {
  game.load.image('placeholder', 'assets/img/placeholder.gif');
  game.load.image('portal', 'assets/img/portal.gif');
  // game.load.physics('physicsData', 'physicsData.json');
}

function generatePlayer() {

  tmp = game.add.sprite(32, game.world.height - 250, 'placeholder');
  tmp.smoothed = false;
  tmp.scale.setTo(SCALE,SCALE);

  game.physics.p2.enable([ tmp ]);

  tmp.body.clearShapes();
  tmp.body.setRectangle(10*SCALE, 10*SCALE);
  // tmp.body.loadPolygon('physicsData', 'player');
  tmp.body.setZeroDamping();
  tmp.body.fixedRotation = true;

  tmp.body.uid = 'player';

  return tmp;
}

function generateThing() {
  tmp = game.add.sprite(300, game.world.height - 400, 'placeholder');
  tmp.smoothed = false;
  tmp.scale.setTo(SCALE,SCALE);

  game.physics.p2.enable([ tmp ]);

  tmp.body.clearShapes();
  tmp.body.setRectangle(10*SCALE, 10*SCALE);
  // tmp.body.loadPolygon('physicsData', 'player');
  tmp.body.static = true;

  tmp.body.uid = 'thing';

  return tmp;
}

function generatePortal() {
  tmp = game.add.sprite(550, game.world.height - 40, 'portal');
  tmp.smoothed = false;
  tmp.scale.setTo(SCALE,SCALE);

  game.physics.p2.enable([ tmp ]);

  tmp.body.clearShapes();
  tmp.body.setRectangle(10*SCALE, 10*SCALE);
  // tmp.body.loadPolygon('physicsData', 'player');
  tmp.body.static = true;

  tmp.body.uid = 'portal';

  tmp.body.sprite.visible = false;

  return tmp;
}

function create() {
  s.result = "";

  s.dialog = {};
  s.dialog.text = "Simon says... touch the thing.";
  s.dialog.onscreen = game.add.text(20, 20, s.dialog.text, {font: "bold 16pt 'monospace'"});

  game.physics.startSystem(Phaser.Physics.P2JS);

  game.physics.p2.defaultRestitution = 0.8;

  game.stage.backgroundColor = "#4488AA";

  s.thing  = generateThing();
  s.player = generatePlayer();
  s.portal = generatePortal();

  s.cursors = {
    up: game.input.keyboard.addKey(UP),
    down: game.input.keyboard.addKey(DOWN),
    left: game.input.keyboard.addKey(LEFT),
    right: game.input.keyboard.addKey(RIGHT)
  };

  s.player.body.onBeginContact.add(hit, this);
  s.player.body.onEndContact.add(release, this);

}

function render() {
  game.debug.text(s.result, 32, 32);
}

function movePlayer() {
  if (s.cursors.up.isDown) {
    s.player.body.moveUp(MSPEED);
  }

  if (s.cursors.down.isDown) {
    s.player.body.moveDown(MSPEED);
  }

  if (s.cursors.left.isDown) {
    s.player.body.moveLeft(MSPEED);
  }

  if (s.cursors.right.isDown) {
    s.player.body.moveRight(MSPEED);
  }
}

function update() {
  if (s.player && s.player.body) {
    s.player.body.setZeroVelocity();

    movePlayer();
  }
  s.dialog.onscreen.setText(s.dialog.text)
}

function hit(bodyA, bodyB, spriteA, spriteB, equation) {
  if (s.counter !== undefined) {
    if (s.counter < DIALOG.length) {
      s.counter += 1;
    }
  } else {
    s.counter = 0;
  }
  if ("thing" == bodyA.uid) {
    s.dialog.text = DIALOG[s.counter]['yell'];
    if (DIALOG[s.counter]['portal'] == true) {
      s.portal.body.sprite.visible = true;
    }

    if (s.counter == DIALOG.length - 1) {
      s.thing.body.sprite.destroy();
    }
  }
  if ("portal" == bodyA.uid) {
    game.stage.backgroundColor = "#000000";
    s.player.body.sprite.destroy();
    s.portal.body.sprite.destroy();
    s.dialog.onscreen.style.fill = "#ffffff";
    s.dialog.text = "Simon. Coming 2017.";
  }
}

function release(bodyA, bodyB, spriteA, spriteB, equation) {
  if ("thing" == bodyA.uid) {
    s.dialog.text = DIALOG[s.counter]['info'];
  }
}
