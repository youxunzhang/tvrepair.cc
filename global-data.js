// Global TV Brands Data - Major Television Manufacturers Worldwide
const globalBrandsData = [
    // Major International Brands
    {
        id: 1,
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
        logoAlt: "Samsung Electronics Logo",
        country: "South Korea",
        region: "Asia",
        description: "Global leader in consumer electronics, pioneering QLED and Micro LED technology with innovative design and cutting-edge display technology.",
        categories: ["QLED TV", "4K TV", "8K TV", "Smart TV", "Gaming TV", "The Frame"],
        contact: {
            phone: "+82-2-2255-0114",
            email: "service@samsung.com",
            website: "https://www.samsung.com",
            address: "Samsung Electronics, 129 Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea"
        },
        products: [
            { name: "Samsung QN900A", description: "8K QLED TV with Neo Quantum Processor" },
            { name: "Samsung QN85A", description: "4K QLED TV with Mini LED backlight" },
            { name: "Samsung The Frame", description: "Art TV with customizable bezels" }
        ],
        features: ["QLED Quantum Dot", "8K Ultra HD", "Neo Quantum Processor", "Art Mode", "SmartThings"]
    },
    {
        id: 2,
        name: "LG",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_logo_%282015%29.svg",
        logoAlt: "LG Electronics Logo",
        country: "South Korea",
        region: "Asia",
        description: "World leader in OLED technology, delivering exceptional picture quality and innovative webOS smart platform with Gallery design options.",
        categories: ["OLED TV", "4K TV", "8K TV", "Smart TV", "Gaming TV", "Gallery TV"],
        contact: {
            phone: "+82-2-3777-1114",
            email: "service@lg.com",
            website: "https://www.lg.com",
            address: "LG Electronics, LG Twin Towers, 128 Yeoui-daero, Yeongdeungpo-gu, Seoul, South Korea"
        },
        products: [
            { name: "LG C1", description: "OLED TV with α9 Gen4 AI processor" },
            { name: "LG G1", description: "Gallery OLED TV with wall-mount design" },
            { name: "LG Z1", description: "8K OLED TV with 8K processor" }
        ],
        features: ["OLED Technology", "α9 AI Processor", "8K Ultra HD", "webOS", "Gallery Design"]
    },
    {
        id: 3,
        name: "Sony",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Sony_logo.svg",
        logoAlt: "Sony Corporation Logo",
        country: "Japan",
        region: "Asia",
        description: "Premium television manufacturer known for exceptional picture quality, advanced audio technology, and the revolutionary XR cognitive processor.",
        categories: ["4K TV", "OLED TV", "8K TV", "Smart TV", "Gaming TV", "Premium TV"],
        contact: {
            phone: "+81-3-6748-2111",
            email: "service@sony.com",
            website: "https://www.sony.com",
            address: "Sony Corporation, 1-7-1 Konan, Minato-ku, Tokyo, Japan"
        },
        products: [
            { name: "Sony A90J", description: "OLED TV with XR cognitive processor" },
            { name: "Sony X95J", description: "4K TV with full array local dimming" },
            { name: "Sony Z9J", description: "8K TV with 8K HDR processor" }
        ],
        features: ["XR Cognitive Processor", "OLED Technology", "8K Ultra HD", "Dolby Vision", "Gaming Mode"]
    },
    {
        id: 4,
        name: "Panasonic",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Panasonic_logo_%28Blue%29.svg",
        logoAlt: "Panasonic Corporation Logo",
        country: "Japan",
        region: "Asia",
        description: "Renowned for professional-grade picture quality and advanced color accuracy, offering premium OLED and LED televisions with Hollywood-tuned calibration.",
        categories: ["OLED TV", "4K TV", "Smart TV", "Premium TV", "Professional TV"],
        contact: {
            phone: "+81-3-3574-1111",
            email: "service@panasonic.com",
            website: "https://www.panasonic.com",
            address: "Panasonic Corporation, 1006, Oaza Kadoma, Kadoma-shi, Osaka, Japan"
        },
        products: [
            { name: "Panasonic JZ2000", description: "OLED TV with Hollywood-tuned calibration" },
            { name: "Panasonic JX800", description: "4K LED TV with HDR10+ support" },
            { name: "Panasonic GZ2000", description: "OLED TV with Technics audio" }
        ],
        features: ["Hollywood Calibration", "HDR10+", "Technics Audio", "My Home Screen", "HCX Processor"]
    },
    {
        id: 5,
        name: "Sharp",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Sharp_logo.svg",
        logoAlt: "Sharp Corporation Logo",
        country: "Japan",
        region: "Asia",
        description: "Pioneer in LCD technology with innovative XLED display technology, delivering exceptional color accuracy and energy efficiency.",
        categories: ["4K TV", "Smart TV", "XLED TV", "Energy Efficient TV"],
        contact: {
            phone: "+81-3-5332-1111",
            email: "service@sharp.co.jp",
            website: "https://www.sharp.co.jp",
            address: "Sharp Corporation, 1 Takumi-machi, Sakai-ku, Sakai City, Osaka, Japan"
        },
        products: [
            { name: "Sharp AQUOS XLED", description: "4K TV with XLED technology" },
            { name: "Sharp AQUOS 4T", description: "4K Smart TV with AI picture quality" },
            { name: "Sharp AQUOS 8K", description: "8K TV with ultra-high resolution" }
        ],
        features: ["XLED Technology", "8K Ultra HD", "AI Picture Quality", "Energy Efficient", "Smart TV"]
    },
    {
        id: 6,
        name: "Philips",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Philips_logo_%282015%29.svg",
        logoAlt: "Philips Logo",
        country: "Netherlands",
        region: "Europe",
        description: "European electronics giant known for innovative design, Ambilight technology, and P5 picture processing engine for exceptional viewing experience.",
        categories: ["4K TV", "OLED TV", "Smart TV", "Ambilight TV", "Gaming TV"],
        contact: {
            phone: "+31-40-278-9111",
            email: "service@philips.com",
            website: "https://www.philips.com",
            address: "Philips, Amstelplein 2, 1096 BC Amsterdam, Netherlands"
        },
        products: [
            { name: "Philips OLED806", description: "OLED TV with P5 picture engine" },
            { name: "Philips PUS8506", description: "4K Smart TV with AI voice control" },
            { name: "Philips PUS8806", description: "4K TV with Ambilight technology" }
        ],
        features: ["P5 Picture Engine", "Ambilight", "AI Voice Control", "HDR10+", "Android TV"]
    },
    {
        id: 7,
        name: "Toshiba",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Toshiba_logo_%282015%29.svg",
        logoAlt: "Toshiba Logo",
        country: "Japan",
        region: "Asia",
        description: "Established Japanese brand offering reliable televisions with advanced picture processing and smart connectivity features.",
        categories: ["4K TV", "Smart TV", "LED TV", "Budget TV"],
        contact: {
            phone: "+81-3-3457-4511",
            email: "service@toshiba.co.jp",
            website: "https://www.toshiba.co.jp",
            address: "Toshiba Corporation, 1-1, Shibaura 1-chome, Minato-ku, Tokyo, Japan"
        },
        products: [
            { name: "Toshiba C350", description: "4K Smart TV with Fire TV built-in" },
            { name: "Toshiba M550", description: "4K TV with Dolby Vision HDR" },
            { name: "Toshiba V35", description: "4K Smart TV with Alexa voice control" }
        ],
        features: ["Fire TV Built-in", "Dolby Vision", "Alexa Voice Control", "4K Ultra HD", "Smart TV"]
    },
    {
        id: 8,
        name: "Vizio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vizio_logo_%282015%29.svg",
        logoAlt: "Vizio Logo",
        country: "United States",
        region: "Americas",
        description: "American television manufacturer specializing in high-value smart TVs with advanced features and competitive pricing.",
        categories: ["4K TV", "Smart TV", "Gaming TV", "Budget TV", "Vizio TV"],
        contact: {
            phone: "+1-877-698-4946",
            email: "service@vizio.com",
            website: "https://www.vizio.com",
            address: "Vizio, 39 Tesla, Irvine, CA 92618, USA"
        },
        products: [
            { name: "Vizio P-Series", description: "4K Smart TV with Quantum Color" },
            { name: "Vizio M-Series", description: "4K TV with Active Full Array" },
            { name: "Vizio V-Series", description: "4K Smart TV with V-Gaming Engine" }
        ],
        features: ["Quantum Color", "Active Full Array", "V-Gaming Engine", "SmartCast", "4K Ultra HD"]
    },
    {
        id: 9,
        name: "TCL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/TCL_logo.svg",
        logoAlt: "TCL Logo",
        country: "China",
        region: "Asia",
        description: "Global consumer electronics leader offering innovative QLED and Mini LED technology with exceptional value and smart features.",
        categories: ["4K TV", "QLED TV", "Smart TV", "Gaming TV", "Mini LED TV"],
        contact: {
            phone: "+86-755-3333-8888",
            email: "service@tcl.com",
            website: "https://www.tcl.com",
            address: "TCL Corporation, TCL Industrial Park, Huizhou, Guangdong, China"
        },
        products: [
            { name: "TCL C12", description: "QLED TV with Mini LED backlight" },
            { name: "TCL P12", description: "4K Smart TV with 120Hz refresh rate" },
            { name: "TCL V8", description: "Gaming TV with VRR technology" }
        ],
        features: ["QLED Quantum Dot", "Mini LED", "120Hz Refresh", "Gaming Mode", "AI Voice"]
    },
    {
        id: 10,
        name: "Hisense",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Hisense_logo.svg",
        logoAlt: "Hisense Logo",
        country: "China",
        region: "Asia",
        description: "Leading Chinese manufacturer specializing in 4K, OLED, and laser TV technology with global presence and innovative display solutions.",
        categories: ["4K TV", "OLED TV", "Laser TV", "Smart TV", "ULED TV"],
        contact: {
            phone: "+86-532-8388-1111",
            email: "service@hisense.com",
            website: "https://www.hisense.com",
            address: "Hisense Group, 218 Qianwang Road, Qingdao, Shandong, China"
        },
        products: [
            { name: "Hisense U8H", description: "4K OLED TV with Dolby Vision" },
            { name: "Hisense L9H", description: "Laser TV with 100-inch screen" },
            { name: "Hisense E8H", description: "4K Smart TV with AI voice control" }
        ],
        features: ["ULED Technology", "Dolby Vision", "AI Voice Control", "Laser TV", "4K Ultra HD"]
    },
    {
        id: 11,
        name: "Xiaomi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
        logoAlt: "Xiaomi Logo",
        country: "China",
        region: "Asia",
        description: "Innovative technology company offering high-quality smart TVs with MIUI for TV, exceptional value, and cutting-edge features.",
        categories: ["4K TV", "Smart TV", "Android TV", "Gaming TV", "Budget TV"],
        contact: {
            phone: "+86-400-100-5678",
            email: "service@mi.com",
            website: "https://www.mi.com",
            address: "Xiaomi Corporation, 8th Floor, Building 6, No. 33, Erqi District, Zhengzhou, China"
        },
        products: [
            { name: "Xiaomi Mi TV 6", description: "4K OLED TV with AI upscaling" },
            { name: "Xiaomi Mi TV 5", description: "4K QLED TV with quantum dots" },
            { name: "Xiaomi Mi TV 4", description: "4K Smart TV with Android TV" }
        ],
        features: ["MIUI for TV", "AI Upscaling", "Quantum Dots", "Android TV", "PatchWall"]
    },
    {
        id: 12,
        name: "Skyworth",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Skyworth_logo.svg",
        logoAlt: "Skyworth Logo",
        country: "China",
        region: "Asia",
        description: "Leading Chinese electronics manufacturer specializing in smart TVs, OLED displays, and innovative home entertainment solutions.",
        categories: ["4K TV", "OLED TV", "Smart TV", "Gaming TV", "Android TV"],
        contact: {
            phone: "+86-755-3333-9999",
            email: "service@skyworth.com",
            website: "https://www.skyworth.com",
            address: "Skyworth Group, Skyworth Building, 5 Gaoxin South 4th Road, Shenzhen, China"
        },
        products: [
            { name: "Skyworth A23", description: "4K OLED TV with AI picture enhancement" },
            { name: "Skyworth G23", description: "4K Smart TV with Android 11" },
            { name: "Skyworth Q23", description: "QLED TV with quantum dot technology" }
        ],
        features: ["AI Picture Enhancement", "Android 11", "Quantum Dots", "Gaming Mode", "Smart Home"]
    },
    {
        id: 13,
        name: "Konka",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Konka_logo.svg",
        logoAlt: "Konka Logo",
        country: "China",
        region: "Asia",
        description: "Established Chinese electronics brand offering reliable televisions with smart features, energy efficiency, and competitive pricing.",
        categories: ["4K TV", "Smart TV", "LED TV", "Budget TV", "Android TV"],
        contact: {
            phone: "+86-755-3333-7777",
            email: "service@konka.com",
            website: "https://www.konka.com",
            address: "Konka Group, Konka Building, 1 Konka Road, Shenzhen, China"
        },
        products: [
            { name: "Konka A3", description: "4K Smart TV with Android TV" },
            { name: "Konka G3", description: "4K LED TV with HDR support" },
            { name: "Konka Q3", description: "QLED TV with quantum dot display" }
        ],
        features: ["Android TV", "HDR Support", "Quantum Dots", "Smart Voice", "Energy Efficient"]
    },
    {
        id: 14,
        name: "Changhong",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Changhong_logo.svg",
        logoAlt: "Changhong Logo",
        country: "China",
        region: "Asia",
        description: "Major Chinese electronics manufacturer specializing in smart TVs, OLED technology, and innovative display solutions for global markets.",
        categories: ["4K TV", "OLED TV", "Smart TV", "Gaming TV", "Android TV"],
        contact: {
            phone: "+86-400-811-1666",
            email: "service@changhong.com",
            website: "https://www.changhong.com",
            address: "Changhong Electric, 35 Mianxing East Road, Mianyang, Sichuan, China"
        },
        products: [
            { name: "Changhong A7", description: "4K OLED TV with AI upscaling" },
            { name: "Changhong G7", description: "4K Smart TV with Android TV" },
            { name: "Changhong Q7", description: "QLED TV with quantum dot technology" }
        ],
        features: ["AI Upscaling", "Android TV", "Quantum Dots", "Gaming Mode", "Smart Voice"]
    },
    {
        id: 15,
        name: "JVC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/JVC_logo.svg",
        logoAlt: "JVC Logo",
        country: "Japan",
        region: "Asia",
        description: "Japanese electronics brand known for high-quality televisions with advanced picture processing and smart connectivity features.",
        categories: ["4K TV", "Smart TV", "LED TV", "Gaming TV", "Android TV"],
        contact: {
            phone: "+81-3-3456-7890",
            email: "service@jvc.com",
            website: "https://www.jvc.com",
            address: "JVC Kenwood Corporation, 3-12, Moriya-cho, Kanagawa-ku, Yokohama, Japan"
        },
        products: [
            { name: "JVC LT-55C890", description: "4K Smart TV with Android TV" },
            { name: "JVC LT-65C890", description: "4K LED TV with HDR support" },
            { name: "JVC LT-75C890", description: "4K Smart TV with gaming features" }
        ],
        features: ["Android TV", "HDR Support", "Gaming Mode", "Smart Voice", "4K Ultra HD"]
    }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = globalBrandsData;
} 