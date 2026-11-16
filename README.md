# 里程票雷达

**在 aa.com 上一键扫出能用的 AAdvantage 里程票。** 

一眼看清哪天有位、要多少里程，Miku陪你找票，还能一键核实是不是真票。

## 来自 2026/11/16 的更新

**修了一个会坑人的 bug。** 之前有一天被标成「已核实 85,000」，但点进 aa.com 一看，页面上只有 176,000。原因是脚本只读了页面后台收到的数据，没有核对页面上真正显示的价格。现在改成以页面显示的为准！

**出发地和目的地可以一键对调。** 两个选择框中间多了一个 ⇄，只想查单程的时候直接翻一下就行，不用重新选一遍。

**新增小剧场。** Miku 头顶会出现一个感叹号，可以点开看看哦！

**可以设里程上限了。** 以前搜出来一大半是 450k 那种动态定价的票，很烦。现在扫描前就能设上限，单位是 k，可以直接打 37.5 或 60，也有 40k / 60k / 100k 的快捷按钮。

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

扫描只读兑换日历，最快，但日历可能有假票。看中哪天点「核实」，脚本读 aa.com 搜索页，确认机场、每段舱位、座位够不够。需要人机验证。
