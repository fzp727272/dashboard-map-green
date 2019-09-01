var $ = require('jquery');


module.exports = {
init:function(ele,xAxisData,data){
      // app.title = '柱状图框选';

    
      var itemStyle = {
          normal: {
            barBorderRadius:[3, 3, 0, 0],
          },
          emphasis: {
              barBorderWidth: 0,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0,0,0,0.5)',

          }
      };
  
     var option = {
          title: {
              text: '每小时拣配量',
              left: 12,
              // subtext: '纯属虚构'
              textStyle:{color:"#fff",fontSize:24,fontWeight:'normal'}
          },
          backgroundColor: 'rgba(255,255,255,0)',
        //   legend: {
        //       data: ['收货', '发货', '库存',],
        //       top: 0,
        //      right:12,
        //       textStyle:{
        //           color:"rgba(255,255,255,.4)"
        //       },
        //       borderRadius:20,
        //       itemWidth:10,
        //       itemHeight:10,
        //       // left: 10
        //   },
          // brush: {
          //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
          //     xAxisIndex: 0
          // },
        //   toolbox: {
        //       feature: {
        //           // mark : {show: true},
        //           // dataView : {show: true, readOnly: false},
        //           // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //           restore: { show: true },
        //           saveAsImage: { show: true }
        //       },
        //       right:40,
        //       // y: 'bottom'
        //   },
        //   tooltip: {
        //       axisPointer:{
        //         type:'shadow',
        //         // lineStyle:{
        //         //    width:1,
        //         //    color:'#575565' 
        //         // }
        //         shadowStyle:{
        //             shadowColor:'#000',
        //             color:"rgba(8,6,17,.3)",
        //             // z:"-100",
        //             // opacity:".1"
        //             // shadowBlur:20,
        //         }
        //       },
        //       trigger: 'axis',
        //       showDelay: 0,
        //       hideDelay: 50,
        //       transitionDuration:0,
        //       backgroundColor : 'rgba(0,0,0,0.9)',
        //     //   borderColor : 'rgba(47,69,84,1)',
        //       borderRadius : 8,
        //       borderWidth: 2,
        //       padding: 4,   
        //   },
          xAxis: {
              data: xAxisData,
              // name: 'X Axis',
              silent: false,
              splitLine:{
                show:false,
                lineStyle:{
                    color:'rgba(255,255,255,0.3)',
                    width:10,
                }
            } ,
            // splitLine: {
                
            // },
     
              splitArea: { show: false }
          },
          yAxis: {
              // inverse: true,
              splitArea: { show: false },
              splitLine: {
                show: true, 
                //  改变轴线颜色
                lineStyle: {
                    width:.3,
                    // 使用深浅的间隔色
                    color: ["rgba(255,255,255,.3)"]
                }                            
        },
          
          },
          grid: {
              left: 20,
              right: 12,
              top: 70,
              bottom: 20,
              containLabel: true
          },

  
          series: [
    
              {
                  name: '库存',
                  type: 'line',
                  symbolSize: 8,
                  barWidth: 12,
                //   symbolSize: 10,
                  itemStyle: itemStyle,
                  data: data
              },
  
          ]
      };
      var shouruChart = echarts.init(ele.get(0), 'steven.fu');
      shouruChart.setOption(option);

    
}
};