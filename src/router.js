import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/Notfound";
import Home from "./routes/Home";
import Comics from "./routes/Comics";
import Events from "./Events";
import Characters from "./routes/Characters";
import Detail from "./routes/Detail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "comics",
                element: <Comics />
            },
            {
                path: "comics/:id",
                element: <Detail />
            },
            {
                path: "events",
                element: <Events/>
            },
            {
                path: "characters",
                element: <Characters />
            },

        ]
    }
])

export default router