function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i<rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + parseInt(n);
  }
}

function deepestChild(){
  let inner = document.querySelector('#grand-node')
}