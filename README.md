# 箱根駅伝 監督シミュレーション

40大学×48名の選手が登場する駅伝監督シミュレーションゲーム。複数年かけてチームを育成し、箱根駅伝優勝を目指します。

## 🚀 公開する手順 (約10分で完了)

### 方法A: Vercel — 最速・推奨

#### ステップ1: GitHubにリポジトリを作る

1. [github.com](https://github.com) にログイン (アカウントがなければ作成)
2. 右上の「+」→「New repository」をクリック
3. 設定:
   - Repository name: `hakone-ekiden-sim` (好きな名前でOK)
   - Public を選択
   - 「Create repository」をクリック

#### ステップ2: ファイルをアップロード

1. 作成したリポジトリのページで「uploading an existing file」リンクをクリック
2. このZIPを解凍してできた**中身のファイル一式**をドラッグ&ドロップ
   - `index.html`、`package.json`、`vite.config.js`、`src/`フォルダなど
   - **フォルダごと**ではなく、**フォルダの中身**をアップロード
3. 下部の「Commit changes」をクリック

#### ステップ3: Vercelでデプロイ

1. [vercel.com](https://vercel.com) にアクセス
2. 「Sign Up」→「Continue with GitHub」でGitHubアカウントで登録
3. ダッシュボードで「Add New...」→「Project」をクリック
4. 「Import Git Repository」で先ほど作ったリポジトリの右側「Import」をクリック
5. 設定はそのままで「Deploy」をクリック
6. 1〜2分待つと完了！ `https://hakone-ekiden-sim.vercel.app` のようなURLが発行される

このURLを誰かに送れば、その人はブラウザで開くだけで遊べます。スマホからでもアクセス可能。

---

### 方法B: ローカルで動作確認したい場合

```bash
# Node.jsが必要 (https://nodejs.org からインストール)
npm install
npm run dev
# → http://localhost:5173 で開く
```

---

## 📦 ファイル構成

- `src/App.jsx` — ゲーム本体
- `src/main.jsx` — エントリポイント
- `index.html` — HTML雛形
- `package.json` — 依存関係定義
- `vite.config.js` — ビルド設定

## 💾 セーブデータ

ブラウザの`localStorage`に保存されます。同じブラウザで再アクセスすればセーブが残っています。別のブラウザ・デバイスにはセーブは引き継がれません。
