import {h, Component, ComponentChild} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";
import 'ojs/ojfilmstrip';
import 'ojs/ojactioncard';
import 'ojs/ojavatar';
import * as plantProgress from "text!./plants_progress.json";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
type Props = {

}

type State ={

}
interface Images{
    id: string;
    name: string;
    title: string;
    image: string;

}


const imagesArray: Array<Images> = JSON.parse(plantProgress);

@customElement('oj-gallery-page-component')
export class GalleryComponent extends Component<ExtendGlobalProps<Props>, State>{

   avatarTemplate=(image)=>{
        console.log("Item ",image);
       return(
           <oj-action-card class="image-card">
               <div class="oj-sm-padding-4x oj-flex oj-sm-flex-direction-column">
                   <oj-avatar
                       class="oj-sm-margin-1x-bottom"
                       size="lg"
                       src="../styles/images/plants/plant_image2.jpeg"></oj-avatar>
                       <span class="oj-typography-body-md oj-text-color-primary">Dec 10,2022</span>
               </div>
           </oj-action-card>
       )
   }



    render(props:Readonly<Props>,state:Readonly<State>): ComponentChild{
        console.log(imagesArray);
        return(
            <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center">
                <div>
                    <h4>Plant Image Gallery</h4>
                </div>
                <div class="oj-flex oj-flex-item">
                    <div id="filmstrip-action-cards">
                        <div class="oj-panel oj-sm-margin-4x">
                            <oj-film-strip
                                id="filmstrip"
                                aria-label="Users"
                                class="image-filmstrip"
                                arrowPlacement="overlay">
                                {imagesArray.map(function (image,i) {
                                    console.log("New "+image);
                                    return (<oj-action-card class="image-card">
                                        <div class="oj-lg-padding-4x oj-flex oj-sm-flex-direction-column">
                                            <oj-avatar
                                                class="oj-xl-margin-1x-bottom"
                                                size="2xl"
                                                src={image.image}></oj-avatar>
                                            <span class="oj-typography-body-md oj-text-color-primary">{image.name}</span>
                                        </div>
                                    </oj-action-card>)
                                })
                                }
                            </oj-film-strip>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
