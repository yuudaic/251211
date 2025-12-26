function onFormSubmit(e) {
    // トリガーセット忘れないこと
    // e.namedValues から各項目を取り出し
    const values = e.namedValues;

    const name = values['お名前'][0];    // フォームの設問名に合わせる
    const email = values['メールアドレス'][0];
    const tel = values['電話番号'][0] || '';
    const note = values['お問い合わせ内容'][0] || '';

    const subject = '【レンタルスペースきたかみ本通り】お問い合わせありがとうございます';
    const htmlBody =
        `${name} 様<br><br>
  このたびはお問い合わせいただきありがとうございます。<br><br>

  以下の内容で承りました。<br><br>

  ―――――――――――――――――<br>
  ご担当者名：${name}<br>
  メールアドレス：${email}<br>
  電話番号：${tel}<br>
  ご相談内容：<br>${note}<br>
  ―――――――――――――――――<br><br>

  内容を確認のうえ、追ってご連絡いたします。<br><br>

  <strong>レンタルスペースきたかみ本通り</strong><br>
  <a href="mailto:rentalspace.kitakami@gmail.com">rentalspace.kitakami@gmail.com</a><br>
  <a href="tel:0120560626">0120-560-626</a>
  `;

    // 自動返信メール
    GmailApp.sendEmail(
        email,
        subject,
        'お問い合わせありがとうございます', // ← 必須（body）
        {
            htmlBody: htmlBody,
            from: 'support@rkitakami.yuudai.site',     // エイリアス（送信元）
            name: 'レンタルスペースきたかみ本通り',
            replyTo: 'rentalspace.kitakami@gmail.com'
        }
    );

    // 自分にも通知
    const myAddress = 'info@yuudai.site'; // 自分のメールアドレスに変更する
    const mysubject = '【お問い合わせ有り】' + ' ' + name + '様より';
    GmailApp.sendEmail(
        myAddress,
        mysubject,
        'ホームページから問い合わせがありました', // ← 必須（body）
        {
            htmlBody: htmlBody,
            from: 'support@rkitakami.yuudai.site',     // エイリアス（送信元）
            name: 'レンタルスペースきたかみ本通り',
            replyTo: 'rentalspace.kitakami@gmail.com'
        }
    );
}
