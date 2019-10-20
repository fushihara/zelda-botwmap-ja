module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        // vueファイルのstyleタグの中で @import "modulename/path";する為の表記。
        // この書き方だと、node_modules/modulename/path.css 同 path.scss 同 _path.scss を読み込んでくれる。
        includePaths: ['node_modules']
      }
    }
  },
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    devtool: "cheap-module-source-map", // vue-cli-service build --mode development で出力したjsでeval("ソースコード")の部分を無くす時はon
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear();
    /** svgファイルをインライン展開するか、画像と同じようにbase64で扱うかを選ぶ */
    /*
    // インライン展開を選ぶ。svgらしくスクリプトから操作出来る。使うには npm i -D vue-svg-loader が必要
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
      */
    // 画像と同じ様にbase64で変換して使う
    svgRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // このoptionsの値はundefinedの場合がある。
        if (!options) { options = {}; }
        options.limit = 10 * 1024;
        return options;
      });
    config.module
      .rule('images') // ここのimages とかは、vue-cli をデバッグ実行して変数を見るのが一番早い。結構色々ある
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        if (!options) { options = {}; }
        options.limit = 10 * 1024;//画像に対するurl-loaderのオプションを書き換える。デフォルトは4098byte
        return options
      });
    /** config.module.rule('images') で使える値一覧
     * 名前、マッチする正規表現、使うローダー一覧 の順番
     * vue     /\.vue$/                                     cache-loader、vue-loader
     * images  /\.(png|jpe?g|gif|webp)(\?.*)?$/             url-loader ←limitは4096byte。超えた時はfile-loader
     * svg     /\.(svg)(\?.*)?$/                            file-loader
     * media   /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/  url-loader ←これもデフォルトのlimitは4096byteだけど実質無理では・・・
     * fonts   /\.(woff2?|eot|ttf|otf)(\?.*)?$/i            url-loader ←これもデフォルトのlimitは4096byteだけど実質無理では・・・
     * pub     /\.pug$/                         storeなし ←挙動がちょっとわからない
     * css     /\.css$/                         storeなし ←挙動がちょっとわからない
     * postcss /\.p(ost)?css$/                  storeなし ←挙動がちょっとわからない
     * scss    /\.scss$/                        storeなし ←挙動がちょっとわからない
     * sass    /\.sass$/                        storeなし ←挙動がちょっとわからない
     * less    /\.less$/                        storeなし ←挙動がちょっとわからない
     * stylus  /\.styl(us)?$/                   storeなし ←挙動がちょっとわからない
     * ts      /\.ts$/                          cache-loader、ts-loader
     * tsx     /\.tsx$/                         cache-loader、ts-loader ←tsと同じ
     */
  },
  pages: {
    index: {
      entry: "src/app-entry/index.ts"
    }
  },
  filenameHashing: true,
  publicPath: process.env.PUBLIC_PATH || "/", // 通常は「/」 servの時のURLと、build app の時に使われるっぽい
  outputDir: "build-result/unused" // buildの時、引数で指定されるので未使用のはず
}
