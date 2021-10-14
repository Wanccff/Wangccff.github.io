/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
document.querySelector('img').onclick = function() {
    alert('别戳我，我怕疼。');
}*/
// 首先把img元素存放在，myImage变量中，然后将这个变量的onclick事件与一个匿名函数绑定
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ico.png') {
         myImage.setAttribute('src','images/img2.JPG');
    } else {
       myImage.setAttribute('src','images/ico.png');
    }
}


// 添加欢迎界面
// 获取新按钮和标题
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 创建欢迎函数,并创建数据项目存储name
// 当输入名称为空null，则重新输入名称，避免出现'你好null'
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        let myName =prompt('请输入你的名字。');
        localStorage.setItem('name',myName);
        myHeading.textContent = '酷毙了！hello!' + myName;
    }
    
}

// 初始化，判断是否存储有name。如果有运行欢迎，如果没有创建名字
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '酷毙了！hello!' + storedName;
}

// 为按钮button设置onclick事件处理器，按下按钮即可以随时设置新的名称
myButton.onclick = function(){
    setUserName();
}