if (window.innerWidth < 768) { 
    document.querySelector('body').style.height = Window.innerHeight + 'px';
    document.querySelector('.comment-container').style.height = Window.innerHeight + 'px';
    document.querySelector('.comment-container').style.overflow = 'hidden';
    // console.log('window.innerHeight:', window.innerHeight);
}

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
        const {content, id} = JSON.parse(addComment.response);
        const commentContainer = document.querySelector(`.comment-container`);
        currentHtml = commentContainer.innerHTML
        commentContainer.innerHTML = currentHtml + `
            <span class="comment-text comment-text-${id}">${content}</span>
        `;
        document.querySelector(`#guestbook__input`).value = '';
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
    // console.log('close!');
}


// 방명록폼 위치이동

const guestbookForm = document.querySelector(`.guestbook__form`);


guestbookInput.addEventListener('focus', () => {
    guestbookInput.placeholder = "둥지에게 응원과 칭찬을 날려주세요!!";
    if (window.innerWidth < 768) {
        // guestbookForm.style.marginTop = `calc(var(--grid-height)*2)`;
        guestbookInput.placeholder = "칭찬을 날려주세요!!";
    }
    // console.log('focus');
});

guestbookInput.addEventListener('blur', () => {
    // if (window.innerWidth < 768) {
    // guestbookForm.style.marginTop = `calc(var(--grid-height)*5)`;
    guestbookInput.placeholder = "Click Me 🐥";
    // }
    // console.log('blur');
});

// 카드 위치 설정
// margin-top: calc(var(--grid-height) * 3);

posts.forEach((post) => {
    const postContainer = document.querySelector(`.post-${post.id}`);
    if (post.position_row) {
        postContainer.style.marginTop = (16 * (post.position_row-1)) + 'vh'
        postContainer.style.top = (post.position_row-1) + 'px'
    }
    if (post.position_X) {
        postContainer.style.left = post.position_X + 'px'
    }
})