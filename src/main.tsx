import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import { AuthenticationContext } from "./components/Authentication/AuthenticationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthenticationContext>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthenticationContext>
  </React.StrictMode>
);
