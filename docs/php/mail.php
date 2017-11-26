<?php

  $name = $_POST['user-name'];
  $phone = $_POST['user-phone'];
  $pay = $_POST['user-pay'];
  $message = $_POST['user-comment'];

  $disturb = $_POST['dont-disturb'];
  $disturb = isset($disturb) ? "Нет" : "Да" ;

  $mail_message = '
        <html>
              <head>
                  <title>Заявка</title>
              </head>
              <body>
                  <h2>Заказ</h2>
                  <ul>
                      <li>Имя: ' . $name . '</li>
                      <li>Email: ' . $email . '</li>
                      <li>Способ оплаты: ' . $pay . '</li>
                      <li>Комментарии к заказу: ' . $message . '</li>
                      <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
                  </ul>
              </body>
          </html>
  ';


  $headers = "From: Администратор сайта Burger>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('hurtinandr@gmail.com', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Сообщение отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "Ошибка";
    }
    echo json_encode($data);
?>
