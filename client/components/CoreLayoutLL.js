import React from "react";
import classnames from "classnames";
import { Components, replaceComponent } from "@reactioncommerce/reaction-components";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";

const CoreLayoutLL = ({ actionViewIsOpen, structure }) => {
  const { layoutFooter, template } = structure || {};

  const pageClassName = classnames({
    "page": true,
    "show-settings": actionViewIsOpen
  });

  return (
    <div className={pageClassName} id="reactionAppContainer">
      <div id="logo" className="clearfix">
        <a href="https://leahlovise.com//" title="Leah Lovise" rel="home">
          <img src="images/leahlovise-logo-xs.png" alt=""></img>
        </a>
      </div>

      <Components.NavBar />

      <Blaze template="cartDrawer" className="reaction-cart-drawer" />

      { Template[template] &&
      <main>
        <Blaze template={template} />
      </main>
      }

      { Template[layoutFooter] &&
      <Blaze template={layoutFooter} />
      }
    </div>
  );
};

replaceComponent("coreLayout", CoreLayoutLL);
