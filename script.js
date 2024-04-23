function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid weight and height.');
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
}

function calculateBMR() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please enter valid weight, height, and age.');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById('result').innerText = `Your BMR is: ${bmr.toFixed(2)} calories/day`;
}
