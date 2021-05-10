let postApi = "http://localhost:3000/posts/1";

function start() {
    getPosts(renderPosts);
}
start();

function getPosts(callback) {
    fetch(postApi)
        .then(function (reponsive) {
            return reponsive.json();
        })
        .then(callback)
}

function renderPosts(posts) {
    let contentBlog = document.querySelector(".inforBlog--container");

    let htmls = `
    <div class="inforBlog--container__author">
        <div class="author--imgage"><img src="../img/avatar.jpg" /></div>
        <span class="date">Nov 19,2020</span>
    </div>
<div class="inforBlog--container__title">
    <span>
        <h1>${posts.title}</h1>
    </span>
</div>
<div class="inforBlog--container__main">
    <div class="main--head">
        <span>
            <strong>${posts.mainhead}</strong>
        </span>
    </div>
    <div class="main--imgage">
        <img src="${posts.image}" />
    </div>
    <div class="main--welcome">
        <span>${posts.mainwelcome}</span>
    </div>
    <div class="main--focus">
        <span>${posts.mainfocus}</span>
    </div>
    <div class="main--cate">
        <span>${posts.maincate}</span>
    </div>
    <div class="main--content">
        <span>${posts.maincontent}</span>
    </div>
    <div class="main--foot">
        <span>${posts.mainfoot}</span>
    </div>
</div>

<div class="line--blog__1"></div>
<div class="inforBlog--container__share">
    <ul>
        <li><i class="fab fa-facebook-f"></i></li>
        <li><i class="fab fa-twitter"></i></li>
        <li><i class="fab fa-instagram"></i></li>
        <li><i class="fas fa-link"></i></li>
    </ul>
    <div>
        <span>Eat</span>
    </div>
</div>
<div class="line--blog__2"></div>
<div class="inforBlog--container__infor">
    <div class="blog--view">
        <p>0</p>
        <p>views</p>
    </div>
    <div class="blog--love"><i class="far fa-heart"></i></div>
</div>
    `;

    contentBlog.innerHTML = htmls;
}

