import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, Button } from '@ifixit/toolbox';
import { _js } from '@ifixit/localize';

const Container = styled.div`
   display: flex;
   justify-content: space-between;
`;

const Link = styled.a`
   display: flex;
`;

const Name = styled.h3`
   margin: 0 0 0 8px;
   font-size: 14px;
   font-weight: bold;
   line-height: 24px;
`;

const Author = ({ author, reviewsUrl }) => {
   const { name, avatar, url, userid, canEdit } = author;

   return (
      <Container>
         <Link href={url}>
            <Avatar src={avatar} size={28} />
            <div itemprop="author" itemscope="" itemtype="https://schema.org/Person">
               <Name itemprop="name">{name}</Name>
            </div>
         </Link>
         {canEdit && reviewsUrl && (
            <a href={`${reviewsUrl}?userid=${userid}`}>
               <Button size="small">{_js('Edit')}</Button>
            </a>
         )}
      </Container>
   );
};

Author.propTypes = {
   author: PropTypes.object.isRequired,
   reviewsUrl: PropTypes.string,
};

export default Author;
