"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlackCommandWebhook {
    constructor({ helpers, options }) {
        this.options = {};
        this.webhooks = [
            {
                handler: (request) => {
                    let items = [{}];
                    if (request.body && request.body.command) {
                        const command = request.body.command;
                        switch (command) {
                            case "/createvpnaccount": {
                                items = this._generateCreateCustomerVpnAccount(request.body);
                                break;
                            }
                            case "/updatevpnconfig": {
                                items = this._generateUpdateVpnConfig(request.body);
                                break;
                            }
                            case "/updategithubuserclashyml": {
                                items = [{ command: 'updateGithubUserClashYml' }];
                                break;
                            }
                        }
                    }
                    return items;
                },
            },
        ];
        this.options = options;
        this.helpers = helpers;
    }
    _generateCreateCustomerVpnAccount(item) {
        return [
            {
                command: 'createCustomerVpnAccount',
                ID: item.text
            }
        ];
    }
    _generateUpdateVpnConfig(item) {
        return [
            {
                command: 'updateCustomerVpnConfig',
                ID: item.text || 'ALL'
            }
        ];
    }
}
exports.default = SlackCommandWebhook;
//# sourceMappingURL=index.js.map