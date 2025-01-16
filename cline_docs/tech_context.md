# Technical Context

## Technology Stack

### Frontend

- React
- TypeScript
- TailwindCSS
- Vite (開発サーバー & ビルドツール)

### Backend

- Node.js
- Prisma (ORM)
- SQLite (開発環境データベース)

### Testing

- Vitest (ユニットテスト)
- Playwright (E2E テスト)

### Infrastructure

- Docker
- Docker Compose

## Development Environment Setup

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

## Technical Constraints

### データベース

- Prisma を使用したデータモデリング
- マイグレーション管理による安全なスキーマ更新

### API 設計

- RESTful 原則に従ったエンドポイント設計
- TypeScript による型安全性の確保

### フロントエンド

- コンポーネントベースのアーキテクチャ
- TailwindCSS によるスタイリング
- 型安全性を重視した実装

### テスト

- ユニットテストによるコンポーネントの検証
- E2E テストによる統合的な機能検証

### インフラストラクチャ

- Docker による環境の一貫性確保
- 開発環境と本番環境の分離
