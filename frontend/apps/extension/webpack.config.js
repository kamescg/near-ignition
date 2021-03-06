var webpack = require('webpack'),
  path = require('path'),
  fileSystem = require('fs-extra'),
  env = require('./utils/env'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  WriteFilePlugin = require('write-file-webpack-plugin');

const paths = require('./utils/paths');
const yarnWorkspaces = require('./utils/yarn-workspaces');
const workspacesConfig = yarnWorkspaces.init(paths);
const workspacesMainFields = [
  workspacesConfig.packageEntry,
  'browser',
  'module',
  'main',
];

const mainFields = workspacesMainFields;
// load the secrets
var alias = {
  'react-dom': '@hot-loader/react-dom',
  global: path.resolve(__dirname, './src/assets/global'),
  // Application
  '@root': path.resolve(__dirname, ''),
  '@src': path.resolve(__dirname, './src'),
  // Core
  '@settings': path.resolve(__dirname, './src/settings'),
  '@context': path.resolve(__dirname, './src/context'),
  '@hooks': path.resolve(__dirname, './src/hooks'),
  // Blockchain
  '@abi': path.resolve(__dirname, './src/settings/blockchain/abi'),
  '@blockchain': path.resolve(__dirname, './src/settings/blockchain'),
  '@contracts': path.resolve(__dirname, './src/settings/blockchain/contracts'),
  // Data
  '@helpers': path.resolve(__dirname, './src/helpers'),
  '@fetching': path.resolve(__dirname, './src/fetching'),
  '@graphql': path.resolve(__dirname, './src/graphql'),
  '@queries': path.resolve(__dirname, './src/graphql/queries'),
  '@query': path.resolve(__dirname, './src/graphql/query'),
  '@mutation': path.resolve(__dirname, './src/graphql/mutation'),
  // Interface
  '@components': path.resolve(__dirname, './src/components'),
  '@fields': path.resolve(__dirname, './src/components/fields'),
  '@forms': path.resolve(__dirname, './src/forms'),
  '@containers': path.resolve(__dirname, './src/containers'),
  '@layout': path.resolve(__dirname, './src/layout/'),
  '@regions': path.resolve(__dirname, './src/layout/regions'),
  '@templates': path.resolve(__dirname, './src/layout/templates'),
  '@routes': path.resolve(__dirname, './src/layout/routes'),
  '@screens': path.resolve(__dirname, './src/screens'),
  '@views': path.resolve(__dirname, './src/views'),
  // Assets
  '@assets': path.resolve(__dirname, './src/assets'),
  '@data': path.resolve(__dirname, './src/assets/data'),
  '@images': path.resolve(__dirname, './src/assets/images'),
  '@languages': path.resolve(__dirname, './src/assets/languages'),
  '@theme': path.resolve(__dirname, './src/assets/theme'),
};

var secretsPath = path.join(__dirname, 'secrets.' + env.NODE_ENV + '.js');

var fileExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
];

if (fileSystem.existsSync(secretsPath)) {
  alias['secrets'] = secretsPath;
}

var options = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    newtab: path.join(__dirname, '.', 'src', 'pages', 'Newtab', 'index.jsx'),
    options: path.join(__dirname, '.', 'src', 'pages', 'Options', 'index.jsx'),
    popup: path.join(__dirname, '.', 'src', 'pages', 'Popup', 'index.jsx'),
    background: path.join(
      __dirname,
      '.',
      'src',
      'pages',
      'Background',
      'index.js'
    ),
    contentScript: path.join(
      __dirname,
      '.',
      'src',
      'pages',
      'Content',
      'index.js'
    ),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ['contentScript'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        oneOf: [
          // Process application JS with Babel.
          // The preset includes JSX, Flow, TypeScript, and some ESnext features.
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: [paths.appSrc, workspacesConfig.paths],
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-react'],
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),

              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                      },
                    },
                  },
                ],
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              cacheCompression: false, // isEnvProduction,
              compact: false, //isEnvProduction,
            },
          },
          // External
          {
            test: /\.(js|jsx|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: true,

              // If an error happens in a package, it's possible to be
              // because it was compiled. Thus, we don't want the browser
              // debugger to show the original code. Instead, the code
              // being evaluated would be much more helpful.
              sourceMaps: false,
            },
          },
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            // exclude: [paths.appSrc, workspacesConfig.paths],
            exclude: [
              /\.(js|mjs|jsx|ts|tsx)$/,
              /\.html$/,
              /\.json$/,
              paths.appSrc,
              workspacesConfig.paths,
            ],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/,
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: 'file-loader?name=[name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      // },
    ],
  },
  resolve: {
    alias: alias,
    mainFields,
    extensions: fileExtensions
      .map((extension) => '.' + extension)
      .concat(['.jsx', '.js', '.css']),
  },
  plugins: [
    new webpack.ProvidePlugin({
      GLOBAL: 'global',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
    }),
    new webpack.ProvidePlugin({
      Atom: '@horizin/atoms',
    }),
    new webpack.ProvidePlugin({
      Molecule: '@horizin/molecules',
    }),
    new webpack.ProgressPlugin(),
    // clean the build folder
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false,
    }),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin(
      [
        {
          from: './src/manifest.json',
          to: path.join(__dirname, './build'),
          force: true,
          transform: function (content, path) {
            // generates the manifest file using the package.json informations
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            );
          },
        },
      ],
      {
        logLevel: 'info',
        copyUnmodified: true,
      }
    ),
    new CopyWebpackPlugin(
      [
        {
          from: './src/pages/Content/content.styles.css',
          to: path.join(__dirname, './build'),
          force: true,
        },
      ],
      {
        logLevel: 'info',
        copyUnmodified: true,
      }
    ),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        '.',
        'src',
        'pages',
        'Newtab',
        'index.html'
      ),
      filename: 'newtab.html',
      chunks: ['newtab'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        '.',
        'src',
        'pages',
        'Options',
        'index.html'
      ),
      filename: 'options.html',
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        '.',
        'src',
        'pages',
        'Popup',
        'index.html'
      ),
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        '.',
        'src',
        'pages',
        'Background',
        'index.html'
      ),
      filename: 'background.html',
      chunks: ['background'],
    }),
    new WriteFilePlugin(),
  ],
};

if (env.NODE_ENV === 'development') {
  options.devtool = 'cheap-module-eval-source-map';
}

module.exports = options;
