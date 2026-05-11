import { Top, SegmentedControl, Menu } from '@toss/tds-mobile';
import { useState } from 'react';
import './Today.css';

function Today() {
    const [Value, setValue] = useState<string>("1");
    const today = new Date();
    const tabs = [
        { name: "학생회관", component:<div className='MenuSlide'>
                        <Menu.Dropdown header={<Menu.Header>{today.toLocaleDateString()}</Menu.Header>}>
                        <Menu.DropdownItem><div className='MenuText'>학생회관 메뉴에요</div></Menu.DropdownItem>
                        <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                        </Menu.Dropdown>
                        </div>
                        
                    },
        { name: "명진당", component:<div className='MenuSlide'>
                        <Menu.Dropdown header={<Menu.Header>{today.toLocaleDateString()}</Menu.Header>}>
                        <Menu.DropdownItem><div className='MenuText'>명진당 메뉴에요</div></Menu.DropdownItem>
                        <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                        </Menu.Dropdown> 
                        </div>
                    },
        { name: "방목관", component:<div className='MenuSlide'>
                        <Menu.Dropdown header={<Menu.Header>{today.toLocaleDateString()}</Menu.Header>}>
                        <Menu.DropdownItem><div className='MenuText'>방목관 메뉴에요</div></Menu.DropdownItem>
                        <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>     
                        </Menu.Dropdown>
                        </div>
                    },
        { name: "복지동", component: <div className='MenuSlide'>
                        <Menu.Dropdown header={<Menu.Header>{today.toLocaleDateString()}</Menu.Header>}>
                        <Menu.DropdownItem><div className='MenuText'>복지동 메뉴에요</div></Menu.DropdownItem>
                        <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                        </Menu.Dropdown>
                        </div>
                    },
        { name: "함박관", component:<div className='MenuSlide'>
                        <Menu.Dropdown header={<Menu.Header>{today.toLocaleDateString()}</Menu.Header>}>
                        <Menu.DropdownItem><div className='MenuText'>함박관 메뉴에요</div></Menu.DropdownItem>
                        <Menu.DropdownItem><div className='MenuChangeText'>※ 식당의 사정에 따라 메뉴 변경이 있을 수 있어요</div></Menu.DropdownItem>
                        </Menu.Dropdown>
                        </div>
                    },
    ];
    return (
        <>
            <div className='TopArea'>
                <Top title={<Top.TitleParagraph size = {22}>오늘의 메뉴</Top.TitleParagraph>} />
                <SegmentedControl size='small' value={Value} onChange={(value)=>{setValue(value); }}>
                <SegmentedControl.Item value="1"><div className='SegmentText'>학생회관</div></SegmentedControl.Item>
                <SegmentedControl.Item value="2"><div className='SegmentText'>명진당</div></SegmentedControl.Item>
                <SegmentedControl.Item value="3"><div className='SegmentText'>방목관</div></SegmentedControl.Item>
                <SegmentedControl.Item value="4"><div className='SegmentText'>복지동</div></SegmentedControl.Item>
                <SegmentedControl.Item value="5"><div className='SegmentText'>함박관</div></SegmentedControl.Item>
                </SegmentedControl>
            </div>
            
            <div className='MenuContainer'>
                <div className='MenuSlider'style={{
                        transform: `translateX(-${parseInt(Value) * 100}vw)`,
                        transition: "transform 0.3s ease"
                    }}
                >
                    {tabs.map((tab) => (
                        <div className="MenuSlide" key={tab.name}>
                            {tab.component}
                        </div>
                ))}
                </div>
            </div>
                
            
    
        </>
    )
}

export default Today;