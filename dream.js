function start(){
document.getElementById('numberOne').style.display="block";
document.getElementById('start').style.display="none";
}

function choose1(){
  document.getElementById('numberTwo').style.display="block";
  document.getElementById('numberOne').style.display="none";
}
function else1(){
  alert("你被这只菠萝暴揍了一顿 game over！");
  document.getElementById('numberOne').style.display="none";
  document.getElementById('resert1').style.display="block";
}
function resetButton1(){
  document.getElementById('numberOne').style.display="block";
  document.getElementById('resert1').style.display="none";
}

function choose2(){
  document.getElementById('numberThree').style.display="block";
  document.getElementById('numberTwo').style.display="none";
}
function else2(){
  alert("啥工具都没有 你因为过度消耗体力而亡 game over！");
  document.getElementById('numberTwo').style.display="none";
  document.getElementById('resert2').style.display="block";
}
function think2(){
  alert("你没注意被墙壁上的一根铁钉扎伤  game over！");
  document.getElementById('numberTwo').style.display="none";
  document.getElementById('resert2').style.display="block";
}
function resetButton2(){
  document.getElementById('numberTwo').style.display="block";
  document.getElementById('resert2').style.display="none";
}

function else3(){
  document.getElementById('numberFour').style.display="block";
  document.getElementById('numberThree').style.display="none";
}
function choose3(){
  alert("你太过自私，路边的椰子看不下去，掉下来把你砸死了 game over！");
  document.getElementById('numberThree').style.display="none";
  document.getElementById('resert3').style.display="block";
}

function resetButton3(){
  document.getElementById('numberThree').style.display="block";
  document.getElementById('resert3').style.display="none";
}

function else4(){
  alert("咬下桃子的瞬间，你被桃子打没了门牙 你惊醒");
  document.getElementById('numberFour').style.display="none";
  document.getElementById('ending').style.display="block";
  document.getElementById('resert4').style.display="block";
}
function choose4(){
  alert("你太过无情，被桃子君的同伴椰子砸死 你惊醒");
  document.getElementById('numberFour').style.display="none";
  document.getElementById('ending').style.display="block";
  document.getElementById('resert4').style.display="block";
}
function think4(){
  alert("你力气太小没劈开，反而摔了一跤 你惊醒");
  document.getElementById('numberFour').style.display="none";
  document.getElementById('ending').style.display="block";
  document.getElementById('resert4').style.display="block";
}
function resetButton4(){
  document.getElementById('numberOne').style.display="block";
  document.getElementById('ending').style.display="none";
  document.getElementById('resert4').style.display="none";
}
