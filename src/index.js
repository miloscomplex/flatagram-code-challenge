// write your code here
const URL = 'http://localhost:3000'
const headers = {'Accepts':'application/json', 'Content-Type':'application/json'}
const likesContainer = document.querySelector('.likes')
let likeCounter = 0

let imgContainer = document.querySelector('.image')
let titleContainer = document.querySelector('.title')
let commentContainer = document.querySelector('.comments')
let heart = document.querySelector('.like-button')

function renderComments(comments) {
  console.log('hi')
  commentContainer.innerHTML = ''
  comments.forEach( comment => {
    let li = document.createElement('li')
    let commentTxt = document.createTextNode(comment.content)
    li.appendChild(commentTxt)
    commentContainer.appendChild(li)
  })
}

function appendData(data) {
  console.log(data)
  imgContainer.src = data.image
  titleContainer.innerText = data.title
  likeCounter = data.likes
  likesContainer.innerText = likeCounter + ' likes'
  renderComments(data.comments)
}

function addLikes(event) {
  likeCounter++
  likesContainer.innerText = likeCounter + ' likes'
}


function getURL(route) {
  fetch(URL + route)
  .then(res => res.json())
  .then(data => appendData(data))
}

function postURL(route, method) {
    fetch(URL + route, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
}

heart.addEventListener("click", addLikes);

getURL('/images/1')
// postURL('/comments', 'POST')
