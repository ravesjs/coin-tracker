import path from 'path'

interface Paths {
  src: string
  build: string
  public: string
  template: string
}

const paths: Paths = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  template: path.resolve(__dirname, '../config')
}

export default paths