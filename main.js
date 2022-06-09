mustacheX=0;
mustacheY=0;
function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  }
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

}
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    lipX = results[0].pose.lip.x-15;
    lipY = results[0].pose.lip.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}