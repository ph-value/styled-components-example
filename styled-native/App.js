import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
  color: purple;
  text-align: center;
  position: relative;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title>Yeah This is styled-components in react native</Title>
      </Container>
    );
  }
}
