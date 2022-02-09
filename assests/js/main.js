

document.onmousemove = animateCircles;

function animateCircles (event) {

    let colors = ["#f8f8f8","#be1111","#f7d309","#09f758","#0948f7","#cf09f7","#f70915","#440761","#1087b6","white","red","green","yellow","black"]
    var circle = document.createElement("div");
    circle.setAttribute("class","circle")
    document.getElementById("hovering").appendChild(circle)

    circle.style.left= event.clientX + 30 + 'px';
    circle.style.top=event.clientY +  25 + 'px';

   let index=  getRndInteger(0,13); 
    circle.style.transition="all 1s linear 0s";

    circle.style.left= circle.offsetLeft -10 + 'px';
    circle.style.top= circle.offsetTop -10 + 'px';
   
    circle.style.backgroundColor = "" + colors[index];  
    circle.style.opacity = 0;

   

}

function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min;
  
  }
  
   
  function start(){
     
      animate();
     document.getElementById("loading").style.display = "none";
     document.getElementById("web_content").style.display = "block";
  

  }
  function animate(){
  
    let els = ["Hi,  I'm Belmiro, Full Stack Web Developer*none*n"];
    for(let i =0; i < els.length; i++){
        let arr = els[i].split("*");
        animated = new typing_an(arr[0],arr[1],arr[2]);
        animated.typing();
    }

  
  }

  typing_an = function(word,cl1,cl2) {

//cl1 is the name of class where we have to post
//cl2 is the name of div containing text
//word is the text that we have to insert

  var word = word;
  var index = 0;
  var control;
  
  this.typing= function (){
    let new_w = "";
    var check = 0;
   for(let i=0;i<word.length;i++){
       if(word[i] == " "){
        new_w = new_w + "<i  class=' "+ cl1 + " m-1 p-1'></i>";
       }
       else if(word[i] == "," || word[i] == "."){
           check =0;
        new_w = new_w + "<i  class=' "+ cl1 + " m-0 p-0'>" + word[i] + "</i> <br>";  
       }
       else{
          
          if(check==1){
            new_w = new_w + "<i  class='"+ cl1 + " m-0 p-0'>" + word[i] + "</i>"; 
          }
          else{
            new_w = new_w + "<i  class='"+ cl1 + " b m-0 p-0'>" + word[i] + "</i>"; 
           check =1;
          }
          
           
          
         
       }
    
   }
    document.getElementsByClassName(cl2)[0].innerHTML=new_w;

    el = document.getElementsByClassName(cl1);
    for(let i=0;i<word.length;i++){
     el[i].style.display = "none";
    }       
    control = setInterval(letters,200);

  }
  
  var letters = function(){
      el = document.getElementsByClassName(cl1);
      if(index<word.length){
          el[index].style.display="inline-block";
          index++;

      }
      else{
          clearInterval(control);
          
      }

  }

    
   }


   $(document).ready(function(){

    $(".parent").scroll(
      function(){
        $(".rotate").hide();
        view1("check1");view1("check2");view1("check3");view1("check4");view1("check5");
        view1("check6");view1("check7");view1("check8");view1("check9");view1("check10");view1("check11");view1("check12");
      }
    );
  
  });


  
  $(document).ready(function(){

    $(".close_menu").click(
      function(){
        $(".side_panel").removeClass("p_show");
        $(".side_panel").addClass("p_hide");
      }
    );
  
  });

  
  $(document).ready(function(){

    $(".menu_bar").click(
      function(){
        $(".side_panel").removeClass("p_hide");
        $(".side_panel").addClass("p_show");
      }
    );
  
  });


 

    
function view1(target1){
  
    let target2 = "." + target1;
     var top_of_element = $(target2).offset().top;
     var bottom_of_element = $(target2).offset().top + $(target2).outerHeight();
     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
     var top_of_screen = $(window).scrollTop();
 
     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

         $(target2).show();
       
         $(target2).removeClass("opacity-0");
         $(target2).addClass("animate__fadeInUp opacity-1");
     } 
     else{
        $(target2).removeClass("opacity-1");

        $(target2).addClass("opacity-0");

     }
    
    
   }



      
function view2(target1){
  
    let target2 = "." + target1;
     var top_of_element = $(target2).offset().top;
     var bottom_of_element = $(target2).offset().top + $(target2).outerHeight();
     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
     var top_of_screen = $(window).scrollTop();
 
     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

         $(target2).show();
         $(target2).removeClass("opacity-0");
         $(target2).addClass("animate__fadeInUp opacity-1");

       
     } 
     else{
        $(target2).removeClass("opacity-1");

        $(target2).addClass("opacity-0");



     }
    
    
   }

