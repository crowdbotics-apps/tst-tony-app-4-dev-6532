import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {}

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3nfddh2sbo9hk.cloudfront.net/media/project_component_resources/Screen_Shot_2019-01-09_at_12.47.28_PM.png"
      }}
      style={{
        width: "100%",
        height: "100%",
        marginLeft: "0pt",
        marginRight: "0pt",
        marginTop: "0pt",
        marginBottom: "0pt",
        paddingLeft: "0pt",
        paddingRight: "0pt",
        paddingTop: "0pt",
        paddingBottom: "0pt",
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: "20pt",
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "System",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: "0pt",
        borderLeftWidth: "0pt",
        borderRightWidth: "0pt",
        borderTopWidth: "0pt",
        borderBottomWidth: "0pt",
        borderRadius: "0pt",
        backgroundSize: "auto"
      }}
    >
      <Text
        style={{
          marginLeft: "0pt",
          marginRight: "0pt",
          marginTop: "5pt",
          marginBottom: "5pt",
          paddingLeft: "5pt",
          paddingRight: "5pt",
          paddingTop: "5pt",
          paddingBottom: "5pt",
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: "20pt",
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "System",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: "0pt",
          borderLeftWidth: "0pt",
          borderRightWidth: "0pt",
          borderTopWidth: "0pt",
          borderBottomWidth: "0pt",
          borderRadius: "0pt"
        }}
      >
        Sample text content
      </Text>
    </ImageBackground>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
