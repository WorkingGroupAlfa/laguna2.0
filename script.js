const MENU_DATA = [
  {
    "category": "Сніданки",
    "items": [
      {
        "name": "Круасан із тигровою креветкою",
        "price": "350"
      },
      {
        "name": "Круасан із лососем і гуакамоле",
        "price": "390"
      },
      {
        "name": "Круасан із ніжною телятиною",
        "price": "370"
      },
      {
        "name": "Вівсяна каша з томленою грушею",
        "price": "250"
      },
      {
        "name": "Сирники з карамельним соусом",
        "price": "350"
      },
      {
        "name": "Млинці з сиром і соусом «Калуа»",
        "price": "350"
      },
      {
        "name": "Скрембл з томатами та моцарелою",
        "price": "250"
      }
    ]
  },
  {
    "category": "Салати",
    "items": [
      {
        "name": "Фірмовий салат з морепродуктами",
        "price": "750"
      },
      {
        "name": "Салат із баклажаном і телятиною",
        "price": "660"
      },
      {
        "name": "Салат із курячим філе",
        "price": "350"
      },
      {
        "name": "Буррата з томатами",
        "price": "705"
      },
      {
        "name": "Овочевий салат з артишоками",
        "price": "370"
      }
    ]
  },
  {
    "category": "Гарячі закуски",
    "items": [
      {
        "name": "Хрусткі креветки в соусі васабі",
        "price": "380"
      },
      {
        "name": "Тигрові креветки гриль",
        "volume": "100 г",
        "price": "420"
      },
      {
        "name": "Моцарела фрі з ягідним соусом",
        "price": "310"
      },
      {
        "name": "Нагетси із сирним соусом",
        "price": "230"
      },
      {
        "name": "Хрусткі крильця",
        "price": "270"
      },
      {
        "name": "Овочеві спрінг-роли",
        "price": "300"
      },
      {
        "name": "Спрінг-роли з качкою",
        "price": "320"
      }
    ]
  },
  {
    "category": "Піца",
    "items": [
      {
        "name": "Мульти-м’ясо",
        "description": "Соус маргарита, моцарела, бекон, копчене м’ясо, куряче філе, свіжий помідор, орегано.",
        "price": "495"
      },
      {
        "name": "Маргарита",
        "description": "Соус маргарита, моцарела, помідор, свіжий базилік.",
        "price": "375"
      },
      {
        "name": "4 сири",
        "description": "Вершковий соус, моцарела, брі, дор-блю, пармезан.",
        "price": "465"
      },
      {
        "name": "Пепероні",
        "description": "Соус маргарита, моцарела, пепероні, орегано.",
        "price": "470"
      },
      {
        "name": "Прошутто",
        "description": "Соус маргарита, моцарела, пармезан, чері, прошутто, рукола.",
        "price": "470"
      },
      {
        "name": "Груша & Дор-блю",
        "description": "Вершковий соус, моцарела, дор-блю, пармезан, груша.",
        "price": "465"
      },
      {
        "name": "Морська",
        "description": "Вершковий соус, моцарела, пармезан, тигрова креветка, кальмари, лосось.",
        "price": "490"
      },
      {
        "name": "Курка теріякі",
        "description": "Моцарела, курка теріякі, цибуля зелена, пармезан, трюфельний соус.",
        "price": "450"
      }
    ]
  },
  {
    "category": "Перші страви",
    "items": [
      {
        "name": "Курячий бульйон із локшиною",
        "price": "250"
      },
      {
        "name": "Сирний крем-суп",
        "price": "400"
      },
      {
        "name": "Гострий суп із креветками та кальмарами",
        "price": "450"
      }
    ]
  },
  {
    "category": "Гарячі страви",
    "items": [
      {
        "name": "Плато морепродуктів на грилі",
        "price": "890"
      },
      {
        "name": "Ніжні реберця з бататом фрі",
        "price": "720"
      },
      {
        "name": "Медальйони з телятини",
        "price": "790"
      },
      {
        "name": "Мідії у вершковому соусі",
        "price": "550"
      },
      {
        "name": "Лосось зі спаржею",
        "price": "750"
      },
      {
        "name": "Куряче філе з картоплею",
        "price": "460"
      },
      {
        "name": "Шашлички із сальсою",
        "price": "390"
      },
      {
        "name": "Картопля фрі з трюфельним соусом",
        "price": "250"
      },
      {
        "name": "Батат із пармезаном",
        "price": "250"
      }
    ]
  },
  {
    "category": "Десерти",
    "items": [
      {
        "name": "Десерт дня",
        "price": "250"
      },
      {
        "name": "Морозиво",
        "price": "150"
      },
      {
        "name": "Ягоди",
        "price": "100"
      }
    ]
  },
  {
    "category": "Безалкогольні напої",
    "items": [
      {
        "name": "Coca Cola / Sprite / Tonic",
        "price": "125"
      },
      {
        "name": "Frits Cola",
        "price": "270"
      },
      {
        "name": "Соки в асортименті",
        "price": "80"
      },
      {
        "name": "Evian",
        "volume": "0,75 л",
        "price": "350"
      },
      {
        "name": "Aqua Panna",
        "volume": "0,75 л",
        "price": "270"
      },
      {
        "name": "Perrier",
        "volume": "0,33 л",
        "price": "195"
      },
      {
        "name": "Borjomi",
        "volume": "0,33 л",
        "price": "220"
      }
    ]
  },
  {
    "category": "Гарячі напої",
    "items": [
      {
        "name": "Еспресо",
        "price": "90"
      },
      {
        "name": "Капучино / на рослинному молоці",
        "price": "130 / 180"
      },
      {
        "name": "Лате / на рослинному молоці",
        "price": "140 / 190"
      },
      {
        "name": "Американо",
        "price": "90"
      },
      {
        "name": "Какао / на рослинному молоці",
        "price": "120 / 190"
      },
      {
        "name": "Флет Уайт",
        "price": "140"
      },
      {
        "name": "Еспресо тонік",
        "price": "190"
      },
      {
        "name": "Бамбл",
        "price": "200"
      },
      {
        "name": "Чорний чай з бергамотом / зелений чай з жасмином / фруктовий / трав’яний",
        "price": "130"
      },
      {
        "name": "Матча / на рослинному молоці",
        "price": "180 / 200"
      },
      {
        "name": "Матча манго / полуниця",
        "price": "250"
      }
    ]
  },
  {
    "category": "Фреші",
    "items": [
      {
        "name": "Апельсиновий фреш",
        "price": "200"
      },
      {
        "name": "Грейпфрутовий фреш",
        "price": "200"
      }
    ]
  },
  {
    "category": "Коктейлі безалкогольні",
    "items": [
      {
        "name": "Vitamin Bomb",
        "description": "Апельсиновий фреш, грейпфрутовий фреш, свіжа м’ята.",
        "price": "240"
      },
      {
        "name": "Mojito",
        "description": "Лайм, м’ята, газована вода, тростинний цукор.",
        "price": "240"
      },
      {
        "name": "Aperol",
        "description": "Сироп Monin, апельсин, газована вода.",
        "price": "320"
      },
      {
        "name": "Hugo",
        "description": "Лайм, м’ята, газована вода, сироп бузини.",
        "price": "220"
      },
      {
        "name": "Apple Sour",
        "description": "Чай анчан, цукор, яблучне пюре, лимонний фреш, Easy Foam.",
        "price": "180"
      },
      {
        "name": "Banana Sour",
        "description": "Чорний чай, цукор, бананове пюре, лимонний фреш, Easy Foam.",
        "price": "230"
      },
      {
        "name": "Pina Colada Classic",
        "description": "Вершки, кокосове молоко, кокосовий сироп, ананасовий сік.",
        "price": "170"
      }
    ]
  },
  {
    "category": "Лимонади",
    "items": [
      {
        "name": "Класичний",
        "price": "180"
      },
      {
        "name": "Малина / грейпфрут",
        "price": "210"
      },
      {
        "name": "Маракуя / лимон",
        "price": "210"
      }
    ]
  },
  {
    "category": "Iced Tea",
    "items": [
      {
        "name": "Виноград-Анчан",
        "description": "Чай анчан, сік винограду, м’ята, цукор.",
        "price": "210"
      },
      {
        "name": "Малина грейпфрут",
        "description": "Чорний чай, сироп малини, сироп грейпфруту, м’ята, цукор.",
        "price": "210"
      }
    ]
  },
  {
    "category": "Milk Shake",
    "items": [
      {
        "name": "Plombir-Bear",
        "description": "Морозиво, вершки, молоко, ванільний сироп.",
        "price": "270"
      },
      {
        "name": "Choco-Bear",
        "description": "Шоколадне морозиво, вершки, молоко, какао, бананове пюре.",
        "price": "270"
      }
    ]
  },
  {
    "category": "Коктейлі",
    "items": [
      {
        "name": "Mojito",
        "description": "Ром, тростинний цукор, м’ята, газована вода.",
        "price": "300"
      },
      {
        "name": "Mai Tai",
        "description": "Ром, куантро, ананасовий сік, мигдальний сироп.",
        "price": "310"
      },
      {
        "name": "Tropic Sour",
        "description": "Джин, маракуя, Martini, Easy Foam.",
        "price": "290"
      },
      {
        "name": "Bacardi Pina Colada",
        "description": "Білий ром, ананасовий сік, кокосове пюре.",
        "price": "310"
      },
      {
        "name": "Long Island",
        "description": "Текіла, горілка, ром, джин, тріпл сек, кола.",
        "price": "310"
      },
      {
        "name": "Banana Sour",
        "price": "290"
      },
      {
        "name": "Tequila Kiss",
        "price": "305"
      },
      {
        "name": "Whiskey Sour",
        "price": "330"
      },
      {
        "name": "Fiero Colada",
        "price": "290"
      },
      {
        "name": "Tom Collins",
        "price": "290"
      }
    ]
  },
  {
    "category": "Вино",
    "items": [
      {
        "name": "Pinot Grigio Italy",
        "description": "Біле вино.",
        "price": "1000"
      },
      {
        "name": "Sauvignon Blanc New Zealand",
        "description": "Біле вино.",
        "price": "1400"
      },
      {
        "name": "Chianti Italy",
        "description": "Червоне вино.",
        "price": "1350"
      },
      {
        "name": "Primitivo Italy",
        "description": "Червоне вино.",
        "price": "1500"
      },
      {
        "name": "Pinot Grigio Italy",
        "description": "Рожеве вино.",
        "price": "1000"
      },
      {
        "name": "Prosecco VExtra Dry Italy",
        "volume": "0,375 / 0,75 л",
        "description": "Ігристе вино.",
        "price": "1200 / 1800"
      },
      {
        "name": "Cava Brut Spain",
        "description": "Ігристе вино.",
        "price": "1500"
      },
      {
        "name": "Cava Brut Rose Spain",
        "description": "Ігристе вино.",
        "price": "1500"
      },
      {
        "name": "Hubert Favier Brut Tradition",
        "description": "Шампанське вино.",
        "price": "4450"
      },
      {
        "name": "Moet & Chandon",
        "description": "Шампанське вино.",
        "price": "6300"
      },
      {
        "name": "Pinot Grigio Italy",
        "volume": "125 мл",
        "description": "Бокал вина.",
        "price": "155"
      },
      {
        "name": "Sauvignon Blanc New Zealand",
        "volume": "125 мл",
        "description": "Бокал вина.",
        "price": "250"
      },
      {
        "name": "Chianti Italy",
        "volume": "125 мл",
        "description": "Бокал вина.",
        "price": "240"
      },
      {
        "name": "Primitivo Italy",
        "volume": "125 мл",
        "description": "Бокал вина.",
        "price": "260"
      },
      {
        "name": "Pinot Grigio Rose Italy",
        "volume": "125 мл",
        "description": "Бокал вина.",
        "price": "170"
      }
    ]
  },
  {
    "category": "Пиво",
    "items": [
      {
        "name": "Розливне",
        "volume": "0,33 / 0,5 л",
        "price": "120 / 160"
      },
      {
        "name": "Пляшкове",
        "volume": "0,33 / 0,5 л",
        "price": "140 / 180"
      },
      {
        "name": "Corona Extra",
        "volume": "0,33 л",
        "price": "230"
      },
      {
        "name": "Corona Zero",
        "volume": "0,33 л",
        "price": "230"
      }
    ]
  },
  {
    "category": "Prosecco Bar",
    "items": [
      {
        "name": "Aperol Spritz",
        "description": "Апероль, просекко, содова.",
        "price": "370"
      },
      {
        "name": "Hugo",
        "description": "Сироп бузини, просекко, м’ята.",
        "price": "310"
      },
      {
        "name": "Rossini",
        "description": "Просекко, полуничне пюре.",
        "price": "290"
      },
      {
        "name": "Martini Fiero Spritz",
        "description": "Martini Fiero, содова.",
        "price": "220"
      },
      {
        "name": "French 75",
        "description": "Джин, просекко, лимонний фреш, цукор.",
        "price": "220"
      }
    ]
  },
  {
    "category": "Алкогольні напої",
    "items": [
      {
        "name": "Aperol",
        "volume": "40 мл",
        "description": "Аперитиви / Вермути.",
        "price": "140"
      },
      {
        "name": "Martini Reserva Bitter",
        "volume": "40 мл",
        "description": "Аперитиви / Вермути.",
        "price": "150"
      },
      {
        "name": "Martini в асортименті",
        "volume": "40 мл",
        "description": "Аперитиви / Вермути.",
        "price": "95"
      },
      {
        "name": "Caffo Vecchio Amaro del Capo",
        "volume": "40 мл",
        "description": "Лікери.",
        "price": "110"
      },
      {
        "name": "Jagermeister",
        "volume": "40 мл",
        "description": "Лікери.",
        "price": "170"
      },
      {
        "name": "ST-Germain",
        "volume": "40 мл",
        "description": "Лікери.",
        "price": "220"
      },
      {
        "name": "Mogutni Karpaty",
        "volume": "40 мл",
        "description": "Горілка.",
        "price": "150"
      },
      {
        "name": "Grey Goose",
        "volume": "40 мл",
        "description": "Горілка.",
        "price": "195"
      },
      {
        "name": "Bacardi Blanca",
        "volume": "40 мл",
        "description": "Ром.",
        "price": "85"
      },
      {
        "name": "Bacardi Black",
        "volume": "40 мл",
        "description": "Ром.",
        "price": "85"
      },
      {
        "name": "Botafogo Spiced",
        "volume": "40 мл",
        "description": "Ром.",
        "price": "160"
      },
      {
        "name": "Bacardi 8 Y.O",
        "volume": "40 мл",
        "description": "Ром.",
        "price": "190"
      },
      {
        "name": "El Jimador Reposado",
        "volume": "40 мл",
        "description": "Текіла.",
        "price": "220"
      },
      {
        "name": "El Jimador Blanca",
        "volume": "40 мл",
        "description": "Текіла.",
        "price": "220"
      },
      {
        "name": "Patron Anejo",
        "volume": "40 мл",
        "description": "Текіла.",
        "price": "480"
      },
      {
        "name": "Patron Silver",
        "volume": "40 мл",
        "description": "Текіла.",
        "price": "410"
      },
      {
        "name": "Bombay Sapphire",
        "volume": "40 мл",
        "description": "Джин.",
        "price": "180"
      },
      {
        "name": "Hendrick’s",
        "volume": "40 мл",
        "description": "Джин.",
        "price": "280"
      },
      {
        "name": "Chateau de Montifaud",
        "volume": "40 мл",
        "description": "Коньяк.",
        "price": "370"
      },
      {
        "name": "Jameson",
        "volume": "40 мл",
        "description": "Віскі.",
        "price": "170"
      },
      {
        "name": "Jack Daniels",
        "volume": "40 мл",
        "description": "Віскі.",
        "price": "200"
      },
      {
        "name": "Jack Daniels Honey",
        "volume": "40 мл",
        "description": "Віскі.",
        "price": "200"
      },
      {
        "name": "Aberfeldy 12 Y.O",
        "volume": "40 мл",
        "description": "Віскі.",
        "price": "320"
      },
      {
        "name": "Macallan 12 Y.O",
        "volume": "40 мл",
        "description": "Віскі.",
        "price": "700"
      }
    ]
  }
];

const appShell = document.querySelector(".app-shell");
const pages = [...document.querySelectorAll(".page")];
const navButtons = [...document.querySelectorAll("[data-page-target]")];
const bottomNavButtons = [...document.querySelectorAll(".bottom-nav .nav-item")];
const menuList = document.getElementById("menuList");
const categoryTabsAnchor = document.getElementById("categoryTabsAnchor");
const categoryTabsShell = document.getElementById("categoryTabsShell");
const categoryTabs = document.getElementById("categoryTabs");
const menuSearch = document.getElementById("menuSearch");
const emptyState = document.getElementById("emptyState");
const dishModal = document.getElementById("dishModal");
const dishVisual = document.getElementById("dishVisual");
const dishDecorLayer = document.getElementById("dishDecorLayer");
const dishModalTitle = document.getElementById("dishModalTitle");
const dishModalDescription = document.getElementById("dishModalDescription");
const dishModalVolume = document.getElementById("dishModalVolume");
const dishModalPrice = document.getElementById("dishModalPrice");

let activePage = "home";
let currentSearch = "";
let observer = null;
let categoryScrollLock = null;
let categoryScrollLockFrame = null;
let categoryTabsWasFixed = false;
let dishModalCloseTimer = null;
let dishModalLastFocus = null;

function slugify(value) {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replaceAll("’", "")
    .replaceAll("і", "i")
    .replaceAll("ї", "i")
    .replaceAll("є", "e")
    .replaceAll("ґ", "g")
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function showPage(pageId) {
  activePage = pageId;
  if (appShell) appShell.dataset.activePage = pageId;

  pages.forEach((page) => {
    page.classList.toggle("page-active", page.id === pageId);
  });

  bottomNavButtons.forEach((button) => {
    button.classList.toggle("nav-active", button.dataset.pageTarget === pageId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "menu") {
    requestAnimationFrame(() => {
      initCategoryObserver();
      setActiveCategory(getVisibleCategoryId());
      updateCategoryTabsState();
    });
  } else {
    requestAnimationFrame(updateCategoryTabsState);
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.pageTarget;
    if (pageId) showPage(pageId);
  });
});

function getAllRenderedCategories(data = MENU_DATA) {
  return data.filter((category) => category.items.length > 0);
}

function getTabCategories(data = MENU_DATA) {
  return getAllRenderedCategories(data).map((category) => category.category);
}

function createCategoryTabs(data = MENU_DATA) {
  const tabs = getTabCategories(data)
    .map((category) => {
      const id = `cat-${slugify(category)}`;
      return `<button class="category-pill" type="button" data-category-target="${id}">${category}</button>`;
    })
    .join("");

  categoryTabs.innerHTML = tabs;
}

function getMenuStickyOffset() {
  const tabsHeight = categoryTabsShell && !categoryTabsShell.hidden ? categoryTabsShell.getBoundingClientRect().height : 0;
  return Math.ceil(tabsHeight + 2);
}

function scrollToCategory(categoryId) {
  const target = document.getElementById(categoryId);
  if (!target) return;

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getMenuStickyOffset());
  beginCategoryScrollLock(categoryId, top);
  window.scrollTo({
    top,
    behavior: "smooth"
  });

  setActiveCategory(categoryId);
}

function beginCategoryScrollLock(categoryId, targetTop) {
  if (categoryScrollLockFrame) cancelAnimationFrame(categoryScrollLockFrame);

  categoryScrollLock = {
    categoryId,
    targetTop,
    startedAt: performance.now(),
    lastY: window.scrollY,
    stillFrames: 0
  };

  const watch = () => {
    if (!categoryScrollLock) return;

    const distance = Math.abs(window.scrollY - categoryScrollLock.targetTop);
    const elapsed = performance.now() - categoryScrollLock.startedAt;
    const moved = Math.abs(window.scrollY - categoryScrollLock.lastY);
    categoryScrollLock.stillFrames = moved < 0.35 ? categoryScrollLock.stillFrames + 1 : 0;
    categoryScrollLock.lastY = window.scrollY;

    if (distance < 2 || (elapsed > 180 && categoryScrollLock.stillFrames > 7) || elapsed > 2600) {
      const finalCategoryId = categoryScrollLock.categoryId;
      categoryScrollLock = null;
      categoryScrollLockFrame = null;
      setActiveCategory(finalCategoryId);
      return;
    }

    categoryScrollLockFrame = requestAnimationFrame(watch);
  };

  categoryScrollLockFrame = requestAnimationFrame(watch);
}

function getMenuPlaceholder(categoryName) {
  const category = categoryName.toLowerCase();
  const placeholders = [
    { match: ["сніданки"], icon: "icon-croissant", label: "Сніданок" },
    { match: ["салати"], icon: "icon-salad", label: "Салат" },
    { match: ["закуски"], icon: "icon-shrimp", label: "Закуска" },
    { match: ["піца"], icon: "icon-pizza", label: "Піца" },
    { match: ["перші"], icon: "icon-soup", label: "Суп" },
    { match: ["гарячі страви"], icon: "icon-dish", label: "Страва" },
    { match: ["десерти"], icon: "icon-cake", label: "Десерт" },
    { match: ["безалкогольні напої"], icon: "icon-drink", label: "Напій" },
    { match: ["гарячі напої"], icon: "icon-coffee", label: "Кава" },
    { match: ["фреші"], icon: "icon-orange", label: "Фреш" },
    { match: ["лимонади", "iced tea"], icon: "icon-drink", label: "Напій" },
    { match: ["milk shake"], icon: "icon-milk", label: "Шейк" },
    { match: ["коктейлі"], icon: "icon-cocktail", label: "Коктейль" },
    { match: ["вино", "prosecco"], icon: "icon-wine", label: "Вино" },
    { match: ["пиво"], icon: "icon-beer", label: "Пиво" },
    { match: ["алкогольні напої"], icon: "icon-bar", label: "Бар" },
    { match: ["напої"], icon: "icon-drink", label: "Напій" }
  ];

  return placeholders.find((entry) => entry.match.some((value) => category.includes(value))) || {
    icon: "icon-dish",
    label: "Фото"
  };
}

function priceTemplate(price) {
  const value = String(price).trim();
  const safeValue = escapeHtml(value);
  if (/[A-Za-zА-Яа-яІіЇїЄєҐґ]/.test(value)) return safeValue;
  return `<span class="price-amount">${safeValue}</span><span class="price-currency"></span>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getDishTheme(categoryName, itemName = "") {
  const text = `${categoryName} ${itemName}`.toLowerCase();

  if (text.includes("фреш") || text.includes("апельсин") || text.includes("грейпфрут")) return "fresh";
  if (text.includes("вино") || text.includes("prosecco")) return "wine";
  if (text.includes("пиво")) return "beer";
  if (text.includes("кава") || text.includes("еспресо") || text.includes("лате") || text.includes("чай")) return "coffee";
  if (text.includes("коктей") || text.includes("лимонад") || text.includes("iced tea") || text.includes("milk shake") || text.includes("напої")) return "drink";
  if (text.includes("піца")) return "pizza";
  if (text.includes("салат")) return "salad";
  if (text.includes("десерт") || text.includes("морозиво") || text.includes("ягоди")) return "dessert";
  if (text.includes("закус") || text.includes("кревет") || text.includes("нагет") || text.includes("спрінг")) return "snack";
  if (text.includes("снідан")) return "breakfast";
  if (text.includes("перші")) return "soup";
  return "dish";
}

function orangeSliceDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 88 88" aria-hidden="true">
      <circle cx="44" cy="44" r="31" fill="#f9a03f" stroke="#8a5a28" stroke-width="3"/>
      <circle cx="44" cy="44" r="23" fill="#ffd36a" stroke="#fff2b8" stroke-width="2"/>
      <path d="M44 21v46M21 44h46M27.8 27.8l32.4 32.4M60.2 27.8 27.8 60.2" stroke="#fff8d7" stroke-linecap="round" stroke-width="2.5"/>
      <path d="M49 16c8-9 17-9 24-2-6 4-14 6-24 2Z" fill="#63bf72" stroke="#2f7d45" stroke-linejoin="round" stroke-width="2"/>
    </svg>
  `;
}

function palmDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 96 96" aria-hidden="true">
      <path d="M45 85c6-22 5-39-2-58" fill="none" stroke="#8a5a28" stroke-linecap="round" stroke-width="6"/>
      <path d="M45 28c-12-12-26-13-36-3 15 1 25 3 36 3Z" fill="#55b96a" stroke="#246e3b" stroke-linejoin="round" stroke-width="2.4"/>
      <path d="M45 27c10-15 24-18 39-10-15 4-27 7-39 10Z" fill="#78cf79" stroke="#246e3b" stroke-linejoin="round" stroke-width="2.4"/>
      <path d="M44 28c-5-17 0-27 11-31 0 13-4 23-11 31Z" fill="#60c36f" stroke="#246e3b" stroke-linejoin="round" stroke-width="2.4"/>
      <path d="M44 28c13-2 24 4 31 17-14-2-23-8-31-17Z" fill="#4faf64" stroke="#246e3b" stroke-linejoin="round" stroke-width="2.4"/>
    </svg>
  `;
}

function swimRingDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 92 92" aria-hidden="true">
      <circle cx="46" cy="46" r="31" fill="#fff" stroke="#8a5a28" stroke-width="3"/>
      <circle cx="46" cy="46" r="16" fill="rgba(255,255,255,0.18)" stroke="#8a5a28" stroke-width="2"/>
      <path d="M27 22a31 31 0 0 1 38 0L54 34a16 16 0 0 0-16 0L27 22Z" fill="#ef233c"/>
      <path d="M70 28a31 31 0 0 1 0 36L58 54a16 16 0 0 0 0-16l12-10Z" fill="#7fd8d0"/>
      <path d="M65 70a31 31 0 0 1-38 0l11-12a16 16 0 0 0 16 0l11 12Z" fill="#ffd43b"/>
      <path d="M22 65a31 31 0 0 1 0-38l12 11a16 16 0 0 0 0 16L22 65Z" fill="#7fd8d0"/>
    </svg>
  `;
}

function boardDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 120 72" aria-hidden="true">
      <path d="M13 43c19-28 72-33 96-7-18 27-73 31-96 7Z" fill="#fff7e8" stroke="#8a5a28" stroke-linejoin="round" stroke-width="3"/>
      <path d="M28 42c15-13 45-17 66-7" fill="none" stroke="#ef233c" stroke-linecap="round" stroke-width="5"/>
      <path d="M30 50c18 8 43 7 62-4" fill="none" stroke="#7fd8d0" stroke-linecap="round" stroke-width="5"/>
      <path d="M9 62c18-8 33-8 47 0 15 8 32 8 54-1" fill="none" stroke="#65c9d7" stroke-linecap="round" stroke-width="4"/>
    </svg>
  `;
}

function leafDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 96 82" aria-hidden="true">
      <path d="M15 61c11-35 39-51 68-43-9 31-38 47-68 43Z" fill="#63bf72" stroke="#246e3b" stroke-linejoin="round" stroke-width="3"/>
      <path d="M24 57c17-16 31-25 50-34" fill="none" stroke="#f4ffe7" stroke-linecap="round" stroke-width="3"/>
      <circle cx="27" cy="26" r="11" fill="#ef233c" stroke="#8a3d1d" stroke-width="3"/>
      <path d="M22 18c5-4 10-4 15 0" fill="none" stroke="#246e3b" stroke-linecap="round" stroke-width="3"/>
    </svg>
  `;
}

function tomatoDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 86 86" aria-hidden="true">
      <circle cx="43" cy="45" r="27" fill="#ef233c" stroke="#8a3d1d" stroke-width="3"/>
      <path d="M43 20c6 10 10 18 0 50M20 45h46M28 28c10 7 20 8 30 0" fill="none" stroke="#ffb3a6" stroke-linecap="round" stroke-width="2.2"/>
      <path d="M42 18c-4-8 3-13 10-8 8-5 15 2 8 10-7-2-12-2-18-2Z" fill="#55b96a" stroke="#246e3b" stroke-linejoin="round" stroke-width="2.3"/>
    </svg>
  `;
}

function sparkleDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 74 74" aria-hidden="true">
      <path d="M37 5c4 17 15 28 32 32-17 4-28 15-32 32C33 52 22 41 5 37c17-4 28-15 32-32Z" fill="#ffd43b" stroke="#8a5a28" stroke-linejoin="round" stroke-width="3"/>
      <path d="M24 17c2 8 7 13 15 15-8 2-13 7-15 15-2-8-7-13-15-15 8-2 13-7 15-15Z" fill="#fff8d7"/>
    </svg>
  `;
}

function grapeDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 86 86" aria-hidden="true">
      <path d="M45 18c10-11 20-11 29-2-8 6-18 8-29 2Z" fill="#63bf72" stroke="#246e3b" stroke-linejoin="round" stroke-width="2.5"/>
      <path d="M42 22c-4 8-8 14-14 20" fill="none" stroke="#8a5a28" stroke-linecap="round" stroke-width="3"/>
      <circle cx="31" cy="45" r="9" fill="#b5174b" stroke="#6e173d" stroke-width="2.5"/>
      <circle cx="47" cy="42" r="9" fill="#c93f6b" stroke="#6e173d" stroke-width="2.5"/>
      <circle cx="39" cy="58" r="9" fill="#9b1b52" stroke="#6e173d" stroke-width="2.5"/>
      <circle cx="55" cy="56" r="9" fill="#b5174b" stroke="#6e173d" stroke-width="2.5"/>
    </svg>
  `;
}

function steamDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 90 90" aria-hidden="true">
      <path d="M24 63c12 9 31 10 43 0" fill="none" stroke="#8a5a28" stroke-linecap="round" stroke-width="5"/>
      <path d="M33 51c-10-12 9-14 0-28M47 51c-10-12 9-14 0-28M61 51c-10-12 9-14 0-28" fill="none" stroke="#7fd8d0" stroke-linecap="round" stroke-width="4"/>
      <circle cx="28" cy="68" r="5" fill="#ffd43b"/>
      <circle cx="64" cy="68" r="5" fill="#ef233c"/>
    </svg>
  `;
}

function berryDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 92 88" aria-hidden="true">
      <path d="M25 57c8-24 27-36 51-31-8 24-27 35-51 31Z" fill="#60c36f" stroke="#246e3b" stroke-linejoin="round" stroke-width="3"/>
      <circle cx="31" cy="36" r="10" fill="#ef233c" stroke="#8a3d1d" stroke-width="2.5"/>
      <circle cx="48" cy="51" r="12" fill="#c93f6b" stroke="#6e173d" stroke-width="2.5"/>
      <circle cx="63" cy="34" r="9" fill="#ff7b72" stroke="#8a3d1d" stroke-width="2.5"/>
      <path d="M25 74c17-5 31-5 44 0" fill="none" stroke="#8a5a28" stroke-linecap="round" stroke-width="4"/>
    </svg>
  `;
}

function soupSteamDecor(className) {
  return `
    <svg class="dish-decor ${className}" viewBox="0 0 96 78" aria-hidden="true">
      <path d="M18 39h60c-3 22-14 31-30 31S21 61 18 39Z" fill="#fff7e8" stroke="#8a5a28" stroke-width="3"/>
      <path d="M25 46h46" stroke="#f9a03f" stroke-linecap="round" stroke-width="5"/>
      <path d="M35 30c-7-8 7-10 0-20M50 30c-7-8 7-10 0-20M65 30c-7-8 7-10 0-20" fill="none" stroke="#7fd8d0" stroke-linecap="round" stroke-width="4"/>
    </svg>
  `;
}

function getDishDecor(categoryName, itemName) {
  const theme = getDishTheme(categoryName, itemName);
  const sets = {
    fresh: [
      orangeSliceDecor("decor-a decor-orange"),
      orangeSliceDecor("decor-b decor-orange-small"),
      palmDecor("decor-c decor-palm")
    ],
    drink: [
      palmDecor("decor-a decor-palm"),
      swimRingDecor("decor-b decor-ring"),
      sparkleDecor("decor-c decor-sparkle")
    ],
    wine: [
      grapeDecor("decor-a decor-grape"),
      palmDecor("decor-b decor-palm"),
      sparkleDecor("decor-c decor-sparkle")
    ],
    beer: [
      swimRingDecor("decor-a decor-ring"),
      sparkleDecor("decor-b decor-sparkle"),
      boardDecor("decor-c decor-board")
    ],
    coffee: [
      steamDecor("decor-a decor-steam"),
      sparkleDecor("decor-b decor-sparkle"),
      palmDecor("decor-c decor-palm")
    ],
    pizza: [
      tomatoDecor("decor-a decor-tomato"),
      leafDecor("decor-b decor-leaf"),
      boardDecor("decor-c decor-board")
    ],
    salad: [
      leafDecor("decor-a decor-leaf"),
      tomatoDecor("decor-b decor-tomato"),
      sparkleDecor("decor-c decor-sparkle")
    ],
    dessert: [
      berryDecor("decor-a decor-berry"),
      sparkleDecor("decor-b decor-sparkle"),
      swimRingDecor("decor-c decor-ring")
    ],
    snack: [
      boardDecor("decor-a decor-board"),
      sparkleDecor("decor-b decor-sparkle"),
      palmDecor("decor-c decor-palm")
    ],
    breakfast: [
      sparkleDecor("decor-a decor-sparkle"),
      boardDecor("decor-b decor-board"),
      palmDecor("decor-c decor-palm")
    ],
    soup: [
      soupSteamDecor("decor-a decor-soup"),
      sparkleDecor("decor-b decor-sparkle"),
      boardDecor("decor-c decor-board")
    ],
    dish: [
      boardDecor("decor-a decor-board"),
      palmDecor("decor-b decor-palm"),
      sparkleDecor("decor-c decor-sparkle")
    ]
  };

  return (sets[theme] || sets.dish).join("");
}

function menuCardTemplate(item, categoryName) {
  const placeholder = getMenuPlaceholder(categoryName);
  const name = escapeHtml(item.name);
  const category = escapeHtml(categoryName);
  const descriptionText = item.description || "";
  const volumeText = item.volume || "";
  const description = descriptionText ? `<p class="menu-description">${escapeHtml(descriptionText)}</p>` : "";
  const volume = volumeText ? `<span class="volume-badge">${escapeHtml(volumeText)}</span>` : "";
  return `
    <article class="menu-card" role="button" tabindex="0" aria-label="Відкрити ${name}" data-dish-name="${name}" data-dish-category="${category}" data-dish-description="${escapeHtml(descriptionText)}" data-dish-volume="${escapeHtml(volumeText)}" data-dish-price="${escapeHtml(item.price)}" data-dish-theme="${getDishTheme(categoryName, item.name)}">
      <div class="menu-card-content">
        <div class="menu-title-row">
          <h3 class="menu-name">${name}</h3>
          ${volume}
          ${description}
        </div>
        <strong class="price">${priceTemplate(item.price)}</strong>
      </div>
      <div class="menu-photo" aria-label="Фото страви буде додано пізніше">
        <svg class="ui-icon menu-photo-icon" aria-hidden="true"><use href="#${placeholder.icon}"></use></svg>
        <span class="menu-photo-label">${placeholder.label}</span>
      </div>
    </article>
  `;
}

function renderMenu() {
  const query = currentSearch.trim().toLowerCase();

  const filteredData = MENU_DATA.map((category) => {
    const items = category.items.filter((item) => {
      const text = `${item.name} ${item.description || ""} ${item.volume || ""} ${category.category}`.toLowerCase();
      return text.includes(query);
    });
    return { ...category, items };
  }).filter((category) => category.items.length > 0);

  createCategoryTabs(filteredData);

  menuList.innerHTML = filteredData.map((category) => {
    const id = `cat-${slugify(category.category)}`;
    const note = category.note ? `<p class="category-note">${category.note}</p>` : "";
    const [firstItem, ...restItems] = category.items;
    return `
      <section class="menu-category" id="${id}" data-category-id="${id}">
        <div class="menu-category-lead">
          <div class="menu-category-title">
            <h2>${category.category}</h2>
          </div>
          ${firstItem ? menuCardTemplate(firstItem, category.category) : ""}
        </div>
        ${note}
        <div class="cards-grid">
          ${restItems.map((item) => menuCardTemplate(item, category.category)).join("")}
        </div>
      </section>
    `;
  }).join("");

  const hasResults = filteredData.length > 0;
  emptyState.hidden = hasResults;
  categoryTabsShell.hidden = !hasResults;

  initCategoryObserver();
  requestAnimationFrame(updateCategoryTabsState);
  const firstCategory = menuList.querySelector(".menu-category");
  if (firstCategory) setActiveCategory(firstCategory.id);
}

function setActiveCategory(categoryId) {
  const pills = [...categoryTabs.querySelectorAll(".category-pill")];
  pills.forEach((pill) => {
    const isActive = pill.dataset.categoryTarget === categoryId;
    pill.classList.toggle("active", isActive);

    if (isActive) {
      const left = pill.offsetLeft - (categoryTabs.clientWidth - pill.offsetWidth) / 2;
      categoryTabs.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  });
}

function getVisibleCategoryId() {
  const categories = [...document.querySelectorAll(".menu-category")];
  if (!categories.length) return null;

  let best = categories[0];
  let bestDistance = Number.POSITIVE_INFINITY;
  const anchor = getMenuStickyOffset();

  categories.forEach((category) => {
    const distance = Math.abs(category.getBoundingClientRect().top - anchor);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = category;
    }
  });

  return best.id;
}

function initCategoryObserver() {
  if (observer) observer.disconnect();

  const sections = [...document.querySelectorAll(".menu-category")];
  if (!sections.length) return;
  const topOffset = getMenuStickyOffset();

  observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible && activePage === "menu" && !categoryScrollLock) {
      setActiveCategory(visible.target.id);
    }
  }, {
    root: null,
    threshold: [0.18, 0.32, 0.5],
    rootMargin: `-${topOffset}px 0px -45% 0px`
  });

  sections.forEach((section) => observer.observe(section));
}

function updateCategoryTabsState() {
  if (!categoryTabsShell || !categoryTabs) return;

  const anchorTop = categoryTabsAnchor ? categoryTabsAnchor.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
  const isMenuTabsVisible = activePage === "menu" && categoryTabsAnchor && !categoryTabsShell.hidden;
  const isFixed = isMenuTabsVisible && anchorTop <= 0;
  const dockProgress = isMenuTabsVisible ? Math.min(1, Math.max(0, (74 - anchorTop) / 74)) : 0;
  const easedDockProgress = 1 - Math.pow(1 - dockProgress, 3);
  const hasOverflow = categoryTabs.scrollWidth > categoryTabs.clientWidth + 2;
  const isScrolled = categoryTabs.scrollLeft > 2;
  const isAtEnd = categoryTabs.scrollLeft + categoryTabs.clientWidth >= categoryTabs.scrollWidth - 2;

  categoryTabsShell.classList.toggle("is-fixed", isFixed);
  categoryTabsShell.classList.toggle("is-docking", dockProgress > 0 && !isFixed);
  categoryTabsShell.classList.toggle("has-overflow", hasOverflow);
  categoryTabsShell.classList.toggle("is-scrolled", isScrolled);
  categoryTabsShell.classList.toggle("is-at-end", hasOverflow && isAtEnd);
  categoryTabsShell.style.setProperty("--dock-progress", easedDockProgress.toFixed(3));
  categoryTabsShell.style.setProperty("--tabs-bg-top", (0.9 * easedDockProgress).toFixed(3));
  categoryTabsShell.style.setProperty("--tabs-bg-bottom", (0.72 * easedDockProgress).toFixed(3));
  categoryTabsShell.style.setProperty("--tabs-shadow", (0.12 * easedDockProgress).toFixed(3));
  categoryTabsShell.style.setProperty("--tabs-blur", `${(16 * easedDockProgress).toFixed(1)}px`);

  if (isFixed && !categoryTabsWasFixed) {
    categoryTabsShell.classList.remove("is-dock-enter");
    void categoryTabsShell.offsetWidth;
    categoryTabsShell.classList.add("is-dock-enter");
  } else if (!isFixed) {
    categoryTabsShell.classList.remove("is-dock-enter");
  }
  categoryTabsWasFixed = isFixed;

  if (categoryTabsAnchor) {
    categoryTabsAnchor.style.height = isFixed ? `${categoryTabsShell.offsetHeight}px` : "0px";
  }
}

function getDishCardFromEvent(event) {
  const card = event.target.closest(".menu-card");
  if (card && menuList.contains(card)) return card;

  const lead = event.target.closest(".menu-category-lead");
  if (!lead || !menuList.contains(lead)) return null;
  return lead.querySelector(".menu-card");
}

function openDishModal(card) {
  if (!dishModal || !card) return;

  if (dishModalCloseTimer) {
    clearTimeout(dishModalCloseTimer);
    dishModalCloseTimer = null;
  }

  const {
    dishName,
    dishCategory,
    dishDescription,
    dishVolume,
    dishPrice,
    dishTheme
  } = card.dataset;

  dishModalLastFocus = document.activeElement;
  dishModalTitle.textContent = dishName || "";
  dishModalPrice.innerHTML = priceTemplate(dishPrice || "");

  if (dishDescription) {
    dishModalDescription.textContent = dishDescription;
    dishModalDescription.hidden = false;
  } else {
    dishModalDescription.textContent = "";
    dishModalDescription.hidden = true;
  }

  if (dishVolume) {
    dishModalVolume.textContent = dishVolume;
    dishModalVolume.hidden = false;
  } else {
    dishModalVolume.textContent = "";
    dishModalVolume.hidden = true;
  }

  if (dishVisual) {
    dishVisual.dataset.theme = dishTheme || "dish";
  }

  if (dishDecorLayer) {
    dishDecorLayer.innerHTML = getDishDecor(dishCategory || "", dishName || "");
  }

  dishModal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    dishModal.classList.add("is-open");
    const closeButton = dishModal.querySelector(".dish-close");
    if (closeButton) closeButton.focus({ preventScroll: true });
  });
}

function closeDishModal() {
  if (!dishModal || dishModal.hidden) return;

  dishModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  dishModalCloseTimer = setTimeout(() => {
    dishModal.hidden = true;
    if (dishDecorLayer) dishDecorLayer.innerHTML = "";
    if (dishModalLastFocus && typeof dishModalLastFocus.focus === "function") {
      dishModalLastFocus.focus({ preventScroll: true });
    }
    dishModalLastFocus = null;
    dishModalCloseTimer = null;
  }, 320);
}

categoryTabs.addEventListener("click", (event) => {
  const pill = event.target.closest(".category-pill");
  if (!pill || !categoryTabs.contains(pill)) return;
  scrollToCategory(pill.dataset.categoryTarget);
});

categoryTabs.addEventListener("scroll", updateCategoryTabsState, { passive: true });
window.addEventListener("scroll", updateCategoryTabsState, { passive: true });
window.addEventListener("resize", updateCategoryTabsState);

menuList.addEventListener("pointerdown", (event) => {
  const lead = event.target.closest(".menu-category-lead");
  if (!lead || !menuList.contains(lead)) return;
  lead.classList.add("is-pressing");
});

menuList.addEventListener("click", (event) => {
  const card = getDishCardFromEvent(event);
  if (!card) return;
  openDishModal(card);
});

menuList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".menu-card");
  if (!card || !menuList.contains(card)) return;
  event.preventDefault();
  openDishModal(card);
});

["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
  menuList.addEventListener(eventName, () => {
    menuList.querySelectorAll(".menu-category-lead.is-pressing").forEach((lead) => {
      lead.classList.remove("is-pressing");
    });
  });
});

if (menuSearch) {
  menuSearch.addEventListener("input", (event) => {
    currentSearch = event.target.value;
    renderMenu();
  });
}

if (dishModal) {
  dishModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-dish-close]")) closeDishModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dishModal && !dishModal.hidden) {
    closeDishModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  showPage("home");
});
