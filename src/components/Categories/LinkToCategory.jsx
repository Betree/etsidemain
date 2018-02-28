import React from 'react'
import Link from 'gatsby-link'
import slugify from 'voca/slugify'

const LinkToCategory = ({category, children, ...props}) =>
  <Link to={`/categories/${slugify(category)}`} {...props}>
    {children}
  </Link>

export default LinkToCategory