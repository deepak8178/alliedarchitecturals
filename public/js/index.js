import axios from "axios";
import { updateBlogs, deleteBlogs } from "./updateBlogs";

const menu = document.querySelector(".header__menu");
const list = document.querySelector(".header__container");
const title = document.getElementById("title");
const content_1 = document.getElementById("content-1");
const content_2 = document.getElementById("content-2");
const content_3 = document.getElementById("content-3");
const updateBtn = document.querySelectorAll(".dashboard__box-update");
const cancelBtn = document.querySelectorAll(".dashboard__box-cancel");
const editBtn = document.querySelectorAll(".dashboard__box-edit");
const deleteBtn = document.querySelectorAll(".dashboard__box-delete");

const form = document.querySelector(".contact__form");
let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Phone = document.getElementById("phone");
let Service = document.getElementById("service");
let Message = document.getElementById("message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("email").value;
    let inputPhone = document.getElementById("phone").value;
    let inputService = document.getElementById("service").value;
    let inputMessage = document.getElementById("message").value;
    const response = await axios.post("/api/email/send", {
      inputName,
      inputEmail,
      inputPhone,
      inputService,
      inputMessage,
    });

    Service.value = "Not chosen any services";
    Email.value = "";
    Phone.value = "";
    Name.value = "";
    Message.value = "";

    alert("Email received by our team!");
  } catch (e) {
    alert("Error in submitting the form");
  }
});

menu.addEventListener("click", function () {
  list.classList.toggle("hidden");
  list.classList.contains("hidden")
    ? menu.setAttribute("src", "/icons/menu.svg")
    : menu.setAttribute("src", "/icons/x.svg");
});

function enableEditing(blogContainer) {
  const titleInput = blogContainer.querySelector(".title");
  const content1Input = blogContainer.querySelector(".content-1");
  const content2Input = blogContainer.querySelector(".content-2");
  const content3Input = blogContainer.querySelector(".content-3");

  titleInput.disabled = false;
  content1Input.disabled = false;
  content2Input.disabled = false;
  content3Input.disabled = false;
}

// Function to disable editing for a specific blog
function disableEditing(blogContainer) {
  const titleInput = blogContainer.querySelector(".title");
  const content1Input = blogContainer.querySelector(".content-1");
  const content2Input = blogContainer.querySelector(".content-2");
  const content3Input = blogContainer.querySelector(".content-3");

  titleInput.disabled = true;
  content1Input.disabled = true;
  content2Input.disabled = true;
  content3Input.disabled = true;
}

editBtn.forEach((edit) =>
  edit.addEventListener("click", function (e) {
    const blogContainer = this.closest(".dashboard__box");
    enableEditing(blogContainer);
    title.disabled = false;
    content_1.disabled = false;
    content_2.disabled = false;
    content_3.disabled = false;
  }),
);

cancelBtn.forEach((cancel) => {
  cancel.addEventListener("click", function (e) {
    const blogContainer = this.closest(".dashboard__box");
    disableEditing(blogContainer);

    title.disabled = true;
    content_1.disabled = true;
    content_2.disabled = true;
    content_3.disabled = true;
  });
});

deleteBtn.forEach((del) => {
  del.addEventListener("click", async function () {
    const blogContainer = this.closest(".dashboard__box");
    const titleToDelete = blogContainer.querySelector(".title").value;
    const slug = titleToDelete.toLowerCase().split(" ").join("-");
    console.log(slug);

    await deleteBlogs(slug);
    window.setTimeout(() => {
      location.assign("/dashboard");
    }, 1000);
  });
});

updateBtn.forEach((update) =>
  update.addEventListener("click", async function (e) {
    e.preventDefault();
    title.disabled = false;
    content_1.disabled = false;
    content_2.disabled = false;
    content_3.disabled = false;
    const title = document.getElementById("title").value;
    const slug = title.toLowerCase().split(" ").join("-");
    const content_1 = document.getElementById("content-1").value;
    const content_2 = document.getElementById("content-2").value;
    const content_3 = document.getElementById("content-3").value;
    await updateBlogs({ title, content_1, content_2, content_3 }, slug);
    window.setTimeout(() => {
      location.assign("/dashboard");
    }, 1000);
  }),
);
