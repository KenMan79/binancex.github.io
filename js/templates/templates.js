(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['collab_jumbotron'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid collaborate-jumbotron justify-content-center\">\n  <div style=\"padding: 40px 40px; text-align: center\">\n    <div class=\"jumbotron-headline\">\n      Share. Discuss. Connect.\n    </div>\n    <div class=\"jumbotron-sub-headline\" style=\"margin: 20px 40px 30px 40px\">\n      Find opportunities to work with us and others in the ecosystem.\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['collab_tabs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"background-color: #011B38; padding-top: 15px;\">\n  <ul class=\"nav nav-tabs justify-content-center\" id=\"myTab\" role=\"tablist\" style=\"text-align: center;\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"collab_discussions_status") || (depth0 != null ? lookupProperty(depth0,"collab_discussions_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collab_discussions_status","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":65}}}) : helper)))
    + "\" href=\"./collaborate.html\">Discussions</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"collab_events_status") || (depth0 != null ? lookupProperty(depth0,"collab_events_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collab_events_status","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":60}}}) : helper)))
    + "\" href=\"./collab_events.html\">Events</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"collab_rfps_status") || (depth0 != null ? lookupProperty(depth0,"collab_rfps_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collab_rfps_status","hash":{},"data":data,"loc":{"start":{"line":10,"column":36},"end":{"line":10,"column":58}}}) : helper)))
    + "\" href=\"./collab_rfps.html\">RFPs</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"collab_evangelists_status") || (depth0 != null ? lookupProperty(depth0,"collab_evangelists_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collab_evangelists_status","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":65}}}) : helper)))
    + "\" href=\"./collab_evangelists.html\">Evangelists</a>\n    </li>\n  </ul>\n</div>";
},"useData":true});
templates['fellowship_about'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tab-content fellowship-container\" id=\"myTabContent\">\n\n  <div class=\"tab-pane fade show active justify-content-center\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\" style=\"text-align: center;\">\n\n    <div style=\"padding: 40px 0px; width: 70%; display: inline-block; text-align: left\">\n      <div style=\"font-size: 20px; font-weight: bold\">\n        What is the Binance X Fellowship?\n      </div>\n      <div style=\"margin: 15px 0;\">\n        We started this program to support talented developers and researchers in creating free and open-source software that would enable new innovations and businesses in the crypto economy.\n      </div>\n      <div style=\"margin: 15px 0;\">\n        By joining this program, you have the freedom to work on open-source projects that have meaningful impact but may not necessarily have stand-alone commercial viability in the near-term.\n      </div>\n      <div style=\"margin: 15px 0;\">\n        As a <i>Binance X Fellow</i>, you will have access to our wide network of founders, researchers, portfolio companies and developers for mentorship and advice.\n      </div>\n      <div style=\"font-size: 20px; font-weight: bold\">\n        Program Details\n      </div>\n      <div style=\"margin: 15px 0;\">\n        <ul>\n          <li>Fellowship participant will receive a monthly stipend.</li>\n          <li>Project will receive support and guidance on defining a roadmap and fostering a community of users and contributors.</li>\n          <li>Open to applicants globally and admitted on a rolling basis.</li>\n        </ul>\n      </div>\n      <div style=\"font-size: 20px; margin-top: 25px; font-weight: bold; text-align: center\">\n        <a class=\"btn btn-primary binance-button\" href=\"https://forms.monday.com/forms/e4ad18734e3c7153b166b4374dd9a7e7\" target=\"_new\" role=\"button\">Apply</a>\n      </div>\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['fellowship_apply'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tab-content fellowship-container\" id=\"myTabContent\">\n\n  <div class=\"tab-pane fade show active justify-content-center\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\" style=\"text-align: center;\">\n\n    <div style=\"padding: 40px 0px; width: 70%; display: inline-block; text-align: left\">\n      <div style=\"font-size: 20px; font-weight: bold\">\n        Application\n      </div>\n      <div style=\"margin: 15px 0;\">\n        This program is open to candidates globally and fellows are admitted on a rolling basis.\n      </div>\n      <div style=\"margin: 15px 0;\">\n        Fill out the form below, and we will get in touch if there is interest.\n      </div>\n      <div style=\"font-size: 20px; margin-top: 25px; font-weight: bold; text-align: center\">\n        <a class=\"btn btn-primary binance-button\" href=\"https://forms.monday.com/forms/e4ad18734e3c7153b166b4374dd9a7e7\" target=\"_new\" role=\"button\">Apply</a>\n      </div>\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['fellowship_fellows-orig'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isModZeroNotFirst") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isModZero") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "\n      <div class=\"col-sm-3\">\n        <div class=\"card fellow-card\" style=\"\">\n          <div class=\"fellow-card-div\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img_url") || (depth0 != null ? lookupProperty(depth0,"img_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_url","hash":{},"data":data,"loc":{"start":{"line":19,"column":22},"end":{"line":19,"column":33}}}) : helper)))
    + "\" class=\"card-img-top fellow-card-img\">\n          </div>\n          <div class=\"card-body fellow-card-body\">\n            <h5 class=\"card-title fellow-card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":53},"end":{"line":22,"column":61}}}) : helper)))
    + "</h5>\n            <p class=\"card-text fellow-card-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"project") || (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data,"loc":{"start":{"line":23,"column":50},"end":{"line":23,"column":61}}}) : helper)))
    + "</p>\n            <div style=\"text-align: center\">\n              <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"detail_url") || (depth0 != null ? lookupProperty(depth0,"detail_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detail_url","hash":{},"data":data,"loc":{"start":{"line":25,"column":23},"end":{"line":25,"column":37}}}) : helper)))
    + "\" class=\"btn-sm btn-primary binance-button\" style=\"text-align: center; font-size: 12px\">Details</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLast") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":33,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"row grow-row\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container-fluid fellowship-container\" style=\"padding: 20px;\">\n\n  <div style=\"font-size: 20px; font-weight: bold; margin: 10px 10px 10px 20px\">\n      Binance X Fellows\n  </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"everyNth")||(depth0 && lookupProperty(depth0,"everyNth"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fellows_array") : depth0),4,{"name":"everyNth","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
templates['fellowship_fellows'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isModZeroNotFirst") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isModZero") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "\n      <div class=\"col-sm-3\">\n        <div class=\"card fellow-card\" style=\"\">\n          <div class=\"fellow-card-div\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img_url") || (depth0 != null ? lookupProperty(depth0,"img_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_url","hash":{},"data":data,"loc":{"start":{"line":19,"column":22},"end":{"line":19,"column":33}}}) : helper)))
    + "\" class=\"card-img-top fellow-card-img\">\n          </div>\n          <div class=\"card-body fellow-card-body\">\n            <h5 class=\"card-title fellow-card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":53},"end":{"line":22,"column":61}}}) : helper)))
    + "</h5>\n            <p class=\"card-text fellow-card-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"project") || (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data,"loc":{"start":{"line":23,"column":50},"end":{"line":23,"column":61}}}) : helper)))
    + "</p>\n            <div style=\"text-align: center\">\n              <a href=\"./fellowship_details.html?project="
    + alias4(((helper = (helper = lookupProperty(helpers,"data_url") || (depth0 != null ? lookupProperty(depth0,"data_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data_url","hash":{},"data":data,"loc":{"start":{"line":25,"column":57},"end":{"line":25,"column":69}}}) : helper)))
    + "\" class=\"btn-sm btn-primary binance-button\" style=\"text-align: center; font-size: 12px\">Details</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLast") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":33,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"row grow-row\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container-fluid fellowship-container\" style=\"padding: 20px;\">\n\n  <div style=\"font-size: 20px; font-weight: bold; margin: 10px 10px 10px 20px\">\n      Binance X Fellows\n  </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"everyNth")||(depth0 && lookupProperty(depth0,"everyNth"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fellows_array") : depth0),4,{"name":"everyNth","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
templates['fellowship_fellows_detail'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n		<div class=\"justify-content-center\" style=\"text-align: center; padding-top: 20px\">\n\n			<div class=\"justify-content-center\" style=\"text-align: center; padding: 0 40px\">\n				<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"youtube_url") || (depth0 != null ? lookupProperty(depth0,"youtube_url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"youtube_url","hash":{},"data":data,"loc":{"start":{"line":20,"column":312},"end":{"line":20,"column":327}}}) : helper)))
    + "' frameborder='0' allowfullscreen></iframe></div>\n			</div>\n		</div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		  <div style=\"margin-top:5px; font-weight: bold; font-style: italic\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fellow_name") || (depth0 != null ? lookupProperty(depth0,"fellow_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellow_name","hash":{},"data":data,"loc":{"start":{"line":36,"column":71},"end":{"line":36,"column":86}}}) : helper)))
    + "</div>\n		  <div style=\"margin-top:5px\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fellow_bio") || (depth0 != null ? lookupProperty(depth0,"fellow_bio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellow_bio","hash":{},"data":data,"loc":{"start":{"line":37,"column":32},"end":{"line":37,"column":46}}}) : helper)))
    + "</div>\n		  <div class='b-para'>\n			Follow "
    + alias4(((helper = (helper = lookupProperty(helpers,"fellow_name") || (depth0 != null ? lookupProperty(depth0,"fellow_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellow_name","hash":{},"data":data,"loc":{"start":{"line":39,"column":10},"end":{"line":39,"column":25}}}) : helper)))
    + " at: <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"social_media_url") || (depth0 != null ? lookupProperty(depth0,"social_media_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"social_media_url","hash":{},"data":data,"loc":{"start":{"line":39,"column":39},"end":{"line":39,"column":59}}}) : helper)))
    + "\" target=\"_new\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"social_media_handle") || (depth0 != null ? lookupProperty(depth0,"social_media_handle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"social_media_handle","hash":{},"data":data,"loc":{"start":{"line":39,"column":75},"end":{"line":39,"column":98}}}) : helper)))
    + "</a>\n		  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container-fluid fellowship-container justify-content-center\" style=\"	background-color: #ecf0f1;\n\">\n\n	<div class=\"container\" style=\"width: 90%; padding: 0px 0 40px 0\">\n\n		<div class=\"fellow-detail-breadcrumb\">\n		  <a href=\"./fellowship_fellows.html\"><i class=\"fas fa-chevron-left\"></i>&nbsp;Back</a>\n		</div>\n\n		<div>\n			<div style=\"font-size: 25px; font-weight: 700\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_name") || (depth0 != null ? lookupProperty(depth0,"project_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_name","hash":{},"data":data,"loc":{"start":{"line":11,"column":50},"end":{"line":11,"column":66}}}) : helper)))
    + "</div> \n			<div style=\"font-size: 18px;\">by "
    + alias4(((helper = (helper = lookupProperty(helpers,"fellow_names") || (depth0 != null ? lookupProperty(depth0,"fellow_names") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellow_names","hash":{},"data":data,"loc":{"start":{"line":12,"column":36},"end":{"line":12,"column":52}}}) : helper)))
    + "</div>\n		</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"youtube_url") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":24,"column":11}}})) != null ? stack1 : "")
    + "\n		<div style=\"margin-top: 30px; font-weight: bold; font-size: 18px\">\n			Project Description\n		</div>\n		<div style=\"margin-top: 5px;\">\n			"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"project_description") || (depth0 != null ? lookupProperty(depth0,"project_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_description","hash":{},"data":data,"loc":{"start":{"line":30,"column":3},"end":{"line":30,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n		<div style=\"margin: 20px 0 10px 0; font-weight: bold; font-size: 18px\">\n			Fellows\n		</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"fellows") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":2},"end":{"line":41,"column":11}}})) != null ? stack1 : "")
    + "\n	</div>\n\n</div>\n";
},"useData":true});
templates['fellowship_tabs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"padding: 10px 0 0px 40px; background-color: #2E2E2E\">\n  <nav aria-label=\"breadcrumb\" style=\"margin: 0 border: none; color: #FFF\">\n    <ol class=\"breadcrumb\" style=\"margin:0px; background-color: #2E2E2E; color: #FFF\">\n      <li class=\"breadcrumb-item\"><a href=\"./grow.html\">Grow</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Binance X Fellowship</li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container-fluid\" style=\"background-color: #2E2E2E; padding: 0px 50px 10px 50px; margin:0; \">\n\n  <div style=\"text-align: center; justify-content: center;\">\n    <div class=\"\" style=\"justify-content: center;\">\n      <img src=\"./static/binance-x-fellowship-white.svg\" style=\"max-width: 380px\">\n    </div>\n  </div>\n</div>\n\n<div style=\"background-color: #2E2E2E; margin:0; padding:0\">\n  <ul class=\"nav nav-tabs justify-content-center\" id=\"myTab\" role=\"tablist\" style=\"text-align: center;\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"fellowship_about_status") || (depth0 != null ? lookupProperty(depth0,"fellowship_about_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellowship_about_status","hash":{},"data":data,"loc":{"start":{"line":22,"column":36},"end":{"line":22,"column":63}}}) : helper)))
    + "\" href=\"./fellowship.html\">About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"fellowship_fellows_status") || (depth0 != null ? lookupProperty(depth0,"fellowship_fellows_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellowship_fellows_status","hash":{},"data":data,"loc":{"start":{"line":25,"column":36},"end":{"line":25,"column":65}}}) : helper)))
    + "\" href=\"./fellowship_fellows.html\">Fellows</a>\n    </li>\n    <li class=\"nav-item\" style=\"\">\n      <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = lookupProperty(helpers,"fellowship_apply_status") || (depth0 != null ? lookupProperty(depth0,"fellowship_apply_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellowship_apply_status","hash":{},"data":data,"loc":{"start":{"line":28,"column":36},"end":{"line":28,"column":63}}}) : helper)))
    + "\" href=\"./fellowship_apply.html\">Apply</a>\n    </li>\n  </ul>\n</div>";
},"useData":true});
templates['footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid\" style=\"color: #FFF; background-color: #0B0E11; padding: 40px 50px 0px 50px; justify-content: center;\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 bottom-col\">\n      <div>\n        <img src=\"static/binancex-logo.svg\" style=\"width: 160px; margin: -10px 0px 0 -5px; text-align: left; justify-content: left;\"></img>\n      </div>\n      <div style=\"\">\n        <a class=\"btn-sm btn-primary binance-button\" style=\"margin-top: 16px;\" href=\"https://forms.monday.com/forms/2e31c5aaf33ebb8489be3392459ab2bb\" target=\"_new\" role=\"button\">Sign up for XDN</a>\n      </div>\n\n    </div>\n\n    <div class=\"col-sm-3 bottom-col\">\n      <div class=\"bottom-right-menu\">\n        Menu\n      </div>\n      <div class=\"bottom-menu\">\n        <div class=\"bottom-menu-item\">\n          <a href=\"./index.html\">Home</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a href=\"./start.html\">Start</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a href=\"./collaborate.html\">Collaborate</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a href=\"./grow.html\">Grow</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-3 bottom-col\">\n      <div class=\"bottom-right-menu\">\n        Community\n      </div>\n      <div class=\"bottom-menu\">\n        <div class=\"bottom-menu-item\">\n          <a  href=\"https://twitter.com/binancex\" target=\"_new\"><i class=\"fab fa-twitter\" style=\"margin-right: 5px;\"></i>Twitter</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a  href=\"https://www.youtube.com/channel/UCG4-qn9_cmS5IoWLuYIWlrw\" target=\"_new\"><i class=\"fab fa-youtube\" style=\"margin-right: 5px;\"></i>Youtube</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a  href=\"https://github.com/binancex\" target=\"_new\"><i class=\"fab fa-github\" style=\"margin-right: 5px;\"></i>GitHub</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a  href=\"./blog.html\"><i class=\"fas fa-rss-square\" style=\"margin-right: 5px;\"></i>Blog</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n\n<div style=\"text-align: center; background-color: #0B0E11; font-size: 12px; padding: 40px 0; color: #76808F;\">\n    &copy; 2020 Binance.com All rights reserved\n</div>";
},"useData":true});
templates['nav'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #202020\">\n  <a class=\"navbar-brand\" href=\"./index.html\">\n    <img src=\"static/binancex-logo.svg\" style=\"width: 160px\"></img>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item "
    + alias4(((helper = (helper = lookupProperty(helpers,"home_status") || (depth0 != null ? lookupProperty(depth0,"home_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home_status","hash":{},"data":data,"loc":{"start":{"line":10,"column":26},"end":{"line":10,"column":41}}}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./index.html\"><i class=\"far fa-home-alt\"></i> <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = lookupProperty(helpers,"learn_status") || (depth0 != null ? lookupProperty(depth0,"learn_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"learn_status","hash":{},"data":data,"loc":{"start":{"line":13,"column":26},"end":{"line":13,"column":42}}}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./start.html\">Start</a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = lookupProperty(helpers,"collaborate_status") || (depth0 != null ? lookupProperty(depth0,"collaborate_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collaborate_status","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":48}}}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./collaborate.html\">Collaborate</a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = lookupProperty(helpers,"grow_status") || (depth0 != null ? lookupProperty(depth0,"grow_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grow_status","hash":{},"data":data,"loc":{"start":{"line":19,"column":26},"end":{"line":19,"column":41}}}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./grow.html\">Grow</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://twitter.com/binancex\" target=\"_new\"><i class=\"fab fa-twitter\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.youtube.com/channel/UCG4-qn9_cmS5IoWLuYIWlrw\" target=\"_new\"><i class=\"fab fa-youtube\"></i>\n</i></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/binancex\" target=\"_new\"><i class=\"fab fa-github\"></i></a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = lookupProperty(helpers,"blog_status") || (depth0 != null ? lookupProperty(depth0,"blog_status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blog_status","hash":{},"data":data,"loc":{"start":{"line":33,"column":26},"end":{"line":33,"column":41}}}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./blog.html\"><i class=\"fas fa-rss-square\"></i></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"btn-sm btn-primary binance-button header-btn\" href=\"https://www.binance.com/en/blog/421499824684900565/Introducing-Polaris-Become-a-Cryptoprenuer\" target=\"_new\" role=\"button\">Apply Now</a>\n      </li>\n    </ul>\n  </div>\n</nav>";
},"useData":true});
})();