const form = document.getElementById("main-form");
const textArea = document.getElementById("text-area");
const msg = document.createElement("div");
textArea.after(msg);
msg.classList.add("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

const formValidation = () => {
  if (textArea.value !== "") {
    console.log("success");
    msg.textContent = "";
    uploadingPost();
  } else {
    console.log("failure");
    msg.textContent = "Input cannot be blanked";
  }
};

const postInput = {};

const uploadingPost = () => {
  postInput.IndividualPost = textArea.value;
  console.log(postInput);
  displayPosts();
};

const displayPosts = () => {
  const eachPost = document.getElementById("posts");
  eachPost.innerHTML += `
  <div>
            <p>${postInput.IndividualPost}</p>
            <span class="icons"
              ><i class="fa-solid fa-pen-to-square"></i
              ><i class="fa-solid fa-trash-can"></i
            ></span>
 </div>`;
};
