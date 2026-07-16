// Sample data
let weightData = [70, 80, 69, 68.8];
let calorieData = [400, 500, 600, 550];

// Weight Chart
const weightChart = new Chart(document.getElementById('weightChart'), {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [{
      label: 'Weight (kg)',
      data: weightData,
      borderColor: '#e74c3c',
      fill: false
    }]
  }
});

// Calorie Chart
const calorieChart = new Chart(document.getElementById('calorieChart'), {
  type: 'bar',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [{
      label: 'Calories Burned',
      data: calorieData,
      backgroundColor: '#3498db'
    }]
  }
});

// Goals
function addGoal() {
  const goalInput = document.getElementById('goalInput');
  const goalList = document.getElementById('goalList');
  if (goalInput.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = goalInput.value;
    goalList.appendChild(li);
    goalInput.value = "";
  }
}
