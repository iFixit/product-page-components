import React, { Component } from 'react';
import styled from 'styled-components';
import { _js } from '@ifixit/localize';

const Body = styled.h3`
   margin-bottom: 24px;
   font-size: 14px;
   font-weight: normal;
   line-height: 24px;
`;

const SeeMore = styled.h3`
   margin-bottom: 18px;
   cursor: pointer;
   font-size: 13px;
`;

class ReviewBody extends Component {
   state = {
      expanded: false,
   };

   toggleExpanded = () => {
      this.setState(prevState => ({
         expanded: !prevState.expanded,
      }));
   };

   render() {
      const { body, body_trunc } = this.props;
      const { expanded } = this.state;

      return (
         <React.Fragment>
            <Body>
               {expanded
                  ? body
                  : `${body_trunc}${body_trunc !== body ? '…' : ''}`}
            </Body>
            {body_trunc && body !== body_trunc && (
               <SeeMore onClick={this.toggleExpanded}>
                  {expanded ? _js('See less') : !!body_trunc && _js('See more')}
               </SeeMore>
            )}
         </React.Fragment>
      );
   }
}

export default ReviewBody;
