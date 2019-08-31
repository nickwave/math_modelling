define("mediaContainer",["lodash","santa-components","componentsCore","prop-types","components","backgroundCommon"],function(e,t,n,i,o,r){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=900)}({0:function(t,n){t.exports=e},18:function(e,t){e.exports=o},2:function(e,n){e.exports=t},3:function(e,t){e.exports=n},4:function(e,t){e.exports=i},46:function(e,t){e.exports=r},900:function(e,t,n){var i,o;i=[n(901),n(3)],void 0===(o=function(e,t){"use strict";var n=e.createMediaContainer({displayName:"MediaContainer",useBackgroundDetectionMixin:!1}),i=e.createMediaContainer({displayName:"HoverBox",useBackgroundDetectionMixin:!1}),o=e.createMediaContainer({displayName:"Column",useBackgroundDetectionMixin:!0,isDomOnlyUpdateAllowed:!1}),r=e.createMediaContainer({displayName:"MediaBox",useBackgroundDetectionMixin:!0}),s=e.createMediaContainer({displayName:"StateBoxState",useBackgroundDetectionMixin:!0}),a=e.createMediaContainer({displayName:"StateStripState",useBackgroundDetectionMixin:!0}),p=e.createMediaContainer({displayName:"StateBoxFormState",useBackgroundDetectionMixin:!0});return t.compRegistrar.register("wysiwyg.viewer.components.MediaBox",r).register("wysiwyg.viewer.components.HoverBox",i).register("wysiwyg.viewer.components.Column",o).register("wysiwyg.viewer.components.StateBoxState",s).register("wysiwyg.viewer.components.StateStripState",a).register("wysiwyg.viewer.components.MediaContainer",n).register("wysiwyg.viewer.components.StateBoxFormState",p),{hoverBox:i,column:o,mediaContainer:n,mediaContainerFactory:e}}.apply(t,i))||(e.exports=o)},901:function(e,t,n){var i,o;function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}i=[n(4),n(0),n(3),n(46),n(18),n(2)],void 0===(o=function(e,t,n,i,o,s){"use strict";var a=o.mediaCommon,p=function(e,n){return e=e||{},n?t.assign({},e,{display:"flex"}):e},l=function(e){if(t.isEmpty(e.borderWidth))return e;var n=parseInt(e.borderWidth,10);return t.assign({},e,{margin:"-"+n+"px"})};return{createMediaContainer:function(o){o=o||{};var c=[a.mediaLogicMixins.fill,n.mixins.skinBasedComp,n.mixins.createChildComponentMixin,s.mixins.inlineContentMixin];return o.useBackgroundDetectionMixin&&c.push(i.mixins.backgroundDetectionMixin),{displayName:o.displayName||"MediaContainer",mixins:c,propTypes:{style:s.santaTypesDefinitions.Component.style.isRequired,compDesign:s.santaTypesDefinitions.Component.compDesign,compProp:s.santaTypesDefinitions.Component.compProp,isMobileView:s.santaTypesDefinitions.isMobileView.isRequired,isMeshLayoutMechanism:s.santaTypesDefinitions.Layout.isMeshLayoutMechanism,layoutContainerClassName:s.santaTypesDefinitions.Layout.layoutContainerClassName,containerStyle:s.santaTypesDefinitions.CompDesign.containerStyle,bgStyle:e.object,rootStyle:e.object,inlineParentStyle:e.object,inlineStyle:e.object,isMobileResponsive:e.bool},statics:{compSpecificIsDomOnlyOverride:function(){return t.get(o,"isDomOnlyUpdateAllowed",!0)},behaviors:a.mediaBehaviors.fill},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"},getSkinProperties:function(){var e=this,n=(this.props.rootStyle||this.props.style).width,i=this.props.bgStyle,s=this.props.inlineParentStyle?t.clone(this.props.inlineParentStyle):t.assign({},a.defaultMediaStyle,i),c=this.props.inlineStyle?t.clone(this.props.inlineStyle):{width:n,position:"absolute",top:0,bottom:0},u=Boolean(this.props.isMobileResponsive),d=this.props.isMeshLayoutMechanism,m=t.clone(this.props.containerStyle),y=this.props.compProp.allowOverflowContent?t.assign(m,{overflow:"visible"}):m;d&&(t.assign(c,{position:"relative"}),t.assign(s,{position:"relative"}),t.assign(y,{position:"relative",height:"100%",width:"100%"}));var f={contentArea:this.props.contentArea};d&&this.props.leavingChildrenIds&&this.lastMeshParams&&(f.overrides={components:[].concat(r(this.props.meshParams.components),r(t.filter(this.lastMeshParams.components,function(n){var i=n.id;return t.includes(e.props.leavingChildrenIds,i)})))}),o.fitToContentHeight&&t.set(f,["overrides","fitToContentHeight"],!0);var h=this.getChildrenRenderer(f);return this.lastMeshParams=this.props.meshParams,{"":t.assign({style:p(this.props.rootStyle,d)},this.props.contentArea&&{"data-content-width":this.props.contentArea.width},u&&{"data-mobile-responsive":!0},d&&{"data-is-mesh":!0}),background:this.createFillLayers({mediaDimensions:this.props.mediaDimensions,bgStyle:i}),container:{style:l(y)},inlineContentParent:{style:s},inlineContent:{className:this.props.layoutContainerClassName,children:h,style:c},form:{onSubmit:function(e){return e.preventDefault()}}}}}}}}.apply(t,i))||(e.exports=o)}})});
//# sourceMappingURL=mediaContainer.min.js.map