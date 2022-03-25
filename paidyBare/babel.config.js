module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/react', 'module:metro-react-native-babel-preset'],
  assumptions: {
    privateFieldsAsProperties: true,
  },
}