    import {MOCK_API_RESPONSE} from '../mockData';
    import { Top, SegmentedControl, Tab} from '@toss/tds-mobile';
    import styled from 'styled-components';
    import Slide from '../slider/slide'
    import {Weekly_Data} from '../utils/Type'
    interface WeekProps{
        Res_Id:string;
        selectedDay:number;
        isSliding:boolean;
        slideLocate:number;
        WeekData:Weekly_Data|null;
        ResMove:(after:string)=>void;
        WeekMove:(after:number)=>void;
    }
    const Week = ({Res_Id,selectedDay, isSliding,slideLocate,WeekData,ResMove, WeekMove}:WeekProps )=> {
        const currentMenus = (WeekData==null? ['error'] : WeekData.restaurants[parseInt(Res_Id)-1].weekly_menu[selectedDay])
        return (
            <>
            <TopArea>
                <Top title={<Top.TitleParagraph size = {22}>이번주 중식
                </Top.TitleParagraph>} />
                <WeekDay>
                    <Tab size = "small" onChange={(index) => WeekMove(index)}>
                        <Tab.Item selected={selectedDay === 0}>월</Tab.Item>
                        <Tab.Item selected={selectedDay === 1}>화</Tab.Item>
                        <Tab.Item selected={selectedDay === 2}>수</Tab.Item>
                        <Tab.Item selected={selectedDay === 3}>목</Tab.Item>
                        <Tab.Item selected={selectedDay === 4}>금</Tab.Item>
                    </Tab>
                </WeekDay>
                <Restaurant>
                    <SegmentedControl size='small' value={Res_Id} onChange={(value)=>ResMove(value)}>
                    <SegmentedControl.Item value="1"><SegmentText>학생회관</SegmentText></SegmentedControl.Item>
                    <SegmentedControl.Item value="2"><SegmentText>명진당</SegmentText></SegmentedControl.Item>
                    <SegmentedControl.Item value="3"><SegmentText>방목관</SegmentText></SegmentedControl.Item>
                    <SegmentedControl.Item value="4"><SegmentText>복지동</SegmentText></SegmentedControl.Item>
                    <SegmentedControl.Item value="5"><SegmentText>함박관</SegmentText></SegmentedControl.Item>
                    </SegmentedControl>
                </Restaurant>
            </TopArea>
            <MenuContainer>
                <MenuSlider style={{
                    transform: isSliding ? `translateX(${slideLocate * 100}vw)` : 'translateX(0)',
                    transition: isSliding ? 'transform 0.3s ease' : 'none',
                }}>
                    <Slide MenuList={currentMenus} Date={MOCK_API_RESPONSE.date[selectedDay][0]}/>
                    <Slide MenuList={currentMenus} Date={MOCK_API_RESPONSE.date[selectedDay][0]}/>
                    <Slide MenuList={currentMenus} Date={MOCK_API_RESPONSE.date[selectedDay][0]}/>
                </MenuSlider>
            </MenuContainer>
            </>
        )
    }
    
    
const TopArea = styled.div`
    height: 180px;
`;
const WeekDay = styled.div`

`;
const Restaurant = styled.div`
    margin-bottom: 20px;
`;
const SegmentText = styled.div`
    font-size: 10px;
`;
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;
const MenuSlider = styled.div`
    display: flex;
    width: 300vw;
    padding: 10px;
    align-items: center;
`;
    export default Week;