var $ = require('jquery');
module.exports = {
  start: function(ele, options) {
    /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/

    //不传配置就把它绑定在相应html元素的data-xxxx属性上吧
    options = options || {};

    var $this = ele.get(0),
      time = options.time || $this.data('time'), //总时间--毫秒为单位
      finalNum = options.num || $this.data('value'), //要显示的真实数值
      regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度
      step = finalNum / (time / regulator) /*每30ms增加的数值--*/,
      count = 0, //计数器
      initial = 0;
    var comdify = function(num) {
        return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');

    };
    // var delcommafy =function (num){//去除千分位中的‘，’
    //     　　if(num&&num!='undefined'&&num!='null'){
    //     　　　　let numS = num;
    //     　　　　numS = numS.toString();
    //     　　　　numS = numS.replace(/,/gi, '');
    //     　　　　return numS;
    //     　　}else {
    //     　　　　return num;
    //     　　}
    //     };
    var timer = setInterval(function() {
      count = count+ step;
     
      if (count >= finalNum) {
        clearInterval(timer);
        count = finalNum;
      }
      //t未发生改变的话就直接返回
      //避免调用text函数，提高DOM性能
      var t = Math.floor(count);
      if (t == initial) return;

      initial = t;
  
      var show = comdify(initial);
      console.log(show)
      $this.innerHTML = show;
    }, 30);
  },
};
