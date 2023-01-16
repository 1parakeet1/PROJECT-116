nosex =0;
nosey = 0;
function preload(){
mustache  = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(525, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


    function modelLoaded(){
        console.log('poseNet is initialized');
    }

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            console.log('nose x ='+results[0].pose.nose.x);
            console.log('nose y ='+results[0].pose.nose.y);
            nosex = results[0].pose.nose.x;
            nosey = results[0].pose.nose.y;
        }
    }

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, nosex-15, nosey-8, 50, 50);
}


function take_snapshot(){
    save('image.png');
}
