'use client';

import { useState } from 'react';

import { Button } from '../ui/button';

const Comment = ({ comment }: { comment: string }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!isExpanded);

  const isLong = comment.length > 150;
  const display =
    isLong && !isExpanded ? `${comment.slice(0, 147)}...` : comment;

  return (
    <div>
      <p className='text-sm'>
        {display}
        {isLong && (
          <Button
            variant='link'
            className='text-muted-foreground pl-0.5 h-1'
            onClick={toggleExpanded}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        )}
      </p>
    </div>
  );
};

export default Comment;
