$(function () {
  // 监听滚动
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight == scrollHeight) {
      // alert("已经到最底部了！");
      // 通过stop() 方法为被选元素停止当前正在运行的动画
      $(".kit .footer").stop(true, true).slideDown();
    } else {
      $(".kit .footer").stop(true, true).slideUp();
    }
  });

  // 调整 td 的高度
  $(".tr").each(function () {
    // 取父容器 tr 的高度赋值给孩子 td 的高度

    $(this).children().outerHeight($(this).outerHeight(true));
  });
});