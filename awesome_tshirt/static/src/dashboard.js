/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { Domain } from "@web/core/domain";
import { useService } from "@web/core/utils/hooks";
import { Card } from "./card/card";
const { Component, useSubEnv, useState,onWillStart } = owl;

class AwesomeDashboard extends Component {
    setup(){
        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            },
        });
        this.display = {
            controlPanel: { "top-right": false, "bottom-right": false },
        };

        this.action = useService("action");
        this.rpc=useService("rpc");
        this.keyToString={
            average_quantity:"Average amount of tshirt ordered this month",
            average_time:"Average time for an order to go from ‘new’ to ‘sent’ or ‘cancelled’",
            total_amount:"Total amount of new orders this month",
            nb_cancelled_orders:"Number of cancelled orders this month",
            nb_new_orders: "Number of new orders this month",
        };
        onWillStart(async () => {
            this.statistics = await this.rpc("/awesome_tshirt/statistics");
        });

    };
    openCustomerView() {
        this.action.doAction("base.action_partner_form");
    }
    openOrders(title, domain) {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: title,
            res_model: "awesome_tshirt.order",
            domain: new Domain(domain).toList(),
            views: [
                [false, "list"],
                [false, "form"],
            ],
        });
    }
    openLast7DaysOrders() {
        const domain =
            "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d'))]";
        this.openOrders(this.env._t("Last 7 days orders", domain));
    }

    openLast7DaysCancelledOrders() {
        const domain =
            "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d')), ('state','=', 'cancelled')]";
        this.openOrders(this.env._t("Last 7 days cancelled orders"), domain);
    }
};
AwesomeDashboard.components = {Layout,Card};
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
 