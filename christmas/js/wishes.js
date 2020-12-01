 'use strict';
 {
  
  // window.addEventListener('load', function () {
  //   viewSlide('.slide img');
  // });
  // 元々はこれだった↑　ボタンで開始できるように変更↓
   const wish = document.getElementById('wish');
  wish.addEventListener('click', function () {
    viewSlide('.slide img');
  });
 
  function viewSlide(className, slideNo = -1)
  {
    let imgArray = document.querySelectorAll(className);
    if (slideNo >= 0) {
      //初回以外は今あるスライドを消す
      imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;
    if (slideNo >= imgArray.length) {
      return; //次のスライドがなければ終了
      // slideNo = 0; 次のスライドがなければ一枚目へ
    }
    imgArray[slideNo].style.opacity = 1;

    // スピード調整バー(HTMLのinputはCSSで消してある)
    let msec = document.getElementById('slide_speed').value;
    setTimeout(function(){viewSlide(className, slideNo);}, msec);
  }
}
      