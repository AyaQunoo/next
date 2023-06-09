import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="headd_text text-center">
        Discover&share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powerd Prompts</span>
      </h1>
      <p className="desc text-center">
        open source ai
      </p>
      <Feed />
    </section>
  )
}

export default Home