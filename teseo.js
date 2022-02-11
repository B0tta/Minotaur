/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/zXTZaeBA
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update,
  render: render,
});

function preload() {
  game.stage.backgroundColor = "#ffffff";

  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();

  game.load.image("menu", "assets/menu.png");
  game.load.image("continua", "assets/continua.png");
  game.load.image("chiudiv", "assets/chiudivisiera.png");
  game.load.spritesheet("arianna", "assets/arianna.png", 1024, 768);
  game.load.image("testo1", "assets/testo1.png");
  game.load.image("testo2", "assets/testo2.png");
  game.load.image("testo3", "assets/testo3.png");
  game.load.image("testo4", "assets/testo4.png");
  game.load.image("testo5", "assets/testo5.png");
  game.load.image("testo6", "assets/testo6.png");
  game.load.image("tower1", "assets/tower1.png");
  game.load.image("tower2", "assets/tower2.png");
  game.load.image("tower3", "assets/tower4.png");
  game.load.image("tower4", "assets/tower5.png");
  game.load.image("tower5", "assets/tower3.png");
  game.load.image("tower6", "assets/tower6.png");
  game.load.spritesheet("tower7", "assets/tower7.png", 130, 728);
  game.load.spritesheet("tower8", "assets/tower8.png", 130, 728);
  game.load.image("tower9", "assets/tower9.png");
  game.load.image("supporto", "assets/supporto.png");
  game.load.image("supporto2", "assets/supporto2.png");
  game.load.image("platformB", "assets/platformB.png");
  game.load.image("platformV", "assets/platformV.png");
  game.load.spritesheet("platformE", "assets/platformE.png", 336, 30);
  game.load.image("torretta", "assets/torretta.png");
  game.load.image("torretta2", "assets/torretta2.png");
  game.load.image("jetpack", "assets/jetpack.png");
  game.load.image("background", "assets/bg.png");
  game.load.spritesheet("bullet", "assets/bullet.png", 22, 26);
  game.load.spritesheet("bulletve", "assets/bulletve.png");
  game.load.spritesheet("bulletvi", "assets/bulletvi.png");
  game.load.spritesheet("bulletro", "assets/bulletro.png");
  game.load.spritesheet("visiera", "assets/visiera.png", 1024, 768);
  game.load.spritesheet("portale1", "assets/portaler.png", 50, 118);
  game.load.spritesheet("portale2", "assets/portalev.png", 50, 118);
  game.load.spritesheet("teseo", "assets/teseo.png", 63, 110);
  game.load.spritesheet("death_e", "assets/death/death_electro.png", 85, 110);
  game.load.spritesheet("death_h", "assets/death/death_hit.png", 110, 110);
  game.load.spritesheet("death_s", "assets/death/death_stomp1.png", 110, 110);
  game.load.spritesheet("death_h2", "assets/death/death_h2.png", 131, 197);
  game.load.spritesheet("barravite", "assets/barravite.png", 110, 36);
  game.load.image("background2", "assets/bg1.png");
  game.load.image("background3", "assets/bg2.png");
  game.load.image("background4", "assets/bg01.png");
  game.load.image("soffitto", "assets/soffitto.png");
  game.load.image("tunnel1", "assets/tunnel1.jpeg");
  game.load.image("tunnel2", "assets/tunnel2.jpeg");
  game.load.image("gameover", "menu/gameover.png");
  game.load.image("continua_go", "menu/continua.png");
  //livello 2
  game.load.image("minotauro", "assets/minotauro2.png");
  game.load.image("platform1", "assets/platform1.png");
  game.load.image("platform2", "assets/platform2.png");
  game.load.image("platform3", "assets/platform3.png");
  game.load.image("platform4", "assets/platform4.png");
  game.load.image("box", "assets/box.png");
  game.load.image("box0", "assets/box0.png");
  game.load.spritesheet("teseo2", "assets/teseo2.png", 107, 192);
  game.load.spritesheet("enemy", "assets/enemy.png", 76, 101);
  game.load.image("parete1", "assets/parete1.png");
  game.load.image("parete2", "assets/parete2.png");
  game.load.spritesheet("minosse", "assets/minosse.png", 68, 124);
  //immagini per scena2
  game.load.image("scena2", "menu/scena2/scena2.jpg");
  game.load.image("avanti2", "menu/scena2/avanti_2.png");
  game.load.image("chiudi2", "menu/scena2/chiudi_2.png");
  game.load.image("storia2", "menu/scena2/storia_2.png");
  game.load.image("testo2_1", "menu/scena2/testo2_1.png");
  game.load.image("testo2_2", "menu/scena2/testo2_2.png");
  game.load.image("testo2_3", "menu/scena2/testo2_3.png");
  //immagini per scena3
  game.load.image("scena3", "menu/scena3/scena3.jpg");
  game.load.image("avanti3", "menu/scena3/avanti_3.png");
  game.load.image("chiudi3", "menu/scena3/chiudi_3.png");
  game.load.image("storia3", "menu/scena3/storia_3.png");
  game.load.image("testo3_1", "menu/scena3/testo3.png");
  //immagini per finale1
  game.load.image("finale1", "menu/finale1/finale1.jpg");
  game.load.image("chiudif1", "menu/finale1/chiudif_1.png");
  game.load.image("storiaf1", "menu/finale1/storiaf_1.png");
  game.load.image("testof1", "menu/finale1/testof_1.png");
  //immagini per finale2
  game.load.image("finale2", "menu/finale2/finale2.jpg");
  game.load.image("chiudif2", "menu/finale2/chiudif_2.png");
  game.load.image("storiaf2", "menu/finale2/storiaf_2.png");
  game.load.image("testof2", "menu/finale2/testof_2.png");
}

var parete1;
var parete2;
var player;
var player2;
var parte2 = false;
var minotauro;
var death_e;
var death_h;
var death_s;
var death_h2;
var platforms;
var cursors;
var jumpButton;
var weapon;
var weapon2;
var weapon_e;
var weapon_e2;
var weapon_e3;
var weapon_e4;
var fireButton1;
var fireButton2;
var hitbutton;
var menubutton;
var menu;
var menuaperto = false;
var bloccocomandi = false;
var continua;
var portale1;
var portale2;
var muro;
var background;
var background2;
var background3;
var background4;
var tunnel1;
var tunnel2;
var towerB;
var towerV;
var towerE;
var platformB;
var platformV;
var platformE;
var pe1;
var pe2;
var spawn_x = 100;
var spawn_y = 7904;
var spawn2_x = 20360;
var spawn2_y = 8004;
var jet;
var jetACTIVE = false;
var p1;
var p2;
var p3;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var t10;
var t11;
var t12;
var t13;
var t14;
var torretta;
var missile1;
var missile2;
var missile3;
var missile4;
var te1;
var te2;
var te3;
var te4;
var aggro = false;
var counter = 0;
var countertorretta = 0;
var counterenemy = 0;
var counterspecial = 0;
var tor1;
var tor2;
var tor3;
var tor4;
var supporto;
var visiera;
var visieraopen = false;
var visieraopen1 = false;
var visieraopen2 = false;
var visieraopen3 = false;
var visieraopen4 = false;
var visieraopen5 = false;
var chiudiv;
var fine_anim_visiera = false;
var fine_anim_visiera1 = false;
var fine_anim_visiera2 = false;
var fine_anim_visiera3 = false;
var fine_anim_visiera4 = false;
var fine_anim_visiera5 = false;
var esiste1 = false;
var esiste2 = false;
var visieranim;
var death_h_dx_anim;
var death_h_sx_anim;
var death_h2_dx_anim;
var death_h2_sx_anim;
var death_e_anim;
var death_s_anim;
var deathe1anim;
var deathe2anim;
var deathe3anim;
var deathe4anim;
var deathe5anim;
var deathe6anim;
var deathe7anim;
var deathe8anim;
var barravite;
var countervite = 3;
var soffitto;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var ec1 = false;
var ec2 = false;
var ec3 = false;
var ec4 = false;
var box;
var box0;
var enemy_aggro = false;
var enemy_life = true;
var enemy2_aggro = false;
var enemy2_life = true;
var enemy3_aggro = false;
var enemy3_life = true;
var enemy4_aggro = false;
var enemy4_life = true;
var p2_1;
var p2_2;
var p2_3;
var p2_4;
var control2 = false;
var minosse;
var finale_b;
var salita;
var gameover;
var continua_go;
var control = false;
//scene
var scena2;
var avanti2_1;
var avanti2_2;
var chiudi2;
var storia2;
var testo2_1;
var testo2_2;
var testo2_3;
var scena3;
var avanti3;
var chiudi3;
var storia3;
var testo3_1;
var finale1;
var finale2;
var chiudif1;
var chiudif2;
var storiaf1;
var storiaf2;
var testof1;
var testof2;

function create() {
  //sfondi
  background = game.add.sprite(0, 7424, "background");
  background2 = game.add.sprite(0, 7424, "background2");
  background3 = game.add.sprite(0, 7424, "background3");
  background4 = game.add.sprite(19700, 0, "background4");
  //soffitto
  soffitto = game.add.physicsGroup();
  soffitto.create(0, 7324, "soffitto");
  soffitto.setAll("body.immovable", true);
  //pareti
  parete1 = game.add.physicsGroup();
  parete1.create(19600, 0, "parete1");
  parete1.setAll("body.immovable", true);

  box0 = game.add.physicsGroup();
  box0.create(19700, 540, "box0");
  box0.create(19700, 575, "box0");
  box0.setAll("body.immovable", true);
  //tunnel
  tunnel2 = game.add.sprite(18100, 7624, "tunnel2");

  tunnel1 = game.add.physicsGroup();
  tunnel1.create(18100, 7924, "tunnel1");
  tunnel1.create(18100, 7324, "tunnel1");
  tunnel1.setAll("body.immovable", true);
  //grandezza livello
  game.world.setBounds(0, 0, 20724, 8192);
  //teseo ed animazioni
  player = game.add.sprite(100, 7824, "teseo");
  player.animations.add("right", [0, 1, 2, 3, 4, 5, 6, 7]);
  player.animations.add("rest_right", [23]);
  player.animations.add("left", [8, 9, 10, 11, 12, 13, 14, 15]);
  player.animations.add("rest_left", [31]);
  player.direction = "still";
  player.animations.add("jumpdx", [16, 17, 18, 19, 20, 21, 22, 23]);
  player.animations.add("jumpsx", [24, 25, 26, 27, 28, 29, 30, 31]);
  player.animations.add("firedx", [32, 33, 34, 35]);
  player.animations.add("firesx", [40, 41, 42, 43]);
  player.animations.add("jetdx", [65, 66, 67, 68, 69, 70, 71]);
  player.animations.add("jetsx", [73, 74, 75, 76, 77, 78, 79]);
  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 500;
  //player.visible = true;
  //teseo secondo livello ed animazioni
  player2 = game.add.sprite(5000, 7000, "teseo2");
  player2.animations.add("right", [0, 1, 2, 3, 4, 5, 6]);
  player2.animations.add("rest_right", [19]);
  player2.animations.add("left", [7, 8, 9, 10, 11, 12, 13]);
  player2.animations.add("rest_left", [26]);
  player2.direction = "still";
  player2.animations.add("jumpdx", [14, 15, 16, 17, 18, 19]);
  player2.animations.add("jumpsx", [21, 22, 23, 24, 25, 26]);
  player2.animations.add("hitdx", [28, 29, 30, 31, 32, 33]);
  player2.animations.add("hitsx", [35, 36, 37, 38, 39, 40]);
  salita = player2.animations.add("salita", [42, 43, 44, 45, 46, 47, 48]);
  game.physics.arcade.enable(player2);
  player2.body.collideWorldBounds = true;
  player2.body.gravity.y = 500;
  player2.visible = true;
  //minotauro in gabbia
  minotauro = game.add.sprite(20125, 8061, "minotauro");
  game.physics.arcade.enable(minotauro);
  minotauro.body.collideWorldBounds = true;
  minotauro.body.gravity.y = 500;
  minotauro.scale.setTo(0.1);
  //minosse con arianna in ostaggio
  minosse = game.add.sprite(20550, 100, "minosse");
  minosse.animations.add("ostaggio", [0, 1, 2, 3, 4]);
  game.physics.arcade.enable(minosse);
  minosse.body.collideWorldBounds = true;
  minosse.body.gravity.y = 500;
  minosse.visible = true;
  //armi portali
  weapon = game.add.weapon(1, "bulletro");
  weapon.trackSprite(player, 13, 0);

  weapon2 = game.add.weapon(1, "bulletvi");
  weapon2.trackSprite(player, 13, 0);

  weapon.bulletGravity.y = 500;
  weapon2.bulletGravity.y = 500;
  weapon.bulletSpeed = 500;
  weapon2.bulletSpeed = 500;
  //jetpack
  jet = game.add.sprite(8800, 7924, "jetpack");
  game.physics.arcade.enable(jet);
  jet.scale.setTo(0.3);
  jet.visible = true;
  //torri
  towerB = game.add.physicsGroup();
  towerV = game.add.physicsGroup();
  towerE = game.add.physicsGroup();

  towerB.create(-150, 8024, "tower1");
  towerB.create(500, 8024, "tower2");
  towerB.create(800, 8074, "tower2");
  towerB.create(3400, 7824, "tower4");
  towerB.create(2900, 8074, "tower2");
  towerB.create(4200, 7974, "tower5");
  towerB.create(4600, 8124, "tower2");
  towerB.create(5700, 8024, "tower2");
  towerB.create(6800, 7974, "tower5");
  towerB.create(8600, 8024, "tower5");
  towerB.create(15500, 7924, "tower5");
  towerB.create(17200, 7874, "tower1");
  //torri che si chiudono
  t1 = towerB.create(6000, 7882, "tower4");
  t2 = towerB.create(6200, 8014, "tower4");
  t3 = towerB.create(6000, 7156, "tower6");
  t4 = towerB.create(6200, 7024, "tower6");
  t5 = towerB.create(6400, 7882, "tower4");
  t6 = towerB.create(6600, 8014, "tower4");
  t7 = towerB.create(6400, 7156, "tower6");
  t8 = towerB.create(6600, 7024, "tower6");
  t9 = towerB.create(13500, 7862, "tower4");
  t10 = towerB.create(13900, 7994, "tower4");
  t11 = towerB.create(13500, 7136, "tower6");
  t12 = towerB.create(13900, 7004, "tower6");
  t13 = towerB.create(14300, 7862, "tower4");
  t14 = towerB.create(14300, 7136, "tower6");
  towerB.setAll("body.immovable", true);
  //torri verdi
  towerV.create(1100, 7924, "tower3");
  towerV.create(3200, 8024, "tower3");
  towerV.create(7700, 7824, "tower9");
  towerV.create(7300, 8024, "tower3");
  towerV.create(16700, 7824, "tower3");
  towerV.setAll("body.immovable", true);
  //torri elettriche
  te1 = towerE.create(9150, 8024, "tower7");
  te2 = towerE.create(9500, 7924, "tower7");
  te3 = towerE.create(9600, 6824, "tower8");
  te4 = towerE.create(9800, 8024, "tower7");
  te1.animations.add("electro", [0, 1, 2, 3, 4, 5, 6, 7]);
  te2.animations.add("electro", [0, 1, 2, 3, 4, 5, 6, 7]);
  te3.animations.add("electro", [0, 1, 2, 3, 4, 5, 6, 7]);
  te4.animations.add("electro", [0, 1, 2, 3, 4, 5, 6, 7]);
  towerE.setAll("body.immovable", true);
  //torrette
  torretta = game.add.physicsGroup();
  tor1 = torretta.create(5050, 7590, "torretta");
  tor1.scale.setTo(0.2);
  tor2 = torretta.create(10850, 7590, "torretta");
  tor2.scale.setTo(0.2);
  tor3 = torretta.create(11750, 7876, "torretta2");
  tor3.scale.setTo(0.2);
  tor4 = torretta.create(12450, 7590, "torretta");
  tor4.scale.setTo(0.2);
  torretta.setAll("body.immovable", true);

  supporto = game.add.physicsGroup();
  sup1 = supporto.create(4930, 7424, "supporto");
  sup1.scale.setTo(0.5);
  sup2 = supporto.create(10730, 7424, "supporto");
  sup2.scale.setTo(0.5);
  sup3 = supporto.create(11630, 8026, "supporto2");
  sup3.scale.setTo(0.5);
  sup4 = supporto.create(12330, 7424, "supporto");
  sup4.scale.setTo(0.5);
  supporto.setAll("body.immovable", true);
  //piattaforme
  platformB = game.add.physicsGroup();
  platformV = game.add.physicsGroup();
  platformE = game.add.physicsGroup();

  p1 = platformB.create(2600, 7924, "platformB");
  p2 = platformB.create(5250, 8024, "platformB");
  platformB.setAll("body.immovable", true);

  pe1 = platformE.create(10200, 7824, "platformE");
  pe2 = platformE.create(13000, 7824, "platformE");
  pe3 = platformE.create(15100, 7824, "platformE");
  p3 = platformE.create(16423, 7724, "platformE");
  pe1.animations.add("electro", [0, 1, 2, 3]);
  pe2.animations.add("electro", [0, 1, 2, 3]);
  pe3.animations.add("electro", [0, 1, 2, 3]);
  p3.animations.add("electro", [0, 1, 2, 3]);
  platformE.setAll("body.immovable", true);
  pe1.anchor.setTo(0.5, 0.5);
  pe2.anchor.setTo(0.5, 0.5);
  pe3.anchor.setTo(0.5, 0.5);

  platformV.create(1700, 7924, "platformV");
  platformV.create(3700, 8024, "platformV");
  platformV.create(8100, 7924, "platformV");
  platformV.create(16100, 8024, "platformV");
  platformV.create(16100, 7524, "platformV");
  platformV.setAll("body.immovable", true);
  //piattaforme secondo livello
  platform1 = game.add.physicsGroup();
  platform2 = game.add.physicsGroup();
  platform3 = game.add.physicsGroup();
  platform4 = game.add.physicsGroup();

  platform1.create(19900, 7924, "platform1"); //1
  platform2.create(20100, 7624, "platform2"); //2
  platform3.create(20000, 7274, "platform3"); //3
  platform4.create(20200, 7024, "platform4"); //4
  platform2.create(20400, 6724, "platform4"); //5
  platform4.create(19750, 6624, "platform4"); //6   NEMICO!
  p2_1 = platform1.create(20200, 6274, "platform1"); //7
  platform1.create(20500, 5674, "platform1"); //8
  platform3.create(19800, 6024, "platform3"); //9
  platform3.create(20200, 5820, "platform3"); //10
  platform2.create(20000, 5424, "platform2"); //11
  platform4.create(20300, 5130, "platform4"); //12
  platform2.create(20450, 4900, "platform2"); //13
  platform1.create(20000, 4800, "platform1"); //14
  platform1.create(20350, 4500, "platform1"); //15   NEMICO!
  platform3.create(19900, 4200, "platform3"); //16
  platform2.create(20200, 3950, "platform2"); //17
  platform2.create(19750, 3730, "platform2"); //18
  p2_2 = platform4.create(20050, 3400, "platform4"); //19
  platform4.create(20250, 3150, "platform4"); //20   NEMICO!
  platform1.create(19650, 2900, "platform1"); //21
  platform2.create(20100, 2600, "platform2"); //22
  platform1.create(20600, 2325, "platform1"); //23
  platform3.create(20100, 2150, "platform3"); //24   NEMICO!
  platform1.create(19650, 1950, "platform1"); //21
  p2_3 = platform4.create(20300, 1700, "platform4"); //25
  p2_4 = platform2.create(20500, 1550, "platform2"); //26
  platform1.create(20100, 1200, "platform1"); //27

  platform1.visible = false;
  platform2.visible = false;
  platform3.visible = false;
  platform4.visible = false;

  platform1.setAll("body.immovable", true);
  platform2.setAll("body.immovable", true);
  platform3.setAll("body.immovable", true);
  platform4.setAll("body.immovable", true);
  //nemici
  enemy = game.add.sprite(19850, 6523, "enemy");
  game.physics.arcade.enable(enemy);
  enemy.body.gravity.y = 500;
  enemy.animations.add("right", [0, 1, 2, 3]);
  enemy.animations.add("left", [4, 5, 6, 7]);
  deathe2anim = enemy.animations.add("death_right", [8, 9, 10, 11]);
  deathe1anim = enemy.animations.add("death_left", [12, 13, 14, 15]);
  enemy.visible = false;

  enemy2 = game.add.sprite(20450, 4399, "enemy");
  game.physics.arcade.enable(enemy2);
  enemy2.body.gravity.y = 500;
  enemy2.animations.add("right", [0, 1, 2, 3]);
  enemy2.animations.add("left", [4, 5, 6, 7]);
  deathe4anim = enemy2.animations.add("death_right", [8, 9, 10, 11]);
  deathe3anim = enemy2.animations.add("death_left", [12, 13, 14, 15]);
  enemy2.visible = false;

  enemy3 = game.add.sprite(20350, 3049, "enemy");
  game.physics.arcade.enable(enemy3);
  enemy3.body.gravity.y = 500;
  enemy3.animations.add("right", [0, 1, 2, 3]);
  enemy3.animations.add("left", [4, 5, 6, 7]);
  deathe6anim = enemy3.animations.add("death_right", [8, 9, 10, 11]);
  deathe5anim = enemy3.animations.add("death_left", [12, 13, 14, 15]);
  enemy3.visible = false;

  enemy4 = game.add.sprite(20100, 2049, "enemy");
  game.physics.arcade.enable(enemy4);
  enemy4.body.gravity.y = 500;
  enemy4.animations.add("right", [0, 1, 2, 3]);
  enemy4.animations.add("left", [4, 5, 6, 7]);
  deathe8anim = enemy4.animations.add("death_right", [8, 9, 10, 11]);
  deathe7anim = enemy4.animations.add("death_left", [12, 13, 14, 15]);
  enemy4.visible = false;
  //armi nemici
  weapon_e = game.add.weapon(7, "bulletve");
  weapon_e.trackSprite(enemy, 13, 0);
  weapon_e2 = game.add.weapon(3, "bulletve");
  weapon_e2.trackSprite(enemy2, 13, 0);
  weapon_e3 = game.add.weapon(6, "bulletve");
  weapon_e3.trackSprite(enemy3, 13, 0);
  weapon_e4 = game.add.weapon(1, "bulletve");
  weapon_e4.trackSprite(enemy4, 13, 0);
  //box nemici per non farli cadere dalle loro piattaforme
  box = game.add.physicsGroup();

  box.create(19650, 6524, "box");
  box.create(20098, 6524, "box");

  box.create(20250, 4400, "box");
  box.create(20575, 4400, "box");

  box.create(20150, 3050, "box");
  box.create(20598, 3050, "box");

  box.create(20000, 2050, "box");
  box.create(20325, 2050, "box");
  box.setAll("body.immovable", true);
  //comandi tastiera
  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  hitbutton = game.input.keyboard.addKey(Phaser.Keyboard.S);
  fireButton1 = game.input.keyboard.addKey(Phaser.Keyboard.F);
  fireButton2 = game.input.keyboard.addKey(Phaser.Keyboard.D);
  menubutton = game.input.keyboard.addKey(Phaser.Keyboard.M);
  //counter torretta
  game.time.events.loop(Phaser.Timer.SECOND, updateCountertorretta, this);
  game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
  game.time.events.loop(Phaser.Timer.SECOND, updateCounterenemy, this);
  //barra vite
  barravite = game.add.sprite(50, 50, "barravite");
  barravite.visible = true;
  barravite.fixedToCamera = true;
  barravite.animations.add("lose1", [0, 1, 2, 3, 4, 5]);
  barravite.animations.add("lose2", [6, 7, 8, 9, 10, 11]);
  barravite.animations.add(
    "lose3",
    [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  );
  barravite.animations.add("restart", [0]);
  minotauro.scale.setTo(1.5);
  //menù e visiera
  menu = game.add.sprite(0, 0, "menu");
  menu.visible = false;
  menu.fixedToCamera = true;

  continua = game.add.sprite(0, 0, "continua");
  continua.events.onInputDown.add(continuagioco);
  continua.inputEnabled = true;
  continua.visible = false;
  continua.fixedToCamera = true;

  visiera = game.add.sprite(0, 0, "visiera");
  visieranim = visiera.animations.add(
    "discesa",
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  );
  visiera.visible = false;
  visiera.fixedToCamera = true;

  chiudiv = game.add.sprite(0, 0, "chiudiv");
  chiudiv.events.onInputDown.add(chiudiVisiera);
  chiudiv.inputEnabled = true;
  chiudiv.visible = false;
  chiudiv.fixedToCamera = true;

  arianna = game.add.sprite(0, 0, "arianna");
  arianna.visible = false;
  arianna.fixedToCamera = true;

  testo1 = game.add.sprite(0, 0, "testo1");
  testo1.visible = false;
  testo1.fixedToCamera = true;

  testo2 = game.add.sprite(0, 0, "testo2");
  testo2.visible = false;
  testo2.fixedToCamera = true;

  testo3 = game.add.sprite(0, 0, "testo3");
  testo3.visible = false;
  testo3.fixedToCamera = true;

  testo4 = game.add.sprite(0, 0, "testo4");
  testo4.visible = false;
  testo4.fixedToCamera = true;

  testo5 = game.add.sprite(0, 0, "testo5");
  testo5.visible = false;
  testo5.fixedToCamera = true;

  testo6 = game.add.sprite(0, -100, "testo6");
  testo6.visible = false;
  testo6.fixedToCamera = true;

  //velocità iniziale piattaforme mobili livello 2

  p2_1.body.velocity.x = 200;
  p2_2.body.velocity.x = 200;
  p2_3.body.velocity.x = 200;
  p2_4.body.velocity.x = 200;

  //animazioni morte elettrica, da proiettile, da schiacciamento e da proiettile nel secondo livello
  death_e = game.add.sprite(100, 7904, "death_e");
  death_e_anim = death_e.animations.add("death_e", [0, 1, 2, 3, 4]);
  death_e.visible = false;

  death_h = game.add.sprite(100, 7904, "death_h");
  death_h_dx_anim = death_h.animations.add("death_h_dx", [0, 1, 2, 3, 4, 5]);
  death_h_sx_anim = death_h.animations.add("death_h_sx", [6, 7, 8, 9, 10, 11]);
  death_h.visible = false;
  game.physics.arcade.enable(death_h);
  death_h.body.collideWorldBounds = true;
  death_h.body.gravity.y = 500;

  death_s = game.add.sprite(100, 7904, "death_s");
  death_s_anim = death_s.animations.add("death_s", [0, 1, 2, 3, 4, 5, 6]);
  death_s.visible = false;
  game.physics.arcade.enable(death_s);

  death_h2 = game.add.sprite(100, 7904, "death_h2");
  death_h2_dx_anim = death_h2.animations.add(
    "death_h2_dx",
    [0, 1, 2, 3, 4, 5, 6, 7]
  );
  death_h2_sx_anim = death_h2.animations.add(
    "death_h2_sx",
    [8, 9, 10, 11, 12, 13, 14, 15]
  );
  death_h2.visible = false;
  game.physics.arcade.enable(death_h2);
  death_h2.body.collideWorldBounds = true;
  death_h2.body.gravity.y = 500;
  death_h2.scale.setTo(0.9);
  //game over
  gameover = game.add.sprite(0, 0, "gameover");
  gameover.visible = false;
  gameover.fixedToCamera = true;

  continua_go = game.add.sprite(604, 593, "continua_go");
  continua_go.events.onInputDown.add(post_gameover);
  continua_go.inputEnabled = true;
  continua_go.visible = false;
  continua_go.fixedToCamera = true;
  //scena 2
  scena2 = game.add.sprite(0, 0, "scena2");
  scena2.visible = false;
  scena2.fixedToCamera = true;

  storia2 = game.add.sprite(50, 50, "storia2");
  storia2.events.onInputDown.add(scena_2);
  storia2.inputEnabled = true;
  storia2.visible = false;
  storia2.fixedToCamera = true;

  testo2_1 = game.add.sprite(700, 193, "testo2_1");
  testo2_1.visible = false;
  testo2_1.fixedToCamera = true;

  testo2_2 = game.add.sprite(700, 193, "testo2_2");
  testo2_2.visible = false;
  testo2_2.fixedToCamera = true;

  testo2_3 = game.add.sprite(700, 193, "testo2_3");
  testo2_3.visible = false;
  testo2_3.fixedToCamera = true;

  avanti2_1 = game.add.sprite(50, 50, "avanti2");
  avanti2_1.events.onInputDown.add(scena2_1);
  avanti2_1.inputEnabled = true;
  avanti2_1.visible = false;
  avanti2_1.fixedToCamera = true;

  avanti2_2 = game.add.sprite(50, 50, "avanti2");
  avanti2_2.events.onInputDown.add(scena2_2);
  avanti2_2.inputEnabled = true;
  avanti2_2.visible = false;
  avanti2_2.fixedToCamera = true;

  chiudi2 = game.add.sprite(50, 50, "chiudi2");
  chiudi2.events.onInputDown.add(scena2_finale);
  chiudi2.inputEnabled = true;
  chiudi2.visible = false;
  chiudi2.fixedToCamera = true;
  //scena 3
  scena3 = game.add.sprite(0, 0, "scena3");
  scena3.visible = false;
  scena3.fixedToCamera = true;

  storia3 = game.add.sprite(50, 50, "storia3");
  storia3.events.onInputDown.add(scena3_1);
  storia3.inputEnabled = true;
  storia3.visible = false;
  storia3.fixedToCamera = true;

  testo3_1 = game.add.sprite(700, 193, "testo3_1");
  testo3_1.visible = false;
  testo3_1.fixedToCamera = true;

  chiudi3 = game.add.sprite(50, 50, "chiudi3");
  chiudi3.events.onInputDown.add(scena3_finale);
  chiudi3.inputEnabled = true;
  chiudi3.visible = false;
  chiudi3.fixedToCamera = true;
  //finale1
  finale1 = game.add.sprite(0, 0, "finale1");
  finale1.visible = false;
  finale1.fixedToCamera = true;

  storiaf1 = game.add.sprite(50, 50, "storiaf1");
  storiaf1.events.onInputDown.add(final_1);
  storiaf1.inputEnabled = true;
  storiaf1.visible = false;
  storiaf1.fixedToCamera = true;

  testof1 = game.add.sprite(100, 193, "testof1");
  testof1.visible = false;
  testof1.fixedToCamera = true;

  chiudif1 = game.add.sprite(50, 50, "chiudif1");
  chiudif1.events.onInputDown.add(end);
  chiudif1.inputEnabled = true;
  chiudif1.visible = false;
  chiudif1.fixedToCamera = true;
  //finale2
  finale2 = game.add.sprite(0, 0, "finale2");
  finale2.visible = false;
  finale2.fixedToCamera = true;

  storiaf2 = game.add.sprite(50, 50, "storiaf2");
  storiaf2.events.onInputDown.add(final_2);
  storiaf2.inputEnabled = true;
  storiaf2.visible = false;
  storiaf2.fixedToCamera = true;

  testof2 = game.add.sprite(100, 193, "testof2");
  testof2.visible = false;
  testof2.fixedToCamera = true;

  chiudif2 = game.add.sprite(50, 50, "chiudif2");
  chiudif2.events.onInputDown.add(end);
  chiudif2.inputEnabled = true;
  chiudif2.visible = false;
  chiudif2.fixedToCamera = true;
}

function update() {
  //parallasse
  background.x = game.camera.x;
  background2.x = game.camera.x * 0.8;
  background3.x = game.camera.x * 0.2;
  //player con torri, piattaforme, torrette, tunnel e soffitto
  game.physics.arcade.collide(player, towerB);
  game.physics.arcade.collide(player, towerV);
  game.physics.arcade.collide(player, platformB);
  game.physics.arcade.collide(player, platformV);
  game.physics.arcade.collide(player, platform1);
  game.physics.arcade.collide(player, platform2);
  game.physics.arcade.collide(player, platform3);
  game.physics.arcade.collide(player, platform4);
  game.physics.arcade.collide(player, torretta);
  game.physics.arcade.collide(player, supporto);
  game.physics.arcade.collide(player, tunnel1);
  game.physics.arcade.collide(player, soffitto);
  //player del secondo livello con torri, piattaforme, torrette e tunnel
  game.physics.arcade.collide(player2, towerB);
  game.physics.arcade.collide(player2, towerV);
  game.physics.arcade.collide(player2, platformB);
  game.physics.arcade.collide(player2, platformV);
  game.physics.arcade.collide(player2, platform1);
  game.physics.arcade.collide(player2, platform2);
  game.physics.arcade.collide(player2, platform3);
  game.physics.arcade.collide(player2, platform4);
  game.physics.arcade.collide(player2, torretta);
  game.physics.arcade.collide(player2, supporto);
  game.physics.arcade.collide(player2, tunnel1);
  game.physics.arcade.collide(player2, parete1);
  game.physics.arcade.collide(player2, box0, tubo);
  //nemici con piattaforme e box
  game.physics.arcade.collide(enemy, platform1);
  game.physics.arcade.collide(enemy, platform2);
  game.physics.arcade.collide(enemy, platform3);
  game.physics.arcade.collide(enemy, platform4);
  game.physics.arcade.collide(enemy, box);
  game.physics.arcade.collide(enemy, parete1);
  game.physics.arcade.collide(enemy2, platform1);
  game.physics.arcade.collide(enemy2, platform2);
  game.physics.arcade.collide(enemy2, platform3);
  game.physics.arcade.collide(enemy2, platform4);
  game.physics.arcade.collide(enemy2, box);
  game.physics.arcade.collide(enemy2, parete1);
  game.physics.arcade.collide(enemy3, platform1);
  game.physics.arcade.collide(enemy3, platform2);
  game.physics.arcade.collide(enemy3, platform3);
  game.physics.arcade.collide(enemy3, platform4);
  game.physics.arcade.collide(enemy3, box);
  game.physics.arcade.collide(enemy3, parete1);
  game.physics.arcade.collide(enemy4, platform1);
  game.physics.arcade.collide(enemy4, platform2);
  game.physics.arcade.collide(enemy4, platform3);
  game.physics.arcade.collide(enemy4, platform4);
  game.physics.arcade.collide(enemy4, box);
  game.physics.arcade.collide(enemy4, parete1);
  //sprite morti con le strutture
  game.physics.arcade.collide(death_h, towerB);
  game.physics.arcade.collide(death_h, towerV);
  game.physics.arcade.collide(death_h, platformB);
  game.physics.arcade.collide(death_h, platformV);
  game.physics.arcade.collide(death_h, torretta);
  game.physics.arcade.collide(death_h, supporto);
  game.physics.arcade.collide(death_h, tunnel1);
  game.physics.arcade.collide(death_h2, platform1);
  game.physics.arcade.collide(death_h2, platform2);
  game.physics.arcade.collide(death_h2, platform3);
  game.physics.arcade.collide(death_h2, platform4);
  //game.physics.arcade.collide(death_s, towerB);
  //proiettile con piattaforme e torri
  game.physics.arcade.overlap(towerV, weapon.bullets, portal1);
  game.physics.arcade.overlap(towerV, weapon2.bullets, portal2);
  game.physics.arcade.overlap(platformV, weapon.bullets, portal1);
  game.physics.arcade.overlap(platformV, weapon2.bullets, portal2);
  game.physics.arcade.overlap(towerB, weapon.bullets, noportal);
  game.physics.arcade.overlap(towerB, weapon2.bullets, noportal);
  game.physics.arcade.overlap(platformB, weapon.bullets, noportal);
  game.physics.arcade.overlap(platformB, weapon2.bullets, noportal);
  //portali con player e piattaforme/torri
  game.physics.arcade.overlap(player, portale1, tp1);
  game.physics.arcade.overlap(player, portale2, tp2);
  game.physics.arcade.collide(portale1, platformV);
  game.physics.arcade.collide(portale2, platformV);
  game.physics.arcade.collide(portale1, platformB);
  game.physics.arcade.collide(portale2, platformB);
  game.physics.arcade.collide(portale1, platformE);
  game.physics.arcade.collide(portale2, platformE);
  game.physics.arcade.collide(portale1, towerV);
  game.physics.arcade.collide(portale2, towerV);
  game.physics.arcade.collide(portale1, towerB);
  game.physics.arcade.collide(portale2, towerB);
  //triplo portale
  game.physics.arcade.overlap(portale2, weapon.bullets, teleport_bullet);
  game.physics.arcade.overlap(portale1, weapon2.bullets, teleport_bullet2);
  //giocatore e jetpack
  game.physics.arcade.overlap(player, jet, fly);
  //giocatore e jetpack
  game.physics.arcade.collide(player, minotauro, changelevel);
  //morte da proiettile della torretta
  game.physics.arcade.overlap(player, missile1, death);
  game.physics.arcade.overlap(player, missile2, death);
  game.physics.arcade.overlap(player, missile3, death);
  game.physics.arcade.overlap(player, missile4, death);
  //morte con torri e piattaforme elettriche
  game.physics.arcade.collide(player, towerE, deathE);
  game.physics.arcade.collide(player, platformE, deathE);
  //morte da proiettile dei nemici - secondo livello
  game.physics.arcade.overlap(player2, weapon_e.bullets, death2);
  game.physics.arcade.overlap(player2, weapon_e2.bullets, death2);
  game.physics.arcade.overlap(player2, weapon_e3.bullets, death2);
  game.physics.arcade.overlap(player2, weapon_e4.bullets, death2);
  game.physics.arcade.collide(box0, weapon_e.bullets);
  game.physics.arcade.collide(box0, weapon_e2.bullets);
  game.physics.arcade.collide(box0, weapon_e3.bullets);
  game.physics.arcade.collide(box0, weapon_e4.bullets);
  game.physics.arcade.collide(parete1, weapon_e.bullets, we1);
  game.physics.arcade.collide(parete1, weapon_e2.bullets, we2);
  game.physics.arcade.collide(parete1, weapon_e3.bullets, we3);
  game.physics.arcade.collide(parete1, weapon_e4.bullets, we4);
  game.physics.arcade.collide(box0, weapon_e.bullets, we1);
  game.physics.arcade.collide(box0, weapon_e2.bullets, we2);
  game.physics.arcade.collide(box0, weapon_e3.bullets, we3);
  game.physics.arcade.collide(box0, weapon_e4.bullets, we4);
  //uccisione nemico
  game.physics.arcade.overlap(player2, enemy, hit);
  game.physics.arcade.overlap(player2, enemy2, hit2);
  game.physics.arcade.overlap(player2, enemy3, hit3);
  game.physics.arcade.overlap(player2, enemy4, hit4);
  //minosse con box e per scena finale
  game.physics.arcade.collide(minosse, box0);
  game.physics.arcade.collide(player2, minosse, finale_bad);
  //game.physics.arcade.collide(player2, parete1, finale_good);
  //gestione camera
  if (player.x < 19700) {
    game.camera.bounds = new Phaser.Rectangle(0, 7424, 19700, 768);
    game.camera.focusOnXY(player.x + 250, player.y);
  }
  if (player.x > 19700) {
    barravite.visible = false;
    if (parte2 == false) {
      game.camera.bounds = new Phaser.Rectangle(19700, 768, 1024, 7424);
      game.camera.focusOnXY(player.x + 250, player.y);
    }
    if (parte2 == true) {
      game.camera.bounds = new Phaser.Rectangle(19700, 768, 1024, 7424);
      game.camera.focusOnXY(player2.x, player2.y - 100);
    }
  }
  if (player2.y < 798) {
    game.camera.bounds = new Phaser.Rectangle(19700, 0, 1024, 768);
    game.camera.focusOnXY(player2.x, player2.y - 100);
  }
  //player velocità a zero iniziale
  player.body.velocity.x = 0;
  player2.body.velocity.x = 0;
  //minosse animazione
  minosse.play("ostaggio", 3);
  //piattaforme elettriche animazione
  pe1.play("electro", 5);
  pe2.play("electro", 5);
  pe3.play("electro", 5);
  p3.play("electro", 5);
  //piattaforme elettriche animazione
  te1.play("electro", 5);
  te2.play("electro", 5);
  te3.play("electro", 5);
  te4.play("electro", 5);
  //piattaforme elettriche ruotanti
  pe1.body.angularVelocity = 50;
  pe2.body.angularVelocity = 50;
  pe3.body.angularVelocity = 50;
  //movimenti primo livello
  if (cursors.left.isDown && parte2 == false) {
    player.body.velocity.x = -250;
    if (
      player.direction != "jumpdx" &&
      player.direction != "jumpsx" &&
      player.direction != "jetdx" &&
      player.direction != "jetsx"
    ) {
      player.play("left", 10);
      player.direction = "left";
    }
  } else if (cursors.right.isDown && parte2 == false) {
    player.body.velocity.x = 250;
    if (
      player.direction != "jumpdx" &&
      player.direction != "jumpsx" &&
      player.direction != "jetdx" &&
      player.direction != "jetsx"
    ) {
      player.play("right", 10);
      player.direction = "right";
    }
  } else {
    if (player.direction == "right") {
      player.animations.play("rest_right", 5, false);
      player.direction = "still_right";
    } else if (player.direction == "left") {
      player.animations.play("rest_left", 5, false);
      player.direction = "still_left";
    }
    //  player.direction = "still"
  }
  if (player.body.onFloor() || player.body.touching.down) {
    if (player.direction == "jumpdx" || player.direction == "jetdx") {
      player.direction = "right";
    }
    if (player.direction == "jumpsx" || player.direction == "jetsx") {
      player.direction = "left";
    }
  }
  if (
    jumpButton.isDown &&
    jetACTIVE === false &&
    parte2 == false &&
    (player.body.onFloor() || player.body.touching.down)
  ) {
    if (player.direction == "right" || player.direction == "still_right") {
      player.body.velocity.y = -400;
      player.direction = "jumpdx";
      player.play("jumpdx", 10);
    } else if (player.direction == "left" || player.direction == "still_left") {
      player.body.velocity.y = -400;
      player.direction = "jumpsx";
      player.play("jumpsx", 10);
    }
  }
  if (jumpButton.isDown && jetACTIVE === true && parte2 == false) {
    if (
      player.direction == "right" ||
      player.direction == "still_right" ||
      player.direction == "jetdx"
    ) {
      player.body.velocity.y = -300;
      player.direction = "jetdx";
      player.play("jetdx", 10);
    } else if (
      player.direction == "left" ||
      player.direction == "still_left" ||
      player.direction == "jetsx"
    ) {
      player.body.velocity.y = -300;
      player.direction = "jetsx";
      player.play("jetsx", 10);
    }
  }
  //movimenti secondo livello
  if (cursors.left.isDown && parte2 == true) {
    player2.body.velocity.x = -250;
    if (player2.direction != "jumpdx" && player2.direction != "jumpsx") {
      player2.play("left", 10);
      player2.direction = "left";
    }
  } else if (cursors.right.isDown && parte2 == true) {
    player2.body.velocity.x = 250;
    if (player2.direction != "jumpdx" && player2.direction != "jumpsx") {
      player2.play("right", 10);
      player2.direction = "right";
    }
  } else {
    if (player2.direction == "right") {
      player2.animations.play("rest_right", 5, false);
      player2.direction = "still_right";
    } else if (player2.direction == "left") {
      player2.animations.play("rest_left", 5, false);
      player2.direction = "still_left";
    }
    //  player.direction = "still"
  }
  if (player2.body.onFloor() || player2.body.touching.down) {
    if (player2.direction == "jumpdx") {
      player2.direction = "right";
    }
    if (player2.direction == "jumpsx") {
      player2.direction = "left";
    }
  }
  if (
    jumpButton.isDown &&
    parte2 == true &&
    (player2.body.onFloor() || player2.body.touching.down)
  ) {
    if (player2.direction == "right" || player2.direction == "still_right") {
      player2.body.velocity.y = -600;
      player2.direction = "jumpdx";
      player2.play("jumpdx", 10);
    } else if (
      player2.direction == "left" ||
      player2.direction == "still_left"
    ) {
      player2.body.velocity.y = -600;
      player2.direction = "jumpsx";
      player2.play("jumpsx", 10);
    }
  }
  //colpo teseo secondo livello
  if (hitbutton.isDown && parte2 == true) {
    if (player2.direction == "right" || player2.direction == "still_right") {
      player2.play("hitdx", 10);
    } else if (
      player2.direction == "left" ||
      player2.direction == "still_left"
    ) {
      player2.play("hitsx", 10);
    }
  }
  //fine jetpack
  if (player.x > 15500 && parte2 == false) {
    jetACTIVE = false;
  }
  //menù
  if (menubutton.isDown) {
    menuaperto = true;
    if (menuaperto == true) {
      menu.visible = true;
      continua.visible = true;
      game.paused = true;
    }
  }
  //checkpoint
  if (player.x >= 4200 && parte2 == false) {
    spawn_x = 4200;
    spawn_y = 7724;
  }
  if (player.x >= 8600 && parte2 == false) {
    spawn_x = 8600;
    spawn_y = 7824;
  }
  //if (player.x >= 6800){spawn_x = 6800;spawn_y = 400;}
  //visiere
  if (
    player.x >= 800 &&
    player.x < 2000 &&
    visieraopen == false &&
    player.body.touching.down &&
    parte2 == false
  ) {
    visieraopen = true;
    if (visieraopen == true && fine_anim_visiera == false) {
      visiera.visible = true;
      visieranim.onComplete.add(finevisiera, this);
      visiera.play("discesa", 15, false);
      fine_anim_visiera = true;
    }
  }
  if (
    player.x >= 4200 &&
    player.x < 5000 &&
    visieraopen1 == false &&
    player.body.touching.down &&
    parte2 == false
  ) {
    visieraopen1 = true;
    if (visieraopen1 == true && fine_anim_visiera1 == false) {
      visiera.visible = true;
      visieranim.onComplete.add(finevisiera1, this);
      visiera.play("discesa", 15, false);
      fine_anim_visiera1 = true;
    }
  }
  if (
    player.x >= 6800 &&
    player.x < 8000 &&
    visieraopen2 == false &&
    player.body.touching.down &&
    parte2 == false
  ) {
    visieraopen2 = true;
    if (visieraopen2 == true && fine_anim_visiera2 == false) {
      visiera.visible = true;
      visieranim.onComplete.add(finevisiera2, this);
      visiera.play("discesa", 15, false);
      fine_anim_visiera2 = true;
    }
  }
  if (
    player.x >= 8600 &&
    player.x < 10000 &&
    visieraopen3 == false &&
    player.body.touching.down &&
    parte2 == false
  ) {
    visieraopen3 = true;
    if (visieraopen3 == true && fine_anim_visiera3 == false) {
      visiera.visible = true;
      visieranim.onComplete.add(finevisiera3, this);
      visiera.play("discesa", 15, false);
      fine_anim_visiera3 = true;
    }
  }
  if (player2.x >= 19700 && visieraopen4 == false && player2.body.onFloor()) {
    visieraopen4 = true;
    if (visieraopen4 == true && fine_anim_visiera4 == false) {
      visiera.visible = true;
      visieranim.onComplete.add(finevisiera4, this);
      visiera.play("discesa", 15, false);
      fine_anim_visiera4 = true;
    }
  }
  if (player2.y < 760 && visieraopen5 == false && player2.body.touching.down) {
    visieraopen5 = true;
    if (visieraopen5 == true && fine_anim_visiera5 == false) {
      visiera.visible = true;
      visieranim.onComplete.add(finevisiera5, this);
      visiera.play("discesa", 15, false);
      fine_anim_visiera5 = true;
    }
  }
  //kill visiere
  if (player.x >= 2100) {
    testo1.kill();
  }
  if (player.x >= 5000) {
    testo2.kill();
  }
  if (player.x >= 8100) {
    testo3.kill();
  }
  if (parte2 == true) {
    testo4.kill();
  }
  if (player2.y < 2000) {
    testo5.kill();
    arianna.kill();
  }
  //armi nemici
  if (player2.y < enemy.y) {
    enemy_aggro = true;
  }
  if (enemy_aggro && ec1 == false) {
    if (player2.x - enemy.x < 0) {
      enemy.body.velocity.x = player2.x - enemy.x - 50;
      enemy.play("left", 10);
      enemy.direction = "left";
    } else {
      enemy.body.velocity.x = player2.x - enemy.x + 50;
      enemy.play("right", 10);
      enemy.direction = "right";
    }
    counterenemy = 4;
    if (enemy_life == true && counterenemy == 4) {
      weapon_e.fireAtSprite(player2);
      weapon_e.fire();
      counterenemy = 0;
    }
  }
  if (player2.y < enemy2.y) {
    enemy2_aggro = true;
  }
  if (enemy2_aggro && ec2 == false) {
    if (player2.x - enemy2.x < 0) {
      enemy2.body.velocity.x = player2.x - enemy2.x - 50;
      enemy2.play("left", 10);
      enemy2.direction = "left";
    } else {
      enemy2.body.velocity.x = player2.x - enemy2.x + 50;
      enemy2.play("right", 10);
      enemy2.direction = "right";
    }
    counterenemy = 4;
    if (enemy2_life == true && counterenemy == 4) {
      weapon_e2.fireAtSprite(player2);
      weapon_e2.fire();
      counterenemy = 0;
    }
  }
  if (player2.y < enemy3.y) {
    enemy3_aggro = true;
  }
  if (enemy3_aggro && ec3 == false) {
    if (player2.x - enemy3.x < 0) {
      enemy3.body.velocity.x = player2.x - enemy3.x - 50;
      enemy3.play("left", 10);
      enemy3.direction = "left";
    } else {
      enemy3.body.velocity.x = player2.x - enemy3.x + 50;
      enemy3.play("right", 10);
      enemy3.direction = "right";
    }
    counterenemy = 4;
    if (enemy3_life == true && counterenemy == 4) {
      weapon_e3.fireAtSprite(player2);
      weapon_e3.fire();
      counterenemy = 0;
    }
  }
  if (player2.y < enemy4.y) {
    enemy4_aggro = true;
  }
  if (enemy4_aggro && ec4 == false) {
    if (player2.x - enemy4.x < 0) {
      enemy4.body.velocity.x = player2.x - enemy4.x - 50;
      enemy4.play("left", 10);
      enemy4.direction = "left";
    } else {
      enemy4.body.velocity.x = player2.x - enemy4.x + 50;
      enemy4.play("right", 10);
      enemy4.direction = "right";
    }
    if (enemy4_life == true && counterspecial == 0) {
      weapon_e4.fireAtSprite(player2);
      weapon_e4.fire();
      counterspecial = 1;
    }
    //comandi portali
    if (fireButton1.isDown && parte2 == false) {
      if (cursors.up.isDown) {
        weapon.fireAngle = 270;
        weapon.bulletSpeed = 800;
        weapon.fire();
        player.play("firedx", 10);
      } else {
        if (
          player.direction == "right" ||
          player.direction == "still_right" ||
          player.direction == "jumpdx"
        ) {
          weapon.fireAngle = 0;
          weapon.bulletSpeed = 600;
          weapon.fire();
          player.play("firedx", 10);
        }
        if (
          player.direction == "left" ||
          player.direction == "still_left" ||
          player.direction == "jumpsx"
        ) {
          weapon.fireAngle = 0;
          weapon.bulletSpeed = -600;
          weapon.fire();
          player.play("firesx", 10);
        }
      }
    }
    if (fireButton2.isDown && parte2 == false) {
      if (cursors.up.isDown) {
        weapon2.fireAngle = 270;
        weapon2.bulletSpeed = 800;
        weapon2.fire();
        player.play("firedx", 10);
      } else {
        if (
          player.direction == "right" ||
          player.direction == "still_right" ||
          player.direction == "jumpdx"
        ) {
          weapon2.fireAngle = 0;
          weapon2.bulletSpeed = 600;
          weapon2.fire();
          player.play("firedx", 10);
        }
        if (
          player.direction == "left" ||
          player.direction == "still_left" ||
          player.direction == "jumpsx"
        ) {
          weapon2.fireAngle = 0;
          weapon2.bulletSpeed = -600;
          weapon2.fire();
          player.play("firesx", 10);
        }
      }
    }
    //piattaforme mobili
    if (p1.x > 2400) p1.body.velocity.x = -200;
    if (p1.x < 2200) p1.body.velocity.x = 200;

    if (p2.x > 5050) p2.body.velocity.x = -200;
    if (p2.x < 4850) p2.body.velocity.x = 200;

    if (p3.x > 16223) p3.body.velocity.x = -200;
    if (p3.x < 16023) p3.body.velocity.x = 200;

    if (p2_1.x > 20498) p2_1.body.velocity.x = -200;
    if (p2_1.x < 19701) p2_1.body.velocity.x = 200;

    if (p2_2.x > 20375) p2_2.body.velocity.x = -200;
    if (p2_2.x < 19701) p2_2.body.velocity.x = 200;

    if (p2_3.x > 20375) p2_3.body.velocity.x = -200;
    if (p2_3.x < 19701) p2_3.body.velocity.x = 200;

    if (p2_4.x > 20498) p2_4.body.velocity.x = -200;
    if (p2_4.x < 19701) p2_4.body.velocity.x = 200;
    //torri che si chiudono
    if (t1.y <= 7882) {
      t1.body.velocity.y = 100;
      t3.body.velocity.y = -100;
    }
    if (t2.y <= 7882) {
      t2.body.velocity.y = 100;
      t4.body.velocity.y = -100;
    }
    if (t1.y >= 8014) {
      t1.body.velocity.y = -100;
      t3.body.velocity.y = 100;
    }
    if (t2.y >= 8014) {
      t2.body.velocity.y = -100;
      t4.body.velocity.y = 100;
    }
    if (t5.y <= 7882) {
      t5.body.velocity.y = 100;
      t7.body.velocity.y = -100;
    }
    if (t6.y <= 7882) {
      t6.body.velocity.y = 100;
      t8.body.velocity.y = -100;
    }
    if (t5.y >= 8014) {
      t5.body.velocity.y = -100;
      t7.body.velocity.y = 100;
    }
    if (t6.y >= 8014) {
      t6.body.velocity.y = -100;
      t8.body.velocity.y = 100;
    }
    if (t9.y < 7864) {
      t9.body.velocity.y = 100;
      t11.body.velocity.y = -100;
    }
    if (t10.y < 7864) {
      t10.body.velocity.y = 100;
      t12.body.velocity.y = -100;
    }
    if (t9.y >= 7994) {
      t9.body.velocity.y = -100;
      t11.body.velocity.y = 100;
    }
    if (t10.y >= 7994) {
      t10.body.velocity.y = -100;
      t12.body.velocity.y = 100;
    }
    if (t13.y < 7864) {
      t13.body.velocity.y = 100;
      t14.body.velocity.y = -100;
    }
    if (t13.y >= 7994) {
      t13.body.velocity.y = -100;
      t14.body.velocity.y = 100;
    }
    //morte se le piattaforme ti schiacciano
    if (
      player.body.touching.down &&
      player.body.touching.up &&
      player.x > 5900 &&
      player.x < 6900 &&
      parte2 == false
    ) {
      if (countervite == 3) {
        barravite.play("lose1", 5, false);
        death_s.x = player.x;
        death_s.y = player.y;
        player.visible = false;
        death_s.visible = true;
        death_s_anim.onComplete.add(death_base, this);
        death_s.play("death_s", 5, false);
      }
      if (countervite == 2) {
        barravite.play("lose2", 5, false);
        death_s.x = player.x;
        death_s.y = player.y;
        player.visible = false;
        death_s.visible = true;
        death_s_anim.onComplete.add(death_base, this);
        death_s.play("death_s", 5, false);
      }
      if (countervite == 1) {
        barravite.play("lose3", 5, false);
        death_s.x = player.x;
        death_s.y = player.y;
        player.visible = false;
        death_s.visible = true;
        death_s_anim.onComplete.add(death_base_final, this);
        death_s.play("death_s", 5, false);
      }
    }
    if (
      player.body.touching.down &&
      player.body.touching.up &&
      player.x > 13400 &&
      player.x < 14400 &&
      parte2 == false
    ) {
      if (countervite == 3) {
        barravite.play("lose1", 5, false);
        death_s.x = player.x;
        death_s.y = player.y;
        player.visible = false;
        death_s.visible = true;
        death_s_anim.onComplete.add(death_base, this);
        death_s.play("death_s", 5, false);
      }
      if (countervite == 2) {
        barravite.play("lose2", 5, false);
        death_s.x = player.x;
        death_s.y = player.y;
        player.visible = false;
        death_s.visible = true;
        death_s_anim.onComplete.add(death_base, this);
        death_s.play("death_s", 5, false);
      }
      if (countervite == 1) {
        barravite.play("lose3", 5, false);
        death_s.x = player.x;
        death_s.y = player.y;
        player.visible = false;
        death_s.visible = true;
        death_s_anim.onComplete.add(death_base_final, this);
        death_s.play("death_s", 5, false);
      }
    }
    //respawn se tocchi terra
    if (player.body.onFloor() && player.x < 18500 && parte2 == false) {
      player.x = spawn_x;
      player.y = spawn_y;
      countertorretta = 0;
      counter = 0;
      if (missile1) {
        missile1.kill();
      }
      if (missile2) {
        missile2.kill();
      }
      if (missile3) {
        missile3.kill();
      }
      if (missile4) {
        missile4.kill();
      }
      if (esiste1 == true) {
        portale1.kill();
        esiste1 = false;
      }
      if (esiste2 == true) {
        portale2.kill();
        esiste2 = false;
      }
      jetACTIVE = false;
      jet.visible = true;
    }
    //torrette e proiettile
    if (countertorretta == 0) {
      missile3 = game.add.sprite(11760, 7876, "bullet");
      game.physics.arcade.enable(missile3);
      missile3.animations.add("sparo");
      missile3.animations.play("sparo", 10, true);
      countertorretta++;
    }
    if (countertorretta == 2) {
      missile1 = game.add.sprite(5060, 7740, "bullet");
      game.physics.arcade.enable(missile1);
      missile1.animations.add("sparo");
      missile1.animations.play("sparo", 10, true);
      missile2 = game.add.sprite(10860, 7740, "bullet");
      game.physics.arcade.enable(missile2);
      missile2.animations.add("sparo");
      missile2.animations.play("sparo", 10, true);
      missile4 = game.add.sprite(12460, 7740, "bullet");
      game.physics.arcade.enable(missile4);
      missile4.animations.add("sparo");
      missile4.animations.play("sparo", 10, true);
      countertorretta++;
    }

    if (missile1) {
      dx = player.x - missile1.x;
      dy = player.y - missile1.y;

      if (dx * dx + dy * dy < 1000000) {
        aggro = true;
      }
      if (dx * dx + dy * dy > 2000000) {
        aggro = false;
      }

      if (aggro) {
        vx = 0;
        vy = 0;
        if (player.x - missile1.x > 5) vx = 130;
        if (player.x - missile1.x < -5) vx = -130;
        if (player.y - missile1.y > 5) vy = 130;
        if (player.y - missile1.y < -5) vy = -130;
        missile1.body.velocity.x = vx;
        missile1.body.velocity.y = vy;
      } else {
        missile1.body.velocity.x = missile1.body.velocity.x * 1.6;
        missile1.body.velocity.y = missile1.body.velocity.y * 1.6;
      }
    }
    if (missile2) {
      dx = player.x - missile2.x;
      dy = player.y - missile2.y;

      if (dx * dx + dy * dy < 1000000) {
        aggro = true;
      }
      if (dx * dx + dy * dy > 2000000) {
        aggro = false;
      }

      if (aggro) {
        vx = 0;
        vy = 0;
        if (player.x - missile2.x > 5) vx = 130;
        if (player.x - missile2.x < -5) vx = -130;
        if (player.y - missile2.y > 5) vy = 130;
        if (player.y - missile2.y < -5) vy = -130;
        missile2.body.velocity.x = vx;
        missile2.body.velocity.y = vy;
      } else {
        missile2.body.velocity.x = missile2.body.velocity.x * 1.2;
        missile2.body.velocity.y = missile2.body.velocity.y * 1.2;
      }
    }
    if (missile3) {
      dx = player.x - missile3.x;
      dy = player.y - missile3.y;

      if (dx * dx + dy * dy < 1000000) {
        aggro = true;
      }
      if (dx * dx + dy * dy > 2000000) {
        aggro = false;
      }

      if (aggro) {
        vx = 0;
        vy = 0;
        if (player.x - missile3.x > 5) vx = 130;
        if (player.x - missile3.x < -5) vx = -130;
        if (player.y - missile3.y > 5) vy = 130;
        if (player.y - missile3.y < -5) vy = -130;
        missile3.body.velocity.x = vx;
        missile3.body.velocity.y = vy;
      } else {
        missile3.body.velocity.x = missile3.body.velocity.x * 1.2;
        missile3.body.velocity.y = missile3.body.velocity.y * 1.2;
      }
    }
    if (missile4) {
      dx = player.x - missile4.x;
      dy = player.y - missile4.y;

      if (dx * dx + dy * dy < 1000000) {
        aggro = true;
      }
      if (dx * dx + dy * dy > 2000000) {
        aggro = false;
      }

      if (aggro) {
        vx = 0;
        vy = 0;
        if (player.x - missile4.x > 5) vx = 130;
        if (player.x - missile4.x < -5) vx = -130;
        if (player.y - missile4.y > 5) vy = 130;
        if (player.y - missile4.y < -5) vy = -130;
        missile4.body.velocity.x = vx;
        missile4.body.velocity.y = vy;
      } else {
        missile4.body.velocity.x = missile4.body.velocity.x * 1.2;
        missile4.body.velocity.y = missile4.body.velocity.y * 1.2;
      }
    }

    if (counter == 5) {
      missile3.kill();
    }
    if (counter == 6) {
      missile1.kill();
      missile2.kill();
      missile4.kill();
      countertorretta = 0;
      counter = 0;
    }
    //reset counter vite a fine morti barra vite
    if (countervite == 0 && parte2 == false) {
      countervite = 3;
    }
    if (player2.y < 768 && player2.x < 19800 && control == false) {
      control = true;
      finale2.visible = true;
      storiaf2.visible = true;
    }
    console.log(countervite);
  }
  //portale 1
  function portal1(p, b) {
    if (esiste1 == true) {
      portale1.reset(b.x, b.y - 130);
    } else {
      portale1 = game.add.sprite(b.x, b.y - 130, "portale1");
      portale1.animations.add("floating");
      portale1.play("floating", 5, true);
    }
    esiste1 = true;
    game.physics.arcade.enable(portale1);
    portale1.body.gravity.y = 500;
    b.kill();
  }
  //portale 2
  function portal2(p, b) {
    if (esiste2 == true) {
      portale2.reset(b.x, b.y - 130);
    } else {
      portale2 = game.add.sprite(b.x, b.y - 130, "portale2");
      portale2.animations.add("floating");
      portale2.play("floating", 5, true);
    }

    esiste2 = true;
    game.physics.arcade.enable(portale2);
    portale2.body.gravity.y = 500;
    b.kill();
  }
  //no portal
  function noportal(p, b) {
    b.kill();
  }
  //teletrasporto 1
  function tp1(p, portale) {
    console.log(player.x, portale1.x);
    if (esiste2 == true) {
      if (player.x < portale1.x) {
        player.reset(portale2.x + 70, portale2.y);
      } else {
        player.reset(portale2.x - 70, portale2.y);
      }
    }
  }
  //telestraporto 2
  function tp2(p, portale) {
    console.log(player.x, portale2.x);
    if (esiste1 == true) {
      if (player.x < portale2.x) {
        player.reset(portale1.x + 70, portale1.y);
      } else {
        player.reset(portale1.x - 70, portale1.y);
      }
    }
  }
  //triplo portale
  function teleport_bullet(p2, b1) {
    //console.log(b1.body.velocity.x, b1.body.velocity.y)
    b1.x = portale1.x + 30;
    b1.y = portale1.y - 20;
  }
  function teleport_bullet2(p1, b2) {
    //console.log(b1.body.velocity.x, b1.body.velocity.y)
    b2.x = portale2.x + 30;
    b2.y = portale2.y - 20;
  }
  //counter torretta
  function updateCountertorretta() {
    countertorretta++;
  }
  function updateCounter() {
    counter++;
  }
  function updateCounterenemy() {
    counterenemy++;
  }
  //morte da proiettile della torretta
  function death() {
    if (countervite == 3) {
      barravite.play("lose1", 5, false);
      death_h.x = player.x;
      death_h.y = player.y;
      player.visible = false;
      death_h.visible = true;
      death_h_dx_anim.onComplete.add(death_base, this);
      death_h_sx_anim.onComplete.add(death_base, this);
      if (player.direction == "left" || player.direction == "still_left") {
        death_h.play("death_h_sx", 5, false);
      } else {
        death_h.play("death_h_dx", 5, false);
      }
    }
    if (countervite == 2) {
      barravite.play("lose2", 5, false);
      death_h.x = player.x;
      death_h.y = player.y;
      player.visible = false;
      death_h.visible = true;
      death_h_dx_anim.onComplete.add(death_base, this);
      death_h_sx_anim.onComplete.add(death_base, this);
      if (player.direction == "left" || player.direction == "still_left") {
        death_h.play("death_h_sx", 5, false);
      } else {
        death_h.play("death_h_dx", 5, false);
      }
    }
    if (countervite == 1) {
      barravite.play("lose3", 5, false);
      death_h.x = player.x;
      death_h.y = player.y;
      player.visible = false;
      death_h.visible = true;
      death_h_dx_anim.onComplete.add(death_base_final, this);
      death_h_sx_anim.onComplete.add(death_base_final, this);
      if (player.direction == "left" || player.direction == "still_left") {
        death_h.play("death_h_sx", 5, false);
      } else {
        death_h.play("death_h_dx", 5, false);
      }
    }
  }
  //morte da proiettile secondo livello
  function death2() {
    death_h2.x = player2.x;
    death_h2.y = player2.y;
    player2.visible = false;
    death_h2.visible = true;
    death_h2_dx_anim.onComplete.add(death_base2, this);
    death_h2_sx_anim.onComplete.add(death_base2, this);
    if (player2.direction == "left" || player2.direction == "still_left") {
      death_h2.play("death_h2_sx", 5, false);
    } else {
      death_h2.play("death_h2_dx", 5, false);
    }
  }
  //morte da piattaforme e torri elettriche
  function deathE() {
    if (countervite == 3) {
      barravite.play("lose1", 5, false);
      death_e.x = player.x;
      death_e.y = player.y;
      player.visible = false;
      death_e.visible = true;
      death_e_anim.onComplete.add(death_base, this);
      death_e.play("death_e", 5, false);
    }
    if (countervite == 2) {
      barravite.play("lose2", 5, false);
      death_e.x = player.x;
      death_e.y = player.y;
      player.visible = false;
      death_e.visible = true;
      death_e_anim.onComplete.add(death_base, this);
      death_e.play("death_e", 5, false);
    }
    if (countervite == 1) {
      barravite.play("lose3", 5, false);
      spawn_x = 100;
      spawn_y = 480;
      death_e.x = player.x;
      death_e.y = player.y;
      player.visible = false;
      death_e.visible = true;
      death_e_anim.onComplete.add(death_base_final, this);
      death_e.play("death_e", 5, false);
    }
  }
  //funzione base morte
  function death_base() {
    player.visible = true;
    death_s.visible = false;
    death_h.visible = false;
    death_e.visible = false;
    player.x = spawn_x;
    player.y = spawn_y;
    countertorretta = 0;
    counter = 0;
    countervite--;
    if (missile1) {
      missile1.kill();
    }
    if (missile2) {
      missile2.kill();
    }
    if (missile3) {
      missile3.kill();
    }
    if (missile4) {
      missile4.kill();
    }
    if (esiste1 == true) {
      portale1.kill();
      esiste1 = false;
    }
    if (esiste2 == true) {
      portale2.kill();
      esiste2 = false;
    }
    if (jetACTIVE === true) {
      jetACTIVE = false;
      jet.visible = true;
    }
  }
  //funzione base morte persa l'ultima vita
  function death_base_final() {
    gameover.visible = true;
    continua_go.visible = true;
    game.paused = true;
  }
  function post_gameover() {
    gameover.visible = false;
    continua_go.visible = false;
    player.visible = true;
    game.paused = false;
    death_s.visible = false;
    death_h.visible = false;
    death_e.visible = false;
    player.x = 100;
    player.y = 7904;
    barravite.play("restart", false);
    countertorretta = 0;
    counter = 0;
    //if(countervite==0){countervite=3;}
    if (missile1) {
      missile1.kill();
    }
    if (missile2) {
      missile2.kill();
    }
    if (missile3) {
      missile3.kill();
    }
    if (missile4) {
      missile4.kill();
    }
    if (esiste1 == true) {
      portale1.kill();
      esiste1 = false;
    }
    if (esiste2 == true) {
      portale2.kill();
      esiste2 = false;
    }
    if (jetACTIVE === true) {
      jetACTIVE = false;
      jet.visible = true;
    }
    spawn_x = 100;
    spawn_y = 7904;
  }
  //funzione base morte per il secondo livello
  function death_base2() {
    player2.visible = true;
    death_h2.visible = false;
    player2.x = spawn2_x;
    player2.y = spawn2_y;
    enemy_aggro = false;
    enemy2_aggro = false;
    enemy3_aggro = false;
    enemy4_aggro = false;
    if (enemy.visible == false) {
      enemy.visible = true;
    }
    if (enemy2.visible == false) {
      enemy2.visible = true;
    }
    if (enemy3.visible == false) {
      enemy3.visible = true;
    }
    if (enemy4.visible == false) {
      enemy4.visible = true;
    }
    enemy_life = true;
    enemy2_life = true;
    enemy3_life = true;
    enemy4_life = true;
    ec1 = false;
    ec2 = false;
    ec3 = false;
    ec4 = false;
  }
  //proiettili nemici contro parete
  function we1() {
    weapon_e.bullets.kill();
  }
  function we2() {
    weapon_e2.bullets.kill();
  }
  function we3() {
    weapon_e3.bullets.kill();
  }
  function we4() {
    weapon_e4.bullets.kill();
  }
  //funzione "Continua" di gioco
  function continuagioco() {
    menuaperto = false;
    menu.visible = false;
    continua.visible = false;
    game.paused = false;
  }
  //visiere
  function finevisiera() {
    if (fine_anim_visiera == true) {
      chiudiv.visible = true;
      game.paused = true;
      arianna.visible = true;
      testo1.visible = true;
      barravite.visible = false;
    }
  }
  function finevisiera1() {
    if (fine_anim_visiera1 == true) {
      chiudiv.visible = true;
      game.paused = true;
      arianna.visible = true;
      testo2.visible = true;
      barravite.visible = false;
    }
  }
  function finevisiera2() {
    if (fine_anim_visiera2 == true) {
      chiudiv.visible = true;
      game.paused = true;
      arianna.visible = true;
      testo3.visible = true;
      barravite.visible = false;
    }
  }
  function finevisiera3() {
    if (fine_anim_visiera3 == true) {
      chiudiv.visible = true;
      game.paused = true;
      arianna.visible = true;
      testo4.visible = true;
      barravite.visible = false;
    }
  }
  function finevisiera4() {
    if (fine_anim_visiera4 == true) {
      chiudiv.visible = true;
      game.paused = true;
      arianna.visible = true;
      testo5.visible = true;
      barravite.visible = false;
    }
  }
  function finevisiera5() {
    if (fine_anim_visiera5 == true) {
      chiudiv.visible = true;
      game.paused = true;
      testo6.visible = true;
      barravite.visible = false;
    }
  }
  //funzione chiudi visiera
  function chiudiVisiera() {
    fine_anim_visiera = false;
    visiera.visible = false;
    chiudiv.visible = false;
    arianna.visible = false;
    testo1.visible = false;
    testo2.visible = false;
    testo3.visible = false;
    testo4.visible = false;
    testo5.visible = false;
    testo6.visible = false;
    barravite.visible = true;
    game.paused = false;
  }
  //attivazione volo jetpack
  function fly(p, j) {
    jetACTIVE = true;
    jet.visible = false;
  }
  //funzione uccisione nemico
  function hit() {
    if (hitbutton.isDown && ec1 == false) {
      ec1 = true;
      deathe1anim.onComplete.add(death_e1f, this);
      deathe2anim.onComplete.add(death_e1f, this);
      if (enemy.direction == "left") {
        enemy.play("death_left", 10, false);
      } else {
        enemy.play("death_right", 10);
      }
    }
  }
  function hit2() {
    if (hitbutton.isDown && ec2 == false) {
      ec2 = true;
      deathe3anim.onComplete.add(death_e2f, this);
      deathe4anim.onComplete.add(death_e2f, this);
      if (enemy2.direction == "left") {
        enemy2.play("death_left", 10);
      } else {
        enemy2.play("death_right", 10);
      }
    }
  }
  function hit3() {
    if (hitbutton.isDown && ec3 == false) {
      ec3 = true;
      deathe5anim.onComplete.add(death_e3f, this);
      deathe6anim.onComplete.add(death_e3f, this);
      if (enemy3.direction == "left") {
        enemy3.play("death_left", 10);
      } else {
        enemy3.play("death_right", 10);
      }
    }
  }
  function hit4() {
    if (hitbutton.isDown && ec4 == false) {
      ec4 = true;
      deathe7anim.onComplete.add(death_e4f, this);
      deathe8anim.onComplete.add(death_e4f, this);
      if (enemy4.direction == "left") {
        enemy4.play("death_left", 10);
      } else {
        enemy4.play("death_right", 10);
      }
    }
  }
  function death_e1f() {
    enemy.visible = false;
    enemy_life = false;
  }
  function death_e2f() {
    enemy2.visible = false;
    enemy2_life = false;
  }
  function death_e3f() {
    enemy3.visible = false;
    enemy3_life = false;
  }
  function death_e4f() {
    enemy4.visible = false;
    enemy4_life = false;
  }
  //funzione tubo
  function tubo() {
    if (player2.x > 20084 && player2.x < 20340 && control2 == false) {
      control2 = true;
      player2.play("salita", 5, false);
      salita.onComplete.add(scena_3, this);
      player2.body.gravity.y = 0;
    }
  }
  //cambio livello
  function changelevel() {
    scena2.visible = true;
    storia2.visible = true;
  }
  //scena 2
  function scena_2() {
    testo2_1.visible = true;
    avanti2_1.visible = true;
    //storia2.visible=false;
    storia2.kill();
  }
  function scena2_1() {
    testo2_2.visible = true;
    avanti2_2.visible = true;
    testo2_1.visible = false;
    avanti2_1.visible = false;
  }
  function scena2_2() {
    testo2_3.visible = true;
    chiudi2.visible = true;
    testo2_2.visible = false;
    avanti2_2.visible = false;
  }
  function scena2_finale() {
    testo2_3.visible = false;
    chiudi2.visible = false;
    scena2.visible = false;
    parte2 = true;
    if (parte2 == true) {
      minotauro.kill();
      player.visible = false;
      platform1.visible = true;
      platform2.visible = true;
      platform3.visible = true;
      platform4.visible = true;
      enemy.visible = true;
      enemy2.visible = true;
      enemy3.visible = true;
      enemy4.visible = true;
    }
    player2.visible = true;
    player2.x = player.x - 100;
    player2.y = player.y - 83;
  }
  //scena 3
  function scena_3() {
    scena3.visible = true;
    storia3.visible = true;
  }
  function scena3_1() {
    testo3_1.visible = true;
    storia3.visible = false;
    chiudi3.visible = true;
  }
  function scena3_finale() {
    testo3_1.visible = false;
    chiudi3.visible = false;
    scena3.visible = false;
    player2.x = 20159;
    player2.y = 300;
    player2.body.gravity.y = 500;
    player2.play("rest_right", 5, false);
  }
  //finale brutto e finale bello
  function finale_bad() {
    finale1.visible = true;
    storiaf1.visible = true;
  }
  function final_1() {
    storiaf1.visible = false;
    testof1.visible = true;
    chiudif1.visible = true;
  }
  function final_2() {
    storiaf2.kill();
    testof2.visible = true;
    chiudif2.visible = true;
  }
  //funzione di ritorno al menù principale finale
  function end() {
    window.location.href = "index.html";
  }
  function render() {}
}
