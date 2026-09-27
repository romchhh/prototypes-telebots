(function () {
  const productImg = (id) => `/logic-clothes-assets/products/${id}.png`;

  const PRODUCTS = [
    {
      id: 'skirtfauxleather',
      name: 'Спідниця з еко-шкіри',
      sizes: 'S · M · L',
      sizeOptions: ['S', 'M', 'L'],
      price: '1 850 ₴',
      priceNum: 1850,
      color: 'Чорний',
      material: 'Еко-шкіра (поліестер + еластан)',
      description:
        'Міді-спідниця з еластичної еко-шкіри. Можна пошити у понад 20 кольорах.',
      images: [productImg('skirtfauxleather')],
      swatches: [{ img: productImg('skirtfauxleather'), label: 'Чорний' }],
    },
    {
      id: 'plakhta',
      name: 'Плахта',
      sizes: 'S · M · L',
      sizeOptions: ['S', 'M', 'L'],
      price: '2 400 ₴',
      priceNum: 2400,
      color: 'Яскравий принт',
      material: '50% поліестер, 50% бавовна',
      description:
        'Сучасна версія традиційної української спідниці-запаху. Регульований знімний пояс. Різні кольори й тканини.',
      images: [productImg('plakhta')],
      swatches: [{ img: productImg('plakhta'), label: 'Яскравий принт' }],
    },
    {
      id: 'denim-jacket',
      name: 'Денімовий жакет',
      sizes: 'S · M · L',
      sizeOptions: ['S', 'M', 'L'],
      price: '3 200 ₴',
      priceNum: 3200,
      color: 'Денім',
      material: '100% бавовна',
      description:
        'Жакет-бомбер із щільного деніму без підкладки. Дві нагрудні кишені, пояс на резинці. Можливі інші кольори.',
      images: [productImg('denim-jacket')],
      swatches: [{ img: productImg('denim-jacket'), label: 'Денім' }],
    },
    {
      id: 'raincoat',
      name: 'Дощовик',
      sizes: 'S · M · L',
      sizeOptions: ['S', 'M', 'L'],
      price: '4 200 ₴',
      priceNum: 4200,
      color: 'Сріблястий',
      material: 'Підкладка 100% бавовна, верх 100% поліестер',
      description:
        'Легкий довгий дощовик із водонепроникної тканини з металізованим ламе. Знімний капюшон, великі кишені.',
      images: [productImg('raincoat')],
      swatches: [{ img: productImg('raincoat'), label: 'Сріблястий' }],
    },
    {
      id: 'light-coat',
      name: 'Легке пальто з еко-шкіри',
      sizes: 'S · M · L',
      sizeOptions: ['S', 'M', 'L'],
      price: '4 800 ₴',
      priceNum: 4800,
      color: 'Чорний',
      material: '100% поліестер',
      description:
        'Оверсайз пальто з легкої еко-шкіри. Підкладка, дві бокові кишені, знімний капюшон і пояс.',
      images: [productImg('light-coat')],
      swatches: [{ img: productImg('light-coat'), label: 'Чорний' }],
    },
    {
      id: 'bomber',
      name: 'Бомбер з неопрену',
      sizes: 'S · M · L',
      sizeOptions: ['S', 'M', 'L'],
      price: '3 600 ₴',
      priceNum: 3600,
      color: 'Чорний',
      material: '100% поліестер',
      description: 'Укорочений бомбер із сітчастого неопрену. Без підкладки, застібка на ґудзики.',
      images: [productImg('bomber')],
      swatches: [{ img: productImg('bomber'), label: 'Чорний' }],
    },
    {
      id: 'hoodie',
      name: 'Теплий худі',
      sizes: 'Onesize',
      sizeOptions: ['Onesize'],
      price: '2 500 ₴',
      priceNum: 2500,
      color: 'Сірий меланж',
      material: '95% бавовна, 5% еластан',
      description:
        'Оверсайз худі з довгим кроєм, великим капюшоном і довгими рукавами. Зріст моделі: 175 см.',
      images: [productImg('hoodie')],
      swatches: [{ img: productImg('hoodie'), label: 'Сірий меланж' }],
    },
  ];

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
  let selectedSize = 'S';

  try {
    const saved = JSON.parse(localStorage.getItem('lc-cart') || '[]');
    if (Array.isArray(saved)) cart = saved;
    const savedW = JSON.parse(localStorage.getItem('lc-wish') || '[]');
    if (Array.isArray(savedW)) wishlist = savedW;
  } catch (_) {}

  function persist() {
    localStorage.setItem('lc-cart', JSON.stringify(cart));
    localStorage.setItem('lc-wish', JSON.stringify(wishlist));
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

  function addToCart(id, size) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const sz = size || p.sizeOptions[0];
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      priceNum: p.priceNum,
      size: sz,
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

  function productCardMarkup(p) {
    return `
    <article class="product">
      <a href="#product/${p.id}" class="product-link" data-nav="product" data-product="${p.id}">
        <div class="product-img">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
          <button class="wish" type="button" data-wish-id="${p.id}" aria-label="У вішлист"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12a1 1 0 011 1v17l-7-4.5L5 21V4a1 1 0 011-1z" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linejoin="round"/></svg></button>
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-price">${p.price}</div>
        </div>
      </a>
    </article>`;
  }

  function bindWishButtons(root) {
    if (!root) return;
    root.querySelectorAll('[data-wish-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => toggleWish(btn.dataset.wishId, e));
    });
    syncWishButtons();
  }

  function renderHomeFeatured() {
    if (!homeProductsGrid) return;
    homeProductsGrid.innerHTML = PRODUCTS.slice(0, 4).map((p) => productCardMarkup(p)).join('');
    bindWishButtons(homeProductsGrid);
  }

  function renderCatalog() {
    if (!productsGrid) return;
    productsGrid.innerHTML = PRODUCTS.map((p) => productCardMarkup(p)).join('');
    bindWishButtons(productsGrid);
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
        <img src="${item.image}" alt="" width="56" height="70">
        <div class="panel-item-body">
          <p class="panel-item-name">${item.name}</p>
          <p class="panel-item-meta">${item.size} · ${item.price}</p>
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
        <img src="${item.image}" alt="" width="56" height="70">
        <div class="panel-item-body">
          <p class="panel-item-name">${item.name}</p>
          <p class="panel-item-meta">${item.price}</p>
          <button type="button" class="panel-add" data-wish-to-cart="${item.id}">У кошик</button>
        </div>
        <button type="button" class="panel-remove" data-wish-remove="${item.id}" aria-label="Прибрати">×</button>
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

  function updateStuck() {
    const onHome = document.body.classList.contains('home-on');
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const solid =
      document.body.classList.contains('catalog-on') || document.body.classList.contains('product-on');
    let stuck = scrollTop > 12;

    if (onHome) {
      const hero = document.querySelector('.home-hero-stage');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        stuck = scrollTop > 12 || heroBottom < 72;
      }
      siteBar?.classList.toggle('is-stuck', stuck);
    } else {
      siteBar?.classList.toggle('is-stuck', stuck || solid);
    }
  }

  function renderProduct(index) {
    const p = PRODUCTS[index];
    if (!p) return;
    currentProductIndex = index;
    currentImageIndex = 0;
    selectedSize = null;

    document.getElementById('pdp-title').textContent = p.name;
    document.getElementById('pdp-crumb-name').textContent = p.name;
    document.getElementById('pdp-color').textContent = p.color;
    document.getElementById('pdp-price').textContent = p.price;
    document.getElementById('pdp-material').textContent = p.material;
    const descEl = document.getElementById('pdp-desc');
    if (descEl) descEl.textContent = p.description;
    document.getElementById('pdp-main-img').src = p.images[0];
    document.getElementById('pdp-main-img').alt = p.name;

    const showNav = p.images.length > 1;
    document.getElementById('pdp-prev-img')?.classList.toggle('is-hidden', !showNav);
    document.getElementById('pdp-next-btn')?.classList.toggle('is-hidden', !showNav);

    const colorBlock = document.getElementById('pdp-color-block');
    const swatches = document.getElementById('pdp-swatches');
    if (p.swatches.length > 0) {
      if (colorBlock) colorBlock.style.display = 'block';
      swatches.innerHTML = p.swatches
        .map(
          (s, i) => `
        <button class="pdp-swatch${i === 0 ? ' is-active' : ''}" type="button" data-swatch="${i}" aria-label="${s.label}">
          <span><img src="${s.img}" alt="${s.label}"></span>
        </button>`
        )
        .join('');
    } else {
      if (colorBlock) colorBlock.style.display = 'none';
      swatches.innerHTML = '';
    }

    const sizesEl = document.getElementById('pdp-sizes');
    sizesEl.innerHTML = p.sizeOptions
      .map(
        (sz) => `
      <button class="pdp-size" type="button" data-size="${sz}">${sz}</button>`
      )
      .join('');

    const wishBtn = document.getElementById('pdp-wish');
    if (wishBtn) {
      wishBtn.dataset.wishId = p.id;
      syncWishButtons();
    }
  }

  function setImage(i) {
    const p = PRODUCTS[currentProductIndex];
    if (!p?.images?.length) return;
    currentImageIndex = (i + p.images.length) % p.images.length;
    document.getElementById('pdp-main-img').src = p.images[currentImageIndex];
  }

  function addProductToCart() {
    const p = PRODUCTS[currentProductIndex];
    if (!p) return;
    if (!selectedSize) {
      alert('Оберіть розмір');
      return;
    }
    addToCart(p.id, selectedSize);
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
    if (hash === 'catalog') showPage('catalog');
    else if (hash === 'cart') {
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

  document.querySelectorAll('[data-nav]').forEach((el) => {
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

  document.getElementById('pdp-prev-img')?.addEventListener('click', () => setImage(currentImageIndex - 1));
  document.getElementById('pdp-next-btn')?.addEventListener('click', () => setImage(currentImageIndex + 1));

  document.getElementById('pdp-swatches')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.pdp-swatch');
    if (!btn) return;
    document.querySelectorAll('.pdp-swatch').forEach((s) => s.classList.remove('is-active'));
    btn.classList.add('is-active');
    const p = PRODUCTS[currentProductIndex];
    const sw = p.swatches[Number(btn.dataset.swatch)];
    if (sw) {
      document.getElementById('pdp-color').textContent = sw.label;
      document.getElementById('pdp-main-img').src = sw.img;
    }
  });

  document.getElementById('pdp-sizes')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.pdp-size');
    if (!btn) return;
    document.querySelectorAll('.pdp-size').forEach((s) => s.classList.remove('is-active'));
    btn.classList.add('is-active');
    selectedSize = btn.dataset.size;
  });

  document.getElementById('pdp-add-cart')?.addEventListener('click', addProductToCart);
  document.getElementById('pdp-add-cart-mobile')?.addEventListener('click', addProductToCart);

  const sizeModal = document.getElementById('pdp-size-modal');
  document.getElementById('pdp-size-guide')?.addEventListener('click', () => {
    sizeModal?.classList.add('open');
    sizeModal?.setAttribute('aria-hidden', 'false');
  });
  document.getElementById('pdp-size-modal-close')?.addEventListener('click', () => {
    sizeModal?.classList.remove('open');
    sizeModal?.setAttribute('aria-hidden', 'true');
  });
  sizeModal?.addEventListener('click', (e) => {
    if (e.target === sizeModal) {
      sizeModal.classList.remove('open');
      sizeModal.setAttribute('aria-hidden', 'true');
    }
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
    alert('Дякуємо! Замовлення надіслано — менеджер зв’яжеться з вами.');
    cart = [];
    persist();
    renderCartDrawer();
    closePanels();
  });

  renderHomeFeatured();
  renderCatalog();
  renderCartDrawer();
  renderWishDrawer();
  updateBadges();
  window.addEventListener('scroll', updateStuck, { passive: true });
  window.addEventListener('resize', updateStuck, { passive: true });
  if (typeof IntersectionObserver !== 'undefined') {
    const heroStage = document.querySelector('.home-hero-stage');
    if (heroStage) {
      new IntersectionObserver(
        () => {
          if (document.body.classList.contains('home-on')) updateStuck();
        },
        { root: null, threshold: [0, 0.02, 0.1, 0.25, 0.5, 0.75, 1] }
      ).observe(heroStage);
    }
  }
  window.addEventListener('hashchange', route);
  route();
})();
