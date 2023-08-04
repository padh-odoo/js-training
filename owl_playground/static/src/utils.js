/** @odoo-module **/

import { onMounted, useRef } from "@odoo/owl";

export function useAutofocus(el) {
    const ref = useRef(el);
    onMounted(() => ref.el.focus());
}
