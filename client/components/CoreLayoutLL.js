import React from "react";
import classnames from "classnames";
import { Components, replaceComponent } from "@reactioncommerce/reaction-components";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";

import LogoContainer from "../llc/LogoContainer";
import FooterContainer from "../llc/FooterContainer";

const CoreLayoutLL = ({ actionViewIsOpen, structure }) => {
  const { layoutFooterLL, template } = structure || {};

  const pageClassName = classnames({
    "page": true,
    "show-settings": actionViewIsOpen
  });

  return (
    <div className={pageClassName} id="reactionAppContainer">

      <LogoContainer />
      <Components.NavBar />

      <Blaze template="cartDrawer" className="reaction-cart-drawer" />

      { Template[template] &&
      <main>
        <Blaze template={template} />
      </main>
      }

      { Template[layoutFooterLL] &&
      <Blaze template={layoutFooterLL} />
      }
      <FooterContainer />
    </div>
  );
};

replaceComponent("coreLayout", CoreLayoutLL);
