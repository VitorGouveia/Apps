import { Suspense } from "react";
import dynamic from "next/dynamic";

import Banner from "../components/banner";

import { ShimmerButton } from "../components/button";

const Button = dynamic(() => import("../components/button"), {
  suspense: true,
});

export default function Home() {
  return (
    <Suspense fallback="loading...">
      <p>homepage</p>

      <Suspense fallback={<h1>hello</h1>}>
        <Banner />
      </Suspense>

      <Suspense fallback={<ShimmerButton />}>
        <Button label="My custom button" />
      </Suspense>
    </Suspense>
  );
}
