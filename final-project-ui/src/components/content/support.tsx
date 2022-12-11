import {h, Component, ComponentChild} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";
import 'ojs/ojfilmstrip';
import 'ojs/ojactioncard';
import 'ojs/ojavatar';

type Props = {

}

type State ={

}

@customElement('oj-support-page-component')
export class SupportComponent extends Component<ExtendGlobalProps<Props>, State>{

    render(props:Readonly<Props>,state:Readonly<State>): ComponentChild{
        return(
            <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center">
                <div class="oj-flex oj-flex-item">
                   <div style="margin-top:10%;">
                       <h5>Please contact on below email ids for any issue:</h5>
                       <p style="margin-left:7%;">1. arunt2@illinois.edu</p>
                       <p style="margin-left:7%;">2. amartya4@illinois.edu</p>
                       <p style="margin-left:7%;">3. ganesan8@illinois.edu</p>
                       <p style="margin-left:7%;">4. chetand3@illinois.edu</p>
                   </div>
                </div>
            </div>
        )
    }

}
