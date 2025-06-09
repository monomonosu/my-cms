# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# 手順

## 1.プロジェクト作成

```
npx create-strapi-app my-cms --quickstart
cd my-cms
```

## 2.config変更

config/database.ts

```
import { parse } from 'pg-connection-string';

const config = parse(process.env.DATABASE_URL || '');

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: Number(config.port),
      user: config.user,
      password: config.password,
      database: config.database,
      ssl: {
        rejectUnauthorized: false, // Render PostgreSQL では必要
      },
    },
  },
});
```

## 3.Push

```
git init
git remote set-url origin https://<USERNAME>:<TOKEN>@github.com/<USERNAME>/<REPOSITORYNAME>.git
git add .
git commit -m "Initial Strapi project"
git push -u origin main
```

## 4.Render-PostgreSQLのDB作成

- Render にログイン

- 「New +」→「PostgreSQL」

- 名前・リージョン（例：フリープラン）を指定して作成

- 作成後、「Connection > Internal Database URL」 をコピー（.env に使う）

## 5.Render-WebService作成

- Render のダッシュボードから「New +」→「Web Service」

- GitHub リポジトリを選択（Strapi を pushしたもの）

- 設定値を以下のように入力：

| 項目                 | 値                              |
| ------------------ | ------------------------------ |
| **Name**           | strapi-cms（任意）                 |
| **Runtime**        | Node                           |
| **Build Command**  | `npm install && npm run build` |
| **Start Command**  | `npm run start`                |
| **Root Directory** | `.`（またはプロジェクトルート）              |
| **Instance Type**  | Free（初回学習にはOK）                 |

## 5.環境変数設定

| KEY                | VALUE                                      |
| ------------------ | ------------------------------------------ |
| `NODE_ENV`         | `production`                               |
| `DATABASE_URL`     | Render の PostgreSQL Internal URL           |
| `APP_KEYS`         | `comma,separated,secure,keys`（4つ程度のランダムキー） |
| `API_TOKEN_SALT`   | ランダムな文字列                                   |
| `ADMIN_JWT_SECRET` | ランダムな文字列                                   |
| `JWT_SECRET`       | ランダムな文字列                                   |

## 6.デプロイ
サイトアクセス


# トラブル対処

- 下記エラーが出た場合

```
Error: Knex: run
$ npm install pg --save
Cannot find module 'pg'
```
↓
```
npm install pg
```

- 開発環境でContent-Type Builderに項目追加する場合
   - config/database.tsをデフォルトのコードに戻す（根本的に解消する必要ありそう）
