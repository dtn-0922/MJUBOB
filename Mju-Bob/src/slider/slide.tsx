import { Menu } from '@toss/tds-mobile';
import styled from "styled-components";
interface SlideProps {
    //SlideNum: number;
    MenuList:string[];
    Date: string;
}

const Slide = ({MenuList, Date}:SlideProps)=>{
    return(
        <SlideWidth>
            <Menu.Dropdown header={<Menu.Header>{Date}</Menu.Header>}>
            {MenuList.map((menu, index)=>(
                <Menu.DropdownItem key ={index}><div>{menu}</div></Menu.DropdownItem>))
            }
            <Menu.DropdownItem><MenuChangedText>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</MenuChangedText></Menu.DropdownItem>
            </Menu.Dropdown>
        </SlideWidth>
    )
}

const SlideWidth = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const MenuChangedText = styled.div`
    width: 80vw;
    color: gray;
    font-size: 10px;
`;

export default Slide;