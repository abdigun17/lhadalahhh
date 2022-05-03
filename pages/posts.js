import Layout from "@components/Layout";
import Head from "next/head";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import dataPosts from "../utils/posts.json";
import SectionHeader from "@components/SectionHeader";
import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState(dataPosts);

  return (
    <Layout>
      <Head>
        <title>Categories &mdash; PAPI Bali</title>
      </Head>
      <Container>
        <SectionHeader>UI design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 mx-auto">
              Sorry doggie we couldn't find your pages
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
