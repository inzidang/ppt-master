import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../componets/CarouselSlick";
import CardItems from "../componets/Carditem";
import {Link} from "react-router-dom"
import TitleImageSkew from "../componets/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

const featuresLists = [
    {
        title: "스마트웹3기",
        description: "영진직업전문학교 스마트웹앱 3기 리액트 수업",
        buttonText: "자세히보기"
    },
    {
        title: "API 요청량 하루 3000번 리미트",
        description: "하루 API요청 횟수가 3,000회로 제한되어 있어 컨텐츠가 보이지 않을 수 있습니다.",
        buttonText: "자세히보기"
    },
    {
        title: "React",
        description: "React + Typescript + Chakra UI를 활용한 마블페이지 제작",
        buttonText: "자세히보기"
    },
]
export default function Home() {
    const { data, isLoading, error } = useQuery('repoData', () =>
        fetch('https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=1f2be9e5633db8ee3608691d7e342629').then(res =>
            res.json()
        )
    )

    console.log(isLoading, error, data)

    return <>
        { /* 캐러셀 */}
        <Box>
            <CarouselSlick />
        </Box>

        {/*특장점*/}
        <HStack w="full" justifyContent="center" py="16" bg="gray.100">

            <Grid
                gap="4"
                w="7xl"
                templateColumns={"repeat(3, 1fr)"}>
                {
                    featuresLists.map((item, i) => (
                        <CardItems key={i} item={item} />
                    ))
                }
            </Grid>
        </HStack>

        {/* 기울어진 이미지 타이틀*/}
        <TitleImageSkew
            title="Comics"
            description=" “LONG SHADOW” Concludes! The battle for Wakanda comes to a head!T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
            imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"/>

        {/* Comics 컨텐츠 리스트 */}
        <VStack w="full" position="relative" h="400px">
            {/* 흰박스 위로 올라오게 하는 범위지정 */}
            <Box
                position="absolute"
                w="7xl"
                py="8"
                px="2"
                top={-16}
                bg="white"
            >

                <Slider {...settings}>
                {data?.data?.results?.map((item, i) => (
                    <Link to={`/comics/${item.id}`}>
                    <VStack key={i} w="full" h="full" role="group" corsor="pointer">
                        <Box overflow="hidden" w="170px" h="240px" _groupHover={{transform: "scale(1.1)"}} transition={"0.4s"} >
                            <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comiocs ${i}`}
                                w="full" h="full"
                                objectFit="cover"
                            />
                        </Box>
                        <Text transition={"0.4s"} _groupHover={{colo: "red.500", fontWeight:"600"}} mt="2" px="2">{item.title.substr(0, 36)}</Text>
                    </VStack>
                    </Link>

                ))}
                </Slider>
            </Box>
        </VStack>
        {/*추가하기*/}

    </>
}