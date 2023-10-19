const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obter o peso e a altura do usuário
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    // Calcular o bmi
    const bmi = weight / (height * height);
    console.log(bmi)
    const value = document.getElementById('value');
    console.log(value)
    let description = '';

    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso';
    } else if (bmi >= 18.5 && bmi <= 24, 9) {
        description = 'Parabéns! Você está no peso ideal';
    } else if (bmi >= 24, 9 && bmi <= 29, 9) {
        description = 'Cuidado! Você está acima do peso';
    } else if (bmi >= 30 && bmi <= 34, 9) {
        description = 'Cuidado! Você está com obesidade grau I';
    } else if (bmi >= 35 && bmi <= 39, 9) {
        description = 'Cuidado! Você está com obesidade grau II';
    } else {
        description = 'Cuidado! Você está com obesidade grau III';
    }

    value.textContent = bmi.toFixed(2);

    document.getElementById('description').textContent = description;
})