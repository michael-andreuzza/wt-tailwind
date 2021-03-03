import gulp from 'gulp';
const {task, src, dest} = gulp;

import tap from 'gulp-tap';
import posthtml from 'gulp-posthtml';
import posthtmlInlineAssets from 'posthtml-inline-assets';
import minifyClassnames from 'posthtml-minify-classnames';

task('html', () => {
  const plugins = [posthtmlInlineAssets(), minifyClassnames()];

  return src('html/*.html')
    .pipe(posthtml(plugins))
    .pipe(dest('build/'));
});
