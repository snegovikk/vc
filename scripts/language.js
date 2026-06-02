(function () {
  const translations = {
  "Vik Evstifeev": "Vik Evstifeev",
  "Show cases →": "Показать кейсы →",
  "Designer": "Дизайнер",
  "Currently": "Сейчас",
  "Kinopoisk": "Кинопоиск",
  "Links": "Ссылки",
  "Contacts": "Контакты",
  "cases": "кейсы",
  "readcv": "резюме",
  "linkedin": "лин",
  "Digital Product Designer ✦": "Дизайнер цифровых продуктов ✦",
  "Digital Product Designer": "Дизайнер цифровых продуктов",
  "Currently, I am designing": "Сейчас я проектирую",
  "✦ Creator of": "✦ Автор",
  "Appearance Plugin": "плагина Appearance",
  "Stockholm Icons": "иконок Stockholm",
  "Right Question": "Правильный вопрос",
  "Head of Growth Design @ Kinopoisk": "Руководитель дизайна роста @ Кинопоиск",
  "Head of Product Design @ Yandex Maps": "Руководитель продуктового дизайна @ Яндекс Карты",
  "Senior → Lead Product Designer @ Yandex Maps": "Старший → ведущий продуктовый дизайнер @ Яндекс Карты",
  "Senior Product Designer @ Bank Otkritie": "Старший продуктовый дизайнер @ Банк Открытие",
  "Product Designer @ Voltmobi": "Продуктовый дизайнер @ Voltmobi",
  "Designer @ PR-Solution": "Дизайнер @ PR-Solution",
  "About": "Обо мне",
  "I provide forward-thinking solutions from scratch to production. Currently, I am leading the growth design at Kinopoisk. I am responsible for business goals and the overall experience of user acquisition and engagement within the product.": "Я создаю перспективные решения от идеи до запуска в продукте. Сейчас я руковожу дизайном роста в Кинопоиске и отвечаю за бизнес-цели, привлечение пользователей и общий опыт вовлечения внутри продукта.",
  "Principles": "Принципы",
  "- Start with the problem": "- Начинать с проблемы",
  "- Create stories, not interfaces": "- Создавать истории, а не интерфейсы",
  "- Keep it simple": "- Делать проще",
  "Vik Evstifeev — CV": "Vik Evstifeev — резюме",
  "2025 — Now": "2025 — сейчас",
  "Head of Growth Design at Kinopoisk": "Руководитель дизайна роста в Кинопоиске",
  "I am responsible for business goals and the overall experience of user acquisition and engagement within the product.": "Я отвечаю за бизнес-цели, привлечение пользователей и общий опыт вовлечения внутри продукта.",
  "Head of Product Design at Yandex Maps": "Руководитель продуктового дизайна в Яндекс Картах",
  "I led a team that designs B2C products for Yandex Geo. I was responsible for the entire product: how it works, how it looks, and how it achieves its business goals.": "Я руководил командой, которая проектирует B2C-продукты Яндекс Гео. Я отвечал за весь продукт: как он работает, как выглядит и как достигает бизнес-целей.",
  "Senior → Lead Product Designer at Yandex": "Старший → ведущий продуктовый дизайнер в Яндексе",
  "Yandex Maps: Routes, Profile, Carplay & AA, Watch App, Maps tool, Design system": "Яндекс Карты: маршруты, профиль, CarPlay и Андроид Auto, приложение для часов, картографический инструмент, дизайн-система",
  "Senior Product Designer at Bank Otkritie": "Старший продуктовый дизайнер в Банке Открытие",
  "Website, Design system, Money Transactions App": "Сайт, дизайн-система, приложение для денежных переводов",
  "Designer at Voltmobi": "Дизайнер в Voltmobi",
  "Mobile Apps": "Мобильные приложения",
  "Designer at PR-Solution": "Дизайнер в PR-Solution",
  "Websites, LP, Mobile Apps": "Сайты, лендинги, мобильные приложения",
  "Side Projects": "Личные проекты",
  "Good design by Dieter Rams": "Хороший дизайн по Дитеру Рамсу",
  "Figma widget": "Виджет для Фигма",
  "I've collected top interview questions. If you are a Designer, Manager, or Developer, this helps a lot.": "Я собрал лучшие вопросы для интервью. Если вы дизайнер, менеджер или разработчик, это очень помогает.",
  "Appearance Figma Plugin": "Плагин Appearance для Фигма",
  "My plugin generates a dark/light theme from your selection in seconds.": "Мой плагин за секунды генерирует темную или светлую тему из выбранных элементов.",
  "Stockholm icon set": "Набор иконок Stockholm",
  "One of the most popular icon sets.": "Один из самых популярных наборов иконок.",
  "Education": "Образование",
  "Leadership communication at CBSD": "Лидерская коммуникация в CBSD",
  "Creativity at DESIGNWORKOUT": "Креативность в DESIGNWORKOUT",
  "Team management at Yandex Practicum": "Управление командой в Яндекс Практикуме",
  "Product Design at Yandex Summer School": "Продуктовый дизайн в Летней школе Яндекса",
  "Volunteering": "Волонтерство",
  "Lecturer & Mentor at Yandex Design School at Yandex": "Лектор и ментор Школы дизайна Яндекса",
  "I was the mentor of a group of 4 students. I gave two lectures on the topic of design systems and design handoff.": "Я был ментором группы из 4 студентов и прочитал две лекции о дизайн-системах и передаче дизайна в разработку.",
  "Vik Evstifeev | Interview": "Vik Evstifeev | Интервью",
  "What led you into design?": "Как вы пришли в дизайн?",
  "Design has always been part of my life. I’ve always liked making things. When I was young, I remember watching my father fix electronics. To me, it looked like a miracle. I watched with curiosity and tried to make things myself. It felt almost like an obsession. I was always trying to understand how things work, why they work, and what they are made for. I spent many evenings reading magazines and books about technology.": "Дизайн всегда был частью моей жизни. Мне всегда нравилось что-то делать руками. В детстве я смотрел, как отец чинит электронику, и для меня это выглядело как чудо. Я наблюдал с любопытством и пытался делать что-то сам. Это было почти навязчивым интересом: я все время хотел понять, как вещи устроены, почему они работают и для чего созданы. Многие вечера я проводил за журналами и книгами о технологиях.",
  "As a teenager, I learned programming and constantly tried to learn something new after school. I quickly understood a simple rule: when you create something new, how it works is very important. But how it looks is no less important. That’s when I became interested in product design and interface creation.": "Подростком я изучал программирование и после школы постоянно пытался узнать что-то новое. Довольно быстро я понял простое правило: когда создаешь что-то новое, очень важно, как это работает. Но не менее важно, как это выглядит. Тогда я и заинтересовался продуктовым дизайном и созданием интерфейсов.",
  "I got into Photoshop to create phone skins, websites, and concept interfaces. It was a passion for improving everything around me that you could see and touch. Over time, this passion became my first job in 2010.": "Я начал пользоваться Photoshop, чтобы делать темы для телефонов, сайты и концепты интерфейсов. Это была страсть к улучшению всего вокруг, что можно увидеть и потрогать. Со временем эта страсть стала моей первой работой в 2010 году.",
  "What does a typical day look like?": "Как выглядит ваш обычный день?",
  "I am an early riser. In summer, my day usually starts around 6 a.m. Every morning, I make black tea, water my plants, take a shower, read the news, and check my to-do list. On my way to work, I like listening to podcasts or interviews with inspiring people.": "Я рано встаю. Летом мой день обычно начинается около шести утра. Каждое утро я завариваю черный чай, поливаю растения, принимаю душ, читаю новости и проверяю список дел. По дороге на работу люблю слушать подкасты или интервью с вдохновляющими людьми.",
  "I start my workday by reviewing tasks. I collaborate closely with product and engineering teams and usually have several meetings to discuss processes and planning. For the rest of the time, I love diving into pixels and focused design work. A good day for me is a day when I’ve made something better.": "Рабочий день я начинаю с просмотра задач. Я тесно работаю с продуктовыми и инженерными командами, обычно провожу несколько встреч о процессах и планировании. Остальное время люблю погружаться в пиксели и сосредоточенную дизайнерскую работу. Хороший день для меня — это день, когда я сделал что-то лучше.",
  "After work, I spend my evenings at home reading or watching something.": "После работы я провожу вечера дома: читаю или что-то смотрю.",
  "What’s your workstation setup?": "Как устроено ваше рабочее место?",
  "At home, I work on an iMac 5K (2017) and a MacBook Air M2. At work, I use a MacBook Pro 15” (2019) and a Dell P2715Q.": "Дома я работаю за iMac 5K (2017) и MacBook Air M2. На работе использую MacBook Pro 15” (2019) и Dell P2715Q.",
  "Where do you go to get inspired?": "Где вы ищете вдохновение?",
  "I can find inspiration everywhere around me. It comes from materials, architecture, and interiors. I especially love nature. I feel lucky to be able to notice beauty in simple things.": "Я могу находить вдохновение во всем вокруг: в материалах, архитектуре и интерьерах. Особенно люблю природу. Мне повезло уметь замечать красоту в простых вещах.",
  "I enjoy traveling to different cities and countries. I often go for walks, observing nature or architecture, and paying attention to things I haven’t seen before. I like thinking about how people solve problems and design solutions for everyday routines. I’m a big fan of Swedish and Japanese interior design and architecture.": "Мне нравится путешествовать по разным городам и странам. Я часто гуляю, наблюдаю за природой или архитектурой и обращаю внимание на то, чего раньше не видел. Мне интересно думать, как люди решают проблемы и проектируют решения для повседневных сценариев. Я большой поклонник шведского и японского интерьерного дизайна и архитектуры.",
  "I also love Dribbble, Pinterest, and Instagram, where I try to find inspiration every day. I enjoy taking time to explore great products from tech companies, startups, and agencies.": "Еще я люблю Dribbble, Pinterest и Instagram, где стараюсь каждый день искать вдохновение. Мне нравится выделять время на изучение сильных продуктов технологических компаний, стартапов и агентств.",
  "What pieces of work are you most proud of?": "Какими работами вы больше всего гордитесь?",
  "That’s not an easy question. I’ve always been part of great teams. I’m proud of the fact that products I’ve designed are used by people every day.": "Это непростой вопрос. Я всегда был частью сильных команд. Я горжусь тем, что продуктами, которые я проектировал, люди пользуются каждый день.",
  "I also enjoy self-initiated projects. In 2018, I created an": "Мне также нравятся собственные проекты. В 2018 году я создал",
  "icon set called Stockholm": "набор иконок Stockholm",
  ". I’m very happy and proud that many people use it in their projects.": ". Я очень рад и горжусь тем, что многие люди используют его в своих проектах.",
  "One of my favorite projects is the": "Один из моих любимых проектов —",
  ". I developed it to help designers create dark themes in seconds. This solution is used by thousands of designers around the world.": ". Я разработал его, чтобы помогать дизайнерам создавать темные темы за секунды. Этим решением пользуются тысячи дизайнеров по всему миру.",
  "Another project I’m proud of is my apartment. I worked a lot on its design and concept, and I did almost all the renovation work myself. I’m very happy with how cozy it feels now.": "Еще один проект, которым я горжусь, — моя квартира. Я много работал над ее дизайном и концепцией и почти весь ремонт сделал сам. Мне очень нравится, насколько уютной она стала.",
  "What design challenges do you face at your company?": "С какими дизайн-вызовами вы сталкиваетесь в компании?",
  "Maps is a complex application. We work on many everyday scenarios, such as search and navigation. That’s why we need to keep the quality bar high. For me, the main challenge is designing a product that solves the needs of very different users within one application. We have a large team working on many types of problems.": "Карты — сложное приложение. Мы работаем над множеством повседневных сценариев, например поиском и навигацией. Поэтому нам важно держать высокую планку качества. Для меня главный вызов — проектировать продукт, который решает задачи очень разных пользователей внутри одного приложения. У нас большая команда, работающая с разными типами проблем.",
  "Any advice for ambitious designers?": "Что посоветуете амбициозным дизайнерам?",
  "Enjoy what you do every day. A product designer’s career is often closer to engineering than to art — it’s important to remember that. Iterate until you’re sure the solution feels right.": "Получайте удовольствие от того, что делаете каждый день. Карьера продуктового дизайнера часто ближе к инженерии, чем к искусству — об этом важно помнить. Итерируйте, пока не почувствуете, что решение стало правильным.",
  "Stay curious and flexible in your thinking. Learn new things, step outside your comfort zone, and pay attention to what truly excites you. Do the work you love.": "Оставайтесь любопытными и гибкими в мышлении. Учитесь новому, выходите из зоны комфорта и обращайте внимание на то, что вас по-настоящему увлекает. Делайте работу, которую любите.",
  "What product have you recently seen that made you think this is great design?": "Какой продукт недавно заставил вас подумать: это отличный дизайн?",
  "The Taccia lamp. It’s a floor lamp designed by Achille and Pier Giacomo Castiglioni in Italy in 1962. For me, it’s a great example of timeless design.": "Лампа Taccia. Это напольная лампа, созданная Акилле и Пьером Джакомо Кастильони в Италии в 1962 году. Для меня это отличный пример вневременного дизайна.",
  "What music do you listen to whilst designing?": "Какую музыку вы слушаете во время работы над дизайном?",
  "Project": "Проект",
  "Release": "Релиз",
  "Platform": "Платформа",
  "May, 2019": "Май, 2019",
  "Aug, 2021": "Август, 2021",
  "Mar, 2018": "Март, 2018",
  "Sep, 2020": "Сентябрь, 2020",
  "Aug, 2024": "Август, 2024",
  "Oct, 2022": "Октябрь, 2022",
  "March, 2021": "Март, 2021",
  "Team": "Команда",
  "Designer — Vik Evstifeev": "Дизайнер — Vik Evstifeev",
  "Product Manager": "Продакт-менеджер",
  "Developer": "Разработчик",
  "Developers": "Разработчики",
  "A lot of Developers": "Много разработчиков",
  "Analysts": "Аналитики",
  "Type": "Тип",
  "Used tools": "Инструменты",
  "New Apple Watch App": "Новое приложение для Apple Watch",
  "New App for CarPlay & Android Auto": "Новое приложение для CarPlay и Андроид Auto",
  "New internal tool": "Новый внутренний инструмент",
  "2 Frontend & 2 Backend Developers": "2 фронтенд- и 2 бэкенд-разработчика",
  "Apple Watch App": "Приложение для Apple Watch",
  "Vik Evstifeev | Apple Watch App": "Vik Evstifeev | Приложение для Apple Watch",
  " Watch is the most popular smartwatch in the world and allows users to get relevant information quickly. People use our mobile app to check traffic conditions and public transport. We decided it was important to bring these features to  Watch as well.": " Watch — самые популярные умные часы в мире, которые позволяют быстро получать нужную информацию. Люди используют наше мобильное приложение, чтобы проверять пробки и общественный транспорт. Мы решили, что важно перенести эти возможности и на  Watch.",
  "Having a maps app is essential for convenience, time saving, and safety. In 2018 we started the project with a focus on several key features.": "Приложение с картами важно для удобства, экономии времени и безопасности. В 2018 году мы начали проект, сосредоточившись на нескольких ключевых функциях.",
  "One of the most useful features of Yandex Maps is the ability to view the city from a bird’s-eye perspective. I had an idea to place compact modules with different types of information on a single screen. Navigation between them is done using the Digital Crown or finger scrolling.": "Одна из самых полезных возможностей Яндекс Карт — посмотреть на город с высоты. У меня появилась идея разместить компактные модули с разными типами информации на одном экране. Переключаться между ними можно с помощью цифровой короны или прокруткой пальцем.",
  "Starting from the top, the first module is the map itself. It is simple but critical. The main idea is to show the map directly on the main screen as a module. Each module can be tapped to access detailed information.": "Сверху расположен первый модуль — сама карта. Он простой, но критически важный. Главная идея — показывать карту прямо на главном экране как модуль. По каждому модулю можно нажать, чтобы открыть подробную информацию.",
  "The next module shows traffic conditions. Traffic prediction is based on the time travel feature, which helps users choose the best time to avoid congestion.": "Следующий модуль показывает дорожную ситуацию. Прогноз пробок основан на функции путешествия во времени, которая помогает выбрать лучшее время, чтобы избежать заторов.",
  "The app also provides real-time public transport information, including bus and metro schedules. This module focuses on up-to-date transport data.": "Приложение также показывает информацию об общественном транспорте в реальном времени, включая расписание автобусов и метро. Этот модуль сфокусирован на актуальных транспортных данных.",
  "The final module is weather. Weather conditions influence traffic and the comfort of waiting for public transport, so this information is an important part of the experience.": "Последний модуль — погода. Погодные условия влияют на трафик и комфорт ожидания общественного транспорта, поэтому эта информация важна для пользовательского опыта.",
  "To validate the concept, I created a detailed interactive prototype. At that time, it was not possible to test prototypes directly on a physical Apple Watch. The high-fidelity prototype helped answer all questions about how the app works.": "Чтобы проверить концепцию, я создал подробный интерактивный прототип. Тогда еще нельзя было тестировать прототипы прямо на физическом Apple Watch. Детальный прототип помог ответить на все вопросы о работе приложения.",
  "Your browser does not support the video tag.": "Ваш браузер не поддерживает видео.",
  "After release, the application was featured in the Best of watchOS 6 selection in 2019.": "После релиза приложение попало в подборку лучших приложений watchOS 6 в 2019 году.",
  "Vik Evstifeev | CarPlay & Android Auto": "Vik Evstifeev | CarPlay и Андроид Auto",
  " CarPlay and Android Auto are becoming increasingly popular, and most new cars support them. As a leading geo-application, Yandex is committed to staying at the forefront of innovation.": " CarPlay и Андроид Auto становятся все популярнее, и большинство новых автомобилей их поддерживает. Как ведущий геосервис, Яндекс стремится оставаться на переднем крае инноваций.",
  "Supporting CarPlay and Android Auto has been one of the most requested features by our users. By integrating these platforms, we aim to enhance the user experience and maintain our competitive edge in the market.": "Поддержка CarPlay и Андроид Auto была одной из самых частых просьб пользователей. Интегрируя эти платформы, мы хотели улучшить пользовательский опыт и сохранить конкурентное преимущество на рынке.",
  "The key challenge was to create two apps (Maps and Navigator) on two platforms. As a result, our apps are at the top of stores, and we published 4 apps in 1 day.": "Главный вызов был в том, чтобы создать два приложения (Карты и Навигатор) на двух платформах. В результате наши приложения оказались в топе магазинов, а мы выпустили 4 приложения за один день.",
  "I started with analytics and guides. New applications and young platforms are usually a problem.": "Я начал с аналитики и гайдов. Новые приложения и молодые платформы обычно создают много неопределенности.",
  "Also, if you're building something for cars, you need the right environment for testing first mockups.": "Если вы проектируете что-то для автомобилей, сначала нужна подходящая среда для тестирования первых макетов.",
  "The next step was the app architecture. The prototype showing starting screen and the freedrive mode.": "Следующим шагом была архитектура приложения. Прототип показывал стартовый экран и режим свободного движения.",
  "When the user starts moving, we hide the top bar and controls, which you can easily bring back if you touch the display or use the controls.": "Когда пользователь начинает движение, мы скрываем верхнюю панель и элементы управления. Их легко вернуть, коснувшись экрана или воспользовавшись контролами.",
  "The same on the driving screen:": "То же самое на экране движения:",
  "The key feature of CarPlay for us was the Dashboard. When you get into your car, you will immediately see Yandex Maps, it will start automatically.": "Ключевой возможностью CarPlay для нас была панель. Когда вы садитесь в машину, вы сразу видите Яндекс Карты: они запускаются автоматически.",
  "Driving mode:": "Режим движения:",
  "You can use your voice for searching places. After that, we show a map with the result on which you can select.": "Для поиска мест можно использовать голос. После этого мы показываем карту с результатом, который можно выбрать.",
  "Then once you have chosen a location we are ready to see the directions and start driving.": "Когда локация выбрана, можно посмотреть маршрут и начать движение.",
  "Here you can see lane hints on the map, speed limits with camera alerts, the ETA overview that shows all your route status.": "Здесь видны подсказки по полосам на карте, ограничения скорости с предупреждениями о камерах и обзор времени прибытия со статусом всего маршрута.",
  "We use contextual lane hints on the route from the mobile app, but we've simplified it and only show lanes without additional information.": "Мы используем контекстные подсказки по полосам из маршрута в мобильном приложении, но упростили их и показываем только полосы без дополнительной информации.",
  "A lot of testing and release.": "Много тестирования и релиз.",
  "As a result, our apps are at the top of stores, and we published 4 apps in 1 day.": "В результате наши приложения оказались в топе магазинов, а мы выпустили 4 приложения за один день.",
  "Vik Evstifeev | Cartograph": "Vik Evstifeev | Картограф",
  "We all use Figma or Sketch for interface design, but have you ever wondered what tool you need to create maps?": "Все мы используем Фигма или Скетч для дизайна интерфейсов, но задумывались ли вы, какой инструмент нужен для создания карт?",
  "If you are a big company, such as Yandex, you should have great tools and invest in your processes. That's why we developed Cartograph in 2018. It is our internal tool for creating and publishing maps.": "Если вы большая компания, такая как Яндекс, у вас должны быть сильные инструменты, и вам нужно инвестировать в процессы. Поэтому в 2018 году мы разработали Картограф — наш внутренний инструмент для создания и публикации карт.",
  "Here is a sneak peek of my work and the Cartograph interface.": "Ниже небольшой фрагмент моей работы и интерфейса Картографа.",
  "Working with layers. Each layer is a sheet of data to which a style is applied. You can edit individual layers as well as entire groups of layers.": "Работа со слоями. Каждый слой — это набор данных, к которому применяется стиль. Можно редактировать отдельные слои и целые группы слоев.",
  "Layer settings. Different types of data have their own settings.": "Настройки слоев. У разных типов данных есть свои настройки.",
  "Zoom logic. For precise adjustment across zoom levels, breakpoints or smooth value transitions are used.": "Логика зума. Для точной настройки на разных уровнях масштаба используются брейкпоинты или плавные переходы значений.",
  "Working with colors. The color picker supports all color schemes. Styles can be saved and updated.": "Работа с цветами. Палитра поддерживает все цветовые схемы. Стили можно сохранять и обновлять.",
  "Settings. You can choose to display all types of data and customize Cartograph to your liking.": "Настройки. Можно выбрать отображение разных типов данных и настроить Картограф под себя.",
  "JSON editor. You can write styles for the map using code if needed.": "редактор JSON. При необходимости стили карты можно писать кодом.",
  "Working with branches. Efficient branch management and release system similar to GitHub.": "Работа с ветками. Удобное управление ветками и релизная система, похожая на GitHub.",
  "And some design fun.": "И немного дизайнерского веселья.",
  "Mocks.": "Моки.",
  "Vik Evstifeev Cases": "Кейсы Vik Evstifeev",
  "October 2022": "Октябрь 2022",
  "Taxi orders in Yandex Maps": "Заказ такси в Яндекс Картах",
  "March 2021. August 2024": "Март 2021. Август 2024",
  "How we created a user profile in Yandex Maps": "Как мы создали профиль пользователя в Яндекс Картах",
  "August 2021": "Август 2021",
  "Yandex Maps and Navigator for  CarPlay and Android Auto": "Яндекс Карты и Навигатор для  CarPlay и Андроид Auto",
  "March 2021": "Март 2021",
  "Yandex Maps Traffic Widget": "Виджет пробок Яндекс Карт",
  "September 2020": "Сентябрь 2020",
  "My places. How we redesigned My places and created shared lists": "Мои места. Как мы переработали Мои места и создали общие списки",
  "May 2019": "Май 2019",
  "Yandex Maps for  Watch": "Яндекс Карты для  Watch",
  "March 2018": "Март 2018",
  "How we create tools at the Yandex Maps. Cartograph": "Как мы создаем инструменты в Яндекс Картах. Картограф",
  "Writing": "Статьи",
  "March 2020": "Март 2020",
  "How I created a Figma plugin that automatically generates dark themes": "Как я создал плагин для Фигма, который автоматически генерирует темные темы",
  "November 2019": "Ноябрь 2019",
  "How we use Figma’s API to deliver design to the production": "Как мы используем API Фигма, чтобы передавать дизайн в продакшен",
  "Speaking": "Выступления",
  "July 2021": "Июль 2021",
  "Design handoff. All stages and processes": "Передача дизайна. Все этапы и процессы",
  "June 2021": "Июнь 2021",
  "Dive into design systems. How does our product design team work with it": "Погружение в дизайн-системы. Как с ними работает наша продуктовая дизайн-команда",
  "September 2017": "Сентябрь 2017",
  "Presentations of the concept Yandex Music TV App": "Презентация концепта приложения Яндекс Музыки для TV",
  "Vik Evstifeev | My Places": "Vik Evstifeev | Мои места",
  "My Places": "Мои места",
  "Creating a \"My Lists and Places\" feature in a maps application can amplify user engagement by allowing users to save and organize their favorite locations, which increases the time they spend within the app.": "Функция «Мои списки и места» в картографическом приложении может усилить вовлечение: пользователи сохраняют и упорядочивают любимые места, а значит проводят в приложении больше времени.",
  "This feature also improves the user experience by providing a more personalized and convenient interface, making the app more valuable and useful to users.": "Эта функция также улучшает пользовательский опыт, делая интерфейс более персональным и удобным, а приложение — более ценным и полезным.",
  "Context and Problem": "Контекст и проблема",
  "Millions of people are using the Maps app every day. People love to save their favorite places on lists. And they have many reasons. Some people want to create a list with plans for the next trip. Or they keep these places in lists to find them in the interface faster. Also, people could start their user flow in one application and continue in another Yandex application.": "Миллионы людей каждый день пользуются Картами. Люди любят сохранять любимые места в списки, и причин много: кто-то планирует следующую поездку, кто-то хранит места, чтобы быстрее находить их в интерфейсе. Кроме того, пользователь может начать сценарий в одном приложении Яндекса и продолжить в другом.",
  "The main goal of this project was to set up a new data format for our updated My Places. One of the feature requirements was list sharing, which means we should have to create it privately. Our users should share the list with comments without any problems.": "Главная цель проекта — настроить новый формат данных для обновленных Моих мест. Одним из требований было совместное использование списков, поэтому мы должны были сделать приватное создание списков и дать пользователям возможность без проблем делиться ими с комментариями.",
  "Research and Setup": "Исследование и подготовка",
  "We're looking into how people use bookmarks these days. We dived into our analytics to see how many lists and places our users have. No brainer, people love places, but they don't use a lot of lists. They usually only use one list, which they have by default. There are two ways to save space in our product. First, by toponym or organization card. The second, of the long tap menu that you can use in any scenario.": "Мы изучили, как люди сейчас пользуются закладками. Погрузились в аналитику, чтобы понять, сколько списков и мест есть у пользователей. Оказалось очевидно: люди любят места, но редко используют много списков. Обычно они пользуются одним списком по умолчанию. В продукте есть два способа сохранить место: из карточки топонима или организации и через меню долгого нажатия, доступное в любом сценарии.",
  "We dived into app store user reviews and user requests for our product. People use bookmarks and want to share them. That has been one of the biggest user requests, and our competitor already has this feature.": "Мы изучили отзывы в магазинах приложений и пользовательские запросы. Люди пользуются закладками и хотят делиться ими. Это был один из самых частых запросов, и у конкурента такая функция уже была.",
  "We also received feedback from our users about the ability to leave a comment. They wanted it because if you share a list, very important to tell someone why this place is on your list. In most cases, this will be like a recommendation or a brief conclusion about places.": "Мы также получили обратную связь о возможности оставлять комментарии. Пользователям это было нужно: если делишься списком, важно объяснить, почему место в нем оказалось. В большинстве случаев это похоже на рекомендацию или краткий вывод о месте.",
  "The product manager and I agreed on the data format of the new lists. I dived in the mocks the manager started setting up the backend team.": "Мы с продакт-менеджером согласовали формат данных для новых списков. Я погрузился в макеты, а менеджер начал подключать бэкенд-команду.",
  "Process. My places": "Процесс. Мои места",
  "First, I tried to use one design pattern for all list items and remove Edit Mode. After a few iterations, my solution was clear. Now all list items will have a button ••• with options. There are various options for listings and locations on the menu. It is a good template for using the menu context menu.": "Сначала я попробовал использовать один дизайн-паттерн для всех элементов списков и убрать режим редактирования. После нескольких итераций решение стало понятным: у всех элементов списка будет кнопка ••• с опциями. В меню есть разные действия для списков и мест — это хороший шаблон для контекстного меню.",
  "In my solution, you can follow (save) the list from another user. But these lists have a difference. You can see that your lists and the subscribed lists have different designs. Your lists have the icon, and subscribed lists have photos. I decided to show the difference between these types of lists. If I use the same design, it looks identical. It means we have a problem recognizing which one lists belongs to you.": "В моем решении можно подписаться на список другого пользователя или сохранить его. Но такие списки отличаются: ваши списки и списки по подписке выглядят по-разному. У ваших есть иконка, у подписанных — фотографии. Я решил показать разницу между типами списков, потому что при одинаковом дизайне непонятно, какие списки принадлежат вам.",
  "The new search now uses the same list item component. You can see your places and a list we haven't shown before.": "Новый поиск теперь использует тот же компонент элемента списка. Можно увидеть свои места и список, который раньше мы не показывали.",
  "Creating list": "Создание списка",
  "First of all, let's discuss how to manage your lists. Previously, you could create lists, arrange them, and show or hide them on the map.": "Сначала обсудим управление списками. Раньше можно было создавать списки, сортировать их и показывать или скрывать на карте.",
  "For all our users, we have added several new features. Users can now select an icon for lists and add a description. The selected icon will use as a list marker on the map.": "Для всех пользователей мы добавили несколько новых возможностей: теперь можно выбрать иконку списка и добавить описание. Выбранная иконка используется как маркер списка на карте.",
  "For the color icon selection screen, I use the rubric icons. It is the same icons we used in maps (over 100 icons). For iOS, we wanted to add emoji support, but it's not easy because it should work on all platforms. By the way, the emoji had supported already by the hack. It works if you use the emoji of the first letter of the name.": "Для экрана выбора цветной иконки я использовал рубричные иконки — те же, что и в Картах, больше 100 штук. Для iOS мы хотели добавить поддержку эмодзи, но это непросто: функция должна работать на всех платформах. Кстати, эмодзи уже поддерживались через хак: можно использовать эмодзи первой буквы названия.",
  "Finally, it is how it looks on the map. I used zoom dependency and showed two icon sizes. As you get closer, you will see the name on the saved location. I supported a dark and light theme where I used some rules for a perfect display on the map.": "Вот как это выглядит на карте. Я использовал зависимость от масштаба и показал два размера иконок. При приближении видно название сохраненного места. Я поддержал темную и светлую темы и использовал правила для аккуратного отображения на карте.",
  "Process. Lists": "Процесс. Списки",
  "For places in lists, I use the same principle as with snippets on the main screen of lists. I have added ••• an options button also a comment (notes) module for each saved location. Tapping on input will open an input screen with a keyboard.": "Для мест в списках я использовал тот же принцип, что и для сниппетов на главном экране списков. Я добавил кнопку опций ••• и модуль комментария или заметки для каждого сохраненного места. Нажатие на поле открывает экран ввода с клавиатурой.",
  "The header also has ••• and buttons for Share and Add Place. For public lists, I use the same design. But additionally, show the author and a button to save or subscribe to this list.": "В шапке также есть ••• и кнопки «Поделиться» и «Добавить место». Для публичных списков я использовал тот же дизайн, но дополнительно показывал автора и кнопку сохранения или подписки.",
  "A description can contain a lot of text, which means the lists can be collections of places from influencers or publishers.": "Описание может содержать много текста, поэтому списки могут становиться подборками мест от инфлюенсеров или медиа.",
  "We show galleries for fists with organizations or place names that have images. It shows the first image from places in the list. We use this module in our organizations and toponyms.": "Мы показываем галереи для списков с организациями или местами, у которых есть изображения. В модуле отображается первое изображение из мест списка. Такой модуль мы используем в организациях и топонимах.",
  "Finally, we got the list screen. You can collapse the list and see all places on the map.": "В итоге получился экран списка. Список можно свернуть и увидеть все места на карте.",
  "Result": "Результат",
  "Two years passed from the beginning of the project to the final decision in production. We took small steps to integrate feature by feature to get a redesign. The big challenge for our team was to develop this solution on three platforms at the same time. We took our first step on the Desktop and Touch platform because it's the fastest way.": "От начала проекта до финального решения в продакшене прошло два года. Мы двигались маленькими шагами, внедряя функцию за функцией, чтобы прийти к редизайну. Большим вызовом для команды была одновременная разработка на трех платформах. Первый шаг мы сделали на десктопе и тач-версии, потому что это самый быстрый путь.",
  "Experiments with the new design have been successful. The user's feedback has been excellent. People love how it looks on a map. People are starting to use lists and share them.": "Эксперименты с новым дизайном оказались успешными. Пользовательская обратная связь была отличной. Людям нравится, как это выглядит на карте. Они начинают пользоваться списками и делиться ими.",
  "The final result is here. A lot of hard work and complicated development. It is just the beginning of our journey. Stay tuned for new major releases": "Финальный результат перед вами. Много сложной работы и непростой разработки. Это только начало пути — впереди новые крупные релизы.",
  "Vik Evstifeev | Profile": "Vik Evstifeev | Профиль",
  "Profile": "Профиль",
  "The UGC is what makes our product stand out in the market. A profile must effectively motivate and retain users to collect data.": "Пользовательский контент — то, что выделяет наш продукт на рынке. Профиль должен эффективно мотивировать и удерживать пользователей, чтобы они собирали данные.",
  "Now, we have the profile that allows feedback and photos collection, and lets you follow friends. It wasn't always this way.": "Теперь у нас есть профиль, который позволяет собирать отзывы и фотографии, а также подписываться на друзей. Так было не всегда.",
  "When I first started working on the profile in early 2020, we didn’t really have a profile, it was a menu.": "Когда я начал работать над профилем в начале 2020 года, у нас фактически не было профиля — было меню.",
  "This menu was cluttered. My first move was to extract the map settings into a separate control directly on the map.": "Это меню было перегружено. Первым шагом я вынес настройки карты в отдельный контрол прямо на карте.",
  "A layer control has appeared on the main screen. A tooltip explained the changes.": "На главном экране появился контрол слоев. Тултип объяснял изменения.",
  "Things got better, but it was still a menu. Let's add user attributes and transform the menu into a profile.": "Стало лучше, но это все еще было меню. Добавим пользовательские атрибуты и превратим меню в профиль.",
  "Profile entrypoint. We decided to make the search more prominent and move the new profile control there.": "Точка входа в профиль. Мы решили сделать поиск заметнее и перенести туда новый контрол профиля.",
  "Now, access to the profile is at the top level. Also we increased searches and logins.": "Теперь доступ к профилю находится на верхнем уровне. Заодно мы увеличили количество поисков и логинов.",
  "Now it looks like a profile. But does this profile solve the tasks of gathering and motivating? Not yet.": "Теперь это выглядит как профиль. Но решает ли он задачи сбора данных и мотивации? Пока нет.",
  "Let's use a web view for the profile's content to ensure flexibility and quickly test improvements.": "Используем веб-представление для содержимого профиля, чтобы сохранить гибкость и быстро тестировать улучшения.",
  "Let's add motivation through statistics and achievements. And let's add places you might have visited and ask you to rate them.": "Добавим мотивацию через статистику и достижения. А еще добавим места, которые пользователь мог посетить, и попросим их оценить.",
  "We are moving the profile items to an action carousel to free up space.": "Переносим элементы профиля в карусель действий, чтобы освободить место.",
  "From the top header, you can share and access settings. All states, done.": "Из верхней шапки можно поделиться профилем и открыть настройки. Все состояния готовы.",
  "This solution gathers content, but we should also curate it. People trust their friends, so let's enable following and a reviews feed.": "Это решение собирает контент, но его нужно еще и курировать. Люди доверяют друзьям, поэтому добавим подписки и ленту отзывов.",
  "We added feed snippets and widgets with followers.": "Мы добавили сниппеты ленты и виджеты с подписчиками.",
  "As a result, the profile is now easily accessible on the main screen and is actively used.": "В результате профиль теперь легко доступен с главного экрана и активно используется.",
  "We receive more data, users share more, users can follow friends, and the product becomes better.": "Мы получаем больше данных, пользователи чаще делятся контентом, могут подписываться на друзей, а продукт становится лучше.",
  "Vik Evstifeev | Taxi": "Vik Evstifeev | Такси",
  "Taxi": "Такси",
  "Maps help users navigate from point A to B, and taxi services are a natural extension of this utility ✦ We aimed to enhance user engagement and expand transactional opportunities by integrating taxi ordering into Yandex Maps, creating a seamless experience within the app ✦": "Карты помогают пользователям добираться из точки A в точку B, а такси — естественное продолжение этой пользы ✦ Мы хотели усилить вовлечение и расширить транзакционные сценарии, встроив заказ такси в Яндекс Карты и создав цельный опыт внутри приложения ✦",
  "metrics. you can't fix what you can't measure. we will work with taxi orders, newcomers, user retention, and conversation rate.": "метрики. нельзя улучшить то, что нельзя измерить. мы будем работать с заказами такси, новичками, удержанием и конверсией.",
  "↓ research. below is illustrating how users place taxi orders within our app": "↓ исследование. ниже показано, как пользователи заказывают такси в нашем приложении",
  "... it seems that ordering a taxi is not easy": "... кажется, заказать такси не так просто",
  "↓ research. let's ask people": "↓ исследование. спросим людей",
  "result. many people don't know they can order a taxi in Maps. they search for places and build a route here, then open the taxi app": "результат. многие не знают, что в Картах можно заказать такси. они ищут места и строят маршрут здесь, а затем открывают приложение такси",
  "↓ experiment. ok, let's add a taxi order button to the relevant scenarios (search / transit / routes)": "↓ эксперимент. добавим кнопку заказа такси в релевантные сценарии: поиск, транспорт и маршруты",
  "↓ experiment. we will show a taxi alternative for all types of routes": "↓ эксперимент. покажем альтернативу на такси для всех типов маршрутов",
  "car routes ↓": "автомобильные маршруты ↓",
  "public transport routes ↓": "маршруты на общественном транспорте ↓",
  "taxi orders are growing! ↗": "заказы такси растут! ↗",
  "problem. click-outs convert to orders significantly worse than orders made within the app ✦": "проблема. переходы наружу конвертируются в заказы значительно хуже, чем заказы внутри приложения ✦",
  "what if we keep our users inside our app? but how? maybe fullscreen webview!": "что если оставить пользователей внутри приложения? но как? возможно, полноэкранное веб-представление!",
  "↓ process. we need tariffs": "↓ процесс. нам нужны тарифы",
  "↓ process. also payment methods": "↓ процесс. а еще способы оплаты",
  "of course, settings. done ⤷": "конечно, настройки. готово ⤷",
  "↓ process. and the order status": "↓ процесс. и статус заказа",
  "we'll use them for all transactions in our product": "мы будем использовать их для всех транзакций в продукте",
  "↓ process. what about my orders history? done ⤷": "↓ процесс. а как же история заказов? готово ⤷",
  "↓ process. our orders are growing ↑ but you do not seriously grow anything without an entry point on the main screen ✦": "↓ процесс. заказы растут ↑ но серьезно вырастить что-то без точки входа на главном экране невозможно ✦",
  "↓ process. pick up time and other features like in other taxi apps": "↓ процесс. время подачи и другие функции, как в такси-приложениях",
  "→ result. we have significantly increased taxi orders, and they continue to grow. we are the top choice for new user acquisition, and millions of people use our service": "→ результат. мы значительно увеличили количество заказов такси, и они продолжают расти. мы стали главным источником привлечения новых пользователей, а сервисом пользуются миллионы людей",
  "Vik Evstifeev | Traffic Widget": "Vik Evstifeev | Виджет пробок",
  "Traffic Widget": "Виджет пробок",
  "iOS 14 gave users the ability to add widgets to any screen. We decided to support this feature in Yandex Maps, starting with one of the main reasons people use Maps every day — traffic information.": "iOS 14 дала пользователям возможность добавлять виджеты на любой экран. Мы решили поддержать эту функцию в Яндекс Картах, начав с одной из главных причин ежедневного использования Карт — информации о пробках.",
  "Process": "Процесс",
  "My first idea was to create a level-based widget without a map. It simplified the way we could show traffic conditions using color coding and travel time to work or home.": "Моя первая идея — создать виджет уровня пробок без карты. Это упрощало показ дорожной ситуации через цветовую кодировку и время в пути до работы или дома.",
  "I tried several color options, but many of them felt too aggressive and distracting.": "Я попробовал несколько цветовых вариантов, но многие выглядели слишком агрессивно и отвлекали.",
  "The main issue with this approach was context. The traffic level represented the whole city and didn’t reflect the user’s actual location.": "Главная проблема подхода — контекст. Уровень пробок отражал весь город и не показывал реальную ситуацию вокруг пользователя.",
  "I explored an analogy with the weather widget. However, unlike weather, traffic conditions vary significantly within a city, which made a single level misleading.": "Я рассматривал аналогию с погодным виджетом. Но в отличие от погоды, дорожная ситуация сильно меняется внутри города, поэтому единый уровень мог вводить в заблуждение.",
  "That’s why I decided to show the actual map with a traffic layer. It allows users to understand the real situation around them. The traffic forecast remained useful, and the route button became more prominent.": "Поэтому я решил показывать настоящую карту со слоем пробок. Так пользователи понимают реальную ситуацию вокруг себя. Прогноз пробок остался полезным, а кнопка маршрута стала заметнее.",
  "For small and medium widgets, the map covers roughly a 2 km radius. On larger devices, users see a wider area.": "В маленьком и среднем виджетах карта покрывает примерно радиус 2 км. На больших устройствах пользователи видят более широкую область.",
  "This approach helps users make quick decisions — whether to go home, go to work, or choose a different route — based on visible congestion nearby.": "Такой подход помогает быстро принимать решения — ехать домой, на работу или выбрать другой маршрут — на основе видимых пробок рядом.",
  "The widget uses the same color palette as the main application, with four traffic congestion levels.": "Виджет использует ту же палитру, что и основное приложение, с четырьмя уровнями загруженности дорог.",
  "The medium widget combines the map and forecast in one interface. Users can see citywide traffic, local congestion, and open routes or directions using the ETA button.": "Средний виджет объединяет карту и прогноз в одном интерфейсе. Пользователи видят пробки по городу, локальные заторы и могут открыть маршруты или направления через кнопку времени прибытия.",
  "Weather conditions are also shown, as they can directly affect traffic and decision-making.": "Погода тоже отображается, потому что она напрямую влияет на трафик и принятие решений.",
  "The large widget displays an extended map with a 6-hour traffic forecast.": "Большой виджет показывает расширенную карту с прогнозом пробок на 6 часов.",
  "Dark mode is supported and follows system settings.": "Поддерживается темная тема, которая следует системным настройкам.",
  "For small widgets, I used the optical center instead of the geometric center. Placing the location exactly in the center looked visually unbalanced.": "В маленьких виджетах я использовал оптический центр вместо геометрического. Точное размещение локации по центру выглядело визуально несбалансированно.",
  "On Android, we support all widget grid sizes and provide settings during widget setup.": "На Андроид мы поддерживаем все размеры сетки виджетов и показываем настройки при установке.",
  "Android users can configure traffic layers, map scale, and update intervals, making the widget flexible for power users.": "Пользователи Андроид могут настроить слои пробок, масштаб карты и интервалы обновления, что делает виджет гибким для продвинутых пользователей.",
  "Different zoom levels (14, 12, 10) provide control over map scale.": "Разные уровни зума (14, 12, 10) дают контроль над масштабом карты.",
  "I designed onboarding screens explaining how to add widgets, especially important for iOS where widgets were a new feature.": "Я спроектировал экраны первого знакомства, объясняющие, как добавлять виджеты. Это было особенно важно для iOS, где виджеты были новой функцией.",
  "Today, thousands of people use this widget daily on iOS and Android. Knowing that this work helps people make better everyday decisions is the most valuable outcome.": "Сегодня тысячи людей ежедневно пользуются этим виджетом на iOS и Андроид. Самый ценный результат — понимать, что эта работа помогает людям принимать лучшие повседневные решения.",
  "@dsgn_surface": "@dsgn_surface",
  "55.7558° N, 37.6173° E": "55.7558° N, 37.6173° E",
  "dribbble": "дриббл",
  "github": "гитхаб",
  "figma": "фигма",
  "medium": "медиум",
  "YM01": "YM01",
  "YM02": "YM02",
  "YM03": "YM03",
  "YM04": "YM04",
  "YM05": "YM05",
  "YM06": "YM06",
  "YM07": "YM07",
  "CP & AA": "CP и AA",
  "watchOS": "watchOS",
  "iOS": "iOS",
  "Android": "Андроид",
  "Web": "Веб",
  "Figma": "Фигма",
  "Sketch": "Скетч",
  "Principle": "Принсипл",
  "Cartograph": "Картограф",
  "@faraferrari": "@faraferrari",
  "Atom Auto": "Атом Авто",
  "Atom": "Атом",
  "P1nmark": "P1nmark",
  "MTS Auto": "МТС Авто",
  "2025 — ✦": "2025 — ✦",
  "55.706294° N, 37.623941° E": "55.706294° N, 37.623941° E",
  "2014 — 2015": "2014 — 2015",
  "2015 — 2016": "2015 — 2016",
  "2016 — 2017": "2016 — 2017",
  "2017 — 2021": "2017 — 2021",
  "2021 — 2025": "2021 — 2025",
  "2017": "2017",
  "2018": "2018",
  "2019": "2019",
  "2020": "2020",
  "2021": "2021",
  "2022": "2022",
  "2024": "2024",
  "2025": "2025",
  "fb": "фб",
  "in": "лин",
  "Cases": "Кейсы",
  "Selected projects": "Избранные проекты",
  "←": "←",
  "November 2019": "Ноябрь 2019",
  "July 2021": "Июль 2021",
  "June 2021": "Июнь 2021",
  "Work Experience": "Опыт работы",
  "Contact": "Контакты",
  "Website": "Сайт",
  "LinkedIn": "LinkedIn",
  "Dribbble": "Dribbble",
  "Behance": "Behance",
  "Github": "Github",
  "Хабр": "Habr",
  "VC": "VC",
  "GitHub": "GitHub",
  "Yandex case": "Кейс Яндекс",
  "Taxi case": "Кейс Такси",
  "Watch": "Часы",
  "Case 2": "Кейс 2",
  "Concept": "Концепт",
  "Stockholm": "Стокгольм",
  "Mobile case": "Мобильный кейс",
  "Apple Watch app overview screen": "Обзорный экран приложения для Apple Watch",
  "Modular layout of map features on Apple Watch": "Модульная раскладка функций карты на Apple Watch",
  "Map module displayed on the main Apple Watch screen": "Модуль карты на главном экране Apple Watch",
  "Traffic prediction module on Apple Watch": "Модуль прогноза пробок на Apple Watch",
  "Public transport timetable module on Apple Watch": "Модуль расписания транспорта на Apple Watch",
  "Weather information module on Apple Watch": "Модуль погоды на Apple Watch",
  "Apple Watch app featured in Best of watchOS 6": "Приложение для Apple Watch в подборке лучших watchOS 6",
  "CarPlay main interface": "Главный интерфейс CarPlay",
  "Testing environment for CarPlay": "Среда тестирования CarPlay",
  "Driving mode interface": "Интерфейс режима движения",
  "Driving screen layout": "Экран режима движения",
  "CarPlay dashboard": "Панель CarPlay",
  "Driving mode overview": "Обзор режима движения",
  "Navigation in driving mode": "Навигация в режиме движения",
  "Voice search result": "Результат голосового поиска",
  "Route overview": "Обзор маршрута",
  "Lane hints and ETA": "Подсказки по полосам и время прибытия",
  "Simplified lane hints": "Упрощённые подсказки по полосам",
  "Testing phase": "Этап тестирования",
  "Release preparation": "Подготовка к релизу",
  "Final result": "Финальный результат",
  "Cartograph main interface": "Главный интерфейс Картографа",
  "Working with layers in Cartograph": "Работа со слоями в Картографе",
  "Layer settings panel": "Панель настроек слоя",
  "Additional layer settings": "Дополнительные настройки слоя",
  "Zoom logic example": "Пример логики зума",
  "Zoom breakpoints configuration": "Настройка брейкпоинтов зума",
  "Color picker interface": "Интерфейс выбора цвета",
  "Color styles configuration": "Настройка цветовых стилей",
  "Global settings screen": "Экран глобальных настроек",
  "Additional settings options": "Дополнительные настройки",
  "JSON style editor": "Редактор JSON-стилей",
  "Branch management interface": "Интерфейс управления ветками",
  "Experimental map styles": "Экспериментальные стили карты",
  "Initial profile state": "Начальное состояние профиля",
  "Early menu version": "Ранняя версия меню",
  "Map settings extracted": "Настройки карты вынесены отдельно",
  "Layer control tooltip": "Тултип контрола слоёв",
  "Profile attributes added": "Добавлены атрибуты профиля",
  "Profile entrypoint": "Точка входа в профиль",
  "Profile on top level": "Профиль на верхнем уровне",
  "Web view profile": "Профиль в веб-представлении",
  "Statistics and achievements": "Статистика и достижения",
  "Action carousel": "Карусель действий",
  "Header actions": "Действия в шапке",
  "Following and feed": "Подписки и лента",
  "Feed snippets": "Сниппеты ленты",
  "Followers widgets": "Виджеты подписчиков",
  "Final profile state": "Финальное состояние профиля",
  "Apple Watch": "Умные часы Apple",
  "Voltmobi": "Voltmobi",
  "Alan Temiraev": "Alan Temiraev",
  "Alina Starostina": "Alina Starostina",
  "Ann Marushkina": "Ann Marushkina",
  "Asya Molchanova": "Asya Molchanova",
  "Danny Udobnyi": "Danny Udobnyi",
  "Daria V.": "Daria V.",
  "Dasha Baryshnikova": "Dasha Baryshnikova",
  "Dmitriy Bogdashkin": "Dmitriy Bogdashkin",
  "Dmitriy Timofeev": "Dmitriy Timofeev",
  "Evgenia Onosova": "Evgenia Onosova",
  "Ilia Aleksandrov": "Ilia Aleksandrov",
  "Ilia Lebedev": "Ilia Lebedev",
  "Katarina Petrenko": "Katarina Petrenko",
  "Michael Yarygin": "Michael Yarygin",
  "Mike Lukashin": "Mike Lukashin",
  "Misha Anikin": "Misha Anikin",
  "Nikita Stepanov": "Nikita Stepanov",
  "Olga Sartakova": "Olga Sartakova",
  "Pavel Pershin": "Pavel Pershin",
  "Sasha Vagichev": "Sasha Vagichev",
  "Scud Kotonog": "Scud Kotonog",
  "Sergei Marchenko": "Sergei Marchenko",
  "Sergy Minkin": "Sergy Minkin",
  "Vladislav Denisov": "Vladislav Denisov",
  "Yar Saezov": "Yar Saezov"
};
  const skippedTexts = new Set(['RU', 'EN']);

  const normalize = (value) => value
    .replace(/\u00a0/g, ' ')
    .replace(/\u2019/g, "'")
    .replace(/\u2018/g, "'")
    .replace(/\u201c/g, '"')
    .replace(/\u201d/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

  const englishLookup = {};
  const russianLookup = {};
  for (const [en, ru] of Object.entries(translations)) {
    englishLookup[normalize(en)] = en;
    russianLookup[normalize(ru)] = en;
  }

  function resolveKey(value) {
    const key = normalize(value);
    if (!key || skippedTexts.has(key)) return null;
    return englishLookup[key] || russianLookup[key] || null;
  }

  const titleTranslations = {
    "Vik Evstifeev": "Vik Evstifeev",
    "Vik Evstifeev — CV": "Vik Evstifeev — резюме",
    "Vik Evstifeev | Interview": "Vik Evstifeev | Интервью",
    "Vik Evstifeev | Apple Watch App": "Vik Evstifeev | Приложение для Apple Watch",
    "Vik Evstifeev | CarPlay & Android Auto": "Vik Evstifeev | CarPlay и Android Auto",
    "Vik Evstifeev | Cartograph": "Vik Evstifeev | Картограф",
    "Vik Evstifeev Cases": "Кейсы Vik Evstifeev",
    "Vik Evstifeev | My Places": "Vik Evstifeev | Мои места",
    "Vik Evstifeev | Profile": "Vik Evstifeev | Профиль",
    "Vik Evstifeev | Taxi": "Vik Evstifeev | Такси",
    "Vik Evstifeev | Traffic Widget": "Vik Evstifeev | Виджет пробок"
  };

  const textNodes = [];
  const attrNodes = [];

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const key = resolveKey(node.nodeValue);
      if (key) {
        textNodes.push({
          node,
          key,
          prefix: node.nodeValue.match(/^\s*/)[0],
          suffix: node.nodeValue.match(/\s*$/)[0]
        });
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(node.tagName)) return;
    if (node.closest?.('.language-switcher')) return;

    for (const attr of ['alt', 'title']) {
      if (!node.hasAttribute(attr)) continue;
      const key = resolveKey(node.getAttribute(attr));
      if (key) attrNodes.push({ node, attr, key });
    }

    for (const child of Array.from(node.childNodes)) walk(child);
  }

  function applyLanguage(language) {
    const isRussian = language === 'ru';
    for (const item of textNodes) {
      item.node.nodeValue = item.prefix + (isRussian ? translations[item.key] : item.key) + item.suffix;
    }
    for (const item of attrNodes) {
      item.node.setAttribute(item.attr, isRussian ? translations[item.key] : item.key);
    }
    const titleKey = Object.keys(titleTranslations).find((title) => title === document.title || titleTranslations[title] === document.title);
    if (titleKey) document.title = isRussian ? titleTranslations[titleKey] : titleKey;
    document.documentElement.lang = isRussian ? 'ru' : 'en';
    document.documentElement.dataset.language = language;
    localStorage.setItem('site-language', language);
    const ruButton = document.querySelector('[data-language-choice="ru"]');
    const enButton = document.querySelector('[data-language-choice="en"]');
    if (ruButton && enButton) {
      ruButton.classList.toggle('is-active', isRussian);
      enButton.classList.toggle('is-active', !isRussian);
      ruButton.setAttribute('aria-pressed', String(isRussian));
      enButton.setAttribute('aria-pressed', String(!isRussian));
    }
  }

  function createLanguageSwitcher() {
    const style = document.createElement('style');
    style.textContent = `
      .language-switcher {
        display: inline-flex;
        gap: 12px;
      }
      .language-switcher--inline {
        display: flex;
        margin-top: 16px;
      }
      .language-switcher--fixed {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 9999;
        gap: 4px;
        padding: 4px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }
      .language-switcher__button {
        border: 0;
        padding: 0;
        background: transparent;
        color: var(--text, #000);
        font: 500 16px/24px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        cursor: pointer;
        opacity: 0.45;
        transition: opacity .2s;
      }
      .language-switcher--fixed .language-switcher__button {
        border-radius: 999px;
        padding: 7px 10px;
        font: 600 12px/1 -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .language-switcher__button.is-active {
        opacity: 1;
      }
      .language-switcher--fixed .language-switcher__button.is-active {
        background: #000;
        color: #fff;
      }
      .theme-dark .language-switcher--fixed {
        border-color: rgba(255, 255, 255, 0.14);
        background: rgba(20, 20, 20, 0.82);
      }
      .theme-dark .language-switcher--fixed .language-switcher__button { color: #fff; }
      .theme-dark .language-switcher--fixed .language-switcher__button.is-active { background: #fff; color: #000; }
      @media (max-width: 640px) {
        .language-switcher--fixed { top: 12px; left: 12px; }
      }
      html[data-hide-language-switcher] .language-switcher {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.setAttribute('aria-label', 'Language switcher');
    switcher.innerHTML = `
      <button class="language-switcher__button" type="button" data-language-choice="ru">RU</button>
      <button class="language-switcher__button" type="button" data-language-choice="en">EN</button>
    `;
    switcher.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language-choice]');
      if (button) applyLanguage(button.dataset.languageChoice);
    });

    const metaDd = document.querySelector('.project-meta__item dd');
    if (metaDd) {
      switcher.classList.add('language-switcher--inline');
      metaDd.appendChild(switcher);
    } else {
      switcher.classList.add('language-switcher--fixed');
      document.body.appendChild(switcher);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    walk(document.body);
    createLanguageSwitcher();
    const initialLanguage = localStorage.getItem('site-language') || 'ru';
    applyLanguage(initialLanguage === 'en' ? 'en' : 'ru');
  });
}());
