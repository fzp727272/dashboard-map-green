var $ = require('jquery');

module.exports = {
  insert: function(ele, item) {
    var html =
"<tr>"+
   " <td>"+"<span class='tag'>"+item.rank+"</span>"+"</td>"+
   "<td>"+item.operation+"</td>"+
   "<td>"+item.state+"</td>"+
   "<td>"+item.number+"</td>"+
   "<td>"+item.name+"</td>"+
   "<td>"+item.time+"</td>"+
"</tr>"
    ele.append(html);
    // clearTimeout(time)
  },

  init: function(ele, data) {
    var $this = this;
      var length = data.length ;
      var begin = 0
      data.map(function(item,key){
        $this.insert(ele.find('tbody'),item);
      });
      function lunbo (){
        ele.find(".panel-body").animate({scrollTop: '300px'}, 8000).animate({scrollTop: '0px'}, 8000)
      }
setInterval(lunbo,1600)
// ele.children('tr').css({
//   display:'none'
// });
// var beginNumber = 9;

// function ShowTr(){
// if(beginNumber>0){
//   ele.children('tr').eq(beginNumber).show(600)
//   beginNumber --
// }else{
//   ele.children('tr').css({
//     display:'none'
//   });
//   beginNumber =9;
// };
// setTimeout(ShowTr,1000);
// }
// ShowTr()



// function render (){
//     if(begin <length){
//         $this.insert(ele, data[begin]);
//     begin++
//     setTimeout(render,1000)
//     }else{
//         return
//     }
    
// }
// render()


    // data.map((item,key) => {
    
    //   var $this = this;
    //  setTimeout(function() {
    //     console.log(key);
    //     $this.insert(ele, item);
    //   }),
    //  1000*key
    // });
  },

};
