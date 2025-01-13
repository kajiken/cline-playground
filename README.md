# Cline Playground

モダンなウェブテクノロジーを活用した Todo アプリケーション。

## プロジェクトの概要

このプロジェクトは、最新のウェブ技術を使用して効率的なタスク管理を実現する Todo アプリケーションです。

### 主な機能

- タスクの作成、更新、削除、完了の管理
- データの永続化（Prisma を使用）
- 直感的なユーザーインターフェース

## 技術スタック

### フロントエンド

- React
- TypeScript
- TailwindCSS
- Vite (開発サーバー & ビルドツール)

### バックエンド

- Node.js
- Prisma (ORM)
- SQLite (開発環境データベース)

### テスト

- Vitest (ユニットテスト)
- Playwright (E2E テスト)

### インフラストラクチャ

- Docker
- Docker Compose

## 開発環境のセットアップ

1. 必要な依存関係のインストール:

```bash
npm install
```

2. データベースのセットアップ:

```bash
npx prisma migrate dev
```

3. 開発サーバーの起動:

```bash
npm run dev
```

4. テストの実行:

```bash
# ユニットテスト
npm run test

# E2Eテスト
npm run test:e2e
```

## プロジェクト構造

```
/app
  /components   # Reactコンポーネント
  /lib         # ユーティリティ関数とDB操作
  /models      # データモデルの型定義
  /routes      # APIルートとページコンポーネント
  /welcome     # ウェルカムページ関連
/prisma        # データベース関連
/tests         # テストファイル
```

## API エンドポイント

- GET /api/todos - タスク一覧取得
- POST /api/todos - タスク作成
- PUT /api/todos/:id - タスク更新
- DELETE /api/todos/:id - タスク削除

## 開発状況

- 基本的な Todo 機能: 100%
- テスト整備: 70%
- インフラ整備: 60%
- UI/UX 改善: 30%

## 次のマイルストーン

1. テストカバレッジの向上
2. UI/UX の改善
3. 追加機能の実装
4. インフラストラクチャの強化
