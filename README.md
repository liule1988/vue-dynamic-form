### 目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── api// 项目接口
│       |- config.js 配置baseUrl
│       |- resourse.js 拼接各个接口url
│       └── index.js  封装各个接口请求
│   ├── assets         // 图片、字体资源
│        |-  page1       //页面1 资源
│        |-  page2       //页面2 资源
│         ...
│        └──pageN        //页面n 资源
│
│   ├── common          // 公共的css js 资源
│   ├── components      // 各种组件
│        |- Header        //头部组件
│        |- Table         //表格组件
│        |-  ...
│        └── Other        //
│   ├── views          // 各个页面
        |-  page1.vue    //页面1
        |-  page2.vue    //页面2
        ...
│       └── pageN.vue    //页面n
│   ├── App.vue         // 主页面
│   ├── vuex           // vuex状态管理器
│       └── store.js    //全局状态管理js，如登录信息等
│   ├── router         // 路由配置器
│   |   └── index.js    //路由配置js
│   └── main.js        // Webpack 预编译入口
</pre>


