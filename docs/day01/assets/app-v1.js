const btn = document.getElementById("modeBtn");

btn.addEventListener('click', (e)=> {
  const body = document.body;
  if(e.target.innerHTML === '🌞') { // 直接修改样式
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
    e.target.innerHTML = '🌜';
  } else {
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
    e.target.innerHTML = '🌞'
  }
});
