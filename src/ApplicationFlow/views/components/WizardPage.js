import React from "react";
import { css } from "styled-components";
import {
  Container,
  Row,
  Visible,
  Hidden,
  Col as Column
} from "react-grid-system";
import NavigationItem from "../../components/compound/NavigationItem";
import TopNavigation from "../../components/compound/Navigation";

import ProgressBar from "../../components/simple/ProgressBar";
import { DefaultButton, PrimaryButton } from "../../components/simple/Button";
import Footer from "./Footer";
import Content from "./Content";
const WizardPage = ({
  children,
  showPreviousScreen = false,
  showNextScreen = true,
  goToNextScreen,
  goToPreviousScreen,
  title = "Page",
  previousButtonText = "Back",
  nextButtonText = false,
  buttonStyle = {},
  ContentStyle = Content,
  navigationItemStyle = {},
  hideFooter = false,
  noStyle = false,
  percentage = "12",
  mobileOnly = false,
  contentStyle = "",
  containerStyle = {},
  progress
}) => {
  return (
    <div style={containerStyle}>
      <Visible xs sm>
        <TopNavigation>
          <NavigationItem
            active={true}
            completed={true}
            displayBackButton={showPreviousScreen}
            onBackClick={goToPreviousScreen}
            style={navigationItemStyle}
          >
            {title}
          </NavigationItem>
        </TopNavigation>
      </Visible>
      <Container>
        <Row>
          <ContentStyle
            noStyle={noStyle}
            extraStyle={css`
              ${contentStyle};
            `}
          >
            {children}
          </ContentStyle>
        </Row>
        <Row>
          {hideFooter && mobileOnly ? null : (
            <Visible xs sm>
              <Column style={{ paddingLeft: 0, paddingRight: 0 }}>
                {nextButtonText ? (
                  <Footer>
                    <PrimaryButton
                      style={buttonStyle}
                      disabled={showNextScreen}
                      onClick={goToNextScreen}
                    >
                      {nextButtonText}
                    </PrimaryButton>
                  </Footer>
                ) : null}
              </Column>
            </Visible>
          )}
        </Row>
      </Container>
      {hideFooter ? null : (
        <Hidden xs sm>
          <Footer>
            <ProgressBar percentage={progress} />
            {showPreviousScreen ? (
              <DefaultButton onClick={goToPreviousScreen}>
                {previousButtonText}
              </DefaultButton>
            ) : null}
            {nextButtonText ? (
              <PrimaryButton disabled={showNextScreen} onClick={goToNextScreen}>
                {nextButtonText}
              </PrimaryButton>
            ) : null}
          </Footer>
        </Hidden>
      )}
    </div>
  );
};

export default WizardPage;
