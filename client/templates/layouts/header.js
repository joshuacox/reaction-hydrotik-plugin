import { Reaction } from "/client/api";
import { Tags } from "/lib/collections";
import { getComponent } from "@reactioncommerce/reaction-components";

const NavBar = getComponent("NavBar");

/**
 * layoutHeader events
 */
Template.layoutHeaderLL.events({
  "click .navbar-accounts .dropdown-toggle": function () {
    return setTimeout(function () {
      return $("#login-email").focus();
    }, 100);
  },
  "click .header-tag, click .navbar-brand": function () {
    return $(".dashboard-navbar-packages ul li").removeClass("active");
  }
});

Template.layoutHeaderLL.helpers({
  NavBar() {
    return NavBar;
  },

  TagNav() {
    return ReactionUI.TagNav.Components.TagNav;
  },

  coreNavProps() {
    const instance = Template.instance();
    return {
      onMenuButtonClick() {
        instance.toggleMenuCallback();
      }
    };
  },

  tagNavProps() {
    const instance = Template.instance();

    const tags = Tags.find({
      isTopLevel: true
    }, {
      sort: {
        position: 1
      }
    }).fetch();

    return {
      name: "coreHeaderNavigation",
      editable: Reaction.hasAdminAccess(),
      tags: tags,
      onToggleMenu(callback) {
        // Register the callback
        instance.toggleMenuCallback = callback;
      }
    };
  }
});


/**
 * layoutHeader events
 */
// Template.layoutHeader.events({
//   "click .navbar-accounts .dropdown-toggle": function () {
//     return setTimeout(function () {
//       return $("#login-email").focus();
//     }, 100);
//   },
//   "click .header-tag, click .navbar-brand": function () {
//     return $(".dashboard-navbar-packages ul li").removeClass("active");
//   }
// });
//
// Template.layoutHeader.helpers({
//
// });
