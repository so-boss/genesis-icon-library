/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const format = require('prettier-eslint')
const processSvg = require('./processSvg')
const { parseName } = require('./utils')
const defaultStyle = process.env.npm_package_config_style || 'stroke'
const { getAttrs, getElementCode } = require('./template')
const {components, groups} = require('../src/data.json')
const icons = components
const rootDir = path.join(__dirname, '..')

// where icons code in
const srcDir = path.join(rootDir, 'src')
const iconsDir = path.join(rootDir, 'src/icons')

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir)
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(path.join(rootDir, 'src', 'icons.js'), '', 'utf-8');
  fs.writeFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    initialTypeDefinitions,
    'utf-8',
  );
}

// generate attributes code
const attrsToString = (attrs, style) => {
  // console.log('style: ', style)
  return Object.keys(attrs).map((key) => {
    // should distinguish fill or stroke
    if (key === 'width' || key === 'height' || key === style) {
      return key + '={' + attrs[key] + '}';
    }
    if (key === 'otherProps') {
      return '{...otherProps}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

// generate icon code separately
const generateIconCode = async ({modified_name, height, width, description, variants}) => {
  const names = parseName(modified_name, defaultStyle)
  const location = path.join(rootDir, 'src/svg', `${names.name}.svg`)
  const destination = path.join(rootDir, 'src/icons', `${names.name}.js`)
  const code = fs.readFileSync(location)
  const svgCode = await processSvg(code, variants)
  const ComponentName = names.componentName
  const element = getElementCode(ComponentName, attrsToString(getAttrs(names.style, height, width, variants), names.style), svgCode)

  // Replace id="color" with fill={fill}
  const regex_color = /id="color"/gm;
  const modified_element = element.replace(regex_color, "fill={background}");

  const component = format({
    text: modified_element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  fs.writeFileSync(destination, component, 'utf-8');

  console.log('Successfully built', ComponentName);
  return {ComponentName, name: names.name, modified_name: modified_name}
}

// append export code to icons.js
const appendToIconsIndex = ({ComponentName, modified_name}) => {
  //console.log(ComponentName, modified_name)
  const exportString = `export { default as ${ComponentName} } from './icons/${modified_name}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    exportTypeString,
    'utf-8',
  );
}

generateIconsIndex()

Object
  .keys(icons)
  .map(key => icons[key])
  .forEach(({component_name, group, height, width, variants, description}) => {
    //console.log(component_name, group, height, width, description)
    const modified_name = group+"-"+component_name;
    generateIconCode({modified_name, height, width, description, variants})
      .then(({ComponentName, modified_name}) => {
        appendToIconsIndex({ComponentName, modified_name})
      })
  })
