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
        followUs: "Follow Us"
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
        followUs: "关注我们"
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

    // 保存语言选择到本地存储
    localStorage.setItem('preferredLanguage', lang);
}

// 添加语言切换事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language');
    
    // 检查是否有保存的语言偏好
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        updateContent(savedLanguage);
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            updateContent(lang);
        });
    });
}); 