// 电视品牌数据
const brandsData = [
    {
        id: 1,
        name: "海信",
        logo: "海",
        description: "海信是中国领先的电视制造商，专注于4K、OLED和激光电视技术，产品覆盖从入门到高端的全系列电视。",
        categories: ["4K电视", "OLED电视", "激光电视", "智能电视", "大屏电视"],
        contact: {
            phone: "400-611-1111",
            email: "service@hisense.com",
            website: "https://www.hisense.com",
            address: "青岛市崂山区株洲路151号"
        },
        products: [
            { name: "海信U8H", description: "4K OLED电视，支持杜比视界" },
            { name: "海信L9H", description: "激光电视，100英寸超大屏幕" },
            { name: "海信E8H", description: "4K智能电视，AI语音控制" }
        ],
        features: ["4K超高清", "HDR技术", "AI智能", "杜比音效", "护眼技术"]
    },
    {
        id: 2,
        name: "TCL",
        logo: "T",
        description: "TCL是全球知名的消费电子品牌，在电视领域拥有强大的研发实力，产品以高性价比著称。",
        categories: ["4K电视", "QLED电视", "智能电视", "游戏电视", "大屏电视"],
        contact: {
            phone: "400-812-3456",
            email: "service@tcl.com",
            website: "https://www.tcl.com",
            address: "深圳市南山区科技园南区"
        },
        products: [
            { name: "TCL C12", description: "QLED量子点电视，Mini LED背光" },
            { name: "TCL P12", description: "4K智能电视，120Hz刷新率" },
            { name: "TCL V8", description: "游戏电视，VRR可变刷新率" }
        ],
        features: ["QLED量子点", "Mini LED", "120Hz刷新", "游戏模式", "AI语音"]
    },
    {
        id: 3,
        name: "创维",
        logo: "创",
        description: "创维是中国老牌电视厂商，专注于OLED和智能电视技术，在画质和音效方面有独特优势。",
        categories: ["OLED电视", "4K电视", "智能电视", "护眼电视", "大屏电视"],
        contact: {
            phone: "400-866-5555",
            email: "service@skyworth.com",
            website: "https://www.skyworth.com",
            address: "深圳市南山区高新南一道创维大厦"
        },
        products: [
            { name: "创维A23", description: "OLED护眼电视，DC调光技术" },
            { name: "创维G90", description: "4K智能电视，杜比全景声" },
            { name: "创维Q53", description: "OLED电视，AI画质引擎" }
        ],
        features: ["OLED自发光", "护眼技术", "杜比全景声", "AI画质", "DC调光"]
    },
    {
        id: 4,
        name: "长虹",
        logo: "长",
        description: "长虹是中国历史悠久的电视品牌，在军工品质和可靠性方面有良好口碑，产品线覆盖全面。",
        categories: ["4K电视", "智能电视", "大屏电视", "护眼电视", "教育电视"],
        contact: {
            phone: "400-811-1666",
            email: "service@changhong.com",
            website: "https://www.changhong.com",
            address: "四川省绵阳市高新区绵兴东路35号"
        },
        products: [
            { name: "长虹D8K", description: "4K智能电视，军工品质" },
            { name: "长虹Q8T", description: "量子点电视，AI语音控制" },
            { name: "长虹E8", description: "护眼电视，蓝光过滤技术" }
        ],
        features: ["军工品质", "量子点技术", "AI语音", "护眼技术", "教育功能"]
    },
    {
        id: 5,
        name: "康佳",
        logo: "康",
        description: "康佳是中国知名家电品牌，在电视领域拥有丰富的经验，产品以稳定性和性价比著称。",
        categories: ["4K电视", "智能电视", "大屏电视", "护眼电视", "教育电视"],
        contact: {
            phone: "400-880-0016",
            email: "service@konka.com",
            website: "https://www.konka.com",
            address: "深圳市南山区科技园南区"
        },
        products: [
            { name: "康佳A6", description: "4K智能电视，AI语音助手" },
            { name: "康佳E8", description: "护眼电视，防蓝光技术" },
            { name: "康佳Q7", description: "量子点电视，HDR技术" }
        ],
        features: ["AI语音", "护眼技术", "量子点", "HDR", "智能系统"]
    },
    {
        id: 6,
        name: "小米",
        logo: "米",
        description: "小米电视以互联网思维打造，产品性价比极高，智能系统体验优秀，深受年轻用户喜爱。",
        categories: ["智能电视", "4K电视", "OLED电视", "游戏电视", "大屏电视"],
        contact: {
            phone: "400-100-5678",
            email: "service@mi.com",
            website: "https://www.mi.com",
            address: "北京市海淀区清河中街68号"
        },
        products: [
            { name: "小米电视6 OLED", description: "OLED电视，4K超高清" },
            { name: "小米电视ES", description: "4K智能电视，PatchWall系统" },
            { name: "小米电视大师", description: "量子点电视，120Hz刷新率" }
        ],
        features: ["PatchWall系统", "小爱同学", "4K超高清", "OLED技术", "游戏模式"]
    },
    {
        id: 7,
        name: "华为",
        logo: "华",
        description: "华为智慧屏是华为在电视领域的重要布局，主打智慧互联和音画质体验，技术实力强劲。",
        categories: ["智慧屏", "4K电视", "OLED电视", "智能电视", "大屏电视"],
        contact: {
            phone: "400-830-8300",
            email: "service@huawei.com",
            website: "https://www.huawei.com",
            address: "深圳市龙岗区坂田华为基地"
        },
        products: [
            { name: "华为智慧屏V75", description: "75英寸智慧屏，鸿蒙系统" },
            { name: "华为智慧屏S", description: "4K智慧屏，AI摄像头" },
            { name: "华为智慧屏X65", description: "OLED智慧屏，帝瓦雷音响" }
        ],
        features: ["鸿蒙系统", "AI摄像头", "帝瓦雷音响", "智慧互联", "4K超高清"]
    },
    {
        id: 8,
        name: "索尼",
        logo: "索",
        description: "索尼是全球顶级电视品牌，在画质技术方面处于领先地位，产品以卓越的画质和音效著称。",
        categories: ["4K电视", "OLED电视", "8K电视", "游戏电视", "大屏电视"],
        contact: {
            phone: "400-810-9000",
            email: "service@sony.com.cn",
            website: "https://www.sony.com.cn",
            address: "北京市朝阳区建国门外大街1号"
        },
        products: [
            { name: "索尼A90J", description: "OLED电视，XR认知芯片" },
            { name: "索尼X95J", description: "4K电视，全阵列背光" },
            { name: "索尼Z9J", description: "8K电视，8K HDR处理器" }
        ],
        features: ["XR认知芯片", "OLED技术", "8K超高清", "杜比视界", "游戏模式"]
    },
    {
        id: 9,
        name: "三星",
        logo: "三",
        description: "三星是全球电视市场的领导者，在QLED和Micro LED技术方面领先，产品设计时尚美观。",
        categories: ["QLED电视", "4K电视", "8K电视", "智能电视", "大屏电视"],
        contact: {
            phone: "400-810-5858",
            email: "service@samsung.com",
            website: "https://www.samsung.com",
            address: "北京市朝阳区建国门外大街1号"
        },
        products: [
            { name: "三星QN900A", description: "8K QLED电视，Neo量子处理器" },
            { name: "三星QN85A", description: "4K QLED电视，Mini LED背光" },
            { name: "三星The Frame", description: "艺术电视，可定制画框" }
        ],
        features: ["QLED量子点", "8K超高清", "Neo量子处理器", "艺术模式", "智能系统"]
    },
    {
        id: 10,
        name: "LG",
        logo: "L",
        description: "LG是全球OLED电视技术的领导者，产品以卓越的画质和创新的设计著称，技术实力雄厚。",
        categories: ["OLED电视", "4K电视", "8K电视", "智能电视", "大屏电视"],
        contact: {
            phone: "400-819-9999",
            email: "service@lg.com",
            website: "https://www.lg.com",
            address: "北京市朝阳区建国门外大街1号"
        },
        products: [
            { name: "LG C1", description: "OLED电视，α9 Gen4处理器" },
            { name: "LG G1", description: "OLED电视，Gallery设计" },
            { name: "LG Z1", description: "8K OLED电视，8K处理器" }
        ],
        features: ["OLED技术", "α9处理器", "8K超高清", "webOS系统", "Gallery设计"]
    },
    {
        id: 11,
        name: "夏普",
        logo: "夏",
        description: "夏普是液晶显示技术的先驱，在画质技术方面有深厚积累，产品以色彩还原准确著称。",
        categories: ["4K电视", "智能电视", "大屏电视", "护眼电视", "教育电视"],
        contact: {
            phone: "400-888-8888",
            email: "service@sharp.cn",
            website: "https://www.sharp.cn",
            address: "上海市浦东新区张江高科技园区"
        },
        products: [
            { name: "夏普AQUOS XLED", description: "4K电视，XLED技术" },
            { name: "夏普AQUOS 4T", description: "4K智能电视，AI画质" },
            { name: "夏普AQUOS 8K", description: "8K电视，8K超高清" }
        ],
        features: ["XLED技术", "8K超高清", "AI画质", "护眼技术", "智能系统"]
    },
    {
        id: 12,
        name: "飞利浦",
        logo: "飞",
        description: "飞利浦是欧洲知名电视品牌，在画质和音效方面有独特优势，产品设计简约时尚。",
        categories: ["4K电视", "OLED电视", "智能电视", "大屏电视", "护眼电视"],
        contact: {
            phone: "400-880-0088",
            email: "service@philips.com",
            website: "https://www.philips.com",
            address: "上海市浦东新区张江高科技园区"
        },
        products: [
            { name: "飞利浦OLED806", description: "OLED电视，P5画质引擎" },
            { name: "飞利浦PUS8506", description: "4K智能电视，AI语音" },
            { name: "飞利浦PUS8806", description: "4K电视，流光溢彩技术" }
        ],
        features: ["P5画质引擎", "流光溢彩", "AI语音", "护眼技术", "智能系统"]
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = brandsData;
} 