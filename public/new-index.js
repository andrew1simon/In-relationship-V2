function s3ar() {
  document.querySelector('#myNavigator').pushPage('s3ar.html');
}
function calender() {
  document.querySelector('#myNavigator').pushPage('calender.html');
}
function home() {
  document.querySelector('#myNavigator').resetToPage('home.html');
}
function tranime() {
  document.querySelector('#myNavigator').pushPage('tranime.html');
}
//day 1

function day15loaa() {
  document.querySelector('#myNavigator').pushPage('day-1-5loaa.html');
}
function day1isaiah() {
  document.querySelector('#myNavigator').pushPage('day-1-isaiah.html');
}
function Sourty3andak() {
  document.querySelector('#myNavigator').pushPage('Sourty-3andak.html');
}
function ghaly3aleik() {
  document.querySelector('#myNavigator').pushPage('ghaly-3aleik.html');
}
function orchaday1() {
  document.querySelector('#myNavigator').pushPage('orcha-day1.html');
}

// day 2 new
function sotolesabeyendah() {
  document.querySelector('#myNavigator').pushPage('soto-lesa-beyendah.html');
}
function allemniezzay() {
  document.querySelector('#myNavigator').pushPage('allemni-ezzay.html');
}
function abonab5oom() {
  document.querySelector('#myNavigator').pushPage('abonab5oom.html');
}
function deojentus() {
  document.querySelector('#myNavigator').pushPage('deojentus.html');
}


//day 3 new

function aalaSalibEl3ar () {
  document.querySelector('#myNavigator').pushPage('3ala-Salib-El-3ar.html');
}
function drasaday3() {
  document.querySelector('#myNavigator').pushPage('drasa-day3.html');
}
function alaaaday3() {
  document.querySelector('#myNavigator').pushPage('5laaa-day3.html');
}

// mahfozat

function mahfozat() {
  document.querySelector('#myNavigator').pushPage('mahfozat.html');
}


document.addEventListener('init', function(event) {
    var page = event.target;
console.log(page.id)
      document.querySelector('.day1').onclick = function() {
        document.querySelector('#myNavigator').pushPage('day1.html');
      
      
    } 
    page.querySelector('.day2').onclick = function() {
      document.querySelector('#myNavigator').pushPage('day2.html');
    
    
  } 
  page.querySelector('.day3').onclick = function() {
    document.querySelector('#myNavigator').pushPage('day3.html');
  
  
} 
page.querySelector('.day4').onclick = function() {
  document.querySelector('#myNavigator').pushPage('mahfozat.html');


}

page.querySelector('.tranime').onclick = function() {
  document.querySelector('#myNavigator').pushPage('tranime.html');
}
page.querySelector('.s3ar').onclick = function() {
  document.querySelector('#myNavigator').pushPage('43ar.html');


} 


document.addEventListener('backbutton', function(){
  if(page.id != 'home') {
    myNavigator.popPage()
  }
  else //nothing is visible, exit the app
  {
    navigator.app.exitApp();
  }
});
  });


// test

function test() {
  document.querySelector('#myNavigator').pushPage('test.html');
}