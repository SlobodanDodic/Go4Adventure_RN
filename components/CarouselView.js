import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function CarouselView({ images }) {
  const width = Dimensions.get("window").width;

  console.log(images);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width * 0.8}
        height={width / 2}
        autoPlay={false}
        // data={[...new Array(6).keys()]}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View style={{ flex: 1, borderWidth: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default CarouselView;
