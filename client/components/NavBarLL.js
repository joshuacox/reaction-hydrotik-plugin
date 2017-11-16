import React from "react";
import {
  Components,
  getRawComponent,
  replaceComponent,
  copyHOCs
} from "@reactioncommerce/reaction-components";

const NavBar = getRawComponent("NavBar");

class NavBarLL extends NavBar {
  render() {
    return (
      <div className="rui navbar">
        <div className="showmenu">
          <Components.Button icon="bars" onClick={this.toggleNavbarVisibility} />
        </div>
        {this.renderBrand()}
        {this.renderTagNav()}
        {this.renderSearchButton()}
        <div className="accounts">{this.renderMainDropdown()}</div>
        {this.renderCartContainerAndPanel()}
      </div>
    );
  }
}

replaceComponent("NavBar", copyHOCs("NavBar", NavBarLL));

