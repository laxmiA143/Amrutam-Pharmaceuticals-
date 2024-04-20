import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer lg:p-10 p-3 bg-[#3A643B2E] text-base-content">
        <div className="flex-1">
          <h6 className="footer-title text-[#3A643B]">Get in touch</h6>
          <h1>support@amrutam.co.in</h1>
          <p>
            Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
            Lashkar, Gwalior - 474001
          </p>
          <p>+91 9713171999</p>
          <div>
            <div className="grid grid-flow-col gap-4">
              <FaFacebook className="text-2xl text-[#3A643B]"></FaFacebook>
              <FaInstagram className="text-2xl text-[#3A643B]"></FaInstagram>
              <FaGithub className="text-2xl text-[#3A643B]"></FaGithub>
              <FaLinkedin className="text-2xl text-[#3A643B]"></FaLinkedin>
              <FaYoutube className="text-2xl text-[#3A643B]"></FaYoutube>
            </div>
          </div>
        </div>

        <div>
          <h6 className="footer-title font-bold text-[#3A643B]">Information</h6>
          <h1 className="text-[#474747] cursor-pointer text-base">About Us</h1>
          <h1 className="text-[#474747] cursor-pointer text-base">
            Terms and Conditions
          </h1>
          <h1 className="text-[#474747] cursor-pointer text-base">
            Privacy Policy
          </h1>
          <h1 className="text-[#474747] cursor-pointer text-base">
            Privacy Policy for Mobile Apps
          </h1>
          <h1 className="text-[#474747] cursor-pointer text-base">
            Shipping and Returns Policy
          </h1>
          <h1 className="text-[#474747] cursor-pointer text-base">
            International Delivery
          </h1>
          <h1 className="text-[#474747] cursor-pointer text-base">
            For Businesses, Hotels and Resorts
          </h1>
        </div>
        <form>
          <h6 className="footer-title text-[#3A643B]">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h6>
          <div className="flex items-center rounded-lg p-2">
            <input
              type="text"
              className="flex-grow outline-none px-4 py-2 rounded-l-3xl"
              placeholder="Enter your text..."
            />
            <button className="bg-[#000000] hover:bg-blue-900 text-white px-4 py-2 rounded-r-3xl">
              Submit
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default Footer;

{
  /* <footer className="footer h-[400px] p-10 bg-[#3A643B2E] text-base-content flex justify-center items-center">
<div>
    <h6 className="footer-title font-bold text-[#3A643B]">Information</h6>
    <h1 className="text-[#474747] cursor-pointer text-base">About Us</h1>
    <h1 className="text-[#474747] cursor-pointer text-base">Terms and Conditions</h1>
    <h1 className="text-[#474747] cursor-pointer text-base">Privacy Policy</h1>
    <h1 className="text-[#474747] cursor-pointer text-base">Privacy Policy for Mobile Apps</h1>
    <h1 className="text-[#474747] cursor-pointer text-base">Shipping and Returns Policy</h1>
    <h1 className="text-[#474747] cursor-pointer text-base">International Delivery</h1>
    <h1 className="text-[#474747] cursor-pointer text-base">For Businesses, Hotels and Resorts</h1>
</div>
</footer> */
}
