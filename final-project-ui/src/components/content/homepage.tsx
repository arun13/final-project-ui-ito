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
               <div  style="margin-top: 1%; margin-right: 5%;margin-left: 1% ; margin-bottom: 1%;">
                   <h3>Plant Monitoring System</h3>
                   <p>This is test page to record details of the project</p>
               </div>
                <div class="oj-flex oj-flex-item home-page" style="margin-top: 10%; margin-right: 5%;margin-left: 15% ; margin-bottom: 5%;">

                </div>
            </div>
        )
    }

}
