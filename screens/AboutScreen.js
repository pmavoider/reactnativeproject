import { createStackNavigator } from "@react-navigation/stack";
import { Card, Text } from "react-native";
import { ScrollView } from "react-native";
import { PARTNERS } from "../shared/partners";
import { ListItem } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { useState } from "react";

const Mission = () => {
   
  return (
    <Card style={{ margin: 10 }}>
      <Card.Title>Our Mission</Card.Title>
      <Card.Divider />
      <Text>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
};
const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS)
  return (
    <ScrollView>
      <Mission />
      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />

        {partners.map((x) => {
          return (
            <ListItem key={x.id}>
              <Avatar rounded source={x.image}></Avatar>
              <ListItem.Content>
                <ListItem.Title>{x.name}</ListItem.Title>
                <ListItem.Subtitle>{x.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};
export default AboutScreen;
