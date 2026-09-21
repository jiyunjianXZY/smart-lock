// ===================== OneNET 设备接入配置（按需修改，index.html / open.html 共用） =====================
window.SMART_LOCK_CONFIG = {
  BASE_URL: "https://iot-api.heclouds.com",
  // 设备级 token（res=products/{pid}/devices/{device}），约 2030 年过期，过期后在这里替换即可
  TOKEN: "version=2018-10-31&res=products%2FVtuduvP7j8%2Fdevices%2Fstm32&et=1915713551&method=md5&sign=%2BzdrfRzcjk31D1QDaKdNjg%3D%3D",
  PRODUCT_ID: "VtuduvP7j8",
  DEVICE_NAME: "stm32",

  // 门锁行为（与固件/APP 保持一致）
  POLL_MS: 3000,          // 正常轮询间隔
  FAST_POLL_MS: 1000,     // 开门/关门后的快速轮询间隔
  FAST_DURATION_MS: 8000, // 快速轮询持续时间，需覆盖 5 秒自动回锁
  SERVICE_OPEN: "open_door",
  SERVICE_CLOSE: "close_door"
};
