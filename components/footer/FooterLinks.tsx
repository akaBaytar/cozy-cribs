const FooterLinks = () => {
  return (
    <section>
      <div className='container flex flex-col items-center text-center md:flex-row md:justify-between md:text-left gap-8 py-8'>
        <div>
          <h6 className='text-sm font-medium'>Support</h6>
          <ul className='text-xs text-muted-foreground mt-1 flex flex-col gap-y-1'>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Help Center
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Cancellation
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Disability Support
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Report neighborhood
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-sm font-medium'>Hosting</h6>
          <ul className='text-xs text-muted-foreground mt-1 flex flex-col gap-y-1'>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Hosting Resources
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Community Forum
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Hosting Responsibly
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Cozy-friendly Apartments
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-sm font-medium'>CozyCribs</h6>
          <ul className='text-xs text-muted-foreground mt-1 flex flex-col gap-y-1'>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Careers
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Investors
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Gift Cards
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Newsroom
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-sm font-medium'>Policies</h6>
          <ul className='text-xs text-muted-foreground mt-1 flex flex-col gap-y-1'>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Terms
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Privacy
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Refunds
              </p>
            </li>
            <li>
              <p className='cursor-pointer hover:text-primary-foreground'>
                Sitemap
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;
