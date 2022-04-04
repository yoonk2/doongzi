// 방명록 ajax

const guestbookInput = document.querySelector(`#guestbook__input`);
guestbookInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        onClickSubmit();
    }
});

const addComment = new XMLHttpRequest();
const onClickSubmit = () => {
    const url = 'comment_ajax';
    let content = document.querySelector(`#guestbook__input`).value
    addComment.open('POST', url, true);
    addComment.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
        );
        addComment.send(JSON.stringify({content:content}));
    }
const commentHandleResponse = () => {
    if (addComment.status < 400){
        const {content, id, color, positionX, positionY} = JSON.parse(addComment.response);
        const commentContainer = document.querySelector(`.comment-container`);
        // const newCommentParent = document.createElement('div');
        console.log('addcomment')
        currentHtml = commentContainer.innerHTML
        const commentText = document.querySelectorAll(`.comment-text`);
        console.log('before', commentContainer.innerHTML);
        commentText[commentText.length-1].style.textShadow = 'none';
        commentContainer.innerHTML = currentHtml + `
            <span class="comment-text comment-text-${id}" style="color: ${color} left: ${positionX}vw; top:${positionY}vh>${content}</span>
        `;
        console.log('after', commentContainer.innerHTML);
        commentText[commentText.length-1].style.textShadow = '0px 0px 8px rgb(37 232 76 / 80%)';
        // const newComment = newCommentParent.firstElementChild;
        // console.log(commentContainer);
        // console.log(newComment);
        // commentContainer.appendChild(newComment);
        // console.log(commentContainer);
        document.querySelector(`#guestbook__input`).value = '';
        // const newComment = newCommentParent.firstChild;
        // commmentContainer.innerHTML=commentContainer.appendChild(newComment);
        };
    }
addComment.onreadystatechange = () => {
    if (addComment.readyState === XMLHttpRequest.DONE) {
        commentHandleResponse();
    }
}

// 가로 스크롤
const scrollContainer = document.querySelector('.scroll-container');
scrollContainer.scrollLeft = window.innerWidth/2;
scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
});

function scrollToRight() {
    let currentScrollLeft = scrollContainer.scrollLeft;
    scrollContainer.scrollTo({
        top: 0,
        left: currentScrollLeft += 500,
        behavior: 'smooth'
    });
}

function scrollToLeft() {
    let currentScrollLeft = scrollContainer.scrollLeft;
    scrollContainer.scrollTo({
        top: 0,
        left: currentScrollLeft -= 500,
        behavior: 'smooth'
    });
}

const detail = document.querySelectorAll(`.post__detail-container`);

const showDetail = (id) => {
    closeDetail();
    const postDetail = document.querySelector(`.post-detail-${id}`);
    postDetail.style.display = 'flex';
    // posLeft = (window.innerWidth - postDetail.offsetWidth) / 2;
    // postDetail.style.left = posLeft + 'px';
    // console.log('posLeft:', posLeft, 'postDetail.offsetWidth:', postDetail.offsetWidth, 'window.innerWidth:', window.innerWidth);
};

const closeDetail = () => {
    for (let i = 0; i < detail.length; i++) {
        detail[i].style.display = 'none';
    }
    console.log('close!');
}


// 방명록폼 위치이동

const guestbookForm = document.querySelector(`.guestbook__form`);


guestbookInput.addEventListener('focus', () => {
    if (window.innerWidth < 768) {
        guestbookForm.style.marginTop = `calc(var(--grid-height)*2)`;
    }
    // console.log('focus');
});

guestbookInput.addEventListener('blur', () => {
    if (window.innerWidth < 768) {
    guestbookForm.style.marginTop = `calc(var(--grid-height)*5)`;
    }
    // console.log('blur');
});

// 방명록 텍스트 위치 설정

// const commentText = document.querySelectorAll(`.comment-text`);
// for (let i = 0; i < commentText.length; i++) {

//     thisComment(commentText[i]);
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);

//     thisDiv.style.top = randomTop +"px";
//     thisDiv.style.left = randomLeft +"px";
// }

// function getRandomNumber(min, max) {    
//     return Math.random() * (max - min) + min;
// }