作業毎に Commit と Push を行います。

```bash
git add .
git commit -m "コミットメッセージ"
git push origin <branch_name>
```

作業ブランチにPullRequestが存在する場合はPushした後に変更箇所を対象のPullRequestにCommentしてください。

タスク完了前に動作確認が必要な場合は必ず動作確認をしてください。
