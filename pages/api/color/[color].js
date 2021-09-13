import colors from '/data/colors.json'

/* 
If a page has dynamic routes and uses getStaticProps
it needs to define a list of paths that have to be rendered
to HTML at build time.
export async function getstaticpaths it will do this
*/

export async function getStaticPaths() {
  // return obj with paths array
  const paths = colors.map(color => ({
    params: { color: color.name }   // setting the route params each
  }))
  return { paths: paths, fallback: false }
}

/* 
This function will provide props to the React component for the page

If you export an async function called getStaticProps from a page, 
Next.js will pre-render this page at build time using the props 
returned by it.

Receives context obj w. params, the route parameters for pages 
using dynamic routes
*/

export async function getStaticProps(context) {
  console.log(' context ', context)
  const {params} = context
  const color = colors.find(color => color.name === params.color)
  const props = { props: { color } }
  return props
}

export default function Color(props) {1
  const {color} = props
  console.log(' page props : ', props )
  return <div className='color-page' style={{ backgroundColor: color.hex }}>
    <h1>{color.name}</h1>
  </div>
}
