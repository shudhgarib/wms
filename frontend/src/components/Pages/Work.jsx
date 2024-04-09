import MainPostContainer from "./Subpage/MainPostContainer";
import MainPostContainerSecond from "./Subpage/MainPostContainerSecond";
import Dropdown from "./Subpage/Dropdown";

function Work() {
  return (
    <>
      <div className="container">
        <Dropdown />
        <MainPostContainer />
        <MainPostContainerSecond />
      </div>
    </>
  );
}

export default Work;
