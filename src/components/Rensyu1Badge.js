import { Badge, IconButton } from '@material-tailwind/react';
import { HomeIcon } from '@heroicons/react/24/solid';

const Rensyu1Badge = ({ count }) => {
  return (
    <>
      <div className="my-2">
        <Badge content={count}>
          <IconButton>
            <HomeIcon className="h-4 w-4" />
          </IconButton>
        </Badge>
      </div>
    </>
  );
};
export default Rensyu1Badge;
