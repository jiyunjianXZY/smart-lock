# SmartLock 网页控制端（可安装为 PWA / 一键开门链接）

功能与 Android APP 一致的智能门锁控制页。支持三种用法：
1. 控制台页面（`index.html`）
2. 一键开门链接（`open.html`）
3. 安装到手机主屏幕当 App 用（PWA）

## 先把它放到一个 HTTPS 地址上
把本目录（`web`）整体上传到任一免费静态托管，得到根地址，例如 `https://你的域名/smart-lock/`。

- **免费静态托管（推荐）**：GitHub Pages / Netlify / Vercel。
- **局域网临时用**：本目录运行 `python -m http.server 8000`，手机访问 `http://电脑IP:8000`。

## 一键开门链接
链接就是 `open.html` 的完整地址：

```
https://你的域名/smart-lock/open.html
```

- **点链接即自动开门**：`open.html` 打开后立即下发 `open_door`，并显示“开门指令已下发”（约 5 秒后自动回锁）。
- **更安全（需再点一次）**：链接末尾加 `?confirm=1`
  ```
  https://你的域名/smart-lock/open.html?confirm=1
  ```
  打开后只显示一个「开门」按钮，点按钮才开门，可避免聊天软件的链接预览/误触直接开门。

> ⚠️ 安全提醒：一键链接无需密码，拿到链接的人就能开门；且链接中的 token 在网页源码里可见。请只自己保存/发给可信对象。

## 控制台页面
打开 `https://你的域名/smart-lock/` 即可：
- 门状态实时展示 + WiFi 信号强度，常态 3 秒轮询。
- 开门/关门后 8 秒内切换 1 秒快速刷新，覆盖固件 5 秒自动回锁。
- 远程开门（二次确认）、远程关门/手动锁定、NFC 占位。

## 安装到手机主屏幕（PWA）
- **iPhone**：Safari 打开 → 分享 → 添加到主屏幕。
- **Android**：Chrome 打开 → 菜单 → 安装应用 / 添加到主屏幕。

## 配置（集中在一处）
所有 OneNET 参数都在 `config.js`：
- `BASE_URL`：`https://iot-api.heclouds.com`
- `TOKEN`：设备级 token，约 2030 年过期后替换。
- `PRODUCT_ID` / `DEVICE_NAME`：`VtuduvP7j8` / `stm32`。

## 文件说明
- `index.html`：控制台页面。
- `open.html`：一键开门链接页。
- `config.js`：共享 OneNET 配置。
- `manifest.webmanifest` + `sw.js` + `icons/`：PWA 安装与离线缓存。
