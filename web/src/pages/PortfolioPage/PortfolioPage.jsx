import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Portfolio from 'src/components/PortfolioCell'
import 'src/components/PortfolioCell/assets/scss/main.scss'

const PortfolioPage = ({id}) => {
  return (
    <>
      <MetaTags title="Portfolio" description="Portfolio page" />
      <Portfolio id={id}/>
    </>
  )
}

export default PortfolioPage
