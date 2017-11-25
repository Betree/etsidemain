export default {
  name: 'cola',
  refresh: 3,
  animate: true,
  infinite: true,
  fit: false,
  nodeSpacing: (node) => {
    if (node.hasClass('category'))
      return 10
    else if (node.hasClass('main'))
      return 5
    return 10
  }
}