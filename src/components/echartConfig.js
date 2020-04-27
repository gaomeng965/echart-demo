/*
 * @Author: your name
 * @Date: 2020-04-23 15:30:43
 * @LastEditTime: 2020-04-27 13:37:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /echart-demo/src/components/lineChart.js
 */
// 中国地图相关配置
const chinaMapOption = {
  tooltip: {
    show: true, // 是否显示提示框组件
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
  visualMap: {
    // 左下角的颜色区域
    type: "piecewise", // 定义为分段型 visualMap
    min: 0,
    max: 1000,
    itemWidth: 12,
    itemHeight: 10,
    bottom: 20,
    left: 20,
    textStyle: {
      fontSize: 10,
      color: '#fff',
    },
    itemSymbol: 'circle',
    showLabel: true, // 是否显示每项的文本标签
    pieces: [
      // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
      { gt: 5000, lte: Infinity, label: "5000人以上", color: "#1B43CC" }, // (500, Infinity]
      { gt: 2000, lte: 5000, label: "2000-5000人", color: "#4067EF" }, // (500, Infinity]
      { gt: 1000, lte: 2000, label: "1000-2000人", color: "#8CA4F5" }, // (200, 500]
      { gt: 500, lte: 1000, label: "500-1000人", color: "#B3C2F9" }, // (100, 200]
      { gt: 0, lte: 500, label: "0-500人", color: "#D9E1FC" } // (0, 100]
    ]
  },
  // geo配置详解： https://echarts.baidu.com/option.html#geo
  geo: {
    // 地理坐标系组件用于地图的绘制
    map: "china", // 表示中国地图
    roam: false, // 是否开启鼠标缩放和平移漫游
    zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
    label: {
      show: false, // 是否显示省份标签
      fontSize: 10
    },
    itemStyle: {
      // 地图区域的多边形 图形样式。
      color: 'rgba(70,105,239,0.2)',
      areaColor: '#D9E1FC',
      borderColor: "#121336",
      borderWidth: 0.5,
    }
  },
  series: [
    {
      name: "人数", // 浮动框的标题
      type: 'map',
      coordinateSystem: 'geo',
      geoIndex: 0,
      label: {
        show: false
      },
      // 配置地图上的某个地区的数据，根据后台的返回的数据进行拼接
      data: [
        { name: '北京', value: Math.round(Math.random() * 2000) },
        { name: '天津', value: Math.round(Math.random() * 2000) },
        { name: '上海', value: Math.round(Math.random() * 2000) },
        { name: '重庆', value: Math.round(Math.random() * 2000) },
        { name: '河北', value: Math.round(Math.random() * 2000) },
        { name: '河南', value: Math.round(Math.random() * 2000) },
      ]
    }
  ]
};

// 全校学生健康状态
const healthStatusOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  legend: {
    orient: 'vertical',
    right: 'right',
    top: '0.70',
    textStyle: {
      color: '#fff',
    },
    data: [{
      name: '打卡正常',
      icon: 'circle',
    },
    {
      name: '打卡异常',
      icon: 'circle',
    }]
  },
  color: ['#FD1473', '#4067EF',],
  textStyle: {
    color: '#fff',
  },
  series: [
    {
      name: '打卡状态',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      width: '88%',
      height: '88%',
      left: '0',
      top: '0',
      label: {
        show: false,
        position: 'center',
      },
      itemStyle: {
        shadowColor: '#1C1D4C',
        shadowBlur: 20
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 382, name: '打卡异常' },
        { value: 3921, name: '打卡正常' },
      ]
    }
  ]
}

// 返校状态
const backSchoolOption = {
  color: ['#4067EF', '#FD1473'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  legend: {
    data: [{
      name: '返校',
      icon: 'circle',
    },
    {
      name: '未返校',
      icon: 'circle',
    }],
    textStyle: {
      color: '#fff',
    }
  },
  grid: {
    left: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: '#fff',
          opacity: 0.0
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 40
      },
      data: ['机械学院', '电气工程学院', '化工学院', '土木工程学院', '信息工程学院']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff',
          opacity: 0.4
        }
      },
      splitLine: {
        lineStyle: {
          opacity: 0.4
        }
      }
    }
  ],
  dataZoom: [
    {
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      start: 1,
      end: 35,   // 数据源的长度
      textStyle: {
        color: '#fff',
      }
    },
    //下面这个属性是里面拖到  
    {
      type: 'inside',
      show: true,
      xAxisIndex: [0],
      start: 0,//默认为1  
      end: 50 // 数据源的长度
    },
  ],
  series: [
    {
      name: '返校',
      type: 'bar',
      barWidth: '5',
      itemStyle: {
        barBorderRadius: [5, 5, 0, 0]
      },
      data: [1500, 2323, 2301, 1543, 1903]
    },
    {
      name: '未返校',
      type: 'bar',
      barWidth: '5',
      itemStyle: {
        barBorderRadius: [5, 5, 0, 0]
      },
      data: [1000, 1077, 1001, 909, 400]
    }
  ]
};

// 场馆人数分布
const venuePopulationOption = {
  tooltip: {
    show: true, // 是否显示提示框组件
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  series: [
    {
      name: '人数分布',
      type: 'graph',
      layout: 'circular',
      // 数据源
      data: [{
        name: '荷园餐厅',
        x: 0,
        y: 0,
        symbolSize: 40,
        value: 20,
        itemStyle: {
          color: '#866AFF',
          borderWidth: 0,
        }
      }, {
        name: '第一餐厅',
        x: 20,
        y: 20,
        value: 20,
        symbolSize: 20,
        itemStyle: {
          color: '#FF7C7C',
          borderWidth: 0,
        }
      },
      {
        name: '图书馆',
        x: 15,
        y: 45,
        value: 20,
        symbolSize: 20,
        itemStyle: {
          color: '#ED9524',
          borderWidth: 0,
        }
      }, {
        name: '教室',
        x: 65,
        y: 20,
        value: 20,
        symbolSize: 70,
        itemStyle: {
          color: '#E65FDF',
          borderWidth: 0,
        }
      },
      {
        name: '机房',
        x: 100,
        y: 80,
        value: 20,
        symbolSize: 80,
        itemStyle: {
          color: '#5FE6A0',
          borderWidth: 0,
        }
      }],
      categories: [
        { name: "类目1" },
        { name: "类目2" },
        { name: "类目3" },
        { name: "类目4" },
        { name: "类目5" },
        { name: "类目6" },
      ],
      roam: true,
      focusNodeAdjacency: true,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      },
      label: {
        position: 'right',
        formatter: '{b}'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3
      },
      emphasis: {
        lineStyle: {
          width: 10
        }
      }
    }
  ]
};

// 宿舍出入情况
const dormitoryOption = {
  color: ['#4067EF', '#FD1473'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  yAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      axisLine: {
        show: false,
        opacity: 0,
      },
      splitLine: {
        show: false
      },
      data: [{
        value: '进',
        textStyle: {
          color: '#fff',
          fontSize: '14',
        },
      }, {
        value: '出',
        textStyle: {
          color: '#fff',
          fontSize: '14',
        },
      },]
    }
  ],
  xAxis: {
    show: false
  },
  grid: {
    top: 'middle',
    height: 40,
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        barBorderRadius: [0, 10, 10, 0]
      },
      barWidth: 14,
      data: [{
        value: 150,
        itemStyle: {
          color: '#4067EF',
        }
      }, {
        value: 232,
        itemStyle: {
          color: '#FD1473',
        }
      }]
    },

  ]
};

// 校园进出情况
const schoolOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  color: ['#4067EF', '#FD1473'],
  legend: {
    data: [{
      name: '进校',
      icon: 'circle',
    },
    {
      name: '出校',
      icon: 'circle',
    }],
    textStyle: {
      color: '#fff',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: { show: false },
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0
      }
    },
    axisLabel: {
      interval: 0,
      rotate: 40
    },
    data: ['4月16', '4月17', '4月18', '4月19', '4月20', '4月21','4月22','4月23','4月24',]
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0.4
      }
    },
    splitLine: {
      lineStyle: {
        opacity: 0.4
      }
    }
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      start: 1,
      end: 35,   // 数据源的长度
      textStyle: {
        color: '#fff',
      }
    },
    //下面这个属性是里面拖到  
    {
      type: 'inside',
      show: true,
      xAxisIndex: [0],
      start: 0,//默认为1  
      end: 50 // 数据源的长度
    },
  ],
  series: [
    {
      name: '进校',
      smooth: true,
      type: 'line',
      lineStyle: {
        width: 4,
        color: '#4067EF',
      },
      data: [120, 132, 101, 134, 90, 60,50, 80, 99,]
    },
    {
      name: '出校',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 4,
        color: '#FD1473',
      },
      data: [123, 122, 151, 154, 190]
    },
  ]
}

// 体温异常曲线图
const temperatureOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: "#fff", //提示标签背景颜色
    textStyle: { //提示标签字体颜色
      color: "#999"
    }
  },
  color: ['#FD1473',],
  legend: {
    data: [{
      name: '进校',
      icon: 'circle',
      color: 'red',
    },
    {
      name: '出校',
      icon: 'circle',
    }],
    textStyle: {
      color: '#fff',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: { show: false },
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0
      }
    },
    axisLabel: {
      interval: 0,
      rotate: 40
    },
    data: ['4月16', '4月17', '4月18', '4月19', '4月20']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0.4
      }
    },
      splitLine: {
        lineStyle: {
          opacity: 0.4
        }
      }
  },
  dataZoom: [
        {
          type: 'slider',
          show: true,
          xAxisIndex: [0],
          start: 1,
          end: 35,   // 数据源的长度
          textStyle: {
            color: '#fff',
          }
        },
        //下面这个属性是里面拖到  
        {
          type: 'inside',
          show: true,
          xAxisIndex: [0],
          start: 0,//默认为1  
          end: 50 // 数据源的长度
        },
      ],
  series: [
    {
      name: '体温异常：',
      smooth: true,
      type: 'line',
      lineStyle: {
        width: 4,
        color: '#FD1473',
      },
      areaStyle: {},
      data: [210, 300, 100, 300, 200]
    },
  ]
}

export {
  chinaMapOption,
  healthStatusOption,
  backSchoolOption,
  venuePopulationOption,
  dormitoryOption,
  schoolOption,
  temperatureOption
};