$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(255, 255, 255)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid


    // TODO 2 - Create Platforms
createPlatform(150,100,50,485, "white");
createPlatform(500,200,50,540, "white");
createPlatform(150,50,700,50, "white");
createPlatform(840,100,150,10, "white");
createPlatform(1210,100,150,10, "white");

createPlatform(300,700,200,40, "white");
createPlatform(200,575,200,10, "white");
createPlatform(300,450,200,10, "white");
createPlatform(200,325,200,10, "white");
createPlatform(300,200,350,10, "white");
createPlatform(640,200,10,500, "white");
createPlatform(640,250,90,10, "white");
createPlatform(640,380,90,10, "white");
createPlatform(640,510,90,10, "white");
createPlatform(640,640,90,10, "white");
createPlatform(840,50,10,380, "white");
createPlatform(640,710,210,10, "white");
createPlatform(840,640,520,10, "white");
createPlatform(840,640,10,60, "white");
createPlatform(1050,550,100,10, "white");
createPlatform(1050,300,100,10, "white");
createPlatform(1350,50,10,600, "white");


createBadPlatform(200,100,10,475, "red");
createBadPlatform(490,210,10,490, "red");
createBadPlatform(640,700,210,10, "red");
createBadPlatform(850,110,5,320, "red");
createBadPlatform(1345,110,5,530, "red");

createPlatform(240, 1050, 100, 10, "white", 850, 1250, 3, 0, 425, 0)
createPlatform(240, 1050, 100, 10, "white", 850, 1250, 3, 0, 175, 0)


    // TODO 3 - Create Collectables
createCollectable("database", 530, 150);
createCollectable("database", 670, 600);
createCollectable("database", 900, 60);
createCollectable("database", 1260, 60);


    
    // TODO 4 - Create Cannons
createCannon("bottom", 720,1300, 100);
createCannon("top", 420,1300, 100);
createCannon("bottom", 1042,1700, 100);

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
