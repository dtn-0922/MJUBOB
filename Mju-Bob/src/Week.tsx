    import './Week.css';
    import {MOCK_API_RESPONSE} from '../mockData';
    import { Top, SegmentedControl, Tab, Menu } from '@toss/tds-mobile';
    import { useState } from 'react';
    function Week() {
        const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>(MOCK_API_RESPONSE.restaurants[0].id);
        const [selectedDay, setSelectedDay] = useState<number>(0);
        const [isSliding, setIsSliding] = useState<boolean>(false);
        const [slideLocate, setSlideLocate] = useState<number>(1);
        const currentMenus = MOCK_API_RESPONSE.restaurants[parseInt(selectedRestaurantId)-1].weekly_menu[selectedDay];
        const getMoveWay = (before:number, after:number) => {
            if(before<after) setSlideLocate(-1);
            else if(before>after) setSlideLocate(1);
            else setSlideLocate(0)
        }
        const WeekMove = (after:number) => {
            getMoveWay(selectedDay, after);
            setSelectedDay(after);
            triggerSlide();
        } 
        const ResMove = (after:string) => {
            getMoveWay(parseInt(selectedRestaurantId), parseInt(after));
            setSelectedRestaurantId(after);
            triggerSlide();
        }
        const triggerSlide = () => {
            setIsSliding(true);
            setTimeout(() => {
                setIsSliding(false);
                setSlideLocate(0);
            }, 250);
        }
        
        const tabs = [
            { name: "slide1", component : <Menu.Dropdown header={<Menu.Header>{MOCK_API_RESPONSE.date[selectedDay]}</Menu.Header>}>
                                    {currentMenus.map((menu, index)=>(
                                        <Menu.DropdownItem><div key ={index}>{menu}</div></Menu.DropdownItem>
                                    ))}
                                    <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                                    </Menu.Dropdown>},
            { name: "slide2", component : <Menu.Dropdown header={<Menu.Header>{MOCK_API_RESPONSE.date[selectedDay]}</Menu.Header>}>
                                    {currentMenus.map((menu, index)=>(
                                        <Menu.DropdownItem><div key ={index}>{menu}</div></Menu.DropdownItem>
                                    ))}
                                    <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                                    </Menu.Dropdown>},
            { name: "slide3", component : <Menu.Dropdown header={<Menu.Header>{MOCK_API_RESPONSE.date[selectedDay]}</Menu.Header>}>
                                    {currentMenus.map((menu, index)=>(
                                        <Menu.DropdownItem><div key ={index}>{menu}</div></Menu.DropdownItem>
                                    ))}
                                    <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                                    </Menu.Dropdown>}
        ];
        return (
            <>
            <div className='TopArea'>
                <Top title={<Top.TitleParagraph size = {22}>이번주 메뉴</Top.TitleParagraph>} />
                <div className='WeekDay'>
                    <Tab size = "small" onChange={(index) => WeekMove(index)}>
                        <Tab.Item selected={selectedDay === 0}>월</Tab.Item>
                        <Tab.Item selected={selectedDay === 1}>화</Tab.Item>
                        <Tab.Item selected={selectedDay === 2}>수</Tab.Item>
                        <Tab.Item selected={selectedDay === 3}>목</Tab.Item>
                        <Tab.Item selected={selectedDay === 4}>금</Tab.Item>
                        <Tab.Item selected={selectedDay === 5}>토</Tab.Item>
                        <Tab.Item selected={selectedDay === 6}>일</Tab.Item>
                    </Tab>
                </div>
                <div className='restaurant'>
                    <SegmentedControl size='small' value={selectedRestaurantId} onChange={(value)=>ResMove(value)}>
                    <SegmentedControl.Item value="1"><div className='SegmentText'>학생회관</div></SegmentedControl.Item>
                    <SegmentedControl.Item value="2"><div className='SegmentText'>명진당</div></SegmentedControl.Item>
                    <SegmentedControl.Item value="3"><div className='SegmentText'>방목관</div></SegmentedControl.Item>
                    <SegmentedControl.Item value="4"><div className='SegmentText'>복지동</div></SegmentedControl.Item>
                    <SegmentedControl.Item value="5"><div className='SegmentText'>함박관</div></SegmentedControl.Item>
                    </SegmentedControl>
                </div>
            </div>
            <div className='MenuContainer'>
                <div className='MenuSlider' style={{
                    transform: isSliding ? `translateX(${slideLocate * 100}vw)` : 'translateX(0)',
                    transition: isSliding ? 'transform 0.3s ease' : 'none',
                }}>
                    {tabs.map((tab) => (
                        <div className="MenuSlideOutside" key={tab.name}>
                            {tab.component}
                        </div>
                    ))}
                </div>
            </div>
            </>
        )
    }
                
    export default Week;