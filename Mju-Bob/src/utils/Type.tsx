// 1. 날짜 정보 타입 (예: ["2024. 06. 03.", "월"])
export type DateTuple = [string, string];
// 2. 주간 메뉴 타입 (메뉴 데이터 배열 혹은 빈 배열)
export type MenuTuple = string[] | [];

// 3. 개별 식당 정보 인터페이스
export interface Restaurant {
  id: string;
  name: string;
  weekly_menu: MenuTuple[];
}

// 4. 전체 JSON 데이터 루트 인터페이스
export interface Weekly_Data {
  date: DateTuple[];
  restaurants: Restaurant[];
}

//알림
export type Noticification_Data = [string];

export interface Noticification{
  notice:Noticification_Data[];
}


//5개 식당 테이블 타입
export interface MenuData{
  date:[string, string][];
  lunch_menu:lunchData;
}
export type lunchData = string[]|[];
export interface WeeklyMenuRow{
  id:number;
  created_at:string;
  RestaurantId:number;
  Menu_Data:MenuData;
}

export const RESTAURANT_NAMES: Record<number, string>={
  1:'학생회관',
  2:'명진당',
  3:'복지동',
  4:'방목관',
  5:'함박관'
}

export const DAYS_ENG = ['월', '화', '수', '목', '금'];
