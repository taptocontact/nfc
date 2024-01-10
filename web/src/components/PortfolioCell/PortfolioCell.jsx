import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import HomeDark from "./Views/HomeDark";


export const QUERY = gql`
  query FindPortfolioQuery($id: String!) {
    clientInfo:clientInfoClientId(client: $id) {
      id
      client
      details
      created_at
      updated_at
      extra
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ clientInfo }) => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
          <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <HomeDark userDetail={clientInfo.details}/>
      <ScrollToTop />


    </>
  )
}
