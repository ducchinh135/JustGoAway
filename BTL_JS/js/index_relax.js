let postApi = "http://localhost:3000/post_relax";

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
    let postBlock = document.querySelector(".blog--container");
    let htmls = posts.map(function (post) {
        return `
        <div class="blog--container__main">
                <div class="container--image">
                    <a href="./relax_${post.id}.html"><img src="${post.image}" /></a>
                </div>
                <div class="container--author">
                    <div class="author--imgage"><img src="../img/avatar.jpg" /></div>
                    <span class="date">Nov 19,2020</span>
                </div>
                <div class="container--infor">
                    <a href="./relax_${post.id}.html">
                        <div class="container--infor__head">
                            ${post.title}
                        </div>
                        <div class="container--infor__body">
                            ${post.mainhead}
                        </div>
                    </a>
                    <div class="line"></div>
                    <div class="container--infor__foot">
                        <div class="foot--left">
                            <div><i class="far fa-eye"></i>
                                <p>0</p>
                            </div>
                            <a href="./relax_${post.id}.html">
                                <div class="social--comment"><i class="far fa-comment-alt"></i>
                                    <p>0</p>
                                </div>
                            </a>
                        </div>
                        <div class="social--love"><i class="far fa-heart"></i></div>
                    </div>
                </div>
            </div>
        `;
    });
    postBlock.innerHTML = htmls.join('');
}

// let a = document.querySelector('.blog--container');
// console.log(a)
