const milestonesData = JSON.parse(data).data;

function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      return `<div class="milestone border-bottom">
            <div class="d-flex p-2">
              <div class="checkbox">
                <input class="form-check-input p-lg-3" type="checkbox">
              </div>
              <div onclick="openMilestone(this, ${milestone._id})">
              <p class="ms-3 my-2">${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
              </p>
              </div>
            </div>
            <div class="hidden">
              ${milestone.modules
                .map(function (module) {
                  return `<div class="module ms-5 ps-2">
                <p>${module.name}</p>
              </div>`;
                })
                .join("")}
            </div>
          </div>`;
    })
    .join("")}`;
}
function openMilestone(current, id) {
  const currentPanel = current.parentElement.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const active = document.querySelector(".fw-bolder");
  if (active && !current.classList.contains("fw-bolder")) {
    active.classList.remove("fw-bolder");
  }

  current.classList.toggle("fw-bolder");

  if (!currentPanel.classList.contains("show") && shownPanel)
    shownPanel.classList.remove("show");

  currentPanel.classList.toggle("show");

  showMilestone(id);
}
function showMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");

  milestoneImage.src = milestonesData[id].image;
  milestoneTitle.innerText = milestonesData[id].name;
  milestoneDetails.innerText = milestonesData[id].description;

  milestoneImage.style.opacity = "0";
}
// load img
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
  this.style.opacity = "1";
};
loadMilestones();
