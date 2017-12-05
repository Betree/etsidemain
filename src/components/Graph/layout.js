export default {
  name: 'cola',
  animate: true,
  infinite: true,
  fit: false,
  randomize: true,
  nodeSpacing: (node) => {
    if (node.hasClass('category'))
      return 10
    else if (node.hasClass('main'))
      return 5
    return 10
  }
}