
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
    return `${month} ${d}${","}${y}`;
    //document.getElementById("dateCmt").innerHTML += (`<div class="inforBlog--userComment--date" id="dateCmt">${month} ${d}${","}${y}</div>`)
}

let commentApi = "http://localhost:3000/posts/1";

function start() {
    getCmts(renderCmts);

    getCmts(handleCreatCmt);
}

start();

function getCmts(callback) {
    fetch(commentApi)
        .then(function (reponsive) {
            return reponsive.json();
        })
        .then(callback)
}


function renderCmts(post) {
    let cmtBlock = document.querySelector(".inforBlog--userComment");

    let listCmts = post.comment;
    console.log(listCmts)

    let htmls = listCmts.map(function (comment) {

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

function handleCreatCmt(post) {
    let creatBtn = document.querySelector("#creatCmt");

    creatBtn.onclick = function () {
        let content = document.querySelector("#txtComment").value;
        let date = dateComment();
        let listID = [];
        for (i in post.comment) {
            listID.push(Number(i))
        }
        console.log(listID.length);
        let formData = {
            id: listID.length + 1,
            date: date,
            content: content
        };

        post.comment.push(formData);


        fetch(commentApi, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...post }),
        })
            .then(response => response.json())
            .then(data => {
                getCmts(renderCmts);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}


