import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// テスト実行後に自動的にクリーンアップを実行
afterEach(() => {
  cleanup();
});

// エラーメッセージの日本語化
window.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// コンソールエラーの抑制（必要に応じてコメントアウトを解除）
// const originalConsoleError = console.error;
// console.error = (...args) => {
//   if (
//     typeof args[0] === "string" &&
//     args[0].includes("Warning: ReactDOM.render is no longer supported")
//   ) {
//     return;
//   }
//   originalConsoleError.call(console, ...args);
// };
