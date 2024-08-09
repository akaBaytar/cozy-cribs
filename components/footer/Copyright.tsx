import Link from 'next/link';

import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const Copyright = () => {
  const fullYear = new Date().getFullYear();

  return (
    <section>
      <div className='container flex flex-col-reverse items-center md:flex-row md:justify-between gap-8 py-4'>
        <div className='text-xs'>
          <p>&copy; {fullYear} CozyCribs, Inc.</p>
        </div>
        <div className='flex items-center gap-2'>
          <Link
            href='https://www.linkedin.com/in/akabaytar'
            target='_blank'
            rel='noreferrer'>
            <FaLinkedin className='text-2xl hover:text-primary duration-200' />
          </Link>
          <Link
            href='https://github.com/akaBaytar'
            target='_blank'
            rel='noreferrer'>
            <FaGithub className='text-2xl hover:text-primary duration-200' />
          </Link>
          <Link href='https://x.com/akaBaytar' target='_blank' rel='noreferrer'>
            <FaXTwitter className='text-2xl hover:text-primary duration-200' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
