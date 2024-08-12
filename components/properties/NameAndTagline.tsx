type PropTypes = {
  name: string;
  tagline: string;
};

const NameAndTagline = ({ name, tagline }: PropTypes) => {
  return (
    <article>
      <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>{name}</h1>
      <h2 className='text-sm md:text-base lg:text-lg text-muted-foreground'>
        {tagline}
      </h2>
    </article>
  );
};

export default NameAndTagline;
