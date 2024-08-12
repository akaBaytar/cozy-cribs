import Image from 'next/image';

type PropTypes = {
  src: string;
  alt: string;
};

const ImageContainer = ({ src, alt }: PropTypes) => {
  return (
    <section className='h-[300px] md:h-[500px] relative mt-8'>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes='100vw'
        className='object-cover rounded-md'
      />
    </section>
  );
};
export default ImageContainer;
