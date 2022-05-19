const designerTitle = document.querySelector(`.designer-title`);
const designerTitleAnchor = designerTitle.firstChild;
const developerTitle = document.querySelector(`.developer-title`);
const developerTitleAnchor = developerTitle.firstChild;
const designerDetail = document.querySelector(`.designer-detail`);
const developerDetail = document.querySelector(`.developer-detail`);
const studentTitle = document.querySelector(`.student-title`);
const studentTitleAnchor = studentTitle.firstChild;
const studentDetail = document.querySelector(`.student-detail`);
const furtherText = document.querySelector(`.further`);

designerTitle.addEventListener('click', () => {
    if (designerDetail.style.display === 'none') {
        designerDetail.style.display = 'block';
        designerTitle.innerHTML = `<a href="https://www.instagram.com/rnjs_dbs/">디자이너</a>다.`;
        developerTitleAnchor.classList.add('fade');
        designerTitleAnchor.classList.remove('fade');
    }
});

developerTitle.addEventListener('click', () => {
    if (developerDetail.style.display === 'none') {
        developerDetail.style.display = 'block';
        developerTitle.innerHTML = `<a href="https://github.com/yoonk2">개발자</a>다.`;
        developerTitleAnchor.classList.remove('fade');
        studentTitleAnchor.classList.add('fade');
    }
});

studentTitle.addEventListener('click', () => {
    if (studentDetail.style.display === 'none') {
        studentDetail.style.display = 'block';
        studentTitleAnchor.classList.remove('fade');
        document.querySelector('.doongsite').classList.add('fade');
        furtherText.style.display = 'block';
    }
});

furtherText.addEventListener('click', () => {
    document.querySelector('.doongsite').classList.remove('fade');
    furtherText.classList.remove('fade');
    furtherText.style.cursor = 'default';
    furtherText.innerHTML = `참고로 이 웹사이트에 사용된 <span class="fade">깜박이는</span> 애니메이션은 <a href="minguhong.com">minguhong.com</a>에서 제작자의 허락을 받고 훔쳤다.`;
});