# -*- coding: utf-8 -*-
"""
构建六级翻译高频主题资源(500+条)。
骨架: 03 脚本产出的真题中文主题词频(_cn_theme_freq.json, 来自46篇真题)
内容: 为高频主题词配标准英译, 按9大主题归类; 加真题术语对/高频搭配/常用句型。
英译为六级翻译标准译法(人工校订)。
"""
import os, json, csv
from collections import OrderedDict

BASE = r"F:\六级"
OUT  = os.path.join(BASE, "分析结果")
freq = dict(json.load(open(os.path.join(OUT,"_cn_theme_freq.json"),encoding="utf-8")))
def F(w): return freq.get(w, 0)   # 取真题词频

# ============ A. 主题词 -> 标准英译 (按9大主题) ============
THEMES = OrderedDict()

THEMES["一、国家·文化·传统"] = {
 "中国":"China","中华民族":"the Chinese nation","文化":"culture","文明":"civilization",
 "传统":"tradition; traditional","历史":"history","习俗":"custom","象征":"symbol; to symbolize",
 "中华文化":"Chinese culture","民族":"nation; ethnic group","古代":"ancient times",
 "悠久":"long-standing; time-honoured","遗产":"heritage","价值":"value","精神":"spirit",
 "繁荣":"prosperity; to flourish","伟大":"great","独特":"unique","丰富":"rich; abundant",
 "著名":"famous; renowned","被誉为":"be hailed/known as","自古以来":"since ancient times",
}
THEMES["二、经济·科技·发展"] = {
 "经济":"economy","发展":"development; to develop","增长":"growth; to grow","增加":"to increase",
 "建设":"construction; to build","工程":"project; engineering","技术":"technology",
 "系统":"system","设计":"design; to design","先进":"advanced","迅速":"rapid; rapidly",
 "现代化":"modernization","创新":"innovation","产业":"industry","企业":"enterprise",
 "北斗":"Beidou (Navigation Satellite System)","太空":"space","航天":"aerospace; space flight",
 "卫星":"satellite","全球":"global; the whole world","覆盖":"to cover","推进":"to advance/promote",
 "持续":"continuous; sustained","促进":"to promote","改善":"to improve","提供":"to provide",
}
THEMES["三、社会·民生·养老"] = {
 "社会":"society; social","政府":"government","人口":"population","养老":"elderly care; pension",
 "老年人":"the elderly; senior citizens","老龄化":"ageing (of population)","社区":"community",
 "社会保障":"social security","服务":"service","服务质量":"service quality","教育":"education",
 "生活":"life","幸福":"happiness; well-being","健康":"health; healthy","人民":"people",
 "机构":"institution; organization","保障":"to guarantee; safeguard","措施":"measure",
 "采取措施":"to take measures","鼓励":"to encourage","确保":"to ensure","公共":"public",
 "改革":"reform","政策":"policy","需求":"demand; need","参与":"to participate",
}
THEMES["四、地理·自然·旅游"] = {
 "地区":"region; area","城市":"city","旅游":"tourism; to travel","游客":"tourist; visitor",
 "高原":"plateau","青藏高原":"the Qinghai-Tibet Plateau","黄土高原":"the Loess Plateau",
 "云贵高原":"the Yunnan-Guizhou Plateau","河流":"river","长江":"the Yangtze River",
 "平均海拔":"average elevation/altitude","生态系统":"ecosystem","生物":"organism; living things",
 "风景秀丽":"have beautiful scenery","区域":"region; zone","分布":"to be distributed",
 "位于":"to be located in","气候":"climate","资源":"resource","环境":"environment",
 "吸引":"to attract","风景":"scenery; landscape","自然":"nature; natural","世界":"world",
}
THEMES["五、文学·艺术·语言"] = {
 "小说":"novel","文学":"literature","诗歌":"poetry","诗人":"poet","艺术":"art",
 "绘画":"painting","作品":"work (of art/literature)","故事":"story","成语":"idiom",
 "创作":"to create; creation","欣赏":"to appreciate","语言":"language","汉语":"Chinese (language)",
 "方言":"dialect","人物":"character; figure","文字":"writing; characters","书法":"calligraphy",
 "高雅":"elegant; refined","生动":"vivid","形象":"image","受欢迎":"popular; well-received",
 "喜爱":"to be fond of; love","创造":"to create","形式":"form","内容":"content",
}
THEMES["六、历史·人物·朝代"] = {
 "革命":"revolution","革命家":"revolutionary","郑和":"Zheng He","张骞":"Zhang Qian",
 "徐霞客":"Xu Xiake","丝绸之路":"the Silk Road","西域":"the Western Regions","明代":"the Ming Dynasty",
 "宋朝":"the Song Dynasty","公元":"AD; the Christian era","时期":"period","王朝":"dynasty",
 "船队":"fleet","率领":"to lead","考察":"to explore; investigate","旅行":"travel; journey",
 "爱国主义":"patriotism","纪念馆":"memorial hall","老一辈":"the older generation",
 "事件":"event","延安":"Yan'an","西藏":"Tibet","事业":"cause; undertaking",
}
THEMES["七、建筑·交通·设施"] = {
 "桥梁":"bridge","大桥":"bridge","港珠澳大桥":"the Hong Kong-Zhuhai-Macau Bridge",
 "卢沟桥":"the Lugou Bridge (Marco Polo Bridge)","赵州桥":"the Zhaozhou Bridge",
 "铁路":"railway","青藏铁路":"the Qinghai-Tibet Railway","机场":"airport","航站楼":"terminal building",
 "博物馆":"museum","图书馆":"library","体育馆":"gymnasium; stadium","读者":"reader",
 "展览":"exhibition","举办":"to hold (an event)","建成":"to be completed/built",
 "大型":"large-scale","结构":"structure","设施":"facility","洋山港":"Yangshan Port","港口":"port",
}
THEMES["八、植物·象征·民俗"] = {
 "牡丹":"peony","梅花":"plum blossom","荷花":"lotus","竹子":"bamboo","石狮":"stone lion",
 "婚礼":"wedding","习俗":"custom","祝福":"blessing; to bless","扇子":"fan","节日":"festival",
 "庆典":"celebration; ceremony","祥":"auspicious","坚韧":"tough; tenacious",
 "品格":"character; moral quality","纯洁":"purity; pure","高贵":"noble",
}
THEMES["九、高频动词·程度·连接"] = {
 "随着":"with; as","近年来":"in recent years","逐渐":"gradually","不断":"continuously",
 "越来越":"more and more","广泛":"widely; extensive","得到":"to obtain; gain",
 "使用":"to use","出现":"to appear; emerge","形成":"to form; take shape","采用":"to adopt",
 "缩短":"to shorten","种植":"to plant; grow","介绍":"to introduce","产生":"to produce; generate",
 "做出":"to make (contribution)","成为":"to become","实现":"to realize/achieve","经过":"after; through",
}

# 真题给出的标准译法(括号术语对) 单独成组
THEMES["十、真题原文给定译法"] = {
 "北斗(卫星导航系统)":"Beidou (Satellite Navigation System)","洋山港":"Yangshan Port",
 "拜天地":"bow to Heaven and Earth","张骞":"Zhang Qian","活字印刷":"movable-type printing",
 "成语":"Chinese idioms","方块字":"square characters","荷花":"lotus flower",
 "取经":"to fetch Buddhist scriptures","港珠澳大桥":"the Hong Kong-Zhuhai-Macau Bridge",
 "农村包围城市":"to besiege the cities from the countryside","峡谷":"canyon",
}

# 补充: 其余高频真题词(freq>=2)按主题归并, 配标准英译
THEMES["十一、补充·国家文化民俗"] = {
 "国家":"country; nation","中国政府":"the Chinese government","中式":"Chinese-style",
 "习俗":"custom","新人":"the newly-weds","宾客":"guests","场地":"venue; site",
 "红色":"red","浪漫":"romance; romantic","美好":"fine; happy","体验":"to experience",
 "和平":"peace","风土人情":"local customs and practices","古老":"ancient; age-old",
 "历史悠久":"have a long history","辉煌":"brilliant; glorious","珍贵":"precious; valuable",
 "巨大贡献":"great/tremendous contribution","贡献":"contribution","主题":"theme; subject",
}
THEMES["十二、补充·经济科技航天"] = {
 "导航系统":"navigation system","研发":"research and development","人员":"personnel; staff",
 "数字":"digital","数字技术":"digital technology","研发人员":"R&D personnel",
 "宇航员":"astronaut","探索":"to explore; exploration","未来":"the future","航运":"shipping",
 "深水港":"deep-water port","组成部分":"component; part","高度":"highly; height",
 "繁忙":"busy","生产":"production; to produce","商业":"commerce; business",
 "市场":"market","商品":"commodity; goods","科学":"science","对外开放":"opening-up to the world",
 "城市化":"urbanization","建造":"to build; construct","建立":"to establish","改进":"to improve",
}
THEMES["十三、补充·社会民生养老"] = {
 "人口老龄化":"population ageing","居家":"home-based","自助":"self-help","家庭":"family",
 "逐步":"step by step; gradually","舒适":"comfortable","积极":"active; positive",
 "加大":"to increase; intensify","支持":"support; to support","团体":"group; organization",
 "大众":"the public; the masses","稳定":"stable; stability","开设":"to set up; offer",
 "免费":"free of charge","公众":"the public","开放":"to open","参观":"to visit",
 "健身":"to keep fit; fitness","学习":"to learn; study","学生":"student","教育":"education",
 "提高":"to raise; improve","机会":"opportunity","满足":"to satisfy; meet",
}
THEMES["十四、补充·地理旅游自然"] = {
 "云南":"Yunnan","上海":"Shanghai","北京":"Beijing","南京":"Nanjing","洛阳":"Luoyang",
 "海南":"Hainan","青海":"Qinghai","西部":"the west; western part","西南":"the southwest",
 "公里":"kilometre","面积":"area","万平方公里":"ten thousand square kilometres",
 "大部分":"most; the majority","当地":"local","各地":"various places","国内外":"at home and abroad",
 "中外":"China and abroad","欧洲":"Europe","西亚":"West Asia","东南亚":"Southeast Asia",
 "印度洋":"the Indian Ocean","少数民族":"ethnic minority","高山":"high mountains",
 "冰川":"glacier","黄土":"loess","农作物":"crop","水稻":"rice","农业":"agriculture",
 "生长":"to grow","产量":"output; yield","有机":"organic","珍稀":"rare and precious",
 "物种":"species","保护":"to protect; protection","旅游业":"tourism industry",
 "目的地":"destination","蓬勃发展":"to flourish; boom","国际":"international","全国":"nationwide",
}
THEMES["十五、补充·历史人物文学"] = {
 "出使":"to be sent as an envoy","开辟":"to open up; pioneer","航海":"navigation; voyage",
 "远航":"long voyage","船队":"fleet","率领":"to lead","西域":"the Western Regions",
 "丝绸之路":"the Silk Road","后人":"later generations","游记":"travel notes",
 "唐代":"the Tang Dynasty","诗人":"poet","文学作品":"literary works","小说":"novel",
 "描写":"to depict","描绘":"to portray; depict","描述":"to describe","创作":"to create",
 "四大":"the four great ...","时期":"period","当时":"at that time","期间":"during",
 "影响":"influence; to influence","作用":"role; function","起到":"to play (a role)",
 "事件":"event","观看":"to watch","欣赏":"to appreciate","含义":"meaning; implication",
}
THEMES["十六、补充·建筑交通桥梁"] = {
 "南京长江大桥":"the Nanjing Yangtze River Bridge","铁路桥":"railway bridge",
 "天安门广场":"Tian'anmen Square","柱子":"pillar; column","狮子":"lion","石狮":"stone lion",
 "跨度":"span","建于":"to be built in","公认":"universally acknowledged","连接":"to connect",
 "洪水":"flood","节省":"to save","建筑":"building; architecture","设施":"facility",
 "中心":"centre","区域":"region","分钟":"minute","小时":"hour","数量":"quantity; number",
 "人数":"number of people","快速增长":"rapid growth","超过":"to exceed; surpass",
 "广泛应用":"to be widely used","在线":"online","展品":"exhibit","观赏":"to view; admire",
}

# ============ B. 高频翻译搭配/词组 ============
COLLOCATIONS = [
 ("自古以来","since ancient times"),("举世闻名","world-renowned"),
 ("有着悠久的历史","have a long history"),("作为……的象征","as a symbol of ..."),
 ("被列为世界文化遗产","be listed as a World Cultural Heritage site"),
 ("随着经济的发展","with the development of the economy"),
 ("人民生活水平不断提高","people's living standards keep improving"),
 ("越来越多的人","an increasing number of people"),
 ("发挥重要作用","play an important role"),("做出巨大贡献","make great contributions"),
 ("引起广泛关注","attract/arouse wide attention"),("受到普遍欢迎","be widely welcomed"),
 ("在……方面取得成就","make achievements in ..."),("位于中国南部","be located in southern China"),
 ("拥有丰富的资源","be rich in resources"),("吸引大量游客","attract a large number of tourists"),
 ("具有重要意义","be of great significance"),("象征着……的精神","symbolize the spirit of ..."),
 ("有助于","contribute to; help to"),("致力于","be committed/devoted to"),
 ("据估计","it is estimated that"),("众所周知","it is well known that"),
 ("不仅……而且……","not only ... but also ..."),("无论……都","no matter ...; regardless of"),
 ("与……密切相关","be closely related to"),("满足……的需求","meet the demand/needs of"),
 ("应对挑战","cope with/meet challenges"),("提高生活质量","improve the quality of life"),
 ("促进经济增长","promote economic growth"),("加大投入","increase investment"),
 ("逐步扩大","gradually expand"),("广泛应用于","be widely applied/used in"),
 ("世界上规模最大的之一","one of the largest in the world"),
 ("独立自主","independent; self-reliant"),("享有盛誉","enjoy a high reputation"),
 ("深受人们喜爱","be deeply loved by people"),("代代相传","be passed down from generation to generation"),
 ("源远流长","have a long history; date back to ancient times"),
 ("博大精深","extensive and profound"),("名胜古迹","scenic spots and historical sites"),
 ("传统节日","traditional festival"),("文化交流","cultural exchange"),
 ("可持续发展","sustainable development"),("综合国力","overall national strength"),
 ("人工智能","artificial intelligence"),("数字技术","digital technology"),
 ("碳排放","carbon emission"),("远程操控","remote control"),("全球覆盖","global coverage"),
 ("高精度定位","high-precision positioning"),("不间断运作","operate around the clock"),
 # 追加高频搭配
 ("举世瞩目","attract worldwide attention"),("家喻户晓","be a household name"),
 ("脱颖而出","stand out"),("供不应求","demand exceeds supply"),
 ("与日俱增","increase day by day"),("不可或缺","indispensable"),
 ("丰富多彩","rich and varied; colourful"),("独一无二","unique; one of a kind"),
 ("举足轻重","play a decisive role"),("日新月异","change rapidly with each passing day"),
 ("精益求精","keep improving; strive for perfection"),("齐心协力","work together; make concerted efforts"),
 ("供人欣赏","for people to appreciate"),("造型优美","be elegant in shape"),
 ("做工精良","be exquisitely made"),("艺术价值","artistic value"),
 ("实用功能","practical function"),("文化符号","cultural symbol"),
 ("生命力","vitality"),("适应能力","adaptability"),
 ("坚韧不拔","persevering; indomitable"),("正直的品格","upright character"),
 ("广泛认可","wide recognition"),("优质服务","high-quality service"),
 ("重大成就","major achievement"),("科技成就","scientific and technological achievement"),
 ("不懈努力","unremitting efforts"),("攻克难题","overcome difficulties/problems"),
 ("少数几个国家之一","one of the few countries"),("交通运输","transportation"),
 ("灾害救援","disaster relief"),("天气预报","weather forecast"),("公共安全","public security"),
 ("用工成本","labour cost"),("管理系统","management system"),("大型设备","large equipment"),
 ("全面建成","be fully completed"),("稳步推进","advance steadily"),
 ("基础设施","infrastructure"),("创新发展","innovation-driven development"),
 ("写下辉煌一页","write a glorious chapter"),("人类文明","human civilization"),
 ("迈得更稳更远","go steadier and further"),("精心装饰","be carefully decorated"),
 ("设宴招待","hold a banquet to entertain"),("敬酒致谢","propose a toast to express thanks"),
 ("钟情于","be fond of; have a special liking for"),("沿用至今","be in use up to now"),
]

# ============ C. 高频翻译句型 ============
PATTERNS = [
 ("中国是……的国家","China is a country that/where ..."),
 ("……起源于中国","... originated in China"),
 ("……可以追溯到……","... can date/be traced back to ..."),
 ("……是中国最……之一","... is one of the most ... in China"),
 ("自从……以来，……发生了巨大变化","Since ..., great changes have taken place in ..."),
 ("为了……，政府采取了一系列措施","In order to ..., the government has taken a series of measures."),
 ("随着……的到来，……","With the arrival of ..., ..."),
 ("据报道/据估计，……","It is reported/estimated that ..."),
 ("正是……使得……","It is ... that makes ..."),
 ("不仅在国内，而且在国际上……","not only at home but also abroad ..."),
 ("无论……，……都……","No matter how ..., ... always ..."),
 ("……越来越受到人们的重视","... has received increasing attention"),
 ("……被认为是……","... is regarded/considered as ..."),
 ("……象征着中华民族的……","... symbolizes the ... of the Chinese nation"),
 ("如今，……已成为……","Nowadays, ... has become ..."),
 ("未来，……将……","In the future, ... will ..."),
 ("……不但历史悠久，而且……","... not only has a long history but also ..."),
 ("中国政府高度重视……","The Chinese government attaches great importance to ..."),
 ("……在世界上享有盛誉","... enjoys a high reputation in the world"),
 ("经过多年的发展，……","After years of development, ..."),
 ("……不仅推动了经济，也促进了……","... has not only boosted the economy but also promoted ..."),
 ("值得一提的是，……","It is worth mentioning that ..."),
 ("正如人们所说，……","As the saying goes, ..."),
 ("可以毫不夸张地说，……","It is no exaggeration to say that ..."),
 ("……在很大程度上取决于……","... depends largely on ..."),
]

# ============ 汇总输出 ============
rows = []   # (序号, 类别, 中文, 英译, 真题频次)
idx = 0
# 主题词
for theme, mapping in THEMES.items():
    for cn, en in mapping.items():
        idx += 1
        rows.append([idx, theme, cn, en, F(cn.split("(")[0])])
# 搭配
for cn, en in COLLOCATIONS:
    idx += 1
    rows.append([idx, "高频搭配/词组", cn, en, ""])
# 句型
for cn, en in PATTERNS:
    idx += 1
    rows.append([idx, "高频句型", cn, en, ""])

print(f"总条目: {len(rows)}")
from collections import Counter
cat_count = Counter(r[1] for r in rows)
for c,n in cat_count.items(): print(f"  {c}: {n}")

# CSV
with open(os.path.join(OUT,"六级翻译高频500_主题词句.csv"),"w",newline="",encoding="utf-8-sig") as f:
    w = csv.writer(f)
    w.writerow(["序号","类别","中文","标准英译","真题词频"])
    w.writerows(rows)

# Markdown
md = ["# 六级翻译高频主题 500 · 中译英速记\n",
 "> 骨架来自近10年(2016–2025)六级翻译真题的中文主题词频统计（46篇），英译为六级标准译法。\n",
 f"> 共 {len(rows)} 条：主题词 + 真题给定译法 + 高频搭配 + 常用句型。\n"]
cur = None
for no, cat, cn, en, fr in rows:
    if cat != cur:
        cur = cat
        md.append(f"\n## {cat}\n")
        md.append("| # | 中文 | 英译 | 真题频次 |")
        md.append("|---|------|------|------|")
    md.append(f"| {no} | {cn} | {en} | {fr if fr else '—'} |")
with open(os.path.join(OUT,"六级翻译高频500_主题词句.md"),"w",encoding="utf-8") as f:
    f.write("\n".join(md))

# JSON
with open(os.path.join(OUT,"六级翻译高频500.json"),"w",encoding="utf-8") as f:
    json.dump([{"no":r[0],"category":r[1],"cn":r[2],"en":r[3],"exam_freq":r[4]} for r in rows],
              f, ensure_ascii=False, indent=1)

print(f"\n输出: 六级翻译高频500_主题词句.{{csv,md}} / 六级翻译高频500.json")
