(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{599:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"域名背后那些事"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名背后那些事"}},[s._v("#")]),s._v(" 域名背后那些事")]),s._v(" "),n("p",[s._v("互联网中的地址是数字的"),n("code",[s._v("IP")]),s._v("地址，例如"),n("code",[s._v("61.135.169.125")]),s._v("就是百度的官网地址之一，如果每次访问百度都需要输入"),n("code",[s._v("IP")]),s._v("的话，估计到今天互联网都还没有走出鸿蒙阶段。")]),s._v(" "),n("p",[s._v("在网络发展历史上，最开始确实就是直接使用"),n("code",[s._v("IP")]),s._v("地址来访问远程主机的。早期联网的每台计算机都是采用主机文件（即我们俗称的"),n("code",[s._v("hosts")]),s._v("文件）来进行地址配置和解析的，后来联网机器越来越多，主机文件的更新和同步就成了很大的问题。于是，1983 年保罗·莫卡派乔斯发明了域名解析服务和域名系统，在 1985 年 1 月 1 日，世界上第一个域名"),n("code",[s._v("nordu.net")]),s._v("才被注册成功。")]),s._v(" "),n("p",[s._v("域名比"),n("code",[s._v("IP")]),s._v("地址更容易记忆，本质上只是为数字化的互联网资源提供了易于记忆的别名，就像在北京提起「故宫博物院」就都知道指的是「东城区景山前街 4 号」的那个大院子一样。如果把"),n("code",[s._v("IP")]),s._v("地址看成电话号码，那域名系统就是通讯录。我们在通讯录里保存了朋友和家人的信息，每次通过名字找到某人打电话的时候，通讯录就会查出与之关联的电话号码，然后拨号过去。我们可能记不下多少完整的电话号码，但是联系人的名字却是一定记得的。")]),s._v(" "),n("p",[s._v("既然「域名」只是一个别名，单凭这一个名字我们并不能访问到正确的地址，只有能将域名解析成实际的网络地址，网络访问才能成功。这种解析工作由专门的「域名系统」（"),n("code",[s._v("Domain Name System")]),s._v("，简称 "),n("code",[s._v("DNS")]),s._v("）完成，"),n("code",[s._v("DNS")]),s._v(" 也是互联网的核心基础服务之一。")]),s._v(" "),n("h2",{attrs:{id:"域名解析是怎么完成的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名解析是怎么完成的"}},[s._v("#")]),s._v(" 域名解析是怎么完成的？")]),s._v(" "),n("p",[n("code",[s._v("DNS")]),s._v("解析的过程是什么样子的呢？在开始这个问题之前，我们先看一看域名的层次结构。")]),s._v(" "),n("h2",{attrs:{id:"域名的层级结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名的层级结构"}},[s._v("#")]),s._v(" 域名的层级结构")]),s._v(" "),n("p",[s._v("在讨论域名的时候，我们经常听到有人说「顶级域名」、「一级域名」、「二级域名」等概念，域名级别究竟是怎么划分的呢？")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("根域名。还是以百度为例，通过一些域名解析工具，我们可以看到百度官网域名显示为"),n("code",[s._v("www.baidu.com.")]),s._v("，细心的人会注意到，这里最后有一个"),n("code",[s._v(".")]),s._v("，这不是"),n("code",[s._v("bug")]),s._v("，而是所有域名的尾部都有一个根域名。"),n("code",[s._v("www.baidu.com")]),s._v(" 真正的域名是 "),n("code",[s._v("www.baidu.com.root")]),s._v("，简写为"),n("code",[s._v("www.baidu.com.")]),s._v("，又因为根域名"),n("code",[s._v(".root")]),s._v("对于所有域名都是一样的，所以平时是省略的，最终就变成了我们常见的样子。")])]),s._v(" "),n("li",[n("p",[s._v("根域名的下一级叫做顶级域名（"),n("code",[s._v("top-level domain")]),s._v("，缩写为 "),n("code",[s._v("TLD")]),s._v("），也叫做一级域名，常见的如 "),n("code",[s._v(".com / .net / .org / .cn")]),s._v(" 等等，他们就是顶级域名。")])]),s._v(" "),n("li",[n("p",[s._v("再下一级叫做二级域名（"),n("code",[s._v("second-level domain")]),s._v("，缩写为 "),n("code",[s._v("SLD")]),s._v("），比如 "),n("code",[s._v("baidu.com")]),s._v("。这是我们能够购买和注册的最高级域名。")])]),s._v(" "),n("li",[n("p",[s._v("次级域名之下，就是主机名（"),n("code",[s._v("host")]),s._v("），也可以称为三级域名，比如 "),n("code",[s._v("www.baidu.com")]),s._v("，由此往下，基本上"),n("code",[s._v("N")]),s._v("级域名就是在"),n("code",[s._v("N-1")]),s._v("级域名前追加一级。")])])]),s._v(" "),n("p",[s._v("常见的域名层级结构如下：")]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("主机名.次级域名.顶级域名.根域名\nwww.baidu.com.root\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("一般来说我们购买一个域名就是购买一个二级域名（SLD）的管理权（如 leancloud.cn），有了这个管理权我们就可以随意设置三级、四级域名了。")]),s._v(" "),n("h2",{attrs:{id:"域名解析的过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名解析的过程"}},[s._v("#")]),s._v(" 域名解析的过程")]),s._v(" "),n("p",[s._v("与域名的分级结构对应，"),n("code",[s._v("DNS")]),s._v(" 系统也是一个树状结构，不同级别的域名由不同的域名服务器来解析，整个过程是一个「层级式」的。")]),s._v(" "),n("p",[s._v("层级式域名解析体系的第一层就是根域名服务器，全世界 "),n("code",[s._v("IPv4")]),s._v(" 根域名服务器只有 13 台（名字分别为 "),n("code",[s._v("A")]),s._v(" 至 "),n("code",[s._v("M")]),s._v("），1 个为主根服务器在美国，其余 12 个均为辅根服务器，它们负责管理世界各国的域名信息。在根服务器下面是顶级域名服务器，即相关国家域名管理机构的数据库，如中国互联网络信息中心（"),n("code",[s._v("CNNIC")]),s._v("）。然后是再下一级的权威域名服务器和 "),n("code",[s._v("ISP")]),s._v(" 的缓存服务器。")]),s._v(" "),n("p",[s._v("一个域名必须首先经过根数据库的解析后，才能转到顶级域名服务器进行解析，这一点与生活中问路的情形有几分相似。")]),s._v(" "),n("p",[s._v("假设北京市设立了一个专门的「道路咨询局」，里面设置了局长、部长、处长、科员好几个级别的公务员，不同的部门、科室、人员负责解答不同区域的道路问题。这里的人都有一个共同特点，信奉「好记性不如烂笔头」的哲理，喜欢将自己了解到的信息记录到笔记本上。但是有一点遗憾的是，他们写字用的墨水只有一种，叫「魔术墨水」，初写字迹浓厚，之后会慢慢变淡，1 小时之后则会完全消失。道路咨询局门口还有一个门卫大爷，所有的人要问路都需要通过他来传达和回复，市民并不能进入办公楼。")]),s._v(" "),n("p",[s._v("如果市民 A 先生来找门卫大爷询问「北海公园」的地址，门卫大爷会先看一下自己的笔记本，找找看之前有没有人问过北海公园，如果没有，他就会拨打内线去找局长求助。局长说北海是西城区，你去问负责西城区道路信息的赵部长吧。门卫大爷又去问赵部长，赵部长查了一下，说这个地址你去问负责核心区的钱处长吧。门卫大爷又给钱处长打过去电话，钱处长说这个地址我也不掌握啊，你去问一下负责景山片区的科员小孙吧。门卫大爷从小孙那里终于知道了北海公园地址，他赶紧记到自己的小本本上，然后把结果告诉了市民 A 先生。接下来一小时内，如果还有市民 B 先生再来问北海公园的话，门卫大爷就直接用笔记本上记载的结果回复了。当然，如果市民 C 女士过来问别的地址的话，门卫大爷就要把处理 A 先生问询的流程再走一遍了。")]),s._v(" "),n("h2",{attrs:{id:"分级查询的实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分级查询的实例"}},[s._v("#")]),s._v(" 分级查询的实例")]),s._v(" "),n("p",[s._v("现在我们来看一个实际的例子。如果我们在浏览器中输入"),n("code",[s._v("https://news.qq.com")]),s._v("，那浏览器会从接收到的 "),n("code",[s._v("UR")]),s._v("L 中抽取出域名字段（"),n("code",[s._v("news.qq.com")]),s._v("），然后将它传给 "),n("code",[s._v("DNS")]),s._v(" 客户端（操作系统提供）来解析。")]),s._v(" "),n("p",[s._v("首先我们说明一下本机 DNS 配置（就是 "),n("code",[s._v("/etc/resolv.conf")]),s._v(" 文件，里面指定了本地 "),n("code",[s._v("DNS")]),s._v(" 服务器的地址，"),n("code",[s._v("Windows")]),s._v(" 系统可能会有所不同）：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/resolv.conf \nnameserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.106")]),s._v(".0.20\nnameserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.106")]),s._v(".196.115\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("然后我们用"),n("code",[s._v("dig")]),s._v("这个工具查看一下 "),n("code",[s._v("news.qq.com")]),s._v(" 的解析结果（其中中文部分是解释说明）：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" news.qq.com\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" DiG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.10")]),s._v(".6 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" news.qq.com\n这是 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" 程序的版本号与要查询的域名\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" global options: +cmd\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Got answer:\n以下是要获取的内容。\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("HEADER"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),s._v(" opcode: QUERY, status: NOERROR, id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("47559")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" flags: qr rd ra"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" QUERY: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", ANSWER: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", AUTHORITY: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", ADDITIONAL: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n这个是返回应答的头部信息：\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". opcode：操作码，QUERY 代表查询操作；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". status: 状态，NOERROR 代表没有错误"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". id：编号，在 DNS 协议中通过编号匹配返回和查询；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". flags: 标志，含义如下:\n   - qr：query，查询标志，代表是查询操作\n   - rd：recursion desired，代表希望进行递归查询操作"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   - ra：recursive available，代表查询的服务器支持递归查询操作"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(". QUERY 查询数，与下面 QUESTION SECTION 的记录数一一对应；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(". ANSWER 结果数，与下面的 ANSWER SECTION 的记录数一一对应；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(". AUTHORITY 权威回复数，如果查询结果由管理域名的域名服务器而不是缓存服务器提供的，则称为权威回复。\n             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 表示所有结果都不是权威回复；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(". ADDITIONAL 额外记录数；\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" QUESTION SECTION:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("news.qq.com.\t\t\tIN\tA\n查询部分,从左到右部分意义如下:\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、要查询的域名；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、要查询信息的类别，IN 代表类别为 IP 协议，即 Internet。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、查询的记录类型，A 记录"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("代表要查询 IPv4 地址。\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ANSWER SECTION:\nnews.qq.com.\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("136")]),s._v("\tIN\tCNAME\thttps.qq.com.\nhttps.qq.com.\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("476")]),s._v("\tIN\tA\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("125.39")]),s._v(".52.26\n回应部分，从左到右各部分意义：\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、对应的域名\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、TTL，time to live，缓存时间，单位秒，代表缓存域名服务器可以在缓存中保存的期限。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、查询信息的类别\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、查询的记录类型，CNAME 表示别名记录，A 记录"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("代表 IPv4 地址。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、域名对应的 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" 地址。\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Query time: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" msec\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" SERVER: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.106")]),s._v(".0.20"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(202.106.0.20)")]),s._v("\n查询使用的服务器地址和端口,其实就是本地 DNS 域名服务器\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" WHEN: Thu Jul "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":59:37 CST "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" MSG SIZE  rcvd: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v("\n查询的时间与回应的大小，收到 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v(" 字节的应答数据。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("p",[s._v("从这个应答可以看到，我们得到的结果不是权威回复，只是本地 "),n("code",[s._v("DNS")]),s._v(" 服务器从缓存中给了应答。")]),s._v(" "),n("p",[s._v("接下来我们在 "),n("code",[s._v("dig")]),s._v(" 命令中增加一个参数 "),n("code",[s._v("+trace")]),s._v("，看看完整的分级查询过程：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" +trace news.qq.com\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" DiG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.10")]),s._v(".6 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" +trace news.qq.com\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" global options: +cmd\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tg.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tk.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tb.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\th.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\ti.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tf.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\td.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\te.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tj.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tl.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tc.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\tm.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("432944")]),s._v("\tIN\tNS\ta.root-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Received "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("228")]),s._v(" bytes from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.106")]),s._v(".0.20"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(202.106.0.20) in 45 ms")]),s._v("\n这些就是神秘的根域名服务器，由本地 DNS 服务器返回了所有根域名服务器地址，并向这些服务器发出查询请求。\n\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tg.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\ta.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tb.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tm.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\td.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tc.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tj.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\th.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tf.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tl.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\te.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tk.gtld-servers.net.\ncom.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\ti.gtld-servers.net.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Received "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1171")]),s._v(" bytes from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.36")]),s._v(".148.17"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(i.root-servers.net) in 57 ms")]),s._v("\n这里显示的是 .com 域名的 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" 条 NS 记录，由 i.root-servers.net 这台服务器最先返回。\n本地 DNS 服务器向这些顶级域名服务器发出查询请求，\n询问 qq.com 的 NS 记录。\n\nqq.com.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tns1.qq.com.\nqq.com.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tns2.qq.com.\nqq.com.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tns3.qq.com.\nqq.com.\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),s._v("\tIN\tNS\tns4.qq.com.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Received "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("805")]),s._v(" bytes from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.48")]),s._v(".79.30"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(j.gtld-servers.net) in 331 ms")]),s._v("\n这里显示的是 qq.com 的 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 条 NS 记录，由 j.gtld-servers.net 这台服务器最先返回。\n然后本地 DNS 服务器向这四台服务器查询下一级域名 news.qq.com 的 NS 记录。\n\nnews.qq.com.\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\tIN\tNS\tns-cnc1.qq.com.\nnews.qq.com.\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\tIN\tNS\tns-cnc2.qq.com.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Received "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("180")]),s._v(" bytes from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("58.144")]),s._v(".154.100"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(ns4.qq.com) in 37 ms")]),s._v("\n这里显示的是 news.qq.com 的 NS 记录，由 ns4.qq.com 这台服务器最先返回。\n然后本地 DNS 服务器向这两台机器查询 news.qq.com 的主机名。\n\nnews.qq.com.\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\tIN\tCNAME\thttps.qq.com.\nhttps.qq.com.\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\tIN\tA\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("125.39")]),s._v(".52.26\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Received "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("76")]),s._v(" bytes from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.167")]),s._v(".83.104"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(ns-cnc2.qq.com) in 29 ms")]),s._v("\n这是上面的 ns-cnc2.qq.com 返回的最终查询结果：\nnews.qq.com 是 https.qq.com 的别名，而 https.qq.com 的 A 记录地址是 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("125.39")]),s._v(".52.26\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])]),n("p",[s._v("实际的流程里面，本地 "),n("code",[s._v("DNS")]),s._v(" 服务器相当于门卫大爷，根域名服务器相当于局长同志，其余以此类推。客户端与本地 "),n("code",[s._v("DNS")]),s._v(" 服务器之间的查询叫递归查询，本地 "),n("code",[s._v("DNS")]),s._v(" 服务器与其他域名服务器之间的查询就叫迭代查询。")]),s._v(" "),n("h2",{attrs:{id:"域名记录的类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名记录的类型"}},[s._v("#")]),s._v(" 域名记录的类型")]),s._v(" "),n("p",[s._v("域名服务器之所以能知道域名与 "),n("code",[s._v("IP")]),s._v(" 地址的映射信息，是因为我们在域名服务商那里提交了域名记录。购买了一个域名之后，我们需要在域名服务商那里设置域名解析的记录，域名服务商把这些记录推送到权威域名服务器，这样我们的域名才能正式生效。")]),s._v(" "),n("p",[s._v("在设置域名记录的时候，会遇到「A 记录」、「CNAME」 等不同类型，这正是前面做域名解析的时候我们碰到的结果。这些类型是什么意思，它们之间有什么区别呢？接下来我们看看常见的记录类型。")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("A")]),s._v("记录。A ("),n("code",[s._v("Address")]),s._v(") 记录用来直接指定主机名（或域名）对应的 "),n("code",[s._v("IP")]),s._v(" 地址。主机名就是域名前缀，常见有如下几种：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("www")]),s._v("：解析后的域名为 "),n("code",[s._v("www.yourdomain.com")]),s._v("，一般用于网站地址。")]),s._v(" "),n("li",[n("code",[s._v("@")]),s._v("：直接解析主域名。")]),s._v(" "),n("li",[n("code",[s._v("*")]),s._v("：泛解析，指将 "),n("code",[s._v("*.yourdomain.com")]),s._v(" 解析到同一 "),n("code",[s._v("IP")]),s._v("。")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("CNAME")]),s._v(" 记录。"),n("code",[s._v("CNAME")]),s._v(" 的全称是 "),n("code",[s._v("Canonical Name")]),s._v("，通常称别名记录。如果需要将域名指向另一个域名，再由另一个域名提供 "),n("code",[s._v("IP")]),s._v(" 地址，就需要添加 "),n("code",[s._v("CNAME")]),s._v(" 记录。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("MX")]),s._v(" 记录。邮件交换记录，用于将以该域名为结尾的电子邮件指向对应的邮件服务器以进行处理。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("NS")]),s._v(" 记录。域名服务器记录，如果需要把子域名交给其他 "),n("code",[s._v("DNS")]),s._v(" 服务器解析，就需要添加 "),n("code",[s._v("NS")]),s._v(" 记录。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("AAAA")]),s._v(" 记录。用来指定主机名（或域名）对应的 "),n("code",[s._v("IPv6")]),s._v(" 地址，不常用。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("TXT")]),s._v(" 记录。可以填写任何东西，长度限制 "),n("code",[s._v("255")]),s._v("。绝大多数的 "),n("code",[s._v("TXT")]),s._v(" 记录是用来做 "),n("code",[s._v("SPF")]),s._v(" 记录（反垃圾邮件），"),n("code",[s._v("MX")]),s._v(" 记录的作用是给寄信者指明某个域名的邮件服务器有哪些。"),n("code",[s._v("SPF")]),s._v(" 的作用跟 "),n("code",[s._v("MX")]),s._v(" 相反，它向收信者表明，哪些邮件服务器是经过某个域名认可会发送邮件的。")])]),s._v(" "),n("li",[n("p",[s._v("显性 "),n("code",[s._v("URL")]),s._v("。从一个地址 301 重定向（也叫「永久性转移」）到另一个地址的时候，就需要添加显性 "),n("code",[s._v("URL")]),s._v(" 记录。")])]),s._v(" "),n("li",[n("p",[s._v("隐性 "),n("code",[s._v("URL")]),s._v("。从一个地址 302 跳转（也叫「临时跳转」）到另一个地址，需要添加隐性 "),n("code",[s._v("URL")]),s._v(" 记录。它类似于显性 "),n("code",[s._v("URL")]),s._v("，区别在于隐性 URL 不会改变地址栏中的域名。")])])]),s._v(" "),n("p",[s._v("在填写各种记录的时候，我们还会碰到一个特殊的设置项——"),n("code",[s._v("TTL")]),s._v("，生存时间（"),n("code",[s._v("Time To Live")]),s._v("）。")]),s._v(" "),n("p",[n("code",[s._v("TTL")]),s._v("表示解析记录在 "),n("code",[s._v("DNS")]),s._v(" 服务器中的缓存时间，时间长度单位是秒，一般为3600秒。比如：在访问"),n("code",[s._v("news.qq.com")]),s._v("时，如果在 "),n("code",[s._v("DNS")]),s._v(" 服务器的缓存中没有该记录，就会向某个 "),n("code",[s._v("NS")]),s._v(" 服务器发出请求，获得该记录后，该记录会在 "),n("code",[s._v("DNS")]),s._v(" 服务器上保存"),n("code",[s._v("TTL")]),s._v("的时间长度，在"),n("code",[s._v("TTL")]),s._v("有效期内访问"),n("code",[s._v("news.qq.com")]),s._v("，"),n("code",[s._v("DNS")]),s._v(" 服务器会直接缓存中返回刚才的记录。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://leancloudblog.com/Domain-Name-Story-confirm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("博文原链接"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);