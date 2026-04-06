// const Section = ({ title, description, isVisible, setIsVisible }) => {
//   return (
//     <>
//       <h3> {title}</h3>
//       {isVisible ? <p>{description}</p> : null}
//       <button onClick={() => setIsVisible((prev) => !prev)}>
//         {isVisible ? "HIde" : "show"}
//       </button>
//       {/* <button onClick={() => setIsVisible((prev) => !prev)}>
//         {isVisible ? "HIde" : "show"}
//       </button> */}
//     </>
//   );
// };

// import React, { useState } from "react";

// const Upliftexample = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [showConfig, setShowConfig] = useState(null);
//   // const [showConfig, setShowConfig] = useState({
//   //   showAbout: false,
//   //   showContact: false,
//   //   showInfo: false,
//   // });
//   return (
//     <div>
//       State Uplifting from akshay cource react
//       <Section
//         title="About"
//         isVisible={showConfig}
//         setIsVisible={
//           () => setShowConfig(showConfig === "about" ? null : 'about')
//           // setShowConfig({
//           //   showAbout: true,
//           //   showContact: false,
//           //   showInfo: false,
//           // })
//         }
//         description={
//           "lorem20asdfs sfd sdfasdfasdfasdfasdfasdf  kkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
//         }
//          onToggle={() =>
//           setActiveSection(
//             activeSection === "contact" ? null : "contact"
//           )
//         }
//       />
//       <Section
//         title="Contact"
//         isVisible={showConfig}
//         setIsVisible={() =>
//            setShowConfig( showConfig === "contact" ? null : "contact")
//           // setShowConfig({
//           //   showAbout: false,
//           //   showContact: true,
//           //   showInfo: false,
//           // })
//         }
//         description={
//           "lorem20asdfs sfd sdfasdfasdfasdfasdfasdf  kkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
//         }
//       />
//       <Section
//         title="info"
//         isVisible={showConfig}
//         setIsVisible={
//           () => setShowConfig(showConfig === "contact" ? null : "contact")
//           // setShowConfig({
//           //   showAbout: false,
//           //   showContact: false,
//           //   showInfo: true,
//           // })
//         }
//         description={
//           "lorem20asdfs sfd sdfasdfasdfasdfasdfasdf  kkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
//         }
//       />
//     </div>
//   );
// };

// export default Upliftexample;

import React, { useContext, useState } from "react";
import { UserCOntext } from "./contexts/UserContact";

const Section = ({ title, description, isVisible, onToggle }) => {
  return (
    <>
      <h3>{title}</h3>

      {isVisible && <p>{description}</p>}

      <button onClick={onToggle}>{isVisible ? "Hide" : "Show"}</button>
    </>
  );
};

const Upliftexample = () => {
  const [activeSection, setActiveSection] = useState(null);
  const { user } = useContext(UserCOntext);
  console.log("xxx", user);
  return (
    <div>
      <h2>State Uplifting Example</h2>
      <h3>{user.name}</h3>
      <div className="flex" style={{}}>
        <Section
          title="About"
          isVisible={activeSection === "about"}
          onToggle={() =>
            setActiveSection(activeSection === "about" ? null : "about")
          }
          description="About content..."
        />

        <Section
          title="Contact"
          isVisible={activeSection === "contact"}
          onToggle={() =>
            setActiveSection(activeSection === "contact" ? null : "contact")
          }
          description="Contact content..."
        />

        <Section
          title="Info"
          isVisible={activeSection === "info"}
          onToggle={() =>
            setActiveSection(activeSection === "info" ? null : "info")
          }
          description="Info content..."
        />
      </div>
    </div>
  );
};

export default Upliftexample;
