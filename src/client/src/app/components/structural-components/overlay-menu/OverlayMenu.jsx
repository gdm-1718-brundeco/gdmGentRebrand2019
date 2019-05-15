import React, { Component } from "react";
import "./OverlayMenu.scss";
import EasyFlexCol from "../flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../flexbox/easy-flex-row/EasyFlexRow";
import Title from "../../text-components/title/Title";
import Link from "../../text-components/link/Link";
import Paragraph from "../../text-components/paragraph/Paragraph";
import StyledSquare from "../../styled-components/square/StyledSquare";

class OverlayMenu extends Component {
  state = {
    translateY: 0
  };

  handleTranslate = e => {
    this.setState({ translateY: this.state.translate + 130 });
  };

  render() {
    return (
      <EasyFlexCol style="overlay-menu-wrapper">
        <EasyFlexRow style="row-space-between">
          <Title
            style="overlay-menu-company-title"
            text="Arteveldehogeschool"
          />
        </EasyFlexRow>
        <EasyFlexRow style="row-space-between">
          <div className="overlay-menu-title-div">
            <Title style="overlay-menu-section-title" text="Social" />
            <StyledSquare style="overlay-menu-title-decoration" />
          </div>
        </EasyFlexRow>
        <EasyFlexRow style="row-space-between">
          <EasyFlexCol style="col-space-between">
            <Link style="overlay-menu-link" text="Home" />
            <Link style="overlay-menu-link" text="Inde kijker" />
            <Link style="overlay-menu-link" text="Made by GDM" />
            <Link style="overlay-menu-link" text="Externe projecten" />
            <Link style="overlay-menu-link" text="Opendeurdag" />
            <Link style="overlay-menu-link" text="Arteveldehogeschool" />
          </EasyFlexCol>
          <EasyFlexCol style="col-space-between">
            <Link style="overlay-menu-link" text="Github" />
            <Link style="overlay-menu-link" text="Facebook" />
            <Link style="overlay-menu-link" text="Twitter" />
            <Link style="overlay-menu-link" text="Vimeo" />
            <Link style="overlay-menu-link" text="Instagram" />
          </EasyFlexCol>
        </EasyFlexRow>
        <EasyFlexRow style="row-space-between">
          <div className="overlay-menu-title-div">
            <Title style="overlay-menu-section-title" text="Contact" />
            <StyledSquare style="overlay-menu-title-decoration" />
          </div>
        </EasyFlexRow>
        <EasyFlexRow style="row-space-between">
          <div>
            <Paragraph text="Industrieweg 232, 9090 Mariakerke" />
            <Paragraph text="+32 9 234 86 00" />
            <Paragraph text="Info.grafische.digitalemedia@arteveldehs.be" />
          </div>
        </EasyFlexRow>
      </EasyFlexCol>
    );
  }
}

export default OverlayMenu;

// render() {
//   return (
//     <div className="menu">
//       <div className="app-menu">
//         <div className="row-1">
//           <h2 className="menu-h2">Arteveldehogeschool</h2>
//           <img src="../../../assets/icons/general/close-menu.svg" alt="" />
//         </div>
//         <div className="row-2">
//           <h4 className="menu-title">Social</h4>
//           <div className="menu-title-decoration" />
//         </div>
//         <div className="row-3">
//           <div>
//             <a href="" className="menu-links">
//               Github
//             </a>
//             <a href="" className="menu-links">
//               Facebook
//             </a>
//             <a href="" className="menu-links">
//               Twitter
//             </a>
//             <a href="" className="menu-links">
//               Vimeo
//             </a>
//             <a href="" className="menu-links">
//               Instagram
//             </a>
//           </div>
//           <div className="align-right">
//             <a href="" className="menu-links">
//               Home
//             </a>
//             <a href="" className="menu-links">
//               In de kijker
//             </a>
//             <a href="" className="menu-links">
//               Made by gdm
//             </a>
//             <a href="" className="menu-links">
//               Externe projecten
//             </a>
//             <a href="" className="menu-links">
//               Opendeurdag
//             </a>
//             <a href="" className="menu-links">
//               Arteveldehogeschool
//             </a>
//           </div>
//         </div>
//         <div className="row-4">
//           <h4 className="menu-title">Contact</h4>
//           <div className="menu-title-decoration" />
//         </div>
//         <div className="row-5">
//           <div>
//             <p>Industrieweg 232, 9090 Mariakerke</p>
//             <p>+32 9 234 86 00</p>
//             <p> info.grafische.digitalemedia@arteveldehs.be</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
