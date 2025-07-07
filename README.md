# Vue3 + TypeScript + Ant Design Vue 脚手架模板

一个基于 Vue 3 + TypeScript + Ant Design Vue 的现代化前端开发脚手架，集成了国际化、状态管理、HTTP 请求、代码规范等最佳实践。

## 🚀 技术栈

### 核心框架
- **Vue 3.5.13** - 渐进式 JavaScript 框架，使用 Composition API
- **TypeScript 5.8** - JavaScript 的超集，提供静态类型检查
- **Vite 6.2.4** - 快速的前端构建工具

### UI 组件库
- **Ant Design Vue 4.2.6** - 企业级 UI 组件库
- **unplugin-vue-components** - 组件自动导入，按需加载

### 状态管理与路由
- **Vue Router 4.5.0** - Vue.js 官方路由管理器
- **Pinia 3.0.1** - Vue 官方推荐的状态管理库

### 国际化
- **Vue I18n 11.1.6** - Vue.js 国际化插件
- 支持多语言：英语(en)、西班牙语(es)、葡萄牙语(pt)
- 自定义文本格式化方法（首字母大写、词首大写）

### HTTP 请求
- **Axios 1.10.0** - Promise 基的 HTTP 客户端
- **Vue Request 2.0.4** - Vue 组合式 API 的数据请求库

### 开发工具与规范
- **ESLint 9.22.0** - 代码质量检查工具
- **Prettier 3.5.3** - 代码格式化工具
- **Husky 9.1.7** - Git hooks 工具
- **lint-staged 16.1.2** - 暂存文件的代码检查
- **Commitlint** - Git 提交信息规范检查

### 自动化工具
- **unplugin-auto-import** - API 自动导入
- **unplugin-vue-components** - 组件自动导入
- **vite-plugin-vue-devtools** - Vue 开发者工具集成

## ✨ 功能特性

### 🎨 开发体验
- ⚡ **极速启动** - Vite 提供毫秒级的热更新
- 🔥 **热重载** - 保存即更新，无需手动刷新
- 📦 **自动导入** - Vue API 和组件自动导入，减少样板代码
- 🎯 **TypeScript 支持** - 完整的类型检查和智能提示

### 🌍 国际化
- 🗺️ **多语言支持** - 内置英语、西班牙语、葡萄牙语
- 🔄 **动态切换** - 运行时语言切换，无需重载
- 💾 **持久化** - 自动保存用户语言偏好
- 🎨 **文本格式化** - 提供 `tc()` 和 `tcf()` 方法用于文本格式化

### 🏗️ 项目结构
- 📁 **模块化设计** - 清晰的目录结构和文件组织
- 🧩 **组件化开发** - 可复用的 Vue 组件
- 🗂️ **视图管理** - 基于路由的页面管理
- 🏪 **状态管理** - Pinia 提供的响应式状态管理

### 🛡️ 代码质量
- ✅ **代码检查** - ESLint 规则确保代码质量
- 🎨 **代码格式化** - Prettier 统一代码风格
- 📝 **提交规范** - Conventional Commits 提交信息规范
- 📏 **文件大小限制** - 单文件最大 300 行限制

### 🔧 CI/CD 支持
- 🔍 **Pre-commit 检查** - 提交前自动运行代码检查和格式化
- 📋 **Lint-staged** - 只对暂存的文件进行检查
- 🔗 **Git Hooks** - Husky 集成的 Git 钩子
- 📊 **类型检查** - 构建时的完整 TypeScript 类型检查

## 🛠️ 使用方式

### 环境要求
- Node.js >= 22.0.0
- npm >= 9.0.0

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 类型检查
```bash
npm run type-check
```

### 代码检查与格式化
```bash
# 运行 ESLint 检查并自动修复
npm run lint

# 运行 Prettier 格式化
npm run format
```

### 预览构建结果
```bash
npm run preview
```

## 💻 推荐的 IDE 和插件

### 主要 IDE
- **[Cursor](https://cursor.sh/)** - AI 驱动的代码编辑器（推荐）
- **[VS Code](https://code.visualstudio.com/)** - 轻量级代码编辑器

### 必备插件

项目已在 `.vscode/extensions.json` 中配置了推荐插件，打开项目时会自动提示安装：

#### 代码质量（项目推荐）
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - 代码质量检查，自动修复常见问题
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** - 代码格式化，统一代码风格
- **[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)** - 拼写检查，减少拼写错误

#### Vue 开发（强烈推荐）
- **[vue Official](https://marketplace.cursorapi.com/items?itemName=Vue.volar)** - Vue 3 官方 TypeScript 支持，提供语法高亮、类型检查、智能提示

#### 可选增强插件
- **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)** - 自动重命名配对标签
- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** - Git 增强功能，查看代码历史
- **[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)** - 路径自动补全
- **[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)** - 括号颜色配对

### 一键安装
打开项目后，VS Code 会自动检测 `.vscode/extensions.json` 并提示安装推荐插件。也可以通过以下方式手动安装：
1. 打开 VS Code 扩展面板（`Ctrl+Shift+X` / `Cmd+Shift+X`）
2. 搜索 `@recommended` 查看项目推荐的插件
3. 点击 "Install Workspace Recommended Extensions" 一键安装

### IDE 配置

项目包含 `.cursor` 目录，提供了以下开发规则：
- **Vue 文件开发规范** - 统一的 Vue 组件开发模式
- **新页面创建指南** - 标准化的页面创建流程
- **国际化翻译规则** - 多语言文件管理规范

## 📂 项目结构

```
vue3-antd-cursor-scaffold/
├── .cursor/                 # Cursor IDE 配置和规则
├── docs/                    # 文档和模板
├── public/                  # 静态资源
├── src/
│   ├── assets/             # 静态资源文件
│   ├── components/         # 可复用组件
│   ├── locales/           # 国际化语言包
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia 状态管理
│   ├── utils/             # 工具函数
│   ├── views/             # 页面视图
│   ├── App.vue            # 根组件
│   ├── i18n.ts           # 国际化配置
│   └── main.ts           # 应用入口
├── .gitignore
├── eslint.config.ts       # ESLint 配置
├── package.json
├── tsconfig.json         # TypeScript 配置
├── vite.config.ts        # Vite 配置
└── README.md
```

## 🎯 开发指南

### 创建新页面
1. 在 `src/views/` 下创建新的 Vue 文件
2. 在 `src/router/index.ts` 中添加路由配置
3. 使用动态导入方式加载组件

### 添加国际化内容
1. 在 `src/locales/en.json` 中添加英文内容
2. 运行翻译规则补全其他语言文件
3. 在组件中使用 `useI18n()` 访问翻译方法

### 状态管理
使用 Pinia 创建 store，参考 `src/stores/counter.ts` 示例

### API 请求
使用 `src/utils/request.ts` 中配置的 axios 实例进行 HTTP 请求

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
