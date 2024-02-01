export default ({ show }) => {
  return (
    <>
      <div
        id="layers"
        className={`column overflow-hidden m-0 p-0 h-full bg-[#11182a] overflow-y-scroll slide-left ${
          !show ? "hidden" : null
        }`}
        style={{ flexBasis: "500px" }}
      >
        <p className="section__title">Layers</p>
        <div id="layers-container"></div>
      </div>
    </>
  );
};
