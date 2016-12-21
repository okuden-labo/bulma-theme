# bulma theme

## 検討事項

- h1の扱い　ロゴにするかページのタイトルにするか？！
- トップへ戻るの機能に不具合があるので、修正。⇒リバーサイドハイツを参考に
- sectionやtitle間の余白については調整の必要あり。もしくは一覧にまとめること。
- PCで中央、スマホで100%表示のボタン
- オーバーレイmenu(※ふなきクリニック)を参考に
- ie11に対応してない(モーダルが真ん中に表示されない)
    - ⇒解決：`modal.sass > .modal-content > margin`設定2箇所を無効にする(天孫神社参考)
- ie11に対応してない(heroの背景色が途中で途切れる)
- フォームの要素 ブラウザによってsizeの大きさが違う [New Responsive Theme フォーム](http://www.macnet.jp/test/develop/form/)を参考に
- `.content`の中に`div`などのコードを入れ子にすると、モバイルでの表示が崩れる

---

## ヘッダーメニューについての考察

1. 右側メニュー + トグルメニュー (bulmaで利用)
1. 右側メニュー + オーバーレイメニュー
1. 下側メニュー + トグルメニュー(menu-sample.html。navの中に入らない…。)
1. 下側メニュー + オーバーレイメニュー(ふなきクリニックで利用したものはメニューが分離しているので項目やレイアウトが自由。※大栄鉄工所でも使っている)
1. 階層が深い場合は、mean menu or 前のresponsiv themeを参考に作成すること



---

## bulma themeのルール

- 横幅を指定する際(block-entryなどを使う場合)は、containerを使わないこと。
- 画面いっぱいに伸ばす場合は、hero-wide.hbsを利用する
- 背景に画像を使う場合はhero-bgImage.hbsを利用する
- コンテンツ間のスペース
    * 文章の内容により`section`で区切る
    * `hr`で区切る
    * `sectionBlock`を使う(max-width:860px, padding-bottom:30px)
- その他




---

## CSSについて

### bulma saaaの設定

#### 1.Utilities

各要素のデフォルトのスタイルを定義

- reset
- functions : bulmaのオリジナル関数(powerNumber,colorLuminance 輝度,closestEvenNumber,findColorInvert 色の反転)
- mixins
- animations
- controls : フォームの要素。
- variables


#### 2.Base 

エレメントの要素。再利用できるパターンとして、小さな単位のモジュールを定義

- generic : 基本的なスタイルを定義
- classes
- helpers : helpers & Responsive helpers

#### 3.Elements

プロジェクトの各所で再利用でき、抽象的である要素。単純なボタン、フォーム、シンプルなリストなどの項目。

- box：影、ボーダー、角丸、余白を付けたボックス
- buttons : is-groupedでグループ化する。has-addonsでwebアイコンをつくる。
- content : 文章要素に使うh1,p,tableなどの様式のセット
- form :`control`を付けることで`conteiner`と同じように余白を開ける。　※.helpで注意書き
- images ※注1
- notifications
- progress ※使う時のみ有効にする
- table
- title
- other

```
/* ※注1 .image imgとすると画像は100%表示される*/
<figure class="image">
  <img src="http://placehold.it/256x256">
</figure>

```

#### 4.Components

汎用性が高く、再利用できるパターン。Elementsよりも具体的な、ページを構成する要素を含む。

- card：※使う時のみ有効にする
- grid ：特定のcolumnの幅を固定する場合は`is-narrow`を使う
- highlight: divの背景＆文字に色を付ける
- level： 多目的に使える水平なレベル。
- media ※使う時のみ有効にする
- menu :タテのナビゲーション。ブログのサイドに利用できる。
- message
- modal
- nav：水平なナビバー。主にメニューで使う。
- pagination　※使う時のみ有効にする
- panel　※使う時のみ有効にする
- tabs


#### 5.Layout

ページを構成する共通のブロック。構成の大枠。

- hero
- section
- footer

##### 6.gridについて

- Responsivness:通常columsはtabletから有効。モバイルでも有効にするには`is-mobile`を付ける。PCだけ有効にするには`is-desktop`を付ける。
- Multiline:新しいラインを始める場合は`is-multiline`を付ける
- Gapless:columsの間のスペースを無くす場合は、`is-gapless`を付ける

###### Breakpoints

- mobile: up to 768px
- tablet: from 769px
- desktop: from 980px
- widescreen: from 1180px

#### 7.その他

- Modifies:`is-`と`has-`の2種類。
- Helpers:レスポンシブ用のhelper class(display,float,overlay,size,text,visibility,other)


### develop.css

クラス名の付け方はBEMを元にしたMindBEMdingをベースにする。

- `block__element--modifier`
- `block` //親要素
- `block__element` //子要素
- `block--modifier` //親要素のバージョン違い

`block__element--modifier`（子要素のバージョン違い）は使わないで下記のようにする。

- `.block--modifier > .block__element` と指定する。
- クラス名にキャメルケースを使用する。　例）　`ghost-btn--primary` → `ghostBtn--primary`

---



