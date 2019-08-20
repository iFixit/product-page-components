import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, constants } from '@ifixit/toolbox';

const { color } = constants;

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

const Author = ({ author, itemcode, translate, reviewsLink }) => {
   const { name, avatar, url, userid, canEdit } = author;

   return (
      <Container>
         <Link href={url}>
            <Avatar src={avatar} size={28} />
            <Name itemProp="author">{name}</Name>
         </Link>
         {canEdit && (
            <a href={`${reviewsLink}/${itemcode}?userid=${userid}`}>
               <Button size="small">{translate('Edit')}</Button>
            </a>
         )}
      </Container>
   );
};

export default Author;
