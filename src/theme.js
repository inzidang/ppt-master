import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    fonts: {
        body:"Pretentard-regular"
    },
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1280px",
        "2x1": "1536px"
    }
})

export default theme