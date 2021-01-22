// import babel from '@rollup/plugin-babel';

// const config = {
//   input: 'src/snabbdom.js',
//   output: {
//     dir: 'build',
//     format: 'esm'
//   },
//   plugins: [babel({ babelHelpers: 'bundled' })]
// };

// export default config;



// import { babel } from '@rollup/plugin-babel';
 
// const config = {
//   input: './src/snabbdom.js',
//   output: {
//     dir: 'build',
//     format: 'esm'
//   },
//   plugins: [babel({ babelHelpers: 'bundle' })]
// };
 

// export default config;


import babel from '@rollup/plugin-babel';

const config = {
  input: 'src/snabbdom.js',
  output: {
    dir: 'build',
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;