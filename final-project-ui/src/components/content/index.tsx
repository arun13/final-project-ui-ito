import { h, createContext,Component,ComponentChild } from "preact";
import {NavigationHolderComponent} from "./navigation-holder-component";
import {NavigationListComponent} from "./navigation-list-component";
import {useState} from "preact/hooks";

export const NavigationContext = createContext(null);

type Props ={

}
type State = {

}



export class Content extends Component<Props, State>{

  render() {
    const [chart, setChart] = useState("home");
    const [interval, setInterval] = useState("");

    return (
        <div class="oj-web-applayout-content">
          <div id="content" class="oj-offcanvas-outer-wrapper oj-sm-flex-direction-column oj-flex oj-sm-flex-wrap-nowrap">
            <div id="contentWrapper" class="oj-flex oj-sm-flex-wrap-nowrap oj-flex-item">
              <NavigationContext.Provider value={{chartVariable: [chart,setChart],intervalVariable: [interval,setInterval]}}>
                <div id="navigationlistcontainer" class="oj-contrast-marker oj-bg-neutral-170 oj-color-invert">
                  <NavigationListComponent/>
                </div>
                <div id="navigationholder" class="oj-web-applayout-page" style="width:70%">
                  <NavigationHolderComponent/>
                </div>
              </NavigationContext.Provider>
            </div>
          </div>
        </div>
    );
  }
}
