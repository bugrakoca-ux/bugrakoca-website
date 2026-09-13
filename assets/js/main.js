(function () {
  "use strict";

  var translations = {
    nav_home: { en: "Home", tr: "Anasayfa" },
    nav_about: { en: "About", tr: "Hakkımda" },
    nav_skills: { en: "Skills", tr: "Yetkinlikler" },
    nav_experience: { en: "Experience", tr: "Deneyim" },
    nav_awards: { en: "Awards", tr: "Ödüller" },
    nav_education: { en: "Education", tr: "Eğitim" },
    nav_contact: { en: "Contact", tr: "İletişim" },

    hero_eyebrow: { en: "Senior Product Manager", tr: "Kıdemli Ürün Yöneticisi" },
    hero_tagline: { en: "Fintech · Payments · Crypto · AI-Enabled Products", tr: "Fintech · Ödeme Sistemleri · Kripto · Yapay Zeka Destekli Ürünler" },
    hero_location: { en: "📍 Ankara, Turkey — open to remote &amp; relocation", tr: "📍 Ankara, Türkiye — uzaktan çalışma ve yer değişikliğine açık" },
    hero_summary: {
      en: "Senior Product Manager with 10+ years in fintech across Turkey, the UK, and the UAE. Owned mobile banking products at ~4M-user scale, led one of the national pilot integrations of Turkey's instant payment system (FAST), and built two products from zero — a digital wallet that later launched as a licensed bank app, and a B2B crypto-to-fiat settlement platform. Shipped AI into production three times over: NLP chatbot flows, an AI merchant-support agent, and AI fraud detection. Equally comfortable leading a 45-person delivery organisation and running a lean vendor-built platform, with legal, compliance, and risk in the room throughout.",
      tr: "Türkiye, İngiltere ve BAE'de fintech alanında 10+ yıllık deneyime sahip Kıdemli Ürün Yöneticisi. ~4 milyon kullanıcılı mobil bankacılık ürünlerini yönetti, Türkiye'nin anlık ödeme sistemi FAST'in ulusal pilot entegrasyonlarından birine liderlik etti ve sıfırdan iki ürün inşa etti — sonradan lisanslı bir banka uygulaması olarak hayata geçen bir dijital cüzdan ve B2B kripto-fiat takas platformu. Yapay zekayı üç kez production ortamına taşıdı: NLP chatbot akışları, yapay zeka destekli satıcı desteği ajanı ve yapay zeka ile dolandırıcılık tespiti. 45 kişilik bir teslimat organizasyonuna liderlik etmek kadar, hukuk, uyum ve risk ekiplerinin sürekli masada olduğu yalın, tedarikçi tabanlı bir platformu yönetmekte de aynı derecede rahat."
    },
    cta_download: { en: "Download CV (PDF)", tr: "CV İndir (PDF)" },
    cta_email: { en: "Email Me", tr: "Bana Yazın" },

    stat_years: { en: "Years in Fintech", tr: "Yıl Fintech Deneyimi" },
    stat_users: { en: "Users Served", tr: "Kullanıcıya Ulaşıldı" },
    stat_team: { en: "People Org Led", tr: "Kişilik Organizasyon" },
    stat_ai: { en: "AI Shipped to Prod", tr: "Kez AI Production'da" },

    about_title: { en: "About", tr: "Hakkımda" },

    skills_title: { en: "Core Competencies", tr: "Temel Yetkinlikler" },
    skill1_title: { en: "Product Leadership", tr: "Ürün Liderliği" },
    skill1_desc: { en: "End-to-end product strategy, greenfield (0→1) launches, continuous discovery, OKRs, roadmap ownership, prioritisation.", tr: "Uçtan uca ürün stratejisi, sıfırdan (0→1) lansmanlar, sürekli keşif, OKR'lar, yol haritası sahipliği, önceliklendirme." },
    skill2_title: { en: "Fintech Domains", tr: "Fintech Alanları" },
    skill2_desc: { en: "Mobile &amp; internet banking, digital wallets, instant payments (FAST), B2B crypto payments, crypto-to-fiat settlement, digital KYC &amp; onboarding, e-money licensing.", tr: "Mobil ve internet bankacılığı, dijital cüzdanlar, anlık ödemeler (FAST), B2B kripto ödemeler, kripto-fiat takas, dijital KYC ve onboarding, e-para lisanslama." },
    skill3_title: { en: "AI in Product", tr: "Üründe Yapay Zeka" },
    skill3_desc: { en: "NLP chatbot design and intent mapping, AI-driven support automation, AI fraud-detection integration, voice interfaces, generative content pipelines.", tr: "NLP chatbot tasarımı ve niyet haritalama, yapay zeka destekli destek otomasyonu, yapay zeka ile dolandırıcılık tespiti entegrasyonu, sesli arayüzler, üretken içerik hatları." },
    skill4_title: { en: "Data &amp; Technical", tr: "Veri &amp; Teknik" },
    skill4_desc: { en: "SQL, funnel and cohort analysis, A/B testing and experimentation, API integration (Postman, Swagger), Firebase, Google Analytics.", tr: "SQL, huni ve kohort analizi, A/B testi ve deneyler, API entegrasyonu (Postman, Swagger), Firebase, Google Analytics." },
    skill5_title: { en: "Governance &amp; Risk", tr: "Yönetişim &amp; Risk" },
    skill5_desc: { en: "Regulatory compliance (CBRT/BRSA, Swiss and UK frameworks), AML/KYC, licensing workflows, legal and risk stakeholder alignment.", tr: "Mevzuat uyumu (TCMB/BDDK, İsviçre ve İngiltere düzenlemeleri), AML/KYC, lisanslama süreçleri, hukuk ve risk paydaş uyumu." },
    skill6_title: { en: "Ways of Working", tr: "Çalışma Şekli" },
    skill6_desc: { en: "Scrum, dual-track agile, Jira, Azure DevOps, Figma, Miro, Zeplin.", tr: "Scrum, dual-track agile, Jira, Azure DevOps, Figma, Miro, Zeplin." },

    exp_title: { en: "Professional Experience", tr: "Profesyonel Deneyim" },

    exp0_role: { en: "Career Break", tr: "Kariyer Molası" },
    exp0_date: { en: "Jun 2025 – Present", tr: "Haz 2025 – Günümüz" },
    exp0_b1: { en: "Actively seeking a senior product management role in fintech.", tr: "Fintech alanında kıdemli bir ürün yönetimi rolü arayışında." },

    exp1_role: { en: "Product Manager, Criex", tr: "Ürün Yöneticisi, Criex" },
    exp1_date: { en: "Oct 2024 – May 2025", tr: "Eki 2024 – May 2025" },
    exp1_b1: { en: "Owned product for Criex, a B2B crypto payment infrastructure providing crypto-to-fiat settlement for merchants operating across Dubai, the UK, Singapore, Malta, and Cyprus.", tr: "Dubai, İngiltere, Singapur, Malta ve Kıbrıs'ta faaliyet gösteren satıcılara kripto-fiat takas hizmeti sunan B2B kripto ödeme altyapısı Criex'in ürün sahipliğini üstlendi." },
    exp1_b2: { en: "Structured the end-to-end operational and business flows required for international crypto licensing (Swiss), translating legal and regulatory requirements into product specifications and internal process design.", tr: "Uluslararası kripto lisanslaması (İsviçre) için gereken uçtan uca operasyonel ve iş akışlarını kurgulayarak hukuki/düzenleyici gereksinimleri ürün spesifikasyonlarına ve süreç tasarımına dönüştürdü." },
    exp1_b3: { en: "Directed two external vendor companies reporting into the role, running integrations with liquidity providers, digital wallet custodians, and AI-powered fraud detection.", tr: "Kendisine raporlayan iki dış tedarikçi firmayı yönetti; likidite sağlayıcılar, dijital cüzdan saklayıcıları ve yapay zeka destekli dolandırıcılık tespiti entegrasyonlarını yürüttü." },
    exp1_b4: { en: "Defined merchant onboarding, conversion, and payout reconciliation flows for the platform's launch merchants.", tr: "Platformun lansman satıcıları için onboarding, dönüşüm ve ödeme mutabakat akışlarını tanımladı." },

    exp2_role: { en: "Senior Product Manager (Remote)", tr: "Kıdemli Ürün Yöneticisi (Uzaktan)" },
    exp2_date: { en: "Dec 2021 – Oct 2024", tr: "Ara 2021 – Eki 2024" },
    exp2_b1: { en: "Led product for a B2B crypto payment platform, managing a 12-person distributed team across engineering, operations, and compliance.", tr: "Mühendislik, operasyon ve uyum ekiplerinden oluşan 12 kişilik dağıtık bir ekibi yöneterek B2B kripto ödeme platformunun ürün liderliğini yaptı." },
    exp2_b2: { en: "Ran analytical discovery with SQL and cohort analysis to locate friction in the merchant journey, driving a 20% increase in merchant retention.", tr: "SQL ve kohort analiziyle analitik keşif yürüterek satıcı yolculuğundaki sürtünmeleri tespit etti, satıcı elde tutmada %20 artış sağladı." },
    exp2_b3: { en: "Delivered USDT TRC-20 and multi-network payment support under tight deadlines, preventing churn among enterprise clients representing 10% of total platform revenue.", tr: "USDT TRC-20 ve çoklu ağ ödeme desteğini sıkı teslim tarihlerinde hayata geçirerek platform gelirinin %10'unu oluşturan kurumsal müşterilerde kayıpları önledi." },
    exp2_b4: { en: "Drove discovery and delivery of an AI-driven chatbot that automated merchant support and shortened B2B troubleshooting workflows.", tr: "Satıcı destek süreçlerini otomatikleştiren ve B2B sorun giderme akışlarını kısaltan yapay zeka destekli chatbot'un keşif ve teslimatına öncülük etti." },
    exp2_b5: { en: "Owned the merchant panel and back-office roadmap end to end, from discovery through release.", tr: "Satıcı panelinin ve back-office yol haritasının keşiften yayına kadar tüm sahipliğini üstlendi." },

    exp3_role: { en: "Product Owner", tr: "Ürün Sahibi" },
    exp3_date: { en: "Apr 2021 – Oct 2021", tr: "Nis 2021 – Eki 2021" },
    exp3_b1: { en: "Lead Product Owner on the zero-to-one build of TOM Wallet, scoped as an e-money wallet ahead of licensing; the product later launched publicly as HADİ once the bank secured its e-money and banking licences.", tr: "Lisanslama öncesi e-para cüzdanı olarak kurgulanan TOM Wallet'ın sıfırdan inşasında Lead Product Owner oldu; ürün, bankanın e-para ve bankacılık lisanslarını almasının ardından HADİ adıyla kamuya açık olarak piyasaya sürüldü." },
    exp3_b2: { en: "Defined core business logic, infrastructure requirements, and the initial product roadmap from a blank page.", tr: "Temel iş mantığını, altyapı gereksinimlerini ve ilk ürün yol haritasını boş bir sayfadan tanımladı." },
    exp3_b3: { en: "Directed two external vendor companies reporting into the role, working alongside legal and compliance to shape payment and credit features against Turkish banking regulation.", tr: "Kendisine raporlayan iki dış tedarikçi firmayı yönetti; hukuk ve uyum ekipleriyle birlikte ödeme ve kredi özelliklerini Türk bankacılık mevzuatına göre şekillendirdi." },

    exp4_role: { en: "Product Owner, CEPTETEB Mobile App", tr: "Ürün Sahibi, CEPTETEB Mobil Uygulama" },
    exp4_date: { en: "Jan 2020 – Apr 2021", tr: "Oca 2020 – Nis 2021" },
    exp4_b1: { en: "Led TEB's pilot integration of FAST, Turkey's 24/7 instant payment system, as one of the banks selected by the Central Bank for the pilot — making real-time transfers available to the full CEPTETEB base of ~2M users.", tr: "Merkez Bankası tarafından pilot için seçilen bankalardan biri olarak TEB'in Türkiye'nin 7/24 anlık ödeme sistemi FAST pilot entegrasyonuna liderlik etti; ~2M kullanıcılık CEPTETEB tabanının tamamına gerçek zamanlı transferi sundu." },
    exp4_b2: { en: "Owned end-to-end delivery of an in-house digital KYC solution that removed ~90% of manual onboarding workload: a single ID-and-photo capture replaced paper forms, wet signatures, and manual account opening.", tr: "Kağıt formları, ıslak imzaları ve manuel hesap açılışını tek bir kimlik-ve-fotoğraf yakalama akışıyla ortadan kaldıran, manuel onboarding yükünü ~%90 azaltan yerli dijital KYC çözümünün uçtan uca teslimatını üstlendi." },
    exp4_b3: { en: "Rebuilt the Expense Analysis module around bar and bubble visualisations, simplifying spend tracking for the same ~2M user base.", tr: "Harcama Analizi modülünü çubuk ve baloncuk görselleştirmeleri etrafında yeniden inşa ederek aynı ~2M kullanıcı tabanı için harcama takibini basitleştirdi." },
    exp4_b4: { en: "One of three Product Owners across three squads (~45 people) plus an outsourced delivery partner; used funnel analysis, A/B testing, and experimentation to steer decisions.", tr: "Üç squad (~45 kişi) ve dışarıdan bir teslimat ortağı genelinde üç Ürün Sahibinden biri olarak huni analizi, A/B testi ve deneylerle kararları yönlendirdi." },

    exp5_role: { en: "Product Owner (VP title), Internet &amp; Mobile Banking", tr: "Ürün Sahibi (VP unvanı), İnternet &amp; Mobil Bankacılık" },
    exp5_date: { en: "Apr 2016 – Jun 2019", tr: "Nis 2016 – Haz 2019" },
    exp5_b1: { en: "Product owner for MobilDeniz (~4M active users), leading its full redesign and relaunch on lean product principles; one of three Product Owners across three squads of ~45 people.", tr: "~4M aktif kullanıcılı MobilDeniz'in ürün sahibi olarak, yalın ürün prensipleriyle tam yeniden tasarımına ve yeniden lansmanına liderlik etti; üç squad'lık (~45 kişi) yapı içinde üç Ürün Sahibinden biriydi." },
    exp5_b2: { en: "Shipped Turkey's first voice-activated ATM withdrawal (fastPay, via Sestek integration), before Turkish was supported on iOS Siri.", tr: "Türkçe iOS Siri'de desteklenmeden önce, Sestek entegrasyonuyla (fastPay) Türkiye'nin ilk sesli ATM para çekme özelliğini hayata geçirdi." },
    exp5_b3: { en: "Delivered Istanbulkart top-up inside mobile banking — a market first, adopted by ~20% of Istanbul-based customers.", tr: "Mobil bankacılık içinde İstanbulkart yükleme özelliğini teslim etti — İstanbul'daki müşterilerin ~%20'si tarafından benimsenen bir pazar ilki." },
    exp5_b4: { en: "Designed NLP chatbot workflows within MobilDeniz, owning intent mapping and algorithm testing for automated customer resolution.", tr: "MobilDeniz içinde NLP chatbot iş akışlarını tasarladı, niyet haritalama ve algoritma testlerinin sahipliğini üstlendi." },
    exp5_b5: { en: "Built voice-command accessibility features for visually impaired users, validated through psychometric and A/B testing.", tr: "Psikometrik ve A/B testleriyle doğrulanan, görme engelli kullanıcılar için sesli komut erişilebilirlik özellikleri geliştirdi." },
    exp5_b6: { en: "Worked directly with C-level on strategic product direction, and with Legal, Compliance, and Risk on regulatory alignment across releases.", tr: "Stratejik ürün yönü konusunda C-level ile, düzenleyici uyum konusunda Hukuk, Uyum ve Risk ekipleriyle doğrudan çalıştı." },

    exp6_role: { en: "Senior Business Analyst", tr: "Kıdemli İş Analisti" },
    exp6_date: { en: "Feb 2015 – Apr 2016", tr: "Şub 2015 – Nis 2016" },
    exp6_b1: { en: "Led analysis for Kumsal, an SME SaaS platform covering website creation, basic accounting, CRM, and communication modules — moving into client-side product leadership at DenizBank on the strength of the work.", tr: "Web sitesi oluşturma, temel muhasebe, CRM ve iletişim modüllerini kapsayan bir KOBİ SaaS platformu olan Kumsal için analiz çalışmalarına liderlik etti — bu çalışmanın gücüyle DenizBank'ta müşteri tarafı ürün liderliğine geçti." },

    exp7_role: { en: "Earlier Experience", tr: "Önceki Deneyim" },
    exp7_date: { en: "2010 – 2014", tr: "2010 – 2014" },
    exp7_b1: { en: "Project Manager, Haser Software (2013–2014) · Founder, Mergen Consulting (2012–2013) · Material Manager, Netmon (2010–2011).", tr: "Proje Yöneticisi, Haser Software (2013–2014) · Kurucu, Mergen Consulting (2012–2013) · Malzeme Yöneticisi, Netmon (2010–2011)." },

    awards_title: { en: "Awards &amp; Recognition", tr: "Ödüller &amp; Başarılar" },
    award1: { en: "Finalist — EFMA &amp; Accenture Innovation Awards and BAI Global Innovation Awards, for the Kumsal SME ecosystem.", tr: "Finalist — Kumsal KOBİ ekosistemi için EFMA &amp; Accenture Innovation Awards ve BAI Global Innovation Awards." },

    edu_title: { en: "Education &amp; Languages", tr: "Eğitim &amp; Diller" },
    edu1_degree: { en: "BSc, Industrial Engineering", tr: "Lisans, Endüstri Mühendisliği" },
    edu2_degree: { en: "Associate Degree, Logistics Management", tr: "Ön Lisans, Lojistik Yönetimi" },
    lang_title: { en: "Languages", tr: "Diller" },
    lang_list: { en: "Turkish (native) · English (C1, professional working proficiency)", tr: "Türkçe (anadil) · İngilizce (C1, profesyonel çalışma yeterliliği)" },

    contact_title: { en: "Let's Connect", tr: "İletişime Geçelim" },
    contact_sub: { en: "Open to senior product management opportunities in fintech — reach out via any channel below.", tr: "Fintech alanında kıdemli ürün yönetimi fırsatlarına açığım — aşağıdaki kanallardan ulaşabilirsiniz." },

    footer_note: { en: "Built with care.", tr: "Özenle hazırlandı." }
  };

  var root = document.documentElement;
  var STORAGE_LANG = "fbk-lang";
  var STORAGE_THEME = "fbk-theme";

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        el.innerHTML = entry[lang];
      }
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    root.setAttribute("lang", lang);
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  function getStored(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var savedLang = getStored(STORAGE_LANG) || "en";
    applyLang(savedLang);

    var savedTheme = getStored(STORAGE_THEME);
    if (!savedTheme) {
      savedTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(savedTheme);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        applyTheme(current === "dark" ? "light" : "dark");
      });
    }

    var menuToggle = document.getElementById("menuToggle");
    var navLinks = document.getElementById("navLinks");
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { navLinks.classList.remove("open"); });
      });
    }

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
