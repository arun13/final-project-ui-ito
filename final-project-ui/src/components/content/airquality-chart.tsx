import {h, Component, ComponentChild, ComponentProps} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";
import {useContext, useEffect} from "preact/hooks";
import {NavigationContext} from "./index";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import * as humidityData from "text!./humidity.json";
import "ojs/ojchart"
import {ojChart} from "ojs/ojchart";

interface SensorData{
    READING_ID: number;
    DATE: string;
    ENV_SENSOR_PRESSURE: string;
    IS_PUMP_ON: boolean;
    ENV_SENSOR_HUMIDITY: string;
    ENV_SENSOR_TEMP: string;
    SOIL_SENSOR_TEMP: string;
    SOIL_SENSOR_MOIST: string;
    ENV_SENSOR_GAS: string;
    DATE_TIMESTAMP: string;
    ENV_SENSOR_ALTITUDE: string;

}

type Props = {
    dateString: string;
  //  chartType: string;
}

type State ={
   /* graphDataArrayProvider : ArrayDataProvider<SensorData["READING_ID"], SensorData>;
    graphDataArray: Array<SensorData>;*/
    dataProvider: ArrayDataProvider<any, any>
}

@customElement('oj-airquality-chart-component')
export class AirQualityChartComponent extends Component<ExtendGlobalProps<Props>, State>{

/*    dataProvider = new ArrayDataProvider(JSON.parse(humidityData), {
        keyAttributes: ["series", "month"],
    });*/

    shouldComponentUpdate(nextProps: Readonly<ExtendGlobalProps<Props>>, nextState: Readonly<State>, nextContext: any): boolean {
        if(this.props.dateString != nextProps.dateString){
            this.getSensorData(nextProps.dateString);
        }
        return true;
    }
///async function start

    getSensorDataAsync= async () => {

        console.log("Starting Rest API call using Async Function to pull live data..",this.props.dateString)
        fetch("https://93y9xyz2w2.execute-api.us-west-2.amazonaws.com/v3/evnplantmonitordataapi",
            {
                mode: "cors",
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    DATE: this.props.dateString
                })
            })
            .then((response)=>response.json())
            .then((data)=>{

                let graphDataArray = new Array<SensorData>();
                graphDataArray = data["body"];
                console.log(graphDataArray);
                const humidityData = [];
                graphDataArray.forEach(d=>
                    {
                        // console.log(d);
                        humidityData.push({
                            id: d.READING_ID,
                            series: "Air Quality",
                            isPumpOn: d.IS_PUMP_ON,
                            time: d.DATE_TIMESTAMP,
                            value:d.ENV_SENSOR_GAS,
                        });
                    }
                )
                // console.log(humidityData);
                this.setState({
                    dataProvider: new ArrayDataProvider(humidityData, {
                        keyAttributes: ["series", "time"],
                    })
                })
            })
            .catch((err)=>{
                console.log(err.message);
            })
    }

///async function end




    getSensorData=(dateString) => {

        console.log("Starting Rest API call..",dateString)
        fetch("https://93y9xyz2w2.execute-api.us-west-2.amazonaws.com/v3/evnplantmonitordataapi",
            {
                mode: "cors",
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    DATE: dateString
                })
            })
            .then((response)=>response.json())
            .then((data)=>{

                let graphDataArray = new Array<SensorData>();
                graphDataArray = data["body"];
                console.log(graphDataArray);
                const humidityData = [];
                graphDataArray.forEach(d=>
                    {
                       // console.log(d);
                        humidityData.push({
                            id: d.READING_ID,
                            series: "Air Quality",
                            isPumpOn: d.IS_PUMP_ON,
                            time: d.DATE_TIMESTAMP,
                            value:d.ENV_SENSOR_GAS,
                        });
                    }
                )
               // console.log(humidityData);
                this.setState({
                    dataProvider: new ArrayDataProvider(humidityData, {
                        keyAttributes: ["series", "time"],
                    })
                })
            })
            .catch((err)=>{
                console.log(err.message);
            })
    }
/*
    private getData = () => {
        const data = [];
        for (let i = 0; i < this.numSeries; i++) {
            for (let j = 0; j < this.numGroups; j++) {
                const id = `${i}-${j}`;
                data.push({
                    id: id,
                    series: `Series ${i + 1}`,
                    month: this.groupNames[j],
                    value: this.getValue(id),
                });
            }
        }
        return data;
    };*/

    render(props:Readonly<Props>,state:Readonly<State>): ComponentChild{
        const {chartVariable,intervalVariable} = useContext(NavigationContext);
        const [chart,setChart] = chartVariable;
        const [interval,setInterval] = intervalVariable;

/*        let intervalHandle=null

        if(chart=="livechart") {
            intervalHandle = setInterval(this.getSensorDataAsync, 3000);
        }

        console.log("Chart ->"+chart);
        if(intervalHandle!=null && chart!="livechart") {
            console.log("inside if loop...");
            clearInterval(intervalHandle);
        }*/

        const templateNavigation = (item) =>{
            let groupIdArray = new Array<string>();
            groupIdArray.push(item.data.time);
            console.log(item)
            console.log(groupIdArray);
            if(item.data.isPumpOn){
                return(
                    <oj-chart-item
                        value={item.data.value}
                        groupId={groupIdArray}
                        label="Pump is On"
                        labelStyle={{"fontSize":"10px"}}
                        source="../styles/images/watered_pump_on.png"
                        seriesId={item.data.series}
                        markerDisplayed = "on"
                        markerShape="square"
                        markerSize={30}>
                    </oj-chart-item>
                    /*            <oj-chart-series
                                </oj-chart-series>*/
                );}
            else{
                return(
                    <oj-chart-item
                        value={item.data.value}
                        groupId={groupIdArray}
                        markerDisplayed = "off"
                        markerShape="square"
                        seriesId={item.data.series}>
                    </oj-chart-item>);
            }
        }

        useEffect(()=>{
            this.getSensorData(this.props.dateString)
        },[])


        return(
            <div>
                <oj-chart
                    id="lineChart"
                    type="line"
                    orientation="vertical"
                    data={this.state.dataProvider}
                    animation-on-display="auto"
                    animation-on-data-change="auto"
                    yAxis={{"title":"Ohms"}}
                    xAxis={{"title":"Time Stamps"}}
                    styleDefaults={{"lineType":"centeredStepped","markerDisplayed":"on"}}>
                    <template slot="itemTemplate" render={templateNavigation}/>
                </oj-chart>
            </div>
        )
    }

}
