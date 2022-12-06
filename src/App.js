import Head from "./components/Hero";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
// import Birthday from "./components/Birthday";
import "./global.css";

function App() {
  return (
    <>
      <Head />
      <Timeline
        title="July 21st, 2017: Born"
        img1="/0/photo1.jpeg"
        img2="/0/photo2.jpeg"
        img3="/0/photo3.jpeg"
        img4="/0/photo4.jpeg"
        bgColor="#fff"
        color="pink"
      />

      <Timeline
        title="2018: Age 1"
        img1="/1/photo1.jpeg"
        img2="/1/photo2.jpeg"
        img3="/1/photo3.jpeg"
        img4="/1/photo4.jpeg"
        bgColor="#fff"
        color="pink"
      />
      <Timeline
        title="2019: Age 2"
        img2="/2/photo1.jpeg"
        img1="/2/photo2.jpeg"
        img4="/2/photo3.jpeg"
        img3="/2/photo4.jpeg"
        bgColor="#pink"
        color="#fff"
      />
      <Timeline
        title="2020: Age 3"
        img1="/3/age3photo1.jpeg"
        img2="/3/age3photo2.jpeg"
        img3="/3/age3photo3.jpeg"
        img4="/3/age3photo4.jpeg"
        bgColor="#fff"
        color="pink"
      />
      <Timeline
        title="2021: Age 4"
        img1="/4/age4photo1.jpeg"
        img2="/4/age4photo2.jpeg"
        img3="/4/age4photo3.jpeg"
        img4="/4/age4photo4.jpeg"
        bgColor="#pink"
        color="#fff"
      />
      <Timeline
        title="2022: Age 5"
        img1="/5/age5photo1.jpeg"
        img2="/5/age5photo2.jpeg"
        img3="/5/age5photo3.jpeg"
        img4="/5/photo4.jpeg"
        bgColor="#fff"
        color="pink"
      />
      <Footer />
    </>
  );
}

export default App;
