# Node.jsでSuperagentでAPIサーバーにアクセスする

Node.jsで幅広く使われているHTTPクライアントのSuperagentを利用したサンプルである。

SuperagentはAxiosのようにPromiseベースなHTTPクライアントなので、非同期処理が可能である。

https://visionmedia.github.io/superagent/ - Superagent

## 実行手順

### モックAPIサーバーの起動

モックAPIサーバーとしてJASON Serverを利用するので、これをまずはインストールしておく必要がある。

グローバルにインストールする場合

```txx
$ npm install -g json-server
```

この上でテストデータとなるJSONファイルを読み込んでモックAPIサーバーを起動させておく。

```txt
$ json-server --watch users.json
```

### Superagentを利用したHTTPクライアント

```txt
$ npm run start

> node-superagent@1.0.0 start
> node ./httpclient.mjs

ユーザー一覧表示
[
  { id: 1, name: 'Hiroshi', age: 25 },
  { id: 2, name: 'Toru', age: 32 },
  { id: 3, name: 'Yoshiko', age: 30 }
]
特定ユーザー抽出
{ id: 2, name: 'Toru', age: 32 }
ユーザー情報アップデート
{ id: 3, name: 'Toru', age: 25 }
ユーザー追加
{ id: 4, name: 'Kaoru', age: 22 }
ユーザー削除
{}
再度ユーザー一覧表示
[
  { id: 2, name: 'Toru', age: 32 },
  { id: 3, name: 'Toru', age: 25 },
  { id: 4, name: 'Kaoru', age: 22 }
]
```

なお、一度実行するとusers.jsonが上書きされるので再度同様の結果を得るためには、users.jsonを元に戻す必要がある。




