import { Carousel } from "flowbite-react";

const Carousal = () => {
  return (
    <div className="w-5/6 flex py-6 justify-center items-center mx-auto">
      <Carousel className="h-96  sm:h-64 xl:h-80 2xl:h-96" >
        <img src="/first.jpg" alt="..." />
        <img src="/second.jpg" alt="..." />
        <img src="/third.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Carousal;
