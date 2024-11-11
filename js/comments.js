const comments = localStorage.getItem("comments")
  ? JSON.parse(localStorage.getItem("comments"))
  : [];

function addComments() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const messageInput = document.getElementById("messages").value;

  if (nameInput && emailInput && messageInput) {
    const newComment = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    };

    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("messages").value = "";
  }
  displayComments();
}

function displayComments() {
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = "";
  let listItem = "";
  comments.forEach((comment) => {
    listItem += `
        <li>${comment.name} - ${comment.email}: <br> ${comment.message}</li>
    `;
  });
  commentsList.innerHTML = listItem;
}

displayComments();
