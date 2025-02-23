const translations = {
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        cases: "Success Cases",
        contact: "Contact",
        heroTitle: "WoM Offer Study Abroad Studio",
        heroSubtitle: "Your Guide to Overseas Education",
        aboutTitle: "About Us",
        aboutText: "WoM Offer is a professional overseas education consulting studio under Wang Mi You Tu. Since our establishment, we have been committed to providing students with the highest quality study abroad consulting services, helping students achieve their dreams of studying overseas.",
        consultants: "Professional Consultants",
        successCases: "Success Cases",
        partnerSchools: "Partner Schools",
        acceptanceRate: "Acceptance Rate",
        servicesTitle: "Our Services",
        applicationService: "Study Abroad Application",
        applicationDesc: "Full planning and guidance, including school selection and material preparation",
        essayService: "Essay Guidance",
        essayDesc: "Personalized essay writing guidance and revision suggestions",
        visaService: "Visa Service",
        visaDesc: "Visa material preparation and interview guidance",
        languageService: "Language Training",
        languageDesc: "IELTS, TOEFL and other language test training",
        contactUs: "Contact Us",
        phone: "Phone",
        email: "Email",
        address: "Address: Building 15-202, West Xingqiao Xinyuan, Minhang District, Shanghai",
        followUs: "Follow Us",
        wechat1: "WoMoffer_Tiago",
        wechat2: "WoMoYu_002",
        redbook1: "WoMOffer",
        redbook2: "WoMOffer_Tiago",
        copyright: "© 2024 Wang Mi You Tu WoM Offer. All rights reserved."
    },
    zh: {
        home: "首页",
        about: "关于我们",
        services: "服务项目",
        cases: "成功案例",
        contact: "联系我们",
        heroTitle: "WoM Offer 留学工作室",
        heroSubtitle: "为您的留学梦想保驾护航",
        aboutTitle: "关于我们",
        aboutText: "WoM Offer是旺米优途旗下专业的留学咨询工作室。自成立以来，我们始终致力于为学生提供最优质的留学咨询服务，帮助莘莘学子实现海外求学梦想。",
        consultants: "专业顾问",
        successCases: "成功案例",
        partnerSchools: "合作院校",
        acceptanceRate: "录取率",
        servicesTitle: "我们的服务",
        applicationService: "留学申请",
        applicationDesc: "全程规划与指导，包括学校选择、材料准备等",
        essayService: "文书指导",
        essayDesc: "个性化文书写作指导与修改建议",
        visaService: "签证服务",
        visaDesc: "签证材料准备与面签指导",
        languageService: "语言培训",
        languageDesc: "雅思、托福等语言考试培训",
        contactUs: "联系我们",
        phone: "电话",
        email: "邮箱",
        address: "地址：上海市闵行区星侨馨苑西区15-202",
        followUs: "关注我们",
        wechat1: "WoMoffer_Tiago",
        wechat2: "WoMoYu_002",
        redbook1: "WoMOffer",
        redbook2: "WoMOffer_Tiago",
        copyright: "© 2024 旺米优途 WoM Offer. 保留所有权利。"
    }
};

function updateContent(lang) {
    // 更新导航链接
    document.querySelector('a[href="#home"]').textContent = translations[lang].home;
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#services"]').textContent = translations[lang].services;
    document.querySelector('a[href="#cases"]').textContent = translations[lang].cases;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;

    // 更新hero部分
    document.querySelector('.hero-content h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-content p').textContent = translations[lang].heroSubtitle;

    // 更新关于我们部分
    document.querySelector('.about h2').textContent = translations[lang].aboutTitle;
    document.querySelector('.about p').textContent = translations[lang].aboutText;

    // 更新统计数据描述
    document.querySelectorAll('.stat-item p')[0].textContent = translations[lang].consultants;
    document.querySelectorAll('.stat-item p')[1].textContent = translations[lang].successCases;
    document.querySelectorAll('.stat-item p')[2].textContent = translations[lang].partnerSchools;
    document.querySelectorAll('.stat-item p')[3].textContent = translations[lang].acceptanceRate;

    // 更新服务部分
    document.querySelector('.services h2').textContent = translations[lang].servicesTitle;
    
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems[0].querySelector('h3').textContent = translations[lang].applicationService;
    serviceItems[0].querySelector('p').textContent = translations[lang].applicationDesc;
    serviceItems[1].querySelector('h3').textContent = translations[lang].essayService;
    serviceItems[1].querySelector('p').textContent = translations[lang].essayDesc;
    serviceItems[2].querySelector('h3').textContent = translations[lang].visaService;
    serviceItems[2].querySelector('p').textContent = translations[lang].visaDesc;
    serviceItems[3].querySelector('h3').textContent = translations[lang].languageService;
    serviceItems[3].querySelector('p').textContent = translations[lang].languageDesc;

    // 更新页脚
    document.querySelector('.footer-info h3').textContent = translations[lang].contactUs;
    document.querySelector('.footer-social h3').textContent = translations[lang].followUs;

    // 更新页脚社交媒体链接文本
    const socialLinks = document.querySelectorAll('.social-links a span');
    socialLinks[0].textContent = translations[lang].wechat1;
    socialLinks[1].textContent = translations[lang].wechat2;
    socialLinks[2].textContent = translations[lang].redbook1;
    socialLinks[3].textContent = translations[lang].redbook2;

    // 更新版权信息
    document.querySelector('.footer-bottom p').textContent = translations[lang].copyright;

    // 保存语言选择到本地存储
    localStorage.setItem('preferredLanguage', lang);
}

// 修改语言切换事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.querySelector('.language-toggle');
    
    // 强制初始化为中文
    updateContent('zh');
    updateToggleButton('zh');
    languageToggle.setAttribute('data-current-lang', 'zh');

    // 然后再检查本地存储的语言偏好
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        updateContent(savedLanguage);
        updateToggleButton(savedLanguage);
        languageToggle.setAttribute('data-current-lang', savedLanguage);
    }

    languageToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = languageToggle.getAttribute('data-current-lang');
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        
        updateContent(newLang);
        updateToggleButton(newLang);
        languageToggle.setAttribute('data-current-lang', newLang);
    });
});

// 添加更新切换按钮文本的函数
function updateToggleButton(lang) {
    const toggleButton = document.querySelector('.language-toggle');
    toggleButton.textContent = lang === 'zh' ? '中文 / English' : 'English / 中文';
} 