$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="box">
          <div class="box__info">
            <div class="box__info__username">
              ${message.user_name}
            </div>
            <div class="box__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="box__message">
            <p class="box__message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="box">
        <div class="box__info">
          <div class="box__info__username">
            ${message.user_name}
          </div>
          <div class="box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="box__message">
          <p class="box__message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.formzone').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messagefield').append(html);
      $('form')[0].reset();
      $('.messagefield').animate({ scrollTop: $('.messagefield')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function() {
      $('.submit-btn').prop("disabled", false);
    })
  });
});