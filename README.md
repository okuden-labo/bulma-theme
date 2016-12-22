# bulma theme

bulma themeはcssのフレームワーク[Bulma](http://bulma.io/)をベースに作ったテーマです。

## 基本設定

URL
https://okuden-labo.github.io/bulma-theme

HTMLダウンロード
https://github.com/okuden-labo/bulma-theme/archive/master.zip

## 今後の予定

今回のベースサイトの他に下記のサイトも追加していく予定です。

- 企業向けサイト(小規模バージョン）
- 企業向けサイト(サイドナビバージョン）


## ヘッダーメニューについての考察

1. 右側メニュー + トグルメニュー (bulmaで利用)
1. 右側メニュー + オーバーレイメニュー
1. 下側メニュー + トグルメニュー
1. 下側メニュー + オーバーレイメニュー
1. 階層が深い場合は、mean menu or 前のresponsiv themeを参考に作成すること


## その他のメモ

- オーバーレイmenu(※ふなきクリニック)を参考に
- 横幅を指定する際(block-entryなどを使う場合)は、containerを使わないこと。
- 画面いっぱいに伸ばす場合は、hero-wide.hbsを利用する
- 背景に画像を使う場合はhero-bgImage.hbsを利用する
- h1の扱い　ロゴにするかページのタイトルにするか？！
- トップへ戻るの機能に不具合があるので、修正。⇒リバーサイドハイツを参考に
- ie11に対応してない(モーダルが真ん中に表示されない)
    - ⇒解決：`modal.sass > .modal-content > margin`設定2箇所を無効にする(天孫神社参考)
- ie11に対応してない(heroの背景色が途中で途切れる)
- コンテンツ間のスペース
    * 文章の内容により`section`で区切る
    * `hr`で区切る
    * `sectionBlock`を使う(max-width:860px, padding-bottom:30px)
- フォームの要素 ブラウザによってsizeの大きさが違う [New Responsive Theme フォーム](http://www.macnet.jp/test/develop/form/)を参考に
- `.content`の中に`div`などのコードを入れ子にすると、モバイルでの表示が崩れる


## 今後の課題

- sectionやtitle間の余白については調整の必要あり。


