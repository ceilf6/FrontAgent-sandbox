# E-commerce Frontend（演示）

最小演示项目：React + Vite + TypeScript + Tailwind + zustand。

快速开始

1. 安装依赖：

```bash
cd "E-commerce"
npm install
```

2. 本地开发：

```bash
npm run dev
```

3. 打包预览：

```bash
npm run build
npm run preview
```

说明
- 项目使用 `src/utils/mockData.ts` 提供示例商品数据。
- 状态管理使用 `zustand`（`src/stores/useCartStore.ts`）。
- UI 使用 Tailwind CSS，组件位于 `src/components` 与 `src/components/ui`。

下步建议
- 运行 `npm install` 并启动 `npm run dev` 测试页面。
- 如需真实 API，请实现 `src/api` 并在 `hooks` 中封装请求逻辑（遵循 SDD 的模块边界）。
