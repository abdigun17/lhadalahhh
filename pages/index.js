import { useState } from "react";
import Head from "next/head";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import dataPosts from "../utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(dataPosts);

  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Layout>
        <Head>
          <title>Home &mdash; PAPI Bali</title>
        </Head>
        <Container>
          <FeaturedPost />
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </div>
  );
}
