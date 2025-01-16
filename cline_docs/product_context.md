# Product Context

## Project Purpose

このプロジェクトは、モダンなウェブテクノロジーを活用した Todo アプリケーションを構築することを目的としています。

## Problems Solved

- タスク管理の効率化
- タスクの作成、更新、削除、完了の管理
- データの永続化（Prisma を使用）

## System Operation

システムは以下のコンポーネントで構成されています：

### Frontend

- React + TypeScript ベースの SPA
- コンポーネント構成：
  - TodoForm: タスク作成フォーム
  - TodoList: タスク一覧表示
  - TodoItem: 個別タスク表示・操作

### Backend

- API エンドポイント（/api/todos/）
- Prisma を使用したデータベース操作
- RESTful API 設計

### Infrastructure

- Docker コンテナ化されたアプリケーション環境
- 開発環境の一貫性を保証
