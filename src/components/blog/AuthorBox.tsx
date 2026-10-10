import Link from "next/link";
import { BLOG_AUTHOR } from "@/config/blog";

export default function AuthorBox() {
  return (
    <section className="blog-author-section">
      <div className="blog-author-box">
        <img
          src={BLOG_AUTHOR.headshot}
          alt=""
          width={88}
          height={88}
          className="blog-author-box__photo"
        />
        <div>
          <p className="blog-author-box__name">{BLOG_AUTHOR.name}</p>
          <p className="blog-author-box__role">{BLOG_AUTHOR.role}</p>
          <p className="blog-author-box__bio">{BLOG_AUTHOR.bio}</p>
          <Link href={BLOG_AUTHOR.teamHref} className="blog-author-box__link">
            More about the team
          </Link>
        </div>
      </div>
    </section>
  );
}
