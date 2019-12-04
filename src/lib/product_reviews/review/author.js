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

const Author = ({ author, itemcode, reviewsLink }) => {
   const { name, avatar, url, userid, canEdit } = author;

   return (
      <Container>
         <Link href={url}>
            <Avatar src={avatar} size={28} />
            <Name itemProp="author">{name}</Name>
         </Link>
         {canEdit && reviewsLink && (
            <a href={`${reviewsLink}/${itemcode}?userid=${userid}`}>
               <Button size="small">{_js('Edit')}</Button>
            </a>
         )}
      </Container>
   );
};

Author.propTypes = {
   author: PropTypes.object.isRequired,
   itemcode: PropTypes.string,
   reviewsLink: PropTypes.string,
};

export default Author;
