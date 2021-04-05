import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
//const {components, groups} = require('../src/data.json')
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0%;
  list-style: none;
`

const Group = ({group}) => {
  con
  const group_items = Object.keys(group.children)
    .map((key, index) =>
      <Item key={key} index={index} />
    )

  return (
    <Container>{group_items}</Container>
  )
}

const Item = ({key, index}) => {
  const Icon = icons[key]
  return (
    <li key={index}>
      <IconWrapper>
        <Icon/>
        <span>{key}</span>
      </IconWrapper>
    </li>
  )
}

class List extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {
          Object.keys(groups)
            .map((group) =>
              <Group group={group} />
            )
        }
      </div>
    )
  }
}

export default List;
