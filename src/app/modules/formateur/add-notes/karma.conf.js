module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/**/*.spec.ts',
      ],
      browsers: ['Chrome'],
      preprocessors: {
        'src/**/*.spec.ts': ['typescript'],
      },
      typescriptPreprocessor: {
        options: {
          sourceMap: true,
          target: 'ES5',
          module: 'commonjs',
          removeComments: true,
          inlineSources: true,
        },
      },
    });
  };
  