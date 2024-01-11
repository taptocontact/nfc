import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import OrderCell from 'src/components/OrderCell'


const OrderPage = ({id}) => {
  return (
    <>
      <MetaTags title="Order" description="Order page" />

     <OrderCell id={id} />
    </>
  )
}

export default OrderPage
