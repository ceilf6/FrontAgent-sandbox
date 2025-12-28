# E-Commerce Frontend - 项目审查文档

## 项目概览

本项目是一个基于 React + TypeScript + Tailwind CSS 的现代化电商前端应用，严格遵循 SDD（Software Design Document）规范，采用了清晰的分层架构和模块化设计。

**项目信息：**
- 项目名称：e-commerce-frontend
- 项目类型：React SPA
- 开发语言：TypeScript
- 构建工具：Vite
- UI 框架：Tailwind CSS
- 状态管理：Zustand
- 路由管理：React Router DOM

## 生成的目录结构说明

```
E-commerce-Cursor/
├── src/
│   ├── assets/              # 静态资源目录
│   │   ├── images/          # 图片资源
│   │   └── icons/           # 图标资源
│   ├── components/          # 组件目录
│   │   ├── ui/              # UI 基础组件（纯展示）
│   │   │   ├── Button.tsx   # 按钮组件
│   │   │   ├── Card.tsx     # 卡片组件
│   │   │   ├── Input.tsx    # 输入框组件
│   │   │   └── Badge.tsx    # 徽章组件
│   │   └── features/        # 功能组件（业务逻辑）
│   │       ├── ProductCard.tsx    # 商品卡片
│   │       ├── CartItem.tsx       # 购物车项
│   │       └── Navbar.tsx         # 导航栏
│   ├── hooks/               # 自定义 Hooks
│   │   ├── useProducts.ts   # 商品数据 Hook
│   │   └── useOrders.ts     # 订单数据 Hook
│   ├── stores/              # Zustand 状态管理
│   │   ├── useCartStore.ts  # 购物车状态
│   │   └── useUserStore.ts  # 用户状态
│   ├── pages/               # 页面组件
│   │   ├── HomePage.tsx            # 首页（商品列表）
│   │   ├── ProductDetailPage.tsx   # 商品详情页
│   │   ├── CartPage.tsx            # 购物车页
│   │   └── OrdersPage.tsx          # 订单列表页
│   ├── api/                 # API 接口层
│   │   ├── client.ts        # API 客户端配置
│   │   ├── products.ts      # 商品接口
│   │   └── orders.ts        # 订单接口
│   ├── utils/               # 工具函数（预留）
│   ├── types/               # TypeScript 类型定义
│   │   └── index.ts         # 核心类型定义
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 应用入口
│   └── index.css            # 全局样式
├── package.json             # 项目依赖配置
├── tsconfig.json            # TypeScript 配置
├── vite.config.ts           # Vite 构建配置
├── tailwind.config.js       # Tailwind CSS 配置
├── postcss.config.js        # PostCSS 配置
├── index.html               # HTML 入口
├── .env.example             # 环境变量示例
└── sdd.yaml                 # 软件设计文档
```

## 核心技术选型与理由

### 1. React 18
- **选型理由**：成熟的前端框架，生态丰富，社区活跃
- **优势**：支持并发特性，性能优异，开发体验好

### 2. TypeScript
- **选型理由**：强类型语言，提高代码可维护性和可靠性
- **优势**：编译期错误检测，智能提示，重构友好

### 3. Tailwind CSS
- **选型理由**：实用优先的 CSS 框架，开发效率高
- **优势**：无需编写 CSS 文件，样式一致性好，包体积小

### 4. Zustand
- **选型理由**：轻量级状态管理库，API 简洁
- **优势**：
  - 无需 Provider 包裹
  - TypeScript 支持友好
  - 性能优异，无不必要的重渲染
  - 学习曲线平缓

### 5. React Router DOM
- **选型理由**：React 官方推荐的路由库
- **优势**：功能完善，API 稳定，社区支持好

### 6. Vite
- **选型理由**：下一代前端构建工具
- **优势**：
  - 开发服务器启动极快
  - HMR（热更新）速度快
  - 生产构建优化好
  - 开箱即用的 TypeScript 支持

### 7. Ky
- **选型理由**：现代化的 HTTP 客户端（替代 axios）
- **优势**：
  - 基于 fetch API
  - 体积小巧
  - TypeScript 友好
  - 支持请求/响应拦截器

### 8. 禁用的技术栈
根据 SDD 规范，以下技术被明确禁止使用：
- jQuery（使用 React 替代）
- Moment.js（使用 date-fns 替代）
- Lodash（使用 es-toolkit 替代）
- Axios（使用 ky 替代）

## 模块划分与边界说明

### 1. UI 组件层（src/components/ui）
**职责**：
- 提供纯展示组件，无业务逻辑
- 接收 props 进行渲染
- 可复用性强

**约束**：
- 禁止使用 fetch、axios、ky 等网络请求
- 禁止导入 stores（状态管理）
- 禁止导入 hooks（自定义 Hooks）
- 禁止使用 useEffect（无副作用）
- 仅允许导入：utils、types、assets

**已实现组件**：
- Button：通用按钮组件（支持多种变体和尺寸）
- Card：卡片容器组件（支持悬浮效果）
- Input：输入框组件（支持标签和错误提示）
- Badge：徽章组件（支持多种颜色变体）

### 2. 功能组件层（src/components/features）
**职责**：
- 组合 UI 组件
- 包含业务逻辑
- 连接状态管理

**约束**：
- 可导入：UI 组件、hooks、stores、utils、types、assets
- 禁止直接导入 API 层（应通过 hooks）

**已实现组件**：
- ProductCard：商品卡片（展示商品信息，支持加入购物车）
- CartItem：购物车项（展示购物车商品，支持数量调整和删除）
- Navbar：导航栏（展示菜单和购物车数量）

### 3. Hooks 层（src/hooks）
**职责**：
- 封装数据获取逻辑
- 调用 API 接口
- 管理加载状态

**约束**：
- 可导入：api、utils、types、stores
- 禁止导入：components、pages

**已实现 Hooks**：
- useProducts：获取商品列表数据
- useProductSearch：商品搜索
- useOrders：获取订单列表数据

### 4. API 层（src/api）
**职责**：
- 封装所有后端接口调用
- 统一请求/响应处理
- 错误处理

**已实现模块**：
- client.ts：API 客户端配置（请求拦截、token 处理）
- products.ts：商品相关接口
- orders.ts：订单相关接口

### 5. Pages 层（src/pages）
**职责**：
- 页面级组件
- 组合功能组件和 UI 组件
- 页面级状态管理

**约束**：
- 可导入：components、hooks、stores、utils、types、assets
- 禁止直接导入 API 层（应通过 hooks）

**已实现页面**：
- HomePage：商品列表页（支持分类筛选）
- ProductDetailPage：商品详情页
- CartPage：购物车页
- OrdersPage：订单列表页

## 状态管理设计说明

### 1. Zustand Store 架构

#### useCartStore（购物车状态）
```typescript
interface ICartStore {
  items: ICartItem[];          // 购物车商品列表
  addItem: (product, quantity) => void;     // 添加商品
  removeItem: (productId) => void;          // 移除商品
  updateQuantity: (productId, quantity) => void;  // 更新数量
  clearCart: () => void;                    // 清空购物车
  getTotalPrice: () => number;              // 获取总价
  getTotalItems: () => number;              // 获取总数量
}
```

**设计要点**：
- 使用不可变数据更新模式
- 提供计算函数（getTotalPrice、getTotalItems）
- 自动处理数量为 0 时的删除逻辑

#### useUserStore（用户状态）
```typescript
interface IUserStore {
  user: IUser | null;          // 用户信息
  isAuthenticated: boolean;    // 登录状态
  setUser: (user) => void;     // 设置用户
  logout: () => void;          // 退出登录
}
```

**设计要点**：
- 同步更新 user 和 isAuthenticated
- 提供清晰的登录/登出接口

### 2. 状态持久化
当前版本未实现持久化，后续可通过 Zustand 中间件实现：
- localStorage 持久化购物车数据
- sessionStorage 持久化用户会话

## 资源（assets）组织与使用说明

### 1. 目录结构
```
src/assets/
├── images/    # 商品图片、Banner 等
└── icons/     # 图标资源（SVG）
```

### 2. 使用规范
根据 SDD 要求，资源使用必须遵循以下规则：

**允许的文件类型**：
- 图片：.png, .jpg, .jpeg, .svg, .webp
- 图标：.svg

**命名约定**：
- 使用 kebab-case（小写字母+连字符）
- 示例：product-banner.png、shopping-cart-icon.svg

**使用规则**：
- ✅ 所有图片资源必须来自 src/assets
- ✅ 组件中引用图片必须通过 import 引入
- ❌ 禁止直接使用外链图片（http(s) URL）
- ❌ 禁止在 UI 组件中进行图片路径字符串拼接

**正确示例**：
```typescript
import productImage from '@/assets/images/product-1.jpg';

<img src={productImage} alt="Product" />
```

**错误示例**：
```typescript
// ❌ 禁止使用外链
<img src="https://example.com/image.jpg" />

// ❌ 禁止路径拼接
<img src={`/assets/images/${productId}.jpg`} />
```

### 3. 当前状态
由于这是初始项目结构，assets 目录暂时为空。在实际开发中，应按照以下步骤添加资源：

1. 将图片文件放入 `src/assets/images/`
2. 将图标文件放入 `src/assets/icons/`
3. 使用 `import` 语句引入资源
4. 确保文件名符合 kebab-case 命名规范

## 可扩展性与后续演进建议

### 1. 功能扩展

#### 短期建议（1-2 周）
- **用户认证系统**
  - 实现登录/注册页面
  - 集成 JWT 认证
  - 添加权限控制

- **搜索功能增强**
  - 实现搜索建议
  - 搜索历史记录
  - 高级筛选功能

- **商品评价系统**
  - 评价列表展示
  - 评价提交表单
  - 评分统计

#### 中期建议（1-2 月）
- **支付集成**
  - 接入支付网关
  - 订单支付流程
  - 支付结果处理

- **地址管理**
  - 地址列表
  - 地址编辑
  - 默认地址设置

- **优惠券系统**
  - 优惠券领取
  - 优惠券使用
  - 价格计算优化

#### 长期建议（3-6 月）
- **个性化推荐**
  - 基于浏览历史的推荐
  - 协同过滤推荐
  - 热门商品推荐

- **多语言支持**
  - i18n 国际化
  - 语言切换
  - RTL 布局支持

- **性能优化**
  - 图片懒加载
  - 路由懒加载
  - 虚拟滚动

### 2. 技术演进

#### 状态管理优化
```typescript
// 添加持久化中间件
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist<ICartStore>(
    (set, get) => ({
      // ...store implementation
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
```

#### API 层增强
```typescript
// 添加请求重试机制
import ky from 'ky';

export const apiClient = ky.create({
  retry: {
    limit: 3,
    methods: ['get'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
});
```

#### 错误边界
```typescript
// 添加全局错误边界组件
class ErrorBoundary extends React.Component {
  // 捕获组件错误，显示友好提示
}
```

### 3. 工程化改进

#### 代码质量
- 添加 ESLint 规则
- 添加 Prettier 格式化
- 配置 Husky + lint-staged（提交前检查）

#### 测试覆盖
- 单元测试（Jest + Testing Library）
- 集成测试
- E2E 测试（Playwright）

#### CI/CD
- GitHub Actions 自动化构建
- 自动化测试
- 自动化部署

## Agent 生成内容的已知限制

### 1. Mock 数据
当前版本的 API 层调用的是真实后端接口，但后端服务尚未实现。建议添加：
- Mock Service Worker（MSW）进行接口模拟
- 或创建本地 Mock 数据文件

### 2. 表单验证
当前页面未实现完整的表单验证，建议集成：
- React Hook Form（表单管理）
- Zod（Schema 验证）

### 3. 错误处理
- 缺少全局错误边界
- API 错误处理较为简单
- 建议添加错误日志上报

### 4. 加载状态
- 当前加载状态展示较为简单
- 建议添加 Skeleton 加载占位符
- 优化加载动画

### 5. 无障碍支持
- 当前版本未充分考虑无障碍访问（A11y）
- 建议添加 ARIA 属性
- 键盘导航支持

### 6. 响应式设计
- 基础响应式布局已实现
- 移动端体验可进一步优化
- 建议添加移动端特定交互

### 7. SEO 优化
- SPA 应用 SEO 较弱
- 建议考虑 SSR（Vite SSR）或 SSG
- 添加 Meta 标签管理

### 8. 性能优化
- 未实现图片懒加载
- 未实现路由懒加载
- 未实现代码分割优化

## 开始使用

### 1. 安装依赖
```bash
npm install
# 或
pnpm install
```

### 2. 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，配置 API 地址
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 构建生产版本
```bash
npm run build
```

### 5. 预览生产构建
```bash
npm run preview
```

## 架构优势总结

1. **清晰的分层架构**：UI、业务、数据层分离，职责明确
2. **严格的模块边界**：通过 SDD 约束，防止循环依赖
3. **类型安全**：TypeScript 提供编译期类型检查
4. **高可维护性**：代码组织清晰，易于理解和修改
5. **可扩展性强**：模块化设计，易于添加新功能
6. **性能优异**：Vite 构建快速，Zustand 状态管理高效

## 注意事项

1. **严格遵守 SDD 规范**：所有代码必须符合 sdd.yaml 中的约束
2. **禁止使用被禁技术栈**：不得使用 jQuery、moment、lodash、axios
3. **模块边界不可违反**：UI 组件不能导入 stores、hooks、api
4. **代码质量要求**：
   - 函数最大行数：50 行
   - 文件最大行数：300 行
   - 函数参数最大数量：4 个
   - 必须添加 JSDoc 注释
5. **禁止的代码模式**：
   - 不使用 `any` 类型
   - 不使用 `@ts-ignore`
   - 不使用 `console.log`（开发调试除外）
   - 不使用 `eval`、`innerHTML`

---

**文档生成时间**：2025-12-28
**项目版本**：1.0.0
**文档版本**：1.0.0
