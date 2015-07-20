// 滚动
$(function () {
  $('#slider').fullpage({
    anchors: ['product_1', 'product_2', 'product_3', 'product_4', 'product_5', 'product_6', 'product_7'],
    menu: '#anchors',
    scrollingSpeed: 700,
    paddingTop: '85px',
    paddingBottom:'0px;'
  });
});