'use strict';

const textBox = document.querySelector('.text-box__text');
const authorName = document.querySelector('.text-box__author-name');
const authorJob = document.querySelector('.author-job');
const img = document.querySelector('.author-img');

const imbBox = document.querySelector('.main__img-box');

const sliderPrevBtn = document.querySelector('.previous');
const sliderNextBtn = document.querySelector('.next');

let currentIndex = 0;

const authorsInfo = [
    {
        authorText: '“ I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future. ”',
        authorName: 'Tanya Sinclair',
        authorJob: 'UX Engineer',
        authorImg: './images/image-tanya.jpg'
    },
    {
        authorText: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        authorName: 'John Tarkpor',
        authorJob: 'UX Junior Front-end Developer',
        authorImg: './images/image-john.jpg'
    },
    {
        authorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, et libero, velit culpa accusantium placeat nobis, eveniet aut obcaecati eos pariatur qui. Assumenda, labore! Tempore deserunt enim quasi minus culpa?',
        authorName: 'John Lorem',
        authorJob: 'lorem Developer',
        authorImg: 'https://picsum.photos/540'
    }
];

const timer = 500;

const updateAuthorContent = () => {
    const currentAuthor = authorsInfo[currentIndex];
    textBox.style.opacity = 0;
    authorName.style.opacity = 0;
    authorJob.style.opacity = 0;
    img.style.opacity = 0;
    imbBox.style.boxShadow = 'none';

    const newImg = new Image();
    newImg.src = currentAuthor.authorImg;

    setTimeout(() => {
        textBox.textContent = currentAuthor.authorText;
        authorName.textContent = currentAuthor.authorName;
        authorJob.textContent = currentAuthor.authorJob;
        img.src = currentAuthor.authorImg;
        textBox.style.opacity = 1;
        authorName.style.opacity = 1;
        authorJob.style.opacity = 1;
        img.style.opacity = 1;
        imbBox.style.boxShadow = '0px 40px 50px -30px rgba(36, 36, 113, 0.495001)';
    }, timer);
};

sliderNextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % authorsInfo.length;
    updateAuthorContent();
});

sliderPrevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + authorsInfo.length) % authorsInfo.length;
    updateAuthorContent();
});