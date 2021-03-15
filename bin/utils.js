const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  //console.log(name)
  const nameSlices = name.split('-')
  const style = nameSlices[nameSlices.length - 1]
  return {
    name,
    componentName: upperCamelCase(name),
    style: style==='fill' || style==='stroke' ? style : defaultStyle
  }
}

module.exports = {
  parseName
};
