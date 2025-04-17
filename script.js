// Dynamic skill generation
const skills = ["HTML", "CSS", "JavaScript", "C++", "Java", "React", "Node.js"];
const skillList = document.getElementById("skill-list");

skills.forEach(skill => {
  const div = document.createElement("div");
  div.textContent = skill;
  skillList.appendChild(div);
});

// Form behavior
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll respond shortly.");
  this.reset();
});
