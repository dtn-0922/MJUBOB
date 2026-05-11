
import "./App.css";
//import Today from "./Today";
import Week from "./Week";
//import More from "./More";
//import { useState } from "react";
//import { Tab } from "@toss/tds-mobile";
function App() {
    //const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = [
        //{ name: "오늘의 메뉴", component: <Today /> },
        { name: "이번주 메뉴", component: <Week /> },
        //{ name: "더보기", component: <More /> },
    ];
    return (
        <>
        <div className="app-container">
            <div className="content-wrapper">
                <div className="slider" 
                    /*style={{
                        transform: `translateX(-${activeTab * 100}vw)`,
                        transition: "transform 0.3s ease"
                    }}*/
                >
                {tabs.map((tab) => (
                    <div className="page-container" key={tab.name}>
                        {tab.component}
                    </div>
                ))}
                </div>
            </div>     
        </div>
         {/*<div className="navigation-bar">
               <Tab size="small" onChange={(index)=> setActiveTab(index)}>
                    <Tab.Item selected={activeTab === 0}>오늘의 메뉴</Tab.Item>
                    <Tab.Item selected={activeTab === 1}>이번주 메뉴</Tab.Item>
                    <Tab.Item selected={activeTab === 2}>더보기</Tab.Item> 
                </Tab>
            </div>*/}
        </>
    );
}

export default App;