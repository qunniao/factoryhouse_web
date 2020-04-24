if (localStorage.getItem('login') == null) {
    var obj = document.getElementById('lo');
    obj.href = "./login.html";
    obj.innerText = "登录";
    var obja = document.getElementById('zh');
    obja.href = "./zhuce.html";
    obja.innerText = "注册";
    var ob = document.getElementById('asd');
    ob.href = './login.html';
} else {
    var obj = document.getElementById('lo');
    obj.href = "./mainIndex.html";
    obj.innerText = localStorage.getItem('login');
    var img = document.createElement('img'); //创建一个标签
    img.setAttribute('src', './img/yonghu.png'); //给标签定义src链接
    document.getElementById('lo').appendChild(img); //放到指定的id里
    obj.style.color = '#f39800';
    var obja = document.getElementById('zh');
    obja.href = "javascript:;";
    obja.innerText = "退出";
    var ob = document.getElementById('asd');
    ob.href = './mainIndex.html';

    function qingchu() {
        localStorage.clear();
        window.location = "./home.html"
    }
}