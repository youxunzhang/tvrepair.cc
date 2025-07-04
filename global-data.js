// Global TV Brands Data - Major Television Manufacturers Worldwide
const globalBrandsData = [
    // Major International Brands
    {
        id: 1,
        name: "Samsung",
        logo: "S",
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
        logo: "L",
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
        logo: "S",
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
        logo: "P",
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
        logo: "S",
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
        logo: "P",
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
        logo: "T",
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
        logo: "V",
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
        logo: "T",
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
        logo: "H",
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
    }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = globalBrandsData;
} 