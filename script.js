/* Estilo para o fundo azul e estrutura principal */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #e9f2fa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}

.main-container {
    background-color: #fff;
    border-radius: 8px;
    width: 350px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
    background-color: #007bff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: white;
}

.header h1 {
    font-size: 24px;
    margin: 0;
}

.header p {
    font-size: 14px;
}

.simulador {
    margin-top: 20px;
    text-align: center;
}

label {
    font-size: 16px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #0056b3;
}

#resultado {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

h3 {
    color: #007bff;
}

/* Estilo para a mensagem de créditos abaixo da caixa principal */
#creditos {
    font-size: 14px;
    color: #555;
    font-family: Arial, sans-serif;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px; /* Espaçamento acima dos créditos */
    text-align: center; /* Alinha o texto no centro */
}
