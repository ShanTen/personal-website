import SocialsBar from "./components/SocialsBar";

const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a.rss {
          float: right;
        }
      `}</style>
      <SocialsBar />
      <br />
      <small>
        <time>{YEAR}</time> © <a href="/">Shantanu Ramanujapuram</a>.
        <a className="rss" href="/feed.xml">RSS</a>
      </small>
    </footer>
  ),
};
