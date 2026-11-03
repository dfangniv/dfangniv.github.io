/* =========================================================
   Daisy Fang — Portfolio · 动效脚本
   M1 标题逐行上滑 · M2 滚动淡入 · M3 分割线生长 · M4 目录悬停+图片跟随
   ========================================================= */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // M1：页面加载后，标题逐行滑上来
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    });
  });

  // M2 + M3：元素滚动到屏幕里时再播放
  var targets = document.querySelectorAll('[data-fade], .index');
  function show(el) {
    el.classList.add('in');
    if (el.classList.contains('index')) {
      // 入场动画结束后，去掉延迟，让悬停反应更快
      setTimeout(function () { el.classList.add('settled'); }, 1800);
    }
  }
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { show(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // M4：鼠标划过项目目录时，图片跟着鼠标浮出来（只在有鼠标的设备上）
  var index = document.querySelector('.index');
  var peek = document.querySelector('.peek');
  if (index && peek && window.matchMedia('(hover: hover)').matches) {
    var img = peek.querySelector('img');
    var tx = 0, ty = 0, x = 0, y = 0, raf = null;

    function follow() {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      peek.style.left = x + 'px';
      peek.style.top = y + 'px';
      raf = (Math.abs(tx - x) + Math.abs(ty - y) > 0.3) ? requestAnimationFrame(follow) : null;
    }

    index.addEventListener('mousemove', function (e) {
      var r = index.getBoundingClientRect();
      tx = e.clientX - r.left + 140;
      ty = e.clientY - r.top;
      if (!peek.classList.contains('on')) { x = tx; y = ty; }
      if (!raf) raf = requestAnimationFrame(follow);
    });

    index.querySelectorAll('.row').forEach(function (row) {
      row.addEventListener('mouseenter', function () {
        img.src = row.dataset.img;
        img.alt = row.dataset.alt || '';
        peek.classList.add('on');
      });
    });
    index.addEventListener('mouseleave', function () { peek.classList.remove('on'); });
  }

  // 复制邮箱按钮
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      var done = function () {
        var old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1600);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done).catch(function () {});
      }
    });
  });
})();
