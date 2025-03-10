### 介绍
java毕业设计，流浪动物救助网站
### 3000多套系统，需要联系
抠：3565014707 微：a13424421017

#### 软件架构
##### 整体架构模式
这是一个 宠物领养与电商综合平台，采用 前后端分离架构，包含以下模块：

管理后台（src/main/resources/admin）：基于 Vue.js + ElementUI 的 SPA 应用，供管理员审核宠物信息、管理商品订单。

用户端（src/main/resources/front）：基于 Layui + jQuery 的传统前端，面向用户提供宠物领养、商品购买、社区互动功能。

后端服务（src/main/java/com）：基于 Spring Boot + MyBatis 的 Java 服务，提供 RESTful API 和核心业务逻辑。

##### 分层架构设计
后端分层：

Controller层：controller 包（如 AddressController）处理 HTTP 请求，返回 JSON 数据。

Service层：service 包（如 AddressService）实现业务逻辑（如宠物领养审核、订单结算）。

DAO层：dao 包（如 AddressDao）通过 MyBatis XML 文件（AddressDao.xml）操作数据库。

实体与数据模型：

entity 包定义数据库实体（如 AddressEntity 地址实体）；

vo（值对象）和 view（视图模型）用于接口数据传输和复杂查询结果封装。

前端分层：

管理后台（Vue.js）：

视图层：views/modules 定义页面（如 chongwushenhe 宠物审核页）。

组件层：components 封装可复用组件（如 BreadCrumbs 面包屑导航）。

状态管理：通过 Vuex（store.js）管理全局状态（如管理员权限）。

用户端（Layui）：

传统 MVC：通过 HTML + jQuery 实现动态页面（如 shangpinOrder/add.html 订单提交页）。

##### 关键技术特性
权限控制：

后端通过 AuthorizationInterceptor 拦截器和 @APPLoginUser 注解实现接口权限校验；

前端管理后台通过路由（router-static.js）限制页面访问权限（如仅管理员可审核宠物）。

异步处理：

MyThreadMethod 可能用于异步任务（如批量导入宠物信息、定时发送领养状态通知）。

第三方服务集成：

BaiduUtil 可能用于地图服务（宠物领养地址定位）或实名认证；

富文本编辑器（tinymce）用于发布带图文排版的宠物详情或商品介绍。

#### 核心功能模块解析
##### 宠物领养模块
宠物信息管理：

chongwu（宠物信息）：维护宠物信息（品种、年龄、健康状态），支持图片上传（如 static/upload/chongwu1.jpg）。

chongwushenhe（宠物审核）：管理员审核用户提交的领养申请，状态流转（待审核/已通过/已驳回）。

用户互动：

chongwuLiuyan（宠物留言）：用户与救助机构沟通，咨询领养细节。

chongwuCollection（宠物收藏）：用户收藏感兴趣的待领养宠物。

##### 电商模块
商品管理：

shangpin（商品信息）：管理宠物用品（如猫粮、玩具），支持库存管理和上下架控制。

shangpinOrder（商品订单）：处理用户购买订单，集成支付功能（dictionaryShangpinOrderPayment 支付方式配置）。

评价与售后：

shangpinCommentback（商品评价）：用户对已购商品进行评分和文字反馈。

##### 社区与用户模块
论坛互动：

forum（社区论坛）：用户分享养宠经验、发布寻宠启事，支持点赞和评论。

用户服务：

yonghu（用户管理）：维护用户资料（如养宠偏好、联系方式）。
xunchongxinxi（寻宠信息）：用户发布丢失宠物信息，触发社区互助通知。
4. 数据字典与系统管理
基础数据维护：
dictionary 系列模块（如 dictionarySex 性别字典、dictionaryJieshu 宠物绝育状态）管理分类数据。
系统配置：
config（参数配置）：设置平台规则（如领养申请期限、商品退货政策）。
