const API_BASE = "http://localhost:5000";

let mvpText = "";
let taskText = "";

async function generateMVP() {
  const idea = document.getElementById("idea").value;
  const stack = document.getElementById("stack").value;
  const hours = document.getElementById("hours").value;
  const team = document.getElementById("team").value;

  document.getElementById("mvpOutput").innerText = "Generating MVP...";

  const res = await fetch(`${API_BASE}/mvp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idea, stack, hours, team })
  });

  const data = await res.json();
  mvpText = data.text;
  document.getElementById("mvpOutput").innerText = mvpText;
}

async function generateTasks() {
  document.getElementById("taskOutput").innerText = "Generating tasks...";

  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ features: mvpText })
  });

  const data = await res.json();
  taskText = data.text;
  document.getElementById("taskOutput").innerText = taskText;
}

async function generateDemo() {
  document.getElementById("demoOutput").innerText = "Generating demo script...";

  const res = await fetch(`${API_BASE}/demo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project: "HackFlow",
      features: taskText
    })
  });

  const data = await res.json();
  document.getElementById("demoOutput").innerText = data.text;
}
