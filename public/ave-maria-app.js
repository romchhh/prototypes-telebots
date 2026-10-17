(function () {
  let PRODUCTS = [];

  const siteBar = document.getElementById('site-bar');
  const productsGrid = document.getElementById('products-grid');
  const homeProductsGrid = document.getElementById('home-products-grid');
  const mobileMenu = document.getElementById('mobile-menu');
  const cartDrawer = document.getElementById('cart-drawer');
  const wishDrawer = document.getElementById('wish-drawer');

  let cart = [];
  let wishlist = [];
  let currentProductIndex = 0;
  let currentImageIndex = 0;
  let selectedVolume = null;
  let catalogFilter = 'all';

  try {
    const saved = JSON.parse(localStorage.getItem('am-cart') || '[]');
    if (Array.isArray(saved)) cart = saved;
    const savedW = JSON.parse(localStorage.getItem('am-wish') || '[]');
    if (Array.isArray(savedW)) wishlist = savedW;
  } catch (_) {}

  function persist() {
    localStorage.setItem('am-cart', JSON.stringify(cart));
    localStorage.setItem('am-wish', JSON.stringify(wishlist));
    updateBadges();
    syncWishButtons();
  }

  function updateBadges() {
    const c = document.getElementById('cart-count');
    const w = document.getElementById('wish-count');
    if (c) {
      c.textContent = cart.length;
      c.hidden = cart.length === 0;
    }
    if (w) {
      w.textContent = wishlist.length;
      w.hidden = wishlist.length === 0;
    }
  }

  function isWished(id) {
    return wishlist.some((x) => x.id === id);
  }

  function syncWishButtons() {
    document.querySelectorAll('[data-wish-id]').forEach((btn) => {
      const on = isWished(btn.dataset.wishId);
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (btn.classList.contains('pdp-wishlist-link')) {
        btn.textContent = on ? 'У вішлисті' : 'Додати у вішлист';
      }
    });
  }

  function toggleWish(id, e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const i = wishlist.findIndex((x) => x.id === id);
    if (i >= 0) wishlist.splice(i, 1);
    else wishlist.push({ id: p.id, name: p.name, price: p.price, priceNum: p.priceNum, image: p.images[0] });
    persist();
    renderWishDrawer();
  }

  function addToCart(id, volume) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const vol = volume || (p.volumeOptions && p.volumeOptions[0]) || p.volume || '1 шт';
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      priceNum: p.priceNum,
      volume: vol,
      image: p.images[0],
    });
    persist();
    renderCartDrawer();
    openCart();
  }

  function removeCart(index) {
    cart.splice(index, 1);
    persist();
    renderCartDrawer();
  }

  function cartTotal() {
    return cart.reduce((s, i) => s + i.priceNum, 0);
  }

  function formatMoney(n) {
    return n.toLocaleString('uk-UA') + ' ₴';
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatCardPrice(p) {
    if (typeof p.priceNum === 'number') {
      return p.priceNum.toLocaleString('uk-UA') + ' ₴';
    }
    return String(p.price || '').trim();
  }

  function starsMarkup(rating) {
    const full = Math.round(Number(rating) || 5);
    return '<span class="stars" aria-hidden="true">' + '★'.repeat(full) + '☆'.repeat(Math.max(0, 5 - full)) + '</span>';
  }

  function productCardMarkup(p) {
    const badges = [];
    if (p.badge) badges.push(`<span class="badge badge--promo">${escapeHtml(p.badge)}</span>`);
    if (p.isNew) badges.push('<span class="badge badge--new">NEW</span>');
    const old =
      p.oldPrice
        ? `<span class="product-old">${escapeHtml(p.oldPrice)}</span>`
        : '';
    return `
    <article class="product">
      <a href="#product/${escapeHtml(p.id)}" class="product-link" data-nav="product" data-product="${escapeHtml(p.id)}">
        <div class="product-img">
          ${badges.length ? `<div class="product-badges">${badges.join('')}</div>` : ''}
          <img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(p.name)}" loading="lazy">
          <button class="wish" type="button" data-wish-id="${escapeHtml(p.id)}" aria-label="У вішлист"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.2l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 11.38L12 20.2z"/></svg></button>
        </div>
        <div class="product-info">
          <div class="product-rating">${starsMarkup(p.rating)} <span>(${escapeHtml(String(p.reviews || 0))})</span></div>
          <div class="product-name">${escapeHtml(p.name)}</div>
          <p class="product-desc">${escapeHtml(p.description)}</p>
          <div class="product-meta">
            <div class="product-price">${old}${escapeHtml(formatCardPrice(p))}</div>
          </div>
        </div>
      </a>
      <button class="product-cart" type="button" data-add-cart="${escapeHtml(p.id)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h15l-1.4 8.2a2 2 0 01-2 1.8H9.2a2 2 0 01-2-1.7L5.2 4H3"/><circle cx="10" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></svg>
        До кошика
      </button>
    </article>`;
  }

  function bindWishButtons(root) {
    if (!root) return;
    root.querySelectorAll('[data-wish-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => toggleWish(btn.dataset.wishId, e));
    });
    syncWishButtons();
  }

  function bindAddCartButtons(root) {
    if (!root) return;
    root.querySelectorAll('[data-add-cart]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(btn.dataset.addCart);
      });
    });
  }

  function bindProductNav(root) {
    if (!root) return;
    root.querySelectorAll('[data-nav="product"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-wish-id], [data-add-cart]')) return;
        e.preventDefault();
        const id = el.getAttribute('data-product');
        const idx = id ? PRODUCTS.findIndex((p) => p.id === id) : -1;
        if (idx >= 0) currentProductIndex = idx;
        location.hash = 'product/' + PRODUCTS[currentProductIndex].id;
      });
    });
  }

  function bindProductCards(root) {
    bindWishButtons(root);
    bindAddCartButtons(root);
    bindProductNav(root);
  }

  function filteredProducts() {
    if (catalogFilter === 'all') return PRODUCTS;
    if (catalogFilter === 'new') return PRODUCTS.filter((p) => p.isNew);
    if (catalogFilter === 'sale') return PRODUCTS.filter((p) => p.badge === 'SALE' || p.oldPrice);
    return PRODUCTS.filter((p) => p.category === catalogFilter);
  }

  function renderHomeFeatured() {
    if (!homeProductsGrid) return;
    homeProductsGrid.innerHTML = PRODUCTS.slice(0, 8).map((p) => productCardMarkup(p)).join('');
    bindProductCards(homeProductsGrid);
  }

  function renderCatalog() {
    if (!productsGrid) return;
    const list = filteredProducts();
    productsGrid.innerHTML = list.map((p) => productCardMarkup(p)).join('');
    bindProductCards(productsGrid);
    const count = document.getElementById('cat-count');
    if (count) {
      count.innerHTML = `Показано <strong>${list.length}</strong> товарів`;
      count.hidden = false;
    }
    document.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.filter === catalogFilter);
    });
  }

  function renderCartDrawer() {
    const list = document.getElementById('cart-list');
    const sub = document.getElementById('cart-subtotal');
    if (!list || !sub) return;
    if (!cart.length) {
      list.innerHTML = '<p class="panel-empty">Кошик порожній</p>';
      sub.textContent = '0 ₴';
      return;
    }
    list.innerHTML = cart
      .map(
        (item, i) => `
      <div class="panel-item">
        <img src="${escapeHtml(item.image)}" alt="" width="64" height="64">
        <div class="panel-item-body">
          <p class="panel-item-name">${escapeHtml(item.name)}</p>
          <p class="panel-item-meta">${escapeHtml(item.volume)} · ${escapeHtml(item.price)}</p>
        </div>
        <button type="button" class="panel-remove" data-cart-remove="${i}" aria-label="Видалити">×</button>
      </div>`
      )
      .join('');
    sub.textContent = formatMoney(cartTotal());
    list.querySelectorAll('[data-cart-remove]').forEach((btn) => {
      btn.addEventListener('click', () => removeCart(Number(btn.dataset.cartRemove)));
    });
  }

  function renderWishDrawer() {
    const list = document.getElementById('wish-list');
    if (!list) return;
    if (!wishlist.length) {
      list.innerHTML = '<p class="panel-empty">Вішлист порожній</p>';
      return;
    }
    list.innerHTML = wishlist
      .map(
        (item) => `
      <div class="panel-item">
        <img src="${escapeHtml(item.image)}" alt="" width="64" height="64">
        <div class="panel-item-body">
          <p class="panel-item-name">${escapeHtml(item.name)}</p>
          <p class="panel-item-meta">${escapeHtml(item.price)}</p>
          <button type="button" class="panel-add" data-wish-to-cart="${escapeHtml(item.id)}">У кошик</button>
        </div>
        <button type="button" class="panel-remove" data-wish-remove="${escapeHtml(item.id)}" aria-label="Прибрати">×</button>
      </div>`
      )
      .join('');
    list.querySelectorAll('[data-wish-remove]').forEach((btn) => {
      btn.addEventListener('click', () => toggleWish(btn.dataset.wishRemove));
    });
    list.querySelectorAll('[data-wish-to-cart]').forEach((btn) => {
      btn.addEventListener('click', () => addToCart(btn.dataset.wishToCart));
    });
  }

  function openCart() {
    cartDrawer?.classList.add('open');
    document.getElementById('panel-backdrop')?.classList.add('open');
    renderCartDrawer();
  }

  function openWish() {
    wishDrawer?.classList.add('open');
    document.getElementById('panel-backdrop')?.classList.add('open');
    renderWishDrawer();
  }

  function closePanels() {
    cartDrawer?.classList.remove('open');
    wishDrawer?.classList.remove('open');
    document.getElementById('panel-backdrop')?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const open = mobileMenu?.classList.toggle('open');
    document.body.classList.toggle('menu-open', !!open);
    if (open) {
      cartDrawer?.classList.remove('open');
      wishDrawer?.classList.remove('open');
    }
  }

  let stuckState = false;

  function updateStuck() {
    const onHome = document.body.classList.contains('home-on');
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const solid =
      document.body.classList.contains('catalog-on') || document.body.classList.contains('product-on');
    let next = false;

    if (onHome) {
      const hero = document.querySelector('.home-hero-stage');
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      // Hysteresis: stick later, unstick earlier — no flicker at the edge
      if (stuckState) {
        next = scrollTop > 24 || heroBottom < 96;
      } else {
        next = scrollTop > 56 || heroBottom < 64;
      }
    } else {
      next = solid || scrollTop > 8;
    }

    if (next !== stuckState) {
      stuckState = next;
      siteBar?.classList.toggle('is-stuck', stuckState);
    }
  }

  function renderThumbs(p) {
    const thumbs = document.getElementById('pdp-thumbs');
    if (!thumbs) return;
    if (!p.images || p.images.length < 2) {
      thumbs.innerHTML = '';
      thumbs.hidden = true;
      return;
    }
    thumbs.hidden = false;
    thumbs.innerHTML = p.images
      .map(
        (src, i) => `
      <button type="button" class="pdp-thumb${i === currentImageIndex ? ' is-active' : ''}" data-thumb="${i}" aria-label="Фото ${i + 1}">
        <img src="${escapeHtml(src)}" alt="">
      </button>`
      )
      .join('');
  }

  function renderRelated(index) {
    const grid = document.getElementById('pdp-related-grid');
    if (!grid) return;
    const related = PRODUCTS.filter((_, i) => i !== index).slice(0, 4);
    grid.innerHTML = related.map((p) => productCardMarkup(p)).join('');
    bindProductCards(grid);
  }

  function renderProduct(index) {
    const p = PRODUCTS[index];
    if (!p) return;
    currentProductIndex = index;
    currentImageIndex = 0;
    selectedVolume = null;

    document.getElementById('pdp-title').textContent = p.name;
    document.getElementById('pdp-crumb-name').textContent = p.name;
    document.getElementById('pdp-crumb-cat').textContent = p.category || 'Каталог';
    document.getElementById('pdp-subtitle').textContent = p.description || '';
    document.getElementById('pdp-price').textContent = formatCardPrice(p);

    const ratingEl = document.getElementById('pdp-rating');
    if (ratingEl) {
      ratingEl.innerHTML = `${starsMarkup(p.rating)} <span>${p.rating?.toFixed?.(1) || p.rating} (${p.reviews || 0} відгуки)</span>`;
    }

    const badges = document.getElementById('pdp-badges');
    if (badges) {
      const parts = [];
      if (p.badge) parts.push(`<span class="pdp-pill pdp-pill--promo">${escapeHtml(p.badge)}</span>`);
      if (p.volume) parts.push(`<span class="pdp-pill">${escapeHtml(p.volume)}</span>`);
      badges.innerHTML = parts.join('');
    }

    const materialEl = document.getElementById('pdp-material');
    if (materialEl) materialEl.textContent = p.material || '';
    const fabricBlock = document.getElementById('pdp-fabric-block');
    if (fabricBlock) fabricBlock.hidden = !p.material;

    const descEl = document.getElementById('pdp-desc');
    if (descEl) descEl.textContent = p.longDescription || p.description;

    const stock = document.getElementById('pdp-stock');
    if (stock) {
      const ok = p.inStock !== false;
      stock.textContent = ok ? 'В наявності' : 'Під замовлення';
      stock.classList.toggle('is-out', !ok);
    }

    document.getElementById('pdp-main-img').src = p.images[0];
    document.getElementById('pdp-main-img').alt = p.name;
    const overlay = document.getElementById('pdp-img-caption');
    if (overlay) overlay.textContent = (p.name.split(' ').slice(-2).join(' ') || p.name).toUpperCase();

    const showNav = p.images.length > 1;
    document.getElementById('pdp-prev-img')?.classList.toggle('is-hidden', !showNav);
    document.getElementById('pdp-next-btn')?.classList.toggle('is-hidden', !showNav);
    renderThumbs(p);

    const volsEl = document.getElementById('pdp-volumes');
    const options = p.volumeOptions || [p.volume || '1 шт'];
    volsEl.innerHTML = options
      .map((sz, i) => `<button class="pdp-size${i === 0 ? ' is-active' : ''}" type="button" data-volume="${escapeHtml(sz)}">${escapeHtml(sz)}</button>`)
      .join('');
    selectedVolume = options[0];

    const addBtn = document.getElementById('pdp-add-cart');
    const addMob = document.getElementById('pdp-add-cart-mobile');
    const label = `До кошика ${formatCardPrice(p)}`;
    if (addBtn) addBtn.textContent = label;
    if (addMob) addMob.textContent = label;

    const wishBtn = document.getElementById('pdp-wish');
    if (wishBtn) {
      wishBtn.dataset.wishId = p.id;
      syncWishButtons();
    }

    renderRelated(index);
  }

  function setImage(i) {
    const p = PRODUCTS[currentProductIndex];
    if (!p?.images?.length) return;
    currentImageIndex = (i + p.images.length) % p.images.length;
    document.getElementById('pdp-main-img').src = p.images[currentImageIndex];
    document.querySelectorAll('.pdp-thumb').forEach((btn) => {
      btn.classList.toggle('is-active', Number(btn.dataset.thumb) === currentImageIndex);
    });
  }

  function addProductToCart() {
    const p = PRODUCTS[currentProductIndex];
    if (!p) return;
    if (!selectedVolume) {
      selectedVolume = (p.volumeOptions && p.volumeOptions[0]) || p.volume;
    }
    addToCart(p.id, selectedVolume);
  }

  function showPage(name) {
    document.querySelectorAll('.page').forEach((pg) => pg.classList.toggle('active', pg.dataset.page === name));
    document.body.classList.toggle('catalog-on', name === 'catalog');
    document.body.classList.toggle('product-on', name === 'product');
    document.body.classList.toggle('home-on', name === 'home');
    closePanels();
    updateStuck();
    window.scrollTo(0, 0);
  }

  function route() {
    const hash = (location.hash || '#home').replace('#', '');
    if (hash.startsWith('catalog')) {
      const q = hash.includes('/') ? decodeURIComponent(hash.split('/')[1] || 'all') : 'all';
      catalogFilter = q || 'all';
      renderCatalog();
      showPage('catalog');
    } else if (hash === 'cart') {
      showPage('catalog');
      openCart();
    } else if (hash === 'wish') {
      showPage('catalog');
      openWish();
    } else if (hash === 'product' || hash.startsWith('product/')) {
      const id = hash.includes('/') ? hash.split('/')[1] : null;
      const idx = id ? PRODUCTS.findIndex((p) => p.id === id) : currentProductIndex;
      renderProduct(idx >= 0 ? idx : 0);
      showPage('product');
    } else showPage('home');
  }

  function bindCategoryCarousel() {
    const track = document.getElementById('cat-track');
    const prev = document.getElementById('cat-prev');
    const next = document.getElementById('cat-next');
    if (!track) return;
    const step = () => Math.min(track.clientWidth * 0.8, 360);
    prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  }

  function bindStaticUi() {
    document.querySelectorAll('[data-nav]').forEach((el) => {
      if (el.closest('#home-products-grid') || el.closest('#products-grid') || el.closest('#pdp-related-grid')) return;
      el.addEventListener('click', (e) => {
        const page = el.getAttribute('data-nav');
        if (!page) return;
        e.preventDefault();
        if (page === 'cart') {
          location.hash = 'cart';
          return;
        }
        if (page === 'wish') {
          location.hash = 'wish';
          return;
        }
        if (page === 'catalog') {
          const filter = el.getAttribute('data-filter') || 'all';
          catalogFilter = filter;
          location.hash = filter === 'all' ? 'catalog' : 'catalog/' + encodeURIComponent(filter);
          return;
        }
        if (page === 'product') {
          const id = el.getAttribute('data-product');
          const idx = id ? PRODUCTS.findIndex((p) => p.id === id) : -1;
          if (idx >= 0) currentProductIndex = idx;
          location.hash = 'product/' + PRODUCTS[currentProductIndex].id;
        } else {
          location.hash = page;
        }
      });
    });

    document.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (btn.getAttribute('data-nav') === 'catalog') return;
        e.preventDefault();
        catalogFilter = btn.dataset.filter || 'all';
        location.hash = catalogFilter === 'all' ? 'catalog' : 'catalog/' + encodeURIComponent(catalogFilter);
      });
    });

    document.getElementById('pdp-prev-img')?.addEventListener('click', () => setImage(currentImageIndex - 1));
    document.getElementById('pdp-next-btn')?.addEventListener('click', () => setImage(currentImageIndex + 1));
    document.getElementById('pdp-main-img')?.addEventListener('click', () => {
      const p = PRODUCTS[currentProductIndex];
      if (p?.images?.length > 1) setImage(currentImageIndex + 1);
    });

    document.getElementById('pdp-thumbs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.pdp-thumb');
      if (!btn) return;
      setImage(Number(btn.dataset.thumb));
    });

    document.getElementById('pdp-volumes')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-volume]');
      if (!btn) return;
      document.querySelectorAll('#pdp-volumes .pdp-size').forEach((s) => s.classList.remove('is-active'));
      btn.classList.add('is-active');
      selectedVolume = btn.dataset.volume;
    });

    document.getElementById('pdp-add-cart')?.addEventListener('click', addProductToCart);
    document.getElementById('pdp-add-cart-mobile')?.addEventListener('click', addProductToCart);
    document.getElementById('pdp-buy-now')?.addEventListener('click', () => {
      addProductToCart();
    });

    document.getElementById('pdp-wish')?.addEventListener('click', (e) => {
      toggleWish(PRODUCTS[currentProductIndex].id, e);
    });

    document.getElementById('btn-cart')?.addEventListener('click', () => openCart());
    document.getElementById('btn-wish')?.addEventListener('click', () => openWish());
    document.getElementById('btn-search')?.addEventListener('click', () => {
      location.hash = 'catalog';
    });
    document.getElementById('btn-menu')?.addEventListener('click', () => toggleMenu());
    document.getElementById('panel-backdrop')?.addEventListener('click', closePanels);
    document.getElementById('cart-close')?.addEventListener('click', closePanels);
    document.getElementById('wish-close')?.addEventListener('click', closePanels);
    document.querySelectorAll('[data-close-menu]').forEach((el) => {
      el.addEventListener('click', closePanels);
    });

    document.getElementById('cart-checkout')?.addEventListener('click', () => {
      if (!cart.length) return;
      alert('Дякуємо! Замовлення прийнято - менеджер Ave Maria Beauty Lab зв’яжеться з вами.');
      cart = [];
      persist();
      renderCartDrawer();
      closePanels();
    });

    document.getElementById('chat-fab')?.addEventListener('click', () => {
      window.open('https://www.instagram.com/ave.maria_beautylab/', '_blank', 'noopener');
    });

    bindCategoryCarousel();

    window.addEventListener('scroll', updateStuck, { passive: true });
    window.addEventListener('resize', updateStuck, { passive: true });
    window.addEventListener('hashchange', route);
  }

  fetch('/ave-maria-products.json')
    .then((r) => r.json())
    .then((data) => {
      PRODUCTS = Array.isArray(data) ? data : [];
      bindStaticUi();
      renderHomeFeatured();
      renderCatalog();
      renderCartDrawer();
      renderWishDrawer();
      updateBadges();
      route();
    })
    .catch((err) => {
      console.error('Failed to load products', err);
      bindStaticUi();
      route();
    });
})();
