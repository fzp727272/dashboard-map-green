var $ = require('jquery');
// module.exports = {
//   init: function(ele, completeData, planData) {
//    var option = {
//       tooltip: {
//         formatter: '{a} <br/>{b} : {c}%',
//       },
//       backgroundColor: 'rgba(255,255,255,0)',
//     //   toolbox: {
//     //     feature: {
//     //       restore: {},
//     //       saveAsImage: {},
//     //     },
//     //   },
//       series: [
//         {
//           name: '业务指标',
//           type: 'gauge',
//           detail: { formatter: '{value}%' },
//           axisLine:{show:false},
//           splitLine:{show:false},
//           data: [{ value: completeData, name: '已完成' ,color:'red'}, { value: planData, name: '计划完成' }],
//         },
//       ],
//     };
//     var dashboardChart = echarts.init(ele.get(0), 'steven.fu');

//     // option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     dashboardChart.setOption(option);
//     // var shouruChart = echarts.init(ele.get(0), "steven.fu");
//     // shouruChart.setOption(option);
//   },
// };
module.exports={
    init:function(ele,data){
        // var legData = [];
        // data.map(function(item,i){
        //     legData.push(item.name)
        // });

        // console.log(legData )
        option = {
            tooltip: {
                trigger: 'item',
                confine:true,
                formatter: "{b}<br/>{c} ({d}%)"
            },
            

         
            // legend: {
            //     // orient: 'vertical',
            //     x: '60%',
            //     y:'center',
            //    textStyle:{color:'#fff'},
              
            // },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['65%', '90%'],
                    center:['50%','50%'],
                    x: 'left', // for funnel
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            },
                            //  formatter: function(params){
                            //         var res = params.data.name+params.data.value
                            //         return res
                            //  } 
                        }
                    },
 
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:data
                }
            ]
        };
        var chart = echarts.init(ele.get(0),'steven.fu');
        chart.setOption(option);
        tools.loopShowTooltip(chart, option, {
            loopSeries: true
          });
    }
}