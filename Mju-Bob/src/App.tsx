
import "./App.css";
//import Today from "./tabs/Today";
import Week from "./tabs/Week";
//import More from "./tabs/More";
import NoticeModal from "./utils/NoticeModal";
import { useState, useEffect } from "react";
import { Tab } from "@toss/tds-mobile";
import styled from "styled-components";
import {supabase} from './utils/SupabaseClient';
import {Weekly_Data } from './utils/Type'

const App =() => {
    const today = new Date()
    const get_day = ((today.getDay() == 0 || today.getDay() == 6) ? 1 : today.getDay()-1);
    const [selectedResId, setSelectedResId] = useState<string>("1");
    const [selectedDay, setSelectedDay] = useState<number>(get_day);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [isSliding, setIsSliding] = useState<boolean>(false);
    const [slideLocate, setSlideLocate] = useState<number>(2);
    const [WeekData, setWeekData] = useState<Weekly_Data|null>(null);
    const [OpenModal, setOpenModal] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchMenu = async () => {
            try {
            //setIsLoading(true);
                const { data, error: supabaseError } = await supabase
                .from('Res_Info')
                .select('*')
            // 보통 가장 최근에 등록된 식단표 1개만 가져오므로 예시 추가
                .order('created_at', { ascending: false })
                .limit(1);
                if (supabaseError) throw supabaseError;
                if (data && data.length > 0) {
                    const jsonBData = data[0].Res_Menu as Weekly_Data;
                    console.log(jsonBData);
                    setWeekData(jsonBData);
                }
                console.log("weekdata세팅함");
        } catch (supabaseError:unknown) {
            console.error('여기 에러남', supabaseError);
            } finally {
        //setIsLoading(false);
            }
        };
        fetchMenu();
    }, []);  
    const getMoveWay = (before:number,after:number)=>{
        if(before<after) setSlideLocate(-1);
        else if(before>after) setSlideLocate(1);
        else setSlideLocate(0)
    }
    const ResMove = (after:string) =>{
        getMoveWay(parseInt(selectedResId), parseInt(after));
        setSelectedResId(after);
        triggerSlide();
    }
    const WeekMove = (after:number) => {
        getMoveWay(selectedDay, after);
        setSelectedDay(after);
        triggerSlide();
    } 
    const triggerSlide = () =>{
            setIsSliding(true);
            setTimeout(() => {
                setIsSliding(false);
                setSlideLocate(0);
            }, 250);
    }
    const tabs = [
        /*{ name: "오늘의 메뉴", component: <Today
            Res_Id = {selectedResId} 
            isSliding={isSliding} 
            slideLocate={slideLocate}
            ResMove={ResMove}/> },*/

        { name: "이번주 메뉴", component: <Week 
            Res_Id = {selectedResId}
            selectedDay={selectedDay}
            isSliding={isSliding}
            slideLocate={slideLocate}
            WeekData = {WeekData}
            WeekMove={WeekMove}
            ResMove={ResMove}
            OpenModal = {setOpenModal}
            /> },

        //{ name: "더보기", component: <More /> },
    ];

    return (
        <> 
        <div className="app-container">
            <div className="content-wrapper">
                <NoticeModal OpenModal={OpenModal} setOpenModal={setOpenModal}/>
                <Slider
                    style={{
                        transform: `translateX(-${activeTab * 100}vw)`,
                        transition: "transform 0.3s ease"
                    }}
                >
                {tabs.map((tab) => (
                    <div className="page-container" key={tab.name}>
                        {tab.component}
                    </div>
                ))}
                </Slider>
            </div>     
        </div>
         <NavigationBar>
               <Tab size="small" onChange={(index)=> setActiveTab(index)}>
                    {/*<Tab.Item selected={activeTab === 0}>오늘의 메뉴</Tab.Item>*/}
                    <Tab.Item selected={activeTab === 1}>이번주 메뉴</Tab.Item>
                    {/*<Tab.Item selected={activeTab === 2}>더보기</Tab.Item> */}
                </Tab>
            </NavigationBar>
        </>
    );
}
const NavigationBar = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100vw;
`;
const Slider = styled.div`
    display: flex;
    width: 300vw;
`;
export default App;