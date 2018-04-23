## scli-mobx-template
基础的mobx模板，集成`mobx` + `mobx-react` + `react-router4` + `axios` + `antd`和相应的webpack配置

### Quick Start
为了更快速地安装，请只使用私有库安装@fs开头的lib
```
npm install @fs/async-component --registry=http://npm.fishsaying.com --no-shrinkwrap
yarn install
```
* 开始开发: `yarn start`
* 编译到测试环境: `yarn build:test`
* 编译到线上环境: `yarn build:production`

### 环境变量
开发环境，测试环境，线上环境的变量都配置在不同的文件中
除了`PUBLIC_URL`, `NODE_ENV`等内置的变量，自定义变量都需要以`REACT_APP_`开头
* 开发环境`.env.development`
* 测试环境`.env.test` 
* 线上环境`.env.production`

### pre-commit
在commit之前会做一次eslint检测，如果检测不通过，commit会失败，因此请注意代码规范。  
请自行安装自己IDE的eslint插件和prettier插件

### 修改antd主题色
修改less-loader option中，`@primary-color`的色值