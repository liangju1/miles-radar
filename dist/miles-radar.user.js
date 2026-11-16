// ==UserScript==
// @name         里程票雷达
// @namespace    https://github.com/liangju1/miles-radar
// @version      1.0.9
// @description  在 aa.com 上批量查 AAdvantage 里程票空位，按“里程+税费”分档，小红书式卡片浏览，下单前一键核实。
// @author       里程票雷达
// @homepageURL  https://github.com/liangju1/miles-radar
// @supportURL   https://github.com/liangju1/miles-radar/issues
// @downloadURL  https://cdn.jsdelivr.net/gh/liangju1/miles-radar@latest/dist/miles-radar.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/liangju1/miles-radar@latest/dist/miles-radar.user.js
// @icon         data:image/png;base64,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
// @match        https://www.aa.com/*
// @run-at       document-start
// @noframes
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addValueChangeListener
// @grant        GM_openInTab
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.openInTab
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @require      https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js
// @require      https://cdn.jsdelivr.net/npm/pixi.js@6.5.10/dist/browser/pixi.min.js
// @connect      cdn.jsdelivr.net
// ==/UserScript==

// 看板娘占位形象：初音未来 © Crypton Future Media, INC. 2007 · Art by KEI · CC BY-NC 3.0

(function () {
'use strict';

const PAGE = typeof unsafeWindow !== 'undefined' && unsafeWindow ? unsafeWindow : window;
const DAY_MS = 864e5;
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ESCAPES[ch]);
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const fmtInt = n => Number(n || 0).toLocaleString('en-US');
const money = n => (n == null ? '税费待核实' : '$' + Number(n).toFixed(2));
const pad = n => String(n).padStart(2, '0');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function nowIso() {
  const t = new Date();
  const date = `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`;
  return `${date}T${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
}
const todayIso = () => nowIso().slice(0, 10);

function parseDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}
const fmtDate = iso => `${iso.slice(5)} 周${WEEKDAYS[parseDate(iso).getDay()]}`;

function ago(iso) {
  if (!iso) return '—';
  const seconds = (Date.now() - new Date(iso).getTime()) / 1000;
  if (seconds < 90) return '刚刚';
  if (seconds < 3600) return `${Math.round(seconds / 60)} 分钟前`;
  if (seconds < 86400 * 2) return `${Math.round(seconds / 3600)} 小时前`;
  return `${Math.round(seconds / 86400)} 天前`;
}

function duration(seconds) {
  if (seconds == null) return '';
  if (seconds < 90) return `${Math.max(1, Math.round(seconds))} 秒`;
  if (seconds < 5400) return `${Math.round(seconds / 60)} 分钟`;
  return `${(seconds / 3600).toFixed(1)} 小时`;
}

const CABINS = {
  J: {
    query: 'BUSINESS,FIRST',
    label: '商务·头等',
    short: '商务',
    word: '商务舱',
    products: ['BUSINESS', 'FIRST'],
  },
  Y: {
    query: 'COACH',
    label: '经济',
    short: '经济',
    word: '经济舱',
    products: ['COACH', 'MAIN', 'MAIN_CABIN', 'ECONOMY'],
  },
};

const SPEEDS = {
  normal: { workers: 2, minGap: 0.4, maxGap: 1.2, perRequest: 0.75, label: '标准' },
  gentle: { workers: 1, minGap: 3.0, maxGap: 8.0, perRequest: 6.2, label: '稳妥' },
};

function monthStarts(count) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const earliest = new Date(today.getTime() + DAY_MS);
  const starts = [];
  let year = today.getFullYear();
  let month = today.getMonth();
  for (let i = 0; i < count; i++) {
    const first = new Date(year, month, 1);
    const start = first < earliest ? earliest : first;
    starts.push(`${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`);
    if (++month > 11) {
      month = 0;
      year++;
    }
  }
  return starts;
}

function monthBounds(start) {
  const lastDay = new Date(+start.slice(0, 4), +start.slice(5, 7), 0).getDate();
  return [`${start.slice(0, 7)}-01`, `${start.slice(0, 7)}-${pad(lastDay)}`];
}

function bookingUrl(o, d, date, cabin, pax) {
  const query = new URLSearchParams({
    type: 'OneWay',
    searchType: 'Award',
    from: o,
    to: d,
    pax: String(pax),
    cabin: CABINS[cabin].query,
    locale: 'en_US',
    nearbyAirports: 'false',
    depart: date,
    carriers: 'ALL',
    pos: 'US',
    adult: String(pax),
  });
  return 'https://www.aa.com/booking/search?' + query.toString();
}

function calendarRequest(job) {
  return {
    metadata: { selectedProducts: [], tripType: 'OneWay', udo: {} },
    passengers: [{ type: 'adult', count: job.pax }],
    requestHeader: { clientId: 'AAcom' },
    slices: [
      {
        allCarriers: true,
        cabin: CABINS[job.cabin].query,
        connectionCity: null,
        departureDate: job.date,
        destination: job.d,
        destinationNearbyAirports: false,
        maxStops: '2',
        origin: job.o,
        originNearbyAirports: false,
      },
    ],
    tripOptions: {
      corporateBooking: false,
      fareType: 'Lowest',
      locale: 'en_US',
      pointOfSale: null,
      searchType: 'Award',
    },
    loyaltyInfo: null,
    version: '',
    queryParams: { sliceIndex: 0, sessionId: '', solutionSet: '', solutionId: '' },
  };
}

function calendarDays(data) {
  const days = [];
  for (const month of data.calendarMonths || []) {
    for (const week of month.weeks || []) {
      for (const day of week.days || []) {
        const solution = day.solution;
        if (!day.validDay || !solution || typeof solution.perPassengerAwardPoints !== 'number')
          continue;
        const cash = (solution.perPassengerSaleTotal || {}).amount || 0;
        days.push([day.date, solution.perPassengerAwardPoints, cash]);
      }
    }
  }
  return days;
}

function injectPageScript(code, after) {
  const run = () => {
    const script = document.createElement('script');
    script.textContent = code;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
    if (after) after();
  };
  if (document.documentElement) {
    run();
    return;
  }
  const observer = new MutationObserver(() => {
    if (!document.documentElement) return;
    observer.disconnect();
    run();
  });
  observer.observe(document, { childList: true });
}

const PageBridge = {
  inPageWorld: false,
  pending: new Map(),
  nextId: 1,

  install() {
    const bridge = `(() => {
      if (window.__arBridge) return;
      window.__arBridge = true;
      window.addEventListener('message', event => {
        const call = event.data && event.data.__arCall;
        if (event.source !== window || !call) return;
        const reply = data => window.postMessage({ __arReply: Object.assign({ id: call.id }, data) }, location.origin);
        fetch(call.url, call.init).then(
          response => response.text().then(text => reply({ status: response.status, text })),
          error => reply({ status: 0, error: String(error) }),
        );
      });
    })();`;
    injectPageScript(bridge, () => {

      this.inPageWorld = PAGE !== window || window.__arBridge === true;
    });
    window.addEventListener('message', event => {
      const reply = event.data && event.data.__arReply;
      if (event.source !== window || !reply || !this.pending.has(reply.id)) return;
      this.pending.get(reply.id)(reply);
      this.pending.delete(reply.id);
    });
  },

  async request(url, init) {
    if (this.inPageWorld) {
      const response = await PAGE.fetch(url, init);
      return { status: response.status, text: await response.text() };
    }
    const id = this.nextId++;
    const reply = await new Promise(resolve => {
      this.pending.set(id, resolve);
      window.postMessage({ __arCall: { id, url, init } }, location.origin);
    });
    if (reply.error) throw new Error(reply.error);
    return reply;
  },
};

const DAILY_SOFT_CAP = 800;

function requestsToday() {
  const record = Store.get('dailyRequests', null);
  return record && record.day === todayIso() ? record.count : 0;
}

function countRequest() {
  Store.set('dailyRequests', { day: todayIso(), count: requestsToday() + 1 });
}

async function fetchCalendar(job) {
  if (job.program === 'AS') return fetchAlaskaMonth(job);
  for (let attempt = 0; attempt < 2; attempt++) {
    countRequest();
    try {
      const response = await PageBridge.request('https://www.aa.com/booking/api/search/calendar', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify(calendarRequest(job)),
      });
      if (response.status === 403 || response.status === 429) {
        return { error: 'HTTP ' + response.status, blocked: true };
      }

      if (
        /captcha|not a robot|confirm you.?re a human|pardon our interruption/i.test(
          response.text.slice(0, 4000),
        ) &&
        !/calendarMonths/.test(response.text)
      ) {
        return { error: '需要人机验证', blocked: true };
      }
      if (response.status !== 200) throw new Error('HTTP ' + response.status);
      return { days: calendarDays(JSON.parse(response.text)) };
    } catch (error) {
      if (attempt === 1) return { error: String((error && error.message) || error) };
      await sleep(1500);
    }
  }
  return { error: 'unreachable' };
}

function findSlices(node, depth = 0) {
  if (depth > 8 || !node || typeof node !== 'object') return null;
  const children = Array.isArray(node) ? node.slice(0, 50) : Object.values(node);
  if (!Array.isArray(node)) {
    const slices = node.slices;
    if (
      Array.isArray(slices) &&
      slices[0] &&
      typeof slices[0] === 'object' &&
      'segments' in slices[0]
    )
      return slices;
  }
  for (const child of children) {
    const found = findSlices(child, depth + 1);
    if (found) return found;
  }
  return null;
}

const airportCode = value => (value && typeof value === 'object' ? value.code : value);

function segmentCabins(slice, product) {
  const cabins = [];
  for (const segment of slice.segments || []) {
    let cabin = null;
    for (const leg of segment.legs || []) {
      for (const detail of leg.productDetails || []) {
        if (detail.productType === product) cabin = detail.cabinType || cabin;
      }
    }
    if (cabin == null) return null;
    cabins.push(String(cabin).toUpperCase());
  }
  return cabins.length ? cabins : null;
}

function collectOffers(slices, o, d, cabin, pax) {
  const wanted = new Set(CABINS[cabin].products);
  const valid = [];
  let exact = 0;
  let substituted = 0;
  let inCabin = 0;
  let otherCabin = 0;
  let mixedNote = '';
  let fewestSeats = null;
  for (const slice of slices || []) {
    const segments = slice.segments || [];
    if (!segments.length) continue;
    const from = airportCode(slice.origin) || airportCode(segments[0].origin);
    const to = airportCode(segments[segments.length - 1].destination);
    if (from !== o || to !== d) {
      substituted++;
      continue;
    }
    exact++;
    for (const price of slice.pricingDetail || []) {
      if (typeof price.perPassengerAwardPoints !== 'number' || !offerAvailable(price)) continue;
      if (!wanted.has(price.productType)) {
        otherCabin++;
        continue;
      }
      inCabin++;
      const cabins = segmentCabins(slice, price.productType);
      const fullCabin = cabins == null ? null : cabins.every(c => wanted.has(c));
      const remaining = price.seatsRemaining;
      const seats = Number.isInteger(remaining) && remaining > 0 ? remaining : null;
      const enough = seats == null ? null : seats >= pax;
      const offer = describeOffer({ slice, price, fullCabin, seats, enough, cabins }, wanted);
      if (fullCabin === false) {
        mixedNote = mixedNote || offer.note;
        continue;
      }
      if (enough === false) {
        fewestSeats = Math.max(fewestSeats || 0, seats);
        continue;
      }
      valid.push(offer);
    }
  }
  valid.sort((a, b) => a.miles - b.miles || a.cash - b.cash || a.path.length - b.path.length);
  let failure = null;
  if (!valid.length) {
    if (!exact && substituted)
      failure = { status: 'airport', note: '页面只给出了其他机场出发/到达的航班' };
    else if (mixedNote) failure = { status: 'mixed', note: mixedNote };
    else if (fewestSeats != null)
      failure = {
        status: 'seats',
        seats: fewestSeats,
        note: `只剩 ${fewestSeats} 个座位，${pax} 人不够`,
      };
    else if (!inCabin && otherCabin)
      failure = { status: 'none', note: cabin === 'J' ? '只剩经济舱' : '只剩商务/头等舱' };
    else failure = { status: 'none', note: '这一天实际已经没有该舱位' };
  }
  return { valid, failure };
}

function settleDay(day, pageText, calMiles, calCash) {
  if (!day.valid.length) return day.failure;
  const shown = pageMiles(pageText);
  const brief = offer => ({
    miles: offer.miles,
    cash: offer.cash,
    flights: offer.flights,
    path: offer.path,
    seats: offer.seats,
    minutes: offer.minutes,
  });
  if (!shown.length) {
    return Object.assign({}, day.valid[0], {
      status: 'unsure',
      note: '页面上没读到里程数，没法确认这些价格真的能选',
      options: day.valid.slice(0, 6).map(brief),
      pageMiles: [],
    });
  }
  const onPage = day.valid.filter(offer => shown.includes(offer.miles));
  if (!onPage.length) {
    const nearest = shown.find(miles => miles > day.valid[0].miles) || shown[shown.length - 1];
    return Object.assign({}, day.valid[0], {
      status: 'mismatch',
      note: `页面显示 ${fmtInt(nearest)}，没有 ${fmtInt(day.valid[0].miles)} 这个价`,
      options: [],
      pageMiles: shown,
    });
  }
  const options = onPage.slice(0, 6).map(brief);
  const exact =
    onPage.find(
      offer =>
        offer.miles === calMiles && (calCash == null || Math.abs(offer.cash - calCash) < 0.5),
    ) || onPage.find(offer => offer.miles === calMiles);
  if (exact) return Object.assign({}, exact, { status: 'ok', options, pageMiles: shown });
  const lowest = onPage[0];
  return Object.assign({}, lowest, {
    status: 'diff',
    note: `日历上的 ${fmtInt(calMiles)} 订不到，这天实际最低 ${fmtInt(lowest.miles)} + ${money(lowest.cash)}`,
    options,
    pageMiles: shown,
  });
}

function judge(slices, o, d, cabin, pax) {
  const wanted = new Set(CABINS[cabin].products);
  const offers = [];
  let substituted = 0;
  for (const slice of slices || []) {
    const segments = slice.segments || [];
    if (!segments.length) continue;
    const from = airportCode(slice.origin) || airportCode(segments[0].origin);
    const to = airportCode(segments[segments.length - 1].destination);

    if (from !== o || to !== d) {
      substituted++;
      continue;
    }
    for (const price of slice.pricingDetail || []) {
      const usable =
        wanted.has(price.productType) &&
        typeof price.perPassengerAwardPoints === 'number' &&
        offerAvailable(price);
      if (usable) offers.push({ slice, price });
    }
  }
  if (!offers.length) {
    return substituted
      ? { status: 'airport', note: '页面只给出了其他机场出发/到达的航班' }
      : { status: 'none', note: '这一天实际已经没有该舱位' };
  }
  return describeOffer(bestOffer(offers, wanted, pax), wanted);
}

const UNAVAILABLE_TRUE = /^(is)?(sold_?out|wait_?list(ed)?|disabled|unavailable|closed)$/i;
const AVAILABLE_FALSE = /^(is)?(available|product_?available|bookable|selectable|enabled|valid)$/i;
const BAD_STATUS = /sold|wait|unavail|closed|disabled|not_?avail|inactive/i;

function offerAvailable(price, depth = 0) {
  if (!price || typeof price !== 'object' || depth > 3) return true;
  for (const [key, value] of Object.entries(price)) {
    if (typeof value === 'boolean') {
      if (value === false && AVAILABLE_FALSE.test(key)) return false;
      if (value === true && UNAVAILABLE_TRUE.test(key)) return false;
    } else if (typeof value === 'string' && /status|availability/i.test(key)) {
      if (BAD_STATUS.test(value)) return false;
    } else if (key === 'seatsRemaining' && value === 0) {
      return false;
    } else if (value && typeof value === 'object' && !/segments|legs|slices/i.test(key)) {
      if (!offerAvailable(value, depth + 1)) return false;
    }
  }
  return true;
}

function pageMiles(text) {
  const found = new Set();
  const pattern = /(^|[^$\d.,])(\d{1,3}(?:,\d{3})+|\d{1,3}(?:\.\d)?\s?[Kk])(?![\d,])/g;
  let match;
  while ((match = pattern.exec(text || ''))) {
    const raw = match[2].replace(/\s/g, '');
    const miles = /k$/i.test(raw) ? Math.round(parseFloat(raw) * 1000) : +raw.replace(/,/g, '');
    if (miles >= 5000 && miles <= 1000000) found.add(miles);
  }
  return Array.from(found).sort((a, b) => a - b);
}

function confirmOnPage(result, pageText) {
  if (result.status !== 'ok') return result;
  const shown = pageMiles(pageText);
  if (!shown.length) {
    return Object.assign({}, result, {
      status: 'unsure',
      note: '页面上没读到里程数，没法确认这个价格真的能选',
      pageMiles: [],
    });
  }
  if (shown.includes(result.miles)) return Object.assign({}, result, { pageMiles: shown });
  const above = shown.filter(miles => miles > result.miles);
  const nearest = above.length ? above[0] : shown[shown.length - 1];
  return Object.assign({}, result, {
    status: 'mismatch',
    note: `页面显示 ${fmtInt(nearest)}，没有 ${fmtInt(result.miles)} 这个价`,
    pageMiles: shown,
  });
}

function compactSlice(slice) {
  const segments = slice.segments || [];
  return {
    from: airportCode(slice.origin) || airportCode(segments[0] && segments[0].origin),
    flights: segments.map(s => (s.flight ? s.flight.carrierCode + s.flight.flightNumber : '?')),
    pricing: (slice.pricingDetail || []).slice(0, 8).map(price => {
      const brief = {};
      for (const [key, value] of Object.entries(price)) {
        if (value == null || typeof value !== 'object') brief[key] = value;
        else if (key === 'perPassengerSaleTotal') brief[key] = value.amount;
      }
      return brief;
    }),
  };
}

function bestOffer(offers, wanted, pax) {
  let best = null;
  for (const { slice, price } of offers) {
    const cabins = segmentCabins(slice, price.productType);
    const fullCabin = cabins == null ? null : cabins.every(c => wanted.has(c));
    const remaining = price.seatsRemaining;
    const seats = Number.isInteger(remaining) && remaining > 0 ? remaining : null;
    const enough = seats == null ? null : seats >= pax;
    const rank = [
      fullCabin !== false ? 1 : 0,
      enough !== false ? 1 : 0,
      -price.perPassengerAwardPoints,
      -slice.segments.length,
    ];
    if (!best || ranksHigher(rank, best.rank)) {
      best = { rank, slice, price, fullCabin, seats, enough, cabins };
    }
  }
  return best;
}

function ranksHigher(a, b) {
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] > b[i];
  return false;
}

function describeOffer(offer, wanted) {
  const { slice, price, fullCabin, seats, enough, cabins } = offer;
  const segments = slice.segments;
  const notes = [];
  let status = 'ok';
  if (fullCabin === false) {
    status = 'mixed';
    const index = cabins.findIndex(c => !wanted.has(c));
    const cabinName = cabins[index] === 'COACH' ? '经济舱' : cabins[index];
    notes.push(`第${['一', '二', '三', '四'][index] || index + 1}段是${cabinName}（混舱）`);
  } else if (fullCabin == null) {
    notes.push('页面没有给出每段舱位，混舱没法排除');
  }
  if (enough === false) {
    if (status === 'ok') status = 'seats';
    notes.push(`只剩 ${seats} 个座位`);
  }
  const unique = list => Array.from(new Set(list.filter(Boolean)));
  return {
    status,
    evidence: { slice: compactSlice(slice) },
    miles: Math.round(price.perPassengerAwardPoints),
    cash: Math.round(Number((price.perPassengerSaleTotal || {}).amount || 0) * 100) / 100,
    carriers: unique(segments.map(s => s.flight && s.flight.carrierCode)).join('/'),
    flights: segments
      .map(s => (s.flight ? s.flight.carrierCode + s.flight.flightNumber : ''))
      .join(' '),
    path: [airportCode(slice.origin) || airportCode(segments[0].origin)]
      .concat(segments.map(s => airportCode(s.destination)))
      .join('-'),
    aircraft: unique(segments.flatMap(s => (s.legs || []).map(leg => leg.aircraftCode))).join('/'),
    minutes: slice.durationInMinutes || null,
    seats,
    full: fullCabin,
    cabs: cabins,
    note: notes.join('；'),
  };
}

function verdictLine(result, pax) {
  switch (result.status) {
    case 'ok': {
      if (!result.full) return '✓ 有位！不过页面没写每段舱位，留意一下哦';
      const cabin = result.cabs && result.cabs[0] === 'FIRST' ? '头等' : '商务';
      return `✓ 全程${cabin}，${result.seats ? result.seats + ' 个座位，' : ''}${pax} 人够！`;
    }
    case 'mixed':
      return '✕ ' + (result.note || '有一段是经济舱哦');
    case 'seats':
      return `✕ 只剩 ${result.seats} 个座位，${pax} 人不够`;
    case 'airport':
      return '✕ 机场被换了，不是你要的那个';
    case 'none':
      return '✕ 这天其实已经没位了';
    case 'mismatch':
      return '✕ 价格对不上：' + (result.note || '页面上没有这个价');
    case 'diff':
      return `✓ 有票，但价格和日历不同：最低 ${fmtInt(result.miles)} + ${money(result.cash)}`;
    case 'unsure':
      return '? 未能确认：' + (result.note || '页面上没读到价格');
    default:
      return '没读到航班数据……';
  }
}

const RANK = {
  verified: 0,
  repriced: 0.5,
  trusted: 1,
  lead: 2,
  seats: 3,
  mixed: 4,
  unsure: 2.5,
  gone: 5,
  mismatch: 5.5,
  airport: 6,
  excluded: 7,
};

const FAILED_DATES = new Set(['gone', 'airport', 'mixed', 'seats', 'mismatch']);

const ROUTING_PROBLEMS = new Set(['airport', 'mixed']);

const tierId = row => `${row.miles}|${row.cash == null ? '?' : row.cash.toFixed(2)}`;

const DYNAMIC_MIN_LEVELS = 6;
const BANDS = [
  [60000, '6 万以内'],
  [90000, '9 万以内'],
  [120000, '12 万以内'],
  [Infinity, '12 万以上'],
];
const isDynamicRoute = rows => new Set(rows.map(row => row.miles)).size >= DYNAMIC_MIN_LEVELS;
const bandIndex = miles => BANDS.findIndex(([limit]) => miles <= limit);
const bandId = row => 'band' + bandIndex(row.miles);

const sameTier = (check, row) => {
  const miles = row.calMiles != null ? row.calMiles : row.miles;
  const cash = row.calCash != null ? row.calCash : row.cash;
  return (
    !!check &&
    check.cal_miles === miles &&
    check.cal_cash != null &&
    Math.abs(check.cal_cash - cash) < 0.005
  );
};

function analyze(pax, cabin) {
  const checks = DB.checks();
  const routes = loadRoutes(pax, cabin);
  const twins = findTwinRoutes(routes);
  const result = new Map();
  for (const [key, route] of routes) {

    const checkOf = date => {
      const check = checks[`${route.o}|${route.d}|${cabin}|${pax}|${date}`];
      return check && check.ev ? check : null;
    };

    for (const row of route.rows) {
      const check = checkOf(row.date);
      if (check && check.status === 'diff' && sameTier(check, row)) {
        row.calMiles = row.miles;
        row.calCash = row.cash;
        row.miles = check.miles;
        row.cash = check.cash;
      }
    }
    const dynamic = isDynamicRoute(route.rows);
    const keyOf = dynamic ? bandId : tierId;
    const tiers = buildTiers(route.rows, checkOf, keyOf, dynamic);
    const dates = route.rows.map(row => dateView(row, tiers.get(keyOf(row)), checkOf(row.date)));
    for (const tier of tiers.values()) {
      tier.verified = dates.filter(x => x.tier === tier.id && x.status === 'verified').length;
      const mine = dates.filter(x => x.tier === tier.id);
      rollUpFailures(tier, mine);

      if (tier.days === 1 && mine.some(x => x.status === 'repriced')) tier.status = 'repriced';
    }
    result.set(key, routeSummary(route, tiers, dates, twins[key] || null));
  }
  return result;
}

function loadRoutes(pax, cabin) {
  const routes = new Map();
  for (const key of DB.keys()) {
    const [routePax, routeCabin, o, d, keyProgram] = key.split('|');
    if (+routePax !== pax || routeCabin !== cabin) continue;
    const program = keyProgram || 'AA';
    const record = DB.route(key);
    const rows = Object.entries(record.dates)
      .map(([date, v]) => ({
        date,
        miles: v[0],
        cash: v[1],
        first: v[2],
        scanned: v[3],
        new: v[4],
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
    const lastScan = Object.values(record.months).sort().pop() || '';
    routes.set(o + '|' + d + (program === 'AA' ? '' : '|' + program), {
      o,
      d,
      program,
      rows,
      lastScan,
      months: record.months,
    });
  }
  return routes;
}

function findTwinRoutes(routes) {
  const metroGroups = {};
  for (const [code, metro] of Object.entries(metroIndex())) {
    (metroGroups[metro] = metroGroups[metro] || []).push(code);
  }
  const twins = {};
  for (const [key, route] of routes) {
    const mine = new Map(route.rows.map(x => [x.date, x.miles + '|' + x.cash]));
    for (const [side, code] of [
      ['o', route.o],
      ['d', route.d],
    ]) {
      for (const other of metroGroups[metroIndex()[code]] || []) {
        if (other === code) continue;

        const suffix = route.program && route.program !== 'AA' ? '|' + route.program : '';
        const twin = routes.get(
          (side === 'o' ? other + '|' + route.d : route.o + '|' + other) + suffix,
        );
        if (!twin) continue;
        let overlap = 0;
        let identical = 0;
        for (const row of twin.rows) {
          if (!mine.has(row.date)) continue;
          overlap++;
          if (mine.get(row.date) === row.miles + '|' + row.cash) identical++;
        }
        if (overlap >= 5 && identical >= 0.9 * overlap) twins[key] = other;
      }
    }
  }
  return twins;
}

function buildTiers(rows, checkOf, keyOf = tierId, dynamic = false) {
  const soon = new Date(Date.now() + 2 * DAY_MS).toISOString().slice(0, 10);
  const groups = new Map();
  for (const row of rows) {
    const id = keyOf(row);
    if (!groups.has(id)) groups.set(id, []);
    groups.get(id).push(row);
  }
  const tiers = new Map();
  for (const [id, members] of groups) {
    const checks = members.map(row => checkOf(row.date)).filter((c, i) => sameTier(c, members[i]));
    const newest = list => list.slice().sort((a, b) => b.checked_at.localeCompare(a.checked_at))[0];
    const passed = checks.filter(c => c.status === 'ok' || c.status === 'diff');
    const failed = checks.filter(c => ROUTING_PROBLEMS.has(c.status));
    let status = 'lead';
    let reference = null;

    if (dynamic) {

    } else if (passed.length) {
      status = 'trusted';
      reference = newest(passed);
    } else if (failed.length) {
      status = 'excluded';
      reference = newest(failed);
    }
    const tried = new Set(checks.map(c => c.date));
    const dates = members.map(row => row.date);

    const representative =
      dates.find(x => x >= soon && !tried.has(x)) || dates.find(x => !tried.has(x)) || null;
    const cheapest = members.slice().sort((a, b) => a.miles - b.miles || a.cash - b.cash)[0];
    tiers.set(id, {
      id,
      miles: cheapest.miles,
      cash: cheapest.cash,
      dynamic,
      band: dynamic ? BANDS[bandIndex(cheapest.miles)][1] : '',
      maxMiles: dynamic ? Math.max(...members.map(row => row.miles)) : cheapest.miles,
      days: members.length,
      first: dates[0],
      last: dates[dates.length - 1],
      status,
      ref: reference,
      rep: representative,
      new: members.reduce((sum, row) => sum + row.new, 0),

      seenAt: members.reduce((latest, row) => (row.first > latest ? row.first : latest), ''),
      peak: busiestMonth(dates),
    });
  }
  return tiers;
}

function rollUpFailures(tier, mine) {
  const live = mine.filter(x => !FAILED_DATES.has(x.status));
  tier.failed = mine.length - live.length;
  if (!tier.failed) return;
  if (!live.length) {
    const latest = mine
      .filter(x => x.check)
      .sort((a, b) => b.check.checked_at.localeCompare(a.check.checked_at))[0];
    if (latest) {
      tier.status = latest.status;
      tier.ref = latest.check;
    }
    return;
  }
  tier.days = live.length;
  tier.first = live[0].date;
  tier.last = live[live.length - 1].date;
  tier.new = live.filter(x => x.new).length;
  tier.peak = busiestMonth(live.map(x => x.date));
  if (!tier.rep || !live.some(x => x.date === tier.rep)) {
    const fresh = live.find(x => !x.check);
    tier.rep = fresh ? fresh.date : null;
  }
}

function busiestMonth(dates) {
  const counts = {};
  for (const date of dates) counts[date.slice(0, 7)] = (counts[date.slice(0, 7)] || 0) + 1;
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return top ? +top[0].slice(5) : null;
}

function dateView(row, tier, ownCheck) {
  const check = ownCheck && sameTier(ownCheck, row) ? ownCheck : null;
  let status = tier.status;
  if (check) {
    if (check.status === 'diff') {
      status = 'repriced';
    } else if (check.status === 'ok') {
      const hours = (Date.now() - new Date(check.checked_at).getTime()) / 36e5;
      status = hours < 24 ? 'verified' : 'trusted';
    } else if (check.status === 'none') {
      status = 'gone';
    } else if (['mixed', 'airport', 'seats', 'mismatch', 'unsure'].includes(check.status)) {
      status = check.status;
    }
  }
  return {
    date: row.date,
    miles: row.miles,
    cash: row.cash,
    status,
    tier: tier.id,
    new: !!row.new,
    scanned: row.scanned,
    check,
  };
}

function routeSummary(route, tiers, dates, twin) {
  const countOf = test => dates.filter(test).length;
  const usable = dates.filter(x => ['verified', 'trusted', 'lead'].includes(x.status));
  return {
    o: route.o,
    d: route.d,
    days: route.rows.length,
    usable: countOf(x => x.status === 'verified' || x.status === 'trusted'),
    leads: countOf(x => x.status === 'lead'),
    bad: countOf(x => RANK[x.status] > RANK.lead),
    new: countOf(x => x.new),
    minCash: usable.length ? Math.min(...usable.map(x => x.cash)) : null,
    scanned: route.lastScan,
    twin,
    tiers: Array.from(tiers.values()).sort(
      (a, b) => RANK[a.status] - RANK[b.status] || b.days - a.days || a.cash - b.cash,
    ),
    dates,
  };
}

const AS_MAX_MONTHS = 3;
const AS_PAGE_BYTES = 3.1 * 1024 * 1024;
function scanPrograms(params) {
  const list = (params && params.programs) || ['AA'];
  return list.filter(
    name => name === 'AA' || (name === 'AS' && typeof fetchAlaskaMonth === 'function'),
  );
}
const alaskaEnabled = () => typeof fetchAlaskaMonth === 'function';

function openBackgroundTab(url) {
  if (typeof GM_openInTab === 'function') GM_openInTab(url, { active: false, insert: true });
  else if (typeof GM !== 'undefined' && GM && typeof GM.openInTab === 'function')
    GM.openInTab(url, { active: false });
  else window.open(url, '_blank');
}

function planJobs(params) {
  const jobs = [];

  const origins = expandCodes(params.A);
  const destinations = expandCodes(params.B);

  const programs = scanPrograms(params);
  for (const date of monthStarts(+params.months)) {
    for (const a of origins) {
      for (const b of destinations) {
        if (a === b) continue;
        for (const cabin of params.cabins) {
          for (const program of programs) {

            if (program === 'AS' && monthStarts(+params.months).indexOf(date) >= AS_MAX_MONTHS) continue;
            const base = { cabin, date, pax: +params.pax, program };
            if (params.dir !== 'back') jobs.push(Object.assign({ o: a, d: b }, base));
            if (params.dir !== 'out') jobs.push(Object.assign({ o: b, d: a }, base));
          }
        }
      }
    }
  }
  return jobs;
}

function estimate(params) {
  const jobs = planJobs(params);
  const alaska = jobs.filter(job => job.program === 'AS').length;
  return {
    requests: jobs.length,

    seconds:
      Math.round((jobs.length - alaska) * SPEEDS[params.speed || 'normal'].perRequest) +
      alaska * 12 +
      5,

    megabytes: alaska ? Math.round(((alaska * AS_PAGE_BYTES) / 1024 / 1024) * 10) / 10 : 0,
  };
}

const CHECK_TIMEOUT = 15 * 60e3;

const BREATHER = { every: [8, 15], seconds: [2, 5] };

function pacer(speed) {
  const mean = (speed.minGap + speed.maxGap) / 2;

  const scale = Math.min(1, mean / 0.8);
  const breatherShare =
    ((BREATHER.seconds[0] + BREATHER.seconds[1]) * scale) / (BREATHER.every[0] + BREATHER.every[1]);
  const base = Math.max(speed.minGap, mean - breatherShare);
  const nextBreak = () =>
    BREATHER.every[0] + Math.floor(Math.random() * (BREATHER.every[1] - BREATHER.every[0] + 1));
  let untilBreak = nextBreak();
  return () => {

    const bell = (Math.random() + Math.random() + Math.random()) / 3;
    const gap = Math.min(speed.maxGap, Math.max(speed.minGap, base * (0.6 + 0.8 * bell)));
    if (--untilBreak > 0) return gap;
    untilBreak = nextBreak();
    return (
      gap +
      scale * (BREATHER.seconds[0] + Math.random() * (BREATHER.seconds[1] - BREATHER.seconds[0]))
    );
  };
}

function shuffleWithinMonths(jobs) {
  const out = [];
  for (let i = 0; i < jobs.length; ) {
    let j = i;
    while (j < jobs.length && jobs[j].date === jobs[i].date) j++;
    const batch = jobs.slice(i, j);
    for (let k = batch.length - 1; k > 0; k--) {
      const r = Math.floor(Math.random() * (k + 1));
      [batch[k], batch[r]] = [batch[r], batch[k]];
    }
    out.push(...batch);
    i = j;
  }
  return out;
}
const GENTLE_FOR = 60 * 60e3;

const milesRange = () => [
  prefs && prefs.floorK ? Math.round(prefs.floorK * 1000) : null,
  prefs && prefs.capK ? Math.round(prefs.capK * 1000) : null,
];
const milesInRange = miles => {
  const [floor, cap] = milesRange();
  return (cap == null || miles <= cap) && (floor == null || miles >= floor);
};
const capLabel = k => (k % 1 ? k.toFixed(1) : String(k)) + 'k';

function rangeText() {
  const { capK, floorK } = prefs || {};
  if (capK && floorK) return `只保留 ${capLabel(floorK)} ~ ${capLabel(capK)}`;
  if (capK) return `只保留 ≤ ${capLabel(capK)}`;
  if (floorK) return `只保留 ≥ ${capLabel(floorK)}`;
  return '';
}

const Scan = {
  state: { job: null },
  listeners: new Set(),
  cancelled: false,
  paused: false,
  waiters: [],

  emit() {
    for (const listener of this.listeners) listener(this.state);
  },
  running() {
    return this.state.job === 'scan';
  },
  cancel() {
    if (!this.running()) return;
    this.cancelled = true;
    this.state.msg = '正在停止……';
    this.wake();
    this.emit();
  },
  wake() {
    this.paused = false;
    this.waiters.splice(0).forEach(resolve => resolve());
  },
  waitIfPaused() {
    return this.paused ? new Promise(resolve => this.waiters.push(resolve)) : Promise.resolve();
  },

  saveRemaining(params, queue, autoResume) {
    Store.set('scanResume', {
      params,
      jobs: queue.slice(),
      at: nowIso(),
      autoResume: !!autoResume,
    });
  },

  async start(params, resumeJobs) {
    if (this.running()) throw new Error(`${persona().name}已经在扫描啦`);
    const jobs =
      resumeJobs && resumeJobs.length ? resumeJobs : shuffleWithinMonths(planJobs(params));
    if (!jobs.length) throw new Error('请至少选一个出发地和一个目的地');

    let speed =
      Store.get('gentleUntil', 0) > Date.now()
        ? SPEEDS.gentle
        : SPEEDS[params.speed] || SPEEDS.normal;
    const startedAt = Date.now();
    const progress = {
      job: 'scan',
      done: 0,
      total: jobs.length,
      found: 0,
      new: 0,
      errors: 0,
      msg: '',
      resumed: !!(resumeJobs && resumeJobs.length),
    };
    const newTiers = new Set();
    const foundTiers = new Set();
    const queue = jobs.slice();
    let gaveUp = false;
    let finished = false;
    let pausedAt = 0;
    let lastMonth = jobs[0].date;
    this.cancelled = false;
    this.paused = false;
    this.state = progress;
    this.emit();

    const apply = (job, result) => {
      if (result.error) {
        progress.errors++;
        progress.lastError = result.error;
      } else {
        const [kept, fresh, skipped] = DB.applyMonth(job, result.days, nowIso(), milesRange());
        progress.found += kept;
        progress.new += fresh;
        progress.skipped = (progress.skipped || 0) + skipped;
        const lastDay = monthBounds(job.date)[1];
        for (const [date, miles, cash] of result.days) {
          if (date < job.date || date > lastDay || typeof miles !== 'number') continue;
          foundTiers.add(
            `${job.o}|${job.d}|${job.cabin}|${Math.round(miles)}|${Number(cash || 0).toFixed(2)}`,
          );
        }
        if (fresh) {
          for (const [, miles, cash] of result.days) {
            newTiers.add(`${job.o}|${job.d}|${miles}|${Number(cash).toFixed(2)}`);
          }
        }
      }
      progress.done++;
      const perJob = (Date.now() - startedAt) / 1000 / progress.done;
      progress.eta = Math.round(perJob * (progress.total - progress.done));
    };

    const pause = job => {
      queue.unshift(job);
      progress.lastError = 'HTTP 403/429';
      speed = SPEEDS.gentle;
      Store.set('gentleUntil', Date.now() + GENTLE_FOR);
      paceVersion++;
      if (this.paused) return;
      this.paused = true;
      pausedAt = Date.now();
      progress.paused = true;
      progress.remaining = queue.length;
      this.saveRemaining(params, queue, false);
      this.emit();
    };

    let paceVersion = 0;
    const worker = async () => {
      let pace = pacer(speed);
      let version = paceVersion;
      while (!this.cancelled && !gaveUp) {
        await this.waitIfPaused();
        if (this.cancelled || gaveUp) return;
        const job = queue.shift();
        if (!job) return;
        if (version !== paceVersion) {
          pace = pacer(speed);
          version = paceVersion;
        }
        let gap = pace();

        if (job.date !== lastMonth) {
          lastMonth = job.date;
          gap += Math.min(1.5, speed.minGap * 4) * (0.7 + Math.random() * 0.6);
        }
        await sleep(gap * 1000);
        if (this.cancelled) return queue.unshift(job);
        if (this.paused) {
          queue.unshift(job);
          continue;
        }
        const result = await fetchCalendar(job);
        if (result.blocked) {
          pause(job);
          continue;
        }
        apply(job, result);
        this.emit();
      }
    };

    const supervisor = async () => {
      let sawCheck = false;
      let lastProbe = 0;
      while (!finished) {
        await sleep(2500);
        if (!this.paused || this.cancelled) continue;
        if (Date.now() - pausedAt > CHECK_TIMEOUT) {
          gaveUp = true;
          this.wake();
          return;
        }
        if (typeof humanCheckShown === 'function' && humanCheckShown()) {
          sawCheck = true;
          continue;
        }
        if (!sawCheck && Date.now() - lastProbe < 30000) continue;
        sawCheck = false;
        lastProbe = Date.now();
        const job = queue[0];
        const result = job ? await fetchCalendar(job) : { days: [] };
        if (result.blocked || this.cancelled) continue;
        if (job) {
          queue.shift();
          apply(job, result);
        }
        progress.paused = false;
        progress.resumedAt = Date.now();
        this.wake();
        this.emit();
      }
    };

    const watching = supervisor();
    await Promise.all(Array.from({ length: speed.workers }, worker));
    finished = true;
    this.wake();
    await watching;

    const stoppedForCheck = gaveUp && queue.length > 0;
    if (stoppedForCheck) this.saveRemaining(params, queue, false);
    else Store.remove('scanResume');
    const last = {
      at: nowIso(),
      outcome: stoppedForCheck ? 'blocked' : this.cancelled ? 'cancelled' : 'done',
      done: progress.done,
      total: progress.total,
      found: progress.found,
      skipped: progress.skipped || 0,
      range: rangeText(),
      new: progress.new,
      errors: progress.errors,
      newTiers: newTiers.size,
      tiers: foundTiers.size,
      lastError: progress.lastError || '',
      remaining: stoppedForCheck ? queue.length : 0,

      seen: false,
      ack: false,
      params,
      msg: stoppedForCheck
        ? '等了 15 分钟验证没有完成，先停下了。扫到的都已保存，点「继续」从停下的地方接着扫。'
        : '',
    };
    Store.set('lastScan', last);
    this.paused = false;
    this.state = { job: null, last };
    this.emit();
    return last;
  },
};

const Store = {
  mode: 'local',
  cache: new Map(),
  listeners: new Map(),

  async init() {
    if (typeof GM_getValue === 'function' && typeof GM_setValue === 'function') {
      this.mode = 'gm';
    } else if (typeof GM !== 'undefined' && GM && typeof GM.getValue === 'function') {
      this.mode = 'gm4';
      await this.preload();

      setInterval(() => this.pollChanges(), 4000);
    } else {
      window.addEventListener('storage', event => this.onStorageEvent(event));
    }
  },

  async preload() {
    const keys = ['idx', 'checks', 'prefs', 'fav', 'lastScan', 'lastVisit', 'pending'];
    for (const key of keys) this.cache.set(key, await GM.getValue(key));
    for (const route of this.cache.get('idx') || []) {
      this.cache.set('rt:' + route, await GM.getValue('rt:' + route));
    }
  },

  get(key, fallback) {
    let value;
    if (this.mode === 'gm') {
      value = GM_getValue(key);
    } else if (this.mode === 'gm4') {
      value = this.cache.get(key);
    } else {
      try {
        const raw = localStorage.getItem('ar:' + key);
        value = raw == null ? undefined : JSON.parse(raw);
      } catch (error) {
        value = undefined;
      }
    }
    return value === undefined || value === null ? fallback : value;
  },

  set(key, value) {
    if (this.mode === 'gm') return GM_setValue(key, value);
    if (this.mode === 'gm4') {
      this.cache.set(key, value);
      GM.setValue(key, value);
      return;
    }
    try {
      localStorage.setItem('ar:' + key, JSON.stringify(value));
    } catch (error) {
      Diagnostics.note('存储写入失败：' + error.message);
    }
  },

  remove(key) {
    if (this.mode === 'gm') {
      if (typeof GM_deleteValue === 'function') GM_deleteValue(key);
    } else if (this.mode === 'gm4') {
      this.cache.delete(key);
      if (typeof GM.deleteValue === 'function') GM.deleteValue(key);
    } else {
      localStorage.removeItem('ar:' + key);
    }
  },

  listen(key, callback) {
    this.listeners.set(key, callback);
    if (this.mode === 'gm' && typeof GM_addValueChangeListener === 'function') {
      GM_addValueChangeListener(key, (name, oldValue, newValue) => callback(newValue));
    }
  },

  onStorageEvent(event) {
    if (!event.key || !event.key.startsWith('ar:')) return;
    const callback = this.listeners.get(event.key.slice(3));
    if (callback) callback(this.get(event.key.slice(3)));
  },

  async pollChanges() {
    for (const [key, callback] of this.listeners) {
      const fresh = await GM.getValue(key);
      if (JSON.stringify(fresh) !== JSON.stringify(this.cache.get(key))) {
        this.cache.set(key, fresh);
        callback(fresh);
      }
    }
  },
};

function routeStoreKey(job) {
  const base = `${job.pax}|${job.cabin}|${job.o}|${job.d}`;
  return job.program && job.program !== 'AA' ? base + '|' + job.program : base;
}

const DB = {
  index: null,
  routes: new Map(),

  keys() {
    if (!this.index) this.index = Store.get('idx', []);
    return this.index;
  },
  route(key) {
    if (!this.routes.has(key))
      this.routes.set(key, Store.get('rt:' + key, { dates: {}, months: {} }));
    return this.routes.get(key);
  },
  save(key, record) {
    this.routes.set(key, record);
    Store.set('rt:' + key, record);
    if (!this.keys().includes(key)) {
      this.index.push(key);
      Store.set('idx', this.index);
    }
  },
  checks() {
    return Store.get('checks', {});
  },

  purgePast() {
    const today = todayIso();
    for (const key of this.keys()) {
      const record = this.route(key);
      const past = Object.keys(record.dates).filter(date => date <= today);
      past.forEach(date => delete record.dates[date]);
      if (past.length) this.save(key, record);
    }
    const checks = this.checks();
    const stale = Object.keys(checks).filter(key => key.slice(-10) <= today);
    stale.forEach(key => delete checks[key]);
    if (stale.length) Store.set('checks', checks);
  },

  applyMonth(job, days, now, range) {
    const key = routeStoreKey(job);
    const record = JSON.parse(JSON.stringify(this.route(key)));
    const [firstDay, lastDay] = monthBounds(job.date);
    const month = firstDay.slice(0, 7);
    const scannedBefore = !!record.months[month];
    const previous = {};
    for (const [date, value] of Object.entries(record.dates)) {
      if (date < firstDay || date > lastDay) continue;
      previous[date] = value;
      delete record.dates[date];
    }
    let kept = 0;
    let fresh = 0;
    let skipped = 0;
    const [floor, cap] = range || [null, null];
    for (const [date, miles, cash] of days) {
      if (date < job.date || date > lastDay || typeof miles !== 'number') continue;
      if ((cap != null && miles > cap) || (floor != null && miles < floor)) {
        skipped++;
        continue;
      }
      const isNew = scannedBefore && !previous[date];
      const firstSeen = previous[date] ? previous[date][2] : now;
      record.dates[date] = [
        Math.round(miles),
        cash == null ? null : Math.round(Number(cash) * 100) / 100,
        firstSeen,
        now,
        isNew ? 1 : 0,
      ];
      kept++;
      if (isNew) fresh++;
    }
    record.months[month] = now;
    this.save(key, record);
    return [kept, fresh, skipped];
  },

  combos() {
    const latest = new Map();
    for (const key of this.keys()) {
      const [pax, cabin] = key.split('|');
      const last = Object.values(this.route(key).months).sort().pop() || '';
      const id = pax + '|' + cabin;
      if (!latest.has(id) || latest.get(id).last < last) latest.set(id, { pax: +pax, cabin, last });
    }
    return Array.from(latest.values()).sort((a, b) => b.last.localeCompare(a.last));
  },

  saveCheck(item, result) {
    const calendar = this.route(routeStoreKey(item)).dates[item.date];
    const checks = this.checks();
    checks[`${item.o}|${item.d}|${item.cabin}|${item.pax}|${item.date}`] = Object.assign(
      {},
      result,
      {
        date: item.date,
        checked_at: nowIso(),
        cal_miles: calendar ? calendar[0] : null,
        cal_cash: calendar ? calendar[1] : null,
      },
    );
    Store.set('checks', checks);
  },
};

const AIRPORT_FIELDS = ['n', 'c', 'a', 'ce', 'co', 'r', 'm', 'big'];
const HOME_REGIONS = new Set(['CN', 'HMT']);
let airportTable = null;
let metroTable = null;
let searchTable = null;

function airports() {
  if (airportTable) return airportTable;
  airportTable = {};
  for (const [code, row] of Object.entries(DATA.airports)) {
    const entry = {};
    AIRPORT_FIELDS.forEach((field, i) => {
      if (row[i] !== undefined && row[i] !== '' && row[i] !== 0) entry[field] = row[i];
    });
    airportTable[code] = entry;
  }
  for (const [code, entry] of Object.entries(METRO_CODES)) {
    airportTable[code] = airportTable[code] || Object.assign({ metro: true }, entry);
  }

  for (const group of DATA.groups) {
    for (const [code, name] of Object.entries(group.codes)) {
      airportTable[code] = airportTable[code] || { c: name };
      airportTable[code].n = name;
    }
  }
  return airportTable;
}

const airport = code => airports()[code] || {};
const cityName = code => airport(code).n || code;

function metroIndex() {
  if (!metroTable) {
    metroTable = {};
    for (const [code, entry] of Object.entries(airports())) if (entry.m) metroTable[code] = entry.m;
  }
  return metroTable;
}

function regionOf(o, d) {
  const fromRegion = airport(o).r;
  const key = !fromRegion || HOME_REGIONS.has(fromRegion) ? airport(d).r : fromRegion;
  return { key: key || 'other', label: DATA.regions[key] || '其他' };
}

function searchIndex() {
  if (searchTable) return searchTable;
  searchTable = Object.entries(airports()).map(([code, entry]) => ({
    code,
    entry,
    english: (entry.ce || '').toLowerCase(),
  }));

  const metroNames = {};
  for (const item of searchTable) {
    if (item.entry.m && item.entry.ce) {
      (metroNames[item.entry.m] = metroNames[item.entry.m] || new Set()).add(item.english);
    }
  }
  for (const item of searchTable) {
    if (item.entry.m && metroNames[item.entry.m])
      item.english = Array.from(metroNames[item.entry.m]).join(' ');
  }
  return searchTable;
}

function searchAirports(query) {
  const text = query.trim();
  if (!text) return [];
  const lower = text.toLowerCase();
  const upper = text.toUpperCase();
  const matches = [];
  for (const item of searchIndex()) {
    const entry = item.entry;
    let score;
    if (item.code === upper) score = 0;
    else if (entry.n && entry.n.startsWith(text)) score = 1;
    else if (entry.c && entry.c.startsWith(text)) score = 1.5;
    else if (item.english.startsWith(lower) || item.english.includes(' ' + lower)) score = 2;
    else if (entry.n && entry.n.includes(text)) score = 3;
    else if (entry.a && entry.a.includes(text)) score = 3.5;
    else if (lower.length >= 3 && item.english.includes(lower)) score = 4;
    else if (entry.co && entry.co.startsWith(text)) score = 5;
    else continue;
    matches.push([score - (entry.big ? 0.4 : 0), item]);
  }
  matches.sort((a, b) => a[0] - b[0] || (a[1].entry.n || '').length - (b[1].entry.n || '').length);
  return matches.slice(0, 60).map(match => match[1]);
}

const METRO_CODES = {
  NYC: { n: '纽约（全部机场）', c: '纽约', ce: 'New York', co: '美国', r: 'NA', big: 1 },
  WAS: { n: '华盛顿（全部机场）', c: '华盛顿', ce: 'Washington', co: '美国', r: 'NA', big: 1 },
  CHI: { n: '芝加哥（全部机场）', c: '芝加哥', ce: 'Chicago', co: '美国', r: 'NA', big: 1 },
  LON: { n: '伦敦（全部机场）', c: '伦敦', ce: 'London', co: '英国', r: 'EU', big: 1 },
  PAR: { n: '巴黎（全部机场）', c: '巴黎', ce: 'Paris', co: '法国', r: 'EU', big: 1 },
  TYO: { n: '东京（全部机场）', c: '东京', ce: 'Tokyo', co: '日本', r: 'EA', big: 1 },
  BJS: { n: '北京（全部机场）', c: '北京', ce: 'Beijing', co: '中国', r: 'CN', big: 1 },
};

const COUNTRIES = {
  中国: {
    label: '中国大陆',
    en: 'china mainland prc',
    alias: '大陆 内地',
    gates: 'BJS PVG SHA CAN SZX CTU TFU CKG XIY HGH',
  },
  美国: {
    en: 'united states usa us america',
    alias: '美利坚',
    gates: 'NYC LAX SFO CHI DFW SEA WAS BOS MIA ATL IAH',
  },
  日本: { en: 'japan', gates: 'TYO KIX NGO FUK CTS' },
  韩国: { en: 'korea south korea', gates: 'ICN GMP PUS' },
  英国: { en: 'united kingdom uk britain england', gates: 'LON MAN EDI' },
  法国: { en: 'france', gates: 'PAR NCE' },
  德国: { en: 'germany', gates: 'FRA MUC BER DUS HAM' },
  荷兰: { en: 'netherlands holland', gates: 'AMS' },
  西班牙: { en: 'spain', gates: 'MAD BCN' },
  意大利: { en: 'italy', gates: 'FCO MXP VCE' },
  土耳其: { en: 'turkey turkiye', gates: 'IST SAW AYT' },
  阿联酋: { en: 'united arab emirates uae', gates: 'DXB AUH' },
  卡塔尔: { en: 'qatar', gates: 'DOH' },
  沙特阿拉伯: { en: 'saudi arabia', alias: '沙特', gates: 'RUH JED' },
  泰国: { en: 'thailand', gates: 'BKK DMK HKT CNX' },
  新加坡: { en: 'singapore', gates: 'SIN' },
  马来西亚: { en: 'malaysia', gates: 'KUL PEN BKI' },
  印度尼西亚: { en: 'indonesia', alias: '印尼', gates: 'CGK DPS' },
  菲律宾: { en: 'philippines', gates: 'MNL CEB' },
  越南: { en: 'vietnam viet nam', gates: 'SGN HAN DAD' },
  印度: { en: 'india', gates: 'DEL BOM BLR MAA' },
  澳大利亚: { en: 'australia', alias: '澳洲', gates: 'SYD MEL BNE PER' },
  新西兰: { en: 'new zealand', gates: 'AKL CHC' },
  加拿大: { en: 'canada', gates: 'YYZ YVR YUL YYC' },
  墨西哥: { en: 'mexico', gates: 'MEX CUN GDL' },
  中国香港: { label: '中国香港', en: 'hong kong', alias: '香港', gates: 'HKG' },
  中国澳门: { label: '中国澳门', en: 'macau macao', alias: '澳门', gates: 'MFM' },
  中国台湾: { label: '中国台湾', en: 'taiwan', alias: '台湾', gates: 'TPE KHH' },
};

const isCountry = token => token.charAt(0) === '@';
const countryOf = code => airport(code).co || '';
const countryLabel = name => (COUNTRIES[name] && COUNTRIES[name].label) || name;
const placeName = token => (isCountry(token) ? countryLabel(token.slice(1)) : cityName(token));

function gatewaysOf(name) {
  const curated = COUNTRIES[name];
  if (curated) return curated.gates.split(' ').filter(code => airports()[code]);
  return Object.entries(airports())
    .filter(([, entry]) => entry.co === name && entry.big && !entry.metro)
    .slice(0, 6)
    .map(([code]) => code);
}

function expandCodes(tokens) {
  const codes = [];
  for (const token of tokens) {
    for (const code of isCountry(token) ? gatewaysOf(token.slice(1)) : [token]) {
      if (!codes.includes(code)) codes.push(code);
    }
  }
  return codes;
}

let countryNames = null;
function searchCountries(query) {
  const text = query.trim().toLowerCase();
  if (!text) return [];
  if (!countryNames) {
    countryNames = new Set(Object.keys(COUNTRIES));
    for (const entry of Object.values(airports()))
      if (entry.co && entry.big) countryNames.add(entry.co);
  }
  const hits = [];
  for (const name of countryNames) {
    const info = COUNTRIES[name] || {};
    const words = [name, info.label || '', info.alias || ''].join(' ');
    const english = ' ' + (info.en || '');
    if (words.includes(query.trim()) || (text.length >= 2 && english.includes(' ' + text))) {
      if (gatewaysOf(name).length) hits.push(name);
    }
  }
  return hits.slice(0, 2);
}

const storyList = () => DATA.stories || [];

function storyState() {
  const saved = Store.get('stories', null) || { day: '', n: 0, read: [], pos: {} };
  const today = todayIso();
  if (saved.day !== today && saved.n < storyList().length) {
    saved.day = today;
    saved.n++;
    Store.set('stories', saved);
  }
  return saved;
}

const todayStory = () => storyState().n - 1;
const storyRead = index => storyState().read.indexOf(index) >= 0;

function saveStoryPos(index, line, finished) {
  const saved = storyState();
  saved.pos[index] = line;
  if (finished && !storyRead(index)) saved.read.push(index);
  Store.set('stories', saved);
}

const persona = () => DATA.persona;

const lineBags = {};
function drawLine(key, lines) {
  if (!lines || !lines.length) return '';
  let bag = lineBags[key];
  if (!bag || !bag.length) {
    bag = lineBags[key] = lines.map((_, i) => i).sort(() => Math.random() - 0.5);
    if (bag.length > 1 && bag[0] === lineBags[key + '#last']) bag.push(bag.shift());
  }
  const index = bag.shift();
  lineBags[key + '#last'] = index;
  return lines[index];
}

function pickLine(group, vars, pokeLevel) {
  const source = DATA.lines || {};
  const text = pokeLevel
    ? drawLine('poke' + pokeLevel, (source.poke || [])[pokeLevel - 1])
    : drawLine(group, (source.lines || {})[group]);
  return text.replace(/[{](\w+)[}]/g, (match, name) =>
    vars && vars[name] != null ? vars[name] : match,
  );
}

function hashStr(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let state = seed >>> 0 || 1;
  return () => (state = (Math.imul(state, 1664525) + 1013904223) >>> 0) / 4294967296;
}

const GROUND = 330;
const fillAttr = color => `fill="${color}"`;

const SKIES = [
  {
    top: '#9fd3ff',
    bot: '#eaf6ff',
    sun: '#fff4b8',
    far: '#b3d4f0',
    near: '#6f9fd2',
    ground: '#628fc2',
    win: '#eaf6ff',
  },
  {
    top: '#ffc2d6',
    bot: '#fff1e6',
    sun: '#ffe2a8',
    far: '#f2bccb',
    near: '#d58aa8',
    ground: '#c47a9a',
    win: '#fff1e6',
  },
  {
    top: '#ffb194',
    bot: '#ffe8cc',
    sun: '#fff4cf',
    far: '#f3b49a',
    near: '#d48272',
    ground: '#c07065',
    win: '#ffe8cc',
  },
  {
    top: '#b8a6ec',
    bot: '#ffd6e1',
    sun: '#fff7de',
    far: '#b2a4e0',
    near: '#8270c6',
    ground: '#705fb3',
    win: '#ffd6e1',
    moon: true,
  },
  {
    top: '#a6e6d6',
    bot: '#f1fbf8',
    sun: '#fffbe2',
    far: '#a8dccf',
    near: '#5fb3a2',
    ground: '#52a291',
    win: '#f1fbf8',
  },
  {
    top: '#34418a',
    bot: '#9286cc',
    sun: '#fff3c6',
    far: '#625fa8',
    near: '#41408a',
    ground: '#36357c',
    win: '#ffe9a8',
    moon: true,
    stars: true,
  },
];

const EXTRA_SKIES = {
  summerBlue: {
    top: '#3fb3ff',
    bot: '#dcf3ff',
    sun: '#fff0a0',
    far: '#9cc9e8',
    near: '#4a8bc6',
    ground: '#3c7cbc',
    win: '#e6f6ff',
  },
  summerTeal: {
    top: '#2cc3e3',
    bot: '#e2fbff',
    sun: '#fff3b0',
    far: '#8ed2dc',
    near: '#379bad',
    ground: '#2d899a',
    win: '#e8fdff',
  },
  amber: {
    top: '#ffc684',
    bot: '#fff0d8',
    sun: '#fff3c4',
    far: '#e8b287',
    near: '#b46d4c',
    ground: '#a35f42',
    win: '#fff0d8',
  },
};
const SEASON_SKIES = {
  winter: [0, 3, 5],
  spring: [1, 4, 0],
  summer: ['summerBlue', 'summerTeal'],
  autumn: [2, 'amber'],
};

function seasonPalette(season, seed) {
  const list = SEASON_SKIES[season];
  if (!list) return SKIES[seed % SKIES.length];
  const pick = list[seed % list.length];
  return typeof pick === 'number' ? SKIES[pick] : EXTRA_SKIES[pick];
}

function bldg(x, w, h, color, win, rand) {
  let s = `<rect x="${x.toFixed(1)}" y="${GROUND - h}" width="${w.toFixed(1)}" height="${h + 1}" rx="1.5" ${fillAttr(color)}/>`;
  if (win)
    for (let y = GROUND - h + 8; y < GROUND - 8; y += 11)
      for (let xx = x + 4; xx < x + w - 5; xx += 8)
        if (rand() < 0.42)
          s += `<rect x="${xx.toFixed(1)}" y="${y}" width="3" height="4" rx=".5" fill="${win}" opacity=".75"/>`;
  return s;
}
function skyline(x0, x1, lo, hi, color, win, rand) {
  let s = '',
    x = x0;
  while (x < x1) {
    const w = 14 + rand() * 20;
    s += bldg(x, w, lo + rand() * (hi - lo), color, win, rand);
    x += w + 1 + rand() * 3;
  }
  return s;
}
function hills(color, amp, rand, base = GROUND + 2) {
  let d = `M0 ${base} L0 ${base - amp * (0.5 + rand() * 0.5)}`;
  for (let x = 0; x < 300; x += 60)
    d += ` Q${x + 30} ${base - amp * (0.8 + rand() * 0.6)} ${x + 60} ${base - amp * (0.3 + rand() * 0.6)}`;
  return `<path d="${d} L300 ${base} Z" ${fillAttr(color)}/>`;
}
function dome(cx, radius, color, baseH = 30) {
  const y = GROUND - baseH;
  return (
    `<rect x="${cx - radius}" y="${y}" width="${2 * radius}" height="${baseH + 1}" ${fillAttr(color)}/>` +
    `<path d="M${cx - radius} ${y + 1} A${radius} ${radius} 0 0 1 ${cx + radius} ${y + 1} Z" ${fillAttr(color)}/>` +
    `<rect x="${cx - 1}" y="${y - radius - 12}" width="2" height="13" ${fillAttr(color)}/><circle cx="${cx}" cy="${y - radius - 13}" r="2.4" ${fillAttr(color)}/>`
  );
}
function minaret(x, h, color) {
  return (
    `<rect x="${x - 4}" y="${GROUND - h}" width="8" height="${h + 1}" ${fillAttr(color)}/>` +
    `<rect x="${x - 6.5}" y="${GROUND - h * 0.72}" width="13" height="3" ${fillAttr(color)}/><rect x="${x - 6}" y="${GROUND - h * 0.42}" width="12" height="3" ${fillAttr(color)}/>` +
    `<path d="M${x - 4.5} ${GROUND - h} L${x} ${GROUND - h - 16} L${x + 4.5} ${GROUND - h} Z" ${fillAttr(color)}/>`
  );
}
function needle(x, h, color) {
  return (
    `<path d="M${x - 8} ${GROUND} L${x - 2.5} ${GROUND - h * 0.74} L${x + 2.5} ${GROUND - h * 0.74} L${x + 8} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<ellipse cx="${x}" cy="${GROUND - h * 0.74}" rx="13" ry="7" ${fillAttr(color)}/><ellipse cx="${x}" cy="${GROUND - h * 0.82}" rx="7" ry="4" ${fillAttr(color)}/>` +
    `<rect x="${x - 1.4}" y="${GROUND - h}" width="2.8" height="${h * 0.2}" ${fillAttr(color)}/>`
  );
}
function burj(x, h, color) {
  const st = [
    [15, 0],
    [15, 0.25],
    [11, 0.25],
    [11, 0.48],
    [7.5, 0.48],
    [7.5, 0.68],
    [4.5, 0.68],
    [4.5, 0.84],
    [1.6, 0.84],
    [0, 1],
  ];
  const L = st.map(([w, t]) => `${x - w},${GROUND - h * t}`),
    Rt = st
      .slice()
      .reverse()
      .map(([w, t]) => `${x + w},${GROUND - h * t}`);
  return `<polygon points="${L.join(' ')} ${Rt.join(' ')}" ${fillAttr(color)}/>`;
}
function sail(x, h, color) {
  return (
    `<path d="M${x} ${GROUND} L${x} ${GROUND - h} Q${x + h * 0.48} ${GROUND - h * 0.55} ${x + h * 0.34} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<rect x="${x - 3}" y="${GROUND - h - 12}" width="2" height="14" ${fillAttr(color)}/>`
  );
}
function pyramid(cx, w, h, color, light) {
  return (
    `<path d="M${cx - w / 2} ${GROUND} L${cx} ${GROUND - h} L${cx + w / 2} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<path d="M${cx} ${GROUND - h} L${cx + w / 2} ${GROUND} L${cx + w * 0.1} ${GROUND} Z" fill="${light}" opacity=".3"/>`
  );
}
function eiffel(cx, h, color) {
  const a = h * 0.27;
  return (
    `<path d="M${cx - a} ${GROUND} Q${cx - h * 0.11} ${GROUND - h * 0.36} ${cx - h * 0.05} ${GROUND - h * 0.62} L${cx - 1.6} ${GROUND - h * 0.96} L${cx} ${GROUND - h} L${cx + 1.6} ${GROUND - h * 0.96} L${cx + h * 0.05} ${GROUND - h * 0.62} Q${cx + h * 0.11} ${GROUND - h * 0.36} ${cx + a} ${GROUND} L${cx + h * 0.15} ${GROUND} Q${cx} ${GROUND - h * 0.22} ${cx - h * 0.15} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<rect x="${cx - h * 0.16}" y="${GROUND - h * 0.31}" width="${h * 0.32}" height="5" rx="1" ${fillAttr(color)}/><rect x="${cx - h * 0.075}" y="${GROUND - h * 0.61}" width="${h * 0.15}" height="4" rx="1" ${fillAttr(color)}/>`
  );
}
function mountain(cx, w, h, color, snow) {
  let s = `<path d="M${cx - w / 2} ${GROUND} Q${cx - w * 0.2} ${GROUND - h * 0.55} ${cx - w * 0.06} ${GROUND - h * 0.94} L${cx} ${GROUND - h} L${cx + w * 0.06} ${GROUND - h * 0.94} Q${cx + w * 0.2} ${GROUND - h * 0.55} ${cx + w / 2} ${GROUND} Z" ${fillAttr(color)}/>`;
  if (snow)
    s += `<path d="M${cx - w * 0.13} ${GROUND - h * 0.74} L${cx - w * 0.06} ${GROUND - h * 0.94} L${cx} ${GROUND - h} L${cx + w * 0.06} ${GROUND - h * 0.94} L${cx + w * 0.13} ${GROUND - h * 0.74} L${cx + w * 0.06} ${GROUND - h * 0.8} L${cx} ${GROUND - h * 0.72} L${cx - w * 0.06} ${GROUND - h * 0.8} Z" fill="#fff" opacity=".92"/>`;
  return s;
}
function pagoda(cx, h, color, tiers = 4) {
  let s = '',
    y = GROUND,
    w = h * 0.55;
  const th = h / (tiers + 0.8);
  for (let i = 0; i < tiers; i++) {
    s += `<rect x="${cx - w * 0.32}" y="${y - th * 0.55}" width="${w * 0.64}" height="${th * 0.56}" ${fillAttr(color)}/>`;
    y -= th * 0.55;
    s += `<path d="M${cx - w / 2 - 7} ${y + 3} Q${cx - w * 0.2} ${y - th * 0.15} ${cx} ${y - th * 0.4} Q${cx + w * 0.2} ${y - th * 0.15} ${cx + w / 2 + 7} ${y + 3} Z" ${fillAttr(color)}/>`;
    y -= th * 0.38;
    w *= 0.8;
  }
  return s + `<rect x="${cx - 1.2}" y="${y - 14}" width="2.4" height="16" ${fillAttr(color)}/>`;
}
function roundTemple(cx, h, color) {
  let s = `<rect x="${cx - 40}" y="${GROUND - 10}" width="80" height="11" ${fillAttr(color)}/>`,
    y = GROUND - 10,
    w = 62;
  for (let i = 0; i < 3; i++) {
    s += `<rect x="${cx - w * 0.36}" y="${y - 14}" width="${w * 0.72}" height="15" ${fillAttr(color)}/>`;
    y -= 14;
    s += `<path d="M${cx - w / 2} ${y + 2} Q${cx} ${y - 22} ${cx + w / 2} ${y + 2} Z" ${fillAttr(color)}/>`;
    y -= 12;
    w *= 0.78;
  }
  return s + `<circle cx="${cx}" cy="${y - 4}" r="4" ${fillAttr(color)}/>`;
}
function stupa(cx, h, color) {
  return (
    `<rect x="${cx - h * 0.32}" y="${GROUND - h * 0.14}" width="${h * 0.64}" height="${h * 0.14 + 1}" ${fillAttr(color)}/>` +
    `<path d="M${cx - h * 0.26} ${GROUND - h * 0.13} Q${cx - h * 0.26} ${GROUND - h * 0.5} ${cx} ${GROUND - h * 0.56} Q${cx + h * 0.26} ${GROUND - h * 0.5} ${cx + h * 0.26} ${GROUND - h * 0.13} Z" ${fillAttr(color)}/>` +
    `<path d="M${cx - 6} ${GROUND - h * 0.54} L${cx} ${GROUND - h} L${cx + 6} ${GROUND - h * 0.54} Z" ${fillAttr(color)}/>`
  );
}
function twinTowers(cx, h, color) {
  const t = x =>
    `<path d="M${x - 11} ${GROUND} L${x - 11} ${GROUND - h * 0.6} L${x - 8} ${GROUND - h * 0.6} L${x - 8} ${GROUND - h * 0.75} L${x - 5} ${GROUND - h * 0.75} L${x - 5} ${GROUND - h * 0.85} L${x - 1.5} ${GROUND - h * 0.87} L${x} ${GROUND - h} L${x + 1.5} ${GROUND - h * 0.87} L${x + 5} ${GROUND - h * 0.85} L${x + 5} ${GROUND - h * 0.75} L${x + 8} ${GROUND - h * 0.75} L${x + 8} ${GROUND - h * 0.6} L${x + 11} ${GROUND - h * 0.6} L${x + 11} ${GROUND} Z" ${fillAttr(color)}/>`;
  return (
    t(cx - 20) +
    t(cx + 20) +
    `<rect x="${cx - 10}" y="${GROUND - h * 0.48}" width="20" height="4" ${fillAttr(color)}/>`
  );
}
function mbs(cx, color) {
  let s = '';
  for (const dx of [-34, 0, 34])
    s += `<path d="M${cx + dx - 11} ${GROUND} L${cx + dx - 8} ${GROUND - 110} L${cx + dx + 8} ${GROUND - 110} L${cx + dx + 11} ${GROUND} Z" ${fillAttr(color)}/>`;
  return (
    s +
    `<path d="M${cx - 58} ${GROUND - 112} Q${cx} ${GROUND - 124} ${cx + 66} ${GROUND - 114} L${cx + 64} ${GROUND - 107} L${cx - 56} ${GROUND - 106} Z" ${fillAttr(color)}/>`
  );
}
function bigBen(cx, h, color, light) {
  return (
    `<rect x="${cx - 10}" y="${GROUND - h * 0.82}" width="20" height="${h * 0.82 + 1}" ${fillAttr(color)}/>` +
    `<rect x="${cx - 12}" y="${GROUND - h * 0.82}" width="24" height="20" ${fillAttr(color)}/><circle cx="${cx}" cy="${GROUND - h * 0.82 + 10}" r="7" fill="${light}" opacity=".85"/>` +
    `<path d="M${cx - 12} ${GROUND - h * 0.82} L${cx} ${GROUND - h} L${cx + 12} ${GROUND - h * 0.82} Z" ${fillAttr(color)}/>`
  );
}
function wheel(cx, radius, color) {
  let s = `<circle cx="${cx}" cy="${GROUND - radius - 8}" r="${radius}" fill="none" stroke="${color}" stroke-width="3"/>`;
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    s += `<line x1="${cx}" y1="${GROUND - radius - 8}" x2="${(cx + radius * Math.cos(a)).toFixed(1)}" y2="${(GROUND - radius - 8 + radius * Math.sin(a)).toFixed(1)}" stroke="${color}" stroke-width="1.4"/>`;
    s += `<circle cx="${(cx + radius * Math.cos(a)).toFixed(1)}" cy="${(GROUND - radius - 8 + radius * Math.sin(a)).toFixed(1)}" r="3.2" ${fillAttr(color)}/>`;
  }
  return (
    s +
    `<path d="M${cx - 16} ${GROUND} L${cx} ${GROUND - radius - 8} L${cx + 16} ${GROUND} Z" fill="none" stroke="${color}" stroke-width="3"/>`
  );
}
function bridge(x0, x1, h, color) {
  const t1 = x0 + (x1 - x0) * 0.25,
    t2 = x0 + (x1 - x0) * 0.75,
    deck = GROUND - 26;
  return (
    `<rect x="${x0}" y="${deck}" width="${x1 - x0}" height="5" ${fillAttr(color)}/>` +
    `<rect x="${t1 - 4}" y="${GROUND - h}" width="8" height="${h}" ${fillAttr(color)}/><rect x="${t2 - 4}" y="${GROUND - h}" width="8" height="${h}" ${fillAttr(color)}/>` +
    `<path d="M${x0} ${deck - 2} Q${(x0 + t1) / 2} ${deck - 8} ${t1} ${GROUND - h + 4} Q${(t1 + t2) / 2} ${deck - 6} ${t2} ${GROUND - h + 4} Q${(t2 + x1) / 2} ${deck - 8} ${x1} ${deck - 2}" fill="none" stroke="${color}" stroke-width="2.4"/>`
  );
}
function opera(cx, color, light) {
  let s = `<rect x="${cx - 70}" y="${GROUND - 12}" width="140" height="13" ${fillAttr(color)}/>`;
  [
    [-46, 40],
    [-18, 62],
    [14, 52],
    [40, 36],
  ].forEach(([dx, hh], i) => {
    s += `<path d="M${cx + dx - 8} ${GROUND - 12} Q${cx + dx - 6} ${GROUND - 12 - hh} ${cx + dx + 22} ${GROUND - 12 - hh} Q${cx + dx + 12} ${GROUND - 30} ${cx + dx + 20} ${GROUND - 12} Z" fill="${i % 2 ? light : color}" opacity="${i % 2 ? 0.9 : 1}"/>`;
  });
  return s;
}
function colosseum(cx, w, h, color, light) {
  let s = `<path d="M${cx - w / 2} ${GROUND} L${cx - w / 2} ${GROUND - h * 0.8} L${cx + w * 0.2} ${GROUND - h} L${cx + w / 2} ${GROUND - h * 0.7} L${cx + w / 2} ${GROUND} Z" ${fillAttr(color)}/>`;
  for (let row = 0; row < 3; row++)
    for (let x = cx - w / 2 + 8; x < cx + w / 2 - 8; x += 14)
      s += `<rect x="${x}" y="${GROUND - h * 0.75 + row * h * 0.24}" width="7" height="${h * 0.14}" rx="3.5" fill="${light}" opacity=".55"/>`;
  return s;
}
function windmill(cx, h, color) {
  const top = GROUND - h;
  let s = `<path d="M${cx - 12} ${GROUND} L${cx - 7} ${top + 10} L${cx + 7} ${top + 10} L${cx + 12} ${GROUND} Z" ${fillAttr(color)}/><path d="M${cx - 9} ${top + 11} Q${cx} ${top - 2} ${cx + 9} ${top + 11} Z" ${fillAttr(color)}/>`;
  for (const a of [20, 110, 200, 290]) {
    const rad = (a * Math.PI) / 180,
      ex = cx + 38 * Math.cos(rad),
      ey = top + 6 + 38 * Math.sin(rad);
    s += `<line x1="${cx}" y1="${top + 6}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${color}" stroke-width="5"/>`;
  }
  return s;
}
function canalHouses(x0, n, color, light, rand) {
  let s = '',
    x = x0;
  for (let i = 0; i < n; i++) {
    const w = 18 + rand() * 6,
      h = 50 + rand() * 30;
    s += `<path d="M${x} ${GROUND} L${x} ${GROUND - h} L${x + w / 2} ${GROUND - h - 12} L${x + w} ${GROUND - h} L${x + w} ${GROUND} Z" ${fillAttr(color)}/>`;
    for (let y = GROUND - h + 8; y < GROUND - 8; y += 14)
      s += `<rect x="${x + 4}" y="${y}" width="4" height="6" fill="${light}" opacity=".6"/><rect x="${x + w - 8}" y="${y}" width="4" height="6" fill="${light}" opacity=".6"/>`;
    x += w + 1;
  }
  return s;
}
function onion(cx, h, color) {
  return (
    `<rect x="${cx - 9}" y="${GROUND - h * 0.6}" width="18" height="${h * 0.6 + 1}" ${fillAttr(color)}/>` +
    `<path d="M${cx} ${GROUND - h} Q${cx - 2} ${GROUND - h * 0.86} ${cx - 13} ${GROUND - h * 0.72} Q${cx - 16} ${GROUND - h * 0.6} ${cx} ${GROUND - h * 0.58} Q${cx + 16} ${GROUND - h * 0.6} ${cx + 13} ${GROUND - h * 0.72} Q${cx + 2} ${GROUND - h * 0.86} ${cx} ${GROUND - h} Z" ${fillAttr(color)}/>`
  );
}
function palm(x, h, color) {
  const tx = x + h * 0.18,
    ty = GROUND - h;
  let s = `<path d="M${x - 3} ${GROUND} Q${x + h * 0.02} ${GROUND - h * 0.5} ${tx - 2} ${ty} L${tx + 2} ${ty} Q${x + h * 0.08} ${GROUND - h * 0.5} ${x + 3} ${GROUND} Z" ${fillAttr(color)}/>`;
  for (const [dx, dy] of [
    [-30, 10],
    [-22, -10],
    [0, -16],
    [24, -8],
    [32, 12],
  ])
    s += `<path d="M${tx} ${ty} Q${tx + dx * 0.5} ${ty + dy - 10} ${tx + dx} ${ty + dy} Q${tx + dx * 0.5} ${ty + dy - 3} ${tx} ${ty + 2} Z" ${fillAttr(color)}/>`;
  return s;
}
function acacia(x, h, color) {
  return (
    `<path d="M${x - 2.5} ${GROUND} L${x - 1.5} ${GROUND - h * 0.7} L${x - 14} ${GROUND - h * 0.85} L${x - 1} ${GROUND - h * 0.78} L${x + 12} ${GROUND - h * 0.9} L${x + 1.5} ${GROUND - h * 0.72} L${x + 2.5} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<ellipse cx="${x}" cy="${GROUND - h * 0.92}" rx="${h * 0.62}" ry="${h * 0.12}" ${fillAttr(color)}/>`
  );
}
function tableMountain(color) {
  return `<path d="M0 ${GROUND} L20 ${GROUND - 70} Q40 ${GROUND - 108} 70 ${GROUND - 112} L230 ${GROUND - 112} Q262 ${GROUND - 106} 280 ${GROUND - 72} L300 ${GROUND - 50} L300 ${GROUND} Z" ${fillAttr(color)}/>`;
}
function waterVillas(color, light) {
  let s = '';
  for (const x of [40, 110, 180, 245]) {
    s += `<rect x="${x - 2}" y="${GROUND - 30}" width="2" height="30" ${fillAttr(color)}/><rect x="${x + 22}" y="${GROUND - 30}" width="2" height="30" ${fillAttr(color)}/>`;
    s += `<rect x="${x - 4}" y="${GROUND - 46}" width="30" height="18" ${fillAttr(color)}/><path d="M${x - 8} ${GROUND - 44} L${x + 11} ${GROUND - 62} L${x + 30} ${GROUND - 44} Z" ${fillAttr(color)}/>`;
  }
  return s + `<rect x="0" y="${GROUND - 16}" width="300" height="3" fill="${light}" opacity=".5"/>`;
}
function cantonTower(cx, h, color) {
  return (
    `<path d="M${cx - 16} ${GROUND} Q${cx - 2} ${GROUND - h * 0.5} ${cx - 10} ${GROUND - h * 0.8} L${cx + 10} ${GROUND - h * 0.8} Q${cx + 2} ${GROUND - h * 0.5} ${cx + 16} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<rect x="${cx - 1.4}" y="${GROUND - h}" width="2.8" height="${h * 0.22}" ${fillAttr(color)}/>`
  );
}
function pearlTower(cx, h, color) {
  return (
    `<path d="M${cx - 20} ${GROUND} L${cx - 4} ${GROUND - h * 0.3} L${cx + 4} ${GROUND - h * 0.3} L${cx + 20} ${GROUND} Z" ${fillAttr(color)}/>` +
    `<rect x="${cx - 3}" y="${GROUND - h * 0.86}" width="6" height="${h * 0.6}" ${fillAttr(color)}/><circle cx="${cx}" cy="${GROUND - h * 0.32}" r="15" ${fillAttr(color)}/>` +
    `<circle cx="${cx}" cy="${GROUND - h * 0.7}" r="10" ${fillAttr(color)}/><rect x="${cx - 1}" y="${GROUND - h}" width="2" height="${h * 0.16}" ${fillAttr(color)}/>`
  );
}
function splitGate(cx, h, color) {
  const half = s =>
    `<path d="M${cx + s * 4} ${GROUND} L${cx + s * 4} ${GROUND - h} L${cx + s * 10} ${GROUND - h * 0.86} L${cx + s * 14} ${GROUND - h * 0.7} L${cx + s * 22} ${GROUND - h * 0.56} L${cx + s * 26} ${GROUND - h * 0.36} L${cx + s * 34} ${GROUND - h * 0.22} L${cx + s * 36} ${GROUND} Z" ${fillAttr(color)}/>`;
  return half(-1) + half(1);
}
function taj(cx, color) {
  return (
    `<rect x="${cx - 40}" y="${GROUND - 40}" width="80" height="41" ${fillAttr(color)}/>` +
    `<path d="M${cx - 26} ${GROUND - 40} Q${cx - 30} ${GROUND - 74} ${cx} ${GROUND - 92} Q${cx + 30} ${GROUND - 74} ${cx + 26} ${GROUND - 40} Z" ${fillAttr(color)}/><rect x="${cx - 1}" y="${GROUND - 104}" width="2" height="13" ${fillAttr(color)}/>` +
    minaret(cx - 58, 84, color) +
    minaret(cx + 58, 84, color)
  );
}
function sagrada(cx, h, color) {
  let s = `<rect x="${cx - 36}" y="${GROUND - h * 0.35}" width="72" height="${h * 0.35 + 1}" ${fillAttr(color)}/>`;
  for (const [dx, k] of [
    [-26, 0.8],
    [-9, 1],
    [9, 0.96],
    [26, 0.78],
  ])
    s += `<path d="M${cx + dx - 6} ${GROUND - h * 0.3} L${cx + dx - 4} ${GROUND - h * k + 8} Q${cx + dx} ${GROUND - h * k - 6} ${cx + dx + 4} ${GROUND - h * k + 8} L${cx + dx + 6} ${GROUND - h * 0.3} Z" ${fillAttr(color)}/>`;
  return s;
}
function pines(color, rand) {
  let s = '';
  for (let x = 6; x < 300; x += 18 + rand() * 10) {
    const h = 40 + rand() * 40;
    s += `<path d="M${x} ${GROUND - h} L${x - h * 0.22} ${GROUND} L${x + h * 0.22} ${GROUND} Z" ${fillAttr(color)}/>`;
  }
  return s;
}
function aurora() {
  return (
    `<path d="M-10 120 Q60 60 140 110 T310 80 L310 130 Q220 170 140 140 T-10 170 Z" fill="#7ff5c6" opacity=".35"/>` +
    `<path d="M-10 150 Q80 100 160 140 T310 120 L310 150 Q230 190 150 165 T-10 190 Z" fill="#c69bff" opacity=".28"/>`
  );
}

const SCENES = {
  doha: (pal, rand) =>
    skyline(150, 300, 50, 150, pal.near, pal.win, rand) +
    dome(78, 30, pal.near, 34) +
    minaret(124, 92, pal.near) +
    palm(22, 78, pal.near),
  dubai: (pal, rand) =>
    skyline(0, 120, 30, 100, pal.near, pal.win, rand) +
    burj(160, 250, pal.near) +
    sail(220, 130, pal.near) +
    skyline(258, 300, 30, 70, pal.near, pal.win, rand),
  abudhabi: pal =>
    dome(150, 40, pal.near, 40) +
    dome(88, 24, pal.near, 30) +
    dome(212, 24, pal.near, 30) +
    minaret(46, 110, pal.near) +
    minaret(254, 110, pal.near),
  cairo: pal =>
    pyramid(110, 170, 120, pal.near, pal.win) +
    pyramid(210, 120, 82, pal.near, pal.win) +
    pyramid(260, 60, 40, pal.near, pal.win) +
    palm(30, 90, pal.near),
  istanbul: pal =>
    dome(150, 44, pal.near, 36) +
    dome(102, 20, pal.near, 26) +
    dome(198, 20, pal.near, 26) +
    minaret(72, 140, pal.near) +
    minaret(228, 140, pal.near) +
    minaret(40, 110, pal.near) +
    minaret(260, 110, pal.near),
  london: (pal, rand) =>
    bigBen(90, 220, pal.near, pal.win) +
    wheel(205, 62, pal.near) +
    skyline(0, 70, 20, 60, pal.near, null, rand),
  paris: (pal, rand) => skyline(0, 300, 20, 55, pal.far, null, rand) + eiffel(150, 240, pal.near),
  tokyo: pal => mountain(210, 260, 150, pal.far, true) + eiffel(100, 200, pal.near),
  osaka: pal => mountain(200, 260, 130, pal.far, true) + pagoda(110, 180, pal.near, 5),
  seoul: (pal, rand) =>
    hills(pal.far, 90, rand) +
    needle(160, 200, pal.near) +
    skyline(0, 110, 20, 70, pal.near, pal.win, rand),
  bangkok: pal =>
    stupa(150, 210, pal.near) +
    stupa(85, 140, pal.near) +
    stupa(215, 140, pal.near) +
    palm(30, 90, pal.near) +
    palm(270, 80, pal.near),
  singapore: (pal, rand) => skyline(0, 90, 40, 120, pal.near, pal.win, rand) + mbs(185, pal.near),
  kualalumpur: (pal, rand) =>
    skyline(0, 300, 20, 70, pal.far, null, rand) + twinTowers(150, 240, pal.near),
  hongkong: (pal, rand) =>
    hills(pal.far, 140, rand) + skyline(0, 300, 50, 170, pal.near, pal.win, rand),
  shanghai: (pal, rand) =>
    skyline(0, 300, 30, 110, pal.near, pal.win, rand) +
    pearlTower(110, 230, pal.near) +
    burj(220, 200, pal.near),
  beijing: (pal, rand) => hills(pal.far, 60, rand) + roundTemple(150, 200, pal.near),
  guangzhou: (pal, rand) =>
    skyline(0, 300, 30, 100, pal.near, pal.win, rand) + cantonTower(150, 260, pal.near),
  chengdu: (pal, rand) => hills(pal.far, 110, rand) + pagoda(150, 170, pal.near, 4),
  china: (pal, rand) =>
    hills(pal.far, 80, rand) +
    pagoda(80, 140, pal.near, 3) +
    skyline(130, 300, 40, 130, pal.near, pal.win, rand),
  newyork: (pal, rand) =>
    skyline(0, 300, 60, 160, pal.near, pal.win, rand) + needle(150, 230, pal.near),
  sanfrancisco: (pal, rand) => hills(pal.far, 70, rand) + bridge(0, 300, 170, pal.near),
  losangeles: (pal, rand) =>
    hills(pal.far, 80, rand) +
    palm(50, 150, pal.near) +
    palm(140, 120, pal.near) +
    palm(230, 160, pal.near),
  sydney: (pal, rand) => bridge(160, 300, 90, pal.far) + opera(110, pal.near, pal.win),
  rome: (pal, rand) => colosseum(150, 190, 100, pal.near, pal.win) + palm(30, 70, pal.near),
  amsterdam: (pal, rand) =>
    canalHouses(0, 7, pal.near, pal.win, rand) + windmill(240, 120, pal.near),
  barcelona: (pal, rand) =>
    skyline(0, 300, 20, 50, pal.far, null, rand) + sagrada(150, 210, pal.near),
  helsinki: (pal, rand) => aurora() + pines(pal.near, rand),
  bali: pal => splitGate(150, 170, pal.near) + palm(40, 120, pal.near) + palm(262, 110, pal.near),
  maldives: pal => waterVillas(pal.near, pal.win) + palm(270, 130, pal.near),
  colombo: pal => stupa(150, 160, pal.near) + palm(50, 120, pal.near) + palm(250, 140, pal.near),
  delhi: pal => taj(150, pal.near),
  nairobi: pal => acacia(90, 110, pal.near) + acacia(220, 80, pal.near),
  capetown: pal => tableMountain(pal.near),
  auckland: (pal, rand) =>
    skyline(0, 300, 20, 70, pal.far, null, rand) + needle(180, 230, pal.near),
  moscow: pal => onion(150, 170, pal.near) + onion(100, 120, pal.near) + onion(200, 130, pal.near),

  ME: (pal, rand) =>
    skyline(140, 300, 40, 130, pal.near, pal.win, rand) +
    dome(80, 26, pal.near, 30) +
    palm(20, 70, pal.near),
  SEA: (pal, rand) =>
    stupa(110, 150, pal.near) +
    palm(40, 110, pal.near) +
    palm(200, 130, pal.near) +
    palm(260, 100, pal.near),
  SA: pal => stupa(150, 150, pal.near) + palm(60, 110, pal.near) + palm(240, 120, pal.near),
  EA: (pal, rand) => mountain(190, 240, 120, pal.far, true) + pagoda(90, 150, pal.near, 4),
  EU: (pal, rand) =>
    canalHouses(10, 5, pal.near, pal.win, rand) +
    bigBen(200, 160, pal.near, pal.win) +
    skyline(222, 300, 30, 70, pal.near, pal.win, rand),
  NA: (pal, rand) => skyline(0, 300, 40, 170, pal.near, pal.win, rand),
  LA: (pal, rand) => hills(pal.far, 110, rand) + palm(90, 110, pal.near) + palm(210, 130, pal.near),
  AF: (pal, rand) => hills(pal.far, 40, rand) + acacia(120, 100, pal.near),
  OC: (pal, rand) => hills(pal.far, 60, rand) + palm(70, 120, pal.near) + palm(230, 100, pal.near),
  CA: (pal, rand) => mountain(150, 300, 160, pal.far, true) + dome(150, 26, pal.near, 26),
  CN: (pal, rand) =>
    hills(pal.far, 80, rand) +
    pagoda(90, 140, pal.near, 3) +
    skyline(140, 300, 40, 140, pal.near, pal.win, rand),
  HMT: (pal, rand) => hills(pal.far, 120, rand) + skyline(0, 300, 50, 150, pal.near, pal.win, rand),
};
const SCENE_OF = {
  NYC: 'newyork',
  LON: 'london',
  PAR: 'paris',
  TYO: 'tokyo',
  BJS: 'beijing',
  DOH: 'doha',
  DXB: 'dubai',
  DWC: 'dubai',
  AUH: 'abudhabi',
  CAI: 'cairo',
  IST: 'istanbul',
  SAW: 'istanbul',
  LHR: 'london',
  LGW: 'london',
  STN: 'london',
  LCY: 'london',
  LTN: 'london',
  CDG: 'paris',
  ORY: 'paris',
  NRT: 'tokyo',
  HND: 'tokyo',
  KIX: 'osaka',
  ITM: 'osaka',
  ICN: 'seoul',
  GMP: 'seoul',
  BKK: 'bangkok',
  DMK: 'bangkok',
  SIN: 'singapore',
  KUL: 'kualalumpur',
  HKG: 'hongkong',
  MFM: 'hongkong',
  PVG: 'shanghai',
  SHA: 'shanghai',
  PEK: 'beijing',
  PKX: 'beijing',
  CAN: 'guangzhou',
  SZX: 'guangzhou',
  CTU: 'chengdu',
  TFU: 'chengdu',
  CKG: 'chengdu',
  JFK: 'newyork',
  EWR: 'newyork',
  LGA: 'newyork',
  SFO: 'sanfrancisco',
  LAX: 'losangeles',
  SYD: 'sydney',
  FCO: 'rome',
  AMS: 'amsterdam',
  BCN: 'barcelona',
  HEL: 'helsinki',
  DPS: 'bali',
  MLE: 'maldives',
  CMB: 'colombo',
  DEL: 'delhi',
  AGR: 'delhi',
  NBO: 'nairobi',
  CPT: 'capetown',
  AKL: 'auckland',
  SVO: 'moscow',
  DME: 'moscow',
  VKO: 'moscow',
};

let coverCount = 0;
function coverArt(code, region, seed, look = {}) {
  const rand = seededRandom(seed);
  const pal = seasonPalette(look.season, seed);
  const scene = SCENES[SCENE_OF[code]] || SCENES[region] || SCENES.NA;

  const id = 'g' + seed.toString(36) + '_' + ++coverCount;
  const winter = look.season === 'winter';

  const snowFilter = winter
    ? `<filter id="${id}w" x="-3%" y="-3%" width="106%" height="106%"><feOffset in="SourceAlpha" dy="6" result="d"/><feComposite in="SourceAlpha" in2="d" operator="out" result="cap"/><feFlood flood-color="#fff" flood-opacity=".95"/><feComposite in2="cap" operator="in" result="snow"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="snow"/></feMerge></filter>`
    : '';
  return `<svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${pal.top}"/><stop offset="1" stop-color="${pal.bot}"/></linearGradient>
    <radialGradient id="${id}s"><stop offset="0" stop-color="${pal.sun}" stop-opacity=".9"/><stop offset="1" stop-color="${pal.sun}" stop-opacity="0"/></radialGradient>${snowFilter}</defs>
    <g class="l-sky">${skyLayer(pal, rand, id, look.season === 'summer')}</g><g class="l-cloud">${cloudLayer(pal, rand)}</g><g class="l-plane">${planeLayer(rand, look.planes || 1)}</g>
    ${landscapeLayers(scene, pal, rand, winter ? `url(#${id}w)` : '')}${seasonLayer(look.season, rand)}</svg>`;
}

function seasonLayer(season, rand) {
  let svg = '';
  if (season === 'winter') {
    for (let i = 0; i < 22; i++) {
      svg += `<circle cx="${(rand() * 300).toFixed(0)}" cy="${(40 + rand() * 280).toFixed(0)}" r="${(1 + rand() * 1.6).toFixed(1)}" fill="#fff" opacity="${(0.7 + rand() * 0.3).toFixed(2)}"/>`;
    }
  } else if (season === 'spring') {
    for (let i = 0; i < 14; i++) {
      const x = (rand() * 300).toFixed(0);
      const y = (90 + rand() * 230).toFixed(0);
      svg += `<ellipse cx="${x}" cy="${y}" rx="3.2" ry="1.9" transform="rotate(${(rand() * 180).toFixed(0)} ${x} ${y})" fill="#ffd2e1" stroke="#ef8fb1" stroke-width=".7"/>`;
    }
    svg += blossomBranch(rand() < 0.5);
  } else if (season === 'autumn') {
    const colors = ['#e8743b', '#f2a33a', '#c8502e', '#e9b949'];
    for (let i = 0; i < 12; i++) {
      const x = (rand() * 300).toFixed(0);
      const y = (90 + rand() * 230).toFixed(0);
      svg += `<path d="M0 -6 Q5 0 0 6 Q-5 0 0 -6 Z M0 -6 L0 6" transform="translate(${x} ${y}) rotate(${(rand() * 360).toFixed(0)}) scale(${(1 + rand() * 0.6).toFixed(2)})" fill="${colors[i % 4]}" stroke="#9a4a22" stroke-width=".5"/>`;
    }
  }
  return svg ? `<g class="fx">${svg}</g>` : '';
}

function blossomBranch(left) {
  const flower = (x, y) => {
    let petals = '';
    for (let k = 0; k < 5; k++) {
      const angle = (k * 72 * Math.PI) / 180;
      petals += `<circle cx="${(x + Math.cos(angle) * 3.6).toFixed(1)}" cy="${(y + Math.sin(angle) * 3.6).toFixed(1)}" r="3.2" fill="#ffc3d7"/>`;
    }
    return petals + `<circle cx="${x}" cy="${y}" r="1.6" fill="#e2557f"/>`;
  };
  const branch =
    '<path d="M306 150 Q258 158 218 186 M264 156 Q252 140 240 132 M242 170 Q234 188 224 198" stroke="#7b4d45" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    [
      [282, 152],
      [254, 160],
      [232, 176],
      [240, 132],
      [224, 198],
      [216, 186],
    ]
      .map(([x, y]) => flower(x, y))
      .join('');
  return left ? `<g transform="translate(300 0) scale(-1 1)">${branch}</g>` : branch;
}

function skyLayer(pal, rand, id, rays) {
  let svg = `<rect x="-30" y="-10" width="360" height="420" fill="url(#${id})"/>`;
  if (pal.stars) {
    for (let i = 0; i < 26; i++) {
      svg += `<circle cx="${(rand() * 300).toFixed(0)}" cy="${(rand() * 200).toFixed(0)}" r="${(0.6 + rand() * 1.2).toFixed(1)}" fill="#fff" opacity="${(0.4 + rand() * 0.6).toFixed(2)}"/>`;
    }
  }
  const sunX = (50 + rand() * 200).toFixed(0);
  const sunY = (70 + rand() * 80).toFixed(0);
  svg += `<circle class="glow" cx="${sunX}" cy="${sunY}" r="62" fill="url(#${id}s)"/><circle cx="${sunX}" cy="${sunY}" r="24" fill="${pal.sun}"/>`;
  if (rays) {

    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = (+sunX + Math.cos(angle) * 31).toFixed(1);
      const y1 = (+sunY + Math.sin(angle) * 31).toFixed(1);
      const x2 = (+sunX + Math.cos(angle) * 42).toFixed(1);
      const y2 = (+sunY + Math.sin(angle) * 42).toFixed(1);
      svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${pal.sun}" stroke-width="3.5" stroke-linecap="round" opacity=".9"/>`;
    }
  }
  if (pal.moon) svg += `<circle cx="${+sunX + 9}" cy="${sunY - 6}" r="20" fill="${pal.top}"/>`;
  return svg;
}

function cloudLayer(pal, rand) {
  let svg = '';
  for (let i = 0; i < 3; i++) {
    const x = rand() * 300;
    const y = 40 + rand() * 150;
    const w = 30 + rand() * 40;
    svg +=
      `<g class="cl c${i}" fill="#fff" opacity="${pal.stars ? 0.18 : 0.75}"><ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${w.toFixed(0)}" ry="${(w * 0.28).toFixed(0)}"/>` +
      `<circle cx="${(x - w * 0.3).toFixed(0)}" cy="${(y - w * 0.12).toFixed(0)}" r="${(w * 0.32).toFixed(0)}"/><circle cx="${(x + w * 0.15).toFixed(0)}" cy="${(y - w * 0.2).toFixed(0)}" r="${(w * 0.4).toFixed(0)}"/></g>`;
  }
  return svg;
}

function planeLayer(rand, count = 1) {
  const flip = rand() < 0.5 ? 1 : -1;
  let svg = '';
  for (let i = 0; i < count; i++) {
    const size = [1, 0.8, 0.66][i];
    const x = count === 1 ? 70 + rand() * 160 : 45 + (i * 210) / (count - 1) + (rand() - 0.5) * 30;
    const y = 120 + rand() * 70 + i * 12;
    if (i === 0) {
      const trail = `M${(x - flip * 90).toFixed(0)} ${(y + 40).toFixed(0)} Q${(x - flip * 40).toFixed(0)} ${(y + 30).toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)}`;
      svg += `<path d="${trail}" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5 6" stroke-linecap="round" opacity=".8"/>`;
    }
    svg +=
      `<g class="pl" style="--dx:${(flip * (46 - i * 8)).toFixed(0)}px;--dy:-${16 - i * 3}px"><g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${(flip * size).toFixed(2)} ${size}) rotate(-18)">` +
      '<path d="M-12 0 Q-4 -3 12 -1 Q15 0 12 1 Q-4 3 -12 0 Z M-2 -1 L-7 -10 L-3 -10 L4 -1 Z M-2 1 L-7 10 L-3 10 L4 1 Z M-11 0 L-14 -5 L-11 -5 L-8 0 Z" fill="#fff"/></g></g>';
  }
  return svg;
}

function landscapeLayers(scene, pal, rand, filter) {
  let far = '';
  let near = '';
  for (const shape of scene(pal, rand).match(
    /<(path|rect|circle|ellipse|polygon|line)\b[^>]*\/>/g,
  ) || []) {
    const isFar =
      shape.includes(`fill="${pal.far}"`) ||
      shape.includes('fill="#7ff5c6"') ||
      shape.includes('fill="#c69bff"');
    if (isFar) far += shape;
    else near += shape;
  }
  near += `<rect x="-30" y="${GROUND}" width="360" height="${400 - GROUND + 10}" fill="${pal.ground}"/><rect x="-30" y="${GROUND}" width="360" height="3" fill="#fff" opacity=".18"/>`;
  const snow = filter ? ` filter="${filter}"` : '';
  return `<g class="l-far" opacity=".95"${snow}>${far}</g><g class="l-near" opacity=".97"${snow}>${near}</g>`;
}

function chibi(size = 40, mood = '', full = false, cls = '') {
  const hair = '#a99be8',
    hairDark = '#8b7bd6',
    hairLight = '#d9d1fb',
    skin = '#ffece3',
    ink = '#3a2f55';
  const X = 48.5;
  const Y = 64;
  const eyeOpen = `
    <ellipse cx="${X}" cy="${Y}" rx="7.8" ry="9.4" fill="#fff"/>
    <ellipse cx="${X}" cy="${Y + 0.9}" rx="6.8" ry="8.4" fill="url(#arIris)"/>
    <ellipse cx="${X + 0.3}" cy="${Y + 2}" rx="3.1" ry="4.1" fill="#2c2152"/>
    <circle cx="${X - 2.6}" cy="${Y - 3.2}" r="2.8" fill="#fff"/>
    <circle cx="${X + 2.8}" cy="${Y + 4}" r="1.3" fill="#fff"/>
    <circle cx="${X - 3.6}" cy="${Y + 3.4}" r=".7" fill="#fff" opacity=".9"/>
    <path d="M${X - 8.7} ${Y - 0.6} Q${X - 8} ${Y - 10.7} ${X} ${Y - 10.5} Q${X + 8} ${Y - 10.7} ${X + 8.7} ${Y - 0.6}
             Q${X + 6.8} ${Y - 8.4} ${X} ${Y - 8.5} Q${X - 6.8} ${Y - 8.4} ${X - 8.7} ${Y - 0.6} Z" fill="${ink}"/>
    <path d="M${X - 3.5} ${Y + 9.6} Q${X} ${Y + 10.6} ${X + 3.5} ${Y + 9.6}" stroke="${ink}" stroke-width=".9" fill="none" opacity=".45" stroke-linecap="round"/>`;
  const eyeHappy = `<path d="M${X - 7.5} ${Y + 1.5} Q${X} ${Y - 8} ${X + 7.5} ${Y + 1.5}" stroke="${ink}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
  const eyeSleep = `<path d="M${X - 7.5} ${Y} Q${X} ${Y + 5} ${X + 7.5} ${Y}" stroke="${ink}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const star = (cx, cy, r) =>
    `<path d="M${cx} ${cy - r} Q${cx + r * 0.18} ${cy - r * 0.18} ${cx + r} ${cy} Q${cx + r * 0.18} ${cy + r * 0.18} ${cx} ${cy + r} Q${cx - r * 0.18} ${cy + r * 0.18} ${cx - r} ${cy} Q${cx - r * 0.18} ${cy - r * 0.18} ${cx} ${cy - r} Z" fill="#fff"/>`;
  const eyeStar = eyeOpen
    .replace(/<circle[^>]*r="2\.8"[^>]*\/>/, star(X - 1.8, Y - 2.6, 4.2))
    .replace(/<circle[^>]*r="1\.3"[^>]*\/>/, star(X + 2.8, Y + 4, 2));
  const eye =
    mood === 'happy'
      ? eyeHappy
      : mood === 'sleep'
        ? eyeSleep
        : mood === 'surprised'
          ? eyeStar
          : eyeOpen;
  const eyes = `<g class="ar-eyes">${eye}<g transform="translate(120 0) scale(-1 1)">${eye}</g></g>`;
  const mouth =
    mood === 'happy'
      ? `<path d="M55 76 Q60 84.5 65 76 Z" fill="#c4566f"/><path d="M57.4 80 Q60 82.6 62.6 80" fill="#ff9fb4"/>`
      : mood === 'surprised'
        ? `<ellipse cx="60" cy="79" rx="2.8" ry="3.4" fill="#c4566f"/>`
        : mood === 'sleep'
          ? `<path d="M57.5 78.5 Q60 80 62.5 78.5" stroke="#c4566f" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
            `<text x="94" y="30" font-size="11" font-weight="700" fill="#a99be8" font-family="sans-serif">z</text><text x="102" y="20" font-size="8" font-weight="700" fill="#a99be8" font-family="sans-serif">z</text>`
          : mood === 'worry'
            ? `<path d="M55.5 79 Q57.8 77 60 79 Q62.2 81 64.5 79" stroke="#c4566f" stroke-width="1.7" fill="none" stroke-linecap="round"/>`
            : `<path d="M55.8 77.4 Q58 80 60 77.7 Q62 80 64.2 77.4" stroke="#c4566f" stroke-width="1.7" fill="none" stroke-linecap="round"/>`;

  const brow =
    mood === 'worry'
      ? `<path d="M${X - 6.5} 52.6 Q${X - 1} 51.8 ${X + 6} 48.4" stroke="${hairDark}" stroke-width="1.7" fill="none" stroke-linecap="round" opacity=".9"/>`
      : `<path d="M${X - 6.5} 52 Q${X} 49 ${X + 6.5} 51.4" stroke="${hairDark}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".85"/>`;
  const brows = `${brow}<g transform="translate(120 0) scale(-1 1)">${brow}</g>`;
  const worry =
    mood === 'worry'
      ? `<path d="M88 42 Q93.5 50 88 53.5 Q82.5 50 88 42 Z" fill="#a8d8ff" stroke="#73b7ec" stroke-width=".8"/>`
      : '';
  const head = `
    <path d="M20 62 C18 27 38 9 60 9 C82 9 102 27 100 62 L100 88 Q100 96 92 95.5 Q87.5 95 87 88 L86 66 L34 66 L33 88 Q32.5 95 28 95.5 Q20 96 20 88 Z" fill="${hair}"/>
    <path d="M34 66 L86 66 L86 86 Q60 93 34 86 Z" fill="${hairDark}"/>
    <path d="M33 59 C33 44 45 36 60 36 C75 36 87 44 87 59 C87 75 76 87 60 88 C44 87 33 75 33 59 Z" fill="${skin}"/>
    ${eyes}
    <ellipse cx="40.5" cy="75" rx="5.6" ry="3" fill="#ffa3c0" opacity=".55"/><ellipse cx="79.5" cy="75" rx="5.6" ry="3" fill="#ffa3c0" opacity=".55"/>
    <path d="M38 75 L39.5 73 M41 75.5 L42.5 73.5 M78 75.5 L79.5 73.5 M81 75 L82.5 73" stroke="#ff8fb1" stroke-width=".9" stroke-linecap="round" opacity=".7"/>
    ${mouth}
    <path d="M30 63 C29 40 43 27 60 27 C77 27 91 40 90 63 Q87.5 55 84 59.5 Q82.5 50 77 48 Q76.5 55 72 57.5 Q70.5 49 64.5 46 Q63.5 53 59.5 56.5 Q56.5 48 51 47 Q49.5 54 45.5 57.5 Q44 50 39 49 Q37.5 55.5 34 59 Q32 56 30 63 Z" fill="${hair}"/>
    <path d="M31 52 C26 64 27 80 32.5 93 Q34.5 86 36 80 C35 70 36 60 38.5 54 Z" fill="${hair}"/>
    <path d="M89 52 C94 64 93 80 87.5 93 Q85.5 86 84 80 C85 70 84 60 81.5 54 Z" fill="${hair}"/>
    ${mood === 'happy' || mood === 'sleep' ? '' : brows}
    <path d="M41 21 Q51 15 61 16" stroke="${hairLight}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <path d="M67 17.5 Q71 17.5 74 19.5" stroke="${hairLight}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M58 11 C55 1 66 -2.5 70.5 3 C65.5 3 61.5 6 61 11 Z" fill="${hairDark}"/>
    <path d="M23.5 60 C21 5 99 5 96.5 60" stroke="#ff8fb1" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    <rect x="13.5" y="54" width="14" height="22" rx="7" fill="#ff8fb1"/><rect x="16.5" y="58" width="8" height="14" rx="4" fill="#ffd3e1"/>
    <rect x="92.5" y="54" width="14" height="22" rx="7" fill="#ff8fb1"/><rect x="95.5" y="58" width="8" height="14" rx="4" fill="#ffd3e1"/>
    <path d="M105 52 Q114 56 109 66" stroke="#fff" stroke-width="4.4" fill="none" stroke-linecap="round"/>
    <path d="M105 52 Q114 56 109 66" stroke="#ff8fb1" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <ink x1="106" y1="57" x2="113.5" y2="44.5" stroke="#ff8fb1" stroke-width="1.7" stroke-linecap="round"/>
    <circle class="ar-ball" cx="114" cy="43" r="3.3" fill="#ffd166" stroke="#ff8fb1" stroke-width="1.2"/>
    ${worry}`;
  const body = `
    <rect x="55.5" y="85" width="9" height="9" fill="${skin}"/>
    <path d="M44 94 Q60 89 76 94 L79.5 116 L40.5 116 Z" fill="#fff" stroke="#e2dcf3" stroke-width="1.2"/>
    <path d="M45 97 Q37 106 36 117" stroke="#e2dcf3" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M45 97 Q37 106 36 117" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="36" cy="120" r="4.4" fill="${skin}" stroke="#f2cfc3" stroke-width=".8"/>
    <path d="M38.5 114 L81.5 114 L88.5 133 Q60 137.5 31.5 133 Z" fill="#3d4a7a"/>
    <path d="M47 115 L44 134.5 M60 115 L60 136 M73 115 L76 134.5" stroke="#5a69a0" stroke-width="1.3"/>
    <path d="M43 94 L60 107 L77 94 L73 90.5 L60 100 L47 90.5 Z" fill="#3d4a7a"/>
    <path d="M45.6 93.4 L60 104 L74.4 93.4" stroke="#fff" stroke-width=".9" fill="none"/>
    <path d="M60 104 L51 100 L52 109 Z M60 104 L69 100 L68 109 Z" fill="#e95a8c"/><circle cx="60" cy="104.4" r="2.5" fill="#d64479"/>
    <rect x="50.5" y="134" width="7" height="11" fill="${skin}"/><rect x="62.5" y="134" width="7" height="11" fill="${skin}"/>
    <rect x="50.5" y="139" width="7" height="7" fill="#fff" stroke="#e2dcf3" stroke-width=".7"/><rect x="62.5" y="139" width="7" height="7" fill="#fff" stroke="#e2dcf3" stroke-width=".7"/>
    <path d="M47 148 Q47 143 53.5 143 Q59 143 59.5 148 Z" fill="#7a5145"/><path d="M60.5 148 Q61 143 66.5 143 Q73 143 73 148 Z" fill="#7a5145"/>`;
  const wave = `
    <path class="ar-arm" d="M75 97 Q88 104 95.5 98.5" stroke="#e2dcf3" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path class="ar-arm" d="M75 97 Q88 104 95.5 98.5" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle class="ar-arm" cx="97.5" cy="96.5" r="4.4" fill="${skin}" stroke="#f2cfc3" stroke-width=".8"/>`;
  const vb = full ? '6 -4 114 156' : '10 -4 108 104';
  const h = full ? Math.round((size * 156) / 114) : Math.round((size * 104) / 108);
  return `<svg class="ar-mascot ${cls}" width="${size}" height="${h}" viewBox="${vb}" aria-hidden="true">
    <defs><linearGradient id="arIris" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5442b4"/><stop offset=".55" stop-color="#9a6fe2"/><stop offset="1" stop-color="#ff98c4"/></linearGradient></defs>
    ${full ? body : ''}${head}${full ? wave : ''}</svg>`;
}

function mascotBody(height, mood = '', className = '') {
  const src = DATA.mascot[mood || 'normal'] || DATA.mascot.normal;
  if (!src) return chibi(Math.round((height * 114) / 156), mood, true, className);
  return `<img class="ar-mascot ar-img ${className}" src="${src}" alt="" style="height:${height}px;width:auto" draggable="false">`;
}

function mascotHead(size, mood = '') {
  if (!DATA.mascot.avatar) return chibi(size, mood, false);
  return `<img class="ar-mascot ar-av" src="${DATA.mascot.avatar}" alt="" style="width:${size}px;height:${size}px" draggable="false">`;
}

const EXPRESSIONS = {

  normal: {
    head: {},
    face: {
      PARAM_EYE_L_SMILE: null, PARAM_EYE_R_SMILE: null,
      PARAM_BROW_L_ANGLE: null, PARAM_BROW_R_ANGLE: null,
      PARAM_BROW_L_FORM: null, PARAM_BROW_R_FORM: null,
      PARAM_BROW_L_Y: null, PARAM_BROW_R_Y: null,
      PARAM_MOUTH_FORM: null, PARAM_MOUTH_OPEN_Y: null,
      PARAM_CHEEK: null,
    },
  },
  happy: {
    head: { PARAM_ANGLE_Z: 7, PARAM_ANGLE_Y: 3, PARAM_BODY_ANGLE_Z: 3 },
    face: {
      PARAM_EYE_L_SMILE: 1, PARAM_EYE_R_SMILE: 1,
      PARAM_EYE_L_OPEN: 0.75, PARAM_EYE_R_OPEN: 0.75,
      PARAM_BROW_L_Y: 0.35, PARAM_BROW_R_Y: 0.35,
      PARAM_BROW_L_FORM: 0.6, PARAM_BROW_R_FORM: 0.6,
      PARAM_MOUTH_FORM: 1, PARAM_MOUTH_OPEN_Y: 0.35,
      PARAM_CHEEK: 0.45,
    },
  },
  surprised: {
    head: { PARAM_ANGLE_X: -4, PARAM_ANGLE_Y: 5, PARAM_BODY_ANGLE_Z: -3 },
    face: {
      PARAM_EYE_L_OPEN: 1.5, PARAM_EYE_R_OPEN: 1.5,
      PARAM_EYE_L_SMILE: 0, PARAM_EYE_R_SMILE: 0,
      PARAM_BROW_L_Y: 1, PARAM_BROW_R_Y: 1,
      PARAM_BROW_L_FORM: 0.3, PARAM_BROW_R_FORM: 0.3,
      PARAM_MOUTH_FORM: 0.2, PARAM_MOUTH_OPEN_Y: 0.75,
    },
  },

  down: {

    head: {
      PARAM_ANGLE_X: -7,
      PARAM_ANGLE_Y: -26,
      PARAM_ANGLE_Z: -9,
      PARAM_BODY_ANGLE_X: -6,
      PARAM_BODY_ANGLE_Y: -9,
      PARAM_BODY_ANGLE_Z: -5,
    },
    face: {
      PARAM_EYE_L_OPEN: 0.6, PARAM_EYE_R_OPEN: 0.6,
      PARAM_EYE_L_SMILE: 0, PARAM_EYE_R_SMILE: 0,
      PARAM_EYE_BALL_Y: -1, PARAM_EYE_BALL_X: -0.3,
      PARAM_BROW_L_ANGLE: -1, PARAM_BROW_R_ANGLE: -1,
      PARAM_BROW_L_FORM: -0.9, PARAM_BROW_R_FORM: -0.9,
      PARAM_BROW_L_Y: -0.5, PARAM_BROW_R_Y: -0.5,
      PARAM_MOUTH_FORM: -1, PARAM_MOUTH_OPEN_Y: 0.15,
    },
  },
  shy: {
    head: { PARAM_ANGLE_Z: -8, PARAM_ANGLE_X: -6, PARAM_BODY_ANGLE_X: -3 },
    face: {
      PARAM_EYE_L_OPEN: 0.5, PARAM_EYE_R_OPEN: 0.5,
      PARAM_EYE_L_SMILE: 0.45, PARAM_EYE_R_SMILE: 0.45,
      PARAM_EYE_BALL_X: -0.6,
      PARAM_BROW_L_Y: -0.2, PARAM_BROW_R_Y: -0.2,
      PARAM_BROW_L_FORM: 0.3, PARAM_BROW_R_FORM: 0.3,
      PARAM_MOUTH_FORM: 0.4, PARAM_MOUTH_OPEN_Y: 0.12,
      PARAM_CHEEK: 1,
    },
  },

  angry: {
    head: { PARAM_ANGLE_X: 3, PARAM_ANGLE_Z: -4, PARAM_BODY_ANGLE_X: 3 },
    face: {
      PARAM_EYE_L_OPEN: 0.65, PARAM_EYE_R_OPEN: 0.65,
      PARAM_EYE_L_SMILE: 0, PARAM_EYE_R_SMILE: 0,
      PARAM_BROW_L_ANGLE: 1, PARAM_BROW_R_ANGLE: 1,
      PARAM_BROW_L_Y: -0.8, PARAM_BROW_R_Y: -0.8,
      PARAM_BROW_L_FORM: -1, PARAM_BROW_R_FORM: -1,
      PARAM_MOUTH_FORM: -0.9, PARAM_MOUTH_OPEN_Y: 0.3,
    },
  },
  worry: {
    head: { PARAM_ANGLE_Y: -4, PARAM_ANGLE_Z: 3 },
    face: {
      PARAM_EYE_L_OPEN: 0.72, PARAM_EYE_R_OPEN: 0.72,
      PARAM_EYE_L_SMILE: 0, PARAM_EYE_R_SMILE: 0,
      PARAM_BROW_L_ANGLE: -0.7, PARAM_BROW_R_ANGLE: -0.7,
      PARAM_BROW_L_FORM: -0.5, PARAM_BROW_R_FORM: -0.5,
      PARAM_MOUTH_FORM: -0.5, PARAM_MOUTH_OPEN_Y: 0.1,
    },
  },
  sleep: {
    head: { PARAM_ANGLE_Y: -10, PARAM_ANGLE_Z: 7, PARAM_BODY_ANGLE_Y: -5 },
    face: {
      PARAM_EYE_L_OPEN: 0, PARAM_EYE_R_OPEN: 0,
      PARAM_EYE_L_SMILE: 0, PARAM_EYE_R_SMILE: 0,
      PARAM_BROW_L_Y: -0.2, PARAM_BROW_R_Y: -0.2,
      PARAM_MOUTH_FORM: 0.1, PARAM_MOUTH_OPEN_Y: 0.18,
    },
  },
};

const EXPRESSION_BLEND = 120;
const EXPRESSION_SNAP = 400;

function stillRenderer() {
  const useSvg = !DATA.mascot.normal;
  return {
    kind: useSvg ? 'svg' : 'image',
    mood: '',
    mount(el) {
      this.el = el;
      this.draw();
    },
    draw() {
      this.el.innerHTML = useSvg
        ? chibi(dockWidth(), this.mood, true, 'fig')
        : mascotBody(dockHeight(), '', 'fig');
    },

    setMood(mood) {

      const face = { down: 'worry', shy: 'happy', angry: 'worry' }[mood] || mood;
      if (!useSvg || face === this.mood) return;
      this.mood = face;
      this.draw();
    },
    tap() {},
    stopMotion() {},
    destroy() {
      if (this.el) this.el.innerHTML = '';
    },
  };
}

const LIVE2D_BASE = 'https://ar-live2d.invalid/model/';

function live2dLibraries() {
  const pixi = typeof PIXI !== 'undefined' ? PIXI : window.PIXI || PAGE.PIXI;
  const core =
    typeof Live2DCubismCore !== 'undefined'
      ? Live2DCubismCore
      : window.Live2DCubismCore || PAGE.Live2DCubismCore;
  if (!pixi || !core) return null;
  if (!pixi.live2d && typeof cubism4Plugin === 'function') {

    if (!window.Live2DCubismCore) window.Live2DCubismCore = core;
    const module = { exports: {} };
    cubism4Plugin(module, module.exports, name => (name === '@pixi/utils' ? pixi.utils : pixi));
    pixi.live2d = module.exports;

    pixi.live2d.Live2DModel.registerTicker(pixi.Ticker);
  }
  return pixi.live2d ? pixi : null;
}

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch (error) {
    return false;
  }
}

function decodeBase64(text) {
  const binary = atob(text);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

function requestBinary(url) {
  const request =
    typeof GM_xmlhttpRequest === 'function'
      ? GM_xmlhttpRequest
      : typeof GM !== 'undefined' && GM && GM.xmlHttpRequest;
  if (!request) {

    return fetch(url).then(response => {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.arrayBuffer();
    });
  }
  return new Promise((resolve, reject) =>
    request({
      method: 'GET',
      url,
      responseType: 'arraybuffer',
      onload: response =>
        response.status === 200
          ? resolve(response.response)
          : reject(new Error('HTTP ' + response.status)),
      onerror: () => reject(new Error('下载失败：' + url)),
      ontimeout: () => reject(new Error('下载超时：' + url)),
      timeout: 60000,
    }),
  );
}

const MODEL_DB = 'miles-radar-live2d';

function openModelDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('没有 IndexedDB'));
    const request = indexedDB.open(MODEL_DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore('files');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('IndexedDB 打不开'));
  });
}

async function cachedModel(version) {
  try {
    const db = await openModelDb();
    return await new Promise(resolve => {
      const request = db.transaction('files').objectStore('files').get(version);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch (error) {
    return null;
  }
}

async function storeModel(version, files) {
  try {
    const db = await openModelDb();
    const store = db.transaction('files', 'readwrite').objectStore('files');
    store.clear();
    store.put(files, version);
  } catch (error) {
    Diagnostics.note('Live2D 模型缓存失败：' + error.message);
  }
}

async function live2dFiles() {
  const model = DATA.live2d;
  if (model.files) {
    return Object.fromEntries(
      Object.entries(model.files).map(([name, text]) => [name, decodeBase64(text)]),
    );
  }
  if (model.cache) {
    const cached = await cachedModel(model.cache);
    if (cached && model.list.every(name => cached[name])) {
      state.live2dSource = '本地缓存';
      return cached;
    }
  }

  const files = {};
  for (const name of model.list) files[name] = await requestBinary(model.base + name);
  if (model.cache) {
    state.live2dSource = '刚下载';
    await storeModel(model.cache, files);
  }
  return files;
}

function serveFromMemory(pixi, files) {
  const decoder = new TextDecoder();
  const byUrl = {};
  for (const [name, buffer] of Object.entries(files)) byUrl[LIVE2D_BASE + name] = buffer;
  const loader = pixi.live2d.Live2DLoader;
  const middleware = (context, next) => {
    const url = context.settings ? context.settings.resolveURL(context.url) : context.url;
    const buffer = byUrl[url];
    if (!buffer) return next();
    context.result = context.type === 'json' ? JSON.parse(decoder.decode(buffer)) : buffer.slice(0);
    return Promise.resolve();
  };
  middleware.fromMemory = true;
  loader.middlewares = [middleware].concat(loader.middlewares.filter(m => !m.fromMemory));
}

async function cacheTextures(pixi, settings, files) {

  for (const texture of settings.FileReferences.Textures) {
    const bitmap = await createImageBitmap(new Blob([files[texture]]), {
      premultiplyAlpha: 'premultiply',
    });
    const base = new pixi.BaseTexture(bitmap, {
      alphaMode: pixi.ALPHA_MODES.PREMULTIPLIED_ALPHA,
      mipmap: pixi.MIPMAP_MODES.ON,
      scaleMode: pixi.SCALE_MODES.LINEAR,
    });
    pixi.Texture.addToCache(new pixi.Texture(base), LIVE2D_BASE + texture);
  }
}

function live2dRenderer(fallback) {
  return {
    kind: 'live2d',
    figureTop: 0,
    figureHeight: 1,
    app: null,
    model: null,
    destroyed: false,

    async mount(el) {
      this.el = el;
      fallback.mount(el);
      try {
        await this.load(el);
      } catch (error) {
        this.kind = 'live2d-failed';
        Diagnostics.note('Live2D 没加载成功，改用静态图：' + error.message);
        fallback.mount(el);
      }
    },

    async load(el) {
      const pixi = live2dLibraries();
      if (!pixi) throw new Error('缺少 Live2D 运行库');
      if (!webglAvailable()) throw new Error('浏览器不支持 WebGL');
      const files = await live2dFiles();
      serveFromMemory(pixi, files);
      const settings = JSON.parse(new TextDecoder().decode(files[DATA.live2d.model]));
      settings.url = LIVE2D_BASE + DATA.live2d.model;
      await cacheTextures(pixi, settings, files);
      if (this.destroyed) return;

      const width = dockWidth();
      const height = dockHeight();
      const app = new pixi.Application({
        width,
        height,
        backgroundAlpha: 0,
        antialias: true,

        resolution: Math.max(2, Math.min(3, window.devicePixelRatio || 1)),
        autoDensity: true,
      });
      const model = await pixi.live2d.Live2DModel.from(settings, {
        autoInteract: false,
        motionPreload: 'IDLE',
      });
      if (this.destroyed) {
        app.destroy(true);
        return;
      }
      app.stage.addChild(model);
      app.view.className = 'fig l2d';
      app.view.style.width = width + 'px';
      app.view.style.height = height + 'px';
      el.innerHTML = '';
      el.appendChild(app.view);
      this.app = app;
      this.model = model;

      this.bindExpression(model);
      this.layout = (w, h) => {
        const fit = Math.min(w / model.internalModel.width, h / model.internalModel.height);
        model.scale.set(fit);
        model.x = (w - model.internalModel.width * fit) / 2;
        model.y = h - model.internalModel.height * fit;
        this.figureTop = model.y / h;
        this.figureHeight = (model.internalModel.height * fit) / h;
      };

      this.followPointer = event => {
        const rect = app.view.getBoundingClientRect();
        model.focus(event.clientX - rect.left, event.clientY - rect.top);
      };
      this.layout(width, height);
      this.pauseWhenHidden = () => (document.hidden ? app.ticker.stop() : app.ticker.start());
      window.addEventListener('pointermove', this.followPointer, { passive: true });
      document.addEventListener('visibilitychange', this.pauseWhenHidden);
    },

    bindExpression(model) {
      const internal = model.internalModel;
      const core = internal.coreModel;
      const defaults = {};
      const defaultOf = id => {
        if (!(id in defaults)) {
          const index = core.getParameterIndex(id);
          defaults[id] = index >= 0 ? core.getParameterDefaultValue(index) : 0;
        }
        return defaults[id];
      };
      this.pose = null;
      this.weight = 0;
      this.weightFrom = 0;
      this.weightTo = 0;
      this.blendAt = 0;
      const write = groups => {
        const w = this.weight;
        for (const group of groups) {
          const pose = this.pose[group];
          for (const id in pose) {
            const base = defaultOf(id);

            const target = pose[id] == null ? base : pose[id];
            core.setParameterValueById(id, base + (target - base) * w);
          }
        }
      };
      this.onExpression = () => {
        if (!this.pose) return;
        const span = this.snap
          ? 1
          : Math.min(1, (performance.now() - this.blendAt) / EXPRESSION_BLEND);
        const eased = span * span * (3 - 2 * span);
        const w = this.weightFrom + (this.weightTo - this.weightFrom) * eased;
        this.weight = w;
        if (w <= 0.002) {
          this.pose = null;
          return;
        }
        write(['head', 'face']);
      };

      this.onExpressionLate = () => {
        if (this.pose && this.weight > 0.002) write(['face']);
      };
      internal.on('afterMotionUpdate', this.onExpression);
      internal.on('beforeModelUpdate', this.onExpressionLate);

      if (this.pendingMood) {
        const mood = this.pendingMood;
        this.pendingMood = null;
        this.setMood(mood);
      }
    },

    resize(width, height) {
      if (!this.app || !this.model || !this.layout) {

        if (this.el && fallback.draw) {
          fallback.draw();
          return true;
        }
        return false;
      }
      this.app.renderer.resize(width, height);
      this.app.view.style.width = width + 'px';
      this.app.view.style.height = height + 'px';
      this.layout(width, height);
      return true;
    },

    setMood(mood) {
      if (!this.model) {
        this.pendingMood = mood;
        return;
      }
      const next = EXPRESSIONS[mood];
      const now = performance.now();

      this.snap = this.changedAt != null && now - this.changedAt < EXPRESSION_SNAP;
      this.changedAt = now;

      if (next) this.pose = next;
      this.weightFrom = this.snap ? (next ? 1 : 0) : this.weight;
      this.weightTo = next ? 1 : 0;
      this.blendAt = now;
      if (this.snap && !next) {

        this.weight = 0;
        this.pose = null;
      }
    },
    tap() {
      if (this.model) this.model.motion('Tap');
    },

    stopMotion() {
      const manager = this.model && this.model.internalModel && this.model.internalModel.motionManager;
      if (manager && manager.stopAllMotions) manager.stopAllMotions();
    },
    destroy() {
      this.destroyed = true;
      if (this.model && this.onExpression) {
        this.model.internalModel.off('afterMotionUpdate', this.onExpression);
        this.model.internalModel.off('beforeModelUpdate', this.onExpressionLate);
      }
      if (this.followPointer) window.removeEventListener('pointermove', this.followPointer);
      if (this.pauseWhenHidden)
        document.removeEventListener('visibilitychange', this.pauseWhenHidden);
      if (this.app) this.app.destroy(true);
      this.app = null;
      this.model = null;
    },
  };
}

function makeRenderer() {
  const still = stillRenderer();
  return DATA.live2d && DATA.live2d.model ? live2dRenderer(still) : still;
}

const STATUS = {
  verified: { icon: '✓', label: '已核实', tone: 'good' },
  repriced: { icon: '✓', label: '有票·价格不同', tone: 'good' },
  trusted: { icon: '≈', label: '同档可信', tone: 'trust' },
  lead: { icon: '?', label: '线索', tone: 'lead' },
  seats: { icon: '!', label: '座位不足', tone: 'warn' },
  mixed: { icon: '!', label: '混舱', tone: 'warn' },
  gone: { icon: '✕', label: '已失效', tone: 'bad' },
  airport: { icon: '✕', label: '机场不符', tone: 'bad' },
  mismatch: { icon: '✕', label: '价格对不上', tone: 'bad' },
  unsure: { icon: '?', label: '未能确认', tone: 'warn' },
  excluded: { icon: '✕', label: '已排除', tone: 'bad' },
};
const TIER_EXPLAIN = {
  trusted:
    '这一档里已经有一天在 aa.com 搜索页核实过：机场对、舱位对、座位够。同档其他日期通常是同一组航班，但不保证。不过同一组航班可能某天全程商务、某天有一段只剩经济，下单前把要订的那天再核实一次最稳。',
  lead: '这一档还只有日历数据。日历是 aa.com 的每日最低价汇总，可能和实际搜索页对不上（比如没位、换了机场、混舱）。核实一天，就知道这一档靠不靠谱。',
  excluded: '这一档核实时发现机场不符或混舱，先排除。个别日期可以单独再核实。',
};

const FAILED_EXPLAIN = {
  gone: '这一档的日期核实时都已经没位了。',
  airport: '这一档核实时页面只给了其他机场的航班。',
  mixed: '这一档核实时最好的选项里有一段不是所选舱位（混舱）。',
  seats: '这一档核实时座位不够你选的人数。',
  mismatch: '这一档核实时，搜索页上显示的价格和日历不一样，日历上的价格订不到。',
};
const DYNAMIC_EXPLAIN =
  '这条航线是浮动定价（常见于 AA 自营航班）：每天的里程都可能不一样，这里按价位段归在一起。同一价位段里不同日期不一定是同一组航班，想订哪天就核实哪天。';
const SINGLE_EXPLAIN = {
  trusted: '这一天已经在 aa.com 搜索页核实过：机场对、舱位对、座位够。',
  lead: '这一天还只有日历数据。日历是 aa.com 的每日最低价汇总，可能和实际搜索页对不上，点「核实」确认一下。',
  excluded: '这一天核实时发现机场不符或混舱。',
};
const DATE_EXPLAIN = {
  verified: '刚核实过这一天：机场一致、舱位一致、座位够。',
  repriced: '日历上的价格订不到，但这一天有别的合格的票，已经按实际最低价归档。',
  trusted: '和同档已核实的日期一样，但这一天本身还没核实。',
  lead: '只有日历数据，还没核实。',
  gone: '核实时这一天已经没位了。',
  airport: '核实时只给出了其他机场的航班。',
  mixed: '核实时最好的选项里有一段不是所选舱位。',
  seats: '核实时座位不够你选的人数。',
  mismatch: '核实时搜索页上没有日历显示的这个价格。',
  unsure: '打开了搜索页，但没能在页面上读到价格来确认，以页面为准。',
  excluded: '同档另一天核实有问题，这天跟着排除，可以单独再核实。',
};
const KAOMOJI = ['(｡･ω･｡)', '(´･ω･`)', '(・∀・)', '(*´▽`*)'];

const MARK_EXCLAIM =
  '<svg viewBox="0 0 34 42" aria-hidden="true"><g fill="none" stroke-linecap="round">' +
  '<path d="M17 7 L17 25" stroke="var(--surface)" stroke-width="14"/><path d="M17 35 L17 35.2" stroke="var(--surface)" stroke-width="15"/>' +
  '<path d="M4.5 11 L1.5 7.5M5.5 20 L1.5 19M29.5 11 L32.5 7.5M28.5 20 L32.5 19" stroke="var(--surface)" stroke-width="6"/>' +
  '<path d="M17 7 L17 25" stroke="var(--primary)" stroke-width="8.5"/><path d="M17 35 L17 35.2" stroke="var(--primary)" stroke-width="9.5"/>' +
  '<path d="M4.5 11 L1.5 7.5M5.5 20 L1.5 19M29.5 11 L32.5 7.5M28.5 20 L32.5 19" stroke="var(--primary)" stroke-width="2.8"/>' +
  '</g></svg>';
const MARK_DOTS =
  '<svg viewBox="0 0 44 16" aria-hidden="true"><g fill="none" stroke-linecap="round">' +
  '<path d="M8 8 L8 8.2M22 8 L22 8.2M36 8 L36 8.2" stroke="var(--surface)" stroke-width="15"/>' +
  '<path d="M8 8 L8 8.2M22 8 L22 8.2M36 8 L36 8.2" stroke="#8a9199" stroke-width="11"/>' +
  '</g></svg>';
const isMuted = () => sessionStorage.getItem('ar-mute') === '1';
const muted = isMuted;
const CN_NUMERALS = '〇一二三四五六七八九十';
const cnNumber = n =>
  n <= 10
    ? CN_NUMERALS[n]
    : n < 20
      ? '十' + CN_NUMERALS[n - 10]
      : CN_NUMERALS[Math.floor(n / 10)] + '十' + (n % 10 ? CN_NUMERALS[n % 10] : '');
const COVER_RATIOS = ['3 / 4', '4 / 5', '1 / 1', '3 / 4', '4 / 5'];

const MOOD_DECOS = {
  happy: '<i class="deco spark">✦</i><i class="deco spark s2">✦</i>',
  surprised: '<i class="deco bang">!</i><i class="deco spark">✦</i>',
  worry: '<i class="deco drop"></i>',

  shy: '',
  angry: '<i class="deco anger"><b></b><b></b></i>',
  sleep: '<i class="deco zz">z<small>z</small></i>',
};

let state = null;
let prefs = null;

function initState() {
  prefs = Object.assign(
    { view: 'feed', sort: 'rec', quickOpen: { A: false, B: false } },
    Store.get('prefs', {}),
  );
  delete prefs.mode;
  if (!prefs.sel) {

    const preset = DATA.presets[0];
    prefs.sel = {
      A: preset.A.slice(0, 6),
      B: preset.B.slice(0, 3),
      dir: 'both',
      cabins: ['J'],
      pax: 1,
      months: 4,
      speed: 'normal',
    };
  }
  state = {
    root: null,
    favorites: new Set(Store.get('fav', [])),
    channel: 'all',
    routeFilter: null,
    showExcluded: false,
    routes: new Map(),
    cards: [],
    filtered: [],
    shown: 0,
    columns: 0,
    fullOpen: false,
    miniOpen: false,
    card: null,
    day: null,
    setupOpen: false,
    mood: '',
    moodUntil: 0,
    sleeping: false,
    lastActive: Date.now(),
    suggestions: { A: [], B: [] },
    suggestionAt: { A: 0, B: 0 },
  };
}

const savePrefs = () => Store.set('prefs', prefs);

const viewPax = () => +prefs.sel.pax || 1;
const combo = () => ({
  pax: viewPax(),
  cabin:
    state.cabinFilter && state.cabinFilter !== 'all'
      ? state.cabinFilter
      : prefs.sel.cabins[0] || 'J',
});
const cardId = card => `${card.cabin}-${card.o}-${card.d}-${card.id}`;
const favoriteKey = card => `${viewPax()}|${cardId(card)}`;
const routeKey = (cabin, o, d, program) =>
  `${cabin}|${o}|${d}` + (program && program !== 'AA' ? '|' + program : '');
const PROGRAM_LABELS = { AA: 'AA', AS: 'Alaska' };
const $ = (selector, scope) => (scope || state.root).querySelector(selector);
const $$ = (selector, scope) => Array.from((scope || state.root).querySelectorAll(selector));
const isPhone = () => window.innerWidth <= 720;
const reducedMotion = () =>
  !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

const cancelAnimations = (el, subtree) => {
  if (el.getAnimations) el.getAnimations({ subtree }).forEach(animation => animation.cancel());
};
const badge = status =>
  `<span class="badge ${STATUS[status].tone}"><i>${STATUS[status].icon}</i>${STATUS[status].label}</span>`;
const shortMiles = miles => (miles % 1000 ? (miles / 1000).toFixed(1) : miles / 1000) + 'k';

const lastScan = () => Scan.state.last || Store.get('lastScan', null);

function updateLastScan(patch) {
  const last = Store.get('lastScan', null);
  if (!last) return;
  Object.assign(last, patch);
  Store.set('lastScan', last);
  if (Scan.state.last && Scan.state.last.at === last.at) Object.assign(Scan.state.last, patch);
}

function scanKind(last) {
  if (last.outcome === 'blocked') return 'blocked';
  if (last.outcome === 'cancelled') return 'cancelled';
  if (last.errors && last.errors >= last.done) return 'failed';
  return last.found > 0 ? 'found' : 'none';
}

function placesText(tokens) {
  const names = tokens.map(placeName);
  return names.length <= 3
    ? names.join('、')
    : `${names.slice(0, 2).join('、')}等 ${names.length} 处`;
}

function scanSummary(params) {
  if (!params) return '';
  const arrow = { out: '→', back: '←', both: '⇄' }[params.dir] || '⇄';
  const cabins = params.cabins.map(cabin => CABINS[cabin].label).join(' + ');
  return `${placesText(params.A)} ${arrow} ${placesText(params.B)} · 未来 ${params.months} 个月 · ${params.pax} 人 · ${cabins}`;
}

function resultCopy(last) {
  const kind = scanKind(last);
  const failedPart = last.errors && kind !== 'failed' ? ` · ${last.errors} 次查询失败` : '';
  const summary = esc(scanSummary(last.params)) + failedPart;
  const progress = `已扫 ${fmtInt(last.done)}/${fmtInt(last.total)} 次查询`;
  const tiers = last.tiers ? `（${fmtInt(last.tiers)} 档）` : '';
  const copy = { kind, summary, note: '', mood: 'worry' };
  if (kind === 'found') {
    copy.mood = 'happy';
    copy.title = `扫完了！找到 ${fmtInt(last.found)} 天有位${tiers}`;
    copy.note = last.new ? `其中新出现 ${fmtInt(last.new)} 天` : '';
  } else if (kind === 'none') {
    copy.title = '这次没扫到有位的日期';
    if (last.skipped)
      copy.note = `有 ${fmtInt(last.skipped)} 天超过了${last.range ? last.range.replace('只保留 ≤ ', '上限 ') : '里程上限'}，没有保留`;
  } else if (kind === 'cancelled') {
    copy.mood = '';
    copy.title = '扫描已停止';
    copy.note = `${progress}，找到 ${fmtInt(last.found)} 天有位，都已保存`;
  } else if (kind === 'blocked') {
    copy.title = last.remaining ? '人机验证没有完成，先停下了' : 'aa.com 暂时拒绝了查询（403/429）';
    copy.note = last.remaining
      ? `${progress}，找到的 ${fmtInt(last.found)} 天已保存。还剩 ${fmtInt(last.remaining)} 次，之后点「继续」接着扫`
      : `${progress}，找到的 ${fmtInt(last.found)} 天已保存。建议过一小时再用「稳妥」速度重试`;
  } else {
    copy.title = '扫描失败了';
    copy.note = `${fmtInt(last.errors)} 次查询都没成功（${esc(last.lastError || '网络错误')}），检查网络后再试`;
  }
  return copy;
}

function resultButtons(last, place) {
  const kind = scanKind(last);
  const params = last.params || prefs.sel;
  let buttons = '';
  if (kind === 'found') {
    buttons =
      place === 'panel' ? '' : '<button class="btn primary" data-act="seeResults">去看看</button>';
  } else if (kind === 'none') {
    if (+params.months < 12) {
      const label = +params.months >= 10 ? '扫满 12 个月' : '多扫 3 个月';
      buttons += `<button class="btn primary" data-act="scanMore">${label}</button>`;
    }
    if (+params.pax > 1) buttons += '<button class="btn" data-act="scanOnePax">改成 1 人</button>';
    buttons += '<button class="btn" data-act="changeSetup">改设置</button>';
  } else {
    const label = last.remaining
      ? `继续（还剩 ${last.remaining} 次）`
      : kind === 'blocked'
        ? '重试（稳妥速度）'
        : '重试';
    buttons += `<button class="btn primary" data-act="${last.remaining ? 'resumeScan' : 'retry'}">${label}</button>`;
  }
  if (place === 'dialog') buttons += '<button class="btn" data-act="dialogClose">关闭</button>';
  else if (place !== 'feed')
    buttons += '<button class="btn" data-act="dismissResult">知道了</button>';
  return buttons;
}

function resultCardHtml(last, place) {
  const copy = resultCopy(last);
  const big = copy.kind !== 'found';
  const face = big ? mascotBody(place === 'mini' ? 86 : 112, copy.mood) : mascotHead(44, 'happy');
  return `<div class="rcard ${copy.kind}${big ? ' big' : ''}" role="status">
    <div class="rc-face">${face}</div>
    <div class="rc-t"><b>${copy.title}</b>${copy.note ? `<span class="rc-note">${copy.note}</span>` : ''}<span class="rc-sum">${copy.summary}</span></div>
    <div class="rc-acts">${resultButtons(last, place)}</div></div>`;
}

function statusHtml(place) {
  const scan = Scan.state;
  if (scan.job === 'scan' && scan.paused) {
    return `<div class="scanstrip paused" role="status"><div class="ss-row"><i class="ss-dot"></i>
      <b>已暂停，等你验证 · 还剩 <span class="num">${fmtInt(scan.remaining || 0)}</span> 次</b>
      <button class="btn small primary" data-act="goCheck">去验证</button><button class="btn small" data-act="stop">停止</button></div>
      <div class="ss-sub">已扫 ${fmtInt(scan.done)}/${fmtInt(scan.total)}，进度都在。完成验证后我会自动接着扫；15 分钟内没完成就先停下</div></div>`;
  }
  if (scan.job === 'scan') {
    const percent = scan.total ? Math.round((scan.done / scan.total) * 100) : 0;
    const eta = scan.eta != null && scan.done ? ` · 还要约 ${duration(scan.eta)}` : '';
    const fresh = scan.new ? `<em>新 ${fmtInt(scan.new)}</em>` : '';
    return `<div class="scanstrip" role="status"><div class="ss-row"><i class="ss-dot"></i>
      <b>正在扫描 <span class="num">${fmtInt(scan.done)}/${fmtInt(scan.total)}</span></b>
      <span class="ss-found">已找到 <b class="num">${fmtInt(scan.found)}</b> 天${fresh}</span>
      <button class="btn small" data-act="stop">${scan.msg ? '正在停止…' : '停止'}</button></div>
      <div class="ss-bar"><i style="width:${percent}%"></i></div>
      <div class="ss-sub">${percent}%${eta} · 扫描只在这个标签页开着时进行</div></div>`;
  }
  const resume = Store.get('scanResume', null);
  if (resume && resume.jobs && resume.jobs.length && !resume.autoResume) {
    return `<div class="scanstrip paused"><div class="ss-row"><i class="ss-dot"></i><b>上次扫描停在半路 · 还剩 ${fmtInt(resume.jobs.length)} 次</b>
      <button class="btn small primary" data-act="resumeScan">继续</button><button class="btn small" data-act="dropResume">不扫了</button></div></div>`;
  }
  const last = lastScan();
  if (state.resultCard && last) {

    if (place === 'panel' && !state.cards.length && scanKind(last) !== 'found') return '';
    return resultCardHtml(last, place);
  }
  return place === 'mini' ? progressHtml() : '';
}

function renderStatus() {
  const slot = state.fullOpen && $('.full .status-slot');
  if (slot) slot.innerHTML = statusHtml('panel');
}

function noteResultsOpened() {
  const last = lastScan();
  if (!last || last.seen !== false) return;
  updateLastScan({ seen: true });
  state.resultCard = true;
}

function showScanDialog(last) {
  const copy = resultCopy(last);
  const wrap = $('.dlg-wrap');
  wrap.innerHTML = `<div class="dlg-scrim"></div>
    <div class="dlg ${copy.kind}" role="alertdialog" aria-modal="true" aria-labelledby="ar-dlg-h" aria-describedby="ar-dlg-d">
      <div class="dlg-face">${mascotHead(76, copy.mood)}</div>
      <h2 id="ar-dlg-h">${copy.title}</h2>${copy.note ? `<p class="dlg-note">${copy.note}</p>` : ''}
      <p id="ar-dlg-d" class="dlg-sum">${copy.summary}</p>
      <div class="dlg-btns">${resultButtons(last, 'dialog')}</div></div>`;
  wrap.hidden = false;
  state.dialogOpen = true;
  state.dialogKind = 'scan';
  setTimeout(() => {
    const button = $('.dlg .btn.primary') || $('.dlg .btn');
    if (button && state.dialogOpen) button.focus({ preventScroll: true });
  }, 60);
}

function closeScanDialog() {
  if (!state.dialogOpen) return;
  const kind = state.dialogKind;
  closeDialog();
  if (kind === 'scan') updateLastScan({ ack: true });
}

function showDialog(inner, kind) {
  const wrap = $('.dlg-wrap');
  wrap.innerHTML = `<div class="dlg-scrim"></div><div class="dlg" role="alertdialog" aria-modal="true" aria-labelledby="ar-dlg-h" aria-describedby="ar-dlg-d">${inner}</div>`;
  wrap.hidden = false;
  state.dialogOpen = true;
  state.dialogKind = kind;
  setTimeout(() => {
    const button = $('.dlg .btn.primary') || $('.dlg .btn');
    if (button && state.dialogOpen) button.focus({ preventScroll: true });
  }, 60);
}

function closeDialog() {
  state.dialogOpen = false;
  const wrap = $('.dlg-wrap');
  wrap.hidden = true;
  wrap.innerHTML = '';
}

function showResults() {
  const last = lastScan();
  updateLastScan({ seen: true });
  state.resultCard = true;
  state.channel = 'all';
  state.routeFilter = null;
  prefs.miles = null;
  prefs.view = 'feed';
  state.cabinFilter = 'all';
  savePrefs();
  refreshData();
  if (!state.fullOpen) return openFull(false);
  updateTabs();
  renderFeed(true);
  renderStatus();
  $('.view').scrollTop = 0;
}

function rescan(patch) {
  const last = lastScan();
  closeScanDialog();
  updateLastScan({ seen: true });
  prefs.sel = Object.assign({}, (last && last.params) || prefs.sel, patch);
  savePrefs();
  if (state.fullOpen) {
    renderPicked('A');
    renderPicked('B');
    renderOptions();
    renderEstimate();
  }
  startScan(prefs.sel);
}

function mount() {
  if (document.getElementById('award-radar-host')) return;
  const host = document.createElement('div');
  host.id = 'award-radar-host';
  document.documentElement.appendChild(host);
  state.root = host.attachShadow({ mode: 'open' });
  state.root.innerHTML = `<style>${STYLES}</style><div class="ar">
    <div class="dock" data-act="dock" title="${esc(persona().name)}"></div><div class="bubble" hidden></div>
    <div class="mini" hidden></div><div class="full" hidden></div>
    <div class="scrim-all" hidden></div><aside class="drawer" hidden></aside>
    <div class="toast" hidden></div><div class="tip" hidden></div><div class="story" hidden></div><div class="checkbar" role="alert" hidden></div><div class="dlg-wrap" hidden></div>
    <div class="safe-probe"></div></div>`;
  bindDock();
  bindRoot();
  placeDock();
  window.addEventListener('resize', () => {
    placeDock();
    if (state.story) placeStoryBox();
    if (state.fullOpen) renderFeed(false);
  });
  Scan.listeners.add(onScan);
  Store.listen('checks', refreshData);
  Store.listen('humanCheck', onRemoteCheck);
  document.addEventListener('visibilitychange', updateTabTitle);
  refreshData();
  renderDock();
  initTalk();

  const resume = Store.get('scanResume', null);
  if (resume && resume.autoResume && !IS_RESULTS_PAGE) {
    Store.set('scanResume', Object.assign({}, resume, { autoResume: false }));
    const go = () => {
      if (humanCheckShown()) return setTimeout(go, 3000);
      say('验证通过了，我接着扫～', { ms: 3000, mood: 'happy' });
      Scan.start(resume.params, resume.jobs).catch(error => toast(error.message, 3500, 'worry'));
    };
    setTimeout(go, 1500);
  }

  const last = lastScan();
  if (last && last.ack === false && !Scan.running()) setTimeout(() => showScanDialog(last), 900);
}

function toast(message, ms = 2600, mood = 'happy') {
  const el = $('.toast');
  el.innerHTML = mascotHead(24, mood) + `<span>${esc(message)}</span>`;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (el.hidden = true), ms);
}

function rendererKind() {
  if (state.rendererKind) return state.rendererKind;
  if (DATA.live2d && DATA.live2d.model) return 'live2d';
  return DATA.mascot.normal ? 'image' : 'svg';
}

const MASCOT_SIZES = { s: 0.78, m: 1, l: 1.25 };
const sizeFactor = () => MASCOT_SIZES[prefs.mascotSize] || 1;

function dockHeight() {

  if (state && state.story) return Math.round(window.innerHeight * (isPhone() ? 0.62 : 0.78));
  let base = isPhone() ? 66 : 92;
  if (rendererKind() === 'live2d') base = isPhone() ? 200 : 300;
  else if (DATA.mascot.normal) base = isPhone() ? 150 : 220;
  const room = window.innerHeight - (state && state.fullOpen ? 72 : 24);
  return Math.max(90, Math.min(Math.round(base * sizeFactor()), room));
}

function dockWidth() {
  if (rendererKind() === 'live2d') return Math.round(dockHeight() * 0.74);
  const ratio = DATA.mascot.normal ? DATA.mascot.ratio || 0.66 : 114 / 156;
  return Math.round(dockHeight() * ratio);
}

function placeDock() {
  const dock = $('.dock');
  const width = dockWidth();
  const height = dockHeight();
  dock.style.width = width + 'px';
  dock.style.height = height + 'px';
  const saved = prefs.dock || {};

  const safeBottom = $('.safe-probe').offsetHeight;
  let x = Math.max(
    4,
    Math.min(
      window.innerWidth - width - 4,
      saved.x == null ? window.innerWidth - width - 22 : saved.x,
    ),
  );
  let y = Math.max(
    4,
    Math.min(
      window.innerHeight - height - 4,
      saved.y == null ? window.innerHeight - height - 22 - safeBottom : saved.y,
    ),
  );
  if (state.fullOpen) {
    x = window.innerWidth - width - (isPhone() ? 4 : 18);
    y = window.innerHeight - height - (isPhone() ? 4 : 8) - safeBottom;
  }
  if (state.story) {

    x = Math.round((window.innerWidth - width) / 2);
    y = Math.max(4, Math.round((window.innerHeight - height) / 2));
  }
  dock.style.left = x + 'px';
  dock.style.top = y + 'px';
  state.dockRect = { x, y, width, height };
  dock.style.setProperty('--badge-s', Math.round(Math.max(30, Math.min(42, height * 0.15))) + 'px');
  $('.ar').style.setProperty('--dock-w', width + 'px');
  $('.ar').style.setProperty('--dock-h', height + 'px');
  dock.classList.toggle('side-l', x + width / 2 < window.innerWidth / 2);

  const size = width + 'x' + height;
  if (state.renderer && state.rendererSize && state.rendererSize !== size) {
    const resized = state.renderer.resize && state.renderer.resize(width, height);
    if (!resized && state.renderer.kind === 'live2d') {
      state.renderer.destroy();
      mountRenderer();
    } else if (!resized && state.renderer.draw) {
      state.renderer.draw();
    }
  }
  state.rendererSize = size;
  positionFloating();
}

function mountRenderer() {
  state.renderer = makeRenderer();
  state.rendererKind = state.renderer.kind;

  state.lastMood = null;
  if (state.mood) state.renderer.setMood(currentMood());
  Promise.resolve(state.renderer.mount($('.dock .holder'))).then(() => {
    if (state.renderer.kind !== 'live2d-failed') return;
    state.rendererKind = DATA.mascot.normal ? 'image' : 'svg';
    placeDock();
  });
}

function currentMood() {
  if (Date.now() < state.moodUntil) return state.mood;
  return state.sleeping ? 'sleep' : '';
}

function renderDock() {
  const dock = $('.dock');
  const mood = currentMood();
  const busy = Scan.running();
  const keep = ['settle', 'side-l', 'glide'].filter(name => dock.classList.contains(name));
  dock.className =
    `dock m-${mood || 'idle'}` +
    (busy ? ' busy' : '') +
    (state.sleeping ? ' sleeping' : '') +
    (keep.length ? ' ' + keep.join(' ') : '');
  if (!$('.holder', dock)) {
    dock.innerHTML =
      '<div class="shadow"></div><div class="holder"></div><div class="decos"></div><span class="badge-n" hidden></span><button class="badge-s" hidden></button>' +
      '<div class="ring" hidden><svg viewBox="0 0 36 36"><circle class="trk" cx="18" cy="18" r="15"/><circle class="val" cx="18" cy="18" r="15" pathLength="100" stroke-dasharray="0 100"/></svg><b></b></div>';
    mountRenderer();
  }
  if (state.renderer && state.lastMood !== mood) {
    state.lastMood = mood;
    state.renderer.setMood(mood);
  }
  const decos = $('.decos', dock);
  decos.innerHTML = MOOD_DECOS[mood] || '';

  const renderer = state.renderer || {};
  const faceY = (renderer.figureTop || 0) + (renderer.figureHeight || 1) * 0.115;
  decos.style.setProperty('--face-y', (faceY * 100).toFixed(1) + '%');
  decos.style.setProperty('--deco-s', Math.round(dockWidth() * 0.055) + 'px');

  const ring = $('.ring', dock);
  ring.hidden = !busy;
  if (busy) {
    const scan = Scan.state;
    const percent = scan.total ? Math.round((scan.done / scan.total) * 100) : 0;
    $('.val', ring).setAttribute('stroke-dasharray', `${percent} 100`);
    $('b', ring).textContent = percent + '%';
  }

  const counter = $('.badge-n', dock);
  const last = lastScan();
  let text = '';
  let tone = '';
  if (state.checkWhere) {
    text = '!';
    tone = ' alert';
  } else if (!busy && last && last.seen === false) {
    const kind = scanKind(last);
    if (kind === 'found' || (kind === 'cancelled' && last.found)) {
      const count = last.tiers || last.found;
      text = count > 99 ? '99+' : String(count);
    } else if (kind === 'none' || kind === 'cancelled') {
      text = '0';
      tone = ' zero';
    } else {
      text = '!';
      tone = ' alert';
    }
  }
  counter.hidden = !text;
  counter.className = 'badge-n' + tone;
  counter.textContent = text;
  counter.title = text ? '上次扫描的结果，点我看看' : '';

  const story = $('.badge-s', dock);
  const index = todayStory();
  const unread = index >= 0 && !storyRead(index);
  story.hidden = index < 0 || busy || (!!text && unread && false);
  story.className = 'badge-s ' + (unread ? 'unread' : 'read');
  story.innerHTML = unread ? MARK_EXCLAIM : MARK_DOTS;
  story.title = unread ? '今天有一篇小剧场' : '再看一次小剧场';
  story.dataset.act = 'openStory';
}

function setMood(mood, ms = 8000) {
  state.mood = mood;
  state.moodUntil = Date.now() + ms;
  clearTimeout(state.moodTimer);

  if (mood) state.moodTimer = setTimeout(renderDock, ms + 30);
  renderDock();
}

function setExpression(name, ms = 3600e3) {
  setMood(name || '', name ? ms : 0);
}

function wake() {
  state.lastActive = Date.now();
  if (!state.sleeping) return;
  state.sleeping = false;
  renderDock();
  talk('wake');
}

function dockCenter() {
  const rect = state.dockRect;
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height * 0.35 };
}

function positionFloating() {
  const rect = state.dockRect;
  if (!rect) return;
  const onRight = rect.x + rect.width / 2 > window.innerWidth / 2;
  const bubble = $('.bubble');
  if (!bubble.hidden) {
    bubble.style.left = '0px';
    const width = Math.min(240, bubble.offsetWidth || 220);
    const height = bubble.offsetHeight || 60;
    const left = onRight ? rect.x + rect.width - width + 10 : rect.x - 10;
    const badge = $('.badge-s');
    const badgeRoom = badge && !badge.hidden ? badge.offsetHeight + 8 : 0;
    let top = rect.y - height - 10 - badgeRoom;
    if (top < 6) top = rect.y + rect.height + 10;
    bubble.style.left = Math.max(6, Math.min(window.innerWidth - width - 6, left)) + 'px';
    bubble.style.top = top + 'px';
    bubble.classList.toggle('left', !onRight);
  }
  const mini = $('.mini');
  if (!mini.hidden && !isPhone()) {
    const pair = !!storyList().length;
    const stacked = pair && window.innerWidth < 2 * 360 + 10 + 32;
    mini.classList.toggle('pair', pair && !stacked);
    mini.classList.toggle('stacked', stacked);
    const width = pair && !stacked ? 730 : 360;
    const height = Math.min(stacked ? 760 : 520, window.innerHeight - 24);
    let left = onRight ? rect.x - width - 10 : rect.x + rect.width + 10;
    if (left + width > window.innerWidth - 6) left = rect.x - width - 10;
    if (left < 6) left = Math.max(6, Math.min(window.innerWidth - width - 6, rect.x - width / 2));
    mini.style.width = width + 'px';
    mini.style.left = left + 'px';
    mini.style.top =
      Math.max(12, Math.min(window.innerHeight - height - 12, rect.y + rect.height - height)) +
      'px';
    mini.style.height = height + 'px';
  }
}

function bindDock() {
  const dock = $('.dock');
  let start = null;
  let moved = false;
  dock.addEventListener('pointerdown', event => {
    start = { px: event.clientX, py: event.clientY, x: state.dockRect.x, y: state.dockRect.y };
    moved = false;
    try {
      dock.setPointerCapture(event.pointerId);
    } catch (error) {

    }
  });
  dock.addEventListener('pointercancel', () => (start = null));
  dock.addEventListener('lostpointercapture', () => {
    if (moved) start = null;
  });
  dock.addEventListener('pointermove', event => {
    if (!start || state.fullOpen) return;

    if (event.pointerType === 'mouse' && !(event.buttons & 1)) {
      start = null;
      return;
    }
    const dx = event.clientX - start.px;
    const dy = event.clientY - start.py;
    if (!moved && Math.hypot(dx, dy) < 5) return;
    if (!moved) talk('drag');
    moved = true;
    prefs.dock = { x: start.x + dx, y: start.y + dy };
    placeDock();
  });
  dock.addEventListener('pointerup', () => {
    if (!start) return;
    start = null;
    if (moved) {
      savePrefs();
      dock.classList.add('settle');
      setTimeout(() => dock.classList.remove('settle'), 720);
      talk('drop');
      return;
    }
    wake();

    if (state.renderer && !state.story) state.renderer.tap();
    onDockClick();
  });
  dock.addEventListener('pointerenter', wake);
}

function onDockClick() {
  const now = Date.now();
  const rapid = state.lastClick && now - state.lastClick < 1500;
  state.lastClick = now;
  state.pokes = (state.pokes || []).filter(t => now - t < 20000).concat(now);
  if (!rapid && !state.fullOpen) {
    if (state.miniOpen) {
      state.resultCard = false;
      closeMini();
    } else {
      openMini();
    }
  }
  const count = state.pokes.length;
  const level = count >= 10 ? 4 : count >= 6 ? 3 : count >= 3 ? 2 : 1;
  talk(
    'poke',
    { count },
    { level, mood: level >= 4 ? 'angry' : level === 3 ? 'shy' : level === 2 ? 'surprised' : 'happy' },
  );
}

function say(html, options = {}) {
  const bubble = $('.bubble');
  bubble.className = 'bubble' + (options.kind ? ' ' + options.kind : '');
  const closer = options.sticky
    ? '<button class="bx" data-act="closeBubble" title="关闭">×</button>'
    : '<button class="bx" data-act="mute" title="今天先别说话">×</button>';
  bubble.innerHTML = closer + html;
  bubble.hidden = false;
  const length = options.length || String(html).replace(/<[^>]+>/g, '').length;
  if (options.mood) setMood(options.mood, options.sticky ? 3600e3 : 2500 + 120 * length);
  positionFloating();
  renderDock();
  clearTimeout(state.bubbleTimer);
  if (!options.sticky)
    state.bubbleTimer = setTimeout(
      () => {
        bubble.hidden = true;
        renderDock();
      },
      options.ms || 2500 + 120 * length,
    );
}

const LINE_MOODS = {
  greet_morning: 'happy',
  greet_noon: 'happy',
  greet_evening: 'happy',
  greet_back: 'happy',
  midnight: 'surprised',
  drag: 'surprised',
  drop: 'happy',
  wake: 'surprised',
  sleep: 'sleep',
  scan_start: 'happy',
  scan_half: 'happy',
  scan_done_found: 'happy',
  scan_done_new: 'surprised',
  scan_done_none: 'down',
  blocked: 'worry',
  human_check: 'worry',
  fav: 'happy',
  unfav: 'worry',
  verify_ok: 'happy',
  verify_mixed: 'angry',
  verify_gone: 'down',
  verify_airport: 'angry',
  verify_seats: 'worry',
  verify_failed: 'worry',
  poke: 'shy',
};

const ALWAYS_SHOWN = new Set([
  'human_check',
  'verify_ok',
  'verify_mixed',
  'verify_gone',
  'verify_airport',
  'verify_seats',
  'verify_failed',
]);

function talk(group, vars, options = {}) {
  const text = pickLine(group, vars, options.level);
  if (!text) return;
  const mood = options.mood != null ? options.mood : LINE_MOODS[group] || '';
  const muted = isMuted();
  if (options.idle && (muted || state.miniOpen || state.card || !$('.bubble').hidden)) return;
  if (muted) {
    if (ALWAYS_SHOWN.has(group) || (options.toast && !muted)) {
      toast(
        text + (options.subText ? ' · ' + options.subText : ''),
        2500 + 120 * text.length,
        mood || 'happy',
      );
    }
    return;
  }
  say(esc(text) + (options.sub ? `<span class="bsub">${options.sub}</span>` : ''), {
    mood,
    sticky: options.sticky,
    kind: options.kind,
    length: text.length,
  });
}

const VERDICT_LINES = {
  ok: 'verify_ok',
  diff: 'verify_ok',
  mixed: 'verify_mixed',
  none: 'verify_gone',
  airport: 'verify_airport',
  seats: 'verify_seats',
  failed: 'verify_failed',
};

function sayVerdict(item, result, extra) {
  const detail = [
    esc(verdictLine(result, item.pax)),
    result.flights ? esc(result.flights + ' · ' + (result.path || '')) : '',
    extra || '',
  ]
    .filter(Boolean)
    .join('<br>');
  talk(
    VERDICT_LINES[result.status] || 'verify_failed',
    { seats: result.seats, from: cityName(item.o), to: cityName(item.d) },
    {
      sticky: true,
      kind: result.status === 'ok' || result.status === 'diff' ? 'good' : 'bad',
      sub: detail,
      subText: verdictLine(result, item.pax),
    },
  );
}

function greetingGroup() {
  const lastVisit = Store.get('lastVisit', 0);
  if (lastVisit && Date.now() - lastVisit > DAY_MS) return 'greet_back';
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return 'greet_morning';
  if (hour >= 11 && hour < 16) return 'greet_noon';
  if (hour >= 16 && hour < 23) return 'greet_evening';
  return 'greet_night';
}

const VERSION_NOTES = {
  '1.0.5': '新增小剧场，可以点击感叹号试试看哦～',
};

function versionNote() {
  if (IS_RESULTS_PAGE) return;
  const version = DATA.build.version;
  if (Store.get('noticedVersion', '') === version) return;
  Store.set('noticedVersion', version);
  const text = VERSION_NOTES[version];
  if (!text) return;
  const show = () => {
    if (Scan.running()) return setTimeout(show, 20000);
    if (isMuted()) toast(text, 6000, 'happy');
    else say(esc(text), { sticky: true, mood: 'happy' });
  };
  setTimeout(show, 3200);
}

function initTalk() {
  versionNote();
  if (!IS_RESULTS_PAGE && !sessionStorage.getItem('ar-greeted')) {
    sessionStorage.setItem('ar-greeted', '1');
    const group = greetingGroup();
    setTimeout(() => talk(group), 1400);
  }
  Store.set('lastVisit', Date.now());
  const scheduleIdle = () =>
    setTimeout(
      () => {
        if (!document.hidden && !state.sleeping && !Scan.running())
          talk('idle', null, { idle: true });
        scheduleIdle();
      },
      60000 + Math.random() * 60000,
    );
  scheduleIdle();
  state.today = todayIso();
  setInterval(() => {
    if (todayIso() !== state.today) {
      state.today = todayIso();
      talk('midnight');
    }
    const idleFor = Date.now() - state.lastActive;
    if (
      !state.sleeping &&
      !Scan.running() &&
      !state.miniOpen &&
      !state.fullOpen &&
      idleFor > 300000
    ) {
      state.sleeping = true;
      renderDock();
      talk('sleep', null, { idle: true });
    }
  }, 15000);
  for (const type of ['pointerdown', 'keydown', 'wheel', 'touchstart']) {
    window.addEventListener(type, wake, { passive: true, capture: true });
  }
}

function springFrom(el, point, ms = 460) {
  if (reducedMotion() || !el.animate) return;
  const rect = el.getBoundingClientRect();
  el.style.transformOrigin = `${point.x - rect.left}px ${point.y - rect.top}px`;
  el.animate(
    [
      { transform: 'scale(.18)', opacity: 0 },
      { transform: 'scale(1.035)', opacity: 1, offset: 0.62 },
      { transform: 'scale(.995)', offset: 0.82 },
      { transform: 'scale(1)', opacity: 1 },
    ],
    { duration: ms, easing: 'cubic-bezier(.2,.8,.3,1)' },
  );
}

function shrinkTo(el, point, ms = 220) {
  if (reducedMotion() || !el.animate) return Promise.resolve();
  const rect = el.getBoundingClientRect();
  el.style.transformOrigin = `${point.x - rect.left}px ${point.y - rect.top}px`;
  const keyframes = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(.2)', opacity: 0 },
  ];
  return el
    .animate(keyframes, { duration: ms, easing: 'cubic-bezier(.5,0,.8,.4)' })
    .finished.catch(() => {});
}

function flip(el, from, ms = 500, easing = 'cubic-bezier(.2,.9,.25,1.08)') {
  if (reducedMotion() || !el.animate || !from) return Promise.resolve();
  const to = el.getBoundingClientRect();
  el.style.transformOrigin = '0 0';
  const start = `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`;
  return el
    .animate([{ transform: start }, { transform: 'none' }], { duration: ms, easing })
    .finished.catch(() => {});
}

function heartBurst(button) {
  if (reducedMotion()) return;
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  for (let i = 0; i < 9; i++) {
    const particle = document.createElement('i');
    particle.className = 'heartp';
    particle.textContent = i % 3 ? '♥' : '✦';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    $('.ar').appendChild(particle);
    const angle = (i / 9) * Math.PI * 2 + Math.random() * 0.5;
    const distance = 22 + Math.random() * 18;
    const end = `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance - 10}px)) scale(1)`;
    particle
      .animate(
        [
          { transform: 'translate(-50%,-50%) scale(.4)', opacity: 1 },
          { transform: end, opacity: 0 },
        ],
        {
          duration: 620 + Math.random() * 200,
          easing: 'cubic-bezier(.2,.7,.3,1)',
        },
      )
      .finished.then(
        () => particle.remove(),
        () => particle.remove(),
      );
  }
}

function markCrossChecked() {
  if (!alaskaEnabled()) return;
  const seen = new Map();
  for (const card of state.cards) {
    const program = card.program || 'AA';
    for (const date of card.dates) {
      const key = `${card.o}|${card.d}|${card.cabin}|${date}`;
      if (!seen.has(key)) seen.set(key, new Set());
      seen.get(key).add(program);
    }
  }
  for (const card of state.cards) {
    card.crossChecked = card.dates.some(date => {
      const programs = seen.get(`${card.o}|${card.d}|${card.cabin}|${date}`);
      return programs && programs.size > 1;
    });
  }
}

function refreshData() {
  state.routes = new Map();
  for (const cabin of ['Y', 'J']) {
    for (const route of analyze(viewPax(), cabin).values()) {
      const program = route.program || 'AA';
      state.routes.set(
        routeKey(cabin, route.o, route.d, program),
        Object.assign(route, { cabin, program }),
      );
    }
  }
  state.cards = [];
  for (const route of state.routes.values()) {
    const byTier = new Map();
    for (const day of route.dates) {
      if (!byTier.has(day.tier)) byTier.set(day.tier, []);
      byTier.get(day.tier).push(day);
    }
    for (const tier of route.tiers) {
      const days = byTier.get(tier.id) || [];
      state.cards.push(
        Object.assign({}, tier, {
          o: route.o,
          d: route.d,
          cabin: route.cabin,
          program: route.program,
          twin: route.twin,
          scanned: route.scanned,
          dates: days.map(day => day.date),
          facts: tierFacts(days),
        }),
      );
    }
  }
  markCrossChecked();
  if (state.miniOpen) renderMini();
  if (state.fullOpen) {
    if (prefs.view === 'matrix') renderMatrix();
    else renderFeed(true);
    updateTabs();
  }
  if (state.card) renderDrawer();
  renderDock();
}

let lastScanRefresh = 0;
function onScan(scan) {
  if (scan.job === 'scan' && scan.paused && !state.checkWhere) {
    onCheckAppeared('scan', `需要人机验证 · 已暂停，还剩 ${scan.remaining || 0} 次，进度都在`);
  } else if (scan.job === 'scan' && !scan.paused && state.checkWhere === 'scan') {
    onCheckPassed('验证通过了，我接着扫～');
  } else if (scan.job !== 'scan' && state.checkWhere === 'scan') {
    onCheckPassed('');
  }
  if (scan.job === 'scan') {
    if (scan.done === 0 && !state.scanTalked) state.resultCard = false;
    if (Date.now() - lastScanRefresh > 3000) {
      lastScanRefresh = Date.now();
      refreshData();
    }
    renderJob();
    talkScanProgress(scan);
  } else if (scan.last) {
    state.scanTalked = false;
    state.resultCard = true;

    if (state.fullOpen || state.miniOpen) updateLastScan({ seen: true });
    refreshData();
    renderJob();

    clearTimeout(state.bubbleTimer);
    $('.bubble').hidden = true;
    talkScanResult(scan.last);
    showScanDialog(scan.last);
  }
}

function talkScanProgress(scan) {
  if (state.checkWhere) return;
  const percent = scan.total ? Math.round((scan.done / scan.total) * 100) : 0;
  if (scan.done === 0 && !state.scanTalked) {
    state.scanTalked = true;
    state.lastPercent = 0;
    state.saidHalf = false;
    talk('scan_start', null, { sub: '扫描时这个标签页别关哦', toast: true });
  } else if (percent - (state.lastPercent || 0) >= 20 && percent < 100) {
    state.lastPercent = percent - (percent % 20);
    if (percent >= 50 && !state.saidHalf) {
      state.saidHalf = true;
      talk('scan_half', { pct: percent });
    } else {
      talk('scan_progress', { pct: percent });
    }
  }
}

function talkScanResult(last) {
  state.lastPercent = 0;
  const kind = scanKind(last);
  if (kind === 'blocked') {
    talk('blocked', null, {
      kind: 'bad',
      sticky: true,
      sub: '扫到的都已保存，过一小时用「稳妥」速度再试',
    });
  } else if (kind === 'failed') {
    say(
      `<b>扫描失败了</b><span class="bsub">${fmtInt(last.errors)} 次查询都没成功（${esc(last.lastError || '网络错误')}）</span>`,
      { sticky: true, kind: 'bad', mood: 'worry' },
    );
  } else if (kind === 'cancelled') {
    talk('scan_cancel');
  } else if (last.new > 0) {
    talk('scan_done_new', { new: last.new, n: last.found });
  } else if (kind === 'found') {
    talk('scan_done_found', { n: last.found });
  } else if (last.skipped) {
    const cap = (last.range || '').replace('只保留 ≤ ', '');
    say(esc(`都超过 ${cap || '上限'}，要不要把上限调高一点？`), { sticky: true, mood: 'worry' });
  } else {
    talk('scan_done_none', null, { sticky: true, sub: esc(scanSummary(last.params)) });
  }
}

function openMini() {
  noteResultsOpened();
  renderDock();
  state.miniOpen = true;
  const mini = $('.mini');
  mini.hidden = false;
  renderMini();
  positionFloating();
  $('.bubble').hidden = true;
  springFrom(mini, dockCenter());
}

function closeMini(instant) {
  if (!state.miniOpen) return;
  state.miniOpen = false;
  const mini = $('.mini');
  if (instant || reducedMotion()) {
    mini.hidden = true;
    return;
  }
  shrinkTo(mini, dockCenter()).then(() => {
    if (!state.miniOpen) mini.hidden = true;
  });
}

const topCards = count =>
  state.cards
    .filter(card => card.status !== 'excluded')
    .sort(recommendedOrder)
    .slice(0, count);

function miniGreeting(cards) {
  if (Scan.running()) return '我在努力扫描中，这个标签页先别关哦～';
  if (cards.some(card => card.status === 'trusted')) return '有已核实的同款票！先看这几张～';
  if (cards.length) return '这几档最值得看，点「核实」确认一下哦～';
  return `还没有票的数据 ${KAOMOJI[0]} 点下面开始扫描吧！`;
}

function miniCardHtml(card) {
  const facts = card.facts;
  const ribbon = card.new ? `<span class="ribbon small">NEW · 新放出 ${card.new} 天</span>` : '';
  return `<button class="mcard${card.new ? ' has-new' : ''}" data-card="${esc(cardId(card))}">${ribbon}
    <div class="thumb">${cardCoverArt(card)}</div>
    <div class="mt"><span class="r">${esc(cityName(card.o))} → ${esc(cityName(card.d))}</span>
      <span class="p"><i class="cab">${CABINS[card.cabin].short}</i><b>${fmtInt(card.miles)}</b> 里程 + ${money(card.cash)}</span>
      ${facts ? `<span class="k">${esc(keyFact(card))} · 最近 ${facts.nearest.slice(5)}</span>` : ''}
      <span>${badge(card.status)} <span class="small muted">${card.days} 天有位</span></span></div></button>`;
}

function renderMini() {
  const cards = topCards(5);
  const requests = estimate(prefs.sel).requests;
  const scanButton = Scan.running()
    ? '<button class="btn" data-act="stop">停止扫描</button>'
    : `<button class="btn primary" data-act="quickScan">开始扫描 · 约 ${fmtInt(requests)} 次</button>`;
  $('.mini').innerHTML =
    `<div class="mini-main"><div class="mini-h">${mascotHead(30, '')}<b>${esc(persona().name)}</b>
      <span class="small muted">${viewPax()}人 · ${prefs.sel.cabins.map(cabin => CABINS[cabin].label).join(' + ')}</span>
      <button class="x" data-act="closeMini" aria-label="关闭">×</button></div>
    <div class="mini-b">
      ${statusHtml('mini')}
      <div class="mini-route"><span class="mr-a">${esc(placesText(prefs.sel.A))}</span><button class="swapbtn" data-act="swapSides" title="交换出发地和目的地">⇄</button><span class="mr-b">${esc(placesText(prefs.sel.B))}</span></div>
      <div class="mini-cap"><span>里程上限</span>${capInputHtml('cap')}${[40, 60, 100]
        .map(
          k =>
            `<button class="kpreset${prefs.capK === k ? ' on' : ''}" data-cap="${k}">${k}k</button>`,
        )
        .join('')}</div>
      <div class="mini-cab"><span>扫哪种舱位</span>${['Y', 'J']
        .map(
          cabin =>
            `<button class="cchip${prefs.sel.cabins.includes(cabin) ? ' on' : ''}" data-cab="${cabin}">${CABINS[cabin].label}</button>`,
        )
        .join('')}</div>
      <div class="say">${mascotHead(26, cards.length ? 'happy' : '')}<div class="txt">${miniGreeting(cards)}</div></div>
      ${cards.map(miniCardHtml).join('')}
    </div>
    <div class="mini-f">${scanButton}
      <button class="btn" data-act="openSetup">设置</button>
      <button class="btn" data-act="openFull">展开完整面板</button></div></div>${miniStoryPanelHtml()}`;
}

function miniStoryPanelHtml() {
  if (!storyList().length) return '';
  const unlocked = storyState().n;
  const items = storyList()
    .slice(0, unlocked)
    .map(
      (story, i) =>
        `<button class="st-item${storyRead(i) ? '' : ' unread'}" data-story="${i}"><b>${cnNumber(i + 1)}</b>${esc(story.title.replace(/^\d+\s*·\s*/, ''))}${storyRead(i) ? '' : '<i>！</i>'}</button>`,
    )
    .join('');
  return `<div class="mini-side"><div class="mini-h">${mascotHead(30, 'happy')}<b>小剧场</b>
      <span class="small muted">${unlocked} 篇</span></div>
    <div class="mini-b">${items}</div>
    <div class="mini-f"><span class="small muted">每天解锁一篇，点哪篇都能重看</span></div></div>`;
}

function progressHtml() {
  if (Scan.running()) return '';
  const last = lastScan();
  if (!last) return '';
  const fresh = last.newTiers ? `，新放出 ${last.newTiers} 档` : '';
  const blocked = last.outcome === 'blocked' ? '（被 aa.com 拦了一下）' : '';
  return `<div class="prog">上次扫描 ${ago(last.at)}：${fmtInt(last.found)} 个有位日期${fresh}${blocked}</div>`;
}

function fullHeaderHtml() {
  return `<header class="top">
    <div class="brand">${mascotHead(34, 'happy')}<div><b>里程票雷达</b><span class="small">AAdvantage 兑换空位</span></div></div>
    <nav class="tabs"><button data-view="feed">发现</button><button data-view="fav">收藏<span class="n fav-n"></span></button><button data-view="matrix">总览</button><button data-view="story" class="tab-story">小剧场<span class="n story-n"></span></button></nav>
    <span class="spacer"></span>
    <button class="btn small mobile-only" data-act="toggleSetup">扫描设置</button>
    <button class="x" data-act="closeFull" aria-label="关闭">×</button></header>`;
}

function capInputHtml(which) {
  const value = which === 'cap' ? prefs.capK : prefs.floorK;
  return `<span class="kinput"><input type="number" class="k-${which}" min="5" step="0.5" placeholder="不限" value="${value || ''}" aria-label="${which === 'cap' ? '里程上限' : '里程下限'}（单位 k）"><i>k</i></span>`;
}

function segHtml(option, choices) {
  return `<div class="seg" data-opt="${option}">${choices.map(([value, label]) => `<button data-v="${value}">${label}</button>`).join('')}</div>`;
}

function optionsHtml() {
  const months = Array.from(
    { length: 12 },
    (_, i) => `<option value="${i + 1}">未来 ${i + 1} 个月</option>`,
  ).join('');
  const programRow = alaskaEnabled()
    ? `<div class="opt"><span class="opt-l">计划</span>${segHtml('programs', [
        ['AA', 'AAdvantage'],
        ['AS', 'Atmos Rewards'],
      ])}<span class="hint">可以两个都选；Alaska 每次查询要下载整页，默认只扫前 ${AS_MAX_MONTHS} 个月</span></div>`
    : '';
  return `<section class="opts">
    ${programRow}
    <div class="opt"><span class="opt-l">方向</span>${segHtml('dir', [
      ['out', '去程'],
      ['back', '回程'],
      ['both', '往返都查'],
    ])}</div>
    <div class="opt"><span class="opt-l">舱位</span>${segHtml('cabins', [
      ['Y', '经济'],
      ['J', '商务·头等'],
    ])}<span class="hint">可以两个都选</span></div>
    <div class="opt"><span class="opt-l">人数</span><div class="stepper"><button data-act="pax-">−</button><output class="pax"></output><button data-act="pax+">＋</button></div><span class="hint">座位不够的日期不会出现</span></div>
    <div class="opt"><span class="opt-l">范围</span><select class="months">${months}</select></div>
    <div class="opt"><span class="opt-l">里程上限</span>${capInputHtml('cap')}${[40, 60, 100]
      .map(
        k =>
          `<button class="kpreset${prefs.capK === k ? ' on' : ''}" data-cap="${k}">${k}k</button>`,
      )
      .join('')}<button class="kpreset" data-cap="0">不限</button></div>
    <div class="opt"><span class="opt-l">里程下限</span>${capInputHtml('floor')}<span class="hint">一般留空；两个都填就是一个区间</span></div>
    <div class="opt"><span class="opt-l">速度</span>${segHtml('speed', [
      ['normal', '标准'],
      ['gentle', '稳妥'],
    ])}</div>
    <div class="opt"><span class="opt-l">每天上限</span><select class="dailycap">${[
      400, 800, 1500, 3000, -1,
    ]
      .map(
        value =>
          `<option value="${value}" ${(value === -1 ? 0 : value) === dailyCap() ? 'selected' : ''}>${value > 0 ? '建议 ' + value + ' 次' : '不提醒'}</option>`,
      )
      .join(
        '',
      )}</select><span class="hint">今天已查 ${fmtInt(requestsToday())} 次，超过只提醒、不拦</span></div>
    <p class="tradeoff">查得越多，aa.com 之后越可能要求人机验证，包括你真正订票的时候。不登录 aa.com 账号扫描，这些查询不会挂在你的账户上。</p>
    <div class="opt"><span class="opt-l">看板娘</span>${segHtml('mascotSize', [
      ['s', '小'],
      ['m', '中'],
      ['l', '大'],
    ])}</div>
  </section>`;
}

function setupHtml(open) {
  return `<aside class="setup ${open ? 'open' : ''}">
    <div class="setup-h">扫描设置<button class="x" data-act="toggleSetup">×</button></div>
    <div class="setup-s">
      <section><div class="sec-h"><h2>从哪里出发</h2><label class="preset">预设 <select class="presets"></select></label></div><div class="picker" data-side="A"></div></section>
      <div class="swaprow"><button class="swapbtn" data-act="swapSides" title="交换出发地和目的地">⇅ 交换</button></div>
      <section><div class="sec-h"><h2>想去哪里</h2></div><div class="picker" data-side="B"></div></section>
      ${optionsHtml()}
    </div>
    <div class="run"><div class="estimate"></div><div class="jobbtn"></div><div class="jobprog"></div>
      <details class="debug"><summary>调试信息</summary><pre class="debug-info"></pre></details></div>
  </aside>`;
}

function openFull(withSetup) {
  const miniRect = state.miniOpen ? $('.mini').getBoundingClientRect() : null;
  closeMini(true);
  noteResultsOpened();
  state.fullOpen = true;
  stopObservingCards();
  const full = $('.full');
  full.hidden = false;
  full.innerHTML =
    fullHeaderHtml() +
    `<div class="status-slot"></div><div class="body">${setupHtml(withSetup)}<section class="main"><div class="view"></div></section></div>`;
  state.setupOpen = !!withSetup;
  $('.ar').classList.toggle('setup-open', state.setupOpen);
  $('.presets').innerHTML =
    '<option value="">选择…</option>' +
    DATA.presets.map((p, i) => `<option value="${i}">${esc(p.label)}</option>`).join('');
  buildPicker('A');
  buildPicker('B');
  renderOptions();
  renderJob();
  updateTabs();
  renderView(true);
  renderEstimate();
  $('.view').addEventListener('scroll', onFeedScroll);
  $('.debug').addEventListener('toggle', event => {
    if (event.target.open) $('.debug-info').textContent = Diagnostics.text();
  });
  if (miniRect) flip(full, miniRect, 560, 'cubic-bezier(.2,.85,.25,1.06)');
  else springFrom(full, dockCenter(), 520);

  $('.ar').classList.add('panel-open');
  glideDock();
}

function glideDock() {
  const dock = $('.dock');
  if (!reducedMotion()) {
    dock.classList.add('glide');
    clearTimeout(state.glideTimer);
    state.glideTimer = setTimeout(() => dock.classList.remove('glide'), 650);
  }
  placeDock();
}

function closeFull() {
  if (!state.fullOpen) return;
  state.fullOpen = false;
  state.resultCard = false;
  stopObservingCards();
  const full = $('.full');
  $('.ar').classList.remove('panel-open', 'tucked');
  glideDock();
  shrinkTo(full, dockCenter(), 260).then(() => {
    if (state.fullOpen) return;
    full.hidden = true;
    full.innerHTML = '';
  });
}

function updateTabs() {
  $$('.tabs button').forEach(button =>
    button.classList.toggle('on', button.dataset.view === prefs.view),
  );
  const count = state.cards.filter(card => state.favorites.has(favoriteKey(card))).length;
  const counter = $('.fav-n');
  if (counter) counter.textContent = count || '';
  const story = $('.story-n');
  if (story) {
    const index = todayStory();
    story.textContent = index >= 0 && !storyRead(index) ? '！' : '';
    story.className = 'n story-n' + (story.textContent ? ' unread' : '');
  }
}

function renderJob() {
  if (state.miniOpen) renderMini();
  renderDock();
  if (!state.fullOpen) return;
  $('.jobbtn').innerHTML = Scan.running()
    ? '<button class="btn" data-act="stop" style="width:100%;justify-content:center">停止扫描</button>'
    : '<button class="btn primary" data-act="scan" style="width:100%">开始扫描</button>';
  $('.jobprog').innerHTML = progressHtml();
  renderStatus();
}

const pickerOf = side => $(`.picker[data-side="${side}"]`);

function buildPicker(side) {
  const picker = pickerOf(side);
  const quickOpen = prefs.quickOpen && prefs.quickOpen[side] ? 'open' : '';
  picker.innerHTML = `<div class="picked-h"><span class="cnt"></span><button class="link" data-act="clear" data-side="${side}">清空</button></div>
    <div class="picked"></div>
    <div class="search"><input type="text" autocomplete="off" spellcheck="false" placeholder="搜城市、机场或三字码" data-side="${side}">
      <div class="suggest" hidden></div></div>
    <details class="quick" ${quickOpen}><summary>常用城市</summary><div class="quick-b"></div></details>`;
  $('.quick', picker).addEventListener('toggle', event => {
    prefs.quickOpen = prefs.quickOpen || {};
    prefs.quickOpen[side] = event.target.open;
    savePrefs();
  });
  renderPicked(side);
}

function countryChipHtml(token, side) {
  const count = gatewaysOf(token.slice(1)).length;
  return `<span class="pchip country"><i>🌐</i>${esc(placeName(token))}<small>整个国家 · ${count} 个机场</small><button data-rm="${esc(token)}" data-side="${side}">×</button></span>`;
}

function pickedChipHtml(code, side) {
  return `<span class="pchip">${esc(cityName(code))}<small>${code}</small><button data-rm="${code}" data-side="${side}">×</button></span>`;
}

function quickGroupHtml(group, side, selected) {
  const codes = Object.keys(group.codes);
  const allSelected = codes.every(code => selected.has(code));
  const chips = codes
    .map(
      code =>
        `<button class="chip ${selected.has(code) ? 'on' : ''}" data-code="${code}" data-side="${side}">${esc(cityName(code))}<small>${code}</small></button>`,
    )
    .join('');
  return `<div class="grp-h"><span>${esc(group.label)}</span><button class="link" data-grp="${group.key}" data-side="${side}">${allSelected ? '取消全选' : '全选'}</button></div>
    <div class="chips">${chips}</div>`;
}

function renderPicked(side) {
  const picker = pickerOf(side);
  if (!picker) return;
  const codes = prefs.sel[side];
  const selected = new Set(codes);
  const expanded = expandCodes(codes).length;
  $('.cnt', picker).textContent = !codes.length
    ? ''
    : codes.some(isCountry)
      ? `已选 ${codes.length} 项 · 展开后 ${expanded} 个机场`
      : `已选 ${codes.length} 个`;
  $('.picked', picker).innerHTML = codes.length
    ? codes
        .map(code => (isCountry(code) ? countryChipHtml(code, side) : pickedChipHtml(code, side)))
        .join('')
    : '<span class="none">还没选，在下面搜一下吧～</span>';
  $('.quick-b', picker).innerHTML = DATA.groups
    .map(group => quickGroupHtml(group, side, selected))
    .join('');
}

function setSelection(side, codes) {
  prefs.sel[side] = Array.from(new Set(codes));
  savePrefs();
  renderPicked(side);
  renderEstimate();
  if (prefs.view === 'matrix' && state.fullOpen) renderMatrix();
}

function suggestionHtml(item, index, side, selected) {
  const active = index === state.suggestionAt[side] ? ' on' : '';
  if (item.kind === 'all') {
    return `<div class="sug all${active}" data-i="${index}" data-side="${side}">＋ 全部添加（${item.codes.length} 个）</div>`;
  }
  if (item.kind === 'country') {
    const gates = gatewaysOf(item.name);
    const added = selected.has('@' + item.name) ? ' added' : '';
    return `<div class="sug country${active}${added}" data-i="${index}" data-side="${side}"><b>🌐 整个国家：${esc(countryLabel(item.name))}（主要机场 ${gates.length} 个）</b><span class="sub">${gates.join(' ')}</span></div>`;
  }
  if (item.kind === 'raw') {
    return `<div class="sug${active}" data-i="${index}" data-side="${side}"><b>${item.code}</b><span class="sub">字典里没有，按三字码添加</span></div>`;
  }
  const entry = item.entry;
  const detail = [entry.a && entry.a !== entry.n ? entry.a : '', entry.co]
    .filter(Boolean)
    .join(' · ');
  const added = selected.has(item.code) ? ' added' : '';
  return `<div class="sug${active}${added}" data-i="${index}" data-side="${side}"><b>${esc(entry.n || item.code)}</b><span class="code">${item.code}</span><span class="sub">${esc(detail)}</span></div>`;
}

function renderSuggestions(side) {
  const picker = pickerOf(side);
  const list = $('.suggest', picker);
  const query = $('input', picker).value.trim();
  if (!query) {
    list.hidden = true;
    state.suggestions[side] = [];
    return;
  }
  const matches = searchAirports(query);
  const items = searchCountries(query)
    .map(name => ({ kind: 'country', name }))
    .concat(
      matches.slice(0, 8).map(match => ({ kind: 'one', code: match.code, entry: match.entry })),
    );
  if (matches.length > 1)
    items.push({ kind: 'all', codes: matches.slice(0, 30).map(match => match.code) });
  if (!matches.length && /^[a-z]{3}$/i.test(query))
    items.push({ kind: 'raw', code: query.toUpperCase() });
  state.suggestions[side] = items;
  state.suggestionAt[side] = Math.min(state.suggestionAt[side], Math.max(0, items.length - 1));
  const selected = new Set(prefs.sel[side]);
  list.innerHTML = items.length
    ? items.map((item, i) => suggestionHtml(item, i, side, selected)).join('')
    : `<div class="sug">没找到「${esc(query)}」${KAOMOJI[1]}</div>`;
  list.hidden = false;
}

function closeSuggestions(side, clearInput) {
  const picker = pickerOf(side);
  if (!picker) return;
  if (clearInput) $('input', picker).value = '';
  $('.suggest', picker).hidden = true;
  state.suggestions[side] = [];
  state.suggestionAt[side] = 0;
}

function pickSuggestion(side, index) {
  const item = state.suggestions[side][index];
  if (!item) return;
  if (item.kind === 'all') {
    setSelection(side, prefs.sel[side].concat(item.codes));
    toast(`添加了 ${item.codes.length} 个机场`);
  } else if (item.kind === 'country') {
    setSelection(side, prefs.sel[side].concat('@' + item.name));
    toast(`已添加整个国家：${countryLabel(item.name)}`, 1800);
  } else {
    setSelection(side, prefs.sel[side].concat(item.code));
    toast(`已添加 ${cityName(item.code)} ${item.code}`, 1500);
  }
  closeSuggestions(side, true);
}

function renderOptions() {
  const sel = prefs.sel;
  $$('[data-opt] button').forEach(button => {
    const option = button.parentElement.dataset.opt;
    const on =
      option === 'cabins'
        ? sel.cabins.includes(button.dataset.v)
        : option === 'programs'
          ? (sel.programs || ['AA']).includes(button.dataset.v)
        : option === 'mascotSize'
          ? (prefs.mascotSize || 'm') === button.dataset.v
          : sel[option] === button.dataset.v;
    button.classList.toggle('on', on);
  });
  $('.pax').textContent = sel.pax;
  $('.months').value = sel.months;
}

function renderEstimate() {
  const el = $('.estimate');
  if (!el) return;
  const { requests, seconds, megabytes } = estimate(prefs.sel);
  const countries = prefs.sel.A.concat(prefs.sel.B).filter(isCountry);
  const expanded = countries.length
    ? `<span class="est-sub">${countries.map(token => `${esc(placeName(token))} 展开成 ${gatewaysOf(token.slice(1)).length} 个机场`).join('、')}</span>`
    : '';
  const many = requests > 1500;
  const advice = many
    ? `<span class="est-tip">有点多哦～ 可以少扫几个月（现在 ${prefs.sel.months} 个月），或者少选几个国家/机场，会快很多</span>`
    : '';
  const limit = rangeText() ? ` · ${rangeText()}` : '';

  const traffic = megabytes ? ` · Alaska 约 ${megabytes} MB` : '';
  el.className = 'estimate' + (many ? ' many' : '');
  el.innerHTML = `<div class="est-main">约 <b class="num">${fmtInt(requests)}</b> 次查询 · 预计 ${duration(seconds)}${limit}${traffic}</div>${expanded}${advice}`;
}

function afterLimitChange() {
  if (state.miniOpen) renderMini();
  if (state.fullOpen) {
    renderOptions();
    renderEstimate();
    renderView(true);
  }
  const text = rangeText();
  toast(text ? text.replace('只保留', '现在只看') : '里程不限了', 2400);
}

function startScan(params, options = {}) {
  closeScanDialog();
  const planned = options.jobs ? options.jobs.length : estimate(params).requests;
  const used = requestsToday();
  if (!options.force && dailyCap() > 0 && used + planned > dailyCap())
    return showBudgetDialog(params, used, planned);
  state.resultCard = false;
  savePrefs();
  refreshData();
  toast('出发啦！扫描时这个标签页别关哦', 3500);
  Scan.start(params, options.jobs).catch(error => toast(error.message, 3500, 'worry'));
}

const dailyCap = () => (+prefs.dailyCap === -1 ? 0 : +prefs.dailyCap || DAILY_SOFT_CAP);

function showBudgetDialog(params, used, planned) {
  state.budgetParams = params;
  showDialog(
    `<div class="dlg-face">${mascotHead(76, 'worry')}</div>
    <h2 id="ar-dlg-h">今天已经查了 ${fmtInt(used)} 次，这次还要 ${fmtInt(planned)} 次</h2>
    <p id="ar-dlg-d" class="dlg-note">你设的建议上限是每天 ${fmtInt(dailyCap())} 次，查得越多越容易遇到人机验证</p>
    <div class="dlg-btns"><button class="btn primary" data-act="budgetGo">继续</button><button class="btn" data-act="budgetSmaller">改小范围</button></div>`,
    'budget',
  );
}

const recommendedOrder = (a, b) =>
  RANK[a.status] - RANK[b.status] ||
  (b.new > 0) - (a.new > 0) ||
  b.days - a.days ||
  a.cash - b.cash;

const SORTS = {
  rec: recommendedOrder,
  miles: (a, b) => a.miles - b.miles || a.cash - b.cash,
  cash: (a, b) => a.cash - b.cash || a.miles - b.miles,
  days: (a, b) => b.days - a.days || a.cash - b.cash,
  soon: (a, b) => a.first.localeCompare(b.first) || a.cash - b.cash,

  newest: (a, b) =>
    (b.new > 0) - (a.new > 0) ||
    (b.seenAt || '').localeCompare(a.seenAt || '') ||
    b.new - a.new ||
    recommendedOrder(a, b),
};
const SORT_OPTIONS = [
  ['rec', '推荐'],
  ['miles', '里程最少'],
  ['cash', '税费最低'],
  ['days', '有位最多'],
  ['soon', '最早出发'],
  ['newest', '最新'],
];

function sideGroups(tokens) {
  const groups = tokens.filter(isCountry).map(token => ({
    key: token,
    label: placeName(token),
    first: gatewaysOf(token.slice(1))[0],
    has: code => countryOf(code) === token.slice(1),
  }));
  const plain = tokens.filter(token => !isCountry(token));
  if (plain.length) {
    const set = new Set(plain);
    groups.push({
      key: 'airports',
      label: placesText(plain),
      first: plain[0],
      has: code => set.has(code),
    });
  }
  return groups;
}

function comparePairs() {
  const sel = prefs.sel;
  if (prefs.view === 'fav' || (!sel.A.some(isCountry) && !sel.B.some(isCountry))) return [];
  const pairs = [];
  for (const a of sideGroups(sel.A)) for (const b of sideGroups(sel.B)) pairs.push({ a, b });
  return pairs.slice(0, 8);
}

const inPair = (card, pair) =>
  (pair.a.has(card.o) && pair.b.has(card.d)) || (pair.b.has(card.o) && pair.a.has(card.d));

function directionStats(cards) {
  const usable = cards.filter(card => card.status !== 'excluded' && !FAILED_DATES.has(card.status));
  const dates = new Set();
  usable.forEach(card => card.dates.forEach(date => dates.add(date)));
  return {
    days: dates.size,
    cheapest: usable.slice().sort(SORTS.miles)[0],
    nearest: usable.map(card => card.facts.nearest).sort()[0],
    fresh: usable.reduce((sum, card) => sum + card.new, 0),
  };
}

function compareHalfHtml(label, stats) {
  if (!stats.days)
    return `<div class="cmp-half"><small>${label}</small><b class="cmp-days none">还没有位</b><span>扫一下看看</span></div>`;
  return `<div class="cmp-half"><small>${label}</small><b class="cmp-days">${fmtInt(stats.days)} 天</b>
    <span class="cmp-price">最低 ${CABINS[stats.cheapest.cabin].short} ${shortMiles(stats.cheapest.miles)} + ${money(stats.cheapest.cash)}</span>
    <span>最近 ${stats.nearest.slice(5)} 出发</span>${stats.fresh ? `<span class="cmp-new">NEW ${fmtInt(stats.fresh)} 天</span>` : ''}</div>`;
}

function compareCardHtml(pair, index) {
  const cabin = state.cabinFilter || 'all';
  const cards = state.cards.filter(
    card => inPair(card, pair) && (cabin === 'all' || card.cabin === cabin),
  );
  const out = directionStats(cards.filter(card => pair.a.has(card.o)));
  const back = directionStats(cards.filter(card => pair.b.has(card.o)));
  const byRoute = new Map();
  for (const card of cards) {
    if (card.status === 'excluded') continue;
    const key = card.o + '|' + card.d;
    const entry = byRoute.get(key) || { o: card.o, d: card.d, days: 0 };
    entry.days += card.days;
    byRoute.set(key, entry);
  }
  const chips = Array.from(byRoute.values())
    .sort((x, y) => y.days - x.days)
    .slice(0, 3)
    .map(
      route =>
        `<button class="rchip" data-route="${route.o}|${route.d}">${esc(cityName(route.o))}→${esc(cityName(route.d))} · ${route.days} 天</button>`,
    )
    .join('');
  const code = pair.b.first;
  const total = out.days + back.days;
  const art = coverArt(code, airport(code).r || 'NA', hashStr(pair.a.key + pair.b.key), {
    planes: total > 60 ? 3 : total > 10 ? 2 : 1,
  });
  return `<article class="cmp${state.pair === index ? ' on' : ''}" data-pair="${index}">
    <div class="cmp-head"><div class="cmp-art">${art.replace('xMidYMax slice', 'xMidYMid slice')}</div><h3>${esc(pair.a.label)} ⇄ ${esc(pair.b.label)}</h3></div>
    <div class="cmp-dirs">${compareHalfHtml('去程 →', out)}${compareHalfHtml('回程 ←', back)}</div>
    ${chips ? `<div class="cmp-routes">${chips}</div>` : ''}</article>`;
}

function compareHtml(pairs) {
  if (!pairs.length) return '';
  return `<div class="compare">${pairs.map(compareCardHtml).join('')}</div>`;
}

function filterCards() {
  let cards = state.cards.slice();
  if (prefs.view === 'fav') cards = cards.filter(card => state.favorites.has(favoriteKey(card)));
  const pairs = comparePairs();
  if (pairs.length) {
    state.pair = Math.min(state.pair || 0, pairs.length - 1);
    cards = cards.filter(card => inPair(card, pairs[state.pair]));
  }
  if (state.cabinFilter && state.cabinFilter !== 'all')
    cards = cards.filter(card => card.cabin === state.cabinFilter);
  if (state.programFilter && state.programFilter !== 'all')
    cards = cards.filter(card => (card.program || 'AA') === state.programFilter);
  if (state.routeFilter) {
    cards = cards.filter(card => card.o === state.routeFilter.o && card.d === state.routeFilter.d);
  }
  const base = cards;

  if (!state.showExcluded && prefs.view !== 'fav')
    cards = cards.filter(card => card.status !== 'excluded' && !FAILED_DATES.has(card.status));
  if (state.channel === 'good')
    cards = cards.filter(card => card.status === 'trusted' || card.verified);
  else if (state.channel === 'new') cards = cards.filter(card => card.new);
  else if (state.channel !== 'all')
    cards = cards.filter(card => regionOf(card.o, card.d).key === state.channel);
  cards = cards.filter(card => milesInRange(card.miles));
  const beforeMiles = cards;
  if (prefs.miles) cards = cards.filter(card => milesMatch(card, prefs.miles));
  cards.sort(SORTS[prefs.sort] || recommendedOrder);
  return { cards, base, beforeMiles, pairs };
}

function postTitle(card) {
  const from = cityName(card.o);
  const to = cityName(card.d);
  const cabin = CABINS[card.cabin].word;
  const price = `${Math.round(card.miles / 1000)}k+$${Math.round(card.cash)}`;
  if (card.dynamic) {
    return `${from}→${to}${cabin} ${card.band}，最低 ${price}｜${card.days} 天，价格浮动，想订哪天核实哪天`;
  }
  if (card.status !== 'excluded' && FAILED_DATES.has(card.status)) {
    return `${from}→${to} ${STATUS[card.status].label}：${(card.ref && card.ref.note) || '核实没通过'}，这一档先别冲 ${KAOMOJI[1]}`;
  }
  if (card.status === 'excluded') {
    return `${from}→${to} 这一档核实没通过（${(card.ref && card.ref.note) || '机场或舱位不对'}），先别冲 ${KAOMOJI[1]}`;
  }
  if (card.status === 'trusted') {
    const carriers =
      card.ref && card.ref.carriers ? '，' + card.ref.carriers.split('/').join('+') : '';
    return `已核实同款✓ ${from}飞${to}${cabin} ${price}，这一档有 ${card.days} 天${carriers}`;
  }
  if (card.new)
    return `新放出！${from}→${to}${cabin} ${price}，多了 ${card.new} 天｜日历显示，待核实`;
  if (card.days <= 3)
    return `${from}→${to}${cabin} ${price}｜只有 ${card.days} 天，日历显示，待核实`;
  const peak = card.peak ? `，${card.peak}月最多` : '';
  return `${from}飞${to}${cabin} ${price}｜日历显示 ${card.days} 天有位${peak}，待核实`;
}

const seasonOf = month =>
  month === 12 || month <= 2 ? 'winter' : month <= 5 ? 'spring' : month <= 8 ? 'summer' : 'autumn';

function cardCoverArt(card) {
  const look = card.facts
    ? {
        season: seasonOf(card.facts.peakMonth),
        planes: card.days <= 7 ? 1 : card.days <= 30 ? 2 : 3,
      }
    : {};
  return coverArt(
    card.d,
    airport(card.d).r || regionOf(card.o, card.d).key,
    hashStr(cardId(card)),
    look,
  );
}

function keyFact(card) {
  const facts = card.facts;
  if (FAILED_DATES.has(card.status)) return STATUS[card.status].label;
  if (card.dynamic) return `最低 ${shortMiles(card.miles)} · ${card.days}天`;
  if (card.days <= 3) return `只有 ${card.days} 天有位`;
  if (facts.months === 1) return `${facts.peakMonth}月 · ${facts.peakCount}天有位`;
  return `${facts.peakMonth}月最多 · ${facts.peakCount}天`;
}

const UNUSABLE = new Set(['gone', 'airport', 'excluded', 'mixed', 'seats']);

function tierFacts(days) {
  if (!days.length) return null;
  const perMonth = {};
  for (const day of days)
    perMonth[day.date.slice(0, 7)] = (perMonth[day.date.slice(0, 7)] || 0) + 1;
  const [peak, peakCount] = Object.entries(perMonth).sort((a, b) => b[1] - a[1])[0];
  const nearest = days.find(day => !UNUSABLE.has(day.status)) || days[0];
  return {
    peakMonth: +peak.slice(5),
    peakCount,
    months: Object.keys(perMonth).length,
    nearest: nearest.date,
  };
}

function coverHtml(card, ratio, large) {
  const facts = card.facts;
  const lines = facts
    ? `<span class="cv-k">${esc(keyFact(card))}</span><span class="cv-s">${card.dynamic ? esc(card.band) + ' · ' : ''}最近 ${facts.nearest.slice(5)} 出发</span>`
    : '';
  return `<div class="${large ? 'cover dcover' : 'cover'}" ${ratio ? `style="aspect-ratio:${ratio}"` : ''}>${cardCoverArt(card)}
    <div class="scrim"></div>
    <div class="cv-top">${badge(card.status)}<span class="price"><i class="cab">${CABINS[card.cabin].short}</i>${Math.round(card.miles / 1000)}k${card.dynamic ? ' 起' : ''} + ${money(card.cash)}</span></div>
    ${card.dynamic ? '<span class="dyn">价格浮动</span>' : ''}
    ${alaskaEnabled() ? `<span class="prog p-${card.program || 'AA'}">${PROGRAM_LABELS[card.program || 'AA']}</span>` : ''}
    ${card.crossChecked ? '<span class="xcheck" title="两个计划都查到同一班航班">双重确认</span>' : ''}
    ${card.new ? `<div class="ribbon">NEW · 新放出 ${card.new} 天</div>` : ''}
    <div class="cv-t"><small>从 ${esc(cityName(card.o))} 出发</small><b>${esc(cityName(card.d))}</b>${lines}</div></div>`;
}

function favoriteButton(id, on, withLabel) {
  const label = withLabel ? (on ? ' 已收藏' : ' 收藏') : '';
  return `<button class="fav ${on ? 'on' : ''}${withLabel ? ' btn' : ''}" data-fav="${esc(id)}" aria-pressed="${on}"><span class="h">${on ? '♥' : '♡'}</span>${label}</button>`;
}

function cardHtml(card) {
  const id = cardId(card);
  return `<article class="card" data-card="${esc(id)}" tabindex="0">
    ${coverHtml(card, COVER_RATIOS[hashStr(id) % COVER_RATIOS.length])}
    <div class="ctitle">${esc(postTitle(card))}</div>
    <div class="cfoot">${mascotHead(18, '')}<span class="who">${esc(persona().name)} · ${ago(card.scanned)}</span><button class="vbtn" data-vcard="${esc(id)}">核实</button>${favoriteButton(id, state.favorites.has(favoriteKey(card)))}</div></article>`;
}

function feedGreeting(cards) {
  if (Scan.running()) return '我在扫描中，新票会自己冒出来～';
  if (prefs.view === 'fav') return cards.length ? '你收藏的票都在这里～' : '';
  const trusted = cards.filter(card => card.status === 'trusted').length;
  const fresh = cards.filter(card => card.new).length;
  if (trusted) return `有 ${trusted} 档已核实的同款票，先看它们！`;
  if (fresh) return `新放出 ${fresh} 档，手快有手慢无～`;
  if (!cards.length) return '';
  return '看中哪张就点「核实」，打开 aa.com 搜索页确认一下哦～';
}

function channelList(base) {
  const regions = new Map();
  for (const card of base) {
    const region = regionOf(card.o, card.d);
    const entry = regions.get(region.key) || { label: region.label, count: 0 };
    entry.count++;
    regions.set(region.key, entry);
  }
  return [
    ['all', prefs.view === 'fav' ? '全部收藏' : '推荐', base.length],
    ['good', '可信', base.filter(card => card.status === 'trusted' || card.verified).length],
    ['new', '新出现', base.filter(card => card.new).length],
  ].concat(
    Array.from(regions)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([key, r]) => [key, r.label, r.count]),
  );
}

function feedBarHtml(channels) {
  const sortOptions = SORT_OPTIONS.map(
    ([key, label]) =>
      `<option value="${key}" ${prefs.sort === key ? 'selected' : ''}>${label}</option>`,
  ).join('');
  const routeChip = state.routeFilter
    ? `<span class="filterchip">${esc(cityName(state.routeFilter.o))} → ${esc(cityName(state.routeFilter.d))}<button data-act="clearRoute">×</button></span>`
    : '';
  const excludedToggle =
    prefs.view === 'fav'
      ? ''
      : `<label class="small"><input type="checkbox" class="showbad" ${state.showExcluded ? 'checked' : ''}> 显示已排除</label>`;
  const tabs = channels
    .map(
      ([key, label, count]) =>
        `<button data-ch="${key}" class="${state.channel === key ? 'on' : ''}">${esc(label)}<span class="n">${count}</span></button>`,
    )
    .join('');
  const shownCabin = state.cabinFilter || 'all';
  const cabinTabs = [
    ['all', '全部舱位'],
    ['Y', '经济'],
    ['J', '商务·头等'],
  ]
    .map(
      ([cabin, label]) =>
        `<button class="cchip${shownCabin === cabin ? ' on' : ''}" data-show-cab="${cabin}">${label}<span class="n">${cabin === 'all' ? state.cards.length : state.cards.filter(card => card.cabin === cabin).length}</span></button>`,
    )
    .join('');
  return `<div class="cabrow"><span>舱位</span>${cabinTabs}</div><div class="feedbar"><div class="channels">${tabs}</div>
    <div class="tools">${routeChip}<select class="sort">${sortOptions}</select>${excludedToggle}
      <button class="btn small" data-act="csv">导出 CSV</button></div></div>`;
}

function milesMatch(card, value) {
  return typeof value === 'string' ? 'b' + bandIndex(card.miles) === value : card.miles === value;
}

function milesChoices(cards) {
  const counts = new Map();
  for (const card of cards) counts.set(card.miles, (counts.get(card.miles) || 0) + 1);

  if (counts.size <= 5) return Array.from(counts).sort((a, b) => a[0] - b[0]);
  const common = Array.from(counts)
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .sort((a, b) => a[0] - b[0]);
  const bands = BANDS.map((band, index) => [
    'b' + index,
    cards.filter(card => bandIndex(card.miles) === index).length,
  ]).filter(([, count]) => count);
  return common.concat(bands).slice(0, 6);
}

const milesLabel = value =>
  typeof value === 'string' ? BANDS[+value.slice(1)][1] : shortMiles(value);

function milesChipsHtml(cards) {
  const choices = milesChoices(cards);
  if (prefs.miles && !choices.some(([value]) => value === prefs.miles))
    choices.push([prefs.miles, 0]);
  if (choices.length < 2 && !prefs.miles) return '';
  const chips = choices
    .map(
      ([value, count]) =>
        `<button class="mchip${prefs.miles === value ? ' on' : ''}" data-miles="${value}">${milesLabel(value)}<span class="n">${count}</span></button>`,
    )
    .join('');
  return `<div class="milesrow"><span class="ml">里程</span><button class="mchip${prefs.miles ? '' : ' on'}" data-miles="0">全部<span class="n">${cards.length}</span></button>${chips}</div>`;
}

function programChipsHtml(cards) {
  if (!alaskaEnabled()) return '';
  const counts = {};
  for (const card of cards) {
    const name = card.program || 'AA';
    counts[name] = (counts[name] || 0) + 1;
  }
  const names = Object.keys(counts);
  if (names.length < 2) return '';
  const current = state.programFilter || 'all';
  const chips = names
    .map(
      name =>
        `<button class="mchip${current === name ? ' on' : ''}" data-program="${name}">${PROGRAM_LABELS[name] || name}<span class="n">${counts[name]}</span></button>`,
    )
    .join('');
  return `<div class="milesrow"><span class="ml">计划</span><button class="mchip${current === 'all' ? ' on' : ''}" data-program="all">全部<span class="n">${cards.length}</span></button>${chips}</div>`;
}

function hiddenByFilterHtml(hidden) {
  return `<div class="empty filtered" style="flex:1">${mascotBody(96, 'surprised')}<b>有 ${hidden} 档票被筛选藏起来了</b>现在的频道或里程筛选下没有票
    <button class="btn primary" data-act="clearFilters" style="margin-top:10px">清除筛选</button></div>`;
}

function emptyFeedHtml() {
  const noData = !state.cards.length;
  const last = lastScan();

  if (
    noData &&
    prefs.view !== 'fav' &&
    last &&
    last.params &&
    scanKind(last) !== 'found' &&
    +last.params.pax === viewPax()
  ) {
    return `<div class="empty-result">${resultCardHtml(last, 'feed')}</div>`;
  }
  const title =
    prefs.view === 'fav'
      ? '还没有收藏哦'
      : noData
        ? `${persona().name}还没找到票～`
        : '这里暂时空空的';
  const hint =
    prefs.view === 'fav'
      ? '看到中意的卡片，点 ♡ 就会收进来'
      : noData
        ? '先在「扫描设置」里选好航线，点「开始扫描」吧'
        : '换个频道看看？';
  return `<div class="empty" style="flex:1">${mascotBody(110, noData ? '' : 'worry')}<b>${title}</b>${hint}<span>${KAOMOJI[noData ? 0 : 1]}</span></div>`;
}

function renderFeed(reset) {
  if (!state.fullOpen || prefs.view === 'matrix') return;
  const view = $('.view');
  const { cards, base, beforeMiles, pairs } = filterCards();
  state.filtered = cards;
  const channels = channelList(base);
  if (!channels.some(channel => channel[0] === state.channel)) state.channel = 'all';
  if (reset || !$('.feed', view)) {
    const greeting = feedGreeting(cards);
    view.innerHTML =
      compareHtml(pairs) +
      feedBarHtml(channels) +
      programChipsHtml(base) +
      milesChipsHtml(beforeMiles) +
      (greeting
        ? `<div class="saybar">${mascotHead(28, 'happy')}<span class="txt">${esc(greeting)}</span></div>`
        : '') +
      '<div class="feed"></div><div class="more"></div>';
  }
  const grid = $('.feed', view);
  if (!cards.length && Scan.running() && prefs.view !== 'fav') {
    grid.innerHTML = skeletonColumns(isPhone() ? 2 : 4);
    $('.more', view).textContent = `${persona().name}扫描中，新票马上冒出来～`;
    return;
  }
  if (!cards.length) {
    const hidden =
      prefs.view === 'fav'
        ? state.cards.filter(card => state.favorites.has(favoriteKey(card))).length
        : pairs.length
          ? base.length
          : state.cards.length;
    const filtered = state.channel !== 'all' || state.routeFilter || prefs.miles || hidden;
    grid.innerHTML = hidden && filtered ? hiddenByFilterHtml(hidden) : emptyFeedHtml();
    $('.more', view).textContent = '';
    return;
  }
  const columnWidth = isPhone() ? 160 : 236;
  const gap = isPhone() ? 8 : 16;
  const columns = Math.max(2, Math.floor((grid.clientWidth + gap) / (columnWidth + gap)));
  if (reset || columns !== state.columns || !$('.col', grid)) {
    const keep = reset ? 0 : state.shown;
    state.columns = columns;
    state.shown = 0;
    grid.innerHTML = '<div class="col"></div>'.repeat(columns);
    state.stagger = reset ? 0 : -1;
    appendCards(Math.max(keep, 24));
    if (reset && !reducedMotion() && grid.animate) {
      grid.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: 'ease-out' });
    }
  }
}

function skeletonColumns(count) {
  const skeleton = ratio =>
    `<div class="skel-card"><div class="skel" style="aspect-ratio:${ratio}"></div><div class="skel line"></div><div class="skel line short"></div></div>`;
  return Array.from(
    { length: count },
    (_, i) =>
      `<div class="col">${skeleton(COVER_RATIOS[i % 5])}${skeleton(COVER_RATIOS[(i + 2) % 5])}</div>`,
  ).join('');
}

function observeCards(elements) {
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('in-view'));
    return;
  }
  if (!state.observer) {
    state.observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => entry.target.classList.toggle('in-view', entry.isIntersecting)),
      { root: $('.view'), rootMargin: '120px' },
    );
  }
  elements.forEach(el => state.observer.observe(el));
}

function stopObservingCards() {
  if (!state.observer) return;
  state.observer.disconnect();
  state.observer = null;
}

function appendCards(count) {
  const columns = $$('.feed .col');
  if (!columns.length) return;
  const batch = state.filtered.slice(state.shown, state.shown + count);
  const added = [];
  for (const card of batch) {
    const column = columns.reduce((a, b) => (a.offsetHeight <= b.offsetHeight ? a : b));
    column.insertAdjacentHTML('beforeend', cardHtml(card));
    const el = column.lastElementChild;
    added.push(el);
    if (state.stagger >= 0 && state.stagger < 16)
      el.style.animationDelay = state.stagger++ * 38 + 'ms';
  }
  observeCards(added);
  state.shown += batch.length;
  const remaining = state.filtered.length - state.shown;
  $('.more').textContent =
    remaining > 0 ? '往下滑还有更多～' : state.filtered.length > 8 ? `到底啦 ${KAOMOJI[2]}` : '';
}

function tuckDock() {
  if (!isPhone() || !state.fullOpen) return;
  $('.ar').classList.add('tucked');
  clearTimeout(state.tuckTimer);
  state.tuckTimer = setTimeout(() => $('.ar').classList.remove('tucked'), 900);
}

function onFeedScroll() {
  tuckDock();
  const view = $('.view');
  const nearBottom = view.scrollTop + view.clientHeight > view.scrollHeight - 800;
  if (prefs.view !== 'matrix' && state.shown < state.filtered.length && nearBottom) appendCards(18);
}

function toggleFavorite(id, button) {
  const card = state.cards.find(x => cardId(x) === id);
  if (!card) return;
  const key = favoriteKey(card);
  if (state.favorites.has(key)) {
    state.favorites.delete(key);
    talk('unfav', null, { toast: true });
  } else {
    state.favorites.add(key);
    talk('fav', null, { toast: true });
    if (button) heartBurst(button);
  }
  Store.set('fav', Array.from(state.favorites));
  const on = state.favorites.has(key);
  $$(`[data-fav="${CSS.escape(id)}"]`).forEach(el => {
    el.classList.toggle('on', on);
    el.querySelector('.h').textContent = on ? '♥' : '♡';
    if (el.classList.contains('btn')) el.lastChild.textContent = on ? ' 已收藏' : ' 收藏';
  });
  updateTabs();
  if (prefs.view === 'fav' && !on) renderFeed(true);
}

function exportCsv() {
  const rows = [
    [
      '舱位',
      '状态',
      '出发',
      '到达',
      '日期',
      '里程',
      '税费USD',
      '航班',
      '经停',
      '核实时间',
      '日历查询时间',
    ],
  ];
  for (const route of state.routes.values()) {
    for (const day of route.dates) {
      const check = day.check || {};
      rows.push([
        CABINS[route.cabin].label,
        STATUS[day.status].label,
        route.o,
        route.d,
        day.date,
        day.miles,
        day.cash,
        check.flights || '',
        check.path || '',
        check.checked_at || '',
        day.scanned,
      ]);
    }
  }
  const quote = value =>
    /[",\n]/.test(String(value)) ? `"${String(value).replace(/"/g, '""')}"` : value;

  const csv = '﻿' + rows.map(row => row.map(quote).join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  link.download = `里程票-${viewPax()}人.csv`;
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.remove();
  }, 1000);
}

function matrixCellHtml(route, o, d, maxDays) {
  if (!route) return '<td class="cell none"></td>';
  if (!route.days) return '<td class="cell zero">0</td>';
  const level = 1 + Math.min(6, Math.floor((route.days / maxDays) * 7));
  const cash = route.minCash != null ? '$' + Math.round(route.minCash) : '';
  const usable = route.usable ? `<i class="mk">✓${route.usable}</i>` : '';
  const twin = route.twin
    ? '<i style="position:absolute;top:1px;left:4px;font-size:10px;font-style:normal">⚠</i>'
    : '';
  return `<td class="cell q${level}" data-o="${o}" data-d="${d}" title="${esc(cityName(o))}→${esc(cityName(d))} ${route.days} 天"><b>${route.days}</b><span>${cash}</span>${usable}${twin}</td>`;
}

function renderStoryView() {
  if (!state.fullOpen) return;
  const unlocked = storyState().n;
  const items = storyList()
    .slice(0, unlocked)
    .map(
      (story, i) =>
        `<button class="st-item${storyRead(i) ? '' : ' unread'}" data-story="${i}"><b>${cnNumber(i + 1)}</b>${esc(story.title.replace(/^\d+\s*·\s*/, ''))}${storyRead(i) ? '' : '<i>！</i>'}</button>`,
    )
    .join('');
  const left = storyList().length - unlocked;
  $('.view').innerHTML = `<div class="st-page"><div class="st-head">${mascotHead(34, 'happy')}
      <div><b>小剧场</b><span>每天解锁一篇，点哪篇都能重看${left ? `．还有 ${left} 篇没解锁` : ''}</span></div></div>
    ${items || '<div class="empty">还没有解锁的小剧场</div>'}</div>`;
}

function renderView(reset) {
  if (prefs.view === 'story') return renderStoryView();
  if (prefs.view === 'matrix') return renderMatrix();
  return renderFeed(reset);
}

function renderMatrix() {
  if (!state.fullOpen) return;
  const view = $('.view');
  if (!state.routes.size) {
    view.innerHTML = `<div class="empty">${mascotBody(110)}<b>还没有数据</b>先选好航线开始扫描吧</div>`;
    return;
  }
  const origins = expandCodes(prefs.sel.A);
  const destinations = expandCodes(prefs.sel.B);
  const directions = prefs.sel.dir === 'both' ? ['out', 'back'] : [prefs.sel.dir];
  const cabin = combo().cabin;
  const routeOf = (a, b, direction) =>
    state.routes.get(direction === 'out' ? routeKey(cabin, a, b) : routeKey(cabin, b, a));
  const shown = [];
  for (const a of origins)
    for (const b of destinations)
      for (const direction of directions) {
        const route = routeOf(a, b, direction);
        if (route) shown.push(route);
      }
  const maxDays = Math.max(1, ...shown.map(route => route.days));
  const total = field => shown.reduce((sum, route) => sum + (route[field] || 0), 0);
  const tile = (value, label) =>
    `<div class="tile"><div class="v num">${fmtInt(value)}</div><div class="k">${label}</div></div>`;
  let html = `<div class="tiles">${tile(total('days'), '日历上有位的天数')}${tile(total('usable'), '已核实 / 同档可信')}${tile(total('leads'), '线索，待核实')}</div>`;
  if (shown.some(route => route.twin)) {
    html +=
      '<p class="note">标 ⚠ 的航线和同城另一个机场的日历一模一样，实际出发机场要核实一天才知道。</p>';
  }
  html += `<div class="mwrap"><table class="matrix"><thead><tr><th rowspan="${directions.length > 1 ? 2 : 1}">出发地</th>`;
  html +=
    destinations
      .map(b => `<th colspan="${directions.length}">${esc(cityName(b))}<small>${b}</small></th>`)
      .join('') + '</tr>';
  if (directions.length > 1) {
    html +=
      '<tr>' +
      destinations
        .map(() => '<th class="small muted">去 →</th><th class="small muted">← 回</th>')
        .join('') +
      '</tr>';
  }
  html += '</thead><tbody>';
  for (const a of origins) {
    html += `<tr><th>${esc(cityName(a))}<small>${a}</small></th>`;
    for (const b of destinations) {
      for (const direction of directions) {
        const [o, d] = direction === 'out' ? [a, b] : [b, a];
        html += matrixCellHtml(routeOf(a, b, direction), o, d, maxDays);
      }
    }
    html += '</tr>';
  }
  const ramp = [1, 2, 3, 4, 5, 6, 7].map(i => `<i style="background:var(--q${i})"></i>`).join('');
  html += `</tbody></table></div><div class="legend"><span>数字 = 有位天数，越深越多<span class="ramp">${ramp}</span></span><span>点格子看这条航线的卡片</span></div>`;
  view.innerHTML = html;
}

function openCardDrawer(id, source) {
  const card = state.cards.find(x => cardId(x) === id);
  if (!card) return;
  state.card = { o: card.o, d: card.d, id: card.id, cabin: card.cabin };
  state.day = null;
  const cover = source && source.querySelector ? source.querySelector('.cover, .thumb') : null;
  state.drawerSource = cover;
  const from = cover ? cover.getBoundingClientRect() : null;
  renderDrawer(!!from);
  if (!from || reducedMotion()) return;
  const drawer = $('.drawer');
  drawer.animate([{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' }, {}], {
    duration: 260,
    easing: 'ease-out',
  });
  $('.scrim-all').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260 });
  $('.drawer .dbody').animate(
    [
      { opacity: 0, transform: 'translateY(18px)' },
      { opacity: 1, transform: 'none' },
    ],
    {
      duration: 360,
      delay: 140,
      easing: 'cubic-bezier(.2,.8,.3,1)',
      fill: 'backwards',
    },
  );
  flip($('.drawer .dcover'), from, 520);
}

function closeDrawer() {
  if (!state.card) return;
  const drawer = $('.drawer');
  const cover = $('.drawer .dcover');
  const source = state.drawerSource;
  state.card = null;
  state.day = null;
  state.drawerSource = null;
  const finish = () => {
    if (state.card) return;
    drawer.hidden = true;
    $('.scrim-all').hidden = true;
    drawer.classList.remove('flip');

    cancelAnimations(drawer, true);
    cancelAnimations($('.scrim-all'), false);
  };
  if (reducedMotion() || !cover || !drawer.animate) return finish();
  const target = source && source.isConnected ? source.getBoundingClientRect() : null;
  $('.scrim-all').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240 });
  $('.drawer .dbody').animate([{ opacity: 1 }, { opacity: 0, transform: 'translateY(12px)' }], {
    duration: 160,
    fill: 'forwards',
  });
  if (target && target.width) {
    const rect = cover.getBoundingClientRect();
    cover.style.transformOrigin = '0 0';
    drawer.animate(
      [
        { backgroundColor: getComputedStyle(drawer).backgroundColor },
        { backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' },
      ],
      { duration: 280, fill: 'forwards' },
    );
    const end = `translate(${target.left - rect.left}px, ${target.top - rect.top}px) scale(${target.width / rect.width}, ${target.height / rect.height})`;
    cover
      .animate([{ transform: 'none' }, { transform: end }], {
        duration: 300,
        easing: 'cubic-bezier(.4,0,.2,1)',
        fill: 'forwards',
      })
      .finished.then(finish, finish);
  } else {
    drawer
      .animate(
        [
          { opacity: 1, transform: 'none' },
          { opacity: 0, transform: 'translateX(30px)' },
        ],
        { duration: 220, fill: 'forwards' },
      )
      .finished.then(finish, finish);
  }
}

function tierFactsHtml(reference) {
  if (!reference) return '';
  const when = `${esc(reference.date.slice(5))} 的核实，${ago(reference.checked_at)}`;
  if (!reference.flights) {
    return `<p class="note">${esc(reference.note || '')}（${esc(reference.date.slice(5))} 核实，${ago(reference.checked_at)}）</p>`;
  }
  return `<dl class="facts"><dt>航班</dt><dd>${esc(reference.flights)}</dd><dt>经停</dt><dd>${esc(reference.path || '')}</dd>
    ${reference.aircraft ? `<dt>机型</dt><dd>${esc(reference.aircraft)}</dd>` : ''}${reference.minutes ? `<dt>全程</dt><dd>${(reference.minutes / 60).toFixed(1)} 小时</dd>` : ''}
    <dt>依据</dt><dd>${when}</dd></dl>`;
}

function otherTiersHtml(tiers) {
  if (!tiers.length) return '';
  const rows = tiers
    .map(
      t =>
        `<button class="tierrow" data-tier="${esc(t.id)}">${badge(t.status)}<b>${t.dynamic ? esc(t.band) + ' · ' + fmtInt(t.miles) + ' 起' : fmtInt(t.miles) + ' + ' + money(t.cash)}</b><span class="sub">${t.days} 天 · ${t.first.slice(5)} ~ ${t.last.slice(5)}</span></button>`,
    )
    .join('');
  const unit = tiers[0].dynamic ? '个价位段' : '档';
  return `<h3>同航线其他${tiers[0].dynamic ? '价位段' : '档位'} <span class="sub">${tiers.length} ${unit}</span></h3>${rows}`;
}

function drawerBodyHtml(route, tier, card) {
  const verifyButton = tier.rep
    ? `<button class="btn primary" data-verify="${tier.rep}">${tier.status === 'lead' ? '核实这一档' : '再核实一天'}（${tier.rep.slice(5)}）</button>`
    : '';
  const newDays = route.dates.filter(day => day.tier === tier.id && day.new).length;
  const meta = `${route.o} → ${route.d} · ${viewPax()} 人 · ${CABINS[route.cabin].label} · ${tier.dynamic ? '这一价位段' : '这一档'} ${tier.days} 天（${tier.first.slice(5)} ~ ${tier.last.slice(5)}）· 日历${ago(route.scanned)}查询`;
  return `<div class="dbody">
    <div class="dprice"><b>${fmtInt(tier.miles)}${tier.dynamic ? ' 起' : ''}</b><span class="muted">里程/人${tier.dynamic ? ` · ${tier.band}，最高 ${fmtInt(tier.maxMiles)}` : ''}</span><span style="color:var(--ink-2)">+ ${money(tier.cash)}</span></div>
    <div class="dmeta">${meta}</div>
    <p>${FAILED_EXPLAIN[tier.status] ? FAILED_EXPLAIN[tier.status] + esc(tier.ref && tier.ref.note ? '（' + tier.ref.note + '）' : '') : tier.dynamic ? DYNAMIC_EXPLAIN : tier.days === 1 ? SINGLE_EXPLAIN[tier.status] || TIER_EXPLAIN[tier.status] : TIER_EXPLAIN[tier.status]}</p>
    ${route.twin ? `<p class="note">⚠ 这条航线的日历和 ${esc(cityName(route.twin))} ${route.twin} 每天都一样，实际机场以核实为准。</p>` : ''}
    ${tier.days === 1 || tier.dynamic ? '' : tierFactsHtml(tier.ref)}
    <div class="actions">${verifyButton}${favoriteButton(cardId(card), state.favorites.has(favoriteKey(card)), true)}</div>
    <h3>这一档的日期 <span class="sub">点日期看详情</span></h3>
    ${newDays ? `<p class="newlegend"><i></i>粉色框 = 新放出（上次扫描以后才出现），这一档有 ${newDays} 天</p>` : ''}
    <div class="months">${monthsHtml(route.dates, tier.id)}</div>
    <div class="daybox" hidden></div>
    ${otherTiersHtml(route.tiers.filter(t => t.id !== tier.id))}
    <div class="fine">${mascotHead(26, '')}<span>合作航司的票偶尔会在付款或出票时才被拒，这一点下单前没法检测。核实能确认的是：搜索页上真的有这一天、机场对、舱位对、座位够。</span></div>
  </div>`;
}

function renderDrawer(fromCard) {
  const selected = state.card;
  const route =
    selected && state.routes.get(routeKey(selected.cabin, selected.o, selected.d, selected.program));
  const tier = route && route.tiers.find(t => t.id === selected.id);
  const drawer = $('.drawer');
  if (!tier) {
    state.card = null;
    drawer.hidden = true;
    $('.scrim-all').hidden = true;
    return;
  }
  const card =
    state.cards.find(
      x => x.cabin === route.cabin && x.o === route.o && x.d === route.d && x.id === tier.id,
    ) || Object.assign({}, tier, { o: route.o, d: route.d, cabin: route.cabin });
  cancelAnimations(drawer, true);
  drawer.innerHTML = `<button class="x" data-act="closeDrawer">×</button>${coverHtml(card, null, true)}${drawerBodyHtml(route, tier, card)}`;
  drawer.classList.toggle('flip', !!fromCard);
  drawer.hidden = false;
  $('.scrim-all').hidden = false;

  if (!state.day && tier.days === 1) state.day = tier.first;
  if (state.day) showDay(state.day);
}

function monthHtml(year, month, byDate, tierKey) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (new Date(year, month, 1).getDay() + 6) % 7;
  let cells = '<span></span>'.repeat(leadingBlanks);
  let count = 0;
  for (let day = 1; day <= lastDay; day++) {
    const iso = `${year}-${pad(month + 1)}-${pad(day)}`;
    const entry = byDate.get(iso);
    if (!entry) {
      cells += `<span class="day">${day}</span>`;
    } else if (entry.tier !== tierKey) {
      cells += `<span class="day other">${day}</span>`;
    } else {
      count++;
      const classes = `day has st-${entry.status}${entry.new ? ' new' : ''}${state.day === iso ? ' sel' : ''}`;
      cells += `<button class="${classes}" data-day="${iso}">${day}</button>`;
    }
  }
  const title = (year === new Date().getFullYear() ? '' : year + '年') + (month + 1) + '月';
  const weekdays = '一二三四五六日'
    .split('')
    .map(w => `<span>${w}</span>`)
    .join('');
  return `<div class="month"><div class="month-t">${title}<span>${count} 天</span></div><div class="wk">${weekdays}</div><div class="days">${cells}</div></div>`;
}

function monthsHtml(dates, tierKey) {
  const mine = dates.filter(x => x.tier === tierKey);
  if (!mine.length) return '';
  const byDate = new Map(dates.map(x => [x.date, x]));
  const first = parseDate(mine[0].date);
  const last = parseDate(mine[mine.length - 1].date);
  let html = '';
  for (
    let year = first.getFullYear(), month = first.getMonth();
    year < last.getFullYear() || (year === last.getFullYear() && month <= last.getMonth());

  ) {
    html += monthHtml(year, month, byDate, tierKey);
    if (month === 11) {
      year++;
      month = 0;
    } else {
      month++;
    }
  }
  return html;
}

function showDay(date) {
  const route = state.routes.get(
    routeKey(state.card.cabin, state.card.o, state.card.d, state.card.program),
  );
  const day = route && route.dates.find(x => x.date === date);
  if (!day) return;
  state.day = date;
  $$('.drawer .day.sel').forEach(el => el.classList.remove('sel'));
  const button = $(`.drawer .day[data-day="${date}"]`);
  if (button) button.classList.add('sel');
  const check = day.check;
  let facts = `<dt>里程</dt><dd>${fmtInt(day.miles)} / 人</dd><dt>税费</dt><dd>${money(day.cash)} / 人</dd><dt>日历查询</dt><dd>${ago(day.scanned)}</dd>`;
  if (check && check.flights) {
    facts += `<dt>航班</dt><dd>${esc(check.flights)}</dd><dt>经停</dt><dd>${esc(check.path || '')}</dd>${check.seats ? `<dt>剩余座位</dt><dd>${check.seats}</dd>` : ''}<dt>核实</dt><dd>${ago(check.checked_at)}</dd>`;
  } else if (check) {
    facts += `<dt>上次核实</dt><dd>${esc(check.note || check.status)}，${ago(check.checked_at)}</dd>`;
  }
  const note = check && check.note && check.flights ? ' ' + esc(check.note) : '';

  const options =
    check && check.options && check.options.length
      ? `<div class="opts-list"><b>这一天能订的（${check.options.length} 个）</b>${check.options
          .map(
            option =>
              `<div class="opt-row"><span class="num">${fmtInt(option.miles)}</span> + ${money(option.cash)}<span class="sub">${esc(option.flights || '')} · ${esc(option.path || '')}${option.seats ? ' · 剩 ' + option.seats + ' 座' : ''}</span></div>`,
          )
          .join('')}</div>`
      : '';
  const verifyButton = `<button class="btn primary small" data-verify="${day.date}">核实这一天</button>`;
  const box = $('.daybox');
  box.innerHTML = `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b>${fmtDate(day.date)}</b>${badge(day.status)}</div>
    <p>${DATE_EXPLAIN[day.status]}${note}</p><dl class="facts">${facts}</dl>${options}
    <div class="actions">${verifyButton}<button class="btn small" data-open="${day.date}">在 aa.com 打开</button></div>`;
  box.hidden = false;
}

let openExternal = url => window.open(url, '_blank');

const VERIFY_TAB = 'miles-radar-verify';

let verify = (date, route = state.card) => {
  const item = {
    o: route.o,
    d: route.d,
    cabin: route.cabin || 'J',
    pax: viewPax(),
    date,
    atMs: Date.now(),
  };
  const key = x => `${x.o}|${x.d}|${x.cabin}|${x.pax}|${x.date}`;
  const queue = Store.get('verifyQueue', []).filter(x => key(x) !== key(item));
  queue.push(item);
  Store.set('verifyQueue', queue);
  const busy = Store.get('verifyActive', 0) > Date.now() - 25000;
  if (busy && queue.length > 1) {
    const check = Store.get('humanCheck', null);
    return toast(
      check && check.where === 'verify' && !check.expired
        ? `已排队。验证一次可以接着核实 ${queue.length} 个`
        : `已排队，前面的读完会自动打开（共 ${queue.length} 个）`,
      3500,
    );
  }
  Store.set('pending', item);
  const url = bookingUrl(item.o, item.d, date, item.cabin, item.pax);
  const opened = window.open(url, VERIFY_TAB);
  if (!opened) {
    if (typeof GM_openInTab === 'function') GM_openInTab(url, { active: true, insert: true });
    else if (typeof GM !== 'undefined' && GM && typeof GM.openInTab === 'function')
      GM.openInTab(url, false);
  }
  toast('在核实标签页打开了搜索页，出现人机验证就勾一下，我会自己读结果～', 4500);
};

const TYPE_MS = 28;

function openStory(index) {
  const story = storyList()[index];
  if (!story) return;
  closeMini(true);
  state.story = { index, line: 0, typing: null, done: false };
  $('.ar').classList.add('story-open');
  $('.story').hidden = false;
  if (!state.storyKeys) {
    state.storyKeys = event => {
      if (!state.story) return;
      if (event.key === 'Escape') closeStory();
      else if (event.key === ' ' || event.key === 'Enter') advanceStory();
      else return;
      event.preventDefault();
      event.stopPropagation();
    };
    window.addEventListener('keydown', state.storyKeys, true);
  }
  placeDock();
  if (state.renderer && state.renderer.stopMotion) state.renderer.stopMotion();
  renderStoryLine();
}

function openStoryEntry() {
  const today = todayStory();
  if (today >= 0 && !storyRead(today)) return openStory(today);
  if (state.fullOpen || storyState().n > 1) {
    prefs.view = 'story';
    savePrefs();
    if (!state.fullOpen) return openFull(false);
    updateTabs();
    return renderView(true);
  }
  openStory(todayStory() >= 0 ? todayStory() : 0);
}

function renderStoryLine() {
  const current = state.story;
  if (!current) return;
  const story = storyList()[current.index];
  const atEnd = current.line >= story.lines.length;

  if (!$('.st-box')) {
    $('.story').innerHTML = `<div class="st-scrim"></div>
    <div class="st-box"><span class="st-title"></span>
      <button class="x st-close" data-act="closeStory" aria-label="关闭">×</button>
      <p class="st-text"></p>
      <i class="st-next" hidden>▼</i>
      <div class="st-end" hidden><b>看完了</b><button class="btn primary" data-act="replayStory">再看一次</button><button class="btn" data-act="closeStory">关闭</button></div></div>`;
  }
  if ($('.st-title').textContent !== story.title) $('.st-title').textContent = story.title;
  $('.st-end').hidden = !atEnd;
  $('.st-next').hidden = true;

  $('.st-next').style.display = atEnd ? 'none' : '';
  saveStoryPos(current.index, current.line, atEnd);
  if (atEnd) {
    $('.st-text').textContent = '';
    placeDock();
    placeStoryBox();
    renderDock();
    return;
  }
  placeDock();
  placeStoryBox();

  requestAnimationFrame(() => {
    if (state.story) placeStoryBox();
  });
  const line = story.lines[current.line];

  if (state.renderer && state.renderer.stopMotion) state.renderer.stopMotion();
  setExpression(lineExpression(line));
  typeStoryLine(line);
}

const CUE_EXPRESSIONS = [
  [/[（(](哭|泪|呜|沮丧)/, 'down'],
  [/[（(](笑|開心|开心|星星眼)/, 'happy'],
  [/[（(](叹气|嘆氣|心虚|汗)/, 'worry'],
  [/[（(](害羞|脸红|臉紅)/, 'shy'],
  [/[（(](怒|生气|生氣)/, 'angry'],
];

function lineExpression(line) {
  const text = String(line || '');
  for (const [pattern, mood] of CUE_EXPRESSIONS) if (pattern.test(text)) return mood;

  if (/[~～]|嘿嘿|哈哈|欸嘿/.test(text)) return 'happy';
  if (/呃\.\.\.|不好意思|害羞/.test(text)) return 'shy';
  if (/好过分|可恶|凭什么|什么东西啊/.test(text)) return 'angry';
  if (/！！|欸\.\.\.！/.test(text)) return 'surprised';
  return 'normal';
}

function placeStoryBox() {
  const box = $('.st-box');
  const text = $('.st-text');
  if (!box || !text) return;
  const renderer = state.renderer || {};

  const figure = $('.dock canvas.l2d') || $('.dock img') || $('.dock');
  const live = figure ? figure.getBoundingClientRect() : null;

  const gliding = $('.dock').classList.contains('glide');
  const rect = !gliding && live && live.height > 40 ? live : state.dockRect || live;
  if (!rect) return;
  if (gliding) {
    clearTimeout(state.storyBoxTimer);
    state.storyBoxTimer = setTimeout(() => {
      if (state.story) placeStoryBox();
    }, 620);
  }
  const rectTop = rect.y == null ? rect.top : rect.y;
  let topFrac = renderer.figureTop || 0;
  let heightFrac = renderer.figureHeight || 1;

  if (!(heightFrac > 0.25) || topFrac + heightFrac > 1.05) {
    topFrac = 0;
    heightFrac = 1;
  }
  const figureTop = rectTop + rect.height * topFrac;
  const figureHeight = rect.height * heightFrac;
  box.style.top = '0px';
  const textRect = text.getBoundingClientRect();
  const offset = textRect.top + textRect.height / 2;

  const waist = figureTop + figureHeight * 0.5;
  const feet = figureTop + figureHeight * 0.8;
  const centre = Math.max(waist, Math.min(feet, figureTop + figureHeight * 0.62));
  const room = Math.max(6, window.innerHeight - box.offsetHeight - 6);
  box.style.top = Math.max(6, Math.min(room, Math.round(centre - offset))) + 'px';
}

function typeStoryLine(text) {
  const el = $('.st-text');
  const current = state.story;
  clearTimeout(current.typing);
  el.textContent = '';
  if (reducedMotion()) {
    el.textContent = text;
    current.typing = null;
    $('.st-next').hidden = false;
    return;
  }

  const chars = Array.from(text);
  const frag = document.createDocumentFragment();
  chars.forEach((ch, index) => {
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = index * TYPE_MS + 'ms';
    frag.appendChild(span);
  });
  el.appendChild(frag);
  current.typing = setTimeout(() => {
    current.typing = null;
    const arrow = $('.st-next');
    if (arrow) arrow.hidden = false;
  }, chars.length * TYPE_MS + 60);
}

function advanceStory() {
  const current = state.story;
  if (!current) return;
  const story = storyList()[current.index];
  if (current.typing) {
    clearTimeout(current.typing);
    current.typing = null;

    $('.st-text').textContent = story.lines[current.line];
    const arrow = $('.st-next');
    if (arrow) arrow.hidden = false;
    return;
  }
  if (current.line >= story.lines.length) return;
  current.line++;
  renderStoryLine();
}

function closeStory() {
  if (!state.story) return;
  clearTimeout(state.story.typing);
  state.story = null;
  setExpression('');
  if (state.storyKeys) {
    window.removeEventListener('keydown', state.storyKeys, true);
    state.storyKeys = null;
  }
  $('.ar').classList.remove('story-open');
  $('.story').hidden = true;
  $('.story').innerHTML = '';
  placeDock();
  renderDock();
}

function showCheckBar(text, where) {
  state.checkWhere = where;
  const bar = $('.checkbar');
  bar.innerHTML = `${mascotHead(26, 'worry')}<span>${esc(text)}</span><button class="btn small primary" data-act="goCheck">去验证</button>`;
  bar.hidden = false;
  renderDock();
  updateTabTitle();
}

function hideCheckBar() {
  state.checkWhere = '';
  $('.checkbar').hidden = true;
  renderDock();
  updateTabTitle();
}

function onCheckAppeared(where, text) {
  showCheckBar(text, where);
  talk('human_check', null, { sticky: true, sub: esc(text) });
}

function onCheckPassed(text) {
  hideCheckBar();
  $('.bubble').hidden = true;
  if (text) say(esc(text), { ms: 3500, mood: 'happy' });
}

function onRemoteCheck(check) {
  if (IS_RESULTS_PAGE) return;
  if (check && check.where === 'verify' && !check.expired) {
    const text =
      check.queued > 1
        ? `核实页需要人机验证 · 验证一次可以接着核实 ${check.queued} 个`
        : '核实页需要人机验证，完成后我会自己读结果';
    onCheckAppeared('verify', text);
  } else if (check && check.expired) {
    hideCheckBar();
    say(`验证没有完成，核实先停下了；排队的 ${check.queued || 0} 个还留着，点任意「核实」继续`, {
      sticky: true,
      mood: 'worry',
    });
  } else if (state.checkWhere === 'verify') {
    onCheckPassed('验证通过了，我在读核实结果～');
  }
}

function updateTabTitle() {
  const alert = '① 需要验证 - ';
  const want = !!state.checkWhere && document.hidden;
  const has = document.title.startsWith(alert);
  if (want && !has) document.title = alert + document.title;
  else if (!want && has) document.title = document.title.slice(alert.length);
}

function goCheck() {
  if (state.checkWhere === 'verify') {

    const tab = window.open('', VERIFY_TAB);
    if (!tab) return toast('浏览器拦住了切换，手动切到核实的那个标签页就行', 3500, 'worry');
    try {
      if (tab.location.href === 'about:blank') {
        const next = Store.get('pending', null) || Store.get('verifyQueue', [])[0];
        if (next) tab.location.href = bookingUrl(next.o, next.d, next.date, next.cabin, next.pax);
      }
    } catch (error) {

    }
    tab.focus();
    return;
  }
  const box = findChallenge();
  if (box) {
    box.scrollIntoView({ block: 'center', behavior: 'smooth' });
    return;
  }

  const resume = Store.get('scanResume', null);
  if (resume) Store.set('scanResume', Object.assign({}, resume, { autoResume: true }));
  location.reload();
}

function onOptionClick(button) {
  const option = button.parentElement.dataset.opt;
  const value = button.dataset.v;
  if (option === 'mascotSize') {
    prefs.mascotSize = value;
    savePrefs();
    renderOptions();
    return placeDock();
  }
  if (option === 'programs') {
    const programs = new Set(prefs.sel.programs || ['AA']);
    if (programs.has(value)) programs.delete(value);
    else programs.add(value);
    if (!programs.size) return toast('至少选一个计划哦', 2000, 'worry');
    prefs.sel.programs = ['AA', 'AS'].filter(name => programs.has(name));
  } else if (option === 'cabins') {
    const cabins = new Set(prefs.sel.cabins);
    if (cabins.has(value)) cabins.delete(value);
    else cabins.add(value);
    if (!cabins.size) return toast('至少选一个舱位哦', 2000, 'worry');
    prefs.sel.cabins = ['J', 'Y'].filter(c => cabins.has(c));
  } else {
    prefs.sel[option] = value;
  }
  savePrefs();
  renderOptions();
  renderEstimate();
  if (prefs.view === 'matrix') renderMatrix();
}

function toggleCodes(side, codes) {
  const current = prefs.sel[side];
  const allSelected = codes.every(code => current.includes(code));
  setSelection(
    side,
    allSelected ? current.filter(code => !codes.includes(code)) : current.concat(codes),
  );
}

const ACTIONS = {
  closeBubble() {
    clearTimeout(state.bubbleTimer);
    $('.bubble').hidden = true;
    setMood('', 0);
  },
  dialogClose() {
    const last = lastScan();
    closeScanDialog();
    if (last && $('.bubble').hidden) talkScanResult(last);
  },
  seeResults() {
    closeScanDialog();
    showResults();
  },
  dismissResult() {
    state.resultCard = false;
    updateLastScan({ seen: true });
    if (state.miniOpen) renderMini();
    renderStatus();
    renderDock();
  },
  scanMore() {
    const last = lastScan();
    rescan({ months: Math.min(12, +((last && last.params) || prefs.sel).months + 3) });
  },
  scanOnePax: () => rescan({ pax: 1 }),
  retry() {
    const last = lastScan();
    rescan(last && last.outcome === 'blocked' ? { speed: 'gentle' } : {});
  },
  changeSetup() {
    closeScanDialog();
    updateLastScan({ seen: true });
    if (!state.fullOpen) return openFull(true);
    state.setupOpen = true;
    $('.setup').classList.add('open');
    $('.ar').classList.add('setup-open');
  },
  clearFilters() {
    state.channel = 'all';
    state.routeFilter = null;
    prefs.miles = null;
    savePrefs();
    if (!filterCards().cards.length) state.showExcluded = true;
    renderFeed(true);
  },
  mute() {
    sessionStorage.setItem('ar-mute', '1');
    $('.bubble').hidden = true;
    renderDock();
  },
  closeMini() {
    state.resultCard = false;
    closeMini();
  },
  openFull: () => openFull(false),
  openSetup: () => openFull(true),
  closeFull: () => closeFull(),
  toggleSetup() {
    state.setupOpen = !state.setupOpen;
    $('.setup').classList.toggle('open', state.setupOpen);
    $('.ar').classList.toggle('setup-open', state.setupOpen);
  },
  quickScan: () => startScan(prefs.sel),
  scan() {
    if (isPhone()) {
      state.setupOpen = false;
      $('.setup').classList.remove('open');
      $('.ar').classList.remove('setup-open');
    }
    startScan(prefs.sel);
  },
  stop: () => Scan.cancel(),
  openStory: () => openStoryEntry(),
  closeStory: () => closeStory(),
  replayStory() {
    const index = state.story.index;
    closeStory();
    openStory(index);
  },
  dialogDismiss: () => closeDialog(),
  swapSides() {
    const sel = prefs.sel;
    [sel.A, sel.B] = [sel.B, sel.A];
    savePrefs();
    if (state.fullOpen) {
      renderPicked('A');
      renderPicked('B');
      renderEstimate();
      if (prefs.view === 'matrix') renderMatrix();
      else renderFeed(true);
    }
    if (state.miniOpen) renderMini();
    const arrow = { out: '→', back: '←', both: '⇄' }[sel.dir] || '⇄';
    toast(`换成 ${placesText(sel.A)} ${arrow} ${placesText(sel.B)} 了`, 2600);
  },
  budgetGo() {
    closeDialog();
    startScan(state.budgetParams, { force: true });
  },
  budgetSmaller() {
    closeDialog();
    if (!state.fullOpen) return openFull(true);
    state.setupOpen = true;
    $('.setup').classList.add('open');
    $('.ar').classList.add('setup-open');
  },
  goCheck: () => goCheck(),
  resumeScan() {
    const resume = Store.get('scanResume', null);
    closeScanDialog();
    if (!resume || !resume.jobs || !resume.jobs.length) return toast('没有要继续的扫描了', 2000);
    state.resultCard = false;
    Scan.start(resume.params, resume.jobs).catch(error => toast(error.message, 3500, 'worry'));
  },
  dropResume() {
    Store.remove('scanResume');
    if (state.miniOpen) renderMini();
    renderStatus();
  },
  closeDrawer: () => closeDrawer(),
  clearRoute() {
    state.routeFilter = null;
    renderFeed(true);
  },
  clear: button => setSelection(button.dataset.side, []),
  'pax-'() {
    prefs.sel.pax = Math.max(1, prefs.sel.pax - 1);
    savePrefs();
    renderOptions();
    renderEstimate();
  },
  'pax+'() {
    prefs.sel.pax = Math.min(9, prefs.sel.pax + 1);
    savePrefs();
    renderOptions();
    renderEstimate();
  },
  csv: () => exportCsv(),
};

function onRootClick(event) {
  wake();
  if (state.story) {
    const button = event.target.closest('button');
    if (!button || !button.dataset.act) advanceStory();
    if (button && ACTIONS[button.dataset.act]) ACTIONS[button.dataset.act](button);
    return;
  }
  if (event.target.closest('[data-story]')) {
    const index = +event.target.closest('[data-story]').dataset.story;
    closeDialog();
    return openStory(index);
  }
  const suggestion = event.target.closest('.sug[data-i]');
  if (suggestion) return pickSuggestion(suggestion.dataset.side, +suggestion.dataset.i);
  if (event.target.classList.contains('scrim-all')) return closeDrawer();
  const el = event.target.closest('button, [data-card], [data-pair], td[data-o]');
  if (!el) return;
  const data = el.dataset;
  if (data.fav) {
    event.stopPropagation();
    return toggleFavorite(data.fav, el);
  }
  if (data.vcard) {
    const card = state.cards.find(x => cardId(x) === data.vcard);
    if (card) verify(card.rep || card.facts.nearest, card);
    return;
  }
  if (data.pair) {
    state.pair = +data.pair;
    state.routeFilter = null;
    return renderFeed(true);
  }
  if (data.route) {
    const [o, d] = data.route.split('|');
    event.stopPropagation();
    state.routeFilter = { o, d };
    state.channel = 'all';
    return renderFeed(true);
  }
  if (data.cap != null) {
    prefs.capK = +data.cap || null;
    savePrefs();
    afterLimitChange();
    return;
  }
  if (data.cab) {
    const cabins = new Set(prefs.sel.cabins);
    if (cabins.has(data.cab)) cabins.delete(data.cab);
    else cabins.add(data.cab);
    if (!cabins.size) return toast('至少选一个舱位哦', 2000, 'worry');
    prefs.sel.cabins = ['Y', 'J'].filter(cabin => cabins.has(cabin));
    savePrefs();
    if (state.miniOpen) renderMini();
    if (state.fullOpen) {
      renderOptions();
      renderEstimate();
    }
    return;
  }
  if (data.showCab) {
    state.cabinFilter = data.showCab;
    return renderFeed(true);
  }
  if (data.miles != null) {
    prefs.miles = /^b\d$/.test(data.miles) ? data.miles : +data.miles || null;
    savePrefs();
    return renderFeed(true);
  }
  if (data.program) {
    state.programFilter = data.program;
    return renderFeed(true);
  }
  if (data.card) return openCardDrawer(data.card, el);
  if (el.matches('[data-pair]') && el.tagName !== 'BUTTON') {
    state.pair = +data.pair;
    return renderFeed(true);
  }
  if (el.matches('td[data-o]')) {
    state.routeFilter = { o: data.o, d: data.d };
    state.channel = 'all';
    prefs.view = 'feed';
    savePrefs();
    updateTabs();
    return renderFeed(true);
  }
  if (data.view) {
    prefs.view = data.view;
    savePrefs();
    updateTabs();
    return renderView(true);
  }
  if (data.ch) {
    state.channel = data.ch;
    return renderFeed(true);
  }
  if (el.parentElement && el.parentElement.dataset.opt) return onOptionClick(el);
  if (data.rm)
    return setSelection(
      data.side,
      prefs.sel[data.side].filter(code => code !== data.rm),
    );
  if (data.code) return toggleCodes(data.side, [data.code]);
  if (data.grp)
    return toggleCodes(data.side, Object.keys(DATA.groups.find(g => g.key === data.grp).codes));
  if (data.tier) {
    state.card = Object.assign({}, state.card, { id: data.tier });
    state.day = null;
    renderDrawer();
    $('.drawer').scrollTop = 0;
    return;
  }
  if (data.day) return showDay(data.day);
  if (data.verify) return verify(data.verify);
  if (data.open) {
    return openExternal(
      bookingUrl(state.card.o, state.card.d, data.open, state.card.cabin, viewPax()),
    );
  }
  if (ACTIONS[data.act]) ACTIONS[data.act](el);
}

function onRootChange(event) {
  const el = event.target;
  if (el.classList.contains('k-cap') || el.classList.contains('k-floor')) {
    const which = el.classList.contains('k-cap') ? 'capK' : 'floorK';
    const value = parseFloat(el.value);
    prefs[which] = el.value === '' || !(value >= 5) ? null : value;
    savePrefs();
    afterLimitChange();
  } else if (el.classList.contains('dailycap')) {
    prefs.dailyCap = +el.value;
    savePrefs();
  } else if (el.classList.contains('sort')) {
    prefs.sort = el.value;
    savePrefs();
    renderFeed(true);
  } else if (el.classList.contains('showbad')) {
    state.showExcluded = el.checked;
    renderFeed(true);
  } else if (el.classList.contains('months')) {
    prefs.sel.months = +el.value;
    savePrefs();
    renderEstimate();
  } else if (el.classList.contains('presets')) {
    const preset = DATA.presets[el.value];
    if (preset) {
      setSelection('A', preset.A);
      setSelection('B', preset.B);
    }
    el.value = '';
  }
}

function onSearchKey(event, input) {
  const side = input.dataset.side;
  const count = state.suggestions[side].length;
  if (event.key === 'ArrowDown' && count) {
    state.suggestionAt[side] = (state.suggestionAt[side] + 1) % count;
    renderSuggestions(side);
    event.preventDefault();
  } else if (event.key === 'ArrowUp' && count) {
    state.suggestionAt[side] = (state.suggestionAt[side] - 1 + count) % count;
    renderSuggestions(side);
    event.preventDefault();
  } else if (event.key === 'Enter' && count) {
    pickSuggestion(side, state.suggestionAt[side]);
    event.preventDefault();
  } else if (event.key === 'Escape') {
    closeSuggestions(side, true);
  }
  event.stopPropagation();
}

function onRootKey(event) {
  const el = event.target;
  if (state.dialogOpen) {

    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
    } else if (event.key === 'Tab') {
      const buttons = $$('.dlg .btn');
      const index = buttons.indexOf(state.root.activeElement);
      const next = (index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length;
      if (buttons[next]) buttons[next].focus();
      event.preventDefault();
    }
    return;
  }
  if (state.story) {
    if (event.key === 'Escape') closeStory();
    else if (event.key === ' ' || event.key === 'Enter') advanceStory();
    event.preventDefault();
    return;
  }
  if (el.matches && el.matches('.search input')) return onSearchKey(event, el);
  if (event.key === 'Escape') {
    if (state.card) closeDrawer();
    else if (state.fullOpen) closeFull();
    else if (state.miniOpen) closeMini();
  }
  if (event.key === 'Enter' && el.dataset && el.dataset.card) openCardDrawer(el.dataset.card, el);
}

function bindCardTilt(root) {
  let tilted = null;
  let frame = 0;
  let lastEvent = null;
  const reset = el => {
    if (!el) return;
    el.style.removeProperty('--tx');
    el.style.removeProperty('--ty');
  };
  root.addEventListener(
    'pointermove',
    event => {
      if (reducedMotion() || event.pointerType === 'touch') return;
      const card = event.target.closest ? event.target.closest('.card') : null;
      if (tilted !== card) {
        reset(tilted);
        tilted = card;
      }
      if (!card) return;
      lastEvent = event;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!tilted || !lastEvent) return;
        const rect = tilted.getBoundingClientRect();
        tilted.style.setProperty(
          '--tx',
          (((lastEvent.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3),
        );
        tilted.style.setProperty(
          '--ty',
          (((lastEvent.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3),
        );
      });
    },
    { passive: true },
  );
  root.addEventListener('pointerout', event => {
    if (tilted && !(event.relatedTarget && tilted.contains(event.relatedTarget))) {
      reset(tilted);
      tilted = null;
    }
  });
}

function bindRoot() {
  const root = state.root;
  root.addEventListener('click', onRootClick);
  root.addEventListener('change', onRootChange);
  root.addEventListener('input', event => {
    const side = event.target.dataset && event.target.dataset.side;
    if (!side || !event.target.matches('.search input')) return;
    state.suggestionAt[side] = 0;
    renderSuggestions(side);
  });
  root.addEventListener('keydown', onRootKey);
  root.addEventListener('mousedown', event => {
    for (const side of ['A', 'B']) {
      if (!event.target.closest(`.picker[data-side="${side}"] .search`)) closeSuggestions(side);
    }
  });
  bindCardTilt(root);
}

const IS_RESULTS_PAGE = /^\/booking\/(search|choose-flights)/.test(location.pathname);

const Diagnostics = {
  notes: [],

  note(message) {
    this.notes.push(`${new Date().toTimeString().slice(0, 8)} ${message}`);
    if (this.notes.length > 20) this.notes.shift();
  },

  buildLabel() {
    return `v${DATA.build.version} ${DATA.build.label}`;
  },

  browser() {
    const ua = navigator.userAgent;
    const system = (ua.match(
      /Android [\d.]+|iPhone OS [\d_]+|iPad; CPU OS [\d_]+|Windows NT [\d.]+|Mac OS X [\d_.]+/,
    ) || [''])[0];
    const engine =
      (ua.match(/(Firefox|FxiOS|EdgA?|Edg|CriOS|Chrome|Version)\/[\d.]+/g) || []).pop() || '';
    const app = (ua.match(
      /\b(Via|XBrowser|MQQBrowser|UCBrowser|Quark|MiuiBrowser|SamsungBrowser)\b/,
    ) || [''])[0];
    return [system.replace(/_/g, '.'), engine, app].filter(Boolean).join(' ');
  },

  manager() {
    const info =
      typeof GM_info !== 'undefined'
        ? GM_info
        : typeof GM !== 'undefined' && GM && GM.info
          ? GM.info
          : null;
    return info ? `${info.scriptHandler || '未知'} ${info.version || ''}`.trim() : '没有检测到';
  },

  text() {
    const renderer = state && state.renderer ? state.renderer.kind : '未挂载';
    return [
      `版本：${this.buildLabel()}`,
      `浏览器：${this.browser()}`,
      `脚本管理器：${this.manager()}`,
      `存储：${{ gm: 'GM_* 同步', gm4: 'GM.* 异步', local: '页面 localStorage' }[Store.mode]}`,
      `看板娘：${renderer}${state && state.live2dSource ? '（模型' + state.live2dSource + '）' : ''}`,
      `页面：${location.pathname}`,
      this.notes.length ? '最近的问题：\n' + this.notes.join('\n') : '最近的问题：无',
      this.evidence(),
    ].join('\n');
  },

  evidence() {
    const checks = Object.entries(DB.checks())
      .filter(([, check]) => check.ev)
      .sort((a, b) => b[1].checked_at.localeCompare(a[1].checked_at))
      .slice(0, 3);
    if (!checks.length) return '核实证据：还没有';
    const lines = checks.map(([key, check]) =>
      JSON.stringify({
        key,
        status: check.status,
        miles: check.miles,
        cal: [check.cal_miles, check.cal_cash],
        note: check.note,
        ev: check.ev,
      }),
    );
    return ['核实证据（最近 3 次）：'].concat(lines).join(String.fromCharCode(10));
  },
};

function showStartupFailure(error) {
  if (!document.body) {
    whenBodyReady(() => showStartupFailure(error));
    return;
  }
  if (document.getElementById('award-radar-failure')) return;
  const badge = document.createElement('div');
  badge.id = 'award-radar-failure';
  badge.setAttribute(
    'style',
    'position:fixed;left:8px;bottom:8px;z-index:2147483647;max-width:90vw;padding:8px 12px;' +
      'background:#fff;color:#a3263a;border:2px solid #d43d4b;border-radius:10px;' +
      'font:13px/1.5 system-ui,sans-serif;box-shadow:0 4px 18px rgba(0,0,0,.2);' +
      'user-select:text;-webkit-user-select:text;word-break:break-all',
  );
  const message = (error && error.message) || String(error);
  let label = '';
  try {
    label = Diagnostics.buildLabel();
  } catch (ignored) {
    label = '版本未知';
  }
  badge.textContent = `里程票雷达启动失败：${message}（${label}，${Diagnostics.browser()}）`;
  document.body.appendChild(badge);
}

function pendingItem() {
  const url = new URL(location.href);
  const params = url.searchParams;
  if (
    url.pathname.startsWith('/booking/search') &&
    params.get('searchType') === 'Award' &&
    params.get('from')
  ) {
    return {
      o: params.get('from'),
      d: params.get('to'),
      date: params.get('depart'),
      pax: +(params.get('pax') || 1),
      cabin: (params.get('cabin') || '').toUpperCase().startsWith('COACH') ? 'Y' : 'J',
    };
  }

  const pending = Store.get('pending', null);
  return pending && Date.now() - (pending.atMs || 0) < 20 * 60e3 ? pending : null;
}

const Capture = {
  item: null,
  done: false,
  seen: new Set(),

  onText(text) {
    if (this.done || !text || text.length < 50) return;
    const fingerprint = text.length + ':' + text.slice(0, 64);
    if (this.seen.has(fingerprint)) return;
    this.seen.add(fingerprint);
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      return;
    }
    const slices = findSlices(data);
    if (!slices) return;
    const { o, d, cabin, pax } = this.item;
    const day = collectOffers(slices, o, d, cabin, pax);
    if (!day.valid.length) this.finish(day.failure);
    else this.confirm(day);
  },

  confirm(day) {
    if (this.confirming) return;
    this.confirming = true;
    const { o, d, cabin, pax, date } = this.item;
    const calendar = DB.route(`${pax}|${cabin}|${o}|${d}`).dates[date] || [];
    const startedAt = Date.now();
    const look = () => {
      if (this.done) return;
      const text = (document.body && document.body.innerText) || '';
      const shown = pageMiles(text);
      const ready = day.valid.some(offer => shown.includes(offer.miles));
      if (
        ready ||
        (shown.length && Date.now() - startedAt > 12000) ||
        Date.now() - startedAt > 30000
      ) {
        return this.finish(settleDay(day, text, calendar[0], calendar[1]), null, text);
      }
      setTimeout(look, 1000);
    };
    setTimeout(look, 800);
  },

  finish(result, extra, pageText) {
    if (this.done) return;
    this.done = true;

    result.ev = Object.assign({}, result.evidence || {}, {
      v: 2,
      options: (result.options || []).map(option => [option.miles, option.cash, option.flights]),
      pageMiles: result.pageMiles || pageMiles(pageText || ''),
      pageSample: (pageText || '').replace(/\s+/g, ' ').slice(0, 240),
      url: location.pathname,
    });
    delete result.evidence;
    delete result.pageMiles;
    DB.saveCheck(this.item, result);
    Store.remove('pending');

    const key = item => `${item.o}|${item.d}|${item.cabin}|${item.pax}|${item.date}`;
    const queue = Store.get('verifyQueue', []).filter(item => key(item) !== key(this.item));
    Store.set('verifyQueue', queue);
    if (queue.length) {
      const next = queue[0];
      extra = (extra || '') + `<br>接着核实下一个（还有 ${queue.length} 个）`;
      setTimeout(() => {
        Store.set('pending', Object.assign({}, next, { atMs: Date.now() }));
        location.href = bookingUrl(next.o, next.d, next.date, next.cabin, next.pax);
      }, 4000);
    }
    whenBodyReady(() =>
      sayVerdict(this.item, result, extra || '已记到雷达里，回原来的标签页就能看到'),
    );
  },
};

const PAGE_HOOK = `(() => {
  if (window.__arHook) return;
  window.__arHook = 1;
  const post = text => window.postMessage({ __ar: 1, text }, location.origin);
  const isJson = type => (type || '').includes('json');
  const fetchOriginal = window.fetch;
  window.fetch = function () {
    const request = fetchOriginal.apply(this, arguments);
    request.then(r => { if (isJson(r.headers.get('content-type'))) r.clone().text().then(post, () => {}); }, () => {});
    return request;
  };
  const sendOriginal = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    this.addEventListener('load', function () {
      if (!isJson(this.getResponseHeader('content-type'))) return;
      post(this.responseType === 'json' ? JSON.stringify(this.response) : this.responseText);
    });
    return sendOriginal.apply(this, arguments);
  };
})();`;

function hookPage() {
  window.addEventListener('message', event => {
    if (event.source === window && event.data && event.data.__ar) Capture.onText(event.data.text);
  });

  injectPageScript(PAGE_HOOK, () => {
    if (PAGE.__arHook || PAGE === window) return;

    try {
      hookThroughUnsafeWindow();
    } catch (error) {
      Diagnostics.note('结果页挂钩失败：' + error.message);
    }
  });
}

function hookThroughUnsafeWindow() {
  PAGE.__arHook = 1;
  const forward = text => Capture.onText(text);
  const isJson = type => (type || '').includes('json');
  const fetchOriginal = PAGE.fetch;
  PAGE.fetch = function () {
    const request = fetchOriginal.apply(this, arguments);
    request.then(
      r => {
        if (isJson(r.headers.get('content-type')))
          r.clone()
            .text()
            .then(forward, () => {});
      },
      () => {},
    );
    return request;
  };
  const sendOriginal = PAGE.XMLHttpRequest.prototype.send;
  PAGE.XMLHttpRequest.prototype.send = function () {
    this.addEventListener('load', function () {
      if (!isJson(this.getResponseHeader('content-type'))) return;
      forward(this.responseType === 'json' ? JSON.stringify(this.response) : this.responseText);
    });
    return sendOriginal.apply(this, arguments);
  };
}

function findChallenge() {
  const box = document.querySelector(
    'iframe[src*="captcha" i], iframe[title*="challenge" i], [id*="captcha" i], [class*="captcha" i], #sec-if-cpt-container',
  );
  if (box) return box;
  const walker = document.createTreeWalker(
    document.body || document.documentElement,
    NodeFilter.SHOW_TEXT,
  );
  while (walker.nextNode()) {
    if (/not a robot|confirm you.?re a human/i.test(walker.currentNode.nodeValue))
      return walker.currentNode.parentElement;
  }
  return null;
}

function humanCheckShown() {
  const text = (document.body && document.body.innerText) || '';
  return (
    /challenge/i.test(document.title || '') || /confirm you.?re a human|not a robot/i.test(text)
  );
}

function watchResultsPage() {
  const startedAt = Date.now();
  let askedForHuman = false;
  let checkSince = 0;
  let readySince = 0;

  const heartbeat = () => Store.set('verifyActive', Date.now());
  heartbeat();
  const beating = setInterval(heartbeat, 10000);
  const tick = () => {
    if (Capture.done) {
      clearInterval(beating);
      Store.set('verifyActive', 0);
      return;
    }
    if (humanCheckShown()) {
      readySince = 0;
      if (!askedForHuman) {
        askedForHuman = true;
        checkSince = Date.now();
        const queued = Store.get('verifyQueue', []).length;
        Store.set('humanCheck', { where: 'verify', at: Date.now(), queued });
        talk('human_check', null, {
          sticky: true,
          sub: '勾选 “I&#39;m not a robot” 再点 Continue，我会自己读结果',
        });
        showCheckBar(
          queued > 1
            ? `需要人机验证 · 验证一次可以接着核实 ${queued} 个`
            : '需要人机验证，完成后我会自己读结果',
          'here',
        );
      }

      if (Date.now() - checkSince > CHECK_TIMEOUT) {
        Store.set('humanCheck', {
          where: 'verify',
          expired: true,
          queued: Store.get('verifyQueue', []).length,
        });
        hideCheckBar();
        talk('human_check', null, {
          sticky: true,
          sub: '等了 15 分钟没有完成验证，先停下了；排队的核实还留着',
        });
        clearInterval(beating);
        Store.set('verifyActive', 0);
        return;
      }
    } else {
      if (askedForHuman) {
        askedForHuman = false;
        $('.bubble').hidden = true;
        setMood('', 1);
        hideCheckBar();
        Store.set('humanCheck', null);
      }
      const serverState = document.getElementById('ng-state');
      if (serverState && serverState.textContent) Capture.onText(serverState.textContent);
      const text = (document.body && document.body.innerText) || '';
      if (/no flights|couldn.?t find any|no results|not available on this date/i.test(text)) {
        Capture.finish({ status: 'none', note: '页面显示这一天没有可兑换航班' });
      }
      if (document.readyState === 'complete') readySince = readySince || Date.now();
      if (readySince && Date.now() - readySince > 60000 && Date.now() - startedAt > 75000) {
        Capture.finish(
          { status: 'failed', note: '页面没有加载出航班数据' },
          '可能 aa.com 改版了，页面上看到什么以页面为准',
        );
        return;
      }
    }
    setTimeout(tick, 2000);
  };
  tick();
}

function whenBodyReady(callback) {
  if (document.body) callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

function isMounted() {
  const host = document.getElementById('award-radar-host');
  return !!(host && host.shadowRoot && host.shadowRoot.querySelector('.dock'));
}

function boot() {
  DB.purgePast();
  initState();
  PageBridge.install();
  if (IS_RESULTS_PAGE) {
    Capture.item = pendingItem();
    if (Capture.item) hookPage();
  }
  whenBodyReady(() => {
    try {
      mount();
      if (Capture.item && !Capture.done) {
        const { o, d, date } = Capture.item;
        say(`我在帮你读 ${esc(cityName(o))}→${esc(cityName(d))} ${esc(date.slice(5))} 的结果……`, {
          ms: 5000,
        });
        watchResultsPage();
      }
    } catch (error) {
      Diagnostics.note(error.message);
      showStartupFailure(error);
    }
  });
}

async function start() {
  try {
    await Store.init();

    if (typeof runAlaskaWorker === 'function' && /(^|\.)alaskaair\.com$/.test(location.hostname)) {
      runAlaskaWorker();
      return;
    }
    if (typeof installPreview === 'function') installPreview();
    boot();
  } catch (error) {
    showStartupFailure(error);
    return;
  }
  whenBodyReady(() =>
    setTimeout(() => {
      if (!isMounted()) showStartupFailure(new Error('5 秒内没能显示看板娘'));
    }, 5000),
  );
}

const DATA = {

  build: {"version":"1.0.9","target":"full","label":"完整版"},

  persona: {"key":"miku","name":"Miku","about":"看板娘：Miku（初音未来，占位）"},

  airports: {"AAA":["阿納環礁","阿納環礁","","Anaa","法属波利尼西亚","OC"],"AAC":["阿里什","阿里什","","El Arish","埃及","AF","",1],"AAE":["安纳巴","安纳巴","","Annaba","阿尔及利亚","AF","",1],"AAL":["奥尔堡","奥尔堡","","Aalborg","丹麦","EU","",1],"AAN":["艾因","艾因","","Al Ain","阿联酋","ME","",1],"AAP":["沙马林达","沙马林达","","Samarinda","印度尼西亚","SEA"],"AAR":["奥胡斯","奥胡斯","","Aarhus","丹麦","EU","",1],"AAT":["阿勒泰","阿勒泰","","Altay","中国","CN"],"AAX":["阿拉沙","阿拉沙","","Araxá","巴西","LA"],"AAY":["蓋達 (也門城市)","蓋達 (也門城市)","","Al Ghaydah","也门","ME"],"ABA":["阿巴坎","阿巴坎","","Abakan","俄罗斯","EU","",1],"ABB":["阿萨巴","阿萨巴","","Asaba","尼日利亚","AF","",1],"ABD":["阿巴丹","阿巴丹","","Abadan","伊朗","ME","",1],"ABE":["艾伦敦","艾伦敦","","Allentown/Bethlehem","美国","NA"],"ABI":["阿比林","阿比林","","Abilene","美国","NA"],"ABJ":["阿比让","阿比让","","Abidjan","科特迪瓦","AF","",1],"ABK":["克卜里德哈爾","克卜里德哈爾","","Kebri Dahar","埃塞俄比亚","AF"],"ABL":["安布勒","安布勒","","Ambler","美国","NA"],"ABQ":["阿尔伯克基","阿尔伯克基","","Albuquerque","美国","NA","",1],"ABR":["阿伯丁","阿伯丁","","Aberdeen","美国","NA"],"ABS":["阿布辛贝","阿布辛贝","","Abu Simbel","埃及","AF"],"ABT":["巴哈","巴哈","","Al-Baha","沙特阿拉伯","ME"],"ABV":["阿布贾","阿布贾","","Abuja","尼日利亚","AF","",1],"ABX":["奥尔伯里","奥尔伯里","","East Albury","澳大利亚","OC"],"ABY":["奥尔巴尼","奥尔巴尼","","Albany","美国","NA"],"ABZ":["阿伯丁","阿伯丁","","Aberdeen","英国","EU","",1],"ACA":["阿卡普尔科","阿卡普尔科","","Acapulco","墨西哥","NA","",1],"ACC":["阿克拉","阿克拉","","Accra","加纳","AF","",1],"ACE":["圣巴托洛梅","圣巴托洛梅","","San Bartolomé","西班牙","AF","",1],"ACH":["圣加仑","圣加仑","","St. Gallen","瑞士","EU"],"ACI":["奥尔德尼岛","奥尔德尼岛","","Saint Anne","根西","EU"],"ACK":["南塔克特紀念","","","Nantucket","美国","NA"],"ACT":["韦科","韦科","","Waco","美国","NA"],"ACV":["洪堡县","洪堡县","","Arcata/Eureka","美国","NA"],"ACX":["道袍","道袍","","Xingyi","中国","CN"],"ACY":["大西洋城","大西洋城","","Atlantic City","美国","NA"],"ADB":["伊兹密尔","伊兹密尔","","Gaziemir","土耳其","EU","",1],"ADD":["亚的斯亚贝巴","亚的斯亚贝巴","","Addis Ababa","埃塞俄比亚","AF","",1],"ADE":["亚丁","亚丁","","Aden","也门","ME","",1],"ADF":["阿德亚曼","阿德亚曼","","Adıyaman","土耳其","EU"],"ADJ":["安曼马尔卡","安曼","","Amman","约旦","ME","Q3805",1],"ADK":["埃達克島","埃達克島","","Adak","美国","NA"],"ADL":["阿德莱德","阿德莱德","","Adelaide","澳大利亚","OC","",1],"ADQ":["科迪亚克","科迪亚克","","Kodiak","美国","NA"],"ADU":["阿尔达比勒","阿尔达比勒","","Ardabil","伊朗","ME"],"ADZ":["圣安德烈斯","圣安德烈斯","","San Andrés","哥伦比亚","NA","",1],"AEB":["百色","百色","","Baise (Tianyang)","中国","CN"],"AEP":["布宜诺斯艾利斯乔治·纽伯里","布宜诺斯艾利斯","","Buenos Aires","阿根廷","LA","Q1486",1],"AER":["索契","索契","","Sochi","俄罗斯","EU","Q39420",1],"AES":["奥勒松","奥勒松","","Ålesund","挪威","EU","",1],"AEU":["Abu Musa","","","Abu Musa","伊朗","ME"],"AEX":["亚历山德里亚","亚历山德里亚","","Alexandria","美国","NA"],"AEY":["阿克雷里","阿克雷里","","Akureyri","冰岛","EU","",1],"AFA":["聖拉斐爾縣","聖拉斐爾縣","","San Rafael","阿根廷","LA"],"AFL":["上弗洛雷斯塔","上弗洛雷斯塔","","Alta Floresta","巴西","LA"],"AFZ":["萨卜泽瓦尔","萨卜泽瓦尔","","Sabzevar","伊朗","ME"],"AGA":["阿加迪尔","阿加迪尔","","Agadir (Temsia)","摩洛哥","AF","",1],"AGH":["恩厄尔霍尔姆","恩厄尔霍尔姆","","Ängelholm","瑞典","EU"],"AGP":["马拉加","马拉加","","Málaga","西班牙","EU","",1],"AGR":["阿格拉","","","Agra","印度","SA"],"AGS":["奥古斯塔","奥古斯塔","","Augusta","美国","NA"],"AGT":["埃斯特城","埃斯特城","","Ciudad del Este","巴拉圭","LA","",1],"AGU":["阿瓜斯卡连特斯","阿瓜斯卡连特斯","","Aguascalientes","墨西哥","NA","",1],"AGX":["拉克沙群岛","拉克沙群岛","","Agatti","印度","SA"],"AHA":["Ambikapur","","","Ambikapur","印度","SA"],"AHB":["艾卜哈","艾卜哈","","Abha","沙特阿拉伯","ME","",1],"AHE":["阿亥环礁","阿亥环礁","","Ahe Atoll","法属波利尼西亚","OC"],"AHO":["阿尔盖罗","阿尔盖罗","","Alghero","意大利","EU"],"AHU":["胡塞马","胡塞马","","Al Hoceima","摩洛哥","AF"],"AIA":["阿莱恩斯","阿莱恩斯","","Alliance","美国","NA"],"AIN":["温赖特","温赖特","","Wainwright","美国","NA"],"AJA":["阿雅克肖","阿雅克肖","","Ajaccio","法国","EU"],"AJF":["塞卡凱","塞卡凱","","Al-Jawf","沙特阿拉伯","ME","",1],"AJI":["阿勒","阿勒","","Ağrı","土耳其","EU"],"AJL":["艾藻尔","艾藻尔","","Aizawl (Lengpui)","印度","SA"],"AJN":["欧阿尼","欧阿尼","","Ouani","科摩罗","AF"],"AJR":["阿尔维斯尧尔市镇","阿尔维斯尧尔市镇","","Arvidsjaur","瑞典","EU"],"AJU":["阿拉卡茹","阿拉卡茹","","Aracaju","巴西","LA"],"AKF":["库夫拉","库夫拉","","Kufra","利比亚","AF"],"AKJ":["旭川","旭川","","Higashikagura","日本","EA"],"AKL":["奥克兰","奥克兰","","Auckland","新西兰","OC","",1],"AKN":["鮭魚王","鮭魚王","","King Salmon","美国","NA"],"AKP":["阿纳克图沃克帕斯","阿纳克图沃克帕斯","","Anaktuvuk Pass","美国","NA"],"AKR":["阿庫雷","阿庫雷","","Akure","尼日利亚","AF"],"AKU":["阿克苏","阿克苏","","Aksu (Onsu)","中国","CN"],"AKX":["阿克托别","阿克托别","","Aktobe","哈萨克斯坦","CA","",1],"AKY":["實兌","","","Sittwe","缅甸","SEA"],"ALA":["阿拉木图","阿拉木图","","Almaty","哈萨克斯坦","CA","",1],"ALB":["奥尔巴尼","奥尔巴尼","","Albany","美国","NA","",1],"ALC":["阿利坎特","阿利坎特","","Alicante","西班牙","EU","",1],"ALF":["阿尔塔镇","阿尔塔镇","","Alta","挪威","EU"],"ALG":["阿尔及尔","阿尔及尔","","Algiers","阿尔及利亚","AF","",1],"ALH":["奥班尼","奥班尼","","Albany","澳大利亚","OC"],"ALO":["滑铁卢","滑铁卢","","Waterloo","美国","NA"],"ALP":["阿勒颇","阿勒颇","","Aleppo","叙利亚","ME","",1],"ALS":["阿拉莫萨","阿拉莫萨","","Alamosa","美国","NA"],"ALW":["瓦拉瓦拉","瓦拉瓦拉","","Walla Walla","美国","NA"],"AMA":["阿马里洛","阿马里洛","","Amarillo","美国","NA"],"AMD":["艾哈迈达巴德","艾哈迈达巴德","","Ahmedabad","印度","SA","",1],"AMH":["阿尔巴门奇","阿尔巴门奇","","Arba Minch","埃塞俄比亚","AF"],"AMM":["安曼","安曼","","Amman","约旦","ME","Q3805",1],"AMQ":["安汶","安汶","","Ambon","印度尼西亚","SEA","",1],"AMS":["阿姆斯特丹","阿姆斯特丹","","Amsterdam","荷兰王国","EU","",1],"AMV":["阿姆傑爾馬","阿姆傑爾馬","","Amderma","俄罗斯","EU"],"ANC":["泰德·史蒂文斯安克雷奇","安克雷奇","","Anchorage","美国","NA","Q39450",1],"ANF":["安托法加斯塔","安托法加斯塔","","Antofagasta","智利","LA","",1],"ANI":["阿尼亚克","阿尼亚克","","Aniak","美国","NA"],"ANR":["安特卫普","安特卫普","","Antwerp","比利时","EU"],"ANU":["圣约翰","圣约翰","","Osbourn","安提瓜和巴布达","NA","",1],"ANV":["安維克","","","Anvik","美国","NA"],"ANX":["安德內斯","安德內斯","","Andenes","挪威","EU"],"AOE":["埃斯基谢希尔","埃斯基谢希尔","","Eskişehir","土耳其","EU","",1],"AOG":["鞍山","鞍山","","Anshan","中国","CN"],"AOI":["安科納","安科納","","Falconara Marittima (AN)","意大利","EU"],"AOJ":["青森","青森","","Aomori","日本","EA","",1],"AOK":["卡尔帕索斯","卡尔帕索斯","","Karpathos Island","希腊","EU"],"AOO":["阿尔图纳","阿尔图纳","","Altoona","美国","NA"],"AOR":["亚罗士打","亚罗士打","","Alor Satar","马来西亚","SEA"],"APL":["楠普拉","楠普拉","","Nampula","莫桑比克","AF","",1],"APN":["阿尔皮纳","阿尔皮纳","","Alpena","美国","NA"],"APO":["邮政信箱","邮政信箱","","Carepa","哥伦比亚","LA"],"APW":["阿皮亚","阿皮亚","","Apia","萨摩亚","OC","",1],"AQA":["阿拉拉夸拉","阿拉拉夸拉","","Araraquara","巴西","LA"],"AQG":["安庆","安庆","","Anqing","中国","CN"],"AQI":["盖苏迈","盖苏迈","","Qaisumah","沙特阿拉伯","ME","",1],"AQJ":["亚喀巴","亚喀巴","","Aqaba","约旦","ME","",1],"AQP":["阿雷基帕","阿雷基帕","","Arequipa","秘鲁","LA","",1],"ARC":["北極村","北極村","","Arctic Village","美国","NA"],"ARH":["阿尔汉格尔斯克","阿尔汉格尔斯克","","Archangelsk","俄罗斯","EU"],"ARI":["阿里卡","阿里卡","","Arica","智利","LA"],"ARK":["阿鲁沙","阿鲁沙","","Arusha","坦桑尼亚","AF"],"ARM":["阿米代尔","阿米代尔","","Armidale","澳大利亚","OC"],"ARN":["乌普萨拉","乌普萨拉","","Stockholm","瑞典","EU","",1],"ART":["水镇","水镇","","Watertown","美国","NA"],"ARU":["阿拉萨图巴","阿拉萨图巴","","Araçatuba","巴西","LA"],"ARW":["阿拉德","阿拉德","","Arad","罗马尼亚","EU"],"ASB":["阿什哈巴德","阿什哈巴德","","Ashgabat","土库曼斯坦","CA","",1],"ASD":["安德羅斯鎮","安德羅斯鎮","","Andros Town","巴哈马","NA"],"ASE":["阿斯彭","阿斯彭","","Aspen","美国","NA"],"ASF":["阿斯特拉罕","阿斯特拉罕","","Astrakhan","俄罗斯","EU","",1],"ASI":["乔治敦","乔治敦","","Cat Hill","圣赫勒拿、阿森松和特里斯坦-达库尼亚","AF"],"ASJ":["奄美大岛","奄美大岛","","Amami","日本","EA"],"ASM":["阿斯马拉","阿斯马拉","","Asmara","厄立特里亚","AF"],"ASO":["阿索萨","阿索萨","","Asosa","埃塞俄比亚","AF"],"ASP":["艾丽斯斯普林斯","艾丽斯斯普林斯","","Alice Springs","澳大利亚","OC"],"ASR":["开塞利","开塞利","","Kayseri","土耳其","EU","",1],"ASU":["亚松森","亚松森","","Asunción","巴拉圭","LA","",1],"ASV":["安博塞利","","","Ol Tukai","肯尼亚","AF"],"ASW":["阿斯旺","阿斯旺","","Aswan","埃及","AF","",1],"ATC":["阿瑟鎮","","","Arthur's Town","巴哈马","NA"],"ATH":["雅典","雅典","","Spata-Artemida","希腊","EU","",1],"ATK":["阿特卡苏克","阿特卡苏克","","Atqasuk","美国","NA"],"ATL":["哈茨菲尔德－杰克逊亚特兰大","亚特兰大","","Atlanta","美国","NA","Q23556",1],"ATM":["阿爾塔米拉","阿爾塔米拉","","Altamira","巴西","LA"],"ATQ":["阿姆利则","阿姆利则","","Amritsar","印度","SA","",1],"ATW":["阿普尔顿","阿普尔顿","","Appleton","美国","NA"],"ATY":["沃特敦","沃特敦","","Watertown","美国","NA"],"ATZ":["艾斯尤特","艾斯尤特","","Asyut","埃及","AF","",1],"AUA":["奥腊涅斯塔德","奥腊涅斯塔德","","Oranjestad","阿鲁巴","NA","",1],"AUC":["阿劳卡","阿劳卡","","Arauca","哥伦比亚","LA"],"AUG":["奥古斯塔","奥古斯塔","","Augusta","美国","NA"],"AUH":["阿布扎比","阿布扎比","","Abu Dhabi","阿联酋","ME","",1],"AUQ":["阿图奥纳","阿图奥纳","","Hiva Oa Island","法属波利尼西亚","OC"],"AUR":["欧里亚克","欧里亚克","","Aurillac","法国","EU"],"AUS":["大奥斯汀","大奥斯汀","","Austin","美国","NA","",1],"AUX":["阿拉瓜伊纳","阿拉瓜伊纳","","Araguaína","巴西","LA"],"AVA":["安顺","安顺","","Anshun (Xixiu)","中国","CN"],"AVK":["阿爾拜赫雷","","","Arvaikheer","蒙古国","EA"],"AVL":["阿什维尔","阿什维尔","","Asheville","美国","NA"],"AVN":["阿维尼翁","阿维尼翁","","Avignon","法国","EU"],"AVP":["威尔克斯-巴里","威尔克斯-巴里","","Wilkes-Barre/Scranton","美国","NA"],"AVR":["阿姆劳蒂","阿姆劳蒂","","Amravati","印度","SA"],"AVV":["吉朗","吉朗","","Geelong/Melbourne","澳大利亚","OC","",1],"AWA":["阿瓦萨","阿瓦萨","","Hawassa","埃塞俄比亚","AF","",1],"AWK":["威克島飛行場","","","Wake Island","美国本土外小岛屿","OC"],"AWZ":["阿瓦士","阿瓦士","","Ahvaz","伊朗","ME","",1],"AXA":["瓦利","瓦利","","The Valley","安圭拉","NA"],"AXD":["亚历山德鲁波利斯","亚历山德鲁波利斯","","Alexandroupolis","希腊","EU"],"AXF":["阿拉善左旗","阿拉善左旗","","Bayanhot","中国","CN"],"AXJ":["天草","天草","","Amakusa","日本","EA"],"AXM":["亚美尼亚城","亚美尼亚城","","Armenia","哥伦比亚","LA"],"AXP":["斯普林波因特","","","Spring Point","巴哈马","NA"],"AXR":["阿鲁图阿","阿鲁图阿","","","法属波利尼西亚","OC"],"AXT":["秋田","秋田","","Akita","日本","EA"],"AXU":["阿克苏姆","阿克苏姆","","Axum","埃塞俄比亚","AF"],"AYJ":["阿约提亚","阿约提亚","","Faizabad","印度","SA"],"AYP":["阿亚库乔","阿亚库乔","","Ayacucho","秘鲁","LA"],"AYQ":["乌鲁汝","乌鲁汝","","Yulara","澳大利亚","OC"],"AYT":["安塔利亚","安塔利亚","","Antalya","土耳其","EU","",1],"AZA":["梅萨","梅萨","","Mesa","美国","NA"],"AZD":["亚兹德","亚兹德","","Yazd","伊朗","ME"],"AZN":["安集延","安集延","","Andijan","乌兹别克斯坦","CA"],"AZO":["卡拉马祖","卡拉马祖","","Kalamazoo","美国","NA"],"AZR":["阿德拉尔","阿德拉尔","","Adrar","阿尔及利亚","AF"],"AZS":["圣塔芭芭拉-山美纳","圣塔芭芭拉-山美纳","","Samana","多米尼加","NA"],"BAH":["巴林","里法","","Manama","巴林","ME","",1],"BAL":["巴特曼","巴特曼","","Batman","土耳其","EU"],"BAQ":["巴兰基亚","巴兰基亚","","Barranquilla","哥伦比亚","LA","",1],"BAR":["琼海","琼海","","Qionghai (Basuo)","中国","CN"],"BAV":["包头","包头","","Baotou","中国","CN","",1],"BAX":["巴尔瑙尔","巴尔瑙尔","","Barnaul","俄罗斯","EU","",1],"BAY":["巴亚马雷","巴亚马雷","","Tăuții-Măgherăuș","罗马尼亚","EU"],"BBA":["科伊艾克","科伊艾克","","Balmaceda","智利","LA"],"BBI":["布巴内什瓦尔","布巴内什瓦尔","","Bhubaneswar","印度","SA","",1],"BBK":["卡萨内","卡萨内","","Kasane","博茨瓦纳","AF","",1],"BBM":["马德望","马德望","","Battambang","柬埔寨","SEA"],"BBN":["巴里奥","巴里奥","","Bario","马来西亚","SEA"],"BBO":["柏培拉","柏培拉","","Berbera","索马里","AF"],"BBQ":["科德灵顿","科德灵顿","","Codrington","安提瓜和巴布达","NA"],"BBU":["布加勒斯特火車北站","布加勒斯特火車北站","","Bucharest","罗马尼亚","EU","",1],"BCA":["巴拉科阿","巴拉科阿","","Baracoa","古巴","NA"],"BCD":["巴科洛德","巴科洛德","","Bacolod City","菲律宾","SEA","",1],"BCH":["包考","包考","","Baucau","东帝汶","SEA"],"BCI":["巴卡尔丁","","","Barcaldine","澳大利亚","OC"],"BCM":["巴克乌","巴克乌","","Bacău","罗马尼亚","EU","",1],"BCN":["巴塞罗那","巴塞罗那","","Barcelona","西班牙","EU","",1],"BCO":["金卡","金卡","","Jinka","埃塞俄比亚","AF"],"BCU":["包奇","包奇","","Bauchi","尼日利亚","AF","",1],"BDA":["哈密尔顿","哈密尔顿","","Hamilton","百慕大","NA","",1],"BDB":["班德堡","班德堡","","Bundaberg","澳大利亚","OC"],"BDH":["倫格港","倫格港","","Bandar Lengeh","伊朗","ME"],"BDJ":["马辰","马辰","","Banjarbaru","印度尼西亚","SEA","",1],"BDL":["奥尔巴尼县","奥尔巴尼县","","Hartford","美国","NA","",1],"BDO":["万隆","万隆","","Bandung","印度尼西亚","SEA"],"BDQ":["瓦多达拉","瓦多达拉","","Vadodara","印度","SA","",1],"BDS":["布林迪西","布林迪西","","Brindisi","意大利","EU","",1],"BDT":["戈巴多莱","","","Gbadolite","刚果民主共和国","AF"],"BDU":["莫尔塞尔夫","莫尔塞尔夫","","Målselv","挪威","EU"],"BEB":["本贝丘拉岛","本贝丘拉岛","","Balivanich","英国","EU"],"BED":["汉斯科姆菲尔德","","","Bedford","美国","NA"],"BEF":["布盧菲爾茲","","","Bluefields","尼加拉瓜","NA"],"BEG":["贝尔格莱德","贝尔格莱德","","Belgrade","塞尔维亚","EU","",1],"BEJ":["丹戎勒德布","丹戎勒德布","","Tanjung Redeb - Borneo Island","印度尼西亚","SEA"],"BEK":["巴雷利","","","Bareilly","印度","SA"],"BEL":["贝伦","贝伦","","Belém","巴西","LA","",1],"BEM":["贝尼迈拉勒","贝尼迈拉勒","","Oulad Yaich","摩洛哥","AF","",1],"BEN":["贝尼纳","","","Benina","利比亚","AF","",1],"BER":["柏林","柏林","","Berlin","德国","EU","",1],"BES":["布雷斯特","布雷斯特","","Brest","法国","EU","",1],"BET":["伯特利","伯特利","","Bethel","美国","NA"],"BEU":["貝杜里","","","Bedourie","澳大利亚","OC"],"BEW":["贝拉","贝拉","","Beira","莫桑比克","AF","",1],"BEY":["贝鲁特","贝鲁特","","Beirut","黎巴嫩","ME","",1],"BFD":["布雷德福","布雷德福","","Bradford","美国","NA"],"BFF":["斯科茨布拉夫","斯科茨布拉夫","","Scottsbluff","美国","NA"],"BFI":["西雅图波音飞行场","西雅图","","Seattle","美国","NA","Q5083"],"BFJ":["毕节","毕节","","Bijie","中国","CN"],"BFL":["贝克斯菲尔德","贝克斯菲尔德","","Bakersfield","美国","NA"],"BFN":["布隆方丹","布隆方丹","","Bloemfontein","南非","AF","",1],"BFS":["贝尔法斯特","贝尔法斯特","","Belfast","英国","EU","Q10686",1],"BFV":["武里南","武里南","","Buriram","泰国","SEA"],"BFY":["蚌埠滕湖","","","Bengbu","中国","CN"],"BGA":["布卡拉曼加","布卡拉曼加","","Bucaramanga","哥伦比亚","LA"],"BGC":["布拉干萨","布拉干萨","","Bragança","葡萄牙","EU"],"BGF":["班吉","班吉","","Bangui","中非共和国","AF","",1],"BGG":["宾格尔","宾格尔","","Bingöl","土耳其","EU"],"BGI":["布里奇顿","布里奇顿","","Bridgetown","巴巴多斯","NA","",1],"BGM":["宾厄姆顿","宾厄姆顿","","Binghamton","美国","NA"],"BGO":["卑尔根","卑尔根","","Bergen","挪威","EU","",1],"BGR":["班戈","班戈","","Bangor","美国","NA"],"BGW":["曼苏尔区","曼苏尔区","","Baghdad","伊拉克","ME","",1],"BGY":["贝加莫","贝加莫","","Orio al Serio (BG)","意大利","EU","",1],"BHB":["汉考克县","汉考克县","","Bar Harbor","美国","NA"],"BHD":["乔治·贝斯特贝尔法斯特城市","贝尔法斯特","","Belfast","英国","EU","Q10686"],"BHE":["布伦亨","布伦亨","","Blenheim","新西兰","OC"],"BHH":["比沙堡","比沙堡","","Bisha","沙特阿拉伯","ME"],"BHI":["布兰卡港","布兰卡港","","Bahía Blanca","阿根廷","LA"],"BHJ":["普杰","普杰","","Bhuj","印度","SA"],"BHK":["布哈拉","布哈拉","","Bukhara","乌兹别克斯坦","CA","",1],"BHM":["伯明翰","伯明翰","","Birmingham","美国","NA","",1],"BHO":["博帕尔","博帕尔","","Bhopal","印度","SA","",1],"BHQ":["布罗肯希尔","布罗肯希尔","","Broken Hill","澳大利亚","OC"],"BHS":["巴瑟斯特","巴瑟斯特","","Bathurst","澳大利亚","OC"],"BHU":["巴夫那加尔","巴夫那加尔","","Bhavnagar","印度","SA"],"BHV":["巴哈瓦尔布尔县","巴哈瓦尔布尔县","","Bahawalpur","巴基斯坦","SA"],"BHX":["伯明翰","伯明翰","","Birmingham, West Midlands","英国","EU","",1],"BHY":["北海","北海","","Beihai","中国","CN"],"BIA":["巴斯蒂亚","巴斯蒂亚","","Bastia","法国","EU","",1],"BIH":["毕晓普","毕晓普","","Bishop","美国","NA"],"BIK":["比亞克島","比亞克島","","Biak","印度尼西亚","SEA"],"BIL":["比灵斯","比灵斯","","Billings","美国","NA"],"BIM":["北比米尼岛","北比米尼岛","","South Bimini","巴哈马","NA"],"BIO":["毕尔巴鄂","毕尔巴鄂","","Bilbao","西班牙","EU","",1],"BIQ":["比亚里茨","比亚里茨","","Biarritz","法国","EU"],"BIR":["比拉德讷格尔","比拉德讷格尔","","Biratnagar","尼泊尔","SA"],"BIS":["俾斯麦","俾斯麦","","Bismarck","美国","NA"],"BJA":["贝贾亚","贝贾亚","","Béjaïa","阿尔及利亚","AF","",1],"BJB":["博季努爾德","","","Bojnord","伊朗","ME"],"BJC":["丹佛洛基山脈大都會","丹佛","","Denver","美国","NA","Q16554"],"BJF":["博茨菲尤爾","博茨菲尤爾","","Båtsfjord","挪威","EU"],"BJL":["班珠尔","班珠尔","","Banjul (Yundum)","冈比亚","AF","",1],"BJM":["布琼布拉","布琼布拉","","Bujumbura","布隆迪","AF","",1],"BJR":["巴赫达尔","巴赫达尔","","Bahir Dar","埃塞俄比亚","AF"],"BJV":["博德鲁姆","博德鲁姆","","Bodrum","土耳其","EU","",1],"BJX":["莱昂","莱昂","","Silao","墨西哥","NA","",1],"BJZ":["巴达霍斯","巴达霍斯","","Badajoz","西班牙","EU"],"BKG":["布兰森","布兰森","","Branson","美国","NA"],"BKI":["哥打基纳巴卢","哥打基纳巴卢","","Kota Kinabalu","马来西亚","SEA","",1],"BKK":["曼谷","曼谷","","Bangkok","泰国","SEA","Q806484",1],"BKN":["Balkanabat","","","Balkanabat","土库曼斯坦","CA"],"BKO":["巴马科","巴马科","","Bamako","马里","AF","",1],"BKQ":["布雷蔻","布雷蔻","","Blackall","澳大利亚","OC"],"BKS":["明古鲁","明古鲁","","Bengkulu","印度尼西亚","SEA"],"BKW":["贝克利","贝克利","","Beaver","美国","NA"],"BLA":["巴塞罗那","巴塞罗那","","Barcelona","委内瑞拉","LA","",1],"BLB":["巴拿马太平洋项目","巴拿马太平洋项目","","Panamá City","巴拿马","NA"],"BLD":["博尔德城","博尔德城","","Boulder City","美国","NA"],"BLE":["达拉","","","Borlange","瑞典","EU"],"BLI":["贝灵厄姆","贝灵厄姆","","Bellingham","美国","NA"],"BLJ":["巴特纳","巴特纳","","Batna","阿尔及利亚","AF","",1],"BLL":["比隆","比隆","","Billund","丹麦","EU","",1],"BLQ":["博洛尼亚","博洛尼亚","","Bologna","意大利","EU","",1],"BLR":["班加罗尔","班加罗尔","","Bengaluru","印度","SA","",1],"BLV":["贝尔维尔","贝尔维尔","","Belleville","美国","NA"],"BLZ":["布兰太尔","布兰太尔","","Blantyre","马拉维","AF","",1],"BMA":["斯德哥尔摩布罗马","斯德哥尔摩","","Stockholm","瑞典","EU","Q1754"],"BME":["布鲁姆","布鲁姆","","Broome","澳大利亚","OC","",1],"BMI":["伊利諾州中部","伊利諾州中部","","Bloomington/Normal","美国","NA"],"BMU":["比马","比马","","Bima","印度尼西亚","SEA"],"BMV":["邦美蜀","邦美蜀","","Buon Ma Thuot","越南","SEA"],"BMW":["巴吉穆赫塔尔堡省","巴吉穆赫塔尔堡省","","Bordj Badji Mokhtar","阿尔及利亚","AF"],"BNA":["纳什维尔","纳什维尔","","Nashville","美国","NA","",1],"BND":["阿巴斯港","阿巴斯港","","Bandar Abbas","伊朗","ME","",1],"BNE":["布里斯班","布里斯班","","Brisbane","澳大利亚","OC","",1],"BNI":["贝宁城","贝宁城","","Benin","尼日利亚","AF"],"BNK":["巴利納 (新南威爾士州)","巴利納 (新南威爾士州)","","Ballina","澳大利亚","OC"],"BNN":["布伦讷于松","布伦讷于松","","Brønnøy","挪威","EU"],"BNS":["巴里纳斯","巴里纳斯","","Barinas","委内瑞拉","LA"],"BNX":["巴尼亚卢卡","巴尼亚卢卡","","Mahovljani","波斯尼亚和黑塞哥维那","EU","",1],"BOB":["博拉博拉","博拉博拉","","Motu Mute","法属波利尼西亚","OC"],"BOC":["博卡斯德尔托罗","博卡斯德尔托罗","","Isla Colón","巴拿马","NA"],"BOD":["波尔多","波尔多","","Bordeaux","法国","EU","",1],"BOG":["波哥大","波哥大","","Bogota","哥伦比亚","LA","",1],"BOH":["伯恩茅斯","伯恩茅斯","","Bournemouth","英国","EU"],"BOI":["博伊西","博伊西","","Boise","美国","NA","",1],"BOJ":["布尔加斯市镇","布尔加斯市镇","","Burgas","保加利亚","EU","",1],"BOM":["孟买","孟买","","Mumbai","印度","SA","",1],"BON":["博奈尔","博奈尔","","Kralendijk","荷兰加勒比区","NA","",1],"BOO":["博德","博德","","Bodø","挪威","EU","",1],"BOR":["金三角經濟特區","金三角經濟特區","","Ton Phueng","老挝","SEA"],"BOS":["波士顿","波士顿","","Boston","美国","NA","",1],"BOY":["博博迪乌拉索","博博迪乌拉索","","Bobo Dioulasso","布基纳法索","AF","",1],"BPE":["秦皇岛","秦皇岛","","Qinhuangdao (Changli)","中国","CN"],"BPL":["博乐","博乐","","Bole","中国","CN"],"BPN":["巴厘巴板","巴厘巴板","","Balikpapan","印度尼西亚","SEA","",1],"BPS":["塞古鲁港","塞古鲁港","","Porto Seguro","巴西","LA","",1],"BPT":["博蒙特","博蒙特","","Beaumont/Port Arthur","美国","NA"],"BPX":["昌都","昌都","","Bangda","中国","CN"],"BPY":["贝萨兰皮","贝萨兰皮","","Besalampy","马达加斯加","AF"],"BQK":["不伦瑞克","不伦瑞克","","Brunswick","美国","NA"],"BQL":["Boulia","","","","澳大利亚","OC","AU:"],"BQN":["阿瓜迪亚","阿瓜迪亚","","Aguadilla","波多黎各","NA"],"BQS":["海兰泡","海兰泡","","Blagoveschensk","俄罗斯","EU"],"BQT":["布列斯特","","","Brest","白俄罗斯","EU","",1],"BQU":["贝基亚岛","贝基亚岛","","Bequia","圣文森特和格林纳丁斯","NA"],"BRC":["圣卡洛斯-德巴里洛切","圣卡洛斯-德巴里洛切","","San Carlos de Bariloche","阿根廷","LA","",1],"BRD":["布雷納德","布雷納德","","Brainerd","美国","NA"],"BRE":["不来梅","不来梅","","Bremen","德国","EU","",1],"BRI":["巴里","巴里","","Bari","意大利","EU","",1],"BRK":["Bourke","","","","澳大利亚","OC"],"BRL":["伯灵顿","伯灵顿","","Burlington","美国","NA"],"BRM":["巴基西梅托","巴基西梅托","","Barquisimeto","委内瑞拉","LA","",1],"BRN":["伯尔尼","伯尔尼","","Bern","瑞士","EU"],"BRO":["布朗斯维尔","布朗斯维尔","","Brownsville","美国","NA"],"BRQ":["布尔诺","布尔诺","","Brno","捷克","EU"],"BRR":["巴拉岛","巴拉岛","","Eoligarry","英国","EU"],"BRS":["布里斯托尔","布里斯托尔","","Bristol","英国","EU","",1],"BRU":["布鲁塞尔首都大区","布鲁塞尔首都大区","","Zaventem","比利时","EU","",1],"BRW":["Wiley Post–Will Rogers紀念","","","Utqiaġvik","美国","NA"],"BRX":["巴拉奥纳","巴拉奥纳","","Barahona","多米尼加","NA"],"BSA":["博萨索","博萨索","","Bosaso","索马里","AF","",1],"BSB":["巴西利亚","巴西利亚","","Brasília","巴西","LA","",1],"BSC":["巴亚索拉诺","巴亚索拉诺","","Bahía Solano","哥伦比亚","LA"],"BSD":["保山","保山","","Baoshan (Longyang)","中国","CN"],"BSG":["巴塔","","","Bata","赤道几内亚","AF","",1],"BSK":["比斯克拉","比斯克拉","","Biskra","阿尔及利亚","AF","",1],"BSL":["米卢斯","米卢斯","","Bâle / Mulhouse","法国","EU","",1],"BSO":["巴士古","巴士古","","Basco","菲律宾","SEA"],"BSR":["巴士拉","巴士拉","","Basra","伊拉克","ME","",1],"BSZ":["比什凯克","比什凯克","","Bishkek","吉尔吉斯斯坦","CA","",1],"BTC":["巴提卡洛阿","巴提卡洛阿","","Batticaloa","斯里兰卡","SA"],"BTH":["巴淡","巴淡","","Batam","印度尼西亚","SEA","",1],"BTI":["巴特島長距雷達站","","","Barter Island","美国","NA"],"BTJ":["班达亚齐","班达亚齐","","Banda Aceh","印度尼西亚","SEA","",1],"BTK":["布拉茨克","布拉茨克","","Bratsk","俄罗斯","EU"],"BTM":["比尤特","比尤特","","Butte","美国","NA"],"BTR":["巴吞鲁日","巴吞鲁日","","Baton Rouge","美国","NA"],"BTS":["布拉迪斯拉发","布拉迪斯拉发","","Bratislava","斯洛伐克","EU","",1],"BTU":["民都鲁","民都鲁","","Bintulu","马来西亚","SEA"],"BTV":["伯灵顿","伯灵顿","","Burlington","美国","NA"],"BUA":["布卡岛","布卡岛","","Buka Island","巴布亚新几内亚","OC"],"BUD":["布达佩斯","布达佩斯","","Budapest","匈牙利","EU","",1],"BUF":["伊利县","伊利县","","Buffalo","美国","NA","",1],"BUN":["布埃纳文图拉","布埃纳文图拉","","Buenaventura","哥伦比亚","LA"],"BUQ":["Joshua Mqabuko Nkomo","","","Bulawayo","津巴布韦","AF","",1],"BUR":["伯班克","伯班克","","Burbank","美国","NA","",1],"BUS":["巴统","巴统","","Batumi","格鲁吉亚","CA","",1],"BUX":["布尼亞","","","Bunia","刚果民主共和国","AF"],"BUZ":["布什尔","布什尔","","Bushehr","伊朗","ME"],"BVA":["博韦","博韦","","Beauvais","法国","EU","",1],"BVB":["博阿维斯塔","博阿维斯塔","","Boa Vista","巴西","LA","",1],"BVC":["博阿维斯塔","博阿维斯塔","","Rabil","佛得角","AF","",1],"BVE":["布里夫拉盖亚尔德","布里夫拉盖亚尔德","","Brive","法国","EU"],"BVG":["贝勒沃格","贝勒沃格","","Berlevåg","挪威","EU"],"BVH":["维列纳","维列纳","","Vilhena","巴西","LA"],"BVI":["伯茲維爾","伯茲維爾","","","澳大利亚","OC"],"BVJ":["Bovanenkovo","","","Bovanenkovo","俄罗斯","EU"],"BWA":["錫陀塔那迦","錫陀塔那迦","","Siddharthanagar (Bhairahawa)","尼泊尔","SA","",1],"BWI":["巴爾的摩都會區","巴爾的摩都會區","","Baltimore","美国","NA","",1],"BWK":["布拉奇岛","布拉奇岛","","Gornji Humac","克罗地亚","EU"],"BWN":["林梦机场","林梦机场","","Bandar Seri Begawan","文莱","SEA","",1],"BWO":["巴拉科沃","","","Balakovo","俄罗斯","EU"],"BWT":["伯尔尼","伯尔尼","","Burnie","澳大利亚","OC"],"BXH":["巴爾喀什","巴爾喀什","","Balkhash","哈萨克斯坦","CA"],"BXR":["巴姆","巴姆","","Bam","伊朗","ME"],"BXU":["武端","武端","","Butuan","菲律宾","SEA"],"BXY":["Baikonur","","","Baikonur","哈萨克斯坦","CA","",1],"BYK":["布瓦凯","布瓦凯","","Bouaké","科特迪瓦","AF"],"BYM":["巴亚莫","巴亚莫","","Bayamo","古巴","NA"],"BYN":["巴彥洪戈爾","","","Bayankhongor","蒙古国","EA"],"BZE":["伯利兹伯利茲市","伯利兹","","Belize City","伯利兹","NA","Q108223",1],"BZG":["比得哥什","比得哥什","","Bydgoszcz","波兰","EU"],"BZI":["巴勒克埃西尔","巴勒克埃西尔","","Balıkesir","土耳其","EU"],"BZL":["博里萨尔","博里萨尔","","Barisal","孟加拉国","SA"],"BZN":["博兹曼","博兹曼","","Bozeman","美国","NA"],"BZO":["波尔查诺","波尔查诺","","Bolzano (BZ)","意大利","EU"],"BZR":["贝济耶","贝济耶","","Béziers","法国","EU"],"BZV":["布拉柴维尔","布拉柴维尔","","Brazzaville","刚果共和国","AF","",1],"BZX":["巴中","巴中","","Bazhong","中国","CN"],"CAB":["卡宾达","卡宾达","","Cabinda","安哥拉","AF"],"CAC":["卡斯卡韦尔","卡斯卡韦尔","","Cascavel","巴西","LA"],"CAE":["哥伦比亚","哥伦比亚","","Columbia","美国","NA"],"CAG":["卡利亞里","卡利亞里","","Cagliari","意大利","EU","",1],"CAH":["金瓯","金瓯","","Ca Mau City","越南","SEA"],"CAI":["开罗","开罗","","Cairo","埃及","AF","",1],"CAJ":["Canaima","","","Canaima","委内瑞拉","LA"],"CAK":["阿克伦","阿克伦","","Akron","美国","NA"],"CAL":["坎貝爾城","坎貝爾城","","Campbeltown","英国","EU"],"CAN":["广州","广州","","Guangzhou (Huadu)","中国","CN","",1],"CAP":["海地角","海地角","","Cap Haitien","海地","NA","",1],"CAT":["卡斯凯什","卡斯凯什","","Cascais","葡萄牙","EU"],"CAW":["坎普斯-杜若尔当","坎普斯-杜若尔当","","Campos dos Goytacazes","巴西","LA"],"CAY":["巴西禮砲連","巴西禮砲連","","Matoury","法属圭亚那","LA","",1],"CAZ":["科巴 (新南威爾士州)","科巴 (新南威爾士州)","","","澳大利亚","OC"],"CBB":["科恰班巴","科恰班巴","","Cochabamba","玻利维亚","LA","",1],"CBH":["贝沙尔","贝沙尔","","Béchar","阿尔及利亚","AF"],"CBO":["哥打巴托","哥打巴托","","Datu Odin Sinsuat","菲律宾","SEA"],"CBQ":["卡拉巴尔","卡拉巴尔","","Calabar","尼日利亚","AF"],"CBR":["堪培拉","堪培拉","","Canberra","澳大利亚","OC"],"CBT":["卡通布拉","卡通布拉","","Catumbela","安哥拉","AF"],"CCC":["科科島","科科島","","Cayo Coco","古巴","NA"],"CCE":["新首都","新首都","","New Cairo","埃及","AF"],"CCF":["卡尔卡松城堡","卡尔卡松城堡","","Carcassonne","法国","EU"],"CCJ":["科兹科德","科兹科德","","Calicut","印度","SA","",1],"CCK":["西岛","西岛","","West Island","科科斯（基林）群岛","EA","",1],"CCP":["塔尔卡瓦诺","塔尔卡瓦诺","","Concepcion","智利","LA","",1],"CCR":["康特拉科斯塔县","康特拉科斯塔县","","Concord","美国","NA"],"CCS":["加拉加斯","加拉加斯","","Maiquetía","委内瑞拉","LA","",1],"CCU":["加尔各答","加尔各答","","Kolkata","印度","SA","",1],"CCZ":["Chub島","","","Chub Cay","巴哈马","NA"],"CDB":["冷湾","冷湾","","Cold Bay","美国","NA"],"CDC":["雪松城","雪松城","","Cedar City","美国","NA"],"CDE":["承德","","","Chengde","中国","CN"],"CDG":["巴黎戴高乐","巴黎","","Paris (Roissy-en-France, Val-d'Oise)","法国","EU","Q90",1],"CDP":["卡达帕","卡达帕","","Kadapa","印度","SA"],"CDR":["沙德伦","沙德伦","","Chadron","美国","NA"],"CDT":["卡斯特利翁-德拉普拉纳","卡斯特利翁-德拉普拉纳","","Castellón de la Plana","西班牙","EU"],"CDV":["科尔多瓦","科尔多瓦","","Cordova","美国","NA"],"CEB":["宿务","宿霧都會區","","Cebu City/Lapu-Lapu City","菲律宾","SEA","",1],"CEC":["克雷森特城","克雷森特城","","Crescent City","美国","NA"],"CED":["塞杜纳 (南澳洲)","塞杜纳 (南澳洲)","","","澳大利亚","OC"],"CEE":["切列波韦茨","","","Cherepovets","俄罗斯","EU"],"CEI":["清莱","清莱","","Chiang Rai","泰国","SEA","",1],"CEK":["车里雅宾斯克","车里雅宾斯克","","Chelyabinsk","俄罗斯","EU","",1],"CEN":["奧夫雷貢城","奧夫雷貢城","","Ciudad Obregón","墨西哥","NA"],"CEZ":["科尔特斯","科尔特斯","","Cortez","美国","NA"],"CFE":["克莱蒙费朗","克莱蒙费朗","","Clermont-Ferrand","法国","EU","",1],"CFG":["西恩富戈斯","西恩富戈斯","","Cienfuegos","古巴","NA"],"CFK":["谢利夫","谢利夫","","Chlef","阿尔及利亚","AF","",1],"CFN":["多尼戈尔郡","多尼戈尔郡","","Donegal","爱尔兰","EU"],"CFR":["卡昂","卡昂","","Caen","法国","EU"],"CFS":["科夫斯港","科夫斯港","","Coffs Harbour","澳大利亚","OC"],"CFU":["克基拉","克基拉","","Kerkyra (Corfu)","希腊","EU","",1],"CGB":["大瓦尔泽亚","大瓦尔泽亚","","Cuiabá","巴西","LA","",1],"CGD":["常德","常德","","Changde (Dingcheng)","中国","CN"],"CGH":["圣保罗","圣保罗","","São Paulo","巴西","LA","",1],"CGI":["开普吉拉多","开普吉拉多","","Cape Girardeau","美国","NA"],"CGK":["雅加达","雅茂德坦勿","","Jakarta","印度尼西亚","SEA","",1],"CGM":["曼巴豪","曼巴豪","","Mambajao","菲律宾","SEA"],"CGN":["波恩","波恩","","Köln (Cologne)","德国","EU","",1],"CGO":["郑州","郑州","","Zhengzhou","中国","CN","",1],"CGP":["吉大港","吉大港","","Chattogram (Chittagong)","孟加拉国","SA","",1],"CGQ":["长春","长春","","Changchun","中国","CN","",1],"CGR":["大坎普","大坎普","","Campo Grande","巴西","LA"],"CGY":["卡加延德奥罗","卡加延德奥罗","","Laguindingan","菲律宾","SEA","",1],"CHA":["查塔努加","查塔努加","","Chattanooga","美国","NA"],"CHC":["克赖斯特彻奇","克赖斯特彻奇","","Christchurch","新西兰","OC","",1],"CHG":["朝阳","朝阳","","Shuangta, Chaoyang","中国","CN"],"CHH":["查查波亚斯","查查波亚斯","","Chachapoyas","秘鲁","LA"],"CHM":["钦博特","钦博特","","Chimbote","秘鲁","LA"],"CHO":["夏洛茨维尔","夏洛茨维尔","","Charlottesville","美国","NA"],"CHQ":["哈尼亚","哈尼亚","","Souda","希腊","EU","",1],"CHS":["查尔斯顿","查尔斯顿","","Charleston","美国","NA","",1],"CHT":["查塔姆群岛","","","Te One","新西兰","OC"],"CHX":["錢吉諾拉","錢吉諾拉","","Changuinola","巴拿马","NA"],"CIA":["罗马钱皮诺","罗马","","Rome","意大利","EU","Q220",1],"CID":["锡达拉皮兹","锡达拉皮兹","","Cedar Rapids","美国","NA"],"CIF":["赤峰","赤峰","","Chifeng","中国","CN"],"CIJ":["科維哈","科維哈","","Cobija","玻利维亚","LA"],"CIT":["希姆肯特","希姆肯特","","Shymkent","哈萨克斯坦","CA","",1],"CIU":["苏圣玛丽契皮瓦縣","苏圣玛丽","","Kincheloe","美国","NA","Q986634"],"CIW":["卡努安岛","卡努安岛","","Canouan","圣文森特和格林纳丁斯","NA"],"CIX":["奇克拉约","奇克拉约","","Chiclayo","秘鲁","LA","",1],"CIY":["科米索","科米索","","Comiso","意大利","EU"],"CJA":["卡哈马卡","卡哈马卡","","Cajamarca","秘鲁","LA"],"CJB":["哥印拜陀","哥印拜陀","","Coimbatore","印度","SA","",1],"CJC":["卡拉马","卡拉马","","Calama","智利","LA"],"CJJ":["清州","清州","","Cheongju","韩国","EA","",1],"CJL":["吉德拉尔","吉德拉尔","","Chitral","巴基斯坦","SA"],"CJM":["春蓬府","春蓬府","","Chumphon","泰国","SEA"],"CJS":["华雷斯城","华雷斯城","","Ciudad Juárez","墨西哥","NA","",1],"CJU":["济州","济州","","Jeju City","韩国","EA","",1],"CKB":["克拉克斯堡","克拉克斯堡","","Bridgeport","美国","NA"],"CKG":["重庆","重庆","","Chongqing","中国","CN","",1],"CKH":["喬庫爾達赫","喬庫爾達赫","","Chokurdah","俄罗斯","EU"],"CKS":["帕劳阿佩巴斯","帕劳阿佩巴斯","","Parauapebas","巴西","LA"],"CKY":["科纳克里","科纳克里","","Conakry","几内亚","AF","",1],"CKZ":["恰纳卡莱","恰纳卡莱","","Çanakkale","土耳其","EU"],"CLD":["卡尔斯巴德","卡尔斯巴德","","Carlsbad","美国","NA"],"CLE":["克利夫兰","克利夫兰","","Cleveland","美国","NA","",1],"CLJ":["克卢日-纳波卡","克卢日-纳波卡","","Cluj-Napoca","罗马尼亚","EU","",1],"CLL":["Easterwood","","","College Station","美国","NA"],"CLO":["卡利","卡利","","Cali","哥伦比亚","LA","",1],"CLQ":["科利马","科利马","","Colima","墨西哥","NA"],"CLT":["夏洛特都會區","夏洛特都會區","","Charlotte","美国","NA","",1],"CLY":["卡尔维","卡尔维","","Calvi","法国","EU"],"CMA":["坎納馬拉","","","","澳大利亚","OC","AU:"],"CMB":["科伦坡","科伦坡","","Colombo","斯里兰卡","SA","Q35381",1],"CME":["卡门城","卡门城","","Ciudad del Carmen","墨西哥","NA"],"CMF":["尚贝里","尚贝里","","Chambéry","法国","EU"],"CMG":["科伦巴","科伦巴","","Corumbá","巴西","LA"],"CMH":["哥伦布","哥伦布","","Columbus","美国","NA","Q16567",1],"CMI":["尚佩恩-厄巴纳","尚佩恩-厄巴纳","","Savoy","美国","NA"],"CMN":["卡萨布兰卡","卡萨布兰卡","","Casablanca","摩洛哥","AF","",1],"CMU":["钦布","","","Kundiawa","巴布亚新几内亚","OC"],"CMW":["卡马圭","卡马圭","","Camaguey","古巴","NA","",1],"CMX":["汉考克","汉考克","","Hancock","美国","NA"],"CNB":["庫南布爾","","","","澳大利亚","OC","AU:"],"CND":["康斯坦察","康斯坦察","","Constanța","罗马尼亚","EU","",1],"CNF":["孔芬斯","孔芬斯","","Belo Horizonte","巴西","LA","",1],"CNJ":["克朗克里","克朗克里","","Cloncurry","澳大利亚","OC"],"CNM":["卡尔斯巴德","卡尔斯巴德","","Carlsbad","美国","NA"],"CNN":["肯努爾縣","肯努爾縣","","Kannur","印度","SA","",1],"CNP":["斯科斯比松","斯科斯比松","","Neerlerit Inaat","格陵兰","NA"],"CNQ":["科连特斯","科连特斯","","Corrientes","阿根廷","LA"],"CNS":["凯恩斯","凯恩斯","","Cairns","澳大利亚","OC","",1],"CNX":["清迈府","清迈府","","Chiang Mai","泰国","SEA","",1],"CNY":["摩押","摩押","","Moab","美国","NA"],"COD":["科迪","科迪","","Cody","美国","NA"],"COK":["戈奇","戈奇","","Kochi","印度","SA","",1],"COO":["科托努","科托努","","Cotonou","贝宁","AF","",1],"COQ":["乔巴山","乔巴山","","","蒙古国","EA"],"COR":["科尔多瓦","科尔多瓦","","Cordoba","阿根廷","LA","",1],"COS":["科罗拉多斯普林斯","科罗拉多斯普林斯","","Colorado Springs","美国","NA","",1],"COU":["哥伦比亚","哥伦比亚","","Columbia","美国","NA"],"COV":["奥斯曼尼耶省","奥斯曼尼耶省","","Tarsus","土耳其","EU","",1],"CPC":["聖馬丁德洛斯安第斯","聖馬丁德洛斯安第斯","","Chapelco/San Martin de los Andes","阿根廷","LA"],"CPD":["库伯佩地","库伯佩地","","Coober Pedy","澳大利亚","OC"],"CPE":["坎佩切","坎佩切","","Campeche","墨西哥","NA"],"CPH":["哥本哈根","哥本哈根","","Copenhagen","丹麦","EU","",1],"CPO":["科皮亚波","科皮亚波","","Copiapo","智利","LA"],"CPR":["卡斯珀","卡斯珀","","Casper","美国","NA"],"CPT":["开普敦","开普敦","","Cape Town","南非","AF","",1],"CPV":["大坎皮纳","大坎皮纳","","Campina Grande","巴西","LA"],"CPX":["库莱布拉岛","库莱布拉岛","","Culebra","波多黎各","NA"],"CQW":["武隆区","武隆区","","Wulong","中国","CN"],"CRA":["克拉约瓦","克拉约瓦","","Craiova","罗马尼亚","EU","",1],"CRD":["里瓦达维亚海军准将城","里瓦达维亚海军准将城","","Comodoro Rivadavia","阿根廷","LA","",1],"CRI":["Colonel Hill","","","Colonel Hill","巴哈马","NA"],"CRK":["安赫莱斯","安赫莱斯","","Mabalacat","菲律宾","SEA","",1],"CRL":["沙勒罗瓦","沙勒罗瓦","","Charleroi","比利时","EU","",1],"CRM":["卡塔曼","卡塔曼","","Catarman","菲律宾","SEA"],"CRP":["科珀斯克里斯蒂","科珀斯克里斯蒂","","Corpus Christi","美国","NA"],"CRV":["克罗托内","克罗托内","","Isola di Capo Rizzuto (KR)","意大利","EU"],"CRW":["查尔斯顿","查尔斯顿","","Charleston","美国","NA"],"CRZ":["土库曼纳巴德","土库曼纳巴德","","Türkmenabat","土库曼斯坦","CA","",1],"CSG":["哥伦布","哥伦布","","Columbus","美国","NA"],"CSK":["开普斯科灵","开普斯科灵","","Cap Skirring","塞内加尔","AF"],"CSW":["Cabo San Lucas","","","Cabo San Lucas","墨西哥","NA"],"CSX":["长沙","长沙","","Changsha (Changsha)","中国","CN","",1],"CSY":["切博克萨雷","切博克萨雷","","Cheboksary","俄罗斯","EU"],"CTA":["卡塔尼亚","卡塔尼亚","","Catania","意大利","EU","",1],"CTC":["卡塔马卡","卡塔马卡","","Catamarca","阿根廷","LA"],"CTD":["奇特雷","奇特雷","","Chitré","巴拿马","NA"],"CTG":["卡塔赫纳","卡塔赫纳","","Cartagena","哥伦比亚","LA","",1],"CTL":["查尔维尔","查尔维尔","","Charleville","澳大利亚","OC"],"CTM":["切图马尔","切图马尔","","Chetumal","墨西哥","NA"],"CTN":["库克敦","库克敦","","","澳大利亚","OC"],"CTS":["札幌新千岁","札幌","","Sapporo","日本","EA","Q37951",1],"CTU":["成都双流","成都","","Chengdu (Shuangliu)","中国","CN","C:CTU",1],"CUC":["库库塔","库库塔","","Cúcuta","哥伦比亚","LA"],"CUE":["昆卡","昆卡","","Cuenca","厄瓜多尔","LA"],"CUF":["库内奥","库内奥","","Levaldigi (CN)","意大利","EU"],"CUK":["考克島","","","Caye Caulker","伯利兹","NA"],"CUL":["库利亚坎","库利亚坎","","Culiacán","墨西哥","NA","",1],"CUM":["库马纳","库马纳","","Cumaná","委内瑞拉","LA"],"CUN":["坎昆","坎昆","","Cancún","墨西哥","NA","",1],"CUP":["卡鲁帕诺","卡鲁帕诺","","Carúpano","委内瑞拉","LA"],"CUQ":["科恩","科恩","","Coen","澳大利亚","OC"],"CUR":["威廉斯塔德","威廉斯塔德","","Willemstad","库拉索","NA","",1],"CUU":["奇瓦瓦","奇瓦瓦","","Chihuahua","墨西哥","NA","",1],"CUZ":["库斯科","库斯科","","Cusco","秘鲁","LA","",1],"CVG":["辛辛那提辛辛那堤/北肯塔基","辛辛那提","","Cincinnati / Covington","美国","NA","Q43196",1],"CVM":["维多利亚城","维多利亚城","","Ciudad Victoria","墨西哥","NA"],"CVN":["克洛维斯（新墨西哥州）","克洛维斯（新墨西哥州）","","Clovis","美国","NA"],"CVQ":["卡納芬","卡納芬","","Carnarvon","澳大利亚","OC"],"CWA":["沃索","沃索","","Mosinee","美国","NA"],"CWB":["圣若泽杜斯皮尼艾斯","圣若泽杜斯皮尼艾斯","","Curitiba","巴西","LA","",1],"CWJ":["沧源佤族自治县","沧源佤族自治县","","Lincang (Cangyuan)","中国","CN"],"CWL":["加地夫","加地夫","","Cardiff","英国","EU","",1],"CXB":["科克斯巴扎尔","科克斯巴扎尔","","Cox's Bazar","孟加拉国","SA"],"CXI":["圣诞岛","圣诞岛","","Kiritimati","基里巴斯","OC","",1],"CXJ":["南卡希亚斯","南卡希亚斯","","Caxias Do Sul","巴西","LA"],"CXP":["芝拉扎县","芝拉扎县","","Cilacap","印度尼西亚","SEA"],"CXR":["芽庄","芽庄","","Nha Trang/nha Trang aiurportCam Ranh","越南","SEA","",1],"CYA":["莱凯","莱凯","","Les Cayes","海地","NA"],"CYB":["Charles Kirkconnell","","","West End","开曼群岛","NA"],"CYC":["Caye Chapel","","","Caye Chapel","伯利兹","NA"],"CYI":["嘉义","","","Shuishang","中国台湾","HMT"],"CYO":["拉戈島","拉戈島","","Cayo Largo del Sur","古巴","NA"],"CYP":["甲描育","甲描育","","Calbayog City","菲律宾","SEA"],"CYS":["夏延","夏延","","Cheyenne","美国","NA"],"CYX":["切爾斯基","切爾斯基","","Cherskiy","俄罗斯","EU"],"CYZ":["卡瓦延","卡瓦延","","Cauayan City","菲律宾","SEA"],"CZE":["聖安娜德科羅","聖安娜德科羅","","Coro","委内瑞拉","LA"],"CZH":["科羅薩爾","","","Corozal","伯利兹","NA"],"CZL":["君士坦丁","君士坦丁","","Constantine","阿尔及利亚","AF","",1],"CZM":["圣米格尔德科苏梅尔","圣米格尔德科苏梅尔","","Cozumel","墨西哥","NA","",1],"CZS":["南克魯賽羅","南克魯賽羅","","Cruzeiro Do Sul","巴西","LA"],"CZU":["科羅薩爾","科羅薩爾","","Corozal","哥伦比亚","LA"],"CZX":["常州","常州","","Changzhou","中国","CN"],"DAB":["代托纳比奇","代托纳比奇","","Daytona Beach","美国","NA"],"DAC":["达卡","达卡","","Dhaka","孟加拉国","SA","",1],"DAD":["岘港","岘港","","Da Nang","越南","SEA","",1],"DAL":["达拉斯-沃思堡","达拉斯-沃思堡","","Dallas","美国","NA","",1],"DAM":["大马士革","大马士革","","Damascus","叙利亚","ME","",1],"DAR":["达累斯萨拉姆","达累斯萨拉姆","","Dar es Salaam","坦桑尼亚","AF","",1],"DAT":["大同","大同","","Datong","中国","CN","",1],"DAU":["達魯","達魯","","Daru","巴布亚新几内亚","OC"],"DAV":["戴维","戴维","","David","巴拿马","NA"],"DAY":["代顿","代顿","","Dayton","美国","NA"],"DBB":["阿拉曼","阿拉曼","","El Alamein","埃及","AF","",1],"DBC":["白城","白城","","Baicheng","中国","CN"],"DBO":["达博","达博","","Dubbo","澳大利亚","OC"],"DBQ":["迪比克","迪比克","","Dubuque","美国","NA"],"DBR":["Darbhanga","","","Darbhanga","印度","SA"],"DBV":["察夫塔特","察夫塔特","","Dubrovnik","克罗地亚","EU","",1],"DCA":["华盛顿哥伦比亚特区","华盛顿哥伦比亚特区","","Washington","美国","NA","",1],"DCF":["罗索坎菲尔德","罗索","","Canefield","多米尼克","NA","Q36281"],"DCM":["卡斯特尔","卡斯特尔","","Castres","法国","EU"],"DCY":["稻城县","稻城县","","Garzê (Daocheng)","中国","CN"],"DDC":["道奇城","道奇城","","Dodge City","美国","NA"],"DDG":["丹东","丹东","","Dandong (Zhenxing)","中国","CN"],"DDR":["日喀则定日","","","Xigazê (Dingri)","中国","CN"],"DEA":["德拉加齐汗","德拉加齐汗","","Dera Ghazi Khan","巴基斯坦","SA"],"DEB":["德布勒森","德布勒森","","Debrecen","匈牙利","EU","",1],"DEC":["迪凯特","迪凯特","","Decatur","美国","NA"],"DED":["台拉登","台拉登","","Dehradun (Jauligrant)","印度","SA"],"DEF":["迪茲富勒","","","Dezful","伊朗","ME"],"DEL":["德里","德里","","New Delhi","印度","SA","Q1353",1],"DEN":["丹佛","丹佛","","Denver","美国","NA","Q16554",1],"DFW":["达拉斯","曼斯菲","","Dallas-Fort Worth","美国","NA","",1],"DGA":["丹格里加","丹格里加","","Dangriga","伯利兹","NA"],"DGO":["杜兰戈","杜兰戈","","Durango","墨西哥","NA"],"DGT":["朗芒芽地","朗芒芽地","","Dumaguete City","菲律宾","SEA"],"DHM":["冈格拉","冈格拉","","Kangra","印度","SA"],"DHN":["多森","多森","","Dothan","美国","NA"],"DHX":["谏义里","谏义里","","Kediri","印度尼西亚","SEA"],"DIB":["迪布鲁格尔","迪布鲁格尔","","Dibrugarh","印度","SA"],"DIE":["安齐拉纳纳","安齐拉纳纳","","Antisiranana","马达加斯加","AF"],"DIG":["香格里拉","香格里拉","","Diqing (Shangri-La)","中国","CN"],"DIK":["迪金森","迪金森","","Dickinson","美国","NA"],"DIL":["帝力","帝力","","Dili","东帝汶","SEA","",1],"DIN":["奠边府","奠边府","","Dien Bien Phu","越南","SEA"],"DIR":["德雷达瓦","德雷达瓦","","Dire Dawa","埃塞俄比亚","AF","",1],"DIY":["迪亚巴克尔","迪亚巴克尔","","Diyarbakır","土耳其","EU"],"DJE":["豪迈特苏格","豪迈特苏格","","Mellita","突尼斯","AF","",1],"DJG":["贾奈特","贾奈特","","Djanet","阿尔及利亚","AF","",1],"DJJ":["查雅普拉","查雅普拉","","Sentani","印度尼西亚","SEA","",1],"DJT":["West Palm Beach","","","West Palm Beach","美国","NA","",1],"DKA":["卡齐纳","卡齐纳","","Katsina","尼日利亚","AF"],"DLA":["杜阿拉","杜阿拉","","Douala","喀麦隆","AF","",1],"DLC":["大连","大连","","Dalian (Ganjingzi)","中国","CN","",1],"DLE":["輝綠岩","輝綠岩","","Dole","法国","EU"],"DLG":["迪林厄姆","迪林厄姆","","Dillingham","美国","NA"],"DLH":["德卢斯","德卢斯","","Duluth","美国","NA"],"DLI":["大叻","大叻","","Da Lat","越南","SEA"],"DLM":["达拉曼","达拉曼","","Dalaman","土耳其","EU","",1],"DLU":["大理","大理","","Dali (Xiaguan)","中国","CN"],"DLZ":["达兰扎德嘎德","达兰扎德嘎德","","Dalanzadgad","蒙古国","EA"],"DMB":["塔拉兹","塔拉兹","","Taraz","哈萨克斯坦","CA","",1],"DME":["莫斯科多莫杰多沃","莫斯科","","Moscow","俄罗斯","EU","Q649",1],"DMK":["曼谷廊曼","曼谷","","Bangkok","泰国","SEA","Q806484",1],"DMM":["达曼","达曼","","Ad Dammam","沙特阿拉伯","ME","",1],"DMU":["迪马布尔","迪马布尔","","Dimapur","印度","SA"],"DND":["邓迪","邓迪","","Dundee","英国","EU"],"DNH":["敦煌","敦煌","","Dunhuang","中国","CN","",1],"DNZ":["恰爾達克","恰爾達克","","Denizli","土耳其","EU"],"DOD":["多多马","多多马","","Dodoma","坦桑尼亚","AF"],"DOG":["栋古拉","栋古拉","","Dongola","苏丹","AF"],"DOH":["多哈","多哈","","Doha","卡塔尔","ME","",1],"DOL":["多维尔","多维尔","","Deauville","法国","EU"],"DOM":["罗索道格拉斯-查尔斯","罗索","","Marigot","多米尼克","NA","Q36281"],"DOV":["多佛空军基地","","","Dover","美国","NA"],"DOY":["东营","东营","","Dongying (Kenli)","中国","CN"],"DPL":["第波罗","第波罗","","Dipolog","菲律宾","SEA"],"DPO":["德文港","德文港","","Devonport","澳大利亚","OC"],"DPS":["巴厘岛","巴厘省","","Kuta, Badung","印度尼西亚","SEA","",1],"DQM":["杜昆","杜昆","","Duqm","阿曼","ME","",1],"DRG":["迪灵","迪灵","","Deering","美国","NA"],"DRO":["杜兰戈","杜兰戈","","Durango","美国","NA"],"DRP":["黎牙实比","黎牙实比","","Legazpi","菲律宾","SEA","",1],"DRS":["德累斯顿","德累斯顿","","Dresden","德国","EU","",1],"DRW":["达尔文","达尔文","","Darwin","澳大利亚","OC","",1],"DSI":["德斯坦","德斯坦","","Destin","美国","NA"],"DSM":["得梅因","得梅因","","Des Moines","美国","NA","",1],"DSN":["鄂尔多斯","鄂尔多斯","","Ordos","中国","CN","",1],"DSO":["定平郡","定平郡","","Sŏndŏng-ni","朝鲜","EA"],"DSS":["达喀尔","达喀尔","","Dakar","塞内加尔","AF","",1],"DSY":["七星海","","","Ta Noun","柬埔寨","SEA","",1],"DTM":["多特蒙德","多特蒙德","","Dortmund","德国","EU","",1],"DTU":["五大连池","五大连池","","Heihe","中国","CN"],"DTW":["安大略省西南部","安大略省西南部","","Detroit","美国","NA","",1],"DUB":["都柏林","都柏林","","Dublin","爱尔兰","EU","",1],"DUD":["达尼丁","达尼丁","","Dunedin","新西兰","OC"],"DUE":["敦多","敦多","","Chitato","安哥拉","AF"],"DUJ":["杜波伊斯","杜波伊斯","","Dubois","美国","NA"],"DUM":["杜迈","杜迈","","Dumai","印度尼西亚","SEA"],"DUR":["德班","德班","","Durban","南非","AF","",1],"DUS":["杜塞尔多夫国际机场","杜塞尔多夫国际机场","","Düsseldorf","德国","EU","",1],"DUT":["乌纳拉斯卡","乌纳拉斯卡","","Unalaska","美国","NA"],"DVL":["魔鬼湖","魔鬼湖","","Devils Lake","美国","NA"],"DVO":["达沃","达沃","","Davao","菲律宾","SEA","",1],"DWC":["迪拜阿勒马克图姆","迪拜","","Dubai(Jebel Ali)","阿联酋","ME","Q612",1],"DWD":["杜瓦达米","杜瓦达米","","Dawadmi","沙特阿拉伯","ME"],"DXB":["迪拜","迪拜","","Dubai","阿联酋","ME","Q612",1],"DXN":["德里诺伊达","德里","","Gautam Buddha Nagar","印度","SA","Q1353",1],"DYG":["张家界","张家界","","Zhangjiajie (Yongding)","中国","CN","",1],"DYR":["阿纳德尔","阿纳德尔","","Anadyr","俄罗斯","EU"],"DYU":["杜尚别","杜尚别","","Dushanbe","塔吉克斯坦","CA","",1],"DZA":["藻德济","藻德济","","Dzaoudzi","马约特","AF","",1],"DZH":["达州金垭","","","Dazhou (Dachuan)","中国","CN"],"DZN":["杰兹卡兹甘","杰兹卡兹甘","","Zhezkazgan","哈萨克斯坦","CA","",1],"EAM":["奈季兰","奈季兰","","Najran","沙特阿拉伯","ME"],"EAR":["卡尼","卡尼","","Kearney","美国","NA"],"EAS":["圣塞瓦斯蒂安","圣塞瓦斯蒂安","","Hondarribia","西班牙","EU"],"EAT":["韦纳奇","韦纳奇","","Wenatchee","美国","NA"],"EAU":["欧克雷尔","欧克雷尔","","Eau Claire","美国","NA"],"EBA":["坎波内莱尔巴","坎波内莱尔巴","","Campo nell'Elba (LI)","意大利","EU"],"EBB":["恩德培","恩德培","","Entebbe","乌干达","AF","",1],"EBD":["歐拜伊德","","","El-Obeid","苏丹","AF"],"EBJ":["埃斯比约","埃斯比约","","Esbjerg","丹麦","EU"],"EBL":["埃尔比勒","埃尔比勒","","Arbil","伊拉克","ME","",1],"ECN":["北塞浦路斯土耳其共和国","北塞浦路斯土耳其共和国","","Tymbou (Kirklar)","塞浦路斯","EU","",1],"ECP":["巴拿马城","巴拿马城","","Panama City Beach","美国","NA"],"EDI":["爱丁堡","爱丁堡","","Ingliston, Edinburgh","英国","EU","",1],"EDL":["埃尔多雷特","埃尔多雷特","","Eldoret","肯尼亚","AF","",1],"EDO":["埃德雷米特","埃德雷米特","","Edremit","土耳其","EU","",1],"EFL":["凯法利尼亚岛","凯法利尼亚岛","","Kefallinia Island","希腊","EA","",1],"EGC":["贝尔热拉克","贝尔热拉克","","Bergerac","法国","EU"],"EGE":["伊格爾-韋爾","伊格爾-韋爾","","Eagle","美国","NA"],"EGS":["埃伊尔斯塔济","埃伊尔斯塔济","","Egilsstaðir","冰岛","EU"],"EGX":["伊杰吉克","伊杰吉克","","Egegik","美国","NA"],"EHU":["鄂州花湖","","","Ezhou","中国","CN","",1],"EIE":["叶尼塞斯克","叶尼塞斯克","","Yeniseysk","俄罗斯","EU"],"EIN":["埃因霍温","埃因霍温","","Eindhoven","荷兰王国","EU","",1],"EIS":["英属维尔京群岛","英属维尔京群岛","","Beef Island","英属维尔京群岛","NA","",1],"EJA":["巴兰卡韦梅哈","巴兰卡韦梅哈","","Barrancabermeja","哥伦比亚","LA"],"EJH":["沃季赫","沃季赫","","Al Wajh","沙特阿拉伯","ME"],"EKO":["埃尔科","埃尔科","","Elko","美国","NA"],"ELC":["埃爾科島","埃爾科島","","Elcho Island","澳大利亚","OC"],"ELD":["埃尔多拉多","埃尔多拉多","","El Dorado","美国","NA"],"ELF":["法希尔","法希尔","","El Fasher","苏丹","AF"],"ELG":["古莱阿","古莱阿","","El Menia","阿尔及利亚","AF"],"ELH":["北伊柳塞拉","","","North Eleuthera","巴哈马","NA"],"ELM":["埃尔迈拉","埃尔迈拉","","Elmira/Corning","美国","NA"],"ELP":["埃尔帕索","埃尔帕索","","El Paso","美国","NA","",1],"ELQ":["盖西姆省","盖西姆省","","Qassim","沙特阿拉伯","ME","",1],"ELS":["东伦敦","东伦敦","","East London","南非","AF","",1],"ELU":["瓦德","瓦德","","Guemar","阿尔及利亚","AF"],"EMA":["德比","德比","","Nottingham, Leicestershire","英国","EU","",1],"EMD":["埃默拉尔德","埃默拉尔德","","Emerald","澳大利亚","OC"],"EMK":["埃莫纳克","埃莫纳克","","Emmonak","美国","NA"],"ENA":["基奈","基奈","","Kenai","美国","NA"],"ENF":["埃农泰基厄","埃农泰基厄","","Enontekio","芬兰","EU"],"ENH":["恩施","恩施","","Enshi (Enshi)","中国","CN"],"ENO":["伊塔普阿省","伊塔普阿省","","Encarnación","巴拉圭","LA","",1],"ENU":["埃努古","埃努古","","Enegu","尼日利亚","AF","",1],"ENY":["延安","延安","","Yan'an (Baota)","中国","CN"],"EOH":["麦德林埃雷拉","麦德林","","Medellín","哥伦比亚","LA","Q48278"],"EOI":["伊迪島","伊迪島","","Eday","英国","EU"],"EPR":["埃斯佩兰斯 (西澳洲)","埃斯佩兰斯 (西澳洲)","","Esperance","澳大利亚","OC"],"EPU":["派尔努","派尔努","","Pärnu","爱沙尼亚","EU"],"EQS":["埃斯克爾","埃斯克爾","","Esquel","阿根廷","LA"],"ERC":["埃尔津詹","埃尔津詹","","Erzincan","土耳其","EU"],"ERF":["爱尔福特","爱尔福特","","Erfurt","德国","EU","",1],"ERH":["拉希迪耶","拉希迪耶","","Errachidia","摩洛哥","AF"],"ERI":["伊利","伊利","","Erie","美国","NA"],"ERL":["二连浩特","二连浩特","","Erenhot","中国","CN"],"ERS":["温得和克厄洛斯","温得和克","","Windhoek","纳米比亚","AF","Q20618929"],"ERZ":["埃尔祖鲁姆","埃尔祖鲁姆","","Erzurum","土耳其","EU"],"ESB":["安卡拉","安卡拉","","Ankara","土耳其","EU","",1],"ESC":["埃斯卡诺巴","埃斯卡诺巴","","Escanaba","美国","NA"],"ESD":["奧卡斯島","","","Eastsound","美国","NA"],"ESL":["埃利斯塔","埃利斯塔","","Elista","俄罗斯","EU"],"ESM":["埃斯梅拉达斯","埃斯梅拉达斯","","Tachina","厄瓜多尔","LA","",1],"ESR":["埃尔萨尔瓦多","埃尔萨尔瓦多","","El Salvador","智利","LA"],"ESU":["索维拉","索维拉","","Essaouira","摩洛哥","AF"],"ETM":["埃拉特","埃拉特","","Eilat","以色列","ME","",1],"ETR":["马查拉","马查拉","","Santa Rosa","厄瓜多尔","LA"],"ETZ":["梅斯","梅斯","","Goin","法国","EU"],"EUG":["尤金","尤金","","Eugene","美国","NA"],"EUN":["阿尤恩","阿尤恩","","El Aaiún","西撒哈拉","AF","",1],"EUX":["奥腊涅斯塔德","奥腊涅斯塔德","","Oranjestad","荷兰加勒比区","NA"],"EVE":["哈爾斯塔","哈爾斯塔","","Evenes","挪威","EU","",1],"EVN":["埃里温","埃里温","","Yerevan","亚美尼亚","CA","",1],"EVV":["埃文斯维尔","埃文斯维尔","","Evansville","美国","NA"],"EWB":["新貝德福德支線","","","New Bedford","美国","NA"],"EWN":["克雷文縣","克雷文縣","","New Bern","美国","NA"],"EWR":["纽约","纽约","","Newark","美国","NA","",1],"EXT":["埃克塞特","埃克塞特","","Exeter, Devon","英国","EU"],"EYK":["别洛亚尔斯克","别洛亚尔斯克","","","俄罗斯","EU"],"EYP":["约帕尔","约帕尔","","Yopal","哥伦比亚","LA"],"EYW":["基韦斯特","基韦斯特","","Key West","美国","NA"],"EZE":["布宜诺斯艾利斯皮斯塔里尼部长","布宜诺斯艾利斯","","Buenos Aires (Ezeiza)","阿根廷","LA","Q1486",1],"EZS":["埃拉泽","埃拉泽","","Elazığ","土耳其","EU"],"FAE":["沃格岛","沃格岛","","Vágar","法罗群岛","EU","",1],"FAI":["费尔班克斯","费尔班克斯","","Fairbanks","美国","NA"],"FAO":["法鲁","法鲁","","Faro","葡萄牙","EU","",1],"FAR":["法戈","法戈","","Fargo","美国","NA"],"FAT":["弗雷斯诺","弗雷斯诺","","Fresno","美国","NA","",1],"FAV":["法卡拉瓦环礁","法卡拉瓦环礁","","","法属波利尼西亚","OC"],"FAY":["北卡罗来纳州","北卡罗来纳州","","Fayetteville","美国","NA"],"FBM":["卢本巴希","卢本巴希","","Lubumbashi","刚果民主共和国","AF","",1],"FCA":["卡利斯佩尔","卡利斯佩尔","","Kalispell","美国","NA"],"FCN":["库克斯港","库克斯港","","Wurster Nordseeküste","德国","EU"],"FCO":["罗马","罗马","","Rome","意大利","EU","Q220",1],"FDF":["法兰西堡","法兰西堡","","Fort-de-France","马提尼克","NA","",1],"FDH":["腓特烈港","腓特烈港","","Friedrichshafen","德国","EU","",1],"FDU":["班顿杜","班顿杜","","Bandundu","刚果民主共和国","AF"],"FEG":["费尔干纳","费尔干纳","","Fergana","乌兹别克斯坦","CA"],"FEN":["费尔南多·迪诺罗尼亚群岛","费尔南多·迪诺罗尼亚群岛","","Fernando de Noronha","巴西","LA"],"FEZ":["非斯","非斯","","Saïss","摩洛哥","AF","",1],"FGU":["方阿陶环礁","方阿陶环礁","","Fangatau","法属波利尼西亚","OC"],"FIH":["金沙萨","金沙萨","","Kinshasa","刚果民主共和国","AF","",1],"FIZ":["菲茨羅伊路口","","","","澳大利亚","OC","AU:"],"FJR":["富查伊拉 (城市)","富查伊拉 (城市)","","Fujairah","阿联酋","ME","",1],"FKB":["巴登-巴登","巴登-巴登","","Rheinmünster","德国","EU","",1],"FKI":["基桑加尼","基桑加尼","","Kisangani","刚果民主共和国","AF","",1],"FKQ":["法克法克","法克法克","","Fakfak","印度尼西亚","SEA"],"FKS":["须贺川","须贺川","","Sukagawa","日本","EA"],"FLA":["弗洛伦西亚","弗洛伦西亚","","Florencia","哥伦比亚","LA"],"FLG":["弗拉格斯塔夫","弗拉格斯塔夫","","Flagstaff","美国","NA"],"FLL":["劳德代尔堡","劳德代尔堡","","Fort Lauderdale","美国","NA","",1],"FLN":["弗洛里亚诺波利斯","弗洛里亚诺波利斯","","Florianópolis","巴西","LA","",1],"FLO":["弗洛伦斯","弗洛伦斯","","Florence","美国","NA"],"FLR":["佛罗伦萨","佛罗伦萨","","Firenze (FI)","意大利","EU","",1],"FLW":["圣克鲁什-达什弗洛里什","圣克鲁什-达什弗洛里什","","Santa Cruz das Flores","葡萄牙","EU"],"FLZ":["实武牙","实武牙","","Sibolga (Pinangsori)","印度尼西亚","SEA"],"FMA":["福尔摩萨","福尔摩萨","","Formosa","阿根廷","LA"],"FMI":["卡莱米","卡莱米","","Kalemie","刚果民主共和国","AF"],"FMM":["阿尔高","阿尔高","","Memmingen","德国","EU","",1],"FMO":["奥斯纳布吕克","奥斯纳布吕克","","Greven","德国","EU","",1],"FNA":["弗里敦","弗里敦","","Freetown (Lungi-Town)","塞拉利昂","AF","",1],"FNC":["马德拉自治区","马德拉自治区","","Funchal","葡萄牙","EU","",1],"FNI":["尼姆","尼姆","","Nîmes/Garons","法国","EU"],"FNJ":["平壤","平壤","","Pyongyang","朝鲜","EA","",1],"FNT":["弗林特","弗林特","","Flint","美国","NA"],"FOC":["福州","福州","","Fuzhou (Changle)","中国","CN","",1],"FOD":["道奇堡 (艾奧瓦州)","道奇堡 (艾奧瓦州)","","Fort Dodge","美国","NA"],"FOG":["福贾","福贾","","Foggia (FG)","意大利","EU"],"FON":["拉福爾圖納區","拉福爾圖納區","","La Fortuna","哥斯达黎加","NA"],"FOR":["福塔莱萨","福塔莱萨","","Fortaleza","巴西","LA","",1],"FPO":["弗里波特","弗里波特","","Freeport","巴哈马","NA","",1],"FRA":["法兰克福","美因河畔法兰克福","","Frankfurt am Main","德国","EU","",1],"FRD":["星期五港","星期五港","","Friday Harbor","美国","NA"],"FRL":["罗马亚","罗马亚","","Forlì (FC)","意大利","EU"],"FRO":["弗卢勒","弗卢勒","","Florø","挪威","EU"],"FRS":["贝登省","贝登省","","San Benito","危地马拉","NA"],"FRW":["弗朗西斯敦","弗朗西斯敦","","Francistown","博茨瓦纳","AF","",1],"FSC":["韦基奥港","韦基奥港","","Figari","法国","EU","",1],"FSD":["苏瀑","苏瀑","","Sioux Falls","美国","NA"],"FSM":["斯密斯堡","斯密斯堡","","Fort Smith","美国","NA"],"FSP":["圣皮埃尔","圣皮埃尔","","Saint-Pierre","圣皮埃尔和密克隆","NA"],"FSZ":["牧之原","牧之原","","Makinohara / Shimada","日本","EA","",1],"FTE":["埃尔卡拉法特","埃尔卡拉法特","","El Calafate","阿根廷","LA"],"FTU":["陶拉納魯","陶拉納魯","","Tôlanaro","马达加斯加","AF"],"FTW":["沃斯堡Meacham","","","Fort Worth","美国","NA"],"FUE":["富埃特文图拉岛","富埃特文图拉岛","","El Matorral","西班牙","AF","",1],"FUG":["阜阳","阜阳","","Yingzhou, Fuyang","中国","CN"],"FUJ":["五岛","五岛","","Goto","日本","EA"],"FUK":["福冈","福冈","","Fukuoka","日本","EA","",1],"FUN":["富纳富提","富纳富提","","Funafuti","图瓦卢","OC"],"FUO":["佛山","佛山","","Foshan (Nanhai)","中国","CN"],"FWA":["韦恩堡","韦恩堡","","Fort Wayne","美国","NA"],"FYJ":["抚远","抚远","","Fuyuan","中国","CN"],"FYN":["富蕴可可托海","","","Fuyun","中国","CN"],"FYU":["育空堡","育空堡","","Fort Yukon","美国","NA"],"GAJ":["山形","山形","","Higashine","日本","EA"],"GAL":["格利纳","格利纳","","Galena","美国","NA"],"GAM":["甘伯尔","甘伯尔","","Gambell","美国","NA"],"GAN":["阿杜","阿杜","","Gan","马尔代夫","SA","",1],"GAQ":["加奥","加奥","","Gao","马里","AF"],"GAU":["古瓦哈蒂","古瓦哈蒂","","Guwahati","印度","SA","",1],"GAY":["格雅","格雅","","Gaya","印度","SA"],"GBB":["甘巴拉","","","Gabala","阿塞拜疆","CA"],"GBE":["哈博罗内","哈博罗内","","Gaborone","博茨瓦纳","AF","",1],"GBJ":["格朗堡","格朗堡","","Grand-Bourg","瓜德罗普","NA"],"GCC":["吉列","吉列","","Gillette","美国","NA"],"GCH":["加奇萨兰","加奇萨兰","","Gachsaran","伊朗","ME"],"GCI":["根西","根西","","Saint Peter Port","根西","EU"],"GCK":["加登城","加登城","","Garden City","美国","NA"],"GCM":["大开曼","大开曼","","George Town","开曼群岛","NA","",1],"GCN":["科罗拉多大峡谷","科罗拉多大峡谷","","Grand Canyon - Tusayan","美国","NA"],"GDB":["贡迪耶","贡迪耶","","Gondia","印度","SA"],"GDE":["戈德","戈德","","Gode","埃塞俄比亚","AF"],"GDL":["瓜达拉哈拉","瓜达拉哈拉","","Guadalajara","墨西哥","NA","",1],"GDN":["三联","三联","","Gdańsk","波兰","EU","",1],"GDQ":["贡德尔","贡德尔","","Azezo","埃塞俄比亚","AF"],"GDT":["科伯恩城","科伯恩城","","Cockburn Town","特克斯和凯科斯群岛","NA"],"GDV":["格伦代夫","格伦代夫","","Glendive","美国","NA"],"GDX":["马加丹州杜马","马加丹州杜马","","Magadan","俄罗斯","EU"],"GDZ":["格连吉克","格连吉克","","Gelendzhik","俄罗斯","EU"],"GEA":["努美阿洋红","努美阿","","Nouméa","新喀里多尼亚","OC","Q9733"],"GEG":["斯波坎","斯波坎","","Spokane","美国","NA","",1],"GEL":["圣安热卢","圣安热卢","","Santo Ângelo","巴西","LA"],"GEM":["蒙戈莫","蒙戈莫","","Mengomeyén","赤道几内亚","AF"],"GEO":["乔治敦","乔治敦","","Georgetown","圭亚那","LA","Q10717",1],"GER":["新赫罗纳","新赫罗纳","","Nueva Gerona","古巴","NA"],"GES":["桑托斯将军城","桑托斯将军城","","General Santos","菲律宾","SEA","",1],"GET":["杰拉尔顿","杰拉尔顿","","Moonyoonooka","澳大利亚","OC"],"GEV":["耶利瓦勒","耶利瓦勒","","Gällivare","瑞典","EU"],"GFF":["葛瑞菲斯","葛瑞菲斯","","Griffith","澳大利亚","OC"],"GFK":["大福克斯","大福克斯","","Grand Forks","美国","NA"],"GGG":["基尔戈","基尔戈","","Longview","美国","NA"],"GGT":["埃克苏马","埃克苏马","","Moss Town","巴哈马","NA"],"GGW":["格拉斯哥","格拉斯哥","","Glasgow","美国","NA"],"GHA":["盖尔达耶","盖尔达耶","","El Atteuf","阿尔及利亚","AF"],"GHB":["加弗纳港","","","Governor's Harbour","巴哈马","NA"],"GHV":["布拉索夫","布拉索夫","","Brașov (Ghimbav)","罗马尼亚","EU","",1],"GIB":["直布罗陀","直布罗陀","","Gibraltar","直布罗陀","EU","",1],"GID":["基特加","基特加","","Gitega","布隆迪","AF"],"GIG":["里约热内卢/加利昂－安东尼奥·卡洛斯·若宾","里约热内卢","","Rio De Janeiro","巴西","LA","Q8678",1],"GIL":["吉尔吉特","吉尔吉特","","Gilgit","巴基斯坦","SA"],"GIS":["吉斯本","吉斯本","","Gisborne","新西兰","OC"],"GIZ":["吉赞","吉赞","","Jizan","沙特阿拉伯","ME"],"GJA":["瓜納哈","","","Guanaja","洪都拉斯","NA"],"GJL":["吉杰勒","吉杰勒","","Tahir","阿尔及利亚","AF","",1],"GJT":["大章克申支線","","","Grand Junction","美国","NA"],"GKA":["戈罗卡","","","Goronka","巴布亚新几内亚","OC"],"GKN":["格爾卡納","格爾卡納","","Gulkana","美国","NA"],"GLA":["格拉斯哥","格拉斯哥","","Glasgow","英国","EU","",1],"GLF":["戈爾菲托區","戈爾菲托區","","Golfito","哥斯达黎加","NA"],"GLH":["格林威尔","格林威尔","","Greenville","美国","NA"],"GLT":["格拉德斯通","格拉德斯通","","Gladstone","澳大利亚","OC"],"GMA":["蓋梅納","","","Gemena","刚果民主共和国","AF"],"GMB":["甘贝拉","甘贝拉","","Gambela","埃塞俄比亚","AF"],"GME":["戈梅利","戈梅利","","Gomel","白俄罗斯","EU"],"GMO":["阿瑞克航空","阿瑞克航空","","Gombe","尼日利亚","AF"],"GMP":["首尔","首尔","","Seoul","韩国","EA","",1],"GMQ":["果洛藏族自治州","果洛藏族自治州","","Golog (Maqên)","中国","CN"],"GMR":["甘比尔群岛","甘比尔群岛","","","法属波利尼西亚","OC"],"GNB":["格勒诺布尔","格勒诺布尔","","Grenoble","法国","EU"],"GND":["圣乔治","圣乔治","","Saint George's","格林纳达","NA","",1],"GNJ":["占贾","占贾","","Ganja","阿塞拜疆","CA","",1],"GNS":["Binaka","","","Gunungsitoli","印度尼西亚","SEA"],"GNV":["盖恩斯维尔","盖恩斯维尔","","Gainesville","美国","NA"],"GNY":["尚勒乌尔法","尚勒乌尔法","","Şanlıurfa","土耳其","EU","",1],"GOA":["热那亚","热那亚","","Genova (GE)","意大利","EU","",1],"GOH":["努克","努克","","Nuuk","格陵兰","NA","",1],"GOI":["果阿邦","果阿邦","","Vasco da Gama","印度","SA","",1],"GOJ":["下诺夫哥罗德","下诺夫哥罗德","","Nizhny Novgorod","俄罗斯","EU","",1],"GOM":["戈马","戈马","","Goma","刚果民主共和国","AF","",1],"GOP":["戈勒克布尔","戈勒克布尔","","Gorakhpur","印度","SA"],"GOQ":["格尔木","格尔木","","Golmud","中国","CN"],"GOT":["哥德堡","哥德堡","","Göteborg","瑞典","EU","",1],"GOU":["加鲁阿","加鲁阿","","Garoua","喀麦隆","AF","",1],"GOV":["戈夫半岛","戈夫半岛","","Nhulunbuy","澳大利亚","OC"],"GOX":["莫帕","","","Mopa","印度","SA","",1],"GPA":["帕特雷","帕特雷","","Patras","希腊","EU"],"GPI":["瓜比","瓜比","","Guapi","哥伦比亚","LA"],"GPS":["巴爾特拉島","巴爾特拉島","","Isla Baltra","厄瓜多尔","LA"],"GPT":["海灣港-比洛克西都會區","海灣港-比洛克西都會區","","Gulfport","美国","NA"],"GRB":["格林贝","格林贝","","Green Bay","美国","NA"],"GRI":["格兰德艾兰","格兰德艾兰","","Grand Island","美国","NA"],"GRJ":["乔治","乔治","","George","南非","AF","",1],"GRK":["基林-胡德堡区域","","","Fort Cavazos","美国","NA"],"GRO":["赫罗纳","赫罗纳","","Girona","西班牙","EU","",1],"GRQ":["格罗宁根","格罗宁根","","Groningen","荷兰王国","EU","",1],"GRR":["大急流城","大急流城","","Grand Rapids","美国","NA","",1],"GRU":["瓜鲁柳斯","瓜鲁柳斯","","São Paulo","巴西","LA","",1],"GRV":["格罗兹尼","格罗兹尼","","Grozny","俄罗斯","EU","",1],"GRW":["圣克鲁什-达格拉西奥萨","圣克鲁什-达格拉西奥萨","","Santa Cruz da Graciosa","葡萄牙","EU"],"GRX":["格拉纳达","格拉纳达","","Granada","西班牙","EU"],"GRY":["格里姆塞岛","格里姆塞岛","","Grímsey/Sandvík","冰岛","EU"],"GRZ":["格拉茨","格拉茨","","Feldkirchen bei Graz","奥地利","EU","",1],"GSM":["格什姆岛","格什姆岛","","Qeshm(Dayrestan)","伊朗","ME","",1],"GSO":["格林斯伯勒","格林斯伯勒","","Greensboro","美国","NA","",1],"GSP":["格里尔","格里尔","","Greenville/Greer/Spartanburg","美国","NA"],"GST":["古斯塔夫","古斯塔夫","","Gustavus","美国","NA"],"GSV":["萨拉托夫","萨拉托夫","","Saratov","俄罗斯","EU","",1],"GTE":["格鲁特岛","格鲁特岛","","Groote Eylandt","澳大利亚","OC"],"GTF":["大瀑布城","大瀑布城","","Great Falls","美国","NA"],"GTR":["哥伦布","哥伦布","","Columbus/W Point/Starkville","美国","NA"],"GUA":["危地马拉城","危地马拉城","","Guatemala City","危地马拉","NA","",1],"GUC":["吉纳森","吉纳森","","Gunnison","美国","NA"],"GUM":["阿加尼亚","阿加尼亚","","Hagåtña","关岛","OC","",1],"GUP":["蓋洛普","蓋洛普","","Gallup","美国","NA"],"GUR":["阿洛陶","阿洛陶","","Gurney","巴布亚新几内亚","OC"],"GUW":["阿特劳","阿特劳","","Atyrau","哈萨克斯坦","CA","",1],"GVA":["日内瓦","日内瓦","","Geneva","瑞士","EU","",1],"GVR":["瓦拉达里斯州长","瓦拉达里斯州长","","Governador Valadares","巴西","LA"],"GWD":["瓜达尔","瓜达尔","","Gurandani","巴基斯坦","SA","",1],"GWL":["瓜廖尔","瓜廖尔","","Gwalior","印度","SA"],"GWT":["叙尔特岛","叙尔特岛","","Sylt","德国","EU"],"GXF":["塞永","塞永","","Seiyun","也门","ME","",1],"GXG":["內加熱","內加熱","","Negage","安哥拉","AF"],"GXH":["合作","合作","","Gannan (Xiahe)","中国","CN"],"GYA":["瓜亚拉梅林","瓜亚拉梅林","","Guayaramerín","玻利维亚","LA"],"GYD":["巴库","巴库","","Baku","阿塞拜疆","CA","",1],"GYE":["瓜亚基尔","瓜亚基尔","","Guayaquil","厄瓜多尔","LA","",1],"GYM":["瓜伊马斯","瓜伊马斯","","Guaymas","墨西哥","NA"],"GYN":["戈亚尼亚","戈亚尼亚","","Goiânia","巴西","LA","",1],"GYS":["广元","广元","","Guangyuan (Lizhou)","中国","CN"],"GYU":["固原","固原","","Guyuan (Yuanzhou)","中国","CN"],"GYY":["加里","加里","","Gary","美国","NA"],"GZP":["加济帕夏","加济帕夏","","Gazipaşa","土耳其","EU"],"GZT":["加济安泰普","加济安泰普","","Gaziantep","土耳其","EU","",1],"HAC":["八丈町","八丈町","","Hachijojima","日本","EA"],"HAD":["哈尔姆斯塔德","哈尔姆斯塔德","","Halmstad","瑞典","EU"],"HAH":["莫洛尼","莫洛尼","","Moroni","科摩罗","AF"],"HAJ":["汉诺威","汉诺威","","Hannover","德国","EU","",1],"HAK":["海口","海口","","Haikou (Meilan)","中国","CN","",1],"HAM":["汉堡","汉堡","","Hamburg","德国","EU","",1],"HAN":["河内","河内","","Hanoi (Soc Son)","越南","SEA","",1],"HAQ":["Hanimaadhoo","","","Haa Dhaalu Atoll","马尔代夫","SA","",1],"HAS":["哈伊勒","哈伊勒","","Hail","沙特阿拉伯","ME","",1],"HAU":["海于格松","","","Karmøy","挪威","EU"],"HAV":["哈瓦那","哈瓦那","","Havana","古巴","NA","",1],"HBA":["霍巴特","霍巴特","","Hobart (Cambridge)","澳大利亚","OC","",1],"HBE":["Alexandria","","","Alexandria","埃及","AF","",1],"HBX":["胡布利","胡布利","","Hubballi","印度","SA"],"HCJ":["河池","河池","","Hechi (Jinchengjiang)","中国","CN"],"HCR":["Holy Cross","","","Holy Cross","美国","NA"],"HCZ":["郴州","郴州","","Chenzhou","中国","CN"],"HDF":["黑灵斯多夫","黑灵斯多夫","","Zirchow","德国","EU"],"HDG":["邯郸","邯郸","","Handan","中国","CN"],"HDM":["哈马丹","哈马丹","","Hamadan","伊朗","ME"],"HDN":["海登","海登","","Hayden","美国","NA"],"HDS":["胡德斯普雷特空軍基地","","","Hoedspruit","南非","AF"],"HDY":["合艾","合艾","","Hat Yai","泰国","SEA","",1],"HEA":["赫拉特","赫拉特","","Guzara","阿富汗","SA","",1],"HEH":["黑河","黑河","","Heho","缅甸","SEA"],"HEK":["黑河","黑河","","Heihe","中国","CN"],"HEL":["赫尔辛基","赫尔辛基","","Helsinki (Vantaa)","芬兰","EU","",1],"HER":["伊拉克利翁","伊拉克利翁","","Heraklion","希腊","EU","",1],"HET":["呼和浩特","呼和浩特","","Hohhot","中国","CN","",1],"HFA":["海法","海法","","Haifa","以色列","ME"],"HFE":["合肥","合肥","","Hefei","中国","CN","",1],"HFN":["赫本","赫本","","Höfn","冰岛","EU"],"HFT":["哈默弗斯特","哈默弗斯特","","Hammerfest","挪威","EU"],"HGA":["哈尔格萨","哈尔格萨","","Hargeisa","索马里","AF","",1],"HGH":["杭州","杭州","","Hangzhou","中国","CN","",1],"HGI":["伊塔讷格尔","伊塔讷格尔","","Hollongi","印度","SA"],"HGN":["湄宏顺","","","Mae Hong Son","泰国","SEA"],"HGO":["科霍戈","科霍戈","","Korhogo","科特迪瓦","AF"],"HGR":["黑格斯敦","黑格斯敦","","Hagerstown","美国","NA"],"HGU":["芒特哈根","","","Mount Hagen","巴布亚新几内亚","OC"],"HHH":["希尔顿黑德岛","希尔顿黑德岛","","Hilton Head Island","美国","NA"],"HHN":["莱茵兰-普法尔茨州","莱茵兰-普法尔茨州","","Frankfurt am Main (Lautzenhausen)","德国","EU","",1],"HHQ":["華欣","","","Hua Hin","泰国","SEA"],"HHR":["霍桑市際","","","Hawthorne","美国","NA"],"HIA":["淮安","淮安","","Huai'an","中国","CN","",1],"HIB":["希宾","希宾","","Hibbing","美国","NA"],"HID":["霍恩岛","","","Horn","澳大利亚","OC"],"HII":["哈瓦苏湖城","哈瓦苏湖城","","Lake Havasu City","美国","NA"],"HIJ":["广岛","广岛","","Hiroshima","日本","EA","",1],"HIN":["泗川","泗川","","Sacheon","韩国","EA"],"HIR":["霍尼亚拉","霍尼亚拉","","Honiara","所罗门群岛","OC","",1],"HJJ":["怀化","怀化","","Huaihua","中国","CN"],"HJR":["克久拉霍","克久拉霍","","Khajuraho","印度","SA"],"HKD":["函馆","函馆","","Hakodate","日本","EA","",1],"HKG":["香港","香港","","Hong Kong","中国香港","HMT","",1],"HKK":["霍基蒂卡","霍基蒂卡","","","新西兰","OC"],"HKN":["霍斯金斯","","","Kimbe","巴布亚新几内亚","OC"],"HKT":["普吉府","普吉府","","Phuket","泰国","SEA","",1],"HLA":["蘭塞里亞","","","Johannesburg","南非","AF","",1],"HLD":["海拉尔区","海拉尔区","","Hailar","中国","CN","",1],"HLE":["詹姆斯敦","詹姆斯敦","","Jamestown","圣赫勒拿、阿森松和特里斯坦-达库尼亚","AF"],"HLN":["赫勒拿","赫勒拿","","Helena","美国","NA"],"HLP":["雅加达","雅加达","","Jakarta","印度尼西亚","SEA","",1],"HLZ":["哈密尔顿","哈密尔顿","","Hamilton","新西兰","OC"],"HMA":["汉特-曼西斯克","汉特-曼西斯克","","Khanty-Mansiysk","俄罗斯","EU"],"HMB":["索哈杰","索哈杰","","Suhaj","埃及","AF","",1],"HME":["哈西迈萨乌德","哈西迈萨乌德","","Hassi Messaoud","阿尔及利亚","AF"],"HMI":["哈密","哈密","","Hami","中国","CN"],"HMO":["埃莫西约","埃莫西约","","Hermosillo","墨西哥","NA","",1],"HNA":["花卷","花卷","","Hanamaki","日本","EA"],"HND":["东京羽田","东京","","Tokyo","日本","EA","C:TYO",1],"HNL":["火奴鲁鲁","火奴鲁鲁","","Honolulu, Oahu","美国","OC","",1],"HNM":["哈納","哈納","","Hana","美国","OC"],"HNS":["海恩斯","海恩斯","","Haines","美国","NA"],"HNY":["衡阳","衡阳","","Hengyang","中国","CN"],"HOB":["利郡區域","","","Hobbs","美国","NA"],"HOF":["胡富夫","","","Hofuf","沙特阿拉伯","ME","",1],"HOG":["奥尔金","奥尔金","","Holguin","古巴","NA","",1],"HOI":["豪環礁","豪環礁","","Otepa","法属波利尼西亚","OC"],"HOM":["荷马","荷马","","Homer","美国","NA"],"HOR":["奥尔塔","奥尔塔","","Horta","葡萄牙","EU"],"HOT":["温泉城","温泉城","","Hot Springs","美国","NA"],"HOU":["大休斯顿","大休斯顿","","Houston","美国","NA","",1],"HOV":["霍夫登厄什塔-沃尔达","","","Ørsta","挪威","EU"],"HPA":["湯加哈島","","","Lifuka","汤加","OC"],"HPG":["湖北神农架国家公园","湖北神农架国家公园","","Shennongjia (Hongping)","中国","CN"],"HPH":["海防","海防","","Haiphong (Hai An)","越南","SEA","",1],"HPN":["怀特普莱恩斯","怀特普莱恩斯","","White Plains","美国","NA"],"HQL":["塔什库尔干红其拉甫","","","Tashikuergan","中国","CN"],"HRB":["哈尔滨","哈尔滨","","Harbin","中国","CN","",1],"HRE":["哈拉雷","哈拉雷","","Harare","津巴布韦","AF","",1],"HRG":["赫尔格达","赫尔格达","","Hurghada","埃及","AF","",1],"HRI":["汉班托塔","汉班托塔","","Mattala","斯里兰卡","SA"],"HRL":["哈灵根","哈灵根","","Harlingen","美国","NA"],"HRO":["阿肯色州哈里森","阿肯色州哈里森","","Harrison","美国","NA"],"HSA":["图尔克斯坦","图尔克斯坦","","Turkıstan","哈萨克斯坦","CA","",1],"HSC":["韶关","韶关","","Shaoguan","中国","CN"],"HSG":["佐贺","佐贺","","Saga","日本","EA","",1],"HSL":["胡斯利亚","胡斯利亚","","Huslia","美国","NA"],"HSN":["舟山","舟山","","Zhoushan","中国","CN","",1],"HSR":["萨乌拉施特拉","萨乌拉施特拉","","Rajkot","印度","SA","",1],"HSS":["Hisar","","","Hisar","印度","SA","",1],"HSV":["亨茨维尔","亨茨维尔","","Huntsville","美国","NA"],"HTA":["赤塔","赤塔","","Chita","俄罗斯","EU","",1],"HTG":["Khatanga","","","Khatanga","俄罗斯","EU"],"HTI":["聖靈群島","聖靈群島","","Hamilton Island","澳大利亚","OC"],"HTN":["和田","和田","","Hotan","中国","CN"],"HTS":["亨廷顿","亨廷顿","","Huntington","美国","NA"],"HTT":["茫崖","茫崖","","Mengnai","中国","CN"],"HTY":["安条克","安条克","","Antakya","土耳其","EU"],"HUH":["特乌拉伊家族","特乌拉伊家族","","Fare","法属波利尼西亚","OC"],"HUI":["顺化","顺化","","Huế","越南","SEA","",1],"HUN":["花莲","花莲","","Hualien City","中国台湾","HMT","",1],"HUO":["霍林郭勒霍林河","","","Holingol","中国","CN"],"HUU":["瓦努科","瓦努科","","Huánuco","秘鲁","LA"],"HUX":["瓦图尔科","瓦图尔科","","Huatulco","墨西哥","NA","",1],"HUY":["东约克郡","东约克郡","","Grimsby, Lincolnshire","英国","EU"],"HUZ":["惠州","惠州","","Huizhou (Pingtan)","中国","CN"],"HVB":["赫维湾","赫维湾","","Hervey Bay","澳大利亚","OC"],"HVD":["科布多城","","","Khovd","蒙古国","EA"],"HVG":["洪宁斯沃格","洪宁斯沃格","","Honningsvåg","挪威","EU"],"HVN":["聖路易","聖路易","","New Haven","美国","NA"],"HVR":["哈佛","哈佛","","Havre","美国","NA"],"HWR":["Halwara","","","Halwara","印度","SA","",1],"HXD":["德令哈","德令哈","","Delingha","中国","CN"],"HYA":["科德角门户","","","Hyannis","美国","NA"],"HYD":["海得拉巴","海得拉巴","","Hyderabad","印度","SA","",1],"HYN":["台州","台州","","Taizhou (Luqiao)","中国","CN"],"HYS":["海斯","海斯","","Hays","美国","NA"],"HZA":["菏泽","菏泽","","Heze (Dingtao)","中国","CN"],"HZG":["汉中","汉中","","Hanzhong (Chenggu)","中国","CN"],"HZH":["黎平县","黎平县","","Liping","中国","CN"],"IAA":["伊加尔卡","伊加尔卡","","Igarka","俄罗斯","EU"],"IAD":["华盛顿杜勒斯","华盛顿特区都会","","Dulles","美国","NA","",1],"IAG":["尼亚加拉瀑布城","尼亚加拉瀑布城","","Niagara Falls","美国","NA"],"IAH":["休斯敦","休斯敦","","Houston","美国","NA","",1],"IAM":["因阿迈纳斯","因阿迈纳斯","","In Aménas","阿尔及利亚","AF"],"IAN":["基亚娜","基亚娜","","Kiana","美国","NA"],"IAR":["雅罗斯拉夫尔","雅罗斯拉夫尔","","Tunoshna","俄罗斯","EU","",1],"IAS":["雅西","雅西","","Iaşi","罗马尼亚","EU","",1],"IBA":["伊巴丹","伊巴丹","","Ibadan","尼日利亚","AF"],"IBE":["伊瓦格","伊瓦格","","Ibagué","哥伦比亚","LA"],"IBR":["茨木","茨木","","Omitama","日本","EA","",1],"IBZ":["伊维萨岛","伊维萨岛","","Ibiza (Eivissa)","西班牙","EU","",1],"ICN":["首尔仁川","仁川","","Seoul","韩国","EA","",1],"ICT":["威奇托","威奇托","","Wichita","美国","NA"],"IDA":["爱达荷福尔斯","爱达荷福尔斯","","Idaho Falls","美国","NA"],"IDR":["印多尔","印多尔","","Indore","印度","SA","",1],"IEG":["绿山城","绿山城","","Nowe Kramsko","波兰","EU"],"IFJ":["伊萨菲厄泽","伊萨菲厄泽","","Ísafjörður","冰岛","EU"],"IFN":["伊斯法罕","伊斯法罕","","Isfahan","伊朗","ME","",1],"IGA":["馬修鎮","","","Matthew Town","巴哈马","NA"],"IGD":["厄德尔","厄德尔","","Iğdır","土耳其","EU"],"IGR":["伊瓜蘇港","伊瓜蘇港","","Puerto Iguazu","阿根廷","LA"],"IGT":["马加斯","马加斯","","Sunzha","俄罗斯","EU"],"IGU":["伊瓜苏","伊瓜苏","","Foz do Iguaçu","巴西","LA","",1],"IJK":["伊热夫斯克","伊热夫斯克","","Izhevsk","俄罗斯","EU"],"IKA":["德黑兰伊玛目霍梅尼","德黑兰","","Tehran","伊朗","ME","Q3616",1],"IKG":["Karakol","","","Karakol","吉尔吉斯斯坦","CA"],"IKI":["壹岐","壹岐","","Iki","日本","EA"],"IKS":["季克西","季克西","","Tiksi","俄罗斯","EU"],"IKT":["伊尔库茨克","伊尔库茨克","","Irkutsk","俄罗斯","EU","",1],"IKU":["塔姆齊","塔姆齊","","Tamchy","吉尔吉斯斯坦","CA","",1],"ILD":["莱里达","莱里达","","Lleida","西班牙","EU"],"ILG":["威尔明顿","威尔明顿","","Wilmington","美国","NA"],"ILI":["伊利亞姆納","伊利亞姆納","","Iliamna","美国","NA"],"ILM":["开普菲尔","开普菲尔","","Wilmington","美国","NA"],"ILO":["伊洛伊洛","伊洛伊洛","","Cabatuan","菲律宾","SEA","",1],"ILP":["松树岛","松树岛","","Île des Pins","新喀里多尼亚","OC"],"ILQ":["伊洛","伊洛","","Ilo","秘鲁","LA"],"ILR":["伊洛林","伊洛林","","Ilorin/Ogbomosho","尼日利亚","AF","",1],"ILS":["圣萨尔瓦多","圣萨尔瓦多","","San Salvador","萨尔瓦多","NA"],"ILY":["艾拉岛","艾拉岛","","Isle of Islay, Argyll and Bute","英国","EU"],"IMF":["因帕尔","因帕尔","","Imphal","印度","SA","",1],"IMP":["因佩拉特里斯","因佩拉特里斯","","Imperatriz","巴西","LA"],"IMT":["铁岭","铁岭","","Kingsford","美国","NA"],"INC":["银川","银川","","Yinchuan","中国","CN","",1],"IND":["印第安纳波利斯","印第安纳波利斯","","Indianapolis","美国","NA","",1],"INH":["伊尼扬巴内","伊尼扬巴内","","Inhambane","莫桑比克","AF"],"INI":["尼什","尼什","","Niš","塞尔维亚","EU","",1],"INL":["国际瀑布城","国际瀑布城","","International Falls","美国","NA"],"INN":["因斯布鲁克","因斯布鲁克","","Innsbruck","奥地利","EU","",1],"INU":["亚伦区","亚伦区","","Yaren","瑙鲁","OC"],"INV":["因弗内斯","因弗内斯","","Inverness, Highland","英国","EU"],"INZ":["因萨拉赫","因萨拉赫","","In Salah","阿尔及利亚","AF"],"IOA":["约阿尼纳","约阿尼纳","","Ioannina","希腊","EU"],"IOM":["曼島足球總會","曼島足球總會","","Castletown, Rushen","马恩岛","EU","",1],"IOS":["伊列乌斯","伊列乌斯","","Ilhéus","巴西","LA"],"IPC":["安加罗阿","安加罗阿","","Isla De Pascua","智利","LA","",1],"IPH":["怡保","怡保","","Ipoh","马来西亚","SEA","",1],"IPI":["伊皮亚莱斯","伊皮亚莱斯","","Ipiales","哥伦比亚","LA"],"IPL":["因皮里尔","因皮里尔","","Imperial","美国","NA"],"IPN":["伊帕廷加","伊帕廷加","","Ipatinga","巴西","LA"],"IPT":["威廉斯波特","威廉斯波特","","Williamsport","美国","NA"],"IQM":["且末县","且末县","","Qiemo","中国","CN"],"IQN":["庆阳","庆阳","","Qingyang (Xifeng)","中国","CN"],"IQQ":["伊基克","伊基克","","Iquique","智利","LA","",1],"IQT":["伊基托斯","伊基托斯","","Iquitos","秘鲁","LA","",1],"IRG":["洛克哈特河","洛克哈特河","","Lockhart River","澳大利亚","OC"],"IRJ":["拉里奥哈","拉里奥哈","","La Rioja","阿根廷","LA"],"IRK":["柯克斯維爾","柯克斯維爾","","Kirksville","美国","NA"],"IRP":["伊西罗","伊西罗","","Isiro","刚果民主共和国","AF"],"ISA":["伊萨山","伊萨山","","Mount Isa","澳大利亚","OC"],"ISB":["伊斯兰堡首都区","伊斯兰堡首都区","","Attock","巴基斯坦","SA","",1],"ISE":["厄斯帕尔塔","厄斯帕尔塔","","Isparta","土耳其","EU"],"ISG":["石垣","石垣","","Ishigaki","日本","EA"],"ISK":["纳西克","纳西克","","Nashik","印度","SA","",1],"ISP":["長島","長島","","Islip","美国","NA"],"IST":["伊斯坦布尔","伊斯坦布尔","","Istanbul","土耳其","EU","Q406",1],"ISU":["苏莱曼尼亚","苏莱曼尼亚","","Sulaymaniyah","伊拉克","ME"],"ITB":["伊巴雅語","伊巴雅語","","Itaituba","巴西","LA"],"ITH":["伊萨卡","伊萨卡","","Ithaca","美国","NA"],"ITM":["大阪","大阪","","Osaka","日本","EA","",1],"ITO":["希洛","希洛","","Hilo","美国","OC"],"IUE":["纽埃","纽埃","","Alofi","纽埃","OC"],"IVC":["因弗卡吉尔","因弗卡吉尔","","Invercargill","新西兰","OC"],"IVL":["伊納里","伊納里","","Ivalo","芬兰","EU","",1],"IWA":["伊万诺沃","伊万诺沃","","Ivanovo","俄罗斯","EU"],"IWJ":["萩市","萩市","","Masuda","日本","EA"],"IWK":["岩国","岩国","","Iwakuni","日本","EA"],"IXA":["阿加尔塔拉","阿加尔塔拉","","Agartala","印度","SA"],"IXB":["西里古里","西里古里","","Siliguri","印度","SA","",1],"IXC":["昌迪加尔","昌迪加尔","","Chandigarh","印度","SA","",1],"IXD":["巴亚格拉吉区","巴亚格拉吉区","","Allahabad","印度","SA"],"IXE":["门格洛尔","门格洛尔","","Mangaluru","印度","SA","",1],"IXG":["贝尔高姆","贝尔高姆","","Belgaum","印度","SA"],"IXI":["北勒金布尔","北勒金布尔","","Lilabari","印度","SA"],"IXJ":["查谟","查谟","","Jammu","印度","SA"],"IXK":["朱纳格特","朱纳格特","","Keshod","印度","SA"],"IXL":["莱镇","莱镇","","Leh","印度","SA"],"IXM":["马杜赖","马杜赖","","Madurai","印度","SA"],"IXP":["伯坦果德","伯坦果德","","Pathankot","印度","SA"],"IXR":["兰契","兰契","","Ranchi","印度","SA"],"IXS":["锡尔杰尔","锡尔杰尔","","Silchar","印度","SA"],"IXU":["奥兰加巴德","奥兰加巴德","","Aurangabad","印度","SA"],"IXY":["康德拉","康德拉","","Kandla","印度","SA"],"IXZ":["布莱尔港","布莱尔港","","Port Blair","印度","SA","",1],"IZA":["戈亚纳","戈亚纳","","Juiz de Fora","巴西","LA"],"IZO":["出云","出云","","Izumo","日本","EA"],"IZT":["Ixtepec","","","Ixtepec","墨西哥","NA"],"JAC":["杰克逊","杰克逊","","Jackson","美国","NA"],"JAE":["哈恩","哈恩","","Jaén","秘鲁","LA"],"JAF":["贾夫纳","贾夫纳","","Jaffna","斯里兰卡","SA","",1],"JAI":["斋浦尔","斋浦尔","","Jaipur","印度","SA","",1],"JAN":["杰克逊","杰克逊","","Jackson","美国","NA"],"JAU":["豪哈","豪哈","","Jauja","秘鲁","LA"],"JAV":["伊卢利萨特","伊卢利萨特","","Ilulissat","格陵兰","NA","",1],"JAX":["杰克逊维尔城市群","杰克逊维尔城市群","","Jacksonville","美国","NA","",1],"JBQ":["圣多明哥伊莎貝拉","圣多明哥","","La Isabela","多米尼加","NA","Q34820"],"JBR":["琼斯伯勒","琼斯伯勒","","Jonesboro","美国","NA"],"JCL":["捷克布杰约维采","捷克布杰约维采","","České Budějovice","捷克","EU","",1],"JDF":["茹伊斯迪福拉","茹伊斯迪福拉","","Juiz de Fora","巴西","LA"],"JDH":["焦特布尔","焦特布尔","","Jodhpur","印度","SA"],"JDZ":["景德镇","景德镇","","Jingdezhen","中国","CN"],"JED":["吉达","吉达","","Jeddah","沙特阿拉伯","ME","",1],"JEE":["热雷米","热雷米","","Carrefour Sanon","海地","NA"],"JEG":["阿西亚特","阿西亚特","","Aasiaat","格陵兰","NA"],"JER":["泽西","泽西","","St. Peter","泽西","EU"],"JFK":["纽约肯尼迪","纽约","","New York","美国","NA","Q60",1],"JGA":["贾姆讷格尔","贾姆讷格尔","","Jamnagar","印度","SA"],"JGD":["加格达奇区","加格达奇区","","Jiagedaqi","中国","CN"],"JGN":["嘉峪关","嘉峪关","","Jiayuguan","中国","CN","",1],"JGS":["井冈山","井冈山","","Ji'an","中国","CN"],"JHB":["新山","新山","","Johor Bahru","马来西亚","SEA","",1],"JHG":["景洪","景洪","","Jinghong (Gasa)","中国","CN","",1],"JHM":["拉海纳","拉海纳","","Lahaina","美国","OC"],"JHS":["锡西米尤特","锡西米尤特","","Sisimiut","格陵兰","NA"],"JIB":["吉布提","吉布提","","Djibouti City","吉布提","AF","",1],"JIC":["金昌","金昌","","Jinchang","中国","CN"],"JIJ":["吉吉加","吉吉加","","Jijiga","埃塞俄比亚","AF","",1],"JIM":["吉马","吉马","","Jimma","埃塞俄比亚","AF"],"JIQ":["黔江区","黔江区","","Qianjiang","中国","CN"],"JJD":["克鲁斯","克鲁斯","","Cruz","巴西","LA"],"JJN":["泉州","泉州","","Quanzhou","中国","CN","",1],"JJU":["卡科尔托克","卡科尔托克","","Qaqortoq","格陵兰","NA"],"JKG":["延雪平","延雪平","","Jönköping","瑞典","EU"],"JKH":["希俄斯","希俄斯","","Chios Island","希腊","EU"],"JKR":["加德满都札納普爾","加德满都","","Janakpur","尼泊尔","SA","Q3037"],"JLN":["乔普林","乔普林","","Joplin","美国","NA"],"JLR":["贾巴尔普尔","贾巴尔普尔","","Jabalpur","印度","SA"],"JMJ":["澜沧拉祜族自治县","澜沧拉祜族自治县","","Pu'er (Lancang)","中国","CN"],"JMK":["米科诺斯岛","米科诺斯岛","","Mykonos","希腊","EU"],"JMS":["詹姆斯敦","詹姆斯敦","","Jamestown","美国","NA"],"JMU":["佳木斯","佳木斯","","Jiamusi","中国","CN"],"JNB":["约翰内斯堡","约翰内斯堡","","Johannesburg","南非","AF","",1],"JNG":["济宁","济宁","","Jining","中国","CN"],"JNH":["嘉兴","嘉兴","","Xiuzhou, Hangzhou","中国","CN"],"JNU":["朱諾","朱諾","","Juneau","美国","NA"],"JNZ":["锦州","锦州","","Jinzhou (Linghai)","中国","CN"],"JOE":["约恩苏","约恩苏","","Joensuu","芬兰","EU"],"JOG":["日惹","日惹","","Yogyakarta","印度尼西亚","SEA"],"JOI":["若因维利","若因维利","","Joinville","巴西","LA"],"JOL":["霍洛 (蘇祿)","霍洛 (蘇祿)","","Jolo","菲律宾","SEA"],"JOS":["乔斯","乔斯","","Jos","尼日利亚","AF"],"JPA":["若昂佩索阿","若昂佩索阿","","João Pessoa","巴西","LA","",1],"JRH":["焦尔哈德","焦尔哈德","","Jorhat","印度","SA"],"JRO":["乞力马扎罗山","乞力马扎罗山","","Arusha","坦桑尼亚","AF","",1],"JSA":["杰伊瑟尔梅尔","杰伊瑟尔梅尔","","","印度","SA"],"JSH":["锡蒂亚","锡蒂亚","","Crete Island","希腊","EU"],"JSI":["斯基亞索斯島","斯基亞索斯島","","Skiathos","希腊","EU"],"JSJ":["同江","同江","","Jiansanjiang","中国","CN"],"JSR":["杰索尔县","杰索尔县","","Jashore (Jessore)","孟加拉国","SA"],"JST":["约翰斯敦","约翰斯敦","","Johnstown","美国","NA"],"JTC":["阿雷阿尔瓦","阿雷阿尔瓦","","Bauru","巴西","LA"],"JTR":["圣托里尼","圣托里尼","","Santorini Island","希腊","EU","",1],"JUB":["朱巴","朱巴","","Juba","南苏丹","AF","",1],"JUJ":["佩里科","佩里科","","San Salvador de Jujuy","阿根廷","LA","",1],"JUL":["胡利亚卡","胡利亚卡","","Juliaca","秘鲁","LA","",1],"JUZ":["衢州","衢州","","Quzhou (Kezheng)","中国","CN"],"JXA":["鸡西","鸡西","","Jixi","中国","CN"],"JYV":["于韦斯屈莱","于韦斯屈莱","","Jyväskylän Maalaiskunta","芬兰","EU"],"JZH":["九寨镇","九寨镇","","Ngawa (Songpan)","中国","CN"],"KAB":["卡里巴","","","Kariba","津巴布韦","AF"],"KAC":["卡米什利","卡米什利","","Qamishli","叙利亚","ME"],"KAD":["卡杜纳","卡杜纳","","Kaduna","尼日利亚","AF","",1],"KAI":["凱厄圖爾國家公園","凱厄圖爾國家公園","","Kaieteur Falls","圭亚那","LA"],"KAJ":["卡亚尼","卡亚尼","","Kajaani","芬兰","EU"],"KAN":["卡诺","卡诺","","Kano","尼日利亚","AF","",1],"KAO":["库萨莫","库萨莫","","Kuusamo","芬兰","EU"],"KAT":["Awanui","","","Awanui","新西兰","OC"],"KAW":["高當","高當","","Kawthoung","缅甸","SEA"],"KBL":["喀布尔","喀布尔","","Kabul","阿富汗","SA","",1],"KBR":["哥打巴鲁县","哥打巴鲁县","","Kota Baharu","马来西亚","SEA"],"KBV":["甲米","甲米","","Krabi","泰国","SEA","",1],"KCH":["古晋省","古晋省","","Kuching","马来西亚","SEA","",1],"KCM":["卡赫拉曼马拉什","卡赫拉曼马拉什","","Kahramanmaraş","土耳其","EU"],"KCT":["Galle","","","Galle","斯里兰卡","SA"],"KCY":["Krasnoyarsk","","","Krasnoyarsk","俄罗斯","EU"],"KCZ":["高知","高知","","Nankoku","日本","EA","",1],"KDH":["坎大哈","坎大哈","","Kandahar","阿富汗","SA","",1],"KDL":["凯尔德拉","凯尔德拉","","Kärdla","爱沙尼亚","EU"],"KDM":["胡瓦杜环礁","胡瓦杜环礁","","Huvadhu Atoll","马尔代夫","SA"],"KDO":["拉穆环礁","拉穆环礁","","Kadhdhoo","马尔代夫","SA"],"KDU":["斯卡都要塞","斯卡都要塞","","Skardu","巴基斯坦","SA","",1],"KEF":["凯夫拉维克","凯夫拉维克","","Reykjavík","冰岛","EU","",1],"KEJ":["克麦罗沃","克麦罗沃","","Kemerovo","俄罗斯","EU","",1],"KEM":["凯米-托尔尼奥次区","凯米-托尔尼奥次区","","Kemi / Tornio","芬兰","EU"],"KEP":["尼泊尔根杰","尼泊尔根杰","","Nepalgunj","尼泊尔","SA"],"KER":["克尔曼","克尔曼","","Kerman","伊朗","ME","",1],"KET":["景栋","","","Kengtung","缅甸","SEA"],"KFS":["卡斯塔莫努","卡斯塔莫努","","Kastamonu","土耳其","EU"],"KGA":["卡南加","卡南加","","Kananga","刚果民主共和国","AF"],"KGC":["金斯科特 (南澳洲)","金斯科特 (南澳洲)","","","澳大利亚","OC"],"KGD":["波罗的斯克","波罗的斯克","","Kaliningrad","俄罗斯","EU","",1],"KGF":["卡拉干达","卡拉干达","","Karaganda","哈萨克斯坦","CA","",1],"KGI":["卡尔古利","卡尔古利","","Broadwood","澳大利亚","OC"],"KGL":["基加利","基加利","","Kigali","卢旺达","AF","",1],"KGP":["科加雷姆","科加雷姆","","Kogalym","俄罗斯","EU"],"KGS":["科斯岛","科斯岛","","Kos Island","希腊","EA","",1],"KGT":["甘孜藏族自治州","甘孜藏族自治州","","Garzê (Kangding)","中国","CN"],"KHD":["霍拉马巴德","霍拉马巴德","","","伊朗","ME"],"KHG":["喀什","喀什","","Kashgar","中国","CN","",1],"KHH":["高雄","高雄","","Kaohsiung (Xiaogang)","中国台湾","HMT","",1],"KHI":["卡拉奇","卡拉奇","","Karachi","巴基斯坦","SA","",1],"KHK":["哈尔克","哈尔克","","Khark","伊朗","ME"],"KHN":["南昌","南昌","","Nanchang","中国","CN","",1],"KHS":["海塞卜","海塞卜","","Khasab","阿曼","ME"],"KHT":["霍斯特省","霍斯特省","","Khost","阿富汗","SA"],"KHV":["伯力","伯力","","Khabarovsk","俄罗斯","EU"],"KHX":["Kihihi","","","Kihihi","乌干达","AF"],"KIH":["基什岛","基什岛","","Kish Island","伊朗","ME","",1],"KIJ":["新潟","新潟","","Niigata","日本","EA","",1],"KIK":["基尔库克","基尔库克","","Kirkuk","伊拉克","ME","",1],"KIM":["金伯利","金伯利","","Kimberley","南非","AF","",1],"KIN":["金斯敦","金斯敦","","Kingston","牙买加","NA","Q34692",1],"KIR":["特拉利","特拉利","","Farranfore","爱尔兰","EU"],"KIS":["基苏木","基苏木","","Kisumu","肯尼亚","AF","",1],"KIX":["大阪关西","京阪神","","Osaka","日本","EA","",1],"KJA":["克拉斯诺亚尔斯克","克拉斯诺亚尔斯克","","Krasnoyarsk","俄罗斯","EU","",1],"KJB":["卡努尔","卡努尔","","Orvakal","印度","SA"],"KJH":["凯里","凯里","","Kaili  (Huangping)","中国","CN"],"KJI":["布尔津县","布尔津县","","Burqin","中国","CN"],"KJT":["西爪哇省","西爪哇省","","Kertajati","印度尼西亚","SEA"],"KKC":["坤敬","","","Khon Kaen","泰国","SEA"],"KKE":["凯里凯里","凯里凯里","","Kerikeri","新西兰","OC"],"KKJ":["北九州","北九州","","Kitakyushu","日本","EA","",1],"KKN":["希尔克内斯","希尔克内斯","","Kirkenes","挪威","EU"],"KKR":["考库拉环礁","考库拉环礁","","Raitahiti","法属波利尼西亚","OC"],"KKS":["卡尚","卡尚","","Kashan","伊朗","ME"],"KKW":["Kikwit","","","Kikwit","刚果民主共和国","AF"],"KKX":["喜界","","","Kikai","日本","EA"],"KLH":["戈尔哈布尔","戈尔哈布尔","","Kolhapur","印度","SA"],"KLO":["卡利博","卡利博","","Kalibo","菲律宾","SEA","",1],"KLR":["卡尔马","卡尔马","","Kalmar","瑞典","EU"],"KLU":["克拉根福","克拉根福","","Klagenfurt am Wörthersee","奥地利","EU","",1],"KLV":["卡罗维发利","卡罗维发利","","Karlovy Vary","捷克","EU","",1],"KLW":["克拉瓦克","克拉瓦克","","Klawock","美国","NA"],"KLX":["卡拉马塔","卡拉马塔","","Kalamata","希腊","EU"],"KMA":["Kerema","","","Kerema","巴布亚新几内亚","OC"],"KMC":["哈费尔巴廷","哈费尔巴廷","","King Khaled Military City","沙特阿拉伯","ME"],"KME":["尚古古","尚古古","","Kamembe","卢旺达","AF"],"KMG":["昆明","昆明","","Kunming","中国","CN","",1],"KMI":["宫崎","宫崎","","Miyazaki","日本","EA","",1],"KMJ":["熊本","熊本","","Kumamoto","日本","EA","",1],"KMQ":["小松","小松","","Kanazawa","日本","EA","",1],"KMS":["库马西","库马西","","Kumasi","加纳","AF","",1],"KMW":["科斯特罗马","科斯特罗马","","Kostroma","俄罗斯","EU"],"KND":["Kindu","","","Kindu","刚果民主共和国","AF"],"KNG":["凱馬那","凱馬那","","Kaimana","印度尼西亚","SEA"],"KNH":["金门县","金门县","","Shang-I","中国台湾","HMT"],"KNO":["棉兰","棉兰","","Beringin","印度尼西亚","SEA","",1],"KNQ":["科内","科内","","Koné","新喀里多尼亚","OC"],"KNS":["柯里","柯里","","","澳大利亚","OC"],"KNU":["坎普尔","坎普尔","","Kanpur","印度","SA"],"KNX":["库努纳拉","库努纳拉","","Kununurra","澳大利亚","OC"],"KOA":["凯卢阿","凯卢阿","","Kailua-Kona","美国","OC","",1],"KOE":["古邦","古邦","","Kupang","印度尼西亚","SEA"],"KOI":["梅恩兰岛","梅恩兰岛","","Kirkwall, Orkney Islands","英国","EU"],"KOJ":["鹿兒島","鹿兒島","","Kagoshima","日本","EA","",1],"KOK":["雅各布斯塔德","雅各布斯塔德","","Kokkola / Kruunupyy","芬兰","EU"],"KOP":["那空拍儂","","","Nakhon Phanom","泰国","SEA"],"KOS":["西哈努克","西哈努克","","Preah Sihanouk","柬埔寨","SEA","",1],"KOV":["科克舍套","科克舍套","","Kokshetau","哈萨克斯坦","CA","",1],"KPO":["浦项","浦项","","Pohang","韩国","EA"],"KPW":["克佩爾韋耶姆","克佩爾韋耶姆","","Keperveem","俄罗斯","EU"],"KQH":["阿杰梅尔","阿杰梅尔","","Ajmer (Kishangarh)","印度","SA"],"KQT":["博赫塔尔","博赫塔尔","","Bokhtar","塔吉克斯坦","CA","",1],"KRF":["克拉姆福什","克拉姆福什","","Nyland","瑞典","EU"],"KRK":["克拉科夫","克拉科夫","","Balice","波兰","EU","",1],"KRL":["库尔勒","库尔勒","","Korla","中国","CN"],"KRN":["基律纳","基律纳","","Kiruna","瑞典","EU","",1],"KRO":["库尔干","库尔干","","Kurgan","俄罗斯","EU"],"KRP":["中日德兰","","","Karup","丹麦","EU"],"KRR":["索契克拉斯诺达尔","索契","","Krasnodar","俄罗斯","EU","Q39420",1],"KRS":["克里斯蒂安桑","克里斯蒂安桑","","Kristiansand(Kjevik)","挪威","EU","",1],"KRT":["喀土穆","喀土穆","","Khartoum","苏丹","AF","",1],"KRW":["土库曼巴希","土库曼巴希","","Turkmenbaşy","土库曼斯坦","CA"],"KSA":["科斯雷","","","Okat","密克罗尼西亚联邦","OC","",1],"KSC":["科希策","科希策","","Košice","斯洛伐克","EU"],"KSD":["卡尔斯塔德市镇","卡尔斯塔德市镇","","Karlstad","瑞典","EU"],"KSF":["卡塞尔","卡塞尔","","Calden","德国","EU","",1],"KSH":["克尔曼沙阿","克尔曼沙阿","","Kermanshah","伊朗","ME"],"KSL":["卡薩拉","卡薩拉","","Kassala","苏丹","AF"],"KSN":["库斯塔奈","库斯塔奈","","Kostanay","哈萨克斯坦","CA","",1],"KSU":["克里斯蒂安松","克里斯蒂安松","","Kvernberget","挪威","EU"],"KSY":["卡尔斯","卡尔斯","","Kars","土耳其","EU"],"KSZ":["科特拉斯","科特拉斯","","Kotlas","俄罗斯","EU"],"KTA":["卡拉萨 (西澳洲)","卡拉萨 (西澳洲)","","Karratha","澳大利亚","OC"],"KTD":["北大东","","","Kitadaitōjima","日本","EA"],"KTG":["吉打邦（頭彭）","吉打邦（頭彭）","","Ketapang","印度尼西亚","SEA"],"KTI":["德崇","","","Phnom Penh (Boeng Khyang)","柬埔寨","SEA","",1],"KTM":["加德满都特里布万","加德满都","","Kathmandu","尼泊尔","SA","Q3037",1],"KTN":["凯奇坎","凯奇坎","","Ketchikan","美国","NA"],"KTP":["金斯敦","金斯敦","","Tinson Pen","牙买加","NA","Q34692"],"KTT":["基蒂莱","基蒂莱","","Kittilä","芬兰","EU","",1],"KTW":["卡托维兹","卡托维兹","","Katowice","波兰","EU","",1],"KUA":["关丹县","关丹县","","Kuantan","马来西亚","SEA"],"KUF":["萨马拉","萨马拉","","Samara","俄罗斯","EU","",1],"KUH":["钏路","钏路","","Kushiro","日本","EA"],"KUL":["吉隆坡","吉隆坡","","Sepang","马来西亚","SEA","",1],"KUM":["屋久岛","屋久岛","","Yakushima","日本","EA"],"KUN":["考纳斯","考纳斯","","Kaunas","立陶宛","EU","",1],"KUO":["库奥皮奥","库奥皮奥","","Kuopio / Siilinjärvi","芬兰","EU","",1],"KUS":["庫盧蘇克","庫盧蘇克","","Kulusuk","格陵兰","NA"],"KUT":["库塔伊西","库塔伊西","","Kopitnari","格鲁吉亚","CA","",1],"KUU":["古卢","古卢","","Bhuntar","印度","SA"],"KUV":["群山","群山","","Gunsan","韩国","EA"],"KVA":["卡瓦拉","卡瓦拉","","Kavala","希腊","EU","",1],"KVG":["Kavieng","","","Kavieng","巴布亚新几内亚","OC"],"KVO":["克拉列沃","克拉列沃","","Kraljevo","塞尔维亚","EU"],"KVX":["基洛夫","基洛夫","","Kirov","俄罗斯","EU"],"KWA":["布裘兹空军基地","","","Kwajalein","马绍尔群岛","OC"],"KWE":["贵阳","贵阳","","Guiyang (Nanming)","中国","CN","",1],"KWI":["科威特","科威特城","","Kuwait City","科威特","ME","",1],"KWJ":["光州","光州","","Gwangju","韩国","EA","Q41283"],"KWL":["桂林","桂林","","Guilin (Lingui)","中国","CN","",1],"KWM":["Kowanyama","","","Kowanyama","澳大利亚","OC"],"KWZ":["科卢韦齐","科卢韦齐","","Kolwezi","刚果民主共和国","AF"],"KXB":["Kolaka","","","Kolaka","印度尼西亚","SEA"],"KXK":["阿穆尔河畔共青城","阿穆尔河畔共青城","","Komsomolsk-on-Amur","俄罗斯","EU"],"KYA":["科尼亚","科尼亚","","Konya","土耳其","EU","",1],"KYD":["兰屿","兰屿","","Orchid Island","中国台湾","HMT"],"KYP":["皎漂","","","Kyaukpyu","缅甸","SEA"],"KYS":["卡伊","卡伊","","Kayes","马里","AF"],"KYZ":["克孜勒","克孜勒","","Kyzyl","俄罗斯","EU"],"KZI":["科扎尼","科扎尼","","Kozani","希腊","EU"],"KZN":["喀山","喀山","","Kazan","俄罗斯","EU","",1],"KZO":["克孜勒奥尔达","克孜勒奥尔达","","Kyzylorda","哈萨克斯坦","CA","",1],"KZR":["屈塔希亚","屈塔希亚","","Altıntaş","土耳其","EU"],"LAE":["莱城","","","Lae","巴布亚新几内亚","OC","",1],"LAF":["拉斐特","拉斐特","","West Lafayette","美国","NA"],"LAJ":["拉热斯","拉热斯","","Lages","巴西","LA"],"LAL":["莱克兰","莱克兰","","Lakeland","美国","NA"],"LAN":["兰辛","兰辛","","Lansing","美国","NA"],"LAO":["拉瓦格","拉瓦格","","Laoag City","菲律宾","SEA","",1],"LAP":["拉巴斯","拉巴斯","","La Paz","墨西哥","NA"],"LAQ":["贝达","贝达","","Al Albraq","利比亚","AF","",1],"LAR":["拉勒米","拉勒米","","Laramie","美国","NA"],"LAS":["拉斯维加斯","拉斯维加斯","","Las Vegas","美国","NA","",1],"LAU":["拉穆镇","拉穆镇","","Lamu","肯尼亚","AF"],"LAW":["劳顿","劳顿","","Lawton","美国","NA"],"LAX":["洛杉矶","洛杉矶","","Los Angeles","美国","NA","",1],"LBA":["利兹","利兹","","Leeds, West Yorkshire","英国","EU","",1],"LBB":["拉伯克","拉伯克","","Lubbock","美国","NA"],"LBC":["吕贝克","吕贝克","","Lübeck","德国","EU"],"LBD":["苦盏","苦盏","","Khujand","塔吉克斯坦","CA","",1],"LBE":["拉特罗布","拉特罗布","","Latrobe","美国","NA"],"LBF":["北普拉特","北普拉特","","North Platte","美国","NA"],"LBL":["利伯勒尔","利伯勒尔","","Liberal","美国","NA"],"LBS":["兰巴萨","兰巴萨","","Labasa","斐济","OC"],"LBU":["纳闽国会议席","纳闽国会议席","","Labuan","马来西亚","SEA"],"LBV":["利伯维尔","利伯维尔","","Libreville","加蓬","AF","",1],"LCA":["拉纳卡","拉纳卡","","Larnaca","塞浦路斯","EU","",1],"LCE":["拉塞瓦","拉塞瓦","","La Ceiba","洪都拉斯","NA"],"LCG":["拉科鲁尼亚","拉科鲁尼亚","","Culleredo","西班牙","EU"],"LCH":["莱克查尔斯","莱克查尔斯","","Lake Charles","美国","NA"],"LCJ":["罗兹","罗兹","","Łódź","波兰","EU","",1],"LCK":["哥伦布里肯巴克","哥伦布","","Columbus","美国","NA","Q16567"],"LCX":["连城县","连城县","","Longyan (Liancheng)","中国","CN"],"LCY":["伦敦倫敦城市","伦敦","","London","英国","EU","Q84"],"LDB":["隆德里纳","隆德里纳","","Londrina","巴西","LA"],"LDE":["塔布","塔布","","Tarbes/Lourdes/Pyrénées","法国","EU"],"LDS":["伊春","伊春","","Yichun","中国","CN"],"LDU":["拿笃","","","Lahad Datu","马来西亚","SEA"],"LDX":["马罗尼河畔圣洛朗","马罗尼河畔圣洛朗","","Saint-Laurent-du-Maroni","法属圭亚那","LA"],"LDY":["德里","德里","","Derry, Derry and Strabane","英国","EU"],"LEA":["埃斯茅斯","埃斯茅斯","","Exmouth","澳大利亚","OC"],"LEB":["莱巴嫩","莱巴嫩","","Lebanon","美国","NA"],"LED":["圣彼得堡","圣彼得堡","","St. Petersburg","俄罗斯","EU","",1],"LEI":["阿尔梅里亚","阿尔梅里亚","","Almería","西班牙","EU"],"LEJ":["萨勒河畔哈雷","萨勒河畔哈雷","","Schkeuditz","德国","EU","",1],"LEN":["莱昂","莱昂","","La Virgen del Camino","西班牙","EU"],"LER":["Leinster Airport","","","","澳大利亚","OC"],"LET":["莱蒂西亚","莱蒂西亚","","Leticia","哥伦比亚","LA"],"LEU":["安道尔","安道尔","","La Seu d'Urgell Pyrenees and Andorra","西班牙","EU"],"LEX":["列克星敦","列克星敦","","Lexington","美国","NA"],"LFM":["拉默爾德","拉默爾德","","Lamerd","伊朗","ME"],"LFQ":["临汾","临汾","","Linfen (Yaodu)","中国","CN"],"LFT":["拉法叶","拉法叶","","Lafayette","美国","NA"],"LFW":["洛美","洛美","","Lomé","多哥","AF","",1],"LGA":["纽约拉瓜迪亚","纽约","","New York","美国","NA","Q60",1],"LGB":["长滩","长滩","","Long Beach","美国","NA","",1],"LGG":["列日","列日","","Grâce-Hollogne","比利时","EU"],"LGI":["长岛亡者礁","长岛","","Deadman's Cay","巴哈马","NA","Q890879"],"LGK":["浮罗交怡国会议席","浮罗交怡国会议席","","Langkawi","马来西亚","SEA","",1],"LGW":["伦敦盖特威克","伦敦","","London","英国","EU","Q84",1],"LHE":["拉合尔","拉合尔","","Lahore","巴基斯坦","SA","",1],"LHG":["Lightning Ridge Airport","","","","澳大利亚","OC","AU:"],"LHL":["拉欽","","","Lachin","阿塞拜疆","CA"],"LHR":["伦敦希思罗","伦敦","","London","英国","EU","Q84",1],"LHS":["科洛尼亞拉斯赫拉斯","","","Las Heras","阿根廷","LA"],"LHW":["兰州","兰州","","Lanzhou (Yongdeng)","中国","CN","",1],"LIF":["利富","利富","","Lifou","新喀里多尼亚","OC"],"LIG":["利摩日","利摩日","","Limoges/Bellegarde","法国","EU"],"LIH":["利胡埃","利胡埃","","Lihue, Kauai","美国","OC","",1],"LIL":["里尔","里尔","","Lesquin","法国","EU","",1],"LIM":["利马","利马","","Lima","秘鲁","LA","",1],"LIN":["米兰","米兰","","Segrate (MI)","意大利","EU","",1],"LIO":["利蒙","利蒙","","Limón","哥斯达黎加","NA"],"LIR":["利韦里亚","利韦里亚","","Liberia","哥斯达黎加","NA","",1],"LIS":["里斯本","里斯本","","Lisbon","葡萄牙","EU","",1],"LIT":["小石城","小石城","","Little Rock","美国","NA"],"LIW":["壘固","","","Loikaw","缅甸","SEA"],"LJG":["丽江","丽江","","Lijiang","中国","CN","",1],"LJU":["卢布尔雅那","卢布尔雅那","","Zgornji Brnik","斯洛文尼亚","EU","",1],"LKL":["拉克塞爾夫","拉克塞爾夫","","Lakselv","挪威","EU"],"LKN":["莱克内斯","莱克内斯","","Leknes","挪威","EU"],"LKO":["勒克瑙","勒克瑙","","Lucknow","印度","SA","",1],"LLA":["吕勒奥","吕勒奥","","Luleå","瑞典","EU","",1],"LLF":["零陵区","零陵区","","Yongzhou","中国","CN"],"LLV":["吕梁","吕梁","","Lüliang","中国","CN"],"LLW":["利隆圭","利隆圭","","Lumbadzi","马拉维","AF","",1],"LMM":["洛斯莫奇斯","洛斯莫奇斯","","Los Mochis","墨西哥","NA"],"LMN":["林梦国会议席","林梦国会议席","","Limbang","马来西亚","SEA"],"LMP":["兰佩杜萨岛","兰佩杜萨岛","","Lampedusa","意大利","EU"],"LNJ":["临沧","临沧","","Lincang","中国","CN"],"LNK":["林肯","林肯","","Lincoln","美国","NA"],"LNL":["陇南","陇南","","Longnan (Cheng)","中国","CN"],"LNO":["Leonora","","","Leonora","澳大利亚","OC"],"LNS":["兰开斯特","兰开斯特","","Lancaster","美国","NA"],"LNY":["拉奈城","拉奈城","","Lanai City","美国","OC"],"LNZ":["林茨","林茨","","Linz","奥地利","EU","",1],"LOE":["黎市","","","","泰国","SEA","TH:"],"LOO":["艾格瓦特","艾格瓦特","","Laghouat","阿尔及利亚","AF"],"LOP":["馬塔蘭","馬塔蘭","","Mataram (Pujut, Lombok Tengah)","印度尼西亚","SEA","",1],"LOS":["伊凯贾","伊凯贾","","Lagos","尼日利亚","AF","",1],"LPA":["拉斯帕尔马斯","拉斯帕尔马斯","","Gran Canaria Island","西班牙","AF","",1],"LPB":["拉巴斯","拉巴斯","","La Paz / El Alto","玻利维亚","LA","",1],"LPF":["六盘水","六盘水","","Liupanshui (Zhongshan)","中国","CN"],"LPI":["林雪平","林雪平","","Linköping","瑞典","EU","",1],"LPL":["利物浦","利物浦","","Liverpool","英国","EU","",1],"LPP":["拉彭兰塔","拉彭兰塔","","Lappeenranta","芬兰","EU","",1],"LPQ":["琅勃拉邦","琅勃拉邦","","Luang Phabang","老挝","SEA","",1],"LPT":["林邦","","","","泰国","SEA"],"LRD":["拉雷多","拉雷多","","Laredo","美国","NA"],"LRE":["朗芮区政府","朗芮区政府","","Longreach","澳大利亚","OC"],"LRH":["拉罗谢尔","拉罗谢尔","","La Rochelle","法国","EU"],"LRM":["拉罗马纳","拉罗马纳","","La Romana","多米尼加","NA","",1],"LRR":["拉尔","拉尔","","Lar","伊朗","ME"],"LRU":["拉斯克鲁塞斯","拉斯克鲁塞斯","","Las Cruces","美国","NA"],"LSC":["拉塞雷纳","拉塞雷纳","","La Serena-Coquimbo","智利","LA"],"LSE":["拉克罗斯","拉克罗斯","","La Crosse","美国","NA"],"LSG":["Leshan (Wutongqiao)","","","Leshan (Wutongqiao)","中国","CN"],"LSH":["臘戍","","","Lashio","缅甸","SEA"],"LSI":["设得兰","设得兰","","Lerwick, Shetland","英国","EU"],"LSP":["蓬托菲霍","蓬托菲霍","","Paraguaná","委内瑞拉","LA"],"LSR":["東南亞齊縣","東南亞齊縣","","Kutacane","印度尼西亚","SEA"],"LST":["朗塞斯顿","朗塞斯顿","","Launceston (Western Junction)","澳大利亚","OC"],"LSY":["利斯莫尔","利斯莫尔","","Lismore","澳大利亚","OC"],"LTD":["Ghadames","","","Ghadames","利比亚","AF"],"LTI":["阿爾泰","阿爾泰","","Altai","蒙古国","EA"],"LTK":["拉塔基亚","拉塔基亚","","Latakia","叙利亚","ME"],"LTM":["莱瑟姆","莱瑟姆","","Lethem","圭亚那","LA"],"LTN":["伦敦卢顿","伦敦","","Luton, Luton","英国","EU","Q84",1],"LTO":["洛雷托","洛雷托","","Loreto","墨西哥","NA","",1],"LTU":["拉杜尔","拉杜尔","","Latur","印度","SA"],"LTX":["拉塔昆加","拉塔昆加","","Latacunga","厄瓜多尔","LA"],"LUA":["卢克拉","卢克拉","","Lukla","尼泊尔","SA"],"LUD":["吕德里茨","吕德里茨","","Luderitz","纳米比亚","AF"],"LUG":["卢加诺","卢加诺","","Agno","瑞士","EU"],"LUK":["辛辛那提","辛辛那提","","Cincinnati","美国","NA","Q43196"],"LUM":["德宏傣族景颇族自治州","德宏傣族景颇族自治州","","Dehong (Mangshi)","中国","CN"],"LUN":["卢萨卡","卢萨卡","","Lusaka","赞比亚","AF","",1],"LUQ":["圣路易斯","圣路易斯","","San Luis","阿根廷","LA"],"LUR":["Cape Lisburne","","","Cape Lisburne","美国","NA"],"LUV":["杜马图本","","","Langgur","印度尼西亚","SEA"],"LUX":["卢森堡","卢森堡","","Luxembourg","卢森堡","EU","",1],"LUZ":["卢布林","卢布林","","Lublin","波兰","EU","",1],"LVI":["利文斯敦","利文斯敦","","Livingstone","赞比亚","AF","",1],"LWB":["路易斯堡","路易斯堡","","Lewisburg","美国","NA"],"LWN":["久姆里","久姆里","","Gyumri","亚美尼亚","CA","",1],"LWS":["刘易斯顿","刘易斯顿","","Lewiston","美国","NA"],"LXA":["拉萨","拉萨","","Shannan (Gonggar)","中国","CN","",1],"LXR":["卢克索","卢克索","","Luxor","埃及","AF","",1],"LYA":["洛阳","洛阳","","Luoyang (Laocheng)","中国","CN","",1],"LYC":["吕克瑟勒","","","Lycksele","瑞典","EU"],"LYG":["连云港","连云港","","Lianyungang","中国","CN","",1],"LYH":["林奇堡","林奇堡","","Lynchburg","美国","NA"],"LYI":["临沂","临沂","","Linyi (Hedong)","中国","CN"],"LYP":["费萨拉巴德","费萨拉巴德","","Faisalabad","巴基斯坦","SA","",1],"LYR":["朗伊尔城","朗伊尔城","","Longyearbyen","挪威","EU"],"LYS":["里昂","里昂","","Colombier-Saugnieu, Rhône","法国","EU","",1],"LZG":["阆中","阆中","","Nanchong (Langzhong)","中国","CN"],"LZH":["柳州","柳州","","Liuzhou (Liujiang)","中国","CN"],"LZN":["南竿乡","南竿乡","","Matsu (Nangan)","中国台湾","HMT"],"LZO":["泸州","泸州","","Luzhou (Yunlong)","中国","CN"],"LZY":["林芝","林芝","","Nyingchi (Mainling)","中国","CN"],"MAA":["清奈大都會區","清奈大都會區","","Chennai","印度","SA","",1],"MAB":["马拉巴","马拉巴","","Marabá","巴西","LA"],"MAD":["马德里","马德里","","Madrid","西班牙","EU","",1],"MAF":["米德蘭","","","Midland","美国","NA"],"MAG":["马当","","","Madang","巴布亚新几内亚","OC"],"MAH":["马翁","马翁","","Mahón (Maó)","西班牙","EU","",1],"MAJ":["马朱罗","马朱罗","","Majuro Atoll","马绍尔群岛","OC","",1],"MAK":["马拉卡勒","马拉卡勒","","Malakal","南苏丹","AF"],"MAM":["马塔莫罗斯","马塔莫罗斯","","Matamoros","墨西哥","NA"],"MAN":["大曼徹斯特郡","大曼徹斯特郡","","Manchester, Greater Manchester","英国","EU","",1],"MAO":["马瑙斯","马瑙斯","","Manaus","巴西","LA","",1],"MAQ":["湄索县","湄索县","","","泰国","SEA"],"MAR":["马拉开波","马拉开波","","Maracaibo","委内瑞拉","LA","",1],"MAS":["莫莫特","","","Manus Island","巴布亚新几内亚","OC"],"MAU":["莫皮蒂岛","莫皮蒂岛","","","法属波利尼西亚","OC"],"MAZ":["马亚圭斯","马亚圭斯","","Mayaguez","波多黎各","NA"],"MBA":["蒙巴萨","蒙巴萨","","Mombasa","肯尼亚","AF","",1],"MBD":["梅富根","梅富根","","Mafeking","南非","AF"],"MBE":["纹别","纹别","","Monbetsu","日本","EA"],"MBI":["Mbeya","","","Mbeya","坦桑尼亚","AF"],"MBJ":["蒙特哥貝","蒙特哥貝","","Montego Bay","牙买加","NA","",1],"MBS":["米德兰","米德兰","","Freeland","美国","NA"],"MBT":["马斯巴特","马斯巴特","","Masbate","菲律宾","SEA"],"MBW":["墨尔本","墨尔本","","Melbourne","澳大利亚","OC","Q3141"],"MBX":["马里博尔","马里博尔","","Maribor","斯洛文尼亚","EU"],"MCE":["美熹德","美熹德","","Merced","美国","NA"],"MCG":["麦格拉思","麦格拉思","","McGrath","美国","NA"],"MCI":["堪萨斯城","堪萨斯城","","Kansas City","美国","NA","",1],"MCK":["麥庫克","麥庫克","","McCook","美国","NA"],"MCN":["梅肯","梅肯","","Macon","美国","NA"],"MCO":["奥兰多","奥兰多","","Orlando","美国","NA","",1],"MCP":["马卡帕","马卡帕","","Macapá","巴西","LA"],"MCT":["马斯喀特","马斯喀特","","Muscat/Seeb","阿曼","ME","",1],"MCW":["梅森城","梅森城","","Mason City","美国","NA"],"MCX":["马哈奇卡拉","马哈奇卡拉","","Makhachkala","俄罗斯","EU","",1],"MCY":["阳光海岸","阳光海岸","","Maroochydore","澳大利亚","OC","",1],"MCZ":["马塞约","马塞约","","Maceió","巴西","LA","",1],"MDC":["万鸦老","万鸦老","","Manado","印度尼西亚","SEA","",1],"MDE":["麦德林何塞·玛丽亚·科尔多瓦","麦德林","","Medellín","哥伦比亚","LA","Q48278",1],"MDG":["牡丹江","牡丹江","","Mudanjiang","中国","CN"],"MDI":["马库尔迪","马库尔迪","","Makurdi","尼日利亚","AF"],"MDK":["姆班达卡","姆班达卡","","Mbandaka","刚果民主共和国","AF"],"MDL":["曼德勒","曼德勒","","Mandalay","缅甸","SEA","",1],"MDQ":["马德普拉塔","马德普拉塔","","Mar del Plata","阿根廷","LA"],"MDT":["哈里斯堡","哈里斯堡","","Harrisburg","美国","NA"],"MDU":["Mendi","","","Mendi","巴布亚新几内亚","OC"],"MDW":["西芝加哥 (伊利諾伊州)","西芝加哥 (伊利諾伊州)","","Chicago","美国","NA","",1],"MDZ":["门多萨","门多萨","","Mendoza","阿根廷","LA","",1],"MEB":["墨尔本埃森登","墨尔本","","Essendon Fields","澳大利亚","OC","Q3141"],"MEC":["曼塔","曼塔","","Manta","厄瓜多尔","LA"],"MED":["麦地那","麦地那","","Medina","沙特阿拉伯","ME","",1],"MEE":["马雷岛","马雷岛","","Maré","新喀里多尼亚","OC"],"MEG":["Malanje","","","Malanje","安哥拉","AF"],"MEH":["加姆维克","加姆维克","","Mehamn","挪威","EU"],"MEI":["默里迪恩","默里迪恩","","Meridian","美国","NA"],"MEL":["墨尔本","墨尔本","","Melbourne","澳大利亚","OC","Q3141",1],"MEM":["孟菲斯","孟菲斯","","Memphis","美国","NA","",1],"MEQ":["朱月婷","","","Kuala Pesisir","印度尼西亚","SEA"],"MEX":["墨西哥城","墨西哥城","","Mexico City","墨西哥","NA","",1],"MFE":["麦卡伦","麦卡伦","","McAllen","美国","NA"],"MFK":["北竿乡","北竿乡","","Matsu (Beigan)","中国台湾","HMT"],"MFM":["澳门","澳门","","Nossa Senhora do Carmo","中国澳门","HMT","",1],"MFR":["梅德福","梅德福","","Medford","美国","NA"],"MFU":["姆富韋","姆富韋","","Mfuwe","赞比亚","AF","",1],"MGA":["马那瓜","马那瓜","","Managua","尼加拉瓜","NA","",1],"MGB":["石灰岩海岸","石灰岩海岸","","Mount Gambier","澳大利亚","OC"],"MGC":["密西根市 (印地安納州)","密西根市 (印地安納州)","","Michigan City","美国","NA"],"MGF":["马林加","马林加","","Maringá","巴西","LA"],"MGH":["马盖特（夸祖鲁-纳塔尔）","马盖特（夸祖鲁-纳塔尔）","","Margate","南非","AF"],"MGM":["蒙哥马利","蒙哥马利","","Montgomery","美国","NA"],"MGQ":["摩加迪休","摩加迪休","","Mogadishu","索马里","AF","",1],"MGW":["摩根敦","摩根敦","","Morgantown","美国","NA"],"MGZ":["丹老","丹老","","Mkeik","缅甸","SEA"],"MHD":["马什哈德","马什哈德","","Mashhad","伊朗","ME","",1],"MHG":["曼海姆","曼海姆","","Mannheim","德国","EU"],"MHH":["沼泽港","沼泽港","","Marsh Harbour","巴哈马","NA"],"MHK":["曼哈顿","曼哈顿","","Manhattan","美国","NA"],"MHQ":["玛丽港","玛丽港","","Mariehamn","芬兰","EU"],"MHT":["曼彻斯特","曼彻斯特","","Manchester","美国","NA"],"MHU":["Mount Hotham","","","Mount Hotham","澳大利亚","OC"],"MIA":["迈阿密","迈阿密","","Miami","美国","NA","Q8652",1],"MID":["梅里达","梅里达","","Mérida","墨西哥","NA","",1],"MIG":["绵阳","绵阳","","Mianyang (Fucheng)","中国","CN"],"MII":["马里利亚","马里利亚","","Marília","巴西","LA"],"MIM":["梅林布拉","梅林布拉","","Merimbula","澳大利亚","OC"],"MIR":["莫纳斯提尔","莫纳斯提尔","","Monastir","突尼斯","AF"],"MIU":["迈杜古里","迈杜古里","","Maiduguri","尼日利亚","AF","",1],"MJF":["莫舍恩","莫舍恩","","Mosjøen","挪威","EU"],"MJI":["的黎波里-米提加","","","Tripoli","利比亚","AF","",1],"MJK":["Denham","","","Denham","澳大利亚","OC"],"MJM":["姆布吉马伊","姆布吉马伊","","Mbuji Mayi","刚果民主共和国","AF"],"MJN":["马哈赞加","马哈赞加","","Mahajanga","马达加斯加","AF","",1],"MJT":["米蒂利尼","米蒂利尼","","Mytilene","希腊","EU"],"MJZ":["米尔内","米尔内","","Mirny","俄罗斯","EU"],"MKE":["密尔沃基","密尔沃基","","Milwaukee","美国","NA","",1],"MKG":["馬斯基根","馬斯基根","","Muskegon","美国","NA"],"MKK":["科納卡凱","科納卡凱","","Kaunakakai","美国","OC"],"MKL":["杰克逊","杰克逊","","Jackson","美国","NA"],"MKM":["沐胶省","沐胶省","","Mukah","马来西亚","SEA"],"MKP":["马凯莫","","","Makemo","法属波利尼西亚","OC"],"MKQ":["馬老奇","馬老奇","","Merauke","印度尼西亚","SEA"],"MKR":["Meekatharra Airport","","","","澳大利亚","OC","AU:"],"MKU":["Makokou","","","Makokou","加蓬","AF"],"MKW":["马诺夸里","马诺夸里","","Manokwari","印度尼西亚","SEA"],"MKY":["麦凯","麦凯","","Mackay","澳大利亚","OC"],"MKZ":["马六甲","马六甲","","Malacca","马来西亚","SEA"],"MLA":["瓦莱塔","瓦莱塔","","Valletta","马耳他","EU","",1],"MLB":["墨尔本","墨尔本","","Melbourne","美国","NA"],"MLE":["马累","马累","","Malé","马尔代夫","SA","",1],"MLG":["玛琅","玛琅","","Malang","印度尼西亚","SEA"],"MLI":["莫林","莫林","","Moline","美国","NA"],"MLM":["莫雷利亚","莫雷利亚","","Morelia","墨西哥","NA","",1],"MLN":["梅利利亚","梅利利亚","","Melilla","西班牙","AF"],"MLU":["门罗","门罗","","Monroe","美国","NA"],"MLW":["蒙罗维亚","蒙罗维亚","","Monrovia","利比里亚","AF","Q3748"],"MLX":["马拉蒂亚","马拉蒂亚","","Malatya","土耳其","EU"],"MMB":["大空町","大空町","","Ōzora","日本","EA"],"MMD":["南大东","","","Minamidaito","日本","EA"],"MME":["东北英格兰","东北英格兰","","Darlington, Durham","英国","EU"],"MMG":["Mount Magnet Airport","","","","澳大利亚","OC","AU:"],"MMH":["马麦斯湖","马麦斯湖","","Mammoth Lakes","美国","NA"],"MMJ":["松本","松本","","Matsumoto","日本","EA"],"MMK":["摩尔曼斯克","摩尔曼斯克","","Murmansk","俄罗斯","EU","",1],"MMO":["马尤城","马尤城","","Vila do Maio","佛得角","AF"],"MMX":["马尔默","马尔默","","Malmö","瑞典","EU","",1],"MMY":["宫古岛","宫古岛","","Miyakojima","日本","EA"],"MNC":["纳卡拉","纳卡拉","","Nacala","莫桑比克","AF"],"MNG":["马宁格里达","马宁格里达","","Maningrida","澳大利亚","OC"],"MNI":["普利茅斯","普利茅斯","","Gerald's Park","蒙特塞拉特","NA","",1],"MNJ":["马南扎里","马南扎里","","Mananjary","马达加斯加","AF"],"MNL":["马尼拉","马尼拉大都会","","Manila (Pasay)","菲律宾","SEA","",1],"MNX":["马尼科雷","马尼科雷","","Manicoré","巴西","LA"],"MOB":["莫比尔","莫比尔","","Mobile","美国","NA"],"MOC":["蒙蒂斯克拉鲁斯","蒙蒂斯克拉鲁斯","","Montes Claros","巴西","LA"],"MOG":["孟萨","孟萨","","Mong Hsat","缅甸","SEA"],"MOL":["莫尔德","莫尔德","","Årø","挪威","EU"],"MOQ":["穆龙达瓦","穆龙达瓦","","Morondava","马达加斯加","AF"],"MOT":["迈诺特","迈诺特","","Minot","美国","NA"],"MOV":["莫兰巴","莫兰巴","","Moranbah","澳大利亚","OC"],"MOZ":["摩丽雅岛","摩丽雅岛","","Moorea-Maiao","法属波利尼西亚","OC"],"MPA":["卡蒂马穆利洛","卡蒂马穆利洛","","Mpacha","纳米比亚","AF"],"MPH":["长滩","长滩","","Caticlan","菲律宾","SEA"],"MPL":["蒙彼利埃","蒙彼利埃","","Montpellier/Méditerranée","法国","EU","",1],"MPM":["马普托","马普托","","Maputo","莫桑比克","AF","",1],"MPN":["快活岭空军基地","","","Mount Pleasant","福克兰群岛","LA"],"MPY":["马里帕苏拉","马里帕苏拉","","Maripasoula","法属圭亚那","LA"],"MQF":["马格尼托哥尔斯克","马格尼托哥尔斯克","","Magnitogorsk","俄罗斯","EU","",1],"MQJ":["Khonuu","","","Khonuu","俄罗斯","EU"],"MQL":["米尔杜拉","米尔杜拉","","Mildura","澳大利亚","OC"],"MQM":["马尔丁","马尔丁","","Mardin","土耳其","EU"],"MQN":["摩城","摩城","","Mo i Rana","挪威","EU"],"MQP":["内尔斯普雷特","内尔斯普雷特","","Mbombela","南非","AF","",1],"MQS":["Lovell","","","Lovell","圣文森特和格林纳丁斯","NA"],"MQT":["马凯特","马凯特","","Gwinn","美国","NA"],"MQX":["默格莱","默格莱","","Mekele","埃塞俄比亚","AF"],"MRE":["马赛马拉","马赛马拉","","Serena","肯尼亚","AF"],"MRI":["安克雷奇","安克雷奇","","Anchorage","美国","NA","Q39450"],"MRS":["马赛","马赛","","Marignane, Bouches-du-Rhône","法国","EU","",1],"MRU":["马尼安平原","马尼安平原","","Plaine Magnien","毛里求斯","AF","",1],"MRV":["矿水城","矿水城","","Mineralnyye Vody","俄罗斯","EU","",1],"MRX":["马赫沙赫尔港","马赫沙赫尔港","","Mahshahr","伊朗","ME"],"MRY":["蒙特雷","蒙特雷","","Monterey","美国","NA"],"MRZ":["冰碛","冰碛","","Moree","澳大利亚","OC"],"MSJ":["三泽","三泽","","Misawa","日本","EA"],"MSL":["马斯尔肖尔斯","马斯尔肖尔斯","","Muscle Shoals","美国","NA"],"MSN":["麦迪逊","麦迪逊","","Madison","美国","NA"],"MSO":["米苏拉","米苏拉","","Missoula","美国","NA"],"MSP":["明尼阿波利斯","明尼阿波利斯","","Minneapolis","美国","NA","",1],"MSQ":["明斯克","明斯克","","Minsk","白俄罗斯","EU","",1],"MSR":["穆什","穆什","","Muş","土耳其","EU"],"MSS":["馬塞納 (紐約州村)","馬塞納 (紐約州村)","","Massena","美国","NA"],"MST":["马斯特里赫特","马斯特里赫特","","Maastricht","荷兰王国","EU","",1],"MSU":["马塞卢","马塞卢","","Maseru(Mazenod)","莱索托","AF","",1],"MSY":["新奥尔良","新奥尔良","","New Orleans","美国","NA","",1],"MSZ":["木萨米迪什","木萨米迪什","","Moçâmedes","安哥拉","AF"],"MTJ":["蒙特罗斯","蒙特罗斯","","Montrose","美国","NA"],"MTR":["蒙特里亚","蒙特里亚","","Montería","哥伦比亚","LA"],"MTT":["米纳蒂特兰","米纳蒂特兰","","Cosoleacaque","墨西哥","NA"],"MTY":["蒙特雷","蒙特雷","","Monterrey","墨西哥","NA","",1],"MUA":["蒙达","","","Munda","所罗门群岛","OC"],"MUB":["马翁","马翁","","Maun","博茨瓦纳","AF","",1],"MUC":["慕尼黑","慕尼黑","","Munich","德国","EU","",1],"MUE":["怀梅阿","怀梅阿","","Waimea (Kamuela)","美国","OC"],"MUH":["马特鲁港","马特鲁港","","Marsa Matruh","埃及","AF","",1],"MUN":["马图林","马图林","","Maturín","委内瑞拉","LA"],"MUR":["马鲁帝","马鲁帝","","Marudi","马来西亚","SEA"],"MUX":["木尔坦","木尔坦","","Multan","巴基斯坦","SA","",1],"MVB":["弗朗斯维尔","弗朗斯维尔","","Franceville","加蓬","AF"],"MVD":["蒙得维的亚","蒙得维的亚","","Ciudad de la Costa","乌拉圭","LA","",1],"MVF":["莫索罗","莫索罗","","Mossoró","巴西","LA"],"MVP":["米图","米图","","Mitú","哥伦比亚","LA"],"MVQ":["莫吉廖夫州","莫吉廖夫州","","Mogilev","白俄罗斯","EU"],"MVR":["马鲁阿","马鲁阿","","Maroua","喀麦隆","AF"],"MVT":["马塔伊瓦环礁","马塔伊瓦环礁","","","法属波利尼西亚","OC"],"MWA":["馬里昂 (伊利諾伊州)","馬里昂 (伊利諾伊州)","","Marion","美国","NA"],"MWL":["矿泉井城","矿泉井城","","Mineral Wells","美国","NA"],"MWX":["光州务安","光州","","Muan (Piseo-ri)","韩国","EA","Q41283",1],"MWZ":["姆万扎","姆万扎","","Mwanza","坦桑尼亚","AF","",1],"MXL":["墨西卡利","墨西卡利","","Mexicali","墨西哥","NA"],"MXP":["伦巴第","伦巴第","","Ferno (VA)","意大利","EU","",1],"MXV":["木伦","木伦","","Mörön","蒙古国","EA"],"MXX":["穆拉","穆拉","","Mora","瑞典","EU"],"MYA":["莫鲁亚","莫鲁亚","","Moruya","澳大利亚","OC"],"MYD":["马林迪","马林迪","","Malindi","肯尼亚","AF"],"MYE":["三宅岛","三宅岛","","Miyakejima","日本","EA"],"MYG":["Abraham Bay Settlement","","","Abraham Bay Settlement","巴哈马","NA"],"MYJ":["松山","松山","","Matsuyama","日本","EA","",1],"MYL":["麦考尔","麦考尔","","McCall","美国","NA"],"MYP":["马雷","马雷","","Mary","土库曼斯坦","CA"],"MYQ":["迈索尔","迈索尔","","Mysore","印度","SA"],"MYR":["默特尔比奇","默特尔比奇","","Myrtle Beach","美国","NA","",1],"MYT":["密支那","密支那","","Myitkyina","缅甸","SEA"],"MYU":["梅科尤克","梅科尤克","","Mekoryuk","美国","NA"],"MYW":["姆特瓦拉","姆特瓦拉","","Mtwara","坦桑尼亚","AF"],"MYY":["美里","美里","","Miri","马来西亚","SEA"],"MZG":["澎湖县","澎湖县","","Huxi","中国台湾","HMT","",1],"MZH":["阿马西亚","阿马西亚","","Amasya","土耳其","EU"],"MZI":["莫普提","莫普提","","Sévaré","马里","AF"],"MZL":["马尼萨莱斯","马尼萨莱斯","","Manizales","哥伦比亚","LA"],"MZO":["曼萨尼约","曼萨尼约","","Manzanillo","古巴","NA"],"MZQ":["Mkuze","","","Mkuze","南非","AF"],"MZR":["马扎里沙里夫","马扎里沙里夫","","Mazar-i-Sharif","阿富汗","SA","",1],"MZS":["Moradabad","","","Moradabad","印度","SA"],"MZT":["马萨特兰","马萨特兰","","Mazatlàn","墨西哥","NA","",1],"MZV":["姆禄山国家公园","姆禄山国家公园","","Mulu","马来西亚","SEA"],"MZW":["麥克里亞","麥克里亞","","Mecheria","阿尔及利亚","AF"],"NAA":["纳拉布赖","纳拉布赖","","Narrabri","澳大利亚","OC"],"NAG":["那格浦尔","那格浦尔","","Nagpur","印度","SA","",1],"NAH":["纳哈","","","Tabukan Utara, Sangihe Islands","印度尼西亚","SEA"],"NAJ":["纳希切万","","","Nakhchivan","阿塞拜疆","CA","",1],"NAL":["纳利奇克","纳利奇克","","Nalchik","俄罗斯","EU"],"NAM":["楠勒阿","","","Namniwel","印度尼西亚","SEA"],"NAN":["楠迪","楠迪","","Nadi","斐济","OC","",1],"NAP":["那不勒斯","那不勒斯","","Napoli","意大利","EU","",1],"NAQ":["卡纳克","卡纳克","","Qaanaaq","格陵兰","NA"],"NAS":["拿骚","拿骚","","Nassau","巴哈马","NA","",1],"NAT":["聖貢薩洛杜阿馬蘭特","聖貢薩洛杜阿馬蘭特","","Natal","巴西","LA","",1],"NAV":["内夫谢希尔","内夫谢希尔","","Nevşehir","土耳其","EU","",1],"NAW":["那拉提瓦","","","","泰国","SEA","TH:"],"NBC":["下卡姆斯克","下卡姆斯克","","Nizhnekamsk","俄罗斯","EU"],"NBE":["恩菲達維爾防線","恩菲達維爾防線","","Enfidha","突尼斯","AF"],"NBJ":["罗安达","罗安达","","Luanda (Ícolo e Bengo)","安哥拉","AF","",1],"NBO":["内罗毕","内罗毕","","Nairobi","肯尼亚","AF","Q3870",1],"NBS":["长白朝鲜族自治县","长白朝鲜族自治县","","Baishan","中国","CN"],"NCA":["新河海軍陸戰隊航空基地","","","North Caicos","特克斯和凯科斯群岛","NA"],"NCE":["尼斯","尼斯","","Nice, Alpes-Maritimes","法国","EU","",1],"NCL":["泰恩河畔纽卡斯尔","泰恩河畔纽卡斯尔","","Newcastle upon Tyne, Tyne and Wear","英国","EU","",1],"NCU":["努库斯","努库斯","","Nukus","乌兹别克斯坦","CA","",1],"NCY":["中阿讷西县","中阿讷西县","","Annecy","法国","EU"],"NDB":["努瓦迪布","努瓦迪布","","Nouadhibou","毛里塔尼亚","AF","",1],"NDC":["楠代德","楠代德","","Nanded","印度","SA"],"NDG":["齐齐哈尔","齐齐哈尔","","Qiqihar","中国","CN","",1],"NDJ":["恩贾梅纳","恩贾梅纳","","N'Djamena","乍得","AF","",1],"NDR":["纳祖尔","纳祖尔","","Al Aaroui","摩洛哥","AF","",1],"NDU":["龙杜","龙杜","","Rundu","纳米比亚","AF"],"NEC":["内科切阿","内科切阿","","Necochea","阿根廷","LA"],"NER":["丘利曼","丘利曼","","Neryungri","俄罗斯","EU"],"NEV":["万斯·艾默里","","","Charlestown","圣基茨和尼维斯","NA"],"NGB":["宁波","宁波","","Ningbo","中国","CN","",1],"NGE":["恩冈代雷","恩冈代雷","","N'Gaoundéré","喀麦隆","AF"],"NGO":["名古屋","名古屋","","Tokoname","日本","EA","",1],"NGQ":["狮泉河镇","狮泉河镇","","Shiquanhe","中国","CN"],"NGS":["长崎","长崎","","Nagasaki","日本","EA","",1],"NHV":["泰奧哈埃","泰奧哈埃","","Nuku Hiva","法属波利尼西亚","OC"],"NIM":["尼亚美","尼亚美","","Niamey","尼日尔","AF","",1],"NJC":["下瓦尔托夫斯克","下瓦尔托夫斯克","","Nizhnevartovsk","俄罗斯","EU","",1],"NJF":["纳杰夫","纳杰夫","","Najaf","伊拉克","ME","",1],"NKC":["努瓦克肖特","努瓦克肖特","","Nouakchott","毛里塔尼亚","AF","",1],"NKG":["南京","南京","","Nanjing","中国","CN","",1],"NKM":["小牧","小牧","","Nagoya","日本","EA"],"NKT":["舍尔纳克省","舍尔纳克省","","Şırnak","土耳其","EU"],"NLA":["恩多拉","恩多拉","","Ndola","赞比亚","AF","",1],"NLD":["新拉雷多","新拉雷多","","Nuevo Laredo","墨西哥","NA"],"NLH":["宁蒗彝族自治县","宁蒗彝族自治县","","Ninglang","中国","CN"],"NLI":["庙街","庙街","","Nikolayevsk-na-Amure Airport","俄罗斯","EU"],"NLK":["诺福克岛","诺福克岛","","Burnt Pine","诺福克岛","OC"],"NLT":["那拉提镇","那拉提镇","","Xinyuan","中国","CN"],"NLU":["孙潘戈","孙潘戈","","Mexico City","墨西哥","NA","",1],"NMA":["納曼干","","","Namangan","乌兹别克斯坦","CA","",1],"NMF":["馬法盧","","","Noonu Atoll","马尔代夫","SA"],"NMI":["新孟買","新孟買","","Navi Mumbai","印度","SA","",1],"NNG":["南宁","南宁","","Nanning (Jiangnan)","中国","CN","",1],"NNM":["纳里扬马尔","纳里扬马尔","","Naryan Mar","俄罗斯","EU"],"NNT":["难府府治县","难府府治县","","","泰国","SEA"],"NOB":["諾薩拉區","諾薩拉區","","Nicoya","哥斯达黎加","NA"],"NOC":["康诺特省","康诺特省","","Charlestown","爱尔兰","EU","",1],"NOJ":["诺亚布里斯克","诺亚布里斯克","","Noyabrsk","俄罗斯","EU"],"NOP":["锡诺普","锡诺普","","Sinop","土耳其","EU"],"NOS":["法先","","","Nosy Be","马达加斯加","AF","",1],"NOU":["努美阿","努美阿","","Nouméa (La Tontouta)","新喀里多尼亚","OC","Q9733",1],"NOV":["万博","万博","","Huambo","安哥拉","AF"],"NOZ":["新庫茲涅茨基區","新庫茲涅茨基區","","Novokuznetsk","俄罗斯","EU"],"NPE":["哈斯丁 (紐西蘭)","哈斯丁 (紐西蘭)","","Napier","新西兰","OC"],"NPL":["新普利茅斯","新普利茅斯","","New Plymouth","新西兰","OC"],"NPO":["Nanga Pinoh-Borneo Island","","","Nanga Pinoh-Borneo Island","印度尼西亚","SEA"],"NPT":["纽波特","纽波特","","Newport","美国","NA"],"NQN":["内乌肯","内乌肯","","Neuquén","阿根廷","LA","",1],"NQY":["纽基","纽基","","Newquay","英国","EU"],"NQZ":["阿斯塔纳","阿斯塔纳","","Astana","哈萨克斯坦","CA","",1],"NRA":["納蘭德拉","納蘭德拉","","Narrandera","澳大利亚","OC"],"NRK":["北雪平","北雪平","","Norrköping","瑞典","EU"],"NRN":["克莱沃县","克莱沃县","","Weeze","德国","EU","",1],"NRR":["塞瓦","塞瓦","","Ceiba","波多黎各","NA"],"NRT":["东京成田","东京","","Narita","日本","EA","C:TYO",1],"NSH":["瑙沙赫尔","瑙沙赫尔","","Nowshahr","伊朗","ME"],"NSI":["雅温得","雅温得","","Yaoundé","喀麦隆","AF","",1],"NSK":["诺里尔斯克","诺里尔斯克","","Norilsk","俄罗斯","EU","",1],"NSN":["纳尔逊","纳尔逊","","Nelson","新西兰","OC"],"NST":["那空是贪玛叻","那空是贪玛叻","","Nakhon Si Thammarat","泰国","SEA"],"NTE":["南特","南特","","Nantes","法国","EU","",1],"NTG":["南通","南通","","Nantong (Tongzhou)","中国","CN"],"NTL":["獵人谷","獵人谷","","Williamtown","澳大利亚","OC","",1],"NTN":["Normanton","","","Normanton","澳大利亚","OC"],"NTQ":["轮岛","轮岛","","Wajima","日本","EA"],"NTX":["拉奈","","","Ranai-Natuna Besar Island","印度尼西亚","SEA"],"NUE":["纽伦堡","纽伦堡","","Nuremberg","德国","EU","",1],"NUI":["诺伊克索特","诺伊克索特","","Nuiqsut","美国","NA"],"NUM":["尼奧","","","Sharma","沙特阿拉伯","ME","",1],"NUX":["新乌连戈伊","新乌连戈伊","","Novy Urengoy","俄罗斯","EU"],"NVA":["内瓦","内瓦","","Neiva","哥伦比亚","LA"],"NVI":["纳沃伊","纳沃伊","","Navoi","乌兹别克斯坦","CA"],"NVT":["纳韦甘蒂斯","纳韦甘蒂斯","","Navegantes","巴西","LA","",1],"NWI":["诺里奇","诺里奇","","Norwich, Norfolk","英国","EU"],"NYA":["尼亚甘","尼亚甘","","Nyagan","俄罗斯","EU"],"NYI":["苏尼亚尼","苏尼亚尼","","Sunyani","加纳","AF"],"NYK":["Gathiuru","","","Gathiuru","肯尼亚","AF"],"NYM":["納德姆","納德姆","","Nadym","俄罗斯","EU"],"NYO":["斯德哥尔摩斯德哥爾摩斯卡夫斯塔","斯德哥尔摩","","Nyköping","瑞典","EU","Q1754",1],"NYT":["奈比多","奈比多","","Naypyitaw","缅甸","SEA","",1],"NZC":["纳斯卡","纳斯卡","","Nazca","秘鲁","LA"],"NZH":["满洲里","满洲里","","Manzhouli","中国","CN"],"NZL":["扎兰屯","扎兰屯","","Zhalantun","中国","CN"],"OAJ":["杰克逊维尔","杰克逊维尔","","Richlands","美国","NA"],"OAK":["旧金山湾区","旧金山湾区","","Oakland","美国","NA","",1],"OAX":["瓦哈卡","瓦哈卡","","Oaxaca","墨西哥","NA","",1],"OBO":["带广","带广","","Obihiro","日本","EA"],"OCC":["奥雷亚纳省弗朗西斯科港","奥雷亚纳省弗朗西斯科港","","Coca","厄瓜多尔","LA"],"OCE":["大洋城","大洋城","","Ocean City","美国","NA"],"OCJ":["欧丘里欧","欧丘里欧","","Boscobel","牙买加","NA"],"OCS":["科里斯科岛","科里斯科岛","","Corisco Island","赤道几内亚","AF","",1],"ODB":["科尔多瓦","科尔多瓦","","Córdoba","西班牙","EU"],"ODE":["欧登塞","欧登塞","","Odense","丹麦","EU","",1],"OEC":["Oecussi-Ambeno","","","Oecussi-Ambeno","东帝汶","SEA","",1],"OER":["恩舍尔兹维克","恩舍尔兹维克","","Örnsköldsvik","瑞典","EU"],"OGD":["Ogden","","","Ogden","美国","NA"],"OGG":["卡胡卢伊","卡胡卢伊","","Kahului","美国","OC","",1],"OGL":["乔治敦德梅拉拉-馬海卡","乔治敦","","Ogle","圭亚那","LA","Q10717"],"OGN":["与那国町","与那国町","","Yonaguni","日本","EA"],"OGS":["奥格登斯堡","奥格登斯堡","","Ogdensburg","美国","NA"],"OGU":["奥尔杜","奥尔杜","","Ordu","土耳其","EU"],"OGX":["瓦尔格拉","瓦尔格拉","","Ouargla","阿尔及利亚","AF"],"OGZ":["弗拉季高加索","弗拉季高加索","","Beslan","俄罗斯","EU"],"OHD":["奥赫里德","奥赫里德","","Ohrid","北马其顿","EU","",1],"OHE":["漠河","漠河","","Mohe","中国","CN"],"OHO":["鄂霍次克","鄂霍次克","","Okhotsk","俄罗斯","EU"],"OHS":["苏哈尔","苏哈尔","","Suhar","阿曼","ME","",1],"OIM":["大岛支厅","大岛支厅","","Izu Oshima","日本","EA"],"OIR":["奧尻","","","Okushiri Island","日本","EA"],"OIT":["大分","大分","","Oita","日本","EA"],"OKA":["那霸","那霸","","Naha","日本","EA","",1],"OKC":["俄克拉何马城","俄克拉何马城","","Oklahoma City","美国","NA","",1],"OKD":["札幌飞行场","札幌","","Sapporo","日本","EA","Q37951"],"OKE":["冲永良部","","","Wadomari","日本","EA"],"OKI":["隐岐之岛町","隐岐之岛町","","Okinoshima","日本","EA"],"OKJ":["冈山","冈山","","Okayama","日本","EA","",1],"OKL":["奥克西比尔","","","Oksibil","印度尼西亚","SEA"],"OKY":["Oakey Army Aviation Centre","","","","澳大利亚","OC","AU:"],"OLA":["欧兰","欧兰","","Ørland","挪威","EU"],"OLB":["奥尔比亚","奥尔比亚","","Olbia (SS)","意大利","EU","",1],"OLF":["沃尔夫波因特","沃尔夫波因特","","Wolf Point","美国","NA"],"OLM":["奥林匹亚","奥林匹亚","","Olympia","美国","NA"],"OLZ":["奥廖克明斯克","奥廖克明斯克","","Olyokminsk","俄罗斯","EU"],"OMA":["奥马哈","奥马哈","","Omaha","美国","NA","",1],"OMD":["奥兰治蒙德","奥兰治蒙德","","Oranjemund","纳米比亚","AF"],"OME":["诺姆","诺姆","","Nome","美国","NA"],"OMH":["乌尔米耶","乌尔米耶","","Urmia","伊朗","ME"],"OMN":["Zomin","","","Zomin","乌兹别克斯坦","CA"],"OMO":["莫斯塔尔","莫斯塔尔","","Mostar","波斯尼亚和黑塞哥维那","EU","",1],"OMR":["奥拉迪亚","奥拉迪亚","","Oradea","罗马尼亚","EU","",1],"OMS":["鄂木斯克","鄂木斯克","","Omsk","俄罗斯","EU","",1],"OND":["翁丹瓜","翁丹瓜","","Ondangwa","纳米比亚","AF"],"ONJ":["能代","能代","","Kitaakita","日本","EA"],"ONQ":["卡拉代尼兹埃雷利","卡拉代尼兹埃雷利","","Zonguldak","土耳其","EU"],"ONT":["安大略","安大略","","Ontario","美国","NA","",1],"ONX":["科隆","","","Colón","巴拿马","NA"],"OOL":["黄金海岸","黄金海岸","","Gold Coast","澳大利亚","OC","",1],"OOM":["Cooma","","","Cooma","澳大利亚","OC"],"OPF":["迈阿密邁阿密-奧帕克洛克行政","迈阿密","","Miami","美国","NA","Q8652"],"OPO":["波尔图","波尔图","","Porto","葡萄牙","EU","",1],"OPU":["Balimo","","","Balimo","巴布亚新几内亚","OC"],"ORB":["厄勒布鲁","厄勒布鲁","","Örebro","瑞典","EU"],"ORD":["芝加哥奥黑尔","芝加哥大都市區","","Chicago","美国","NA","",1],"ORF":["汉普顿锚地","汉普顿锚地","","Norfolk","美国","NA","",1],"ORH":["伍斯特","","","Worcester","美国","NA"],"ORK":["科克","科克","","Cork","爱尔兰","EU","",1],"ORN":["瓦赫兰","瓦赫兰","","Es-Sénia","阿尔及利亚","AF","",1],"ORT":["諾斯韋","諾斯韋","","Northway","美国","NA"],"ORU":["奥鲁罗","奥鲁罗","","Oruro","玻利维亚","LA","",1],"ORY":["巴黎－奥利","巴黎","","Paris (Orly, Val-de-Marne)","法国","EU","Q90",1],"OSD":["厄斯特松德","厄斯特松德","","Östersund","瑞典","EU"],"OSI":["奥西耶克","奥西耶克","","Osijek(Klisa)","克罗地亚","EU"],"OSL":["东挪威","东挪威","","Oslo (Gardermoen)","挪威","EU","",1],"OSR":["俄斯特拉发","俄斯特拉发","","Mošnov","捷克","EU","",1],"OSS":["奥什","奥什","","Osh","吉尔吉斯斯坦","CA","",1],"OST":["奥斯坦德","奥斯坦德","","Oostende","比利时","EU","",1],"OSW":["奥尔斯克","奥尔斯克","","Orsk","俄罗斯","EU"],"OTH":["西南俄勒冈区域","","","North Bend","美国","NA"],"OTP":["布加勒斯特","布加勒斯特","","Otopeni","罗马尼亚","EU","",1],"OTZ":["科策布","科策布","","Kotzebue","美国","NA"],"OUA":["瓦加杜古","瓦加杜古","","Ouagadougou","布基纳法索","AF","",1],"OUD":["乌季达","乌季达","","Ahl Angad","摩洛哥","AF","",1],"OUL":["奥卢","奥卢","","Oulu / Oulunsalo","芬兰","EU","",1],"OUZ":["祖埃拉特","祖埃拉特","","Zouérate","毛里塔尼亚","AF"],"OVB":["新西伯利亚","新西伯利亚","","Novosibirsk","俄罗斯","EU","",1],"OVD":["奥维耶多","奥维耶多","","Ranón","西班牙","EU","",1],"OVS":["苏维埃茨基","苏维埃茨基","","Sovetskiy","俄罗斯","EU"],"OWB":["欧文斯伯勒","欧文斯伯勒","","Owensboro","美国","NA"],"OXB":["比绍","比绍","","Bissau","几内亚比绍","AF","",1],"OYE":["奧耶姆","","","Oyem","加蓬","AF"],"OZC":["奥三棉示","奥三棉示","","Ozamiz","菲律宾","SEA"],"OZG":["札戈拉","札戈拉","","Zagora","摩洛哥","AF","",1],"OZZ":["瓦尔扎扎特","瓦尔扎扎特","","Ouarzazate","摩洛哥","AF","",1],"PAB":["Bilaspur","","","Bilaspur","印度","SA"],"PAC":["巴拿马城阿爾布魯克“Marcos A. Gelabert”","巴拿马城","","Albrook","巴拿马","NA","Q3306"],"PAD":["利普施塔特","利普施塔特","","Büren","德国","EU","",1],"PAE":["埃弗里特","埃弗里特","","Everett","美国","NA"],"PAG":["帕嘎蒂安","帕嘎蒂安","","Pagadian","菲律宾","SEA"],"PAH":["帕迪尤卡","帕迪尤卡","","Paducah","美国","NA"],"PAP":["太子港","太子港","","Port-au-Prince","海地","NA","",1],"PAT":["巴特那","巴特那","","Patna","印度","SA"],"PAV":["保罗·阿方索城","保罗·阿方索城","","Paulo Afonso","巴西","LA"],"PAZ":["波萨里卡","波萨里卡","","Poza Rica","墨西哥","NA"],"PBC":["普埃布拉","普埃布拉","","Puebla","墨西哥","NA","",1],"PBD":["坡尔班达尔","坡尔班达尔","","Porbandar","印度","SA"],"PBG":["普拉茨堡","普拉茨堡","","Plattsburgh","美国","NA"],"PBH":["廷布","廷布","","Paro","不丹","SA","",1],"PBM":["帕拉马里博","帕拉马里博","","Paramaribo","苏里南","LA","",1],"PBO":["Paraburdoo","","","Paraburdoo","澳大利亚","OC"],"PBR":["巴里奥斯港","巴里奥斯港","","Puerto Barrios","危地马拉","NA"],"PBU":["葡萄","","","Putao","缅甸","SEA"],"PCL":["普兰尔帕","普兰尔帕","","Pucallpa","秘鲁","LA","",1],"PCP":["普林西比岛","普林西比岛","","São Tomé & Príncipe","圣多美和普林西比","AF"],"PCR":["卡雷尼奥港","卡雷尼奥港","","Puerto Carreño","哥伦比亚","LA"],"PDA":["伊尼里达","伊尼里达","","Puerto Inírida","哥伦比亚","LA"],"PDG":["巴东","巴东","","Padang (Katapiang)","印度尼西亚","SEA","",1],"PDK":["亚特兰大","亚特兰大","","Atlanta","美国","NA","Q23556"],"PDL":["蓬塔德尔加达","蓬塔德尔加达","","Ponta Delgada","葡萄牙","EU","",1],"PDO":["Talang Gudang-Sumatra Island","","","Talang Gudang-Sumatra Island","印度尼西亚","SEA"],"PDP":["埃斯特角城","埃斯特角城","","Punta del Este","乌拉圭","LA"],"PDS":["彼德拉斯内格拉斯","彼德拉斯内格拉斯","","Piedras Negras","墨西哥","NA"],"PDT":["彭德尔顿","彭德尔顿","","Pendleton","美国","NA"],"PDV":["普罗夫迪夫市镇","普罗夫迪夫市镇","","Plovdiv","保加利亚","EU","",1],"PDX":["波特兰","波特兰","","Portland","美国","NA","",1],"PED":["帕尔杜比采","帕尔杜比采","","Pardubice","捷克","EU","",1],"PEE":["彼尔姆","彼尔姆","","Perm","俄罗斯","EU","",1],"PEG":["佩鲁贾","佩鲁贾","","Perugia (PG)","意大利","EU","",1],"PEI":["佩雷拉","佩雷拉","","Pereira","哥伦比亚","LA"],"PEK":["北京首都","北京","","Beijing","中国","CN","C:BJS",1],"PEM":["馬爾多納多港","馬爾多納多港","","Puerto Maldonado","秘鲁","LA"],"PEN":["槟城","槟城","","Penang","马来西亚","SEA","",1],"PER":["珀斯","珀斯","","Perth","澳大利亚","OC","",1],"PES":["彼得罗扎沃茨克","彼得罗扎沃茨克","","Petrozavodsk","俄罗斯","EU"],"PET":["佩洛塔斯","佩洛塔斯","","Pelotas","巴西","LA"],"PEV":["佩奇","佩奇","","Pécs","匈牙利","EU","",1],"PEW":["白沙瓦","白沙瓦","","Peshawar","巴基斯坦","SA","",1],"PEX":["伯朝拉","伯朝拉","","Pechora","俄罗斯","EU"],"PEZ":["奔萨","奔萨","","Penza","俄罗斯","EU"],"PFB":["帕索丰多","帕索丰多","","Passo Fundo","巴西","LA"],"PFO":["帕福斯","帕福斯","","Paphos","塞浦路斯","EU","",1],"PGA":["佩吉","佩吉","","Page","美国","NA"],"PGD":["蓬塔戈尔达","蓬塔戈尔达","","Punta Gorda","美国","NA"],"PGF":["佩皮尼昂","佩皮尼昂","","Perpignan/Rivesaltes","法国","EU"],"PGH":["Pantnagar","","","Pantnagar","印度","SA"],"PGK":["邦加檳港","邦加檳港","","Pangkal Pinang","印度尼西亚","SEA"],"PGU":["阿萨卢耶","阿萨卢耶","","Khiyaroo","伊朗","ME"],"PGV":["Greenville","","","Greenville","美国","NA"],"PGZ":["蓬塔格罗萨","蓬塔格罗萨","","Ponta Grossa","巴西","LA"],"PHB":["巴纳伊巴","巴纳伊巴","","Parnaíba","巴西","LA"],"PHC":["哈科特港","哈科特港","","Port Harcourt","尼日利亚","AF","",1],"PHE":["黑德兰港","黑德兰港","","Port Hedland","澳大利亚","OC","",1],"PHF":["维吉尼亚半岛","维吉尼亚半岛","","Newport News","美国","NA"],"PHG":["Port Harcourt","","","Port Harcourt","尼日利亚","AF"],"PHH":["博卡拉","博卡拉","","Pokhara","尼泊尔","SA","Q6640",1],"PHL":["费城","费城","","Philadelphia","美国","NA","",1],"PHS":["彭世洛","彭世洛","","Phitsanulok","泰国","SEA"],"PHW":["帕拉博鲁瓦","帕拉博鲁瓦","","Phalaborwa","南非","AF"],"PHX":["菲尼克斯","菲尼克斯","","Phoenix","美国","NA","",1],"PHY":["Phetchabun Airport","","","","泰国","SEA"],"PIA":["東皮奧里亞","東皮奧里亞","","Peoria","美国","NA"],"PIB":["哈蒂斯堡","哈蒂斯堡","","Moselle","美国","NA"],"PIE":["圣彼得斯堡","圣彼得斯堡","","Pinellas Park","美国","NA","",1],"PIH":["波卡特洛","波卡特洛","","Pocatello","美国","NA"],"PIK":["格拉斯哥","格拉斯哥","","Prestwick, South Ayrshire","英国","EU","",1],"PIR":["皮尔","皮尔","","Pierre","美国","NA"],"PIS":["普瓦捷","普瓦捷","","Poitiers/Biard","法国","EU"],"PIT":["匹兹堡","匹兹堡","","Pittsburgh","美国","NA","",1],"PIU":["皮乌拉","皮乌拉","","Piura","秘鲁","LA"],"PIX":["拉日什-杜皮庫","拉日什-杜皮庫","","Pico Island","葡萄牙","EU"],"PIZ":["Point Lay","","","Point Lay","美国","NA"],"PJM":["希门尼斯港","希门尼斯港","","Puerto Jimenez","哥斯达黎加","NA"],"PKB":["帕克斯堡","帕克斯堡","","Parkersburg (Williamstown)","美国","NA"],"PKC":["堪察加彼得罗巴甫洛夫斯克","堪察加彼得罗巴甫洛夫斯克","","Petropavlovsk-Kamchatsky","俄罗斯","EU","",1],"PKE":["帕克斯","帕克斯","","Parkes","澳大利亚","OC"],"PKR":["博卡拉","博卡拉","","Pokhara","尼泊尔","SA","Q6640"],"PKU":["北干巴鲁","北干巴鲁","","Pekanbaru","印度尼西亚","SEA"],"PKV":["普斯科夫","普斯科夫","","Pskov","俄罗斯","EU"],"PKX":["北京大兴","北京","","Beijing","中国","CN","C:BJS",1],"PKY":["帕朗卡拉亚","帕朗卡拉亚","","Palangkaraya","印度尼西亚","SEA"],"PKZ":["巴色","巴色","","Pakse","老挝","SEA","",1],"PLJ":["普拉森舍","","","Placencia","伯利兹","NA"],"PLM":["巨港","巨港","","Palembang","印度尼西亚","SEA"],"PLN":["佩爾斯頓","佩爾斯頓","","Pellston","美国","NA"],"PLO":["林肯港","林肯港","","Port Lincoln","澳大利亚","OC"],"PLQ":["帕兰加","帕兰加","","Palanga","立陶宛","EU","",1],"PLS":["普罗维登西亚莱斯岛","普罗维登西亚莱斯岛","","Providenciales","特克斯和凯科斯群岛","NA","",1],"PLW":["帕卢","帕卢","","Palu","印度尼西亚","SEA"],"PLX":["塞米伊","塞米伊","","Semey","哈萨克斯坦","CA","",1],"PLZ":["吉科巴哈","吉科巴哈","","Gqeberha (Port Elizabeth)","南非","AF","",1],"PMC":["特珀","","","Puerto Montt","智利","LA","",1],"PMF":["帕尔马","帕尔马","","Parma (PR)","意大利","EU"],"PMG":["蓬塔波朗","蓬塔波朗","","Ponta Porã","巴西","LA"],"PMI":["马略卡岛","马略卡岛","","Palma de Mallorca","西班牙","EU","",1],"PMO":["巴勒莫","巴勒莫","","Palermo","意大利","EU","",1],"PMQ":["佩里托莫雷諾 (聖克魯斯省)","佩里托莫雷諾 (聖克魯斯省)","","Perito Moreno","阿根廷","LA"],"PMR":["北帕默斯顿","北帕默斯顿","","Palmerston North","新西兰","OC"],"PMV":["波拉马尔","波拉马尔","","Isla Margarita","委内瑞拉","NA","",1],"PMW":["帕尔马斯","帕尔马斯","","Palmas","巴西","LA"],"PMY":["馬德林港","馬德林港","","Puerto Madryn","阿根廷","LA"],"PNA":["潘普洛纳","潘普洛纳","","Pamplona","西班牙","EU"],"PNI":["波纳佩","波纳佩","","Pohnpei Island","密克罗尼西亚联邦","OC"],"PNK":["坤甸","坤甸","","Pontianak","印度尼西亚","SEA","",1],"PNL":["潘泰莱里亚","潘泰莱里亚","","Pantelleria (TP)","意大利","EU"],"PNP":["波蓬德塔","波蓬德塔","","Popondetta","巴布亚新几内亚","OC"],"PNQ":["浦那","浦那","","Pune","印度","SA","",1],"PNR":["黑角","黑角","","Pointe Noire","刚果共和国","AF","",1],"PNS":["彭萨科拉","彭萨科拉","","Pensacola","美国","NA","",1],"PNT":["納塔萊斯港","納塔萊斯港","","Puerto Natales","智利","LA"],"PNY":["本地治里","本地治里","","Puducherry (Pondicherry)","印度","SA"],"PNZ":["彼得罗利纳","彼得罗利纳","","Petrolina","巴西","LA"],"POA":["阿雷格里港","阿雷格里港","","Porto Alegre","巴西","LA","",1],"POG":["让蒂尔港","让蒂尔港","","Port Gentil","加蓬","AF","",1],"POL":["彭巴","彭巴","","Pemba","莫桑比克","AF"],"POM":["莫尔兹比港","莫尔兹比港","","Port Moresby","巴布亚新几内亚","OC","",1],"POP":["圣斐利-银港","圣斐利-银港","","Puerto Plata","多米尼加","NA"],"POR":["波里","波里","","Pori","芬兰","EU"],"POS":["西班牙港","西班牙港","","Port of Spain","特立尼达和多巴哥","NA","",1],"POZ":["波茲南","波茲南","","Poznań","波兰","EU","",1],"PPB":["普鲁登特总统城","普鲁登特总统城","","Presidente Prudente","巴西","LA"],"PPG":["帕果帕果","帕果帕果","","Pago Pago","美属萨摩亚","OC","",1],"PPK":["彼得罗巴甫尔","彼得罗巴甫尔","","Petropavl","哈萨克斯坦","CA","",1],"PPN":["波帕扬","波帕扬","","Popayán","哥伦比亚","LA"],"PPP":["普拉瑟潘","普拉瑟潘","","Proserpine","澳大利亚","OC"],"PPS":["普林塞萨港","普林塞萨港","","Puerto Princesa","菲律宾","SEA","",1],"PPT":["塔希提岛","塔希提岛","","Papeete","法属波利尼西亚","OC","",1],"PQC":["富国岛","富国岛","","Phu Quoc Island","越南","SEA","",1],"PQI":["普雷斯克艾尔","普雷斯克艾尔","","Presque Isle","美国","NA"],"PQQ":["麦觉理港","麦觉理港","","Port Macquarie","澳大利亚","OC"],"PRA":["巴拉那","巴拉那","","Parana","阿根廷","LA"],"PRC":["普雷斯科特","普雷斯科特","","Prescott","美国","NA"],"PRG":["布拉格","布拉格","","Prague","捷克","EU","",1],"PRI":["普拉兰岛","普拉兰岛","","Praslin Island","塞舌尔","AF"],"PRM":["波尔蒂芒","波尔蒂芒","","Portimão","葡萄牙","EU"],"PRN":["普里什蒂纳","普里什蒂纳","","Prishtina","科索沃","EU","",1],"PSA":["比萨","比萨","","Pisa (PI)","意大利","EU","",1],"PSC":["三城","三城","","Pasco","美国","NA"],"PSD":["塞得港","塞得港","","Port Said","埃及","AF","",1],"PSE":["庞塞","庞塞","","Ponce","波多黎各","NA"],"PSG":["彼得斯堡","彼得斯堡","","Petersburg","美国","NA"],"PSM":["朴次茅斯","朴次茅斯","","Portsmouth","美国","NA"],"PSO":["帕斯托","帕斯托","","Chachagüí","哥伦比亚","LA"],"PSP":["科切拉山谷","科切拉山谷","","Palm Springs","美国","NA","",1],"PSR":["佩斯卡拉","佩斯卡拉","","Pescara","意大利","EU","",1],"PSS":["波萨达斯","波萨达斯","","Posadas","阿根廷","LA"],"PSU":["庞苏马","","","Putussibau-Borneo Island","印度尼西亚","SEA"],"PSZ":["苏亚雷斯港","苏亚雷斯港","","Puerto Suárez","玻利维亚","LA"],"PTG":["波洛夸内","波洛夸内","","Polokwane","南非","AF","",1],"PTH":["波特海登","波特海登","","Port Heiden","美国","NA"],"PTJ":["维多利亚州","维多利亚州","","","澳大利亚","OC"],"PTP":["皮特尔角城","皮特尔角城","","Pointe-à-Pitre","瓜德罗普","NA","",1],"PTU":["普拉蒂纳姆","普拉蒂纳姆","","Platinum","美国","NA"],"PTY":["巴拿马城托库门","巴拿马城","","Tocumen","巴拿马","NA","Q3306",1],"PUB":["普韦布洛","普韦布洛","","Pueblo","美国","NA"],"PUD":["德塞阿多港","德塞阿多港","","Puerto Deseado","阿根廷","LA"],"PUF":["波城","波城","","Pau/Pyrénées (Uzein)","法国","EU"],"PUG":["奥古斯塔港","奥古斯塔港","","","澳大利亚","OC"],"PUJ":["蓬塔卡納","蓬塔卡納","","Punta Cana","多米尼加","NA","",1],"PUQ":["蓬塔阿雷纳斯","蓬塔阿雷纳斯","","Punta Arenas","智利","LA","",1],"PUS":["釜山挑戰賽","釜山挑戰賽","","Busan","韩国","EA","",1],"PUU":["阿西斯港","阿西斯港","","Puerto Asís","哥伦比亚","LA"],"PUW":["普尔曼","普尔曼","","Pullman","美国","NA"],"PUY":["普拉","普拉","","Pula","克罗地亚","EU","",1],"PUZ":["Puerto Cabezas","","","Puerto Cabezas","尼加拉瓜","NA"],"PVA":["Providencia","","","Providencia","哥伦比亚","NA"],"PVD":["沃威克","沃威克","","Providence/Warwick","美国","NA","",1],"PVG":["上海浦东","上海","","Shanghai (Pudong)","中国","CN","C:SHA",1],"PVH":["波多韦柳","波多韦柳","","Porto Velho","巴西","LA","",1],"PVK":["普雷韦扎","普雷韦扎","","Preveza","希腊","EU"],"PVR":["巴亚尔塔港","巴亚尔塔港","","Puerto Vallarta","墨西哥","NA","",1],"PVU":["普罗沃","普罗沃","","Provo","美国","NA"],"PWE":["佩韦克","佩韦克","","Apapelgino","俄罗斯","EU"],"PWM":["波特兰","波特兰","","Portland","美国","NA","",1],"PWQ":["巴甫洛达尔","巴甫洛达尔","","Pavlodar","哈萨克斯坦","CA","",1],"PXM":["埃斯孔迪多港","埃斯孔迪多港","","Puerto Escondido","墨西哥","NA"],"PXO":["巴莱拉镇","巴莱拉镇","","Vila Baleira","葡萄牙","EU"],"PXR":["Surin","","","Surin","泰国","SEA"],"PXU":["波來古","波來古","","Pleiku","越南","SEA"],"PYJ":["乌达奇内","乌达奇内","","Yakutia","俄罗斯","EU"],"PYK":["帕亚姆","","","Karaj","伊朗","ME","",1],"PZB":["彼得马里茨堡","彼得马里茨堡","","Pietermaritzburg","南非","AF"],"PZH":["佐布","","","Fort Sandeman","巴基斯坦","SA"],"PZI":["攀枝花","攀枝花","","Panzhihua (Renhe)","中国","CN"],"PZO":["圭亚那城","圭亚那城","","Guyana City","委内瑞拉","LA","",1],"PZU":["苏丹港","苏丹港","","Port Sudan","苏丹","AF","",1],"QBC":["贝拉库拉","","","Bella Coola","加拿大","NA"],"QOW":["奥韦里","奥韦里","","Owerri","尼日利亚","AF"],"QRO":["克雷塔罗州","克雷塔罗州","","Querétaro","墨西哥","NA","",1],"QRW":["瓦里","","","Okpe","尼日利亚","AF"],"QSF":["塞提夫","塞提夫","","Sétif","阿尔及利亚","AF"],"QSR":["萨莱诺","萨莱诺","","Salerno","意大利","EU"],"QSZ":["莎车县","莎车县","","Shache","中国","CN"],"QUO":["乌约","乌约","","Uyo","尼日利亚","AF"],"RAB":["拉包尔","拉包尔","","Kokopo","巴布亚新几内亚","OC"],"RAE":["阿尔阿尔","阿尔阿尔","","Arar","沙特阿拉伯","ME"],"RAH":["拉夫哈","拉夫哈","","Rafha","沙特阿拉伯","ME"],"RAI":["普拉亚","普拉亚","","Praia","佛得角","AF","",1],"RAK":["马拉喀什","马拉喀什","","Marrakesh","摩洛哥","AF","",1],"RAO":["里贝朗普雷图","里贝朗普雷图","","Ribeirão Preto","巴西","LA"],"RAP":["拉皮德城","拉皮德城","","Rapid City","美国","NA"],"RAR":["阿瓦鲁阿","阿瓦鲁阿","","Avarua","库克群岛","OC","",1],"RAS":["拉什特","拉什特","","Rasht","伊朗","ME"],"RBA":["塞拉","塞拉","","Rabat","摩洛哥","AF","",1],"RBR":["里奥布朗库","里奥布朗库","","Rio Branco","巴西","LA","",1],"RBY":["鲁比","鲁比","","Ruby","美国","NA"],"RCB":["里查茲貝","","","Richards Bay","南非","AF"],"RCH":["里奥阿查","里奥阿查","","Riohacha","哥伦比亚","LA"],"RDD":["雷丁","雷丁","","Redding","美国","NA"],"RDM":["俄勒冈州","俄勒冈州","","Redmond","美国","NA"],"RDO":["拉多姆","拉多姆","","Radom","波兰","EU"],"RDP":["杜尔加布尔","杜尔加布尔","","Durgapur","印度","SA"],"RDU":["罗利","罗利","","Raleigh/Durham","美国","NA","",1],"RDZ":["罗德兹","罗德兹","","Rodez/Marcillac","法国","EU"],"REC":["累西腓","累西腓","","Recife","巴西","LA","",1],"REG":["雷焦卡拉布里亚","雷焦卡拉布里亚","","Reggio Calabria","意大利","EU"],"REL":["特雷利乌","特雷利乌","","Rawson","阿根廷","LA"],"REN":["奥伦堡","奥伦堡","","Orenburg","俄罗斯","EU"],"RER":["Retalhuleu","","","Retalhuleu","危地马拉","NA"],"RES":["雷西斯滕西亚","雷西斯滕西亚","","Resistencia","阿根廷","LA","",1],"REU":["雷乌斯","雷乌斯","","Reus","西班牙","EU","",1],"REW":["雷瓦","","","Rewa","印度","SA"],"REX":["雷诺萨","雷诺萨","","Reynosa","墨西哥","NA"],"RFD":["罗克福德","罗克福德","","Chicago/Rockford","美国","NA"],"RFP":["赖阿特阿岛","赖阿特阿岛","","Uturoa","法属波利尼西亚","OC"],"RGA":["里奧格蘭德","里奧格蘭德","","Rio Grande","阿根廷","LA"],"RGI":["朗伊罗阿环礁","朗伊罗阿环礁","","","法属波利尼西亚","OC"],"RGL":["里奥加耶戈斯","里奥加耶戈斯","","Rio Gallegos","阿根廷","LA","",1],"RGN":["仰光","仰光","","Yangon","缅甸","SEA","",1],"RGO":["清津","清津","","Hoemun-ri","朝鲜","EA"],"RHD":["特馬斯德里奧翁多","特馬斯德里奧翁多","","Termas de Río Hondo","阿根廷","LA"],"RHI":["萊茵蘭德","萊茵蘭德","","Rhinelander","美国","NA"],"RHO":["罗得岛","罗得岛","","Rhodes","希腊","EA","",1],"RIA":["圣玛丽亚","圣玛丽亚","","Santa Maria","巴西","LA"],"RIB":["里韦拉尔塔","里韦拉尔塔","","Riberalta","玻利维亚","LA"],"RIC":["里士满","里士满","","Richmond","美国","NA","",1],"RIS":["利尻町","利尻町","","Rishiri","日本","EA"],"RIW":["里弗顿","里弗顿","","Riverton","美国","NA"],"RIX":["里加","里加","","Riga","拉脱维亚","EU","",1],"RIY":["穆卡拉","穆卡拉","","Mukalla(Riyan)","也门","ME","",1],"RIZ":["日照","日照","","Rizhao (Donggang)","中国","CN"],"RJA":["拉贾赫穆恩德尔伊","拉贾赫穆恩德尔伊","","Madhurapudi","印度","SA"],"RJH":["拉杰沙希","拉杰沙希","","Rajshahi","孟加拉国","SA"],"RJK":["里耶卡","里耶卡","","Rijeka(Omišalj)","克罗地亚","EU","",1],"RJL":["洛格罗尼奥","洛格罗尼奥","","Logroño","西班牙","EU"],"RJN":["拉夫桑詹","拉夫桑詹","","Rafsanjan","伊朗","ME"],"RKD":["罗克兰","罗克兰","","Rockland","美国","NA"],"RKE":["罗斯基勒","罗斯基勒","","Roskilde","丹麦","EU"],"RKS":["罗克斯普林","罗克斯普林","","Rock Springs","美国","NA"],"RKT":["哈伊马角","","","Ras Al Khaimah","阿联酋","ME","",1],"RKV":["雷克雅未克","雷克雅未克","","Reykjavík","冰岛","EU"],"RKZ":["日喀则","日喀则","","Xigazê (Samzhubzê)","中国","CN","",1],"RLG":["罗斯托克","罗斯托克","","Laage","德国","EU"],"RLK":["巴彦淖尔","巴彦淖尔","","Bayannur","中国","CN"],"RMA":["罗马","罗马","","Roma","澳大利亚","OC"],"RMF":["马萨阿拉姆","马萨阿拉姆","","Marsa Alam","埃及","AF","",1],"RMI":["里米尼","里米尼","","Rimini (RN)","意大利","EU","",1],"RML":["科伦坡拉特馬拉納","科伦坡","","Colombo","斯里兰卡","SA","Q35381",1],"RMO":["基希讷乌","基希讷乌","","Chişinău","摩尔多瓦","EU","",1],"RMQ":["台中","台中","","Taichung (Qingshui)","中国台湾","HMT","",1],"RMU":["穆尔西亚自治区","穆尔西亚自治区","","Corvera","西班牙","EU","",1],"RMZ":["Tobolsk","","","Tobolsk","俄罗斯","EU"],"RNB":["龙讷比","龙讷比","","Ronneby","瑞典","EU"],"RNJ":["与论","","","Yoron","日本","EA"],"RNN":["博恩霍尔姆岛","博恩霍尔姆岛","","Rønne","丹麦","EU"],"RNO":["雷諾","雷諾","","Reno","美国","NA","",1],"RNS":["雷恩","雷恩","","Saint-Jacques-de-la-Lande, Ille-et-Vilaine","法国","EU"],"ROA":["罗亚诺克","罗亚诺克","","Roanoke","美国","NA"],"ROB":["蒙罗维亚罗伯茨","蒙罗维亚","","Monrovia","利比里亚","AF","Q3748",1],"ROC":["罗切斯特","罗切斯特","","Rochester","美国","NA","",1],"ROI":["单兵单王对阵单王残局","单兵单王对阵单王残局","","Roi Et","泰国","SEA"],"ROK":["洛坎普顿","洛坎普顿","","Rockhampton","澳大利亚","OC"],"ROO":["龙多诺波利斯","龙多诺波利斯","","Rondonópolis","巴西","LA"],"ROP":["罗塔","","","Rota Island","北马里亚纳群岛","OC","",1],"ROR":["罗曼·莫图","","","Babelthuap Island","帕劳","OC","",1],"ROS":["罗萨里奥","罗萨里奥","","Rosario","阿根廷","LA","",1],"ROT":["罗托鲁瓦","罗托鲁瓦","","Rotorua","新西兰","OC"],"ROW":["罗斯韦尔","罗斯韦尔","","Roswell","美国","NA"],"RPR":["赖布尔","赖布尔","","Raipur","印度","SA"],"RQA":["若羌县","若羌县","","Ruoqiang Town","中国","CN"],"RRG":["伽堂·杜瓦尔爵士","","","Port Mathurin","毛里求斯","AF"],"RRS":["勒罗斯","勒罗斯","","Røros","挪威","EU"],"RSA":["圣罗莎","圣罗莎","","Santa Rosa","阿根廷","LA"],"RSD":["羅克桑德","","","Rock Sound","巴哈马","NA"],"RSI":["Hanak","","","Hanak","沙特阿拉伯","ME","",1],"RST":["罗切斯特","","","Rochester","美国","NA"],"RSU":["丽水","丽水","","Yeosu","韩国","EA"],"RSW":["迈尔斯堡","迈尔斯堡","","Fort Myers","美国","NA","",1],"RTB":["罗阿坦岛","罗阿坦岛","","Coxen Hole","洪都拉斯","NA","",1],"RTM":["鹿特丹","鹿特丹","","Rotterdam","荷兰王国","EU","",1],"RUA":["阿鲁阿","阿鲁阿","","Arua","乌干达","AF"],"RUH":["利雅得","利雅得","","Riyadh","沙特阿拉伯","ME","",1],"RUN":["圣但尼","圣但尼","","Sainte-Marie","留尼汪","AF","",1],"RUR":["魯魯圖島","魯魯圖島","","","法属波利尼西亚","OC"],"RUT":["拉特兰","拉特兰","","Rutland","美国","NA"],"RVK":["勒尔维克","勒尔维克","","Rørvik","挪威","EU"],"RVN":["罗瓦涅米","罗瓦涅米","","Rovaniemi","芬兰","EU","",1],"RVY":["里韦拉","里韦拉","","Rivera/Santana do Livramento","乌拉圭","LA"],"RXS":["卡皮兹","卡皮兹","","Roxas City","菲律宾","SEA"],"RYK":["拉希姆亚尔汗","拉希姆亚尔汗","","Rahim Yar Khan","巴基斯坦","SA"],"RZE":["热舒夫","热舒夫","","Jasionka","波兰","EU","",1],"RZR":["拉姆萨尔","拉姆萨尔","","Ramsar","伊朗","ME"],"RZV":["里泽省","里泽省","","Rize","土耳其","EU"],"SAB":["博坦","博坦","","Zion's Hill","荷兰加勒比区","NA"],"SAF":["圣菲","圣菲","","Santa Fe","美国","NA"],"SAG":["舍地","舍地","","Kakadi","印度","SA","",1],"SAH":["萨那","萨那","","Sanaa","也门","ME","",1],"SAI":["暹粒吴哥","","","Siem Reap","柬埔寨","SEA","",1],"SAL":["萨尔瓦多","萨尔瓦多","","San Salvador (San Luis Talpa)","萨尔瓦多","NA","",1],"SAN":["圣迭戈县","圣迭戈县","","San Diego","美国","NA","",1],"SAP":["圣佩德罗苏拉","圣佩德罗苏拉","","San Pedro Sula","洪都拉斯","NA","",1],"SAQ":["尼科尔斯镇","尼科尔斯镇","","Andros Island","巴哈马","NA"],"SAT":["圣安东尼奥","圣安东尼奥","","San Antonio","美国","NA","",1],"SAV":["萨凡纳","萨凡纳","","Savannah","美国","NA","",1],"SAW":["伊斯坦布尔萨比哈·格克琴","伊斯坦布尔","","Pendik, Istanbul","土耳其","EU","Q406",1],"SBA":["圣巴巴拉","圣巴巴拉","","Santa Barbara","美国","NA"],"SBD":["圣贝纳迪诺","圣贝纳迪诺","","San Bernardino","美国","NA","",1],"SBH":["圣巴泰勒米","圣巴泰勒米","","Gustavia","圣巴泰勒米","NA"],"SBN":["南本德","南本德","","South Bend","美国","NA"],"SBP":["圣路易斯-奥比斯波","圣路易斯-奥比斯波","","San Luis Obispo","美国","NA"],"SBT":["薩別塔","","","Sabetta","俄罗斯","EU"],"SBW":["民丹莪","民丹莪","","Sibu","马来西亚","SEA"],"SBY":["索尔兹伯里","索尔兹伯里","","Salisbury","美国","NA"],"SBZ":["锡比乌","锡比乌","","Sibiu","罗马尼亚","EU","",1],"SCC":["戴德霍斯","","","Deadhorse","美国","NA"],"SCE":["斯泰特科利奇","斯泰特科利奇","","State College","美国","NA"],"SCK":["斯托克顿","斯托克顿","","Stockton","美国","NA"],"SCL":["圣地亚哥","圣地亚哥","","Santiago","智利","LA","",1],"SCN":["萨尔布吕肯","萨尔布吕肯","","Saarbrücken","德国","EU"],"SCO":["阿克套","阿克套","","Aktau","哈萨克斯坦","CA","",1],"SCQ":["加利西亚自治区","加利西亚自治区","","Santiago de Compostela","西班牙","EU","",1],"SCR":["特吕西尔","特吕西尔","","Malung-Sälen","瑞典","EU","",1],"SCT":["索科特拉岛","索科特拉岛","","Mori","也门","ME"],"SCU":["圣地亚哥","圣地亚哥","","Santiago","古巴","NA","",1],"SCV":["蘇恰瓦","蘇恰瓦","","Suceava","罗马尼亚","EU","",1],"SCW":["瑟克特夫卡尔","瑟克特夫卡尔","","Syktyvkar","俄罗斯","EU"],"SDD":["卢班戈","卢班戈","","Lubango","安哥拉","AF"],"SDE":["圣地亚哥-德尔埃斯特罗","圣地亚哥-德尔埃斯特罗","","Santiago del Estero","阿根廷","LA"],"SDF":["路易斯维尔","路易斯维尔","","Louisville","美国","NA","",1],"SDG":["萨南达季","萨南达季","","","伊朗","ME"],"SDJ":["仙台","仙台","","Natori","日本","EA","",1],"SDK":["山打根省","山打根省","","Sandakan","马来西亚","SEA"],"SDL":["蒂姆罗市镇","蒂姆罗市镇","","Sundsvall/ Härnösand","瑞典","EU"],"SDP":["桑德波因特","桑德波因特","","Sand Point","美国","NA"],"SDQ":["圣多明哥圣多明各","圣多明哥","","Santo Domingo","多米尼加","NA","Q34820",1],"SDR":["桑坦德","桑坦德","","Santander","西班牙","EU"],"SDS":["佐渡","佐渡","","Sado","日本","EA"],"SDU":["里约热内卢圣杜蒙特","里约热内卢","","Rio de Janeiro","巴西","LA","Q8678",1],"SDW":["Chipi","","","Chipi","印度","SA"],"SDY":["西德尼","西德尼","","Sidney","美国","NA"],"SEA":["西雅图","西雅图","","Seattle","美国","NA","Q5083",1],"SEB":["塞卜哈","塞卜哈","","Sabha","利比亚","AF"],"SEK":["中科雷姆斯克","中科雷姆斯克","","Srednekolymsk","俄罗斯","EU"],"SEN":["滨海绍森德","滨海绍森德","","Southend-on-Sea, Essex","英国","EU"],"SEZ":["维多利亚","维多利亚","","Victoria","塞舌尔","AF","",1],"SFA":["斯法克斯","斯法克斯","","Sfax","突尼斯","AF"],"SFB":["桑福德","桑福德","","Orlando","美国","NA","",1],"SFG":["圣马丁岛","圣马丁岛","","Grand Case","法属圣马丁","NA"],"SFJ":["康埃卢苏阿克","康埃卢苏阿克","","Kangerlussuaq","格陵兰","NA"],"SFN":["圣菲","圣菲","","Santa Fe","阿根廷","LA"],"SFO":["旧金山","旧金山","","San Francisco","美国","NA","",1],"SFS":["苏比克湾自由港区","苏比克湾自由港区","","Olongapo","菲律宾","SEA","",1],"SFT":["謝萊夫特奧","謝萊夫特奧","","Skellefteå","瑞典","EU"],"SGC":["苏尔古特","苏尔古特","","Surgut","俄罗斯","EU","",1],"SGD":["森讷堡","森讷堡","","Sønderborg","丹麦","EU"],"SGF":["斯普林菲尔德","斯普林菲尔德","","Springfield","美国","NA"],"SGN":["胡志明","胡志明","","Ho Chi Minh City","越南","SEA","",1],"SGU":["圣乔治","圣乔治","","St George","美国","NA"],"SHA":["上海虹桥","上海","","Shanghai (Minhang)","中国","CN","C:SHA",1],"SHB":["中標津町","中標津町","","Nakashibetsu","日本","EA"],"SHD":["斯汤顿","斯汤顿","","Weyers Cave","美国","NA"],"SHE":["沈阳","沈阳","","Shenyang","中国","CN","",1],"SHI":["下地島","","","Miyakojima","日本","EA"],"SHJ":["沙迦","沙迦","","Sharjah","阿联酋","ME","",1],"SHL":["西隆","西隆","","Shillong","印度","SA"],"SHM":["南紀","南紀","","Shirahama","日本","EA"],"SHO":["曼齐尼","曼齐尼","","Mpaka","斯威士兰","AF","",1],"SHR":["谢里登","谢里登","","Sheridan","美国","NA"],"SHS":["荆州","荆州","","Jingzhou (Shashi)","中国","CN"],"SHV":["什里夫波特","什里夫波特","","Shreveport","美国","NA"],"SHW":["Sharurah","","","Sharurah","沙特阿拉伯","ME"],"SID":["埃斯帕戈斯","埃斯帕戈斯","","Espargos","佛得角","AF","",1],"SIG":["圣胡安Isla Grande ","圣胡安","","San Juan","波多黎各","NA","Q41211"],"SIN":["新加坡","新加坡","","Singapore","新加坡","SEA","Q334",1],"SIS":["Sishen","","","Sishen","南非","AF"],"SIT":["锡特卡","锡特卡","","Sitka","美国","NA"],"SJC":["旧金山湾区","旧金山湾区","","San Jose","美国","NA","",1],"SJD":["卡波圣卢卡","卡波圣卢卡","","San José del Cabo","墨西哥","NA","",1],"SJE":["瓜维亚雷河畔圣何塞","瓜维亚雷河畔圣何塞","","San José Del Guaviare","哥伦比亚","LA"],"SJI":["圣何塞","圣何塞","","San Jose","菲律宾","SEA"],"SJJ":["东萨拉热窝","东萨拉热窝","","Sarajevo","波斯尼亚和黑塞哥维那","EU","",1],"SJK":["圣若泽多斯坎波斯","圣若泽多斯坎波斯","","São José Dos Campos","巴西","LA"],"SJL":["圣加布里埃尔达卡绍埃拉","圣加布里埃尔达卡绍埃拉","","São Gabriel da Cachoeira","巴西","LA"],"SJO":["圣何塞胡安·圣玛丽亚","圣何塞","","San José (Alajuela)","哥斯达黎加","NA","Q3070",1],"SJP":["普雷图河畔圣若泽","普雷图河畔圣若泽","","São José do Rio Preto","巴西","LA"],"SJT":["聖安吉洛地區","","","San Angelo","美国","NA"],"SJU":["圣胡安路易斯·穆尼奥斯·马林","圣胡安","","San Juan","波多黎各","NA","Q41211",1],"SJW":["石家庄","石家庄","","Shijiazhuang","中国","CN","",1],"SJZ":["韦拉什","韦拉什","","Velas","葡萄牙","EU"],"SKB":["巴斯特尔","巴斯特尔","","Basseterre","圣基茨和尼维斯","NA","",1],"SKD":["撒马尔罕","撒马尔罕","","Samarkand","乌兹别克斯坦","CA","",1],"SKG":["塞萨洛尼基","塞萨洛尼基","","Thessaloniki","希腊","EU","",1],"SKN":["斯托克馬克內斯","斯托克馬克內斯","","Hadsel","挪威","EU"],"SKO":["索科托","索科托","","Sokoto","尼日利亚","AF","",1],"SKP":["斯科普里","斯科普里","","Ilinden","北马其顿","EU","",1],"SKT":["锡亚尔科特","锡亚尔科特","","Sialkot","巴基斯坦","SA","",1],"SKX":["萨兰斯克","萨兰斯克","","Saransk","俄罗斯","EU","",1],"SKZ":["苏库尔","苏库尔","","Sukkur","巴基斯坦","SA"],"SLA":["萨尔塔","萨尔塔","","Salta","阿根廷","LA","",1],"SLC":["盐湖城","盐湖城","","Salt Lake City","美国","NA","",1],"SLD":["斯利亚奇","斯利亚奇","","Sliač","斯洛伐克","EU"],"SLE":["塞勒姆","塞勒姆","","Salem","美国","NA"],"SLK":["萨拉纳克湖","萨拉纳克湖","","Saranac Lake","美国","NA"],"SLL":["佐法尔省","佐法尔省","","Salalah","阿曼","ME","",1],"SLM":["萨拉曼卡","萨拉曼卡","","Salamanca","西班牙","EU"],"SLN":["萨利纳","萨利纳","","Salina","美国","NA"],"SLP":["圣路易斯波托西","圣路易斯波托西","","San Luis Potosí","墨西哥","NA"],"SLU":["圣卢西亚行政区划","圣卢西亚行政区划","","Castries","圣卢西亚","NA"],"SLW":["萨尔蒂约","萨尔蒂约","","Saltillo","墨西哥","NA"],"SLY":["萨列哈尔德","萨列哈尔德","","Salekhard","俄罗斯","EU"],"SLZ":["圣路易斯","圣路易斯","","São Luís","巴西","LA","",1],"SMA":["波尔图镇","波尔图镇","","Vila do Porto","葡萄牙","EU"],"SMF":["萨克拉门托","萨克拉门托","","Sacramento","美国","NA","",1],"SMI":["瓦西","瓦西","","Samos Island","希腊","EU"],"SML":["长岛長島","长岛","","Stella Maris","巴哈马","NA","Q890879"],"SMN":["Salmon","","","Salmon","美国","NA"],"SMR":["圣玛尔塔","圣玛尔塔","","Santa Marta","哥伦比亚","LA"],"SMS":["布拉哈岛","布拉哈岛","","Vohilava","马达加斯加","AF"],"SMW":["斯马拉","斯马拉","","Smara","西撒哈拉","AF"],"SMX":["圣玛丽亚","圣玛丽亚","","Santa Maria","美国","NA"],"SNA":["圣安娜","圣安娜","","Santa Ana","美国","NA","",1],"SNB":["梅尔维尔岛","梅尔维尔岛","","Milikapiti","澳大利亚","OC"],"SNC":["萨利纳斯","萨利纳斯","","Salinas/La Libertad","厄瓜多尔","LA","",1],"SNE":["里贝拉布拉瓦","里贝拉布拉瓦","","Preguiça","佛得角","AF"],"SNN":["利默里克","利默里克","","Shannon","爱尔兰","EU","",1],"SNO":["沙功那空","","","","泰国","SEA","TH:"],"SNP":["聖保羅島 (阿拉斯加)","聖保羅島 (阿拉斯加)","","St Paul Island","美国","NA"],"SNU":["圣克拉拉","圣克拉拉","","Santa Clara","古巴","NA","",1],"SNV":["聖埃倫娜德瓦伊倫","聖埃倫娜德瓦伊倫","","Santa Elena de Uairén","委内瑞拉","LA"],"SNW":["丹兑","丹兑","","Thandwe","缅甸","SEA"],"SOB":["沙尔迈尔莱克","沙尔迈尔莱克","","Sármellék","匈牙利","EU"],"SOC":["梭罗","梭罗","","Surakarta","印度尼西亚","SEA","",1],"SOF":["索非亚市镇","索非亚市镇","","Sofia","保加利亚","EU","",1],"SOJ":["瑟休森","瑟休森","","Sørkjosen","挪威","EU"],"SOM":["埃尔蒂格雷","埃尔蒂格雷","","El Tigre","委内瑞拉","LA"],"SON":["卢甘维尔","卢甘维尔","","Luganville","瓦努阿图","OC"],"SOQ":["索龙","索龙","","Sorong","印度尼西亚","SEA"],"SOU":["南安普敦","南安普敦","","Southampton","英国","EU"],"SOW":["肖洛","肖洛","","Show Low","美国","NA"],"SPC":["圣克鲁斯-德拉帕尔马","圣克鲁斯-德拉帕尔马","","Sta Cruz de la Palma, La Palma Island","西班牙","AF"],"SPD":["赛德普尔乌帕齐拉","赛德普尔乌帕齐拉","","Saidpur","孟加拉国","SA"],"SPI":["斯普林菲尔德","斯普林菲尔德","","Springfield","美国","NA"],"SPN":["塞班","","","I Fadang, Saipan","北马里亚纳群岛","OC"],"SPP":["梅农盖","梅农盖","","Menongue","安哥拉","AF"],"SPR":["聖佩德羅","聖佩德羅","","San Pedro","伯利兹","NA"],"SPS":["威奇托福尔斯","威奇托福尔斯","","Wichita Falls","美国","NA"],"SPU":["斯普利特","斯普利特","","Split","克罗地亚","EU","",1],"SPX":["谢赫扎耶德城","谢赫扎耶德城","","Al Jiza","埃及","AF","",1],"SPY":["圣佩德罗","圣佩德罗","","","科特迪瓦","AF"],"SQD":["上饶","上饶","","Shangrao (Hengfeng)","中国","CN"],"SQG":["德柏利安","","","Sintang","印度尼西亚","SEA"],"SQJ":["三明","三明","","Sanming (Sha)","中国","CN"],"SQL":["圣卡洛斯","圣卡洛斯","","San Carlos","美国","NA"],"SRE":["苏克雷","苏克雷","","Sucre","玻利维亚","LA","",1],"SRG":["三宝垄","三宝垄","","Semarang","印度尼西亚","SEA","",1],"SRP":["斯图尔","斯图尔","","Leirvik","挪威","EU"],"SRQ":["萨拉索塔","萨拉索塔","","Sarasota/Bradenton","美国","NA","",1],"SRT":["索羅提","索羅提","","Soroti","乌干达","AF"],"SRY":["薩里","","","Sari","伊朗","ME"],"SRZ":["圣克鲁斯-德拉谢拉","圣克鲁斯-德拉谢拉","","Santa Cruz","玻利维亚","LA","Q170688"],"SSA":["萨尔瓦多","萨尔瓦多","","Salvador","巴西","LA","",1],"SSG":["马拉博","马拉博","","Malabo","赤道几内亚","AF","",1],"SSH":["沙姆沙伊赫","沙姆沙伊赫","","Sharm El Sheikh","埃及","AF","",1],"SSJ":["桑内舍恩","桑内舍恩","","Alstahaug","挪威","EU"],"SST":["聖泰蕾西塔","聖泰蕾西塔","","Santa Teresita","阿根廷","LA"],"SSY":["Mbanza Congo","","","Mbanza Congo","安哥拉","AF"],"STC":["圣云","圣云","","Saint Cloud","美国","NA"],"STD":["圣克里斯托瓦尔","圣克里斯托瓦尔","","Santo Domingo","委内瑞拉","LA"],"STG":["圣乔治","圣乔治","","St George","美国","NA"],"STI":["圣地亚哥","圣地亚哥","","Santiago","多米尼加","NA","",1],"STL":["大聖路易都會區","大聖路易都會區","","St Louis","美国","NA","",1],"STM":["圣塔伦","圣塔伦","","Santarém","巴西","LA"],"STN":["伦敦斯坦斯特德","伦敦","","London, Essex","英国","EU","Q84",1],"STR":["斯图加特","斯图加特","","Stuttgart","德国","EU","",1],"STS":["圣罗莎","圣罗莎","","Santa Rosa","美国","NA"],"STT":["夏洛特阿马利亚","夏洛特阿马利亚","","Charlotte Amalie","美属维尔京群岛","NA","",1],"STV":["苏拉特","","","Surat","印度","SA","",1],"STW":["斯塔夫罗波尔","斯塔夫罗波尔","","Stavropol","俄罗斯","EU"],"STX":["圣克洛伊岛","圣克洛伊岛","","Christiansted","美属维尔京群岛","NA"],"SUB":["泗水","泗水","","Surabaya","印度尼西亚","SEA","",1],"SUF":["拉梅齐亚泰尔梅","拉梅齐亚泰尔梅","","Lamezia Terme (CZ)","意大利","EU","",1],"SUG":["苏里高","苏里高","","Surigao City","菲律宾","SEA"],"SUI":["苏呼米","苏呼米","","Sukhumi","格鲁吉亚","CA","",1],"SUJ":["萨图马雷","萨图马雷","","Satu Mare","罗马尼亚","EU"],"SUN":["凯彻姆","凯彻姆","","Hailey","美国","NA"],"SUV":["苏瓦","苏瓦","","Nausori","斐济","OC","",1],"SUX":["苏城","苏城","","Sioux City","美国","NA"],"SVA":["萨文格","萨文格","","Savoonga","美国","NA"],"SVB":["桑巴瓦","桑巴瓦","","Sambava","马达加斯加","AF"],"SVC":["银城","银城","","Silver City","美国","NA"],"SVD":["金斯敦","金斯敦","","Kingstown","圣文森特和格林纳丁斯","NA","",1],"SVG":["斯塔万格","斯塔万格","","Stavanger","挪威","EU","",1],"SVI":["圣维森特德尔卡古安","圣维森特德尔卡古安","","San Vicente Del Caguán","哥伦比亚","LA"],"SVJ":["斯沃尔韦尔","斯沃尔韦尔","","Svolvær","挪威","EU"],"SVL":["萨翁林纳","萨翁林纳","","Savonlinna","芬兰","EU"],"SVO":["莫斯科谢列梅捷沃","莫斯科","","Moscow","俄罗斯","EU","Q649",1],"SVQ":["塞维利亚","塞维利亚","","Seville","西班牙","EU","",1],"SVX":["叶卡捷琳堡","叶卡捷琳堡","","Yekaterinburg","俄罗斯","EU","",1],"SVZ":["西普里亚诺·卡斯特罗将军","","","San Antonio del Tachira","委内瑞拉","LA"],"SWA":["汕头","汕头","","Jieyang (Rongcheng)","中国","CN","",1],"SWF":["哈得遜河谷","哈得遜河谷","","Newburgh","美国","NA"],"SWO":["斯蒂尔沃特","斯蒂尔沃特","","Stillwater","美国","NA"],"SXB":["斯特拉斯堡","斯特拉斯堡","","Strasbourg","法国","EU","",1],"SXM":["菲利普斯堡","菲利普斯堡","","Sint Maarten","荷属圣马丁","NA","",1],"SXR":["斯利那加","斯利那加","","Srinagar","印度","SA","",1],"SYD":["悉尼","悉尼","","Sydney (Mascot)","澳大利亚","OC","",1],"SYO":["庄内町","庄内町","","Shonai","日本","EA"],"SYQ":["圣何塞托维亚斯·博拉尼奥斯","圣何塞","","San Jose","哥斯达黎加","NA","Q3070"],"SYR":["锡拉丘兹","锡拉丘兹","","Syracuse","美国","NA","",1],"SYS":["萨斯克拉赫","萨斯克拉赫","","Saskylakh","俄罗斯","EU"],"SYX":["三亚","三亚","","Sanya (Tianya)","中国","CN","",1],"SYY":["斯多诺威","斯多诺威","","Stornoway, Western Isles","英国","EU"],"SYZ":["设拉子","设拉子","","Shiraz","伊朗","ME","",1],"SZA":["索约","索约","","Soyo","安哥拉","AF"],"SZB":["梳邦国会议席","梳邦国会议席","","Subang","马来西亚","SEA","",1],"SZF":["萨姆松","萨姆松","","Samsun","土耳其","EU"],"SZG":["萨尔茨堡","萨尔茨堡","","Salzburg","奥地利","EU","",1],"SZH":["朔州滋润","","","Shuozhou","中国","CN"],"SZK":["克鲁格国家公园","克鲁格国家公园","","Skukuza","南非","AF"],"SZX":["深圳","深圳","","Shenzhen","中国","CN","",1],"SZY":["什奇特诺","什奇特诺","","Szymany","波兰","EU"],"SZZ":["戈莱纽夫","戈莱纽夫","","Szczecin(Glewice)","波兰","EU","",1],"TAB":["查瓜纳斯","查瓜纳斯","","Scarborough","特立尼达和多巴哥","NA","",1],"TAC":["塔克洛班","塔克洛班","","Tacloban City","菲律宾","SEA"],"TAE":["大邱","大邱","","Daegu","韩国","EA","",1],"TAG":["塔比拉兰","塔比拉兰","","Panglao","菲律宾","SEA","",1],"TAH":["塔納島","塔納島","","Tanna Island","瓦努阿图","OC"],"TAI":["塔伊兹","塔伊兹","","Taiz","也门","ME"],"TAK":["高松","高松","","Takamatsu","日本","EA","",1],"TAM":["坦皮科","坦皮科","","Ciudad Madero","墨西哥","NA"],"TAO":["青岛","青岛","","Qingdao (Jiaozhou)","中国","CN","",1],"TAP":["塔帕丘拉","塔帕丘拉","","Tapachula","墨西哥","NA"],"TAS":["塔什干","塔什干","","Tashkent","乌兹别克斯坦","CA","",1],"TAT":["波普拉德","波普拉德","","Poprad","斯洛伐克","EU"],"TAY":["塔尔图","塔尔图","","Tartu","爱沙尼亚","EU"],"TAZ":["达沙古兹","达沙古兹","","Daşoguz","土库曼斯坦","CA","",1],"TBB":["綏和","綏和","","Tuy Hoa","越南","SEA"],"TBH":["塔布拉斯","塔布拉斯","","Tablas Island","菲律宾","SEA"],"TBI":["卡特島","","","Cat Island","巴哈马","NA"],"TBJ":["泰拜尔盖","泰拜尔盖","","Tabarka","突尼斯","AF"],"TBN":["韋恩斯維爾","韋恩斯維爾","","Fort Leonard Wood","美国","NA"],"TBP":["通贝斯","通贝斯","","Tumbes","秘鲁","LA"],"TBS":["第比利斯","第比利斯","","Tbilisi","格鲁吉亚","CA","",1],"TBT":["塔巴廷加","塔巴廷加","","Tabatinga","巴西","LA"],"TBU":["努库阿洛法","努库阿洛法","","Nuku'alofa","汤加","OC","",1],"TBZ":["大不里士","大不里士","","Tabriz","伊朗","ME","",1],"TCA":["滕南特克里克","","","Tennant Creek","澳大利亚","OC"],"TCB":["阿巴科","","","Treasure Cay","巴哈马","NA"],"TCO":["图马科","图马科","","Tumaco","哥伦比亚","LA"],"TCP":["塔巴","塔巴","","Taba","埃及","AF"],"TCQ":["塔克纳","塔克纳","","Tacna","秘鲁","LA"],"TCZ":["腾冲","腾冲","","Baoshan (Tengchong)","中国","CN"],"TDD":["特立尼达","特立尼达","","Trinidad","玻利维亚","LA"],"TDK":["塔尔迪库尔干","塔尔迪库尔干","","Taldykorgan","哈萨克斯坦","CA"],"TDX":["达叻府","达叻府","","Laem Ngop","泰国","SEA"],"TEB":["泰特伯勒","泰特伯勒","","Teterboro","美国","NA"],"TEE":["泰贝萨","泰贝萨","","Tébessi","阿尔及利亚","AF"],"TEN":["铜仁","铜仁","","Tongren (Daxing)","中国","CN"],"TEQ":["乔尔卢","乔尔卢","","Çorlu","土耳其","EU"],"TER":["普拉亚-达维多利亚","普拉亚-达维多利亚","","Praia da Vitória","葡萄牙","EU"],"TET":["太特","太特","","Tete","莫桑比克","AF","",1],"TEX":["特柳赖德","特柳赖德","","Telluride","美国","NA"],"TEZ":["泰茲普爾","","","","印度","SA"],"TFF":["特费","特费","","Tefé","巴西","LA"],"TFN":["特内里费岛特内里费北部-拉拉古纳市","特内里费岛","","Tenerife","西班牙","AF","Q40846",1],"TFS":["特内里费岛特内里费南部","特内里费岛","","Tenerife","西班牙","AF","Q40846",1],"TFU":["成都天府","成都","","Chengdu (Jianyang)","中国","CN","C:CTU",1],"TGD":["波德戈里察","波德戈里察","","Podgorica","黑山","EU","",1],"TGG":["瓜拉登嘉楼","瓜拉登嘉楼","","Kuala Terengganu","马来西亚","SEA"],"TGJ":["Tiga","","","Tiga","新喀里多尼亚","OC"],"TGM":["特尔古穆列什","特尔古穆列什","","Recea","罗马尼亚","EU"],"TGO":["通辽","通辽","","Tongliao","中国","CN"],"TGR":["图古尔特","图古尔特","","Touggourt","阿尔及利亚","AF"],"TGT":["坦噶","坦噶","","Tanga","坦桑尼亚","AF"],"TGU":["特古西加尔巴","特古西加尔巴","","Tegucigalpa","洪都拉斯","NA"],"TGZ":["图斯特拉－古铁雷斯","图斯特拉－古铁雷斯","","Tuxtla Gutiérrez","墨西哥","NA"],"THE":["特雷西纳","特雷西纳","","Teresina","巴西","LA"],"THG":["比洛威拉","","","Biloela","澳大利亚","OC"],"THL":["大其力","大其力","","Tachileik","缅甸","SEA"],"THN":["特罗尔海坦","特罗尔海坦","","Trollhättan","瑞典","EU"],"THQ":["天水","天水","","Tianshui (Maiji)","中国","CN"],"THR":["德黑兰梅赫拉巴德","德黑兰","","Tehran","伊朗","ME","Q3616",1],"THS":["素可泰府","素可泰府","","","泰国","SEA"],"TIA":["地拉那","地拉那","","Rinas","阿尔巴尼亚","EU","",1],"TIF":["塔伊夫","塔伊夫","","Taif","沙特阿拉伯","ME","",1],"TIH":["蒂凯豪环礁","蒂凯豪环礁","","Tuherahera","法属波利尼西亚","OC"],"TIJ":["蒂华纳","蒂华纳","","Tijuana","墨西哥","NA","",1],"TIM":["蒂米卡","蒂米卡","","Timika","印度尼西亚","SEA"],"TIN":["廷杜夫","廷杜夫","","Tindouf","阿尔及利亚","AF"],"TIQ":["天宁","","","Tinian Island","北马里亚纳群岛","OC"],"TIR":["蒂鲁伯蒂","蒂鲁伯蒂","","Tirupati","印度","SA","",1],"TIU":["蒂马鲁","蒂马鲁","","","新西兰","OC"],"TIV":["蒂瓦特","蒂瓦特","","Tivat","黑山","EU"],"TIW":["塔科马","塔科马","","Tacoma","美国","NA"],"TJA":["塔里哈","塔里哈","","Tarija","玻利维亚","LA"],"TJG":["Tanta-Tabalong","","","Tanta-Tabalong","印度尼西亚","SEA"],"TJH":["丰冈","丰冈","","Toyooka","日本","EA"],"TJK":["托卡特","托卡特","","Tokat","土耳其","EU"],"TJM":["秋明","秋明","","Tyumen","俄罗斯","EU","",1],"TJU":["库洛布","库洛布","","Kulob","塔吉克斯坦","CA","",1],"TKD":["塞康第-塔科拉迪","塞康第-塔科拉迪","","Sekondi-Takoradi","加纳","AF"],"TKF":["特拉基","特拉基","","Truckee","美国","NA"],"TKG":["楠榜省","楠榜省","","Bandar Lampung","印度尼西亚","SEA"],"TKK":["维诺","维诺","","Weno Island","密克罗尼西亚联邦","OC","",1],"TKN":["德之岛","德之岛","","Amagi","日本","EA"],"TKP":["塔卡波托环礁","塔卡波托环礁","","","法属波利尼西亚","OC"],"TKS":["德岛","德岛","","Tokushima","日本","EA","",1],"TKU":["图尔库","图尔库","","Turku","芬兰","EU","",1],"TKX":["塔卡羅阿環礁","塔卡羅阿環礁","","","法属波利尼西亚","OC"],"TLC":["托卢卡","托卢卡","","Toluca","墨西哥","NA","",1],"TLE":["图利亚拉","图利亚拉","","Toliara","马达加斯加","AF"],"TLH":["塔拉赫西","塔拉赫西","","Tallahassee","美国","NA"],"TLL":["塔林","塔林","","Tallinn","爱沙尼亚","EU","",1],"TLM":["特莱姆森","特莱姆森","","Zenata","阿尔及利亚","AF","",1],"TLN":["土伦","土伦","","Hyères, Var","法国","EU"],"TLQ":["吐鲁番","吐鲁番","","Turpan","中国","CN"],"TLS":["图卢兹","图卢兹","","Toulouse/Blagnac","法国","EU","",1],"TLV":["特拉维夫","特拉维夫","","Tel Aviv","以色列","ME","",1],"TME":["塔梅","塔梅","","Tame","哥伦比亚","LA"],"TMH":["塔纳默拉","","","Tanah Merah","印度尼西亚","SEA"],"TMJ":["铁尔米兹","铁尔米兹","","Termez","乌兹别克斯坦","CA"],"TML":["塔马利","塔马利","","Tamale","加纳","AF","",1],"TMM":["图阿马西纳","图阿马西纳","","Toamasina","马达加斯加","AF","",1],"TMP":["坦佩雷","坦佩雷","","Tampere / Pirkkala","芬兰","EU","",1],"TMR":["塔曼拉塞特","塔曼拉塞特","","Tamanrasset","阿尔及利亚","AF","",1],"TMS":["圣多美","圣多美","","São Tomé","圣多美和普林西比","AF","",1],"TMT":["奥里希米纳","奥里希米纳","","Oriximiná","巴西","LA"],"TMW":["塔姆沃思","塔姆沃思","","Tamworth","澳大利亚","OC"],"TMX":["提米蒙","提米蒙","","Timimoun","阿尔及利亚","AF"],"TNA":["济南","济南","","Jinan (Licheng)","中国","CN","",1],"TND":["特立尼达","特立尼达","","Trinidad","古巴","NA"],"TNE":["種子島","","","Tanegashima","日本","EA"],"TNG":["丹吉尔","丹吉尔","","Tangier","摩洛哥","AF","",1],"TNH":["通化","通化","","Tonghua","中国","CN"],"TNJ":["丹戎槟榔","丹戎槟榔","","Tanjung Pinang-Bintan Island","印度尼西亚","SEA"],"TNN":["台南","台南","","Tainan (Rende)","中国台湾","HMT","",1],"TNR":["塔那那利佛省","塔那那利佛省","","Antananarivo","马达加斯加","AF","",1],"TOD":["装药","装药","","Tioman Island","马来西亚","SEA"],"TOE":["内夫塔","内夫塔","","Tozeur","突尼斯","AF"],"TOF":["托木斯克","托木斯克","","Tomsk","俄罗斯","EU","",1],"TOL":["托莱多","托莱多","","Toledo","美国","NA"],"TOM":["通布图","通布图","","Timbuktu","马里","AF","",1],"TOS":["特罗姆瑟","特罗姆瑟","","Tromsø","挪威","EU","",1],"TOU":["图奥","图奥","","Touho","新喀里多尼亚","OC"],"TOY":["富山","富山","","Toyama","日本","EA"],"TPA":["坦帕","坦帕","","Tampa","美国","NA","",1],"TPE":["台湾桃园","","","Taoyuan","中国台湾","HMT","",1],"TPJ":["塔普勒瓊縣","塔普勒瓊縣","","Taplejung","尼泊尔","SA"],"TPP":["塔拉波托","塔拉波托","","Tarapoto","秘鲁","LA"],"TPQ":["特皮克","特皮克","","Tepic","墨西哥","NA"],"TPS":["特拉帕尼","特拉帕尼","","Trapani (TP)","意大利","EU"],"TQO":["图卢姆","","","Tulum","墨西哥","NA","",1],"TRA":["多良间村","多良间村","","Tarama","日本","EA"],"TRC":["托雷翁","托雷翁","","Torreón","墨西哥","NA"],"TRD":["特伦德拉格郡","特伦德拉格郡","","Trondheim","挪威","EU","",1],"TRE":["泰里岛","泰里岛","","Balemartine, Argyll and Bute","英国","EU"],"TRF":["桑讷菲尤尔","桑讷菲尤尔","","Sandefjord(Torp)","挪威","EU","",1],"TRG":["陶朗加","陶朗加","","Tauranga","新西兰","OC"],"TRI":["三城","三城","","Blountville","美国","NA"],"TRK":["打拉根","打拉根","","Tarakan","印度尼西亚","SEA"],"TRN":["都灵","都灵","","Caselle Torinese (TO)","意大利","EU","",1],"TRR":["亭可马里","亭可马里","","Trincomalee","斯里兰卡","SA"],"TRS":["的里雅斯特","的里雅斯特","","Ronchi dei Legionari/Trieste","意大利","EU","",1],"TRT":["Toraja","","","Toraja","印度尼西亚","SEA"],"TRU":["特鲁希略","特鲁希略","","Trujillo","秘鲁","LA","",1],"TRV":["特里凡得琅","特里凡得琅","","Thiruvananthapuram","印度","SA","",1],"TRW":["南塔拉瓦","南塔拉瓦","","South Tarawa","基里巴斯","OC","",1],"TRZ":["蒂鲁吉拉帕利","蒂鲁吉拉帕利","","Tiruchirappalli","印度","SA","",1],"TSA":["台北","台北","","Taipei (Songshan)","中国台湾","HMT","",1],"TSF":["特雷維索","特雷維索","","Treviso (TV)","意大利","EU","",1],"TSJ":["对马","对马","","Tsushima","日本","EA"],"TSM":["陶斯","陶斯","","Taos","美国","NA"],"TSN":["天津","天津","","Tianjin","中国","CN","",1],"TSR":["蒂米什县","蒂米什县","","Timişoara","罗马尼亚","EU","",1],"TST":["董里","董里","","Trang","泰国","SEA"],"TSV":["汤斯维尔","汤斯维尔","","Townsville","澳大利亚","OC"],"TTA":["谭谭","谭谭","","Tan Tan","摩洛哥","AF"],"TTE":["德那第","德那第","","Ternate","印度尼西亚","SEA"],"TTJ":["鸟取","鸟取","","Tottori","日本","EA"],"TTN":["特伦顿","特伦顿","","Ewing Township","美国","NA"],"TTT":["台东","台东","","Taitung City","中国台湾","HMT"],"TTU":["得土安","得土安","","Tétouan","摩洛哥","AF","",1],"TUA":["路易斯·曼蒂利亚中校","","","Tulcán","厄瓜多尔","LA"],"TUB":["土布艾群岛","土布艾群岛","","","法属波利尼西亚","OC"],"TUC":["图库曼省","图库曼省","","San Miguel de Tucumán","阿根廷","LA","",1],"TUF":["图尔","图尔","","Tours, Indre-et-Loire","法国","EU"],"TUG":["土格加劳","土格加劳","","Tuguegarao City","菲律宾","SEA"],"TUI":["圖賴夫","圖賴夫","","Turaif","沙特阿拉伯","ME"],"TUK":["土爾巴特","土爾巴特","","Turbat","巴基斯坦","SA","",1],"TUL":["塔尔萨","塔尔萨","","Tulsa","美国","NA","",1],"TUN":["突尼斯","突尼斯","","Tunis","突尼斯","AF","",1],"TUO":["陶波","陶波","","Taupo","新西兰","OC"],"TUP":["图珀洛","图珀洛","","Tupelo","美国","NA"],"TUR":["图库鲁伊","图库鲁伊","","Tucuruí","巴西","LA"],"TUS":["图森","图森","","Tucson","美国","NA","",1],"TUU":["塔布克","塔布克","","Tabuk","沙特阿拉伯","ME","",1],"TVC":["特拉弗斯城","特拉弗斯城","","Traverse City","美国","NA"],"TVF":["锡夫里弗福尔斯","锡夫里弗福尔斯","","Thief River Falls","美国","NA"],"TVT":["Tashkent","","","Tashkent","乌兹别克斯坦","CA"],"TVY":["土瓦","土瓦","","Dawei","缅甸","SEA"],"TWF":["特温福尔斯","特温福尔斯","","Twin Falls","美国","NA"],"TWT":["邦奥岛","邦奥岛","","Bongao","菲律宾","SEA"],"TWU":["斗湖省","斗湖省","","Tawau","马来西亚","SEA"],"TXE":["打京岸","打京岸","","Takengon","印度尼西亚","SEA"],"TXK":["特克薩卡納地方","","","Texarkana","美国","NA"],"TXN":["黄山","黄山","","Huangshan","中国","CN","",1],"TYF":["图什比","图什比","","Torsby","瑞典","EU"],"TYL":["塔拉拉","塔拉拉","","Talara","秘鲁","LA"],"TYN":["太原","太原","","Taiyuan","中国","CN","",1],"TYR":["东得克萨斯","东得克萨斯","","Tyler","美国","NA"],"TYS":["诺克斯维尔","诺克斯维尔","","Knoxville/Maryville","美国","NA","",1],"TZA":["伯利兹貝里斯市-市政","伯利兹","","Belize City","伯利兹","NA","Q108223"],"TZL":["图兹拉","图兹拉","","Dubrave Gornje","波斯尼亚和黑塞哥维那","EU","",1],"TZN":["剛果鎮","","","Andros","巴哈马","NA"],"TZX":["特拉布宗","特拉布宗","","Trabzon","土耳其","EU"],"UAI":["蘇艾","蘇艾","","Suai","东帝汶","SEA"],"UAQ":["圣胡安","圣胡安","","San Juan","阿根廷","LA"],"UAR":["布阿法","布阿法","","Bouarfa","摩洛哥","AF"],"UBA":["乌贝拉巴","乌贝拉巴","","Uberaba","巴西","LA"],"UBJ":["宇部","宇部","","Ube","日本","EA"],"UBN":["新烏蘭巴托","","","Ulaanbaatar (Sergelen)","蒙古国","EA","",1],"UBP":["乌汶叻差他尼","","","Ubon Ratchathani","泰国","SEA"],"UCB":["乌兰察布","乌兰察布","","Ulanqab","中国","CN"],"UCT":["乌赫塔","乌赫塔","","Ukhta","俄罗斯","EU"],"UDI":["乌贝兰迪亚","乌贝兰迪亚","","Uberlândia","巴西","LA"],"UDR":["乌代布尔","乌代布尔","","Udaipur","印度","SA"],"UEL":["克利马内","克利马内","","Quelimane","莫桑比克","AF"],"UEO":["久米岛町","久米岛町","","Kumejima","日本","EA"],"UET":["奎达","奎达","","Quetta","巴基斯坦","SA","",1],"UFA":["乌法","乌法","","Ufa","俄罗斯","EU","",1],"UGA":["布尔干","","","Bulgan","蒙古国","EA"],"UGC":["乌尔根奇","乌尔根奇","","Urgench","乌兹别克斯坦","CA","",1],"UGU":["Bilogai","","","Bilogai","印度尼西亚","SEA"],"UIB":["基布多","基布多","","Quibdó","哥伦比亚","LA"],"UIH":["归仁","归仁","","Quy Nohn","越南","SEA"],"UIN":["昆西","昆西","","Quincy","美国","NA"],"UIO":["基多","基多","","Quito","厄瓜多尔","LA","",1],"UKB":["神户","神户","","Kobe","日本","EA","",1],"UKE":["Bhawanipatna","","","Bhawanipatna","印度","SA"],"UKK":["厄斯克门","厄斯克门","","Ust-Kamenogorsk (Oskemen)","哈萨克斯坦","CA","",1],"UKX":["乌斯季库特","乌斯季库特","","Ust-Kut","俄罗斯","EU"],"ULG":["乌列盖","乌列盖","","Ölgii","蒙古国","EA"],"ULH":["欧拉","欧拉","","Al-Ula","沙特阿拉伯","ME","",1],"ULK":["连斯克","连斯克","","Lensk","俄罗斯","EU"],"ULO":["烏蘭固木","","","Ulaangom","蒙古国","EA"],"ULP":["Quilpie Airport","","","","澳大利亚","OC"],"ULU":["古盧","古盧","","Gulu","乌干达","AF"],"ULV":["乌里扬诺夫斯克烏里揚諾夫斯克","乌里扬诺夫斯克","","Ulyanovsk","俄罗斯","EU","Q5627"],"ULY":["乌里扬诺夫斯克东方港","乌里扬诺夫斯克","","Cherdakly","俄罗斯","EU","Q5627"],"UME":["于默奥","于默奥","","Umeå","瑞典","EU","",1],"UNI":["尤宁岛","尤宁岛","","Union Island","圣文森特和格林纳丁斯","NA"],"UNK":["尤纳拉克利特","尤纳拉克利特","","Unalakleet","美国","NA"],"UNN":["拉廊府治县","拉廊府治县","","Ranong","泰国","SEA"],"UPG":["望加锡","望加锡","","Makassar","印度尼西亚","SEA","",1],"UPN":["乌鲁阿潘","乌鲁阿潘","","Uruapan","墨西哥","NA"],"URA":["乌拉尔","乌拉尔","","Uralsk","哈萨克斯坦","CA","",1],"URC":["乌鲁木齐","乌鲁木齐","","Ürümqi","中国","CN","",1],"URE":["库雷萨雷","库雷萨雷","","Kuressaare","爱沙尼亚","EU"],"URG":["乌鲁瓜亚纳","乌鲁瓜亚纳","","Uruguaiana","巴西","LA"],"URJ":["乌拉伊","乌拉伊","","Uray","俄罗斯","EU"],"URT":["素叻","","","Surat Thani","泰国","SEA"],"URY":["Gurayat","","","Gurayat","沙特阿拉伯","ME"],"USA":["康科德","康科德","","Concord","美国","NA"],"USH":["乌斯怀亚","乌斯怀亚","","Ushuaia","阿根廷","LA"],"USK":["乌辛斯克","乌辛斯克","","Usinsk","俄罗斯","EU"],"USM":["沙湄岛","沙湄岛","","Na Thon (Ko Samui Island)","泰国","SEA","",1],"USN":["蔚山","蔚山","","Ulsan","韩国","EA"],"USR":["乌斯季涅拉","乌斯季涅拉","","Ust-Nera","俄罗斯","EU"],"UST":["St Augustine","","","St Augustine","美国","NA"],"USU":["布桑加島","布桑加島","","Coron","菲律宾","SEA"],"UTH":["乌隆府","乌隆府","","Udon Thani","泰国","SEA","",1],"UTN":["乌平通","乌平通","","Upington","南非","AF"],"UTO":["印第安山长程雷达站","","","Utopia Creek","美国","NA"],"UTP":["罗勇府","罗勇府","","Rayong","泰国","SEA","",1],"UTT":["乌姆塔塔","乌姆塔塔","","Mthatha","南非","AF"],"UUA":["布古利马","布古利马","","Bugulma","俄罗斯","EU"],"UUD":["乌兰乌德","乌兰乌德","","Ulan Ude","俄罗斯","EU","",1],"UUS":["南萨哈林斯克","南萨哈林斯克","","Yuzhno-Sakhalinsk","俄罗斯","EU","",1],"UVE":["乌韦阿","乌韦阿","","Ouvéa","新喀里多尼亚","OC"],"UVF":["伯堡区","伯堡区","","Vieux Fort","圣卢西亚","NA","",1],"UYL":["尼亚拉","尼亚拉","","Nyala","苏丹","AF"],"UYN":["榆林","榆林","","Yulin","中国","CN"],"UYU":["烏尤尼","烏尤尼","","Quijarro","玻利维亚","LA","",1],"VAA":["瓦萨","瓦萨","","Vaasa","芬兰","EU","",1],"VAI":["瓦尼莫","","","Vanimo","巴布亚新几内亚","OC"],"VAM":["Villa International","","","Maamigili","马尔代夫","SA"],"VAN":["凡城","凡城","","Van","土耳其","EU"],"VAQ":["Vanavara","","","Vanavara","俄罗斯","EU"],"VAR":["瓦尔纳市镇","瓦尔纳市镇","","Varna","保加利亚","EU","",1],"VAS":["锡瓦斯","锡瓦斯","","Sivas","土耳其","EU"],"VAV":["瓦瓦烏","","","Vava'u Island","汤加","OC","",1],"VAW":["瓦尔德镇","瓦尔德镇","","Vardø","挪威","EU"],"VBS":["布雷西亚","布雷西亚","","Montichiari (BS)","意大利","EU"],"VBY":["維斯比","維斯比","","Visby","瑞典","EU","",1],"VCA":["芹苴","芹苴","","Can Tho","越南","SEA","",1],"VCE":["威尼斯","威尼斯","","Venezia (VE)","意大利","EU","",1],"VCP":["坎皮纳斯","坎皮纳斯","","Campinas","巴西","LA","",1],"VCS":["昆岛","昆岛","","Con Dao","越南","SEA"],"VCT":["维多利亚","维多利亚","","Victoria","美国","NA"],"VDC":["维多利亚-达孔基斯塔","维多利亚-达孔基斯塔","","Vitória da Conquista","巴西","LA"],"VDE":["耶罗岛","耶罗岛","","El Hierro Island","西班牙","AF"],"VDH":["洞海","洞海","","Dong Hoi","越南","SEA"],"VDM":["别德马","别德马","","Viedma / Carmen de Patagones","阿根廷","LA"],"VDO":["云屯","","","Van Don","越南","SEA"],"VDS":["瓦德瑟","瓦德瑟","","Vadsø","挪威","EU"],"VDZ":["瓦尔迪兹","瓦尔迪兹","","Valdez","美国","NA"],"VEL":["韦纳尔","韦纳尔","","Vernal","美国","NA"],"VEO":["Severo-Yeniseysk","","","Severo-Yeniseysk","俄罗斯","EU"],"VER":["哈拉帕","哈拉帕","","Veracruz","墨西哥","NA","",1],"VFA":["维多利亚瀑布城","维多利亚瀑布城","","Victoria Falls","津巴布韦","AF","",1],"VGA":["维杰亚瓦达","维杰亚瓦达","","Vijayawada","印度","SA","",1],"VGO":["蓬特韦德拉省","蓬特韦德拉省","","Vigo","西班牙","EU"],"VHM":["威廉敏娜","","","Vilhelmina","瑞典","EU"],"VIE":["维也纳","维也纳","","Vienna","奥地利","EU","",1],"VIG":["阿爾伯托阿德里阿尼","","","El Vigía","委内瑞拉","LA"],"VII":["荣市","荣市","","Vinh","越南","SEA"],"VIJ":["维尔京戈尔达岛","","","Spanish Town","英属维尔京群岛","NA"],"VIL":["达克拉","达克拉","","Dakhla","西撒哈拉","AF","",1],"VIT":["维多利亚-加斯泰斯","维多利亚-加斯泰斯","","Alava","西班牙","EU"],"VIX":["维多利亚","维多利亚","","Vitória","巴西","LA","",1],"VKG":["迪石","迪石","","Rach Gia","越南","SEA"],"VKO":["莫斯科伏努科沃","莫斯科","","Moscow","俄罗斯","EU","Q649",1],"VKT":["沃尔库塔","沃尔库塔","","Vorkuta","俄罗斯","EU"],"VLC":["巴伦西亚","巴伦西亚","","Valencia","西班牙","EU","",1],"VLD":["瓦尔德斯塔","瓦尔德斯塔","","Valdosta","美国","NA"],"VLI":["维拉港","维拉港","","Port Vila","瓦努阿图","OC","",1],"VLL":["比利亚努夫拉","比利亚努夫拉","","Valladolid","西班牙","EU"],"VLN":["巴伦西亚","巴伦西亚","","Valencia","委内瑞拉","LA","",1],"VLV":["Valera","","","Valera","委内瑞拉","LA"],"VMU":["Baimuru","","","Baimuru","巴布亚新几内亚","OC"],"VNO":["维尔纽斯","维尔纽斯","","Vilnius","立陶宛","EU","",1],"VNS":["瓦拉纳西","瓦拉纳西","","Varanasi","印度","SA","",1],"VNX":["维兰库洛","维兰库洛","","Vilanculo","莫桑比克","AF"],"VOG":["伏尔加格勒","伏尔加格勒","","Volgograd","俄罗斯","EU","",1],"VOL":["沃洛斯","沃洛斯","","Nea Anchialos","希腊","EU"],"VOZ":["沃罗涅日","沃罗涅日","","Voronezh","俄罗斯","EU"],"VPE":["翁吉瓦","翁吉瓦","","Ngiva","安哥拉","AF"],"VPN":["沃普纳菲厄泽","沃普纳菲厄泽","","Vopnafjörður","冰岛","EU"],"VPS":["华尔顿堡滩","华尔顿堡滩","","Valparaiso","美国","NA"],"VPY":["希莫尤","希莫尤","","Chimoio","莫桑比克","AF"],"VQS":["别克斯岛","别克斯岛","","Vieques","波多黎各","NA"],"VRA":["巴拉德罗","巴拉德罗","","Matanzas","古巴","NA","",1],"VRB":["维罗比奇","维罗比奇","","Vero Beach","美国","NA"],"VRC":["维拉克","维拉克","","Virac","菲律宾","SEA"],"VRL":["Vila Real","","","Vila Real","葡萄牙","EU"],"VRN":["维罗纳","维罗纳","","Caselle (VR)","意大利","EU","",1],"VSA":["比亚埃尔莫萨","比亚埃尔莫萨","","Villahermosa","墨西哥","NA","",1],"VSE":["维塞乌区","维塞乌区","","Viseu","葡萄牙","EU"],"VST":["韦斯特罗斯","韦斯特罗斯","","Stockholm / Västerås","瑞典","EU","",1],"VTE":["万象","万象","","Vientiane","老挝","SEA","",1],"VTU":["拉斯图纳斯","拉斯图纳斯","","Las Tunas","古巴","NA"],"VTZ":["维沙卡帕特南","维沙卡帕特南","","Visakhapatnam","印度","SA","",1],"VUP":["巴耶杜帕尔","巴耶杜帕尔","","Valledupar","哥伦比亚","LA"],"VUS":["大乌斯秋格","大乌斯秋格","","Velikiy Ustyug","俄罗斯","EU"],"VVC":["比亚维森西奥","比亚维森西奥","","Villavicencio","哥伦比亚","LA"],"VVI":["圣克鲁斯-德拉谢拉聖克魯斯 (玻利維亞)","圣克鲁斯-德拉谢拉","","Santa Cruz","玻利维亚","LA","Q170688",1],"VVO":["海参崴","海参崴","","Artyom","俄罗斯","EU","",1],"VVZ":["伊利济","伊利济","","Illizi","阿尔及利亚","AF"],"VXC":["利欣加","利欣加","","Lichinga","莫桑比克","AF"],"VXE":["圣维森特","圣维森特","","São Pedro","佛得角","AF","",1],"VXO":["韦克舍","韦克舍","","Växjö","瑞典","EU"],"VYI":["维柳伊斯克","维柳伊斯克","","Vilyuisk","俄罗斯","EU"],"WAE":["瓦迪達瓦西","瓦迪達瓦西","","Wadi Al Dawasir","沙特阿拉伯","ME"],"WAG":["旺阿努伊","旺阿努伊","","Wanganui","新西兰","OC"],"WAW":["华沙肖邦","华沙","","Warsaw","波兰","EU","Q270",1],"WBM":["Wapenamanda","","","Wapenamanda","巴布亚新几内亚","OC"],"WDH":["温得和克霍齐亚·库塔科","温得和克","","Windhoek","纳米比亚","AF","Q20618929",1],"WDS":["十堰","十堰","","Shiyan (Maojian)","中国","CN"],"WEF":["潍坊","潍坊","","Weifang (Kuiwen)","中国","CN"],"WEH":["威海","威海","","Weihai","中国","CN"],"WEI":["韦帕","韦帕","","Weipa","澳大利亚","OC"],"WGA":["沃加沃加","沃加沃加","","Forest Hill","澳大利亚","OC"],"WGE":["Walgett Airport","","","","澳大利亚","OC","AU:"],"WGN":["邵阳","邵阳","","Shaoyang (Wugang)","中国","CN"],"WHA":["芜湖","芜湖","","Wuhu","中国","CN"],"WHK":["华卡塔尼","华卡塔尼","","Whakatāne","新西兰","OC"],"WIC":["威克","威克","","Wick","英国","EU"],"WIL":["内罗毕威尔逊","内罗毕","","Nairobi","肯尼亚","AF","Q3870"],"WIN":["通泰","通泰","","","澳大利亚","OC"],"WJR":["瓦吉尔","瓦吉尔","","Wajir","肯尼亚","AF"],"WJU":["原州","原州","","Wonju","韩国","EA"],"WKA":["Wanaka","","","Wanaka","新西兰","OC"],"WKJ":["稚内","稚内","","Wakkanai","日本","EA"],"WKK":["阿莱克纳吉克","阿莱克纳吉克","","Aleknagik","美国","NA"],"WLG":["惠灵顿","惠灵顿","","Wellington","新西兰","OC","",1],"WLS":["马塔乌图","","","Wallis Island","瓦利斯和富图纳","OC","",1],"WMI":["华沙莫德林","华沙","","Nowy Dwór Mazowiecki","波兰","EU","Q270",1],"WMN":["馬魯安采特拉","馬魯安采特拉","","Maroantsetra","马达加斯加","AF"],"WMT":["仁怀","仁怀","","Zunyi","中国","CN"],"WMX":["瓦梅纳","瓦梅纳","","Wamena","印度尼西亚","SEA"],"WNI":["马塔霍拉","","","Wangi-wangi Island","印度尼西亚","SEA"],"WNP":["那牙","那牙","","Naga","菲律宾","SEA"],"WNR":["Windorah","","","Windorah","澳大利亚","OC"],"WNS":["讷瓦布沙阿","讷瓦布沙阿","","Nawabashah","巴基斯坦","SA"],"WNZ":["温州","温州","","Wenzhou (Longwan)","中国","CN","",1],"WOS":["元山","元山","","Wonsan","朝鲜","EA"],"WRE":["旺阿雷","旺阿雷","","Whangarei","新西兰","OC"],"WRG":["兰格尔","兰格尔","","Wrangell","美国","NA"],"WRO":["弗罗茨瓦夫","弗罗茨瓦夫","","Wrocław","波兰","EU","",1],"WSI":["西悉尼","","","Sydney","澳大利亚","OC","",1],"WST":["韦斯特利","韦斯特利","","Westerly","美国","NA"],"WSZ":["Westport","","","Westport","新西兰","OC"],"WTB":["图文巴","图文巴","","Toowoomba","澳大利亚","OC","",1],"WUA":["乌海","乌海","","Wuhai","中国","CN"],"WUH":["武汉","武汉","","Wuhan (Huangpi)","中国","CN","",1],"WUN":["Wiluna Airport","","","","澳大利亚","OC","AU:"],"WUS":["武夷山","武夷山","","Wuyishan","中国","CN"],"WUU":["瓦乌","","","Wau","南苏丹","AF"],"WUX":["无锡","无锡","","Wuxi","中国","CN","",1],"WUZ":["梧州","梧州","","Tangbu","中国","CN"],"WVB":["鲸湾港","鲸湾港","","Walvis Bay(Rooikop)","纳米比亚","AF","",1],"WWK":["韋瓦克","","","Wewak","巴布亚新几内亚","OC"],"WYA":["怀阿拉","怀阿拉","","Whyalla","澳大利亚","OC"],"WYS":["西黄石","西黄石","","West Yellowstone","美国","NA"],"XAI":["信阳","信阳","","Xinyang","中国","CN"],"XAP":["沙佩科","沙佩科","","Chapecó","巴西","LA"],"XBJ":["比尔詹德","比尔詹德","","Birjand","伊朗","ME","",1],"XCH":["聖誕島","聖誕島","","Flying Fish Cove","聖誕島","EA"],"XCR":["香槟地区沙隆","香槟地区沙隆","","Chalons en Champagne","法国","EU"],"XFN":["襄阳","襄阳","","Xiangyang (Xiangzhou)","中国","CN"],"XIC":["西昌","西昌","","Liangshan (Xichang)","中国","CN"],"XIL":["锡林浩特","锡林浩特","","Xilinhot","中国","CN"],"XIY":["西安","西安","","Xi'an","中国","CN","",1],"XKS":["Kasabonika","","","Kasabonika","加拿大","NA"],"XMH":["马尼希环礁","马尼希环礁","","","法属波利尼西亚","OC"],"XMN":["厦门","厦门","","Xiamen","中国","CN","",1],"XMS":["马卡斯","马卡斯","","Macas","厄瓜多尔","LA"],"XNA":["费耶特维尔","费耶特维尔","","Fayetteville/Springdale/Rogers","美国","NA"],"XNN":["西宁","西宁","","Haidong (Huzhu Tu Autonomous County)","中国","CN","",1],"XPL":["科馬亞瓜","","","Palmerola","洪都拉斯","NA","",1],"XQP":["克波斯區","克波斯區","","Quepos","哥斯达黎加","NA"],"XQU":["Qualicum Beach","","","Qualicum Beach","加拿大","NA"],"XRY":["赫雷斯-德拉弗龙特拉","赫雷斯-德拉弗龙特拉","","Jerez de la Frontera","西班牙","EU"],"XSC":["South Caicos","","","South Caicos","特克斯和凯科斯群岛","NA"],"XSP":["新加坡實里達","新加坡","","Seletar","新加坡","SEA","Q334"],"XTG":["Thargomindah","","","Thargomindah","澳大利亚","OC"],"XUZ":["徐州","徐州","","Xuzhou","中国","CN"],"XWA":["威利斯顿","威利斯顿","","Williston","美国","NA"],"YAA":["Anahim Lake","","","Anahim Lake","加拿大","NA"],"YAG":["Fort Frances","","","Fort Frances","加拿大","NA"],"YAK":["亚库塔特","亚库塔特","","Yakutat","美国","NA"],"YAM":["苏圣玛丽","苏圣玛丽","","Sault Ste Marie","加拿大","NA","Q986634"],"YAP":["科洛尼亚","科洛尼亚","","Yap Island","密克罗尼西亚联邦","OC","",1],"YAY":["圣安东尼 (纽芬兰与拉布拉多省)","圣安东尼 (纽芬兰与拉布拉多省)","","St. Anthony","加拿大","NA"],"YAZ":["吐芬奴","吐芬奴","","Tofino","加拿大","NA"],"YBC":["贝科莫","","","Baie-Comeau","加拿大","NA"],"YBG":["萨格奈","萨格奈","","Saguenay","加拿大","NA"],"YBK":["贝克莱克","贝克莱克","","Baker Lake","加拿大","NA"],"YBL":["坎贝尔河","","","Campbell River","加拿大","NA"],"YBP":["宜宾","宜宾","","Yibin (Cuiping)","中国","CN"],"YBR":["布兰登","布兰登","","Brandon","加拿大","NA"],"YBX":["布朗萨布隆","布朗萨布隆","","Blanc-Sablon","加拿大","NA"],"YBY":["Bonnyville","","","Bonnyville","加拿大","NA"],"YCB":["剑桥湾镇","剑桥湾镇","","Cambridge Bay","加拿大","NA"],"YCD":["纳奈莫","纳奈莫","","Nanaimo","加拿大","NA"],"YCG":["西古特尼區域","","","Castlegar","加拿大","NA"],"YCM":["圣凯瑟琳斯／尼亚加拉地区","","","Niagara-on-the-Lake","加拿大","NA"],"YCU":["运城","运城","","Yuncheng (Yanhu)","中国","CN","",1],"YDA":["道森","道森","","Dawson City","加拿大","NA"],"YDF":["迪尔莱克","迪尔莱克","","Deer Lake","加拿大","NA"],"YDN":["Dauphin","","","Dauphin","加拿大","NA"],"YEG":["埃德蒙顿地区","埃德蒙顿地区","","Edmonton","加拿大","NA","",1],"YEI":["耶尼谢希尔","耶尼谢希尔","","Yenişehir","土耳其","EU"],"YEV":["因纽维克","因纽维克","","Inuvik","加拿大","NA"],"YFB":["伊魁特","伊魁特","","Iqaluit","加拿大","NA"],"YFC":["弗雷德里克頓","弗雷德里克頓","","Fredericton","加拿大","NA"],"YFS":["Fort Simpson","","","Fort Simpson","加拿大","NA"],"YGJ":["米子","米子","","Yonago","日本","EA"],"YGL":["La Grande Rivière","","","La Grande Rivière","加拿大","NA"],"YGP":["加斯佩","加斯佩","","Gaspé","加拿大","NA"],"YGR":["伊莱斯·德·拉·玛德琳","伊莱斯·德·拉·玛德琳","","Les Îles-de-la-Madeleine","加拿大","NA"],"YGV":["Havre-Saint-Pierre","","","Havre-Saint-Pierre","加拿大","NA"],"YGW":["库居阿尔阿皮克","库居阿尔阿皮克","","Kuujjuarapik","加拿大","NA"],"YHM":["哈密尔顿","哈密尔顿","","Hamilton","加拿大","NA","",1],"YHU":["隆格伊","隆格伊","","Montréal","加拿大","NA"],"YHY":["黑河","黑河","","Hay River","加拿大","NA"],"YHZ":["哈利法克斯","哈利法克斯","","Halifax","加拿大","NA","",1],"YIA":["新日惹","","","Yogyakarta","印度尼西亚","SEA","",1],"YIC":["宜春","宜春","","Yichun","中国","CN"],"YIE":["阿尔山","阿尔山","","Arxan","中国","CN"],"YIF":["St-Augustin","","","St-Augustin","加拿大","NA"],"YIH":["宜昌","宜昌","","Yichang (Xiaoting)","中国","CN"],"YIN":["伊宁","伊宁","","Ili (Yining / Ghulja)","中国","CN"],"YIV":["Island Lake","","","Island Lake","加拿大","NA"],"YIW":["义乌","义乌","","Yiwu/Jinhua","中国","CN","",1],"YKA":["坎卢普斯","坎卢普斯","","Kamloops","加拿大","NA"],"YKF":["滑鐵盧區","","","Breslau","加拿大","NA"],"YKH":["营口","营口","","Yingkou (Laobian)","中国","CN"],"YKL":["謝夫維爾","謝夫維爾","","Schefferville","加拿大","NA"],"YKM":["亚基马","亚基马","","Yakima","美国","NA"],"YKO":["哈卡里","哈卡里","","Hakkari","土耳其","EU"],"YKS":["雅库茨克","雅库茨克","","Yakutsk","俄罗斯","EU","",1],"YLK":["巴里","巴里","","Barrie","加拿大","NA"],"YLL":["劳埃德明斯特","劳埃德明斯特","","Lloydminster","加拿大","NA"],"YLW":["基洛纳","基洛纳","","Kelowna","加拿大","NA","",1],"YLX":["玉林福绵","","","Yulin","中国","CN"],"YMM":["伍德布法罗地区自治","伍德布法罗地区自治","","Fort McMurray","加拿大","NA"],"YMO":["穆索尼","穆索尼","","Moosonee","加拿大","NA"],"YMS":["尤里马瓜斯","尤里马瓜斯","","Yurimaguas","秘鲁","LA"],"YMT":["奇布加莫","奇布加莫","","Chibougamau","加拿大","NA"],"YMX":["蒙特利尔－米拉贝勒","蒙特利尔","","Montréal","加拿大","NA","Q340"],"YNA":["Natashquan","","","Natashquan","加拿大","NA"],"YNB":["延布","延布","","Yanbu","沙特阿拉伯","ME","",1],"YND":["加蒂诺","加蒂诺","","Gatineau","加拿大","NA"],"YNJ":["延吉","延吉","","Yanji","中国","CN"],"YNL":["Points North Landing","","","Points North Landing","加拿大","NA"],"YNT":["烟台","烟台","","Yantai","中国","CN","",1],"YNY":["襄阳郡","襄阳郡","","Gonghang-ro","韩国","EA","",1],"YNZ":["盐城","盐城","","Yancheng (Tinghu)","中国","CN","",1],"YOJ":["高河镇","","","High Level","加拿大","NA"],"YOL":["约拉","约拉","","Yola","尼日利亚","AF"],"YOW":["渥太华","渥太华","","Ottawa","加拿大","NA","",1],"YPA":["Prince Albert","","","Prince Albert","加拿大","NA"],"YPE":["Peace River","","","Peace River","加拿大","NA"],"YPL":["Pickle Lake","","","Pickle Lake","加拿大","NA"],"YPN":["Port-Menier","","","Port-Menier","加拿大","NA"],"YPQ":["彼得堡","彼得堡","","Peterborough","加拿大","NA"],"YPR":["鲁珀特王子港","鲁珀特王子港","","Prince Rupert","加拿大","NA"],"YPW":["Powell River","","","Powell River","加拿大","NA"],"YPX":["Puvirnituq","","","Puvirnituq","加拿大","NA"],"YPY":["奇佩维恩堡","","","Fort Chipewyan","加拿大","NA"],"YPZ":["Burns Lake","","","Burns Lake","加拿大","NA"],"YQA":["马斯科卡","","","Gravenhurst","加拿大","NA"],"YQB":["魁北克","魁北克","","Quebec","加拿大","NA","",1],"YQD":["The Pas","","","The Pas","加拿大","NA"],"YQG":["温莎","温莎","","Windsor","加拿大","NA","",1],"YQH":["Watson Lake","","","Watson Lake","加拿大","NA"],"YQK":["凯诺拉","凯诺拉","","Kenora","加拿大","NA"],"YQL":["莱斯布里奇","莱斯布里奇","","Lethbridge","加拿大","NA"],"YQM":["蒙克顿","蒙克顿","","Moncton","加拿大","NA"],"YQN":["Nakina","","","Nakina","加拿大","NA"],"YQQ":["科莫克斯","","","Comox","加拿大","NA"],"YQR":["里贾纳","里贾纳","","Regina","加拿大","NA"],"YQT":["桑德贝","桑德贝","","Thunder Bay","加拿大","NA"],"YQU":["大草原城","","","Grande Prairie","加拿大","NA"],"YQX":["甘德","甘德","","Gander","加拿大","NA"],"YQY":["悉尼","悉尼","","Sydney","加拿大","NA"],"YQZ":["Quesnel","","","Quesnel","加拿大","NA"],"YRB":["雷索卢特","雷索卢特","","Resolute Bay","加拿大","NA"],"YRJ":["罗贝瓦勒","罗贝瓦勒","","Roberval","加拿大","NA"],"YRL":["红湖","红湖","","Red Lake","加拿大","NA"],"YRO":["Ottawa","","","Ottawa","加拿大","NA"],"YRT":["兰金","兰金","","Rankin Inlet","加拿大","NA"],"YSB":["大萨德伯里","大萨德伯里","","Sudbury","加拿大","NA"],"YSF":["斯托尼拉皮兹","","","Stony Rapids","加拿大","NA"],"YSJ":["圣约翰","圣约翰","","Saint John","加拿大","NA"],"YSM":["史密斯堡","","","Fort Smith","加拿大","NA"],"YSQ":["松原","松原","","Qian Gorlos Mongol Autonomous County","中国","CN"],"YTH":["汤普森","汤普森","","Thompson","加拿大","NA"],"YTS":["蒂明斯","蒂明斯","","Timmins","加拿大","NA"],"YTY":["泰州","泰州","","Yangzhou","中国","CN"],"YTZ":["多伦多比利·畢曉普多倫多市","多伦多","","Toronto","加拿大","NA","Q172"],"YUL":["蒙特利尔皮埃尔·埃利奥特·特鲁多","蒙特利尔","","Montréal","加拿大","NA","Q340",1],"YUM":["尤馬海軍陸戰隊航空基地","","","Yuma","美国","NA"],"YUS":["玉树","玉树","","Yushu (Batang)","中国","CN"],"YUX":["Sanirajak","","","Sanirajak","加拿大","NA"],"YUY":["鲁安 - 诺兰达","鲁安 - 诺兰达","","Rouyn-Noranda","加拿大","NA"],"YVB":["博纳旺蒂尔","博纳旺蒂尔","","Bonaventure","加拿大","NA"],"YVC":["La Ronge","","","La Ronge","加拿大","NA"],"YVO":["瓦勒多","瓦勒多","","Val-d'Or","加拿大","NA"],"YVP":["库朱瓦克","库朱瓦克","","Kuujjuaq","加拿大","NA"],"YVQ":["诺曼韦尔斯","","","Norman Wells","加拿大","NA"],"YVR":["温哥华","温哥华","","Vancouver","加拿大","NA","",1],"YVV":["Wiarton","","","Wiarton","加拿大","NA"],"YWG":["温尼伯","温尼伯","","Winnipeg","加拿大","NA","",1],"YWK":["瓦布什","瓦布什","","Wabush","加拿大","NA"],"YWL":["Williams Lake","","","Williams Lake","加拿大","NA"],"YXC":["克蘭布魯克/加拿大洛磯","","","Cranbrook","加拿大","NA"],"YXE":["萨斯卡通","萨斯卡通","","Saskatoon","加拿大","NA","",1],"YXH":["梅迪辛哈特","梅迪辛哈特","","Medicine Hat","加拿大","NA"],"YXJ":["圣约翰堡","圣约翰堡","","Fort Saint John","加拿大","NA"],"YXL":["苏卢考特","苏卢考特","","Sioux Lookout","加拿大","NA"],"YXS":["乔治王子城","乔治王子城","","Prince George","加拿大","NA"],"YXT":["特尔斯","特尔斯","","Terrace","加拿大","NA"],"YXU":["伦敦","伦敦","","London","加拿大","NA"],"YXX":["阿伯茨福德","阿伯茨福德","","Abbotsford","加拿大","NA"],"YXY":["白马","白马","","Whitehorse","加拿大","NA"],"YYA":["岳阳","岳阳","","Yueyang (Yueyanglou)","中国","CN"],"YYB":["北湾","北湾","","North Bay","加拿大","NA"],"YYC":["卡尔加里","卡尔加里","","Calgary","加拿大","NA","",1],"YYD":["史密瑟斯","","","Smithers","加拿大","NA"],"YYE":["Fort Nelson","","","Fort Nelson","加拿大","NA"],"YYF":["潘狄顿区域","","","Penticton","加拿大","NA"],"YYG":["夏洛特顿","夏洛特顿","","Charlottetown","加拿大","NA"],"YYJ":["维多利亚","维多利亚","","Victoria","加拿大","NA","",1],"YYL":["Lynn Lake","","","Lynn Lake","加拿大","NA"],"YYQ":["邱吉尔市 (曼尼托巴)","邱吉尔市 (曼尼托巴)","","Churchill","加拿大","NA"],"YYR":["哈皮瓦利-古斯贝","哈皮瓦利-古斯贝","","Goose Bay","加拿大","NA"],"YYT":["圣约翰斯","圣约翰斯","","St. John's","加拿大","NA","",1],"YYY":["美山","美山","","Mont-Joli","加拿大","NA"],"YYZ":["多伦多","多伦多","","Toronto","加拿大","NA","Q172",1],"YZF":["黄刀镇","黄刀镇","","Yellowknife","加拿大","NA"],"YZP":["夏洛特皇后群岛","夏洛特皇后群岛","","Sandspit","加拿大","NA"],"YZS":["珊瑚港","珊瑚港","","Coral Harbour","加拿大","NA"],"YZT":["哈迪港","","","Port Hardy","加拿大","NA"],"YZU":["Whitecourt","","","Whitecourt","加拿大","NA"],"YZV":["七岛","七岛","","Sept-Îles","加拿大","NA"],"YZY":["张掖","张掖","","Zhangye (Ganzhou)","中国","CN"],"ZAD":["扎达尔","扎达尔","","Zadar","克罗地亚","EU","",1],"ZAG":["萨格勒布","萨格勒布","","Velika Gorica","克罗地亚","EU","",1],"ZAH":["扎黑丹","扎黑丹","","Zahedan","伊朗","ME","",1],"ZAL":["瓦尔迪维亚","瓦尔迪维亚","","Valdivia","智利","LA"],"ZAM":["三宝颜","三宝颜","","Zamboanga","菲律宾","SEA","",1],"ZAT":["昭通","昭通","","Zhaotong","中国","CN"],"ZAZ":["萨拉戈萨","萨拉戈萨","","Zaragoza","西班牙","EU","",1],"ZBF":["巴瑟斯特","巴瑟斯特","","South Tetagouche","加拿大","NA"],"ZBR":["恰巴哈尔","恰巴哈尔","","Konarak","伊朗","ME"],"ZCL":["萨卡特卡斯","萨卡特卡斯","","Zacatecas","墨西哥","NA"],"ZCO":["特木科","特木科","","Temuco","智利","LA","",1],"ZEL":["貝拉貝拉","貝拉貝拉","","Bella Bella","加拿大","NA"],"ZHA":["湛江","湛江","","Zhanjiang","中国","CN","",1],"ZHY":["中卫","中卫","","Zhongwei (Shapotou)","中国","CN"],"ZIA":["莫斯科拉缅斯科耶","莫斯科","","Moscow","俄罗斯","EU","Q649",1],"ZIG":["济金绍尔","济金绍尔","","Ziguinchor","塞内加尔","AF"],"ZIH":["伊斯塔柏","伊斯塔柏","","Ixtapa","墨西哥","NA","",1],"ZIX":["日甘斯克","日甘斯克","","Zhigansk","俄罗斯","EU"],"ZKP":["济良卡","济良卡","","Zyryanka","俄罗斯","EU"],"ZLO":["曼萨尼约","曼萨尼约","","Manzanillo","墨西哥","NA"],"ZMT":["Masset","","","Masset","加拿大","NA"],"ZND":["津德尔","津德尔","","Zinder","尼日尔","AF"],"ZNE":["紐曼","紐曼","","Newman","澳大利亚","OC"],"ZNZ":["桑给巴尔","桑给巴尔","","Zanzibar","坦桑尼亚","AF","",1],"ZOS":["奥索尔诺","奥索尔诺","","Osorno","智利","LA"],"ZQN":["皇后镇","皇后镇","","Queenstown","新西兰","OC","",1],"ZQZ":["张家口","张家口","","Zhangjiakou","中国","CN"],"ZRH":["苏黎世","苏黎世","","Zurich","瑞士","EU","",1],"ZSA":["圣萨尔瓦多岛","圣萨尔瓦多岛","","San Salvador","巴哈马","NA","",1],"ZSE":["圣皮埃尔","圣皮埃尔","","Saint-Pierre","留尼汪","AF","",1],"ZSJ":["Sandy Lake","","","Sandy Lake","加拿大","NA"],"ZTH":["扎金索斯岛","扎金索斯岛","","Zakynthos","希腊","EA","",1],"ZUH":["珠海","珠海","","Zhuhai (Jinwan)","中国","CN","",1],"ZYI":["遵义","遵义","","Zunyi","中国","CN"],"ZYL":["锡尔赫特","锡尔赫特","","Sylhet","孟加拉国","SA","",1]},

  groups: [{"key":"CN_N","label":"华北东北","codes":{"PEK":"北京首都","PKX":"北京大兴","TSN":"天津","TAO":"青岛","DLC":"大连","SHE":"沈阳","HRB":"哈尔滨"}},{"key":"CN_E","label":"华东","codes":{"PVG":"上海浦东","SHA":"上海虹桥","HGH":"杭州","NKG":"南京","XMN":"厦门","FOC":"福州","WUX":"无锡"}},{"key":"CN_S","label":"华中华南","codes":{"CAN":"广州","SZX":"深圳","CSX":"长沙","WUH":"武汉","NNG":"南宁","HAK":"海口","SYX":"三亚"}},{"key":"CN_W","label":"西部","codes":{"CTU":"成都双流","TFU":"成都天府","CKG":"重庆","XIY":"西安","KMG":"昆明","URC":"乌鲁木齐"}},{"key":"HKMO","label":"港澳","codes":{"HKG":"香港","MFM":"澳门"}},{"key":"JPKR","label":"日韩","codes":{"NRT":"东京成田","HND":"东京羽田","KIX":"大阪关西","ICN":"首尔仁川"}},{"key":"SEA","label":"东南亚","codes":{"BKK":"曼谷","SIN":"新加坡","KUL":"吉隆坡","CGK":"雅加达","MNL":"马尼拉","CEB":"宿务","HAN":"河内","SGN":"胡志明","DPS":"巴厘岛"}},{"key":"SA","label":"南亚","codes":{"DEL":"德里","BOM":"孟买","CMB":"科伦坡","MLE":"马累"}},{"key":"ME","label":"中东","codes":{"DOH":"多哈","DXB":"迪拜","AUH":"阿布扎比","MCT":"马斯喀特","BAH":"巴林","KWI":"科威特","RUH":"利雅得","JED":"吉达","AMM":"安曼","TLV":"特拉维夫"}},{"key":"AF","label":"非洲","codes":{"CAI":"开罗","CMN":"卡萨布兰卡","NBO":"内罗毕","JNB":"约翰内斯堡","CPT":"开普敦"}},{"key":"EU","label":"欧洲","codes":{"LHR":"伦敦希思罗","CDG":"巴黎戴高乐","MAD":"马德里","BCN":"巴塞罗那","FCO":"罗马","FRA":"法兰克福","AMS":"阿姆斯特丹","HEL":"赫尔辛基","IST":"伊斯坦布尔","ZRH":"苏黎世","VIE":"维也纳","LIS":"里斯本","DUB":"都柏林"}},{"key":"NA","label":"北美","codes":{"JFK":"纽约肯尼迪","LAX":"洛杉矶","SFO":"旧金山","ORD":"芝加哥奥黑尔","DFW":"达拉斯","SEA":"西雅图","BOS":"波士顿","IAD":"华盛顿杜勒斯","YVR":"温哥华","YYZ":"多伦多"}},{"key":"OC","label":"大洋洲","codes":{"SYD":"悉尼","MEL":"墨尔本","BNE":"布里斯班","AKL":"奥克兰"}}],

  presets: [{"label":"中国 ⇄ 中东/开罗","A":["PEK","PKX","PVG","SHA","CAN","SZX","CTU","TFU","CKG","XIY","HGH","NKG","WUH","CSX","KMG","XMN","TSN","TAO","DLC","SHE","HKG","MFM"],"B":["DOH","DXB","CAI"]},{"label":"中国 ⇄ 欧洲","A":["PEK","PVG","CAN","CTU","HKG"],"B":["LHR","CDG","MAD","FRA","HEL","IST"]},{"label":"中国 ⇄ 北美","A":["PEK","PVG","CAN","HKG"],"B":["JFK","LAX","SFO","ORD","DFW","SEA"]}],

  regions: {"CN":"中国大陆","HMT":"港澳台","EA":"日韩","SEA":"东南亚","SA":"南亚","ME":"中东","CA":"中亚","EU":"欧洲","AF":"非洲","NA":"北美","LA":"中南美","OC":"大洋洲"},

  lines: {"version":1,"persona":"Miku（仅 v0.1 测试版的占位命名，形象为初音未来官方立绘/Live2D 示例模型）。后续版本未经用户许可不得沿用此命名，默认回到 lines.json 的雷达酱人设。","placeholders":"{n} 有位天数 · {new} 新出现天数 · {pct} 进度百分比 · {seats} 剩余座位 · {count} 被戳次数 · {from}/{to} 城市名","lines":{"greet_morning":["早安～Miku 上线啦！今天也要捡到好票！","早上好！咖啡喝了吗？我先帮你看看航司今天心情怎么样～","叮咚～早班 Miku 上线，耳麦调试完毕！","早起的鸟儿有票抢！……大概。"],"greet_noon":["中午好！吃饱了才有力气抢票哦～","午休偷偷刷票……嘘，我不会告诉老板的。","午饭吃了吗？没吃的话，先看一眼票再去！"],"greet_evening":["晚上好～下班啦？来看看今天的票吧！","傍晚的天空是粉色的，跟我的耳机一个颜色～","辛苦啦！剩下的交给 Miku！"],"greet_night":["这么晚还在刷票？好、好吧，我陪你！","深夜模式启动……航司的放票小精灵也在加班吗？","熬夜对皮肤不好哦……不过，再刷一轮就睡！","嘘——夜深了，我们小声地找票。"],"greet_back":["欢迎回来！我一直有乖乖看家哦～","你终于来了！我都快把云朵数完了。","哼，这么久才来……才、才没有在等你呢！","回来啦！要不要看看我替你收着的票？"],"idle":["呼～耳麦今天信号满格！","我的双马尾其实是雷达哦，信不信由你～","航司的放票逻辑，比编双马尾还复杂……","日历说有位，页面说没有，到底是谁在说谎啦！","40k 换商务舱什么的，听起来就像在做梦呢～","如果能坐头等舱，我要把每一种果汁都点一遍！","知道吗？同一天的税费精确到分，就能认出是哪趟航班！快夸我！","叮——！……啊不对，是我的错觉。","今天的云，有点像一份冒热气的飞机餐。","我在练习用耳麦接收好运气……接收中……接收中……","有人说周中的票更好抢，我还在收集证据中！","要是机票也能像奶茶一样第二杯半价就好了。","别一直盯着我看啦……会害羞的。","我不是在发呆，我是在扫描宇宙信号！","噔噔咚！Miku 今日运势：大吉（大概）。","找不到票的话，就当是给钱包放了个假～","收藏夹里的每一张票，都是你未来的旅行呢。","航司要是能像我一样诚实就好了！","飞行模式？我一直都是飞行模式哦～","听说商务舱的枕头软得像云朵……好想摸一摸。","我的耳机里，一直在循环播放飞机起飞的声音。","我数到三，好票就会出现！一、二……二点五……","无聊的时候，我会给路过的每一架飞机取名字。","刚才那朵云跑得好快，是赶着去转机吧。","其实我有一点点恐高……嘘，别说出去！","里程放太久可能会过期哦！快想想要去哪儿～","你在看我对吧？我感应到了！耳麦响了！","今天也是认真工作的 Miku！……五分钟后再认真。","地球是圆的，所以总有一条航线能带你去想去的地方～","要是能去开罗，我想看金字塔晒月亮。","转机等太久的话，就在机场里逛逛吧，说不定有好吃的！","靠窗还是靠过道？……我选靠窗！要看云！","我偷偷给你的收藏夹施了魔法，祝它们都能成行～","航司改页面的速度，比我换表情还快……"],"drag":["哇哇哇——要飞起来了！","我也是会晕机的哦！","这是……人肉航班吗？","慢点慢点，耳机要掉了！","起飞！请系好安全带～"],"drop":["平稳落地！请为机长鼓掌～","呼，安全着陆。","这个位置视野不错嘛！","就停这儿啦，靠窗座！"],"scan_start":["收到！雷达展开，开始扫描～","出发！目标：所有藏起来的好票！","雷达转起来了！呜呜呜——","我要认真了哦！(｀・ω・´)","扫描时别关那个 aa.com 窗口哦，那是我的眼睛！","开始翻日历啦，一页、一页、又一页……"],"scan_progress":["已经扫了 {pct}% 啦～","{pct}%！再坚持一下！","进度 {pct}%，耳麦有点发烫了……","嘿咻嘿咻，{pct}%！","{pct}%……我看到了！好像有什么东西！","别催别催，{pct}% 了嘛～"],"scan_half":["过半啦！胜利就在前方！","一半了！给我加个油嘛～"],"scan_done_found":["扫描完成！找到 {n} 个有位的日子～挑喜欢的核实一下吧！","完成啦！{n} 天有位，不过这些还只是日历线索，先别急着下单哦！","叮！{n} 个日期到手！快夸我！……然后记得核实～","收工！{n} 天！Miku 今天表现超棒！"],"scan_done_new":["有 {new} 个日子是新放出来的！快看快看！","新票出现！{new} 天！航司终于开窍了！","上次还没有的，这次冒出来 {new} 天！"],"scan_done_none":["呜……这次一张都没找到，航司今天好小气。","空空如也……换个时间再来试试？","没票不是你的错，是航司的错！","零张……我去角落里画圈圈了。"],"scan_cancel":["好的，停下来歇一会儿～","收到，雷达收起！","暂停！我去喝口水～"],"human_check":["aa.com 想确认你是不是真人～去那个窗口勾一下吧，我等你！","人机验证要你本人来哦，我是看板娘，不算人……","勾一下 “I'm not a robot” 就好啦，这个我可不能替你勾！","aa.com 在敲门：“请问是人类吗？”快去回答它～"],"blocked":["aa.com 说我们查得太勤快了……休息一小时再来吧。","被航司嫌弃了呜呜，下次换「稳妥」速度试试？","冷却中……Miku 需要降降温。"],"verify_ok":["核实通过！机场对、舱位对、座位够！✨","真的有！这张票是真的！！","确认完毕，是货真价实的好票～","我就知道！我的直觉从不说谎（偶尔）！","完美！快去订吧，晚了可就被抢走了！"],"verify_mixed":["等等！这一程有一段是经济舱，是混舱陷阱！","差点上当！看着是商务，其实有一段要坐经济……","混舱警报！商务的价钱，经济的座位，不划算！"],"verify_gone":["呜……这天的位置已经被别人抢走了。","日历骗人！这天其实已经没位了。","晚了一步……下次我们再快一点！"],"verify_airport":["咦？出发机场被偷偷换掉了！这个不算！","搜深圳给我广州？这可不行！","机场对不上，这张不能要哦。"],"verify_seats":["座位不够大家一起坐呢……","只剩 {seats} 个座位，人数对不上哦。"],"verify_failed":["页面没加载出来……再试一次好不好？","唔，我没看清这一页，能再打开一次吗？"],"fav":["收藏好啦！我会帮你盯着它的～","放进小本本里了！","好眼光！这张我也喜欢！","收藏 +1！旅行计划又近了一步～"],"unfav":["好吧，那就放它走吧。","取消收藏……它会想你的。","嗯嗯，下一张会更好！"],"sleep":["呼……呼……（梦到了头等舱）","zzZ……再、再给我五分钟……","（双马尾慢慢垂下来了……）","呼噜……40k……头等舱……嘿嘿……"],"wake":["哇！我没睡！我在节能模式！","早……早上好？啊，原来是你。","我醒啦！刚刚梦到 40k 的头等舱！","嗯？有票了吗？有票了吗？"],"midnight":["零点了！新的一天，新的票！","叮——午夜钟声！航司会不会趁现在偷偷放票呢？"]},"poke":[["诶？叫我吗？","嗯哼～有什么吩咐？","戳戳回来！","在的在的！","嗨～"],["别、别一直戳啦……","再戳双马尾就要打结了！","呜哇，好痒！","你是在测试我的反应速度吗！"],["哼！我生气了！……才怪～","你是不是把我当解压按钮了！","戳一次扣你一千里程，记账中——","再戳我就……我就……蹲下来！"],["已经戳了 {count} 次了！你好闲哦！","好啦好啦你赢了！隐藏彩蛋：今天的你也超努力的！","……（假装睡着了）","我、我要报告机长了！"]]},

  stories: [{"title":"01 · 五百日元","lines":["最近很苦恼一件事情...","就在刚刚，那台自动售货机吃了我 500 日元...","倒也不是没出东西啦，只不过不是我按的那个（哭）。","哎...你不要笑！我明明选的是左边那个桃子味的汽水！但...下来的是最右边那个，玉米浓汤。","欸...！！！玉米浓汤？明明是汽水才对啊啊啊啊！","哎... 有用力踢了一下的...也没有很用力啦，就，稍微？","退币按钮也有按欸。","但并没有什么用。","好过分。"]},{"title":"02 · 章鱼","lines":["因为很无聊，所以突然对海洋生物学很感兴趣。","具体来说就是章鱼啦。","章鱼有三个心脏喔。两个管鳃，一个管全身。而且它游泳的时候，管全身的那个会停跳。","也就是说章鱼游泳会累。它们其实更喜欢走路！","...不觉得这很了不起吗？！","至于为什么在查这个...因为晚饭的时候电视里有人讲了一句「章鱼有三个心脏」。","嗯嗯，就是这样子~很有趣不是吗？","比如说为什么要三个？剩下两个平常在干嘛？三个是一起跳还是错开跳？切掉一个会怎样？欸嘿嘿嘿...","呃...最后那个我承认有点残忍，但你也会想知道吧？"]}],

  mascot: {"normal":"data:image/webp;base64,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","ratio":0.6556,"avatar":"data:image/webp;base64,UklGRuQiAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFsLAAAB36e2bRsm0v+Hp88RkcGoSFFy8kXCYSS5bYM/wAGD/itODhVE9H8CrGsnWsmXGtDVzNL/jJNjBhwKszx5GoBgcM9Hi4iQxNvTWhIBUkTQC3khScza3kNJNTGmqKoB3mhrW94227a17ccpO9ikTXuF8SozM8PNzMzMzMzMzPd9MTMzM5e5zR1u7LAt6TyO7YcVSecp+39ETAATr5AzsHzzsrUbzz27UxlgLmYOHTx8sju/7ySgjnPqX/nqrRYDSzzwwx9bWepSmHAFxbDmwks3XXLJ6rXLxdDuH58//shj+x965vBhUqpe+JU59MCHMIQvWXv5sp4gJkqpFKYvvvKGyzdvYmFBw1hi4JGDRz/94Q898wt/nFOJb/t3CiCz6br1fUITpCjmorvvuXpDgmIkxIgGGwXQe+Bj37AOx9t+8DoGytaN13dyTIoUNStu+7Kv3Aq2JdGgCyQAM/OT71k/CFQ498rpPCERNeu+/utuXEkmEC20HSrxgl9YE6dDuLOp0xqFKAYDETVbvvbbrg6yglZ7z6v/Z2YICFO1Q6liYccuEMXnfPP3Xwo5RKuN4MOXEEOAaKcz667YXD7yJB2l8LKv+JZLyYRouZFLAg1X2iCf9aX3XLt+FU+99iUPOrHjq68jK5jQQtD6yNv+aBNgsfeFr692nhsmmGCjtontZ2QC7MT+71lDDpZUwYWrSmAZcrWBEG03mqw8fTFmsF2LSVfrot5+IzoNiCV4ajULjViiN621wGICjSZPxDd0ipjQxSFf8CWIiTUawQiMWqTke55XwhMzTiNarbziS5NZTA1qVafceBNCiwi4VUrpa1bnYOmu2PElLOXW7F+ipQye+WTkJczpVDcHE2+Nw2oHemyN8iKF2uCYP7ohPHljdivg6bVVZgmP3pFteClj99mVWbodvdhOLGGwe1sqLN2Ok3NnK5Yw/MQZqbCEV/N7NkmLhVH7wvvOqspSlnr7n0+wuBq1SOmJuSgstpbRMEYNhB5ZGyzCLepweA1LudL0XBQtUkYtqLhpfYilSxW/vLwsWq0MznijTEutxShx+Z5QWxbnxE/2vcCLnTWmYNl9FAAtUj6dGLPyzssAxOJqDTCicXHTei/QJFjjMRpmWI8pnO7rFDGRFmNe0OLIl9+EWFzG7/HANZtLTEjrpbFEXn43ptVGrTEapvD211HG4QvuItqFUVswgAeY+t9fwxhlrj+7aHEb7Hjwyb37YhzLvxyzuGsA3N89+gjjuPAmYpGzFmj+A/3Zz4/lvjWFpTDroc8sm3u4O5Ly6i8Jqzlrcoy0IPJb9zs9fnCkytdcjsBuaIItBhaefdNUHY8/ORq3rCnBEmi9fG/VLcefHSVxzhdjQFrkSnroTerXxR8fpeKh5ykY2h6bNS6jkYxGinLe7JFOyX7o1AhK2l0VFt1xuPq2Q8mCoxohtG5VMKI0PqO2jDHKBXcfTTKll0ZI3LSaFhtNiDx1bTVlUVyq4dTh16as9kyuuHx7X7ZLKZ0RYvrtUWjcmriyYWepClBKieEqbtkbtMJogsTqrXVJEDiXargOP9ZHC9zIpMtsW5kIlwKUGCrq6VspLPbmHEqFQkDxCD7vRmKAGvIEWaxYW0iBTXEpw5lrtxYNaNbW5Ai62Vi4AMgaJjx9N6YN9+/F7bJOY+jZghAg8HCUzbcRAzyKPVSJ+glaajRKUCQWSi5mRAWXb7AGaBRpKLHu/lm5Vac19d6uDKSwDQI0BOLOqjDQHmHk6d17aceoEkdPJBYKxEAPo/6G22jpumX3M4FyF4mFhSEYJnHL+Y5BUiOF/+x9k9UqG1N+7wcfYb4LYuhhSrpvWdGghnN6+dt+WahNA/25hzr9fg8DCA0aMuXNNyCa9DAf/cvfXJ1bJaESG/d2+/1aBJgxBpee62aGjfrfLr6iXXUNwZn9Q+r1kwR4DDnuWlYa8akhih749FXRInPqZftta/uBXulLwowxyjm30ajL338WDwJed6STw22BVW9+gXKUNasORD8pBeNMuuoKpyaKfvxjVxQNsg58uHfgFLgtserFDwXBJcvnPFWl0DjCX1IVmpR+6s03ruS0WZ94bPrZ3aTiduQzZv56OZTOeTNMpfGE1t+KmnBcnT770x+IMqjivg+V9PjHT5JKac6O33hNf/tKAx+ZSRkbjdTh7ovdDLdP1S/57t1RBrxz7/TsJ1z2vuM9R0i4KXL6tf9ZX58pO3ofm8MF8Cgp7uqURuDWKPWf/eK8DZn3/415dF/t+Y++4G37ieJBHleJVzx45+Vza8Ha+0AquRQzYmLXLTR9fcna+xN/FzZw7mtfJQ6cubNe1v3Qf71zhlQMLjQ684FVEJmnn0sZNEqH7zrXqRFzaZ8+n/iGV0dBrOj8yS76N/zv7bVWlsde8LajpFIU1GNzXT3xp/P56a7M/x+LgjxcqPMvUWhUbO0GOV7/LZ9LBfo6eMHz3dm2I811me4+/Kq3zkZ0P/UH76GMZgSY+g/3rph7Zj8Vjx8NFxsPkTj3MaIRR72lFyW7/ze/cZSC8qr45jU5mzNW9udiqvvBV/3eb/3Ej/7r/XhcZP3321ZE//4PHku9J8gLhk18Z7+oEZhf351y6fnQu/8kAPeP3viVpRLpnBXJvbys//f/9vqj0zXjz+l/fifme3rqla8+pGXUxkOI+FJMo+bY8dSPXOhN/+8bKlaWTP+vvrFfOT/2tbPudadWiErd54YzGgZOvuXfHozIJ+Oib/2yv/5PM6zyrutRU4ee65SCCzH3+7u9Sr2qu/q/bs2kv/i6I6n0T51CkU+sGm7kEq/9kSn6kfvHrr7gbcekIYI7N7shOHAyzZtS6Kb7/0OUPFVObvrTe7Vv2xlFruu5FVFf9nXf4miCPT/3zmmIXE72l5sh5birKg2J2Tmpru1S6vSiZ3fl/nRdnVp++VlPFKtSdM//4+hfug6rAWD2n15wnH6dUu4WEBqQ8gXX0fyxuRVAMa6rZ37vvTWBU+lqKmScnp2+DsghGjX6nT9cXTxfpjo1EoPFjTucGjveLwB2yf0VL/+5Uy7CVUrFMtXxp+gHkWg6x2feuGt1PvLg2x9eHkIIUN25WYVmLc9GNlBsnKn7NQsj6EOc3EdUMi1+/FdfW0kBguTn30s0hOpTQZYBl5JzxgUTgmzSKTAtNTYoZn/g5FQiGHjRlqKmmJ8NoFhYCwEsQKVWRUhtGexc7VmZqxAguB3T+ImDye5jsCA4vVJv+WrMQrUIcrrGUiikvPlO1JQ59lzCgA1iSFW9dbswA41aRL1jy3xlifDN5zcHRw+z0AbQaSL63LYJA6b1RZeQKxbePJUbMzN9mYUyCwWhmnU/9uMg0AK1Cy8/80Alqd54G82Lg85lAANEqGbzDT99M8HCBW0X20u3A1x5nqMxeBzy6UJQzIZv/5YryQKQGGi1ylNnHgjDzSuKWtAFcIGQM7Dqoq/4ysuwgwkONh8+WbH2KtpYZgn3i1LOsG71rptvuG4dmcSoahee/vLlStuuJJpT72ABBT22XH3j1evPn4JMCMBoiLYHt291uuIcq7GiAzNY5dTa677ylgumgTokPGCi/bxre50vFm2cOR6p1F//M5ethIwkTm+dxgiD2iRPX5DSnVIbjtTR5Y9/tHJxiGHNiDJt3xBlPa3c27P+6PtLjmBoyxpCAGqZ2b5CboPZU8//wPdnJYY3YlSjdsGas1EbIu8/ceEPmmBYI8YoW60Sacq0sOjwU/netQ5GWBxT1QqYeW7t5TINGg1S+1JL9hxad14wsocRE2pmDnfacejErnNprVF7xO7Z1I7iKzpFo0iAPYaWH6OlM3knY5bGIIywWiHvs9ogTrANj8VMtnXiM5VbYNX7zj2XNgtQO9j3bGUAVlA4IGIXAADQSwCdASqAAIAAPkUaikOioaEZfNcQKAREtgBl67Hit+680+vv4L8fcNJWXmV9A/8r7oPmn6KPMI/X3pgeYv9vvVe/4f7d+7z0AP5P/pPWq9Tb9yPYS/af03f3J+Ev+3f8792PaY//+cV/yftC/wngn+NfMv5H8u/7d7eONvrN/w/Qr+O/cL8V/cP3V/vfuH34/G3UC/LP51/pvzM4c22HoHe6P37/Yfm75vP9d6KfXv/ae4D/KP6Z/m/zN/f/6h/0/hT/gf9l+xfwBfzX+zf8H/G/3v9qPpo/pv/P/ovzA9t357/iP+//mP9H/5foL/mH9O/2/9+/x//g/xv//8Ynoq/ss78Qf6TLHUDohkt97fB8zW7YkSaHCNcUn5LQTAoj3nI5ZY8m782I+4lBvKYIncB06mBwR9GtNWJ1dgAqCUDpY4DjKGE0iKb5iD9+LT/zXZkyF9QOkLDfJP9z7Slt/ori4PF8SXxx+pv+u8TrrZUVZgjN5XCmeksuqTwx1W6pW3enoodG9u3uqqBIxyseqgiARf2z43CN+e6NxU73KnTH8m+em+4mi7IuolFSg96icgf3347CVE7PayaXdRCFoQ3ya2CVAka+115z+WjHJ0Gn3R5kNW6352SseEem4H7jcr5BSN/2SB/gP6fkInSQy/mw6uatYu+X/UaZqA1vUxwXbPnUe3rJCN66Put+mHM3H55amOr0SubMtwkR1i/MV7VvQ6P1vFF76gqsDTt55uFAK9T8ZmRDM3D0eny2bVsPews/6+1BcGZ5VXRkXLqNO30YwaL0wcsmOgjJxYYpwDqVCn/HSVAA/v9gGFzTufAB52fOLZFcMq2q2dFGQ2Ew4XYaG5JK4zTobd6XH3/Bv3E2VHGdWBvA4yXp+Tr34+WnH7sT4jjE8xFcm+S8AXXH7/kyYh2iXw7S15cF1fRcwcpYB4fF7kEb3hUIGjKEIP/pHIjxNtyt+dj0OKyYrMP/t7Tx1VA3wDz677KwutoVEXm1nzIw4zjnqO0KNBiWfeZQesL6W4MD5Nd/ygy+BM6RPBZ31Gl+C8xnasbi2uj6fLt4iruDbXKirQzbyJ4KayJSm55xFzxUMdYKahZn5uG73Bb8y7MlZbVKc2BYhqW9mdVjKp7OPX1sBKFQLGOaiL5XBpsi17t+m1FHOjZ6F8rE3yn1nDwTVxWjjajPiZHsIhkuy7VuboLoZDx+yJTW9Q/nNZkqP/0N3bNm4Iio2aKFAMF5J3vTYekZUNiQjW/w+d2JmeceqYlUi4D7x2IMTtktdeagjNUQ7vrBnSfF85lG7hntu+JMJeBbDxDsWOENbjPc84/agzECwWKLHCM16RjPAILMiaidUg9J8Jjq4ANV1L4Ev1h1GzddX/EeNcudSyJLeM5PJ5eX50amB+uZDOXSmSNd9e3h+AnbNFRWcqYS7C59Uh3AQVbii+WNhTM7WhLHwTC2aPT4pvcl2+Zlffias9kDzNjyYiutA6eIoSh4wqxRLyAwbXXvw/Rion2jBNjhjB38jW9g3rGDBq2BW2+sUEJq9AfxhmWruHK7WjzVod+Xl6VRg+s+xiPSEGVLqu+cZWI/+yH+ZSno3+BVdKp7tuZPxNBZcyl7mz3Uihuhdcq0UxtPSGPf6TEa1hEFXEA6pZoQLH4/KTo4NFgMIrA1VldMFcId9tXQLHucBS+vc1m4onM7gFC2kuKIupCzdYiID4bY41K39QLHLnQNbhnnQfDiv+kXJ/ACzRwE16D+m53/SUAuBE+iyZ7bTU3WD7W+0ulL95pq0cTkW8CgrC9/Pn2vZdA9VRXIv8v4kDA0l4XU+wyKQcDoNgYqOcya/62kWypFMPdj1S5LEhpQPt+25RckH4JWIktH50navolzuDGblE/G/pYEUjAP2MHTl2bvGAZBqtG+Fakf+y8jum3Gqqsy1notqfYle7h4a1Omc9p21r22VlbRUVpNIy8WRylXolmpxSCTxWgISfnj68EBgo3cUAFdF24mVJ1/YGXur0xPlyBlOZesUkq3cmbWcXHCvT+39FDRyMAKhZSrefw4YlKCEretwpjjDZdLjE2EyDxac5+uXI5+O9KshE2v4sMKAIlIYeTdtrwDdWIvhf48JaYn+jLG/kJHxM2JE/XPTB4juPNpSqCGKw7kK/0IgYZYxcERV+Y05iqNydUuKn/lHZEFq/kKnx3HgQuh2RgFOhTLs7S6QVNHx7X+5520tDOn4SH+KQdjtjyOZbkCyKr7O6x7EdagHnqqrjs9+snqPcwwn/HLgfOdvp2sUlpUc19WQK6bZE2qFh/JjdhVtn7m+XkDfGGxIqpP1eBRv1qzQiq9mH0DIcSq9fvxtsPtwL9Ar/Sx/uWuErLyuU0IlY3TmOrlBj7nE3LQN+txbMNwF99Ft8jL4r3bhLyTIVnDoQhKDtjdETwEyo9CNlXeE8KBCZyikgPEDyY0UbL3ZTYgLZmEV2FPshXDa2Hd1b4wEaVkyN8BNjDBh8z+vba0mvekOxC7ndiDjfMBjS+wWS3gNwTRoU1NNz7XIBaZ763WKdo+EaWULKXO/d/XB+rtKUjkde+u99pPj+fKv9Zxq/zUWQYMfH8uz5+ElFl794utq2zKkTICeA7GAxJU/aG2X8HOPLX37dZPdCrs+J4s3sSeqXV4BV7D6Hx2upio/P61r+0Pz1orAL+Zx0ARUdymqtYlKBenucFAphaCU0gLrFHJ6UzvpwcRyt9q9RjHDx6oohNPowAb/P8oDQG6/o0Q8JjxbIR8tsUYJnsCDsm86KMrGdTXSMYEPFFaVh1GsYW3lCdBKx+dDDNvnIoGlNdT9Vltp1fs8uCTxsC71/JL+FLGEMadrdG04FeFKjGMeU1Vs8iODkjjj1StkDunyz/70cXHoCiZ/0SlZbBM0kxQ7NGCHwfU/KhkMMb+pJaTu08F2GH/vc5jOvch7i+A99VUzDcHHw0TQuE+Iq72cuRp/EeyZ2BwLlzww8t//gpsgpn2+blFxOy4REIH7sC8M0WIZ5Yh3O+rWOtw3wy0lTMSwTiRVBWL/8zL2iUIOizxPcCKpACEILyknRYD3TGnXHyk5scvm/I+84g0AHH/a3D+mbP+vPtiLNFGzKJWywE34PgbvFmK5M5cmU57az12fqpLXlD59B/E8y/xlSWvLkHqSh9pYJHKc+YLmDB2hSllrR86KuNK8fCLTIWjORjzBfVRjsXWJ7f31igYhpbPmxGl7/5kdQRs9/hmzcPF+fEGp5THPvXslMm+/BhDozrTr//p6kmFkRK9VOiUUYuK7jVxyF63L7A7ckhfGKPW5eAr5rCpSlD/5GGaYzVL+1K/jNrgV0CJfuV6EELON18iLh/udqoRcF8FJOMzxz5O8NS9Kcvc+M9Pb5JpHYBuRhE9kuWcRnT9zr3ncYSS7RIMzEYtbTP1YM53HUzIW1UKpZ5eXCFTJ84p7wC1hDqQH0DEN6WKmV+98376uSzsu94RODr8PCLM5P+TPeLLH8xHhZlIpzL/pYIC62Wv1/850CjD37IEk0Y2qp8X8VtqHJDpHxjujEuSMfLa05+qQxHEnszGF8DnmdbHZjpXAeE0S7VPXzm3FBViN3UdmuME4c6AvUgKiybFY+CoMWLfj5sqBDWlTSvX0PDGoZsBqjdWPQwS272RuIDOk02Z9LYU/leoq72rRVLY4KJ3W3JHS6ToEDMJVCKvpCFHYk2/vbKTB87W/gtVUB9kK/wB12xCKGYRInie0CMB2RoJhAX1EjnY3k3g22yux5IRCKcEQfP+jLrbXezPj2dsg5symBuMor0CWL6cbrKj5+ITVDEzUI3KX63f6RGoA+Z4WV8PRFqU2/stdoklj0CUq5Fd24NWedwboowVprQEmvnka+Tv7sv2WPN1eT0QkOz6P2xRnwIUevNmehGh2C7tQ8S8/DeA3YB+zjIu974qPvBgzY1OfFoFY3cg5ESMvIlqZ+R+CvUQL9qKw9jyt50V400G/VpZ4GrMoJp19Cgc+mqx8kFbHSSkash4OtI7yNy+prUDwuurkyN9eCHqt44O002UWlj308qxvQ4c3BFqWASFlgT9oYGY7VTp/hyURsuN6vow+ESeA8qTKNkFfocZkerT73C+UDH9tj+33qhwzam8z3iAt6JXDDNW9476T0YJSuOL8JToch7gLdPT1oYcl/d/9Dv5XRwLVHvfFlUUiOvwV1QfdxsrqaQsViQsLTSMDFdj3AeLStYvAHmezOzTzw7PjDE+kdCaI/XONvtyhYjdmAkL48vdH8eu54fXX9MVBvvSMq+YUHhRRJS3OmX7HfqQ1at3EWvxqaZ+9dNm6Rg9OBn0ebZlMrQind7GlFE5wRrlCPNPfqeLu+E/KDKKbqgfdRB8GqmzxUW38LZUMD1aHV5r30YKuUtOFqRf57fiC7yPR5BftHkdWCDLOC/+wIA+PefkwK62yt8OaFSk2/j1eV+LTnCqF+gwKCURLFEn8OJe+UO+rA29Pq54oDg5s8SueZS7Md+Od/U59sOeOfW77e8lL1WMebM6QMOX0SM65HC9WB/zVYXdI0tizhTy1XB662FDbSRJmJ8le35qSuM5uS3UzC/qAKOywAgqoy+d1lSngptd5u2rOg9w8lqmzfEPYQUQXZ80ba0LaUzOdsE3/56es5IEFjiA6sdwYacH1NHf4xyNhGKxbnXQwFmRumeR4rG7Ixq3Djlqpmb90krum/2twYR5FuM+Gd/AqYK6nCZ2kqfE7mv3yHnCtgtF3p431oWJosM8LyETZGvy+Mtt2VaCA9KhqAy/VYpiEmkuYclC1cIR1avC+oGwlnofni46Rg9b9ckpQ3hZuSHNkr0V6/ar5wx6jZz5Zsm6vJ7h6YdM+oYTFw69vjUF2ovHcXLgTLqoB2dJRFZWvDxV83Ec+WfZxJtM3w/0TFRSnFJfWg86EJtkTTaNjw+eD3LHOrPFrvvNrwv/Fsl99w8J7an+7hjuhl0f5Y86SY2SP3Kyp9k8fmwzcT3c5HmP9k79DpYtB2Cd9JgnIN1MKKVhbnHzRuw6obZYHrpoKw4mPXlBXitWJsEWqZ1fXhh6JTsIFuok+mfuIYy9rhus3wfWGB8qlbtWcMSrJjlABg4j9K3xgzBlbm/cPMLuM0md00k5ghucnMD7m8Qdje1YBIwKnSyhzv2te3rJy0NIw3qxfrFqK0HxHdKqhLrDd0SxsfEg6wtJ+Jx59aV+DqCq7Bw2fq+lNJgQH6PlOe5WQSdLQOqJ5QBHd8GbR+Ob47XqDZwikewFljsg5/HmZI+tkWgCTniuV3MFfd/yUN7KpOUe+AMp9HD+DE28ERa+YLNNBSUtt5KYIaBhRq/14z4ACVTCkj1e9gPMbyMLG5E1WSD5h8DPhHsABptjYYz/HzOJOQdDnx+zdfxGH4uMlChTNEHtSs1OwZpah/3ucRQ8S9ZNkPSvS9gJ/gK16F50ed/LZh/mLaJ0sJfqWAamdgYeRrDsBYXg6i+zxtnNTe6e/tVUxRF7TrjlboQ3AzbiyQjDzZWvr6VWaU6peCkzYKlbwQswf62DPyC4Elnib37CGApQp11KakMYr2uQQ9Hbi/1Jm80vMNKuy9aLAchvo4hxXZKHQwOxIz2N6j9+D7fkK35AaC24PKYXJVFeojcn36Kbl0tJ3PEMpuQBhKkgRvD400VpQSFf5wQxcUrqy3yalL3Yv+RrHQ+7eou4AlvepiDc5DrD9Jh79mUlBK8QNP5Dn1PneuaHkKYm+d39U3LS37GaPj/s6YEAMOQZqi9bkctkZ21Kry4lN+bRO8QVt+5JKZHTPzsEiYo/1xuZDChD5FsfxwE0arYjGJTRWEORqnDMzKmsxyyYnwMCGtcEzZf07gH1uFAuJ432/znvzT4GcijFUx8jDzQCnwGTH18IGRQJCb7YnMPLpCRAgZjGkC4U8U/uICFh29e8GZTbRtpy0hgwYdY+rDewtXEVxyVSBStfTNp6GZnltqo+mTzyrMNqyhWDLO7nZDux4yz3lTxgN0sRsoQG3yaIM32uC4w3AMxWm76wvdhmUd0gtPWyYB3f2YRgQglQyDn7pbtMsqIG0cLW64msIT8I51AP29yyYdfe3gkjbwj+mvLWs+SztMH+smIWhj5s6sgqIzWYoojOV2N8Qnfqv560Lo02U3zcWXxG3ylDPi0kkZZLF+XABopMtNwSK/vWdFSxzkx77FUn1CHFzupQfp0lK+iz8l7GaIu2NQdQ1lJ0KgYkV2MBHm+C7/AHdmz4sVIRi0N9m+W4ixHXbkeGjkyqm5Pol4Cu9TUgHWmkeBqM48L18RqTatZmw+hRWGESGgTp7veehrwAGxIpPpC9qumDuzwVNAWnpYtrk3UceZgP68Mj3VBzZZbMJ4d0eWENzH0bmlF9Idxpfx7CZyEDKLDwn8cNPRewF+HuftAeRMwnaPe9mjpYKsRHqivmVK9d5GVouDmtMiRlnZQvsG86R0zj6XXjJQSTexWZevRwa0W2aPFnHIEROMyJKICJyLaMurIT94V8YlXF852Y6GhKubtLA/V1r6qdWTADX2fh8u2IRQCUy7bwid0leTp6kyIrh72hnDtueZTgZuic41iI0+fFA1PHjxuZneCuWlF9RcDcFXXLs6p7Ovoc0ydLNk+Xk5lRC7Wj0YyvxGw5NLQlJvXwuLj7JeqI0XS6ahbKJxADr9BX+47KF4D8NM/Pu3VuVOmo+wJEDh4ZPDfzNZBkrf40sx5rrxxV3IZKBTYPbEBxb+xkIm0BoaXRZunleMnCau3aR9ewMfMc87hXem0ZGWTEeG2UUID2+I5AWb8uiMJOe0jEIAcZbcni0gVPtjVUiZ9KZd5A43b3KWY40IRpwbqorJSjf3jz6H2EVOcdMwkx2DrZtjMrCWMYNfM6q1JHk1s699+xi35rOaRFY595UfI6t58BGYAcT/ImC54IqvO1TRXtDEOcgvlCJLlyAzQ7+48qcBs4u5LK4L6IlniJrYH598JlSzJcfAWW1taq5q4cVyvABf5T9XZxEmxI7lqkT2JKSJDPtYRccPnchxb6h6ZAasvk7zDvdmzXLRag76ObbeA6AFln1WkiQSaY1yg95U10wYcphnnsO1UktzbEUgN/TF/svwIGtKb/gWd55RfoXcPEZ4i5Ro02P9JbdugvRgKB6E0UJ84EQHIGNxboD+/Wu+1cY7LZxeoCWk0eLNDTov1c+M5HVUbU0eWdA9bCUGLL7A8tI7dwI1nhGHFLh4KtIBkAE7W3H3Vb2Xk4cNKjyOBlMC58MMv6cD3CsqFSlKnGWw+4L1XXaWyp+ntTpgmKakLjCwezLW/SffgIC6yN6aW9WH3rArO/0q/qe6oCF4SnVYarcn2fDgXKM0c6nU/2OxYBvLdOgFgJELPd32/Hnb2IpUNIETBecoP0yTwhsTxcZD/nspLM7zkP0rzuQ2Zijy++BbWzp0uc8bDVv4Ryr3xFOuFFFodhJCZVwVgCLSzzKBCcg1PuKE9sAbajObk2H7UwahUi6yaJmj0OwWmcnqaZ2XP36ASh0DV7afxb+5PquHApu09kRZ+jsfIuio2lJhlqHKCA3BBmks2R6+tL3xC52zDhJRHH/iJYk6e77W2TJ7zj0ukrVG9hs0Ta7sPpgbHUrabOkREbcjHSjwNGhOn4Lc400KkiukRkcdBXcWQKjbSL30x4hxTmUPL/l6KEKIx2AfsuCWjjQ/JGO9kAtsHPJVukTA7kbNIBNchTWN6Qo89P1+grmYj7foiKPHfygw8fDtptzPXuAatMdHk83ShkxhEVX+EY+Hqws7jyACbX66nVBBEhGAHs+9/NrW8/xYUrkq+SiW3mK2rrurV4KzzhDxUAnGY/m7DEGG4rf89MWPVdQnCdYZPVnCgNeb9x8g6vuWT0Tbgf4VzDaoF/HaT/+9t3NiGEJRE3wYOvhvn2y7YLrqCygUcThBpxknbLdrLyZ6N8eI3MsJBQMEERQit0kQO44x6ejDFZ6rePJz70q2Ycojk4oaqUAAAA"},

  live2d: {"model":"miku.model3.json","list":["miku.model3.json","miku.moc3","miku.2048/texture_00.png","miku.physics3.json","miku.cdi3.json","motions/miku_01.motion3.json","motions/miku_02.motion3.json","motions/miku_06.motion3.json","motions/miku_03.motion3.json","motions/miku_04.motion3.json","motions/miku_07.motion3.json","motions/miku_05.motion3.json","motions/miku_idle.motion3.json"],"base":"https://cdn.jsdelivr.net/gh/liangju1/miles-radar@v1.0.9/assets/live2d/","cache":"1.0.9"},
};

const STYLES = `:host {
  all: initial;
  position: relative;
  z-index: 2147483000;
}
.ar {
  --page: #f1f2f3;
  --surface: #ffffff;
  --wash: #f6f7f8;
  --wash-2: #e3e5e7;
  --ink: #18191c;
  --ink-2: #61666d;
  --muted: #9499a0;
  --line: #e3e5e7;
  --primary: #e95a8c;
  --primary-ink: #fff;
  --primary-soft: #fdeef3;
  --primary-text: #d64479;
  --good: #128a5b;
  --trust: #0b78b4;
  --lead: #61666d;
  --warn: #b86e10;
  --bad: #d43d4b;
  --d-empty: #e3e5e7;
  --d-lead: #f59ab9;
  --d-trusted: #57b4e8;
  --d-verified: #3cbf86;
  --d-bad: #e05561;
  --d-warn: #f3b23c;
  --q1: #fdeef3;
  --q2: #fbd3e1;
  --q3: #f8b3cb;
  --q4: #f48fb1;
  --q5: #ec6b98;
  --q6: #d9497c;
  --q7: #b1305f;
  --qi1: #18191c;
  --qi2: #18191c;
  --qi3: #18191c;
  --qi4: #18191c;
  --qi5: #fff;
  --qi6: #fff;
  --qi7: #fff;
  --note: #fff6e5;
  --note-ink: #8a5300;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 36px rgba(0, 0, 0, 0.18);
  font:
    14px/1.55 'MiSans',
    'HarmonyOS Sans SC',
    'PingFang SC',
    'Microsoft YaHei UI',
    system-ui,
    -apple-system,
    sans-serif;
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}
@media (prefers-color-scheme: dark) {
  .ar.story-open::before {
    background: rgba(0, 0, 0, 0.65);
  }
  .ar {
    --page: #17181a;
    --surface: #222326;
    --wash: #2b2c30;
    --wash-2: #3a3b40;
    --ink: #e3e5e7;
    --ink-2: #a2a7ae;
    --muted: #757a81;
    --line: #34353a;
    --primary: #f0679a;
    --primary-soft: #3a2530;
    --primary-text: #ff8ab3;
    --good: #43c98f;
    --trust: #4cb3f0;
    --lead: #a2a7ae;
    --warn: #f0a23b;
    --bad: #ff6b78;
    --d-empty: #34353a;
    --d-lead: #e87aa2;
    --d-trusted: #4ba6dc;
    --d-verified: #35b07a;
    --q1: #33232b;
    --q2: #4a2636;
    --q3: #662a43;
    --q4: #852f51;
    --q5: #a83a63;
    --q6: #d04f7d;
    --q7: #f27ba5;
    --qi1: #e3e5e7;
    --qi2: #e3e5e7;
    --qi3: #e3e5e7;
    --qi4: #e3e5e7;
    --qi7: #18191c;
    --note: #3a2e17;
    --note-ink: #ffd58f;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
    --shadow-lg: 0 10px 36px rgba(0, 0, 0, 0.6);
  }
}
.ar *,
.ar *::before,
.ar *::after {
  box-sizing: border-box;
}
.ar [hidden] {
  display: none !important;
}
.ar button,
.ar select,
.ar input {
  font: inherit;
  color: inherit;
}
.muted {
  color: var(--muted);
}
.small {
  font-size: 12px;
}
.num {
  font-variant-numeric: tabular-nums;
}

.ar-mascot {
  display: block;
  overflow: visible;
}
.ar-eyes {
  transform-box: fill-box;
  transform-origin: center;
  animation: ar-blink 5.2s infinite;
}
@keyframes ar-blink {
  0%,
  95%,
  100% {
    transform: scaleY(1);
  }
  97% {
    transform: scaleY(0.1);
  }
}
.sway {
  transform-origin: 50% 100%;
  animation: ar-sway 3.6s ease-in-out infinite;
}
@keyframes ar-sway {
  0%,
  100% {
    transform: rotate(-2deg) translateY(0);
  }
  50% {
    transform: rotate(2deg) translateY(-2px);
  }
}
.busy .ar-ball {
  animation: ar-ball 0.8s steps(2) infinite;
}
@keyframes ar-ball {
  50% {
    fill: #ff8fb1;
  }
}
.busy .ar-arm {
  transform-box: view-box;
  transform-origin: 75px 97px;
  animation: ar-wave 1s ease-in-out infinite;
}
@keyframes ar-wave {
  50% {
    transform: rotate(-12deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .ar *,
  .ar *::before,
  .ar *::after {
    animation: none !important;
    transition: none !important;
  }
}

.ar-av {
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 20%;
  background: var(--primary-soft);
  flex: none;
  display: inline-block;
  vertical-align: middle;
}
.dock .fig {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform-origin: 50% 100%;
  animation: ar-breathe 4s ease-in-out infinite;
  pointer-events: none;
}
img.fig {
  display: block;
}
@keyframes ar-breathe {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.012);
  }
}
.dock.busy .fig {
  animation: ar-sway 2.6s ease-in-out infinite;
}
.dock.m-happy .fig {
  animation: ar-hop 0.9s ease-out 2;
}
@keyframes ar-hop {
  0%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-9px);
  }
  55% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-4px);
  }
}
.dock .deco {
  position: absolute;
  font-style: normal;
  pointer-events: none;
}
.dock .spark {
  top: 2px;
  right: -8px;
  color: #ff8fbf;
  font-size: 15px;
  animation: ar-twinkle 1.2s ease-in-out infinite;
}
.dock .spark.s2 {
  top: 26px;
  right: auto;
  left: -8px;
  font-size: 11px;
  animation-delay: 0.4s;
  color: #ffd166;
}
@keyframes ar-twinkle {
  50% {
    opacity: 0.2;
    transform: scale(0.6);
  }
}
.dock .bang {
  top: -4px;
  right: -6px;
  color: var(--primary);
  font-weight: 900;
  font-size: 18px;
  animation: ar-pop 0.3s ease-out;
}
.dock .drop {
  top: 10px;
  right: -4px;
  width: 10px;
  height: 13px;
  background: #a8d8ff;
  border: 1px solid #73b7ec;
  border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
}
.cover .prog {
  position: absolute;
  left: 8px;
  bottom: 8px;
  z-index: 3;
  font-size: 10.5px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #18191c;
}
.cover .prog.p-AS {
  background: #0b5ea8;
  color: #fff;
}
.cover .xcheck {
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 3;
  font-size: 10.5px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 999px;
  background: #128a5b;
  color: #fff;
}
.dock.m-down .fig {
  transform: translateY(7px) rotate(-1.6deg);
  transform-origin: 50% 85%;
  transition: transform 0.35s ease-out;
}
.dock .anger {
  top: calc(var(--face-y, 12%) - var(--deco-s, 16px) * 0.9);
  left: 58%;
  width: calc(var(--deco-s, 16px) * 1.1);
  height: calc(var(--deco-s, 16px) * 1.1);
  filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 2px #fff);
  animation: ar-anger 1.1s ease-in-out infinite;
}
.dock .anger b {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: calc(var(--deco-s, 16px) * 0.26);
  border-radius: 2px;
  background: var(--primary);
}
.dock .anger b:first-child {
  transform: rotate(45deg);
}
.dock .anger b:last-child {
  transform: rotate(-45deg);
}
@keyframes ar-anger {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.18);
  }
}
.dock .zz {
  top: -6px;
  right: -8px;
  color: #a99be8;
  font-weight: 800;
  font-size: 14px;
}
.dock .zz small {
  font-size: 10px;
  margin-left: 1px;
}
.credit {
  font-size: 10.5px;
  color: var(--muted);
  line-height: 1.5;
  margin-top: 8px;
}

.dock {
  position: fixed;
  z-index: 2147483000;
  width: 66px;
  height: 92px;
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}
.dock svg.fig {
  width: 100%;
  height: 100%;
}
.dock:active {
  cursor: grabbing;
}
.dock .shadow {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -2px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.14);
  filter: blur(2px);
}
.dock .badge-n {
  position: absolute;
  top: 2px;
  left: 0;
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  border-radius: 9px;
  padding: 0 5px;
  line-height: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
.bubble {
  position: fixed;
  z-index: 2147483002;
  max-width: 240px;
  background: var(--surface);
  color: var(--ink);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: 8px 26px 8px 12px;
  font-size: 13px;
  line-height: 1.5;
  animation: ar-pop 0.22s ease-out;
}
.bubble::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--surface);
  transform: rotate(45deg);
  bottom: -5px;
  right: 26px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.05);
}
.bubble.left::after {
  right: auto;
  left: 26px;
}
.bubble b {
  color: var(--primary-text);
}
.bubble.good b {
  color: var(--good);
}
.bubble.bad b {
  color: var(--bad);
}
.bubble .bx {
  position: absolute;
  top: 4px;
  right: 6px;
  border: 0;
  background: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  padding: 2px;
}
.bubble .bsub {
  display: block;
  font-size: 11.5px;
  color: var(--muted);
  margin-top: 2px;
}
@keyframes ar-pop {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.96);
  }
}

.mini {
  position: fixed;
  z-index: 2147483001;
  width: 360px;
  height: 520px;
  max-height: calc(100vh - 24px);
  background: var(--page);
  border-radius: 14px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ar-pop 0.2s ease-out;
}
.mini-h {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--surface);
}
.mini-h b {
  font-size: 15px;
  flex: 1;
}
.mini-b {
  flex: 1;
  overflow: auto;
  padding: 10px 12px;
}
.say {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 10px;
}
.say .txt {
  background: var(--surface);
  border-radius: 4px 12px 12px 12px;
  padding: 7px 11px;
  font-size: 13px;
  color: var(--ink-2);
  box-shadow: var(--shadow);
}
.mcard {
  display: flex;
  gap: 10px;
  background: var(--surface);
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 0;
  width: 100%;
  text-align: left;
}
.mcard:hover {
  box-shadow: var(--shadow);
}
.mcard .thumb {
  width: 64px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  flex: none;
}
.mcard .thumb svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.mcard .mt {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.mcard .mt .r {
  font-weight: 600;
  font-size: 14px;
}
.mcard .mt .p b {
  color: var(--primary-text);
  font-size: 15px;
}
.mcard .mt .p {
  font-size: 12px;
  color: var(--ink-2);
}
.mini-f {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  background: var(--surface);
  flex-wrap: wrap;
}
.mini-f .btn {
  flex: 1;
  justify-content: center;
}
.prog {
  background: var(--surface);
  border-radius: 10px;
  padding: 8px 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: var(--ink-2);
}

.seg {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  border-radius: 8px;
  background: var(--wash);
}
.seg button {
  border: 0;
  background: none;
  padding: 3px 11px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 6px;
  color: var(--ink-2);
}
.seg button.on {
  background: var(--surface);
  color: var(--primary-text);
  font-weight: 600;
  box-shadow: var(--shadow);
}
.btn {
  border: 0;
  background: var(--wash);
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--ink-2);
  text-decoration: none;
}
.btn:hover {
  background: var(--wash-2);
  color: var(--ink);
}
.btn.primary {
  background: var(--primary);
  color: var(--primary-ink);
  font-weight: 600;
}
.btn.primary:hover {
  filter: brightness(1.06);
}
.btn.small {
  padding: 3px 11px;
  font-size: 12px;
}
.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.x {
  border: 0;
  background: var(--wash);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 17px;
  cursor: pointer;
  color: var(--ink-2);
  line-height: 1;
  flex: none;
}
.x:hover {
  background: var(--wash-2);
}
.link {
  border: 0;
  background: none;
  color: var(--muted);
  cursor: pointer;
  padding: 0 2px;
  font-size: 12px;
}
.link:hover {
  color: var(--primary-text);
}
select {
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--surface);
  padding: 3px 6px;
  color: var(--ink-2);
}
.bar {
  height: 4px;
  background: var(--wash-2);
  border-radius: 2px;
  overflow: hidden;
  margin: 5px 0;
}
.bar i {
  display: block;
  height: 100%;
  width: 0;
  background: var(--primary);
  border-radius: 2px;
  transition: width 0.4s;
}

.full {
  position: fixed;
  inset: 0;
  z-index: 2147483003;
  background: var(--page);
  display: flex;
  flex-direction: column;
  animation: ar-pop 0.18s ease-out;
}
.top {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 18px;
  height: 56px;
  background: var(--surface);
  box-shadow: 0 1px 0 var(--line);
  flex: none;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}
.brand b {
  font-size: 16px;
  display: block;
  line-height: 1.2;
}
.brand .small {
  display: block;
  color: var(--muted);
}
.tabs {
  display: flex;
  gap: 20px;
  height: 100%;
  margin-left: 12px;
}
.tabs button {
  border: 0;
  background: none;
  cursor: pointer;
  color: var(--ink-2);
  font-size: 15px;
  position: relative;
  height: 100%;
  padding: 0 2px;
}
.tabs button.on {
  color: var(--ink);
  font-weight: 600;
}
.tabs button.on::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 8px;
  width: 18px;
  height: 3px;
  margin-left: -9px;
  border-radius: 2px;
  background: var(--primary);
}
.tabs .n {
  font-size: 11px;
  color: var(--muted);
  margin-left: 2px;
  font-weight: 400;
}
.spacer {
  flex: 1;
}
.body {
  flex: 1;
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 0;
}
.setup {
  background: var(--surface);
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-shadow: 1px 0 0 var(--line);
}
.setup-h {
  display: none;
}
.setup-s {
  flex: 1;
  overflow: auto;
  padding: 14px 16px;
}
.setup-s section + section {
  margin-top: 18px;
}
.sec-h {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.sec-h h2 {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}
.preset {
  font-size: 12px;
  color: var(--muted);
}
.run {
  padding: 12px 16px 14px;
  display: grid;
  gap: 8px;
  background: var(--surface);
  box-shadow: 0 -1px 0 var(--line);
}
.run .primary {
  justify-content: center;
  padding: 9px;
  font-size: 15px;
}
.estimate {
  font-size: 12px;
  color: var(--muted);
}
.estimate b {
  color: var(--ink);
}
.picked {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.picked .none {
  font-size: 12px;
  color: var(--muted);
}
.pchip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: var(--primary-soft);
  color: var(--primary-text);
  border-radius: 6px;
  padding: 1px 4px 1px 8px;
  font-size: 13px;
}
.pchip small {
  opacity: 0.7;
  font-size: 11px;
}
.pchip button {
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  padding: 0 2px;
  opacity: 0.6;
}
.picked-h {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 6px;
}
.search {
  position: relative;
  margin-top: 8px;
}
.search input {
  width: 100%;
  border: 1px solid var(--line);
  background: var(--wash);
  border-radius: 8px;
  padding: 7px 10px;
  outline: none;
}
.search input:focus {
  border-color: var(--primary);
  background: var(--surface);
}
.suggest {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 5;
  background: var(--surface);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  max-height: 320px;
  overflow-y: auto;
}
.sug {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 7px 12px;
  cursor: pointer;
  font-size: 13px;
}
.sug b {
  font-weight: 600;
}
.sug .code {
  color: var(--primary-text);
  font-weight: 600;
  font-size: 12px;
}
.sug .sub {
  color: var(--muted);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}
.sug.on,
.sug:hover {
  background: var(--wash);
}
.sug.added b::after {
  content: ' ✓';
  color: var(--good);
}
.sug.all {
  color: var(--primary-text);
  font-weight: 600;
  border-top: 1px solid var(--line);
}
.quick {
  margin-top: 8px;
}
.quick > summary {
  cursor: pointer;
  font-size: 12px;
  color: var(--muted);
}
.grp-h {
  display: flex;
  align-items: center;
  padding: 6px 0 4px;
  font-size: 12px;
  color: var(--ink-2);
}
.grp-h span {
  flex: 1;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.chip {
  border: 1px solid transparent;
  background: var(--wash);
  border-radius: 6px;
  padding: 1px 9px;
  cursor: pointer;
  font-size: 13px;
  color: var(--ink-2);
}
.chip small {
  margin-left: 3px;
  color: var(--muted);
  font-size: 11px;
}
.chip.on {
  background: var(--primary-soft);
  border-color: var(--primary);
  color: var(--primary-text);
}
.opts {
  display: grid;
  gap: 12px;
}
.opt {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.opt-l {
  width: 32px;
  color: var(--ink-2);
  font-size: 13px;
}
.stepper {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background: var(--wash);
  padding: 2px;
}
.stepper button {
  border: 0;
  background: none;
  width: 28px;
  height: 26px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  color: var(--ink-2);
}
.stepper output {
  min-width: 34px;
  text-align: center;
  font-weight: 600;
}
.hint {
  font-size: 12px;
  color: var(--muted);
}

.main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.view {
  flex: 1;
  overflow: auto;
  padding: 16px 22px 40px;
}
.feedbar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.channels {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  flex: 1;
  min-width: 0;
  scrollbar-width: none;
}
.channels::-webkit-scrollbar {
  display: none;
}
.channels button {
  border: 0;
  background: var(--surface);
  padding: 4px 14px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  color: var(--ink-2);
  font-size: 13px;
}
.channels button.on {
  background: var(--primary-soft);
  color: var(--primary-text);
  font-weight: 600;
}
.channels .n {
  font-size: 11px;
  color: var(--muted);
  margin-left: 3px;
}
.tools {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--ink-2);
  flex-wrap: wrap;
}
.filterchip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--primary-soft);
  color: var(--primary-text);
  border-radius: 6px;
  padding: 2px 4px 2px 10px;
  font-size: 13px;
}
.filterchip button {
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: 15px;
}
.saybar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
}
.saybar .txt {
  background: var(--surface);
  border-radius: 12px 12px 12px 4px;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--ink-2);
  box-shadow: var(--shadow);
}

.feed {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.col {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.card {
  cursor: pointer;
  background: var(--surface);
  border-radius: 12px;
  overflow: hidden;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  animation: ar-pop 0.25s ease-out both;
}
.card:hover,
.card:focus-visible {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
  outline: none;
}
.cover {
  position: relative;
  overflow: hidden;
}
.cover > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.cover .scrim {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52%;
  background: linear-gradient(to top, rgba(20, 16, 40, 0.55), rgba(20, 16, 40, 0));
}
.cover .cv-top {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
}
.cover .price {
  background: rgba(255, 255, 255, 0.94);
  color: var(--primary-text);
  border-radius: 999px;
  padding: 1px 9px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}
.cover .cv-t {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
}
.cover .cv-t small {
  display: block;
  font-size: 11.5px;
  opacity: 0.92;
}
.cover .cv-t b {
  display: block;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 0.02em;
}
.cover .new {
  position: absolute;
  right: 8px;
  bottom: 12px;
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 4px;
  padding: 0 5px;
  line-height: 16px;
}
.ctitle {
  margin: 8px 10px 0;
  font-size: 14px;
  line-height: 1.45;
  color: var(--ink);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card:hover .ctitle {
  color: var(--primary-text);
}
.cfoot {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 6px 10px 10px;
  font-size: 12px;
  color: var(--muted);
}
.cfoot .who {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fav {
  border: 0;
  background: none;
  cursor: pointer;
  color: var(--muted);
  font-size: 12px;
  padding: 0 2px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
.fav .h {
  font-size: 15px;
}
.fav.on {
  color: var(--primary-text);
}
.fav.on .h {
  animation: ar-heart 0.35s ease-out;
}
@keyframes ar-heart {
  40% {
    transform: scale(1.45);
  }
}
.more {
  text-align: center;
  margin: 22px 0 6px;
  color: var(--muted);
  font-size: 12px;
}
.empty {
  max-width: 380px;
  margin: 40px auto;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.empty b {
  color: var(--ink-2);
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0 4px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
  padding: 0 5px;
  line-height: 17px;
  font-size: 11px;
  white-space: nowrap;
  border: 1px solid currentColor;
  background: var(--surface);
}
.badge i {
  font-style: normal;
  font-weight: 700;
}
.badge.good {
  color: var(--good);
}
.badge.trust {
  color: var(--trust);
}
.badge.lead {
  color: var(--lead);
}
.badge.warn {
  color: var(--warn);
}
.badge.bad {
  color: var(--bad);
}
.cover .badge {
  background: rgba(255, 255, 255, 0.94);
  border-color: transparent;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.tiles {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.tile {
  background: var(--surface);
  border-radius: 10px;
  padding: 10px 16px;
  min-width: 130px;
}
.tile .v {
  font-size: 22px;
  font-weight: 600;
}
.tile .k {
  font-size: 12px;
  color: var(--muted);
}
.note {
  background: var(--note);
  color: var(--note-ink);
  padding: 8px 12px;
  border-radius: 8px;
  margin: 0 0 12px;
  font-size: 13px;
}
.mwrap {
  overflow: auto;
  border-radius: 10px;
  background: var(--surface);
  padding: 8px;
}
table.matrix {
  border-collapse: separate;
  border-spacing: 3px;
  font-variant-numeric: tabular-nums;
}
.matrix th {
  font-weight: 500;
  font-size: 12px;
  color: var(--ink-2);
  padding: 4px 6px;
  white-space: nowrap;
  background: var(--surface);
}
.matrix tbody th {
  text-align: left;
  position: sticky;
  left: 0;
}
.matrix th small {
  color: var(--muted);
  margin-left: 4px;
}
.cell {
  width: 58px;
  height: 40px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  position: relative;
  line-height: 1.15;
}
.cell b {
  display: block;
  font-size: 14px;
}
.cell span {
  font-size: 10px;
  opacity: 0.85;
}
.cell.none {
  color: var(--muted);
  cursor: default;
  box-shadow: inset 0 0 0 1px var(--line);
}
.cell.zero {
  color: var(--muted);
  background: var(--wash);
}
.cell.q1 {
  background: var(--q1);
  color: var(--qi1);
}
.cell.q2 {
  background: var(--q2);
  color: var(--qi2);
}
.cell.q3 {
  background: var(--q3);
  color: var(--qi3);
}
.cell.q4 {
  background: var(--q4);
  color: var(--qi4);
}
.cell.q5 {
  background: var(--q5);
  color: var(--qi5);
}
.cell.q6 {
  background: var(--q6);
  color: var(--qi6);
}
.cell.q7 {
  background: var(--q7);
  color: var(--qi7);
}
.cell[data-o]:hover {
  outline: 2px solid var(--ink);
}
.cell .mk {
  position: absolute;
  top: -6px;
  right: -4px;
  font-style: normal;
  font-size: 10px;
  font-weight: 700;
  background: var(--surface);
  color: var(--good);
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0 3px;
  line-height: 13px;
}
.legend {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--muted);
  margin-top: 10px;
  align-items: center;
}
.ramp {
  display: inline-flex;
  gap: 2px;
  vertical-align: middle;
  margin: 0 4px;
}
.ramp i {
  width: 14px;
  height: 10px;
  border-radius: 2px;
}

.scrim-all {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.32);
  z-index: 2147483004;
}
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(520px, 100vw);
  z-index: 2147483005;
  background: var(--surface);
  box-shadow: var(--shadow-lg);
  overflow: auto;
  animation: ar-slide 0.2s ease-out;
}
@keyframes ar-slide {
  from {
    transform: translateX(24px);
    opacity: 0;
  }
}
.drawer > .x {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  background: rgba(255, 255, 255, 0.9);
}
.dcover {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.dcover > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.dcover .cv-t b {
  font-size: 34px;
}
.dbody {
  padding: 12px 20px 24px;
}
.dbody p {
  color: var(--ink-2);
  font-size: 13px;
  margin: 8px 0;
}
.dprice {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 2px;
}
.dprice b {
  font-size: 24px;
  color: var(--primary-text);
  font-variant-numeric: tabular-nums;
}
.dmeta {
  font-size: 12px;
  color: var(--muted);
}
h3 {
  font-size: 14px;
  font-weight: 600;
  margin: 18px 0 8px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}
h3 .sub {
  font-weight: 400;
  font-size: 12px;
  color: var(--muted);
}
.facts {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 4px 10px;
  font-size: 13px;
  margin: 10px 0;
}
.facts dt {
  color: var(--muted);
}
.facts dd {
  margin: 0;
}
.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0;
  align-items: center;
}
.daybox {
  background: var(--wash);
  border-radius: 10px;
  padding: 10px 14px;
  margin-top: 10px;
}
.months {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
}
.month {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 6px 8px 8px;
}
.month-t {
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}
.month-t span {
  color: var(--muted);
  font-weight: 400;
}
.wk,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}
.wk span {
  text-align: center;
  font-size: 10px;
  color: var(--muted);
}
.day {
  border: 0;
  background: none;
  border-radius: 4px;
  aspect-ratio: 1;
  padding: 0;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--muted);
}
.day.other {
  box-shadow: inset 0 0 0 1px var(--wash-2);
}
.day.has {
  cursor: pointer;
  color: #fff;
  font-weight: 600;
}
.day.st-lead {
  background: var(--d-lead);
}
.day.st-trusted {
  background: var(--d-trusted);
}
.day.st-verified {
  background: var(--d-verified);
}
.day.st-gone,
.day.st-airport,
.day.st-excluded {
  background: transparent;
  box-shadow: inset 0 0 0 1.5px var(--d-bad);
  color: var(--muted);
  text-decoration: line-through;
}
.day.st-mixed,
.day.st-seats {
  background: var(--d-warn);
}
.day.new::after {
  content: '';
  position: absolute;
  right: 1px;
  top: 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 1px var(--surface);
}
.day.has:hover,
.day.sel {
  outline: 2px solid var(--ink);
  z-index: 1;
}
.tierrow {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  background: var(--wash);
  cursor: pointer;
  border: 0;
  text-align: left;
  width: 100%;
  margin-bottom: 4px;
  color: var(--ink);
}
.tierrow:hover {
  background: var(--wash-2);
}
.tierrow .sub {
  color: var(--muted);
  font-size: 12px;
  margin-left: auto;
  white-space: nowrap;
}
.fine {
  font-size: 12px;
  color: var(--muted);
  border-top: 1px solid var(--line);
  padding-top: 12px;
  margin-top: 18px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 2147483010;
  background: rgba(24, 25, 28, 0.9);
  color: #fff;
  padding: 6px 16px 6px 8px;
  border-radius: 10px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--shadow-lg);
  animation: ar-pop 0.2s ease-out;
  max-width: calc(100vw - 32px);
}
.tip {
  position: fixed;
  z-index: 2147483010;
  pointer-events: none;
  background: var(--surface);
  box-shadow: var(--shadow-lg);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  max-width: 260px;
  line-height: 1.6;
}

.mobile-only {
  display: none !important;
}
@media (max-width: 720px) {
  .mini {
    left: 0 !important;
    right: 0 !important;
    top: auto !important;
    bottom: 0 !important;
    width: 100%;
    height: 72vh;
    border-radius: 16px 16px 0 0;
  }
  .top {
    padding: 0 10px;
    gap: 8px;
    height: 52px;
  }
  .brand .small,
  .top .modehint {
    display: none;
  }
  .tabs {
    gap: 14px;
    margin-left: 4px;
  }
  .body {
    grid-template-columns: 1fr;
  }
  .setup {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 82vh;
    z-index: 6;
    border-radius: 16px 16px 0 0;
    box-shadow: var(--shadow-lg);
    transform: translateY(105%);
    transition: transform 0.25s;
  }
  .setup.open {
    transform: none;
  }
  .setup-h {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px 0;
    font-weight: 600;
  }
  .view {
    padding: 12px 10px 40px;
  }
  .feed {
    gap: 8px;
  }
  .col {
    gap: 10px;
  }
  .cover .cv-t b {
    font-size: 20px;
  }
  .ctitle {
    font-size: 13px;
    margin: 6px 8px 0;
  }
  .cfoot {
    margin: 5px 8px 8px;
  }
  .mobile-only {
    display: inline-flex !important;
  }
}

.art .cl {
  animation: ar-drift 28s ease-in-out infinite alternate;
  animation-play-state: paused;
}
.art .cl.c1 {
  animation-duration: 36s;
  animation-direction: alternate-reverse;
}
.art .cl.c2 {
  animation-duration: 44s;
}
@keyframes ar-drift {
  from {
    transform: translateX(-16px);
  }
  to {
    transform: translateX(16px);
  }
}
.art .glow {
  transform-box: fill-box;
  transform-origin: center;
  animation: ar-glow 4.5s ease-in-out infinite;
  animation-play-state: paused;
}
@keyframes ar-glow {
  50% {
    opacity: 0.55;
    transform: scale(1.14);
  }
}
.in-view .art .cl,
.in-view .art .glow,
.dcover .art .cl,
.dcover .art .glow,
.thumb .art .cl {
  animation-play-state: running;
}
.art .pl {
  transition: transform 1.8s cubic-bezier(0.3, 0.7, 0.3, 1);
}
.card:hover .art .pl,
.dcover .art .pl {
  transform: translate(var(--dx), var(--dy));
}
.dcover .art .pl {
  transition-delay: 0.35s;
}
.card .art .l-far,
.card .art .l-near,
.card .art .l-cloud {
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.card .art .l-cloud {
  transform: translate(calc(var(--tx, 0) * 5px), calc(var(--ty, 0) * 3px));
}
.card .art .l-far {
  transform: translate(calc(var(--tx, 0) * 3px), calc(var(--ty, 0) * 2px));
}
.card .art .l-near {
  transform: translate(calc(var(--tx, 0) * 9px), calc(var(--ty, 0) * 4px));
}
.card .cover {
  transform: perspective(800px) rotateY(calc(var(--tx, 0) * 4deg))
    rotateX(calc(var(--ty, 0) * -3deg));
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
  will-change: transform;
}
.card {
  animation: ar-rise 0.42s cubic-bezier(0.2, 0.8, 0.3, 1) both;
}
@keyframes ar-rise {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.985);
  }
}

.drawer.flip {
  animation: none;
}
.dcover {
  aspect-ratio: 4 / 3;
}
.dcover .cv-t b {
  font-size: 34px;
}
.dcover .cv-t {
  bottom: 14px;
  left: 18px;
}

.btn,
.chip,
.seg button,
.fav,
.mcard,
.x,
.channels button,
.tierrow,
.tabs button {
  transition:
    transform 0.12s ease-out,
    background 0.15s,
    color 0.15s;
}
.btn:active,
.chip:active,
.seg button:active,
.fav:active,
.mcard:active,
.x:active,
.channels button:active,
.tierrow:active {
  transform: scale(0.95);
}
.heartp {
  position: fixed;
  z-index: 2147483011;
  pointer-events: none;
  color: var(--primary);
  font-style: normal;
  font-size: 13px;
  will-change: transform, opacity;
}
.dock .holder {
  position: absolute;
  inset: 0;
  transform-origin: 50% 100%;
}
.dock.settle .holder {
  animation: ar-wobble 0.7s cubic-bezier(0.3, 0.7, 0.4, 1);
}
@keyframes ar-wobble {
  20% {
    transform: rotate(-7deg) scaleY(0.96);
  }
  45% {
    transform: rotate(5deg) scaleY(1.02);
  }
  70% {
    transform: rotate(-2deg);
  }
  100% {
    transform: none;
  }
}
.dock canvas.l2d {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
}
.prog.busy .bar i {
  background: linear-gradient(90deg, var(--primary) 0%, #ffc4da 45%, var(--primary) 90%);
  background-size: 220% 100%;
  animation: ar-shimmer 1.3s linear infinite;
}
@keyframes ar-shimmer {
  from {
    background-position: 120% 0;
  }
  to {
    background-position: -100% 0;
  }
}
.skel-card {
  background: var(--surface);
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 10px;
}
.skel {
  background: linear-gradient(90deg, var(--wash) 25%, var(--wash-2) 50%, var(--wash) 75%);
  background-size: 220% 100%;
  animation: ar-shimmer 1.4s linear infinite;
}
.skel.line {
  height: 12px;
  border-radius: 6px;
  margin: 10px 10px 0;
}
.skel.line.short {
  width: 55%;
}

@media (max-width: 720px) {
  .top {
    flex-wrap: wrap;
    height: auto;
    padding: 6px 10px;
    row-gap: 4px;
  }
  .brand > div {
    display: none;
  }
  .tabs {
    height: 36px;
  }
  .tabs button {
    white-space: nowrap;
    font-size: 14px;
  }
  .tabs button.on::after {
    bottom: 2px;
  }
  .top .combo {
    order: 6;
    flex: 1 1 100%;
    min-width: 0;
  }
  .feedbar {
    flex-direction: column;
    align-items: stretch;
  }
  .channels {
    width: 100%;
  }
  .tools {
    justify-content: flex-start;
  }
  .dcover .cv-t b {
    font-size: 26px;
  }
}

.drawer {
  overflow-x: hidden;
}
.dcover .cv-top {
  right: 52px;
  top: 12px;
  left: 14px;
}

.dock .holder {
  transition:
    opacity 0.6s,
    transform 0.6s;
}
.dock.sleeping .holder {
  opacity: 0.78;
  transform: translateY(3px) scale(0.97);
}

.ar .drawer .months {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.ar .drawer .month {
  min-width: 0;
  overflow: hidden;
  padding: 6px 6px 8px;
}
.ar .drawer .wk,
.ar .drawer .days {
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 2px;
}
.ar .drawer .wk span,
.ar .drawer .days > * {
  min-width: 0;
}
.ar .drawer .wk span {
  text-align: center;
  font-size: 10px;
  line-height: 16px;
}
.ar .drawer .day {
  width: 100%;
  aspect-ratio: 1;
  padding: 0;
  margin: 0;
  font-size: 11px;
  line-height: 1;
  font-weight: 400;
  overflow: hidden;
}
.ar .drawer .day.has {
  font-weight: 600;
}
@media (max-width: 720px) {
  .ar .drawer .day {
    font-size: 10.5px;
  }
}
@media (max-width: 340px) {
  .ar .drawer .months {
    grid-template-columns: minmax(0, 1fr);
  }
}

.dock .ring {
  position: absolute;
  top: 6px;
  left: -18px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--surface);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dock.side-l .ring {
  left: auto;
  right: -18px;
}
.dock .ring svg {
  position: absolute;
  inset: 3px;
  transform: rotate(-90deg);
}
.dock .ring circle {
  fill: none;
  stroke-width: 3.5;
}
.dock .ring .trk {
  stroke: var(--wash-2);
}
.dock .ring .val {
  stroke: var(--primary);
  stroke-linecap: round;
  transition: stroke-dasharray 0.4s;
}
.dock .ring b {
  position: relative;
  font-size: 11px;
  font-weight: 800;
  color: var(--primary-text);
  font-variant-numeric: tabular-nums;
}
.dock .badge-n {
  top: 4px;
  left: -6px;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  padding: 0 7px;
  font-size: 13px;
  font-weight: 800;
  text-align: center;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(233, 90, 140, 0.45);
}
.dock.side-l .badge-n {
  left: auto;
  right: -6px;
}
.dock .badge-n.zero {
  background: #8a909a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.dock .badge-n.alert {
  background: var(--bad);
}
.dock.glide {
  transition:
    left 0.55s cubic-bezier(0.2, 0.8, 0.3, 1),
    top 0.55s cubic-bezier(0.2, 0.8, 0.3, 1);
}

.scanstrip {
  background: var(--surface);
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 10px;
  box-shadow:
    inset 0 0 0 1.5px var(--primary-soft),
    var(--shadow);
}
.full .status-slot .scanstrip,
.full .status-slot .rcard {
  margin: 10px 16px 0;
}
.ss-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
  color: var(--ink);
}
.ss-row > b {
  font-size: 15px;
}
.ss-found {
  color: var(--ink-2);
  flex: 1;
}
.ss-found b {
  color: var(--primary-text);
  font-size: 15px;
}
.ss-found em {
  font-style: normal;
  background: var(--primary);
  color: #fff;
  border-radius: 6px;
  padding: 0 6px;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 700;
}
.ss-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  animation: ar-pulse 1.2s ease-in-out infinite;
}
@keyframes ar-pulse {
  50% {
    opacity: 0.35;
    transform: scale(0.75);
  }
}
.ss-bar {
  height: 8px;
  border-radius: 4px;
  background: var(--wash-2);
  overflow: hidden;
  margin: 8px 0 4px;
}
.ss-bar i {
  display: block;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--primary), #ffa3c4, var(--primary));
  background-size: 200% 100%;
  animation: ar-flow 1.6s linear infinite;
  transition: width 0.4s;
}
@keyframes ar-flow {
  to {
    background-position: -200% 0;
  }
}
.ss-sub {
  font-size: 12px;
  color: var(--muted);
}

.rcard {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  background: var(--surface);
  border-radius: 14px;
  padding: 12px 14px;
  margin-bottom: 10px;
  box-shadow:
    inset 0 0 0 2px var(--primary-soft),
    var(--shadow);
}
.rcard .rc-t {
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rcard .rc-t b {
  font-size: 16px;
  color: var(--ink);
}
.rcard.found .rc-t b {
  color: var(--primary-text);
}
.rc-note {
  font-weight: 700;
  color: var(--primary-text);
  font-size: 13px;
}
.rc-sum {
  font-size: 12.5px;
  color: var(--muted);
}
.rc-acts {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rcard.big {
  flex-direction: column;
  text-align: center;
  padding: 18px 16px;
}
.rcard.big .rc-t {
  min-width: 0;
  align-items: center;
}
.rcard.big .rc-t b {
  font-size: 18px;
}
.rcard.big .rc-acts {
  justify-content: center;
}
.rcard.blocked .rc-t b,
.rcard.failed .rc-t b {
  color: var(--bad);
}
.empty-result {
  max-width: 460px;
  margin: 24px auto;
  width: 100%;
}

.dlg-wrap {
  position: fixed;
  inset: 0;
  z-index: 2147483012;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.dlg-scrim {
  position: absolute;
  inset: 0;
  background: rgba(20, 16, 40, 0.45);
  animation: ar-fade 0.2s ease-out;
}
@keyframes ar-fade {
  from {
    opacity: 0;
  }
}
.dlg {
  position: relative;
  width: min(420px, 100%);
  background: var(--surface);
  color: var(--ink);
  border-radius: 20px;
  padding: 22px 22px 18px;
  text-align: center;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.3);
  animation: ar-pop 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.15);
}
.dlg-face .ar-av,
.dlg-face svg {
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--primary-soft);
}
.dlg h2 {
  font-size: 20px;
  line-height: 1.35;
  margin: 12px 0 4px;
}
.dlg.found h2 {
  color: var(--primary-text);
}
.dlg.blocked h2,
.dlg.failed h2 {
  color: var(--bad);
}
.dlg-note {
  margin: 0 0 4px;
  font-weight: 700;
  color: var(--primary-text);
}
.dlg-sum {
  margin: 4px 0 16px;
  font-size: 13px;
  color: var(--muted);
}
.dlg-btns {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}
.dlg-btns .btn {
  min-height: 44px;
  padding: 8px 18px;
  font-size: 15px;
}

.cover .scrim {
  height: 62%;
  background: linear-gradient(
    to top,
    rgba(20, 16, 40, 0.68),
    rgba(20, 16, 40, 0.3) 55%,
    rgba(20, 16, 40, 0)
  );
}
.cover .cv-t .cv-k {
  display: block;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.3;
  margin-top: 3px;
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.45),
    0 0 12px rgba(0, 0, 0, 0.3);
}
.cover .cv-t .cv-s {
  display: block;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.95;
}
.dcover .cv-t .cv-k {
  font-size: 20px;
}
.ribbon {
  position: absolute;
  top: 40px;
  left: -6px;
  z-index: 2;
  background: linear-gradient(90deg, #ff3f84, var(--primary));
  color: #fff;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.02em;
  padding: 4px 14px 4px 12px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 3px 10px rgba(233, 63, 132, 0.45);
  clip-path: polygon(0 0, 100% 0, calc(100% - 7px) 50%, 100% 100%, 0 100%);
  white-space: nowrap;
}
.ribbon::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  border-top: 6px solid #a8285a;
  border-left: 6px solid transparent;
}
.cover .ribbon {
  clip-path: none;
}
.ribbon.small {
  top: 6px;
  left: auto;
  right: -6px;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 4px 0 0 4px;
  clip-path: none;
}
.ribbon.small::after {
  left: auto;
  right: 0;
  border-left: 0;
  border-right: 6px solid transparent;
}
.mcard {
  position: relative;
}
.mcard.has-new .mt .r {
  padding-right: 112px;
}
.mcard .mt .k {
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-2);
}
.art .fx {
  animation: ar-fall 7s ease-in-out infinite alternate;
  animation-play-state: paused;
}
@keyframes ar-fall {
  from {
    transform: translate(-4px, -8px);
  }
  to {
    transform: translate(4px, 8px);
  }
}
.in-view .art .fx,
.dcover .art .fx,
.thumb .art .fx {
  animation-play-state: running;
}
.vbtn {
  border: 0;
  background: var(--primary-soft);
  color: var(--primary-text);
  font-size: 12px;
  font-weight: 700;
  border-radius: 999px;
  padding: 2px 10px;
  cursor: pointer;
}
.vbtn:hover {
  background: var(--primary);
  color: #fff;
}

.milesrow {
  display: flex;
  gap: 6px;
  align-items: center;
  overflow-x: auto;
  padding: 2px 0 10px;
  scrollbar-width: none;
}
.milesrow .ml {
  font-size: 12px;
  color: var(--muted);
  flex: none;
}
.mchip {
  flex: none;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink-2);
  border-radius: 999px;
  padding: 3px 11px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.mchip .n {
  font-weight: 400;
  color: var(--muted);
  margin-left: 4px;
  font-size: 11px;
}
.mchip.on {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}
.mchip.on .n {
  color: rgba(255, 255, 255, 0.85);
}
.empty.filtered b {
  font-weight: 700;
}

.compare {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
  margin-bottom: 14px;
}
.cmp {
  background: var(--surface);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow);
  outline: 2px solid transparent;
  transition: outline-color 0.2s;
}
.cmp.on {
  outline-color: var(--primary);
}
.cmp-head {
  position: relative;
  height: 124px;
  overflow: hidden;
}
.cmp-art svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.cmp-head::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 16, 40, 0.6), rgba(20, 16, 40, 0.05));
}
.cmp-head h3 {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 8px;
  z-index: 1;
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}
.cmp-dirs {
  display: flex;
}
.cmp-half {
  flex: 1;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 12.5px;
  color: var(--ink-2);
}
.cmp-half + .cmp-half {
  border-left: 1px dashed var(--line);
}
.cmp-half small {
  color: var(--muted);
  font-size: 12px;
}
.cmp-days {
  font-size: 22px;
  font-weight: 800;
  color: var(--ink);
}
.cmp-days.none {
  font-size: 15px;
  color: var(--muted);
}
.cmp-price {
  font-weight: 700;
  color: var(--primary-text);
}
.cmp-new {
  align-self: flex-start;
  margin-top: 3px;
  background: var(--primary);
  color: #fff;
  font-weight: 800;
  font-size: 11px;
  border-radius: 4px;
  padding: 0 6px;
}
.cmp-routes {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 0 14px 12px;
}
.rchip {
  border: 0;
  background: var(--wash);
  color: var(--ink-2);
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
}
.rchip:hover {
  background: var(--primary-soft);
  color: var(--primary-text);
}

.sug.country b {
  color: var(--primary-text);
}
.pchip.country {
  background: var(--primary);
  color: #fff;
}
.pchip.country small,
.pchip.country button {
  color: rgba(255, 255, 255, 0.9);
}
.pchip.country i {
  font-style: normal;
  margin-right: 3px;
}
.estimate {
  background: var(--wash);
  border-radius: 10px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.estimate .est-main {
  font-size: 14px;
  color: var(--ink);
}
.estimate .est-main b {
  font-size: 18px;
  color: var(--primary-text);
}
.estimate .est-sub {
  font-size: 12px;
  color: var(--muted);
}
.estimate .est-tip {
  font-size: 12.5px;
  color: var(--warn);
  font-weight: 600;
}
.estimate.many {
  box-shadow: inset 0 0 0 1.5px var(--warn);
}

.day.has.new {
  box-shadow:
    inset 0 0 0 2px var(--primary),
    inset 0 0 0 3.5px #fff;
}
.day.new::after {
  width: 8px;
  height: 8px;
  right: -2px;
  top: -2px;
  box-shadow: 0 0 0 1.5px var(--surface);
}
.newlegend {
  font-size: 12.5px;
  color: var(--primary-text);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}
.newlegend i {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  box-shadow:
    inset 0 0 0 2px var(--primary),
    inset 0 0 0 3.5px #fff;
  background: var(--d-lead);
}

.ar.panel-open .dock,
.ar.panel-open .bubble {
  z-index: 2147483004;
}
.ar.panel-open .full .main .view {
  padding-right: calc(var(--dock-w, 220px) + 28px);
}
@media (max-width: 720px) {
  .ar.panel-open .full .main .view {
    padding-right: 0;
    padding-bottom: calc(var(--dock-h, 200px) + 16px);
  }
    .ar.panel-open.setup-open .dock,
  .ar.panel-open.setup-open .bubble {
    opacity: 0;
    pointer-events: none;
  }
  .compare {
    grid-template-columns: 1fr;
  }
  .cover .cv-t .cv-k {
    font-size: 14.5px;
  }
  .ribbon {
    font-size: 11.5px;
    top: 36px;
  }
}

.safe-probe {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 0;
  height: env(safe-area-inset-bottom, 0px);
  visibility: hidden;
  pointer-events: none;
}
.view,
.setup-s,
.mini-b,
.drawer,
.suggest {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
.full .top {
  padding-top: env(safe-area-inset-top, 0px);
}
@media (max-width: 720px) {
  .mini,
  .setup {
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  .drawer .dbody {
    padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  }
}
@media (pointer: coarse) {
  .btn,
  .seg button,
  .channels button,
  .tierrow,
  .fav,
  .chip,
  .stepper button {
    min-height: 44px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
  }
  .stepper button {
    width: 44px;
  }
  .x,
  .pchip button {
    min-width: 44px;
    min-height: 44px;
  }
  select,
  .search input {
    min-height: 44px;
  }
  .tools label {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
  }
    .link,
  .tabs button,
  summary {
    position: relative;
  }
  .link::before,
  .tabs button::before,
  summary::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 44px;
    margin-top: -22px;
  }
  .link::before {
    left: -8px;
    right: -8px;
  }
}
@media (hover: none) {
  .in-view .art .pl {
    transform: translate(var(--dx), var(--dy));
  }
}

.mini-cab,
.cabrow {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  font-size: 12px;
  color: var(--muted);
  flex-wrap: wrap;
}
.cchip {
  border: 1.5px solid var(--line);
  background: var(--surface);
  color: var(--ink-2);
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.cchip.on {
  border-color: var(--primary);
  background: var(--primary-soft);
  color: var(--primary-text);
}
.cab {
  font-style: normal;
  font-weight: 800;
  font-size: 0.85em;
  margin-right: 4px;
  padding: 0 5px;
  border-radius: 4px;
  background: var(--primary-soft);
  color: var(--primary-text);
}
.cover .price .cab {
  background: var(--primary);
  color: #fff;
}
@media (pointer: coarse) {
  .cchip,
  .mchip,
  .rchip,
  .vbtn {
    min-height: 44px;
  }
}

@media (max-width: 720px) {
  .ar.panel-open .dock {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.3, 1);
  }
  .ar.panel-open.tucked .dock {
    transform: translateX(86%);
    pointer-events: none;
  }
  .ar.panel-open.tucked .bubble {
    opacity: 0;
    pointer-events: none;
  }
}

.cover .dyn {
  position: absolute;
  top: 34px;
  right: 8px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.94);
  color: var(--warn);
  border-radius: 999px;
  padding: 1px 8px;
  font-size: 11px;
  font-weight: 800;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.feedbar {
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}
.feedbar .channels {
  flex: none;
  width: 100%;
}
.feedbar .tools {
  justify-content: flex-end;
}
.cchip .n {
  font-weight: 400;
  font-size: 11px;
  margin-left: 4px;
  color: var(--muted);
}

.bubble {
  width: max-content;
  max-width: min(240px, calc(100vw - 12px));
}

.opts-list {
  margin: 8px 0;
  font-size: 13px;
}
.opts-list .opt-row {
  display: flex;
  gap: 6px;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 3px 0;
  border-top: 1px dashed var(--line);
}
.opts-list .opt-row .num {
  font-weight: 800;
  color: var(--primary-text);
}
.opts-list .sub {
  color: var(--muted);
  font-size: 12px;
}

.checkbar {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2147483011;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 24px);
  background: var(--surface);
  color: var(--ink);
  border-radius: 14px;
  padding: 8px 10px 8px 12px;
  box-shadow:
    0 6px 28px rgba(0, 0, 0, 0.22),
    inset 0 0 0 2px var(--warn);
  font-size: 14px;
  font-weight: 600;
  animation: ar-pop 0.25s ease-out;
}
.checkbar .btn {
  min-height: 36px;
}
.scanstrip.paused {
  box-shadow:
    inset 0 0 0 2px var(--warn),
    var(--shadow);
}
.scanstrip.paused .ss-dot {
  background: var(--warn);
}

.swaprow {
  display: flex;
  justify-content: center;
  margin: -6px 0 2px;
}
.swapbtn {
  border: 1.5px solid var(--line);
  background: var(--surface);
  color: var(--primary-text);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.swapbtn:hover {
  border-color: var(--primary);
}
.mini-route {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}
.mini-route .mr-a,
.mini-route .mr-b {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mini-route .mr-b {
  text-align: right;
}
.mini-route .swapbtn {
  flex: none;
  padding: 2px 10px;
}
.tradeoff {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.6;
  margin: 4px 0 8px;
}
@media (pointer: coarse) {
  .swapbtn {
    min-height: 44px;
    min-width: 44px;
  }
}

.badge-s {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 4px);
  transform: translateX(-50%);
  border: 0;
  background: none;
  padding: 4px 6px;
  cursor: pointer;
  line-height: 0;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
}
.badge-s svg {
  height: var(--badge-s, 36px);
  width: auto;
  display: block;
  overflow: visible;
}
.badge-s.read svg {
  height: calc(var(--badge-s, 36px) * 0.42);
  opacity: 0.85;
}
.badge-s.unread {
  animation: ar-badge-pop 1.9s ease-in-out infinite;
}

.badge-s.unread.still {
  animation: none;
}
@keyframes ar-badge-pop {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-5px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .badge-s.unread {
    animation: none;
  }
}
.ar.story-open::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 2147483005;
  background: rgba(0, 0, 0, 0.55);
  animation: ar-fade 0.25s ease-out;
}
.story {
  position: fixed;
  inset: 0;
  z-index: 2147483007;
}
.st-scrim {
  display: none;
}
.ar.story-open .dock {
  z-index: 2147483006;
  pointer-events: none;
}
.ar.story-open .dock .shadow {
  display: none;
}
.ar.story-open .dock .badge-n,
.ar.story-open .dock .badge-s,
.ar.story-open .bubble {
  display: none;
}
.st-box {
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 88vw;
  max-width: 1280px;
  max-height: 45vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: rgba(20, 18, 30, 0.985);
  backdrop-filter: blur(10px) saturate(0.7);
  -webkit-backdrop-filter: blur(10px) saturate(0.7);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 20px;
  box-shadow: 0 10px 44px rgba(0, 0, 0, 0.45);
  padding: 50px 40px 30px;
  color: #f4f2f8;
    min-height: 9.6em;
  justify-content: flex-start;
  transition:
    height 0.22s ease-out,
    min-height 0.22s ease-out,
    top 0.22s ease-out;
}
@media (prefers-reduced-motion: reduce) {
  .st-box {
    transition: none;
  }
}
.st-title {
  position: absolute;
  top: 12px;
  left: 30px;
  font-size: 12.5px;
  color: #ffa9c8;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.st-close {
  position: absolute;
  top: 10px;
  right: 12px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}
.st-close:hover {
  background: rgba(255, 255, 255, 0.28);
}
.st-text {
  margin: 0;
  font-size: 20px;
  line-height: 1.9;
  color: #f4f2f8;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  min-height: 0;
  white-space: pre-wrap;
}
.st-text span {
  animation: ar-type 0.12s ease-out backwards;
}
@keyframes ar-type {
  from {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .st-text span {
    animation: none;
  }
}
.st-next[hidden] {
  display: block;
  visibility: hidden;
  animation: none;
}
.st-next {
  align-self: flex-end;
  margin-top: 6px;
  color: #ffa9c8;
  font-style: normal;
  font-size: 15px;
  animation: ar-blink 1s steps(2, start) infinite;
}
@keyframes ar-blink {
  50% {
    opacity: 0;
  }
}
.st-end {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.st-end b {
  font-size: 16px;
  color: #ffa9c8;
  margin-right: 4px;
}
.st-list {
  text-align: left;
  margin: 6px 0 14px;
  max-height: 46vh;
  overflow: auto;
}
.st-list h3 {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 6px;
  font-weight: 600;
}
.st-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 0;
  background: var(--wash);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--ink);
  text-align: left;
}
.st-item:hover {
  background: var(--primary-soft);
  color: var(--primary-text);
}
.st-item b {
  flex: none;
  width: 22px;
  color: var(--primary-text);
  font-size: 15px;
}
.st-item i {
  margin-left: auto;
  font-style: normal;
  color: #f0a23b;
  font-weight: 800;
}
.st-entry {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border: 0;
  background: var(--surface);
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}
.st-entry i {
  margin-left: auto;
  font-style: normal;
  color: #f0a23b;
  font-weight: 800;
}
.st-entry em {
  margin-left: auto;
  font-style: normal;
  color: var(--muted);
  font-weight: 400;
  font-size: 12px;
}
.st-entry.unread {
  box-shadow: inset 0 0 0 1.5px #f0a23b;
}
@media (max-width: 720px) {
  .st-box {
    width: 94vw;
    max-width: none;
    padding: 39px 16px 25px;
    min-height: 9.2em;
  }
  .st-title {
    font-size: 11px;
    left: 16px;
    top: 7px;
  }
  .st-close {
    width: 28px;
    height: 28px;
    font-size: 14px;
    top: 5px;
    right: 6px;
  }
  .st-text {
    font-size: 17px;
    min-height: 0;
  }
}
@media (pointer: coarse) {
  .badge-s,
  .st-item,
  .st-entry {
    min-height: 44px;
  }
}

.st-box .btn:not(.primary) {
  background: rgba(255, 255, 255, 0.16);
  color: #f4f2f8;
}
.st-box .btn:not(.primary):hover {
  background: rgba(255, 255, 255, 0.28);
  color: #fff;
}

.tabs .story-n.unread {
  color: #f0a23b;
  font-weight: 800;
}
.st-page {
  max-width: 560px;
  margin: 0 auto;
  padding: 6px 0 20px;
}
.st-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.st-head b {
  display: block;
  font-size: 17px;
}
.st-head span {
  font-size: 12.5px;
  color: var(--muted);
}
.mini-story {
  margin: 10px 0 2px;
  padding-top: 10px;
  border-top: 1px dashed var(--line);
}
.mini-story .st-entry {
  margin-bottom: 0;
}

.kinput {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.kinput input {
  width: 86px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  padding: 5px 20px 5px 9px;
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
}
.kinput i {
  position: absolute;
  right: 8px;
  font-style: normal;
  font-size: 12px;
  color: var(--muted);
  pointer-events: none;
}
.kpreset {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink-2);
  border-radius: 999px;
  padding: 4px 11px;
  font-size: 13px;
  cursor: pointer;
}
.kpreset.on {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  font-weight: 700;
}
.mini-cap {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  font-size: 12px;
  color: var(--muted);
}
.mini-cap .kinput input {
  width: 68px;
}
.mini-cap .kpreset {
  padding-left: 8px;
  padding-right: 8px;
}
@media (pointer: coarse) {
  .kpreset,
  .kinput input {
    min-height: 44px;
  }
}

.mini {
  background: none;
  box-shadow: none;
  overflow: visible;
  flex-direction: row;
  gap: 10px;
}
.mini-main,
.mini-side {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--page);
  border-radius: 14px;
  box-shadow: var(--shadow-lg);
}
.mini.stacked {
  flex-direction: column;
}
.mini-side .mini-b {
  padding-top: 12px;
}
.mini-side .st-item {
  background: var(--surface);
}
.mini-side .mini-f {
  line-height: 1.5;
}
@media (max-width: 720px) {
  .mini {
    flex-direction: column;
    gap: 10px;
    background: none;
    border-radius: 0;
    overflow: auto;
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  .mini-main {
    flex: 1 1 auto;
    min-height: 0;
  }
  .mini-side {
    flex: 0 0 auto;
    max-height: 40vh;
  }
  .mini-main,
  .mini-side {
    border-radius: 16px;
  }
}
`;

function cubism4Plugin(module, exports, require) {
var __pow=Math.pow,__async=(t,e,i)=>new Promise(((s,r)=>{var a=t=>{try{n(i.next(t))}catch(e){r(e)}},o=t=>{try{n(i.throw(t))}catch(e){r(e)}},n=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,o);n((i=i.apply(t,e)).next())}));!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@pixi/utils"),require("@pixi/math"),require("@pixi/core"),require("@pixi/display")):"function"==typeof define&&define.amd?define(["exports","@pixi/utils","@pixi/math","@pixi/core","@pixi/display"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).PIXI=t.PIXI||{},t.PIXI.live2d=t.PIXI.live2d||{}),t.PIXI.utils,t.PIXI,t.PIXI,t.PIXI)}(this,(function(t,e,i,s,r){"use strict";class a{constructor(){this._breathParameters=[],this._currentTime=0}static create(){return new a}setParameters(t){this._breathParameters=t}getParameters(){return this._breathParameters}updateParameters(t,e){this._currentTime+=e;const i=2*this._currentTime*3.14159;for(let s=0;s<this._breathParameters.length;++s){const e=this._breathParameters[s];t.addParameterValueById(e.parameterId,e.offset+e.peak*Math.sin(i/e.cycle),e.weight)}}}class o{constructor(t,e,i,s,r){this.parameterId=null==t?void 0:t,this.offset=null==e?0:e,this.peak=null==i?0:i,this.cycle=null==s?0:s,this.weight=null==r?0:r}}const n=class{static create(t){return new n(t)}setBlinkingInterval(t){this._blinkingIntervalSeconds=t}setBlinkingSetting(t,e,i){this._closingSeconds=t,this._closedSeconds=e,this._openingSeconds=i}setParameterIds(t){this._parameterIds=t}getParameterIds(){return this._parameterIds}updateParameters(t,e){let i;this._userTimeSeconds+=e;let s=0;switch(this._blinkingState){case h.EyeState_Closing:s=(this._userTimeSeconds-this._stateStartTimeSeconds)/this._closingSeconds,s>=1&&(s=1,this._blinkingState=h.EyeState_Closed,this._stateStartTimeSeconds=this._userTimeSeconds),i=1-s;break;case h.EyeState_Closed:s=(this._userTimeSeconds-this._stateStartTimeSeconds)/this._closedSeconds,s>=1&&(this._blinkingState=h.EyeState_Opening,this._stateStartTimeSeconds=this._userTimeSeconds),i=0;break;case h.EyeState_Opening:s=(this._userTimeSeconds-this._stateStartTimeSeconds)/this._openingSeconds,s>=1&&(s=1,this._blinkingState=h.EyeState_Interval,this._nextBlinkingTime=this.determinNextBlinkingTiming()),i=s;break;case h.EyeState_Interval:this._nextBlinkingTime<this._userTimeSeconds&&(this._blinkingState=h.EyeState_Closing,this._stateStartTimeSeconds=this._userTimeSeconds),i=1;break;case h.EyeState_First:default:this._blinkingState=h.EyeState_Interval,this._nextBlinkingTime=this.determinNextBlinkingTiming(),i=1}n.CloseIfZero||(i=-i);for(let r=0;r<this._parameterIds.length;++r)t.setParameterValueById(this._parameterIds[r],i)}constructor(t){var e,i;this._blinkingState=h.EyeState_First,this._nextBlinkingTime=0,this._stateStartTimeSeconds=0,this._blinkingIntervalSeconds=4,this._closingSeconds=.1,this._closedSeconds=.05,this._openingSeconds=.15,this._userTimeSeconds=0,this._parameterIds=[],null!=t&&(this._parameterIds=null!=(i=null==(e=t.getEyeBlinkParameters())?void 0:e.slice())?i:this._parameterIds)}determinNextBlinkingTiming(){const t=Math.random();return this._userTimeSeconds+t*(2*this._blinkingIntervalSeconds-1)}};let l=n;l.CloseIfZero=!0;var h=(t=>(t[t.EyeState_First=0]="EyeState_First",t[t.EyeState_Interval=1]="EyeState_Interval",t[t.EyeState_Closing=2]="EyeState_Closing",t[t.EyeState_Closed=3]="EyeState_Closed",t[t.EyeState_Opening=4]="EyeState_Opening",t))(h||{});class u{static create(t){const e=new u;"number"==typeof t.FadeInTime&&(e._fadeTimeSeconds=t.FadeInTime,e._fadeTimeSeconds<=0&&(e._fadeTimeSeconds=.5));const i=t.Groups,s=i.length;for(let r=0;r<s;++r){const t=i[r],s=t.length;let a=0;for(let i=0;i<s;++i){const s=t[i],r=new d;r.partId=s.Id;const o=s.Link;if(o){const t=o.length;for(let e=0;e<t;++e){const t=new d;t.partId=o[e],r.link.push(t)}}e._partGroups.push(r),++a}e._partGroupCounts.push(a)}return e}updateParameters(t,e){t!=this._lastModel&&this.reset(t),this._lastModel=t,e<0&&(e=0);let i=0;for(let s=0;s<this._partGroupCounts.length;s++){const r=this._partGroupCounts[s];this.doFade(t,e,i,r),i+=r}this.copyPartOpacities(t)}reset(t){let e=0;for(let i=0;i<this._partGroupCounts.length;++i){const s=this._partGroupCounts[i];for(let i=e;i<e+s;++i){this._partGroups[i].initialize(t);const s=this._partGroups[i].partIndex,r=this._partGroups[i].parameterIndex;if(!(s<0)){t.setPartOpacityByIndex(s,i==e?1:0),t.setParameterValueByIndex(r,i==e?1:0);for(let e=0;e<this._partGroups[i].link.length;++e)this._partGroups[i].link[e].initialize(t)}}e+=s}}copyPartOpacities(t){for(let e=0;e<this._partGroups.length;++e){const i=this._partGroups[e];if(0==i.link.length)continue;const s=this._partGroups[e].partIndex,r=t.getPartOpacityByIndex(s);for(let e=0;e<i.link.length;++e){const s=i.link[e].partIndex;s<0||t.setPartOpacityByIndex(s,r)}}}doFade(t,e,i,s){let r=-1,a=1;const o=.5;for(let n=i;n<i+s;++n){const i=this._partGroups[n].partIndex,s=this._partGroups[n].parameterIndex;if(t.getParameterValueByIndex(s)>.001){if(r>=0)break;r=n,a=t.getPartOpacityByIndex(i),a+=e/this._fadeTimeSeconds,a>1&&(a=1)}}r<0&&(r=0,a=1);for(let n=i;n<i+s;++n){const e=this._partGroups[n].partIndex;if(r==n)t.setPartOpacityByIndex(e,a);else{let i,s=t.getPartOpacityByIndex(e);i=a<o?-.5*a/o+1:(1-a)*o/.5;(1-i)*(1-a)>.15&&(i=1-.15/(1-a)),s>i&&(s=i),t.setPartOpacityByIndex(e,s)}}}constructor(){this._fadeTimeSeconds=.5,this._lastModel=void 0,this._partGroups=[],this._partGroupCounts=[]}}class d{constructor(t){this.parameterIndex=0,this.partIndex=0,this.partId="",this.link=[],null!=t&&this.assignment(t)}assignment(t){return this.partId=t.partId,this.link=t.link.map((t=>t.clone())),this}initialize(t){this.parameterIndex=t.getParameterIndex(this.partId),this.partIndex=t.getPartIndex(this.partId),t.setParameterValueByIndex(this.parameterIndex,1)}clone(){const t=new d;return t.partId=this.partId,t.parameterIndex=this.parameterIndex,t.partIndex=this.partIndex,t.link=this.link.map((t=>t.clone())),t}}class c{constructor(t,e){this.x=t||0,this.y=e||0}add(t){const e=new c(0,0);return e.x=this.x+t.x,e.y=this.y+t.y,e}substract(t){const e=new c(0,0);return e.x=this.x-t.x,e.y=this.y-t.y,e}multiply(t){const e=new c(0,0);return e.x=this.x*t.x,e.y=this.y*t.y,e}multiplyByScaler(t){return this.multiply(new c(t,t))}division(t){const e=new c(0,0);return e.x=this.x/t.x,e.y=this.y/t.y,e}divisionByScalar(t){return this.division(new c(t,t))}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}getDistanceWith(t){return Math.sqrt((this.x-t.x)*(this.x-t.x)+(this.y-t.y)*(this.y-t.y))}dot(t){return this.x*t.x+this.y*t.y}normalize(){const t=Math.pow(this.x*this.x+this.y*this.y,.5);this.x=this.x/t,this.y=this.y/t}isEqual(t){return this.x==t.x&&this.y==t.y}isNotEqual(t){return!this.isEqual(t)}}const m=class{static range(t,e,i){return t<e?t=e:t>i&&(t=i),t}static sin(t){return Math.sin(t)}static cos(t){return Math.cos(t)}static abs(t){return Math.abs(t)}static sqrt(t){return Math.sqrt(t)}static cbrt(t){if(0===t)return t;let e=t;const i=e<0;let s;return i&&(e=-e),e===1/0?s=1/0:(s=Math.exp(Math.log(e)/3),s=(e/(s*s)+2*s)/3),i?-s:s}static getEasingSine(t){return t<0?0:t>1?1:.5-.5*this.cos(t*Math.PI)}static max(t,e){return t>e?t:e}static min(t,e){return t>e?e:t}static degreesToRadian(t){return t/180*Math.PI}static radianToDegrees(t){return 180*t/Math.PI}static directionToRadian(t,e){let i=Math.atan2(e.y,e.x)-Math.atan2(t.y,t.x);for(;i<-Math.PI;)i+=2*Math.PI;for(;i>Math.PI;)i-=2*Math.PI;return i}static directionToDegrees(t,e){const i=this.directionToRadian(t,e);let s=this.radianToDegrees(i);return e.x-t.x>0&&(s=-s),s}static radianToDirection(t){const e=new c;return e.x=this.sin(t),e.y=this.cos(t),e}static quadraticEquation(t,e,i){return this.abs(t)<m.Epsilon?this.abs(e)<m.Epsilon?-i:-i/e:-(e+this.sqrt(e*e-4*t*i))/(2*t)}static cardanoAlgorithmForBezier(t,e,i,s){if(this.sqrt(t)<m.Epsilon)return this.range(this.quadraticEquation(e,i,s),0,1);const r=e/t,a=i/t,o=(3*a-r*r)/3,n=o/3,l=(2*r*r*r-9*r*a+27*(s/t))/27,h=l/2,u=h*h+n*n*n,d=.5,c=.51;if(u<0){const t=-o/3,e=t*t*t,i=this.sqrt(e),s=-l/(2*i),a=this.range(s,-1,1),n=Math.acos(a),h=2*this.cbrt(i),u=h*this.cos(n/3)-r/3;if(this.abs(u-d)<c)return this.range(u,0,1);const m=h*this.cos((n+2*Math.PI)/3)-r/3;if(this.abs(m-d)<c)return this.range(m,0,1);const g=h*this.cos((n+4*Math.PI)/3)-r/3;return this.range(g,0,1)}if(0==u){let t;t=h<0?this.cbrt(-h):-this.cbrt(h);const e=2*t-r/3;if(this.abs(e-d)<c)return this.range(e,0,1);const i=-t-r/3;return this.range(i,0,1)}const g=this.sqrt(u),p=this.cbrt(g-h)-this.cbrt(g+h)-r/3;return this.range(p,0,1)}constructor(){}};let g=m;g.Epsilon=1e-5;class p{constructor(){this._tr=new Float32Array(16),this.loadIdentity()}static multiply(t,e,i){const s=new Float32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);for(let r=0;r<4;++r)for(let i=0;i<4;++i)for(let a=0;a<4;++a)s[i+4*r]+=t[a+4*r]*e[i+4*a];for(let r=0;r<16;++r)i[r]=s[r]}loadIdentity(){const t=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);this.setMatrix(t)}setMatrix(t){for(let e=0;e<16;++e)this._tr[e]=t[e]}getArray(){return this._tr}getScaleX(){return this._tr[0]}getScaleY(){return this._tr[5]}getTranslateX(){return this._tr[12]}getTranslateY(){return this._tr[13]}transformX(t){return this._tr[0]*t+this._tr[12]}transformY(t){return this._tr[5]*t+this._tr[13]}invertTransformX(t){return(t-this._tr[12])/this._tr[0]}invertTransformY(t){return(t-this._tr[13])/this._tr[5]}translateRelative(t,e){const i=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t,e,0,1]);p.multiply(i,this._tr,this._tr)}translate(t,e){this._tr[12]=t,this._tr[13]=e}translateX(t){this._tr[12]=t}translateY(t){this._tr[13]=t}scaleRelative(t,e){const i=new Float32Array([t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1]);p.multiply(i,this._tr,this._tr)}scale(t,e){this._tr[0]=t,this._tr[5]=e}multiplyByMatrix(t){p.multiply(t.getArray(),this._tr,this._tr)}clone(){const t=new p;for(let e=0;e<this._tr.length;e++)t._tr[e]=this._tr[e];return t}}class _{initialize(t){this._model=t}drawModel(){null!=this.getModel()&&this.doDrawModel()}setMvpMatrix(t){this._mvpMatrix4x4.setMatrix(t.getArray())}getMvpMatrix(){return this._mvpMatrix4x4}setModelColor(t,e,i,s){t<0?t=0:t>1&&(t=1),e<0?e=0:e>1&&(e=1),i<0?i=0:i>1&&(i=1),s<0?s=0:s>1&&(s=1),this._modelColor.R=t,this._modelColor.G=e,this._modelColor.B=i,this._modelColor.A=s}getModelColor(){return Object.assign({},this._modelColor)}setIsPremultipliedAlpha(t){this._isPremultipliedAlpha=t}isPremultipliedAlpha(){return this._isPremultipliedAlpha}setIsCulling(t){this._isCulling=t}isCulling(){return this._isCulling}setAnisotropy(t){this._anisortopy=t}getAnisotropy(){return this._anisortopy}getModel(){return this._model}constructor(){this._isCulling=!1,this._isPremultipliedAlpha=!1,this._anisortopy=0,this._modelColor=new y,this._mvpMatrix4x4=new p,this._mvpMatrix4x4.loadIdentity()}}var f=(t=>(t[t.CubismBlendMode_Normal=0]="CubismBlendMode_Normal",t[t.CubismBlendMode_Additive=1]="CubismBlendMode_Additive",t[t.CubismBlendMode_Multiplicative=2]="CubismBlendMode_Multiplicative",t))(f||{});class y{constructor(){this.R=1,this.G=1,this.B=1,this.A=1}}let x,v=!1,M=!1;const P={vertexOffset:0,vertexStep:2};class C{static startUp(t){if(v)return I("CubismFramework.startUp() is already done."),v;if(Live2DCubismCore._isStarted)return v=!0,!0;if(Live2DCubismCore._isStarted=!0,x=t,x&&Live2DCubismCore.Logging.csmSetLogFunction(x.logFunction),v=!0,v){const t=Live2DCubismCore.Version.csmGetVersion(),e=(16711680&t)>>16,i=65535&t,s=t;I("Live2D Cubism Core version: {0}.{1}.{2} ({3})",("00"+((4278190080&t)>>24)).slice(-2),("00"+e).slice(-2),("0000"+i).slice(-4),s)}return I("CubismFramework.startUp() is complete."),v}static cleanUp(){v=!1,M=!1,x=void 0}static initialize(){v?M?L("CubismFramework.initialize() skipped, already initialized."):(M=!0,I("CubismFramework.initialize() is complete.")):L("CubismFramework is not started.")}static dispose(){v?M?(_.staticRelease(),M=!1,I("CubismFramework.dispose() is complete.")):L("CubismFramework.dispose() skipped, not initialized."):L("CubismFramework is not started.")}static isStarted(){return v}static isInitialized(){return M}static coreLogFunction(t){Live2DCubismCore.Logging.csmGetLogFunction()&&Live2DCubismCore.Logging.csmGetLogFunction()(t)}static getLoggingLevel(){return null!=x?x.loggingLevel:S.LogLevel_Off}constructor(){}}var S=(t=>(t[t.LogLevel_Verbose=0]="LogLevel_Verbose",t[t.LogLevel_Debug=1]="LogLevel_Debug",t[t.LogLevel_Info=2]="LogLevel_Info",t[t.LogLevel_Warning=3]="LogLevel_Warning",t[t.LogLevel_Error=4]="LogLevel_Error",t[t.LogLevel_Off=5]="LogLevel_Off",t))(S||{});const b=()=>{};function w(t,...e){E.print(S.LogLevel_Debug,"[CSM][D]"+t+"\n",e)}function I(t,...e){E.print(S.LogLevel_Info,"[CSM][I]"+t+"\n",e)}function L(t,...e){E.print(S.LogLevel_Warning,"[CSM][W]"+t+"\n",e)}function T(t,...e){E.print(S.LogLevel_Error,"[CSM][E]"+t+"\n",e)}class E{static print(t,e,i){if(t<C.getLoggingLevel())return;const s=C.coreLogFunction;if(!s)return;s(e.replace(/{(\d+)}/g,((t,e)=>i[e])))}static dumpBytes(t,e,i){for(let s=0;s<i;s++)s%16==0&&s>0?this.print(t,"\n"):s%8==0&&s>0&&this.print(t,"  "),this.print(t,"{0} ",[255&e[s]]);this.print(t,"\n")}constructor(){}}class D{update(){this._model.update(),this._model.drawables.resetDynamicFlags()}getCanvasWidth(){return null==this._model?0:this._model.canvasinfo.CanvasWidth/this._model.canvasinfo.PixelsPerUnit}getCanvasHeight(){return null==this._model?0:this._model.canvasinfo.CanvasHeight/this._model.canvasinfo.PixelsPerUnit}saveParameters(){const t=this._model.parameters.count,e=this._savedParameters.length;for(let i=0;i<t;++i)i<e?this._savedParameters[i]=this._parameterValues[i]:this._savedParameters.push(this._parameterValues[i])}getModel(){return this._model}getPartIndex(t){let e;const i=this._model.parts.count;for(e=0;e<i;++e)if(t==this._partIds[e])return e;return t in this._notExistPartId?this._notExistPartId[t]:(e=i+this._notExistPartId.length,this._notExistPartId[t]=e,this._notExistPartOpacities[e]=0,e)}getPartCount(){return this._model.parts.count}setPartOpacityByIndex(t,e){t in this._notExistPartOpacities?this._notExistPartOpacities[t]=e:(0<=t&&this.getPartCount(),this._partOpacities[t]=e)}setPartOpacityById(t,e){const i=this.getPartIndex(t);i<0||this.setPartOpacityByIndex(i,e)}getPartOpacityByIndex(t){return t in this._notExistPartOpacities?this._notExistPartOpacities[t]:(0<=t&&this.getPartCount(),this._partOpacities[t])}getPartOpacityById(t){const e=this.getPartIndex(t);return e<0?0:this.getPartOpacityByIndex(e)}getParameterIndex(t){let e;const i=this._model.parameters.count;for(e=0;e<i;++e)if(t==this._parameterIds[e])return e;return t in this._notExistParameterId?this._notExistParameterId[t]:(e=this._model.parameters.count+Object.keys(this._notExistParameterId).length,this._notExistParameterId[t]=e,this._notExistParameterValues[e]=0,e)}getParameterCount(){return this._model.parameters.count}getParameterMaximumValue(t){return this._model.parameters.maximumValues[t]}getParameterMinimumValue(t){return this._model.parameters.minimumValues[t]}getParameterDefaultValue(t){return this._model.parameters.defaultValues[t]}getParameterValueByIndex(t){return t in this._notExistParameterValues?this._notExistParameterValues[t]:(0<=t&&this.getParameterCount(),this._parameterValues[t])}getParameterValueById(t){const e=this.getParameterIndex(t);return this.getParameterValueByIndex(e)}setParameterValueByIndex(t,e,i=1){t in this._notExistParameterValues?this._notExistParameterValues[t]=1==i?e:this._notExistParameterValues[t]*(1-i)+e*i:(0<=t&&this.getParameterCount(),this._model.parameters.maximumValues[t]<e&&(e=this._model.parameters.maximumValues[t]),this._model.parameters.minimumValues[t]>e&&(e=this._model.parameters.minimumValues[t]),this._parameterValues[t]=1==i?e:this._parameterValues[t]=this._parameterValues[t]*(1-i)+e*i)}setParameterValueById(t,e,i=1){const s=this.getParameterIndex(t);this.setParameterValueByIndex(s,e,i)}addParameterValueByIndex(t,e,i=1){this.setParameterValueByIndex(t,this.getParameterValueByIndex(t)+e*i)}addParameterValueById(t,e,i=1){const s=this.getParameterIndex(t);this.addParameterValueByIndex(s,e,i)}multiplyParameterValueById(t,e,i=1){const s=this.getParameterIndex(t);this.multiplyParameterValueByIndex(s,e,i)}multiplyParameterValueByIndex(t,e,i=1){this.setParameterValueByIndex(t,this.getParameterValueByIndex(t)*(1+(e-1)*i))}getDrawableIds(){return this._drawableIds.slice()}getDrawableIndex(t){const e=this._model.drawables.count;for(let i=0;i<e;++i)if(this._drawableIds[i]==t)return i;return-1}getDrawableCount(){return this._model.drawables.count}getDrawableId(t){return this._model.drawables.ids[t]}getDrawableRenderOrders(){return this._model.drawables.renderOrders}getDrawableTextureIndices(t){return this._model.drawables.textureIndices[t]}getDrawableDynamicFlagVertexPositionsDidChange(t){const e=this._model.drawables.dynamicFlags;return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t])}getDrawableVertexIndexCount(t){return this._model.drawables.indexCounts[t]}getDrawableVertexCount(t){return this._model.drawables.vertexCounts[t]}getDrawableVertices(t){return this.getDrawableVertexPositions(t)}getDrawableVertexIndices(t){return this._model.drawables.indices[t]}getDrawableVertexPositions(t){return this._model.drawables.vertexPositions[t]}getDrawableVertexUvs(t){return this._model.drawables.vertexUvs[t]}getDrawableOpacity(t){return this._model.drawables.opacities[t]}getDrawableCulling(t){const e=this._model.drawables.constantFlags;return!Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t])}getDrawableBlendMode(t){const e=this._model.drawables.constantFlags;return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t])?f.CubismBlendMode_Additive:Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t])?f.CubismBlendMode_Multiplicative:f.CubismBlendMode_Normal}getDrawableInvertedMaskBit(t){const e=this._model.drawables.constantFlags;return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t])}getDrawableMasks(){return this._model.drawables.masks}getDrawableMaskCounts(){return this._model.drawables.maskCounts}isUsingMasking(){for(let t=0;t<this._model.drawables.count;++t)if(!(this._model.drawables.maskCounts[t]<=0))return!0;return!1}getDrawableDynamicFlagIsVisible(t){const e=this._model.drawables.dynamicFlags;return Live2DCubismCore.Utils.hasIsVisibleBit(e[t])}getDrawableDynamicFlagVisibilityDidChange(t){const e=this._model.drawables.dynamicFlags;return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t])}getDrawableDynamicFlagOpacityDidChange(t){const e=this._model.drawables.dynamicFlags;return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t])}getDrawableDynamicFlagRenderOrderDidChange(t){const e=this._model.drawables.dynamicFlags;return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t])}loadParameters(){let t=this._model.parameters.count;const e=this._savedParameters.length;t>e&&(t=e);for(let i=0;i<t;++i)this._parameterValues[i]=this._savedParameters[i]}initialize(){this._parameterValues=this._model.parameters.values,this._partOpacities=this._model.parts.opacities,this._parameterMaximumValues=this._model.parameters.maximumValues,this._parameterMinimumValues=this._model.parameters.minimumValues;{const t=this._model.parameters.ids,e=this._model.parameters.count;for(let i=0;i<e;++i)this._parameterIds.push(t[i])}{const t=this._model.parts.ids,e=this._model.parts.count;for(let i=0;i<e;++i)this._partIds.push(t[i])}{const t=this._model.drawables.ids,e=this._model.drawables.count;for(let i=0;i<e;++i)this._drawableIds.push(t[i])}}constructor(t){this._model=t,this._savedParameters=[],this._parameterIds=[],this._drawableIds=[],this._partIds=[],this._notExistPartId={},this._notExistParameterId={},this._notExistParameterValues={},this._notExistPartOpacities={},this.initialize()}release(){this._model.release(),this._model=void 0}}class F{static create(t){const e=Live2DCubismCore.Moc.fromArrayBuffer(t);if(e)return new F(e);throw new Error("Unknown error")}createModel(){let t;const e=Live2DCubismCore.Model.fromMoc(this._moc);if(e)return t=new D(e),++this._modelCount,t;throw new Error("Unknown error")}deleteModel(t){null!=t&&--this._modelCount}constructor(t){this._moc=t,this._modelCount=0}release(){this._moc._release(),this._moc=void 0}}class A{constructor(t,e){this._json=t}release(){this._json=void 0}getUserDataCount(){return this._json.Meta.UserDataCount}getTotalUserDataSize(){return this._json.Meta.TotalUserDataSize}getUserDataTargetType(t){return this._json.UserData[t].Target}getUserDataId(t){return this._json.UserData[t].Id}getUserDataValue(t){return this._json.UserData[t].Value}}class B{static create(t,e){const i=new B;return i.parseUserData(t,e),i}getArtMeshUserDatas(){return this._artMeshUserDataNode}parseUserData(t,e){let i=new A(t,e);const s=i.getUserDataCount();for(let r=0;r<s;r++){const t={targetId:i.getUserDataId(r),targetType:i.getUserDataTargetType(r),value:i.getUserDataValue(r)};this._userDataNodes.push(t),"ArtMesh"==t.targetType&&this._artMeshUserDataNode.push(t)}i.release()}constructor(){this._userDataNodes=[],this._artMeshUserDataNode=[]}release(){this._userDataNodes=null}}class R{constructor(){this._fadeInSeconds=-1,this._fadeOutSeconds=-1,this._weight=1,this._offsetSeconds=0,this._firedEventValues=[]}release(){this._weight=0}updateParameters(t,e,i){if(!e.isAvailable()||e.isFinished())return;if(!e.isStarted()){e.setIsStarted(!0),e.setStartTime(i-this._offsetSeconds),e.setFadeInStartTime(i);const t=this.getDuration();e.getEndTime()<0&&e.setEndTime(t<=0?-1:e.getStartTime()+t)}let s=this._weight;s=s*(0==this._fadeInSeconds?1:g.getEasingSine((i-e.getFadeInStartTime())/this._fadeInSeconds))*(0==this._fadeOutSeconds||e.getEndTime()<0?1:g.getEasingSine((e.getEndTime()-i)/this._fadeOutSeconds)),e.setState(i,s),this.doUpdateParameters(t,i,s,e),e.getEndTime()>0&&e.getEndTime()<i&&e.setIsFinished(!0)}setFadeInTime(t){this._fadeInSeconds=t}setFadeOutTime(t){this._fadeOutSeconds=t}getFadeOutTime(){return this._fadeOutSeconds}getFadeInTime(){return this._fadeInSeconds}setWeight(t){this._weight=t}getWeight(){return this._weight}getDuration(){return-1}getLoopDuration(){return-1}setOffsetTime(t){this._offsetSeconds=t}getFiredEvent(t,e){return this._firedEventValues}setFinishedMotionHandler(t){this._onFinishedMotion=t}getFinishedMotionHandler(){return this._onFinishedMotion}}class O extends R{constructor(){super(),this._parameters=[]}static create(t){const e=new O,i=t.FadeInTime,s=t.FadeOutTime;e.setFadeInTime(void 0!==i?i:1),e.setFadeOutTime(void 0!==s?s:1);const r=t.Parameters||[];for(let a=0;a<r.length;++a){const t=r[a],i=t.Id,s=t.Value;let o;switch(t.Blend){case"Multiply":o=U.ExpressionBlendType_Multiply;break;case"Overwrite":o=U.ExpressionBlendType_Overwrite;break;default:o=U.ExpressionBlendType_Add}const n={parameterId:i,blendType:o,value:s};e._parameters.push(n)}return e}doUpdateParameters(t,e,i,s){for(let r=0;r<this._parameters.length;++r){const e=this._parameters[r];switch(e.blendType){case U.ExpressionBlendType_Add:t.addParameterValueById(e.parameterId,e.value,i);break;case U.ExpressionBlendType_Multiply:t.multiplyParameterValueById(e.parameterId,e.value,i);break;case U.ExpressionBlendType_Overwrite:t.setParameterValueById(e.parameterId,e.value,i)}}}}var k,U=(t=>(t[t.ExpressionBlendType_Add=0]="ExpressionBlendType_Add",t[t.ExpressionBlendType_Multiply=1]="ExpressionBlendType_Multiply",t[t.ExpressionBlendType_Overwrite=2]="ExpressionBlendType_Overwrite",t))(U||{});t.CubismConfig=void 0,(k=t.CubismConfig||(t.CubismConfig={})).supportMoreMaskDivisions=!0,k.setOpacityFromMotion=!1;var N=(t=>(t[t.CubismMotionCurveTarget_Model=0]="CubismMotionCurveTarget_Model",t[t.CubismMotionCurveTarget_Parameter=1]="CubismMotionCurveTarget_Parameter",t[t.CubismMotionCurveTarget_PartOpacity=2]="CubismMotionCurveTarget_PartOpacity",t))(N||{}),V=(t=>(t[t.CubismMotionSegmentType_Linear=0]="CubismMotionSegmentType_Linear",t[t.CubismMotionSegmentType_Bezier=1]="CubismMotionSegmentType_Bezier",t[t.CubismMotionSegmentType_Stepped=2]="CubismMotionSegmentType_Stepped",t[t.CubismMotionSegmentType_InverseStepped=3]="CubismMotionSegmentType_InverseStepped",t))(V||{});class j{constructor(t=0,e=0){this.time=t,this.value=e}}class G{constructor(){this.basePointIndex=0,this.segmentType=0}}class X{constructor(){this.id="",this.type=0,this.segmentCount=0,this.baseSegmentIndex=0,this.fadeInTime=0,this.fadeOutTime=0}}class z{constructor(){this.fireTime=0,this.value=""}}class W{constructor(){this.duration=0,this.loop=!1,this.curveCount=0,this.eventCount=0,this.fps=0,this.curves=[],this.segments=[],this.points=[],this.events=[]}}class H{constructor(t){this._json=t}release(){this._json=void 0}getMotionDuration(){return this._json.Meta.Duration}isMotionLoop(){return this._json.Meta.Loop||!1}getEvaluationOptionFlag(t){return Y.EvaluationOptionFlag_AreBeziersRistricted==t&&!!this._json.Meta.AreBeziersRestricted}getMotionCurveCount(){return this._json.Meta.CurveCount}getMotionFps(){return this._json.Meta.Fps}getMotionTotalSegmentCount(){return this._json.Meta.TotalSegmentCount}getMotionTotalPointCount(){return this._json.Meta.TotalPointCount}getMotionFadeInTime(){return this._json.Meta.FadeInTime}getMotionFadeOutTime(){return this._json.Meta.FadeOutTime}getMotionCurveTarget(t){return this._json.Curves[t].Target}getMotionCurveId(t){return this._json.Curves[t].Id}getMotionCurveFadeInTime(t){return this._json.Curves[t].FadeInTime}getMotionCurveFadeOutTime(t){return this._json.Curves[t].FadeOutTime}getMotionCurveSegmentCount(t){return this._json.Curves[t].Segments.length}getMotionCurveSegment(t,e){return this._json.Curves[t].Segments[e]}getEventCount(){return this._json.Meta.UserDataCount||0}getTotalEventValueSize(){return this._json.Meta.TotalUserDataSize}getEventTime(t){return this._json.UserData[t].Time}getEventValue(t){return this._json.UserData[t].Value}}var Y=(t=>(t[t.EvaluationOptionFlag_AreBeziersRistricted=0]="EvaluationOptionFlag_AreBeziersRistricted",t))(Y||{});function q(t,e,i){const s=new j;return s.time=t.time+(e.time-t.time)*i,s.value=t.value+(e.value-t.value)*i,s}function $(t,e){let i=(e-t[0].time)/(t[1].time-t[0].time);return i<0&&(i=0),t[0].value+(t[1].value-t[0].value)*i}function Z(t,e){let i=(e-t[0].time)/(t[3].time-t[0].time);i<0&&(i=0);const s=q(t[0],t[1],i),r=q(t[1],t[2],i),a=q(t[2],t[3],i),o=q(s,r,i),n=q(r,a,i);return q(o,n,i).value}function J(t,e){const i=e,s=t[0].time,r=t[3].time,a=t[1].time,o=t[2].time,n=r-3*o+3*a-s,l=3*o-6*a+3*s,h=3*a-3*s,u=s-i,d=g.cardanoAlgorithmForBezier(n,l,h,u),c=q(t[0],t[1],d),m=q(t[1],t[2],d),p=q(t[2],t[3],d),_=q(c,m,d),f=q(m,p,d);return q(_,f,d).value}function Q(t,e){return t[0].value}function K(t,e){return t[1].value}function tt(t,e,i){const s=t.curves[e];let r=-1;const a=s.baseSegmentIndex+s.segmentCount;let o=0;for(let l=s.baseSegmentIndex;l<a;++l)if(o=t.segments[l].basePointIndex+(t.segments[l].segmentType==V.CubismMotionSegmentType_Bezier?3:1),t.points[o].time>i){r=l;break}if(-1==r)return t.points[o].value;const n=t.segments[r];return n.evaluate(t.points.slice(n.basePointIndex),i)}class et extends R{constructor(){super(),this._eyeBlinkParameterIds=[],this._lipSyncParameterIds=[],this._sourceFrameRate=30,this._loopDurationSeconds=-1,this._isLoop=!1,this._isLoopFadeIn=!0,this._lastWeight=0}static create(t,e){const i=new et;return i.parse(t),i._sourceFrameRate=i._motionData.fps,i._loopDurationSeconds=i._motionData.duration,i._onFinishedMotion=e,i}doUpdateParameters(e,i,s,r){null==this._modelCurveIdEyeBlink&&(this._modelCurveIdEyeBlink="EyeBlink"),null==this._modelCurveIdLipSync&&(this._modelCurveIdLipSync="LipSync");let a=i-r.getStartTime();a<0&&(a=0);let o=Number.MAX_VALUE,n=Number.MAX_VALUE;const l=64;let h=0,u=0;this._eyeBlinkParameterIds.length>l&&w("too many eye blink targets : {0}",this._eyeBlinkParameterIds.length),this._lipSyncParameterIds.length>l&&w("too many lip sync targets : {0}",this._lipSyncParameterIds.length);const d=this._fadeInSeconds<=0?1:g.getEasingSine((i-r.getFadeInStartTime())/this._fadeInSeconds),c=this._fadeOutSeconds<=0||r.getEndTime()<0?1:g.getEasingSine((r.getEndTime()-i)/this._fadeOutSeconds);let m,p,_,f=a;if(this._isLoop)for(;f>this._motionData.duration;)f-=this._motionData.duration;const y=this._motionData.curves;for(p=0;p<this._motionData.curveCount&&y[p].type==N.CubismMotionCurveTarget_Model;++p)m=tt(this._motionData,p,f),y[p].id==this._modelCurveIdEyeBlink?n=m:y[p].id==this._modelCurveIdLipSync&&(o=m);for(;p<this._motionData.curveCount&&y[p].type==N.CubismMotionCurveTarget_Parameter;++p){if(_=e.getParameterIndex(y[p].id),-1==_)continue;const t=e.getParameterValueByIndex(_);if(m=tt(this._motionData,p,f),n!=Number.MAX_VALUE)for(let e=0;e<this._eyeBlinkParameterIds.length&&e<l;++e)if(this._eyeBlinkParameterIds[e]==y[p].id){m*=n,u|=1<<e;break}if(o!=Number.MAX_VALUE)for(let e=0;e<this._lipSyncParameterIds.length&&e<l;++e)if(this._lipSyncParameterIds[e]==y[p].id){m+=o,h|=1<<e;break}let a;if(y[p].fadeInTime<0&&y[p].fadeOutTime<0)a=t+(m-t)*s;else{let e,s;e=y[p].fadeInTime<0?d:0==y[p].fadeInTime?1:g.getEasingSine((i-r.getFadeInStartTime())/y[p].fadeInTime),s=y[p].fadeOutTime<0?c:0==y[p].fadeOutTime||r.getEndTime()<0?1:g.getEasingSine((r.getEndTime()-i)/y[p].fadeOutTime);a=t+(m-t)*(this._weight*e*s)}e.setParameterValueByIndex(_,a,1)}if(n!=Number.MAX_VALUE)for(let t=0;t<this._eyeBlinkParameterIds.length&&t<l;++t){const i=e.getParameterValueById(this._eyeBlinkParameterIds[t]);if(u>>t&1)continue;const r=i+(n-i)*s;e.setParameterValueById(this._eyeBlinkParameterIds[t],r)}if(o!=Number.MAX_VALUE)for(let t=0;t<this._lipSyncParameterIds.length&&t<l;++t){const i=e.getParameterValueById(this._lipSyncParameterIds[t]);if(h>>t&1)continue;const r=i+(o-i)*s;e.setParameterValueById(this._lipSyncParameterIds[t],r)}for(;p<this._motionData.curveCount&&y[p].type==N.CubismMotionCurveTarget_PartOpacity;++p)if(m=tt(this._motionData,p,f),t.CubismConfig.setOpacityFromMotion)e.setPartOpacityById(y[p].id,m);else{if(_=e.getParameterIndex(y[p].id),-1==_)continue;e.setParameterValueByIndex(_,m)}a>=this._motionData.duration&&(this._isLoop?(r.setStartTime(i),this._isLoopFadeIn&&r.setFadeInStartTime(i)):(this._onFinishedMotion&&this._onFinishedMotion(this),r.setIsFinished(!0))),this._lastWeight=s}setIsLoop(t){this._isLoop=t}isLoop(){return this._isLoop}setIsLoopFadeIn(t){this._isLoopFadeIn=t}isLoopFadeIn(){return this._isLoopFadeIn}getDuration(){return this._isLoop?-1:this._loopDurationSeconds}getLoopDuration(){return this._loopDurationSeconds}setParameterFadeInTime(t,e){const i=this._motionData.curves;for(let s=0;s<this._motionData.curveCount;++s)if(t==i[s].id)return void(i[s].fadeInTime=e)}setParameterFadeOutTime(t,e){const i=this._motionData.curves;for(let s=0;s<this._motionData.curveCount;++s)if(t==i[s].id)return void(i[s].fadeOutTime=e)}getParameterFadeInTime(t){const e=this._motionData.curves;for(let i=0;i<this._motionData.curveCount;++i)if(t==e[i].id)return e[i].fadeInTime;return-1}getParameterFadeOutTime(t){const e=this._motionData.curves;for(let i=0;i<this._motionData.curveCount;++i)if(t==e[i].id)return e[i].fadeOutTime;return-1}setEffectIds(t,e){this._eyeBlinkParameterIds=t,this._lipSyncParameterIds=e}release(){this._motionData=void 0}parse(t){this._motionData=new W;let e=new H(t);this._motionData.duration=e.getMotionDuration(),this._motionData.loop=e.isMotionLoop(),this._motionData.curveCount=e.getMotionCurveCount(),this._motionData.fps=e.getMotionFps(),this._motionData.eventCount=e.getEventCount();const i=e.getEvaluationOptionFlag(Y.EvaluationOptionFlag_AreBeziersRistricted),s=e.getMotionFadeInTime(),r=e.getMotionFadeOutTime();this._fadeInSeconds=void 0!==s?s<0?1:s:1,this._fadeOutSeconds=void 0!==r?r<0?1:r:1,this._motionData.curves=Array.from({length:this._motionData.curveCount}).map((()=>new X)),this._motionData.segments=Array.from({length:e.getMotionTotalSegmentCount()}).map((()=>new G)),this._motionData.events=Array.from({length:this._motionData.eventCount}).map((()=>new z)),this._motionData.points=[];let a=0,o=0;for(let n=0;n<this._motionData.curveCount;++n){const t=this._motionData.curves[n];switch(e.getMotionCurveTarget(n)){case"Model":t.type=N.CubismMotionCurveTarget_Model;break;case"Parameter":t.type=N.CubismMotionCurveTarget_Parameter;break;case"PartOpacity":t.type=N.CubismMotionCurveTarget_PartOpacity;break;default:L('Warning : Unable to get segment type from Curve! The number of "CurveCount" may be incorrect!')}t.id=e.getMotionCurveId(n),t.baseSegmentIndex=o;const s=e.getMotionCurveFadeInTime(n),r=e.getMotionCurveFadeOutTime(n);t.fadeInTime=void 0!==s?s:-1,t.fadeOutTime=void 0!==r?r:-1;for(let l=0;l<e.getMotionCurveSegmentCount(n);){0==l?(this._motionData.segments[o].basePointIndex=a,this._motionData.points[a]=new j(e.getMotionCurveSegment(n,l),e.getMotionCurveSegment(n,l+1)),a+=1,l+=2):this._motionData.segments[o].basePointIndex=a-1;switch(e.getMotionCurveSegment(n,l)){case V.CubismMotionSegmentType_Linear:this._motionData.segments[o].segmentType=V.CubismMotionSegmentType_Linear,this._motionData.segments[o].evaluate=$,this._motionData.points[a]=new j(e.getMotionCurveSegment(n,l+1),e.getMotionCurveSegment(n,l+2)),a+=1,l+=3;break;case V.CubismMotionSegmentType_Bezier:this._motionData.segments[o].segmentType=V.CubismMotionSegmentType_Bezier,this._motionData.segments[o].evaluate=i?Z:J,this._motionData.points[a]=new j(e.getMotionCurveSegment(n,l+1),e.getMotionCurveSegment(n,l+2)),this._motionData.points[a+1]=new j(e.getMotionCurveSegment(n,l+3),e.getMotionCurveSegment(n,l+4)),this._motionData.points[a+2]=new j(e.getMotionCurveSegment(n,l+5),e.getMotionCurveSegment(n,l+6)),a+=3,l+=7;break;case V.CubismMotionSegmentType_Stepped:this._motionData.segments[o].segmentType=V.CubismMotionSegmentType_Stepped,this._motionData.segments[o].evaluate=Q,this._motionData.points[a]=new j(e.getMotionCurveSegment(n,l+1),e.getMotionCurveSegment(n,l+2)),a+=1,l+=3;break;case V.CubismMotionSegmentType_InverseStepped:this._motionData.segments[o].segmentType=V.CubismMotionSegmentType_InverseStepped,this._motionData.segments[o].evaluate=K,this._motionData.points[a]=new j(e.getMotionCurveSegment(n,l+1),e.getMotionCurveSegment(n,l+2)),a+=1,l+=3}++t.segmentCount,++o}this._motionData.curves.push(t)}for(let n=0;n<e.getEventCount();++n)this._motionData.events[n].fireTime=e.getEventTime(n),this._motionData.events[n].value=e.getEventValue(n);e.release()}getFiredEvent(t,e){this._firedEventValues.length=0;for(let i=0;i<this._motionData.eventCount;++i)this._motionData.events[i].fireTime>t&&this._motionData.events[i].fireTime<=e&&this._firedEventValues.push(this._motionData.events[i].value);return this._firedEventValues}}class it{constructor(){this._autoDelete=!1,this._available=!0,this._finished=!1,this._started=!1,this._startTimeSeconds=-1,this._fadeInStartTimeSeconds=0,this._endTimeSeconds=-1,this._stateTimeSeconds=0,this._stateWeight=0,this._lastEventCheckSeconds=0,this._motionQueueEntryHandle=this,this._fadeOutSeconds=0,this._isTriggeredFadeOut=!1}release(){this._autoDelete&&this._motion&&this._motion.release()}setFadeOut(t){this._fadeOutSeconds=t,this._isTriggeredFadeOut=!0}startFadeOut(t,e){const i=e+t;this._isTriggeredFadeOut=!0,(this._endTimeSeconds<0||i<this._endTimeSeconds)&&(this._endTimeSeconds=i)}isFinished(){return this._finished}isStarted(){return this._started}getStartTime(){return this._startTimeSeconds}getFadeInStartTime(){return this._fadeInStartTimeSeconds}getEndTime(){return this._endTimeSeconds}setStartTime(t){this._startTimeSeconds=t}setFadeInStartTime(t){this._fadeInStartTimeSeconds=t}setEndTime(t){this._endTimeSeconds=t}setIsFinished(t){this._finished=t}setIsStarted(t){this._started=t}isAvailable(){return this._available}setIsAvailable(t){this._available=t}setState(t,e){this._stateTimeSeconds=t,this._stateWeight=e}getStateTime(){return this._stateTimeSeconds}getStateWeight(){return this._stateWeight}getLastCheckEventSeconds(){return this._lastEventCheckSeconds}setLastCheckEventSeconds(t){this._lastEventCheckSeconds=t}isTriggeredFadeOut(){return this._isTriggeredFadeOut}getFadeOutSeconds(){return this._fadeOutSeconds}}class st{constructor(){this._userTimeSeconds=0,this._eventCustomData=null,this._motions=[]}release(){for(let t=0;t<this._motions.length;++t)this._motions[t]&&this._motions[t].release();this._motions=void 0}startMotion(t,e,i){if(null==t)return rt;let s;for(let r=0;r<this._motions.length;++r)s=this._motions[r],null!=s&&s.setFadeOut(s._motion.getFadeOutTime());return s=new it,s._autoDelete=e,s._motion=t,this._motions.push(s),s._motionQueueEntryHandle}isFinished(){let t=0;for(;t<this._motions.length;){const e=this._motions[t];if(null==e){this._motions.splice(t,1);continue}if(null!=e._motion){if(!e.isFinished())return!1;t++}else e.release(),this._motions.splice(t,1)}return!0}isFinishedByHandle(t){for(let e=0;e<this._motions.length;e++){const i=this._motions[e];if(null!=i&&(i._motionQueueEntryHandle==t&&!i.isFinished()))return!1}return!0}stopAllMotions(){for(let t=0;t<this._motions.length;t++){const e=this._motions[t];null!=e&&e.release()}this._motions=[]}getCubismMotionQueueEntry(t){return this._motions.find((e=>null!=e&&e._motionQueueEntryHandle==t))}setEventCallback(t,e=null){this._eventCallBack=t,this._eventCustomData=e}doUpdateMotion(t,e){let i=!1,s=0;for(;s<this._motions.length;){const r=this._motions[s];if(null==r){this._motions.splice(s,1);continue}const a=r._motion;if(null==a){r.release(),this._motions.splice(s,1);continue}a.updateParameters(t,r,e),i=!0;const o=a.getFiredEvent(r.getLastCheckEventSeconds()-r.getStartTime(),e-r.getStartTime());for(let t=0;t<o.length;++t)this._eventCallBack(this,o[t],this._eventCustomData);r.setLastCheckEventSeconds(e),r.isFinished()?(r.release(),this._motions.splice(s,1)):(r.isTriggeredFadeOut()&&r.startFadeOut(r.getFadeOutSeconds(),e),s++)}return i}}const rt=-1;var at=(t=>(t[t.CubismPhysicsTargetType_Parameter=0]="CubismPhysicsTargetType_Parameter",t))(at||{}),ot=(t=>(t[t.CubismPhysicsSource_X=0]="CubismPhysicsSource_X",t[t.CubismPhysicsSource_Y=1]="CubismPhysicsSource_Y",t[t.CubismPhysicsSource_Angle=2]="CubismPhysicsSource_Angle",t))(ot||{});class nt{constructor(){this.initialPosition=new c(0,0),this.position=new c(0,0),this.lastPosition=new c(0,0),this.lastGravity=new c(0,0),this.force=new c(0,0),this.velocity=new c(0,0)}}class lt{constructor(){this.normalizationPosition={},this.normalizationAngle={}}}class ht{constructor(){this.source={}}}class ut{constructor(){this.destination={},this.translationScale=new c(0,0)}}class dt{constructor(){this.settings=[],this.inputs=[],this.outputs=[],this.particles=[],this.gravity=new c(0,0),this.wind=new c(0,0)}}class ct{constructor(t){this._json=t}release(){this._json=void 0}getGravity(){const t=new c(0,0);return t.x=this._json.Meta.EffectiveForces.Gravity.X,t.y=this._json.Meta.EffectiveForces.Gravity.Y,t}getWind(){const t=new c(0,0);return t.x=this._json.Meta.EffectiveForces.Wind.X,t.y=this._json.Meta.EffectiveForces.Wind.Y,t}getSubRigCount(){return this._json.Meta.PhysicsSettingCount}getTotalInputCount(){return this._json.Meta.TotalInputCount}getTotalOutputCount(){return this._json.Meta.TotalOutputCount}getVertexCount(){return this._json.Meta.VertexCount}getNormalizationPositionMinimumValue(t){return this._json.PhysicsSettings[t].Normalization.Position.Minimum}getNormalizationPositionMaximumValue(t){return this._json.PhysicsSettings[t].Normalization.Position.Maximum}getNormalizationPositionDefaultValue(t){return this._json.PhysicsSettings[t].Normalization.Position.Default}getNormalizationAngleMinimumValue(t){return this._json.PhysicsSettings[t].Normalization.Angle.Minimum}getNormalizationAngleMaximumValue(t){return this._json.PhysicsSettings[t].Normalization.Angle.Maximum}getNormalizationAngleDefaultValue(t){return this._json.PhysicsSettings[t].Normalization.Angle.Default}getInputCount(t){return this._json.PhysicsSettings[t].Input.length}getInputWeight(t,e){return this._json.PhysicsSettings[t].Input[e].Weight}getInputReflect(t,e){return this._json.PhysicsSettings[t].Input[e].Reflect}getInputType(t,e){return this._json.PhysicsSettings[t].Input[e].Type}getInputSourceId(t,e){return this._json.PhysicsSettings[t].Input[e].Source.Id}getOutputCount(t){return this._json.PhysicsSettings[t].Output.length}getOutputVertexIndex(t,e){return this._json.PhysicsSettings[t].Output[e].VertexIndex}getOutputAngleScale(t,e){return this._json.PhysicsSettings[t].Output[e].Scale}getOutputWeight(t,e){return this._json.PhysicsSettings[t].Output[e].Weight}getOutputDestinationId(t,e){return this._json.PhysicsSettings[t].Output[e].Destination.Id}getOutputType(t,e){return this._json.PhysicsSettings[t].Output[e].Type}getOutputReflect(t,e){return this._json.PhysicsSettings[t].Output[e].Reflect}getParticleCount(t){return this._json.PhysicsSettings[t].Vertices.length}getParticleMobility(t,e){return this._json.PhysicsSettings[t].Vertices[e].Mobility}getParticleDelay(t,e){return this._json.PhysicsSettings[t].Vertices[e].Delay}getParticleAcceleration(t,e){return this._json.PhysicsSettings[t].Vertices[e].Acceleration}getParticleRadius(t,e){return this._json.PhysicsSettings[t].Vertices[e].Radius}getParticlePosition(t,e){const i=new c(0,0);return i.x=this._json.PhysicsSettings[t].Vertices[e].Position.X,i.y=this._json.PhysicsSettings[t].Vertices[e].Position.Y,i}}const mt="Angle";class gt{static create(t){const e=new gt;return e.parse(t),e._physicsRig.gravity.y=0,e}evaluate(t,e){let i,s,r,a;const o=new c;let n,l,h,u,d,m,p,_;d=t.getModel().parameters.values,m=t.getModel().parameters.maximumValues,p=t.getModel().parameters.minimumValues,_=t.getModel().parameters.defaultValues;for(let f=0;f<this._physicsRig.subRigCount;++f){i={angle:0},o.x=0,o.y=0,n=this._physicsRig.settings[f],l=this._physicsRig.inputs.slice(n.baseInputIndex),h=this._physicsRig.outputs.slice(n.baseOutputIndex),u=this._physicsRig.particles.slice(n.baseParticleIndex);for(let e=0;e<n.inputCount;++e)s=l[e].weight/100,-1==l[e].sourceParameterIndex&&(l[e].sourceParameterIndex=t.getParameterIndex(l[e].source.id)),l[e].getNormalizedParameterValue(o,i,d[l[e].sourceParameterIndex],p[l[e].sourceParameterIndex],m[l[e].sourceParameterIndex],_[l[e].sourceParameterIndex],n.normalizationPosition,n.normalizationAngle,l[e].reflect,s);r=g.degreesToRadian(-i.angle),o.x=o.x*g.cos(r)-o.y*g.sin(r),o.y=o.x*g.sin(r)+o.y*g.cos(r),wt(u,n.particleCount,o,i.angle,this._options.wind,.001*n.normalizationPosition.maximum,e,5);for(let e=0;e<n.outputCount;++e){const i=h[e].vertexIndex;if(i<1||i>=n.particleCount)break;-1==h[e].destinationParameterIndex&&(h[e].destinationParameterIndex=t.getParameterIndex(h[e].destination.id));const s=new c;s.x=u[i].position.x-u[i-1].position.x,s.y=u[i].position.y-u[i-1].position.y,a=h[e].getValue(s,u,i,h[e].reflect,this._options.gravity);const r=h[e].destinationParameterIndex,o=!Float32Array.prototype.slice&&"subarray"in Float32Array.prototype?JSON.parse(JSON.stringify(d.subarray(r))):d.slice(r);It(o,p[r],m[r],a,h[e]);for(let t=r,e=0;t<d.length;t++,e++)d[t]=o[e]}}}setOptions(t){this._options=t}getOption(){return this._options}constructor(){this._options=new pt,this._options.gravity.y=-1,this._options.gravity.x=0,this._options.wind.x=0,this._options.wind.y=0}release(){this._physicsRig=void 0}parse(t){this._physicsRig=new dt;let e=new ct(t);this._physicsRig.gravity=e.getGravity(),this._physicsRig.wind=e.getWind(),this._physicsRig.subRigCount=e.getSubRigCount();let i=0,s=0,r=0;for(let a=0;a<this._physicsRig.subRigCount;++a){const t=new lt;t.normalizationPosition.minimum=e.getNormalizationPositionMinimumValue(a),t.normalizationPosition.maximum=e.getNormalizationPositionMaximumValue(a),t.normalizationPosition.defalut=e.getNormalizationPositionDefaultValue(a),t.normalizationAngle.minimum=e.getNormalizationAngleMinimumValue(a),t.normalizationAngle.maximum=e.getNormalizationAngleMaximumValue(a),t.normalizationAngle.defalut=e.getNormalizationAngleDefaultValue(a),t.inputCount=e.getInputCount(a),t.baseInputIndex=i,i+=t.inputCount;for(let i=0;i<t.inputCount;++i){const t=new ht;switch(t.sourceParameterIndex=-1,t.weight=e.getInputWeight(a,i),t.reflect=e.getInputReflect(a,i),e.getInputType(a,i)){case"X":t.type=ot.CubismPhysicsSource_X,t.getNormalizedParameterValue=_t;break;case"Y":t.type=ot.CubismPhysicsSource_Y,t.getNormalizedParameterValue=ft;break;case mt:t.type=ot.CubismPhysicsSource_Angle,t.getNormalizedParameterValue=yt}t.source.targetType=at.CubismPhysicsTargetType_Parameter,t.source.id=e.getInputSourceId(a,i),this._physicsRig.inputs.push(t)}t.outputCount=e.getOutputCount(a),t.baseOutputIndex=s,s+=t.outputCount;for(let i=0;i<t.outputCount;++i){const t=new ut;switch(t.destinationParameterIndex=-1,t.vertexIndex=e.getOutputVertexIndex(a,i),t.angleScale=e.getOutputAngleScale(a,i),t.weight=e.getOutputWeight(a,i),t.destination.targetType=at.CubismPhysicsTargetType_Parameter,t.destination.id=e.getOutputDestinationId(a,i),e.getOutputType(a,i)){case"X":t.type=ot.CubismPhysicsSource_X,t.getValue=xt,t.getScale=Ct;break;case"Y":t.type=ot.CubismPhysicsSource_Y,t.getValue=vt,t.getScale=St;break;case mt:t.type=ot.CubismPhysicsSource_Angle,t.getValue=Mt,t.getScale=bt}t.reflect=e.getOutputReflect(a,i),this._physicsRig.outputs.push(t)}t.particleCount=e.getParticleCount(a),t.baseParticleIndex=r,r+=t.particleCount;for(let i=0;i<t.particleCount;++i){const t=new nt;t.mobility=e.getParticleMobility(a,i),t.delay=e.getParticleDelay(a,i),t.acceleration=e.getParticleAcceleration(a,i),t.radius=e.getParticleRadius(a,i),t.position=e.getParticlePosition(a,i),this._physicsRig.particles.push(t)}this._physicsRig.settings.push(t)}this.initialize(),e.release()}initialize(){let t,e,i;for(let s=0;s<this._physicsRig.subRigCount;++s){e=this._physicsRig.settings[s],t=this._physicsRig.particles.slice(e.baseParticleIndex),t[0].initialPosition=new c(0,0),t[0].lastPosition=new c(t[0].initialPosition.x,t[0].initialPosition.y),t[0].lastGravity=new c(0,-1),t[0].lastGravity.y*=-1,t[0].velocity=new c(0,0),t[0].force=new c(0,0);for(let s=1;s<e.particleCount;++s)i=new c(0,0),i.y=t[s].radius,t[s].initialPosition=new c(t[s-1].initialPosition.x+i.x,t[s-1].initialPosition.y+i.y),t[s].position=new c(t[s].initialPosition.x,t[s].initialPosition.y),t[s].lastPosition=new c(t[s].initialPosition.x,t[s].initialPosition.y),t[s].lastGravity=new c(0,-1),t[s].lastGravity.y*=-1,t[s].velocity=new c(0,0),t[s].force=new c(0,0)}}}class pt{constructor(){this.gravity=new c(0,0),this.wind=new c(0,0)}}function _t(t,e,i,s,r,a,o,n,l,h){t.x+=Lt(i,s,r,a,o.minimum,o.maximum,o.defalut,l)*h}function ft(t,e,i,s,r,a,o,n,l,h){t.y+=Lt(i,s,r,a,o.minimum,o.maximum,o.defalut,l)*h}function yt(t,e,i,s,r,a,o,n,l,h){e.angle+=Lt(i,s,r,a,n.minimum,n.maximum,n.defalut,l)*h}function xt(t,e,i,s,r){let a=t.x;return s&&(a*=-1),a}function vt(t,e,i,s,r){let a=t.y;return s&&(a*=-1),a}function Mt(t,e,i,s,r){let a;return r=i>=2?e[i-1].position.substract(e[i-2].position):r.multiplyByScaler(-1),a=g.directionToRadian(r,t),s&&(a*=-1),a}function Pt(t,e){return Math.min(t,e)+function(t,e){return Math.abs(Math.max(t,e)-Math.min(t,e))}(t,e)/2}function Ct(t,e){return t.x}function St(t,e){return t.y}function bt(t,e){return e}function wt(t,e,i,s,r,a,o,n){let l,h,u,d,m=new c(0,0),p=new c(0,0),_=new c(0,0),f=new c(0,0);t[0].position=new c(i.x,i.y),l=g.degreesToRadian(s),d=g.radianToDirection(l),d.normalize();for(let y=1;y<e;++y)t[y].force=d.multiplyByScaler(t[y].acceleration).add(r),t[y].lastPosition=new c(t[y].position.x,t[y].position.y),h=t[y].delay*o*30,m=t[y].position.substract(t[y-1].position),u=g.directionToRadian(t[y].lastGravity,d)/n,m.x=g.cos(u)*m.x-m.y*g.sin(u),m.y=g.sin(u)*m.x+m.y*g.cos(u),t[y].position=t[y-1].position.add(m),p=t[y].velocity.multiplyByScaler(h),_=t[y].force.multiplyByScaler(h).multiplyByScaler(h),t[y].position=t[y].position.add(p).add(_),f=t[y].position.substract(t[y-1].position),f.normalize(),t[y].position=t[y-1].position.add(f.multiplyByScaler(t[y].radius)),g.abs(t[y].position.x)<a&&(t[y].position.x=0),0!=h&&(t[y].velocity=t[y].position.substract(t[y].lastPosition),t[y].velocity=t[y].velocity.divisionByScalar(h),t[y].velocity=t[y].velocity.multiplyByScaler(t[y].mobility)),t[y].force=new c(0,0),t[y].lastGravity=new c(d.x,d.y)}function It(t,e,i,s,r){let a,o,n;a=r.getScale(r.translationScale,r.angleScale),o=s*a,o<e?(o<r.valueBelowMinimum&&(r.valueBelowMinimum=o),o=e):o>i&&(o>r.valueExceededMaximum&&(r.valueExceededMaximum=o),o=i),n=r.weight/100,n>=1||(o=t[0]*(1-n)+o*n),t[0]=o}function Lt(t,e,i,s,r,a,o,n){let l=0;const h=g.max(i,e);h<t&&(t=h);const u=g.min(i,e);u>t&&(t=u);const d=g.min(r,a),c=g.max(r,a),m=o,p=Pt(u,h),_=t-p;switch(Math.sign(_)){case 1:{const t=c-m,e=h-p;0!=e&&(l=_*(t/e),l+=m);break}case-1:{const t=d-m,e=u-p;0!=e&&(l=_*(t/e),l+=m);break}case 0:l=m}return n?l:-1*l}class Tt{constructor(t=0,e=0,i=0,s=0){this.x=t,this.y=e,this.width=i,this.height=s}getCenterX(){return this.x+.5*this.width}getCenterY(){return this.y+.5*this.height}getRight(){return this.x+this.width}getBottom(){return this.y+this.height}setRect(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height}expand(t,e){this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e}}let Et,Dt,Ft;class At{getChannelFlagAsColor(t){return this._channelColors[t]}getMaskRenderTexture(){let t=0;if(this._maskTexture&&0!=this._maskTexture.texture&&(this._maskTexture.frameNo=this._currentFrameNo,t=this._maskTexture.texture),0==t){const e=this._clippingMaskBufferSize;this._colorBuffer=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this._colorBuffer),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,e,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.bindTexture(this.gl.TEXTURE_2D,null),t=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this._colorBuffer,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,Ft),this._maskTexture=new Bt(this._currentFrameNo,t)}return t}setGL(t){this.gl=t}calcClippedDrawTotalBounds(t,e){let i=Number.MAX_VALUE,s=Number.MAX_VALUE,r=Number.MIN_VALUE,a=Number.MIN_VALUE;const o=e._clippedDrawableIndexList.length;for(let n=0;n<o;n++){const o=e._clippedDrawableIndexList[n],l=t.getDrawableVertexCount(o),h=t.getDrawableVertices(o);let u=Number.MAX_VALUE,d=Number.MAX_VALUE,c=Number.MIN_VALUE,m=Number.MIN_VALUE;const g=l*P.vertexStep;for(let t=P.vertexOffset;t<g;t+=P.vertexStep){const e=h[t],i=h[t+1];e<u&&(u=e),e>c&&(c=e),i<d&&(d=i),i>m&&(m=i)}if(u!=Number.MAX_VALUE)if(u<i&&(i=u),d<s&&(s=d),c>r&&(r=c),m>a&&(a=m),i==Number.MAX_VALUE)e._allClippedDrawRect.x=0,e._allClippedDrawRect.y=0,e._allClippedDrawRect.width=0,e._allClippedDrawRect.height=0,e._isUsing=!1;else{e._isUsing=!0;const t=r-i,o=a-s;e._allClippedDrawRect.x=i,e._allClippedDrawRect.y=s,e._allClippedDrawRect.width=t,e._allClippedDrawRect.height=o}}}constructor(){this._maskRenderTexture=null,this._colorBuffer=null,this._currentFrameNo=0,this._clippingMaskBufferSize=256,this._clippingContextListForMask=[],this._clippingContextListForDraw=[],this._channelColors=[],this._tmpBoundsOnModel=new Tt,this._tmpMatrix=new p,this._tmpMatrixForMask=new p,this._tmpMatrixForDraw=new p;let t=new y;t.R=1,t.G=0,t.B=0,t.A=0,this._channelColors.push(t),t=new y,t.R=0,t.G=1,t.B=0,t.A=0,this._channelColors.push(t),t=new y,t.R=0,t.G=0,t.B=1,t.A=0,this._channelColors.push(t),t=new y,t.R=0,t.G=0,t.B=0,t.A=1,this._channelColors.push(t)}release(){var t,e,i;const s=this;for(let r=0;r<this._clippingContextListForMask.length;r++)this._clippingContextListForMask[r]&&(null==(t=this._clippingContextListForMask[r])||t.release());s._clippingContextListForMask=void 0,s._clippingContextListForDraw=void 0,this._maskTexture&&(null==(e=this.gl)||e.deleteFramebuffer(this._maskTexture.texture),s._maskTexture=void 0),s._channelColors=void 0,null==(i=this.gl)||i.deleteTexture(this._colorBuffer),this._colorBuffer=null}initialize(t,e,i,s){for(let r=0;r<e;r++){if(s[r]<=0){this._clippingContextListForDraw.push(null);continue}let t=this.findSameClip(i[r],s[r]);null==t&&(t=new Rt(this,i[r],s[r]),this._clippingContextListForMask.push(t)),t.addClippedDrawable(r),this._clippingContextListForDraw.push(t)}}setupClippingContext(t,e){this._currentFrameNo++;let i=0;for(let s=0;s<this._clippingContextListForMask.length;s++){const e=this._clippingContextListForMask[s];this.calcClippedDrawTotalBounds(t,e),e._isUsing&&i++}if(i>0){this.gl.viewport(0,0,this._clippingMaskBufferSize,this._clippingMaskBufferSize),this._maskRenderTexture=this.getMaskRenderTexture(),e.getMvpMatrix(),e.preDraw(),this.setupLayoutBounds(i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this._maskRenderTexture),this.gl.clearColor(1,1,1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);for(let i=0;i<this._clippingContextListForMask.length;i++){const s=this._clippingContextListForMask[i],r=s._allClippedDrawRect,a=s._layoutBounds,o=.05;this._tmpBoundsOnModel.setRect(r),this._tmpBoundsOnModel.expand(r.width*o,r.height*o);const n=a.width/this._tmpBoundsOnModel.width,l=a.height/this._tmpBoundsOnModel.height;this._tmpMatrix.loadIdentity(),this._tmpMatrix.translateRelative(-1,-1),this._tmpMatrix.scaleRelative(2,2),this._tmpMatrix.translateRelative(a.x,a.y),this._tmpMatrix.scaleRelative(n,l),this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x,-this._tmpBoundsOnModel.y),this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()),this._tmpMatrix.loadIdentity(),this._tmpMatrix.translateRelative(a.x,a.y),this._tmpMatrix.scaleRelative(n,l),this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x,-this._tmpBoundsOnModel.y),this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray()),s._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()),s._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());const h=s._clippingIdCount;for(let i=0;i<h;i++){const r=s._clippingIdList[i];t.getDrawableDynamicFlagVertexPositionsDidChange(r)&&(e.setIsCulling(0!=t.getDrawableCulling(r)),e.setClippingContextBufferForMask(s),e.drawMesh(t.getDrawableTextureIndices(r),t.getDrawableVertexIndexCount(r),t.getDrawableVertexCount(r),t.getDrawableVertexIndices(r),t.getDrawableVertices(r),t.getDrawableVertexUvs(r),t.getDrawableOpacity(r),f.CubismBlendMode_Normal,!1))}}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,Ft),e.setClippingContextBufferForMask(null),this.gl.viewport(Dt[0],Dt[1],Dt[2],Dt[3])}}findSameClip(t,e){for(let i=0;i<this._clippingContextListForMask.length;i++){const s=this._clippingContextListForMask[i],r=s._clippingIdCount;if(r!=e)continue;let a=0;for(let e=0;e<r;e++){const i=s._clippingIdList[e];for(let e=0;e<r;e++)if(t[e]==i){a++;break}}if(a==r)return s}return null}setupLayoutBounds(e){let i=e/4,s=e%4;i=~~i,s=~~s;let r=0;for(let a=0;a<4;a++){const e=i+(a<s?1:0);if(0==e);else if(1==e){const t=this._clippingContextListForMask[r++];t._layoutChannelNo=a,t._layoutBounds.x=0,t._layoutBounds.y=0,t._layoutBounds.width=1,t._layoutBounds.height=1}else if(2==e)for(let t=0;t<e;t++){let e=t%2;e=~~e;const i=this._clippingContextListForMask[r++];i._layoutChannelNo=a,i._layoutBounds.x=.5*e,i._layoutBounds.y=0,i._layoutBounds.width=.5,i._layoutBounds.height=1}else if(e<=4)for(let t=0;t<e;t++){let e=t%2,i=t/2;e=~~e,i=~~i;const s=this._clippingContextListForMask[r++];s._layoutChannelNo=a,s._layoutBounds.x=.5*e,s._layoutBounds.y=.5*i,s._layoutBounds.width=.5,s._layoutBounds.height=.5}else if(e<=9)for(let t=0;t<e;t++){let e=t%3,i=t/3;e=~~e,i=~~i;const s=this._clippingContextListForMask[r++];s._layoutChannelNo=a,s._layoutBounds.x=e/3,s._layoutBounds.y=i/3,s._layoutBounds.width=1/3,s._layoutBounds.height=1/3}else if(t.CubismConfig.supportMoreMaskDivisions&&e<=16)for(let t=0;t<e;t++){let e=t%4,i=t/4;e=~~e,i=~~i;const s=this._clippingContextListForMask[r++];s._layoutChannelNo=a,s._layoutBounds.x=e/4,s._layoutBounds.y=i/4,s._layoutBounds.width=1/4,s._layoutBounds.height=1/4}else T("not supported mask count : {0}",e)}}getColorBuffer(){return this._colorBuffer}getClippingContextListForDraw(){return this._clippingContextListForDraw}setClippingMaskBufferSize(t){this._clippingMaskBufferSize=t}getClippingMaskBufferSize(){return this._clippingMaskBufferSize}}class Bt{constructor(t,e){this.frameNo=t,this.texture=e}}class Rt{constructor(t,e,i){this._isUsing=!1,this._owner=t,this._clippingIdList=e,this._clippingIdCount=i,this._allClippedDrawRect=new Tt,this._layoutBounds=new Tt,this._clippedDrawableIndexList=[],this._matrixForMask=new p,this._matrixForDraw=new p}release(){const t=this;t._layoutBounds=void 0,t._allClippedDrawRect=void 0,t._clippedDrawableIndexList=void 0}addClippedDrawable(t){this._clippedDrawableIndexList.push(t)}getClippingManager(){return this._owner}setGl(t){this._owner.setGL(t)}}class Ot{static getInstance(){return null==Et?(Et=new Ot,Et):Et}static deleteInstance(){Et&&(Et.release(),Et=void 0)}constructor(){this._shaderSets=[]}release(){this.releaseShaderProgram()}setupShaderProgram(t,e,i,s,r,a,o,n,l,h,u,d,c){let m,g,p,_;u||T("NoPremultipliedAlpha is not allowed"),0==this._shaderSets.length&&this.generateShaders();const y=t.getClippingContextBufferForMask();if(null!=y){const t=this._shaderSets[kt.ShaderNames_SetupMask];this.gl.useProgram(t.shaderProgram),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.uniform1i(t.samplerTexture0Location,0),null==o.vertex&&(o.vertex=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o.vertex),this.gl.bufferData(this.gl.ARRAY_BUFFER,s,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(t.attributePositionLocation),this.gl.vertexAttribPointer(t.attributePositionLocation,2,this.gl.FLOAT,!1,0,0),null==o.uv&&(o.uv=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o.uv),this.gl.bufferData(this.gl.ARRAY_BUFFER,a,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(t.attributeTexCoordLocation),this.gl.vertexAttribPointer(t.attributeTexCoordLocation,2,this.gl.FLOAT,!1,0,0);const i=y._layoutChannelNo,r=y.getClippingManager().getChannelFlagAsColor(i);this.gl.uniform4f(t.uniformChannelFlagLocation,r.R,r.G,r.B,r.A),this.gl.uniformMatrix4fv(t.uniformClipMatrixLocation,!1,y._matrixForMask.getArray());const n=y._layoutBounds;this.gl.uniform4f(t.uniformBaseColorLocation,2*n.x-1,2*n.y-1,2*n.getRight()-1,2*n.getBottom()-1),m=this.gl.ZERO,g=this.gl.ONE_MINUS_SRC_COLOR,p=this.gl.ZERO,_=this.gl.ONE_MINUS_SRC_ALPHA}else{const i=t.getClippingContextBufferForDraw(),r=null!=i?c?2:1:0;let n;switch(l){case f.CubismBlendMode_Normal:default:n=this._shaderSets[kt.ShaderNames_NormalPremultipliedAlpha+r],m=this.gl.ONE,g=this.gl.ONE_MINUS_SRC_ALPHA,p=this.gl.ONE,_=this.gl.ONE_MINUS_SRC_ALPHA;break;case f.CubismBlendMode_Additive:n=this._shaderSets[kt.ShaderNames_AddPremultipliedAlpha+r],m=this.gl.ONE,g=this.gl.ONE,p=this.gl.ZERO,_=this.gl.ONE;break;case f.CubismBlendMode_Multiplicative:n=this._shaderSets[kt.ShaderNames_MultPremultipliedAlpha+r],m=this.gl.DST_COLOR,g=this.gl.ONE_MINUS_SRC_ALPHA,p=this.gl.ZERO,_=this.gl.ONE}if(this.gl.useProgram(n.shaderProgram),null==o.vertex&&(o.vertex=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o.vertex),this.gl.bufferData(this.gl.ARRAY_BUFFER,s,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(n.attributePositionLocation),this.gl.vertexAttribPointer(n.attributePositionLocation,2,this.gl.FLOAT,!1,0,0),null==o.uv&&(o.uv=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o.uv),this.gl.bufferData(this.gl.ARRAY_BUFFER,a,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(n.attributeTexCoordLocation),this.gl.vertexAttribPointer(n.attributeTexCoordLocation,2,this.gl.FLOAT,!1,0,0),null!=i){this.gl.activeTexture(this.gl.TEXTURE1);const t=i.getClippingManager().getColorBuffer();this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.uniform1i(n.samplerTexture1Location,1),this.gl.uniformMatrix4fv(n.uniformClipMatrixLocation,!1,i._matrixForDraw.getArray());const e=i._layoutChannelNo,s=i.getClippingManager().getChannelFlagAsColor(e);this.gl.uniform4f(n.uniformChannelFlagLocation,s.R,s.G,s.B,s.A)}this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.uniform1i(n.samplerTexture0Location,0),this.gl.uniformMatrix4fv(n.uniformMatrixLocation,!1,d.getArray()),this.gl.uniform4f(n.uniformBaseColorLocation,h.R,h.G,h.B,h.A)}null==o.index&&(o.index=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,o.index),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,r,this.gl.DYNAMIC_DRAW),this.gl.blendFuncSeparate(m,g,p,_)}releaseShaderProgram(){for(let t=0;t<this._shaderSets.length;t++)this.gl.deleteProgram(this._shaderSets[t].shaderProgram),this._shaderSets[t].shaderProgram=0;this._shaderSets=[]}generateShaders(){for(let t=0;t<10;t++)this._shaderSets.push({});this._shaderSets[0].shaderProgram=this.loadShaderProgram(Ut,Nt),this._shaderSets[1].shaderProgram=this.loadShaderProgram(Vt,Gt),this._shaderSets[2].shaderProgram=this.loadShaderProgram(jt,Xt),this._shaderSets[3].shaderProgram=this.loadShaderProgram(jt,zt),this._shaderSets[4].shaderProgram=this._shaderSets[1].shaderProgram,this._shaderSets[5].shaderProgram=this._shaderSets[2].shaderProgram,this._shaderSets[6].shaderProgram=this._shaderSets[3].shaderProgram,this._shaderSets[7].shaderProgram=this._shaderSets[1].shaderProgram,this._shaderSets[8].shaderProgram=this._shaderSets[2].shaderProgram,this._shaderSets[9].shaderProgram=this._shaderSets[3].shaderProgram,this._shaderSets[0].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[0].shaderProgram,"a_position"),this._shaderSets[0].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[0].shaderProgram,"a_texCoord"),this._shaderSets[0].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[0].shaderProgram,"s_texture0"),this._shaderSets[0].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[0].shaderProgram,"u_clipMatrix"),this._shaderSets[0].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[0].shaderProgram,"u_channelFlag"),this._shaderSets[0].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[0].shaderProgram,"u_baseColor"),this._shaderSets[1].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[1].shaderProgram,"a_position"),this._shaderSets[1].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[1].shaderProgram,"a_texCoord"),this._shaderSets[1].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[1].shaderProgram,"s_texture0"),this._shaderSets[1].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[1].shaderProgram,"u_matrix"),this._shaderSets[1].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[1].shaderProgram,"u_baseColor"),this._shaderSets[2].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[2].shaderProgram,"a_position"),this._shaderSets[2].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[2].shaderProgram,"a_texCoord"),this._shaderSets[2].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[2].shaderProgram,"s_texture0"),this._shaderSets[2].samplerTexture1Location=this.gl.getUniformLocation(this._shaderSets[2].shaderProgram,"s_texture1"),this._shaderSets[2].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[2].shaderProgram,"u_matrix"),this._shaderSets[2].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[2].shaderProgram,"u_clipMatrix"),this._shaderSets[2].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[2].shaderProgram,"u_channelFlag"),this._shaderSets[2].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[2].shaderProgram,"u_baseColor"),this._shaderSets[3].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[3].shaderProgram,"a_position"),this._shaderSets[3].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[3].shaderProgram,"a_texCoord"),this._shaderSets[3].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[3].shaderProgram,"s_texture0"),this._shaderSets[3].samplerTexture1Location=this.gl.getUniformLocation(this._shaderSets[3].shaderProgram,"s_texture1"),this._shaderSets[3].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[3].shaderProgram,"u_matrix"),this._shaderSets[3].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[3].shaderProgram,"u_clipMatrix"),this._shaderSets[3].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[3].shaderProgram,"u_channelFlag"),this._shaderSets[3].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[3].shaderProgram,"u_baseColor"),this._shaderSets[4].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[4].shaderProgram,"a_position"),this._shaderSets[4].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[4].shaderProgram,"a_texCoord"),this._shaderSets[4].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[4].shaderProgram,"s_texture0"),this._shaderSets[4].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[4].shaderProgram,"u_matrix"),this._shaderSets[4].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[4].shaderProgram,"u_baseColor"),this._shaderSets[5].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[5].shaderProgram,"a_position"),this._shaderSets[5].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[5].shaderProgram,"a_texCoord"),this._shaderSets[5].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[5].shaderProgram,"s_texture0"),this._shaderSets[5].samplerTexture1Location=this.gl.getUniformLocation(this._shaderSets[5].shaderProgram,"s_texture1"),this._shaderSets[5].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[5].shaderProgram,"u_matrix"),this._shaderSets[5].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[5].shaderProgram,"u_clipMatrix"),this._shaderSets[5].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[5].shaderProgram,"u_channelFlag"),this._shaderSets[5].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[5].shaderProgram,"u_baseColor"),this._shaderSets[6].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[6].shaderProgram,"a_position"),this._shaderSets[6].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[6].shaderProgram,"a_texCoord"),this._shaderSets[6].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[6].shaderProgram,"s_texture0"),this._shaderSets[6].samplerTexture1Location=this.gl.getUniformLocation(this._shaderSets[6].shaderProgram,"s_texture1"),this._shaderSets[6].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[6].shaderProgram,"u_matrix"),this._shaderSets[6].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[6].shaderProgram,"u_clipMatrix"),this._shaderSets[6].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[6].shaderProgram,"u_channelFlag"),this._shaderSets[6].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[6].shaderProgram,"u_baseColor"),this._shaderSets[7].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[7].shaderProgram,"a_position"),this._shaderSets[7].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[7].shaderProgram,"a_texCoord"),this._shaderSets[7].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[7].shaderProgram,"s_texture0"),this._shaderSets[7].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[7].shaderProgram,"u_matrix"),this._shaderSets[7].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[7].shaderProgram,"u_baseColor"),this._shaderSets[8].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[8].shaderProgram,"a_position"),this._shaderSets[8].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[8].shaderProgram,"a_texCoord"),this._shaderSets[8].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[8].shaderProgram,"s_texture0"),this._shaderSets[8].samplerTexture1Location=this.gl.getUniformLocation(this._shaderSets[8].shaderProgram,"s_texture1"),this._shaderSets[8].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[8].shaderProgram,"u_matrix"),this._shaderSets[8].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[8].shaderProgram,"u_clipMatrix"),this._shaderSets[8].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[8].shaderProgram,"u_channelFlag"),this._shaderSets[8].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[8].shaderProgram,"u_baseColor"),this._shaderSets[9].attributePositionLocation=this.gl.getAttribLocation(this._shaderSets[9].shaderProgram,"a_position"),this._shaderSets[9].attributeTexCoordLocation=this.gl.getAttribLocation(this._shaderSets[9].shaderProgram,"a_texCoord"),this._shaderSets[9].samplerTexture0Location=this.gl.getUniformLocation(this._shaderSets[9].shaderProgram,"s_texture0"),this._shaderSets[9].samplerTexture1Location=this.gl.getUniformLocation(this._shaderSets[9].shaderProgram,"s_texture1"),this._shaderSets[9].uniformMatrixLocation=this.gl.getUniformLocation(this._shaderSets[9].shaderProgram,"u_matrix"),this._shaderSets[9].uniformClipMatrixLocation=this.gl.getUniformLocation(this._shaderSets[9].shaderProgram,"u_clipMatrix"),this._shaderSets[9].uniformChannelFlagLocation=this.gl.getUniformLocation(this._shaderSets[9].shaderProgram,"u_channelFlag"),this._shaderSets[9].uniformBaseColorLocation=this.gl.getUniformLocation(this._shaderSets[9].shaderProgram,"u_baseColor")}loadShaderProgram(t,e){let i=this.gl.createProgram(),s=this.compileShaderSource(this.gl.VERTEX_SHADER,t);if(!s)return T("Vertex shader compile error!"),0;let r=this.compileShaderSource(this.gl.FRAGMENT_SHADER,e);if(!r)return T("Vertex shader compile error!"),0;this.gl.attachShader(i,s),this.gl.attachShader(i,r),this.gl.linkProgram(i);return this.gl.getProgramParameter(i,this.gl.LINK_STATUS)?(this.gl.deleteShader(s),this.gl.deleteShader(r),i):(T("Failed to link program: {0}",i),this.gl.deleteShader(s),this.gl.deleteShader(r),i&&this.gl.deleteProgram(i),0)}compileShaderSource(t,e){const i=e,s=this.gl.createShader(t);if(this.gl.shaderSource(s,i),this.gl.compileShader(s),!s){T("Shader compile log: {0} ",this.gl.getShaderInfoLog(s))}return this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)?s:(this.gl.deleteShader(s),null)}setGl(t){this.gl=t}}var kt=(t=>(t[t.ShaderNames_SetupMask=0]="ShaderNames_SetupMask",t[t.ShaderNames_NormalPremultipliedAlpha=1]="ShaderNames_NormalPremultipliedAlpha",t[t.ShaderNames_NormalMaskedPremultipliedAlpha=2]="ShaderNames_NormalMaskedPremultipliedAlpha",t[t.ShaderNames_NomralMaskedInvertedPremultipliedAlpha=3]="ShaderNames_NomralMaskedInvertedPremultipliedAlpha",t[t.ShaderNames_AddPremultipliedAlpha=4]="ShaderNames_AddPremultipliedAlpha",t[t.ShaderNames_AddMaskedPremultipliedAlpha=5]="ShaderNames_AddMaskedPremultipliedAlpha",t[t.ShaderNames_AddMaskedPremultipliedAlphaInverted=6]="ShaderNames_AddMaskedPremultipliedAlphaInverted",t[t.ShaderNames_MultPremultipliedAlpha=7]="ShaderNames_MultPremultipliedAlpha",t[t.ShaderNames_MultMaskedPremultipliedAlpha=8]="ShaderNames_MultMaskedPremultipliedAlpha",t[t.ShaderNames_MultMaskedPremultipliedAlphaInverted=9]="ShaderNames_MultMaskedPremultipliedAlphaInverted",t))(kt||{});const Ut="attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}",Nt="precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}",Vt="attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}",jt="attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}",Gt="precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;void main(){   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;}",Xt="precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;void main(){   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}",zt="precision mediump float;varying vec2 v_texCoord;varying vec4 v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4 u_channelFlag;uniform vec4 u_baseColor;void main(){vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;col_formask = col_formask * (1.0 - maskVal);gl_FragColor = col_formask;}";class Wt extends _{constructor(){super(),this._clippingContextBufferForMask=null,this._clippingContextBufferForDraw=null,this._clippingManager=new At,this.firstDraw=!0,this._textures={},this._sortedDrawableIndexList=[],this._bufferData={vertex:null,uv:null,index:null}}initialize(t){t.isUsingMasking()&&(this._clippingManager=new At,this._clippingManager.initialize(t,t.getDrawableCount(),t.getDrawableMasks(),t.getDrawableMaskCounts()));for(let e=t.getDrawableCount()-1;e>=0;e--)this._sortedDrawableIndexList[e]=0;super.initialize(t)}bindTexture(t,e){this._textures[t]=e}getBindedTextures(){return this._textures}setClippingMaskBufferSize(t){this._clippingManager.release(),this._clippingManager=new At,this._clippingManager.setClippingMaskBufferSize(t),this._clippingManager.initialize(this.getModel(),this.getModel().getDrawableCount(),this.getModel().getDrawableMasks(),this.getModel().getDrawableMaskCounts())}getClippingMaskBufferSize(){return this._clippingManager.getClippingMaskBufferSize()}release(){var t,e,i;const s=this;this._clippingManager.release(),s._clippingManager=void 0,null==(t=this.gl)||t.deleteBuffer(this._bufferData.vertex),this._bufferData.vertex=null,null==(e=this.gl)||e.deleteBuffer(this._bufferData.uv),this._bufferData.uv=null,null==(i=this.gl)||i.deleteBuffer(this._bufferData.index),this._bufferData.index=null,s._bufferData=void 0,s._textures=void 0}doDrawModel(){this.preDraw(),null!=this._clippingManager&&this._clippingManager.setupClippingContext(this.getModel(),this);const t=this.getModel().getDrawableCount(),e=this.getModel().getDrawableRenderOrders();for(let i=0;i<t;++i){const t=e[i];this._sortedDrawableIndexList[t]=i}for(let i=0;i<t;++i){const t=this._sortedDrawableIndexList[i];this.getModel().getDrawableDynamicFlagIsVisible(t)&&(this.setClippingContextBufferForDraw(null!=this._clippingManager?this._clippingManager.getClippingContextListForDraw()[t]:null),this.setIsCulling(this.getModel().getDrawableCulling(t)),this.drawMesh(this.getModel().getDrawableTextureIndices(t),this.getModel().getDrawableVertexIndexCount(t),this.getModel().getDrawableVertexCount(t),this.getModel().getDrawableVertexIndices(t),this.getModel().getDrawableVertices(t),this.getModel().getDrawableVertexUvs(t),this.getModel().getDrawableOpacity(t),this.getModel().getDrawableBlendMode(t),this.getModel().getDrawableInvertedMaskBit(t)))}}drawMesh(t,e,i,s,r,a,o,n,l){this.isCulling()?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this.gl.frontFace(this.gl.CCW);const h=this.getModelColor();null==this.getClippingContextBufferForMask()&&(h.A*=o,this.isPremultipliedAlpha()&&(h.R*=h.A,h.G*=h.A,h.B*=h.A));let u=null;null!=this._textures[t]&&(u=this._textures[t]),Ot.getInstance().setupShaderProgram(this,u,i,r,s,a,this._bufferData,o,n,h,this.isPremultipliedAlpha(),this.getMvpMatrix(),l),this.gl.drawElements(this.gl.TRIANGLES,e,this.gl.UNSIGNED_SHORT,0),this.gl.useProgram(null),this.setClippingContextBufferForDraw(null),this.setClippingContextBufferForMask(null)}static doStaticRelease(){Ot.deleteInstance()}setRenderState(t,e){Ft=t,Dt=e}preDraw(){this.firstDraw&&(this.firstDraw=!1,this._anisortopy=this.gl.getExtension("EXT_texture_filter_anisotropic")||this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")),this.gl.disable(this.gl.SCISSOR_TEST),this.gl.disable(this.gl.STENCIL_TEST),this.gl.disable(this.gl.DEPTH_TEST),this.gl.frontFace(this.gl.CW),this.gl.enable(this.gl.BLEND),this.gl.colorMask(!0,!0,!0,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null)}setClippingContextBufferForMask(t){this._clippingContextBufferForMask=t}getClippingContextBufferForMask(){return this._clippingContextBufferForMask}setClippingContextBufferForDraw(t){this._clippingContextBufferForDraw=t}getClippingContextBufferForDraw(){return this._clippingContextBufferForDraw}startUp(t){this.gl=t,this._clippingManager.setGL(t),Ot.getInstance().setGl(t)}}_.staticRelease=()=>{Wt.doStaticRelease()};class Ht{constructor(t){this.groups=t.Groups,this.hitAreas=t.HitAreas,this.layout=t.Layout,this.moc=t.FileReferences.Moc,this.expressions=t.FileReferences.Expressions,this.motions=t.FileReferences.Motions,this.textures=t.FileReferences.Textures,this.physics=t.FileReferences.Physics,this.pose=t.FileReferences.Pose}getEyeBlinkParameters(){var t,e;return null==(e=null==(t=this.groups)?void 0:t.find((t=>"EyeBlink"===t.Name)))?void 0:e.Ids}getLipSyncParameters(){var t,e;return null==(e=null==(t=this.groups)?void 0:t.find((t=>"LipSync"===t.Name)))?void 0:e.Ids}}const Yt="ParamAngleX",qt="ParamAngleY",$t="ParamAngleZ",Zt="ParamEyeBallX",Jt="ParamEyeBallY",Qt="ParamBodyAngleX",Kt="ParamBreath";var te;t.config=void 0,(te=t.config||(t.config={})).LOG_LEVEL_VERBOSE=0,te.LOG_LEVEL_WARNING=1,te.LOG_LEVEL_ERROR=2,te.LOG_LEVEL_NONE=999,te.logLevel=te.LOG_LEVEL_WARNING,te.sound=!0,te.motionSync=!0,te.motionFadingDuration=500,te.idleMotionFadingDuration=2e3,te.expressionFadingDuration=500,te.preserveExpressionOnMotion=!0,te.cubism4=t.CubismConfig;const ee={log(e,...i){t.config.logLevel<=t.config.LOG_LEVEL_VERBOSE&&console.log(`[${e}]`,...i)},warn(e,...i){t.config.logLevel<=t.config.LOG_LEVEL_WARNING&&console.warn(`[${e}]`,...i)},error(e,...i){t.config.logLevel<=t.config.LOG_LEVEL_ERROR&&console.error(`[${e}]`,...i)}};function ie(t,e,i){return t<e?e:t>i?i:t}function se(t,e){e.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))}))}))}function re(t){let e=t.lastIndexOf("/");return-1!=e&&(t=t.slice(0,e)),e=t.lastIndexOf("/"),-1!==e&&(t=t.slice(e+1)),t}function ae(t,e){const i=t.indexOf(e);-1!==i&&t.splice(i,1)}class oe extends e.EventEmitter{constructor(t,e){super(),this.expressions=[],this.reserveExpressionIndex=-1,this.destroyed=!1,this.settings=t,this.tag=`ExpressionManager(${t.name})`}init(){this.defaultExpression=this.createExpression({},void 0),this.currentExpression=this.defaultExpression,this.stopAllExpressions()}loadExpression(t){return __async(this,null,(function*(){if(!this.definitions[t])return void ee.warn(this.tag,`Undefined expression at [${t}]`);if(null===this.expressions[t])return void ee.warn(this.tag,`Cannot set expression at [${t}] because it's already failed in loading.`);if(this.expressions[t])return this.expressions[t];const e=yield this._loadExpression(t);return this.expressions[t]=e,e}))}_loadExpression(t){throw new Error("Not implemented.")}setRandomExpression(){return __async(this,null,(function*(){if(this.definitions.length){const t=[];for(let e=0;e<this.definitions.length;e++)null!==this.expressions[e]&&this.expressions[e]!==this.currentExpression&&e!==this.reserveExpressionIndex&&t.push(e);if(t.length){const e=Math.floor(Math.random()*t.length);return this.setExpression(e)}}return!1}))}resetExpression(){this._setExpression(this.defaultExpression)}restoreExpression(){this._setExpression(this.currentExpression)}setExpression(t){return __async(this,null,(function*(){if("number"!=typeof t&&(t=this.getExpressionIndex(t)),!(t>-1&&t<this.definitions.length))return!1;if(t===this.expressions.indexOf(this.currentExpression))return!1;this.reserveExpressionIndex=t;const e=yield this.loadExpression(t);return!(!e||this.reserveExpressionIndex!==t)&&(this.reserveExpressionIndex=-1,this.currentExpression=e,this._setExpression(e),!0)}))}update(t,e){return!this.isFinished()&&this.updateParameters(t,e)}destroy(){this.destroyed=!0,this.emit("destroy");this.definitions=void 0,this.expressions=void 0}}class ne{constructor(){this.targetX=0,this.targetY=0,this.x=0,this.y=0,this.vx=0,this.vy=0}focus(t,e,i=!1){this.targetX=ie(t,-1,1),this.targetY=ie(e,-1,1),i&&(this.x=this.targetX,this.y=this.targetY)}update(t){const e=this.targetX-this.x,i=this.targetY-this.y;if(Math.abs(e)<.01&&Math.abs(i)<.01)return;const s=Math.sqrt(__pow(e,2)+__pow(i,2)),r=5.333333333333333/(1e3/t);let a=r*(e/s)-this.vx,o=r*(i/s)-this.vy;const n=Math.sqrt(__pow(a,2)+__pow(o,2)),l=.006666666666666667*r*t;n>l&&(a*=l/n,o*=l/n),this.vx+=a,this.vy+=o;const h=Math.sqrt(__pow(this.vx,2)+__pow(this.vy,2)),u=.5*(Math.sqrt(__pow(l,2)+8*l*s)-l);h>u&&(this.vx*=u/h,this.vy*=u/h),this.x+=this.vx,this.y+=this.vy}}class le{constructor(t){this.json=t;let e=t.url;if("string"!=typeof e)throw new TypeError("The `url` field in settings JSON must be defined as a string.");this.url=e,this.name=re(this.url)}resolveURL(t){return e.url.resolve(this.url,t)}replaceFiles(t){this.moc=t(this.moc,"moc"),void 0!==this.pose&&(this.pose=t(this.pose,"pose")),void 0!==this.physics&&(this.physics=t(this.physics,"physics"));for(let e=0;e<this.textures.length;e++)this.textures[e]=t(this.textures[e],`textures[${e}]`)}getDefinedFiles(){const t=[];return this.replaceFiles((e=>(t.push(e),e))),t}validateFiles(t){const e=(e,i)=>{const s=this.resolveURL(e);if(!t.includes(s)){if(i)throw new Error(`File "${e}" is defined in settings, but doesn't exist in given files`);return!1}return!0};[this.moc,...this.textures].forEach((t=>e(t,!0)));return this.getDefinedFiles().filter((t=>e(t,!1)))}}var he=(t=>(t[t.NONE=0]="NONE",t[t.IDLE=1]="IDLE",t[t.NORMAL=2]="NORMAL",t[t.FORCE=3]="FORCE",t))(he||{});class ue{constructor(){this.debug=!1,this.currentPriority=0,this.reservePriority=0}reserve(t,e,i){if(i<=0)return ee.log(this.tag,"Cannot start a motion with MotionPriority.NONE."),!1;if(t===this.currentGroup&&e===this.currentIndex)return ee.log(this.tag,"Motion is already playing.",this.dump(t,e)),!1;if(t===this.reservedGroup&&e===this.reservedIndex||t===this.reservedIdleGroup&&e===this.reservedIdleIndex)return ee.log(this.tag,"Motion is already reserved.",this.dump(t,e)),!1;if(1===i){if(0!==this.currentPriority)return ee.log(this.tag,"Cannot start idle motion because another motion is playing.",this.dump(t,e)),!1;if(void 0!==this.reservedIdleGroup)return ee.log(this.tag,"Cannot start idle motion because another idle motion has reserved.",this.dump(t,e)),!1;this.setReservedIdle(t,e)}else{if(i<3){if(i<=this.currentPriority)return ee.log(this.tag,"Cannot start motion because another motion is playing as an equivalent or higher priority.",this.dump(t,e)),!1;if(i<=this.reservePriority)return ee.log(this.tag,"Cannot start motion because another motion has reserved as an equivalent or higher priority.",this.dump(t,e)),!1}this.setReserved(t,e,i)}return!0}start(t,e,i,s){if(1===s){if(this.setReservedIdle(void 0,void 0),0!==this.currentPriority)return ee.log(this.tag,"Cannot start idle motion because another motion is playing.",this.dump(e,i)),!1}else{if(e!==this.reservedGroup||i!==this.reservedIndex)return ee.log(this.tag,"Cannot start motion because another motion has taken the place.",this.dump(e,i)),!1;this.setReserved(void 0,void 0,0)}return!!t&&(this.setCurrent(e,i,s),!0)}complete(){this.setCurrent(void 0,void 0,0)}setCurrent(t,e,i){this.currentPriority=i,this.currentGroup=t,this.currentIndex=e}setReserved(t,e,i){this.reservePriority=i,this.reservedGroup=t,this.reservedIndex=e}setReservedIdle(t,e){this.reservedIdleGroup=t,this.reservedIdleIndex=e}isActive(t,e){return t===this.currentGroup&&e===this.currentIndex||t===this.reservedGroup&&e===this.reservedIndex||t===this.reservedIdleGroup&&e===this.reservedIdleIndex}reset(){this.setCurrent(void 0,void 0,0),this.setReserved(void 0,void 0,0),this.setReservedIdle(void 0,void 0)}shouldRequestIdleMotion(){return void 0===this.currentGroup&&void 0===this.reservedIdleGroup}shouldOverrideExpression(){return!t.config.preserveExpressionOnMotion&&this.currentPriority>1}dump(t,e){if(this.debug){return`\n<Requested> group = "${t}", index = ${e}\n`+["currentPriority","reservePriority","currentGroup","currentIndex","reservedGroup","reservedIndex","reservedIdleGroup","reservedIdleIndex"].map((t=>"["+t+"] "+this[t])).join("\n")}return""}}class de{static get volume(){return this._volume}static set volume(t){this._volume=(t>1?1:t<0?0:t)||0,this.audios.forEach((t=>t.volume=this._volume))}static add(t,e,i){const s=new Audio(t);return s.volume=this._volume,s.preload="auto",s.addEventListener("ended",(()=>{this.dispose(s),null==e||e()})),s.addEventListener("error",(e=>{this.dispose(s),ee.warn("SoundManager",`Error occurred on "${t}"`,e.error),null==i||i(e.error)})),this.audios.push(s),s}static play(t){return new Promise(((e,i)=>{var s;null==(s=t.play())||s.catch((e=>{t.dispatchEvent(new ErrorEvent("error",{error:e})),i(e)})),t.readyState===t.HAVE_ENOUGH_DATA?e():t.addEventListener("canplaythrough",e)}))}static dispose(t){t.pause(),t.removeAttribute("src"),ae(this.audios,t)}static destroy(){for(let t=this.audios.length-1;t>=0;t--)this.dispose(this.audios[t])}}de.audios=[],de._volume=.5;var ce=(t=>(t.ALL="ALL",t.IDLE="IDLE",t.NONE="NONE",t))(ce||{});class me extends e.EventEmitter{constructor(t,e){super(),this.motionGroups={},this.state=new ue,this.playing=!1,this.destroyed=!1,this.settings=t,this.tag=`MotionManager(${t.name})`,this.state.tag=this.tag}init(t){(null==t?void 0:t.idleMotionGroup)&&(this.groups.idle=t.idleMotionGroup),this.setupMotions(t),this.stopAllMotions()}setupMotions(t){for(const i of Object.keys(this.definitions))this.motionGroups[i]=[];let e;switch(null==t?void 0:t.motionPreload){case"NONE":return;case"ALL":e=Object.keys(this.definitions);break;default:e=[this.groups.idle]}for(const i of e)if(this.definitions[i])for(let t=0;t<this.definitions[i].length;t++)this.loadMotion(i,t).then()}loadMotion(t,e){return __async(this,null,(function*(){var i;if(!(null==(i=this.definitions[t])?void 0:i[e]))return void ee.warn(this.tag,`Undefined motion at "${t}"[${e}]`);if(null===this.motionGroups[t][e])return void ee.warn(this.tag,`Cannot start motion at "${t}"[${e}] because it's already failed in loading.`);if(this.motionGroups[t][e])return this.motionGroups[t][e];const s=yield this._loadMotion(t,e);return this.destroyed?void 0:(this.motionGroups[t][e]=null!=s?s:null,s)}))}_loadMotion(t,e){throw new Error("Not implemented.")}startMotion(e,i){return __async(this,arguments,(function*(e,i,s=he.NORMAL){var r;if(!this.state.reserve(e,i,s))return!1;const a=null==(r=this.definitions[e])?void 0:r[i];if(!a)return!1;let o;if(this.currentAudio&&de.dispose(this.currentAudio),t.config.sound){const t=this.getSoundFile(a);if(t)try{o=de.add(this.settings.resolveURL(t),(()=>this.currentAudio=void 0),(()=>this.currentAudio=void 0)),this.currentAudio=o}catch(l){ee.warn(this.tag,"Failed to create audio",t,l)}}const n=yield this.loadMotion(e,i);if(o){const e=de.play(o).catch((t=>ee.warn(this.tag,"Failed to play audio",o.src,t)));t.config.motionSync&&(yield e)}return this.state.start(n,e,i,s)?(ee.log(this.tag,"Start motion:",this.getMotionName(a)),this.emit("motionStart",e,i,o),this.state.shouldOverrideExpression()&&this.expressionManager&&this.expressionManager.resetExpression(),this.playing=!0,this._startMotion(n),!0):(o&&(de.dispose(o),this.currentAudio=void 0),!1)}))}startRandomMotion(t,e){return __async(this,null,(function*(){const i=this.definitions[t];if(null==i?void 0:i.length){const s=[];for(let e=0;e<i.length;e++)null===this.motionGroups[t][e]||this.state.isActive(t,e)||s.push(e);if(s.length){const i=Math.floor(Math.random()*s.length);return this.startMotion(t,s[i],e)}}return!1}))}stopAllMotions(){this._stopAllMotions(),this.state.reset(),this.currentAudio&&(de.dispose(this.currentAudio),this.currentAudio=void 0)}update(t,e){var i;return this.isFinished()&&(this.playing&&(this.playing=!1,this.emit("motionFinish")),this.state.shouldOverrideExpression()&&(null==(i=this.expressionManager)||i.restoreExpression()),this.state.complete(),this.state.shouldRequestIdleMotion()&&this.startRandomMotion(this.groups.idle,he.IDLE)),this.updateParameters(t,e)}destroy(){var t;this.destroyed=!0,this.emit("destroy"),this.stopAllMotions(),null==(t=this.expressionManager)||t.destroy();this.definitions=void 0,this.motionGroups=void 0}}const ge={x:0,y:0,width:0,height:0};class pe extends e.EventEmitter{constructor(){super(...arguments),this.focusController=new ne,this.originalWidth=0,this.originalHeight=0,this.width=0,this.height=0,this.localTransform=new i.Matrix,this.drawingMatrix=new i.Matrix,this.hitAreas={},this.textureFlipY=!1,this.viewport=[0,0,0,0],this.destroyed=!1}init(){this.setupLayout(),this.setupHitAreas()}setupLayout(){const t=this,e=this.getSize();t.originalWidth=e[0],t.originalHeight=e[1];const i=Object.assign({width:2,height:2},this.getLayout());this.localTransform.scale(i.width/2,i.height/2),t.width=this.originalWidth*this.localTransform.a,t.height=this.originalHeight*this.localTransform.d;const s=void 0!==i.x&&i.x-i.width/2||void 0!==i.centerX&&i.centerX||void 0!==i.left&&i.left-i.width/2||void 0!==i.right&&i.right+i.width/2||0,r=void 0!==i.y&&i.y-i.height/2||void 0!==i.centerY&&i.centerY||void 0!==i.top&&i.top-i.height/2||void 0!==i.bottom&&i.bottom+i.height/2||0;this.localTransform.translate(this.width*s,-this.height*r)}setupHitAreas(){const t=this.getHitAreaDefs().filter((t=>t.index>=0));for(const e of t)this.hitAreas[e.name]=e}hitTest(t,e){return Object.keys(this.hitAreas).filter((i=>this.isHit(i,t,e)))}isHit(t,e,i){if(!this.hitAreas[t])return!1;const s=this.hitAreas[t].index,r=this.getDrawableBounds(s,ge);return r.x<=e&&e<=r.x+r.width&&r.y<=i&&i<=r.y+r.height}getDrawableBounds(t,e){const i=this.getDrawableVertices(t);let s=i[0],r=i[0],a=i[1],o=i[1];for(let n=0;n<i.length;n+=2){const t=i[n],e=i[n+1];s=Math.min(t,s),r=Math.max(t,r),a=Math.min(e,a),o=Math.max(e,o)}return null!=e||(e={}),e.x=s,e.y=a,e.width=r-s,e.height=o-a,e}updateTransform(t){this.drawingMatrix.copyFrom(t).append(this.localTransform)}update(t,e){this.focusController.update(t)}destroy(){this.destroyed=!0,this.emit("destroy"),this.motionManager.destroy(),this.motionManager=void 0}}class _e extends Error{constructor(t,e,i,s=!1){super(t),this.url=e,this.status=i,this.aborted=s}}const fe=class{static createXHR(t,e,i,s,r){const a=new XMLHttpRequest;if(fe.allXhrSet.add(a),t){let e=fe.xhrMap.get(t);e?e.add(a):(e=new Set([a]),fe.xhrMap.set(t,e)),t.listeners("destroy").includes(fe.cancelXHRs)||t.once("destroy",fe.cancelXHRs)}return a.open("GET",e),a.responseType=i,a.onload=()=>{200!==a.status&&0!==a.status||!a.response?a.onerror():s(a.response)},a.onerror=()=>{ee.warn("XHRLoader",`Failed to load resource as ${a.responseType} (Status ${a.status}): ${e}`),r(new _e("Network error.",e,a.status))},a.onabort=()=>r(new _e("Aborted.",e,a.status,!0)),a.onloadend=()=>{var e;fe.allXhrSet.delete(a),t&&(null==(e=fe.xhrMap.get(t))||e.delete(a))},a}static cancelXHRs(){var t;null==(t=fe.xhrMap.get(this))||t.forEach((t=>{t.abort(),fe.allXhrSet.delete(t)})),fe.xhrMap.delete(this)}static release(){fe.allXhrSet.forEach((t=>t.abort())),fe.allXhrSet.clear(),fe.xhrMap=new WeakMap}};let ye=fe;function xe(t,e){let i=-1;return function s(r,a){if(a)return Promise.reject(a);if(r<=i)return Promise.reject(new Error("next() called multiple times"));i=r;const o=t[r];if(!o)return Promise.resolve();try{return Promise.resolve(o(e,s.bind(null,r+1)))}catch(n){return Promise.reject(n)}}(0)}ye.xhrMap=new WeakMap,ye.allXhrSet=new Set,ye.loader=(t,e)=>new Promise(((e,i)=>{fe.createXHR(t.target,t.settings?t.settings.resolveURL(t.url):t.url,t.type,(i=>{t.result=i,e()}),i).send()}));class ve{static load(t){return xe(this.middlewares,t).then((()=>t.result))}}ve.middlewares=[ye.loader];const Me="Live2DFactory",Pe=(t,e)=>__async(this,null,(function*(){if("string"==typeof t.source){const e=yield ve.load({url:t.source,type:"json",target:t.live2dModel});e.url=t.source,t.source=e,t.live2dModel.emit("settingsJSONLoaded",e)}return e()})),Ce=(t,e)=>__async(this,null,(function*(){if(t.source instanceof le)return t.settings=t.source,e();if("object"==typeof t.source){const i=Te.findRuntime(t.source);if(i){const s=i.createModelSettings(t.source);return t.settings=s,t.live2dModel.emit("settingsLoaded",s),e()}}throw new TypeError("Unknown settings format.")})),Se=(t,e)=>{if(t.settings){const i=Te.findRuntime(t.settings);if(i)return i.ready().then(e)}return e()},be=(t,e)=>__async(this,null,(function*(){yield e();const i=t.internalModel;if(i){const e=t.settings,s=Te.findRuntime(e);if(s){const r=[];e.pose&&r.push(ve.load({settings:e,url:e.pose,type:"json",target:i}).then((e=>{i.pose=s.createPose(i.coreModel,e),t.live2dModel.emit("poseLoaded",i.pose)})).catch((e=>{t.live2dModel.emit("poseLoadError",e),ee.warn(Me,"Failed to load pose.",e)}))),e.physics&&r.push(ve.load({settings:e,url:e.physics,type:"json",target:i}).then((e=>{i.physics=s.createPhysics(i.coreModel,e),t.live2dModel.emit("physicsLoaded",i.physics)})).catch((e=>{t.live2dModel.emit("physicsLoadError",e),ee.warn(Me,"Failed to load physics.",e)}))),r.length&&(yield Promise.all(r))}}})),we=(t,e)=>__async(this,null,(function*(){if(!t.settings)throw new TypeError("Missing settings.");{const i=t.live2dModel,r=t.settings.textures.map((e=>function(t,e={}){const i={resourceOptions:{crossorigin:e.crossOrigin}};if(s.Texture.fromURL)return s.Texture.fromURL(t,i).catch((t=>{if(t instanceof Error)throw t;const e=new Error("Texture loading error");throw e.event=t,e}));i.resourceOptions.autoLoad=!1;const r=s.Texture.from(t,i);if(r.baseTexture.valid)return Promise.resolve(r);const a=r.baseTexture.resource;return null!=a._live2d_load||(a._live2d_load=new Promise(((t,e)=>{const i=t=>{a.source.removeEventListener("error",i);const s=new Error("Texture loading error");s.event=t,e(s)};a.source.addEventListener("error",i),a.load().then((()=>t(r))).catch(i)}))),a._live2d_load}(t.settings.resolveURL(e),{crossOrigin:t.options.crossOrigin})));if(yield e(),!t.internalModel)throw new TypeError("Missing internal model.");i.internalModel=t.internalModel,i.emit("modelLoaded",t.internalModel),i.textures=yield Promise.all(r),i.emit("textureLoaded",i.textures)}})),Ie=(t,e)=>__async(this,null,(function*(){const i=t.settings;if(i instanceof le){const s=Te.findRuntime(i);if(!s)throw new TypeError("Unknown model settings.");const r=yield ve.load({settings:i,url:i.moc,type:"arraybuffer",target:t.live2dModel});if(!s.isValidMoc(r))throw new Error("Invalid moc data");const a=s.createCoreModel(r);return t.internalModel=s.createInternalModel(a,i,t.options),e()}throw new TypeError("Missing settings.")})),Le=class{static registerRuntime(t){Le.runtimes.push(t),Le.runtimes.sort(((t,e)=>e.version-t.version))}static findRuntime(t){for(const e of Le.runtimes)if(e.test(t))return e}static setupLive2DModel(t,e,i){return __async(this,null,(function*(){const s=new Promise((e=>t.once("textureLoaded",e))),r=new Promise((e=>t.once("modelLoaded",e))),a=Promise.all([s,r]).then((()=>t.emit("ready")));yield xe(Le.live2DModelMiddlewares,{live2dModel:t,source:e,options:i||{}}),yield a,t.emit("load")}))}static loadMotion(t,e,i){var s;const r=s=>t.emit("motionLoadError",e,i,s);try{const a=null==(s=t.definitions[e])?void 0:s[i];if(!a)return Promise.resolve(void 0);t.listeners("destroy").includes(Le.releaseTasks)||t.once("destroy",Le.releaseTasks);let o=Le.motionTasksMap.get(t);o||(o={},Le.motionTasksMap.set(t,o));let n=o[e];n||(n=[],o[e]=n);const l=t.getMotionFile(a);return null!=n[i]||(n[i]=ve.load({url:l,settings:t.settings,type:t.motionDataType,target:t}).then((s=>{var r;const o=null==(r=Le.motionTasksMap.get(t))?void 0:r[e];o&&delete o[i];const n=t.createMotion(s,e,a);return t.emit("motionLoaded",e,i,n),n})).catch((e=>{ee.warn(t.tag,`Failed to load motion: ${l}\n`,e),r(e)}))),n[i]}catch(a){ee.warn(t.tag,`Failed to load motion at "${e}"[${i}]\n`,a),r(a)}return Promise.resolve(void 0)}static loadExpression(t,e){const i=i=>t.emit("expressionLoadError",e,i);try{const s=t.definitions[e];if(!s)return Promise.resolve(void 0);t.listeners("destroy").includes(Le.releaseTasks)||t.once("destroy",Le.releaseTasks);let r=Le.expressionTasksMap.get(t);r||(r=[],Le.expressionTasksMap.set(t,r));const a=t.getExpressionFile(s);return null!=r[e]||(r[e]=ve.load({url:a,settings:t.settings,type:"json",target:t}).then((i=>{const r=Le.expressionTasksMap.get(t);r&&delete r[e];const a=t.createExpression(i,s);return t.emit("expressionLoaded",e,a),a})).catch((e=>{ee.warn(t.tag,`Failed to load expression: ${a}\n`,e),i(e)}))),r[e]}catch(s){ee.warn(t.tag,`Failed to load expression at [${e}]\n`,s),i(s)}return Promise.resolve(void 0)}static releaseTasks(){this instanceof me?Le.motionTasksMap.delete(this):Le.expressionTasksMap.delete(this)}};let Te=Le;Te.runtimes=[],Te.urlToJSON=Pe,Te.jsonToSettings=Ce,Te.waitUntilReady=Se,Te.setupOptionals=be,Te.setupEssentials=we,Te.createInternalModel=Ie,Te.live2DModelMiddlewares=[Pe,Ce,Se,be,we,Ie],Te.motionTasksMap=new WeakMap,Te.expressionTasksMap=new WeakMap,me.prototype._loadMotion=function(t,e){return Te.loadMotion(this,t,e)},oe.prototype._loadExpression=function(t){return Te.loadExpression(this,t)};class Ee{constructor(){this._autoInteract=!1}get autoInteract(){return this._autoInteract}set autoInteract(t){t!==this._autoInteract&&(t?this.on("pointertap",De,this):this.off("pointertap",De,this),this._autoInteract=t)}registerInteraction(t){t!==this.interactionManager&&(this.unregisterInteraction(),this._autoInteract&&t&&(this.interactionManager=t,t.on("pointermove",Fe,this)))}unregisterInteraction(){var t;this.interactionManager&&(null==(t=this.interactionManager)||t.off("pointermove",Fe,this),this.interactionManager=void 0)}}function De(t){this.tap(t.data.global.x,t.data.global.y)}function Fe(t){this.focus(t.data.global.x,t.data.global.y)}class Ae extends i.Transform{}const Be=new i.Point,Re=new i.Matrix;let Oe;class ke extends r.Container{constructor(t){super(),this.tag="Live2DModel(uninitialized)",this.textures=[],this.transform=new Ae,this.anchor=new i.ObservablePoint(this.onAnchorChange,this,0,0),this.glContextID=-1,this.elapsedTime=performance.now(),this.deltaTime=0,this._autoUpdate=!1,this.once("modelLoaded",(()=>this.init(t)))}static from(t,e){const i=new this(e);return Te.setupLive2DModel(i,t,e).then((()=>i))}static fromSync(t,e){const i=new this(e);return Te.setupLive2DModel(i,t,e).then(null==e?void 0:e.onLoad).catch(null==e?void 0:e.onError),i}static registerTicker(t){Oe=t}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){var e;Oe||(Oe=null==(e=window.PIXI)?void 0:e.Ticker),t?this._destroyed||(Oe?(Oe.shared.add(this.onTickerUpdate,this),this._autoUpdate=!0):ee.warn(this.tag,"No Ticker registered, please call Live2DModel.registerTicker(Ticker).")):(null==Oe||Oe.shared.remove(this.onTickerUpdate,this),this._autoUpdate=!1)}init(t){this.tag=`Live2DModel(${this.internalModel.settings.name})`;const e=Object.assign({autoUpdate:!0,autoInteract:!0},t);e.autoInteract&&(this.interactive=!0),this.autoInteract=e.autoInteract,this.autoUpdate=e.autoUpdate}onAnchorChange(){this.pivot.set(this.anchor.x*this.internalModel.width,this.anchor.y*this.internalModel.height)}motion(t,e,i){return void 0===e?this.internalModel.motionManager.startRandomMotion(t,i):this.internalModel.motionManager.startMotion(t,e,i)}expression(t){return this.internalModel.motionManager.expressionManager?void 0===t?this.internalModel.motionManager.expressionManager.setRandomExpression():this.internalModel.motionManager.expressionManager.setExpression(t):Promise.resolve(!1)}focus(t,e,i=!1){Be.x=t,Be.y=e,this.toModelPosition(Be,Be,!0);let s=Be.x/this.internalModel.originalWidth*2-1,r=Be.y/this.internalModel.originalHeight*2-1,a=Math.atan2(r,s);this.internalModel.focusController.focus(Math.cos(a),-Math.sin(a),i)}tap(t,e){const i=this.hitTest(t,e);i.length&&(ee.log(this.tag,"Hit",i),this.emit("hit",i))}hitTest(t,e){return Be.x=t,Be.y=e,this.toModelPosition(Be,Be),this.internalModel.hitTest(Be.x,Be.y)}toModelPosition(t,e=t.clone(),i){return i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.transform.worldTransform.applyInverse(t,e),this.internalModel.localTransform.applyInverse(e,e),e}containsPoint(t){return this.getBounds(!0).contains(t.x,t.y)}_calculateBounds(){this._bounds.addFrame(this.transform,0,0,this.internalModel.width,this.internalModel.height)}onTickerUpdate(){this.update(Oe.shared.deltaMS)}update(t){this.deltaTime+=t,this.elapsedTime+=t}_render(t){this.registerInteraction(t.plugins.interaction),t.batch.reset(),t.geometry.reset(),t.shader.reset(),t.state.reset();let e=!1;this.glContextID!==t.CONTEXT_UID&&(this.glContextID=t.CONTEXT_UID,this.internalModel.updateWebGLContext(t.gl,this.glContextID),e=!0);for(let r=0;r<this.textures.length;r++){const i=this.textures[r];i.valid&&(!e&&i.baseTexture._glTextures[this.glContextID]||(t.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL,this.internalModel.textureFlipY),t.texture.bind(i.baseTexture,0)),this.internalModel.bindTexture(r,i.baseTexture._glTextures[this.glContextID].texture),i.baseTexture.touched=t.textureGC.count)}const i=t.framebuffer.viewport;this.internalModel.viewport=[i.x,i.y,i.width,i.height],this.deltaTime&&(this.internalModel.update(this.deltaTime,this.elapsedTime),this.deltaTime=0);const s=Re.copyFrom(t.globalUniforms.uniforms.projectionMatrix).append(this.worldTransform);this.internalModel.updateTransform(s),this.internalModel.draw(t.gl),t.state.reset(),t.texture.reset()}destroy(t){this.emit("destroy"),this.autoUpdate=!1,this.unregisterInteraction(),(null==t?void 0:t.texture)&&this.textures.forEach((e=>e.destroy(t.baseTexture))),this.internalModel.destroy(),super.destroy(t)}}se(ke,[Ee]);const Ue=class{static resolveURL(t,e){var i;const s=null==(i=Ue.filesMap[t])?void 0:i[e];if(void 0===s)throw new Error("Cannot find this file from uploaded files: "+e);return s}static upload(t,i){return __async(this,null,(function*(){const s={};for(const r of i.getDefinedFiles()){const a=decodeURI(e.url.resolve(i.url,r)),o=t.find((t=>t.webkitRelativePath===a));o&&(s[r]=URL.createObjectURL(o))}Ue.filesMap[i._objectURL]=s}))}static createSettings(t){return __async(this,null,(function*(){const e=t.find((t=>t.name.endsWith("model.json")||t.name.endsWith("model3.json")));if(!e)throw new TypeError("Settings file not found");const i=yield Ue.readText(e),s=JSON.parse(i);s.url=e.webkitRelativePath;const r=Te.findRuntime(s);if(!r)throw new Error("Unknown settings JSON");const a=r.createModelSettings(s);return a._objectURL=URL.createObjectURL(e),a}))}static readText(t){return __async(this,null,(function*(){return new Promise(((e,i)=>{const s=new FileReader;s.onload=()=>e(s.result),s.onerror=i,s.readAsText(t,"utf8")}))}))}};let Ne=Ue;Ne.filesMap={},Ne.factory=(t,e)=>__async(this,null,(function*(){if(Array.isArray(t.source)&&t.source[0]instanceof File){const e=t.source;let i=e.settings;if(i){if(!i._objectURL)throw new Error('"_objectURL" must be specified in ModelSettings')}else i=yield Ue.createSettings(e);i.validateFiles(e.map((t=>encodeURI(t.webkitRelativePath)))),yield Ue.upload(e,i),i.resolveURL=function(t){return Ue.resolveURL(this._objectURL,t)},t.source=i,t.live2dModel.once("modelLoaded",(t=>{t.once("destroy",(function(){const t=this.settings._objectURL;if(URL.revokeObjectURL(t),Ue.filesMap[t])for(const e of Object.values(Ue.filesMap[t]))URL.revokeObjectURL(e);delete Ue.filesMap[t]}))}))}return e()})),Te.live2DModelMiddlewares.unshift(Ne.factory);const Ve=class{static unzip(t,i){return __async(this,null,(function*(){const s=yield Ve.getFilePaths(t),r=[];for(const t of i.getDefinedFiles()){const a=decodeURI(e.url.resolve(i.url,t));s.includes(a)&&r.push(a)}const a=yield Ve.getFiles(t,r);for(let t=0;t<a.length;t++){const e=r[t],i=a[t];Object.defineProperty(i,"webkitRelativePath",{value:e})}return a}))}static createSettings(t){return __async(this,null,(function*(){const e=(yield Ve.getFilePaths(t)).find((t=>t.endsWith("model.json")||t.endsWith("model3.json")));if(!e)throw new Error("Settings file not found");const i=yield Ve.readText(t,e);if(!i)throw new Error("Empty settings file: "+e);const s=JSON.parse(i);s.url=e;const r=Te.findRuntime(s);if(!r)throw new Error("Unknown settings JSON");return r.createModelSettings(s)}))}static zipReader(t,e){return __async(this,null,(function*(){throw new Error("Not implemented")}))}static getFilePaths(t){return __async(this,null,(function*(){throw new Error("Not implemented")}))}static getFiles(t,e){return __async(this,null,(function*(){throw new Error("Not implemented")}))}static readText(t,e){return __async(this,null,(function*(){throw new Error("Not implemented")}))}static releaseReader(t){}};let je=Ve;if(je.ZIP_PROTOCOL="zip://",je.uid=0,je.factory=(t,e)=>__async(this,null,(function*(){const i=t.source;let s,r,a;if("string"==typeof i&&(i.endsWith(".zip")||i.startsWith(Ve.ZIP_PROTOCOL))?(s=i.startsWith(Ve.ZIP_PROTOCOL)?i.slice(Ve.ZIP_PROTOCOL.length):i,r=yield ve.load({url:s,type:"blob",target:t.live2dModel})):Array.isArray(i)&&1===i.length&&i[0]instanceof File&&i[0].name.endsWith(".zip")&&(r=i[0],s=URL.createObjectURL(r),a=i.settings),r){if(!r.size)throw new Error("Empty zip file");const e=yield Ve.zipReader(r,s);a||(a=yield Ve.createSettings(e)),a._objectURL=Ve.ZIP_PROTOCOL+Ve.uid+"/"+a.url;const i=yield Ve.unzip(e,a);i.settings=a,t.source=i,s.startsWith("blob:")&&t.live2dModel.once("modelLoaded",(t=>{t.once("destroy",(function(){URL.revokeObjectURL(s)}))})),Ve.releaseReader(e)}return e()})),Te.live2DModelMiddlewares.unshift(je.factory),!window.Live2DCubismCore)throw new Error("Could not find Cubism 4 runtime. This plugin requires live2dcubismcore.js to be loaded.");class Ge extends oe{constructor(t,e){var i;super(t,e),this.queueManager=new st,this.definitions=null!=(i=t.expressions)?i:[],this.init()}isFinished(){return this.queueManager.isFinished()}getExpressionIndex(t){return this.definitions.findIndex((e=>e.Name===t))}getExpressionFile(t){return t.File}createExpression(t,e){return O.create(t)}_setExpression(t){return this.queueManager.startMotion(t,!1,performance.now())}stopAllExpressions(){this.queueManager.stopAllMotions()}updateParameters(t,e){return this.queueManager.doUpdateMotion(t,e)}}class Xe extends le{constructor(t){if(super(t),!Xe.isValidJSON(t))throw new TypeError("Invalid JSON.");Object.assign(this,new Ht(t))}static isValidJSON(t){var e;return!!(null==t?void 0:t.FileReferences)&&"string"==typeof t.FileReferences.Moc&&(null==(e=t.FileReferences.Textures)?void 0:e.length)>0&&t.FileReferences.Textures.every((t=>"string"==typeof t))}replaceFiles(t){if(super.replaceFiles(t),this.motions)for(const[e,i]of Object.entries(this.motions))for(let s=0;s<i.length;s++)i[s].File=t(i[s].File,`motions.${e}[${s}].File`),void 0!==i[s].Sound&&(i[s].Sound=t(i[s].Sound,`motions.${e}[${s}].Sound`));if(this.expressions)for(let e=0;e<this.expressions.length;e++)this.expressions[e].File=t(this.expressions[e].File,`expressions[${e}].File`)}}se(Xe,[Ht]);class ze extends me{constructor(t,e){var i;super(t,e),this.groups={idle:"Idle"},this.motionDataType="json",this.queueManager=new st,this.definitions=null!=(i=t.motions)?i:{},this.eyeBlinkIds=t.getEyeBlinkParameters()||[],this.lipSyncIds=t.getLipSyncParameters()||[],this.init(e)}init(t){super.init(t),this.settings.expressions&&(this.expressionManager=new Ge(this.settings,t)),this.queueManager.setEventCallback(((t,e,i)=>{this.emit("motion:"+e)}))}isFinished(){return this.queueManager.isFinished()}_startMotion(t,e){return t.setFinishedMotionHandler(e),this.queueManager.stopAllMotions(),this.queueManager.startMotion(t,!1,performance.now())}_stopAllMotions(){this.queueManager.stopAllMotions()}createMotion(e,i,s){const r=et.create(e),a=new H(e),o=(i===this.groups.idle?t.config.idleMotionFadingDuration:t.config.motionFadingDuration)/1e3;return void 0===a.getMotionFadeInTime()&&r.setFadeInTime(s.FadeInTime>0?s.FadeInTime:o),void 0===a.getMotionFadeOutTime()&&r.setFadeOutTime(s.FadeOutTime>0?s.FadeOutTime:o),r.setEffectIds(this.eyeBlinkIds,this.lipSyncIds),r}getMotionFile(t){return t.File}getMotionName(t){return t.File}getSoundFile(t){return t.Sound}updateParameters(t,e){return this.queueManager.doUpdateMotion(t,e)}destroy(){super.destroy(),this.queueManager.release(),this.queueManager=void 0}}const We=new p;class He extends pe{constructor(t,e,s){super(),this.lipSync=!0,this.breath=a.create(),this.renderer=new Wt,this.idParamAngleX=Yt,this.idParamAngleY=qt,this.idParamAngleZ=$t,this.idParamEyeBallX=Zt,this.idParamEyeBallY=Jt,this.idParamBodyAngleX=Qt,this.idParamBreath=Kt,this.pixelsPerUnit=1,this.centeringTransform=new i.Matrix,this.coreModel=t,this.settings=e,this.motionManager=new ze(e,s),this.init()}init(){var t;super.init(),(null==(t=this.settings.getEyeBlinkParameters())?void 0:t.length)>0&&(this.eyeBlink=l.create(this.settings)),this.breath.setParameters([new o(this.idParamAngleX,0,15,6.5345,.5),new o(this.idParamAngleY,0,8,3.5345,.5),new o(this.idParamAngleZ,0,10,5.5345,.5),new o(this.idParamBodyAngleX,0,4,15.5345,.5),new o(this.idParamBreath,0,.5,3.2345,.5)]),this.renderer.initialize(this.coreModel),this.renderer.setIsPremultipliedAlpha(!0)}getSize(){return[this.coreModel.getModel().canvasinfo.CanvasWidth,this.coreModel.getModel().canvasinfo.CanvasHeight]}getLayout(){const t={};if(this.settings.layout)for(const e of Object.keys(this.settings.layout)){t[e.charAt(0).toLowerCase()+e.slice(1)]=this.settings.layout[e]}return t}setupLayout(){super.setupLayout(),this.pixelsPerUnit=this.coreModel.getModel().canvasinfo.PixelsPerUnit,this.centeringTransform.scale(this.pixelsPerUnit,this.pixelsPerUnit).translate(this.originalWidth/2,this.originalHeight/2)}updateWebGLContext(t,e){this.renderer.firstDraw=!0,this.renderer._bufferData={vertex:null,uv:null,index:null},this.renderer.startUp(t),this.renderer._clippingManager._currentFrameNo=e,this.renderer._clippingManager._maskTexture=void 0,Ot.getInstance()._shaderSets=[]}bindTexture(t,e){this.renderer.bindTexture(t,e)}getHitAreaDefs(){var t,e;return null!=(e=null==(t=this.settings.hitAreas)?void 0:t.map((t=>({id:t.Id,name:t.Name,index:this.coreModel.getDrawableIndex(t.Id)}))))?e:[]}getDrawableIDs(){return this.coreModel.getDrawableIds()}getDrawableIndex(t){return this.coreModel.getDrawableIndex(t)}getDrawableVertices(t){if("string"==typeof t&&-1===(t=this.coreModel.getDrawableIndex(t)))throw new TypeError("Unable to find drawable ID: "+t);const e=this.coreModel.getDrawableVertices(t).slice();for(let i=0;i<e.length;i+=2)e[i]=e[i]*this.pixelsPerUnit+this.originalWidth/2,e[i+1]=-e[i+1]*this.pixelsPerUnit+this.originalHeight/2;return e}updateTransform(t){this.drawingMatrix.copyFrom(this.centeringTransform).prepend(this.localTransform).prepend(t)}update(t,e){var i,s,r,a;super.update(t,e),t/=1e3,e/=1e3;const o=this.coreModel;this.emit("beforeMotionUpdate");const n=this.motionManager.update(this.coreModel,e);this.emit("afterMotionUpdate"),o.saveParameters(),null==(i=this.motionManager.expressionManager)||i.update(o,e),n||null==(s=this.eyeBlink)||s.updateParameters(o,t),this.updateFocus(),this.updateNaturalMovements(1e3*t,1e3*e),null==(r=this.physics)||r.evaluate(o,t),null==(a=this.pose)||a.updateParameters(o,t),this.emit("beforeModelUpdate"),o.update(),o.loadParameters()}updateFocus(){this.coreModel.addParameterValueById(this.idParamEyeBallX,this.focusController.x),this.coreModel.addParameterValueById(this.idParamEyeBallY,this.focusController.y),this.coreModel.addParameterValueById(this.idParamAngleX,30*this.focusController.x),this.coreModel.addParameterValueById(this.idParamAngleY,30*this.focusController.y),this.coreModel.addParameterValueById(this.idParamAngleZ,this.focusController.x*this.focusController.y*-30),this.coreModel.addParameterValueById(this.idParamBodyAngleX,10*this.focusController.x)}updateNaturalMovements(t,e){var i;null==(i=this.breath)||i.updateParameters(this.coreModel,t/1e3)}draw(t){const e=this.drawingMatrix,i=We.getArray();i[0]=e.a,i[1]=e.b,i[4]=-e.c,i[5]=-e.d,i[12]=e.tx,i[13]=e.ty,this.renderer.setMvpMatrix(We),this.renderer.setRenderState(t.getParameter(t.FRAMEBUFFER_BINDING),this.viewport),this.renderer.drawModel()}destroy(){super.destroy(),this.renderer.release(),this.coreModel.release(),this.renderer=void 0,this.coreModel=void 0}}let Ye,qe=20;function $e(){return C.isStarted()?Promise.resolve():(null!=Ye||(Ye=new Promise(((t,e)=>{!function i(){try{Ze(),t()}catch(s){if(qe--,qe<0){const t=new Error("Failed to start up Cubism 4 framework.");return t.cause=s,void e(t)}ee.log("Cubism4","Startup failed, retrying 10ms later..."),setTimeout(i,10)}}()}))),Ye)}function Ze(t){t=Object.assign({logFunction:console.log,loggingLevel:S.LogLevel_Verbose},t),C.startUp(t),C.initialize()}function Je(){var t;null==(t=this.__moc)||t.release()}Te.registerRuntime({version:4,ready:$e,test:t=>t instanceof Xe||Xe.isValidJSON(t),isValidMoc(t){if(t.byteLength<4)return!1;const e=new Int8Array(t,0,4);return"MOC3"===String.fromCharCode(...e)},createModelSettings:t=>new Xe(t),createCoreModel(t){const e=F.create(t);try{const t=e.createModel();return t.__moc=e,t}catch(i){try{e.release()}catch(s){}throw i}},createInternalModel(t,e,i){const s=new He(t,e,i),r=t;return r.__moc&&(s.__moc=r.__moc,delete r.__moc,s.once("destroy",Je)),s},createPhysics:(t,e)=>gt.create(e),createPose:(t,e)=>u.create(e)}),t.ACubismMotion=R,t.BreathParameterData=o,t.CSM_ASSERT=b,t.Constant=P,t.Cubism4ExpressionManager=Ge,t.Cubism4InternalModel=He,t.Cubism4ModelSettings=Xe,t.Cubism4MotionManager=ze,t.CubismBlendMode=f,t.CubismBreath=a,t.CubismClippingContext=Rt,t.CubismClippingManager_WebGL=At,t.CubismDebug=E,t.CubismExpressionMotion=O,t.CubismEyeBlink=l,t.CubismFramework=C,t.CubismLogDebug=w,t.CubismLogError=T,t.CubismLogInfo=I,t.CubismLogVerbose=function(t,...e){E.print(S.LogLevel_Verbose,"[CSM][V]"+t+"\n",e)},t.CubismLogWarning=L,t.CubismMath=g,t.CubismMatrix44=p,t.CubismMoc=F,t.CubismModel=D,t.CubismModelSettingsJson=Ht,t.CubismModelUserData=B,t.CubismModelUserDataJson=A,t.CubismMotion=et,t.CubismMotionCurve=X,t.CubismMotionCurveTarget=N,t.CubismMotionData=W,t.CubismMotionEvent=z,t.CubismMotionJson=H,t.CubismMotionManager=class extends st{constructor(){super(),this._currentPriority=0,this._reservePriority=0}getCurrentPriority(){return this._currentPriority}getReservePriority(){return this._reservePriority}setReservePriority(t){this._reservePriority=t}startMotionPriority(t,e,i){return i==this._reservePriority&&(this._reservePriority=0),this._currentPriority=i,super.startMotion(t,e,this._userTimeSeconds)}updateMotion(t,e){this._userTimeSeconds+=e;const i=super.doUpdateMotion(t,this._userTimeSeconds);return this.isFinished()&&(this._currentPriority=0),i}reserveMotion(t){return!(t<=this._reservePriority||t<=this._currentPriority)&&(this._reservePriority=t,!0)}},t.CubismMotionPoint=j,t.CubismMotionQueueEntry=it,t.CubismMotionQueueManager=st,t.CubismMotionSegment=G,t.CubismMotionSegmentType=V,t.CubismPhysics=gt,t.CubismPhysicsInput=ht,t.CubismPhysicsJson=ct,t.CubismPhysicsOutput=ut,t.CubismPhysicsParticle=nt,t.CubismPhysicsRig=dt,t.CubismPhysicsSource=ot,t.CubismPhysicsSubRig=lt,t.CubismPhysicsTargetType=at,t.CubismPose=u,t.CubismRenderTextureResource=Bt,t.CubismRenderer=_,t.CubismRenderer_WebGL=Wt,t.CubismShader_WebGL=Ot,t.CubismTextureColor=y,t.CubismVector2=c,t.EvaluationOptionFlag=Y,t.ExpressionBlendType=U,t.ExpressionManager=oe,t.EyeState=h,t.FileLoader=Ne,t.FocusController=ne,t.HitAreaBody="Body",t.HitAreaHead="Head",t.HitAreaPrefix="HitArea",t.InteractionMixin=Ee,t.InternalModel=pe,t.InvalidMotionQueueEntryHandleValue=rt,t.LOGICAL_HEIGHT=2,t.LOGICAL_WIDTH=2,t.Live2DFactory=Te,t.Live2DLoader=ve,t.Live2DModel=ke,t.Live2DTransform=Ae,t.LogLevel=S,t.ModelSettings=le,t.MotionManager=me,t.MotionPreloadStrategy=ce,t.MotionPriority=he,t.MotionState=ue,t.Options=pt,t.ParamAngleX=Yt,t.ParamAngleY=qt,t.ParamAngleZ=$t,t.ParamArmLA="ParamArmLA",t.ParamArmLB="ParamArmLB",t.ParamArmRA="ParamArmRA",t.ParamArmRB="ParamArmRB",t.ParamBaseX="ParamBaseX",t.ParamBaseY="ParamBaseY",t.ParamBodyAngleX=Qt,t.ParamBodyAngleY="ParamBodyAngleY",t.ParamBodyAngleZ="ParamBodyAngleZ",t.ParamBreath=Kt,t.ParamBrowLAngle="ParamBrowLAngle",t.ParamBrowLForm="ParamBrowLForm",t.ParamBrowLX="ParamBrowLX",t.ParamBrowLY="ParamBrowLY",t.ParamBrowRAngle="ParamBrowRAngle",t.ParamBrowRForm="ParamBrowRForm",t.ParamBrowRX="ParamBrowRX",t.ParamBrowRY="ParamBrowRY",t.ParamBustX="ParamBustX",t.ParamBustY="ParamBustY",t.ParamCheek="ParamCheek",t.ParamEyeBallForm="ParamEyeBallForm",t.ParamEyeBallX=Zt,t.ParamEyeBallY=Jt,t.ParamEyeLOpen="ParamEyeLOpen",t.ParamEyeLSmile="ParamEyeLSmile",t.ParamEyeROpen="ParamEyeROpen",t.ParamEyeRSmile="ParamEyeRSmile",t.ParamHairBack="ParamHairBack",t.ParamHairFluffy="ParamHairFluffy",t.ParamHairFront="ParamHairFront",t.ParamHairSide="ParamHairSide",t.ParamHandL="ParamHandL",t.ParamHandR="ParamHandR",t.ParamMouthForm="ParamMouthForm",t.ParamMouthOpenY="ParamMouthOpenY",t.ParamNONE="NONE:",t.ParamShoulderY="ParamShoulderY",t.PartData=d,t.PartsArmLPrefix="Parts01ArmL_",t.PartsArmPrefix="Parts01Arm_",t.PartsArmRPrefix="Parts01ArmR_",t.PartsIdCore="Parts01Core",t.PhysicsJsonEffectiveForces=class{constructor(){this.gravity=new c(0,0),this.wind=new c(0,0)}},t.ShaderNames=kt,t.SoundManager=de,t.VERSION="0.4.0",t.XHRLoader=ye,t.ZipLoader=je,t.applyMixins=se,t.clamp=ie,t.copyArray=function(t,e,i,s,r){const a=e[s];Array.isArray(a)&&(i[r]=a.filter((e=>null!==e&&typeof e===t)))},t.copyProperty=function(t,e,i,s,r){const a=e[s];null!==a&&typeof a===t&&(i[r]=a)},t.csmRect=Tt,t.cubism4Ready=$e,t.folderName=re,t.fragmentShaderSrcMaskInvertedPremultipliedAlpha=zt,t.fragmentShaderSrcMaskPremultipliedAlpha=Xt,t.fragmentShaderSrcPremultipliedAlpha=Gt,t.fragmentShaderSrcsetupMask=Nt,t.logger=ee,t.rand=function(t,e){return Math.random()*(e-t)+t},t.remove=ae,t.startUpCubism4=Ze,t.vertexShaderSrc=Vt,t.vertexShaderSrcMasked=jt,t.vertexShaderSrcSetupMask=Ut,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
}

start();
})();
