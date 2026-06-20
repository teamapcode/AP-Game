// ==========================================
// ====== مدیریت زبان (دو زبانه) ======
// ==========================================

let currentLang = localStorage.getItem('apgame_lang') || 'fa';

const translations = {
  fa: {
    'nav-home': '🏠 خانه',
    'nav-news': '📰 اخبار',
    'nav-games': '🎮 بازی‌ها',
    'nav-challenge': '🏆 چالش',
    'nav-rewards': '🎁 جوایز',
    'nav-about': '📖 درباره ما',
    'nav-privacy': '🔒 حریم خصوصی',
    'logout': '🚪 خروج',
    
    'banner-title1': '🎮 به دنیای گیم خوش آمدید!',
    'banner-desc1': 'آخرین اخبار، معرفی بازی‌های برتر و چالش‌های هفتگی را در AP Game دنبال کنید.',
    'banner-btn1': 'مشاهده اخبار',
    'banner-title2': '📰 جدیدترین اخبار بازی',
    'banner-desc2': 'همیشه از آخرین رویدادهای دنیای گیم مطلع باش!',
    'banner-btn2': 'خواندن اخبار',
    'banner-title3': '🏆 چالش هفتگی',
    'banner-desc3': 'هر هفته یک چالش جدید برای گیمرهای حرفه‌ای!',
    'banner-btn3': 'مشاهده چالش‌ها',
    
    'text-slide1': '🔥 AP Game\nمرجع تخصصی اخبار و معرفی بازی',
    'text-slide2': '🎮 معرفی بازی‌های روز دنیا\nبه‌روزترین نقد و بررسی‌ها',
    'text-slide3': '📰 اخبار دنیای بازی\nاولین منبع خبری گیمینگ ایران',
    'text-slide4': '🏆 چالش‌های هفتگی\nبا ما همراه باش و برنده شو!',
    
    'news-title': '📰 آخرین اخبار بازی',
    'news-badge1': '🔥 داغ',
    'news-title1': '🧟‍♂️ ماد کوآپ برای Resident Evil 4 Remake',
    'news-preview1': 'دیگه لازم نیست تنهایی از دست غول‌ها فرار کنی! ماد جدید امکان تجربه داستان RE4 را به صورت دو نفره فراهم کرده...',
    'news-readmore': '📖 ادامه مطلب',
    'news-full1': '🎮 ماد چگونه کار می‌کند؟<br>این ماد که با نام «Multiplayer Mod - Resident Evil 4» در وب‌سایت NexusMods در دسترس است، در حال حاضر در مرحله بتا قرار دارد. ایده اصلی آن همگام‌سازی کامل دو بازی به صورت لحظه‌ای است تا هر دو بازیکن بتوانند:',
    'news-list1': '<li>✅ همزمان در کمپین پیشروی کنند</li><li>✅ دشمنان یکسان را ببینند</li><li>✅ رویدادهای داستانی را با هم تجربه کنند</li><li>✅ درها و سوئیچ‌ها را به صورت هماهنگ باز کنند</li>',
    'news-full2': '⚠️ اما همه چیز کامل نیست!<br>از آنجایی که این ماد هنوز در مراحل اولیه توسعه قرار دارد، ممکن است با مشکلاتی مانند افت فریم در مناطق خاص و همگام‌سازی ناقص دشمنان مواجه شوید.',
    'news-quote': '💬 نظر شما چیست؟<br>آیا تجربه Resident Evil 4 Remake به صورت دو نفره برای شما جذاب است؟',
    'news-download': '🔗 دانلود ماد از NexusMods',
    'news-badge2': '🆕 جدید',
    'news-title2': '⚔️ تاریخ عرضه Shinobi: Art of Vengeance برای سوییچ ۲ اعلام شد',
    'news-preview2': 'سگا رسماً تأیید کرد که بازی Shinobi: Art of Vengeance ماه سپتامبر برای کنسول جدید نینتندو سوییچ ۲ عرضه می‌شود...',
    'news-full3': 'متن کامل خبر دوم...',
    'close': '✖ بستن',
    
    'games-title': '🎮 لیست طلایی: ۱۰ بازی برتر',
    'genre-action': '🎬 ژانر: اکشن • جهان‌باز',
    'genre-adventure': '🎨 ژانر: ماجراجویی • خلاقیت',
    'genre-rpg': '⚔️ ژانر: RPG • سولزلایک',
    'genre-fps': '🎯 ژانر: FPS • تاکتیکی',
    'genre-moba': '🏰 ژانر: MOBA • استراتژی',
    'genre-social': '🗣️ ژانر: اجتماعی • پارانویا',
    'game-full1': 'معرفی کامل:',
    'game-preview1': 'دنیای بی‌پایان لوس سانتوس...',
    'game-desc1': 'در شهر بزرگ "لوس سانتوس"، شما تنها یک بازیکن نیستید، بلکه بخشی از یک اکوسیستم زنده هستید. می‌توانید از رانندگی با خودروهای لوکس لذت ببرید، در ماموریت‌های جنایی پیچیده شرکت کنید یا در بخش آنلاین، با دوستان خود به دنبال هیجان باشید. 💥',
    'game-suitable1': '🎯 مناسب برای: عاشقان دنیای باز و اکشن',
    'game-preview2': 'دنیای بی‌نهایت خلاقیت...',
    'game-desc2': 'مینکرفت یک بازی نیست، یک دنیای بی‌انتهاست! در این بازی، محدودیت تنها با تخیل شما تعریف می‌شود. از ساخت یک کلبه چوبی کوچک شروع کنید تا برسید به ساختن کاخ‌های عظیم یا حتی بازسازی شهرهای واقعی. 🏰',
    'game-suitable2': '🎯 مناسب برای: تمام سنین و علاقه‌مندان به خلاقیت',
    'game-preview3': 'سخت‌ترین و زیباترین چالش...',
    'game-desc3': 'اگر به دنبال چالشی هستید که لرزه بر اندام‌تان بیندازد، Elden Ring همان جایی است که باید باشید. مبارزات بسیار دقیق و سخت است؛ اما وقتی یک باس‌فایت دشوار را شکست دهید، لذتی وصف‌ناپذیر خواهید داشت! 🔥',
    'game-suitable3': '🎯 مناسب برای: گیمرهای حرفه‌ای و عاشقان چالش',
    'game-preview4': 'آزادی مطلق در سرزمین هایرول...',
    'game-desc4': 'زلدا با این نسخه، مفهوم "بازی جهان‌باز" را از نو تعریف کرد. در سرزمین هایرول، شما محدود به مسیرهای مشخص نیستید. می‌خواهید از کوه‌ها بالا بروید؟ می‌توانید! می‌خواهید با فیزیک بازی، راهی جدید برای حل معماها پیدا کنید؟ کاملاً ممکن است! 🧩',
    'game-suitable4': '🎯 مناسب برای: عاشقان ماجراجویی و آرامش',
    'game-preview5': 'مرثیه‌ای باشکوه برای غرب وحشی...',
    'game-desc5': 'با یکی از عمیق‌ترین و احساسی‌ترین داستان‌های تاریخ گیم روبرو هستید. جزئیات این بازی فراتر از حد تصور است؛ از نحوه واکنش حیوانات تا تغییرات آب و هوا. این بازی فقط یک بازی نیست، یک تجربه زندگی است. ❤️',
    'game-suitable5': '🎯 مناسب برای: عاشقان داستان‌های حماسی',
    'game-preview6': 'در دنیای هیولاها، انتخاب‌ها سنگین هستند...',
    'game-desc6': 'در نقش "گرالت"، یک شکارچی هیولا، شما باید در دنیایی جادویی و پر از آشوب سفر کنید. چیزی که ویچر ۳ را متمایز می‌کند، قدرت داستان‌گویی آن است. حتی کوچک‌ترین ماموریت‌های جانبی دارای داستانی عمیق و شخصیت‌های جذاب هستند. 📜',
    'game-suitable6': '🎯 مناسب برای: طرفداران فانتزی و داستان‌های پیچیده',
    'game-preview7': 'خشم خدایان و پیوند پدر و فرزندی...',
    'game-desc7': 'ادامه سفر حماسی کرتوس در اساطیر اسکاندیناوی، تجربه‌ای است که تمام حواس شما را درگیر می‌کند. مبارزات سنگین، سریع و با گرافیکی خیره‌کننده انجام می‌شود. فراتر از اکشن، بازی به بررسی رابطه پیچیده کرتوس و پسرش می‌پردازد. ❤️‍🔥',
    'game-suitable7': '🎯 مناسب برای: عاشقان اکشن و اساطیر',
    'game-preview8': 'تیراندازی، استراتژی و سرعت عمل...',
    'game-desc8': 'اگر فکر می‌کنید سرعت عمل و دقت در نشانه‌گیری برایتان اولویت دارد، کانتر استرایک مقصد شماست. CS2 مدرن‌ترین بازی شوتر تاکتیکی جهان است. هر میلی‌ثانیه و هر تیر ممکن است تعیین‌کننده پیروزی یا شکست تیم شما باشد. 🏆',
    'game-suitable8': '🎯 مناسب برای: گیمرهای رقابتی و عاشقان FPS',
    'game-preview9': 'استراتژی، کار تیمی و نبرد برای فتح...',
    'game-desc9': 'در دنیای "رونرا"، شما و تیمتان باید با استفاده از قدرت‌های جادویی و مهارت‌های رزمی، بیس دشمن را نابود کنید. LoL نیاز به تمرکز بالا، هماهنگی تیمی و دانش استراتژیک دارد. با تنوع بسیار زیاد قهرمانان، هر بازی تجربه‌ای متفاوت است. 🔄',
    'game-suitable9': '🎯 مناسب برای: عاشقان استراتژی و رقابت تیمی',
    'game-preview10': 'به هیچ‌کس اعتماد نکنید!',
    'game-desc10': 'شاید گرافیک این بازی ساده به نظر برسد، اما قدرت آن در ایجاد پارانویا و شک و تردید است! در یک سفینه فضایی، شما باید ماموریت‌ها را انجام دهید، اما مراقب باشید: یک یا چند نفر "خیانت‌کار" هستند که قصد دارند همه را از بین ببرند! 😈',
    'game-suitable10': '🎯 مناسب برای: دورهمی‌های دوستانه و بازی‌های اجتماعی',
    
    'challenge-title': '🎯 چالش‌های هفتگی',
    'challenge-heading': 'آزمون سنجش علاقه به گیم',
    'challenge-desc': 'برای شروع آزمون کلیک کنید! 🚀',
    'q1': '1) وقتی وقت آزاد داری، چقدر احتمال دارد سراغ بازی بروی؟',
    'q2': '2) اگر یک بازی جدید و معروف بیاید، چقدر مشتاقی آن را امتحان کنی؟',
    'q3': '3) چقدر اخبار، تریلرها یا ویدیوهای بازی‌ها را دنبال می‌کنی؟',
    'q4': '4) چقدر درباره بازی‌ها و شخصیت‌هایشان صحبت می‌کنی؟',
    'q5': '5) چقدر برای خرید بازی، کنسول، دسته یا وسایل گیم هزینه می‌کنی؟',
    'q6': '6) چقدر از باختن در بازی ناراحت یا درگیر می‌شوی؟',
    'q7': '7) چقدر بازی را به تفریح‌های دیگر ترجیح می‌دهی؟',
    'q8': '8) چقدر بازی‌ها را دنبال می‌کنی حتی وقتی خودت بازی نمی‌کنی؟',
    'q9': '9) چقدر شب‌زنده‌داری برای بازی برایت عادی است؟',
    'q10': '10) چقدر دوست داری بازی‌های جدید را سریع یاد بگیری و حرفه‌ای شوی؟',
    'q-very': 'خیلی زیاد',
    'q-high': 'زیاد',
    'q-mid': 'متوسط',
    'q-low': 'کم',
    'quiz-submit': '📊 مشاهده نتیجه',
    'quiz-result-title': '🎯 نتیجه آزمون شما',
    'quiz-retry': '🔄 دوباره امتحان کن',
    
    'rewards-title': '🎁 جوایز شما',
    'rewards-desc': 'نتیجه چالش‌های شما در زیر نمایش داده می‌شود 🏆',
    
    'comments-title': '💬 نظرات شما',
    'empty-comments': '🗨️ هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!',
    'comment-form-title': '✍️ ثبت نظر جدید',
    'comment-placeholder': 'نظر شما...',
    'submit-comment': '📨 ارسال نظر',
    
    'modal-title': '👋 خوش آمدید!',
    'modal-desc': 'برای ثبت نظر، لطفاً اطلاعات خود را وارد کنید',
    'modal-name': '👤 نام و نام خانوادگی',
    'modal-name-placeholder': 'مثال: علی رضایی',
    'modal-phone': '📱 شماره موبایل',
    'modal-phone-placeholder': 'مثال: ۰۹۱۲۳۴۵۶۷۸۹',
    'modal-avatar': '🖼️ انتخاب آواتار',
    'modal-submit': '✅ ورود / ثبت‌نام',
    
    'about-title': '📖 درباره ما',
    'about-who': '🎯 ما که هستیم؟',
    'about-who-text': 'ما گروهی از گیمرهای حرفه‌ای و تحلیلگران صنعت دیجیتال هستیم که از سال ۱۴۰۰ فعالیت خود را آغاز کردیم. هدف ما ایجاد پلی بین بازیسازان و بازیکنان فارسی‌زبان است.',
    'about-mission': '🌟 رسالت ما',
    'about-mission-text': 'ما به دنبال خبرهای بدون سانسور، ریویوهای منصفانه و محتوایی هستیم که به رشد فرهنگ گیمینگ در ایران کمک کند.',
    'about-promise': '💎 قول ما به شما',
    'about-promise1': '✅ خبرهای دقیق و سریع',
    'about-promise2': '✅ نقدهای منصفانه و بدون جانبداری',
    'about-promise3': '✅ به‌روزرسانی مداوم محتوا',
    'about-promise4': '✅ پاسخگویی به نظرات و سوالات شما',
    'about-ending': 'اگر عاشق بازی هستید، اینجا خانه شماست! 🎮🏠',
    
    'privacy-title': '🔒 حریم خصوصی',
    'privacy-date': 'آخرین بروزرسانی: خرداد ۱۴۰۵',
    'privacy-1-title': '📌 ۱. اطلاعات ذخیره‌شده',
    'privacy-1-text': 'ما تنها اطلاعاتی را ذخیره می‌کنیم که شما داوطلبانه وارد می‌کنید (مانند ایمیل برای خبرنامه). کوکی‌ها (Cookies) صرفاً برای بهبود تجربه کاربری و ذخیره تنظیمات نمایش استفاده می‌شوند.',
    'privacy-2-title': '🛡️ ۲. اشتراک‌گذاری داده',
    'privacy-2-text': 'اطلاعات شما هرگز به هیچ شخص ثالثی فروخته یا اجاره داده نمی‌شود، مگر در مواردی که طبق قانون الزامی باشد.',
    'privacy-3-title': '🔐 ۳. امنیت',
    'privacy-3-text': 'تمام ارتباطات شما با سایت از طریق پروتکل SSL رمزگذاری می‌شود تا اطلاعات شما در برابر حملات سایبری محافظت شود.',
    'privacy-4-title': '🗑️ ۴. حق حذف اطلاعات',
    'privacy-4-text': 'شما در هر لحظه می‌توانید با ارسال درخواست به ایمیل ما، تمام داده‌های خود را از سیستم پاک کنید.',
    'privacy-contact': '📧 برای هرگونه سوال درباره حریم خصوصی، با ما تماس بگیرید:',
    
    'footer-phrase': '🎮 بازی تنها زندگی در رویا نیست، بلکه سفری‌ست به جایی فراتر از واقعیت.',
    'footer-established': 'تأسیس: ۱۴۰۵/۲۰۲۶',
    'footer-copy': '© ۱۴۰۵ تمامی حقوق برای <strong>AP Game</strong> محفوظ است.',
    'footer-love': 'ساخته شده با ❤️ برای جامعه گیمینگ ایران'
  },
  en: {
    'nav-home': '🏠 Home',
    'nav-news': '📰 News',
    'nav-games': '🎮 Games',
    'nav-challenge': '🏆 Challenge',
    'nav-rewards': '🎁 Rewards',
    'nav-about': '📖 About Us',
    'nav-privacy': '🔒 Privacy',
    'logout': '🚪 Logout',
    
    'banner-title1': '🎮 Welcome to the World of Games!',
    'banner-desc1': 'Follow the latest news, top game reviews, and weekly challenges on AP Game.',
    'banner-btn1': 'View News',
    'banner-title2': '📰 Latest Gaming News',
    'banner-desc2': 'Stay updated with the latest events in the gaming world!',
    'banner-btn2': 'Read News',
    'banner-title3': '🏆 Weekly Challenge',
    'banner-desc3': 'A new challenge every week for pro gamers!',
    'banner-btn3': 'View Challenges',
    
    'text-slide1': '🔥 AP Game\nSpecialized reference for news and game reviews',
    'text-slide2': '🎮 Introducing the latest games\nMost up-to-date reviews and critiques',
    'text-slide3': '📰 Gaming world news\nIran\'s first gaming news source',
    'text-slide4': '🏆 Weekly challenges\nJoin us and win!',
    
    'news-title': '📰 Latest Gaming News',
    'news-badge1': '🔥 Hot',
    'news-title1': '🧟‍♂️ Co-op Mod for Resident Evil 4 Remake',
    'news-preview1': 'You no longer have to run from monsters alone! A new mod allows you to experience the RE4 story in co-op mode...',
    'news-readmore': '📖 Read More',
    'news-full1': '🎮 How does the mod work?<br>This mod, called "Multiplayer Mod - Resident Evil 4," is available on NexusMods and is currently in beta. Its main idea is to synchronize two games in real-time so that both players can:',
    'news-list1': '<li>✅ Progress through the campaign together</li><li>✅ See the same enemies</li><li>✅ Experience story events together</li><li>✅ Open doors and switches in sync</li>',
    'news-full2': '⚠️ But not everything is perfect!<br>Since this mod is still in early development, you may encounter issues like frame drops in certain areas and enemy synchronization problems.',
    'news-quote': '💬 What do you think?<br>Would you enjoy playing Resident Evil 4 Remake in co-op mode?',
    'news-download': '🔗 Download Mod from NexusMods',
    'news-badge2': '🆕 New',
    'news-title2': '⚔️ Shinobi: Art of Vengeance Release Date Announced for Switch 2',
    'news-preview2': 'Sega has officially confirmed that Shinobi: Art of Vengeance will release in September for the new Nintendo Switch 2...',
    'news-full3': 'Full text of the second news...',
    'close': '✖ Close',
    
    'games-title': '🎮 Golden List: Top 10 Games',
    'genre-action': '🎬 Genre: Action • Open World',
    'genre-adventure': '🎨 Genre: Adventure • Creative',
    'genre-rpg': '⚔️ Genre: RPG • Soulslike',
    'genre-fps': '🎯 Genre: FPS • Tactical',
    'genre-moba': '🏰 Genre: MOBA • Strategy',
    'genre-social': '🗣️ Genre: Social • Paranoia',
    'game-full1': 'Full Review:',
    'game-preview1': 'The endless world of Los Santos...',
    'game-desc1': 'In the big city of "Los Santos," you\'re not just a player, but part of a living ecosystem. You can enjoy driving luxury cars, take part in complex criminal missions, or seek excitement with friends in the online mode. 💥',
    'game-suitable1': '🎯 Perfect for: Open world and action lovers',
    'game-preview2': 'The infinite world of creativity...',
    'game-desc2': 'Minecraft is not a game, it\'s an endless world! In this game, the only limit is your imagination. Start by building a small wooden cottage and work your way up to massive palaces or even real city recreations. 🏰',
    'game-suitable2': '🎯 Perfect for: All ages and creative minds',
    'game-preview3': 'The toughest and most beautiful challenge...',
    'game-desc3': 'If you\'re looking for a challenge that sends shivers down your spine, Elden Ring is where you need to be. The combat is precise and difficult, but when you finally defeat a tough boss, the satisfaction is unparalleled! 🔥',
    'game-suitable3': '🎯 Perfect for: Pro gamers and challenge seekers',
    'game-preview4': 'Absolute freedom in the land of Hyrule...',
    'game-desc4': 'Zelda redefined the "open world" concept with this version. In Hyrule, you\'re not limited to specific paths. Want to climb mountains? You can! Want to use the game\'s physics to solve puzzles? Absolutely possible! 🧩',
    'game-suitable4': '🎯 Perfect for: Adventure and relaxation lovers',
    'game-preview5': 'A magnificent elegy for the Wild West...',
    'game-desc5': 'You\'re about to experience one of the deepest and most emotional stories in gaming history. The details in this game are beyond imagination—from animal reactions to weather changes. This isn\'t just a game, it\'s a life experience. ❤️',
    'game-suitable5': '🎯 Perfect for: Epic story lovers',
    'game-preview6': 'In a world of monsters, choices are heavy...',
    'game-desc6': 'As "Geralt," a monster hunter, you must travel through a magical and chaotic world. What sets Witcher 3 apart is its storytelling power. Even the smallest side quests have deep stories and fascinating characters. 📜',
    'game-suitable6': '🎯 Perfect for: Fantasy and complex story fans',
    'game-preview7': 'The fury of the gods and the bond of father and son...',
    'game-desc7': 'The continuation of Kratos\' epic journey in Norse mythology is an experience that engages all your senses. The combat is heavy, fast, and visually stunning. Beyond the action, the game explores the complex relationship between Kratos and his son. ❤️‍🔥',
    'game-suitable7': '🎯 Perfect for: Action and mythology lovers',
    'game-preview8': 'Shooting, strategy, and speed...',
    'game-desc8': 'If you think speed and aiming accuracy are your priority, Counter-Strike is your destination. CS2 is the most modern tactical shooter in the world. Every millisecond and every bullet can determine your team\'s victory or defeat. 🏆',
    'game-suitable8': '🎯 Perfect for: Competitive gamers and FPS lovers',
    'game-preview9': 'Strategy, teamwork, and the battle for victory...',
    'game-desc9': 'In "Runeterra," you and your team must use magical powers and combat skills to destroy the enemy base. LoL requires high focus, team coordination, and strategic knowledge. With a huge variety of champions, each game offers a completely different experience. 🔄',
    'game-suitable9': '🎯 Perfect for: Strategy and team competition lovers',
    'game-preview10': 'Trust no one!',
    'game-desc10': 'The graphics may look simple, but this game\'s power lies in creating paranoia and suspicion! On a spaceship, you must complete tasks, but beware: one or more of you are "Imposters" trying to eliminate everyone! 😈',
    'game-suitable10': '🎯 Perfect for: Friend gatherings and social games',
    
    'challenge-title': '🎯 Weekly Challenges',
    'challenge-heading': 'Gaming Interest Quiz',
    'challenge-desc': 'Click to start the quiz! 🚀',
    'q1': '1) When you have free time, how likely are you to play games?',
    'q2': '2) If a new popular game comes out, how excited are you to try it?',
    'q3': '3) How much do you follow gaming news, trailers, or videos?',
    'q4': '4) How much do you talk about games and their characters?',
    'q5': '5) How much do you spend on games, consoles, controllers, or gaming gear?',
    'q6': '6) How upset or involved do you get when you lose in a game?',
    'q7': '7) How much do you prefer gaming over other hobbies?',
    'q8': '8) How much do you follow games even when you\'re not playing?',
    'q9': '9) How normal is it for you to stay up late gaming?',
    'q10': '10) How much do you want to learn new games quickly and become pro?',
    'q-very': 'Very High',
    'q-high': 'High',
    'q-mid': 'Medium',
    'q-low': 'Low',
    'quiz-submit': '📊 View Result',
    'quiz-result-title': '🎯 Your Quiz Result',
    'quiz-retry': '🔄 Try Again',
    
    'rewards-title': '🎁 Your Rewards',
    'rewards-desc': 'Your challenge results are shown below 🏆',
    
    'comments-title': '💬 Your Comments',
    'empty-comments': '🗨️ No comments yet. Be the first to comment!',
    'comment-form-title': '✍️ New Comment',
    'comment-placeholder': 'Your comment...',
    'submit-comment': '📨 Submit Comment',
    
    'modal-title': '👋 Welcome!',
    'modal-desc': 'Please enter your information to post a comment',
    'modal-name': '👤 Full Name',
    'modal-name-placeholder': 'Example: John Doe',
    'modal-phone': '📱 Phone Number',
    'modal-phone-placeholder': 'Example: 09123456789',
    'modal-avatar': '🖼️ Choose Avatar',
    'modal-submit': '✅ Login / Register',
    
    'about-title': '📖 About Us',
    'about-who': '🎯 Who Are We?',
    'about-who-text': 'We are a group of professional gamers and digital industry analysts who started our activity in 2021. Our goal is to build a bridge between game developers and Persian-speaking gamers.',
    'about-mission': '🌟 Our Mission',
    'about-mission-text': 'We aim to provide uncensored news, fair reviews, and content that helps grow the gaming culture in Iran.',
    'about-promise': '💎 Our Promise to You',
    'about-promise1': '✅ Accurate and fast news',
    'about-promise2': '✅ Fair and unbiased reviews',
    'about-promise3': '✅ Continuous content updates',
    'about-promise4': '✅ Responding to your comments and questions',
    'about-ending': 'If you love gaming, this is your home! 🎮🏠',
    
    'privacy-title': '🔒 Privacy Policy',
    'privacy-date': 'Last Updated: June 2026',
    'privacy-1-title': '📌 1. Stored Information',
    'privacy-1-text': 'We only store information that you voluntarily provide (such as email for newsletters). Cookies are used solely to improve user experience and save display settings.',
    'privacy-2-title': '🛡️ 2. Data Sharing',
    'privacy-2-text': 'Your information will never be sold or rented to any third party, except as required by law.',
    'privacy-3-title': '🔐 3. Security',
    'privacy-3-text': 'All communications with the site are encrypted via SSL protocol to protect your information from cyber attacks.',
    'privacy-4-title': '🗑️ 4. Right to Delete Information',
    'privacy-4-text': 'You can request the deletion of all your data from our system at any time by emailing us.',
    'privacy-contact': '📧 For any privacy-related questions, contact us:',
    
    'footer-phrase': '🎮 Gaming is not just living in a dream, but a journey to a place beyond reality.',
    'footer-established': 'Established: 2026',
    'footer-copy': '© 2026 All rights reserved for <strong>AP Game</strong>.',
    'footer-love': 'Made with ❤️ for the Iranian gaming community'
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';
  localStorage.setItem('apgame_lang', currentLang);
  
  document.querySelector('.lang-btn').textContent = currentLang === 'fa' ? '🌐 English' : '🌐 فارسی';
  document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang === 'fa' ? 'fa' : 'en';
  
  translatePage();
}

function translatePage() {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[currentLang] && translations[currentLang][key]) {
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.placeholder = translations[currentLang][key];
      } else if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
        element.placeholder = translations[currentLang][key];
      } else if (element.tagName === 'UL') {
        element.innerHTML = translations[currentLang][key];
      } else {
        element.innerHTML = translations[currentLang][key];
      }
    }
  });
  
  document.querySelectorAll('.text-slide').forEach(slide => {
    const key = slide.getAttribute('data-key');
    if (key && translations[currentLang] && translations[currentLang][key]) {
      const parts = translations[currentLang][key].split('\n');
      const h2 = slide.querySelector('h2');
      const p = slide.querySelector('p');
      if (h2 && parts[0]) h2.textContent = parts[0];
      if (p && parts[1]) p.textContent = parts[1];
    }
  });
}

// ==========================================
// ====== مدیریت بنر اسلایدر ======
// ==========================================

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);
  resetInterval();
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);
}

// ==========================================
// ====== اسلایدر متنی ======
// ==========================================

let textSlideIndex = 0;
let textSlideInterval;

function showTextSlide(index) {
  const slides = document.querySelectorAll('.text-slide');
  if (!slides.length) return;
  
  if (index >= slides.length) textSlideIndex = 0;
  if (index < 0) textSlideIndex = slides.length - 1;
  
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === textSlideIndex);
  });
}

function nextTextSlide() {
  textSlideIndex++;
  showTextSlide(textSlideIndex);
}

// ==========================================
// ====== توابع باز و بسته کردن اخبار ======
// ==========================================

function toggleNews(card) {
  const full = card.querySelector('.news-full');
  const isOpen = full.classList.contains('show');
  
  document.querySelectorAll('.news-full').forEach(f => f.classList.remove('show'));
  
  if (!isOpen) {
    full.classList.add('show');
  }
}

function closeNews(btn) {
  const full = btn.closest('.news-full');
  full.classList.remove('show');
  if (event) event.stopPropagation();
}

// ==========================================
// ====== توابع باز و بسته کردن بازی‌ها ======
// ==========================================

function toggleGame(card) {
  const full = card.querySelector('.game-full');
  const isOpen = full.classList.contains('show');
  
  document.querySelectorAll('.game-full').forEach(f => f.classList.remove('show'));
  
  if (!isOpen) {
    full.classList.add('show');
  }
}

function closeGame(btn) {
  const full = btn.closest('.game-full');
  full.classList.remove('show');
  if (event) event.stopPropagation();
}

// ==========================================
// ====== آزمون سنجش علاقه به گیم ======
// ==========================================

function calculateQuiz() {
  const form = document.getElementById('quizForm');
  const inputs = form.querySelectorAll('input[type="radio"]:checked');
  
  if (inputs.length < 10) {
    const msg = currentLang === 'fa' ? '⚠️ لطفاً به همه ۱۰ سوال پاسخ دهید!' : '⚠️ Please answer all 10 questions!';
    alert(msg);
    return;
  }
  
  let totalScore = 0;
  inputs.forEach(input => {
    totalScore += parseInt(input.value);
  });
  
  let level, emoji, message;
  
  if (totalScore >= 34 && totalScore <= 40) {
    level = currentLang === 'fa' ? '🎯 علاقه خیلی زیاد' : '🎯 Very High Interest';
    emoji = '🏆🔥';
    message = currentLang === 'fa' 
      ? 'تو خیلی اهل گیمی! به نظر میاد گیم یکی از علاقه‌های اصلیته. تو احتمالاً گیمر جدی‌ای هستی.'
      : 'You\'re a true gamer! Gaming seems to be one of your main interests. You\'re probably a serious gamer.';
  } else if (totalScore >= 26 && totalScore <= 33) {
    level = currentLang === 'fa' ? '🎮 علاقه زیاد' : '🎮 High Interest';
    emoji = '🎮⭐';
    message = currentLang === 'fa'
      ? 'تو واقعاً به گیم علاقه داری. بازی برایت یک سرگرمی مهمه. اهل گیمی، ولی خیلی افراطی نیستی.'
      : 'You really enjoy gaming. It\'s an important hobby for you. You\'re a gamer, but not too extreme.';
  } else if (totalScore >= 18 && totalScore <= 25) {
    level = currentLang === 'fa' ? '🎲 علاقه متوسط' : '🎲 Moderate Interest';
    emoji = '🎲😊';
    message = currentLang === 'fa'
      ? 'تو گیم رو دوست داری، ولی در حد تفریح. گاهی بازی می‌کنی، ولی خیلی درگیرش نیستی. بیشتر یک گیمر معمولی هستی.'
      : 'You enjoy gaming as a casual hobby. You play sometimes, but you\'re not too invested. You\'re more of a casual gamer.';
  } else {
    level = currentLang === 'fa' ? '📺 علاقه کم' : '📺 Low Interest';
    emoji = '📺😐';
    message = currentLang === 'fa'
      ? 'به نظر میاد خیلی اهل بازی نیستی. گیم برایت اولویت اصلی نیست. بیشتر تفریحات دیگه برات جذاب‌تره.'
      : 'It seems you\'re not much into gaming. It\'s not your main priority. Other hobbies are more interesting to you.';
  }
  
  const quizResult = {
    score: totalScore,
    level: level,
    emoji: emoji,
    message: message,
    date: new Date().toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US')
  };
  localStorage.setItem('quizResult', JSON.stringify(quizResult));
  
  document.getElementById('quizResult').style.display = 'block';
  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultScore').textContent = currentLang === 'fa' ? `امتیاز: ${totalScore} از 40` : `Score: ${totalScore} out of 40`;
  document.getElementById('resultLevel').textContent = level;
  document.getElementById('resultMessage').textContent = message;
  
  document.getElementById('quizResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
  const form = document.getElementById('quizForm');
  form.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });
  
  document.getElementById('quizResult').style.display = 'none';
  form.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// ====== نمایش نتیجه کاربر در جوایز ======
// ==========================================

function showUserQuizResult() {
  const result = JSON.parse(localStorage.getItem('quizResult'));
  const container = document.getElementById('userResultCard');
  if (result && container) {
    container.style.display = 'block';
    document.getElementById('resultEmoji').textContent = result.emoji || '🏆';
    document.getElementById('resultLevel').textContent = result.level || '---';
    document.getElementById('resultScore').textContent = currentLang === 'fa' ? `امتیاز: ${result.score} از 40` : `Score: ${result.score} out of 40`;
    document.getElementById('resultMessage').textContent = result.message || '';
  } else if (container) {
    container.style.display = 'none';
  }
}

// ==========================================
// ====== مدیریت کاربر ======
// ==========================================

function showModal() {
  document.getElementById('userModal').classList.add('show');
}

function hideModal() {
  document.getElementById('userModal').classList.remove('show');
}

document.querySelectorAll('.avatar-option').forEach(opt => {
  opt.addEventListener('click', function() {
    document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('selectedAvatar').value = this.dataset.avatar;
  });
});

function saveUser() {
  const name = document.getElementById('userName').value.trim();
  const phone = document.getElementById('userPhone').value.trim();
  const avatarId = document.getElementById('selectedAvatar').value;
  
  if (!name || name.length < 2) {
    alert(currentLang === 'fa' ? '⚠️ لطفاً نام خود را وارد کنید (حداقل ۲ کاراکتر)!' : '⚠️ Please enter your name (at least 2 characters)!');
    return;
  }
  
  const avatarList = ['😎', '🧑‍💻', '👾', '🎮', '🦊', '🐉', '🌟', '🔥'];
  const user = {
    name: name,
    phone: phone || (currentLang === 'fa' ? 'نامشخص' : 'Not specified'),
    avatar: avatarList[parseInt(avatarId) - 1] || '😎',
    avatarId: avatarId,
    joinedDate: new Date().toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US')
  };
  
  localStorage.setItem('apgame_user', JSON.stringify(user));
  hideModal();
  showUserStatus(user);
  location.reload();
}

function showUserStatus(user) {
  document.getElementById('userStatus').style.display = 'block';
  document.getElementById('userAvatarDisplay').textContent = user.avatar;
  document.getElementById('userNameDisplay').textContent = user.name;
  document.getElementById('userPhoneDisplay').textContent = user.phone || (currentLang === 'fa' ? 'شماره ثبت نشده' : 'No phone number');
}

function logoutUser() {
  const confirmMsg = currentLang === 'fa' ? 'آیا مطمئنی می‌خواهی از حساب خود خارج شوی؟' : 'Are you sure you want to logout?';
  if (confirm(confirmMsg)) {
    localStorage.removeItem('apgame_user');
    document.getElementById('userStatus').style.display = 'none';
    location.reload();
  }
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('apgame_user'));
}

// ==========================================
// ====== سیستم نظرات ======
// ==========================================

let comments = [];

function loadComments() {
  const stored = localStorage.getItem('gameComments');
  if (stored) {
    try {
      comments = JSON.parse(stored);
    } catch (e) {
      comments = [];
    }
  } else {
    const now = new Date();
    const dateStr = now.toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
    
    comments = [
      {
        id: Date.now() + 1,
        name: currentLang === 'fa' ? '🎮 علی رضایی' : '🎮 Ali Rezaei',
        avatar: '😎',
        text: currentLang === 'fa' ? 'لیست عالی بود! من GTA 5 رو بیش از ۵۰۰ ساعت بازی کردم و هنوزم خسته نشدم!' : 'Great list! I\'ve played GTA 5 for over 500 hours and I\'m still not bored!',
        date: dateStr,
        replies: [
          {
            id: Date.now() + 2,
            name: 'اشکان پیمان',
            avatar: '🌟',
            text: currentLang === 'fa' ? 'ممنون علی جان! نظرات شما برای ما ارزشمنده 🙌' : 'Thanks Ali! Your comments mean a lot to us 🙌',
            date: dateStr
          }
        ]
      },
      {
        id: Date.now() + 3,
        name: currentLang === 'fa' ? '🧱 سارا محمدی' : '🧱 Sara Mohammadi',
        avatar: '🎮',
        text: currentLang === 'fa' ? 'ماینکرفت بهترین بازی برای آرامش ذهن هستش. هر روز چند ساعت می‌سازم و لذت می‌برم 😍' : 'Minecraft is the best game for mental relaxation. I build for a few hours every day and enjoy it 😍',
        date: dateStr,
        replies: []
      }
    ];
    saveComments();
  }
  renderComments();
}

function saveComments() {
  localStorage.setItem('gameComments', JSON.stringify(comments));
}

function renderComments() {
  const container = document.getElementById('commentsContainer');
  const emptyMsg = document.getElementById('emptyMessage');

  if (!container) return;

  if (comments.length === 0) {
    container.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  let html = '';
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const avatar = comment.avatar || '😎';
    const name = comment.name || 'ناشناس';
    const date = comment.date || 'تاریخ نامشخص';
    const text = comment.text || '';

    // بررسی مدیر بودن (اشکان پیمان)
    let adminBadge = '';
    if (name === 'اشکان پیمان') {
      adminBadge = ' <span style="color:#2ecc71; font-size:16px; font-weight:bold;">✔️</span>';
    }

    html += '<div class="comment-item" id="comment-' + comment.id + '">';
    html += '  <div class="comment-header">';
    html += '    <div style="display:flex; align-items:center; gap:10px;">';
    html += '      <span style="font-size:30px;">' + avatar + '</span>';
    html += '      <span class="comment-name">' + name + adminBadge + '</span>';
    html += '    </div>';
    html += '    <span class="comment-date">📅 ' + date + '</span>';
    html += '  </div>';
    html += '  <div class="comment-text">' + text + '</div>';
    html += '  <button class="comment-reply-btn" onclick="showReplyForm(' + comment.id + ')">💬 ' + (currentLang === 'fa' ? 'پاسخ' : 'Reply') + '</button>';
    
    // فرم پاسخ
    html += '  <div id="replyForm-' + comment.id + '" style="display:none; margin-top:10px;">';
    html += '    <input type="text" id="replyText-' + comment.id + '" placeholder="' + (currentLang === 'fa' ? 'متن پاسخ...' : 'Reply text...') + '" style="width:70%; padding:8px; border-radius:8px; border:none; background:#0d0d1a; color:#fff; outline:2px solid #2a2a4a; margin-left:5px;">';
    html += '    <button onclick="addReply(' + comment.id + ')" style="padding:6px 18px; background:#f39c12; color:#0d0d1a; border:none; border-radius:20px; font-weight:bold; cursor:pointer;">' + (currentLang === 'fa' ? 'ارسال' : 'Send') + '</button>';
    html += '  </div>';
    
    // پاسخ‌ها
    html += '  <div class="replies-container">';
    if (comment.replies && comment.replies.length > 0) {
      for (let j = 0; j < comment.replies.length; j++) {
        const reply = comment.replies[j];
        const replyAvatar = reply.avatar || '🟢';
        let replyName = reply.name || 'ناشناس';
        const replyDate = reply.date || 'تاریخ نامشخص';
        const replyText = reply.text || '';

        // بررسی مدیر بودن در پاسخ‌ها (اشکان پیمان)
        let replyBadge = '';
        if (replyName === 'اشکان پیمان') {
          replyBadge = ' <span style="color:#2ecc71; font-size:14px; font-weight:bold;">✔️</span>';
        }
        
        html += '    <div class="reply-item">';
        html += '      <div class="comment-header">';
        html += '        <div style="display:flex; align-items:center; gap:8px;">';
        html += '          <span style="font-size:24px;">' + replyAvatar + '</span>';
        html += '          <span class="comment-name">' + replyName + replyBadge + '</span>';
        html += '        </div>';
        html += '        <span class="comment-date">📅 ' + replyDate + '</span>';
        html += '      </div>';
        html += '      <div class="comment-text">' + replyText + '</div>';
        html += '    </div>';
      }
    }
    html += '  </div>';
    html += '</div>';
  }

  container.innerHTML = html;
}

function showReplyForm(commentId) {
  const form = document.getElementById('replyForm-' + commentId);
  if (!form) return;
  
  if (form.style.display === 'none' || form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function addComment() {
  const user = getCurrentUser();
  
  if (!user) {
    showModal();
    return;
  }
  
  const textInput = document.getElementById('commentText');
  if (!textInput) return;
  
  const text = textInput.value.trim();
  
  if (!text) {
    alert(currentLang === 'fa' ? '⚠️ لطفاً متن نظر را وارد کنید!' : '⚠️ Please enter your comment!');
    return;
  }
  
  const newComment = {
    id: Date.now(),
    name: user.name || 'کاربر',
    avatar: user.avatar || '😎',
    text: text,
    date: new Date().toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US'),
    replies: []
  };
  
  comments.unshift(newComment);
  saveComments();
  renderComments();
  
  textInput.value = '';
}

function addReply(commentId) {
  const user = getCurrentUser();
  
  if (!user) {
    showModal();
    return;
  }
  
  const textInput = document.getElementById('replyText-' + commentId);
  if (!textInput) return;
  
  const text = textInput.value.trim();
  
  if (!text) {
    alert(currentLang === 'fa' ? '⚠️ لطفاً متن پاسخ را وارد کنید!' : '⚠️ Please enter your reply!');
    return;
  }
  
  let comment = null;
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id === commentId) {
      comment = comments[i];
      break;
    }
  }
  
  if (comment) {
    comment.replies.push({
      id: Date.now(),
      name: user.name || 'کاربر',
      avatar: user.avatar || '🟢',
      text: text,
      date: new Date().toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US')
    });
    saveComments();
    renderComments();
  }
  
  textInput.value = '';
}

// ==========================================
// ====== نمایش کارت برد بازی در جوایز ======
// ==========================================

function showGameWin() {
  const win = localStorage.getItem('gameWin');
  const card = document.getElementById('gameWinCard');
  if (win && card) {
    try {
      const data = JSON.parse(win);
      if (data.won) {
        card.style.display = 'block';
        const info = document.getElementById('gameWinInfo');
        if (info) {
          info.textContent = currentLang === 'fa' ? `عدد ${data.number} رو در ${data.attempts} تلاش حدس زدید!` : `You guessed ${data.number} in ${data.attempts} attempts!`;
        }
      }
    } catch (e) {
      console.log('خطا در نمایش کارت برد');
    }
  }
}

// ==========================================
// ====== اسکرول نرم ======
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==========================================
// ====== اجرا هنگام بارگذاری ======
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  // تنظیم زبان
  currentLang = localStorage.getItem('apgame_lang') || 'fa';
  document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang === 'fa' ? 'fa' : 'en';
  
  const langBtn = document.querySelector('.lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'fa' ? '🌐 English' : '🌐 فارسی';
  }
  
  translatePage();
  
  // اسلایدر بنر
  showSlide(0);
  slideInterval = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);
  
  // اسلایدر متنی
  showTextSlide(0);
  textSlideInterval = setInterval(nextTextSlide, 4000);
  
  // توقف اسلایدر بنر هنگام هاور
  const slider = document.querySelector('.banner-slider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
      }, 5000);
    });
  }
  
  // توقف اسلایدر متنی هنگام هاور
  const textSlider = document.querySelector('.text-slider-section');
  if (textSlider) {
    textSlider.addEventListener('mouseenter', () => clearInterval(textSlideInterval));
    textSlider.addEventListener('mouseleave', () => {
      textSlideInterval = setInterval(nextTextSlide, 4000);
    });
  }
  
  // بررسی کاربر
  const user = getCurrentUser();
  if (user) {
    showUserStatus(user);
  } else {
    setTimeout(() => {
      showModal();
    }, 1500);
  }
  
  // بارگذاری نظرات
  loadComments();
  
  // نمایش نتیجه کاربر در جوایز
  showUserQuizResult();
  
  // نمایش کارت برد بازی
  showGameWin();
  
  // فوکوس روی جعبه نظر
  const commentTextarea = document.getElementById('commentText');
  if (commentTextarea) {
    commentTextarea.addEventListener('focus', function() {
      if (!getCurrentUser()) {
        showModal();
        this.blur();
      }
    });
  }
});

// ====== کنسول خوش‌آمدگویی ======
console.log('🎮 AP Game - Gaming Magazine');
console.log('❤️ Made with love for the Iranian gaming community');