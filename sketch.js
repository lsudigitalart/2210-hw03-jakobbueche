function setup() {

    createCanvas(600,600);
    background(0,50,100);


    ///////////
    // GRIND //
    ///////////


    //var circleSize = 10;

    //for(var i = circleSize/2; i < width; i = i + circleSize*1.5){
    //    for(var n = circleSize/2; n < width; n = n + circleSize*1.5){
    //       ellipse(i,n,circleSize);
    //    }
    //}


    /////////////////
    // CONNECTIONS //
    /////////////////


    //scale(0.008)
    //translate(width*1, height*3)

    //for(var p = 0; p < 1000; p++){
    //    translate(width/4,p*2)
    //    rotate(PI/0)
    //    beginShape()
    //    vertex(width/2, height/2)
    //    vertex(width,height)
    //    vertex(0, height)
    //    endShape()

    //    beginShape();
    //    vertex(0,0)
    //    vertex(width,height)
    //    endShape()

    //    strokeWeight(1)

    //    fill(p*15,p+5,p+55)

    //}


    //////////////
    // GRADIENT //
    //////////////


    //for( var x = 0; x < width+1; x++) {
    //    line(x,0,x,height);
     //   stroke(x);


    //}

///////////////////////////////////////////////////////////////////////////////

    scale(0.008)
    translate(35000,35000)

    for(var p = 0; p < 1000; p++){
        translate(width/4,p*2)
        rotate(PI/85)
        beginShape()
        vertex(width, height/2)
        vertex(width,height)
        vertex(10000, height)
        endShape()

        //beginShape();
        //vertex(0,0)
        //vertex(width,height)
        //endShape()

        strokeWeight(1)

        fill(p*0.4,p+15,p+100)

    }





}

function draw() {







}