# 里程票雷达

**在 aa.com 上一键扫出能用的 AAdvantage 里程票。** 插画卡片一眼看清哪天有位、要多少里程，会动的看板娘陪你找票，看中了还能一键核实是不是真票。

<p><img src="docs/feed.png" alt="卡片瀑布流" width="100%"></p>
<p>
  <img src="docs/mini.png" alt="看板娘小窗" width="49%">
  <img src="docs/drawer.png" alt="一档票的详情和日历" width="49%">
</p>

## 30 秒装好

1. 装一个脚本管理器：电脑用 [Tampermonkey](https://www.tampermonkey.net/) 或 [脚本猫](https://scriptcat.org/)；iPhone 在 App Store 装 **Userscripts**，用 Safari。
2. 点这里安装：**[安装里程票雷达](https://cdn.jsdelivr.net/gh/liangju1/miles-radar@latest/dist/miles-radar.user.js)**
   打不开的话，去 [Releases](https://github.com/liangju1/miles-radar/releases/latest) 下载 `miles-radar.user.js`，拖进浏览器安装。
3. 打开 [aa.com 订票页](https://www.aa.com/booking/find-flights)，点右下角的 Miku。

不想装、先看看：下载 [preview.html](https://github.com/liangju1/miles-radar/releases/latest)，双击打开（示例数据）。

## 怎么找到真票

- **全自动**：只扫兑换日历，最快，结果是「线索」。
- **半自动**：看中哪天点「核实」，脚本读 aa.com 搜索页，确认机场、每段舱位、座位够不够。人机验证由你自己点。

---

非官方工具，与 American Airlines 无关联。看板娘为初音未来（© Crypton Future Media, INC. 2007 · Art by KEI · CC BY-NC 3.0；Live2D 官方示例模型），仅限非商业使用。
