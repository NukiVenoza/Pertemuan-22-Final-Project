const achievements = localStorage.getItem("achievements")
  ? JSON.parse(localStorage.getItem("achievements"))
  : [];

function addAchievement() {
  const achievementInput = document.getElementById("add-achievement").value;
  if (achievementInput) {
    const newAchievement = {
      name: achievementInput,
      isCompleted: false,
    };

    achievements.push(newAchievement);
    localStorage.setItem("achievements", JSON.stringify(achievements));
    document.getElementById("add-achievement").value = "";
  }

  displayAchievements();
}

function displayAchievements() {
  const achievementsList = document.getElementById("achievements-list");
  achievementsList.innerHTML = "";
  let listItem = "";
  achievements.forEach((achievement, index) => {
    listItem += `
        <li class="">
            <input class="checkbox" type="checkbox" ${
              achievement.isCompleted ? "checked" : ""
            } onclick="checkboxToggle(${index})">
            <span class=${
              achievement.isCompleted ? "text-decoration-line-through" : ""
            }>${achievement.name}
            </span>
            <button class="delete-button" onclick="deleteAchievement(${index})">X</button>
        </li>
    `;
  });
  achievementsList.innerHTML = listItem;
}

function checkboxToggle(index) {
  achievements[index].isCompleted = !achievements[index].isCompleted;
  localStorage.setItem("achievements", JSON.stringify(achievements));
  displayAchievements();
}

function deleteAchievement(index) {
  achievements.splice(index, 1);
  localStorage.setItem("achievements", JSON.stringify(achievements));
  displayAchievements();
}

displayAchievements();
