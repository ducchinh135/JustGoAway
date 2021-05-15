let postApi = "http://localhost:3000/post_relax";

function start() {
    getPosts(renderPosts);
}
start();

function getPosts(callback) {
    fetch(postApi)
        .then(function(reponsive) {
            return reponsive.json();
        })
        .then(callback)
}

function renderPosts(posts) {
    let postBlock = document.querySelector(".posts");
    let htmls = posts.map(function(post) {
        return `
        <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
            <div class="post-image">
                <div>
                    <img src="${post.image}" class="img" alt="blog1">
                </div>
                <div class="post-info flex-row">
                    <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                    <span>2 Comments</span>
                </div>
            </div>
            <div class="post-title">
                <a href="../html/relax_${post.id}.html">${post.title}</a>
                <p>${post.mainHead}
                </p>
                <button class="btn post-btn"><a href="../html/relax_${post.id}.html">Read More &nbsp; <i class="fas fa-arrow-right"></i></a></button>
            </div>
        </div>
        <hr>`;
    });
    postBlock.innerHTML = htmls.join('');
}


// let a = document.querySelector('.blog--container');
// console.log(a)