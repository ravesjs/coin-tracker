import path from 'path'

interface Paths {
  src: string
  app: string
  entities: string
  features: string
  pages: string
  shared: string
  widgets: string
  build: string
  public: string
  template: string
}

const paths: Paths = {
  src: path.resolve(__dirname, '../src'),
  app: path.resolve(__dirname, '../src/app'),
  entities: path.resolve(__dirname, '../src/entities'),
  features: path.resolve(__dirname, '../src/features'),
  pages: path.resolve(__dirname, '../src/pages'),
  shared: path.resolve(__dirname, '../src/shared'),
  widgets: path.resolve(__dirname, '../src/widgets'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  template: path.resolve(__dirname, '../config')
}

export default paths