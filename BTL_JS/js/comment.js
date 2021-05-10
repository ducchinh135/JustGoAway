
function dateComment() {
    let m = new Date().getMonth();
    let d = new Date().getDate();
    let y = new Date().getFullYear();

    let month;
    switch (m) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }
    console.log(month);
    console.log(d);
    console.log(y);
    return `${month} ${d}${","}${y}`;
    //document.getElementById("dateCmt").innerHTML += (`<div class="inforBlog--userComment--date" id="dateCmt">${month} ${d}${","}${y}</div>`)
}

let commentApi = "http://localhost:3000/comment_eat1";

function start() {
    getCmts(renderCmts);

    handleCreatCmt();
}

start();

function getCmts(callback) {
    fetch(commentApi)
        .then(function (reponsive) {
            return reponsive.json();
        })
        .then(callback)
}

function createCmts(data, callback) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };
    fetch(commentApi, options)
        .then(function (reponsive) {
            return reponsive.json();
        })
        .then(callback)
}

function handleDeleteCmts(id) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(commentApi + '/' + id, options)
        .then(function (reponsive) {
            return reponsive.json();
        })
        .then(function () {
            getCmts(renderCmts);
        })
}

function renderCmts(comments) {
    let cmtBlock = document.querySelector(".inforBlog--userComment");

    let htmls = comments.map(function (comment) {
        return `
        <div class="inforBlog--userComment__body">
            <div class="author--imgage"><img src="../img/avatar.jpg" /></div>
            <div class="inforBlog--userComment__content">
                <span>Anonymous Users</span>
                <div class="inforBlog--userComment--date" id="dateCmt">${comment.date}</div>
                <br />
                <p id="contentCmt">${comment.content}</p>
            </div>
            <div id="delete" onclick="handleDeleteCmts(${comment.id})"><i class="fas fa-plus"></i></div>
        </div>
        `;
    });
    cmtBlock.innerHTML = htmls.join('');
}

function handleCreatCmt() {
    let creatBtn = document.querySelector("#creatCmt");

    creatBtn.onclick = function () {
        let content = document.querySelector("#txtComment").value;
        let date = dateComment();
        let formData = {
            date: date,
            content: content
        };

        createCmts(formData, function () {
            getCmts(renderCmts);
        });
    }
}


