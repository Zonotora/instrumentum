import type { NextPage } from 'next'
import * as wasm from "instrumentum-rs";

const Home: NextPage = () => {
    const greeting = wasm.greet();
  return (
    <div>
        {greeting}
    </div>
  )
}

export default Home
