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
                            case "/translateBook": {
                                items = this._generateTranslateBook(request.body);
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
    _generateTranslateBook(item) {
        return [
            {
                command: 'translateBook',
                name: item.text
            }
        ];
    }
}
exports.default = SlackCommandWebhook;
//# sourceMappingURL=index.js.map