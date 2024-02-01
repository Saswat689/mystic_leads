export default ({ show }) => {
  return (
    <>
      <div
        id="style-manager"
        className={`column overflow-hidden m-0 p-0 h-full overflow-y-scroll bg-[#11182a] slide-left ${
          !show ? "hidden" : null
        }`}
        style={{ flexBasis: "500px" }}
      >
        <p className="section__title">Style Manager</p>
        <br />
        <div id="selectors-container"></div>
        <div id="traits-container"></div>
        <div id="style-manager-container"></div>
      </div>
    </>
  );
};
