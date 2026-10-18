# Hello World Node.js アプリ：GitHub から Node の Web アプリをデプロイ

[English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [Español](README.es.md)

Hello World を表示するだけの Node.js の Web アプリです。MitsuruTech の
[GitHub から Web アプリをデプロイ](https://mitsurutech.co.uk/ja/apps)する機能で、GitHub のアドレスから無料でデプロイできます。アカウントもインストールも不要です。
小さいので、`learntools.dev` へのデプロイを最初に試すのにちょうどよく、手順は
マニュアルの [Python、Node、Go、Java のアプリを GitHub からデプロイするガイド](https://mitsurutech.co.uk/ja/help/deploy-app)にあります。

    Language        Node
    Build           npm ci
    Start           npm start

これらはプラットフォームの既定値で、ここでは何も変更する必要はありません。

自分のプロジェクトにも取り入れたい点が2つあります。

- **`process.env.PORT` を読み取る。** ポートはプラットフォームが決めて知らせてくれます。サーバーが
  好きなポートで待ち受けても、何も届きません。
- **`localhost` ではなく `0.0.0.0` で待ち受ける。** プロキシはコンテナの外からアプリに接続します。

**`package-lock.json` はコミットされており、コミットしておく必要があります。** 依存関係がなくても同じです。`npm ci` は
`package-lock.json` がないと実行を拒否します。*"can only install with an existing package-lock.json"*。そのため、
一度も `npm install` を実行していないプロジェクトは、自分が書いた部分ではなくロックファイルについてのメッセージでビルドに失敗します。
`npm install` で生成して、コミットしてください。

## 自分で実行する

    npm start

## ライセンス

この作品は [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) でライセンスされています。Mitsuru Technologies Ltd のクレジットを表示し、商用に使わず、これをもとに作ったものを同じライセンスで共有するなら、学習と授業のために共有・改変できます。全文は `LICENSE` ファイルにあります。

## このリポジトリについて

[Mitsuru Technologies](https://mitsurutech.co.uk/ja) が
[MitsuruTech ラーニングプラットフォーム](https://mitsurutech.co.uk/ja/learning)のために作りました。Python、Java、Go、Node、SQL、
Linux をブラウザーで学べる、学校向けのプラットフォームで、コンテナのラボ、GitHub からデプロイする Web アプリ、
自動で採点されるクイズがあります。アカウントなしでコードを試せる
[プレイグラウンド](https://mitsurutech.co.uk/ja/playground)もあります。

クラスで教えていますか？ [料金](https://mitsurutech.co.uk/ja/pricing)を確認するか、[学校のアカウントを作成](https://mitsurutech.co.uk/ja/signup)してください。
