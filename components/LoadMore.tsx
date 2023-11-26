import Image from "next/image";

const LoadMore = () => {
  return (
    <section>
      <div>
        <Image
          src="./spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default LoadMore;
