import {h ,Component} from 'preact';
import {customElement, ExtendGlobalProps} from "ojs/ojvcomponent";
import {useContext, useState} from "preact/hooks";
import {NavigationContext} from "./index";
import "ojs/ojnavigationlist";
import * as treeNavigationData from "text!./navigation-list.json";
import ArrayTreeDataProvider = require("ojs/ojarraytreedataprovider");

type Props = {

}

interface TreeNavigationItem{
    name: string;
    id: string;
    icons: string;

}

const data: ArrayTreeDataProvider<TreeNavigationItem["id"],TreeNavigationItem> =
    new ArrayTreeDataProvider(JSON.parse(treeNavigationData),{keyAttributes:"id"})

@customElement('oj-navigation-list-component')
export class NavigationListComponent extends Component<ExtendGlobalProps<Props>>{



    render(){
        const {chartVariable} = useContext(NavigationContext);
        const [chart,setChart] = chartVariable;
        const [selectedNavigation , setSelectedNavigation] = useState("home");
        const onSelectionChange = (event) => {
            console.log(event.detail.value);
            setSelectedNavigation(event.detail.value);

            setChart(event.detail.value);
        }

        const templateNavigation = (item) =>{
            return(
            <li>
                <a href="#">
                   <span class={"oj-navigationlist-item-icon " +item.data.icon}></span>
                   <span class="oj-navigationlist-item-label">{item.data.name}</span>
                </a>
            </li>
            );
        }

        return(
            <div class="oj-sm-16 oj-md-16 oj-flex-item oj-sm-padding-2x-horizontal">
                <oj-navigation-list
                    selection={selectedNavigation}
                    display="all"
                    aria-label="Choose a navigation item"
                    drill-mode="none"
                    onselectionChanged={(event)=> onSelectionChange(event)}
                    data={data}>
                    <template slot="itemTemplate" render={templateNavigation}/>
                </oj-navigation-list>
            </div>
        )
    }

}
