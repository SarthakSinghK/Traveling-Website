import React from 'react'

const Title = ({head1, head2}) => {
  return (
    <div className="section-title">
      <h2>
              {head1} <span>{head2}</span>
      </h2>
    </div>
  );
}

export default Title
