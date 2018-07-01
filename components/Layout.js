export default (props) => {
  return (
    <div className="l-container">
      <header className="b-site-header">
        <h1 className="b-site-header__title">GW2 Dye Channels</h1>
        <p className="b-site-header__subtitle">Never lose skin + dye combos ever again. Hopefully.</p>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}