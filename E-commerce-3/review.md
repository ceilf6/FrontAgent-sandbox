# 项目概览

本仓库为基于 SDD 的电商前端演示（React + TypeScript + Tailwind + Zustand），实现了基础页面与状态管理骨架，便于快速迭代。

# 生成的目录结构说明

- src/
  - assets/: 占位 SVG 图片（用于示例）
  - components/: 全局组件 `Header`、`Footer` 和 `ui/ProductCard`
  - pages/: `Home`、`ProductList`、`ProductDetails`、`Cart`、`Checkout`
  - stores/: `useCartStore.ts`（zustand 实现购物车功能）
  - types/: 类型定义（`IProduct`）
  - utils/: `mockData.ts`（示例商品数据）

# 核心技术选型与理由

- React + TypeScript：可维护的组件化开发；严格类型检查。
- Vite：轻量且快速的开发构建工具。
- Tailwind：实用型原子类，使样式一致且易维护。
- Zustand：轻量状态管理，符合 SDD 要求并用于购物车。

# 模块划分与边界说明

- `src/components/ui` 为纯 UI 组件，仅依赖 `src/utils`、`src/types`、`src/assets`。
- 页面（`src/pages`）可依赖组件与 store。

# 状态管理设计说明

- `src/stores/useCartStore.ts` 提供 `items`、`add`、`remove`、`update`、`clear`，满足购物车增删改查需求。修改该目录按 SDD 要求需人工审批（已获用户批准）。

# 资源（assets）组织与使用说明

- 示例图片位于 `src/assets`，均为 SVG 占位图，组件通过 `import` 引入，符合 SDD 规则。

# 可扩展性与后续演进建议

- 补充真实图片并替换 `src/assets` 的占位 SVG。
- 集成后端 API（新增 `src/api`），并通过 hooks 封装数据请求。
- 增加单元/集成测试。

# Agent 生成内容的已知限制

- 当前实现使用本地 `mockData` 与 SVG 占位图；未集成真实后端。
- 部分配置（`package.json`、`vite.config.ts` 等）为简化示例，部署前请根据实际环境调整。
