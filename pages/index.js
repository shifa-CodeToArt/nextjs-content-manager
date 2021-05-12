import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import NewsLetter from "components/NewsLetter";
import Footer from "components/Footer";

// is called everytime ou visit the page 
// data is always fresh
// function is executed on server
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}
const Home=({resources})=> {
  // console.log("Hie from HOME");
  return (
    <>
      <Layout />
      <ResourceHighlight resources={resources} />
      <NewsLetter />
      <ResourceList resources={resources} />
      <Footer />
    </>
  );

}

export default Home
