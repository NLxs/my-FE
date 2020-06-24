const btn = document.getElementById('modeBtn');

btn.addEventListener('click', (e)=> {
  const body = document.body;
  if(body.className !== 'night') {
    body.className = 'night'; // 通过修改类名来改变样式
  } else {
    body.className = '';
  }
})
