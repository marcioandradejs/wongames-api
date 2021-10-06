import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        poweredBy
        &nbsp;
        <A key="website" href="https://github.com/marcioandradejs" target="_blank" rel="noopener noreferrer">
          Marcio Andrade
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
