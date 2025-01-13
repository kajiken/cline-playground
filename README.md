# Cline Playground

Todo アプリケーションのプロトタイプ開発プロジェクト

## プロジェクト概要

- Todo の作成、表示、更新、削除機能を備えた Web アプリケーション
- React と TypeScript を使用したフロントエンド
- Prisma を使用したデータベース管理

## Memory Bank

プロジェクトの一貫性と継続性を保つため、以下のドキュメントを `cline_docs/` ディレクトリで管理しています：

### 主要ドキュメント

1. **projectRoadmap.md**

   - プロジェクトの目標と進捗状況
   - 完了済みタスクと今後の計画
   - 将来の拡張性についての検討

2. **currentTask.md**

   - 現在進行中のタスクの詳細
   - 実装ステップと進捗状況
   - 次のアクションアイテム

3. **techStack.md**

   - 使用技術とフレームワークの一覧
   - 技術選択の理由と利点
   - アーキテクチャの決定事項

4. **codebaseSummary.md**
   - プロジェクト構造の概要
   - コンポーネント間の関係性
   - データフローの説明
   - 最近の変更点

## 開発環境のセットアップ

1. リポジトリのクローン

   ```bash
   git clone https://github.com/kajiken/cline-playground.git
   cd cline-playground
   ```

2. 依存関係のインストール

   ```bash
   npm install
   ```

3. 開発サーバーの起動
   ```bash
   npm run dev
   ```

## 技術スタック

- フロントエンド: React, TypeScript, Tailwind CSS
- バックエンド: Node.js, Prisma
- データベース: SQLite (開発環境)
- 開発ツール: Vite, ESLint, Docker
