import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontSize, color, space } from '@core-ds/primitives';
import { Icon } from '@ifixit/toolbox';
import { breakpoint } from '@core-ds/primitives';

const iconHeight = 40;

const Container = styled.div`
   min-width: 300px;
   background-color: ${props => props.fill};
   border: 2px ${ props => props.border} solid;
   border-radius: 4px;

   @media screen and (max-width: ${breakpoint.md}) {
      width: 100%;
   }
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   padding: ${space[5]};
`;

const Title = styled.span`
   color: ${props => props.color};
   font-weight: 900;
   letter-spacing: 2px;
   font-size: ${fontSize[1]};
`;

const NoteText = styled.span`
   padding-top: ${space[2]};
   font-size: 14px;
   color: ${color.black};
`;

const IconContainer = styled.div`
   display: flex;
   position: relative;
   top: ${iconHeight/2}px;
   left: ${-iconHeight/2}px;
   width: ${iconHeight}px;
   height: ${iconHeight}px;
   background-color: ${props => props.color};
   border-radius: 50%;
   justify-content: center;
   align-items: center;
   color: white;
   border: 4px white solid;
`;

class ProductNote extends Component {
   render() {
      const { type, title, html } = this.props;
      const values = {
         note           : [color.blueLight4, color.blueLight3, color.blueDark1, color.blueLight1, "check"],
         disclaimer : [color.yellowLight4, color.yellowLight3, color.yellowDark1, color.yellowLight1, "alert-circle"],
         warning     : [color.redLight4, color.redLight3, color.redDark1, color.redLight1, "x"]
      };

      const fill = values[type][0];
      const border = values[type][1];
      const textColor = values[type][2];
      const iconBorderColor = values[type][3];
      const iconType = values[type][4];

      return (
         <React.Fragment>

            <IconContainer color={iconBorderColor}>
               <Icon size={18} name={iconType} />
            </IconContainer>

            <Container fill={fill} solid border={border}>
               <Content>
                  <Title color={textColor}>{title.toUpperCase()}</Title>
                  <NoteText dangerouslySetInnerHTML={{ __html: html }}></NoteText>
               </Content>
            </Container>

         </React.Fragment>
      );
   }
}

ProductNote.propTypes = {
   title: PropTypes.string,
   type: PropTypes.oneOf(['note', 'disclaimer', 'warning']).isRequired,
   html: PropTypes.string.isRequired,
};

export default ProductNote;
