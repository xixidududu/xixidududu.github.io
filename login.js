function login() {
  // 获取用户名和密码输入框的值
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // 这里进行用户名和密码的验证，你可以使用服务器端验证
  
  // 简单示例：如果用户名和密码匹配，跳转到 index.html
  if (username === '20001015' && password === '20051118') {
    window.location.href = 'mainpage.html';
  } else {
    // 如果不匹配，显示错误消息或者采取其他操作
    alert('Invalid username or password');
  }
}
