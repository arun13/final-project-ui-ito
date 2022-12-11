import {h, Component, ComponentChild} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";
import {useContext } from "preact/hooks";
import {NavigationContext} from "./index";
import {HumidityChartComponent} from "./humidity-chart";
import {HomePageComponent} from "./homepage";
import {AirQualityChartComponent} from "./airquality-chart";
import "ojs/ojbutton";
import {AltitudeChartComponent} from "./altitude";
import {EnvTemperatureChartComponent} from "./temperature-chart";
import {SoilMoistureChartComponent} from "./soil-moisture";
import {SoilTemperatureChartComponent} from "./soil-sensor-temperature";
import {EnvironmentPressureChartComponent} from "./environment-pressure";
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'ojs/ojdatetimepicker';
import 'ojs/ojlabel';
import 'ojs/ojformlayout';

type Props = {

}
type State ={
   dataType: string;
   isAirQualityButton: boolean;
   isHumidityButton: boolean;
   isTemperatureButton: boolean;
   isAltitudeButton: boolean;
   isPressureButton: boolean;
   isSoilTemperatureButton: boolean;
   isSoilMoistureButton: boolean;
   selectedDate: string;
   selectedDateProp: string;
   isDateSelected: boolean;
}



@customElement('oj-navigation-holder-component')
export class NavigationHolderComponent extends Component<ExtendGlobalProps<Props>, State>{

    constructor() {
        super();
        this.setState({
            isAirQualityButton: true,
            isHumidityButton: false,
            isTemperatureButton: false,
            isAltitudeButton: false,
            isPressureButton: false,
            isSoilTemperatureButton: false,
            isSoilMoistureButton: false,
            isDateSelected: false
        })
    }

/*    resetState=()=>{
        this.setState({
            isAirQualityButton: true,
            isHumidityButton: false,
            isTemperatureButton: false,
            isAltitudeButton: false,
            isPressureButton: false,
            isSoilTemperatureButton: false,
            isSoilMoistureButton: false,
            isDateSelected: false
        })
    }*/

    selectButton = (event,dataType)=>{
       console.log(dataType);
        switch (dataType){
            case "airquality":
                this.setState({
                    isAirQualityButton: true,
                    isHumidityButton: false,
                    isTemperatureButton: false,
                    isAltitudeButton: false,
                    isPressureButton: false,
                    isSoilTemperatureButton: false,
                    isSoilMoistureButton: false
                })
                break;
            case "temperature":
                this.setState({
                    isAirQualityButton: false,
                    isHumidityButton: false,
                    isTemperatureButton: true,
                    isAltitudeButton: false,
                    isPressureButton: false,
                    isSoilTemperatureButton: false,
                    isSoilMoistureButton: false
                })
                break;
            case "altitude":
                this.setState({
                    isAirQualityButton: false,
                    isHumidityButton: false,
                    isTemperatureButton: false,
                    isAltitudeButton: true,
                    isPressureButton: false,
                    isSoilTemperatureButton: false,
                    isSoilMoistureButton: false
                })
                break;
            case "humidity":
                this.setState({
                    isAirQualityButton: false,
                    isHumidityButton: true,
                    isTemperatureButton: false,
                    isAltitudeButton: false,
                    isPressureButton: false,
                    isSoilTemperatureButton: false,
                    isSoilMoistureButton: false
                })
                break;
            case "pressure":
                this.setState({
                    isAirQualityButton: false,
                    isHumidityButton: false,
                    isTemperatureButton: false,
                    isAltitudeButton: false,
                    isPressureButton: true,
                    isSoilTemperatureButton: false,
                    isSoilMoistureButton: false
                })
                break;
            case "soil_temperature":
                this.setState({
                    isAirQualityButton: false,
                    isHumidityButton: false,
                    isTemperatureButton: false,
                    isAltitudeButton: false,
                    isPressureButton: false,
                    isSoilTemperatureButton: true,
                    isSoilMoistureButton: false
                })
                break;
            case "soil_moisture":
                this.setState({
                    isAirQualityButton: false,
                    isHumidityButton: false,
                    isTemperatureButton: false,
                    isAltitudeButton: false,
                    isPressureButton: false,
                    isSoilTemperatureButton: false,
                    isSoilMoistureButton: true
                })
                break;
             }
        }
    getDate=()=>{
        var today = new Date();
        var dd = String(today. getDate()). padStart(2, '0');
        var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
        var yyyy = today. getFullYear();
        var today_string = dd + '/' + mm + '/' + yyyy;
        return today_string;
    }
    onDateValueChanged=(event)=>{
        this.setState({
            selectedDate:event.detail.value,
            isDateSelected: true
        })
        const date_event_string = event.detail.value;
        console.log("datepicker event ",event.detail.value);
        var offset = new Date().getTimezoneOffset();
        var timeString=24-offset/60;
        console.log("Offset: "+timeString);
        var selected_date_value = new Date(event.detail.value+'T'+timeString+':00:00');
        console.log("date picker after converted "+selected_date_value)

        var dd = String(selected_date_value.getDate()). padStart(2, '0');
        var mm = String(selected_date_value. getMonth() + 1). padStart(2, '0'); //January is 0!
        var yyyy = selected_date_value. getFullYear();
        var selected_date_value_string = dd + '/' + mm + '/' + yyyy;
        this.setState({
            selectedDateProp: selected_date_value_string
        })
    }

    pageContent = (page) =>{

        switch (page){
            case "livechart":
             //   this.resetState();
                console.log(this.getDate());
                return (
               <div>
                <div style="padding-left:25%;padding-bottom:1%;padding-top:3%;">
                    <oj-button id="air_quality" onClick={(event)=>this.selectButton(event,"airquality")}>
                        Air Quality
                    </oj-button>
                    <oj-button id="temperature" onClick={(event)=>this.selectButton(event,"temperature")}>
                        Temperature
                    </oj-button>
                    <oj-button id="altitude" onClick={(event)=>this.selectButton(event,"altitude")}>
                        Altitude
                    </oj-button>
                    <oj-button id="humidity" onClick={(event)=>this.selectButton(event,"humidity")}>
                        Humidity
                    </oj-button>
                    <oj-button id="pressure"  onClick={(event)=>this.selectButton(event,"pressure")}>
                        Pressure
                    </oj-button>
                    <oj-button id="soil_temperature" onClick={(event)=>this.selectButton(event,"soil_temperature")}>
                        Soil Temperature
                    </oj-button>
                    <oj-button id="soil_moisture" onClick={(event)=>this.selectButton(event,"soil_moisture")}>
                        Soil Moisture
                    </oj-button>
                </div>
                    <div style="padding-left:10%;">
                        {this.state.isAirQualityButton &&  <AirQualityChartComponent dateString={this.getDate()}/> }
                        {this.state.isHumidityButton &&  <HumidityChartComponent dateString={this.getDate()}/> }
                        {this.state.isAltitudeButton &&  <AltitudeChartComponent dateString={this.getDate()}/> }
                        {this.state.isPressureButton &&  <EnvironmentPressureChartComponent dateString={this.getDate()}/> }
                        {this.state.isTemperatureButton &&  <EnvTemperatureChartComponent dateString={this.getDate()}/> }
                        {this.state.isSoilTemperatureButton &&  <SoilTemperatureChartComponent dateString={this.getDate()}/> }
                        {this.state.isSoilMoistureButton &&  <SoilMoistureChartComponent dateString={this.getDate()}/> }
                    </div>
                </div>

                        );
                break;
            case "dailychart":
              //  this.resetState();
                return (
                    <div>
                        <div style="padding-left:40%;padding-bottom:1%;padding-top:3%;width:30vw">
                            <oj-form-layout max-columns="3" direction="row" class="oj-sm-padding-2x-bottom">
                                <oj-input-date
                                    value={this.state.selectedDate}
                                    label-hint="Select a Date"
                                    onvalueChanged={(event)=>this.onDateValueChanged(event)}
                                    autocomplete="off">
                                </oj-input-date>
                            </oj-form-layout>
                        </div>
                        {this.state.isDateSelected &&
                          <div>
                            <div style="padding-left:25%;padding-bottom:3%;padding-top:0%;">
                                <oj-button id="air_quality" onClick={(event) => this.selectButton(event, "airquality")}>
                                    Air Quality
                                </oj-button>
                                <oj-button id="temperature"
                                           onClick={(event) => this.selectButton(event, "temperature")}>
                                    Temperature
                                </oj-button>
                                <oj-button id="altitude" onClick={(event) => this.selectButton(event, "altitude")}>
                                    Altitude
                                </oj-button>
                                <oj-button id="humidity" onClick={(event) => this.selectButton(event, "humidity")}>
                                    Humidity
                                </oj-button>
                                <oj-button id="pressure" onClick={(event) => this.selectButton(event, "pressure")}>
                                    Pressure
                                </oj-button>
                                <oj-button id="soil_temperature"
                                           onClick={(event) => this.selectButton(event, "soil_temperature")}>
                                    Soil Temperature
                                </oj-button>
                                <oj-button id="soil_moisture"
                                           onClick={(event) => this.selectButton(event, "soil_moisture")}>
                                    Soil Moisture
                                </oj-button>
                            </div>
                            <div style="padding-left:10%;">
                                {this.state.isAirQualityButton &&  <AirQualityChartComponent dateString={this.state.selectedDateProp}/>}
                                {this.state.isHumidityButton &&  <HumidityChartComponent dateString={this.state.selectedDateProp}/>}
                                {this.state.isAltitudeButton &&  <AltitudeChartComponent dateString={this.state.selectedDateProp}/>}
                                {this.state.isPressureButton &&  <EnvironmentPressureChartComponent dateString={this.state.selectedDateProp}/>}
                                {this.state.isTemperatureButton &&  <EnvTemperatureChartComponent dateString={this.state.selectedDateProp}/>}
                                {this.state.isSoilTemperatureButton &&  <SoilTemperatureChartComponent dateString={this.state.selectedDateProp}/>}
                                {this.state.isSoilMoistureButton &&  <SoilMoistureChartComponent dateString={this.state.selectedDateProp}/>}
                            </div>
                          </div>
                        }
                    </div>
                );
                break;
            default:
                return (
                    <div style="margin-right: 20%;margin-left: 5% ;">
                    <HomePageComponent/>
                    </div>
                );
        }

    }



    render(props:Readonly<Props>,state:Readonly<State>): ComponentChild{
        const {chartVariable} = useContext(NavigationContext);
        const [chart,setChart] = chartVariable;

       // this.resetState();
        return(
            <div>
                {this.pageContent(chart)}
            </div>
        )
    }

}
