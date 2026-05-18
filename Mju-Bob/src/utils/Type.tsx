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