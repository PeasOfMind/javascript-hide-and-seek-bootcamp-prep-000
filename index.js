function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  let rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0; i<rankedList.length; i++){
    rankedList[i].innerHTML += parseInt(n);
  }
}