import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "Mju-Bob",
  brand: {
    displayName: "명지밥", // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: "#FF91D5", // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: "../images/MJU_BOB_Logo.png", // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
  },
  web: {
    host: "192.168.0.81",
    port: 5173,
    commands: {
      dev: "vite --host",
      build: "vite build",
    },
  },
  permissions: [],
  outdir: "dist",
});
