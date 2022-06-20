const searchEl = document.querySelector('.searchbox');
const x = document.querySelectorAll('.card p:nth-child(2)');

function search(e){
  x.forEach((item,index) => {
    if(!item.innerHTML.toLowerCase().includes(e.target.value)){
      item.parentElement.style.display = 'none';
    }else {
      item.parentElement.style.display = 'block';
    }
  })
}

searchEl.addEventListener("keyup", search);  