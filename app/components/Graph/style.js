export default [
  {
    selector: 'edge',
    style: {
      'width': 2,
      'line-color': '#ccc',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle'
    }
  },
  {
    selector: 'node',
    style: {
      'background-color': 'red',
      'label': 'data(label)',
      'transition-property': 'padding',
      'transition-duration': '0.15s',
      'font-family': '"Amatic SC", cursive',
    }
  },
  {
    selector: 'node.hover,node.category.active',
    style: {
      'padding': 5
    }
  },
  {
    selector: 'node.main',
    style: {
      'background-color': '#5f2a2b',
      'color': 'whitesmoke',
      'font-size': '20px',
      'font-weight': 'bold',
      'text-valign': 'center',
      'border-width': 0.5,
      'border-color': 'lightgrey',
      shape: 'cutrectangle',
      width: 'label',
      padding: 15,
      'text-wrap': 'wrap'
      // 'font-family': 'Fredericka the Great'
    }
  },
  {
    selector: 'node.category',
    style: {
      'background-color': '#90bcd8',
      'font-weight': 'bold',
      'text-valign': 'center',
      'text-outline-color': 'white',
      'text-outline-width': 1,
      'width': 'label',
      'border-width': 1,
      'border-color': 'lightgrey',
      'font-family': 'Bebas'
    }
  },
  {
    selector: 'node.category.active',
    style: {
      'background-color': 'red'
    }
  },
  {
    selector: 'edge.active',
    style: {
      'line-color': 'red'
    }
  },
  {
    selector: 'node.argument',
    style: {
      'background-color': 'grey',
      'font-size': 12,
      'font-weight': 'bold',
      'font-style': 'italic',
      'background-image': 'data(speaker.picture)',
      'background-fit': 'cover cover',
      'text-outline-color': 'white',
      'text-outline-width': 2,
      'text-halign': 'right',
      'text-valign': 'center'
      // 'opacity': 0.15
    }
  },
  {selector: '[deepness=3]', style: {opacity: 0.2}},
  {selector: '[deepness=4]', style: {opacity: 0.1}},
  {selector: '[deepness>=5]', style: {opacity: 0}},
  {selector: '.active', style: {opacity: 1}},
  // {
  //   selector: 'node.argument.active',
  //   style: {
  //     'background-color': 'grey',
  //     'opacity': 1
  //   }
  // },
]