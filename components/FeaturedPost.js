import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center item-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12">
          <Link href="/detail">
            <a>
              <img
                src="assets/images/Rectangle-4-2.png"
                className="rounded-xl w-full mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 px-4">
          <InfoPost
            category="UI Design"
            date="July 2, 2022"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorName="Lezlie Alexander"
            authorJob="UI Designer"
            authorAvatar="assets/images/lezlie.png"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
