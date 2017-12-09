
document.getElementsByTagName('button')[0].addEventListener('click',
  function(){
    var li = document.createElement('li'); 
    var span = document.createElement('span');
    span.innerText =  document.getElementsByTagName('input')[0].value;
    li.appendChild(span);
    document.getElementsByTagName('ol')[0]
    .insertBefore(li, document.getElementsByTagName('li')[4] );
  }
)