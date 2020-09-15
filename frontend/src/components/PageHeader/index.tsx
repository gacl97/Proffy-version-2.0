import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoIcon from '../../assets/images/logo.svg';

import {
  Container,
  TopHeaderContainer,
  TopHeaderContent,
  BackIcon,
  LogoImg,
  MiddleHeaderContainer,
  MiddleHeaderDescription1,
  MiddleHeaderDescription2,
  Icon,
} from './styles';

interface PageHeaderProps {
  title_header: string;
  title: string;
  title_description_right_side?: string;
  title_description_icon?: string;
  description_below_title?: string;
  description_below_title_right_side?: string;
  description_below_title_icon?: string;
}

const PageHeader = ({
  title_header,
  title,
  title_description_right_side,
  title_description_icon,
  description_below_title,
  description_below_title_right_side,
  description_below_title_icon,
}: PageHeaderProps) => {
  return (
    <Container>
      <TopHeaderContainer>
        <TopHeaderContent>
          <Link to="/">
            <BackIcon src={backIcon} alt="back" />
          </Link>

          <span>{title_header}</span>

          <LogoImg src={logoIcon} alt="logo" />
        </TopHeaderContent>
      </TopHeaderContainer>

      <MiddleHeaderContainer>
        <MiddleHeaderDescription1>
          <h1>{title}</h1>

          {title_description_right_side && (
            <p>
              {title_description_icon && (
                <Icon src={title_description_icon} alt="icon" />
              )}
              {title_description_right_side}
            </p>
          )}
        </MiddleHeaderDescription1>

        <MiddleHeaderDescription2>
          {description_below_title && <p>{description_below_title}</p>}

          {description_below_title_right_side && (
            <p>
              {description_below_title_icon && (
                <Icon src={description_below_title_icon} alt="icon" />
              )}
              {description_below_title_right_side}
            </p>
          )}
        </MiddleHeaderDescription2>
      </MiddleHeaderContainer>
    </Container>
  );
};

export default PageHeader;
