import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Chat() {
  return (
    <Container>
      <Main>
        <span># clever</span>
        <StarBorderIcon />
        <ChannelDescription>
          Company-wide announcements and work-based matters
        </ChannelDescription>
      </Main>

      <InfoContainer>
        <Details>Details</Details>
        <InfoMessage>
          <InfoIcon />
        </InfoMessage>
      </InfoContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #;
  margin: 14px;
`;

const Main = styled.div`
  padding-top: -5px;
`;

const ChannelName = styled.div`
  display: flex;
  font-size: 0.73rem;
  font-weight: bold;
`;

const StarMessage = styled.div`
  display: flex;
`;

const ChannelDescription = styled.div`
  font-size: smaller;
  color: grey;
  padding-top: 7px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
`;

const Details = styled.div`
  font-size: small;
  color: grey;
  padding-top: 7px;
  padding-left: 7px;
`;

const InfoMessage = styled.div`
  display: flex;
`;
