let counter = document.getElementById("counter");
let current = 0;
let pauseBtn = document.getElementById("pause");
let addBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let heartBtn = document.getElementById("heart");
let submitBtn = document.getElementById("submit");

function incrementSeconds() {
  let timerId = setInterval(function () {
    counter.innerText = current;
    current++;
  }, 1000);
  pauseBtn.addEventListener("click", () => {
    if (pauseBtn.innerHTML === " pause ") {
      pauseBtn.innerHTML = "Resume";
      addBtn.disabled = true;
      minusBtn.disabled = true;
      heartBtn.disabled = true;

      clearInterval(timerId);
    } else if (pauseBtn.innerHTML === "Resume") {
      pauseBtn.innerHTML = " pause ";
      addBtn.disabled = false;
      minusBtn.disabled = false;
      heartBtn.disabled = false;
      timerId = setInterval(function () {
        counter.innerText = current;
        current++;
      }, 1000);
    }
  });
}

addBtn.addEventListener("click", () => current++);
minusBtn.addEventListener("click", () => current--);

let myLikes = document.querySelector(".likes");

heartBtn.addEventListener("click", () => {
  const likeCounts = `${current} has been liked`;
  const myList = document.createElement("ul");
  myList.append(`${current} has been liked`);
  console.log(myList);

  myLikes.appendChild(myList);
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  let comments = document.getElementById("list");
  e.preventDefault();
  let cmtText = document.getElementById("comment-input");
  let theText = cmtText.value;
  let p = document.createElement("p");
  p.textContent = theText;
  comments.appendChild(p);
  form.reset();
});

incrementSeconds();
