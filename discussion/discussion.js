const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsContainer = document.getElementById("commentsContainer");

const savedComments = JSON.parse(
  localStorage.getItem("historical-comments") || "[]"
);
savedComments.forEach(displayComment);

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const commentText = commentInput.value.trim();
  if (commentText === "") return;

  const comment = {
    text: commentText,
    time: new Date().toLocaleString("ar-EG"),
  };

  savedComments.push(comment);
  localStorage.setItem("historical-comments", JSON.stringify(savedComments));

  displayComment(comment);
  commentInput.value = "";
});

function displayComment(comment) {
  const commentEl = document.createElement("div");
  commentEl.className = "comment-box";
  commentEl.innerHTML = `
        <p class="mb-1">${comment.text}</p>
        <small class="text-muted">${comment.time}</small>
      `;
  commentsContainer.prepend(commentEl);
}

let cardTitle = document.getElementById("card-title");

let cardDetails = JSON.parse(localStorage.getItem("card-details"));

console.log(cardDetails.title);

cardTitle.innerText = cardDetails.title;
