/*
 * @Author: your name
 * @Date: 2020-04-23 15:11:32
 * @LastEditTime: 2020-04-26 16:49:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /echart-demo/src/App.js
 */
import React from 'react';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/geo';
import 'echarts/lib/chart/map'; // 引入地图
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/effectScatter'
import 'echarts/map/js/china' // 引入中国地图
import classnames from 'classnames';

import './App.css';
import {
  chinaMapOption,
  healthStatusOption,
  backSchoolOption,
  venuePopulationOption,
  dormitoryOption,
  schoolOption,
  temperatureOption
} from './components/echartConfig'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.resizeBind();
    window.addEventListener('resize', this.resizeBind);
    this.initEcharts();
  }

  resizeBind = () => {
      var whdef = 100 / 1366;// 表示1920的设计图,使用100PX的默认值
      var wH = window.innerHeight;// 当前窗口的高度
      var wW = window.innerWidth < 1366 ? 1366 : window.innerWidth;// 当前窗口的宽度
      var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName("html")[0].style.fontSize =  rem + "px";
  }

  initEcharts = () => {
    // 初始化中国地图echarts实例
    const chinaChart = echarts.init(document.getElementById("china_map"));
    // healthStatus
    const healthStatusChart = echarts.init(document.getElementById("healthStatus"));
    // backSchoolOption
    const backSchoolChart = echarts.init(document.getElementById("backSchool"));
    //dormitoryOption
    const dormitoryChart = echarts.init(document.getElementById("dormitory"));
    // schoolOption
    const schoolChart = echarts.init(document.getElementById("school"));
    // temperatureOption
    const temperatureChart = echarts.init(document.getElementById("temperature"));
    // venuePopulationOption
    const venuePopulationChart = echarts.init(document.getElementById("venuePopulation"));

    // 使用指定的配置项和数据显示数据
    chinaChart.setOption(chinaMapOption);
    healthStatusChart.setOption(healthStatusOption);
    backSchoolChart.setOption(backSchoolOption);
    dormitoryChart.setOption(dormitoryOption);
    schoolChart.setOption(schoolOption);
    temperatureChart.setOption(temperatureOption);
    venuePopulationChart.setOption(venuePopulationOption);
  }


  render() {
    return (
      <div className="container">
        <div className="header">
          <div className='headerLeft'>
            <span className='headerTime'>数据获取时间：2020-4-22 14:36</span>
            <span className='headerLeftText'>数据每2小时更新一次</span>
          </div>
          <div className='headerCenter'>
            <div className='leftIcon'>
              <span className='leftIcon-l' />
              <span className='leftIcon-s' />
            </div>
            <span className='orgName'>河南工业大学健康数据大屏</span>
            <div className='rightIcon'>
              <span className='rightIcon-l' />
              <span className='rightIcon-s' />
            </div>
          </div>
          <div className='headerRight'>
            <span className='headerTime'>选择组织机构</span>
            <img alt='导出' class="exportImage" src={require('./images/export.png')} />
            <span className='headerExport'>导出报告</span>
          </div>
        </div>
        <div className='content'>
          <div className='leftBox'>
            <div className={classnames('innerBox', 'healthStatusBox')}>
              <span className='chartTitle'>全校学生健康状态</span>
              <div id='healthStatus' style={{ width: '100%', height: '1.5rem', margin: '0 auto' }}></div>
            </div>
            <div className={classnames('innerBox', 'backSchoolBox')}>
              <span className='chartTitle'>各院系返校状况</span>
              <div id='backSchool' style={{ width: '100%', height: '2rem' }}></div>
            </div>
            <div className={classnames('innerBox', 'venuePopulationBox')}>
              <span className='chartTitle'>各场馆人数分布热力图</span>
              <div id='venuePopulation' style={{ width: '100%', height: '1.5rem' }}></div>
            </div>
          </div>
          <div className='centerBox'>
            <div className='centerBox-header'>
              <div>
                <div>
                  <span>全校人数 25,743</span>
                </div>
                <div>
                  <span>打卡正常人数 25,743</span>
                </div>
                <div>
                  <span>新增打卡正常人数 743</span>
                  <span>  较昨日 +43</span>
                </div>
              </div>
              <div>
                <div>
                  <span>返校人数 25,743</span>
                </div>
                <div>
                  <span>打卡异常人数 25,743</span>
                </div>
                <div>
                  <span>新增打卡异常人数 743</span>
                  <span>  较昨日 -28</span>
                </div>
              </div>
            </div>
            <div id="china_map" style={{ width: '5.98rem', height: '5rem', zIndex: 1, margin: '0 auto' }}></div>
            <span className='bottomText'>今日「健康打卡」各省份学生人数分布</span>
            <div className='china_map_background' />
          </div>
          <div className='rightBox'>
            <div className={classnames('innerBox', 'dormitoryBox')}>
              <span className='chartTitle'>宿舍出入情况</span>
              <div id='dormitory' style={{ width: '100%', height: '0.8rem' }}></div>
            </div>
            <div className={classnames('innerBox', 'schoolBox')}>
              <span className='chartTitle'>校园进出情况</span>
              <div id='school' style={{ width: '100%', height: '2.1rem' }}></div>
            </div>
            <div className={classnames('innerBox', 'temperatureBox')}>
              <span className='chartTitle'>体温异常曲线图</span>
              <div id='temperature' style={{ width: '100%', height: '2.1rem' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
