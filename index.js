function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  let rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for(let i = 0; i<rankedLists.length; i++){
    rankedList[i].querySelectorAll('div')
  }
}