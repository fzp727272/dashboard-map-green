var $ = require('jquery');

module.exports = {
  init: function(ele,  data) {
    // app.title = '柱状图框选';
    var AxisData =[]
    var chartData = []
    data.map(function(item,key){
        AxisData.push(item.name);
        chartData.push({value:item.value,rank:item.rank,});
    })
    var itemStyle = {
      normal: {
        barBorderRadius: [3, 3, 3, 3],
        lineStyle: {
          width:1// 0.1的线条是非常细的了
        },
        color:function(params) { 
          var colorList = [ "rgb(66, 202, 131)",
          "rgb(53, 126, 240)",
          "rgb(255, 99, 100)",
          "rgb(36, 164, 235)",
          "rgb(243, 164, 45)",
          "rgb(251, 143, 79)",
          "rgb(66, 202, 131)",
          "rgb(53, 126, 240)",
          "rgb(255, 99, 100)",
          "rgb(36, 164, 235)",
          "rgb(243, 164, 45)",
          "rgb(251, 143, 79)",
          "rgb(66, 202, 131)",
          "rgb(53, 126, 240)",
          "rgb(255, 99, 100)",
          "rgb(36, 164, 235)",
          "rgb(243, 164, 45)",
          "rgb(251, 143, 79)", ]; 
          return colorList[params.dataIndex] 
      },
      },
      emphasis: {
        barBorderWidth: 0,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)',
      },
    };

    var option = {

      backgroundColor: 'rgba(255,255,255,0)',
    //   legend: {
     
    //     top: 0,
    //     right: 12,
    //     textStyle: {
    //       color: 'rgba(255,255,255,.4)',
    //     },
    //     borderRadius: 20,
    //     itemWidth: 10,
    //     itemHeight: 10,
    //     // left: 10
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
      tooltip: {
        confine: true,
        // formatter: function(params) {
        //     console.log(params)
        //     var res =
        //       '<div>' +
        //       '<div style="font-size:16px;"><div style="text-align:center;display:inline-block;width:16px;height:16px;line-height:16px;border-radius:10px;background:#FF006D;margin-right:4px;">' +
        //       params[0].rank +
        //       '</div>' +
        //       params[0].name +
        //       '</div>' +
        //       '出库量：' +
        //       params[0].value +
        //       '</div>';
        //     return res;
        //   },
        axisPointer: {
          type: 'shadow',
          // lineStyle:{
          //    width:1,
          //    color:'#575565'
          // }
   
          shadowStyle: {
            shadowColor: '#000',
            color: 'rgba(8,6,17,.3)',
            // z:"-100",
            // opacity:".1"
            // shadowBlur:20,
          },
        },
        trigger: 'axis',
        showDelay: 0,
        hideDelay: 50,
        transitionDuration: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        //   borderColor : 'rgba(47,69,84,1)',
        borderRadius: 8,
        borderWidth: 2,
        padding: 4,
      },
      yAxis: {
        // show:false,
        data:AxisData,
        // {
        //     // value:AxisData,
        //     // textStyle:{width:1000}
        // }, 
        label:{
            normal:{
                fontSize:10,
            }
        },
        // name: 'X Axis',
        // show:false,
        silent: true,
        // axisLabel:{align:'right'},
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            width: 10,
          },
        },
        // splitLine: {

        // },

        splitArea: { show: false },
      },
      xAxis: {
          show:false,
        // inverse: true,
        splitArea: { show: false },
        splitNumber:3,
        splitLine: {
          show: true,
          //  改变轴线颜色
          lineStyle: {
            width: 0.3,
            // 使用深浅的间隔色
            color: ['rgba(255,255,255,.3)'],
          },
        },
      },
      grid: {
        left: 20,
        right: 0,
        top: 10,
        bottom: -10,
        containLabel: true,
      },
      // visualMap: {
      //     type: 'continuous',
      //     dimension: 1,
      //     text: ['High', 'Low'],
      //     inverse: true,
      //     itemHeight: 200,
      //     calculable: true,
      //     min: -2,
      //     max: 6,
      //     top: 60,
      //     left: 10,
      //     inRange: {
      //         colorLightness: [0.4, 0.8]
      //     },
      //     outOfRange: {
      //         color: '#bbb'
      //     },
      //     // controller: {
      //     //     inRange: {
      //     //         color: '#2f4554'
      //     //     }
      //     // }
      // },

      series: [
        {
          name: '出库量',
 
          label: {

            normal: {

                show: true,
                
                formatter: function(v) {
                    // console.log(v)
                    // console.log(AxisData)
                    var val = v.data.value;

                    return val 

                },

                color: '#fff'

            }},
          //   itemStyle:{
          //    normal:{
          //      color:'red'
          //    }
          // },
          type: 'bar',
          barWidth: 5,
          barGap: 0,
          itemStyle: itemStyle,
          data: data,
        },
     
      ],
    };
    var chart = echarts.init(ele.get(0), 'steven.fu');
    chart.setOption(option);
    // tools.loopShowTooltip(chart, option, {
    //     loopSeries: true
    //   });

    // myChart.on('brushSelected', renderBrushed);

    // function renderBrushed(params) {
    //     var brushed = [];
    //     var brushComponent = params.batch[0];

    //     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
    //         var rawIndices = brushComponent.selected[sIdx].dataIndex;
    //         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    //     }

    //     myChart.setOption({
    //         title: {
    //             backgroundColor: '#333',
    //             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
    //             bottom: 0,
    //             right: 0,
    //             width: 100,
    //             textStyle: {
    //                 fontSize: 12,
    //                 color: '#fff'
    //             }
    //         }
    //     });
    // }
  },

};
