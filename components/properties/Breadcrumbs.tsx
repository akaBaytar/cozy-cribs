import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

type PropTypes = {
  name: string;
  category: string;
};

const Breadcrumbs = ({ name, category }: PropTypes) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className='text-xs'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/?category=${category}`}
            className='capitalize'>
            {category}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>{name}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
