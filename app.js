const cups = document.querySelectorAll(".small-cups");
const remained = document.querySelector(".remained");
const litres = document.querySelector("span");

const percentage = document.querySelector(".percentage");

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlight(idx);
  });
});
function highlight(idx) {
  if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
      console.log(idx2);
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCup = document.querySelectorAll(".small-cups.full").length;
  const totalCups = cups.length;
  if (fullCup === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCup / totalCups) * 330}px`;
    percentage.innerText = `${(fullCup / totalCups) * 100}%`;
  }

  if (fullCup === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    litres.innerText = `${2 - (250 * fullCup) / 1000}L`;
  }
}
