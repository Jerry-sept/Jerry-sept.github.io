window.onload = function(){
    var go = document.getElementById('button');
    go.addEventListener('click',move);
}

let num = 0
let preDog = null;
function move (){
    let dog;
    // 生成狗子
     async function createDog(){
        let newDog = document.createElement('div');
        newDog.className = 'doge';
        newDog.id = 'doge'+num;
        let bg = document.getElementById('doge-bg');
        /*// 判断当前屏幕是否存在狗子并加入狗子
           let haveDog = document.querySelectorAll('.doge').length;
        if(!haveDog){
            bg.appendChild(newDog);
        } else {
            bg.insertBefore(newDog,preDog);
        }
        preDog = newDog; */
        bg.appendChild(newDog);
        dog = document.getElementById('doge'+num);
        num++;
        await getDog(dog);
    }
    // 获取当前元素在窗口中的位置并移动
    function getDog(dog){
        let rect = dog.getBoundingClientRect();
        var leftRec = rect.left;
        let imgLeft = 0;
        moveController(dog,imgLeft,leftRec);
    };
    createDog();
}

function moveController(dog,imgLeft,leftRec){
    const moveTimer = setInterval(()=>{
        if(imgLeft + 250 <= -leftRec) {
            dog.remove();
            clearInterval(moveTimer);            
            return;
        }
        transform = 'translateX('+imgLeft+'px)';
        dog.style.transform = transform;

        imgLeft-=5;
        leftRec--;
    },15);
}