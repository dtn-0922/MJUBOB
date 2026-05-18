import { Top, SegmentedControl } from '@toss/tds-mobile';
import {MOCK_API_RESPONSE} from '../mockData';
import styled from 'styled-components';
import Slide from '../slider/slide';
interface TodayProps{
    Res_Id:string;
    isSliding:boolean;
    slideLocate:number;
    ResMove:(after:string)=>void;
}
const Today=({Res_Id,isSliding,slideLocate,ResMove }:TodayProps) => {
    const today = new Date();
    const Day_value = today.getDay();
    const TodayNum = (Day_value == 0? 6:Day_value);
    const TodayMenu = MOCK_API_RESPONSE.restaurants[parseInt(Res_Id)-1].weekly_menu[TodayNum];
    
    return (
        <>
            <TopArea>
                <Top title={<Top.TitleParagraph size = {22}>오늘의 메뉴</Top.TitleParagraph>} />
                <SegmentedControl size='small' value={Res_Id} onChange={(value)=>{ResMove(value); }}>
                <SegmentedControl.Item value="1"><SegmentText>학생회관</SegmentText></SegmentedControl.Item>
                <SegmentedControl.Item value="2"><SegmentText>명진당</SegmentText></SegmentedControl.Item>
                <SegmentedControl.Item value="3"><SegmentText>방목관</SegmentText></SegmentedControl.Item>
                <SegmentedControl.Item value="4"><SegmentText>복지동</SegmentText></SegmentedControl.Item>
                <SegmentedControl.Item value="5"><SegmentText>함박관</SegmentText></SegmentedControl.Item>
                </SegmentedControl>
            </TopArea>
            
            <MenuContainer>
                <MenuSlider style={{
                        transform: isSliding ? `translateX(${slideLocate * 100}vw)` : 'translateX(0)',
                    transition: isSliding ? 'transform 0.3s ease' : 'none',
                    }}
                >
                    <Slide MenuList={TodayMenu} Date={MOCK_API_RESPONSE.date[TodayNum-1][0]}/>
                    <Slide MenuList={TodayMenu} Date={MOCK_API_RESPONSE.date[TodayNum-1][0]}/>
                    <Slide MenuList={TodayMenu} Date={MOCK_API_RESPONSE.date[TodayNum-1][0]}/>
                </MenuSlider>
            </MenuContainer>
                
            
    
        </>
    )
}
const TopArea = styled.div`
    height: 180px;
`;
const SegmentText = styled.div`
    font-size: 12px;
`;
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow-y: hidden;
`;
const MenuSlider = styled.div`
    display: flex;
    width: 300vw;
    padding: 10px;
    align-items: center;
`;
export default Today;