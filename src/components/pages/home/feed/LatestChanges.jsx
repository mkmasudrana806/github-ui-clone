import "./latestChanges.scss";

const LatestChanges = () => {
  return (
    <div className="lastest-changes-cart">
      <p className="text-bold">Latest changes</p>

      {/* changes  */}
      <div className="change mt-3">
        <span className="text-small">2 days ago</span>
        <p className="text-normal">
          CodeQL 2.16.3: AI-powered autofixes for Python, updated queries, and
          security fixessd. entire text is now elipsis
        </p>
      </div>
      <div className="change mt-3">
        <span className="text-small">3 days ago</span>
        <p className="text-normal">
          Push protection is enabled for free users on GitHub
        </p>
      </div>
      <div className="change mt-3">
        <span className="text-small">4 days ago</span>
        <p className="text-normal">Enterprise READMEs</p>
      </div>
      <div className="change mt-3">
        <span className="text-small">5 days ago</span>
        <p className="text-normal">Copilot – February 27th update</p>
      </div>

      <p className="text-small mt-2 view">View changelog &rarr;</p>
    </div>
  );
};

export default LatestChanges;
