const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count');
const imotbtn = document.querySelector('#imot_btn');
const imot = document.querySelector('#imot');
const closeimot = document.querySelector('#close_imot');
const fstline = document.querySelector('#fst_line');

const imotangry = document.querySelector('#imot_angry');
const imotargh = document.querySelector('#imot_argh');
const imotboo = document.querySelector('#imot_boo');
const imotcrying = document.querySelector('#imot_crying');
const imothmm = document.querySelector('#imot_hmm');
const imotlaugh = document.querySelector('#imot_laugh');
const imotlovely = document.querySelector('#imot_lovely');
const imotnoo = document.querySelector('#imot_noo');
const imotoh = document.querySelector('#imot_oh');
const imotomg = document.querySelector('#imot_omg');
const imotsleeping = document.querySelector('#imot_sleeping');
const imotsmile = document.querySelector('#imot_smile');
const imotumm = document.querySelector('#imot_umm');



imotbtn.addEventListener('click',()=>{
    imot.style.display = 'flex';
    closeimot.addEventListener('click', e => {
        imot.style.display = "none"
    });
})



imotargh.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😡`;
    inputBar.focus();
})

imotangry.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😫`;
    inputBar.focus();
})

imotboo.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😛`;
    inputBar.focus();
})

imotcrying.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😭`;
    inputBar.focus();
})

imothmm.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`🤔`;
    inputBar.focus();
})

imotlaugh.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😁`;
    inputBar.focus();
})

imotlovely.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😍`;
    inputBar.focus();
})

imotnoo.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😨`;
    inputBar.focus();
})

imotoh.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😯`;
    inputBar.focus();
})

imotomg.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😲`;
    inputBar.focus();
})

imotsleeping.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😴`;
    inputBar.focus();
})

imotsmile.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😀`;
    inputBar.focus();
})

imotumm.addEventListener('click',()=>{
    inputBar.value = inputBar.value+`😐`;
    inputBar.focus();
})



//타임스템프 만들기
function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec;
    return time;

}

//유저이름 발생기
//유저이름은 8글자로 제한.
function generateUserName(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeUsername = '';
    for(let i=0; i<4;i++){
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];
    }
    for(let j=0;j<4;j++){
        makeUsername += "*";
    }
    return makeUsername;
}

function deleteComments(event){
    const btn = event.target;
    const list = btn.parentNode.parentNode;//commentList
    rootDiv.removeChild(list);
    //메인댓글 카운트 줄이기.
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0;
    }else{
        mainCommentCount.innerHTML--;
    }
}

//댓글보여주기
function showComment(comment){
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const voteDiv = document.createElement('div');
    const countSpan = document.createElement('span')
    const voteUp = document.createElement('button');
    const voteDown = document.createElement('button');
    const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.

    commentList.className = "eachComment";
    userName.className="name";
    inputValue.className="inputValue";
    showTime.className="time";
    voteDiv.className="voteDiv";
    //유저네임가져오기
    userName.innerHTML = generateUserName();
    if(btn.onclick){
        userName.innerHTML = document.getElementById('comm_top').dataset.type;
        //삭제버튼 만들기
        const delBtn = document.createElement('button');
        delBtn.className ="deleteComment";
        delBtn.innerHTML="삭제";
        userName.appendChild(delBtn);
        delBtn.addEventListener("click",deleteComments);
    }
    //입력값 넘기기
    inputValue.innerHTML = comment;
    //타임스템프찍기
    showTime.innerHTML = generateTime();
    countSpan.innerHTML=0;
    //투표창 만들기, css먼저 입혀야함.
    voteUp.id = "voteUp";
    voteUp.innerHTML = `<img src='../img/thumbup.png'>`;
    voteUp.className = voteUp;
    voteDown.id = "voteDown";
    voteDown.innerHTML = `<img src='../img/votedown.png'>`;
    voteDown.className = voteDown;
    voteDiv.appendChild(voteUp);
    voteDiv.appendChild(voteDown);

    //댓글뿌려주기
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(voteDiv);
    rootDiv.prepend(commentList);

    voteUp.onclick=function (){
        let count = 0;
        ++count;
        voteUp.innerHTML = "<img src=\"../img/heart.png\"> " + count;
    };

    voteDown.onclick=function (){
        let count = 0;
        ++count;
        voteDown.innerHTML = '💔 ' + count;
    };
    //console.dir(rootDiv);
}

//버튼만들기+입력값 전달
function pressBtn(){
    const currentVal = inputBar.value;
    if (!currentVal.length) {
        alert("댓글을 입력해주세요!!");
    } else {
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputBar.value = '';
    }
}

function initialCmt(){
    let bot_comment = [
        '사장님이 맛있고 음식이 친절해요!',
        '😍',
        '리뷰쓰면 군만두 서비스로 준데서 썼어요']
    for(let i=0;i<3;++i) {
        const currentVal = bot_comment[i];
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputBar.value = '';
    }
}

initialCmt();

btn.onclick = pressBtn;