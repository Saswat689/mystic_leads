export default ({ show }) => {
  return (
    <>
      <div
        id="blocks"
        className={`h-full overflow-hidden overflow-y-scroll bg-[#11182a] slide-left ${
          !show ? "hidden" : null
        }`}
      ></div>
    </>
  );
};
