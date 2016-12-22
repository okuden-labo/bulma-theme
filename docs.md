## bulma themeの設定

## 基本設定

URL
https://okuden-labo.github.io/bulma-theme

github
https://github.com/okuden-labo/bulma-theme

HTMLダウンロード
https://github.com/okuden-labo/bulma-theme/archive/master.zip


## bulma CSSの設定

### bulma sassの設定

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

#### 6.gridについて

- Responsivness:通常columsはtabletから有効。モバイルでも有効にするには`is-mobile`を付ける。PCだけ有効にするには`is-desktop`を付ける。
- Multiline:新しいラインを始める場合は`is-multiline`を付ける
- Gapless:columsの間のスペースを無くす場合は、`is-gapless`を付ける

__Breakpoints__  

- mobile: up to 768px
- tablet: from 769px
- desktop: from 980px
- widescreen: from 1180px

#### 7.その他

- Modifies:`is-`と`has-`の2種類。
- Helpers:レスポンシブ用のhelper class(display,float,overlay,size,text,visibility,other)



### develop.css(bulma以外に独自に追加したcss)

クラス名の付け方はBEMを元にしたMindBEMdingをベースにする。

- `block__element--modifier`
- `block` //親要素
- `block__element` //子要素
- `block--modifier` //親要素のバージョン違い

`block__element--modifier`（子要素のバージョン違い）は使わないで下記のようにする。

- `.block--modifier > .block__element` と指定する。
- クラス名にキャメルケースを使用する。　例）　`ghost-btn--primary` → `ghostBtn--primary`

