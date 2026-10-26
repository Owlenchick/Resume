const SPACE = "7ee3ea77-06a3-4e6a-9d7a-e0383c036248";
const S3 = `https://prod-files-secure.s3.us-west-2.amazonaws.com/${SPACE}/`;

function N(ref, width) {
  let [id, src] = ref.split("|");
  if (src.startsWith("S3/")) src = S3 + src.slice(3);
  return `https://equatorial-salt-169.notion.site/image/${encodeURIComponent(src)}?table=block&id=${id}&spaceId=${SPACE}${width ? "&width=" + width : ""}&cache=v2`;
}
const nimg = (ref) => ({ type: "img", src: N(ref, 1600), thumb: N(ref, 600) });

const steamShot = (app, h) => ({
  type: "img",
  src: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${app}/${h}/ss_${h}.1920x1080.jpg`,
  thumb: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${app}/${h}/ss_${h}.600x338.jpg`,
});
const steamExtra = (app, file) =>
  `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${app}/extras/${file}.webm`;
const L = (en, ru, es) => ({ en, ru: ru || en, es: es || en });

const yt = (id, title) => ({ type: "yt", id, title });

window.PROFILE = {
  name: "Artur Ismagilov",
  title: L("Unity Developer", "Unity-разработчик", "Desarrollador Unity"),
  also: L("also game design & 3D / VFX", "также геймдизайн и 3D / VFX", "también diseño de juegos y 3D / VFX"),
  location: L("Montevideo, Uruguay", "Монтевидео, Уругвай", "Montevideo, Uruguay"),
  timezone: L("UTC−3 · overlaps with US and EU working hours", "UTC−3 · пересекаюсь с рабочими часами США и Европы", "UTC−3 · coincide con el horario de EE. UU. y Europa"),
  format: L("Remote only · full-time, part-time or contract · not relocating", "Только удалённо · full-time, part-time или контракт · без релокации", "Solo remoto · tiempo completo, parcial o contrato · sin reubicación"),
  telegram: "owlenchick",
  linkedin: "https://www.linkedin.com/in/arturismagilov/",
  github: "https://github.com/owlenchick",
  languages: L("Russian (native), English (C1), Spanish (A1)", "Русский (родной), английский (C1), испанский (A1)", "Ruso (nativo), inglés (C1), español (A1)"),
  education: L("Bachelor · Information Systems & Technologies, KFU · 2018–2022", "Бакалавр · Информационные системы и технологии, КФУ · 2018–2022", "Licenciatura · Sistemas y Tecnologías de la Información, KFU · 2018–2022"),
  cv: { en: "cv/Artur_Ismagilov_CV_EN.pdf", ru: "cv/Artur_Ismagilov_CV_RU.pdf", es: "cv/Artur_Ismagilov_CV_ES.pdf" },
};

window.FEATURED = [
  {
    slug: "lenin-street-geek-shop",
    title: "Lenin Street Geek Shop",
    tagline: L("Shopkeeping sim in a snowy 2000s town", "Симулятор магазина в заснеженном городке 2000-х", "Simulador de tienda en un pueblo nevado de los 2000"),
    studio: L("Perelesoq · team of 26", "Perelesoq · команда 26 человек", "Perelesoq · equipo de 26"),
    period: L("Feb 2026 — now", "фев 2026 — сейчас", "feb 2026 — ahora"),
    status: L("Steam · Demo out", "Steam · вышла демо", "Steam · demo disponible"),
    position: L("Technical Game Designer", "Технический геймдизайнер", "Diseñador de juegos técnico"),
    roles: ["dev", "gd", "3d"],
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3225880/ab63d2f1c84cbdfa4b3cf330e1c0ee075e8b2b32/header.jpg",
    preview: steamExtra(3225880, "0a29d8250832c8f958afeb76d5d449c9"),
    about:
      L("Run the first geek store in a snowy 2000s town: order stock, sell CDs, snacks and fan merch, shape your customers' lives, get into shady business, decorate the shop and even play indie games on the shop PC.", "Управляй первым гик-магазином в заснеженном городке 2000-х: закупай товар, продавай диски, снеки и фан-мерч, влияй на жизни покупателей, ввязывайся в тёмные делишки, обустраивай магазин и даже играй в инди-игры на компьютере за прилавком.", "Dirige la primera tienda geek de un pueblo nevado de los 2000: pide mercancía, vende CDs, snacks y merch, influye en la vida de tus clientes, métete en negocios turbios, decora la tienda e incluso juega indies en el PC del local."),
    work: [
      L("Implement features in C# and integrate them into the existing DI-based codebase", "Реализую фичи на C# и интегрирую их в существующую кодовую базу на DI", "Implemento funciones en C# y las integro en el código existente basado en DI"),
      L("R&D: explore, prototype and fully integrate new features into the game", "R&D: исследую, прототипирую и полностью интегрирую новые фичи в игру", "I+D: investigo, prototipo e integro por completo nuevas funciones en el juego"),
      L("Gameplay logic and polish, bug fixing across systems", "Геймплейная логика, полировка, исправление багов во всех системах", "Lógica de gameplay, pulido y corrección de bugs en todos los sistemas"),
      L("Write shaders and VFX, set up lighting and level design; optimize effects, post-processing and shadows", "Пишу шейдеры и VFX, ставлю свет и левел-дизайн; оптимизирую эффекты, пост-процессинг и тени", "Escribo shaders y VFX, configuro iluminación y niveles; optimizo efectos, post-procesado y sombras"),
      L("UI — everything where visuals meet logic", "UI — всё, где визуал встречается с логикой", "UI — todo donde lo visual se une con la lógica"),
    ],
    tech: ["Unity", "C#", "DI", "Shaders", "VFX", L("Lighting", "Свет", "Iluminación"), "UI", L("Level design", "Левел-дизайн", "Diseño de niveles")],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/3225880/Lenin_Street_Geek_Shop/" },
      { label: L("Studio", "Студия", "Estudio"), url: "https://store.steampowered.com/developer/perelesoq" },
    ],
    media: [
      yt("udx3RtsUt1I", "Gameplay"),
      { type: "video", src: steamExtra(3225880, "5534c18cbfbd6d678c4660f032a3c82c") },
      { type: "video", src: steamExtra(3225880, "1077982e980a518ea7c03a19597aea80") },
      nimg("37c85ba5-77ea-8085-9273-cba0903c523f|attachment:98d4b46c-8b24-40e1-a273-2a91cccf38a1:image.png"),
      nimg("37c85ba5-77ea-8059-bb03-e83e38f8efea|attachment:588deb48-544a-46d6-ad59-d2505edffea5:image.png"),
      nimg("37c85ba5-77ea-80ee-acb3-e22110c1b89b|attachment:ad5e9497-eae6-441b-a6ad-c9669e63e7f2:image.png"),
      nimg("37c85ba5-77ea-803e-bdbb-cd5036462bba|attachment:bc1dd2f2-d9b2-41b9-b4e7-1940c55a4f7f:image.png"),
      ...["af8a75b6ac883a9ddde6d4c38e459b2219930350", "17ae05854d5bc37e59e41fb818d8be16bdaea5aa", "1d5966d3323fe5c980e736090440f5f4c8b2704c", "6225a4b77c241bb57bf135b256f6d06560decdd7", "46c8a991e53fc4dd78f6f152e2430d905f381027", "3a3b317ea1f5a0b23adcd889e1d2204e021372df", "1f9c63bbc33740a9e5be88477475aacaf2090c69", "880be93834d566299be92513c8856ac0b58ca680"].map((h) => steamShot(3225880, h)),
    ],
    local: [],
  },
  {
    slug: "space-out-together",
    title: "Space Out Together",
    tagline: L("Physics co-op survival for up to 6 players", "Физический кооп-выживач до 6 игроков", "Supervivencia cooperativa con físicas para hasta 6 jugadores"),
    studio: L("Bust The Wall · own project with a friend", "Bust The Wall · свой проект с другом", "Bust The Wall · proyecto propio con un amigo"),
    period: "2025 — 2026",
    status: L("Steam · in development", "Steam · в разработке", "Steam · en desarrollo"),
    position: L("Full-cycle developer", "Разработчик полного цикла", "Desarrollador de ciclo completo"),
    roles: ["dev", "gd", "3d"],
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4432580/28378c41d3d3ab1fa2b1fa828f4c1bb227467b86/header.jpg",
    preview: steamExtra(4432580, "e0059dd260c9d3f53bb414c50fb5de38"),
    about:
      L("Your crew crash-lands in the wrong sector of space. Refuel the ship, keep each other alive and reach the portal before everything falls apart — together.", "Ваш экипаж терпит крушение не в том секторе космоса. Заправьте корабль, сохраните друг другу жизнь и доберитесь до портала, пока всё не развалилось — вместе.", "Tu tripulación se estrella en el sector equivocado del espacio. Reposta la nave, manteneos con vida y llegad al portal antes de que todo se venga abajo — juntos."),
    work: [
      L("Networking on Netcode for GameObjects: online co-op for up to 6 players with proximity voice chat", "Сеть на Netcode for GameObjects: онлайн-кооп до 6 игроков с голосовым чатом по дистанции", "Red con Netcode for GameObjects: cooperativo online para hasta 6 jugadores con chat de voz por proximidad"),
      L("Destructible terrain on Marching Cubes: only player input goes over the network, every client rebuilds the mesh locally", "Разрушаемый ландшафт на Marching Cubes: по сети уходит только инпут игрока, каждый клиент перестраивает меш у себя", "Terreno destructible con Marching Cubes: por la red solo viaja el input del jugador, cada cliente reconstruye la malla localmente"),
      L("Laser mining and grappling-hook traversal", "Лазерная добыча и перемещение на крюке-кошке", "Minería láser y desplazamiento con gancho"),
      L("Physics-based gameplay, handheld tools, emotes and character customization", "Геймплей на физике, ручные инструменты, эмоции и кастомизация персонажа", "Gameplay basado en físicas, herramientas de mano, emotes y personalización"),
      L("Full cycle in a team of two: code, design, 3D, marketing", "Полный цикл в команде из двух человек: код, дизайн, 3D, маркетинг", "Ciclo completo en un equipo de dos: código, diseño, 3D, marketing"),
    ],
    tech: ["Unity", "C#", "Netcode for GameObjects", "Marching Cubes", L("Physics", "Физика", "Físicas"), "Blender", "Steamworks"],
    links: [{ label: "Steam", url: "https://store.steampowered.com/app/4432580/Space_Out_Together/" }],
    media: [
      yt("aOq1mbzgdL0", "Trailer"),
      { type: "video", src: steamExtra(4432580, "e13b9a30035f30b19628db29b893c553") },
      { type: "video", src: steamExtra(4432580, "02da482d19b5ccfb6d819523cb689d09") },
      { type: "video", src: steamExtra(4432580, "b5a85faa5aca11fae5a9783b0a8b5b7c") },
      { type: "video", src: steamExtra(4432580, "550d5436e35d24b89170fbfa9240620d") },
      ...["f5a50f124a5179f2ebff88ee7428b13e3cfd69dc", "5ecb6a333e2de1c6f81cdac52745751db71a8307", "da0f3b839c2b35ca06bd3fa1e5fc703b4212c570", "9b0cacec60ca593083559dd424c2d6bcd889006d", "e68e87387317dc112f86e606d6544669f3c547c8", "3a776463659424f56a9f3da7c614d6726c081dcf", "82fcb797376e2d0b96efa753de4e3aaf3a05c9f6", "2cd9ea0d637d0f6f22f75889fb52a33e5c5778d5"].map((h) => steamShot(4432580, h)),
    ],
    local: [],
  },
  {
    slug: "sit-or-die",
    title: "Sit or Die",
    tagline: L("WarioWare meets Buckshot Roulette", "WarioWare встречает Buckshot Roulette", "WarioWare se encuentra con Buckshot Roulette"),
    studio: L("Polden Publishing game jam", "Геймджем Polden Publishing", "Game jam de Polden Publishing"),
    period: L("Nov 2025", "ноя 2025", "nov 2025"),
    status: L("Jam prototype · 21 days · open source", "Прототип с джема · 21 день · открытый код", "Prototipo de jam · 21 días · código abierto"),
    position: L("Full-cycle developer", "Разработчик полного цикла", "Desarrollador de ciclo completo"),
    roles: ["dev", "gd", "3d"],
    cover: N("2ba85ba5-77ea-8029-b8c5-d5c24e377179|attachment:c9c0301c-d1ac-43db-9894-ea193578d112:image.png", 1200),
    preview: null,
    about:
      L("A tense party game of quick microgames and deadly stakes, made in 21 days for the Polden Publishing game jam. The full Unity project is open on GitHub — a good place to look at my code.", "Напряжённая пати-игра из быстрых микроигр со смертельными ставками, сделанная за 21 день для геймджема Polden Publishing. Полный Unity-проект открыт на GitHub — там можно посмотреть мой код.", "Un tenso juego de fiesta con microjuegos rápidos y apuestas mortales, hecho en 21 días para la game jam de Polden Publishing. El proyecto completo de Unity está abierto en GitHub — un buen sitio para ver mi código."),
    work: [
      L("Built in 21 days from scratch: gameplay code, design, 3D and presentation", "Сделан за 21 день с нуля: код геймплея, дизайн, 3D и презентация", "Hecho en 21 días desde cero: código de gameplay, diseño, 3D y presentación"),
      L("Full project source is public on GitHub", "Исходники проекта полностью открыты на GitHub", "El código fuente completo es público en GitHub"),
    ],
    tech: ["Unity", "C#", "Blender", L("Prototyping", "Прототипирование", "Prototipado"), "Game jam"],
    links: [{ label: L("Source code · GitHub", "Исходники · GitHub", "Código · GitHub"), url: "https://github.com/Owlenchick/Horovod" }],
    media: [
      yt("5Z7UCSLqAbs", "Gameplay"),
      nimg("2ba85ba5-77ea-8021-a710-f6fb4599121f|attachment:fe6d8ed7-7a7b-48d9-af8e-7dd3cba162dc:FullHd_001_0000.jpg"),
      nimg("2ba85ba5-77ea-8075-90ee-f6e51b90d43d|attachment:ff0ab92c-2c46-401f-a7e4-d1501567e1fc:FullHd_002_0000.jpg"),
      nimg("2ba85ba5-77ea-8072-a6d0-e87dc94a780d|attachment:584d087c-3235-4fe1-8005-100eb257a428:FullHd_003_0000.jpg"),
      nimg("2ba85ba5-77ea-8008-b5c2-e1c6e5d3c87d|attachment:bb7c090c-989e-4a0b-951d-f760fbe32c99:FullHd_004_0000.jpg"),
      nimg("2ba85ba5-77ea-80e1-98e7-f67beb8c9ae1|attachment:83c0407a-0342-4814-b23b-db1fe6d85cc3:FullHd_005_0000.jpg"),
      nimg("2ba85ba5-77ea-809a-9763-ddeb025e398a|attachment:7e48a50b-32b2-4c80-a67b-6129a06ac86d:FullHd_006_0000.jpg"),
      nimg("2ba85ba5-77ea-8043-89ac-d1450dbb8967|attachment:22e3f597-2f46-4a5d-99d9-4017c55181f2:FullHd_007_0000.jpg"),
      nimg("2ba85ba5-77ea-8020-90fe-d245e25759a0|attachment:757cb76a-1209-4d82-b2c0-1435ce6bc647:FullHd_009_0000.jpg"),
      nimg("2ba85ba5-77ea-80d1-9e5f-c43a657befc1|attachment:952604b4-e50d-496b-88ad-617553b9662b:FullHd_010_0000.jpg"),
      nimg("2ba85ba5-77ea-8042-b32a-e297c88f3eee|attachment:ae92d16e-e3e2-47af-a811-62d8cbc9d4e8:FullHd_014_0000.jpg"),
    ],
    local: [],
  },
  {
    slug: "space-garbage",
    title: "Space Garbage",
    tagline: L("Papers, Please — in space", "Papers, Please — в космосе", "Papers, Please — en el espacio"),
    studio: L("Bust The Wall · own project with a friend", "Bust The Wall · свой проект с другом", "Bust The Wall · proyecto propio con un amigo"),
    period: L("Oct 2025", "окт 2025", "oct 2025"),
    status: L("Prototype + pitch deck", "Прототип + питч-дек", "Prototipo + pitch deck"),
    position: L("Full-cycle developer", "Разработчик полного цикла", "Desarrollador de ciclo completo"),
    roles: ["dev", "gd", "3d"],
    cover: N("2bd85ba5-77ea-8007-8cff-fda97fad6036|attachment:cf9d945d-980e-417f-aae5-22b3edc09577:tube_connect2.gif", 1000),
    preview: null,
    about:
      L("Management sim on a space station: sort, process and route the garbage of the galaxy — and live with the consequences of every decision.", "Менеджмент-симулятор на космической станции: сортируй, перерабатывай и распределяй мусор галактики — и живи с последствиями каждого решения.", "Simulador de gestión en una estación espacial: clasifica, procesa y enruta la basura de la galaxia — y vive con las consecuencias de cada decisión."),
    work: [
      L("Proof-of-concept prototype: core loop, station systems, UI", "Прототип proof-of-concept: кор-луп, системы станции, UI", "Prototipo proof-of-concept: bucle principal, sistemas de la estación, UI"),
      L("Pitch deck and PoC video for publishers", "Питч-дек и PoC-видео для издателей", "Pitch deck y vídeo PoC para editores"),
    ],
    tech: ["Unity", "C#", L("Simulation", "Симуляция", "Simulación"), "UI", L("Pitching", "Питчинг", "Pitching")],
    links: [{ label: L("Pitch deck", "Питч-дек", "Pitch deck"), url: "https://docs.google.com/presentation/d/1-OTRVEMYB5mYv0AQpv1E6k1j46ABym_8lapk2Ejhm9Y/edit?usp=sharing" }],
    media: [
      yt("4nxODMmCVBM", "Proof of concept"),
      nimg("2bd85ba5-77ea-8007-8cff-fda97fad6036|attachment:cf9d945d-980e-417f-aae5-22b3edc09577:tube_connect2.gif"),
      nimg("2bd85ba5-77ea-8016-b2fc-dae81f3a3ed9|attachment:cb525211-4d98-4c29-90fe-e99c3ceb9341:gameover.gif"),
      nimg("2bd85ba5-77ea-8073-9e96-e37670dff334|attachment:1d9db673-c29b-4444-826e-34c967bcfbd6:Slide_16_9_-_7.jpg"),
      nimg("2bd85ba5-77ea-800f-8a07-e3e607302e86|attachment:ce3e7c04-b660-4351-b1cf-2d39ba515872:Slide_16_9_-_9.jpg"),
    ],
    local: [],
  },
  {
    slug: "aldo",
    title: "Aldo: Memory of the Kingdom",
    tagline: L("Action-RPG meets city-building colony sim", "Экшен-RPG встречает градостроительный колони-сим", "RPG de acción con simulador de colonia y construcción de ciudades"),
    studio: L("Meleiko · solo project", "Meleiko · соло-проект", "Meleiko · proyecto en solitario"),
    period: L("Feb 2023 — Jul 2025", "фев 2023 — июл 2025", "feb 2023 — jul 2025"),
    status: L("Released on Steam · Jul 2025", "Вышла в Steam · июл 2025", "Lanzado en Steam · jul 2025"),
    position: L("Solo developer", "Соло-разработчик", "Desarrollador en solitario"),
    roles: ["dev", "gd", "3d"],
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3191740/b3e0b71f698a2f631405d30a65d6a0c3287ad55f/header.jpg",
    preview: steamExtra(3191740, "f00231f52040817317ca15a37c66baf9"),
    about:
      L("An old king tells his children about his past: brave adventures, building a kingdom and defending the settlement. Explore procedurally generated islands, rescue survivors, build a stronghold and hold it against raids.", "Старый король рассказывает детям о своём прошлом: смелые приключения, строительство королевства и защита поселения. Исследуй процедурно сгенерированные острова, спасай выживших, строй крепость и держи оборону от набегов.", "Un viejo rey cuenta a sus hijos su pasado: aventuras valientes, la construcción de un reino y la defensa del asentamiento. Explora islas generadas proceduralmente, rescata supervivientes, construye una fortaleza y defiéndela de las incursiones."),
    work: [
      L("Made the whole game alone over 2.5 years and shipped it on Steam", "Сделал всю игру один за 2,5 года и выпустил в Steam", "Hice todo el juego solo en 2,5 años y lo lancé en Steam"),
      L("Code, game design, 3D models and animation, VFX, UI, marketing", "Код, геймдизайн, 3D-модели и анимация, VFX, UI, маркетинг", "Código, diseño de juego, modelos 3D y animación, VFX, UI, marketing"),
      L("Procedural islands with Wave Function Collapse (Tessera)", "Процедурные острова на Wave Function Collapse (Tessera)", "Islas procedurales con Wave Function Collapse (Tessera)"),
      L("One update manager with tick groups (frequent / rare) instead of per-object Update() — data-oriented approach", "Один менеджер обновлений с группами тиков (часто / редко) вместо Update() на каждом объекте — data-oriented подход", "Un único gestor de actualizaciones con grupos de ticks (frecuente / raro) en lugar de Update() por objeto — enfoque orientado a datos"),
      L("Binary save files synced through Steam Cloud; achievements; 11 languages", "Сохранения в бинарном файле с синхронизацией через Steam Cloud; достижения; 11 языков", "Guardado en archivo binario sincronizado con Steam Cloud; logros; 11 idiomas"),
    ],
    tech: ["Unity", "C#", "Wave Function Collapse", "Steamworks", "Steam Cloud", "Blender", L("Localization", "Локализация", "Localización")],
    links: [{ label: "Steam", url: "https://store.steampowered.com/app/3191740/Aldo_Memory_of_the_Kingdom/" }],
    media: [
      yt("3osRMNPhZbw", "Trailer"),
      { type: "video", src: steamExtra(3191740, "23a5df637aec13f887f0cdc5f53d8581") },
      { type: "video", src: steamExtra(3191740, "7ac7d481b78da5c31a26ebcae6bcaaa5") },
      nimg("1dc85ba5-77ea-8007-ac26-d88059e7bb15|attachment:d4d0a9ef-7f20-416b-afa4-2f04c7c99cef:Main_fullhd.png"),
      ...["99b3ed2d9c109c5b199079b32456cd344ad646c6", "45ec687185ff5ad1e8e1dc4e46e24dbf3917cfa3", "d0f695dbb7239e5ff96b1d07b0c4a0ead99aeaa5", "c43ea002c1d30e8b7d788ad1b97223a9ef18df77", "58e9f44748be9c6dc342408d35e6cd771e7984cc", "e49db1473d8157cdff9cf5eb45e3452dacfc7f0e", "902ddd6e219c25d130d621e2b06985fd67bba245", "dbf710fb0384c71eeff5a1d615719a33c2a9cd4c"].map((h) => steamShot(3191740, h)),
    ],
    local: [],
  },
];

const am = (p) => ({ label: "AppMagic", url: "https://appmagic.rocks/google-play/" + p });

window.MOBILE = [
  {
    slug: "mad-rider", title: "Mad Rider", genre: "Merge · FPS", date: "2024",
    about: L("Build your car, merge parts and destroy opponents' cars.", "Собери машину, объединяй детали и уничтожай машины соперников.", "Construye tu coche, fusiona piezas y destruye los coches rivales."),
    work: L("9 months: balance, polish, new mechanics, visual tutorials, enemy encounters, VFX and UI assembly.", "9 месяцев: баланс, полировка, новые механики, визуальные туториалы, встречи с врагами, VFX и сборка UI.", "9 meses: balance, pulido, nuevas mecánicas, tutoriales visuales, encuentros con enemigos, VFX y montaje de UI."),
    links: [am("mad-rider/com.vagamedev.MadRider"), { label: "TapTap", url: "https://www.taptap.io/ru/app/33687515" }],
    media: ["14b85ba5-77ea-80ad-9ecd-ee3449fbe3e9|S3/8930c207-90bc-4e77-8adb-2556364fd75e/gif_008.gif", "14b85ba5-77ea-807e-975d-c8370fdb7172|S3/b911357d-e1a5-4611-8d22-a06c9915a0ad/gif_006.gif", "14b85ba5-77ea-80b0-8d8d-f33fbe53b15b|S3/12b00935-3c18-4869-bd5f-3b4ca998a04e/gif_014.gif", "14b85ba5-77ea-80ee-9058-f9f9b5a46a2e|S3/54d077bc-6269-44ec-8f17-3986fc4053d0/gif_015.gif", "14b85ba5-77ea-80d0-a615-d94ab1e6f4b6|S3/f379c352-f56f-40cd-ae9e-cde37a74019a/gif_012.gif", "14b85ba5-77ea-80e0-9835-e37e35b05999|S3/1cd4883f-a34f-4859-a304-d4cf661af925/telegram-cloud-photo-size-4-5786424960921744883-y.jpg", "14b85ba5-77ea-805b-b309-ce06463af372|S3/dae3628a-57c4-4755-9576-0501f0640327/gif_013.gif", "14b85ba5-77ea-80da-ba7c-fdedaa7a8425|S3/0d297373-b93d-4fd9-bedb-01e738f78f09/gif_018.gif"],
  },
  {
    slug: "shark-run", title: "Shark Run", genre: L("Runner", "Раннер", "Runner"), date: "2024",
    about: L("Grow into a huge shark and reach the finish alive.", "Вырасти в огромную акулу и доберись до финиша живым.", "Crece hasta ser un tiburón enorme y llega vivo a la meta."),
    work: L("2 months: concept and references, technical help, all 3D models and UI/UX.", "2 месяца: концепт и референсы, помощь с технической частью, все 3D-модели и UI/UX.", "2 meses: concepto y referencias, ayuda técnica, todos los modelos 3D y UI/UX."),
    links: [am("shark-run/com.vagamedev.babyshark"), { label: "APKPure", url: "https://apkpure.com/ru/shark-run/com.vagamedev.babyshark" }],
    media: ["c6c7a7e7-0296-441a-9fa9-48c3ff63cca5|S3/e93b2e61-b6bc-47da-9686-14f6dae7080a/Untitled.gif", "00adcdc2-0db6-4d7e-81cc-795009c99714|S3/b392819e-e68e-49ed-9207-b5a3e023c1ba/Untitled.gif", "a3c2affe-42b2-4baf-82f9-5a9543e86d96|S3/55892768-dec3-40af-ac0c-fedefdada280/Untitled.png", "f53bac84-cf88-4ded-a5db-104d2aa9a5c4|S3/6e3354d9-0edc-43de-8354-537cf4b251e9/Untitled.png", "5e55ab4b-37e8-4321-8246-f474e4704cce|S3/5411e873-2cbd-4f0b-b7cb-3ff771bda02c/Untitled.png", "4afc5ff3-7113-4b20-ba21-5f562ad12021|S3/708a6ae9-1e99-4cd0-8cba-16499ef7c356/Untitled.png"],
  },
  {
    slug: "cockroaches-cleaning", title: "Cockroaches Cleaning", genre: L("Hyper-casual", "Гиперказуал", "Hipercasual"), date: "2023",
    about: L("Hyper-casual cleaning game.", "Гиперказуальная игра про уборку.", "Juego hipercasual de limpieza."),
    work: "",
    links: [am("cockroaches-cleaning/com.vagamedev.cockroachcleaner"), { label: "APKPure", url: "https://apkpure.com/ru/cockroaches-cleaning/com.vagamedev.cockroachcleaner" }],
    media: ["22585ba5-77ea-802d-b0b7-d4615b7d7747|attachment:5475dca1-d0b5-42d0-add1-ac2fac766a6d:image.png", "22585ba5-77ea-808c-a203-d4eee59ba6eb|attachment:862e94a9-d511-4b0f-97e3-0980fd901fb1:image.png"],
  },
  {
    slug: "my-hotdog-shop", title: "My HotDog Shop", genre: L("Idle tycoon", "Idle-тайкун", "Idle tycoon"), date: "2023",
    about: L("Build your hot-dog restaurant empire.", "Построй империю хот-дог ресторанов.", "Construye tu imperio de restaurantes de perritos calientes."),
    work: L("4 months: core mechanics, economy and balance calculations, game documentation, help with visuals.", "4 месяца: базовые механики, расчёт экономики и баланса, игровая документация, помощь с визуалом.", "4 meses: mecánicas base, cálculo de economía y balance, documentación, ayuda con lo visual."),
    links: [am("my-hotdog-shop/com.Moonbolt.HotDogStand"), { label: "TapTap", url: "https://www.taptap.io/ru/app/33597506" }],
    media: ["62874b00-06ed-4b3e-8a4b-24386a5f445c|S3/c1567f20-a2b4-4a8a-bf02-928d54ab22c3/Untitled.gif", "f9530470-654d-43a8-80a2-2d0143da9391|S3/5ba54b8d-3bd8-4b97-b1ef-3e4b9d26bacb/Untitled.png"],
  },
  {
    slug: "robox-car", title: "Robox Car", genre: L("Puzzle platformer", "Пазл-платформер", "Plataformas de puzles"), date: "2023",
    about: L("Deliver the cube to the lorry — a hyper-casual take on Box Rob.", "Доставь куб до грузовика — гиперказуальная версия Box Rob.", "Lleva el cubo al camión — una versión hipercasual de Box Rob."),
    work: L("Level design, new mechanics, balance and overall look; 3D models, VFX and UI.", "Левел-дизайн, новые механики, баланс и общий вид; 3D-модели, VFX и UI.", "Diseño de niveles, nuevas mecánicas, balance y aspecto general; modelos 3D, VFX y UI."),
    links: [am("robox-car/com.voxelmaniacs.robotgame"), { label: "TapTap", url: "https://www.taptap.io/ru/app/33579800" }],
    media: ["59f9a550-342e-43e9-a443-c77b31bdadd5|S3/75e01d0f-9e1d-45e8-894b-ca2262a34d1e/Untitled.gif", "7ae8eb3b-b345-49ca-8f35-9e86c4f2be25|S3/47ed120e-01c2-4b4b-8504-9f53fc40ddd0/Untitled.png", "477bf735-a027-444a-b9d5-27dd899fd96a|S3/7b452aa6-d5cb-495d-ab93-bba5be1a0705/Untitled.png", "69389a24-50d1-4848-8a99-4628860c5d3d|S3/18ca5169-1f79-4e89-95ae-08d86c957fd7/Untitled.png", "fe74f105-1782-4a09-aec0-379ab673f476|S3/69625c98-d677-4c6f-9446-8fb80820ef84/Untitled.gif", "0568c701-e5c7-4eb4-9908-8c414fdadd73|S3/c76e3574-6c69-44d8-93d9-9622e5315765/Untitled.gif", "3b37c557-0913-458a-8936-935354f52715|S3/c5b802d1-31ca-4ad8-928b-544876273936/Untitled.gif", "0276a4e4-f1d1-4fb5-b660-37b86fb9b579|S3/bb42be2e-351d-456e-b5cb-1d6a676143b0/Untitled.gif", "d42e088a-9fa0-46f3-861f-ca04db7447c6|S3/8f8d8ecb-dfa5-4471-b681-68caa089e1a2/Untitled.gif", "c1e42bc9-930a-444e-adbd-17dbfd458827|S3/d1ab9a4f-b222-487f-afc7-7ce47279d6eb/Untitled.gif", "dbf6c700-7234-40a7-8f39-9c48c7a1cfde|S3/de7ddd4d-ac10-4e53-974d-3012b6f74c6d/Untitled.gif", "dee370e0-cd6b-431c-b7f0-43180150c395|S3/d3a8aede-98b1-4b3f-8c8c-25ed3a8b239b/Untitled.gif", "8a6e0665-8db4-4472-be54-d8d7a0b0ee49|S3/7b2e57c5-ae5d-40d4-a2a7-4e1291cd7193/Untitled.gif", "65f205cc-768f-4022-9f34-379386d60f53|S3/50bdf20c-da0b-4d33-b4f2-840d44b3f3f1/Untitled.jpeg", "3aea42ec-80ad-4ce0-9856-804c45960fb4|S3/87ef6f13-8bd9-4355-bc31-01791708f637/Untitled.png", "262a02a1-4116-41aa-be26-942f375da271|S3/850e752d-8809-4981-82d2-9ad96b6d0541/Untitled.gif"],
  },
  {
    slug: "voxel-fighter", title: "Voxel Fighter: Trend Wars", genre: L("3D action", "3D-экшен", "Acción 3D"), date: "2023",
    about: L("Voxel brawler: fight across locations and prove who's the champion.", "Воксельный файтинг: сражайся на разных локациях и докажи, кто здесь чемпион.", "Brawler de vóxeles: lucha en distintos escenarios y demuestra quién es el campeón."),
    work: "",
    links: [am("voxel-fighter-trend-wars/com.voxelmaniacs.voxelfighter"), { label: "APKPure", url: "https://apkpure.com/ru/voxel-fighter/com.voxelmaniacs.voxelfighter" }],
    media: ["22585ba5-77ea-8086-b15f-e48820cd86e4|attachment:dbeebca4-1d07-4ffb-b319-db9d32dc2ba5:image.png", "22585ba5-77ea-8053-9415-d70eb837cde5|attachment:31cd794a-23b2-4be5-aa2a-ef1737055cb0:image.png", "22585ba5-77ea-806c-9675-efd24069588a|attachment:8433fb75-b3a4-465e-bdc0-d79520c5af73:image.png", "22585ba5-77ea-801f-8a08-f6bdb6dcbd60|attachment:312be459-f6bb-4f7a-a66c-0d3ecfd895cb:image.png", "22585ba5-77ea-80cd-bc70-c411b21e6596|attachment:f779a64e-7b3c-4336-871b-85e2e24704bd:image.png", "22585ba5-77ea-808f-aef2-d2d65ada97a0|attachment:42379942-ddee-4229-a41a-f38f5bf3db0a:image.png", "22585ba5-77ea-809e-9126-de28444f12a2|attachment:bf6ef853-750e-4cb7-94a1-322466f7ac32:image.png"],
  },
  {
    slug: "slime-monster", title: "Slime Monster", genre: "Idle RPG", date: "2023",
    about: L("Escape the lab as a slime, eat, grow and wreck everything around.", "Сбеги из лаборатории слаймом, ешь, расти и круши всё вокруг.", "Escapa del laboratorio como un slime, come, crece y destrózalo todo."),
    work: L("1-month prototype; pushed for a memorable comic-book visual style.", "Прототип за 1 месяц; добивался запоминающегося визуала в стиле комикса.", "Prototipo en 1 mes; apostando por un estilo visual de cómic memorable."),
    links: [am("slime-monster-idle-rpg/com.vagamedev.slimemonsteridlerpg"), { label: "APKPure", url: "https://apkpure.com/ru/slime-monster-idle-rpg/com.vagamedev.slimemonsteridlerpg" }],
    media: ["22585ba5-77ea-80a1-8616-f6267c146e8a|attachment:72f22d59-f084-4c2a-9d7d-4bd7d033ef23:image.png", "42950b35-c8cd-4e83-b909-fa26bb52d431|S3/b3b9ac8d-8b12-48f2-9bf7-cb514e1ad8ba/Untitled.png", "104df407-ae07-4575-a75e-f6c3778ec6cf|S3/43049e03-c766-4dbc-99fa-57f964c8790c/Untitled.png", "b8d18606-a193-4f3c-9a9e-1a824593dd5f|S3/5aeccce0-3c9e-4c17-8fda-3e1ddc521b42/Untitled.png", "e3372085-e562-4f21-b6ff-231683471305|S3/2471fdf0-a517-4f34-8046-94ea5c7f5ff4/Untitled.png", "22585ba5-77ea-809a-9b28-c545a7f98a99|attachment:5efd0057-6169-4726-b3db-66d06c455af2:image.png"],
  },
  {
    slug: "space-hero", title: "Space Hero", genre: "Idle RPG", date: "2023",
    about: L("Captain a spaceship, swap modules and weapons, beat bosses across the solar system.", "Командуй кораблём, меняй модули и оружие, побеждай боссов по всей Солнечной системе.", "Capitanea una nave, cambia módulos y armas, vence jefes por todo el sistema solar."),
    work: "",
    links: [am("space-hero-rpg-idle-game/com.vagamedev.spaceheroidle")],
    media: ["22585ba5-77ea-808d-8707-eda746633163|attachment:9e875d23-2dc5-4874-9d4b-4e2ce9c24d86:image.png", "22585ba5-77ea-80d1-a6b3-f3e3d44350f4|attachment:d6744cd9-87f6-45f1-be94-fad1e9dfb9ab:photo_2025-07-03_11.14.34.jpeg", "22585ba5-77ea-80b5-92ed-c99989739c5c|attachment:a4d40fdb-7b79-425d-b626-a57fac9a142f:image.png", "22585ba5-77ea-8074-a432-cdb934792a77|attachment:6168151e-6a83-41d2-9b6f-9138d9a01ac2:telegram-cloud-photo-size-4-5786332597650042789-y.jpg", "22585ba5-77ea-80c3-ae50-f7d9fb82839c|attachment:b852b433-6ca6-4a1b-baf0-ee1f0d692c4a:telegram-cloud-photo-size-4-5788791277448441703-y.jpg"],
  },
  {
    slug: "numbers-io", title: "Numbers.io: Operations", genre: "IO", date: "2022",
    about: L("IO battle for the biggest number — who counts faster?", "IO-битва за самое большое число — кто посчитает быстрее?", "Batalla IO por el número más grande — ¿quién cuenta más rápido?"),
    work: "",
    links: [am("numbers-io-operations/com.vagamedev.numbersio")],
    media: ["22585ba5-77ea-8062-a681-e5575b2cea02|attachment:a677e0d0-8d37-4a8e-b6e5-8dde1307eb88:image.png", "22585ba5-77ea-805d-a920-e8d18138e0c5|attachment:acdefe2b-45ec-47f2-b9ca-0402d5e6e56b:image.png", "22585ba5-77ea-80d3-bee5-ca66bc55cb40|attachment:de8993e2-0f26-439b-b747-c287cf3a63ec:image.png", "22585ba5-77ea-80b4-bd1c-fb4323741081|attachment:644e025b-8155-45a5-8789-3deb36bde629:image.png"],
  },
  {
    slug: "mini-market-boss", title: "Mini Market Boss", genre: L("Idle tycoon", "Idle-тайкун", "Idle tycoon"), date: "2022",
    about: L("Grow a mini-mart into a supermarket chain: hire staff, upgrade stalls, serve customers.", "Преврати минимаркет в сеть супермаркетов: нанимай персонал, улучшай прилавки, обслуживай покупателей.", "Convierte un minimercado en una cadena de supermercados: contrata personal, mejora puestos, atiende clientes."),
    work: "",
    links: [am("mini-market-boss-tycoon-game/com.vagamedev.itworks"), { label: "APKPure", url: "https://apkpure.com/ru/mini-market-boss-tycoon-game/com.vagamedev.itworks" }],
    media: ["22585ba5-77ea-8081-a3d2-f8b3ccb273c9|attachment:7770a2af-a16d-4fc2-ae74-5d5e81b15cc9:image.png", "22585ba5-77ea-809c-9f91-f16110ea7ebe|attachment:7f2ed1ea-8e68-47d2-a45c-d424a3f88436:image.png"],
  },
  {
    slug: "synthwave-runner", title: "Synthwave Runner", genre: L("Runner", "Раннер", "Runner"), date: "2022",
    about: L("Neon endless runner: dodge, boost, collect and unlock skins.", "Неоновый бесконечный раннер: уворачивайся, ускоряйся, собирай и открывай скины.", "Runner infinito de neón: esquiva, acelera, recoge y desbloquea skins."),
    work: "",
    links: [am("synthwave-runner/com.vagamedev.neonrunner"), { label: "APKPure", url: "https://apkpure.com/ru/synthwave-runner/com.vagamedev.neonrunner" }],
    media: ["22585ba5-77ea-8055-8589-c16ed6bc16f9|attachment:4be79bba-8af7-49e5-852e-e620b5f86ad6:image.png", "22585ba5-77ea-80a5-bf7e-db1bde302939|attachment:b5fe79b1-b573-44f9-bcac-dae45a0d90e0:image.png", "22585ba5-77ea-80f2-9830-d9af956e4d85|attachment:f968e9ad-06d4-4028-aabb-983ef685bb14:image.png", "22585ba5-77ea-809c-b54a-cbecfd5aa36e|attachment:7f1d6304-0622-4647-939f-cb996937ea31:image.png"],
  },
  {
    slug: "beans-war", title: "Beans War", genre: L("Shooter", "Шутер", "Shooter"), date: "2021",
    about: L("Beans don't betray each other. Defend to the last bullet — and dress up first.", "Бобы своих не предают. Держись до последней пули — но сначала приоденься.", "Los frijoles no se traicionan. Resiste hasta la última bala — pero vístete primero."),
    work: "",
    links: [am("beans-war/com.vagamedev.beanswar"), { label: "APKPure", url: "https://apkpure.com/ru/beans-war/com.vagamedev.beanswar" }],
    media: ["22585ba5-77ea-80a0-97e1-e45906905ded|attachment:df0acbac-9174-4dc7-8eaf-f6ae4ff7401d:image.png", "22585ba5-77ea-80ab-beb1-f5fc48ece08a|attachment:ec2ad786-a7de-43fa-a7c1-8f5392783cf3:image.png", "22585ba5-77ea-8021-92ca-e67d0bb6453a|attachment:792a11cd-4b9d-4e41-af96-378321ddf697:image.png", "22585ba5-77ea-8089-8559-cb2120c2248f|attachment:4d27dd9f-bd7c-4dca-973d-970281c6b7d2:image.png"],
  },
].map((g) => ({ ...g, media: g.media.map(nimg), cover: N(g.media[0], 700), local: g.local || [] }));

window.EXPERIENCE = [
  {
    type: "job", company: "Perelesoq", project: "Lenin Street Geek Shop",
    role: L("Technical Game Designer", "Технический геймдизайнер", "Diseñador de juegos técnico"),
    period: L("Feb 2026 — present", "фев 2026 — сейчас", "feb 2026 — actualidad"),
    meta: L("Indie studio · 26 people · Remote", "Инди-студия · 26 человек · удалённо", "Estudio indie · 26 personas · remoto"),
    text: L("A technical role with a lot of code: I implement features in C# and integrate them into the studio's DI-based codebase, write shaders and VFX, set up lighting and levels, build UI and optimize graphics. R&D, polish and bug fixing across systems.",
            "Техническая роль с большим количеством кода: реализую фичи на C# и встраиваю их в кодовую базу студии на DI, пишу шейдеры и VFX, ставлю свет и уровни, собираю UI и оптимизирую графику. R&D, полировка и исправление багов по всем системам.",
            "Un rol técnico con mucho código: implemento funciones en C# y las integro en el código del estudio basado en DI, escribo shaders y VFX, configuro iluminación y niveles, monto la UI y optimizo los gráficos. I+D, pulido y corrección de bugs en todos los sistemas."),
    url: "https://store.steampowered.com/developer/perelesoq",
  },
  {
    type: "job", company: "Octo Games", project: "",
    role: L("Game Designer", "Геймдизайнер", "Diseñador de juegos"),
    period: L("Jul 2025 — Nov 2025", "июл 2025 — ноя 2025", "jul 2025 — nov 2025"),
    meta: L("AA studio on Steam · 150 people · Remote", "AA-студия в Steam · 150 человек · удалённо", "Estudio AA en Steam · 150 personas · remoto"),
    text: L("Game design documents, reference research, close collaboration with designers, artists and engineers.",
            "Диздоки, поиск референсов, тесная работа с дизайнерами, художниками и программистами.",
            "Documentos de diseño, búsqueda de referencias, colaboración estrecha con diseñadores, artistas e ingenieros."),
    note: L("Why I left: the studio's adult-content focus wasn't the right fit for me.", "Почему ушёл: студия делает игры для взрослых — это не моё направление.", "Por qué me fui: el enfoque del estudio en contenido para adultos no encajaba conmigo."),
    url: "https://steamdb.info/publisher/Octo+Games/",
  },
  {
    type: "job", company: "VA Gamedev", project: L("12 mobile titles", "12 мобильных игр", "12 juegos móviles"),
    role: L("Game Designer · Unity Developer · 3D", "Геймдизайнер · Unity-разработчик · 3D", "Diseñador · desarrollador Unity · 3D"),
    period: L("May 2022 — Jan 2025", "май 2022 — янв 2025", "may 2022 — ene 2025"),
    meta: L("Hyper-casual mobile startup · 12 people · Hybrid", "Гиперказуальный мобильный стартап · 12 человек · гибрид", "Startup móvil hipercasual · 12 personas · híbrido"),
    text: L("Led 10+ prototypes owning product, design, management and technical tasks. Core loops, scalable systems, economies tuned with AppMetrica; effects, shaders and UI/UX in Blender and Figma; playtesting and QA. Games were tested with publishers Freeplay and Moonee: average CPI ≈ $0.30, retention ≈ 27–30%.",
            "Вёл 10+ прототипов: продукт, дизайн, менеджмент и технические задачи. Кор-лупы, масштабируемые системы, экономика с аналитикой AppMetrica; эффекты, шейдеры и UI/UX в Blender и Figma; плейтесты и QA. Игры тестировались с издателями Freeplay и Moonee: средний CPI ≈ $0,30, retention ≈ 27–30%.",
            "Lideré más de 10 prototipos: producto, diseño, gestión y tareas técnicas. Bucles principales, sistemas escalables, economías ajustadas con AppMetrica; efectos, shaders y UI/UX en Blender y Figma; playtesting y QA. Los juegos se probaron con los editores Freeplay y Moonee: CPI medio ≈ 0,30 $, retención ≈ 27–30%."),
    note: L("The studio has since closed, so most of its games are no longer on Google Play.", "Студия закрылась, поэтому большинства игр больше нет в Google Play.", "El estudio cerró, por eso la mayoría de sus juegos ya no están en Google Play."),
    url: "https://appmagic.rocks/publisher/vagamedev/1_VAGameDev",
  },
  {
    type: "own", company: "Bust The Wall", project: "Space Out Together · Sit or Die · Space Garbage",
    role: L("Co-founder · Full-cycle developer", "Сооснователь · разработчик полного цикла", "Cofundador · desarrollador de ciclo completo"),
    period: L("Nov 2025 — Jun 2026", "ноя 2025 — июн 2026", "nov 2025 — jun 2026"),
    meta: L("Own projects with a friend · 2 people · in parallel with main work", "Свои проекты с другом · 2 человека · параллельно с основной работой", "Proyectos propios con un amigo · 2 personas · en paralelo al trabajo principal"),
    text: L("Prototypes for publishers in search of funding. Full cycle: C#, Unity, Netcode for GameObjects, Blender, SMM, pitch decks and publisher outreach.",
            "Прототипы для издателей в поисках финансирования. Полный цикл: C#, Unity, Netcode for GameObjects, Blender, SMM, питч-деки и поиск издателя.",
            "Prototipos para editores en busca de financiación. Ciclo completo: C#, Unity, Netcode for GameObjects, Blender, SMM, pitch decks y búsqueda de editor."),
    url: "https://store.steampowered.com/app/4432580/Space_Out_Together/",
  },
  {
    type: "own", company: "Meleiko", project: "Aldo: Memory of the Kingdom",
    role: L("Solo Developer", "Соло-разработчик", "Desarrollador en solitario"),
    period: L("Feb 2023 — Jul 2025", "фев 2023 — июл 2025", "feb 2023 — jul 2025"),
    meta: L("Solo project · in parallel with main work", "Соло-проект · параллельно с основной работой", "Proyecto en solitario · en paralelo al trabajo principal"),
    text: L("Built and released a full game on Steam alone: code, design, 3D, VFX, UI, marketing. Procedural islands with Wave Function Collapse, a tick-based update manager, binary saves with Steam Cloud.",
            "В одиночку сделал и выпустил полноценную игру в Steam: код, дизайн, 3D, VFX, UI, маркетинг. Процедурные острова на Wave Function Collapse, менеджер обновлений по тикам, бинарные сохранения со Steam Cloud.",
            "Creé y lancé en solitario un juego completo en Steam: código, diseño, 3D, VFX, UI, marketing. Islas procedurales con Wave Function Collapse, un gestor de actualizaciones por ticks, guardado binario con Steam Cloud."),
    url: "https://store.steampowered.com/app/3191740/Aldo_Memory_of_the_Kingdom/",
  },
];

window.ENGINEERING = [
  {
    icon: "⇄", project: "space-out-together",
    title: L("Multiplayer for 6", "Мультиплеер на 6 игроков", "Multijugador para 6"),
    text: L("Online co-op on Netcode for GameObjects. Destructible Marching Cubes terrain sends only player input over the network — each client rebuilds the mesh itself, so traffic stays tiny.",
            "Онлайн-кооп на Netcode for GameObjects. Разрушаемый ландшафт на Marching Cubes: по сети уходит только инпут игрока, а меш каждый клиент перестраивает сам — трафик минимальный.",
            "Cooperativo online con Netcode for GameObjects. El terreno destructible con Marching Cubes solo envía el input del jugador — cada cliente reconstruye la malla por sí mismo, así el tráfico es mínimo."),
    tags: ["NGO", "Marching Cubes", L("Physics", "Физика", "Físicas")],
  },
  {
    icon: "⟳", project: "aldo",
    title: L("Performance by design", "Производительность в архитектуре", "Rendimiento desde el diseño"),
    text: L("In every project: fewer Update() calls, objects updated in clusters and batches, data-oriented layout. In Aldo a single update manager drives everything by tick groups — frequent, rare and so on.",
            "Во всех проектах: меньше Update(), объекты обновляются кластерами и группами, data-oriented подход. В Aldo всё обновлял один менеджер по группам тиков — часто, редко и т. д.",
            "En todos los proyectos: menos llamadas a Update(), objetos actualizados en grupos y lotes, enfoque orientado a datos. En Aldo un único gestor lo actualiza todo por grupos de ticks — frecuente, raro, etc."),
    tags: [L("Update manager", "Менеджер апдейтов", "Gestor de updates"), "Data-oriented", L("Profiling", "Профилирование", "Perfilado")],
  },
  {
    icon: "◐", project: "lenin-street-geek-shop",
    title: L("Graphics optimization", "Оптимизация графики", "Optimización gráfica"),
    text: L("Effects, post-processing, shadows and SSAO tuned for the target frame rate. Shaders in HLSL and Shader Graph, VFX and lighting on URP.",
            "Эффекты, пост-процессинг, тени и SSAO под целевой FPS. Шейдеры на HLSL и Shader Graph, VFX и свет на URP.",
            "Efectos, post-procesado, sombras y SSAO ajustados al framerate objetivo. Shaders en HLSL y Shader Graph, VFX e iluminación en URP."),
    tags: ["URP", "HLSL", "Shader Graph", "SSAO"],
  },
  {
    icon: "▦", project: "aldo",
    title: L("Procedural worlds", "Процедурные миры", "Mundos procedurales"),
    text: L("Aldo's islands are generated with Wave Function Collapse (Tessera), so every run gives a new map with treasure, gear and survivors to find.",
            "Острова в Aldo генерируются через Wave Function Collapse (Tessera) — каждый заход новая карта с сокровищами, снаряжением и выжившими.",
            "Las islas de Aldo se generan con Wave Function Collapse (Tessera): cada partida es un mapa nuevo con tesoros, equipo y supervivientes."),
    tags: ["WFC", "Tessera"],
  },
  {
    icon: "☁", project: "aldo",
    title: L("Saves & Steam platform", "Сохранения и Steam", "Guardado y Steam"),
    text: L("Binary save files synced through Steam Cloud, achievements via Steamworks, 11 languages. Shipped builds for Steam, Google Play and the App Store.",
            "Сохранения в бинарном файле с синхронизацией через Steam Cloud, достижения через Steamworks, 11 языков. Выпускал билды в Steam, Google Play и App Store.",
            "Guardado en archivos binarios sincronizados con Steam Cloud, logros con Steamworks, 11 idiomas. He publicado builds en Steam, Google Play y App Store."),
    tags: ["Steamworks", "Steam Cloud", L("Localization", "Локализация", "Localización")],
  },
  {
    icon: "⚡", project: "sit-or-die",
    title: L("Fast prototyping", "Быстрое прототипирование", "Prototipado rápido"),
    text: L("Sit or Die went from zero to a playable game in 21 days for the Polden Publishing jam. The full source is open on GitHub. 10+ mobile prototypes before that.",
            "Sit or Die — от нуля до играбельной игры за 21 день для джема Polden Publishing. Исходники полностью открыты на GitHub. До этого — 10+ мобильных прототипов.",
            "Sit or Die pasó de cero a un juego jugable en 21 días para la jam de Polden Publishing. El código completo está abierto en GitHub. Antes, más de 10 prototipos móviles."),
    tags: ["GitHub", L("21 days", "21 день", "21 días")],
  },
];

window.STACK = [
  { group: L("Code", "Код", "Código"), main: true, items: ["C#", "HLSL", ".NET / Mono", "OOP · SOLID", "DI · Zenject / Extenject", "UniTask · async", "LINQ", "DOTween"] },
  { group: "Unity 6", main: true, items: ["URP · Render Pipeline", "Shader Graph", "Particle System · VFX", "Addressables", "NavMesh · Animator", "UGUI / Canvas", "Audio"] },
  { group: L("Systems", "Системы", "Sistemas"), main: true, items: ["Netcode for GameObjects", "Marching Cubes", "Wave Function Collapse", L("Binary saves + Steam Cloud", "Бинарные сохранения + Steam Cloud", "Guardado binario + Steam Cloud"), "Steamworks"] },
  { group: L("Performance", "Оптимизация", "Rendimiento"), items: [L("Update manager · tick groups", "Менеджер апдейтов · группы тиков", "Gestor de updates · grupos de ticks"), "Data-oriented design", L("Batched / clustered updates", "Обновление кластерами и группами", "Actualización por lotes"), L("Post-processing, shadows, SSAO", "Пост-процессинг, тени, SSAO", "Post-procesado, sombras, SSAO"), L("CPU / GPU / RAM profiling", "Профилирование CPU / GPU / RAM", "Perfilado de CPU / GPU / RAM")] },
  { group: L("Art", "Арт", "Arte"), items: [L("Blender — models, animation", "Blender — модели, анимация", "Blender — modelos, animación"), L("Figma — UI, texture atlases", "Figma — UI, текстурные атласы", "Figma — UI, atlas de texturas"), L("Photoshop — textures", "Photoshop — текстуры", "Photoshop — texturas"), L("Lighting", "Свет", "Iluminación")] },
  { group: L("Ship & Measure", "Релиз и аналитика", "Lanzamiento y analítica"), items: ["Steam (Win / macOS / Linux)", "Google Play", "App Store", "Firebase", "AppMetrica", "Unity Analytics / Ads"] },
  { group: L("Team", "Команда", "Equipo"), items: ["Git", "Plastic SCM", "Jira", "Confluence", "Google Workspace"] },
  { group: L("Exploring", "Изучаю", "Explorando"), items: [L("ECS / DOTS · Jobs · Burst — solo prototypes", "ECS / DOTS · Jobs · Burst — в соло-прототипах", "ECS / DOTS · Jobs · Burst — prototipos propios")] },
];
