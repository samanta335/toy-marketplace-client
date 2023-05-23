import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.init();

const CategoryTab = () => {
  return (
    <div>
      <Tabs className="text-center">
        <h1 className="text-3xl mb-3 mt-16 text-green-800">Teddies Category</h1>
        <TabList>
          <Tab>Bear Teddy </Tab>
          <Tab>Panda Teddy</Tab>
          <Tab>Pikachu Teddy</Tab>
        </TabList>

        <TabPanel>
          <div className="flex  justify-center">
            <div className="border rounded-lg mr-10 p-5">
              <img
                className="w-56 h-56 "
                src="https://m.media-amazon.com/images/I/81J4TvhJx1L._AC_UF894,1000_QL80_.jpg"
                alt=""
              />
              <h2 className="font-semibold">
                Name: <span>Brown Bear</span>
              </h2>
              <p className="font-semibold">
                price : <span>$1200</span>
              </p>
              <Link to="/private" className="btn btn-accent mt-5">
                View Details{" "}
              </Link>
            </div>
            <div className="border rounded-lg p-5">
              <img
                className="w-56 h-56"
                src="https://www.seedblossompod.com.au/images/products/large/v87knx5sya.jpg"
                alt=""
              />
              <h2 className="font-semibold">
                Name: <span>Blue Bear</span>
              </h2>
              <p className="font-semibold">
                price : <span>$1500</span>
              </p>
              <Link to="/private" className="btn btn-accent mt-5">
                View Details{" "}
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex  justify-center">
            <div className="border rounded-lg mr-10 p-5">
              <img
                className="w-56 h-56 "
                src="https://m.media-amazon.com/images/I/41hvS8YTptL._SX466_.jpg"
                alt=""
              />
              <h2 className="font-semibold">
                Name: <span>Pandu </span>
              </h2>
              <p className="font-semibold">
                price : <span>$1000</span>
              </p>
              <Link to="/private" className="btn btn-accent mt-5">
                View Details{" "}
              </Link>
            </div>
            <div className="border rounded-lg p-5">
              <img
                className="w-56 h-56"
                src="https://rukminim1.flixcart.com/image/416/416/k687wy80/stuffed-toy/p/p/z/panda-with-baby-soft-toys-valentine-teddy-bear-soft-toys-spacial-original-imafcnxuczqze7fn.jpeg?q=70"
                alt=""
              />
              <h2 className="font-semibold">
                Name: <span>Panda</span>
              </h2>
              <p className="font-semibold">
                price : <span>$1800</span>
              </p>
              <Link to="/private" className="btn btn-accent mt-5">
                View Details
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex  justify-center">
            <div className="border rounded-lg mr-10 p-5">
              <img
                className="w-56 h-56 "
                src="https://rukminim1.flixcart.com/image/416/416/k0h12fk0/stuffed-toy/p/w/b/yellow-pikachu-plush-soft-toy-pokemon-doll-60-raadya-original-imafdce2vgkawpbv.jpeg?q=70"
                alt=""
              />
              <h2 className="font-semibold">
                Name: <span>Smiley pikachu</span>
              </h2>
              <p className="font-semibold">
                price : <span>$1700</span>
              </p>
              <Link to="/private" className="btn btn-accent mt-5">
                View Details{" "}
              </Link>
            </div>
            <div className="border rounded-lg p-5">
              <img
                className="w-56 h-56"
                src="https://static-01.daraz.com.bd/p/4472030b6066254cd83b643aea35cee0.jpg"
                alt=""
              />
              <h2 className="font-semibold">
                Name: <span>Rude Pikachu</span>
              </h2>
              <p className="font-semibold">
                price : <span>$900</span>
              </p>
              <Link to="/private" className="btn btn-accent mt-5">
                View Details{" "}
              </Link>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <hr />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        className="mt-10"
      >
        <img
          className="w-64 h-64 text-center mx-auto"
          src="https://www.bears4u.co.uk/wp-content/uploads/2021/07/allbears.jpg"
          alt=""
        />
      </div>
      <div className="text-center mt-8">
        <Link className="btn btn-secondary" to="/Teddy/ExtraSection">
          See Many Kind Of Teddy
        </Link>
      </div>
    </div>
  );
};

export default CategoryTab;
