module.exports = {
    // ...otras configuraciones...
    module: {
      rules: [
        // ...otras reglas...
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    }
  }
  
  
  
  
  
  
  