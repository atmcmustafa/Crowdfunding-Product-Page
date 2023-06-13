const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const projectModal = document.querySelector(".projectModal");
const selectButtons = document.querySelectorAll(".select-btn");
let totalMoney = document.getElementById("totalMoney");
let totalBackers = document.getElementById("totalBackers");
let daysLeft = document.getElementById("daysLeft");
const continueInputs = document.querySelectorAll(".continueInput");

const continueWrappers = document.querySelectorAll(".continue-wrapper");
const continueButtons = document.querySelectorAll(".continue-btn");
const successMsg = document.querySelector(".succesModal");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  mobileMenu.classList.toggle("hidden");

  if (!mobileMenu.classList.contains("hidden")) {
    hamburger.src = "images/icon-close-menu.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
  }
}

selectButtons.forEach((btn) => {
  btn.addEventListener("click", openProjectModal);
});

function openProjectModal() {
  projectModal.classList.remove("hidden");
}

projectModal.addEventListener("click", controlCloseButton);

function controlCloseButton(e) {
  if (e.target.classList.contains("fa-x")) {
    projectModal.classList.add("hidden");
  }
}

continueButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectModal = document.querySelector(".projectModal"); // projectModal'ı burada tanımlayın
    const checkBtn = document.querySelector(".checkBtn");

    projectModal.classList.add("hidden");
    successMsg.classList.remove("hidden");

    checkBtn.addEventListener("click", () => {
      successMsg.classList.add("hidden");
    });
  });
});

continueWrappers.forEach((card) => {
  const amountContainer = card.querySelector(".amount-container");
  card.addEventListener("click", () => {
    continueWrappers.forEach((otherCard) => {
      const otherAmountContainer = otherCard.querySelector(".amount-container");
      if (otherCard !== card) {
        otherAmountContainer.classList.add("hidden");
      }
    });
    amountContainer.classList.remove("hidden");
  });
});

continueInputs.forEach((input) => {
  input.addEventListener("input", () => {
    let money = 89565;
    let backers = 5007;
    let days = 56;
    let resultMoney = Number(money) + Number(input.value);
    totalMoney.innerText = `$${resultMoney.toLocaleString()}`;
    let resultBackers = Number(backers) + 1;
    totalBackers.innerText = `${resultBackers.toLocaleString()}`;
    let resultDay = Number(days) - 1;
    daysLeft.innerText = `${resultDay.toLocaleString()}`;
  });
});
