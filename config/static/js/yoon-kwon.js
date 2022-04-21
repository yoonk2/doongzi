const designerTitle = document.querySelector(`.designer-title`);
const developerTitle = document.querySelector(`.developer-title`);
const designerDetail = document.querySelector(`.designer-detail`);
const developerDetail = document.querySelector(`.developer-detail`);
const studentTitle = document.querySelector(`.student-title`);
const studentDetail = document.querySelector(`.student-detail`);

designerTitle.addEventListener('click', () => {
    if (designerDetail.style.display === 'none') {
        designerDetail.style.display = 'block';
    }
    else {
        window.open('https://www.instagram.com/rnjs_dbs/');
    }
});

developerTitle.addEventListener('click', () => {
    if (developerDetail.style.display === 'none') {
        developerDetail.style.display = 'block';
    }
    else {
        window.open('https://github.com/yoonk2')
    }
});

studentTitle.addEventListener('click', () => {
    if (studentDetail.style.display === 'none') {
        studentDetail.style.display = 'block';
    }
    else {
        studentDetail.style.display = 'none';
    }
});