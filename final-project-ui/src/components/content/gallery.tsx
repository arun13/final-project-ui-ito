import {h, Component, ComponentChild} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";
import 'ojs/ojfilmstrip';
import 'ojs/ojactioncard';
import 'ojs/ojavatar';

type Props = {

}

type State ={

}

@customElement('oj-gallery-page-component')
export class GalleryComponent extends Component<ExtendGlobalProps<Props>, State>{

   avatarTemplate=()=>{

       return(
           <oj-action-card class="image-card">
               <div className="oj-sm-padding-4x oj-flex oj-sm-flex-direction-column">
                   <oj-avatar
                       class="oj-sm-margin-1x-bottom"
                       size="lg"
                       src="[[user.data.image]]"></oj-avatar>
                   <span className="oj-typography-body-md oj-text-color-primary">Dec 10,2022
                        </span>
               </div>
           </oj-action-card>
       )
   }



    render(props:Readonly<Props>,state:Readonly<State>): ComponentChild{
        return(
            <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center">
                <div class="oj-flex oj-flex-item">
                    <div id="filmstrip-action-cards-example">
                        <div className="oj-panel oj-sm-margin-4x">
                            <oj-film-strip
                                id="filmstrip"
                                aria-label="Users"
                                class="image-filmstrip"
                                arrow-placement="[[isSmallDisplay() ? 'overlay' : 'adjacent']]">
                                <template slot="user" render={this.avatarTemplate}/>

                            </oj-film-strip>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
