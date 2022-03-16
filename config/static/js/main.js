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
        // const newCommentParent = document.createElement('div');
        console.log('addcomment')
        currentHtml = commentContainer.innerHTML
        commentContainer.innerHTML = currentHtml + `
            <span class="comment-text comment-text-${id}">${content}</span>
        `;
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