const designerTitle = document.querySelector(`.designer-title`);
const developerTitle = document.querySelector(`.developer-title`);
const designerDetail = document.querySelector(`.designer-detail`);
const developerDetail = document.querySelector(`.developer-detail`);
const studentTitle = document.querySelector(`.student-title`);
const studentDetail = document.querySelector(`.student-detail`);

designerTitle.addEventListener('click', () => {
    if (designerDetail.style.display === 'none') {
        designerDetail.style.display = 'block';
        designerTitle.innerHTML = `<a href="https://www.instagram.com/rnjs_dbs/">디자이너</a>다.`;
    }
});

developerTitle.addEventListener('click', () => {
    if (developerDetail.style.display === 'none') {
        developerDetail.style.display = 'block';
        developerTitle.innerHTML = `<a href="https://github.com/yoonk2">개발자</a>다.`;
    }
});

studentTitle.addEventListener('click', () => {
    if (studentDetail.style.display === 'none') {
        studentDetail.style.display = 'block';
    }
});