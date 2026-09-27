(function () {
  const NAV = [
    { href: "index.html", key: "navHome", icon: "home" },
    { href: "series-trends.html", key: "navTrends", icon: "trends" },
    { href: "daily-missions.html", key: "navMissions", icon: "missions" },
    { href: "youtube-streaming.html", key: "navYoutube", icon: "youtube" },
    { href: "ig-engagement.html", key: "navIg", icon: "ig" }
  ];

  window.PS_I18N = {
    en: {
      navHome: "Home", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram", navIntro: "Intro",
      title: "PerthSanta × Domiia",
      subtitle: "Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "See what fans are loving",
      card1Btn: "Open →",
      card2Title: "Daily Missions",
      card2Desc: "Complete tasks, earn rewards",
      card2Btn: "Open →",
      card3Title: "YouTube Streaming",
      card3Desc: "Live streams & exclusive content",
      card3Btn: "Open →",
      card4Title: "Instagram Engagement",
      card4Desc: "Likes, comments & community",
      card4Btn: "Open →",
      alertText: "You have important missions not completed yet — tap to view",
      alertEmpty: "All important missions are done.",
      alertClose: "Close",
      backHome: "← Back to Home"
    },
    vi: {
      navHome: "Trang chủ", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram", navIntro: "Intro",
      title: "PerthSanta × Domiia",
      subtitle: "Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "Xem fan đang yêu thích gì",
      card1Btn: "Mở →",
      card2Title: "Daily Missions",
      card2Desc: "Làm nhiệm vụ, nhận phần thưởng",
      card2Btn: "Mở →",
      card3Title: "YouTube Streaming",
      card3Desc: "Stream & nội dung độc quyền",
      card3Btn: "Mở →",
      card4Title: "Instagram Engagement",
      card4Desc: "Like, comment & cộng đồng",
      card4Btn: "Mở →",
      alertText: "Có nhiệm vụ quan trọng bạn chưa hoàn thành — nhấn để xem",
      alertEmpty: "Đã hoàn thành tất cả nhiệm vụ quan trọng.",
      alertClose: "Đóng",
      backHome: "← Về trang chủ"
    },
    th: {
      navHome: "หน้าแรก", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram", navIntro: "Intro",
      title: "PerthSanta × Domiia",
      subtitle: "Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "ดูสิ่งที่แฟน ๆ กำลังรัก",
      card1Btn: "เปิด →",
      card2Title: "Daily Missions",
      card2Desc: "ทำภารกิจ รับรางวัล",
      card2Btn: "เปิด →",
      card3Title: "YouTube Streaming",
      card3Desc: "สตรีมและคอนเทนต์พิเศษ",
      card3Btn: "เปิด →",
      card4Title: "Instagram Engagement",
      card4Desc: "ไลก์ คอมเมนต์ และชุมชน",
      card4Btn: "เปิด →",
      alertText: "มีภารกิจสำคัญที่ยังไม่เสร็จ — แตะเพื่อดู",
      alertEmpty: "ภารกิจสำคัญครบแล้ว",
      alertClose: "ปิด",
      backHome: "← กลับหน้าแรก"
    },
    my: {
      navHome: "ပင်မ", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram", navIntro: "Intro",
      title: "PerthSanta × Domiia",
      subtitle: "Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "ပရိသတ်ကြိုက်တာတွေ",
      card1Btn: "ဖွင့် →",
      card2Title: "Daily Missions",
      card2Desc: "Mission လုပ်၊ ဆုယူ",
      card2Btn: "ဖွင့် →",
      card3Title: "YouTube Streaming",
      card3Desc: "Stream နှင့် အထူး content",
      card3Btn: "ဖွင့် →",
      card4Title: "Instagram Engagement",
      card4Desc: "Like, comment နှင့် community",
      card4Btn: "ဖွင့် →",
      alertText: "အရေးကြီး mission မပြီးသေးပါ — နှိပ်ပြီးကြည့်ပါ",
      alertEmpty: "အရေးကြီး mission အားလုံး ပြီးပါပြီ",
      alertClose: "ပိတ်",
      backHome: "← ပင်မသို့"
    }
  };

  function pageName() {
    const p = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return p || "index.html";
  }

  function currentLang() {
    const saved = localStorage.getItem("ps_hub_lang");
    return saved && window.PS_I18N[saved] ? saved : "en";
  }

  window.psApplyLang = function (lang) {
    const t = window.PS_I18N[lang] || window.PS_I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n");
      if (t[k]) el.innerText = t[k];
    });
    const alertLabel = document.getElementById("ps-alert-label");
    if (alertLabel) alertLabel.innerText = t.alertText || window.PS_I18N.en.alertText;
    const closeBtn = document.getElementById("ps-alert-close");
    if (closeBtn) closeBtn.innerText = t.alertClose || "Close";
  };

  window.psChangeLanguage = function () {
    const lang = document.getElementById("language").value;
    localStorage.setItem("ps_hub_lang", lang);
    window.psApplyLang(lang);
  };

  const here = pageName();
  const lang = currentLang();
  const t = window.PS_I18N[lang];

  function navIcon(name, active) {
    const c = active ? "#f87171" : "#a1a1aa";
    const icons = {
      home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="' + c + '" stroke-width="2"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>',
      trends: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="' + c + '" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      missions: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="' + c + '" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="' + c + '"/></svg>',
      youtube: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="' + c + '" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="' + c + '" stroke="none"/></svg>',
      ig: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="' + c + '" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="' + c + '" stroke="none"/></svg>'
    };
    return icons[name] || "";
  }

    // Load Montserrat (weights 400–700)
  if (!document.getElementById("ps-font-montserrat")) {
    var fontLink = document.createElement("link");
    fontLink.id = "ps-font-montserrat";
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
    document.head.appendChild(fontLink);
  }

    // Load Cormorant Garamond (weights 400–700)
  if (!document.getElementById("ps-font-cormorant")) {
    var fontLink = document.createElement("link");
    fontLink.id = "ps-font-cormorant";
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap";
    document.head.appendChild(fontLink);
  }

    // Font: Inter (clean UI) + light serif only for hero titles via .ps-display
  if (!document.getElementById("ps-font-inter")) {
    var fontLink = document.createElement("link");
    fontLink.id = "ps-font-inter";
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:wght@600;700&display=swap";
    document.head.appendChild(fontLink);
  }

  const style = document.createElement("style");
  style.textContent =
    "html{font-size:16px}" +
    "body{font-family:Inter,system-ui,-apple-system,sans-serif;font-size:1rem;line-height:1.5;-webkit-font-smoothing:antialiased}" +
    ".ps-display{font-family:'Cormorant Garamond',Georgia,serif;letter-spacing:0.01em}" +
    "@keyframes ps-blink{0%,100%{opacity:1}50%{opacity:.45}}" +
    ".ps-alert-blink{animation:ps-blink 1.2s ease-in-out infinite}" +
    "#ps-alert-panel{max-height:0;overflow:hidden;transition:max-height .35s ease}" +
    "#ps-alert-panel.open{max-height:420px;overflow-y:auto}" +
    "body.ps-has-tabbar{padding-bottom:72px}" +
    "@media (min-width:768px){body.ps-has-tabbar{padding-bottom:0}}";
  document.head.appendChild(style);

  const desktopNav = NAV.map(function (n) {
    const active = here === n.href || (here === "" && n.href === "index.html");
    const cls = active
      ? "px-3 py-1.5 rounded-full text-sm bg-red-600 text-white font-medium"
      : "px-3 py-1.5 rounded-full text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 font-medium";
    return '<a href="' + n.href + '" class="' + cls + '" data-i18n="' + n.key + '">' + t[n.key] + "</a>";
  }).join("");

  const bar = document.createElement("header");
  bar.className = "sticky top-0 z-50 border-b border-zinc-800/80 bg-black/90 backdrop-blur-md";
   bar.innerHTML =
    '<div class="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center gap-2 sm:gap-3">' +
      '<a href="index.html" class="flex items-center gap-2.5 min-w-0 shrink-0">' +
        '<img src="images/logo.png" alt="Logo" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover bg-zinc-800 border border-zinc-700" onerror="this.style.display=\'none\'">' +
        '<span class="font-bold tracking-tight text-white text-base sm:text-lg">PerthSanta</span>' +
      "</a>" +
      '<div class="flex-1"></div>' +
      '<nav class="hidden md:flex flex-wrap items-center gap-1">' + desktopNav + "</nav>" +
      '<a href="introduce.html" class="px-3 py-1.5 rounded-full text-sm border border-zinc-600 text-zinc-200 hover:border-red-500 hover:text-white font-medium" data-i18n="navIntro">' +
        (t.navIntro || "Intro") +
      "</a>" +
      /* ===== Nút Missions nhỏ (cỡ EN) ===== */
      '<div id="ps-alert-wrap" class="hidden relative">' +
        '<button type="button" id="ps-alert-btn" class="ps-alert-blink flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm border border-red-700 bg-red-950 text-red-200 hover:bg-red-900 hover:text-white font-medium cursor-pointer transition">' +
          '<span class="inline-block w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>' +
          '<span class="hidden sm:inline">Missions</span>' +
          '<span id="ps-alert-count" class="px-1.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold leading-none">0</span>' +
        "</button>" +
        '<div id="ps-alert-panel" class="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-xl border border-zinc-700 bg-zinc-950 shadow-xl z-50 hidden">' +
          '<div class="px-3 py-2.5">' +
            '<div class="flex items-center justify-between mb-2">' +
              '<p class="text-xs text-gray-400">Unfinished missions</p>' +
              '<button type="button" id="ps-alert-close" class="text-xs text-red-400 hover:text-red-300">' + (t.alertClose || "Close") + "</button>" +
            "</div>" +
            '<ul id="ps-alert-list" class="space-y-1.5 max-h-64 overflow-y-auto"></ul>' +
          "</div>" +
        "</div>" +
      "</div>" +
      /* ===== EN ===== */
      '<select id="language" onchange="psChangeLanguage()" class="bg-zinc-950 border border-zinc-600 text-white text-sm rounded-full px-2.5 py-1.5 font-medium">' +
        '<option value="en">EN</option>' +
        '<option value="vi">VI</option>' +
        '<option value="th">TH</option>' +
        '<option value="my">MY</option>' +
      "</select>" +
    "</div>";
  document.body.insertBefore(bar, document.body.firstChild);
  document.getElementById("language").value = lang;
  window.psApplyLang(lang);

  document.body.classList.add("ps-has-tabbar");
  const tabbar = document.createElement("nav");
  tabbar.className = "md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-zinc-800 bg-black/95 backdrop-blur-md";
  tabbar.innerHTML =
    '<div class="grid grid-cols-5 h-16 max-w-lg mx-auto">' +
    NAV.map(function (n) {
      const active = here === n.href || (here === "" && n.href === "index.html");
      const labelCls = active ? "text-red-400" : "text-zinc-500";
      return (
        '<a href="' + n.href + '" class="flex flex-col items-center justify-center gap-0.5 ' + labelCls + '">' +
          navIcon(n.icon, active) +
          '<span class="text-[10px] font-medium leading-tight" data-i18n="' + n.key + '">' + t[n.key] + "</span>" +
        "</a>"
      );
    }).join("") +
    "</div>";
  document.body.appendChild(tabbar);

  var foot = document.createElement("footer");
  foot.className = "text-center text-sm text-gray-500 py-10 px-4";
  foot.innerHTML =
    '© 2026 PerthSanta Engagement Hub · Made with love by ' +
    '<a href="https://x.com/itsmaeta" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Eira</a>. ' +
    '<a href="https://x.com/comeforlove_ps" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Lubiichan</a>. ' +
    '<a href="https://x.com/NganVt2386624" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Ngân</a>. ' +
    '<a href="https://x.com/kimm221020" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Kiim</a>. ' +
    '<a href="https://x.com/Babedoria" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Doria</a>';
  document.body.appendChild(foot);

  function parseTarget(v) {
    if (v == null) return 0;
    return parseInt(String(v).replace(/,/g, ""), 10) || 0;
  }

  function loadYtConfig() {
    return new Promise(function (resolve) {
      if (window.YOUTUBE_API_KEY) {
        resolve(window.YOUTUBE_API_KEY);
        return;
      }
      var s = document.createElement("script");
      s.src = "yt-config.js";
      s.onload = function () { resolve(window.YOUTUBE_API_KEY || ""); };
      s.onerror = function () { resolve(""); };
      document.head.appendChild(s);
    });
  }

  async function fetchYtViews(videoIds, apiKey) {
    var map = {};
    if (!apiKey || !videoIds.length) return map;
    try {
      var ids = videoIds.slice(0, 50).join(",");
      var res = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + ids + "&key=" + apiKey
      );
      var json = await res.json();
      (json.items || []).forEach(function (item) {
        map[item.id] = parseInt((item.statistics && item.statistics.viewCount) || "0", 10) || 0;
      });
    } catch (e) {}
    return map;
  }

  async function getUnfinishedMissions(data) {
    var list = Array.isArray(data.missions) ? data.missions.slice() : [];
    var unfinished = list.filter(function (m) {
      return m && m.done !== true && m.done !== "true";
    });
    var ytOnes = unfinished.filter(function (m) {
      return m.type === "youtube" && m.videoId && parseTarget(m.target) > 0;
    });
    if (ytOnes.length) {
      var key = await loadYtConfig();
      var viewsMap = await fetchYtViews(
        ytOnes.map(function (m) { return m.videoId; }),
        key
      );
      unfinished = unfinished.filter(function (m) {
        if (m.type !== "youtube" || !m.videoId) return true;
        var target = parseTarget(m.target);
        if (!target) return true;
        var views = viewsMap[m.videoId];
        if (views == null) return true;
        return views < target;
      });
    }
    return unfinished;
  }

  function renderAlert(missions) {
    var wrap = document.getElementById("ps-alert-wrap");
    var countEl = document.getElementById("ps-alert-count");
    var listEl = document.getElementById("ps-alert-list");
    var panel = document.getElementById("ps-alert-panel");
    if (!wrap || !listEl) return;
    if (!missions.length) {
      wrap.classList.add("hidden");
      panel.classList.remove("open");
      return;
    }
    wrap.classList.remove("hidden");
    countEl.innerText = String(missions.length);
    listEl.innerHTML = "";
    missions.forEach(function (m) {
      var li = document.createElement("li");
      var href = m.page || "index.html";
      var title = m.title || m.id || "Mission";
      var tag = m.type ? '<span class="text-xs text-gray-500 uppercase">' + m.type + "</span>" : "";
      li.innerHTML =
        '<a href="' + href + '" class="flex items-center justify-between gap-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:border-red-600 hover:bg-zinc-800 px-4 py-3 transition">' +
          '<span class="min-w-0"><span class="block font-medium text-white text-sm sm:text-base truncate">' + title + "</span>" + tag + "</span>" +
          '<span class="text-red-400 text-sm shrink-0">Go →</span></a>';
      listEl.appendChild(li);
    });
  }

  function setupAlertToggle() {
    var btn = document.getElementById("ps-alert-btn");
    var panel = document.getElementById("ps-alert-panel");
    var closeBtn = document.getElementById("ps-alert-close");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () { panel.classList.toggle("open"); });
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        panel.classList.remove("open");
      });
    }
  }

  setupAlertToggle();

  fetch("data.json?t=" + Date.now())
    .then(function (r) { return r.json(); })
    .then(function (data) { return getUnfinishedMissions(data || {}); })
    .then(function (missions) { renderAlert(missions); })
    .catch(function () {});
})();
