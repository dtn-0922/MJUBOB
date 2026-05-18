import os
import json
import instaloader
import google.generativeai as genai
from PIL import Image

# 1. Gemini API 설정
genai.configure(api_key="YOUR_GEMINI_API_KEY") # 발급받은 API 키 입력
model = genai.GenerativeModel('gemini-2.5-flash') # 속도와 비용 효율을 위해 flash 모델 사용

def download_insta_image(post_url, target_dir):
    """인스타그램 게시물에서 이미지를 다운로드합니다."""
    L = instaloader.Instaloader(dirname_pattern=target_dir)
    # URL에서 shortcode 추출 (예: https://www.instagram.com/p/C4abcde/ -> C4abcde)
    shortcode = post_url.split("/")[-2]
    
    post = instaloader.Post.from_shortcode(L.context, shortcode)
    L.download_post(post, target=target_dir)
    
    # 다운로드된 파일 중 이미지 경로 반환 (.jpg)
    for file in os.listdir(target_dir):
        if file.endswith(".jpg"):
            return os.path.join(target_dir, file)
    return None

def extract_menu_to_json(image_path):
    """Gemini API를 사용하여 이미지에서 메뉴 정보를 추출하고 JSON으로 변환합니다."""
    img = Image.open(image_path)
    
    prompt = """
    이 이미지에서 음식점 메뉴판 정보를 추출해서 JSON 형식으로 응답해줘.
    형식은 다음과 같아야 해:
    {
      "restaurant_name": "음식점 이름",
      "menu": [
        {"item": "메뉴명", "price": "가격", "description": "설명(없으면 생략)"}
      ]
    }
    반드시 순수 JSON 데이터만 출력해줘.
    """
    
    response = model.generate_content([prompt, img])
    
    # 응답 텍스트에서 JSON 부분만 추출 (마크다운 제거)
    json_text = response.text.replace("```json", "").replace("
```", "").strip()
    return json.loads(json_text)

def save_to_json_file(data, filename="menu_result.json"):
    """결과 데이터를 JSON 파일로 저장합니다."""
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"✅ 저장 완료: {filename}")

# 실행 예시
if __name__ == "__main__":
    TARGET_POST_URL = "인스타그램_포스트_URL_입력" # 예: https://www.instagram.com/p/XXXXX/
    DOWNLOAD_DIR = "temp_images"
    
    print("🚀 인스타그램 이미지 다운로드 중...")
    image_file = download_insta_image(TARGET_POST_URL, DOWNLOAD_DIR)
    
    if image_file:
        print("🔍 Gemini API 분석 중...")
        try:
            menu_data = extract_menu_to_json(image_file)
            save_to_json_file(menu_data)
        except Exception as e:
            print(f"❌ 오류 발생: {e}")
    else:
        print("❌ 이미지를 찾을 수 없습니다.")