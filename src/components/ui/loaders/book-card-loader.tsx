const BookCardLoader = () => {
  return (
    <div className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full">
      <div
        className="flex justify-center overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-110 relative"
        style={{ width: 226, height: 320, backgroundColor: "#F3F6FA" }}
      >
        <div
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          style={{ width: 226, height: 185 }}
        ></div>
        <div
          className="bg-fill-thumbnail object-cover w-[140px] h-[210px]"
          style={{
            width: 79,
            height: 8,
            marginTop: 18,
            marginLeft: 18,
            backgroundColor: "#E7ECF3",
            borderRadius: 3,
          }}
        ></div>
        <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
          <div
            style={{
              width: 100,
              height: 5,
              marginTop: 22,
              marginLeft: 18,
              backgroundColor: "#E7ECF3",
              borderRadius: 3,
            }}
          ></div>
          <div
            style={{
              width: 79,
              height: 5,
              marginTop: 29,
              marginLeft: 18,
              backgroundColor: "#E7ECF3",
              borderRadius: 3,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BookCardLoader;
