let nameList = ["박태양","강은진","김가현","김영현","김찬영","김창현",
    "박민지","박명재","박수진","박지호","이수안","안진우","이유진","이준영",
    "임상언","임채영","전제","정나영","정재성","최승민","하늘새미","한다원","조한슬"];
let num = 23;

//내가 해봤던 추가...
document.querySelector("#btnAdd").addEventListener("click", e => {
    let add = document.querySelector("#username");
    console.log(add.value);
    nameList[num] += 1;
});

const userList = document.querySelector("#userList");
const selectedList = document.querySelector("#selectedList");

nameList.forEach( name => {
    let li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = name;

    userList.appendChild(li);
});

function makeLi(name){
    let li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = name;

    userList.appendChild(li);
    return li;
}


let list = [...document.querySelectorAll(".item")];

let before = list[0];
let idx = 0;
let timer, timeoutTimer;

document.querySelector("#btnStop").addEventListener("click", e => {
    clearInterval(timer);
    stopTimeOut(50);

});

document.querySelector("#btnStart").addEventListener("click", e => {
    clearInterval(timer);
    clearTimeout(timeoutTimer);
    timer = setInterval(()=> {
        move();
    }, 50);
});

document.querySelector("#btnAdd").addEventListener("click", e => {
    let usernameInput = document.querySelector("#username");
    list.push(makeLi(usernameInput.value));
});

function stopTimeOut(time){
    if(time >= 1000) {
        list[idx].classList.remove("on");
        list[idx].classList.add("fix");
        selectedList.appendChild(list[idx]);
        list.splice(idx, 1);
        return;
    }
    timeoutTimer = setTimeout( ()=> {
        move();
        stopTimeOut(time + 80);
    }, time);
}

function move(){
    idx++;
    if(idx >= list.length){
        idx = 0;
    }
    before.classList.remove("on");
    list[idx].classList.add("on");
    before = list[idx];
}