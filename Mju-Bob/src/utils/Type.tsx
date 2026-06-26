export interface Weekly_Data {
  week_day: string[];  // ["월", "화", "수", "목", "금"]
  week_date: string[]; // ["05.10.", "05.10.", ...]
  menu: {
    res_01: string[][]; // ["월요일", "점심", "메뉴"] 형태의 배열들의 배열
    res_02: string[][];
    res_03: string[][];
    res_04: string[][];
    res_05: string[][];
  };
}

//알림
export type Noticification_Data = [string];

export interface Noticification{
  notice:Noticification_Data[];
}


//export const DAYS_ENG = ['월', '화', '수', '목', '금'];
