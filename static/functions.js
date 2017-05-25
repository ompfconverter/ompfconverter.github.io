/*function loadImg(){
  img.src=document.getElementById("input").value;
}
function fromFile(){
  img.src=URL.createObjectURL(document.getElementById("inputFile").files[0]);
}*/

//------------------------

var displayImageFromUrl = function () {
    var value = document.getElementById('urlContent').value;
    var text=document.getElementById('selftext').value;
    var img=document.getElementById("img_buffer");
    var canv=document.getElementById("canv"),ctx=canv.getContext("2d");
    img.src=value;
  
    img.onload=function(){
      //load the image into the canvas
      canv.width=img.width;
      canv.height=img.height
      ctx.drawImage(img,0,0);

      //draw text
      ctx.font="100px Times";
      ctx.fillStyle="white";
      ctx.fillText(text,(img.width/5)*1,(img.height/5)*2);
    };
    /*div = document.getElementById('pre'),
    html = "<img src="+value+" alt='Image Preview' id='previewImage'>";
    var oldImage = document.getElementById('previewImage');
    oldImage.parentNode.removeChild(oldImage);
    div.innerHTML = html;*/
}

function displayImageFromFile(){
  var img=document.getElementById("output")
  img.src=URL.createObjectURL(document.getElementById("inputFile").files[0]);
}

var inputWithUrl = function () {
    var html = [
        '<form method="POST" class="submitContent">',
        '<input type="text" placeholder="url" id="urlContent" class="urlInput">',
        '<input type="text" placeholder="text overlay" id="selftext" class="urlInput">',
        '<button type="button" onclick="displayImageFromUrl()" class="urlInput">Preview Image</button>',
        '</form>',
        "<button type='button' onclick='chooseInputType()'>Back</button>",
        "<div id='pre' class='previewImage'>",
        //ADDED CANVAS
        "<canvas id='canv'></canvas>",
        "</div>"
        ].join('');
    var div = document.getElementById('main');
    div.innerHTML = '';
    div.innerHTML = html;
}

var inputWithFile = function () {
    var html = [
    "<input type='file' id='inputFile'>",
    "<button id='submitFromFile' onclick='displayImageFromFile()'>submit</button>",
    "<button type='button' onclick='chooseInputType()'>Back</button>",
    "<img id='output'></img>"
    ].join('');
    var div = document.getElementById('main');
    div.innerHTML = '';
    div.innerHTML = html;
}

var chooseInputType = function () {
    var html = [
    '<p class="inputPreface">Select image from file or from url</p>',
    '<ul class="selectInput">',
    '<li><button type="button" onclick="inputWithFile()">From file</button></li>',
    '<li><button type="button" onclick="inputWithUrl()">From url</button></li>',
    '</ul>',
    "<pre>Welcome to OMPF Converter! This site is meant for Marines who need to submit documents their personnel record (OMPF). This site provides a simple conversion to an acceptable digital format for inclusion in an OMPF. \
\
Per the Marine Corps, this is the requirement:\
\
\"HOW TO UPDATE YOUR OMPF VIA EMAIL\
\
To expedite the process of updating your OMPF, every document submitted should be formatted as a single-sided black and white multi-page document and should not exceed 200 DPI or 800 Kilobytes (KB)).  For better image quality we recommend that you make a black and white copy first before scanning.  We are unable to process documents submitted in Microsoft Word format (.doc) or TIF, use only JPEG, GIF, XPS or PDF formats.  Each page in the document must contain the grade, full name and EDIPI (DOD ID).\"</pre>"].join('');
    var div = document.getElementById('main');
    div.innerHTML = '';
    div.innerHTML = html;
}
