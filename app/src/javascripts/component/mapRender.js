var $ = require('jquery');

module.exports = {
  init: function(ele, data) {
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      新疆: [87.9236, 43.5883],
      甘肃: [103.5901, 36.3043],
      总部: [70.4551, 50.2539],
      北京: [116.4551, 40.2539],
      江苏: [118.8062, 31.9208],
      广西: [108.479, 23.1152],
      江西: [116.0046, 28.6633],
      安徽: [117.29, 32.0581],
      内蒙古: [111.4124, 40.4901],
      黑龙江: [127.9688, 45.368],
      天津: [117.4219, 39.4189],
      山西: [112.3352, 37.9413],
      广东: [113.5107, 23.2196],
      四川: [103.9526, 30.7617],
      西藏: [91.1865, 30.1465],
      云南: [102.9199, 25.4663],
      浙江: [119.5313, 29.8773],
      湖北: [114.3896, 30.6628],
      辽宁: [123.1238, 42.1216],
      山东: [117.1582, 36.8701],
      海南: [110.3893, 19.8516],
      河北: [114.4995, 38.1006],
      福建: [119.4543, 25.9222],
      青海: [101.4038, 36.8207],
      陕西: [109.1162, 34.2004],
      贵州: [106.6992, 26.7682],
      河南: [113.4668, 34.6234],
      重庆: [107.7539, 30.1904],
      宁夏: [106.3586, 38.1775],
      吉林: [125.8154, 44.2584],
      湖南: [113.0823, 28.2568],
    };
    var mapData = data;
    var rangeData = mapData.map(function(dataItem ) {
      var toCoord = geoCoordMap[dataItem[1].name];

      return {
        name: dataItem[1].name,
        value:dataItem[1].value,
        toCoord
      };
    });

    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
            },
            {
              coord: toCoord,
            },
          ]);
        }
      }
      return res;
    };
    // console.log(convertData(mapData))
    option = {
      //  backgroundColor: '#404a59',
      //  title: {
      //      text: '全国主要城市空气质量',
      //      subtext: 'data from PM25.in',
      //      sublink: 'http://www.pm25.in',
      //      x:'center',
      //      textStyle: {
      //          color: '#fff'
      //      }
      //  },
      //  tooltip: {
      //      trigger: 'item',
      //      formatter: function (params) {
      //          return params.name + ' : ' + params.value[2];
      //      }
      //  },
      // backgroundColor:'red',
      legend: {
        show: false,
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['出货量（件）'],
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        show: true,
        label: {
          formatter: function(params) {
            // console.log(params)
            return params.value[2];
          },
        },
        padding: [10, 5, 10, 5],
      },
      visualMap: {
        // type:'piecewise',
        dimension:0,
        show: false,
        min:0,
        max:100,
        inRange: {
          color: ['#090919','rgba(66, 202, 131,1)']
        },
        textStyle: {
          color: '#fff',
        },
      },
      geo: {
        map: 'china',
     
        zoom: 1.2,
        label: {
          // formatter: '{b}\n{c}',
          normal: {
            color: '#fff',
            show: false,
          },
          emphasis: {
            color: '#fff',
            show: false,
          },
        },

        itemStyle: {
          normal: {
            areaColor:'#090919',
            // areaColor: function(params){console.log(params)},
            borderWidth: 4,
            borderColor: 'rgba(66, 202, 131,1)',
          },
          emphasis: {
            show: false,
            // areaColor: 'rgba(66, 202, 131,1)',
          },
        },
      },
      series: [
        {
          name: '出货量（件）',
          type: 'map',
          zlevel:1,
          mapType: 'china',
          // coordinateSystem: 'geo',
          zoom: 1.2,
          showLegendSymbol: false,
          //   symbol: 'pin',
          // symbol: 'image://./images/map-icon.png',
      
          // symbolSize: function(params) {
          //   //   var ratio = 50000 / 24;
          //   var size = 20 + (params[2] - 5000) / 5000;
          //   return size;
          // },

          itemStyle: {
            normal: {
              borderColor: 'rgba(66, 202, 131,.2)',
              areaColor: '#090919',
              borderWidth: 2,
            },
            emphasis: {
              show: false,
              // borderColor: '#fff',
              areaColor: 'rgba(66, 202, 131,1)',
              borderWidth: 1,
            },
          },
          label: {
            normal: {
              color: '#fff',
              fontSize: 10,
              padding: [30, 0, 0, 0],

              formatter: function(params) {
                // console.log(params)
                let res = params.name;
                return res;
              },
              show: true,
            },
            emphasis: {
              show: false,
              color: '#fff',
            },
          },
          data: rangeData,
        },

        // {
        //   name: '出货量（件）',
        //   type: 'map',
        //   zlevel:2,
        //   mapType: 'china',
        //   coordinateSystem: 'geo',
        //   zoom: 1.2,
        //   // symbolSize:100,
        //   //   symbol: 'rec',
        //   // symbol: 'image://./images/map-icon.png',
        //   data: rangeData,
        //   // symbolSize: function(params) {
        //   //   //   var ratio = 50000 / 24;
        //   //   var size = 20 + (params[2] - 5000) / 5000;
        //   //   return size;
        //   // },

        //   itemStyle: {
        //     normal: {
        //       borderColor: 'rgba(66, 202, 131,.2)',
        //       areaColor: 'rgba(66, 202, 131)',
        //       borderWidth: 2,
        //     },
        //     emphasis: {
        //       show: false,
        //       borderColor: '#fff',
        //       areaColor: 'rgba(66, 202, 131)',
        //       borderWidth: 1,
        //     },
        //   },
        //   label: {
        //     normal: {
        //       color: '#fff',
        //       fontSize: 10,
        //       padding: [30, 0, 0, 0],
        //       show: true,
        //     },
        //     emphasis: {
        //       show: false,
        //       color:'#fff'
        //     },
        //   },
        // },

        {
          name: ' 出货量（件）',
          type: 'lines',
          zlevel: 2,
          // symbol: 'image://./images/map-icon.png',
          effect: {
            show: true,
            period: 3,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3,
          },
          lineStyle: {
            normal: {
              color: '#fff',
              width: 0,
              curveness: 0.2,
            },
          },
          data: convertData(mapData),
        },

        {
          name: ' 出货量（件）',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel:3,

          showEffectOn:'emphasis',
          // rippleEffect: {
          //   brushType: 'stroke',
          // },
          tooltip:{show:false},
     
          symbol: 'pin',
          symbolStyle:{
            color:'red'
          },
          symbolSize:function(params) {
            // console.log(params)
              var size = 20 + (params[2].size - 5) / 5;
              return size;
            },
          itemStyle: {
            normal: {
              color: '#fff',
            },
          },
          data: mapData.map(function(dataItem ) {
           
            // console.log(dataItem[1].value);
            // console.log(geoCoordMap[dataItem[1].name].push(dataItem[1].value))
            // console.log(geoCoordMap[dataItem[1].name].concat([dataItem[1].value]));
            var valueData = geoCoordMap[dataItem[1].name];
            // console.log(valueData);
            valueData.push({size:dataItem[1].value});
            // console.log(key)
            // console.log(valueData);
            return {
              name: dataItem[1].name,
              value:valueData,
            
            };
          }),
        },
      ],
    };
    var chinaMap = echarts.init(ele.get(0), 'steven.fu');
    chinaMap.setOption(option);
    tools.loopShowTooltip(chinaMap, option, {
      loopSeries: true,
    });
  },
};
