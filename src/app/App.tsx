import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AnimatePresence } from "motion/react";
import { GlobalEffects } from "./components/GlobalEffects";

export default function App() {
  return (
    <>
      <GlobalEffects />
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  );
}
