const BookConsulation = () => {
  return (
    <div className="hero relative overflow-hidden  bg-no-repeat text-center bg-[url('https://i.ibb.co/xJcfP33/bottle.jpg')] lg:h-[600px] bg-cover">
      <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-black bg-opacity-50">
        <div className="lg:max-w-2xl ml-20 text-center">
          <h1 className="text-[#FFF7E2] lg:text-5xl">
            Ready to restore harmony in your mind, body and spirit?
          </h1>
          <button
            style={{ borderRadius: "16px", padding: "13px 18px 13px 18px" }}
            className="bg-[#3A643B] text-white font-bold mt-10"
          >
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookConsulation;
