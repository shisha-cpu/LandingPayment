<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Регистрация на интенсив</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>2-дневный интенсив</h1>
      <p class="subtitle">Заполните форму ниже для регистрации</p>
    </header>
    
    <div class="card" id="payment-form">
      <div class="form-group">
        <!-- Поле email убрано -->
      </div>
      
      <div class="form-group">
        <label for="amount">Сумма оплаты (руб)</label>
        <input type="number" id="amount" min="1" placeholder="100" required>
      </div>
      
      <div class="payment-info">
        <p>Вы можете самостоятельно выбрать сумму оплаты за участие в интенсиве.</p>
      </div>
      
      <div class="loader" id="loader">
        <div class="spinner"></div>
        <p>Перенаправление на страницу оплаты...</p>
      </div>
      
      <button class="btn btn-block" id="pay-btn">Оплатить</button>
    </div>
    
    <div class="card success-message" id="success-message">
      <h2>Оплата прошла успешно!</h2>
      <p>Спасибо за регистрацию на интенсив.</p>
      <p>Теперь вы можете перейти в наш закрытый Telegram-канал.</p>
      <a href="#" class="btn" id="telegram-link">Перейти в Telegram</a>
    </div>
  </div>
  
 <script>