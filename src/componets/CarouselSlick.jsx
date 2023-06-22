import { Box, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick() {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };

    return (
        <Box w="full" h="full">
        <Slider {...settings}>
            <HStack w="full" h="700px" 
            backgroundImage={'url("https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/b/AmazonStores/ATVPDKIKX0DER/e1e56d12814957347ca272b303afbcae.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg")'}
            bgSize="cover">
            </HStack>
            <HStack w="full" h="700px" 
            backgroundImage={'url("https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")'}
            bgSize="cover">
            </HStack>
        </Slider>
        </Box>
    );
}