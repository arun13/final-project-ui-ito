import {h, Component, ComponentChild} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";

type Props = {

}

type State ={

}

@customElement('oj-home-page-component')
export class HomePageComponent extends Component<ExtendGlobalProps<Props>, State>{



    render(props:Readonly<Props>,state:Readonly<State>): ComponentChild{
        return(
            <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center">
               <div  style="margin-top: 1%; margin-right:12%;margin-left: 0%;">
                   <h3>Plant Monitoring System</h3>
               </div>
               <div style="margin-top: 1%; margin-right: 23%;margin-left: 9%;font-weight: bold;">
                   <p>This is an IoT powered intelligent water saving irrigation control, nutrition and soil management
                  Its a platform where you can monitor all parameters which are key to successful farming</p>
                </div>
                <div class="oj-flex oj-flex-item home-page" style="margin-top:2%; margin-right: 5%;margin-left: 25%;;">

                </div>
            </div>
        )
    }

}
