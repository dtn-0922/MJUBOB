
import { Switch, Top, TableRow, Border, TextButton } from "@toss/tds-mobile";
import {useState} from "react";
import "./More.css";
function More() {
    const [checked, setChecked] = useState(false);  
    const [NoficationChecked, setNotificationChecked] = useState(false);
    return (
        <>
        <div style={{backgroundColor: "gray"}}>
        <Top
            title={<Top.TitleParagraph size={22}>더보기</Top.TitleParagraph>}
        />
        <TableRow align="space-between" left="전체 알림" right={<Switch checked={NoficationChecked} onClick={() => setNotificationChecked(!NoficationChecked)} />} />
        <Border />
        <TableRow align="space-between" left="다크모드" right={<Switch checked={checked} onClick={() => setChecked(!checked)} />} />
        <Border />
        <TableRow onClick={() => setChecked(!checked)} align="space-between" left="메뉴 순서 설정하기" right={<TextButton size="xsmall" variant="arrow"/>} />
        <Border />
        <TableRow onClick={() => setChecked(!checked)} align="space-between" left="키워드 알림" right={<TextButton size="xsmall" variant="arrow"/>} />
        <Border />
        {/* <TableRow onClick={() => setChecked(!checked)} align="space-between" left="광고 제거 하기" right={<TextButton size="xsmall" variant="arrow"/>} /> */}
        </div>
        </>
    )
}

export default More;